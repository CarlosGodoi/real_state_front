'use client';
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import { ROLE } from '@/enums/profile';
import { useRouter } from 'next/navigation';
import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';
import { useRequest } from './apiRequestContext';

export type TUser = {
    id: string;
    nome: string;
    email: string;
    perfil: ROLE;
};

interface ISignInResponse {
    status: boolean;
    message: string;
    token?: string;
    usuario?: TUser;
}

interface IPropsSignin {
    email: string;
    senha: string;
    token?: string
    user?: TUser;
}

interface IAuthContext {
    user: TUser;
    signIn: (data: IPropsSignin) => Promise<{ status: boolean; message: string }>;
    signOut: VoidFunction;

    updateUserContext: ({ nome, email }: { nome: string; email: string }) => void;
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IProps> = ({ children }) => {
    const { apiRequest } = useRequest();
    const router = useRouter();
    const [user, setUser] = useState<TUser>({} as TUser);

    async function signIn(
        data: IPropsSignin
    ): Promise<ISignInResponse> {
        const result = await apiRequest('post', '/api/login', { data })
            .then(({ data }) => {
                const { token, user } = data;
                console.log("Token recuperado no backend:", getCookie(token ? token : ''));

                setCookie('token', token, {
                    path: '/', // Garante que o cookie seja acessível em todas as rotas
                    maxAge: 60 * 60 * 24, // Tempo de expiração (1 dia neste caso)
                    sameSite: 'strict', // Controle de acesso cross-site
                });

                if (user) setUser(user);

                return { status: true, message: '' };
            })
            .catch((err) => {
                return { status: false, message: err.response?.data.error };
            });

        return result;
    }

    async function signOut() {
        setUser({} as TUser);

        deleteCookie('token');
        deleteCookie('usuario');
        router.push('/');
    }

    const updateUserContext = ({
        nome,
        email,
    }: {
        nome: string;
        email: string;
    }) => {
        setUser({ ...user, email: email, nome: nome });
        setCookie('usuario', { ...user, email: email, nome: nome });
    };

    useEffect(() => {
        if (hasCookie('usuario')) {
            const usuario = getCookie('usuario')?.toString();
            if (usuario) {
                try {
                    const parseUser = JSON.parse(usuario) as TUser;
                    setUser(parseUser);
                } catch (error) {
                    console.error('Erro ao fazer o parse do JSON:', error);
                }
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, updateUserContext }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContext(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuthContext };
