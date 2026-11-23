"use client";

import { useEffect, useState } from "react";

interface PHTime {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    formatted: string;
}

function getManilaTime(): PHTime {
    const now = new Date();
    // Convert current instant to Asia/Manila wall-clock parts
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    const parts = formatter.formatToParts(now);
    const hourPart = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
    const minutePart = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
    const secondPart = Number(parts.find((p) => p.type === "second")?.value ?? 0);

    const displayFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return {
        hours: hourPart % 12,
        minutes: minutePart,
        seconds: secondPart,
        milliseconds: now.getMilliseconds(),
        formatted: displayFormatter.format(now),
    };
}

/**
 * Apple iOS / macOS Dark Analog Clock Widget running in real-time Philippine Time (Asia/Manila, UTC+8).
 * Matches Figma node 37:4124 exact dimensions (312x312) and visual layers.
 */
export default function ClockWidget() {
    const [time, setTime] = useState<PHTime | null>(null);

    useEffect(() => {
        let frameId: number;
        const tick = () => {
            setTime(getManilaTime());
            frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, []);

    // Default to ~10:09:30 before hydration so SSR renders cleanly
    const sec = time ? time.seconds + time.milliseconds / 1000 : 30;
    const min = time ? time.minutes + sec / 60 : 9.5;
    const hr = time ? time.hours + min / 60 : 10.15;

    // Angles in degrees from 12 o'clock (0 deg = top, clockwise)
    const secondAngle = sec * 6;
    const minuteAngle = min * 6;
    const hourAngle = hr * 30;

    return (
        <div
            className="bento-card relative size-[312px] shrink-0 select-none"
            data-node-id="37:4124"
            data-name="Clock"
            title={time ? `Philippine Time (UTC+8): ${time.formatted}` : "Philippine Time (UTC+8)"}
        >
            <div
                className="relative size-[312px] overflow-clip rounded-[27px]"
                style={{
                    backgroundImage:
                        "linear-gradient(180deg, rgb(51, 51, 51) 0%, rgb(51, 51, 51) 11.79%, rgb(50, 50, 50) 21.384%, rgb(49, 49, 49) 29.12%, rgb(48, 48, 48) 35.336%, rgb(47, 47, 47) 40.37%, rgb(45, 45, 45) 44.56%, rgb(43, 43, 43) 48.243%, rgb(42, 42, 42) 51.757%, rgb(40, 40, 40) 55.44%, rgb(38, 38, 38) 59.63%, rgb(35, 35, 35) 64.664%, rgb(33, 33, 33) 70.88%, rgb(32, 32, 32) 78.616%, rgb(30, 30, 30) 88.21%, rgb(28, 28, 28) 100%)",
                }}
            >
                {/* Inner Circular Clock Face (268.557px x 268.557px) */}
                <div
                    className="absolute inset-[6.96%] overflow-clip rounded-[189.125px] bg-gradient-to-b from-[#38393b] to-[#343436]"
                    data-node-id="37:4128"
                >
                    {/* Outer Minute/Hour Ticks */}
                    <div
                        className="absolute left-[calc(50%-0.28px)] top-[5.67px] size-[257.21px] -translate-x-1/2"
                        data-node-id="37:4129"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            className="absolute inset-0 block size-full max-w-none"
                            src="/figma/clock-ticks.svg"
                        />
                    </div>

                    {/* 12 Hour Numbers */}
                    <div
                        className="font-sf absolute left-[18.91px] top-[24.59px] h-[221.276px] w-[230.732px] text-center text-[29.62px] font-semibold leading-[0] text-white not-italic"
                        data-node-id="37:4130"
                    >
                        <div className="absolute left-[114.42px] top-[13.24px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">12</p>
                        </div>
                        <div className="absolute left-[163.59px] top-[26.48px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">1</p>
                        </div>
                        <div className="absolute left-[199.53px] top-[62.41px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">2</p>
                        </div>
                        <div className="absolute left-[212.77px] top-[109.69px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">3</p>
                        </div>
                        <div className="absolute left-[197.64px] top-[158.86px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">4</p>
                        </div>
                        <div className="absolute left-[161.7px] top-[191.02px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">5</p>
                        </div>
                        <div className="absolute left-[114.42px] top-[208.04px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">6</p>
                        </div>
                        <div className="absolute left-[65.25px] top-[191.02px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">7</p>
                        </div>
                        <div className="absolute left-[31.21px] top-[158.86px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">8</p>
                        </div>
                        <div className="absolute left-[17.97px] top-[109.69px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">9</p>
                        </div>
                        <div className="absolute left-[38.77px] top-[62.41px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">10</p>
                        </div>
                        <div className="absolute left-[70.92px] top-[26.48px] flex h-[26.477px] w-[35.934px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
                            <p className="leading-[normal]">11</p>
                        </div>
                    </div>

                    {/* PH & +8 Labels */}
                    <div
                        className="font-sf-rounded absolute left-[calc(50%-0.67px)] top-[93.19px] flex -translate-x-1/2 -translate-y-1/2 flex-col justify-center whitespace-nowrap text-center text-[25.671px] font-semibold leading-[0] text-white opacity-75"
                        data-node-id="37:4144"
                    >
                        <p className="leading-[normal]">PH</p>
                    </div>
                    <div
                        className="font-sf-rounded absolute left-[calc(50%+0.23px)] top-[180.19px] flex -translate-x-1/2 -translate-y-1/2 flex-col justify-center whitespace-nowrap text-center text-[25.671px] font-semibold leading-[0] text-white opacity-75"
                        data-node-id="37:4143"
                    >
                        <p className="leading-[normal]">+8</p>
                    </div>

                    {/* Real-time Analog Hands anchored at exact clock center (134.28px, 134.28px) */}
                    {/* Hour Hand: natural SVG is 88.8886 x 20.8037, pivot center at (10.4019, 9.45623) pointing right (+90 deg) */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2"
                        style={{
                            width: "88.8886px",
                            height: "20.8037px",
                            marginLeft: "-10.4019px",
                            marginTop: "-9.45623px",
                            transformOrigin: "10.4019px 9.45623px",
                            transform: `rotate(${hourAngle - 90}deg)`,
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="/figma/clock-hour-hand.svg"
                            className="block size-full max-w-none"
                        />
                    </div>

                    {/* Minute Hand: natural SVG is 20.8037 x 138.061, pivot center at (10.4019, 126.713) pointing up (0 deg) */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2"
                        style={{
                            width: "20.8037px",
                            height: "138.061px",
                            marginLeft: "-10.4019px",
                            marginTop: "-126.713px",
                            transformOrigin: "10.4019px 126.713px",
                            transform: `rotate(${minuteAngle}deg)`,
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="/figma/clock-minute-hand.svg"
                            className="block size-full max-w-none"
                        />
                    </div>

                    {/* Seconds Hand: natural SVG is 10.4019 x 149.408, pivot center at (5.20093, 20.8037) pointing down (180 deg) */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2"
                        style={{
                            width: "10.4019px",
                            height: "149.408px",
                            marginLeft: "-5.20093px",
                            marginTop: "-20.8037px",
                            transformOrigin: "5.20093px 20.8037px",
                            transform: `rotate(${secondAngle - 180}deg)`,
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt=""
                            src="/figma/clock-seconds-hand.svg"
                            className="block size-full max-w-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
