import { MouseEventHandler, ReactNode } from 'react';

export enum ButtonType {
    PRIMARY,
    TEXT
}

interface ButtonProps {
    type: "button" | "reset" | "submit"; // Button HTML attribute
    btnType: ButtonType; // Custom button type
    className?: string;
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

// Reusable Button component
const Button = (props: ButtonProps) => {
    const { type, btnType, className = "", disabled, onClick, children } = props;
    const commonClasses = `py-2 px-1.5 rounded ${disabled && "cursor-not-allowed opacity-30"}`;
    const getBtnClass = () => {
        switch (btnType) {
            case ButtonType.PRIMARY:
                return `bg-blue-500 ${!disabled && "hover:opacity-80"} text-white`;
            case ButtonType.TEXT:
                return "text-white";
            default:
                return "";
        }
    };
    return (
        <button
            type={type}
            className={`${commonClasses} ${getBtnClass()} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
