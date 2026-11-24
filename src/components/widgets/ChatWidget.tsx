"use client";

import { useState, useRef, useEffect } from "react";

interface ChatMessage {
    id: string;
    sender: "jam" | "visitor";
    text: string;
}

type TopicContext =
    | "general"
    | "projects_overview"
    | "aquila"
    | "dayung"
    | "triplewisk"
    | "noli"
    | "case_studies"
    | "risk"
    | "sniff"
    | "incident"
    | "tools"
    | "philosophy"
    | "ai"
    | "music"
    | "contact";

const INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: "initial-1",
        sender: "jam",
        text: "hi! got questions about me? ask away, i don't bite 😄",
    },
];

const CONTACT_EMAIL = "jhamayasantiago@gmail.com";

function getFormattedManilaTime(): string {
    try {
        return new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Manila",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }).format(new Date());
    } catch {
        return "12:00 PM";
    }
}

/**
 * Web Audio API synthesizer for authentic Apple iMessage Send ("Swoosh")
 * and Receive ("Note / Ding-Pop") sound effects with zero external latency.
 */
function playIMessageSendSound() {
    try {
        const AudioCtx =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;

        // 1. Airy rising "whoosh" filtered white noise
        const bufferSize = Math.floor(ctx.sampleRate * 0.16);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const bandpass = ctx.createBiquadFilter();
        bandpass.type = "bandpass";
        bandpass.Q.setValueAtTime(2.8, now);
        bandpass.frequency.setValueAtTime(550, now);
        bandpass.frequency.exponentialRampToValueAtTime(3400, now + 0.14);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.16, now + 0.045);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.155);

        whiteNoise.connect(bandpass);
        bandpass.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        whiteNoise.start(now);
        whiteNoise.stop(now + 0.16);

        // 2. Subtle pitched upward chirp underneath the whoosh (characteristic iOS send pop)
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(420, now + 0.02);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.13);

        oscGain.gain.setValueAtTime(0.001, now + 0.02);
        oscGain.gain.linearRampToValueAtTime(0.075, now + 0.06);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

        osc.connect(oscGain);
        oscGain.connect(ctx.destination);
        osc.start(now + 0.02);
        osc.stop(now + 0.145);

        setTimeout(() => {
            ctx.close().catch(() => {});
        }, 300);
    } catch {
        // Ignore if browser audio policy blocks before user gesture
    }
}

function playIMessageReceiveSound() {
    try {
        const AudioCtx =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;

        // Apple iMessage "Note / Pop-Chime" two-tone marimba/glass interval (C6 -> G6)
        const playTone = (freq: number, startOffset: number, duration: number, peakGain: number) => {
            const osc = ctx.createOscillator();
            const overtone = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + startOffset);

            overtone.type = "triangle";
            overtone.frequency.setValueAtTime(freq * 2, now + startOffset);

            const overtoneGain = ctx.createGain();
            overtoneGain.gain.setValueAtTime(0.15, now + startOffset);

            gain.gain.setValueAtTime(0.0001, now + startOffset);
            gain.gain.linearRampToValueAtTime(peakGain, now + startOffset + 0.012);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + startOffset + duration);

            osc.connect(gain);
            overtone.connect(overtoneGain);
            overtoneGain.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + startOffset);
            overtone.start(now + startOffset);
            osc.stop(now + startOffset + duration);
            overtone.stop(now + startOffset + duration);
        };

        // First glassy pop note + bright fifth interval chime
        playTone(1046.5, 0, 0.18, 0.12); // C6
        playTone(1567.98, 0.065, 0.28, 0.14); // G6

        setTimeout(() => {
            ctx.close().catch(() => {});
        }, 450);
    } catch {
        // Ignore if blocked
    }
}

const COMPLIMENT_REPLIES = [
    "aww thank you so much!! i really poured a lot of time into getting the details right 😄 is there a project or widget you liked the most?",
    "thank you!! appreciate that a lot 🥹 let me know if you're curious about how i designed any of the projects here!",
    "stoppp you're making me smile haha 😄 thank you!! quality takes time so that means a lot to hear!",
];

