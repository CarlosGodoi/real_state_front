'use client';
import { ButtonDefault } from "@/components/buttonDefault";
import Loading from "@/components/loading";
import { Pagination } from "@/components/pagination";
import { StarsBackground } from "@/components/starsBackground";
import { useImmobilesContext } from "@/context/immobilesContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { Bathtub, Bed, Building } from "@phosphor-icons/react";
import Image from "next/image";

import { useEffect, useState } from "react";

export const ListProperties = () => {
    const { immobiles, loading, error } = useImmobilesContext();
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [take, setTake] = useState(6);
    const [isMobile, setIsMobile] = useState(false);

    // Detectando se é mobile para ajustar a quantidade de itens por página
    useEffect(() => {
        if (typeof window !== "undefined" && window.visualViewport) {
            const handleResize = () => {
                const screenWidth = window.visualViewport?.width;

                if (screenWidth) {
                    setIsMobile(screenWidth <= 768);
                }
            };

            handleResize();
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    // Ajusta o número de itens por página com base no estado "isMobile"
    useEffect(() => {
        setTake(isMobile ? 1 : 6);
    }, [isMobile]);

    // Calcula o número total de páginas baseado na quantidade de imóveis
    useEffect(() => {
        setTotalPages(Math.ceil(immobiles.length / take));
    }, [immobiles, take]);

    // Reinicia para a primeira página quando "take" muda
    useEffect(() => {
        setCurrentPage(1);
    }, [take]);

    // Filtra os imóveis para exibição com base na página atual e no número de itens por página
    const paginatedImmobiles = immobiles.slice((currentPage - 1) * take, currentPage * take);

    return (
        <section className="w-full flex flex-col justify-center items-center bg-gray_08 mt-2 px-4">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 pt-16">
                <StarsBackground />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-full flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-5xl font-semibold">Descubra um mundo de possibilidades</h2>
                        <span className="text-gray_60 text-lg font-medium mt-4">
                            Nosso portfólio de imóveis é tão diversificado quanto os seus sonhos. Explore as seguintes categorias para encontrar a propriedade perfeita que corresponda à sua visão de casa.
                        </span>
                    </div>
                </div>



                {loading ? (
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <Loading size='large' color="purple_60" />
                    </div>
                ) : error ? (
                    <p className="text-red-500">Erro ao carregar imóveis: {error}</p>
                ) : immobiles.length === 0 ? (
                    <div className="w-full h-[400px] flex justify-center items-center">
                        <span className="text-xl text-gray_60 font-medium">Não foram encontrados imóveis, faça uma nova busca.</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 w-full">
                        {paginatedImmobiles.map((immobile) => (
                            <div key={immobile.id} className="bg-gray_08 border border-gray_15 p-5 rounded-md flex flex-col">
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
                )}

                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
        </section>
    );
};
