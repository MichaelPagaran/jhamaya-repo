import { MARQUEE_ITEMS } from "@/constants";

/**
 * Dark scrolling ticker band between the Hero and Projects sections.
 * Uses a duplicated item array to create a seamless infinite loop.
 */
export default function MarqueeSection() {
    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

    return (
        <div
            style={{
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "14px 0",
                overflow: "hidden",
                background: "var(--card-hover)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "48px",
                    animation: "marquee 20s linear infinite",
                    whiteSpace: "nowrap",
                }}
            >
                {items.map((item, i) => (
                    <span
                        key={i}
                        style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            color:
                                i % 3 === 0
                                    ? "var(--accent)"
                                    : "rgba(250,249,246,0.7)",
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            flexShrink: 0,
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        {item} ✦
                    </span>
                ))}
            </div>
        </div>
    );
}
