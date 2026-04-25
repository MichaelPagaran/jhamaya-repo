"use client";

/**
 * Design process section on a dark background.
 * 4-column grid showing the Discover → Define → Design → Deliver steps.
 */
const STEPS = [
    {
        num: "01",
        title: "Discover",
        desc: "Deep dives into user needs, technical constraints, and business goals.",
    },
    {
        num: "02",
        title: "Define",
        desc: "Synthesizing research into clear problem statements and design principles.",
    },
    {
        num: "03",
        title: "Design",
        desc: "Rapid prototyping, iteration, and high-fidelity execution in Figma.",
    },
    {
        num: "04",
        title: "Deliver",
        desc: "Collaborating with engineers, validating with users, and shipping with impact.",
    },
];

export default function ProcessSection() {
    return (
        <section
            style={{
                padding: "120px 52px",
                background: "var(--card-hover)",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <p
                    className="anim d1"
                    style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: "12px",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    Process
                </p>

                <h2
                    className="display anim d2"
                    style={{
                        fontSize: "clamp(44px, 5.5vw, 80px)",
                        lineHeight: 0.93,
                        color: "var(--bg)",
                        marginBottom: "72px",
                    }}
                >
                    How{" "}
                    <span
                        style={{
                            WebkitTextStroke: "1.5px var(--bg)",
                            color: "transparent",
                        }}
                    >
                        Ideas
                    </span>{" "}
                    Take Shape
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1px",
                    }}
                >
                    {STEPS.map((step, i) => (
                        <ProcessStep key={step.num} step={step} delay={i + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProcessStep({
    step,
    delay,
}: {
    step: (typeof STEPS)[0];
    delay: number;
}) {
    return (
        <div
            className={`anim d${delay}`}
            data-hover="true"
            style={{
                padding: "40px 28px",
                borderLeft: "1px solid rgba(250,249,246,0.08)",
                transition: "background .2s ease",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                    "rgba(42,92,255,0.07)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
        >
            <div
                className="display"
                style={{
                    fontSize: "64px",
                    color: "var(--accent)",
                    opacity: 0.35,
                    lineHeight: 1,
                    marginBottom: "20px",
                }}
            >
                {step.num}
            </div>
            <h3
                style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--bg)",
                    marginBottom: "10px",
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                {step.title}
            </h3>
            <p
                style={{
                    fontSize: "14px",
                    color: "rgba(250,249,246,0.42)",
                    lineHeight: 1.72,
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                {step.desc}
            </p>
        </div>
    );
}
