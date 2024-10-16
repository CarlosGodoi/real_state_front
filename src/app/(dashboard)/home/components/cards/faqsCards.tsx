'use client'
import { ButtonDefault } from "@/components/buttonDefault"
import { Pagination } from "@/components/pagination"
import { faqs } from "@/utils/mocks/faqsMock"
import { useEffect, useState } from "react"
import { StarsBackground } from "@/components/starsBackground"

export const FaqsCards = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const faqsData = faqs


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(1)
            } else {
                setItemsPerPage(3)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const totalPages = Math.ceil(faqsData.length / itemsPerPage)

    const displayedFaqs = faqsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )
    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 bg-gray_08 pb-8 px-4">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 mt-14">
                <StarsBackground />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-[80%] flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-5xl font-semibold">Perguntas frequentes</h2>
                        <span className="text-gray_60 text-lg font-medium mt-2">Encontre respostas para perguntas comuns sobre os serviços do Prestige Imobiliária, listagens de imóveis e o processo imobiliário. Estamos aqui para fornecer clareza e ajudá-lo em cada etapa do processo.</span>
                    </div>
                    <div className="flex items-end mobile_1:mt-4">
                        <ButtonDefault className="w-[165px] mobile_1:w-full">Ver todas FAQs</ButtonDefault>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 w-full">
                    {displayedFaqs.map((faq) => {
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

                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>


        </section>
    )
}