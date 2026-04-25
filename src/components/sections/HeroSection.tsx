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
                    padding: "0 52px 88px",
                    paddingTop: "100px",
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
                        width: "700px",
                        height: "700px",
                        background:
                            "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
                        pointerEvents: "none",
                        transform: "translate(-50%,-50%)",
                    }}
                />

                {/* Ghost "UX" watermark */}
                <div
                    className="display"
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "-60px",
                        transform: "translateY(-52%)",
                        fontSize: "clamp(180px, 30vw, 420px)",
                        color: "transparent",
                        WebkitTextStroke: "1px var(--border)",
                        lineHeight: 1,
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                >
                    UX
                </div>

                {/* Blue accent dot */}
                <div
                    style={{
                        position: "absolute",
                        top: "22%",
                        right: "25%",
                        width: "9px",
                        height: "9px",
                        background: "var(--accent)",
                        borderRadius: "50%",
                        boxShadow: "0 0 16px var(--accent-glow)",
                    }}
                />

                {/* Content */}
                <div
                    style={{ position: "relative", zIndex: 1, maxWidth: "860px" }}
                >
                    <p
                        className="anim d1"
                        style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                            marginBottom: "24px",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Product Designer — Available for work
                    </p>

                    <h1
                        className="display anim d2"
                        style={{
                            fontSize: "clamp(60px, 9.5vw, 130px)",
                            lineHeight: 0.93,
                            letterSpacing: "-0.01em",
                            marginBottom: "32px",
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
                            fontSize: "18px",
                            color: "var(--muted)",
                            maxWidth: "460px",
                            lineHeight: 1.75,
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        I turn complex systems into intuitive experiences —
                        specializing in security, data, and enterprise products.
                    </p>

                    <div
                        className="anim d4"
                        style={{ display: "flex", gap: "14px", marginTop: "44px" }}
                    >
                        <button
                            style={{
                                padding: "14px 34px",
                                background: "var(--accent)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "100px",
                                fontSize: "14px",
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
                                    "0 10px 28px rgba(42,92,255,0.28)";
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
                                padding: "14px 34px",
                                background: "transparent",
                                color: "var(--fg)",
                                border: "1.5px solid var(--border)",
                                borderRadius: "100px",
                                fontSize: "14px",
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
                        bottom: "44px",
                        right: "52px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "10px",
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
                            height: "48px",
                            background:
                                "linear-gradient(to bottom, var(--muted2), transparent)",
                        }}
                    />
                </div>
            </section>
        </>
    );
}
