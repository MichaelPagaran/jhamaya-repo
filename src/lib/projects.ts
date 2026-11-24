import { Project } from "@/types";
import { getCaseStudies } from "./caseStudies";

/**
 * Returns all portfolio projects across Product Design and Graphic Design,
 * written in Jam's direct, conversational voice with zero em-dashes.
 */
export async function getAllProjects(): Promise<Project[]> {
    return [
        {
            slug: "aquila-cyber-security",
            title: "AQUILA",
            subtitle: "All-in-One Cyber Security Platform",
            description:
                "An all-in-one cyber security platform built with the Research and Development Department to replace scattered domain tools with one clear, friendly workspace that communicates openly with users and cuts out unnecessary clicks.",
            category: "product-design",
            tag: "Cyber Security",
            tags: ["All-in-One Platform", "Cybersecurity", "Design System"],
            date: "2024-01-01",
            year: "2024 - 2026",
            role: "Lead Product Designer, Design & Sign-off",
            teammate: "Research and Development Department",
            tools: "Figma, Jira, OpenProject",
            timeline: "2024 - 2026",
            context: [
                "One of the biggest problems in cyber security today is that every security domain has a different tool in the market. Teams end up jumping between separate products for risk management, alert monitoring, incident investigation, and security training.",
                "On top of that, most existing tools are overly technical, intimidating to look at, and take way too many clicks just to finish a simple task. Together with the Research and Development Department, we built AQUILA as a true all-in-one cyber security platform that brings every domain under one roof while keeping the experience easy, welcoming, and clear.",
            ],
            intro: [
                "When security tools dump raw technical logs on screen without explaining what they mean, users either get overwhelmed or waste time clicking through endless menus. Across the Research and Development Department, our focus was making the platform actively communicate with the user in plain, helpful language instead of making them guess.",
                "We designed the workflows so everything from live risk gauges and log collector health to step-by-step investigation guidebooks, AI-assisted risk summaries, and employee phishing assessments lives in one connected system. By cutting down the clicks, guiding users through each step, and handling the design and sign-off alongside engineering, we turned heavy security operations into a workspace that feels approachable and effortless to use.",
            ],
            screenshots: [
                "/aquila/aquila-1-dashboard.png",
                "/aquila/aquila-2-alerts.png",
                "/aquila/aquila-3-investigation.jpg",
                "/aquila/aquila-4-risk-analysis.jpg",
                "/aquila/aquila-5-assessments.png",
            ],
            figmaUrl: "#",
            contributions: [
                "Led product design across the platform while contributing directly to hands-on UI/UX design and design sign-off from 2024 to 2026.",
                "Collaborated closely with the Research and Development Department to unify separate cyber security domains into one friendly, low-click platform.",
            ],
            challenge:
                "Every cyber security domain usually requires a different tool in the market, and most of them are overly technical, intimidating, and require far too many clicks.",
            whatIDid:
                "Worked as a team across the Research and Development Department to bring alerts, guided case investigations, risk mapping, and security assessments into one communicative, easy-to-navigate platform.",
            outcome:
                "An all-in-one cyber security platform that removes tool-switching, reduces clicks, and communicates clearly with users without feeling intimidating.",
        },
        {
            slug: "dayung",
            title: "Dayung",
            subtitle: "Financial & Governance Management System for HOAs.",
            description:
                "A passion project we built to make managing HOA fines, property registries, facility bookings, and financial audits simple and clear for both homeowners and staff.",
            category: "product-design",
            tag: "B2B SaaS · Passion Project",
            tags: ["HOA Governance", "Financial Audit", "Product UX/UI"],
            date: "2026-05-01",
            year: "May 2026",
            role: "Product Designer (UX/UI)",
            teammate: "Developer",
            tools: "Figma",
            timeline: "May 2026",
            context: [
                "Managing community finances in a Homeowners Association usually means dealing with messy spreadsheets and paper receipts. Staff spend hours tracking down unpaid fines, and homeowners rarely get a clear picture of where their money goes.",
                "We started Dayung in May 2026 as a passion project alongside a developer to fix that. It is a Financial and Governance Management System built to make fine tracking, dues collection, facility management, and financial audits straightforward for everyone in the community.",
            ],
            intro: [
                "In most neighborhoods, preparing for an annual audit is stressful because records are scattered across different files. When people cannot see how funds, facility income, or property balances are handled, it creates unnecessary friction between the board and the residents.",
                "We designed Dayung so non-technical staff and homeowners can review property details, track overdue balances, schedule community facilities, and check expense and income audit trails without needing an accounting background. Our goal was simple: keep the workflows fast, easy to follow, and completely transparent.",
            ],
            screenshots: [
                "/dayung/dayung-1-property-details.jpg",
                "/dayung/dayung-2-facilities.jpg",
                "/dayung/dayung-3-facility-details.jpg",
            ],
            figmaUrl: "#",
            contributions: [
                "Designed the end-to-end UX/UI with a developer for the HOA Financial and Governance Management System, focusing on simple HOA fine management and audit-ready financial tracking.",
                "Turned complicated HOA governance, property registry, facility scheduling, and auditing steps into clean, easy workflows for homeowners and staff.",
            ],
            challenge:
                "Tracking HOA fines, facility income, and preparing for financial audits is often messy and confusing for non-technical community staff and homeowners.",
            whatIDid:
                "Worked closely with a developer to design a clean, guided interface for managing property balances, facility reservations, expenses, and audit-ready financial records.",
            outcome:
                "An easy-to-use system that gives both HOA staff and residents clear visibility into community finances and daily operations.",
        },
        {
            slug: "dayung-brand",
            title: "Dayung",
            subtitle: "Logo and brand identity for an HOA Financial & Governance System",
            description:
                "I designed the logo and visual identity for Dayung, a passion project built around a simple house silhouette and colors chosen for trust and transparency.",
            category: "graphic-design",
            tag: "Logo & Brand Identity",
            tags: ["Logo Design", "Color Psychology", "Brand Identity"],
            date: "2026-05-01",
            year: "May 2026",
            role: "Logo & Brand Designer",
            teammate: "Solo Project",
            tools: "Adobe Illustrator, Figma",
            timeline: "May 2026",
            context: [
                "Dayung is a passion project I started around May 2026. It is a Financial and Governance Management System for Homeowners Associations (HOAs) made to simplify how communities handle HOA fines and financial audits.",
                "Because money and audits can easily become a sensitive topic in any neighborhood, I wanted the brand to feel honest, calm, and dependable right from the first look.",
            ],
            intro: [
                "For the icon, I used a simple house silhouette broken into two shapes: a roof arch on top and a rounded base underneath. Since the project is for homeowners and community staff, the house shape immediately connects the brand to home, shelter, and neighborhood unity.",
                "For the colors, I picked a soft cyan and teal blue gradient based on color psychology. Blue is closely tied to trust, stability, and security, which matters a lot when people are dealing with money and audits. The lighter aqua tone represents clarity and transparency, matching the whole point of Dayung: keeping HOA fines and financial records open and easy to trust.",
            ],
            screenshots: ["/figma/dayung-logo-color-full.svg"],
            figmaUrl: "#",
        },
        {
            slug: "triplewisk",
            title: "TripleWisk",
            subtitle: "Homemade fresh goods.",
            description:
                "I designed the logo and brand identity for TripleWisk, a bakery started by three pastry chefs who wanted a playful, welcoming brand that never feels intimidating or overpriced.",
            category: "graphic-design",
            tag: "Logo & Brand Identity",
            tags: ["Logo Design", "Brand Identity", "Illustration"],
            date: "2026-10-01",
            year: "October 2026",
            role: "Logo & Brand Designer",
            teammate: "Solo Designer",
            tools: "Adobe Illustrator, Figma",
            timeline: "October 2026",
            context: [
                "TripleWisk was founded by three pastry chefs who teamed up to bake fresh desserts and pastries together. That is the exact story behind the name and why there are three whisks sharing one mixing bowl in the logo.",
                "When we talked about the WHY behind their brand around October 2026, their main concern was how people perceive artisan bakeries. A lot of pastry shops use super formal, luxury branding that makes customers assume the menu is way too expensive before they even walk in. Their goal was to serve high-quality, fresh baked goods with warm service at a price that feels accessible to everyone.",
            ],
            intro: [
                "To bring their story to life, I designed the mark in Adobe Illustrator and Figma around three whisks coming together inside a single tilted mixing bowl, complete with little motion lines on the side and a custom hand-lettered wordmark where the 'i' is dotted with a tiny whisk. It represents the three chefs collaborating in the kitchen and the lively, hands-on craft that goes into their pastries every day.",
                "I kept the curves soft, rounded, and playful rather than stiff or overly polished so the brand immediately feels friendly and approachable. For the colors, I paired a warm golden-honey bake tone with deep espresso cocoa brown rooted in color psychology: warm golden and chocolate tones trigger feelings of freshly baked crust, comfort, and home baking, reassuring neighbors that they are getting honest, fresh quality goods without an intimidating luxury price tag.",
            ],
            screenshots: [
                "/triplewhisk/logo-wordmark.png",
                "/triplewhisk/illustration-dark.jpg",
                "/triplewhisk/flour-wood-stencil.jpg",
                "/triplewhisk/ig-now-whisking.png",
                "/triplewhisk/ig-banana-bread.png",
                "/triplewhisk/ig-neighbour-brownies.png",
            ],
            figmaUrl: "#",
        },
        {
            slug: "noli-me-tangere-game",
            title: "Jose Rizal's Noli Me Tangere Educational Mobile Game",
            subtitle: "Interactive Historical Literature Mobile Game",
            description:
                "I designed the UI/UX, game mechanics, and player journey for an educational mobile game that turns Jose Rizal's classic novel into an interactive story.",
            category: "product-design",
            tag: "Educational Game",
            tags: ["Mobile Game", "Gamification", "UX Design"],
            date: "2022-01-01",
            year: "2022 - 2023",
            role: "UI/UX & Game Designer",
            teammate: "Academic & Game Dev Team",
            tools: "Figma, Aseprite, ibisPaint, Photoshop",
            timeline: "2022 - 2023",
            context: [
                "Many high school students find it hard to get into 19th-century literature when they only read it from heavy textbooks. Memorizing names and chapters can feel like a chore instead of a story.",
                "We built this mobile game to turn Jose Rizal's Noli Me Tangere into an interactive experience where students actually play through the chapters and connect with the characters.",
            ],
            intro: [
                "When designing an educational game, it is easy to lean too far into boring quizzes or too far into gameplay that forgets the lesson. My focus was finding the sweet spot between fun game mechanics and clear learning goals.",
                "Using human-centered design, I mapped out the player journey, dialogue screens, and chapter quests so the interface felt natural on mobile and kept students curious about what happens next in the book.",
            ],
            screenshots: ["/noli-mockup.png"],
            figmaUrl: "#",
            contributions: [
                "Designed the UI/UX, game mechanics, and interactive player journeys for the mobile app.",
                "Used human-centered design to turn historical literature into an engaging mobile game that helped students remember the story better.",
            ],
            challenge:
                "Students often lose interest when studying classic literature through plain text alone.",
            whatIDid:
                "Designed mobile game interfaces, character dialogue flows, and quest progression that balanced fun gameplay with the book's actual plot.",
            outcome:
                "An engaging mobile learning experience that made studying Noli Me Tangere much more enjoyable and improved student retention.",
        },
    ];
}

/**
 * Looks up any project or case study by slug for the `/projects/[slug]` detail page.
 */
export async function getProjectBySlug(
    slug: string
): Promise<Project | undefined> {
    const [projects, caseStudies] = await Promise.all([
        getAllProjects(),
        getCaseStudies(),
    ]);
    return [...projects, ...caseStudies].find((p) => p.slug === slug);
}
