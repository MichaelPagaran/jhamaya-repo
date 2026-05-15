import { Project } from "@/types";

/**
 * Returns all portfolio projects.
 * Extend this to fetch from a CMS or database in the future.
 */
export async function getAllProjects(): Promise<Project[]> {
    return [
        {
            slug: "cyber-incident-management",
            title: "Cyber Incident & Management",
            description:
                "Simplified a security operations workflow designed to help SOC Teams review alerts, create cases, investigate incidents, and track response progress.",
            tag: "Security Ops",
            tags: ["UX Design", "Security", "Dashboard"],
            date: "2024-06-01",
            screenshots: ["/placeholder-1.jpg", "/placeholder-2.jpg"],
            figmaUrl: "#",
        },
        {
            slug: "cyber-risk-management",
            title: "Cyber Risk Management",
            description:
                "Designed a clearer workflow for a complex risk process across assessment, treatment, and monitoring.",
            tag: "Risk Design",
            tags: ["UX Design", "Risk", "Enterprise"],
            date: "2024-03-01",
            screenshots: ["/placeholder-3.jpg", "/placeholder-1.jpg"],
            figmaUrl: "#",
            challenge: "The process was technically dense and hard to follow.",
            whatIDid: "Restructured the flow into clearer stages and improved how users move from risk identification to monitoring.",
            outcome: "A more usable system with better clarity, navigation, and workflow alignment",
        },
        {
            slug: "sniff-and-detect",
            title: "Sniff and Detect",
            description:
                "Designed a security scanning experience that simplifies technical results for all users.",
            tag: "UX Research",
            tags: ["UX Research", "Security", "Usability"],
            date: "2023-11-01",
            screenshots: ["/placeholder-2.jpg", "/placeholder-3.jpg"],
            figmaUrl: "#",
        },
        {
            slug: "data-visibility-platform",
            title: "Data Visibility Platform",
            description:
                "Built an intuitive dashboard that transforms complex data streams into actionable insights for non-technical stakeholders.",
            tag: "Dashboard",
            tags: ["Dashboard", "Data Viz", "Enterprise"],
            date: "2023-08-01",
            screenshots: ["/placeholder-1.jpg", "/placeholder-2.jpg"],
            figmaUrl: "#",
        },
        {
            slug: "identity-access-portal",
            title: "Identity Access Portal",
            description:
                "Redesigned the user onboarding flow for an enterprise IAM system, reducing setup time by 60%.",
            tag: "Enterprise UX",
            tags: ["Enterprise UX", "IAM", "Onboarding"],
            date: "2023-05-01",
            screenshots: ["/placeholder-3.jpg", "/placeholder-1.jpg"],
            figmaUrl: "#",
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
