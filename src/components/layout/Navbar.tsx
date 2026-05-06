"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";

/**
 * Fixed top navigation bar.
 * - Shows a "J" monogram logo mark on the left.
 * - Pill-style nav with active-state highlight.
 * - "Contact Me" CTA on the right.
 * - Applies backdrop blur + bottom border after scrolling past 20px.
 */
export default function Navbar() {
    const [activeNav, setActiveNav] = useState("Home");
    const scrollY = useScrollPosition();
    const scrolled = scrollY > 20;

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "0.875rem 3.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: scrolled
                    ? "rgba(250,249,246,0.96)"
                    : "rgba(250,249,246,0.88)",
                backdropFilter: "blur(0.875rem)",
                borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
                boxShadow: scrolled
                    ? "0 0.125rem 1.5rem rgba(30,28,26,0.07)"
                    : "none",
                transition:
                    "background .3s ease, border-bottom .3s ease, box-shadow .3s ease",
            }}
        >
            {/* Left: logo + pill nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {/* J monogram */}
                <div
                    style={{
                        width: "2rem",
                        height: "2rem",
                        background: "var(--accent)",
                        borderRadius: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        color: "#fff",
                        fontSize: "0.875rem",
                        fontFamily: "'DM Sans', sans-serif",
                        flexShrink: 0,
                    }}
                >
                    J
                </div>

                {/* Pill nav */}
                <nav
                    style={{
                        display: "flex",
                        gap: "0.125rem",
                        background: "var(--surface)",
                        borderRadius: "6.25rem",
                        padding: "0.25rem",
                    }}
                >
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => setActiveNav(link.label)}
                            style={{
                                padding: "0.375rem 1.125rem",
                                borderRadius: "6.25rem",
                                border: "none",
                                background:
                                    activeNav === link.label
                                        ? "#fff"
                                        : "transparent",
                                color:
                                    activeNav === link.label
                                        ? "var(--fg)"
                                        : "var(--muted)",
                                fontSize: "0.8125rem",
                                fontWeight: activeNav === link.label ? 600 : 400,
                                fontFamily: "'DM Sans', sans-serif",
                                boxShadow:
                                    activeNav === link.label
                                        ? "0 0.0625rem 0.25rem rgba(30,28,26,0.07)"
                                        : "none",
                                transition: "all .2s ease",
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Right: Contact CTA */}
            <button
                style={{
                    padding: "0.625rem 1.5rem",
                    background: "var(--fg)",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: "6.25rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.01em",
                    transition: "background .2s ease",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                        "var(--accent)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                        "var(--fg)";
                }}
            >
                Contact Me
            </button>
        </header>
    );
}
