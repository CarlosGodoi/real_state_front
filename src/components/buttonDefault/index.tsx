import clsx from "clsx";
import { ReactNode } from "react";

interface IButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    className?: string;
    type?: 'button' | 'submit';
    variant?: 'transparent' | 'cancel' | 'primary' | 'secondary';
}

const colorsVariants = {
    transparent: 'bg-white border-fup-blue font-[400] text-fup-blue',
    primary: `bg-purple_60 text-[#fff] text-lg font-semibold rounded-lg hover:bg-purple_70 transition-transform`,
    cancel: `bg-fup-red hover:bg-fup-red/90 text-[#FFFFFF]`,
    secondary: 'bg-gray_08 text-[#fff] text-lg font-medium border border-zinc-700 rounded-md hover:bg-gray_10',
};

export const ButtonDefault = ({ children, type, variant = 'secondary', onClick, className }: IButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={clsx(
            className,
            `flex h-[50px] w-[136px] items-center justify-center rounded-md border p-2 focus:outline-none focus:ring-0 ${children ? 'gap-2' : ''
            }`,
            colorsVariants[variant]
        )}>{children}</button>
    )
}