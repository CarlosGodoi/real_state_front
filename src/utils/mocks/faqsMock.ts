interface IFaqs {
    id: number
    title: string
    content: string
}

export const faqs: IFaqs[] = [
    {
        id: 1,
        title: 'Como procuro imóveis no Prestige Imobiliária?',
        content: 'Aprenda como usar nossas ferramentas de pesquisa fáceis de usar para encontrar propriedades que correspondam aos seus critérios.'
    },
    {
        id: 2,
        title: 'Que documentos preciso para vender o meu imóvel através do Estatein?',
        content: 'Informe-se sobre a documentação necessária para anunciar o seu imóvel connosco.'
    },
    {
        id: 3,
        title: 'Como posso entrar em contato com um agente imobiliário?',
        content: 'Descubra as diferentes maneiras de entrar em contato com nossos agentes experientes.'
    },
]