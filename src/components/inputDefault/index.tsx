'use client'
import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, UseFormClearErrors } from "react-hook-form";
import clsx from "clsx";

type InputValue = string | number | readonly string[] | undefined;

interface InputDefaultProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label?: string;
  register?: UseFormRegisterReturn;
  clearErrors?: UseFormClearErrors<Record<string, unknown>>;
  helperText?: string;
  isLoading?: boolean;
  loading?: boolean;
  onChangeValue?: (value: string) => void;
  handleClickSearch?: VoidFunction;
  passwordCheckValue?: string;
  onClick?: VoidFunction;
  labelClassName?: string;
  value?: InputValue | null;
}

export const InputDefault: React.FC<InputDefaultProps> = ({
  label,
  register,
  helperText,
  onChangeValue,
  isLoading,
  labelClassName,
  value,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeValue) {
      onChangeValue(e.target.value);
    }
    if (register?.onChange) {
      register.onChange(e);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label className={clsx("text-purple_60 text-lg font-semibold", labelClassName)}>
          {label}
        </label>
      )}
      <input
        {...register}
        {...rest}
        value={value === null ? '' : value}
        onChange={handleChange}
        className={clsx(
          "w-full h-14 bg-gray_10 rounded-md text-gray_60 text-lg font-medium placeholder:text-gray_60 pl-3 focus:border-purple_60 focus:outline-none",
          {
            "border border-transparent": !rest.disabled,
            "border-none caret-transparent": rest.disabled
          }
        )}
        disabled={isLoading}
      />
      {helperText && <span className="text-sm text-red-500 mt-2">{helperText}</span>}
    </div>
  );
};
