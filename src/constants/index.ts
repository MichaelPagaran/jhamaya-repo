import { NavLink } from "@/types";

export const SITE_META = {
    name: "Portfolio",
    description: "A portfolio showcasing my work and experience.",
    url: "https://yourportfolio.com",
} as const;

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/#about" },
];
