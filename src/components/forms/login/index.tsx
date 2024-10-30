'use client'
import { ButtonDefault } from '@/components/buttonDefault';
import { InputDefault } from '@/components/inputDefault';
import { useAuthContext } from '@/context/authContext';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData, defaultValues, resolver } from './schema';
import { toast } from 'react-toastify';
import Loading from '@/components/loading';


export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuthContext();
    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({ resolver, defaultValues });

    const submitForm = async ({ email, senha }: FormData) => {
        setLoading(true);
        const { status } = await signIn({ email, senha });

        if (status === true) {
            toast("Login realizado!", {
                hideProgressBar: true,
                autoClose: 2000,
                type: "success",
                position: 'top-right',
                theme: "colored",
                style: { backgroundColor: '#7A00FF', color: '#fff' }
            });
            router.push("/home");
        } else {
            toast("Usuário ou senha inválidos!", {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error",
                position: "top-right",
                theme: "colored",
            });
        }
        setLoading(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col w-[700px] max-w-full gap-4 bg-[rgba(255,255,255,0.05)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
            backdrop-blur-[10px] rounded-[10px] border border-[rgba(255,255,255,0.18)] px-8 py-10 mt-8"
            role="form"

        >
            <h2 role="heading" className="text-purple_60 text-4xl text-center font-semibold mb-4 mobile_1:text-center">Faça seu Login</h2>

            <InputDefault
                label="Email"
                type="email"
                placeholder="Digite seu e-mail"
                register={register("email")}
                helperText={errors.email?.message}
            />

            <div className="relative w-full">
                <InputDefault
                    label="Senha"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    register={register("senha")}
                    helperText={errors.senha?.message}
                />
                <div className="absolute top-14 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                        <EyeOpenIcon width={25} height={25} color="#7a00ff" />
                    ) : (
                        <EyeClosedIcon width={25} height={25} color="#7a00ff" />
                    )}
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <ButtonDefault type="submit" className="mobile_1:w-full flex items-center justify-center h-12" variant="primary">
                    {loading ? <Loading /> : "Entrar"}
                </ButtonDefault>
            </div>
        </form>
    );
};
