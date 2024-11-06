'use client'

export const InformationCards = () => {
    const cards = [
        {
            title: '200+',
            content: 'Clientes satisfeitos'
        },
        {
            title: '10k+',
            content: 'Propriedades para clientes'
        },
        {
            title: '16+',
            content: 'Anos de experiência'
        },
    ];

    return (
        <div className="w-[70%] grid grid-cols-3 gap-2 mt-8 desktop:w-[90%] laptop:w-[80%] ipad:grid-cols-2 ipad:grid-rows-2 mobile_1:grid-cols-2 mobile_1:grid-rows-2 mobile_1:w-full notebook_13p:w-4/5">
            {cards.map((card, index) => (
                <div
                    key={card.title}
                    className={`flex flex-col gap-2 px-4 py-5 bg-gray_10 border border-gray_20 rounded-lg
                                    ${index === 2 ? 'ipad:col-span-2 ipad:w-full mobile_1:col-span-2 mobile_1:w-full' : 'w-full'}`}
                >
                    <h2 className="text-secondary text-2xl mobile_1:text-xl font-bold">{card.title}</h2>
                    <span className="text-gray_60 text-sm mobile_1:text-xs font-medium">{card.content}</span>
                </div>
            ))}
        </div>
    )
}