let complimentCursor = 0;

/**
 * Context-aware conversational response generator grounded strictly in Jam's portfolio.
 * Remembers the `lastTopic` so follow-ups like "yes!", "tell me more", "what about the next one?",
 * "how did you do that?", or compliments flow like a real human conversation.
 */
function generateConversationalAnswer(
    query: string,
    lastTopic: TopicContext
): { text: string; nextTopic: TopicContext } {
    const q = query.toLowerCase().trim();
    const words = q.replace(/[^\w\s']/g, "").split(/\s+/);

    // ─── A. Context-Aware Follow-Ups ("yes", "sure", "tell me more", "why?", "how?") ───
    const isAffirmativeOrMore =
        q === "yes" ||
        q === "yeah" ||
        q === "yep" ||
        q === "yup" ||
        q === "sure" ||
        q === "pls" ||
        q === "please" ||
        q === "ok" ||
        q === "okay" ||
        q === "bet" ||
        q === "go ahead" ||
        q.includes("tell me more") ||
        q.includes("more about") ||
        q.includes("what else") ||
        q.includes("elaborate") ||
        q.includes("yes please") ||
        q.includes("yeah sure");

    if (isAffirmativeOrMore) {
        if (lastTopic === "aquila") {
            return {
                text: "inside AQUILA, we unified risk tracking, alert monitoring, guided incident investigations, and phishing assessments into one low-click platform so security teams don't get overwhelmed 😄 want a quick summary of Dayung or TripleWisk next?",
                nextTopic: "dayung",
            };
        }
        if (lastTopic === "projects_overview") {
            return {
                text: "here's the quick rundown: AQUILA (2024 to 2026) is an all-in-one cyber security platform built with R&D, Dayung (May 2026) is an HOA financial & governance system built with a developer, and TripleWisk (Oct 2026) is a playful bakery brand for 3 pastry chefs! which one do you wanna hear about? 😄",
                nextTopic: "aquila",
            };
        }
        if (lastTopic === "dayung") {
            return {
                text: "for Dayung's brand (May 2026), i also designed a house-silhouette logo in cyan and teal blue based on color psychology for trust and transparency! want to hear about TripleWisk next?",
                nextTopic: "triplewisk",
            };
        }
        if (lastTopic === "triplewisk") {
            return {
                text: "i made TripleWisk's logo and social visuals in Illustrator and Figma with a whisk-dotted wordmark and warm golden-honey tones so the brand feels friendly and freshly baked 🥐 want to know about the tools i use?",
                nextTopic: "tools",
            };
        }
        if (lastTopic === "noli") {
            return {
                text: "we blended Philippine history with mobile game mechanics so students stayed engaged instead of just memorizing chapters 🎮",
                nextTopic: "projects_overview",
            };
        }
        if (lastTopic === "tools") {
            return {
                text: "out of all of them, Figma is definitely my daily home base for UI/UX and design systems, and then i jump into Photoshop, Illustrator, Aseprite, or After Effects whenever a project needs custom visuals or motion! 🛠️",
                nextTopic: "general",
            };
        }
        return {
            text: "awesome!! 😄 do you want a quick summary of my projects (AQUILA, Dayung, TripleWisk), my design process, or the tools i use?",
            nextTopic: "projects_overview",
        };
    }

    // ─── B. Specific Portfolio Projects (Summarized) ───
    if (
        q.includes("dayung") &&
        (q.includes("triplewisk") || q.includes("triplewhisk") || q.includes("whisk") || q.includes("wisk"))
    ) {
        return {
            text: "Dayung (May 2026) is an HOA financial & governance system we built with a developer (plus its house-silhouette logo for trust & transparency), while TripleWisk (Oct 2026) is a playful bakery brand i designed in Illustrator & Figma for 3 pastry chefs! 😄",
            nextTopic: "dayung",
        };
    }

    if (
        q.includes("aquila") ||
        q.includes("cyber") ||
        q.includes("security") ||
        q.includes("soc") ||
        q.includes("alert") ||
        q.includes("risk")
    ) {
        return {
            text: "AQUILA (2024 to 2026) is an all-in-one cyber security platform we built with the Research and Development Department! instead of using separate, overly technical tools with tons of clicks for every domain, we made one easy, communicative workspace. i led the product design and contributed to design and sign-off 🛡️",
            nextTopic: "aquila",
        };
    }

    if (
        q.includes("dayung") ||
        q.includes("hoa") ||
        q.includes("saas") ||
        q.includes("financial") ||
        q.includes("audit") ||
        q.includes("fine") ||
        q.includes("facility") ||
        q.includes("property")
    ) {
        return {
            text: "Dayung (May 2026) is an HOA Financial & Governance passion project we built with a developer to make tracking fines, property balances, facilities, and audits super clear and easy. i also designed its house-silhouette logo using cyan and teal for trust and transparency 📊",
            nextTopic: "dayung",
        };
    }

    if (
        q.includes("triplewisk") ||
        q.includes("triple wisk") ||
        q.includes("triplewhisk") ||
        q.includes("triple whisk") ||
        q.includes("thriple") ||
        q.includes("whisk") ||
        q.includes("wisk") ||
        q.includes("pastry") ||
        q.includes("pastries") ||
        q.includes("bakery") ||
        q.includes("dessert") ||
        q.includes("chef")
    ) {
        return {
            text: "TripleWisk (Oct 2026) is a bakery brand i designed in Illustrator and Figma for 3 pastry chefs, which is why there are 3 whisks in one bowl! we kept it playful and casual so customers never feel intimidated by the price and just enjoy fresh quality goods 🥣",
            nextTopic: "triplewisk",
        };
    }

    if (q.includes("noli") || q.includes("rizal") || q.includes("game") || q.includes("educational")) {
        return {
            text: "i designed an educational mobile game for Jose Rizal's Noli Me Tangere (2022 to 2023), balancing storytelling and game UX so students had fun learning history 🎮",
            nextTopic: "noli",
        };
    }

    // ─── C. General Projects / Work / Experience (Summarized) ───
    if (
        q.includes("project") ||
        q.includes("work") ||
        q.includes("experience") ||
        q.includes("portfolio") ||
        q.includes("built") ||
        q.includes("designed") ||
        q.includes("what do you do")
    ) {
        return {
            text: "my featured works right now are AQUILA (an all-in-one cyber security platform, 2024 to 2026), Dayung (an HOA financial & governance system + brand identity, May 2026), and TripleWisk (a playful bakery brand for 3 pastry chefs, Oct 2026)! want a quick summary of any of them? 😄",
            nextTopic: "projects_overview",
        };
    }

    // ─── F. Tools / Stack ───
    if (
        q.includes("tool") ||
        q.includes("stack") ||
        q.includes("software") ||
        q.includes("figma") ||
        q.includes("adobe") ||
        q.includes("photoshop") ||
        q.includes("illustrator") ||
        q.includes("aseprite") ||
        q.includes("after effects") ||
        q.includes("premiere") ||
        q.includes("capcut") ||
        q.includes("jira") ||
        q.includes("trello")
    ) {
        return {
            text: "since i do a lot of different design stuff, my toolkit is pretty wide! i use Figma & Adobe XD for product design, Photoshop, Illustrator, Aseprite & ibisPaint for illustration, After Effects, Premiere Pro & CapCut for motion/video, plus Jira, Trello & OpenProject to stay synced with devs 🛠️",
            nextTopic: "tools",
        };
    }

    // ─── G. AI / Workflow ───
    if (
        words.includes("ai") ||
        q.includes("artificial intelligence") ||
        q.includes("water") ||
        q.includes("automate") ||
        q.includes("workflow")
    ) {
        return {
            text: "haha i'm a big believer that quality takes time, but it shouldn't drain you! so i use AI not to replace my creativity, but to automate the repetitive parts of my workflow (sorry for all the water i wasted 💧)",
            nextTopic: "ai",
        };
    }

    // ─── H. Design Process / Philosophy / Why ───
    if (
        q.includes("process") ||
        q.includes("philosophy") ||
        q.includes("approach") ||
        q.includes("how do you design") ||
        q.includes("why") ||
        q.includes("niche") ||
        q.includes("fomo") ||
        q.includes("overthink") ||
        q.includes("creativity")
    ) {
        return {
            text: "honestly, i always start with the WHY before touching any pixels, because if we don't figure out the WHY first, the WHAT is just guessing 🤓☝️ i overthink a lot (that's lowkey where my creativity comes from!), and i try to design things that handle the stuff we don't enjoy and make the stuff we love even better!",
            nextTopic: "philosophy",
        };
    }

    // ─── I. Music / Song / SZA ───
    if (q.includes("music") || q.includes("song") || q.includes("sza") || q.includes("listen") || q.includes("good days")) {
        return {
            text: "i have 'Good Days' by SZA on repeat! hover over the album cover widget on the left and hit play to listen to the full song while you browse 🎵",
            nextTopic: "music",
        };
    }

    // ─── J. Photos / Gecko ───
    if (q.includes("photo") || q.includes("picture") || q.includes("gecko") || q.includes("lizard") || q.includes("reptile")) {
        return {
            text: "those are some of my favorite shots in the Photos widget right above this chat! hover over it to switch between the nature, night, gecko, and street photos 📸",
            nextTopic: "general",
        };
    }

    // ─── K. Location / Timezone ───
    if (
        q.includes("where are you") ||
        q.includes("where do you live") ||
        q.includes("your location") ||
        q.includes("based") ||
        q.includes("philippines") ||
        q.includes("what time") ||
        q.includes("timezone")
    ) {
        return {
            text: `i'm based in the Philippines 🇵🇭 (UTC+8)! right now it's ${getFormattedManilaTime()} over here, synced live with my clock widget above 😄`,
            nextTopic: "general",
        };
    }

    // ─── L. Contact / Hire / Availability ───
    if (
        q.includes("contact") ||
        q.includes("hire") ||
        q.includes("available") ||
        q.includes("availability") ||
        q.includes("email") ||
        q.includes("linkedin") ||
        q.includes("let's talk") ||
        q.includes("lets talk") ||
        q.includes("reach") ||
        q.includes("collab")
    ) {
        return {
            text: `i'm open to the right conversation for 2026! if you wanna make something together, you can email me directly at ${CONTACT_EMAIL} or connect with me on LinkedIn (Jhamaya Santiago) ✉️`,
            nextTopic: "contact",
        };
    }

    // ─── M. Conversational: Compliments & Praise ───
    if (
        q.includes("that's nice") ||
        q.includes("thats nice") ||
        q.includes("so nice") ||
        q.includes("very nice") ||
        q.includes("really nice") ||
        q.includes("pretty cool") ||
        q.includes("so cool") ||
        q.includes("that's cool") ||
        q.includes("thats cool") ||
        q.includes("awesome") ||
        q.includes("amazing") ||
        q.includes("love it") ||
        q.includes("love this") ||
        q.includes("love your") ||
        q.includes("great job") ||
        q.includes("good job") ||
        q.includes("well done") ||
        q.includes("impressive") ||
        q.includes("beautiful") ||
        q.includes("gorgeous") ||
        q.includes("clean") ||
        q.includes("fire") ||
        q.includes("sick") ||
        q.includes("dope") ||
        words.includes("nice") ||
        words.includes("cool") ||
        words.includes("neat") ||
        words.includes("pretty") ||
        words.includes("cute") ||
        words.includes("great") ||
        words.includes("good")
    ) {
        const reply = COMPLIMENT_REPLIES[complimentCursor % COMPLIMENT_REPLIES.length];
        complimentCursor += 1;
        return { text: reply, nextTopic: lastTopic };
    }

    // ─── N. Conversational: Thanks / Appreciation ───
    if (
        words.includes("thanks") ||
        q.includes("thank you") ||
        q.includes("thank u") ||
        words.includes("ty") ||
        words.includes("tysm") ||
        q.includes("appreciate")
    ) {
        return {
            text: "anytime!! happy to chat 😄 let me know if you're curious about anything else in my portfolio!",
            nextTopic: lastTopic,
        };
    }

    // ─── O. Conversational: How are you / Small Talk ───
    if (
        q.includes("how are you") ||
        q.includes("how r u") ||
        q.includes("how's it going") ||
        q.includes("hows it going") ||
        q.includes("how are things") ||
        q.includes("what's up") ||
        q.includes("whats up") ||
        words.includes("wassup") ||
        words.includes("sup") ||
        words.includes("wyd")
    ) {
        return {
            text: "doing great!! probably overthinking a Figma frame and vibing to SZA right now 😄 how's your day going?",
            nextTopic: lastTopic,
        };
    }

    // ─── P. Conversational: Laughter / Reactions ───
    if (
        words.includes("haha") ||
        words.includes("hahaha") ||
        words.includes("lol") ||
        words.includes("lmao") ||
        words.includes("hehe") ||
        words.includes("funny")
    ) {
        return {
            text: "haha right?? 😄 i try not to take myself too seriously while taking the design craft super seriously!",
            nextTopic: lastTopic,
        };
    }

    // ─── Q. Conversational: Short Acknowledgements / No ───
    if (
        q === "no" ||
        q === "nope" ||
        q === "nah" ||
        q === "not really" ||
        q === "all good" ||
        q === "got it" ||
        q === "i see" ||
        q === "makes sense" ||
        q === "oh" ||
        q === "ahh" ||
        q === "ah" ||
        q === "true" ||
        q === "fair"
    ) {
        return {
            text: "gotchu! 😄 feel free to explore the widgets or ask me anything else whenever you're curious!",
            nextTopic: "general",
        };
    }

    // ─── R. Conversational: Goodbye ───
    if (
        words.includes("bye") ||
        words.includes("goodbye") ||
        q.includes("see ya") ||
        q.includes("see you") ||
        words.includes("cya") ||
        q.includes("take care") ||
        q.includes("goodnight")
    ) {
        return {
            text: "talk soon!! thanks for stopping by my corner of the internet 👋✨",
            nextTopic: "general",
        };
    }

    // ─── S. Greeting / Who are you ───
    if (
        words.includes("who") ||
        words.includes("about") ||
        words.includes("jam") ||
        words.includes("jhamaya") ||
        words.includes("hello") ||
        words.includes("hi") ||
        words.includes("hey") ||
        words.includes("yo")
    ) {
        return {
            text: "hey there! i'm Jam (Jhamaya Santiago), a designer based in the Philippines who loves tackling everything from complex cyber security & AI SaaS interfaces to illustration and games. what would you like to know about my work? 😄",
            nextTopic: "projects_overview",
        };
    }

    // ─── T. Out-of-Scope Fallback ("someone might be lurking") ───
    return {
        text: `i can't answer that here, someone might be lurking 👀😅 but you can email me on: ${CONTACT_EMAIL}`,
        nextTopic: lastTopic,
    };
}

/**
 * Renders message text and turns `hello@yourname.design` into a clickable mailto link.
 */
function renderMessageContent(text: string) {
    if (!text.includes(CONTACT_EMAIL)) {
        return text;
    }
    const parts = text.split(CONTACT_EMAIL);
    return (
        <>
            {parts.map((part, idx) => (
                <span key={idx}>
                    {part}
                    {idx < parts.length - 1 && (
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="font-medium text-[#0078ff] underline decoration-[#0078ff]/60 underline-offset-2 transition-opacity hover:opacity-75"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    )}
                </span>
            ))}
        </>
    );
}

const QUICK_PROMPTS = [
    "Tell me about your projects",
    "What is AQUILA?",
    "Tell me about Dayung & TripleWisk",
    "What tools are in your stack?",
];

/**
 * Precision iOS/macOS iMessage left recipient bubble tail SVG.
 */
function RecipientBubbleTail() {
    return (
        <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="pointer-events-none absolute -left-[6px] bottom-0 z-0 h-[16px] w-[13px] shrink-0 text-[#e9e9eb]"
        >
            <path
                d="M6 0C6 6.5 4.2 12.2 0 15.2C4.8 16 9.5 14.5 12.5 11.5L13 0H6Z"
                fill="currentColor"
            />
        </svg>
    );
}

/**
 * Precision iOS/macOS iMessage right sender bubble tail SVG.
 */
function SenderBubbleTail() {
    return (
        <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="pointer-events-none absolute -right-[6px] bottom-0 z-0 h-[16px] w-[13px] shrink-0 -scale-x-100 text-[#0078ff]"
        >
            <path
                d="M6 0C6 6.5 4.2 12.2 0 15.2C4.8 16 9.5 14.5 12.5 11.5L13 0H6Z"
                fill="currentColor"
            />
        </svg>
    );
}

/**
 * Apple iMessage-inspired Chat Widget (650x301) matching Figma node 16:2020.
 * - Authentic iMessage whole-bubble spring pop animation (`.imessage-bubble-left` & `.imessage-bubble-right`)
 *   after the 3-dot typing indicator finishes (no typewriter character streaming).
 * - Authentic Apple iMessage Send ("Swoosh") and Receive ("Note Chime") Web Audio sound effects.
 * - Multi-turn context-aware conversational AI grounded strictly in Jam's portfolio.
 */
export default function ChatWidget() {
    const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
    const [input, setInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [plusHovered, setPlusHovered] = useState(false);
    const [isTypingDots, setIsTypingDots] = useState(false);
    const [lastTopic, setLastTopic] = useState<TopicContext>("general");
    const [manilaTimeStr, setManilaTimeStr] = useState<string>("12:00 PM");

    const threadRef = useRef<HTMLDivElement>(null);
    const dotsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Sync real-time Philippine Time with ClockWidget
    useEffect(() => {
        const updateClock = () => {
            setManilaTimeStr(getFormattedManilaTime());
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (dotsTimerRef.current) clearTimeout(dotsTimerRef.current);
        };
    }, []);

    // Auto-scroll chat thread smoothly as messages/typing state update
    useEffect(() => {
        if (threadRef.current) {
            threadRef.current.scrollTo({
                top: threadRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, showSuggestions, isTypingDots]);

    const sendQuestion = (questionText: string) => {
        const trimmed = questionText.trim();
        if (!trimmed || isTypingDots) return;

        if (dotsTimerRef.current) clearTimeout(dotsTimerRef.current);

        // 1. Play Apple iMessage outgoing "Swoosh" sound & pop in visitor's blue bubble
        playIMessageSendSound();

        const userMsg: ChatMessage = {
            id: `user-${Date.now()}`,
            sender: "visitor",
            text: trimmed,
        };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setShowSuggestions(false);
        setIsTypingDots(true);

        const { text: replyText, nextTopic } = generateConversationalAnswer(trimmed, lastTopic);
        setLastTopic(nextTopic);

        // 2. Show iMessage 3-dot typing indicator bubble, then pop in full reply bubble with iMessage receive sound
        const typingDuration = Math.min(1150, Math.max(700, replyText.length * 4.5));
        dotsTimerRef.current = setTimeout(() => {
            setIsTypingDots(false);
            playIMessageReceiveSound();

            setMessages((prev) => [
                ...prev,
                {
                    id: `jam-${Date.now()}`,
                    sender: "jam",
                    text: replyText,
                },
            ]);
        }, typingDuration);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        sendQuestion(input);
    };

    return (
        <div
            className="bento-card font-sf relative flex min-h-[301px] flex-1 w-full max-w-[650px] flex-col justify-between overflow-clip rounded-[27px] border border-[#d1d1d1] bg-white py-[8px]"
            data-node-id="16:2020"
        >
            {/* Chat Thread Area */}
            <div
                ref={threadRef}
                className="flex flex-1 flex-col gap-[8px] overflow-y-auto bg-white pl-[16px] pr-[14px]"
                data-node-id="60:7990"
            >
                {/* Real-Time Philippine Time Timestamp (Synced with Clock Widget) */}
                <div
                    className="flex w-full shrink-0 flex-col items-center justify-center pb-[2px] pt-[10px]"
                    data-node-id="60:7991"
                >
                    <div
                        className="font-sf flex items-center gap-[3.5px] whitespace-nowrap text-[11px] tracking-[-0.1px] text-[#909093]"
                        title="Live Philippine Time (UTC+8)"
                    >
                        <span className="font-medium leading-[1.25]">Today</span>
                        <span className="font-normal leading-[1.25]">at {manilaTimeStr}</span>
                    </div>
                </div>

                {/* Messages List */}
                <div className="flex flex-col gap-[10px] pb-2">
                    {messages.map((msg) =>
                        msg.sender === "jam" ? (
                            <div
                                key={msg.id}
                                className="flex w-full items-end justify-start gap-[10px] pt-[2px]"
                                data-node-id="60:7992"
                            >
                                {/* Profile Photo */}
                                <div className="relative size-[38px] shrink-0 overflow-clip rounded-full ring-1 ring-black/5">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Jam"
                                        className="absolute h-[312.74%] left-[-22.71%] max-w-none top-[-85.96%] w-[143.84%]"
                                        src="/figma/avatar-jam.png"
                                    />
                                </div>

                                {/* Gray Recipient Bubble with Authentic iMessage Spring Pop Animation */}
                                <div className="imessage-bubble-left relative flex max-w-[420px] items-center rounded-[18px] rounded-bl-[5px] bg-[#e9e9eb] px-[13px] py-[8px]">
                                    <RecipientBubbleTail />
                                    <p className="font-sf relative z-10 text-[15px] font-normal leading-[1.34] tracking-[-0.35px] text-black/90">
                                        {renderMessageContent(msg.text)}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={msg.id}
                                className="flex w-full items-end justify-end pr-[4px] pt-[2px]"
                            >
                                {/* Blue Visitor Bubble with Authentic iMessage Spring Pop Animation */}
                                <div className="imessage-bubble-right relative flex max-w-[380px] items-center rounded-[18px] rounded-br-[5px] bg-[#0078ff] px-[13px] py-[8px] text-white">
                                    <SenderBubbleTail />
                                    <p className="font-sf relative z-10 text-[15px] font-normal leading-[1.34] tracking-[-0.35px]">
                                        {msg.text}
                                    </p>
                                </div>
                            </div>
                        )
                    )}

                    {/* iMessage 3-Dot Typing Bubble */}
                    {isTypingDots && (
                        <div className="flex w-full items-end justify-start gap-[10px] pt-[2px]">
                            <div className="relative size-[38px] shrink-0 overflow-clip rounded-full ring-1 ring-black/5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Jam typing"
                                    className="absolute h-[312.74%] left-[-22.71%] max-w-none top-[-85.96%] w-[143.84%]"
                                    src="/figma/avatar-jam.png"
                                />
                            </div>
                            <div className="imessage-bubble-left relative flex h-[34px] items-center gap-[4px] rounded-[18px] rounded-bl-[5px] bg-[#e9e9eb] px-[14px] py-[8px]">
                                <RecipientBubbleTail />
                                <span className="relative z-10 size-[6.5px] animate-bounce rounded-full bg-[#8e8e93] [animation-delay:-0.25s]" />
                                <span className="relative z-10 size-[6.5px] animate-bounce rounded-full bg-[#8e8e93] [animation-delay:-0.12s]" />
                                <span className="relative z-10 size-[6.5px] animate-bounce rounded-full bg-[#8e8e93]" />
                            </div>
                        </div>
                    )}

                    {/* Quick Portfolio Prompt Chips (toggled by + button, consistent font-sf typeface) */}
                    {showSuggestions && (
                        <div className="font-sf flex flex-wrap gap-[7px] pl-[48px] pt-[4px]">
                            {QUICK_PROMPTS.map((prompt) => (
                                <button
                                    key={prompt}
                                    type="button"
                                    onClick={() => sendQuestion(prompt)}
                                    className="font-sf cursor-pointer rounded-full border border-[#dcdce0] bg-[#f7f7f9] px-[12px] py-[5px] text-[13.5px] font-normal leading-[1.25] tracking-[-0.35px] text-[#333333] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-150 hover:border-[#0078ff] hover:bg-[#0078ff] hover:text-white active:scale-95"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Message Input Bar */}
            <form
                onSubmit={handleSend}
                className="relative flex w-full shrink-0 flex-col items-start justify-end pl-[12px] pr-[16px] pt-[6px]"
                data-node-id="57:7481"
            >
                <div className="flex w-full items-center gap-[12px]" data-node-id="57:7482">
                    {/* Clickable Plus Button with Custom Hover Tooltip */}
                    <div
                        className="relative flex items-center justify-center"
                        onMouseEnter={() => setPlusHovered(true)}
                        onMouseLeave={() => setPlusHovered(false)}
                    >
                        {/* Custom Hover Tooltip */}
                        <div
                            role="tooltip"
                            className={`font-sf pointer-events-none absolute -top-[38px] left-0 z-30 whitespace-nowrap rounded-[8px] bg-[#1e1e1f]/95 px-[10px] py-[5px] text-[11.5px] font-medium tracking-[-0.2px] text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-200 ${
                                plusHovered
                                    ? "translate-y-0 scale-100 opacity-100"
                                    : "translate-y-1 scale-95 opacity-0"
                            }`}
                        >
                            {showSuggestions ? "Hide suggested questions" : "Suggested portfolio questions"}
                            {/* Tooltip Caret */}
                            <span
                                aria-hidden
                                className="absolute -bottom-[4px] left-[13px] size-[8px] rotate-45 bg-[#1e1e1f]/95"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowSuggestions((prev) => !prev)}
                            aria-label="Toggle suggested portfolio questions"
                            aria-expanded={showSuggestions}
                            className={`relative flex size-[34px] shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${
                                showSuggestions ? "ring-2 ring-[#0078ff]/40" : ""
                            }`}
                            data-node-id="57:7483"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt=""
                                className="pointer-events-none absolute inset-0 block size-full max-w-none"
                                src="/figma/chat-add-bg.svg"
                            />
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 16 16"
                                fill="none"
                                className={`relative z-10 transition-transform duration-200 ${
                                    showSuggestions
                                        ? "rotate-45 text-[#0078ff]"
                                        : "text-[#909093] group-hover:text-[#333]"
                                }`}
                            >
                                <path
                                    d="M8 3V13M3 8H13"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Input Pill Bar */}
                    <div
                        className="relative flex h-[36px] min-w-px flex-1 items-center gap-[12px] rounded-[80px] border border-[#e9e9eb] bg-white/75 px-[13px] py-[6px] transition-colors focus-within:border-[#c9c9cb]"
                        data-node-id="57:7486"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Message"
                            aria-label="Message Jam"
                            className="font-sf w-full bg-transparent text-[15.5px] font-normal tracking-[-0.35px] text-[#333] placeholder:text-[#c9c9cb] focus:outline-none"
                        />

                        {input.trim() ? (
                            <button
                                type="submit"
                                disabled={isTypingDots}
                                aria-label="Send message"
                                className="flex size-[24px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#0078ff] text-white transition-transform hover:scale-105 active:scale-95 disabled:opacity-40"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 19V5M12 5L5 12M12 5L19 12"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <div
                                className="pointer-events-none flex size-[16px] shrink-0 items-center justify-center text-[#a2a1a3]"
                                data-node-id="57:7488"
                            >
                                <svg width="13" height="16" viewBox="0 0 14 18" fill="none">
                                    <rect x="4" y="1" width="6" height="10" rx="3" fill="currentColor" />
                                    <path
                                        d="M1.5 8.5C1.5 11.5376 3.96243 14 7 14C10.0376 14 12.5 11.5376 12.5 8.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M7 14V17"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
