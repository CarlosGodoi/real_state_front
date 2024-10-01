import { InputHTMLAttributes } from "react";
import { UseFormClearErrors, UseFormRegisterReturn } from "react-hook-form";

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegisterReturn;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clearErrors?: UseFormClearErrors<any>;
  helperText?: string;
  isLoading?: boolean;
  loading?: boolean;
  onChangeValue?: (value: string | number) => void;
  handleClickSearch?: VoidFunction;
  passwordCheckValue?: string;
  onClick?: VoidFunction
}

export const InputDefault = ({
  label,
  register,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clearErrors,
  helperText,
  onChangeValue,
  isLoading,
  ...rest
}: InputDefaultProps) => {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label className="text-purple_60 text-lg font-semibold">
          {label}
        </label>
      )}
      <input
        {...register}
        {...rest}
        onChange={(e) => onChangeValue && onChangeValue(e.target.value)}
        className=" w-full
        h-14
        bg-gray_20 
        rounded-md 
        text-gray_60 
        placeholder:text-gray_60 
        pl-3 
        border 
        border-transparent 
        focus:border-purple_60 
        focus:outline-none"
        disabled={isLoading}
      />
      {helperText && <span className="text-sm text-red-500 mt-2">{helperText}</span>}
    </div>
  );
};
