import Image from "next/image"
import logo from '../../../public/assets/logo.png'

interface ILogoProps {
    width: number
    height: number
    textSize: string
}

export const Logo = ({ width, height, textSize }: ILogoProps) => {
    return (
        <div className="flex items-center gap-2">
            <Image src={logo} width={width} height={height} alt="Imagem de logo" />
            <h1 className={`text-secondary ${textSize} font-bold`}>Real State</h1>
        </div>
    )
}