import { ButtonDefault } from "@/components/buttonDefault";
import { InformationCards } from "./components/cards/informationCards";
import { BusinessCards } from "./components/cards/businessCards";
import Image from "next/image";
import mainImg from '../../../../public/assets/Image.png';
import { FeaturedProperties } from "./components/featuredProperties";
import { CustomerReportCards } from "./components/cards/cardsClients";
import { FaqsCards } from "./components/cards/faqsCards";

export default function Home() {
    return (
        <div className='w-full min-h-screen flex flex-col bg-gray_10'>
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
                        <ButtonDefault>Saiba mais</ButtonDefault>
                        <ButtonDefault variant="primary">Propriedades</ButtonDefault>
                    </div>

                    <InformationCards />
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

            <BusinessCards />

            <FeaturedProperties />

            <CustomerReportCards />

            <FaqsCards />
        </div>
    );
}
