import React, { MouseEventHandler, ReactNode } from 'react'

export enum ButtonType {
    PRIMARY,
    TEXT
}

interface ButtonProps {
    type: "button" | "reset" | "submit";
    btnType: ButtonType;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

const Button = (props: ButtonProps) => {
    const { type, btnType, className = "", onClick, children } = props;
    const commonClasses = "py-2 px-1.5 rounded"
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
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
