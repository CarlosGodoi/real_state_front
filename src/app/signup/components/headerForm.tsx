'use client'
import { Logo } from "@/components/logo"
import { ArrowLeft } from "@phosphor-icons/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const HeaderForm = () => {
    const navigate = useRouter()

    const handleNavigate = () => {
        navigate.push('/')
    }
    return (
        <div className="w-full flex justify-between">
            <Link href={'/'} className="mobile_1:flex-1">
                <Logo width={40} height={40} textSize={"text-2xl"} responsive={false} />
            </Link>

            <div className="flex items-center gap-2">
                <div className="border border-gray_15 bg-gray_10 rounded-full flex justify-center items-center p-2 cursor-pointer" onClick={handleNavigate}>
                    <ArrowLeft size={20} color="#999999" />
                </div>
                <p className="text-gray_60 text-base font-normal mobile_1:hidden">Voltar</p>
            </div>
        </div>
    )
}

export default HeaderForm