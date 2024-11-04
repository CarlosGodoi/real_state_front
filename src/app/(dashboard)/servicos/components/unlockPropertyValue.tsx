'use client'
import CardServices from "@/components/cards";
import { CellSignalMedium, ChartDonut, Coins, Megaphone } from "@phosphor-icons/react";

export default function UnlockPropertyValue() {
    const dataCards = [
        {
            id: 1,
            icon: <CellSignalMedium size={30} color="#7A00FF" weight="bold" />,
            title: 'Domínio de avaliação',
            content: 'Descubra o verdadeiro valor da sua propriedade com nossos serviços de avaliação especializados.'
        },
        {
            id: 2,
            icon: <ChartDonut size={30} color="#7A00FF" weight="bold" />,
            title: 'Marketing Estratégico',
            content: 'Vender um imóvel requer mais do que apenas uma listagem; exige uma abordagem estratégica de marketing.'
        },
        {
            id: 3,
            icon: <Coins size={30} color="#7A00FF" weight="fill" />,
            title: 'Magia de Negociação',
            content: 'Negociar o melhor negócio é uma arte e nossos especialistas em negociação são mestres nisso.'
        },
        {
            id: 4,
            icon: <Megaphone size={30} color="#7A00FF" weight="fill" />,
            title: 'Fechando Negócios',
            content: 'Uma venda bem-sucedida não é concluída até o fechamento. Nós o guiamos através do processo de fechamento.'
        },
    ]
    return (
        <CardServices
            dataCards={dataCards}
            mainTitle="Desbloqueie o valor da propriedade"
            mainDescription="
                Vender a sua propriedade deve ser uma experiência gratificante e, na Prestigie, garantimos que assim seja.
                Nosso serviço de venda de imóveis foi projetado para maximizar o valor do seu imóvel,
                garantindo que você obtenha o melhor negócio possível.
                Explore as categorias abaixo para ver como podemos ajudá-lo em cada etapa de sua jornada de vendas
                "
            ctaTitle="Desbloqueie o valor da sua propriedade hoje"
            ctaContent="
                    Pronto para descobrir o verdadeiro valor da sua propriedade?
                    Explore nossas categorias de serviços de venda de propriedades e deixe-nos ajudá-lo
                    a conseguir o melhor negócio possível para seu valioso ativo.
                "
        />
    )
}