'use client';

import { ButtonDefault } from "@/components/buttonDefault";
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from "react";

export const SearchProperty = () => {
    const [search, setSearch] = useState('')
    console.log('search =>', search);


    const handleSearch = (value: string) => {
        setSearch(value)
        setSearch('')
        alert(value)
    }

    return (
        <div className="w-full flex justify-center absolute translate-y-[-65px] mobile_1:translate-y-0 mobile_1:px-2 mobile_1:mt-4">
            <div className="relative w-[50%] bg-gray_15 p-3 rounded-lg mobile_1:w-full">
                <input
                    className="w-full h-20 bg-gray_08 rounded-lg text-lg text-gray_60 font-medium px-3 py-3 placeholder:text-gray_60 border border-transparent
                     focus:border-purple_60 focus:outline-none"
                    placeholder="Procure um imóvel..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pr-4">
                    <ButtonDefault variant="primary" type="button" className="mobile_1:w-[80px]" onClick={() => handleSearch(search)}>
                        <MagnifyingGlass size={30} />
                        <span className="inline mobile_1:hidden">Pesquisar</span>
                    </ButtonDefault>
                </div>
            </div>
        </div>
    );
};
