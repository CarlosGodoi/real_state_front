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
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useRequest } from './apiRequestContext';

export type TUser = {
    id: string;
    nome: string;
    email: string;
    perfil: ROLE;
};

interface IPropsSignin {
    email: string;
    senha: string;
    token?: string
    user?: TUser;
}

interface IAuthContext {
    user: TUser | null;
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
    const [user, setUser] = useState<TUser | null>(null);


    async function signIn(
        data: IPropsSignin
    ): Promise<{ status: boolean; message: string }> {
        const result = await apiRequest('post', '/api/login', { data })
            .then(({ data }) => {
                const { token, user } = data;

                if (token) {
                    localStorage.setItem('token', token);
                    setCookie('token', token, {
                        path: '/',
                        maxAge: 60 * 60 * 24,
                        sameSite: 'strict',
                    });
                }

                if (user) {
                    setUser(user);
                    console.log("Usuário retornado do login:", user);
                    setCookie('usuario', JSON.stringify(user), {
                        path: '/',
                        maxAge: 60 * 60 * 24,
                        sameSite: 'strict',
                    });
                }

                return { status: true, message: '' };
            })
            .catch((err) => {
                return { status: false, message: err.response?.data.error };
            });

        return result;
    }

    async function signOut() {
        setUser(null);
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
        if (user) {
            const updatedUser = { ...user, email, nome };
            setUser(updatedUser);
            setCookie('usuario', JSON.stringify(updatedUser), {
                path: '/',
                maxAge: 60 * 60 * 24,
                sameSite: 'strict',
            });
        }
    };


    useEffect(() => {
        const usuarioCookie = getCookie('usuario');
        if (usuarioCookie) {
            try {
                const parseUser = JSON.parse(usuarioCookie.toString()) as TUser;
                console.log("Usuário carregado do cookie:", parseUser);
                setUser(parseUser);
            } catch (error) {
                console.error("Erro ao fazer o parse do JSON do cookie:", error);
                setUser(null);
            }
        } else {
            console.log("Nenhum cookie de usuário encontrado no carregamento inicial.");
            setUser(null);
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
