"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current scroll Y position.
 * Useful for showing/hiding elements on scroll.
 */
export function useScrollPosition(): number {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollY;
}
