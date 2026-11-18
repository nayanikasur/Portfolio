"use client";

import { motion } from "framer-motion";
import ActScreen, { Sticker } from "./ActScreen";

const ROWS = [
    { k: "Now", v: "Full Stack Developer at Amoga", d: "Mar 2026 →" },
    { k: "Before", v: "Software Development Engineer at VISCR AI (formerly Sekyurity AI)", d: "Jun 2024 – Jan 2026" },
    { k: "Earlier", v: "Frontend Engineer at My Yoga Teacher", d: "Dec 2023 – Mar 2024" },
    { k: "Started", v: "Software Development Intern at SafeSend", d: "Feb 2023 – Sep 2023" },
    { k: "Also", v: "Designs in Figma and animates in SVGator before writing a line of code", d: "Always" },
];

const STATS = [
    { n: "4", l: "teams shipped with" },
    { n: "20+", l: "tools in the kit" },
    { n: "2023", l: "shipping to production since" },
];

const fade = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const AboutSection = () => {
    return (
        <>
            <ActScreen
                act={0}
                title="Hi, I make the web *move*."
                sub="A developer who sketches first. I care about how a thing feels in the hand as much as whether the API returns 200."
                toc={[
                    { href: "#me", label: "Who I am" },
                    { href: "#numbers", label: "By the numbers" },
                ]}
                stickers={
                    <>
                        <Sticker x="68%" y="12%" r={-10}>
                            <div className="w-[190px] overflow-hidden rounded-2xl border-2 border-[#1d0b04] bg-white text-center shadow-[5px_5px_0_#1d0b04]">
                                <div className="bg-[#1d0b04] py-2 font-display text-lg font-extrabold text-white">HELLO</div>
                                <div className="px-3 pb-3 pt-1 text-[11px] uppercase tracking-widest text-[#1d0b04]/70">my name is</div>
                                <div className="pb-4 font-serif text-4xl italic text-[#1d0b04]">Nayanika</div>
                            </div>
                        </Sticker>
                        <Sticker x="80%" y="54%" r={12}>
                            <img src="/hitting-hammer.svg" alt="" className="w-[150px] drop-shadow-[4px_4px_0_#1d0b04]" />
                        </Sticker>
                        <Sticker x="60%" y="64%" r={-6}>
                            <div className="rounded-full border-2 border-[#1d0b04] bg-[#ffd84d] px-5 py-3 font-display text-xl font-extrabold text-[#1d0b04] shadow-[4px_4px_0_#1d0b04]">
                                ✦ curious
                            </div>
                        </Sticker>
                    </>
                }
            />

            <section id="me" className="px-gx py-[clamp(80px,10vw,140px)]">
                <motion.div {...fade} className="mb-[clamp(32px,5vw,64px)] flex flex-wrap items-end justify-between gap-5">
                    <h3 className="h2 m-0 max-w-[16ch] font-display text-[clamp(34px,5vw,64px)] font-bold leading-none tracking-[-0.03em]">
                        From Figma frame to <em>production</em>.
                    </h3>
                    <span className="mono">1.1 · Who I am</span>
                </motion.div>

                <div className="grid gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1.1fr_1fr]">
                    <motion.div {...fade} className="space-y-5 text-[clamp(17px,1.4vw,21px)] leading-[1.55] text-ink-2">
                        <p>
                            Hey, I&apos;m <b className="font-semibold text-ink">Nayanika</b>. I code, design and build things for the
                            web. As a MERN stack developer I&apos;ve handled everything from crafting UIs in Figma to building complete
                            applications front to back.
                        </p>
                        <p>
                            I don&apos;t just imagine products, I make them real. Always curious, always building, and properly
                            excited about what&apos;s next.
                        </p>
                    </motion.div>

                    <motion.dl {...fade} className="m-0 border-t border-line-2">
                        {ROWS.map((r) => (
                            <div
                                key={r.k}
                                className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-1 border-b border-line-2 py-4 sm:grid-cols-[96px_1fr_auto]"
                            >
                                <dt className="mono pt-1">{r.k}</dt>
                                <dd className="m-0 font-display text-[17px] font-semibold tracking-[-0.01em]">{r.v}</dd>
                                <dd className="col-start-2 m-0 text-sm text-muted sm:col-start-3 sm:pt-0.5">{r.d}</dd>
                            </div>
                        ))}
                    </motion.dl>
                </div>
            </section>

            <section id="numbers" className="px-gx border-y border-line bg-bg-2 py-[clamp(56px,7vw,96px)]">
                <span className="mono">1.2 · By the numbers</span>
                <ul className="mt-8 grid gap-10 sm:grid-cols-3">
                    {STATS.map((s, i) => (
                        <motion.li key={s.l} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }}>
                            <div className="font-display text-[clamp(64px,9vw,128px)] font-extrabold leading-[0.9] tracking-[-0.06em]">
                                {s.n}
                            </div>
                            <div className="mt-2 text-[15px] text-ink-2">{s.l}</div>
                        </motion.li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default AboutSection;
