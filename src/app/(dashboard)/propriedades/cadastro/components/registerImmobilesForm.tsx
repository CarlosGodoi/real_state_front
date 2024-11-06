'use client'
import { ButtonDefault } from "@/components/buttonDefault"
import { DropzoneImage } from "@/components/dropzone"
import { InputDefault } from "@/components/inputDefault"
import SelectDefault from "@/components/selectDefault"
import { useAuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { FormData, defaultValues, resolver } from '../schema'
import { registerImmobile } from "@/services/immobiles/register"
import { upload } from "@/services/immobiles/upload"
import { toast } from "react-toastify"
import { numberOfBedrooms } from "@/utils/selectOptions/bedrooms"
import { numberOfBathooms } from "@/utils/selectOptions/bathrooms"
import { typeContracts } from "@/utils/selectOptions/typeContract"
import { typeImmobiles } from "@/utils/selectOptions/typeImmobile"
import { statusOptions } from "@/utils/selectOptions/status"
import Loading from "@/components/loading"
import { isAxiosError } from "axios"

export const RegisterImmobilesForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [baseImage, setBaseImage] = useState<string[]>([]);

    const [images, setImages] = useState<File[]>([]);
    const router = useRouter();
    const { user } = useAuthContext();

    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: { errors },
        control,
    } = useForm<FormData>({
        resolver,
        defaultValues,
    });

    const UploadImage = async (files: File[]) => {
        setImages(files);
        console.log('Arquivos de imagem recebidos:', files);
    };

    const role = "CORRETOR";

    const onSubmitCreateImmobile = async (data: FormData) => {
        setLoading(true);

        if (role && user.perfil) {
            registerImmobile({ ...data, images })
                .then((res) => {
                    const imovelId = res?.data?.id;
                    console.log(imovelId);

                    if (imovelId) {
                        upload(imovelId, images);
                        toast("Imóvel cadastrado com sucesso!", {
                            hideProgressBar: true,
                            autoClose: 2000,
                            type: "success",
                            position: 'top-right',
                            theme: "colored",
                            style: { backgroundColor: '#7A00FF', color: '#fff' }
                        });
                        router.push('/propriedades')
                    }
                })
                .catch((err) => {
                    if (isAxiosError(err)) {
                        console.error("Erro ao cadastrar imóvel:", err.response?.data);
                    } else {
                        console.error("Erro inesperado:", err);
                    }
                    toast("Ocorreu erro ao tentar criar o imóvel", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        type: "error",
                        position: "top-right",
                        theme: "colored",
                    });
                })
                .finally(() => setLoading(false));
        }
    };
    return (
        <div className="w-full flex justify-center mobile_1:p-4">
            <form onSubmit={handleSubmit(onSubmitCreateImmobile)} className="max-w-[1300px] w-full grid grid-cols-3 gap-3 border border-gray_15 rounded-lg p-20 mb-10 mobile_1:p-4 mobile_1:grid-cols-1">
                <InputDefault
                    label="Rua"
                    placeholder="Digite a rua"
                    labelClassName="text-secondary"
                    register={register("endereco.rua")}
                    helperText={errors.endereco?.rua?.message}
                />
                <InputDefault
                    label="Bairro"
                    placeholder="Digite o Bairro"
                    labelClassName="text-secondary"
                    register={register("endereco.bairro")}
                    helperText={errors.endereco?.bairro?.message}
                />
                <InputDefault
                    label="Cidade"
                    placeholder="Digite a cidade"
                    labelClassName="text-secondary"
                    register={register("endereco.cidade")}
                    helperText={errors.endereco?.cidade?.message}
                />
                <Controller
                    name="endereco.numero"
                    control={control}
                    render={({ field }) => (
                        <InputDefault
                            label="Número"
                            placeholder="Digite o número do imóvel"
                            labelClassName="text-secondary"
                            {...field}
                            value={field.value === null ? '' : field.value}
                            onChangeValue={(value) => field.onChange(value === "" ? null : Number(value))}
                            helperText={errors.endereco?.numero?.message}
                        />
                    )}
                />
                <InputDefault
                    label="CEP"
                    placeholder="Digite o CEP"
                    labelClassName="text-secondary"
                    register={register("endereco.cep")}
                    helperText={errors.endereco?.cep?.message}
                />
                <Controller
                    name="area"
                    control={control}
                    render={({ field }) => (
                        <InputDefault
                            label="Area"
                            placeholder="Digite a area do imóvel"
                            labelClassName="text-secondary"
                            {...field}
                            value={field.value === null ? '' : field.value}
                            onChangeValue={(value) => field.onChange(value === "" ? null : Number(value))}
                            helperText={errors.area?.message}
                        />
                    )}
                />
                <InputDefault
                    label="Valor"
                    placeholder="Digite o valor do imóvel"
                    labelClassName="text-secondary"
                    register={register("preco", {
                        setValueAs: (value) => value ? Number(value) : null,
                    })}
                    helperText={errors.preco?.message}
                />

                <SelectDefault
                    label="Quartos"
                    placeholder="N° de quartos"
                    options={numberOfBedrooms}
                    onChange={(value) => setValue("quantidadeQuartos", value ? Number(value) : null)}
                />
                <SelectDefault
                    label="Banheiros"
                    placeholder="N° de banheiros"
                    options={numberOfBathooms}
                    onChange={(value) => setValue("quantidadeBanheiros", value ? Number(value) : null)}
                />
                <SelectDefault
                    label="Contrato"
                    placeholder="Tipo de contrato"
                    options={typeContracts}
                    onChange={(value) => setValue("tipoContrato", value as 'VENDA' || 'ALUGUEL')}
                />
                <SelectDefault
                    label="Tipo Imóvel"
                    placeholder="Tipo de imóvel"
                    options={typeImmobiles}
                    onChange={(value) => setValue("tipoImovel", value as 'CASA' || 'APARTAMENTO')}
                />
                <SelectDefault
                    label="Status"
                    placeholder="Status imóvel"
                    options={statusOptions}
                    onChange={(value) => setValue("status", value as "NEGOCIACAO" | "VENDIDO" | "ALUGADO" | "PENDENTE")}
                />
                <div className="grid col-span-3 mobile_1:col-span-1">
                    <DropzoneImage
                        id="images"
                        name="images"
                        type="file"
                        onUploadImage={UploadImage}
                        onSetBaseImage={setBaseImage}
                    />
                </div>
                <div className="col-span-3 flex justify-end mt-8 mobile_1:mt-4 mobile_1:col-span-1">
                    <ButtonDefault variant="primary" type="submit" className="mobile_1:w-full">
                        {loading ? <Loading /> : 'Salvar'}
                    </ButtonDefault>
                </div>

            </form>
        </div>
    )
}