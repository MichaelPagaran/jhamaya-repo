interface RedirectArrowProps {
    label: string;
    accent?: string;
}

/**
 * Circular redirect arrow for clickable bento cards.
 * Neutral gray by default. When the parent card (`.group`) is hovered, the circle fills
 * with the project's accent color, the arrow turns white, and the arrow nudges up-right
 * so the card clearly reads as clickable.
 */
export default function RedirectArrow({ label, accent = "#0078ff" }: RedirectArrowProps) {
    return (
        <div
            role="img"
            aria-label={label}
            style={{ "--arrow-accent": accent } as React.CSSProperties}
            className="relative size-full rounded-full border-[1.5px] border-[#d1d1d1] bg-white text-[#c5c5c5] shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all duration-300 ease-out group-hover:border-[var(--arrow-accent)] group-hover:bg-[var(--arrow-accent)] group-hover:text-white group-hover:shadow-[0_8px_20px_-4px_var(--arrow-accent)]"
        >
            <svg
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="absolute inset-0 size-full transition-transform duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            >
                <path
                    d="M17.4321 36.3396C16.8167 36.9549 16.8167 37.9525 17.4321 38.5679C18.0474 39.1832 19.045 39.1832 19.6603 38.5679L18.5462 37.4537L17.4321 36.3396ZM18.5462 37.4537L19.6603 38.5679L38.5677 19.6605L37.4536 18.5463L36.3394 17.4322L17.4321 36.3396L18.5462 37.4537ZM39.0292 18.5463C39.0292 17.6762 38.3238 16.9707 37.4536 16.9707L23.273 16.9707C22.4028 16.9707 21.6974 17.6762 21.6974 18.5463C21.6974 19.4165 22.4028 20.122 23.273 20.122H35.878V32.7269C35.878 33.5971 36.5834 34.3025 37.4536 34.3025C38.3238 34.3025 39.0292 33.5971 39.0292 32.7269L39.0292 18.5463Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}
