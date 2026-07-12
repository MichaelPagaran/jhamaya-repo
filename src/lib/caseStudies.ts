import { Project } from "@/types";

/**
 * Returns case studies that contain detailed KPIs, challenges, contributions, and outcomes.
 */
export async function getCaseStudies(): Promise<Project[]> {
    return [
        {
            slug: "cyber-risk-management",
            title: "Cyber Risk Management",
            description:
                "Designed a clearer workflow for a complex risk process across assessment, treatment, and monitoring.",
            tag: "Risk Design",
            tags: ["Enterprise UX", "Security", "Risk Assessment"],
            date: "2024-03-01",
            year: "2024",
            screenshots: ["/risk-mockup.png"],
            figmaUrl: "#",
            challenge:
                "The process was technically dense and hard to follow.",
            whatIDid:
                "Restructured the flow into clearer stages and improved how users move from risk identification to monitoring.",
            outcome:
                "A more usable system with better clarity, navigation, and workflow alignment",
            kpis: [
                { value: "60%", label: "Faster Risk Assessment" },
                { value: "95%", label: "Usability Task Success" },
            ],
        },
        {
            slug: "sniff-and-detect",
            title: "Sniff and Detect",
            description:
                "Designed a security scanning experience that simplifies technical results for all users.",
            tag: "UX Research",
            tags: ["UX Research", "Email Security", "Usability"],
            date: "2023-11-01",
            year: "2023",
            screenshots: ["/sniff-mockup.png"],
            figmaUrl: "#",
            challenge:
                "Technical detection results needed to be easy to understand without losing the detail needed for deeper review.",
            whatIDid:
                "Simplified technical terms and prioritized information based on what users need to understand first.",
            outcome:
                "Created a simpler security scanning experience that helps employees recognize and respond to potentially malicious emails.",
            kpis: [
                { value: "92%", label: "Scan Accuracy" },
                { value: "85%", label: "Response Rate" },
            ],
        },
        {
            slug: "cyber-incident-management",
            title: "Cyber Incident & Management",
            description:
                "Simplified a security operations workflow designed to help SOC Team to review alerts, create cases, investigate incidents, and track response progress.",
            tag: "Cyber Security",
            tags: ["Security Ops", "Dashboard", "Threat Triage"],
            date: "2024-06-01",
            year: "2024 - 2026",
            screenshots: ["/soc-mockup.png"],
            figmaUrl: "#",
            challenge:
                "Complex workflows made fast incident handling harder.",
            whatIDid:
                "Simplified how alerts, actions, statuses, and investigation details are presented.",
            outcome:
                "Improved efficiency and supported faster incident handling within SLA.",
            kpis: [
                { value: "40%", label: "Less Alert Fatigue" },
                { value: "3.5 Min", label: "Saved per Incident" },
            ],
        },
    ];
}
