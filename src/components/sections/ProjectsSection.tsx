import { Project } from "@/types";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectsSectionProps {
    projects: Project[];
}

/**
 * Selected work section with a 3-column top row and 2-column bottom row.
 * Receives projects as a prop (fetched server-side in page.tsx).
 */
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const topRow = projects.slice(0, 3);
    const bottomRow = projects.slice(3);

    return (
        <section style={{ padding: "120px 52px" }}>
            {/* Section header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: "64px",
                }}
            >
                <div>
                    <p
                        className="anim d1"
                        style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "var(--muted)",
                            marginBottom: "12px",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Selected Work
                    </p>
                    <h2
                        className="display anim d2"
                        style={{
                            fontSize: "clamp(44px, 5.5vw, 80px)",
                            lineHeight: 0.93,
                            fontWeight: "bold",
                        }}
                    >
                        Projects I&apos;ve
                        <br />
                        <span style={{ color: "var(--accent)" }}>
                            Led &amp; Designed
                        </span>
                    </h2>
                </div>
                <span
                    className="anim d3"
                    style={{
                        fontSize: "12px",
                        color: "var(--muted)",
                        fontWeight: 500,
                        paddingBottom: "6px",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    0{projects.length} cases
                </span>
            </div>

            {/* 3-column top row */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                }}
            >
                {topRow.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

            {/* 2-column bottom row */}
            {bottomRow.length > 0 && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "10px",
                        marginTop: "10px",
                    }}
                >
                    {bottomRow.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            wide
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
