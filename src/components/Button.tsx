import React, { ReactNode } from 'react'

export enum ButtonType {
    PRIMARY,
    TEXT
}

interface ButtonProps {
    type: "button" | "reset" | "submit";
    btnType: ButtonType;
    className?: string;
    onClick: () => void;
    children: ReactNode;
}

const Button = (props: ButtonProps) => {
    const { type, btnType, className = "", children } = props;
    const commonClasses = "py-2 px-4 rounded"
    const getBtnClass = () => {
        switch(btnType) {
            case ButtonType.PRIMARY:
                return "bg-blue-500 hover:opacity-80 text-white";
            default:
                return "";
        } 
    }
    return (
        <button
            type={type}
            className={`${commonClasses} ${getBtnClass()} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
