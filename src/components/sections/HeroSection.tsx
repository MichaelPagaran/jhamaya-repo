"use client";

import { useCustomCursor } from "@/hooks/useCustomCursor";

/**
 * Hero section — full-viewport, bottom-aligned layout with:
 * - Radial accent glow background
 * - Ghost "UX" watermark text
 * - Large display headline with outline "design." word
 * - Subtitle and two CTA buttons
 * - Scroll indicator (bottom-right)
 */
export default function HeroSection() {
    const { cursorRef, cursorRingRef } = useCustomCursor();

    return (
        <>
            {/* Custom cursor elements */}
            <div ref={cursorRef} className="cursor" />
            <div ref={cursorRingRef} className="cursor-ring" />

            <section
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "0 3.25rem 5.5rem",
                    paddingTop: "6.25rem",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Radial glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "55%",
                        width: "43.75rem",
                        height: "43.75rem",
                        background:
                            "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
                        pointerEvents: "none",
                        transform: "translate(-50%,-50%)",
                    }}
                />

                {/* Ghost "UI/UX" watermark */}
                <div
                    className="display"
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "-3.75rem",
                        transform: "translateY(-52%)",
                        fontSize: "clamp(11.25rem, 30vw, 26.25rem)",
                        color: "transparent",
                        WebkitTextStroke: "1px var(--border)",
                        lineHeight: 1,
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                >
                    UI/UX
                </div>

                {/* Blue accent dot */}
                <div
                    style={{
                        position: "absolute",
                        top: "22%",
                        right: "25%",
                        width: "0.5625rem",
                        height: "0.5625rem",
                        background: "var(--accent)",
                        borderRadius: "50%",
                        boxShadow: "0 0 1rem var(--accent-glow)",
                    }}
                />

                {/* Content */}
                <div
                    style={{ position: "relative", zIndex: 1, maxWidth: "53.75rem" }}
                >
                    <p
                        className="anim d1"
                        style={{
                            fontSize: "0.6875rem",
                            fontWeight: 700,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                            marginBottom: "1.5rem",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Product Designer — Available for work
                    </p>

                    <h1
                        className="display anim d2"
                        style={{
                            fontSize: "clamp(3.75rem, 9.5vw, 8.125rem)",
                            lineHeight: 0.93,
                            letterSpacing: "-0.01em",
                            marginBottom: "2rem",
                            fontWeight: "bold",
                        }}
                    >
                        Bringing{" "}
                        <span style={{ color: "var(--accent)" }}>clarity</span>
                        <br />
                        to technical
                        <br />
                        products through
                        <br />
                        <span
                            style={{
                                WebkitTextStroke: "2px var(--fg)",
                                color: "transparent",
                            }}
                        >
                            design.
                        </span>
                    </h1>

                    <p
                        className="anim d3"
                        style={{
                            fontSize: "1.125rem",
                            color: "var(--muted)",
                            maxWidth: "28.75rem",
                            lineHeight: 1.75,
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Designing the interfaces that make highly technical software easy to use. Focused on security systems, data tools, and enterprise products.
                    </p>

                    <div
                        className="anim d4"
                        style={{ display: "flex", gap: "0.875rem", marginTop: "2.75rem" }}
                    >
                        <button
                            style={{
                                padding: "0.875rem 2.125rem",
                                background: "var(--accent)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "100px",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                fontFamily: "'DM Sans', sans-serif",
                                transition:
                                    "transform .15s ease, box-shadow .15s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform =
                                    "translateY(-2px)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow =
                                    "0 0.625rem 1.75rem rgba(42,92,255,0.28)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform =
                                    "translateY(0)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = "none";
                            }}
                        >
                            View Projects →
                        </button>

                        <button
                            style={{
                                padding: "0.875rem 2.125rem",
                                background: "transparent",
                                color: "var(--fg)",
                                border: "1.5px solid var(--border)",
                                borderRadius: "100px",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                fontFamily: "'DM Sans', sans-serif",
                                transition: "border-color .2s ease",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "var(--muted2)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "var(--border)";
                            }}
                        >
                            About Me
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className="anim d5"
                    style={{
                        position: "absolute",
                        bottom: "2.75rem",
                        right: "3.25rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    <span
                        style={{
                            fontSize: "0.625rem",
                            color: "var(--muted2)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Scroll
                    </span>
                    <div
                        style={{
                            width: "1px",
                            height: "3rem",
                            background:
                                "linear-gradient(to bottom, var(--muted2), transparent)",
                        }}
                    />
                </div>
            </section>
        </>
    );
}
