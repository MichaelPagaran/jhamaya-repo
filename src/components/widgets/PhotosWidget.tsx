"use client";

import { useState } from "react";

type PhotoKey = "tree" | "dark" | "reptile" | "car";

interface PhotoSlide {
    id: PhotoKey;
    label: string;
    src: string;
    imgClassName: string;
    activeIcon: string;
    inactiveIcon: string;
}

const PHOTO_SLIDES: PhotoSlide[] = [
    {
        id: "tree",
        label: "Nature",
        src: "/figma/photo-1.png",
        imgClassName: "absolute h-[238.94%] left-[-21.45%] max-w-none top-[-83.62%] w-[131.86%]",
        activeIcon: "/figma/icon-tree-active.svg",
        inactiveIcon: "/figma/icon-tree-inactive.svg",
    },
    {
        id: "dark",
        label: "Night",
        src: "/figma/photo-3.png",
        imgClassName: "absolute h-[136.53%] left-[-5.68%] max-w-none top-[-36.47%] w-[111.67%]",
        activeIcon: "/figma/icon-moon-active.svg",
        inactiveIcon: "/figma/icon-moon-inactive.svg",
    },
    {
        id: "reptile",
        label: "Gecko",
        src: "/figma/photo-4.png",
        imgClassName: "absolute h-[240.19%] left-[-0.09%] max-w-none top-[-67.52%] w-[108.39%]",
        activeIcon: "/figma/icon-turtle-active.svg",
        inactiveIcon: "/figma/icon-turtle-inactive.svg",
    },
    {
        id: "car",
        label: "Street",
        src: "/figma/photo-2.png",
        imgClassName: "absolute h-[152.73%] left-[-6.01%] max-w-none top-[-45.66%] w-[112.34%]",
        activeIcon: "/figma/icon-car-active.svg",
        inactiveIcon: "/figma/icon-car-inactive.svg",
    },
];

/**
 * Apple Photos Widget (317x311) with iOS Liquid Glass Tapbar.
 * - All inactive icons use the exact same white @ 50% opacity state as the tree icon.
 * - Hovering reveals an iOS Liquid Glass floating dock with multi-layered specular
 *   refraction, high saturation backdrop blur, and a smooth sliding glass pill indicator.
 */
