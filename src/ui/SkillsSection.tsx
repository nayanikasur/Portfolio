"use client";

import { motion } from "framer-motion";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiAmazonec2,
    SiAmazons3,
    SiExpress,
    SiFirebase,
    SiJquery,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiRedux,
    SiSvg,
    SiTailwindcss,
    SiTemporal,
} from "react-icons/si";
import ActScreen, { Sticker } from "./ActScreen";

const GROUPS = [
    {
        name: "Frontend",
        color: "#18a0fb",
        skills: [
            { name: "React.js", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Redux", icon: SiRedux },
            { name: "JavaScript", icon: FaJs },
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "Tailwind", icon: SiTailwindcss },
            { name: "Bootstrap", icon: FaBootstrap },
            { name: "jQuery / AJAX", icon: SiJquery },
        ],
    },
    {
        name: "Backend & data",
        color: "#1bc47d",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Temporal", icon: SiTemporal },
            { name: "Firebase", icon: SiFirebase },
        ],
    },
    {
        name: "Cloud & workflow",
        color: "#ef5533",
        skills: [
            { name: "AWS EC2", icon: SiAmazonec2 },
            { name: "AWS S3", icon: SiAmazons3 },
            { name: "Git", icon: FaGitAlt },
        ],
    },
    {
        name: "Design & motion",
        color: "#ee46d3",
        skills: [
            { name: "Figma", icon: FaFigma },
            { name: "SVGator", icon: SiSvg },
        ],
    },
];

export default function Skills() {
    return (
        <>
            <ActScreen
                act={3}
                title="The tools I *reach* for."
                sub="A MERN core with a designer's toolbox on the side. Twenty-odd tools, sorted by where they live in the stack."
                toc={GROUPS.map((g) => ({ href: `#tk-${g.name.split(" ")[0].toLowerCase()}`, label: g.name }))}
                stickers={
                    <>
                        <Sticker x="68%" y="14%" r={-8}>
                            <div className="grid h-[130px] w-[130px] place-items-center rounded-[28px] border-2 border-[#05170e] bg-white font-mono text-5xl font-medium text-[#05170e] shadow-[5px_5px_0_#05170e]">
                                {"</>"}
                            </div>
                        </Sticker>
                        <Sticker x="82%" y="48%" r={10}>
                            <div className="rounded-2xl border-2 border-[#05170e] bg-[#05170e] p-3 shadow-[5px_5px_0_#fff]">
                                <div className="flex gap-1.5">
                                    {["#ef5533", "#ffc700", "#1bc47d"].map((c) => (
                                        <i key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
                                    ))}
                                </div>
                                <div className="mt-3 font-mono text-[13px] text-white">npm run ship</div>
                            </div>
                        </Sticker>
                        <Sticker x="60%" y="66%" r={-5}>
                            <div className="rounded-full border-2 border-[#05170e] bg-[#ffd84d] px-5 py-3 font-display text-xl font-extrabold text-[#05170e] shadow-[4px_4px_0_#05170e]">
                                MERN ✦ Figma
                            </div>
                        </Sticker>
                    </>
                }
            />

            <section className="px-gx py-[clamp(80px,10vw,140px)]" aria-label="Skills by area">
                <div className="mb-[clamp(24px,3.4vw,48px)] flex flex-wrap items-end justify-between gap-5">
                    <h3 className="h2 m-0 font-display text-[clamp(34px,5vw,64px)] font-bold leading-none tracking-[-0.03em]">
                        The <em>kit</em>.
                    </h3>
                    <span className="mono">4.1 – 4.{GROUPS.length} · hover a tool</span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {GROUPS.map((g, gi) => (
                        <motion.div
                            key={g.name}
                            id={`tk-${g.name.split(" ")[0].toLowerCase()}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: gi * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            className="scroll-mt-24 rounded-[20px] border border-line-2 bg-white p-[clamp(20px,2.4vw,32px)]"
                        >
                            <div className="flex items-center justify-between">
                                <span className="mono">4.{gi + 1}</span>
                                <i className="h-2.5 w-2.5 rounded-full" style={{ background: g.color }} />
                            </div>
                            <h4 className="mb-5 mt-2 font-display text-[clamp(26px,2.6vw,36px)] font-bold tracking-[-0.03em]">
                                {g.name}
                            </h4>
                            <ul className="m-0 flex flex-wrap gap-2 p-0">
                                {g.skills.map((s) => (
                                    <li key={s.name}>
                                        <span
                                            className="group inline-flex items-center gap-2 rounded-full border border-line-2 px-3.5 py-2 text-[15px] font-medium transition-all duration-300 [transition-timing-function:var(--spring)] hover:-translate-y-0.5 hover:border-transparent hover:text-white"
                                            style={{ "--h": g.color } as React.CSSProperties}
                                            onMouseEnter={(e) => (e.currentTarget.style.background = g.color)}
                                            onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                                        >
                                            <s.icon className="h-4 w-4" aria-hidden="true" />
                                            {s.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}
