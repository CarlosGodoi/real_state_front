'use client'
import CardServices from "@/components/cards"
import { HandCoins, PaintBrushHousehold, SquaresFour, Sun } from "@phosphor-icons/react"

export default function EffortlessPropertyManagement() {
    const dataCards = [
        {
            id: 1,
            icon: <SquaresFour size={30} color="#7A00FF" weight="bold" />,
            title: 'Harmonia do Inquilino',
            content: 'Nossos serviços de gerenciamento de inquilinos garantem que seus inquilinos tenham uma situação tranquila e com redução de vagas.'
        },
        {
            id: 2,
            icon: <PaintBrushHousehold size={30} color="#7A00FF" weight="bold" />,
            title: 'Facilidade de manutenção',
            content: 'Diga adeus às dores de cabeça com manutenção de imóveis. Cuidamos de todos os aspectos da manutenção da propriedade.'
        },
        {
            id: 3,
            icon: <HandCoins size={30} color="#7A00FF" weight="fill" />,
            title: 'Tranquilidade Financeira',
            content: 'Gerenciar finanças imobiliárias pode ser complexo. Nossos especialistas financeiros cuidam da cobrança do aluguel.'
        },
        {
            id: 4,
            icon: <Sun size={30} color="#7A00FF" weight="fill" />,
            title: 'Guardião Legal',
            content: 'Mantenha-se em conformidade com as leis e regulamentos de propriedade sem esforço.'
        },
    ]
    return (
        <div className="w-full mt-10">
            <CardServices
                dataCards={dataCards}
                mainTitle="Gerenciamento de propriedade sem esforço"
                mainDescription="
            Possuir um imóvel deve ser um prazer, não um aborrecimento.
            O Serviço de Gestão de Propriedades da Estatein elimina o estresse da propriedade,
            oferecendo soluções abrangentes e adaptadas às suas necessidades.
            Explore as categorias abaixo para ver como podemos tornar o gerenciamento de propriedades mais fácil para você
            "
                ctaTitle="Experimente o gerenciamento de propriedades sem esforço"
                ctaContent="
            Pronto para experimentar o gerenciamento de propriedades sem complicações?
            Explore nossas categorias de serviços de gerenciamento de propriedades e
            deixe-nos lidar com as complexidades enquanto você aproveita os benefícios da propriedade.
            "
            />
        </div>
    )
}