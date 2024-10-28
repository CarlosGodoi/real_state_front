'use client'
import { ButtonDefault } from "@/components/buttonDefault";
import { InputDefault } from "@/components/inputDefault";
import SelectDefault from "@/components/selectDefault";

import { statusOptions } from "@/utils/selectOptions/status";
import { typeContracts } from "@/utils/selectOptions/typeContract";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormData, defaultValues, resolver } from '../[id]/schema'
import { getImmobileById } from "@/services/immobiles/getById";
import { IImmobile } from "@/interfaces/getImmobiles";
import Image from "next/image";
import Loading from "@/components/loading";
import { isAxiosError } from "axios";
import { editImmobile } from "@/services/immobiles/edit";
import { useRouter } from "next/navigation";

interface IFormProps {
    imovelId: string;
}

export const PropertyEditForm = ({ imovelId }: IFormProps) => {
    const [immobile, setImmobile] = useState<IImmobile>()
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const srcImg =
        immobile?.ImageImovel && immobile.ImageImovel[0]
            ? `http://localhost:3334/${immobile.ImageImovel[0].path}`
            : "";

    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: { errors, isDirty },
        control,
    } = useForm<FormData>({
        resolver,
        defaultValues,
    });

    useEffect(() => {
        getImmobileById(imovelId).then((resp) => {
            setLoading(true)
            setImmobile(resp?.data.imovel);
            if (resp) {
                setValue("area", resp.data.imovel.area);
                setValue("quantidadeQuartos", resp.data.imovel.quantidadeQuartos);
                setValue("quantidadeBanheiros", resp.data.imovel.quantidadeBanheiros);
                setValue("preco", resp.data.imovel.preco);
                setValue("tipoContrato", resp?.data.imovel.tipoContrato);
                setValue("tipoImovel", resp?.data.imovel.tipoImovel);
                setValue("status", resp?.data.imovel.status);

                setValue("endereco.bairro", resp.data.imovel.endereco.bairro);
                setValue("endereco.rua", resp?.data.imovel.endereco.rua);
                setValue("endereco.numero", resp?.data.imovel.endereco.numero);
                setValue("endereco.cep", resp?.data.imovel.endereco.cep);
                setValue("endereco.cidade", resp?.data.imovel.endereco.cidade);
            }
        }).catch((error) => {
            if (isAxiosError(error)) {
                console.error("Erro ao buscar os dados:", error.response?.data);
            } else {
                console.error("Erro inesperado:", error);
            }
        }).finally(() =>
            setLoading(false)
        );
    }, [imovelId, setValue]);

    const onHandleEdit = async ({ preco, tipoContrato, status }: FormData) => {
        setLoading(true);

        try {
            await editImmobile(imovelId, { preco, tipoContrato, status });
            router.push("/propriedades");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="w-full flex justify-center p-6">
            <div className="max-w-[1600px] w-full grid grid-cols-3 gap-5 items-start border border-gray_15 rounded-lg p-16 mb-16 mobile_1:grid-cols-1 mobile_1:p-5">
                <div className="col-span-1 h-[635px] border border-gray_15 rounded-lg relative mobile_1:h-[280px] mobile_1:col-span-2">
                    {loading ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <Loading />
                        </div>
                    ) : immobile === undefined || immobile === null ? (
                        // Ainda está carregando os dados do imóvel
                        <div className="w-full h-full flex justify-center items-center">
                            <Loading />
                        </div>
                    ) : immobile.ImageImovel && immobile.ImageImovel.length > 0 ? (
                        // Tem imagem
                        <Image
                            src={srcImg}
                            alt="Imagem do Imóvel"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="rounded-lg"
                        />
                    ) : (
                        // Não tem imagem
                        <div className="w-full h-full flex justify-center items-center">
                            <span className="text-gray_60 text-lg font-medium">
                                Este imóvel não possui imagem
                            </span>
                        </div>
                    )}
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit(onHandleEdit)} className="col-span-2 grid grid-cols-2 gap-3 w-full mobile_1:grid-cols-1">
                    <InputDefault
                        label="Área"
                        labelClassName="text-secondary"
                        register={register('area')}
                        disabled
                    />
                    <InputDefault
                        label="Quartos"
                        labelClassName="text-secondary"
                        register={register('quantidadeQuartos')}
                        disabled
                    />
                    <InputDefault
                        label="Banheiros"
                        labelClassName="text-secondary"
                        register={register('quantidadeBanheiros')}
                        disabled
                    />
                    <InputDefault
                        label="Imóvel"
                        labelClassName="text-secondary"
                        register={register('tipoImovel')}
                        disabled
                    />
                    <InputDefault
                        label="Valor"
                        labelClassName="text-secondary"
                        register={register('preco', {
                            setValueAs: (value) => Number(value)
                        })}
                    />
                    <SelectDefault
                        label="Contrato"
                        options={typeContracts}
                        onChange={(value) => setValue("tipoContrato", value as 'VENDA' || 'ALUGUEL')} />
                    <SelectDefault
                        label="Status"
                        options={statusOptions}
                        onChange={(value) => setValue("status", value as "NEGOCIACAO" | "VENDIDO" | "ALUGADO" | "PENDENTE")} />
                    <InputDefault
                        label="Rua"
                        labelClassName="text-secondary"
                        register={register('endereco.rua')}
                        disabled
                    />
                    <InputDefault
                        label="Bairro"
                        labelClassName="text-secondary"
                        register={register('endereco.bairro')}
                        disabled
                    />
                    <InputDefault
                        label="Cidade"
                        labelClassName="text-secondary"
                        register={register('endereco.cidade')}
                        disabled
                    />
                    <InputDefault
                        label="Número"
                        labelClassName="text-secondary"
                        register={register('endereco.numero')}
                        disabled
                    />
                    <InputDefault
                        label="CEP"
                        labelClassName="text-secondary"
                        register={register('endereco.cep')}
                        disabled
                    />

                    <div className="col-span-2 flex justify-end gap-3 mt-8 mobile_1:col-span-1">
                        <ButtonDefault type="button" className="mobile_1:w-full" onClick={() => router.push(`/propriedades/${imovelId}`)}>Voltar</ButtonDefault>
                        <ButtonDefault type="submit" variant="primary" className="mobile_1:w-full">{loading ? <Loading /> : 'Salvar'}</ButtonDefault>
                    </div>
                </form>
            </div>
        </div>
    );
};
