'use client'
import { ButtonDefault } from "@/components/buttonDefault"
import { InputDefault } from "@/components/inputDefault"
import SelectDefault from "@/components/selectDefault"
import { StarsBackground } from "@/components/starsBackground"
import { TextareaDefault } from "@/components/textAreaDefault"
import { numberOfBathooms } from "@/utils/selectOptions/bathrooms"
import { numberOfBedrooms } from "@/utils/selectOptions/bedrooms"
import { locations } from "@/utils/selectOptions/location"
import { priceMaxOptions } from "@/utils/selectOptions/priceMax"
import { typeImmobiles } from "@/utils/selectOptions/typeImmobile"

export const PropertyInterestForm = () => {
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
                <form className="w-[85%] grid grid-cols-3 gap-4 p-20 mobile_1:grid-cols-1 mobile_1:p-4 mobile_1:w-full">
                    <InputDefault label="Primeiro nome" placeholder="Digite o primeiro nome" labelClassName="text-white" />
                    <InputDefault label="Sobrenome" placeholder="Digite seu sobrenome" labelClassName="text-white" />
                    <InputDefault label="Email" placeholder="Digite seu e-mail" labelClassName="text-white" />
                    <InputDefault label="Telefone" placeholder="Digite seu telefone" labelClassName="text-white" />

                    <SelectDefault placeholder="Selecione a localização" options={locations} label="Localização" />
                    <SelectDefault placeholder="Selecione tipo Imóvel" options={typeImmobiles} label="Tipo de imóvel" />
                    <SelectDefault placeholder="Selecione n° quartos" options={numberOfBedrooms} label="Quartos" />
                    <SelectDefault placeholder="Selecione n° banheiros" options={numberOfBathooms} label="Banheiros" />

                    <SelectDefault placeholder="Selecione orçamento" options={priceMaxOptions} label="Orçamento" />

                    <div className="col-span-3 mobile_1:col-span-1">
                        <TextareaDefault label="Mensagem" placeholder="Digite mais informações sobre o imóvel desejado." />
                    </div>
                    <div className="grid col-span-2 mobile_1:col-span-1">
                        <div className="flex items-center gap-2">
                            <input className="w-5 h-5 bg-gray_10 accent-purple_60" type="checkbox" />
                            <span className="text-base text-gray_60 font-medium">Concordo com os Termos de Uso e Política de Privacidade</span>
                        </div>
                    </div>
                    <div className="flex justify-end mobile_1:col-span-1">
                        <ButtonDefault variant="primary" type="button" className="mobile_1:w-full">
                            Enviar
                        </ButtonDefault>
                    </div>
                </form>
            </div>



        </div>

    )
}