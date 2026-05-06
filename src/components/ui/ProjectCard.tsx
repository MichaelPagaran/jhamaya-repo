"use client";

import { useState } from "react";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    /** When true, uses wider padding and larger text (for the bottom 2-column row) */
    wide?: boolean;
}

/**
 * Portfolio project card with a dark-flip hover effect.
 * - Background flips from cream to dark on hover.
 * - A blue gradient accent bar slides in from the left at the top.
 * - Tag pill, title, description, and an arrow icon that rotates 45° on hover.
 */
export default function ProjectCard({ project, wide = false }: ProjectCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-hover="true"
            style={{
                background: hovered ? "#242220" : "#f0ede8",
                padding: wide ? "3.25rem 2.75rem" : "2.75rem 2.25rem",
                transition: "background 0.3s ease",
                aspectRatio: wide ? "auto" : "4/3",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                borderRadius: "1rem",
                cursor: "none",
            }}
        >
            {/* Animated top accent bar */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "0.15625rem",
                    background: "linear-gradient(90deg, #2a5cff, #7a9cff)",
                    transform: hovered ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.35s ease",
                    borderRadius: "1rem 1rem 0 0",
                }}
            />

            <div>
                {/* Tag pill */}
                <span
                    style={{
                        display: "inline-block",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: hovered ? "#7a9cff" : "#a09e96",
                        border: `1px solid ${hovered ? "rgba(122,156,255,0.4)" : "#e2dfd8"}`,
                        padding: "0.25rem 0.6875rem",
                        borderRadius: "6.25rem",
                        marginBottom: "1.25rem",
                        transition: "all 0.3s ease",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    {project.tag}
                </span>

                {/* Title */}
                <h3
                    style={{
                        fontSize: wide ? "1.625rem" : "1.25rem",
                        fontWeight: 700,
                        lineHeight: 1.25,
                        color: hovered ? "#faf9f6" : "#1e1c1a",
                        marginBottom: "0.875rem",
                        transition: "color 0.3s ease",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.74,
                        color: hovered ? "rgba(250,249,246,0.45)" : "#a09e96",
                        maxWidth: "23.75rem",
                        transition: "color 0.3s ease",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    {project.description}
                </p>
            </div>

            {/* Footer row */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "2.25rem",
                }}
            >
                <span
                    style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: hovered ? "#7a9cff" : "#a09e96",
                        letterSpacing: "0.02em",
                        transition: "color 0.3s ease",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    View Case Study →
                </span>

                {/* Arrow circle */}
                <div
                    style={{
                        width: "2.375rem",
                        height: "2.375rem",
                        borderRadius: "50%",
                        background: hovered ? "#2a5cff" : "#e2dfd8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        transform: hovered ? "rotate(-45deg)" : "rotate(0deg)",
                    }}
                >
                    <span
                        style={{
                            color: hovered ? "#fff" : "#a09e96",
                            fontSize: "0.9375rem",
                        }}
                    >
                        ↗
                    </span>
                </div>
            </div>
        </div>
    );
}
