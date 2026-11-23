"use client";

import { useState } from "react";
import { Project } from "@/types";
import ClockWidget from "@/components/widgets/ClockWidget";
import PhotosWidget from "@/components/widgets/PhotosWidget";
import ChatWidget from "@/components/widgets/ChatWidget";
import MusicWidget from "@/components/widgets/MusicWidget";
import ProjectModal from "@/components/ui/ProjectModal";

interface BentoHomeProps {
    projects: Project[];
}

/**
 * Full Bento Grid Home section matching Figma node 8:196 ("Introduction").
 * Combines:
 * - macOS text window (`iloveyouvirus.txt`)
 * - Real-time Philippine Time (`Asia/Manila`) analog Clock widget
 * - Interactive Apple Photos widget with 4 photos & glassmorphic dock tab bar
 * - Interactive iMessage Chat widget
 * - "Another Widget" card
 * - "Tools" stack card with exact app icon groups
 * - 3 Featured Project cards (iPhone Notification Center card, iPad Pro Landscape card, Wide Logomark card)
 */
export default function BentoHome({ projects }: BentoHomeProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [dismissedNotif, setDismissedNotif] = useState(false);

    const project1 = projects[0] ?? null;
    const project2 = projects[1] ?? null;
    const project3 = projects[2] ?? null;

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="mx-auto w-full max-w-[1440px] px-[20px] pb-[56px] pt-[16px] sm:px-[56px]"
            data-node-id="8:196"
            data-name="Introduction"
        >
            {/* ─── TOP BENTO SECTION (About Me Window + Clock + Photos + iMessage Chat) ─── */}
            <div className="grid grid-cols-1 gap-[16px] xl:grid-cols-[662px_650px] xl:justify-between">
                {/* Left: about_me macOS Note Window (662 x 627) */}
                <div
                    className="bento-card bento-enter stagger-1 flex min-h-[627px] w-full flex-col overflow-clip rounded-[27px] border border-[#d1d1d1] bg-[#f7f7f9]"
                    data-node-id="16:1832"
                    data-name="about_me"
                >
                    {/* macOS Titlebar */}
                    <div
                        className="relative flex h-[28px] w-full shrink-0 items-center justify-center overflow-clip rounded-t-[27px] border-b border-[#d1d1d1] bg-white shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.15),inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.05)]"
                        data-node-id="16:1833"
                        data-name="Titlebar"
                    >
                        {/* Window traffic light controls */}
                        <div
                            className="absolute left-[20px] top-[7px] flex h-[12px] w-[52px] items-center justify-between"
                            data-node-id="14:503"
                        >
                            <div className="relative size-[12px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Close"
                                    className="block size-full max-w-none"
                                    src="/figma/win-close.svg"
                                />
                            </div>
                            <div className="relative size-[12px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Minimize"
                                    className="block size-full max-w-none"
                                    src="/figma/win-minimize.svg"
                                />
                            </div>
                            <div className="relative size-[12px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Expand"
                                    className="block size-full max-w-none"
                                    src="/figma/win-expand.svg"
                                />
                            </div>
                        </div>

                        {/* Filename */}
                        <p
                            className="font-helvetica text-center text-[13px] font-bold leading-normal tracking-[-0.052px] text-[#3d3d3d] whitespace-nowrap"
                            data-node-id="16:1835"
                        >
                            iloveyouvirus.txt
                        </p>
                    </div>

                    {/* Window Body */}
                    <div
                        className="flex flex-1 flex-col items-start rounded-b-[27px] bg-[#f7f7f9] p-[20px] backdrop-blur-[25px]"
                        data-node-id="16:1836"
                    >
                        <div className="flex w-full flex-col items-start gap-[21px]" data-node-id="16:1837">
                            <h1
                                className="font-helvetica w-full text-[34px] font-bold leading-normal tracking-[-2.04px] text-[#333333]"
                                data-node-id="16:1838"
                            >
                                Hi, my name is Jam!
                            </h1>

                            <div
                                className="font-helvetica flex w-full flex-col gap-[18px] text-[18px] font-normal leading-normal tracking-[-1.08px] text-[#909090]"
                                data-node-id="16:1839"
                            >
                                <p className="m-0">
                                    <span>{`i am a designer based in the Philippines. well.., i do a lot of design stuff. when i say a lot. IT'S A LOT! `}</span>
                                    <button
                                        type="button"
                                        onClick={() => scrollToSection("projects")}
                                        className="font-helvetica cursor-pointer border-none bg-transparent p-0 italic text-[#41a0ff] underline decoration-solid [text-underline-position:from-font] transition-opacity hover:opacity-75"
                                    >
                                        (Click me!)
                                    </button>
                                </p>

                                <p className="m-0">
                                    {`i know it's kinda weird not having a niche in design, but that's because i'm not afraid to try new things. i have FOMO, yk.`}
                                </p>

                                <p className="m-0">
                                    {`i am a strong believer that quality takes time, but it can also drain you. so i use AI, not to replace my creativity, but as a tool to automate my workflow. (sorry for all the water i wasted 💧)`}
                                </p>

                                <p className="m-0">
                                    {`i overthink a lot, and honestly that's where my creativity comes from.`}
                                </p>

                                <p className="m-0">
                                    {`when i design, i start with the WHY. if we don't figure that out first, the WHAT becomes guessing. 🤓☝️`}
                                </p>

                                <p className="m-0">
                                    {`i think we should design things that handle the stuff we don't enjoy, and make the stuff we love even better.`}
                                </p>

                                <p className="m-0">wanna make something together? hmu!</p>

                                <div className="pt-[12px]">
                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection("contact");
                                        }}
                                        className="inline-flex items-center text-[18px] leading-normal no-underline transition-opacity hover:opacity-75"
                                    >
                                        <span className="italic text-[#41a0ff]">✉️ let’s ta</span>
                                        <span className="text-[#909090]">lk</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Top Row (Clock + Photos) & Bottom Row (iMessage Chat) */}
                <div className="flex w-full flex-col justify-between gap-[15px]">
                    <div className="flex flex-wrap items-center justify-center gap-[21px] sm:flex-nowrap xl:justify-between">
                        <div className="bento-enter stagger-2">
                            <ClockWidget />
                        </div>
                        <div className="bento-enter stagger-3">
                            <PhotosWidget />
                        </div>
                    </div>

                    <div className="bento-enter stagger-4">
                        <ChatWidget />
                    </div>
                </div>
            </div>

            {/* ─── LOWER BENTO SECTION (Left: Another Widget + Tools Stack | Right: Projects Grid) ─── */}
            <div className="mt-[15px] grid grid-cols-1 gap-[23px] xl:grid-cols-[430px_875px] xl:justify-between">
                {/* Left Column (430px wide): Music Widget (340px) + Tools Stack (684px) */}
                <div className="flex w-full flex-col gap-[15px]">
                    <MusicWidget />

                    {/* Tools Stack Card (430 x 684) */}
                    <div
                        id="stack"
                        className="bento-card bento-enter stagger-6 flex min-h-[684px] w-full flex-col items-start gap-[20px] overflow-clip rounded-[20px] bg-[#f7f7f9] px-[28px] py-[23px]"
                        data-node-id="63:8958"
                        data-name="Stack"
                    >
                        {/* Header */}
                        <div className="flex w-full flex-col items-start gap-[10px]" data-node-id="63:8959">
                            <div className="flex w-full flex-col items-start gap-[14px]" data-node-id="63:8960">
                                <h2
                                    className="font-helvetica text-[34px] font-bold leading-normal tracking-[-2.04px] text-[#333333] whitespace-nowrap"
                                    data-node-id="63:8961"
                                >
                                    Tools
                                </h2>
                                <div className="relative h-px w-full" data-node-id="63:8962">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt=""
                                        className="block w-full max-w-none"
                                        src="/figma/line-divider.svg"
                                    />
                                </div>
                            </div>
                            <p
                                className="font-helvetica w-full text-[20px] font-normal leading-normal tracking-[-1.2px] text-[#909090]"
                                data-node-id="63:8963"
                            >
                                these are the tool i use in my design process.
                            </p>
                        </div>

                        {/* Group 1: Design & Prototyping */}
                        <div className="flex w-full flex-col items-start gap-[10px]" data-node-id="63:8964">
                            <p
                                className="font-helvetica text-[12px] font-bold leading-normal tracking-[-0.72px] text-[#909090]"
                                data-node-id="63:8965"
                            >
                                Design &amp; Prototyping
                            </p>
                            <div
                                className="flex h-[92px] w-full max-w-[373px] items-center gap-[9px] overflow-clip rounded-[10px] bg-white px-[12px] py-[10px] shadow-[1px_1px_16.7px_-4px_rgba(0,0,0,0.15)]"
                                data-node-id="63:8966"
                            >
                                <div
                                    className="flex size-[55px] shrink-0 items-center justify-center rounded-[7.857px] bg-[#181818] p-[6.548px] transition-transform hover:scale-105"
                                    title="Figma"
                                    data-node-id="63:8967"
                                >
                                    <div className="relative size-[41.905px] shrink-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="Figma"
                                            className="absolute inset-0 block size-full max-w-none"
                                            src="/figma/tool-figma.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="relative size-[55px] shrink-0 transition-transform hover:scale-105"
                                    title="Adobe XD"
                                    data-node-id="63:8974"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Adobe XD"
                                        className="absolute inset-0 block size-full max-w-none"
                                        src="/figma/tool-xd.svg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Group 2: Illustration & Image Editing */}
                        <div className="flex w-full flex-col items-start gap-[10px]" data-node-id="63:8975">
                            <p
                                className="font-helvetica text-[12px] font-bold leading-normal tracking-[-0.72px] text-[#909090]"
                                data-node-id="63:8976"
                            >
                                Illustration &amp; Image Editing
                            </p>
                            <div
                                className="flex h-[92px] w-full max-w-[373px] items-center gap-[9px] overflow-clip rounded-[10px] bg-white px-[12px] py-[10px] shadow-[1px_1px_16.7px_-4px_rgba(0,0,0,0.15)]"
                                data-node-id="63:8977"
                            >
                                <div
                                    className="relative size-[55px] shrink-0 transition-transform hover:scale-105"
                                    title="Adobe Photoshop"
                                    data-node-id="63:8978"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Adobe Photoshop"
                                        className="absolute inset-0 block size-full max-w-none"
                                        src="/figma/tool-ps.svg"
                                    />
                                </div>
                                <div
                                    className="relative size-[55px] shrink-0 transition-transform hover:scale-105"
                                    title="Adobe Illustrator"
                                    data-node-id="63:8979"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Adobe Illustrator"
                                        className="absolute inset-0 block size-full max-w-none"
                                        src="/figma/tool-ai.svg"
                                    />
                                </div>
                                <div
                                    className="flex size-[55px] shrink-0 items-center justify-center rounded-[7.857px] border-[0.655px] border-[#e5e5e5] p-[6.548px] transition-transform hover:scale-105"
                                    title="Aseprite"
                                    data-node-id="63:8980"
                                >
                                    <div className="relative h-[37.321px] w-[34.048px] shrink-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="Aseprite"
                                            className="absolute inset-0 block size-full max-w-none"
                                            src="/figma/tool-aseprite.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex size-[55px] shrink-0 items-center justify-center rounded-[7.857px] p-[6.548px] transition-transform hover:scale-105"
                                    title="ibisPaint"
                                    data-node-id="63:8996"
                                >
                                    <div className="relative size-[54px] shrink-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="ibisPaint"
                                            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                                            src="/figma/tool-ibispaint.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Group 3: Motion & Video */}
                        <div className="flex w-full flex-col items-start gap-[10px]" data-node-id="63:8998">
                            <p
                                className="font-helvetica text-[12px] font-bold leading-normal tracking-[-0.72px] text-[#909090]"
                                data-node-id="63:8999"
                            >
                                Motion &amp; Video
                            </p>
                            <div
                                className="flex h-[92px] w-full max-w-[373px] items-center gap-[9px] overflow-clip rounded-[10px] bg-white px-[12px] py-[10px] shadow-[1px_1px_16.7px_-4px_rgba(0,0,0,0.15)]"
                                data-node-id="63:9000"
                            >
                                <div
                                    className="relative size-[55px] shrink-0 transition-transform hover:scale-105"
                                    title="Adobe After Effects"
                                    data-node-id="63:9001"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Adobe After Effects"
                                        className="absolute inset-0 block size-full max-w-none"
                                        src="/figma/tool-ae.svg"
                                    />
                                </div>
                                <div
                                    className="relative size-[55px] shrink-0 transition-transform hover:scale-105"
                                    title="Adobe Premiere Pro"
                                    data-node-id="63:9002"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Adobe Premiere Pro"
                                        className="absolute inset-0 block size-full max-w-none"
                                        src="/figma/tool-pr.svg"
                                    />
                                </div>
                                <div
                                    className="flex size-[55px] shrink-0 items-center justify-center rounded-[7.857px] border-[0.655px] border-[#e5e5e5] p-[6.548px] transition-transform hover:scale-105"
                                    title="CapCut"
                                    data-node-id="63:9003"
                                >
                                    <div className="relative h-[30px] w-[33px] shrink-0 overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="CapCut"
                                            className="pointer-events-none absolute left-0 top-0 h-full w-[410.26%] max-w-none"
                                            src="/figma/tool-capcut.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Group 4: Collaboration & PM */}
                        <div className="flex w-full flex-col items-start gap-[10px]" data-node-id="63:9005">
                            <p
                                className="font-helvetica text-[12px] font-bold leading-normal tracking-[-0.72px] text-[#909090]"
                                data-node-id="63:9006"
                            >
                                Collaboration &amp; PM
                            </p>
                            <div
                                className="flex h-[92px] w-full max-w-[373px] items-center gap-[9px] overflow-clip rounded-[10px] bg-white px-[12px] py-[10px] shadow-[1px_1px_16.7px_-4px_rgba(0,0,0,0.15)]"
                                data-node-id="63:9007"
                            >
                                <div
                                    className="flex shrink-0 items-center rounded-[8px] bg-[#1868db] transition-transform hover:scale-105"
                                    title="Jira"
                                    data-node-id="63:9008"
                                >
                                    <div className="relative size-[55px] shrink-0 rounded-[14px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="Jira"
                                            className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[14px] object-cover"
                                            src="/figma/tool-jira.png"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="relative size-[55px] shrink-0 transition-transform hover:scale-105"
                                    title="Trello"
                                    data-node-id="63:9010"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Trello"
                                        className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                                        src="/figma/tool-trello.png"
                                    />
                                </div>
                                <div
                                    className="relative size-[55px] shrink-0 rounded-[8px] transition-transform hover:scale-105"
                                    title="OpenProject"
                                    data-node-id="63:9011"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="OpenProject"
                                        className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
                                        src="/figma/tool-openproject.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (875px wide): 2 Top Project Cards (429 + 428) + 1 Wide Bottom Project Card (875) */}
                <div id="projects" className="flex w-full flex-col gap-[14px]">
                    {/* Top 2 Project Cards Row */}
                    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[429px_428px] md:justify-between">
                        {/* Project Card 1: iPhone + Notification Center (429 x 513) */}
                        <div
                            onClick={() => project1 && setSelectedProject(project1)}
                            className="bento-card bento-enter stagger-7 group relative h-[513px] w-full max-w-[429px] cursor-pointer overflow-clip rounded-[27px] bg-[#f7f7f9]"
                            data-node-id="21:3381"
                        >
                            {/* Tilted iPhone Mockup */}
                            <div
                                className="absolute left-[-140px] top-[164px] size-[648.979px] transition-transform duration-500 ease-out group-hover:translate-y-[-6px] group-hover:scale-[1.015]"
                                data-node-id="23:3416"
                                data-name="iPhone"
                            >
                                <div className="absolute left-[-26.34px] top-[31.98px] flex h-[590.956px] w-[428.386px] items-center justify-center">
                                    <div className="flex-none rotate-[3.05deg]">
                                        <div
                                            className="relative h-[570.563px] w-[398.605px]"
                                            style={{
                                                WebkitMaskImage: `url("/figma/iphone-mask.svg")`,
                                                maskImage: `url("/figma/iphone-mask.svg")`,
                                                WebkitMaskSize: "648.979px 648.979px",
                                                maskSize: "648.979px 648.979px",
                                                WebkitMaskPosition: "-113.66px -31.978px",
                                                maskPosition: "-113.66px -31.978px",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskRepeat: "no-repeat",
                                            }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                alt=""
                                                className="absolute inset-0 block size-full max-w-none"
                                                src="/figma/iphone-fix.svg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-[-239.47px] top-[-12.66px] flex h-[674.303px] w-[1127.882px] items-center justify-center">
                                    <div className="flex-none rotate-[3.05deg]">
                                        <div
                                            className="relative h-[616.853px] w-[1096.627px]"
                                            style={{
                                                WebkitMaskImage: `url("/figma/iphone-mask.svg")`,
                                                maskImage: `url("/figma/iphone-mask.svg")`,
                                                WebkitMaskSize: "648.979px 648.979px",
                                                maskSize: "648.979px 648.979px",
                                                WebkitMaskPosition: "239.452px 12.662px",
                                                maskPosition: "239.452px 12.662px",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskRepeat: "no-repeat",
                                            }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                alt=""
                                                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                                                src="/figma/iphone-color.png"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-[-239.47px] top-[-12.39px] flex h-[674.303px] w-[1127.882px] items-center justify-center">
                                    <div className="flex-none rotate-[3.05deg]">
                                        <div
                                            className="relative h-[616.853px] w-[1096.627px]"
                                            style={{
                                                WebkitMaskImage: `url("/figma/iphone-mask.svg")`,
                                                maskImage: `url("/figma/iphone-mask.svg")`,
                                                WebkitMaskSize: "648.979px 648.979px",
                                                maskSize: "648.979px 648.979px",
                                                WebkitMaskPosition: "239.466px 12.389px",
                                                maskPosition: "239.466px 12.389px",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskRepeat: "no-repeat",
                                            }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                alt=""
                                                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                                                src="/figma/iphone-frame.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notification Center Stack */}
                            {!dismissedNotif && (
                                <div
                                    className="absolute left-0 top-0 w-full transition-transform duration-300 group-hover:translate-y-[-2px]"
                                    data-node-id="31:3629"
                                    data-name="Notifications"
                                >
                                    <div className="absolute left-[92.29px] top-[80.1px] h-[77.899px] w-[243.663px] rounded-[12.536px] bg-white/80 shadow-[0px_1.729px_19.02px_1.729px_rgba(99,99,99,0.12)]" />
                                    <div className="absolute left-[72.65px] top-[67.99px] h-[77.899px] w-[282.934px] rounded-[12.536px] bg-white/80 shadow-[0px_1.729px_19.02px_1.729px_rgba(99,99,99,0.12)]" />
                                    <div className="absolute left-[61px] top-[55.87px] h-[77.899px] w-[306.242px] rounded-[12.536px] bg-white/85 shadow-[0px_1.729px_19.02px_1.729px_rgba(99,99,99,0.12)] backdrop-blur-sm" />

                                    <p
                                        className="font-inter absolute left-[70px] top-[33px] text-[12.104px] font-normal leading-normal text-[#bcbcbc] whitespace-nowrap"
                                        data-node-id="31:3636"
                                    >
                                        Notification Center
                                    </p>
                                    <p
                                        className="font-inter absolute left-[351.14px] top-[71.92px] w-[78.71px] -translate-x-full text-right text-[10.375px] font-normal leading-normal text-[#bcbcbc]"
                                        data-node-id="31:3637"
                                    >
                                        42 min ago
                                    </p>
                                    <p
                                        className="font-inter absolute left-[132.6px] top-[71.92px] w-[78.71px] text-[10.375px] font-semibold leading-normal text-black"
                                        data-node-id="31:3638"
                                    >
                                        Chroma™
                                    </p>
                                    <p
                                        className="font-inter absolute left-[132.6px] top-[90.37px] h-[26.086px] w-[182.377px] text-[10.375px] font-normal leading-normal text-[#838383]"
                                        data-node-id="31:3639"
                                    >
                                        You have two new dreams from last night. Want to unroll them?
                                    </p>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setDismissedNotif(true);
                                        }}
                                        aria-label="Clear notification"
                                        className="absolute left-[348.83px] top-[31px] size-[18.384px] cursor-pointer transition-transform hover:scale-110"
                                        data-node-id="31:3640"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="absolute inset-0 block size-full max-w-none"
                                            src="/figma/notif-close.svg"
                                        />
                                    </button>

                                    <div
                                        className="absolute left-[73.69px] top-[71.05px] size-[47.551px] rounded-[4.323px]"
                                        data-node-id="31:3645"
                                    >
                                        <div className="pointer-events-none absolute inset-0 rounded-[4.323px] bg-[#d9d9d9]">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                alt="Chroma"
                                                className="absolute size-full max-w-none rounded-[4.323px] object-cover"
                                                src="/figma/chroma-icon.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Bottom-left Redirection Arrow Button */}
                            <div
                                className="absolute left-[19px] top-[423px] size-[70.351px] transition-transform duration-300 group-hover:scale-105"
                                data-node-id="63:8751"
                                data-name="Redirection"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Open project"
                                    className="absolute inset-0 block size-full max-w-none"
                                    src="/figma/redirection.svg"
                                />
                            </div>
                        </div>

                        {/* Project Card 2: iPad Pro Landscape (428 x 513) */}
                        <div
                            onClick={() => project2 && setSelectedProject(project2)}
                            className="bento-card bento-enter stagger-8 group relative h-[513px] w-full max-w-[428px] cursor-pointer overflow-clip rounded-[27px] bg-[#f7f7f9]"
                            data-node-id="21:3387"
                        >
                            <div
                                className="absolute left-[96px] top-[88px] h-[502.844px] w-[613.295px] transition-transform duration-500 ease-out group-hover:translate-x-[-6px] group-hover:translate-y-[-4px]"
                                data-node-id="29:3582"
                                data-name="iPad Pro (Landscape)"
                            >
                                <div className="absolute inset-[1.41%_0_0_1%]" data-name="Shadows">
                                    <div className="absolute inset-[-0.65%_-0.53%]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/ipad-shadows.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-[0.58%_25.07%_30.57%_0.47%] rounded-[20.992px] border-[1.292px] border-[#d7d7d7] bg-black shadow-[6.459px_6.459px_16.148px_0px_rgba(0,0,0,0.35),25.837px_25.837px_48.444px_0px_rgba(0,0,0,0.25)]"
                                    data-name="Frame"
                                />
                                <div
                                    className="absolute inset-[2.12%_26.33%_32.11%_1.74%] rounded-[14.533px] bg-black"
                                    data-name="Put Screen In Here"
                                />
                                <div
                                    className="absolute inset-[66.6%_56.13%_33.08%_31.54%] rounded-[32.296px] bg-white"
                                    data-name="Home Indicator (White)"
                                />
                                {/* System Bar */}
                                <div className="absolute contents inset-[2.89%_27.87%_95.95%_3%]">
                                    <p className="font-sf absolute inset-[2.89%_93.68%_95.95%_3%] text-[4.844px] font-semibold leading-normal tracking-[-0.0969px] text-white">
                                        9:41 AM
                                    </p>
                                    <p className="font-sf absolute inset-[2.89%_29.07%_95.95%_68.09%] text-center text-[4.844px] font-semibold leading-normal tracking-[-0.0969px] text-white">
                                        100%
                                    </p>
                                    <div className="absolute inset-[3.1%_27.87%_96.17%_70.84%]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="absolute inset-0 block size-full max-w-none"
                                            src="/figma/ipad-battery.svg"
                                        />
                                    </div>
                                    <div className="absolute inset-[3.1%_31.95%_96.19%_67.25%]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="absolute inset-0 block size-full max-w-none"
                                            src="/figma/ipad-wifi.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-[2.12%_26.33%_32.11%_1.74%] rounded-[14.533px] mix-blend-screen"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(160.84323968563336deg, rgba(255, 255, 255, 0.25) 0.67515%, rgba(255, 255, 255, 0) 38.684%)",
                                    }}
                                    data-name="Screen Shine"
                                />
                                <div className="absolute inset-[34.62%_98.58%_64.61%_0.79%]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt=""
                                        className="absolute inset-0 block size-full max-w-none"
                                        src="/figma/ipad-camera.svg"
                                    />
                                </div>
                            </div>

                            {/* Bottom-left Redirection Arrow Button */}
                            <div
                                className="absolute left-[28px] top-[423px] size-[70.351px] transition-transform duration-300 group-hover:scale-105"
                                data-node-id="63:8748"
                                data-name="Redirection"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Open project"
                                    className="absolute inset-0 block size-full max-w-none"
                                    src="/figma/redirection.svg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Wide Project Card 3: Centered Logomark (875 x 513) */}
                    <div
                        onClick={() => project3 && setSelectedProject(project3)}
                        className="bento-card bento-enter stagger-9 group relative h-[513px] w-full max-w-[875px] cursor-pointer overflow-clip rounded-[27px] bg-[#f7f7f9]"
                        data-node-id="63:8944"
                    >
                        <div
                            className="absolute left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] h-[170px] w-[264px] -translate-x-1/2 -translate-y-1/2 overflow-clip transition-transform duration-500 ease-out group-hover:scale-105"
                            data-node-id="63:8945"
                            data-name="Logo"
                        >
                            <div className="absolute inset-[1.05%_1.04%_2.46%_0.09%]" data-node-id="63:8946">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Project Logomark"
                                    className="absolute inset-0 block size-full max-w-none"
                                    src="/figma/logomark.svg"
                                />
                            </div>
                        </div>

                        <div
                            className="absolute left-[20px] top-[423px] size-[70.351px] transition-transform duration-300 group-hover:scale-105"
                            data-node-id="63:8948"
                            data-name="Redirection"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="Open project"
                                className="absolute inset-0 block size-full max-w-none"
                                src="/figma/redirection.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Case Study Modal when any project card is clicked */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
