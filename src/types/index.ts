/** A single portfolio project */
export interface Project {
    slug: string;
    title: string;
    description: string;
    /** Short category label shown on the project card (e.g. "UX Research") */
    tag: string;
    tags: string[];
    date: string;
    url?: string;
    coverImage?: string;
}

/** Navigation link */
export interface NavLink {
    label: string;
    href: string;
}
