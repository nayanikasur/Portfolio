"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LINKEDIN, RESUME } from "./data";

const CURSORS = [
    { label: "Full-stack developer", c: "#ef5533", pos: "left-[12%] top-[20%]", d: "13s", delay: "0s", hideSm: false },
    { label: "React · Next.js", c: "#18a0fb", pos: "right-[14%] top-[24%]", d: "17s", delay: "-5s", hideSm: false },
    { label: "Figma, always", c: "#1bc47d", pos: "left-[20%] top-[58%]", d: "15s", delay: "-9s", hideSm: true },
    { label: "Node + MongoDB", c: "#6465ed", pos: "right-[20%] top-[54%]", d: "19s", delay: "-3s", hideSm: true },
    { label: "Ships on AWS", c: "#ee46d3", pos: "right-[30%] top-[70%]", d: "16s", delay: "-12s", hideSm: true },
];

const Arrow = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 2.5 20 10.2l-7 2.1-3.1 7.2L4 2.5Z" />
    </svg>
);

const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const HeroSection = () => {
    const heroRef = useRef<HTMLElement>(null);
    const lightRef = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLHeadingElement>(null);
    const [dim, setDim] = useState("— × —");

    // Live "W × H" label under the selection frame, like a design tool.
    useEffect(() => {
        const el = wordRef.current;
        if (!el) return;
        const ro = new ResizeObserver(() => {
            const r = el.getBoundingClientRect();
            setDim(`${Math.round(r.width)} × ${Math.round(r.height)}`);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // Soft glow that follows the pointer.
    const onMove = (e: React.MouseEvent) => {
        const hero = heroRef.current;
        const light = lightRef.current;
        if (!hero || !light) return;
        const r = hero.getBoundingClientRect();
        light.style.opacity = "1";
        light.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0)`;
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            onMouseMove={onMove}
            onMouseLeave={() => lightRef.current && (lightRef.current.style.opacity = "0")}
            className="px-gx relative flex min-h-[calc(100svh-64px)] flex-col overflow-hidden pb-10 pt-[clamp(48px,7vh,96px)]"
        >
            <div className="grid-bg" aria-hidden="true" />
            <div
                ref={lightRef}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-[1] -ml-[170px] -mt-[170px] h-[340px] w-[340px] rounded-full opacity-0 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(circle, #ffd6aa4d 0, #ffbe8c1f 38%, #ffbe8c00 68%)",
                }}
            />

            {/* Floating multiplayer cursors */}
            {CURSORS.map((c) => (
                <div
                    key={c.label}
                    aria-hidden="true"
                    className={`fc ${c.pos} ${c.hideSm ? "hidden lg:flex" : "hidden sm:flex"}`}
                    style={{ "--c": c.c, "--d": c.d, animationDelay: c.delay } as React.CSSProperties}
                >
                    <Arrow />
                    <span>{c.label}</span>
                </div>
            ))}

            {/* Chat bubbles */}
            <motion.div {...reveal(1.1)} aria-hidden="true" className="bubble animate-bob left-[4%] top-[34%] hidden xl:flex">
                <i className="relative mt-0.5 h-7 w-7 flex-none rounded-full bg-ink">
                    <span className="absolute left-[9px] top-[13px] h-0.5 w-2.5 rounded bg-white" />
                </i>
                <div>
                    <b className="mr-1.5 text-[13px] font-semibold">Nayanika</b>
                    <small className="text-[11px] text-muted">just now</small>
                    <p className="mt-0.5 text-[13px]">Pushed the new dashboard to EC2. ✓</p>
                </div>
            </motion.div>
            <motion.div {...reveal(1.3)} aria-hidden="true" className="bubble animate-bob-rev right-[3%] top-[38%] hidden xl:flex">
                <i className="relative mt-0.5 h-7 w-7 flex-none rounded-full bg-green">
                    <span className="absolute left-[9px] top-[13px] h-0.5 w-2.5 rounded bg-white" />
                </i>
                <div>
                    <b className="mr-1.5 text-[13px] font-semibold">CI bot</b>
                    <small className="text-[11px] text-muted">2 min ago</small>
                    <p className="mt-0.5 text-[13px]">All checks passed. Ready to merge.</p>
                </div>
            </motion.div>

            <div className="relative z-[2] flex flex-col items-center text-center">
                {/* Who pills */}
                <motion.div {...reveal(0)} className="flex flex-wrap justify-center gap-1" role="group" aria-label="Who">
                    {["Nayanika", "designs", "& builds"].map((t) => (
                        <span key={t} className="rounded-full bg-ink px-4 py-2 text-[15px] font-medium leading-none text-white">
                            {t}
                        </span>
                    ))}
                    <span className="rounded-full bg-[#ff5fb8] px-4 py-2 text-[15px] font-medium leading-none text-white">
                        in Bangalore
                    </span>
                    <a
                        href={LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#0a66c2] py-2 pl-2.5 pr-4 text-[15px] font-medium leading-none text-white transition-all duration-300 [transition-timing-function:var(--spring)] hover:-translate-y-0.5 hover:bg-[#004182]"
                    >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
                            <rect width="24" height="24" rx="5" fill="#fff" />
                            <path
                                fill="#0a66c2"
                                d="M7.1 9.5H4.6V19h2.5V9.5ZM5.9 5a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9ZM19.4 13.7c0-2.6-1.4-4.4-3.8-4.4-1.2 0-2.1.6-2.5 1.3V9.5h-2.4V19h2.5v-4.9c0-1.3.6-2.2 1.7-2.2s1.6.8 1.6 2.2V19h2.5l.4-5.3Z"
                            />
                        </svg>
                        LinkedIn ↗
                    </a>
                </motion.div>

                {/* Selection frame around the name */}
                <motion.div
                    {...reveal(0.15)}
                    className="group relative mt-[clamp(20px,4vh,48px)] border border-dashed border-line-2 px-4 py-3 transition-colors hover:border-solid hover:border-blue sm:px-7"
                >
                    <h1
                        ref={wordRef}
                        className="m-0 font-display text-[clamp(56px,13vw,200px)] font-extrabold leading-[0.9] tracking-[-0.06em]"
                    >
                        <span className="sr-only">Nayanika Sur, full-stack developer: </span>
                        nayanika<span className="text-orange">.</span>
                    </h1>
                    <i className="sel-h -left-[5px] -top-[5px]" />
                    <i className="sel-h -right-[5px] -top-[5px]" />
                    <i className="sel-h -bottom-[5px] -left-[5px]" />
                    <i className="sel-h -bottom-[5px] -right-[5px]" />
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 translate-y-full rounded-[3px] bg-blue px-[7px] py-[3px] font-mono text-[11px] text-white"
                    >
                        {dim}
                    </span>
                </motion.div>

                <motion.p
                    {...reveal(0.3)}
                    className="hero-sub mx-auto mt-[clamp(40px,6vh,64px)] max-w-[62ch] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-ink-2"
                >
                    Full-stack developer who designs too. I go from Figma frames to production code and actually{" "}
                    <em>ship them</em>: today I run user management and permissions at Amoga, and before that built
                    dashboards, auth flows and AI chat at VISCR AI, plus React platforms at My Yoga Teacher and SafeSend.
                </motion.p>

                <motion.div {...reveal(0.45)} className="mt-8 flex flex-wrap justify-center gap-3">
                    <a href="#experience" className="pill-btn">
                        See the work ↓
                    </a>
                    <a href={RESUME} download className="ghost-btn">
                        Grab my résumé
                    </a>
                    <a href="#contact" className="ghost-btn">
                        Say hello
                    </a>
                </motion.div>
            </div>

            <a href="#about" className="mono relative z-[2] mx-auto mt-auto flex flex-col items-center gap-2 pt-12">
                Scroll
                <span className="animate-cue block h-6 w-px bg-ink/40" />
            </a>
        </section>
    );
};

export default HeroSection;
