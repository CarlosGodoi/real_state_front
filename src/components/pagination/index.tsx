'use client'

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"

export const Pagination = () => {
    return (
        <div className="w-full flex flex-col">
            <span className="w-full border border-gray_15 mt-5"></span>
            <div className="w-full flex justify-between items-center mt-4">
                <span className="text-gray_60 text-lg font-medium">01 de 10</span>
                <div className="flex justify-between items-center gap-2">
                    <div className="flex justify-center items-center border border-gray_15 rounded-full p-2 mt-2 hover:bg-gray_10 cursor-pointer">
                        <ArrowLeft size={20} color="#808080" />
                    </div>
                    <div className="flex justify-center items-center border border-gray_15 rounded-full p-2 mt-2 hover:bg-gray_10 cursor-pointer">
                        <ArrowRight size={20} color="#808080" />
                    </div>
                </div>
            </div>
        </div>
    )
}