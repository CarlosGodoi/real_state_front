const ourAchievementsData = [
    {
        id: 1,
        title: '3+ anos de excelência',
        content: 'Com mais de 3 anos no setor, acumulamos uma riqueza de conhecimento e experiência, tornando-nos um recurso indispensável para todos os assuntos imobiliários.',
    },
    {
        id: 2,
        title: 'Clientes satisfeitos',
        content: 'Nossa maior conquista é a satisfação de nossos clientes. Suas histórias de sucesso alimentam nossa paixão pelo que fazemos.',
    },
    {
        id: 3,
        title: 'Reconhecimento da Indústria',
        content: 'Conquistamos o respeito de nossos pares e líderes do setor, com elogios e prêmios que refletem nosso compromisso com a excelência.',
    }
]

export const OurAchievementsCards = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-8 mt-10 mobile_1:grid-cols-1 mobile_1:gap-4">
            {ourAchievementsData.map((card) => {
                return (
                    <div key={card.id} className="w-full h-full flex flex-col gap-2 border-[10px] border-gray_10 rounded-lg px-5 py-5">
                        <h2 className="text-secondary text-3xl font-semibold">{card.title}</h2>
                        <span className="text-gray_60 text-lg font-medium">{card.content}</span>
                    </div>
                )
            })}
        </div>
    )
}