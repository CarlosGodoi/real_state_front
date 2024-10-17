'use client'
import { ButtonDefault } from "@/components/buttonDefault";
import { InputDefault } from "@/components/inputDefault";
import SelectDefault from "@/components/selectDefault";
import { StarsBackground } from "@/components/starsBackground";
import { TextareaDefault } from "@/components/textAreaDefault";
import { numberOfBathooms } from "@/utils/selectOptions/bathrooms";
import { numberOfBedrooms } from "@/utils/selectOptions/bedrooms";
import { locations } from "@/utils/selectOptions/location";
import { priceMaxOptions } from "@/utils/selectOptions/priceMax";
import { typeImmobiles } from "@/utils/selectOptions/typeImmobile";
import { useForm } from "react-hook-form";
import { FormData, resolver, defaultValues } from "./schema";
import { useState } from "react";
import Loading from "@/components/loading";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const PropertyInterestForm = () => {
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const {
        handleSubmit,
        register,
        setValue, // usado para atualizar manualmente os valores dos selects
        formState: { errors },
        reset
    } = useForm<FormData>({ resolver, defaultValues });

    const onHandleSubmit = (data: FormData) => {
        if (!checked) {
            Swal.fire({
                title: 'Erro',
                text: 'É necessário aceitar os termos para envio do formulário.',
                icon: 'error',
                confirmButtonText: 'OK',
                background: '#1A1A1A',
                color: '#999999'
            });
            return;
        }

        setLoading(true);

        const simulatedApiRequest = (formData: FormData & { termsAccepted: boolean }) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(formData);
                }, 2000);
            });
        };

        simulatedApiRequest({ ...data, termsAccepted: checked })
            .then((response) => {
                toast("Formulário enviado com sucesso!", {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "success",
                    position: 'top-right',
                    theme: "colored",
                    style: { backgroundColor: '#7A00FF', color: '#fff' }
                });

                const result = response;
                console.log("Resultado do envio:", result);
            })
            .catch(() => {
                Swal.fire({
                    title: 'Erro',
                    text: 'Ocorreu um erro ao enviar o formulário.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    background: '#1A1A1A',
                    color: '#999999'
                });
            })
            .finally(() => {
                setLoading(false);
                reset()
            });
    };

    return (
        <div className="max-w-[1600px] w-full flex flex-col justify-center gap-3 mb-6 mobile_1:px-4">
            <StarsBackground />
            <div className="w-full flex flex-col gap-3">
                <h2 className="text-secondary text-5xl font-semibold mobile_1:text-center">Vamos fazer acontecer</h2>
                <span className="w-[80%] text-gray_60 text-lg font-medium mobile_1:text-center">
                    Pronto para dar o primeiro passo em direção ao imóvel dos seus sonhos? Preencha o formulário abaixo,
                    e nossos assistentes imobiliários farão sua mágica para encontrar o par perfeito.
                    Não espere; vamos embarcar juntos nesta emocionante jornada.
                </span>
            </div>
            <div className="w-full flex justify-center border border-gray_15 rounded-lg mt-6">
                <form
                    onSubmit={handleSubmit(onHandleSubmit)}
                    className="w-[85%] grid grid-cols-3 gap-7 p-20 mobile_1:grid-cols-1 mobile_1:p-4 mobile_1:w-full"
                >
                    <InputDefault
                        label="Primeiro nome"
                        placeholder="Digite o primeiro nome"
                        labelClassName="text-white"
                        register={register("firstName")}
                        helperText={errors.firstName?.message}
                    />
                    <InputDefault
                        label="Sobrenome"
                        placeholder="Digite seu sobrenome"
                        labelClassName="text-white"
                        register={register("lastName")}
                        helperText={errors.lastName?.message}
                    />
                    <InputDefault
                        label="Email"
                        placeholder="Digite seu e-mail"
                        labelClassName="text-white"
                        register={register("email")}
                        helperText={errors.email?.message}
                    />
                    <InputDefault
                        label="Telefone"
                        placeholder="Digite seu telefone"
                        labelClassName="text-white"
                        register={register("phone")}
                        helperText={errors.phone?.message}
                    />

                    <SelectDefault
                        placeholder="Selecione a localização"
                        options={locations}
                        label="Localização"
                        onChange={(value) => setValue("location", value)}
                    />
                    <SelectDefault
                        placeholder="Selecione tipo Imóvel"
                        options={typeImmobiles}
                        label="Tipo de imóvel"
                        onChange={(value) => setValue("typeProperty", value)}
                    />
                    <SelectDefault
                        placeholder="Selecione n° quartos"
                        options={numberOfBedrooms}
                        label="Quartos"
                        onChange={(value) => setValue("bedrooms", value)}
                    />
                    <SelectDefault
                        placeholder="Selecione n° banheiros"
                        options={numberOfBathooms}
                        label="Banheiros"
                        onChange={(value) => setValue("bathrooms", value)}
                    />

                    <SelectDefault
                        placeholder="Selecione orçamento"
                        options={priceMaxOptions}
                        label="Orçamento"
                        onChange={(value) => setValue("budget", value)}
                    />

                    <div className="col-span-3 mobile_1:col-span-1">
                        <TextareaDefault
                            label="Mensagem"
                            placeholder="Digite mais informações sobre o imóvel desejado."
                            register={register("message")}
                        />
                    </div>
                    <div className="grid col-span-2 mobile_1:col-span-1">
                        <div className="flex items-center gap-2">
                            <input
                                className="w-5 h-5 bg-gray_10 accent-purple_60"
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                            />
                            <span className="text-base text-gray_60 font-medium">
                                Concordo com os Termos de Uso e Política de Privacidade
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-end mobile_1:col-span-1">
                        <ButtonDefault variant="primary" type="submit" className="mobile_1:w-full">
                            {loading ? <Loading /> : "Enviar"}
                        </ButtonDefault>
                    </div>
                </form>
            </div>
        </div>
    );
};
