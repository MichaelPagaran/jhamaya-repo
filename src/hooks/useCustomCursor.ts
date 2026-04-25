"use client";

import { useEffect, useRef } from "react";

/**
 * Manages the custom cursor: a solid dot that snaps to the pointer
 * and a lagging ring that uses requestAnimationFrame lerp for a smooth trail.
 *
 * Returns refs to attach to the two cursor DOM elements.
 *
 * Usage:
 *   const { cursorRef, cursorRingRef } = useCustomCursor();
 *   <div ref={cursorRef} className="cursor" />
 *   <div ref={cursorRingRef} className="cursor-ring" />
 */
export function useCustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const ring = cursorRingRef.current;
        if (!cursor || !ring) return;

        let mouseX = 0,
            mouseY = 0,
            ringX = 0,
            ringY = 0;
        let rafId: number;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            rafId = requestAnimationFrame(animate);
        };

        const onEnter = () => {
            cursor.classList.add("hovering");
            ring.classList.add("hovering");
        };

        const onLeave = () => {
            cursor.classList.remove("hovering");
            ring.classList.remove("hovering");
        };

        document.addEventListener("mousemove", onMove);
        rafId = requestAnimationFrame(animate);

        // Attach hover states to all interactive elements
        const interactives = document.querySelectorAll("a, button, [data-hover]");
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return { cursorRef, cursorRingRef };
}
