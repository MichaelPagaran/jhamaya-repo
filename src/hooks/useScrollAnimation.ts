"use client";

import { useEffect } from "react";

/**
 * Observes all elements with the `.anim` class and adds `.visible`
 * when they cross the viewport threshold, triggering the `fadeUp` animation
 * defined in globals.css.
 *
 * Call once at the root page level after all sections have mounted.
 */
export function useScrollAnimation(threshold = 0.12) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold }
        );

        document.querySelectorAll(".anim").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [threshold]);
}
