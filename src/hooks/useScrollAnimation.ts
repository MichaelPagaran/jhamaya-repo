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

        let mutationObserver: MutationObserver | null = null;

        const timer = setTimeout(() => {
            // Observe any elements currently present in the DOM
            document.querySelectorAll(".anim").forEach((el) => {
                observer.observe(el);
            });

            // Use MutationObserver to observe elements added later (e.g. during hydration or page mount)
            mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node instanceof HTMLElement) {
                            if (node.classList.contains("anim")) {
                                observer.observe(node);
                            }
                            node.querySelectorAll(".anim").forEach((el) => {
                                observer.observe(el);
                            });
                        }
                    });
                });
            });

            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
            });
        }, 150);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
            if (mutationObserver) {
                mutationObserver.disconnect();
            }
        };
    }, [threshold]);
}
