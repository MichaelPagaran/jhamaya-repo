"use client";

import React, { useState, useCallback, useEffect } from "react";

interface ProductCarouselProps {
    images: string[];
    title: string;
}

export default function ProductCarousel({ images, title }: ProductCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const total = images.length;

    const goToNext = useCallback(() => {
        if (total <= 1) return;
        setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const goToPrev = useCallback(() => {
        if (total <= 1) return;
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") goToNext();
            if (e.key === "ArrowLeft") goToPrev();
            if (e.key === "Escape" && isExpanded) setIsExpanded(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrev, isExpanded]);

    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isExpanded]);

    if (!images || total === 0) return null;

    return (
        <>
            <div className="group relative flex flex-col gap-[16px]">
                {/* Carousel Stage */}
                <div className="relative overflow-hidden rounded-[24px] border border-[#e5e5e5] bg-[#f7f7f9]">
                    {/* Top-Right Expand Button */}
                    <button
                        type="button"
                        onClick={() => setIsExpanded(true)}
                        aria-label="Expand screenshot to full view"
                        title="Expand image"
                        className="font-inter absolute right-[16px] top-[16px] z-20 flex cursor-pointer items-center gap-[6px] rounded-full border border-black/10 bg-white/90 px-[13px] py-[7px] text-[12px] font-medium text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:right-[20px] sm:top-[20px]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 3 21 3 21 9" />
                            <polyline points="9 21 3 21 3 15" />
                            <line x1="21" y1="3" x2="14" y2="10" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                        </svg>
                        <span>Expand</span>
                    </button>

                    {/* Sliding Track */}
                    <div
                        className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                        }}
                    >
                        {images.map((src, idx) => (
                            <div
                                key={`${src}-${idx}`}
                                onClick={() => setIsExpanded(true)}
                                className="flex min-h-[320px] w-full shrink-0 cursor-zoom-in items-center justify-center p-[20px] pb-[52px] pt-[52px] sm:min-h-[490px] sm:px-[48px] sm:pb-[64px] sm:pt-[56px]"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`${title} screen ${idx + 1}`}
                                    className="max-h-[430px] w-auto max-w-full rounded-[14px] object-contain shadow-[0_14px_34px_rgba(0,0,0,0.12)] select-none"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Left / Right Navigation Buttons */}
                    {total > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={goToPrev}
                                aria-label="Previous image"
                                className="absolute left-[14px] top-1/2 z-10 flex size-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:left-[20px]"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                onClick={goToNext}
                                aria-label="Next image"
                                className="absolute right-[14px] top-1/2 z-10 flex size-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#111111] shadow-[0_4px_14px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:right-[20px]"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Bottom Pill Indicator */}
                    {total > 1 && (
                        <div className="absolute bottom-[16px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[8px] rounded-full border border-black/5 bg-white/85 px-[12px] py-[7px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] backdrop-blur-md">
                            {images.map((_, idx) => {
                                const isActive = idx === currentIndex;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setCurrentIndex(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                        className={`h-[7px] cursor-pointer rounded-full transition-all duration-300 ${
                                            isActive
                                                ? "w-[22px] bg-[#111111]"
                                                : "w-[7px] bg-[#111111]/25 hover:bg-[#111111]/45"
                                        }`}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            {isExpanded && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${title} expanded view`}
                    onClick={() => setIsExpanded(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-[16px] backdrop-blur-md sm:p-[40px]"
                >
                    {/* Top Bar Controls */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-[20px] py-[18px] sm:px-[32px]"
                    >
                        <span className="font-inter rounded-full border border-white/15 bg-white/10 px-[13px] py-[6px] text-[12px] font-medium text-white/90 backdrop-blur-md">
                            {currentIndex + 1} / {total}
                        </span>

                        <button
                            type="button"
                            onClick={() => setIsExpanded(false)}
                            aria-label="Close expanded view"
                            className="font-inter flex cursor-pointer items-center gap-[6px] rounded-full border border-white/15 bg-white/15 px-[14px] py-[7px] text-[12.5px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/25 active:scale-95"
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            <span>Close</span>
                        </button>
                    </div>

                    {/* Expanded Image Stage */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative flex max-h-[88vh] w-full max-w-[1440px] items-center justify-center"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={images[currentIndex]}
                            alt={`${title} expanded screen ${currentIndex + 1}`}
                            className="max-h-[84vh] w-auto max-w-full rounded-[16px] object-contain shadow-[0_24px_64px_rgba(0,0,0,0.5)] select-none"
                            draggable={false}
                        />

                        {total > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={goToPrev}
                                    aria-label="Previous image"
                                    className="fixed left-[16px] top-1/2 z-50 flex size-[44px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/15 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/25 active:scale-95 sm:left-[28px]"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={goToNext}
                                    aria-label="Next image"
                                    className="fixed right-[16px] top-1/2 z-50 flex size-[44px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/15 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/25 active:scale-95 sm:right-[28px]"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {/* Bottom Dots in Modal */}
                    {total > 1 && (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="fixed bottom-[24px] left-1/2 z-50 flex -translate-x-1/2 items-center gap-[8px] rounded-full border border-white/15 bg-white/10 px-[14px] py-[8px] backdrop-blur-md"
                        >
                            {images.map((_, idx) => {
                                const isActive = idx === currentIndex;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setCurrentIndex(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                        className={`h-[7px] cursor-pointer rounded-full transition-all duration-300 ${
                                            isActive
                                                ? "w-[24px] bg-white"
                                                : "w-[7px] bg-white/35 hover:bg-white/60"
                                        }`}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
