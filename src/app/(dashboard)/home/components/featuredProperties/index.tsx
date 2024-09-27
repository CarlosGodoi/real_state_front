'use client'
import Image from "next/image"
import stars from "../../../../../../public/assets/StarsDesign.png"
import { ButtonDeafult } from "@/components/buttonDefault"
import { Bathtub, Bed, Building } from "@phosphor-icons/react"
import propriedade1 from '../../../../../../public/images/Image.png'

export const FeaturedProperties = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 bg-gray_08 mt-2">
            <div className="max-w-[1600px] w-full flex flex-col justify-center gap-4 bg-gray_08 px-14 py-14">
                <Image src={stars} width={50} height={50} alt="Imagem de estrelas" />
                <div className="w-full flex justify-between mobile_1:flex-col">
                    <div className="w-full flex flex-col gap-2 mobile_1:w-full mobile_1:text-center">
                        <h2 className="text-secondary text-4xl font-semibold">Propriedades em Destaque</h2>
                        <span className="text-gray_60 text-lg font-medium mt-4">Explore nossa seleção escolhida a dedo de propriedades em destaque. Cada listagem oferece uma visão geral de casas e investimentos excepcionais disponíveis através da Real State. Clique em "Ver detalhes" para obter mais informações.</span>
                    </div>
                    <div className="flex items-end mobile_1:mt-4">
                        <ButtonDeafult className="w-[165px] mobile_1:w-full">Ver propriedades</ButtonDeafult>
                    </div>
                </div>

                <div className="w-full flex justify-between gap-3">
                    <div className="max-w-[532px] flex flex-col gap-3 justify-between bg-gray_08 border border-gray_15 px-8 py-8 rounded-md">
                        <div className="w-full h-auto rounded-md"><Image src={propriedade1} width={430} height={400} quality={100} alt="" /></div>
                        <div className="w-full flex flex-col gap-3">
                            <h2 className="text-secondary text-2xl font-semibold">Seaside Serenity Villa</h2>
                            <span className="text-gray_60 text-lg font-medium">A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 mt-3">
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Bed size={25} color="#fff" weight="fill" />4-Bedroom</span>
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Bathtub size={25} color="#fff" weight="fill" />3-Bathroom</span>
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Building size={25} color="#fff" weight="fill" />Villa</span>
                        </div>
                        <div className="flex items-center justify-between gap-8 mt-3">
                            <div className="flex flex-col gap-1">
                                <span className="text-gray_60 text-lg font-medium">Preço</span>
                                <span className="text-secondary text-2xl font-semibold">R$550,000</span>
                            </div>
                            <div className="flex flex-1">
                                <ButtonDeafult className="w-full" variant="primary">Ver detalhes do Imovel</ButtonDeafult>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[532px] flex flex-col gap-3 justify-between bg-gray_08 border border-gray_15 px-8 py-8 rounded-md">
                        <div className="w-full h-auto rounded-md"><Image src={propriedade1} width={430} height={400} quality={100} alt="" /></div>
                        <div className="w-full flex flex-col gap-3">
                            <h2 className="text-secondary text-2xl font-semibold">Seaside Serenity Villa</h2>
                            <span className="text-gray_60 text-lg font-medium">A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 mt-3">
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Bed size={25} color="#fff" weight="fill" />4-Bedroom</span>
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Bathtub size={25} color="#fff" weight="fill" />3-Bathroom</span>
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Building size={25} color="#fff" weight="fill" />Villa</span>
                        </div>
                        <div className="flex items-center justify-between gap-8 mt-3">
                            <div className="flex flex-col gap-1">
                                <span className="text-gray_60 text-lg font-medium">Preço</span>
                                <span className="text-secondary text-2xl font-semibold">R$550,000</span>
                            </div>
                            <div className="flex flex-1">
                                <ButtonDeafult className="w-full" variant="primary">Ver detalhes do Imovel</ButtonDeafult>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[532px] flex flex-col gap-3 bg-gray_08 border border-gray_15 px-8 py-8 rounded-md">
                        <div className="w-full h-auto rounded-md"><Image src={propriedade1} width={430} height={400} quality={100} alt="" /></div>
                        <div className="w-full flex flex-col gap-3">
                            <h2 className="text-secondary text-2xl font-semibold">Seaside Serenity Villa</h2>
                            <span className="text-gray_60 text-lg font-medium">A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 mt-3">
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Bed size={25} color="#fff" weight="fill" />4-Bedroom</span>
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Bathtub size={25} color="#fff" weight="fill" />3-Bathroom</span>
                            <span className="flex gap-2 text-secondary text-lg font-medium bg-gray_10 border border-gray_15 rounded-full px-2 py-1"><Building size={25} color="#fff" weight="fill" />Villa</span>
                        </div>
                        <div className="flex items-center justify-between gap-8 mt-3">
                            <div className="flex flex-col gap-1">
                                <span className="text-gray_60 text-lg font-medium">Preço</span>
                                <span className="text-secondary text-2xl font-semibold">R$550,000</span>
                            </div>
                            <div className="flex flex-1">
                                <ButtonDeafult className="w-full" variant="primary">Ver detalhes do Imovel</ButtonDeafult>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}