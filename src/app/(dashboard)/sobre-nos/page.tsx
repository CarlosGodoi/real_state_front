import { StarsBackground } from "@/components/starsBackground";
import { InformationCards } from "../home/components/cards/informationCards";
import homeImg from '../../../../public/assets/homeImg.png'
import Image from "next/image";
import { OurValuesCards } from "./components/cards/ourValuesCards";
import { OurAchievementsCards } from "./components/cards/ourAchievementsCars";
import { NavigationExperienceCards } from "./components/cards/navigationExperienceCards";
import { TeamCards } from "./components/teamCards";

export default function AboutUs() {
    return (
        <div className="w-full flex flex-col gap-10 items-center bg-gray_08 px-16 py-20">
            <section className=" w-full flex justify-between gap-4 mobile_1:flex-col-reverse">
                <div className="w-full flex flex-col justify-center gap-3">
                    <StarsBackground />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-secondary text-5xl font-semibold mobile_1:text-center">Nossa Jornada</h2>
                        <span className="w-[90%] text-gray_60 text-lg font-medium mobile_1:text-center">
                            Nossa história é de crescimento e evolução contínuos. Começamos como uma pequena equipe com grandes sonhos,
                            determinada a criar uma plataforma imobiliária que transcendesse o comum. Ao longo dos anos, ampliamos nosso alcance,
                            firmamos parcerias valiosas e conquistamos a confiança de inúmeros clientes.
                        </span>
                        <div className="flex w-full mobile_1:justify-center">
                            <InformationCards />
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[70vh] laptop:h-[60vh] mobile_1:h-[40vh] mobile_2:h-[40vh] bg-gray_08 bg-home_bg bg-cover border border-gray_15 rounded-md">
                    <Image
                        src={homeImg}
                        layout="fill"
                        objectFit="contain"
                        quality={100} alt="Imagem de homem segundo uma casa"
                    />
                </div>
            </section>
            <section className="w-full flex justify-between items-center gap-[80px] mt-8 bg-gray_08 py-20 mobile_1:flex-col mobile_1:gap-6">
                <div className="w-[50%] flex flex-col gap-3 mobile_1:w-full">
                    <StarsBackground />

                    <div className="flex flex-col gap-2 mobile_1:grid-cols-1">
                        <h2 className="text-secondary text-5xl font-semibold mobile_1:text-center">Nossos Valores</h2>
                        <span className="text-gray_60 text-lg font-medium mobile_1:text-center">
                            Nossa história é de crescimento e evolução contínuos.
                            Começamos como uma pequena equipe com grandes sonhos,
                            determinada a criar uma plataforma imobiliária que transcendesse o comum.
                        </span>
                    </div>
                </div>

                <OurValuesCards />

            </section>
            <section className="w-full flex flex-col justify-between">
                <StarsBackground />
                <div className="w-full flex flex-col gap-3 mt-6">
                    <h2 className="text-secondary text-5xl font-semibold mobile_1:text-center">Nossas conquistas</h2>
                    <span className="text-gray_60 text-lg font-medium mobile_1:text-center">
                        Nossa história é de crescimento e evolução contínuos. Começamos como uma pequena equipe com grandes sonhos,
                        determinada a criar uma plataforma imobiliária que transcendesse o comum.
                    </span>
                </div>

                <OurAchievementsCards />
            </section>
            <section className="w-full flex flex-col mt-16">
                <StarsBackground />
                <div className="w-full flex flex-col gap-3 mt-6">
                    <h2 className="text-secondary text-5xl font-semibold mobile_1:text-center">Navegue pela experiência Prestige</h2>
                    <span className="text-gray_60 text-lg font-medium mobile_1:text-center">
                        Na Prestige imobiliária, criamos um processo simples para ajudá-lo a encontrar e comprar a propriedade dos seus sonhos com facilidade.
                        Aqui está um guia passo a passo de como tudo funciona.
                    </span>
                </div>
                <NavigationExperienceCards />
            </section>

            <section className="w-full flex flex-col mt-16">
                <StarsBackground />
                <div className="w-full flex flex-col gap-3 mt-6">
                    <h2 className="text-secondary text-5xl font-semibold mobile_1:text-center">Conheça a equipe Prestige</h2>
                    <span className="text-gray_60 text-lg font-medium mobile_1:text-center">
                        Na Prestige, nosso sucesso é impulsionado pela dedicação e experiência de nossa equipe.
                        Conheça as pessoas por trás da nossa missão de tornar realidade os seus sonhos imobiliários.
                    </span>
                </div>
                <TeamCards />
            </section>
        </div>
    )
}