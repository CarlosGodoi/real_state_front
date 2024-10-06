'use client'
import { useEffect, useState } from "react";
import { ButtonDefault } from "@/components/buttonDefault";
import { Bathtub, Bed, Building } from "@phosphor-icons/react";
import { Pagination } from "@/components/pagination";
import { IImmobiles } from "@/interfaces/getImmobiles";
import { getAllImmobiles } from "@/services/immobiles/getAll";
import { StarsBackground } from "@/components/starsBackground";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";

export const FeaturedProperties = () => {
    const [immobiles, setImmobiles] = useState<IImmobiles[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [take, setTake] = useState(3);
    const [isMobile, setIsMobile] = useState(false);
    console.log('take =>', take);
    console.log('isMobile =>', isMobile);

    useEffect(() => {
        if (typeof window !== "undefined" && window.visualViewport) {
            const handleResize = () => {
                const screenWidth = window.visualViewport?.width;

                if (screenWidth) {
                    console.log('screenWidth:', screenWidth);
                    setIsMobile(screenWidth <= 768); // Define true se for mobile
                }
            };

            // Chama a função de resize imediatamente após o componente montar
            handleResize();

            // Adiciona o listener de resize para futuras alterações
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);



    useEffect(() => {
        if (isMobile) {
            setTake(1);
        } else {
            setTake(3);
        }
    }, [isMobile]);

    useEffect(() => {
        setCurrentPage(1);
    }, [take]);

    useEffect(() => {
        const fetchImmobiles = async () => {
            try {
                const skip = (currentPage - 1) * take;
                const data = await getAllImmobiles({ take, skip });
                setImmobiles(data.imoveis);
                setTotalPages(Math.ceil(data.total / take));
            } catch (error) {
                console.error("Erro ao buscar imóveis", error);
            }
        };

        fetchImmobiles();
    }, [currentPage, take]);

    useEffect(() => {
        console.log('isMobile =>', isMobile); // Verifica se isMobile está correto
        console.log('take =>', take); // Verifica se take é atualizado corretamente
    }, [take, isMobile]);


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 bg-gray_08 mt-2 px-4">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 pt-16">
                <StarsBackground />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-full flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-4xl font-semibold">Propriedades em Destaque</h2>
                        <span className="text-gray_60 text-lg font-medium mt-4">
                            Explore nossa seleção escolhida a dedo de propriedades em destaque. Cada listagem oferece uma visão geral de casas e investimentos excepcionais disponíveis através da Prestige Imobiliária. Clique em "Ver detalhes" para obter mais informações.
                        </span>
                    </div>
                    <div className="flex items-end mobile_1:mt-4">
                        <ButtonDefault className="w-[165px] mobile_1:w-full">Ver propriedades</ButtonDefault>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 w-full">
                    {immobiles.map((immobile) => (
                        <div key={immobile.id} className="bg-gray_08 border border-gray_15 p-5 rounded-md flex flex-col">
                            {/* Imagem */}
                            {immobile.ImageImovel && immobile.ImageImovel.length > 0 ? (
                                <Image
                                    src={immobile.ImageImovel[0].path}
                                    width={460}
                                    height={340}
                                    quality={100}
                                    alt="Foto de um Imóvel"
                                    className="w-full h-auto rounded-md"
                                />
                            ) : (
                                <div className="w-full h-[340px] flex justify-center items-center border border-gray_15 rounded-md">
                                    <span className="text-xl text-gray_60 font-medium text-center">
                                        Este imóvel não possui imagem
                                    </span>
                                </div>
                            )}

                            <div className="flex flex-col gap-3 mt-3">
                                <h2 className="text-secondary text-2xl font-semibold">{immobile.endereco.bairro}</h2>
                                <span className="text-gray_60 text-lg font-medium">
                                    A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More
                                </span>

                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                                    <span className="flex items-center gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1 justify-center w-auto">
                                        <Bed size={25} color="#fff" weight="fill" /> {immobile.quantidadeQuartos} Quartos
                                    </span>

                                    <span className="flex items-center gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1 justify-center w-auto">
                                        <Bathtub size={25} color="#fff" weight="fill" /> {immobile.quantidadeBanheiros} Banheiros
                                    </span>

                                    <span className="flex items-center gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1 justify-center sm:col-span-2 lg:col-span-1 w-auto">
                                        <Building size={25} color="#fff" weight="fill" /> {immobile.endereco.cidade}
                                    </span>
                                </div>



                                <div className="w-full flex items-center justify-between gap-8 mt-3 mobile_1:flex-col">
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="text-gray_60 text-lg font-medium">Preço</span>
                                        <span className="text-secondary text-2xl font-semibold">
                                            {formatCurrency(immobile.preco)}
                                        </span>
                                    </div>
                                    <ButtonDefault className="w-full" variant="primary">
                                        Ver detalhes do Imóvel
                                    </ButtonDefault>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
        </section>
    );
};
