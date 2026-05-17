"use client";

/**
 * Design process section on a dark background.
 * 4-column grid showing the Discover → Define → Design → Deliver steps.
 */
const STEPS = [
    {
        num: "01",
        title: "Understand",
        desc: "Before I start designing, I need to know the purpose behind the work. I dive into what users need and what the business wants to achieve. If we don’t know why we’re building something, we’re just guessing.",
    },
    {
        num: "02",
        title: "Plan",
        desc: "I take all those insights and turn them into a clear path forward. This is where I define the specific problem we’re solving and set the ground rules so the team stays aligned on the goal.",
    },
    {
        num: "03",
        title: "Create",
        desc: "This is where the ideas become real. I move from quick sketches to polished designs, constantly testing and refining the details until the experience feels natural and easy to use.",
    },
    {
        num: "04",
        title: "Launch",
        desc: "A design isn’t finished until it’s in the hands of users. I work closely with the people building it to make sure the final product is high quality, works as intended, and actually solves the problem.",
    },
];

export default function ProcessSection() {
    return (
        <section
            id="process"
            style={{
                padding: "7.5rem 3.25rem",
                background: "var(--card-hover)",
            }}
        >
            <div style={{ maxWidth: "75rem", margin: "0 auto" }}>
                <p
                    className="anim d1"
                    style={{
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: "0.75rem",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    Process
                </p>

                <h2
                    className="display anim d2"
                    style={{
                        fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
                        lineHeight: 0.93,
                        color: "var(--bg)",
                        marginBottom: "4.5rem",
                        fontWeight: "bold",
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
                padding: "2.5rem 1.75rem",
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
                    fontSize: "4rem",
                    color: "var(--accent)",
                    opacity: 0.35,
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                }}
            >
                {step.num}
            </div>
            <h3
                style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--bg)",
                    marginBottom: "0.625rem",
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                {step.title}
            </h3>
            <p
                style={{
                    fontSize: "0.875rem",
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
