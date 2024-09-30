'use client'
import Image from "next/image"
import stars from "../../../../../../public/assets/StarsDesign.png"
import { ButtonDeafult } from "@/components/buttonDefault"
import { Star } from "@phosphor-icons/react"
import { Pagination } from "@/components/pagination"
import { clientData } from "@/utils/mocks/clientsMock"

export const CustomerReportCards = () => {
    const clientsCards = clientData
    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 bg-gray_08">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 mt-14">
                <Image src={stars} width={50} height={50} alt="Imagem de estrelas" />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-full flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-4xl font-semibold">O que nossos clientes dizem</h2>
                        <span className="text-gray_60 text-lg font-medium mt-2">Leia as histórias de sucesso e depoimentos sinceros de nossos valiosos clientes. Descubra por que escolheram a Real State para suas necessidades imobiliárias.</span>
                    </div>
                    <div className="flex items-end mobile_1:mt-4">
                        <ButtonDeafult className="w-[165px] mobile_1:w-full">Ver depoimentos</ButtonDeafult>
                    </div>
                </div>

                <div className="w-full flex justify-between gap-3 mt-4">
                    {clientsCards.map((client) => {
                        return (
                            <div key={client.id} className="max-w-[532px] flex flex-col gap-3 justify-between bg-gray_08 border border-gray_15 px-8 py-8 rounded-md">
                                <div className="max-w-[230px] w-full flex gap-2 justify-between items-center">
                                    <div className="w-9 h-w-9 flex justify-center items-center bg-gray_10 border border-gray_15 p-2 rounded-full"><Star size={20} weight="fill" color="#FFE500" /></div>
                                    <div className="w-9 h-w-9 flex justify-center items-center bg-gray_10 border border-gray_15 p-2 rounded-full"><Star size={20} weight="fill" color="#FFE500" /></div>
                                    <div className="w-9 h-w-9 flex justify-center items-center bg-gray_10 border border-gray_15 p-2 rounded-full"><Star size={20} weight="fill" color="#FFE500" /></div>
                                    <div className="w-9 h-w-9 flex justify-center items-center bg-gray_10 border border-gray_15 p-2 rounded-full"><Star size={20} weight="fill" color="#FFE500" /></div>
                                    <div className="w-9 h-w-9 flex justify-center items-center bg-gray_10 border border-gray_15 p-2 rounded-full"><Star size={20} weight="fill" color="#FFE500" /></div>
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
                        )
                    })}

                </div>

                <Pagination />
            </div>


        </section>
    )
}