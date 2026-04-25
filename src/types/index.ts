/** A single portfolio project */
export interface Project {
    slug: string;
    title: string;
    description: string;
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