export default function PhotosWidget() {
    const [activeTab, setActiveTab] = useState<PhotoKey>("tree");
    const [isHovered, setIsHovered] = useState(false);

    const activeIndex = PHOTO_SLIDES.findIndex((s) => s.id === activeTab);

    return (
        <div
            className="bento-card relative h-[311px] w-[317px] shrink-0 overflow-clip rounded-[27px] bg-[#f7f7f9] select-none"
            data-node-id="21:2922"
            data-name="Photos"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Photo Layers with smooth crossfade */}
            {PHOTO_SLIDES.map((slide) => {
                const isActive = slide.id === activeTab;
                return (
                    <div
                        key={slide.id}
                        className={`absolute left-0 top-0 w-[317px] transition-all duration-500 ease-out ${
                            slide.id === "dark" ? "h-[324px]" : "h-[311px]"
                        } ${isActive ? "z-10 scale-100 opacity-100" : "pointer-events-none z-0 scale-[1.02] opacity-0"}`}
                    >
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt={slide.label} className={slide.imgClassName} src={slide.src} />
                        </div>
                    </div>
                );
            })}

            {/* Apple Photos App Flower Icon (Top-right, visible when not hovered) */}
            <button
                type="button"
                onClick={() => {
                    const nextSlide = PHOTO_SLIDES[(activeIndex + 1) % PHOTO_SLIDES.length];
                    setActiveTab(nextSlide.id);
                }}
                aria-label="Cycle photo"
                className={`absolute left-[238px] top-[15px] z-20 size-[66px] cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out ${
                    isHovered ? "pointer-events-none scale-90 opacity-0" : "scale-100 opacity-100"
                }`}
                data-node-id="I21:2922;21:2837"
            >
                <div className="absolute inset-0 rounded-[14.85px] bg-white shadow-[0px_0.516px_0.773px_0px_rgba(0,0,0,0.09)]" />
                {/* Glow layer */}
                <div className="absolute contents inset-[9.3%_6.98%_3.49%_6.98%]">
                    <div className="absolute bottom-1/2 left-[36.05%] right-[36.05%] top-[9.3%] rounded-[12.279px] bg-[#ffa625] opacity-20 mix-blend-multiply" />
                    <div className="absolute inset-[55.81%_36.05%_3.49%_36.05%] rounded-[12.279px] bg-[#69abdf] opacity-20 mix-blend-multiply" />
                    <div
                        className="absolute inset-[12.79%_10.45%_39.52%_41.86%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(-60.3448cqw,60.3448cqh)] w-[hypot(39.6552cqw,39.6552cqh)] flex-none rotate-45">
                            <div className="relative size-full rounded-[12.279px] bg-[#e7e00b] opacity-20" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[45.35%_10.45%_6.96%_41.86%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(-60.3448cqw,-60.3448cqh)] w-[hypot(-39.6552cqw,39.6552cqh)] flex-none rotate-135">
                            <div className="relative size-full rounded-[12.279px] bg-[#63be9d] opacity-20" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[13.25%_42.77%_39.06%_9.54%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(60.3448cqw,60.3448cqh)] w-[hypot(39.6552cqw,-39.6552cqh)] flex-none -rotate-45">
                            <div className="relative size-full rounded-[12.279px] bg-[#fe6d51] opacity-20" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[45.35%_42.77%_6.96%_9.54%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(60.3448cqw,-60.3448cqh)] w-[hypot(-39.6552cqw,-39.6552cqh)] flex-none -rotate-135">
                            <div className="relative size-full rounded-[12.279px] bg-[#a387c1] opacity-20" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[39.54%_6.98%_33.72%_52.33%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[100cqw] w-[100cqh] flex-none rotate-90">
                            <div className="relative size-full rounded-[12.279px] bg-[#9fcf45] opacity-20" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[39.54%_52.33%_33.72%_6.98%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[100cqw] w-[100cqh] flex-none rotate-90">
                            <div className="relative size-full rounded-[12.279px] bg-[#d47a9e] opacity-20" />
                        </div>
                    </div>
                </div>
                {/* Petals layer */}
                <div className="absolute contents inset-[5.81%_6.98%_6.98%_5.81%]">
                    <div className="absolute inset-[5.81%_36.05%_53.49%_36.05%] rounded-[12.279px] mix-blend-multiply shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]">
                        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[12.279px]">
                            <div className="absolute inset-0 rounded-[12.279px] bg-[#ffa625]" />
                            <div
                                className="absolute inset-0 rounded-[12.279px] mix-blend-overlay"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(160.016896333439deg, rgb(0, 0, 0) 25.676%, rgba(0, 0, 0, 0) 31.289%)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="absolute inset-[52.33%_36.05%_6.98%_36.05%] rounded-[12.279px] bg-[#69abdf] mix-blend-multiply shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]" />
                    <div
                        className="absolute inset-[9.3%_10.45%_43.01%_41.86%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(-60.3448cqw,60.3448cqh)] w-[hypot(39.6552cqw,39.6552cqh)] flex-none rotate-45">
                            <div className="relative size-full rounded-[12.279px] bg-[#e7e00b] shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[41.86%_10.45%_10.45%_41.86%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(-60.3448cqw,-60.3448cqh)] w-[hypot(-39.6552cqw,39.6552cqh)] flex-none rotate-135">
                            <div className="relative size-full rounded-[12.279px] bg-[#63be9d] shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[9.77%_42.77%_42.54%_9.54%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(60.3448cqw,60.3448cqh)] w-[hypot(39.6552cqw,-39.6552cqh)] flex-none -rotate-45">
                            <div className="relative size-full rounded-[12.279px] shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]">
                                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[12.279px]">
                                    <div className="absolute inset-0 rounded-[12.279px] bg-[#fe6d51]" />
                                    <div
                                        className="absolute inset-0 rounded-[12.279px] mix-blend-overlay"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(137.1210911174436deg, rgb(0, 0, 0) 0.99916%, rgba(0, 0, 0, 0) 31.712%)",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-[41.86%_42.77%_10.45%_9.54%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[hypot(60.3448cqw,-60.3448cqh)] w-[hypot(-39.6552cqw,-39.6552cqh)] flex-none -rotate-135">
                            <div className="relative size-full rounded-[12.279px] bg-[#a387c1] shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[36.05%_6.98%_37.21%_52.33%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[100cqw] w-[100cqh] flex-none rotate-90">
                            <div className="relative size-full rounded-[12.279px] bg-[#9fcf45] shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]" />
                        </div>
                    </div>
                    <div
                        className="absolute inset-[36.05%_53.49%_37.21%_5.81%] flex items-center justify-center mix-blend-multiply"
                        style={{ containerType: "size" }}
                    >
                        <div className="h-[100cqw] w-[100cqh] flex-none rotate-90">
                            <div className="relative size-full rounded-[12.279px] shadow-[0px_1.535px_2.302px_0px_rgba(0,0,0,0.22)]">
                                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[12.279px]">
                                    <div className="absolute inset-0 rounded-[12.279px] bg-[#d47a9e]" />
                                    <div
                                        className="absolute inset-0 rounded-[12.279px] mix-blend-overlay"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(12.264767887841202deg, rgb(0, 0, 0) 20.87%, rgba(0, 0, 0, 0) 39.348%)",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>

            {/* Hover Overlay & Apple iOS Liquid Glass Tapbar */}
            <div
                className={`absolute left-0 top-0 z-20 h-[311px] w-[317px] overflow-clip rounded-[27px] transition-opacity duration-300 ${
                    isHovered ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
                style={{
                    backgroundImage:
                        "radial-gradient(112.9% 112.9% at 50% 39.7%, rgba(0,0,0,0) 0%, rgba(19,20,22,0.48) 100%)",
                }}
            >
                <div
                    className={`absolute left-1/2 top-[225px] h-[52.704px] w-[247px] -translate-x-1/2 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isHovered ? "translate-y-0 scale-100" : "translate-y-3 scale-95"
                    }`}
                    data-name="Tapbar"
                >
                    {/* iOS Liquid Glass Outer Shell */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-[50.93px]"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.10) 48%, rgba(255,255,255,0.20) 100%)",
                            backdropFilter: "blur(24px) saturate(200%)",
                            WebkitBackdropFilter: "blur(24px) saturate(200%)",
                            boxShadow:
                                "0 12px 32px -4px rgba(0, 0, 0, 0.35), 0 2px 8px 0 rgba(0, 0, 0, 0.18), inset 0 1.25px 1.5px 0 rgba(255, 255, 255, 0.75), inset 0 -1px 1.5px 0 rgba(255, 255, 255, 0.35), inset 1px 0 1px 0 rgba(255, 255, 255, 0.35), inset -1px 0 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 16px 0 rgba(255, 255, 255, 0.14)",
                        }}
                    />

                    {/* Top Specular Liquid Sheen */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-[10px] top-[1.5px] h-[16px] rounded-full opacity-60"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
                        }}
                    />

                    {/* Sliding Liquid Glass Active Capsule + 4 Tab Buttons */}
                    <div className="absolute inset-[3.4px_3px] flex items-center justify-between">
                        {/* Sliding Liquid Bubble Pill */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute top-0 h-[45.837px] w-[60.25px] rounded-[22.918px] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                                transform: `translateX(${activeIndex * 60.25}px)`,
                                background:
                                    "linear-gradient(145deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 55%, rgba(255,255,255,0.24) 100%)",
                                backdropFilter: "blur(12px) brightness(1.12)",
                                WebkitBackdropFilter: "blur(12px) brightness(1.12)",
                                boxShadow:
                                    "0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 1.2px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(255, 255, 255, 0.28), inset 0 0 10px rgba(255, 255, 255, 0.18)",
                            }}
                        />

                        {PHOTO_SLIDES.map((slide) => {
                            const isActive = slide.id === activeTab;
                            return (
                                <button
                                    key={slide.id}
                                    type="button"
                                    onClick={() => setActiveTab(slide.id)}
                                    aria-label={`Show ${slide.label} photo`}
                                    className="relative z-10 flex h-[45.837px] w-[60.25px] shrink-0 cursor-pointer items-center justify-center rounded-[22.918px] transition-transform duration-200 active:scale-92"
                                >
                                    <div className="relative size-[29.105px] shrink-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt={slide.label}
                                            className={`absolute inset-0 block size-full max-w-none transition-all duration-200 ${
                                                isActive
                                                    ? "scale-105 drop-shadow-[0_2px_6px_rgba(255,255,255,0.45)]"
                                                    : "hover:opacity-80"
                                            }`}
                                            src={isActive ? slide.activeIcon : slide.inactiveIcon}
                                        />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
