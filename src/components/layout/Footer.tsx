"use client";

import { SOCIAL_LINKS } from "@/constants";

/**
 * Site footer with copyright on the left and social links on the right.
 */
export default function Footer() {
    console.log("Footer rendered with links:", SOCIAL_LINKS);
    return (
        <footer
            style={{
                padding: "36px 52px",
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <span
                style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                © {new Date().getFullYear()} Designer Portfolio. All rights
                reserved.
            </span>

            <div style={{ display: "flex", gap: "24px" }}>
                {SOCIAL_LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                        style={{
                            fontSize: "13px",
                            color: "var(--muted)",
                            textDecoration: "none",
                            fontFamily: "'DM Sans', sans-serif",
                            transition: "color .2s ease",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                                "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                                "var(--muted)";
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </footer>
    );
}
