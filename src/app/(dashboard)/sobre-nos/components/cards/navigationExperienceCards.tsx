const navigationExperienceData = [
    {
        id: 1,
        label: 'Step 01',
        title: 'Descubra um mundo de possibilidades',
        content: 'Sua jornada começa explorando nossas listagens de propriedades cuidadosamente selecionadas. Use nossas ferramentas de pesquisa intuitivas para filtrar propriedades com base em suas preferências, incluindo localização, tipo, tamanho e orçamento.'
    },
    {
        id: 2,
        label: 'Step 02',
        title: 'Limitando suas escolhas',
        content: 'Depois de encontrar propriedades que chamam sua atenção, salve-as em sua conta ou faça uma lista. Isso permite que você compare e revisite seus favoritos enquanto toma sua decisão.'
    },
    {
        id: 3,
        label: 'Step 03',
        title: 'Orientação Personalizada',
        content: 'Tem dúvidas sobre um imóvel ou precisa de mais informações? Nossa equipe dedicada de especialistas imobiliários está a apenas uma ligação ou mensagem de distância.'
    },
    {
        id: 4,
        label: 'Step 04',
        title: 'Veja você mesmo',
        content: 'Organize visitas às propriedades nas quais você está interessado. Iremos coordenar com os proprietários e acompanhá-lo para garantir que você veja em primeira mão sua potencial nova casa.'
    },
    {
        id: 5,
        label: 'Step 05',
        title: 'Tomando decisões informadas',
        content: 'Antes de fazer uma oferta, nossa equipe irá ajudá-lo com a devida diligência, incluindo inspeções de propriedades, verificações legais e análises de mercado. Queremos que você esteja totalmente informado e confiante em sua escolha.'
    },
    {
        id: 6,
        label: 'Step 06',
        title: 'Obtendo o melhor negócio',
        content: 'Ajudaremos você a negociar as melhores condições e preparar sua oferta. Nosso objetivo é garantir o imóvel pelo preço certo e em condições favoráveis.'
    },
]

export const NavigationExperienceCards = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-6 mt-16 mobile_1:grid-cols-1">
            {navigationExperienceData.map((card) => {
                return (
                    <div key={card.id} className="w-full flex flex-col h-full">
                        <div className="w-full border-l-2 border-purple_60 p-2">
                            <span className="text-secondary text-lg font-medium">{card.label}</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 px-5 py-7 border border-gray_15 rounded-e-md bg-custom-gradient">
                            <h2 className="text-secondary text-2xl font-semibold">{card.title}</h2>
                            <span className="text-gray_60 text-lg font-medium">{card.content}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
