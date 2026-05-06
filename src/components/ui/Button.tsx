"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "dark" | "ghost";
}

/**
 * Core button component styled to the portfolio design system.
 *
 * Variants:
 *  - primary   → accent blue fill, pill shape, hover lift + glow
 *  - secondary → transparent, outline border, pill shape
 *  - dark      → dark fill, hover turns accent blue
 *  - ghost     → text only, no border
 */
export default function Button({
    children,
    variant = "primary",
    className = "",
    onMouseEnter,
    onMouseLeave,
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 font-[family-name:var(--font-dm-sans)]";

    const styles: Record<string, string> = {
        primary:
            "bg-[var(--accent)] text-white hover:-translate-y-0.5 hover:shadow-[0_0.625rem_1.75rem_rgba(42,92,255,0.28)]",
        secondary:
            "bg-transparent text-[var(--fg)] border border-[var(--border)] hover:border-[var(--muted2)]",
        dark: "bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)]",
        ghost: "text-[var(--muted)] hover:text-[var(--fg)]",
    };

    return (
        <button
            className={cn(base, styles[variant], className)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...props}
        >
            {children}
        </button>
    );
}
