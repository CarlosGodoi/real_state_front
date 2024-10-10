'use client'

import React, { useState } from "react";
import { CaretDown } from '@phosphor-icons/react';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options?: SelectOption[]; // Array de opções (opcional)
    leftIcon?: React.ReactNode; // Ícone da esquerda (opcional)
    rightIcon?: React.ReactNode; // Ícone da direita (opcional)
    placeholder?: string; // Placeholder para o select
    onChange?: (value: string) => void; // Função de callback ao selecionar uma opção
}

const SelectDefault: React.FC<SelectProps> = ({
    options = [],
    leftIcon,
    rightIcon,
    placeholder,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
        onChange?.(value);
    };

    return (
        <div className="relative w-full">
            <div
                className="flex h-16 items-center px-3 py-2 cursor-pointer bg-gray_08 border rounded-lg
                     focus:border-purple_60 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                <span className="flex-grow text-lg text-gray_60 font-medium">
                    {selectedOption
                        ? options.find((option) => option.value === selectedOption)?.label
                        : placeholder}
                </span>
                <span className="ml-2">
                    {rightIcon ? (
                        <span onClick={() => setIsOpen(!isOpen)}>{rightIcon}</span>
                    ) : (
                        <div className="flex justify-center items-center p-1 bg-gray_10 rounded-full hover:bg-gray_15">
                            <CaretDown size={20} color="#999999" />
                        </div>
                    )}
                </span>
            </div>

            {isOpen && options.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-gray_08 border rounded-lg shadow-lg max-h-60 overflow-auto">
                    {options.map((option, index) => (
                        <React.Fragment key={option.value}>
                            <li
                                className="text-gray_60 text-lg font-medium px-4 py-2 cursor-pointer hover:bg-gray_15"
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </li>
                            {index < options.length - 1 && (
                                <span className="block w-[90%] border-b border-gray_60 mx-auto"></span>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectDefault;