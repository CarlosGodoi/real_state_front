import Link from "next/link";
import { Logo } from "../logo";
import { MoboMenu } from "../moboMenu";
import { ButtonDeafult } from "../buttonDefault";

export const Header = () => {
    return (
        <div className="w-full h-24 flex justify-around items-center bg-gray_10">
            <Logo width={40} height={40} textSize={"text-2xl"} />

            <div className="flex justify-center items-center w-[60%] ipad:hidden">
                <nav className="flex items-center gap-6">
                    <Link href='#' className="text-secondary text-lg font-medium">Home</Link>
                    <Link href='#' className="text-secondary text-lg font-medium">Sobre nós</Link>
                    <Link href='#' className="text-secondary text-lg font-medium">Propriedades</Link>
                    <Link href='#' className="text-secondary text-lg font-medium">Serviços</Link>
                </nav>
            </div>

            <div className="ipad:hidden">
                <ButtonDeafult type="button">Contate-nos</ButtonDeafult>
            </div>

            <div className="hidden ipad:block">
                <MoboMenu />
            </div>
        </div>
    );
};
