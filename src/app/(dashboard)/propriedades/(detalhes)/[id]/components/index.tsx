'use client'
import { ButtonDefault } from "@/components/buttonDefault";
import { InputDefault } from "@/components/inputDefault";
import SelectDefault from "@/components/selectDefault";

import { statusOptions } from "@/utils/selectOptions/status";
import { typeContracts } from "@/utils/selectOptions/typeContract";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormData, defaultValues, resolver } from '../schema'
import { getImmobileById } from "@/services/immobiles/getById";
import { IImmobile } from "@/interfaces/getImmobiles";

interface IFormProps {
    imovelId: string;
}

export const PropertyEditForm = ({ imovelId }: IFormProps) => {
    const [immobile, setImmobile] = useState<IImmobile>()
    console.log('immobile =>', immobile);

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
        });
    }, [imovelId, setValue]);

    return (
        <div className="w-full flex justify-center p-6">
            <div className="max-w-[1600px] w-full grid grid-cols-3 gap-5 items-start border border-gray_15 rounded-lg p-16 mobile_1:grid-cols-1 mobile_1:p-5">
                <div className="col-span-1 h-[635px] border mobile_1:h-[280px]">
                    <img
                        src="/caminho-da-imagem.jpg"
                        alt="Imagem do Imóvel"
                        className="w-full h-full max-h-[600px] object-cover rounded-lg"
                    />
                </div>

                {/* Formulário */}
                <form className="col-span-2 grid grid-cols-2 gap-3 w-full mobile_1:grid-cols-1">
                    <InputDefault label="Área" labelClassName="text-secondary" register={register('area')} disabled />
                    <InputDefault label="Quartos" labelClassName="text-secondary" register={register('quantidadeQuartos')} disabled />
                    <InputDefault label="Banheiros" labelClassName="text-secondary" register={register('quantidadeBanheiros')} disabled />
                    <InputDefault label="Imóvel" labelClassName="text-secondary" value={'CASA'} disabled />
                    <InputDefault label="Valor" labelClassName="text-secondary" register={register('preco')} />
                    <SelectDefault label="Contrato" options={typeContracts} value={'VENDA'} />
                    <SelectDefault label="Status" options={statusOptions} value={'NEGOCIACAO'} />
                    <InputDefault label="Rua" labelClassName="text-secondary" register={register('endereco.rua')} disabled />
                    <InputDefault label="Bairro" labelClassName="text-secondary" register={register('endereco.bairro')} disabled />
                    <InputDefault label="Cidade" labelClassName="text-secondary" register={register('endereco.cidade')} disabled />
                    <InputDefault label="Número" labelClassName="text-secondary" register={register('endereco.numero')} disabled />
                    <InputDefault label="CEP" labelClassName="text-secondary" register={register('endereco.cep')} disabled />

                    <div className="col-span-2 flex justify-end mt-8 mobile_1:col-span-1">
                        <ButtonDefault variant="primary" className="mobile_1:w-full">Salvar</ButtonDefault>
                    </div>
                </form>
            </div>
        </div>
    );
};
