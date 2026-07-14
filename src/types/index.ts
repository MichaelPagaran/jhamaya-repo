/** A single portfolio project */
export interface Project {
    slug: string;
    title: string;
    description: string;
    /** Short category label shown on the project card (e.g. "UX Research") */
    tag: string;
    tags: string[];
    date: string;
    year?: string;
    url?: string;
    coverImage?: string;
    screenshots?: string[];
    figmaUrl?: string;
    challenge?: string;
    whatIDid?: string;
    outcome?: string;
    contributions?: string[];
    kpis?: { label: string; value: string }[];
}

/** Navigation link */
export interface NavLink {
    label: string;
    href: string;
}
