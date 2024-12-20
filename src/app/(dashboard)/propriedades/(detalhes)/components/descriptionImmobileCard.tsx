'use client'
import { Bathtub, Bed, Ruler } from "@phosphor-icons/react"

interface IDescriptionDataCardProps {
    numberBedrooms: number
    numberBathrooms: number
    areaTotal: number
    description: string
}

const DescriptionImmobileCard = ({ numberBedrooms, numberBathrooms, areaTotal, description }: IDescriptionDataCardProps) => {
    const descriptionCardData = [
        {
            icon: <Bed size={25} color="#fff" />,
            label: 'Quartos',
            value: numberBedrooms,
            suffix: ''
        },
        {
            icon: <Bathtub size={25} color="#fff" />,
            label: 'Banheiros',
            value: numberBathrooms,
            suffix: ''
        },
        {
            icon: <Ruler size={25} color="#fff" />,
            label: 'Área',
            value: areaTotal,
            suffix: 'm²'
        }
    ]

    const formatValue = (item: typeof descriptionCardData[0]) => {
        return `${item.value}${item.suffix}`
    }

    return (
        <div className="w-[48%] h-fit flex flex-col p-7 border border-gray_15 rounded-lg mobile_1:w-full">
            <h2 className="text-secondary text-2xl font-semibold">Descrição</h2>
            <span className="text-gray_60 text-lg font-semibold mt-4">
                {description}
            </span>

            <div className="w-full flex flex-col">
                <span className="w-full border-t-2 border-gray_15 mt-8"></span>

                <div className="w-full flex justify-between gap-3 mt-4 mobile_1:flex-col">
                    {descriptionCardData.map((card, index) => {
                        const isLastItem = index === descriptionCardData.length - 1
                        return (
                            <div
                                key={card.label}
                                className={`flex flex-1 flex-col p-4 ${!isLastItem ? 'border-r-2 border-gray_15 mobile_1:border-b-2 mobile_1:border-r-0' : ''} `}
                            >
                                <div className="flex items-center h-auto gap-2">
                                    <span className="text-gray_60">{card.icon}</span>
                                    <span className="text-gray_60">{card.label}</span>
                                </div>
                                <div className="w-full mt-3">
                                    <span className="text-secondary text-lg font-medium">
                                        {formatValue(card)}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DescriptionImmobileCard