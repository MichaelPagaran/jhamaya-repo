"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types";
import Button from "./Button";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

/**
 * Project Case Study Modal
 * Displays a carousel of screenshots on the left and project details with a Figma CTA on the right.
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fallback if no screenshots
    const slides = project.screenshots && project.screenshots.length > 0
        ? project.screenshots
        : ["/placeholder-gradient-1", "/placeholder-gradient-2"];

    // Handle ESC to close and prevent background scrolling
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);

        // Prevent scrolling on the body while modal is open
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = originalStyle;
        };
    }, [onClose]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 md:p-20 transition-all duration-300 bg-black/60 backdrop-blur-md"
            onClick={onClose}
        >
            {/* Modal Box */}
            <div
                className="relative w-full max-w-[76rem] min-h-[70vh] max-h-[90vh] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] transform transition-transform duration-300 scale-100 bg-white"
                style={{ cursor: "auto" }}
                onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
                {/* Left Area: Carousel (65% width) */}
                <div className="w-full md:w-[65%] flex flex-col relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 lg:p-16 items-center justify-center overflow-hidden">
                    <div className="w-full h-full relative flex items-center justify-center">
                        {/* Render placeholder gradients or images */}
                        {slides.map((slide, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center p-4 sm:p-8 ${currentSlide === idx ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                            >
                                {slide.startsWith("/") ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={slide}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="max-w-[95%] max-h-[95%] object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
                                    />
                                ) : (
                                    <div className="w-full h-full max-w-[90%] max-h-[90%] bg-slate-800/50 rounded-xl shadow-2xl ring-1 ring-white/10 flex items-center justify-center text-slate-500 font-medium">
                                        No Image Provided
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    {slides.length > 1 && (
                        <>
                            {/* Floating Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                                aria-label="Previous slide"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                                aria-label="Next slide"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                            </button>

                            {/* Pagination Dots */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`rounded-full transition-all duration-300 ${currentSlide === idx
                                            ? "w-2.5 h-2.5 bg-white"
                                            : "w-2 h-2 bg-white/40 hover:bg-white/70"
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Right Area: Content (35% width) */}
                <div className="w-full md:w-[35%] flex flex-col relative overflow-y-auto bg-white">
                    {/* Close Button (X) — top-right, inside the white panel */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-20 flex items-center justify-center w-9 h-9 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>

                    {/* Content Block — padded generously on all sides */}
                    <div className="flex flex-col justify-between h-full px-10 pt-14 pb-10">
                        {/* Top: Tag + Title + Description + Details */}
                        <div className="flex flex-col">
                            {/* Tag Pill */}
                            <span className="inline-flex items-center self-start text-[0.6875rem] font-semibold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-full mb-5">
                                {project.tag}
                            </span>

                            <h2 className="text-[1.875rem] lg:text-[2.125rem] font-bold text-slate-900 mb-4 tracking-tight leading-[1.2]">
                                {project.title}
                            </h2>

                            <p className="text-[0.9375rem] text-slate-500 leading-[1.75] mb-8">
                                {project.description}
                            </p>

                            {/* Project Details Stack */}
                            {(project.challenge || project.whatIDid || project.outcome) && (
                                <div className="flex flex-col gap-6">
                                    {project.challenge && (
                                        <div>
                                            <h3 className="text-[0.8125rem] font-bold mb-1.5 flex items-center gap-2 text-slate-800">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                                                Challenge
                                            </h3>
                                            <p className="text-[0.875rem] text-slate-500 leading-[1.7]">
                                                {project.challenge}
                                            </p>
                                        </div>
                                    )}
                                    {project.whatIDid && (
                                        <div>
                                            <h3 className="text-[0.8125rem] font-bold mb-1.5 flex items-center gap-2 text-slate-800">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                                                What I did
                                            </h3>
                                            <p className="text-[0.875rem] text-slate-500 leading-[1.7]">
                                                {project.whatIDid}
                                            </p>
                                        </div>
                                    )}
                                    {project.outcome && (
                                        <div>
                                            <h3 className="text-[0.8125rem] font-bold mb-1.5 flex items-center gap-2 text-slate-800">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                                                Outcome
                                            </h3>
                                            <p className="text-[0.875rem] text-slate-500 leading-[1.7]">
                                                {project.outcome}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Bottom: Figma CTA */}
                        <div className="mt-10">
                            <a href={project.figmaUrl || "#"} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2.5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors shadow-sm">
                                    <svg width="15" height="15" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#0ACF83"/>
                                        <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#1ABCFE"/>
                                        <path d="M38 9.5C38 14.7467 33.7467 19 28.5 19H19V0H28.5C33.7467 0 38 4.25329 38 9.5Z" fill="#FF7262"/>
                                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                                        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#A259FF"/>
                                    </svg>
                                    View in Figma
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
