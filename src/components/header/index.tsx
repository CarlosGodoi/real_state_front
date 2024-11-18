'use client'
import Link from "next/link";
import { Logo } from "../logo";
import { MoboMenu } from "../moboMenu";
import { useAuthContext } from "@/context/authContext";
import { useState } from "react";
import { ContactUsModal } from "../modal/contactUsModal";
import UserAvatar from "../avatar";

export const Header = () => {
    const { signOut } = useAuthContext();
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <div className="w-full h-24 flex justify-around items-center bg-gray_10">
            <Link href={'/home'}>
                <Logo width={40} height={40} textSize={"text-2xl"} responsive={false} />
            </Link>

            <div className="flex justify-center items-center w-[60%] ipad:hidden">
                <nav className="flex items-center gap-8 relative">
                    <Link href='/home' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Home</Link>
                    <Link href='/sobre-nos' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Sobre nós</Link>
                    <Link href='/corretor/cadastro' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Cadastrar usuários</Link>

                    {/* Propriedades com submenu */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setSubmenuOpen(true)}
                        onMouseLeave={() => setSubmenuOpen(false)}
                    >
                        <div className="text-secondary text-lg font-medium cursor-pointer">Propriedades</div>
                        <div className={`absolute left-0 top-full mt-1 bg-gray_08 shadow-lg rounded-lg w-48 z-50 transition-opacity duration-300 ${submenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className="py-2">
                                <Link href='/propriedades' className="block px-4 py-2 text-secondary text-lg font-medium hover:bg-gray_20">Propriedades</Link>
                                <Link href='/propriedades/cadastro' className="block px-4 py-2 text-secondary text-lg font-medium hover:bg-gray_20">Cadastro</Link>
                            </div>
                        </div>
                    </div>

                    <Link href='/servicos' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Serviços</Link>
                    <button type="button" onClick={signOut} className="text-purple_70 text-lg font-medium hover:border-b-2 border-secondary">Sair</button>
                </nav>
            </div>

            <div className="ipad:hidden">
                <UserAvatar />
                {/* <ButtonDefault type="button" onClick={() => setOpen(true)}>Contate-nos</ButtonDefault> */}
            </div>

            <div className="hidden ipad:block">
                <MoboMenu />
            </div>

            <ContactUsModal open={open} close={() => setOpen(false)} />
        </div>
    );
};