'use client'

import { Logo } from "../logo";
import { PaperPlaneTilt, Envelope, FacebookLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react';

export const Footer = () => {
    return (
        <div className="w-full flex flex-col gap-8 bg-gray_08 border border-t-gray_15">
            <div className="w-full flex flex-col justify-center lg:flex-row gap-8 bg-gray_08 px-5 lg:px-20 py-14">
                <div className="w-full lg:w-[538px] flex flex-col gap-4">
                    <Logo width={30} height={30} textSize={"text-[20px]"} />

                    <div className="relative w-full lg:w-[300px] max-w-full">
                        <Envelope
                            color="#999999"
                            size={20}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        />
                        <input
                            className="bg-gray_08 h-11 w-[95%] lg:w-full pl-10 pr-10 text-gray_60 border border-zinc-700 rounded-md outline-none focus:ring-0 placeholder:text-gray_50"
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                        <PaperPlaneTilt
                            color="#fff"
                            size={20}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer mobile_1:right-8"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-[978px] max-w-full grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-gray_60 text-xl font-medium">Home</span>
                        <nav className="text-secondary text-lg font-medium">Propriedades</nav>
                        <nav className="text-secondary text-lg font-medium">Depoimentos</nav>
                        <nav className="text-secondary text-lg font-medium">FAQ's</nav>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-gray_60 text-xl font-medium">Sobre-nós</span>
                        <nav className="text-secondary text-lg font-medium">Nossa História</nav>
                        <nav className="text-secondary text-lg font-medium">Nossos Emprendimentos</nav>
                        <nav className="text-secondary text-lg font-medium">Nosso Time</nav>
                        <nav className="text-secondary text-lg font-medium">Nossos Clientes</nav>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-gray_60 text-xl font-medium">Propriedades</span>
                        <nav className="text-secondary text-lg font-medium">Portfólio</nav>
                        <nav className="text-secondary text-lg font-medium">Categorias</nav>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-gray_60 text-xl font-medium">Serviços</span>
                        <nav className="text-secondary text-lg font-medium">Estratégias de Marketing</nav>
                        <nav className="text-secondary text-lg font-medium">Negociação de Imóveis</nav>
                        <nav className="text-secondary text-lg font-medium">Investimentos Imobiliários</nav>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-gray_60 text-xl font-medium">Contate-nos</span>
                        <nav className="text-secondary text-lg font-medium">Formulário de contato</nav>
                        <nav className="text-secondary text-lg font-medium">Outros Escritórios</nav>
                    </div>
                </div>
            </div>

            <div className="w-full px-5 lg:px-20 py-4 flex flex-col lg:flex-row items-center lg:justify-between bg-gray_10 gap-4 lg:gap-0">

                <div className="flex flex-col w-full lg:flex-row items-center gap-5">
                    <span className="block text-secondary text-md font-normal">
                        @2024 Real State. Todos os direitos reservados.
                    </span>
                    <span className="block text-secondary text-md font-normal">
                        Termos & condições
                    </span>
                </div>


                <div className="flex gap-4">
                    <div className="w-8 h-8 flex justify-center items-center rounded-full">
                        <FacebookLogo weight="light" size={30} color="#fff" />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center rounded-full">
                        <LinkedinLogo weight="light" size={30} color="#fff" />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center rounded-full">
                        <TwitterLogo weight="light" size={30} color="#fff" />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center rounded-full">
                        <YoutubeLogo weight="light" size={30} color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
};
