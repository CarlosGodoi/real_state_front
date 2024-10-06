'use client'
import { professionalData } from "@/utils/mocks/teamMock"
import { PaperPlaneTilt, TwitterLogo } from "@phosphor-icons/react"
import { useState } from "react"
import Swal from 'sweetalert2'
import Image from "next/image"
import Link from "next/link"

export const TeamCards = () => {
    const professionals = professionalData
    const [texts, setTexts] = useState<{ [key: number]: string }>({})

    const handleContact = (professionalName: string, professionalId: number) => {
        const text = texts[professionalId]?.trim()

        if (text) {
            Swal.fire({
                title: 'Mensagem enviada!',
                text: `Mensagem enviada para ${professionalName}: "${text}"`,
                icon: 'success',
                confirmButtonText: 'OK',
                background: '#1A1A1A',
                color: '#999999'
            })

            setTexts({ ...texts, [professionalId]: '' })
        } else {
            Swal.fire({
                title: 'Erro',
                text: 'Por favor, digite uma mensagem antes de enviar!',
                icon: 'error',
                confirmButtonText: 'OK',
                background: '#1A1A1A',
                color: '#999999'
            })
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, professionalId: number) => {
        setTexts({ ...texts, [professionalId]: e.target.value })
    }

    return (
        <div className="w-full grid grid-cols-4 gap-3 mt-10 mobile_1:grid-cols-1 ipad:grid-cols-2">
            {professionals.map((professional) => {
                return (
                    <div key={professional.id} className="max-w-[376px] w-full flex flex-col items-center gap-3 border border-gray_15 rounded-lg px-5 py-5">
                        <div className="relative w-full h-[250px] max-w-[315px]">
                            <Image
                                src={professional.image}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                                quality={100}
                                alt={`Imagem de ${professional.name}`}
                            />
                        </div>

                        <div className="w-[76px] h-[52px] flex items-center justify-center bg-purple_60 rounded-full absolute translate-y-[225px]">
                            <Link href='#' target="_blank">
                                <TwitterLogo weight="fill" color="#fff" size={30} />
                            </Link>
                        </div>

                        <div className="w-full flex flex-col items-center gap-2">
                            <h2 className="text-secondary text-2xl font-semibold mt-8">{professional.name}</h2>
                            <span className="text-gray_60 text-lg font-medium">{professional.position}</span>
                        </div>

                        <div className="w-full flex relative">
                            <input
                                type="text"
                                placeholder="Diga Olá 👋"
                                value={texts[professional.id]}
                                onChange={(e) => handleInputChange(e, professional.id)}
                                className="w-full bg-gray_10 h-[72px] text-gray_60 text-base font-medium pl-7 border border-gray_15 rounded-full border-transparent focus:border-purple_60 
                                focus:outline-none"
                            />
                            <button
                                type="button"
                                className="bg-purple_60 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer mobile_1:right-10 rounded-full p-2"
                                onClick={() => handleContact(professional.name, professional.id)}
                            >
                                <PaperPlaneTilt color="#fff" weight="fill" size={25} />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}