'use client'

import { ArrowUpRight, BuildingOffice, LockKeyOpen, Storefront, SunDim } from "@phosphor-icons/react";

export const BusinessCards = () => {
    const businessCard = [
        {
            logo: <Storefront size={20} color="#9533FF" />,
            content: 'Encontre a casa dos sonhos',
            icon: <ArrowUpRight size={30} color="#666666" />
        },
        {
            logo: <LockKeyOpen size={20} color="#9533FF" />,
            content: 'Desbloquear valor da propriedade',
            icon: <ArrowUpRight size={30} color="#666666" />
        },
        {
            logo: <BuildingOffice size={20} color="#9533FF" />,
            content: 'Gestão de propriedades',
            icon: <ArrowUpRight size={30} color="#666666" />
        },
        {
            logo: <SunDim size={20} color="#9533FF" />,
            content: 'Investimentos inteligentes',
            icon: <ArrowUpRight size={30} color="#666666" />
        },
    ];

    return (
        <section className=" grid grid-cols-1 gap-4 bg-gray_08 mt-2 px-3 py-6 mobile_1:grid-cols-2 ipad:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 xl:grid-cols-4">
            {businessCard.map((card) => {
                return (
                    <div key={card.content} className="w-full flex flex-col justify-center items-center gap-3 p-6 bg-gray_10 border border-gray_20 rounded-lg transition-all duration-300 ease-in-out">
                        <div className="w-full flex justify-end cursor-pointer" onClick={() => console.log('clicou')}>{card.icon}</div>
                        <div className="flex flex-col justify-center items-center gap-3 text-center">
                            <div className="flex justify-center items-center p-2 rounded-full border border-purple_70">
                                {card.logo}
                            </div>
                            <span className="text-secondary text-lg font-semibold">{card.content}</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
