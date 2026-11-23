import { NavLink } from "@/types";

export const SITE_META = {
    name: "Jam — Product & Multidisciplinary Designer",
    description:
        "Designer based in the Philippines crafting clear, thoughtful digital experiences across product design, systems, and visual craft.",
    url: "https://yourportfolio.com",
} as const;

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Recommendations", href: "#recommendations" },
];

export const SOCIAL_LINKS = [
    { label: "LINKEDIN ↗", href: "https://www.linkedin.com/in/jhamaya-santiago-41690b221/" },
    { label: "ARE.NA ↗", href: "#" },
    { label: "READ.CV ↗", href: "#" },
] as const;

export const MARQUEE_ITEMS = [
    "UX Design",
    "Product Design",
    "Design Systems",
    "User Research",
    "Interaction Design",
    "Prototyping",
    "Figma",
    "Usability Testing",
] as const;
