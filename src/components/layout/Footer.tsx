"use client";

import { SOCIAL_LINKS } from "@/constants";

/**
 * Dark Contact & Footer section matching Figma node 8:371.
 * Features availability badge, 72px Helvetica headline, neon lime email link,
 * -6deg rotated blue circular CTA button, and Roboto Mono footer bar.
 */
export default function Footer() {
    return (
        <footer
            id="contact"
            className="w-full bg-[#171714] text-white"
            data-node-id="8:371"
            data-name="Contact"
        >
            <div className="mx-auto flex min-h-[650px] w-full max-w-[1440px] flex-col justify-between gap-[72px] overflow-clip px-[24px] py-[64px] sm:px-[56px]">
                {/* Availability Row */}
                <div
                    className="flex shrink-0 items-center gap-[10px]"
                    data-node-id="8:372"
                    data-name="Availability"
                >
                    <div className="relative size-[12px] shrink-0" data-node-id="8:373">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            className="absolute inset-0 block size-full max-w-none"
                            src="/figma/status-dot.svg"
                        />
                    </div>
                    <p
                        className="font-helvetica text-[12px] font-normal leading-normal tracking-[0.02em] text-white whitespace-nowrap"
                        data-node-id="8:374"
                    >
                        OPEN TO THE RIGHT CONVERSATION · 2026
                    </p>
                </div>

                {/* Main Invitation Row */}
                <div
                    className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-end"
                    data-node-id="8:375"
                    data-name="Invitation"
                >
                    <div
                        className="flex max-w-[920px] flex-col items-start gap-[20px]"
                        data-node-id="8:376"
                        data-name="Copy"
                    >
                        <h2
                            className="font-helvetica text-[44px] font-normal leading-[0.98] text-white sm:text-[60px] lg:text-[72px]"
                            data-node-id="8:377"
                        >
                            Have a knotty product problem? Let’s make it click.
                        </h2>
                        <a
                            href="mailto:hello@yourname.design"
                            className="font-inter text-[20px] font-semibold leading-normal text-[#d8ff52] transition-opacity hover:opacity-80 sm:text-[24px]"
                            data-node-id="8:378"
                        >
                            hello@yourname.design ↗
                        </a>
                    </div>

                    {/* Blue Circular CTA Button (-6 deg rotation) */}
                    <div
                        className="flex size-[186.839px] shrink-0 items-center justify-center"
                        data-node-id="8:379"
                    >
                        <a
                            href="mailto:hello@yourname.design"
                            className="group -rotate-6 flex-none transition-transform duration-300 ease-out hover:rotate-0 hover:scale-105"
                            data-name="Contact button"
                        >
                            <div className="flex size-[170px] flex-col items-center justify-center overflow-clip rounded-[999px] bg-[#0078ff] shadow-[0_12px_32px_rgba(0,120,255,0.35)]">
                                <div
                                    className="font-inter w-[120px] text-center text-[18px] font-bold leading-normal text-black"
                                    data-node-id="8:380"
                                >
                                    <p className="mb-0">START A</p>
                                    <p>CONVERSATION ↗</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bottom Footer Meta Bar */}
                <div
                    className="font-mono-tech flex w-full flex-col items-start justify-between gap-4 border-t border-[#3c3c37] pt-[24px] text-[11px] font-normal leading-normal sm:flex-row sm:items-center"
                    data-node-id="8:381"
                    data-name="Footer meta"
                >
                    <p className="text-[#96968f] whitespace-nowrap" data-node-id="8:382">
                        © 2026 YOUR NAME. BUILT WITH INTENT.
                    </p>

                    <div
                        className="flex items-center gap-[28px] text-white"
                        data-node-id="8:383"
                        data-name="Social links"
                    >
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : "_self"}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="whitespace-nowrap transition-colors hover:text-[#d8ff52]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <p className="text-[#96968f] whitespace-nowrap" data-node-id="8:387">
                        BASED SOMEWHERE · WORKING EVERYWHERE
                    </p>
                </div>
            </div>
        </footer>
    );
}
