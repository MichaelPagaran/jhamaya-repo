import { Project } from "@/types";

/**
 * Returns case studies written in Jam's direct, human voice with zero em-dashes.
 */
export async function getCaseStudies(): Promise<Project[]> {
    return [
        {
            slug: "cyber-risk-management",
            title: "Cyber Risk Management",
            subtitle: "Clearer workflow for risk assessment, treatment, and monitoring",
            description:
                "I redesigned a complicated enterprise risk process into a clear step-by-step workflow covering assessment, treatment, and ongoing monitoring.",
            category: "case-study",
            tag: "Risk Design",
            tags: ["Enterprise UX", "Security", "Risk Assessment"],
            date: "2024-03-01",
            year: "2024",
            role: "Product Designer",
            teammate: "GRC & Security Engineering Team",
            tools: "Figma, Jira",
            timeline: "2024",
            context: [
                "Risk management in security is full of heavy terminology and multi-step forms. Teams were getting stuck because the old flow made it hard to tell what stage a risk was in or what needed to happen next.",
                "My goal was to start with the WHY: what decisions does the user actually need to make at each step? From there, I reorganized the whole experience from risk identification to continuous monitoring.",
            ],
            intro: [
                "Before the redesign, users had to dig through dense tables just to score a risk or assign a treatment plan. It felt more like filling out tax forms than managing security.",
                "I broke the workflow into clear, guided stages: Assessment, Treatment, and Monitoring. By showing risk severity, ownership, and status right up front, teams could move through the process much faster and with far fewer mistakes.",
            ],
            screenshots: ["/risk-mockup.png"],
            figmaUrl: "#",
            challenge:
                "The original risk process was technically dense and hard for users to follow from start to finish.",
            whatIDid:
                "Restructured the flow into clear stages and simplified how users move from identifying a risk to monitoring it.",
            outcome:
                "A much cleaner system with better navigation, clearer status tracking, and smoother team alignment.",
            kpis: [
                { value: "60%", label: "Faster Risk Assessment" },
                { value: "95%", label: "Usability Task Success" },
            ],
        },
        {
            slug: "sniff-and-detect",
            title: "Sniff and Detect",
            subtitle: "Simple email threat scanning experience for everyday users",
            description:
                "I designed an email security scanning experience that translates technical threat results into plain language anyone can understand.",
            category: "case-study",
            tag: "UX Research",
            tags: ["UX Research", "Email Security", "Usability"],
            date: "2023-11-01",
            year: "2023",
            role: "UX Researcher & Product Designer",
            teammate: "Email Security Team",
            tools: "Figma",
            timeline: "2023",
            context: [
                "When an employee gets a suspicious email, they just want to know if it is safe or dangerous. Most email security scanners dump raw technical headers and cryptic threat scores on screen, which only confuses people.",
                "Sniff and Detect was designed to give everyday employees a clear, immediate answer while still keeping the deeper technical details available for security reviewers.",
            ],
            intro: [
                "If a security tool is too confusing to read, people either ignore the warning or panic. I wanted to design an interface that handles the complicated technical stuff in the background and gives the user clarity right away.",
                "Through user research and testing, I structured the results page around what matters first: a clear verdict and the exact next step to take. Deeper forensic details stay tucked cleanly underneath for analysts who need to dig further.",
            ],
            screenshots: ["/sniff-mockup.png"],
            figmaUrl: "#",
            challenge:
                "Technical detection results needed to be easy for regular employees to understand without removing the details analysts need for deeper review.",
            whatIDid:
                "Simplified the technical terms and organized the layout based on what users need to know first.",
            outcome:
                "A friendly, straightforward scanning experience that helps employees spot and report suspicious emails with confidence.",
            kpis: [
                { value: "92%", label: "Scan Accuracy" },
                { value: "85%", label: "Response Rate" },
            ],
        },
        {
            slug: "cyber-incident-management",
            title: "Cyber Incident & Management",
            subtitle: "Faster SOC alert triage, case investigation, and response tracking",
            description:
                "I simplified a security operations workflow to help SOC teams review alerts, open cases, investigate incidents, and stay on top of response progress.",
            category: "case-study",
            tag: "Cyber Security",
            tags: ["Security Ops", "Dashboard", "Threat Triage"],
            date: "2024-06-01",
            year: "2024 - 2026",
            role: "Lead Product Designer",
            teammate: "SOC Analysts & Platform Engineers",
            tools: "Figma, Jira, OpenProject",
            timeline: "2024 - 2026",
            context: [
                "During an active security incident, every minute matters. Security Operations Center (SOC) teams deal with a constant stream of alerts, and a cluttered interface slows down how fast they can react.",
                "I redesigned the incident management workspace to remove visual clutter and help analysts go from a raw alert to an active case investigation as smoothly as possible.",
            ],
            intro: [
                "Alert fatigue is one of the biggest headaches in cyber security. When dozens of similar alerts pile up on screen, it is tough for analysts to spot what is urgent and track their SLA timers.",
                "I cleaned up how alert severity, status badges, and investigation actions are grouped on the dashboard, including a 'Group Similar Alerts' toggle that cuts down duplicate noise. This helped the team triage faster and stay comfortably within their SLA targets.",
            ],
            screenshots: ["/soc-mockup.png", "/figma/aquila-macbook.png"],
            figmaUrl: "#",
            challenge:
                "Complicated screens and overlapping alerts made fast incident handling difficult for the SOC team.",
            whatIDid:
                "Cleaned up how alerts, actions, statuses, and investigation details are organized on the dashboard.",
            outcome:
                "Less alert fatigue for analysts and faster incident response times within SLA.",
            kpis: [
                { value: "40%", label: "Less Alert Fatigue" },
                { value: "3.5 Min", label: "Saved per Incident" },
            ],
        },
    ];
}
