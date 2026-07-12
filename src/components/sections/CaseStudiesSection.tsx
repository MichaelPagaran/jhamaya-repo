"use client";

import { useState, useRef, useEffect } from "react";
import { Project } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";

interface CaseStudiesSectionProps {
    caseStudies: Project[];
}

/**
 * Case Studies Carousel Section
 * Renders a horizontal carousel of detailed projects highlighting key metrics (KPIs).
 * Clicking a card opens the detailed ProjectModal.
 */
export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
    const [selectedStudy, setSelectedStudy] = useState<Project | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Update scroll buttons visibility
    const checkScrollLimits = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScrollLimits);
            // Check limits initially and on resize
            checkScrollLimits();
            window.addEventListener("resize", checkScrollLimits);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", checkScrollLimits);
            }
            window.removeEventListener("resize", checkScrollLimits);
        };
    }, [caseStudies]);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="case-studies"
            className="border-t border-[var(--border)]"
            style={{
                padding: "7.5rem 3.25rem",
                background: "var(--bg)",
                position: "relative",
            }}
        >
            {/* Header Area */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: "4rem",
                }}
            >
                <div>
                    <p
                        className="anim d1"
                        style={{
                            fontSize: "0.625rem",
                            fontWeight: 700,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "var(--muted)",
                            marginBottom: "0.75rem",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Metrics &amp; Impact
                    </p>
                    <h2
                        className="display anim d2"
                        style={{
                            fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
                            lineHeight: 0.93,
                            fontWeight: "bold",
                        }}
                    >
                        Deep Dives &amp;
                        <br />
                        <span style={{ color: "var(--accent)" }}>Key Case Studies</span>
                    </h2>
                </div>

                {/* Carousel Controls */}
                <div className="flex gap-2.5 anim d3">
                    <button
                        onClick={() => handleScroll("left")}
                        disabled={!canScrollLeft}
                        className={`flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border)] bg-[#fcfbf9] transition-all ${
                            canScrollLeft
                                ? "text-[var(--fg)] hover:bg-[var(--fg)] hover:text-white hover:border-[var(--fg)] cursor-pointer"
                                : "text-[var(--muted2)] opacity-50 cursor-not-allowed"
                        }`}
                        aria-label="Scroll left"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => handleScroll("right")}
                        disabled={!canScrollRight}
                        className={`flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border)] bg-[#fcfbf9] transition-all ${
                            canScrollRight
                                ? "text-[var(--fg)] hover:bg-[var(--fg)] hover:text-white hover:border-[var(--fg)] cursor-pointer"
                                : "text-[var(--muted2)] opacity-50 cursor-not-allowed"
                        }`}
                        aria-label="Scroll right"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-4"
                style={{
                    marginRight: "-3.25rem",
                    paddingRight: "3.25rem",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {caseStudies.map((study, idx) => (
                    <div
                        key={study.slug}
                        onClick={() => setSelectedStudy(study)}
                        className={`w-[85vw] sm:w-[28rem] flex-shrink-0 snap-start bg-[#fcfbf9] border border-[var(--border)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] hover:border-[var(--accent)] group anim d${(idx % 3) + 1}`}
                    >
                        {/* Mockup Image Container */}
                        <div className="relative h-52 sm:h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden border-b border-[var(--border)]">
                            {study.screenshots && study.screenshots[0] ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                    src={study.screenshots[0]}
                                    alt={`${study.title} preview`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[var(--muted)] bg-slate-100 font-medium">
                                    No Preview Available
                                </div>
                            )}

                            {/* Hover overlay indicator */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xs font-semibold tracking-wider uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    Read Case Study
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 sm:p-7 flex flex-col justify-between">
                            <div>
                                <span className="text-[0.625rem] font-bold tracking-widest text-[var(--accent)] uppercase mb-2 block">
                                    {study.tag}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-[var(--fg)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                                    {study.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
                                    {study.description}
                                </p>
                            </div>

                            {/* KPIs Section */}
                            {study.kpis && study.kpis.length > 0 && (
                                <div className="grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-5 mt-auto">
                                    {study.kpis.map((kpi, kIdx) => (
                                        <div key={kIdx} className="flex flex-col">
                                            <span className="text-xl sm:text-2xl font-bold text-[var(--accent)] tracking-tight">
                                                {kpi.value}
                                            </span>
                                            <span className="text-[0.5625rem] sm:text-[0.625rem] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                                {kpi.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Portal */}
            {selectedStudy && (
                <ProjectModal
                    project={selectedStudy}
                    onClose={() => setSelectedStudy(null)}
                />
            )}
        </section>
    );
}
