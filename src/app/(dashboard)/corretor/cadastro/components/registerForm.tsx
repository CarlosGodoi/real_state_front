'use client'
import { ButtonDefault } from "@/components/buttonDefault"
import { InputDefault } from "@/components/inputDefault"
import SelectDefault from "@/components/selectDefault"
import { profileOptions } from "@/utils/selectOptions/profile"
import { FormData, defaultValues, resolver } from "../../schema"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useAuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { registerUsers } from "@/services/user/registerUsers"
import { toast } from "react-toastify"
import { isAxiosError } from "axios"
import Swal from "sweetalert2"
import Loading from "@/components/loading"
import { formatPhoneNumber } from "@/utils/phoneMask"


export const RegisterBrokerForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const isAuthenticated = useAuthContext();

    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        setValue,
    } = useForm<FormData>({
        resolver,
        defaultValues,
    });

    const onHandleSubmitForm = async (data: FormData) => {
        setLoading(true)
        const userPerfil = isAuthenticated.user?.perfil.toString();

        if (userPerfil !== 'ADMIN') {
            Swal.fire({
                title: 'Erro',
                text: 'Seu perfil não possui as permissões necessárias, para esta ação! Fale com um administrador.',
                icon: 'error',
                confirmButtonText: 'OK',
                background: '#1A1A1A',
                color: '#999999'
            });
            setLoading(false);
            reset()
            return;
        }
        registerUsers(data).then((res) => {
            if (res) {
                toast("Usuário cadastrado com sucesso!", {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "success",
                    position: 'top-right',
                    theme: "colored",
                    style: { backgroundColor: '#7A00FF', color: '#fff' }
                });
                router.push('/home')
            }
        }).catch((error) => {
            if (isAxiosError(error)) {
                console.error("Erro ao cadastrar usuário:", error.response?.data);
            } else {
                console.error("Erro inesperado:", error);
            }
            toast("Ocorreu erro ao tentar criar o usuário.", {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error",
                position: "top-right",
                theme: "colored",
            });
        }).finally(() => setLoading(false))
    }

    const handlePhoneChange = (value: string) => {
        const formattedPhone = formatPhoneNumber(value);
        setValue("telefone", formattedPhone, { shouldValidate: true });
    };

    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleSubmit(onHandleSubmitForm)} className="max-w-[1200px] w-full grid grid-cols-2 gap-3 p-16 mb-14 border border-gray_15 rounded-lg mobile_1:grid-cols-1 mobile_1:p-6">
                <InputDefault
                    label="Nome"
                    labelClassName="text-secondary"
                    placeholder="Digite o nome"
                    register={register('nome')}
                    helperText={errors.nome?.message}
                />
                <InputDefault
                    label="E-mail"
                    labelClassName="text-secondary"
                    placeholder="Digite o e-mail"
                    register={register('email')}
                    helperText={errors.email?.message}
                />
                <InputDefault
                    label="Telefone"
                    labelClassName="text-secondary"
                    placeholder="Digite o telefone"
                    register={register('telefone')}
                    onChangeValue={handlePhoneChange}
                    helperText={errors.telefone?.message}
                />
                <SelectDefault
                    label="Perfil" options={profileOptions}
                    placeholder="Selecione o perfil"
                    onChange={(value) => setValue("perfil", value as 'ADMIN' || 'CORRETOR' || 'COMPRADOR')}
                />
                <InputDefault
                    label="Senha"
                    type="password"
                    labelClassName="text-secondary"
                    placeholder="Digite a senha"
                    register={register('senha')}
                    helperText={errors.senha?.message}
                />
                <InputDefault
                    label="Confirmar Senha"
                    type="password"
                    labelClassName="text-secondary"
                    placeholder="Confirme a senha"
                    register={register('confirmarSenha')}
                    helperText={errors.confirmarSenha?.message}
                />

                <div className="col-span-2 flex justify-end mt-8 mobile_1:col-span-1">
                    <ButtonDefault variant="primary" type="submit" className="mobile_1:w-full">{loading ? <Loading /> : 'Cadastrar'}</ButtonDefault>
                </div>
            </form>
        </div>
    )
}