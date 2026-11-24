"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";

/**
 * Centered floating pill navigation matching Figma node 8:197 and 121:1358.
 * - Fixed consistent outer width (462px) and fixed per-item widths so switching
 *   between Home, Projects, Stack, and Recommendations never shifts the pill width.
 * - Supports multi-page routing between `/` and `/projects` (and `/projects/[slug]`).
 */
const ITEM_WIDTHS: Record<string, string> = {
    Home: "w-[90px]",
    Projects: "w-[94px]",
    Stack: "w-[82px]",
    Recommendations: "w-[146px]",
};

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [activeNav, setActiveNav] = useState("Home");

    useEffect(() => {
        if (pathname?.startsWith("/projects")) {
            setActiveNav("Projects");
        } else {
            setActiveNav("Home");
        }
    }, [pathname]);

    const handleNavClick = (label: string, href: string) => {
        setActiveNav(label);

        if (href === "/projects") {
            router.push("/projects");
            return;
        }

        if (href === "/") {
            if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                router.push("/");
            }
            return;
        }

        if (href.startsWith("/#")) {
            const targetId = href.slice(2);
            if (pathname === "/") {
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            } else {
                router.push(href);
            }
        }
    };

    return (
        <header
            className="nav-enter sticky top-[28px] z-50 mx-auto mb-[36px] flex w-full max-w-[1440px] items-center justify-center px-[20px] pt-[12px] sm:px-[56px]"
            data-node-id="8:197"
            data-name="Navigation"
        >
            <nav
                aria-label="Primary navigation"
                className="flex w-[462px] max-w-full shrink-0 items-center justify-between gap-[6px] overflow-clip rounded-[99px] border border-[#e5e5e5] bg-white/95 px-[12px] py-[10px] shadow-[1px_1px_16.7px_-4px_rgba(0,0,0,0.15)] backdrop-blur-md"
                data-node-id="8:201"
                data-name="Links"
            >
                {NAV_LINKS.map((link) => {
                    const isActive = activeNav === link.label;
                    const widthClass = ITEM_WIDTHS[link.label] ?? "px-[16px]";
                    return (
                        <button
                            key={link.label}
                            type="button"
                            onClick={() => handleNavClick(link.label, link.href)}
                            className={`font-inter flex h-[38px] ${widthClass} shrink-0 cursor-pointer items-center justify-center rounded-[999px] border text-[13px] font-semibold leading-normal whitespace-nowrap transition-colors duration-200 ${
                                isActive
                                    ? "border-[#e5e5e5] bg-[#e5e5e5] text-[#727580]"
                                    : "border-transparent bg-transparent text-[#a9a9a9] hover:text-[#727580]"
                            }`}
                        >
                            {link.label}
                        </button>
                    );
                })}
            </nav>
        </header>
    );
}
