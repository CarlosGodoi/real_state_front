'use client'
import { useEffect, useState } from "react";
import { ButtonDefault } from "@/components/buttonDefault";
import { Bathtub, Bed, Building } from "@phosphor-icons/react";
import { Pagination } from "@/components/pagination";
import { StarsBackground } from "@/components/starsBackground";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/navigation";
import { useImmobilesContext } from "@/context/immobilesContext";
import Image from "next/image";
import Loading from "@/components/loading";
import * as Tooltip from "@radix-ui/react-tooltip"

export const FeaturedProperties = () => {
    const { immobiles, loading, error } = useImmobilesContext();
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [take, setTake] = useState(3);
    const [isMobile, setIsMobile] = useState(false);

    const router = useRouter();
    console.log('imoveis =>', immobiles);


    const handleNavigate = () => {
        router.push('/propriedades');
    };

    // Detectando se é mobile para ajustar a quantidade de itens por página
    useEffect(() => {
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
    }, []);

    // Ajusta o número de itens por página com base no estado "isMobile"
    useEffect(() => {
        setTake(isMobile ? 1 : 3);
    }, [isMobile]);

    // Calcula o número total de páginas baseado na quantidade de imóveis
    useEffect(() => {
        setTotalPages(Math.ceil(immobiles.length / take));
    }, [immobiles, take]);

    // Reinicia para a primeira página quando "take" muda
    useEffect(() => {
        setCurrentPage(1);
    }, [take]);

    // Calcula os imóveis a serem exibidos na página atual
    const startIndex = (currentPage - 1) * take;
    const selectedImmobiles = immobiles.slice(startIndex, startIndex + take);

    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 bg-gray_08 mt-2 px-4">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 pt-16">
                <StarsBackground />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-full flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-5xl font-semibold">Propriedades em Destaque</h2>
                        <span className="text-gray_60 text-lg font-medium mt-4">
                            Explore nossa seleção escolhida a dedo de propriedades em destaque. Cada listagem oferece uma visão geral de casas e investimentos excepcionais disponíveis através da Prestige Imobiliária. Clique em Ver detalhes para obter mais informações.
                        </span>
                    </div>
                    <div className="flex items-end mobile_1:mt-4">
                        <ButtonDefault className="w-[165px] mobile_1:w-full" onClick={handleNavigate}>Ver propriedades</ButtonDefault>
                    </div>
                </div>

                {loading ? (
                    <div className="w-full h-[400px] flex justify-center items-center">
                        <Loading size='large' color="purple_60" />
                    </div>
                ) : error ? (
                    <div className="w-full h-[400px] flex justify-center items-center">
                        <p className="text-red-500">Erro ao carregar imóveis: {error}</p>
                    </div>
                ) : immobiles.length === 0 ? (
                    <div className="w-full h-[400px] flex justify-center items-center">
                        <span className="text-xl text-gray_60 font-medium">Não foram encontrados imóveis, faça uma nova busca.</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 w-full">
                        {selectedImmobiles.map((immobile) => (
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
                                    <h2 className="text-secondary text-2xl font-semibold">{immobile.businessName}</h2>

                                    <Tooltip.Provider>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <span className="text-gray_60 text-lg font-medium truncate line-clamp-3">{immobile.description}</span>
                                            </Tooltip.Trigger>
                                            <Tooltip.Content side="top" align="center" className="flex w-full bg-gray_10 text-gray_60 font-medium p-2 rounded border border-gray_15">
                                                <span className="text-gray_60 text-lg font-medium">
                                                    {immobile.description}
                                                </span>
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                    </Tooltip.Provider>


                                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2 mt-3">
                                        <span className="flex items-center gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1 justify-center w-auto">
                                            <Bed size={25} color="#fff" weight="fill" /> {immobile.quantidadeQuartos} Quartos
                                        </span>

                                        <span className="flex items-center gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1 justify-center w-auto">
                                            <Bathtub size={25} color="#fff" weight="fill" /> {immobile.quantidadeBanheiros} Banheiros
                                        </span>

                                        <span className="flex items-center gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1 justify-center sm:col-span-2 lg:col-span-1 xl:col-span-2 w-auto">
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
                                        <ButtonDefault className="w-full" variant="primary" onClick={() => router.push(`/propriedades/${immobile.id}`)}>
                                            Ver detalhes
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

