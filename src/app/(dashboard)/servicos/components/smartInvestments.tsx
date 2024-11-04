'use client'
import { StarsBackground } from "@/components/starsBackground";
import { CellSignalMedium, Fire, Lightbulb, Sun } from "@phosphor-icons/react";

export default function SmartInvestments() {
    const dataCards = [
        {
            id: 1,
            icon: <CellSignalMedium size={30} color="#7A00FF" weight="bold" />,
            title: 'Visão de mercado',
            content: 'Fique à frente das tendências do mercado com nossa análise de mercado especializada. Fornecemos insights aprofundados sobre as condições do mercado imobiliário'
        },
        {
            id: 2,
            icon: <Fire size={30} color="#7A00FF" weight="bold" />,
            title: 'Avaliação de ROI',
            content: 'Tome decisões de investimento com confiança. Nossos serviços de avaliação de ROI avaliam o retorno potencial de seus investimentos.'
        },
        {
            id: 3,
            icon: <Lightbulb size={30} color="#7A00FF" weight="fill" />,
            title: 'Estratégias Personalizadas',
            content: 'Cada investidor é único e seus objetivos também. Desenvolvemos Estratégias de Investimento Personalizadas e adaptadas às suas necessidades específicas.'
        },
        {
            id: 4,
            icon: <Sun size={30} color="#7A00FF" weight="fill" />,
            title: 'Domínio da Diversificação',
            content: 'Diversifique seu portfólio imobiliário de forma eficaz. Nossos especialistas orientam você na distribuição de seus investimentos em vários tipos de propriedades e locais.'
        },
    ]
    return (
        <div className="w-full flex gap-3 mt-20 mobile_1:flex-col">
            <div className="max-w-[32.5%] w-full flex flex-col gap-8 mobile_1:max-w-full">
                <StarsBackground />
                <div className="flex flex-col">
                    <h2 className="text-secondary text-4xl font-semibold mobile_1:text-center">Investimentos inteligentes, decisões informadas</h2>
                    <p className="w-[90%] text-gray_60 text-lg font-medium mt-4 mobile_1:w-full mobile_1:text-center">
                        Construir um portfólio imobiliário requer uma abordagem estratégica.
                        O Serviço de Consultoria de Investimentos da Estatein permite que você faça investimentos inteligentes e tome decisões informadas.
                    </p>
                </div>

                <div className="flex flex-col min-h-52 h-auto col-span-2 bg-home_bg bg-cover bg-gray_10 px-6 py-8 rounded-lg mobile_1:col-span-1">
                    <h2 className="text-secondary text-3xl font-semibold">Desbloqueie seu potencial de investimento</h2>
                    <p className="text-gray_60 text-lg font-medium mt-5">
                        Explore nossas categorias de serviços de gerenciamento de propriedades
                        e deixe-nos lidar com as complexidades enquanto você aproveita os benefícios da propriedade.
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3 p-4 bg-gray_10 rounded-lg mobile_1:grid-cols-1">
                {dataCards.map((card) => (
                    <div key={card.id} className="flex flex-col min-h-52 h-auto bg-gray_08 border border-gray_15 rounded-lg p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center border border-purple_60 rounded-full p-2">
                                {card.icon}
                            </div>
                            <span className="text-secondary text-2xl font-semibold">{card.title}</span>
                        </div>
                        <p className="text-gray_60 text-lg font-medium mt-3">{card.content}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}