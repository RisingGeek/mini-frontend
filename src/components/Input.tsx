import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react'

interface InputProps {
    type: HTMLInputTypeAttribute;
    value: string | number | readonly string[];
    placeholder: string;
    label: ReactNode;
    labelClass?: string;
    required?: boolean;
    inputAddonAfter?: ReactNode;
    onChange: ChangeEventHandler;
}
const Input = (props: InputProps) => {
    const { type, value, placeholder, label, labelClass, required, inputAddonAfter, onChange } = props;
    return (
        <>
            <label htmlFor="email" className={`block text-gray-400 text-sm font-bold mb-2 ${labelClass}`}>
                {label}
            </label>
            <div className="relative">
                <input
                    id="email"
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-transparent text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={placeholder}
                />
                {inputAddonAfter}
            </div>
        </>
    )
}

export default Input
