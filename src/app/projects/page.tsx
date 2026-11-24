"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

/**
 * Projects Page (`/projects`) matching Figma node 121:1354 ("Projects"):
 * 1. Product Design. Yup, i also make technical apps, easier for the user.
 *    - AQUILA card (653 x 498) with MacBook Pro mockup, dashed arcs, and "All-in-One" + "Security" floating badges
 *    - Dayung card (652 x 498) with MacBook Pro mockup and "Fast" + "Easy!" + "Transparent" floating glass/color badges
 * 2. Graphic Design works.
 *    - Dayung card (653 x 513): monochrome gray logo by default; on hover animates & reveals the original cyan-teal gradient logo
 *    - TripleWisk card (653 x 513): monochrome taupe logo by default; on hover animates & reveals the warm artisanal color emblem
 * 3. Case Studies. Take a look and check if it make sense.
 *    - 3 cards (429x513, 428x513, 428x513) linking to the 3 detailed security case studies
 */
export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main
                className="mx-auto flex w-full max-w-[1440px] flex-col gap-[84px] px-[20px] pb-[112px] pt-[8px] sm:px-[56px]"
                data-node-id="121:1357"
            >
                {/* ─── SECTION 1: PRODUCT DESIGN ─── */}
                <section
                    className="bento-enter stagger-1 flex w-full flex-col gap-[24px]"
                    data-node-id="121:1448"
                >
                    <h1
                        className="font-helvetica text-[28px] font-bold leading-normal tracking-[-2.04px] text-[#333333] sm:text-[34px]"
                        data-node-id="121:1449"
                    >
                        <span>Product Design. </span>
                        <span className="text-[#c5c5c5]">
                            Yup, i also make technical apps, easier for the user.
                        </span>
                    </h1>

                    <div
                        className="grid grid-cols-1 gap-[21px] xl:grid-cols-[653px_652px] xl:justify-between"
                        data-node-id="121:1450"
                    >
                        {/* Card 1: AQUILA (653 x 498) */}
                        <Link
                            href="/projects/aquila-cyber-security"
                            className="bento-card group relative block h-[498px] w-full overflow-clip rounded-[26.197px] bg-[#f7f7f9] no-underline"
                            data-node-id="121:1451"
                        >
                            {/* Dashed decorative orbit lines from Figma */}
                            <div className="pointer-events-none absolute left-[305px] top-[164px] flex h-[211.755px] w-[372.992px] items-center justify-center opacity-80">
                                <div className="flex-none rotate-[87.16deg]">
                                    <div className="relative h-[363.815px] w-[193.937px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/aquila-arc-1.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute left-[309.59px] top-[399px] flex h-[193.937px] w-[363.814px] items-center justify-center opacity-80">
                                <div className="flex-none -rotate-90">
                                    <div className="relative h-[363.815px] w-[193.937px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/aquila-arc-2.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute left-[-91px] top-[126px] flex h-[193.937px] w-[363.814px] items-center justify-center opacity-80">
                                <div className="flex-none -rotate-90">
                                    <div className="relative h-[363.815px] w-[193.937px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/aquila-arc-3.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Card Header (Title, Subtitle, Arrow, Divider) */}
                            <div
                                className="relative z-10 mx-[28px] mt-[23px] flex flex-col gap-[14px]"
                                data-node-id="121:1478"
                            >
                                <div className="relative flex flex-col items-start gap-[6px]">
                                    <h2
                                        className="font-helvetica text-[28px] font-bold leading-normal tracking-[-1.68px] text-[#333333]"
                                        data-node-id="121:1481"
                                    >
                                        AQUILA
                                    </h2>
                                    <p
                                        className="font-helvetica text-[14px] font-normal leading-normal tracking-[-0.84px] text-[#909090]"
                                        data-node-id="121:1482"
                                    >
                                        Interoperability Cyber Security Platform
                                    </p>
                                    <div
                                        className="absolute right-0 top-0 size-[56px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
                                        data-node-id="121:1483"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="View AQUILA project"
                                            className="block size-full max-w-none"
                                            src="/figma/redirection-56.svg"
                                        />
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
                            <div
                                className="absolute left-[28px] top-[171px] h-[291.124px] w-[488px] transition-transform duration-500 ease-out group-hover:translate-y-[-5px] group-hover:scale-[1.015]"
                                data-node-id="124:5055"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="AQUILA Dashboard Mockup"
                                    className="block size-full object-contain"
                                    src="/figma/aquila-macbook.png"
                                />
                            </div>

                            {/* Floating Sticker Badges: "All-in-One" & "Security" */}
                            <div
                                className="absolute left-[439px] top-[245px] z-20 flex h-[61.214px] w-[155.386px] items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-6px] group-hover:rotate-[-2deg]"
                                data-node-id="124:7414"
                            >
                                <div className="flex-none rotate-[-5.54deg]">
                                    <div className="flex items-start rounded-[8.826px] bg-[#f7ff60] px-[10.787px] py-[5.394px] shadow-[0px_12.793px_9.715px_rgba(0,0,0,0.15)]">
                                        <p className="font-inter text-[29.523px] font-medium leading-[35.674px] tracking-[-1.7714px] text-[#363636] whitespace-nowrap">
                                            All-in-One
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute left-[502px] top-[293px] z-20 flex h-[52.019px] w-[128.413px] items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-4px] group-hover:rotate-[4deg]"
                                data-node-id="124:7420"
                            >
                                <div className="flex-none rotate-[2.39deg]">
                                    <div className="flex items-start rounded-[8.826px] bg-[#ff6e6e] px-[10.787px] py-[5.394px] shadow-[0px_12.793px_9.715px_rgba(0,0,0,0.15)]">
                                        <p className="font-inter text-[29.523px] font-medium leading-[35.674px] tracking-[-1.7714px] text-[#500707] whitespace-nowrap">
                                            Security
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Dayung Product Design (652 x 498) */}
                        <Link
                            href="/projects/dayung"
                            className="bento-card group relative block h-[498px] w-full overflow-clip rounded-[26.197px] bg-[#f7f7f9] no-underline"
                            data-node-id="121:1486"
                        >
                            {/* Card Header */}
                            <div
                                className="relative z-10 mx-[28px] mt-[23px] flex flex-col gap-[14px]"
                                data-node-id="121:1488"
                            >
                                <div className="relative flex flex-col items-start gap-[6px]">
                                    <h2
                                        className="font-helvetica text-[28px] font-bold leading-normal tracking-[-1.68px] text-[#333333]"
                                        data-node-id="121:1491"
                                    >
                                        Dayung
                                    </h2>
                                    <p
                                        className="font-helvetica text-[14px] font-normal leading-normal tracking-[-0.84px] text-[#909090]"
                                        data-node-id="121:1492"
                                    >
                                        Financial &amp; Governance Management System for HOAs.
                                    </p>
                                    <div
                                        className="absolute right-0 top-0 size-[56px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
                                        data-node-id="121:1493"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="View Dayung project"
                                            className="block size-full max-w-none"
                                            src="/figma/redirection-56.svg"
                                        />
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
                            <div
                                className="absolute left-[154px] top-[113px] h-[355px] w-[498px] transition-transform duration-500 ease-out group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:scale-[1.015]"
                                data-node-id="122:2355"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Dayung Login Mockup"
                                    className="block size-full object-contain object-left-bottom"
                                    src="/figma/dayung-macbook.png"
                                />
                            </div>

                            {/* Floating Sticker Badges: "Easy!", "Fast", "Transparent" */}
                            <div
                                className="absolute left-[92.88px] top-[239.26px] z-20 flex h-[54.279px] w-[96.203px] items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-5px] group-hover:rotate-[-1deg]"
                                data-node-id="122:2495"
                            >
                                <div className="flex-none rotate-[-3.88deg]">
                                    <div className="flex items-start rounded-[9.066px] bg-[#06a9ab] px-[11.08px] py-[5.54px] shadow-[0px_4px_10px_rgba(0,0,0,0.18)]">
                                        <p className="font-inter text-[30.325px] font-medium leading-[36.643px] tracking-[-1.8195px] text-[#f7f7f9] whitespace-nowrap">
                                            Easy!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute left-[14px] top-[239px] z-20 flex h-[83.217px] w-[98.705px] items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-7px] group-hover:rotate-[-20deg]"
                                data-node-id="122:2498"
                            >
                                <div className="flex-none rotate-[-25.51deg]">
                                    <div className="flex items-start rounded-[9.671px] bg-[#67e1ec] px-[11.82px] py-[5.91px] shadow-[0px_14.018px_10.645px_rgba(0,0,0,0.15)]">
                                        <p className="font-inter text-[32.349px] font-medium leading-[39.089px] tracking-[-1.941px] text-[#225a5b] whitespace-nowrap">
                                            Fast
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute left-[25.13px] top-[271.78px] z-20 flex h-[90.863px] w-[187.653px] items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-3px] group-hover:rotate-[-11deg]"
                                data-node-id="122:2504"
                            >
                                <div className="flex-none rotate-[-14.08deg]">
                                    <div
                                        className="flex items-start rounded-[9.155px] px-[11.189px] py-[5.595px]"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.42) 100%)",
                                            backdropFilter: "blur(12px) saturate(180%)",
                                            WebkitBackdropFilter: "blur(12px) saturate(180%)",
                                            boxShadow:
                                                "0px 8px 20px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.9), 0px 0.509px 1.017px 0px rgba(0,0,0,0.22)",
                                        }}
                                    >
                                        <p className="font-inter text-[30.624px] font-medium leading-[37.004px] tracking-[-1.8374px] text-[#737d7e] whitespace-nowrap">
                                            Transparent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* ─── SECTION 2: GRAPHIC DESIGN WORKS (WITH ANIMATED ORIGINAL COLOR LOGO REVEAL ON HOVER) ─── */}
                <section
                    className="bento-enter stagger-2 flex w-full flex-col gap-[24px]"
                    data-node-id="121:1368"
                >
                    <h2
                        className="font-helvetica text-[28px] font-bold leading-normal tracking-[-2.04px] text-[#333333] sm:text-[34px]"
                        data-node-id="121:1369"
                    >
                        Graphic Design works.
                    </h2>

                    <div
                        className="grid grid-cols-1 gap-[21px] xl:grid-cols-[653px_653px] xl:justify-between"
                        data-node-id="121:1370"
                    >
                        {/* Graphic Card 1: Dayung Brand Logo (653 x 513) */}
                        <Link
                            href="/projects/dayung-brand"
                            className="bento-card group relative block h-[513px] w-full overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                            data-node-id="121:1400"
                        >
                            {/* Subtle ambient color glow on hover */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 60%, rgba(110, 238, 246, 0.20) 0%, rgba(52, 155, 182, 0.06) 45%, transparent 72%)",
                                }}
                            />

                            {/* Header */}
                            <div
                                className="relative z-10 mx-[28px] mt-[23px] flex flex-col gap-[14px]"
                                data-node-id="121:1813"
                            >
                                <div className="relative flex flex-col items-start gap-[6px]">
                                    <h3
                                        className="font-helvetica text-[28px] font-bold leading-normal tracking-[-1.68px] text-[#333333] transition-colors duration-300 group-hover:text-[#1b8ba8]"
                                        data-node-id="121:1816"
                                    >
                                        Dayung
                                    </h3>
                                    <p
                                        className="font-helvetica text-[14px] font-normal leading-normal tracking-[-0.84px] text-[#909090]"
                                        data-node-id="121:1817"
                                    >
                                        Providing a comprehensive interface for Homeowners and Staff
                                    </p>
                                    <div
                                        className="absolute right-0 top-0 size-[56px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
                                        data-node-id="121:1818"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="View Dayung Brand Identity"
                                            className="block size-full max-w-none"
                                            src="/figma/redirection-56.svg"
                                        />
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

                            {/* Dayung Logo Container (197 x 242 at left:228 top:156): Gray default -> Animated Original Aqua Gradient on Hover */}
                            <div
                                className=" absolute left-1/2 top-[156px] h-[242px] w-[197px] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[8px] group-hover:scale-[1.07]"
                                data-node-id="124:7427"
                            >
                                {/* Default Monochrome Gray Logo */}
                                <svg
                                    viewBox="0 0 197 242"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-full transition-opacity duration-500 ease-out group-hover:opacity-0"
                                >
                                    <path
                                        d="M79.0485 8.04834C89.7914 -2.68272 107.21 -2.68284 117.952 8.04834L189.484 79.5051C196.246 86.2601 197 95.7362 197 104.37V121.18C197 125.064 192.261 127.167 189.167 124.814C181.717 119.149 173.246 114.335 163.755 110.372C144.681 102.41 122.782 98.4287 98.0563 98.4287C73.331 98.4287 51.4314 102.41 32.3576 110.372C23.2012 114.195 15.0217 118.81 7.81891 124.217C4.71874 126.545 0 124.438 0 120.564V104.368C3.07373e-05 95.7362 0.754262 86.2596 7.51593 79.5051L79.0485 8.04834Z"
                                        fill="#C5C5C5"
                                    />
                                    <path
                                        d="M98.5 131.194C129.555 131.194 153.736 137.983 171.041 151.563C188.347 164.961 197 183.157 197 206.151V225.158C197 234.459 189.451 242 180.14 242H16.8604C7.54864 242 0 234.459 0 225.158V206.151C0.00010001 183.157 8.6532 164.961 25.9587 151.563C43.2643 137.983 67.4448 131.194 98.5 131.194Z"
                                        fill="#C5C5C5"
                                    />
                                </svg>

                                {/* Original Colored Dayung Logo (#7EFFF9 -> #4BBDDD -> #06A9AB) Revealed on Hover */}
                                <svg
                                    viewBox="0 0 197 242"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-full opacity-0 drop-shadow-[0_18px_32px_rgba(52,155,182,0.32)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                                >
                                    <path
                                        d="M79.0485 8.04834C89.7914 -2.68272 107.21 -2.68284 117.952 8.04834L189.484 79.5051C196.246 86.2601 197 95.7362 197 104.37V121.18C197 125.064 192.261 127.167 189.167 124.814C181.717 119.149 173.246 114.335 163.755 110.372C144.681 102.41 122.782 98.4287 98.0563 98.4287C73.331 98.4287 51.4314 102.41 32.3576 110.372C23.2012 114.195 15.0217 118.81 7.81891 124.217C4.71874 126.545 0 124.438 0 120.564V104.368C3.07373e-05 95.7362 0.754262 86.2596 7.51593 79.5051L79.0485 8.04834Z"
                                        fill="url(#dayungRoofGrad)"
                                        className="origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[3px]"
                                    />
                                    <path
                                        d="M98.5 131.194C129.555 131.194 153.736 137.983 171.041 151.563C188.347 164.961 197 183.157 197 206.151V225.158C197 234.459 189.451 242 180.14 242H16.8604C7.54864 242 0 234.459 0 225.158V206.151C0.00010001 183.157 8.6532 164.961 25.9587 151.563C43.2643 137.983 67.4448 131.194 98.5 131.194Z"
                                        fill="url(#dayungBaseGrad)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="dayungRoofGrad"
                                            x1="145"
                                            y1="-30"
                                            x2="98"
                                            y2="250"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#7EFFF9" />
                                            <stop offset="0.55" stopColor="#4BBDDD" />
                                            <stop offset="1" stopColor="#06A9AB" />
                                        </linearGradient>
                                        <linearGradient
                                            id="dayungBaseGrad"
                                            x1="145"
                                            y1="-10"
                                            x2="98"
                                            y2="255"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#74F2F3" />
                                            <stop offset="0.5" stopColor="#349BB6" />
                                            <stop offset="1" stopColor="#06A9AB" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </Link>

                        {/* Graphic Card 2: TripleWisk Brand Logo (653 x 513) */}
                        <Link
                            href="/projects/triplewisk"
                            className="bento-card group relative block h-[513px] w-full overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                            data-node-id="121:1822"
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
                            <div
                                className="relative z-10 mx-[28px] mt-[23px] flex flex-col gap-[14px]"
                                data-node-id="121:1823"
                            >
                                <div className="relative flex flex-col items-start gap-[6px]">
                                    <h3
                                        className="font-helvetica text-[28px] font-bold leading-normal tracking-[-1.68px] text-[#333333] transition-colors duration-300 group-hover:text-[#d69338]"
                                        data-node-id="121:1826"
                                    >
                                        TripleWisk
                                    </h3>
                                    <p
                                        className="font-helvetica text-[14px] font-normal leading-normal tracking-[-0.84px] text-[#909090]"
                                        data-node-id="121:1827"
                                    >
                                        Home-made fresh goods.
                                    </p>
                                    <div
                                        className="absolute right-0 top-0 size-[56px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
                                        data-node-id="121:1828"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="View TripleWisk project"
                                            className="block size-full max-w-none"
                                            src="/figma/redirection-56.svg"
                                        />
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

                            {/* TripleWisk Logo Container (334 x 230 at top:165): Default Muted Taupe -> Animated Original Golden Honey (#E5A54B) on Hover */}
                            <div
                                className="absolute left-1/2 top-[165px] h-[230px] w-[334px] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[8px] group-hover:rotate-[-2deg] group-hover:scale-[1.07]"
                                data-node-id="124:7434"
                            >
                                {/* Default Muted Taupe State (exact Figma appearance) */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="TripleWisk Logo"
                                    width={334}
                                    height={230}
                                    src="/figma/triplewisk-logo-gray.png"
                                    className="absolute inset-0 block size-full max-w-none transition-opacity duration-500 ease-out group-hover:opacity-0"
                                />

                                {/* Crisp solid Golden-Honey (#E5A54B) overlay matching the original TripleWhisk logo color on hover */}
                                <svg className="pointer-events-none absolute size-0" aria-hidden>
                                    <filter id="triplewisk-solid-color">
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
                                    style={{ filter: "url(#triplewisk-solid-color)" }}
                                    className="absolute inset-0 block size-full max-w-none opacity-0 drop-shadow-[0_14px_26px_rgba(229,165,75,0.34)] transition-opacity duration-500 ease-out group-hover:opacity-100"
                                />
                            </div>
                        </Link>
                    </div>
                </section>

                {/* ─── SECTION 3: CASE STUDIES ─── */}
                <section
                    className="bento-enter stagger-3 flex w-full flex-col gap-[24px]"
                    data-node-id="121:1496"
                >
                    <h2
                        className="font-helvetica text-[28px] font-bold leading-normal tracking-[-2.04px] text-[#333333] sm:text-[34px]"
                        data-node-id="121:1497"
                    >
                        <span>Case Studies. </span>
                        <span className="text-[#c5c5c5]">
                            Take a look and check if it make sense.
                        </span>
                    </h2>

                    <div
                        className="grid grid-cols-1 gap-[21px] lg:grid-cols-3"
                        data-node-id="121:1498"
                    >
                        {/* Case Study Card 1 (429 x 513) -> Cyber Risk Management */}
                        <Link
                            href="/projects/cyber-risk-management"
                            className="bento-card group relative block h-[513px] w-full overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                            data-node-id="121:1499"
                        >
                            <div
                                className="absolute left-[19px] top-[423px] size-[70.351px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
                                data-node-id="121:1526"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Open Cyber Risk Management Case Study"
                                    className="block size-full max-w-none"
                                    src="/figma/redirection.svg"
                                />
                            </div>
                        </Link>

                        {/* Case Study Card 2 (428 x 513) -> Sniff and Detect */}
                        <Link
                            href="/projects/sniff-and-detect"
                            className="bento-card group relative block h-[513px] w-full overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                            data-node-id="121:1528"
                        >
                            <div
                                className="absolute left-[96px] top-[88px] h-[502.844px] w-[613.295px] transition-transform duration-500 ease-out group-hover:translate-x-[-6px] group-hover:translate-y-[-4px]"
                                data-node-id="121:1529"
                            >
                                <div className="absolute inset-[1.41%_0_0_1%]">
                                    <div className="absolute inset-[-0.65%_-0.53%]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/ipad-shadows.svg"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-[0.58%_25.07%_30.57%_0.47%] rounded-[20.992px] border-[1.292px] border-[#d7d7d7] bg-black shadow-[6.459px_6.459px_16.148px_0px_rgba(0,0,0,0.35),25.837px_25.837px_48.444px_0px_rgba(0,0,0,0.25)]" />
                                <div className="absolute inset-[2.12%_26.33%_32.11%_1.74%] rounded-[14.533px] bg-black" />
                                <div className="absolute inset-[66.6%_56.13%_33.08%_31.54%] rounded-[32.296px] bg-white" />
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

                            <div
                                className="absolute left-[28px] top-[423px] size-[70.351px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
                                data-node-id="121:1530"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Open Sniff and Detect Case Study"
                                    className="block size-full max-w-none"
                                    src="/figma/redirection.svg"
                                />
                            </div>
                        </Link>

                        {/* Case Study Card 3 (428 x 513) -> Cyber Incident & Management */}
                        <Link
                            href="/projects/cyber-incident-management"
                            className="bento-card group relative block h-[513px] w-full overflow-clip rounded-[27px] bg-[#f7f7f9] no-underline"
                            data-node-id="121:1532"
                        >
                            <div
                                className="absolute left-[96px] top-[88px] h-[502.844px] w-[613.295px] transition-transform duration-500 ease-out group-hover:translate-x-[-6px] group-hover:translate-y-[-4px]"
                                data-node-id="121:1533"
                            >
                                <div className="absolute inset-[1.41%_0_0_1%]">
                                    <div className="absolute inset-[-0.65%_-0.53%]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt=""
                                            className="block size-full max-w-none"
                                            src="/figma/ipad-shadows.svg"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-[0.58%_25.07%_30.57%_0.47%] rounded-[20.992px] border-[1.292px] border-[#d7d7d7] bg-black shadow-[6.459px_6.459px_16.148px_0px_rgba(0,0,0,0.35),25.837px_25.837px_48.444px_0px_rgba(0,0,0,0.25)]" />
                                <div className="absolute inset-[2.12%_26.33%_32.11%_1.74%] rounded-[14.533px] bg-black" />
                                <div className="absolute inset-[66.6%_56.13%_33.08%_31.54%] rounded-[32.296px] bg-white" />
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

                            <div
                                className="absolute left-[28px] top-[423px] size-[70.351px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
                                data-node-id="121:1534"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Open Cyber Incident & Management Case Study"
                                    className="block size-full max-w-none"
                                    src="/figma/redirection.svg"
                                />
                            </div>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
