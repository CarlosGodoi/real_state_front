import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";
import { UseFormClearErrors, UseFormRegisterReturn } from "react-hook-form";

interface TextareaDefaultProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegisterReturn;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearErrors?: UseFormClearErrors<any>;
    helperText?: string;
    isLoading?: boolean;
    onChangeValue?: (value: string) => void;
    labelClassName?: string;
    textareaClassName?: string; // Classe adicional para estilizar o textarea
}

export const TextareaDefault = ({
    label,
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearErrors,
    helperText,
    onChangeValue,
    isLoading,
    labelClassName,
    textareaClassName,
    ...rest
}: TextareaDefaultProps) => {
    return (
        <div className="flex flex-col gap-3">
            {label && (
                <label className={clsx("text-secondary text-lg font-semibold", labelClassName)}>
                    {label}
                </label>
            )}
            <textarea
                {...register}
                {...rest}
                onChange={(e) => onChangeValue && onChangeValue(e.target.value)}
                className={clsx(
                    "w-full h-32 bg-gray_10 rounded-md text-gray_60 text-lg font-medium placeholder:text-gray_60 placeholder:text-lg placeholder:font-medium p-3 border border-transparent focus:border-purple_60 focus:outline-none resize-none",
                    { "cursor-not-allowed": isLoading },
                    textareaClassName
                )}
                disabled={isLoading}
            />
            {helperText && <span className="text-sm text-red-500 mt-2">{helperText}</span>}
        </div>
    );
};
