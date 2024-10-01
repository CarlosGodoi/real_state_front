import { StaticImageData } from 'next/image';
import client1 from '../../../public/assets/avatar1.png'
import client2 from '../../../public/assets/avatar2.png'
import client3 from '../../../public/assets/avatar3.png'

interface IClient {
    id: number

    title: string;
    content: string;
    image: StaticImageData;
    name: string;
    location: string;
}

export const clientData: IClient[] = [
    {
        id: 1,
        title: 'Serviço excepcional!',
        content: 'Nossa experiência com a Prestige Imobiliária foi excelente. A dedicação e o profissionalismo da sua equipe tornaram muito fácil encontrar a casa dos nossos sonhos. Altamente recomendado!',
        image: client1,
        name: 'Wade Warren',
        location: 'USA, California',
    },
    {
        id: 2,
        title: 'Eficiente e confiável',
        content: 'Prestige Imobiliária nos forneceu um serviço de primeira linha. Eles nos ajudaram a vender nossa propriedade rapidamente e por um ótimo preço. Não poderíamos estar mais felizes com os resultados.',
        image: client2,
        name: 'Emelie Thomson',
        location: 'USA, Florida',
    },
    {
        id: 3,
        title: 'Consultores confiáveis',
        content: 'A equipe Prestige Imobiliária nos orientou durante todo o processo de compra. Seu conhecimento e comprometimento com nossas necessidades foram impressionantes. Obrigado pelo seu apoio!',
        image: client3,
        name: 'John Mans',
        location: 'USA, Nevada',
    },
];
