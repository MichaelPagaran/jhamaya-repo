"use client";

/**
 * Call-to-action section encouraging visitors to get in touch.
 * Features a subtle radial glow behind the headline.
 */
export default function CTASection() {
    return (
        <section
            style={{
                padding: "140px 52px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Radial glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "700px",
                    height: "700px",
                    background:
                        "radial-gradient(circle, var(--accent-glow) 0%, transparent 68%)",
                    pointerEvents: "none",
                }}
            />

            <p
                className="anim d1"
                style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "20px",
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                Let&apos;s Work Together
            </p>

            <h2
                className="display anim d2"
                style={{
                    fontSize: "clamp(52px, 8.5vw, 112px)",
                    lineHeight: 0.93,
                    marginBottom: "48px",
                }}
            >
                Got a project
                <br />
                <span style={{ color: "var(--accent)" }}>in mind?</span>
            </h2>

            <button
                className="anim d3"
                style={{
                    padding: "18px 52px",
                    background: "var(--fg)",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: "100px",
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.01em",
                    transition: "all .2s ease",
                }}
                onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--accent)";
                    el.style.transform = "scale(1.03)";
                    el.style.boxShadow = "0 12px 32px rgba(42,92,255,0.25)";
                }}
                onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--fg)";
                    el.style.transform = "scale(1)";
                    el.style.boxShadow = "none";
                }}
            >
                Let&apos;s Talk →
            </button>
        </section>
    );
}
