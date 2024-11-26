'use client'
import { ButtonDefault } from "@/components/buttonDefault"
import { InputDefault } from "@/components/inputDefault"
import SelectDefault from "@/components/selectDefault"
import { profileOptionsBuyer } from "@/utils/selectOptions/profile"
import { FormData, defaultValues, resolver } from "../schema"
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


export const SignUpForm = () => {
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
                router.push('/')
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

    const handlePhoneChange = (value: string | React.ChangeEvent<HTMLInputElement>) => {
        const phoneValue = typeof value === 'string' ? value : value.target.value;
        const formattedPhone = formatPhoneNumber(phoneValue);
        setValue("telefone", formattedPhone, { shouldValidate: true });
    };
    return (
        <div className="w-full flex flex-col justify-center items-center mt-16 gap-8 mobile_1:mt-6">
            <h2 className="text-secondary text-4xl font-semibold text-center">Cadastre-se</h2>
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
                    label="Perfil" options={profileOptionsBuyer}
                    placeholder="Selecione o perfil"
                    onChange={(value) => setValue("perfil", value as 'COMPRADOR')}
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
                    <ButtonDefault variant="primary" type="submit" className="mobile_1:w-full">{loading ? <Loading /> : 'Salvar'}</ButtonDefault>
                </div>
            </form>
        </div>
    )
}