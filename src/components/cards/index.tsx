import { StarsBackground } from "@/components/starsBackground";
import { ReactNode } from "react";

interface CardData {
    id: number;
    icon: ReactNode;
    title: string;
    content: string;
}

interface CardServicesProps {
    dataCards: CardData[];
    mainTitle: string;
    mainDescription: string;
    ctaTitle: string;
    ctaContent: string;
}

export default function CardServices({
    dataCards,
    mainTitle,
    mainDescription,
    ctaTitle,
    ctaContent,
}: CardServicesProps) {
    return (
        <div className="w-full flex flex-col gap-3 mt-5">
            <div className="w-full flex flex-col gap-3">
                <StarsBackground />
                <h2 className="text-secondary text-4xl font-semibold mobile_1:text-center">{mainTitle}</h2>
                <p className="w-[90%] text-gray_60 text-lg font-medium mobile_1:text-center mobile_1:w-full mobile_1:mt-4">
                    {mainDescription}
                </p>
            </div>

            <div className="w-full grid grid-cols-3 gap-5 mt-16 mobile_1:grid-cols-1">
                {dataCards.map((card) => (
                    <div key={card.id} className="flex flex-col min-h-52 h-auto border border-gray_15 rounded-lg p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center border border-purple_60 rounded-full p-2">
                                {card.icon}
                            </div>
                            <span className="text-secondary text-2xl font-semibold">{card.title}</span>
                        </div>
                        <p className="text-gray_60 text-lg font-medium mt-3">{card.content}</p>
                    </div>
                ))}
                <div className="flex flex-col min-h-52 h-auto col-span-2 bg-home_bg bg-cover bg-gray_10 px-6 py-8 rounded-lg mobile_1:col-span-1">
                    <h2 className="text-secondary text-3xl font-semibold">{ctaTitle}</h2>
                    <p className="text-gray_60 text-lg font-medium mt-5">{ctaContent}</p>
                </div>
            </div>
        </div>
    );
}
