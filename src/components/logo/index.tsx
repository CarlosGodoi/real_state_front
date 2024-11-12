import Image from "next/image";
import logo from '../../../public/assets/logo.png';
import clsx from 'clsx';

interface ILogoProps {
    width: number;
    height: number;
    textSize: string;
    responsive?: boolean;
}

export const Logo = ({ width, height, textSize, responsive = true }: ILogoProps) => {
    return (
        <div className="flex items-center gap-2">
            <Image src={logo} width={width} height={height} alt="Imagem de logo" />
            <h1
                className={clsx(
                    "text-secondary font-bold",
                    textSize,
                    responsive && "sm:text-3xl md:text-4xl lg:text-5xl"
                )}
            >
                Prestige Imobiliária
            </h1>
        </div>
    );
};
