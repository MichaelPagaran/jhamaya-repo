import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

    const variants: Record<string, string> = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
        ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-400",
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
