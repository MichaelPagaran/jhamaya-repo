"use client";

import Link from "next/link";
import RedirectArrow from "@/components/ui/RedirectArrow";
import { Project } from "@/types";
import ClockWidget from "@/components/widgets/ClockWidget";
import PhotosWidget from "@/components/widgets/PhotosWidget";
import ChatWidget from "@/components/widgets/ChatWidget";
import MusicWidget from "@/components/widgets/MusicWidget";

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
 * - SZA Music Widget card
 * - "Tools" stack card with exact app icon groups
 * - 3 Featured Project cards (Dayung + AQUILA on top, TripleWisk wide card on bottom)
 */
export default function BentoHome({ projects: _projects }: BentoHomeProps) {
    void _projects;

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
                            about_me.txt
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
                                    <Link
                                        href="/projects"
                                        className="font-helvetica cursor-pointer italic text-[#41a0ff] underline decoration-solid [text-underline-position:from-font] transition-opacity hover:opacity-75"
                                    >
                                        (Click me!)
                                    </Link>
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
                                        href="mailto:jhamayasantiago@gmail.com"
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
                <div className="flex w-full flex-col gap-[15px]">
                    <div className="flex flex-wrap items-center justify-center gap-[21px] sm:flex-nowrap xl:justify-between">
                        <div className="bento-enter stagger-2">
                            <ClockWidget />
                        </div>
                        <div className="bento-enter stagger-3">
                            <PhotosWidget />
                        </div>
                    </div>

                    <div className="bento-enter stagger-4 flex flex-1 flex-col">
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

                {/* Right Column (875px wide): Top Row (Dayung + AQUILA) + Bottom Wide Card (TripleWhisk) */}
                <div id="projects" className="flex w-full flex-col gap-[14px]">
                    {/* Top 2 Featured Project Cards Row (Dayung + AQUILA) */}
                    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[429px_428px] md:justify-between">
                        {/* Featured Card 1: Dayung (429 x 513) */}
                        <Link
                            href="/projects/dayung"
                            className="bento-card bento-enter stagger-7 group relative block h-[513px] w-full max-w-[429px] overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                        >
                            {/* Card Header */}
                            <div className="relative z-10 mx-[24px] mt-[22px] flex flex-col gap-[12px]">
                                <div className="relative flex flex-col items-start gap-[5px] pr-[58px]">
                                    <h3 className="font-helvetica text-[26px] font-bold leading-normal tracking-[-1.56px] text-[#333333]">
                                        Dayung
                                    </h3>
                                    <p className="font-helvetica text-[13px] font-normal leading-snug tracking-[-0.6px] text-[#909090]">
                                        Financial &amp; Governance System for HOAs.
                                    </p>
                                    <div className="absolute right-0 top-0 size-[48px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                                        <RedirectArrow label="View Dayung project" accent="#06a9ab" />
                                    </div>
                                </div>
                                <div className="relative h-px w-full">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt=""
                                        className="block w-full max-w-none"
                                        src="/figma/line-604.svg"
                                    />
                                </div>
                            </div>

                            {/* Dayung MacBook Mockup */}
                            <div className="absolute left-[74px] top-[148px] h-[330px] w-[440px] transition-transform duration-500 ease-out group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:scale-[1.015]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Dayung Mockup"
                                    className="block size-full object-contain object-left-bottom"
                                    src="/figma/dayung-macbook.png"
                                />
                            </div>

                            {/* Floating Sticker Badges: "Easy!", "Fast", "Transparent" */}
                            <div className="absolute left-[56px] top-[252px] z-20 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-5px] group-hover:rotate-[-1deg]">
                                <div className="flex-none rotate-[-3.88deg]">
                                    <div className="flex items-start rounded-[8px] bg-[#06a9ab] px-[9px] py-[4px] shadow-[0px_4px_10px_rgba(0,0,0,0.18)]">
                                        <p className="font-inter text-[22px] font-medium leading-[27px] tracking-[-1.3px] text-[#f7f7f9] whitespace-nowrap">
                                            Easy!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute left-[10px] top-[256px] z-20 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-7px] group-hover:rotate-[-20deg]">
                                <div className="flex-none rotate-[-25.51deg]">
                                    <div className="flex items-start rounded-[8px] bg-[#67e1ec] px-[10px] py-[4.5px] shadow-[0px_12px_9px_rgba(0,0,0,0.15)]">
                                        <p className="font-inter text-[23px] font-medium leading-[28px] tracking-[-1.4px] text-[#225a5b] whitespace-nowrap">
                                            Fast
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute left-[18px] top-[288px] z-20 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-3px] group-hover:rotate-[-11deg]">
                                <div className="flex-none rotate-[-14.08deg]">
                                    <div
                                        className="flex items-start rounded-[8px] px-[9.5px] py-[4.5px]"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.42) 100%)",
                                            backdropFilter: "blur(12px) saturate(180%)",
                                            WebkitBackdropFilter: "blur(12px) saturate(180%)",
                                            boxShadow:
                                                "0px 8px 20px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.9), 0px 0.5px 1px 0px rgba(0,0,0,0.22)",
                                        }}
                                    >
                                        <p className="font-inter text-[22px] font-medium leading-[27px] tracking-[-1.3px] text-[#737d7e] whitespace-nowrap">
                                            Transparent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Featured Card 2: AQUILA (428 x 513) */}
                        <Link
                            href="/projects/aquila-cyber-security"
                            className="bento-card bento-enter stagger-8 group relative block h-[513px] w-full max-w-[428px] overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                        >
                            {/* Dashed decorative orbit lines */}
                            <div className="pointer-events-none absolute left-[180px] top-[164px] flex h-[190px] w-[320px] items-center justify-center opacity-75">
                                <div className="flex-none rotate-[87.16deg]">
                                    <div className="relative h-[320px] w-[170px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/aquila-arc-1.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute left-[-105px] top-[132px] flex h-[170px] w-[320px] items-center justify-center opacity-75">
                                <div className="flex-none -rotate-90">
                                    <div className="relative h-[320px] w-[170px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/aquila-arc-3.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Card Header */}
                            <div className="relative z-10 mx-[24px] mt-[22px] flex flex-col gap-[12px]">
                                <div className="relative flex flex-col items-start gap-[5px] pr-[58px]">
                                    <h3 className="font-helvetica text-[26px] font-bold leading-normal tracking-[-1.56px] text-[#333333]">
                                        AQUILA
                                    </h3>
                                    <p className="font-helvetica text-[13px] font-normal leading-snug tracking-[-0.6px] text-[#909090]">
                                        All-in-One Cyber Security Platform
                                    </p>
                                    <div className="absolute right-0 top-0 size-[48px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                                        <RedirectArrow label="View AQUILA project" accent="#0078ff" />
                                    </div>
                                </div>
                                <div className="relative h-px w-full">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt=""
                                        className="block w-full max-w-none"
                                        src="/figma/line-604.svg"
                                    />
                                </div>
                            </div>

                            {/* MacBook Mockup */}
                            <div className="absolute left-[18px] top-[186px] h-[258px] w-[392px] transition-transform duration-500 ease-out group-hover:translate-y-[-5px] group-hover:scale-[1.015]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="AQUILA Dashboard Mockup"
                                    className="block size-full object-contain"
                                    src="/figma/aquila-macbook.png"
                                />
                            </div>

                            {/* Floating Sticker Badges: "All-in-One" & "Security" */}
                            <div className="absolute right-[24px] top-[236px] z-20 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-6px] group-hover:rotate-[-2deg]">
                                <div className="flex-none rotate-[-5.54deg]">
                                    <div className="flex items-start rounded-[8px] bg-[#f7ff60] px-[9.5px] py-[4.5px] shadow-[0px_11px_9px_rgba(0,0,0,0.15)]">
                                        <p className="font-inter text-[22px] font-medium leading-[27px] tracking-[-1.3px] text-[#363636] whitespace-nowrap">
                                            All-in-One
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute right-[16px] top-[274px] z-20 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-4px] group-hover:rotate-[4deg]">
                                <div className="flex-none rotate-[2.39deg]">
                                    <div className="flex items-start rounded-[8px] bg-[#ff6e6e] px-[9.5px] py-[4.5px] shadow-[0px_11px_9px_rgba(0,0,0,0.15)]">
                                        <p className="font-inter text-[22px] font-medium leading-[27px] tracking-[-1.3px] text-[#500707] whitespace-nowrap">
                                            Security
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Bottom Wide Featured Card 3: TripleWisk (875 x 513) */}
                    <Link
                        href="/projects/triplewisk"
                        className="bento-card bento-enter stagger-9 group relative block h-[513px] w-full max-w-[875px] overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                    >
                        {/* Subtle warm golden-bakery ambient glow on hover */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 62%, rgba(229, 165, 75, 0.22) 0%, rgba(180, 118, 38, 0.06) 48%, transparent 72%)",
                            }}
                        />

                        {/* Header */}
                        <div className="relative z-10 mx-[28px] mt-[23px] flex flex-col gap-[14px]">
                            <div className="relative flex flex-col items-start gap-[6px]">
                                <h3 className="font-helvetica text-[28px] font-bold leading-normal tracking-[-1.68px] text-[#333333] transition-colors duration-300 group-hover:text-[#d69338]">
                                    TripleWisk
                                </h3>
                                <p className="font-helvetica text-[14px] font-normal leading-normal tracking-[-0.84px] text-[#909090]">
                                    Home-made fresh goods.
                                </p>
                                <div className="absolute right-0 top-0 size-[56px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                                    <RedirectArrow label="View TripleWisk project" accent="#e5a54b" />
                                </div>
                            </div>
                            <div className="relative h-px w-full">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt=""
                                    className="block w-full max-w-none"
                                    src="/figma/line-604.svg"
                                />
                            </div>
                        </div>

                        {/* TripleWisk Logo Container: Default Muted Taupe -> Animated Original Golden Honey (#E5A54B) on Hover */}
                        <div className="absolute left-1/2 top-[168px] h-[230px] w-[334px] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[8px] group-hover:rotate-[-2deg] group-hover:scale-[1.07]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="TripleWisk Logo"
                                width={334}
                                height={230}
                                src="/figma/triplewisk-logo-gray.png"
                                className="absolute inset-0 block size-full max-w-none transition-opacity duration-500 ease-out group-hover:opacity-0"
                            />

                            <svg className="pointer-events-none absolute size-0" aria-hidden>
                                <filter id="home-triplewisk-solid-color">
                                    <feColorMatrix
                                        type="matrix"
                                        values="
                                            0 0 0 0 0.898
                                            0 0 0 0 0.647
                                            0 0 0 0 0.294
                                            0 0 0 4.8 0"
                                    />
                                </filter>
                            </svg>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="TripleWisk Colored Logo"
                                width={334}
                                height={230}
                                src="/figma/triplewisk-logo-gray.png"
                                style={{ filter: "url(#home-triplewisk-solid-color)" }}
                                className="absolute inset-0 block size-full max-w-none opacity-0 drop-shadow-[0_14px_26px_rgba(229,165,75,0.34)] transition-opacity duration-500 ease-out group-hover:opacity-100"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
