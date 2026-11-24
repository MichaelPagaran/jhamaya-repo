/** A single portfolio project or case study */
export interface Project {
    slug: string;
    title: string;
    /** Short subtitle shown in card headers and under the main title on the detail page */
    subtitle?: string;
    description: string;
    /** Category section on the Projects page */
    category?: "product-design" | "graphic-design" | "case-study";
    /** Short category label shown on the project card (e.g. "UX Research") */
    tag: string;
    tags: string[];
    date: string;
    year?: string;
    /** DotOS-style metadata column fields */
    role?: string;
    teammate?: string;
    tools?: string;
    timeline?: string;
    /** DotOS-style right column & body sections */
    context?: string[];
    intro?: string[];
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
