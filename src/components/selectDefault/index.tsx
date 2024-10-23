'use client'
import React, { useState, useEffect } from "react";
import { CaretDown } from '@phosphor-icons/react';
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    register?: UseFormRegisterReturn;
    options?: SelectOption[]; // Array de opções (opcional)
    leftIcon?: React.ReactNode; // Ícone da esquerda (opcional)
    rightIcon?: React.ReactNode; // Ícone da direita (opcional)
    placeholder?: string; // Placeholder para o select
    onChange?: (value: string) => void; // Função de callback ao selecionar uma opção
    label?: string; // Label opcional
    value?: string | null; // Valor para popular o select
}

const SelectDefault: React.FC<SelectProps> = ({
    register,
    options = [],
    leftIcon,
    rightIcon,
    placeholder,
    onChange,
    label,
    value
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(value || null);

    useEffect(() => {
        // Atualiza o estado selectedOption quando a prop value muda
        if (value)
            setSelectedOption(value);
    }, [value]);

    const handleSelect = (newValue: string) => {
        setSelectedOption(newValue);
        setIsOpen(false);
        onChange?.(newValue);
    };

    return (
        <div className="relative w-full flex flex-col gap-3">
            {label && (
                <label className="text-secondary text-lg font-semibold">
                    {label}
                </label>
            )}
            <div
                className="flex h-14 items-center px-3 py-2 cursor-pointer bg-gray_10 border rounded-lg
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
                        <div className="flex justify-center items-center p-1 bg-gray_15 rounded-full hover:bg-gray_20">
                            <CaretDown size={20} color="#999999" />
                        </div>
                    )}
                </span>

                <input
                    type="hidden"
                    value={selectedOption || ""}
                    {...register}
                />
            </div>

            {isOpen && options.length > 0 && (
                <ul className="absolute z-10 w-full mt-16 bg-gray_10 border rounded-lg shadow-lg max-h-60 overflow-auto">
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
