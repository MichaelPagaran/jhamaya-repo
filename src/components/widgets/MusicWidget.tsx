"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Full track duration of SZA - Good Days is 4:39 (279 seconds)
const FULL_TRACK_DURATION = 279;
// Official SZA - Good Days Audio YouTube Video ID
const YT_VIDEO_ID = "oh64haEP9g8";

interface YTPlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    seekTo: (seconds: number, allowSeekAhead: boolean) => void;
    setVolume: (volume: number) => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    destroy: () => void;
}

declare global {
    interface Window {
        YT?: {
            Player: new (
                elementId: string | HTMLElement,
                options: {
                    videoId: string;
                    playerVars?: Record<string, number | string>;
                    events?: {
                        onReady?: (event: { target: YTPlayer }) => void;
                        onStateChange?: (event: { data: number; target: YTPlayer }) => void;
                        onError?: () => void;
                    };
                }
            ) => YTPlayer;
        };
        onYouTubeIframeAPIReady?: () => void;
    }
}

function formatTime(sec: number): string {
    if (!Number.isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
}

/**
 * Clean, Apple-native Music Widget (430 x 340) matching the Photos Widget's hover-reveal interaction.
 * - Default State: Full-bleed SZA "Good Days" album artwork with clean Helvetica title/artist typography.
 * - Hover State: Smoothly reveals an iOS Liquid Glass player menu at the bottom with seek scrubber,
 *   tabular timestamps, and true Rewind (⏪) / Play-Pause / Fast-Forward (⏩) controls.
 */
export default function MusicWidget() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const ytPlayerRef = useRef<YTPlayer | null>(null);
    const ytContainerRef = useRef<HTMLDivElement | null>(null);

    const [engine, setEngine] = useState<"local-mp3" | "youtube" | "fallback">("youtube");
    const [ytReady, setYtReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(FULL_TRACK_DURATION);
    const [isRepeat, setIsRepeat] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

    // 1. Check if a local full MP3 exists at /audio/good-days.mp3
    useEffect(() => {
        let cancelled = false;
        fetch("/audio/good-days.mp3", { method: "HEAD" })
            .then((res) => {
                if (!cancelled && res.ok) {
                    setEngine("local-mp3");
                }
            })
            .catch(() => {
                // Keep youtube full-track engine
            });
        return () => {
            cancelled = true;
        };
    }, []);

    // 2. Initialize hidden YouTube full-track audio engine (4:39 full song)
    useEffect(() => {
        if (engine !== "youtube") return;

        let isMounted = true;

        const initPlayer = () => {
            if (!isMounted || !ytContainerRef.current || !window.YT?.Player) return;
            try {
                ytPlayerRef.current = new window.YT.Player(ytContainerRef.current, {
                    videoId: YT_VIDEO_ID,
                    playerVars: {
                        autoplay: 0,
                        controls: 0,
                        disablekb: 1,
                        fs: 0,
                        modestbranding: 1,
                        playsinline: 1,
                        rel: 0,
                    },
                    events: {
                        onReady: (e) => {
                            if (!isMounted) return;
                            setYtReady(true);
                            const d = e.target.getDuration();
                            if (d && d > 0) setDuration(d);
                        },
                        onStateChange: (e) => {
                            if (!isMounted) return;
                            if (e.data === 1) {
                                setIsPlaying(true);
                                const d = e.target.getDuration();
                                if (d && d > 0) setDuration(d);
                            } else if (e.data === 2) {
                                setIsPlaying(false);
                            } else if (e.data === 0) {
                                if (isRepeat) {
                                    e.target.seekTo(0, true);
                                    e.target.playVideo();
                                } else {
                                    setIsPlaying(false);
                                    setCurrentTime(0);
                                }
                            }
                        },
                        onError: () => {
                            if (!isMounted) return;
                            setEngine("fallback");
                        },
                    },
                });
            } catch {
                setEngine("fallback");
            }
        };

        if (window.YT?.Player) {
            initPlayer();
        } else {
            const existingScript = document.getElementById("yt-iframe-api");
            const prevCallback = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                if (prevCallback) prevCallback();
                initPlayer();
            };
            if (!existingScript) {
                const tag = document.createElement("script");
                tag.id = "yt-iframe-api";
                tag.src = "https://www.youtube.com/iframe_api";
                document.body.appendChild(tag);
            }
        }

        return () => {
            isMounted = false;
            try {
                ytPlayerRef.current?.destroy();
            } catch {
                // ignore
            }
        };
    }, [engine, isRepeat]);

    // Poll YouTube player currentTime smoothly when playing
    useEffect(() => {
        if (engine !== "youtube" || !isPlaying) return;
        const interval = setInterval(() => {
            try {
                const t = ytPlayerRef.current?.getCurrentTime();
                if (typeof t === "number" && Number.isFinite(t)) {
                    setCurrentTime(t);
                }
            } catch {
                // ignore
            }
        }, 250);
        return () => clearInterval(interval);
    }, [engine, isPlaying]);

    const togglePlay = useCallback(async () => {
        if (engine === "youtube") {
            if (ytReady && ytPlayerRef.current) {
                if (isPlaying) {
                    ytPlayerRef.current.pauseVideo();
                    setIsPlaying(false);
                } else {
                    ytPlayerRef.current.playVideo();
                    setIsPlaying(true);
                }
                return;
            } else {
                setEngine("fallback");
            }
        }

        const audio = audioRef.current;
        if (!audio) return;
        try {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                await audio.play();
                setIsPlaying(true);
            }
        } catch {
            setIsPlaying(false);
        }
    }, [engine, ytReady, isPlaying]);

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextTime = Number(e.target.value);
        setCurrentTime(nextTime);
        if (engine === "youtube" && ytReady && ytPlayerRef.current) {
            ytPlayerRef.current.seekTo(nextTime, true);
        } else if (audioRef.current) {
            audioRef.current.currentTime = nextTime;
        }
    };

    const handleSkip = (deltaSeconds: number) => {
        const nextTime = Math.max(0, Math.min(duration, currentTime + deltaSeconds));
        setCurrentTime(nextTime);
        if (engine === "youtube" && ytReady && ytPlayerRef.current) {
            ytPlayerRef.current.seekTo(nextTime, true);
        } else if (audioRef.current) {
            audioRef.current.currentTime = nextTime;
        }
    };

    const toggleMute = () => {
        const nextMute = !isMuted;
        setIsMuted(nextMute);
        if (engine === "youtube" && ytReady && ytPlayerRef.current) {
            ytPlayerRef.current.setVolume(nextMute ? 0 : 100);
        } else if (audioRef.current) {
            audioRef.current.muted = nextMute;
        }
    };

    const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

    return (
        <div
            id="recommendations"
            className="bento-card bento-enter stagger-5 relative h-[340px] w-full overflow-clip rounded-[20px] bg-[#f7f7f9] select-none"
            data-node-id="63:9023"
            data-name="MusicWidget"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Hidden YouTube Full-Track Audio Container */}
            <div className="pointer-events-none absolute -left-[9999px] -top-[9999px] size-0 overflow-hidden opacity-0">
                <div ref={ytContainerRef} />
            </div>

            {/* HTML5 Audio for local /audio/good-days.mp3 or fallback */}
            <audio
                ref={audioRef}
                src={
                    engine === "local-mp3"
                        ? "/audio/good-days.mp3"
                        : "/audio/good-days-fallback.m4a"
                }
                loop={isRepeat}
                preload="metadata"
                onTimeUpdate={(e) => {
                    if (engine !== "youtube") {
                        setCurrentTime(e.currentTarget.currentTime);
                    }
                }}
                onLoadedMetadata={(e) => {
                    if (
                        engine !== "youtube" &&
                        e.currentTarget.duration &&
                        Number.isFinite(e.currentTarget.duration)
                    ) {
                        setDuration(e.currentTarget.duration);
                    }
                }}
                onEnded={() => {
                    if (!isRepeat) {
                        setIsPlaying(false);
                        setCurrentTime(0);
                    }
                }}
            />

            {/* Full-Bleed Album Cover Background */}
            <div
                onClick={togglePlay}
                className="absolute inset-0 cursor-pointer overflow-hidden"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/audio/good-days-cover.jpg"
                    alt="Good Days by SZA"
                    className={`size-full object-cover transition-transform duration-700 ease-out ${
                        isHovered || isPlaying ? "scale-[1.03]" : "scale-100"
                    }`}
                />
                {/* Subtle editorial gradient vignette for legibility */}
                <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                    style={{
                        background: isHovered
                            ? "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.12) 42%, rgba(8,10,14,0.62) 100%)"
                            : "linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.28) 100%)",
                    }}
                />
            </div>

            {/* Top Track Info (Consistent Helvetica Portfolio Typography) */}
            <div className="pointer-events-none relative z-10 flex items-start justify-between px-[24px] pt-[20px]">
                <div className="flex flex-col">
                    <h3 className="font-helvetica text-[28px] font-bold leading-[1.08] tracking-[-1.4px] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                        Good Days
                    </h3>
                    <p className="font-helvetica mt-[3px] text-[16px] font-normal leading-normal tracking-[-0.6px] text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                        SZA
                    </p>
                </div>

                {/* Minimal Playing Equalizer Indicator when playing and not hovered */}
                <div
                    className={`flex h-[24px] items-center gap-[2.5px] rounded-full px-[8px] transition-opacity duration-300 ${
                        isPlaying && !isHovered ? "opacity-90" : "opacity-0"
                    }`}
                >
                    <span className="h-[11px] w-[2.5px] animate-pulse rounded-full bg-white" />
                    <span className="h-[15px] w-[2.5px] animate-bounce rounded-full bg-white" />
                    <span className="h-[9px] w-[2.5px] animate-pulse rounded-full bg-white" />
                </div>
            </div>

            {/* ─── HOVER-ONLY iOS LIQUID GLASS PLAYER MENU ─── */}
            <div
                style={{
                    transition:
                        "opacity 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 560ms cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: isHovered
                        ? "translate3d(0, 0, 0) scale(1)"
                        : "translate3d(0, 14px, 0) scale(0.965)",
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? "auto" : "none",
                    willChange: "transform, opacity",
                }}
                className="absolute inset-x-[18px] bottom-[18px] z-20 origin-bottom"
            >
                <div
                    className="relative overflow-hidden rounded-[26px] px-[20px] pb-[14px] pt-[14px]"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.22) 100%)",
                        backdropFilter: isHovered
                            ? "blur(28px) saturate(210%)"
                            : "blur(8px) saturate(140%)",
                        WebkitBackdropFilter: isHovered
                            ? "blur(28px) saturate(210%)"
                            : "blur(8px) saturate(140%)",
                        boxShadow:
                            "0 16px 36px -6px rgba(0, 0, 0, 0.42), 0 2px 10px 0 rgba(0, 0, 0, 0.22), inset 0 1.25px 1.5px 0 rgba(255, 255, 255, 0.82), inset 0 -1px 1.5px 0 rgba(255, 255, 255, 0.35), inset 1px 0 1px 0 rgba(255, 255, 255, 0.38), inset -1px 0 1px 0 rgba(255, 255, 255, 0.38), inset 0 0 18px 0 rgba(255, 255, 255, 0.16)",
                        transition:
                            "backdrop-filter 520ms cubic-bezier(0.22, 1, 0.36, 1), -webkit-backdrop-filter 520ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1)",
                        transform: "translateZ(0)",
                    }}
                >
                    {/* Top Specular Liquid Sheen Reflection */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-[14px] top-[1.5px] h-[18px] rounded-full opacity-60"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0) 100%)",
                        }}
                    />

                    {/* Scrubber & Timestamps */}
                    <div className="relative z-10 flex flex-col gap-[5px]">
                        <div className="group/scrub relative flex h-[14px] w-full items-center">
                            <div className="relative h-[4.5px] w-full overflow-hidden rounded-full bg-white/25 transition-all duration-200 group-hover/scrub:h-[6.5px]">
                                <div
                                    className="h-full rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.85)] transition-all duration-100"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <input
                                type="range"
                                min={0}
                                max={duration || FULL_TRACK_DURATION}
                                step={0.1}
                                value={currentTime}
                                onChange={handleSeek}
                                aria-label="Seek timeline"
                                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                            />
                        </div>

                        <div className="font-sf flex items-center justify-between text-[11px] font-medium tabular-nums tracking-[-0.2px] text-white/80">
                            <span>{formatTime(currentTime)}</span>
                            <span>-{formatTime(Math.max(0, duration - currentTime))}</span>
                        </div>
                    </div>

                    {/* Transport Controls Row */}
                    <div className="relative z-10 mt-[4px] flex items-center justify-between px-[6px]">
                        {/* Repeat Toggle */}
                        <button
                            type="button"
                            onClick={() => setIsRepeat((prev) => !prev)}
                            aria-label="Toggle repeat"
                            title={isRepeat ? "Repeat On" : "Repeat Off"}
                            className={`flex size-[34px] cursor-pointer items-center justify-center rounded-full transition-all duration-200 active:scale-90 ${
                                isRepeat
                                    ? "bg-white/25 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.65)]"
                                    : "text-white/60 hover:bg-white/15 hover:text-white"
                            }`}
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m17 2 4 4-4 4" />
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                                <path d="m7 22-4-4 4-4" />
                                <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                            </svg>
                        </button>

                        {/* Rewind 10s (True Double Left Triangles — Apple backward.fill) */}
                        <button
                            type="button"
                            onClick={() => handleSkip(-10)}
                            aria-label="Rewind 10 seconds"
                            title="Rewind 10s"
                            className="flex size-[38px] cursor-pointer items-center justify-center rounded-full text-white/90 transition-all duration-200 hover:bg-white/20 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.55)] active:scale-90"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.5 17.6c.5.35 1.2 0 1.2-.65V7.05c0-.65-.7-1-1.2-.65l-7 4.95c-.45.32-.45.98 0 1.3l7 4.95Zm9 0c.5.35 1.2 0 1.2-.65V7.05c0-.65-.7-1-1.2-.65l-7 4.95c-.45.32-.45.98 0 1.3l7 4.95Z" />
                            </svg>
                        </button>

                        {/* Play / Pause Liquid Glass Capsule Button */}
                        <button
                            type="button"
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause Good Days" : "Play Good Days"}
                            className="flex size-[46px] cursor-pointer items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105 active:scale-92"
                            style={{
                                background:
                                    "linear-gradient(145deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.18) 55%, rgba(255,255,255,0.30) 100%)",
                                boxShadow:
                                    "0 6px 18px rgba(0, 0, 0, 0.25), inset 0 1.2px 1.2px rgba(255, 255, 255, 0.9), inset 0 -1px 1px rgba(255, 255, 255, 0.35)",
                            }}
                        >
                            {isPlaying ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="5" width="4" height="14" rx="1.2" />
                                    <rect x="14" y="5" width="4" height="14" rx="1.2" />
                                </svg>
                            ) : (
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="ml-[2px]"
                                >
                                    <path d="M6 4.5l14 7.5-14 7.5V4.5z" />
                                </svg>
                            )}
                        </button>

                        {/* Fast-Forward 10s (True Double Right Triangles — Apple forward.fill) */}
                        <button
                            type="button"
                            onClick={() => handleSkip(10)}
                            aria-label="Fast-forward 10 seconds"
                            title="Fast-forward 10s"
                            className="flex size-[38px] cursor-pointer items-center justify-center rounded-full text-white/90 transition-all duration-200 hover:bg-white/20 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.55)] active:scale-90"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.5 17.6c-.5.35-1.2 0-1.2-.65V7.05c0-.65.7-1 1.2-.65l7 4.95c.45.32.45.98 0 1.3l-7 4.95Zm-9 0c-.5.35-1.2 0-1.2-.65V7.05c0-.65.7-1 1.2-.65l7 4.95c.45.32.45.98 0 1.3l-7 4.95Z" />
                            </svg>
                        </button>

                        {/* Mute / Volume Toggle */}
                        <button
                            type="button"
                            onClick={toggleMute}
                            aria-label={isMuted ? "Unmute" : "Mute"}
                            title={isMuted ? "Unmute" : "Mute"}
                            className={`flex size-[34px] cursor-pointer items-center justify-center rounded-full transition-all duration-200 active:scale-90 ${
                                isMuted
                                    ? "bg-white/25 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.65)]"
                                    : "text-white/75 hover:bg-white/15 hover:text-white"
                            }`}
                        >
                            {isMuted ? (
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                                    <line x1="22" x2="16" y1="9" y2="15" />
                                    <line x1="16" x2="22" y1="9" y2="15" />
                                </svg>
                            ) : (
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
