import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names — use this instead of concatenating strings.
 * Example: cn("px-4", isActive && "bg-indigo-600")
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Formats a date string to a readable format.
 * Example: formatDate("2024-01-15") → "January 2024"
 */
export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });
}
