import { StaticImageData } from 'next/image';
import founder from '../../../public/assets/founderImg.png'
import chief from '../../../public/assets/chiefOfficer.png'
import head from '../../../public/assets/headProperty.png'
import legal from '../../../public/assets/legaCounsel.png'

interface ITeam {
    id: number
    image: StaticImageData;
    name: string;
    position: string
}

export const professionalData: ITeam[] = [
    {
        id: 1,
        image: founder,
        name: 'Max Mitchell',
        position: 'Founder'
    },
    {
        id: 2,
        image: chief,
        name: 'Sarah Johnson',
        position: 'Chief Real Estate Officer'
    },
    {
        id: 3,
        image: head,
        name: 'David Brown',
        position: 'Head of Property Management'
    },
    {
        id: 4,
        image: legal,
        name: 'Raphaela Turner',
        position: 'Legal Counsel'
    },
];
