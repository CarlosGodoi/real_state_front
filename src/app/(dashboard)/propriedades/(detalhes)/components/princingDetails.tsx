import { StarsBackground } from "@/components/starsBackground"
import { formatCurrency } from "@/utils/formatCurrency"
import AddionalFees from "./cards/additionalFees"
import MonthlyCosts from "./cards/monthlyCosts"
import TotalInitialCosts from "./cards/totalInitialCosts"

interface IPricingDetailsProps {
    price: number
}

const PricingDetails = ({ price }: IPricingDetailsProps) => {
    return (
        <div className="w-full flex flex-col">
            <div className="w-4/5 flex flex-col gap-4 mobile_1:w-full">
                <StarsBackground />

                <h2 className="text-secondary text-4xl font-semibold mobile_1:text-center">Detalhes abrangentes de preços</h2>
                <span className="text-gray_60 text-lg font-medium mobile_1:text-center">
                    Na Prestige, a transparência é fundamental. Queremos que você tenha uma compreensão
                    clara de todos os custos associados ao seu investimento imobiliário.
                    Abaixo, detalhamos os preços referente ao imóvel para ajudá-lo a tomar uma decisão informada.
                </span>
            </div>

            <div className="w-full flex items-center gap-4 bg-gray_10 border border-gray_15 rounded-lg px-8 py-4 mt-14 mobile_1:flex-col mobile_1:items-start mobile_1:px-3">
                <h3 className="text-secondary text-2xl font-semibold mobile_1:mt-4 mobile_1:mb-[-20px]">Nota</h3>
                <span className="border-r-2 border-gray_20 h-9 mobile_1:border-b-2 mobile_1:w-full mobile_1:border-r-0"></span>
                <p className="text-gray_60 text-lg font-medium mobile_1:w-full">
                    Os números fornecidos acima são estimativas e podem variar dependendo da propriedade,
                    localização e circunstâncias individuais.
                </p>
            </div>

            <div className="w-full flex gap-12 mt-14 mobile_1:flex-col">
                <div className="flex flex-col gap-3 min-h-[12rem] h-auto self-start max-w-[15%] w-full mobile_1:max-w-full mobile_1:w-full mobile_1:justify-center">
                    <p className="text-gray_60 text-xl font-medium">Listagem de Valores</p>
                    <span className="text-secondary text-4xl font-semibold">{formatCurrency(price)}</span>
                </div>

                <div className="flex flex-1 flex-col gap-8">
                    <AddionalFees />
                    <MonthlyCosts />
                    <TotalInitialCosts />
                </div>
            </div>


        </div>
    )
}

export default PricingDetails