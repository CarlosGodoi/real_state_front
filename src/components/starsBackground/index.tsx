import Image from "next/image";
import stars from "../../../public/assets/StarsDesign.png";

export const StarsBackground = () => {
    return (
        <Image src={stars} width={50} height={50} alt="Imagem de estrelas" />
    )
}