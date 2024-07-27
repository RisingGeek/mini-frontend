import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react'

interface InputProps {
    type: HTMLInputTypeAttribute;
    value: string | number | readonly string[];
    placeholder: string;
    label?: ReactNode;
    labelClass?: string;
    required?: boolean;
    inputAddonAfter?: ReactNode;
    inputContainerClassName?: string;
    className?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
const Input = (props: InputProps) => {
    const { type, value, placeholder, label, labelClass, required, inputAddonAfter,inputContainerClassName="", className = "", onChange } = props;
    return (
        <>
            {label &&
                <label htmlFor="email" className={`block text-gray-400 text-sm font-bold mb-2 ${labelClass}`}>
                    {label}
                </label>
            }
            <div className={`relative mb-4 ${inputContainerClassName}`}>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`appearance-none border border-gray-600 rounded w-full py-2 px-3
                    bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline ${className}`}
                    placeholder={placeholder}
                />
                {inputAddonAfter}
            </div>
        </>
    )
}

export default Input
