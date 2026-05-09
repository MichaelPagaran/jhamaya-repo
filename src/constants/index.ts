import { NavLink } from "@/types";

export const SITE_META = {
    name: "Designer Portfolio",
    description:
        "Bringing clarity to technical products through design. Specializing in security, data, and enterprise products.",
    url: "https://yourportfolio.com",
} as const;

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#cta" },
];

export const SOCIAL_LINKS = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jhamaya-santiago-41690b221/" },
    { label: "Dribbble", href: "#" },
    { label: "Twitter", href: "#" },
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
