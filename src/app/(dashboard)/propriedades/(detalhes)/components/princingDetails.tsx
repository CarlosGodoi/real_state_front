import { StarsBackground } from "@/components/starsBackground"
import { formatCurrency } from "@/utils/formatCurrency"
import AddionalFees from "./cards/additionalFees"

interface IPricingDetailsProps {
    price: number
}

const PricingDetails = ({ price }: IPricingDetailsProps) => {
    return (
        <div className="w-full flex flex-col">
            <div className="w-4/5 flex flex-col gap-4">
                <StarsBackground />

                <h2 className="text-secondary text-4xl font-semibold">Detalhes abrangentes de preços</h2>
                <span className="text-gray_60 text-lg font-medium">
                    Na Prestige, a transparência é fundamental. Queremos que você tenha uma compreensão
                    clara de todos os custos associados ao seu investimento imobiliário.
                    Abaixo, detalhamos os preços referente ao imóvel para ajudá-lo a tomar uma decisão informada.
                </span>
            </div>

            <div className="w-full flex items-center gap-4 bg-gray_10 border border-gray_15 rounded-lg px-8 py-4 mt-14">
                <h3 className="text-secondary text-2xl font-semibold">Nota</h3>
                <span className="border-r-2 border-gray_20 h-9"></span>
                <p className="text-gray_60 text-lg font-medium">
                    Os números fornecidos acima são estimativas e podem variar dependendo da propriedade,
                    localização e circunstâncias individuais.
                </p>
            </div>

            <div className="w-full flex gap-12 mt-14">
                <div className="flex flex-col gap-3 max-w-[25%] w-full">
                    <p className="text-gray_60 text-xl font-medium">Listagem de preço</p>
                    <span className="text-secondary text-4xl font-semibold">{formatCurrency(price)}</span>
                </div>
                <AddionalFees />
            </div>
        </div>
    )
}

export default PricingDetails