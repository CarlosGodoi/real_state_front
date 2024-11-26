'use client'
import { ButtonDefault } from "@/components/buttonDefault"
import { DropzoneImage } from "@/components/dropzone"
import { InputDefault } from "@/components/inputDefault"
import SelectDefault from "@/components/selectDefault"
import { useAuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { FormData, defaultValues, resolver } from '../schema'
import { registerImmobile } from "@/services/immobiles/register"
import { uploadImages } from "@/services/immobiles/upload"
import { toast } from "react-toastify"
import { numberOfBedrooms } from "@/utils/selectOptions/bedrooms"
import { numberOfBathooms } from "@/utils/selectOptions/bathrooms"
import { typeContracts } from "@/utils/selectOptions/typeContract"
import { typeImmobiles } from "@/utils/selectOptions/typeImmobile"
import { statusOptions } from "@/utils/selectOptions/status"
import Loading from "@/components/loading"
import { TextAreaDefault } from "@/components/textAreaDefault"
import { maskCep } from "@/utils/cepMask"
import { maskPrice } from "@/utils/maskPrice"

export const RegisterImmobilesForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [baseImage, setBaseImage] = useState<string[]>([]);
    const [images, setImages] = useState<File[]>([]);
    const router = useRouter();
    const { user } = useAuthContext();

    console.log(baseImage);


    const {
        handleSubmit,
        register,
        setValue,
        reset,
        watch,
        formState: { errors },
        control,
    } = useForm<FormData>({
        resolver,
        defaultValues,
    });

    const UploadImage = async (files: File[]) => {
        setImages(files);
    };

    const role = "CORRETOR";

    const onSubmitCreateImmobile = async (data: FormData) => {
        setLoading(true);

        if (role && user?.perfil) {
            try {
                const imovelId = await registerImmobile({ ...data, images });

                if (imovelId) {
                    if (images.length > 0) {
                        await uploadImages(imovelId, images);
                    }

                    toast("Imóvel cadastrado com sucesso!", {
                        hideProgressBar: true,
                        autoClose: 2000,
                        type: "success",
                        position: "top-right",
                        theme: "colored",
                        style: { backgroundColor: "#7A00FF", color: "#fff" },
                    });

                    reset(defaultValues); // Reseta o formulário para valores padrões
                    setValue("quantidadeQuartos", null); // Reseta o valor do select "Quartos"
                    setValue("quantidadeBanheiros", null); // Reseta o valor do select "Banheiros"
                    setValue("tipoContrato", ''); // Reseta o valor do select "Contrato"
                    setValue("tipoImovel", ''); // Reseta o valor do select "Tipo Imóvel"
                    setValue("status", ''); // Reseta o valor do select "Status"

                    router.push("/propriedades");
                }
            } catch (error) {
                console.error("Erro ao cadastrar ou fazer upload do imóvel:", error);

                toast("Você não possui permissão para esta ação! Fale com um corretor.", {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: "error",
                    position: "top-right",
                    theme: "colored",
                });
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        console.log("Watched Value (preco):", watch("preco")); // Valor bruto no estado
    }, [watch("preco")]);



    return (
        <div className="w-full flex justify-center mobile_1:p-4">
            <form onSubmit={handleSubmit(onSubmitCreateImmobile)} className="max-w-[1100px] w-full grid grid-cols-2 gap-3 border border-gray_15 rounded-lg p-20 mb-10 mobile_1:p-4 mobile_1:grid-cols-1">
                <InputDefault
                    label="Empreendimento"
                    placeholder="Digite o nome do empreendimento"
                    labelClassName="text-secondary"
                    register={register("businessName")}
                    helperText={errors.businessName?.message}
                />
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
                    value={maskCep(watch("endereco.cep"))} // Aplica a máscara ao valor exibido
                    onChangeValue={(value) => {
                        const numericValue = String(value).replace(/\D/g, ''); // Remove tudo que não for número
                        setValue("endereco.cep", numericValue); // Atualiza o valor bruto sem a máscara
                    }}
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
                        setValueAs: (value) => {
                            if (!value) return null;
                            const stringValue = typeof value === "string" ? value : String(value);
                            const rawValue = stringValue.replace(/\D/g, ""); // Remove caracteres não numéricos
                            return rawValue ? parseInt(rawValue, 10) : null; // Retorna número inteiro
                        },
                    })}
                    onChangeValue={(value) => {
                        const stringValue = typeof value === "string" ? value : String(value || ""); // Garante string
                        const rawValue = stringValue.replace(/\D/g, ""); // Remove caracteres não numéricos
                        setValue("preco", +rawValue); // Atualiza o valor bruto no formulário
                        console.log("Raw Value:", rawValue);
                    }}
                    value={maskPrice(watch("preco"))} // Aplica a máscara
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
                <div className="col-span-2 mobile_1:col-span-1">
                    <TextAreaDefault
                        label="Descrição"
                        placeholder="Digite a descrição do imóvel"
                        register={register('description')}
                    />
                </div>
                <div className="col-span-2 mobile_1:col-span-1">
                    <DropzoneImage
                        id="images"
                        name="images"
                        type="file"
                        onUploadImage={UploadImage}
                        onSetBaseImage={setBaseImage}
                    />
                </div>
                <div className="col-span-2 flex justify-end mt-8 mobile_1:mt-4 mobile_1:col-span-1">
                    <ButtonDefault variant="primary" type="submit" className="mobile_1:w-full">
                        {loading ? <Loading /> : 'Salvar'}
                    </ButtonDefault>
                </div>
            </form>

        </div>
    )
}
