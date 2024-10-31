import { formatCurrency } from "@/utils/formatCurrency"

const MonthlyCosts = () => {
    return (
        <div className="flex flex-col flex-1 border border-gray_15 rounded-lg px-8 py-10">
            <h2 className="text-secondary text-2xl font-semibold">Custos Mensais</h2>

            <span className="border-b-2 border-gray_15 mt-8"></span>

            <div className="w-full flex items-center gap-3 mt-8 mobile_1:flex-col">
                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Taxa sobre a propriedade</span>
                    <div className="w-9/12 flex items-center gap-3 mobile_1:w-full mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(1250)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 mobile_1:rounded-lg mobile_1:h-auto mobile_1:flex-1">
                            Imposto predial mensal aproximado com base no preço de venda e taxas locais
                        </span>
                    </div>
                </div>
            </div>
            <span className="border-b-2 border-gray_15 mt-8"></span>
            <div className="w-full flex items-center gap-3 mt-8 mobile_1:flex-col">
                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Taxa de associação de proprietários</span>
                    <div className="w-9/12 flex items-center gap-3 mobile_1:w-full mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(300)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 mobile_1:rounded-lg mobile_1:h-auto mobile_1:flex-1">
                            Taxa mensal para manutenção e segurança de áreas comuns.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonthlyCosts