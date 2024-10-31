import { formatCurrency } from "@/utils/formatCurrency"

const AddionalFees = () => {
    return (
        <div className="flex flex-col flex-1 border border-gray_15 rounded-lg px-8 py-10">
            <h2 className="text-secondary text-2xl font-semibold">Taxas Adicionais</h2>

            <span className="border-b-2 border-gray_15 mt-8"></span>

            <div className="w-full flex justify-between items-center gap-3 mt-8 mobile_1:flex-col">
                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Taxa sobre transferência de propriedade</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(2500)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 flex-1 mobile_1:rounded-lg mobile_1:h-auto">
                            Base no preço de venda e nos regulamentos locais
                        </span>
                    </div>
                </div>

                <span className="border-l-2 border-gray_15 h-full mr-4 mobile_1:border-t-2 mobile_1:w-full mobile_1:border-l-0 mobile_1:mt-6"></span>

                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Taxas legais</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(3000)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 flex-1 mobile_1:rounded-lg mobile_1:h-auto">
                            Serviços jurídicos e transferência de título
                        </span>
                    </div>
                </div>
            </div>
            <span className="border-b-2 border-gray_15 mt-8"></span>
            <div className="w-full flex justify-between items-center gap-3 mt-8 mobile_1:flex-col">
                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Inspeção residencial</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(500)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 flex-1 mobile_1:rounded-lg mobile_1:h-auto">
                            Recomendado para realização da entrega do imóvel.
                        </span>
                    </div>
                </div>

                <span className="border-l-2 border-gray_15 h-full mr-4 mobile_1:border-t-2 mobile_1:w-full mobile_1:border-l-0 mobile_1:mt-6"></span>

                <div className="w-full flex flex-col gap-4 mobile_1:flex-col">
                    <span className="text-gray_60 text-lg font-medium">Seguro de propriedade</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">{formatCurrency(1200)}</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-4 py-2 flex-1 mobile_1:rounded-lg mobile_1:h-auto">
                            Custo anual para seguro de propriedade abrangente
                        </span>
                    </div>
                </div>
            </div>

            <span className="border-b-2 border-gray_15 mt-8"></span>

            <div className="w-full flex justify-between items-center gap-3 mt-8">
                <div className="w-3/6 flex flex-col gap-4 mobile_1:w-full">
                    <span className="text-gray_60 text-lg font-medium">Taxas de hipoteca</span>
                    <div className="flex items-center gap-3 mobile_1:flex-col mobile_1:items-start">
                        <p className="text-secondary text-2xl font-semibold">Varia</p>
                        <span className="text-gray_60 text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-3 py-2 mobile_1:rounded-lg mobile_1:h-auto mobile_1:flex-1">
                            Se aplicável, consulte seu credor para obter detalhes específicos.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddionalFees