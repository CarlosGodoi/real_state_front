'use client'
import Image from "next/image"
import { ButtonDefault } from "@/components/buttonDefault"
import { Star } from "@phosphor-icons/react"
import { Pagination } from "@/components/pagination"
import { clientData } from "@/utils/mocks/clientsMock"
import { useState, useEffect } from "react"
import { StarsBackground } from "@/components/starsBackground"

export const CustomerReportCards = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(3)


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

    const totalPages = Math.ceil(clientData.length / itemsPerPage)

    const displayedClients = clientData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 bg-gray_08 px-4">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 mt-14">
                <StarsBackground />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-full flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-5xl font-semibold">O que nossos clientes dizem</h2>
                        <span className="text-gray_60 text-lg font-medium mt-2">Leia as histórias de sucesso e depoimentos sinceros de nossos valiosos clientes. Descubra por que escolheram a Prestige Imobiliária para suas necessidades imobiliárias.</span>
                    </div>
                    <div className="flex items-end mobile_1:mt-4">
                        <ButtonDefault className="w-[165px] mobile_1:w-full">Ver depoimentos</ButtonDefault>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 w-full">
                    {displayedClients.map((client) => (
                        <div key={client.id} className="max-w-[532px] flex flex-col gap-3 justify-between bg-gray_08 border border-gray_15 px-8 py-8 rounded-md">
                            <div className="max-w-[230px] w-full flex gap-2 justify-between items-center">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-9 h-w-9 flex justify-center items-center bg-gray_10 border border-gray_15 p-2 rounded-full">
                                        <Star size={20} weight="fill" color="#FFE500" />
                                    </div>
                                ))}
                            </div>

                            <div className="w-full flex flex-col gap-3 mt-4">
                                <h2 className="text-secondary text-2xl font-semibold">{client.title}</h2>
                                <span className="text-gray_60 text-lg font-medium">{client.content}</span>
                            </div>

                            <div className="flex items-center gap-4 mt-3">
                                <div className="w-[60px] h-[60px] flex">
                                    <Image src={client.image} width={60} height={60} quality={100} alt="Foto de um cliente" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-secondary text-xl font-medium">{client.name}</span>
                                    <span className="text-gray_60 text-lg font-medium">{client.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>
        </section>
    )
}
