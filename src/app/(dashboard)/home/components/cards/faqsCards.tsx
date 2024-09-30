
import { ButtonDeafult } from "@/components/buttonDefault"
import { Pagination } from "@/components/pagination"
import { faqs } from "@/utils/mocks/faqsMock"
import Image from "next/image"
import stars from "../../../../../../public/assets/StarsDesign.png"

export const FaqsCards = () => {
    const faqsData = faqs
    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 bg-gray_08 pb-8">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 mt-14">
                <Image src={stars} width={50} height={50} alt="Imagem de estrelas" />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-full flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-4xl font-semibold">Perguntas frequentes</h2>
                        <span className="text-gray_60 text-lg font-medium mt-2">Encontre respostas para perguntas comuns sobre os serviços do Real State, listagens de imóveis e o processo imobiliário. Estamos aqui para fornecer clareza e ajudá-lo em cada etapa do processo.</span>
                    </div>
                    <div className="flex items-end mobile_1:mt-4">
                        <ButtonDeafult className="w-[165px] mobile_1:w-full">Ver depoimentos</ButtonDeafult>
                    </div>
                </div>

                <div className="w-full flex justify-between gap-3 mt-4">
                    {faqsData.map((faq) => {
                        return (
                            <div key={faq.id} className="max-w-[532px] flex flex-col gap-3 justify-between bg-gray_08 border border-gray_15 px-8 py-8 rounded-md">

                                <div className="w-full flex flex-col gap-3 mt-4">
                                    <h2 className="text-secondary text-2xl font-semibold">{faq.title}</h2>
                                    <span className="text-gray_60 text-lg font-medium">{faq.content}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <Pagination />
            </div>


        </section>
    )
}