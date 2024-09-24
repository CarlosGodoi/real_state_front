'use client'

import Image from "next/image";
import mainImg from '../../../../public/assets/Image.png';
import { ButtonDeafult } from "@/components/buttonDefault";
import { ArrowUpRight, BuildingOffice, LockKeyOpen, Storefront, SunDim } from "@phosphor-icons/react";

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

const businessCard = [
    {
        logo: <Storefront size={20} color="#9533FF" />,
        content: 'Encontre a sua casa dos sonhos',
        icon: <ArrowUpRight size={30} color="#666666" />
    },
    {
        logo: <LockKeyOpen size={20} color="#9533FF" />,
        content: 'Desbloquear valor da propriedade',
        icon: <ArrowUpRight size={30} color="#666666" />
    },
    {
        logo: <BuildingOffice size={20} color="#9533FF" />,
        content: 'Gestão de propriedades sem esforço',
        icon: <ArrowUpRight size={30} color="#666666" />
    },
    {
        logo: <SunDim size={20} color="#9533FF" />,
        content: 'Investimentos inteligentes',
        icon: <ArrowUpRight size={30} color="#666666" />
    },
]

export default function Home() {
    return (
        <div className='w-full min-h-screen flex flex-col bg-gray_10 pb-2'>
            <section className="w-full flex flex-1 bg-gray_08 laptop:flex-col-reverse">
                <div className="w-full flex flex-col justify-center items-center gap-4 pt-16 laptop:mb-8">
                    <div className="w-[70%] flex flex-col gap-3 desktop:w-[90%] laptop:w-[80%] mobile_1:w-[90%]">
                        <h2 className="text-secondary text-4xl mobile_1:text-3xl font-semibold mobile_1:text-center">
                            Descubra o imóvel dos seus sonhos conosco!
                        </h2>
                        <span className="text-gray_60 text-lg mobile_1:text-base font-medium mobile_1:text-center">
                            Sua jornada para encontrar o imóvel perfeito começa aqui. Explore nossas listagens para encontrar a casa que combina com seus sonhos.
                        </span>
                    </div>

                    <div className="w-[70%] flex justify-start gap-3 mt-8 desktop:w-[90%] laptop:w-[80%]">
                        <ButtonDeafult>Saiba mais</ButtonDeafult>
                        <ButtonDeafult variant="primary">Propriedades</ButtonDeafult>
                    </div>

                    <div className="w-[70%] grid grid-cols-3 gap-2 mt-8 desktop:w-[90%] laptop:w-[80%] ipad:grid-cols-2 ipad:grid-rows-2 mobile_1:grid-cols-2 mobile_1:grid-rows-2">
                        {cards.map((card, index) => (
                            <div
                                key={card.title}
                                className={`flex flex-col justify-center gap-2 px-4 py-5 bg-gray_10 border border-gray_20 rounded-lg
                                    ${index === 2 ? 'ipad:col-span-2 ipad:w-full mobile_1:col-span-2 mobile_1:w-full' : 'w-full'}`}
                            >
                                <h2 className="text-secondary text-2xl mobile_1:text-xl font-bold">{card.title}</h2>
                                <span className="text-gray_60 text-sm mobile_1:text-xs font-medium">{card.content}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-full h-[100vh] laptop:h-[60vh] mobile_1:h-[40vh] mobile_2:h-[40vh] bg-gray_10 bg-home_bg bg-cover">
                    <Image
                        src={mainImg}
                        alt="Imagem de prédios"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </section>

            <section className="flex gap-2 bg-gray_08 mt-2 px-3 py-3">
                {businessCard.map((card) => {
                    return (
                        <div key={card.content} className="w-full flex flex-col justify-center items-center gap-3 p-4 bg-gray_10 border border-gray_20 rounded-lg">
                            <div className="w-full flex justify-end">{card.icon}</div>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="flex justify-center items-center p-2 rounded-full border border-purple_70">
                                    {card.logo}
                                </div>
                                <span className="text-secondary text-lg font-semibold">{card.content}</span>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}
