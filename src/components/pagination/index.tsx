'use client'

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {
    if (!currentPage || !totalPages) {
        return null; // Não renderiza o componente se os valores estiverem indefinidos
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="w-full flex flex-col">
            <span className="w-full border border-gray_15 mt-5"></span>
            <div className="w-full flex justify-between items-center mt-4">
                <span className="text-gray_60 text-lg font-medium">
                    {`${currentPage} de ${totalPages}`}
                </span>
                <div className="flex justify-between items-center gap-2">
                    <div className={`flex justify-center items-center border border-gray_15 rounded-full p-2 mt-2 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray_10 cursor-pointer'}`} onClick={handlePrevious}>
                        <ArrowLeft size={20} color="#808080" />
                    </div>
                    <div className={`flex justify-center items-center border border-gray_15 rounded-full p-2 mt-2 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray_10 cursor-pointer'}`} onClick={handleNext}>
                        <ArrowRight size={20} color="#808080" />
                    </div>
                </div>
            </div>
        </div >
    )
}