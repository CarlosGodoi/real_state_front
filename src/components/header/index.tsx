'use client'
import Link from "next/link";
import { Logo } from "../logo";
import { MoboMenu } from "../moboMenu";
import { ButtonDefault } from "../buttonDefault";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

export const Header = () => {
    const { signOut } = useAuthContext()

    const navigate = useRouter()


    return (
        <div className="w-full h-24 flex justify-around items-center bg-gray_10">
            <Logo width={40} height={40} textSize={"text-2xl"} />

            <div className="flex justify-center items-center w-[60%] ipad:hidden">
                <nav className="flex items-center gap-8">
                    <Link href='/home' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Home</Link>
                    <Link href='/sobre-nos' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Sobre nós</Link>
                    <Link href='#' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Propriedades</Link>
                    <Link href='#' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Serviços</Link>
                    <button type="button" onClick={signOut} className="text-purple_70 text-lg font-medium hover:border-b-2 border-secondary">Logout</button>
                </nav>
            </div>

            <div className="ipad:hidden">
                <ButtonDefault type="button" onClick={() => navigate.push('/contact')}>Contate-nos</ButtonDefault>
            </div>

            <div className="hidden ipad:block">
                <MoboMenu />
            </div>
        </div>
    );
};
