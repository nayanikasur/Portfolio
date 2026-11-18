"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ACTS } from "./data";

type Props = {
    act: number; // index into ACTS
    /** Headline words; wrap a word in *asterisks* to italicise it. */
    title: string;
    sub: string;
    toc: { href: string; label: string }[];
    stickers?: React.ReactNode;
};

export default function ActScreen({ act, title, sub, toc, stickers }: Props) {
    const a = ACTS[act];
    const ref = useRef<HTMLElement>(null);
    const reduce = useReducedMotion();

    const { scrollYProgress: enter } = useScroll({ target: ref, offset: ["start end", "start start"] });
    const { scrollYProgress: through } = useScroll({ target: ref, offset: ["start start", "end end"] });

    const scale = useTransform(enter, [0, 1], [reduce ? 1 : 0.88, 1]);
    const radius = useTransform(enter, [0, 1], [48, 24]);
    const numY = useTransform(through, [0, 1], ["0%", reduce ? "0%" : "-18%"]);
    const copyY = useTransform(through, [0, 1], [0, reduce ? 0 : -60]);

    const words = title.split(" ");

    return (
        <section
            id={a.id}
            ref={ref}
            aria-labelledby={`${a.id}-h`}
            className="relative h-[170vh]"
            style={{ "--ac": a.ac, "--ai": a.ai, "--ah": a.ah } as React.CSSProperties}
        >
            <div className="sticky top-0 h-svh overflow-hidden bg-bg p-2.5 sm:p-4">
                <motion.div
                    style={{ scale, borderRadius: radius }}
                    className="act-field relative h-full overflow-hidden [contain:paint]"
                >
                    {/* giant outlined number */}
                    <motion.b
                        aria-hidden="true"
                        style={{ y: numY }}
                        className="act-num pointer-events-none absolute -right-[6vw] top-[6vh] z-[1] font-display text-[62vw] font-extrabold leading-[0.8] tracking-[-0.07em] md:-right-[2vw] md:bottom-[-9vw] md:top-auto md:text-[clamp(220px,42vw,720px)]"
                    >
                        {a.num}
                    </motion.b>

                    {stickers && (
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] hidden md:block">
                            {stickers}
                        </div>
                    )}

                    <motion.div
                        style={{ y: copyY }}
                        className="absolute bottom-[9vh] left-5 right-5 z-[3] flex flex-col gap-[clamp(16px,2vw,26px)] md:bottom-auto md:left-[var(--gx)] md:right-auto md:top-1/2 md:w-[min(760px,62vw)] md:-translate-y-[46%]"
                    >
                        <span className="act-k inline-flex items-center gap-2.5 self-start rounded-full px-[15px] py-2 font-mono text-[12.5px] tracking-[0.03em]">
                            <i className="h-2 w-2 rounded-full" />
                            Act {a.num} of {String(ACTS.length).padStart(2, "0")} · {a.label}
                        </span>

                        {/* The trigger sits on the h2: the word spans start clipped, so they can't observe themselves. */}
                        <motion.h2
                            id={`${a.id}-h`}
                            initial={reduce ? false : "hidden"}
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ staggerChildren: 0.05 }}
                            className="act-t m-0 font-display text-[clamp(40px,11vw,64px)] font-extrabold leading-[0.92] tracking-[-0.055em] [text-wrap:balance] md:text-[clamp(46px,7.2vw,118px)]"
                        >
                            {words.map((w, i) => {
                                const italic = /^\*.*\*[.,!?]?$/.test(w);
                                const clean = w.replace(/\*/g, "");
                                return (
                                    <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                                        <motion.span
                                            className="inline-block"
                                            variants={{ hidden: { y: "105%" }, show: { y: "0%" } }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            {italic ? <em>{clean}</em> : clean}
                                        </motion.span>
                                        {i < words.length - 1 && " "}
                                    </span>
                                );
                            })}
                        </motion.h2>

                        <p className="m-0 max-w-[44ch] text-[clamp(16px,1.35vw,20px)] leading-[1.5] opacity-[.82]">{sub}</p>

                        <nav className="act-toc flex flex-wrap gap-2.5" aria-label={`In this act: ${a.label}`}>
                            {toc.map((t, i) => (
                                <a
                                    key={t.href}
                                    href={t.href}
                                    className="inline-flex items-center gap-2.5 rounded-full py-2 pl-2 pr-3 font-display text-[13px] font-semibold tracking-[-0.01em] md:py-2.5 md:pl-2.5 md:pr-4 md:text-[15px]"
                                >
                                    <i className="rounded-full px-[7px] py-1 font-mono text-[11px] font-medium not-italic">
                                        {a.num.replace(/^0/, "")}.{i + 1}
                                    </i>
                                    {t.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

/** A tilted, drifting sticker for the act panels. */
export function Sticker({
    x,
    y,
    r,
    children,
    className = "",
}: {
    x: string;
    y: string;
    r: number;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={`absolute ${className}`}
            style={{ left: x, top: y, rotate: r }}
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
