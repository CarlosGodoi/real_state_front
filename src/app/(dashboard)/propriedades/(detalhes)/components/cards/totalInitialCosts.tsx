import { formatCurrency } from "@/utils/formatCurrency"

const TotalInitialCosts = () => {
    return (
        <div className="flex flex-col flex-1 border border-gray_15 rounded-lg px-8 py-10">
            <h2 className="text-secondary text-2xl font-semibold">Custos iniciais totais</h2>

            <span className="border-b-2 border-gray_15 mt-8"></span>

            <div className="w-full flex justify-between items-center gap-3 mt-8 mobile_1:flex-col">
                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Listagem de valores</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(1250)}</p>
                    </div>
                </div>

                <span className="border-l-2 border-gray_15 h-full mr-4 mobile_1:border-t-2 mobile_1:w-full mobile_1:border-l-0 mobile_1:mt-6"></span>

                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Taxas Adicionais</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(29700)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 flex-1 mobile_1:rounded-lg mobile_1:h-auto">
                            Taxa de transferência de propriedade e seguro
                        </span>
                    </div>
                </div>
            </div>
            <span className="border-b-2 border-gray_15 mt-8"></span>
            <div className="w-full flex justify-between items-center gap-3 mt-8 mobile_1:flex-col">
                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Pagamento inicial</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(25000)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 mobile_1:rounded-lg mobile_1:h-auto">
                            20%
                        </span>
                    </div>
                </div>

                <span className="border-l-2 border-gray_15 h-full mr-4 mobile_1:border-t-2 mobile_1:w-full mobile_1:border-l-0 mobile_1:mt-6"></span>

                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Valor da hipoteca</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(100000)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 mobile_1:rounded-lg mobile_1:h-auto">
                            Se aplicável
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalInitialCosts