import { Project } from "@/types";

/**
 * Returns all projects.
 * Extend this to fetch from a CMS or database in the future.
 */
export async function getAllProjects(): Promise<Project[]> {
    // TODO: Replace with dynamic data source (MDX, Sanity, etc.)
    return [
        {
            slug: "example-project",
            title: "Example Project",
            description: "A short description of what this project does.",
            tags: ["Next.js", "TypeScript", "Tailwind"],
            date: "2024-01-15",
            url: "https://github.com",
        },
    ];
}

/**
 * Returns a single project by slug.
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
    const projects = await getAllProjects();
    return projects.find((p) => p.slug === slug);
}
