'use client'
import { ButtonDefault } from "@/components/buttonDefault"
import { useRouter } from "next/navigation"

const ButtonGroup = () => {
    const navigate = useRouter()

    const handleNavigation = () => {
        navigate.push('/propriedades')
    }
    return (
        <div className="w-[70%] flex justify-start gap-3 mt-8 desktop:w-[90%] laptop:w-[80%] notebook_13p:w-4/5 mobile_1:justify-center">
            <ButtonDefault>Saiba mais</ButtonDefault>
            <ButtonDefault variant="primary" onClick={handleNavigation}>Propriedades</ButtonDefault>
        </div>
    )
}

export default ButtonGroup