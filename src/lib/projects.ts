import { Project } from "@/types";

/**
 * Returns all portfolio projects.
 * Extend this to fetch from a CMS or database in the future.
 */
export async function getAllProjects(): Promise<Project[]> {
    return [
        {
            slug: "aquila-cyber-security",
            title: "AQUILA All-in-one Cyber Security Platform",
            description:
                "Managed the end-to-end design and delivery of a cyber security unified enterprise platform.",
            tag: "Cyber Security",
            tags: ["Cybersecurity", "Design System", "Enterprise"],
            date: "2024-01-01",
            year: "2024 - 2026",
            screenshots: ["/aquila-mockup.png"],
            figmaUrl: "#",
            contributions: [
                "Managed the end-to-end design and delivery of a cyber security unified enterprise platform.",
                "Established a scalable design system to synchronize product and development workflows, accelerating time-to-market."
            ],
        },
        {
            slug: "dayung",
            title: "Dayung",
            description:
                "Responsible for the end-to-end UX/UI for the AI-powered B2B SaaS platform, simplifying financial management and asset tracking for non-technical users.",
            tag: "B2B SaaS",
            tags: ["Enterprise UX", "AI", "Financial UX"],
            date: "2025-01-01",
            year: "2025 - Present",
            screenshots: ["/dayung-mockup.png", "/dayung-1cover.jpg"],
            figmaUrl: "#",
            contributions: [
                "Responsible for the end-to-end UX/UI for the AI-powered B2B SaaS platform, simplifying financial management and asset tracking for non-technical users.",
                "Turned complex compliance rules into easy-to-use digital tools built for Philippine HOAs and corporate teams."
            ],
        },
        {
            slug: "noli-me-tangere-game",
            title: "Jose Rizal's Noli Me Tangere Educational Mobile Game",
            description:
                "Designed the UI/UX, game mechanics, and interactive user journeys for a mobile educational app, balancing gamification elements with educational objectives.",
            tag: "Educational Game",
            tags: ["Mobile Game", "Gamification", "UX Design"],
            date: "2022-01-01",
            year: "2022 - 2023",
            screenshots: ["/noli-mockup.png"],
            figmaUrl: "#",
            contributions: [
                "Designed the UI/UX, game mechanics, and interactive user journeys for a mobile educational app, balancing gamification elements with educational objectives.",
                "Utilized human-centered design principles to turn the historical literature into an engaging, accessible mobile experience that boosted student retention."
            ],
        },
    ];
}

/**
 * Returns a single project by slug.
 */
export async function getProjectBySlug(
    slug: string
): Promise<Project | undefined> {
    const projects = await getAllProjects();
    return projects.find((p) => p.slug === slug);
}
