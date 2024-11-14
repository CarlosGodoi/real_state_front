'use client'
import Loading from "@/components/loading"
import { IImmobile } from "@/interfaces/getImmobiles"
import { getImmobileById } from "@/services/immobiles/getById"
import { formatCurrency } from "@/utils/formatCurrency"
import { ArrowLeft, ArrowRight, MapPin, NotePencil } from "@phosphor-icons/react"
import { isAxiosError } from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DescriptionImmobileCard from "./descriptionImmobileCard"
import AdditionalsInformationsImmobile from "./additionalsInformationsImmobile"
import PricingDetails from "./princingDetails"

interface IPropertyDetailsProps {
    imovelId: string
}

export default function PropertyDetails({ imovelId }: IPropertyDetailsProps) {
    const [immobile, setImmobile] = useState<IImmobile>()
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter()

    // Number of images per page changes based on screen size
    const IMAGES_PER_PAGE = isMobile ? 1 : 2;

    useEffect(() => {
        // Check for mobile screen size on mount and window resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        getImmobileById(imovelId).then((resp) => {
            setLoading(true)
            setImmobile(resp?.data.imovel)
        }).catch((error) => {
            if (isAxiosError(error)) {
                console.error("Erro ao buscar os dados:", error.response?.data)
            } else {
                console.error("Erro inesperado:", error)
            }
        }).finally(() => setLoading(false))
    }, [imovelId])

    const goToNextImage = () => {
        if (immobile?.ImageImovel) {
            const totalPages = Math.ceil(immobile.ImageImovel.length / IMAGES_PER_PAGE);
            setCurrentPage(prev => (prev + 1) % totalPages);
        }
    };

    const goToPreviousImage = () => {
        if (immobile?.ImageImovel) {
            const totalPages = Math.ceil(immobile.ImageImovel.length / IMAGES_PER_PAGE);
            setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
        }
    };

    const getCurrentImages = () => {
        if (!immobile?.ImageImovel) return [];
        const startIndex = currentPage * IMAGES_PER_PAGE;
        return immobile.ImageImovel.slice(startIndex, startIndex + IMAGES_PER_PAGE);
    };

    const renderPageIndicators = () => {
        if (!immobile?.ImageImovel) return null;
        const totalPages = Math.ceil(immobile.ImageImovel.length / IMAGES_PER_PAGE);

        return Array.from({ length: totalPages }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
                <span
                    className={`w-5 border-b-4 font-semibold rounded-full ${index === currentPage ? 'border-purple_60' : 'border-gray-300'
                        }`}
                />
            </div>
        ));
    };

    return (
        <main className="w-full flex flex-col px-16 items-center mobile_1:p-4">
            <div className="w-full flex justify-between items-center mobile_1:flex-col mobile_1:items-start">
                <div className="flex items-center gap-4 mobile_1:w-full mobile_1:flex-col">
                    <h2 className="text-secondary text-2xl font-semibold">{immobile?.businessName}</h2>
                    <div className="flex items-center gap-2 border border-gray_15 rounded-lg px-2 py-1 mobile_1:flex-1">
                        <MapPin size={20} weight="fill" color="#fff" />
                        <span className="text-secondary text-base font-medium">{immobile?.endereco.bairro}</span>
                    </div>
                </div>
                <div className="flex flex-col mobile_1:mt-5">
                    <span className="text-gray_60 text-base font-medium">Valor:</span>
                    <span className="text-secondary text-2xl font-semibold">
                        {immobile?.preco ? formatCurrency(immobile?.preco) : null}
                    </span>
                </div>
            </div>

            <section className="w-full flex flex-col bg-gray_10 p-10 mt-8 mb-8 border border-gray_15 rounded-md mobile_1:p-4">
                <div
                    className="w-full sm:max-w-72 flex gap-2 bg-gray_08 justify-center items-center py-2 rounded-lg cursor-pointer mb-5"
                    onClick={() => router.push(`/propriedades/editar/${imovelId}`)}
                >
                    <span className="text-gray_60 text-lg font-medium">Editar dados do Imóvel</span>
                    <NotePencil
                        size={32}
                        weight="fill"
                        color="#999999"
                    />
                </div>

                <div className="w-full flex justify-between gap-3 px-8 py-8 bg-gray_08 rounded-md mobile_1:p-4">
                    <div className="flex max-w-full w-full gap-3 max-h-[583px] h-screen relative mobile_1:gap-0 mobile_1:h-72">
                        {loading ? (
                            <div className="w-full h-full flex justify-center items-center border border-gray_15 rounded-lg">
                                <Loading />
                            </div>
                        ) : immobile === undefined || immobile === null ? (
                            <div className="w-full h-full flex justify-center items-center border border-gray_15 rounded-lg">
                                <Loading />
                            </div>
                        ) : immobile?.ImageImovel && immobile.ImageImovel.length > 0 ? (
                            getCurrentImages().map((image, index) => (
                                <div
                                    key={`${currentPage}-${index}`}
                                    className={`relative border border-gray_15 rounded-lg ${isMobile ? 'w-full' : 'w-1/2'
                                        } h-full`}
                                >
                                    <Image
                                        src={image.path}
                                        alt={`Imagem do Imóvel ${currentPage * IMAGES_PER_PAGE + index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                        className="rounded-lg"
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full h-full border border-gray_15 rounded-lg">
                                <span className="text-gray_60 text-lg font-medium">Não há imagens cadastradas</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full flex justify-center items-center mt-8">
                    <div className="flex gap-3 bg-gray_08 p-2 rounded-full mobile_1:w-full mobile_1:justify-between">
                        <div
                            className="p-2 flex justify-center items-center bg-gray_10 border border-gray_15 rounded-full cursor-pointer"
                            onClick={goToPreviousImage}
                        >
                            <ArrowLeft size={20} color="#808080" />
                        </div>
                        <div className="flex gap-2">
                            {renderPageIndicators()}
                        </div>
                        <div
                            className="p-2 flex justify-center items-center bg-gray_10 border border-gray_15 rounded-full cursor-pointer"
                            onClick={goToNextImage}
                        >
                            <ArrowRight size={20} color="#808080" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-between mb-8 mobile_1:flex-col">
                <DescriptionImmobileCard
                    numberBedrooms={immobile?.quantidadeQuartos || 0}
                    numberBathrooms={immobile?.quantidadeBanheiros || 0}
                    areaTotal={immobile?.area || 0}
                    description={immobile?.description || ''}
                />
                <AdditionalsInformationsImmobile />
            </section>

            <section className="w-full flex-col justify-between mb-8">
                <PricingDetails price={immobile?.preco || 0} />
            </section>
        </main>
    )
}