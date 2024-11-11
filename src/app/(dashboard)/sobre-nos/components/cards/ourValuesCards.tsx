'use client'
import { GraduationCap, Handshake, Star, UsersFour } from "@phosphor-icons/react"

export const OurValuesCards = () => {
    const valuesCardsData = [
        {
            id: 1,
            icon: <Star size={30} weight="fill" color="#7A00FF" />,
            title: 'Confiar',
            content: 'A confiança é a base de toda transação imobiliária bem-sucedida.'
        },
        {
            id: 2,
            icon: <GraduationCap size={30} weight="fill" color="#7A00FF" />,
            title: 'Excelência',
            content: 'Colocamos nivéis altos para nós mesmos. Desde os imóveis que listamos até aos serviços que prestamos.'
        },
        {
            id: 3,
            icon: <UsersFour size={30} weight="fill" color="#7A00FF" />,
            title: 'Centrado no cliente',
            content: 'Seus sonhos e necessidades estão no centro do nosso universo. Nós ouvimos, entendemos.'
        },
        {
            id: 4,
            icon: <Handshake size={30} weight="fill" color="#7A00FF" />,
            title: 'Nosso Compromisso',
            content: 'Estamos empenhados em fornecer a você o mais alto nível de serviço, profissionalismo e suporte.'
        },
    ]

    return (
        <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 rounded-md border border-gray_15 shadow-lg shadow-gray_30 px-6 py-6 sm:px-10 sm:py-10 relative">

            {valuesCardsData.map((card) => (
                <div
                    key={card.id}
                    className="flex flex-col gap-3 p-5 border border-gray_15 rounded-md"
                >
                    <div className="flex items-center gap-2 ">
                        <div className="flex justify-center items-center p-2 border border-purple_60 rounded-full">
                            {card.icon}
                        </div>
                        <h2 className="text-2xl text-secondary font-semibold">{card.title}</h2>
                    </div>
                    <span className="text-lg text-gray_60 font-medium">{card.content}</span>
                </div>
            ))}
        </div>
    )
}
