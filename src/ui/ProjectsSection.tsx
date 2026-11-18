"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ActScreen, { Sticker } from "./ActScreen";

type Project = {
    id: string;
    name: string;
    category: string;
    url: string;
    image: string;
    accent: string;
    description: string;
    features: string[];
    stack: string[];
    note?: string;
};

const PROJECTS: Project[] = [
    {
        id: "p-workgrid",
        name: "WorkGrid",
        category: "Multi-tenant SaaS · MERN + TypeScript",
        url: "https://workgrid-delta.vercel.app/",
        image: "/projects/workgrid.png",
        accent: "#6465ed",
        description:
            "Project management for teams that ship. Every workspace is isolated at the data layer, boards update live as teammates move cards, and a single permission map drives both the API and the UI.",
        features: ["True multi-tenancy", "Real-time boards + presence", "Owner / admin / member / viewer roles", "Audit log & analytics", "Free & Pro plans on Stripe"],
        stack: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Stripe"],
    },
    {
        id: "p-curricula",
        name: "Curricula",
        category: "AI study planner · Next.js",
        url: "https://curricula-ai.netlify.app/",
        image: "/projects/curricula.png",
        accent: "#8b7bff",
        description:
            "Tell it what you want to learn, how much time you have and when your deadline is. It builds a day-by-day curriculum, then re-plans around missed days and the topics you find hard.",
        features: ["Plans sized to a daily time budget", "Confidence check after every session", "Targeted review when scores dip", "Re-plans when you miss a day"],
        stack: ["Next.js", "React", "AI"],
    },
    {
        id: "p-myntra",
        name: "Myntra Clone",
        category: "E-commerce storefront · React + Vite",
        url: "https://fluffy-valkyrie-1d4052.netlify.app/",
        image: "/projects/myntra-clone.png",
        accent: "#ff3f6c",
        description:
            "A fashion storefront rebuilt from scratch: category navigation, promo carousels, deal-of-the-day rails, wishlist and bag, all responsive down to mobile.",
        features: ["Category mega-nav", "Auto-playing hero carousel", "Wishlist & bag", "Responsive layout"],
        stack: ["React", "Vite"],
        note: "Student project, not affiliated with Myntra.",
    },
];

const STICKY_TOPS = ["lg:top-[84px]", "lg:top-[100px]", "lg:top-[116px]"];

export default function ProjectsSection() {
    return (
        <>
            <ActScreen
                act={1}
                title="Things I built *after hours*."
                sub="Three side projects, all live right now: a multi-tenant SaaS, an AI study planner and an e-commerce storefront."
                toc={PROJECTS.map((p) => ({ href: `#${p.id}`, label: p.name }))}
                stickers={
                    <>
                        <Sticker x="64%" y="12%" r={-8}>
                            <div className="w-[220px] overflow-hidden rounded-xl border-2 border-[#1f0619] bg-white shadow-[5px_5px_0_#1f0619]">
                                <div className="flex items-center gap-1.5 border-b-2 border-[#1f0619] bg-[#ffe66d] px-3 py-2">
                                    {["#ef5533", "#ffc700", "#1bc47d"].map((c) => (
                                        <i key={c} className="h-2.5 w-2.5 rounded-full border border-[#1f0619]" style={{ background: c }} />
                                    ))}
                                </div>
                                <div className="space-y-2 p-3">
                                    <div className="h-2.5 w-3/4 rounded bg-[#1f0619]" />
                                    <div className="h-2 w-full rounded bg-[#1f0619]/20" />
                                    <div className="h-2 w-5/6 rounded bg-[#1f0619]/20" />
                                    <div className="mt-1 h-6 w-20 rounded-full bg-[#ee46d3]" />
                                </div>
                            </div>
                        </Sticker>
                        <Sticker x="82%" y="46%" r={12}>
                            <div className="grid h-[140px] w-[140px] place-items-center rounded-full border-[3px] border-dashed border-[#1f0619] text-center font-display text-lg font-extrabold uppercase leading-tight text-[#1f0619]">
                                3 sites
                                <br />
                                live ✓
                            </div>
                        </Sticker>
                        <Sticker x="60%" y="66%" r={-5}>
                            <div className="rounded-full border-2 border-[#1f0619] bg-[#ffe66d] px-5 py-3 font-display text-xl font-extrabold text-[#1f0619] shadow-[4px_4px_0_#1f0619]">
                                idea → deployed ✦
                            </div>
                        </Sticker>
                    </>
                }
            />

            <section id="projects" className="px-gx py-[clamp(80px,10vw,140px)]">
                <div className="mb-[clamp(24px,3.4vw,48px)] flex flex-wrap items-end justify-between gap-5">
                    <h3 className="h2 m-0 font-display text-[clamp(34px,5vw,64px)] font-bold leading-none tracking-[-0.03em]">
                        Selected <em>work</em>.
                    </h3>
                    <span className="mono">2.1 · {PROJECTS.length} live projects · click to visit</span>
                </div>

                <div className="flex flex-col gap-6">
                    {PROJECTS.map((p, i) => (
                        <motion.article
                            key={p.id}
                            id={p.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative scroll-mt-24 overflow-hidden rounded-[20px] border border-on-dark-faint bg-dark-2 text-on-dark shadow-[0_-20px_60px_-30px_rgba(0,0,0,.8)] lg:sticky ${STICKY_TOPS[i]}`}
                        >
                            <div className="grid items-center gap-[clamp(20px,3.4vw,48px)] p-[clamp(22px,3vw,40px)] lg:grid-cols-[1fr_1.15fr]">
                                {/* Copy */}
                                <div>
                                    <span className="mono !text-on-dark-soft">
                                        {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")} · {p.category}
                                    </span>
                                    <h4 className="mb-4 mt-3.5 font-display text-[clamp(40px,5.6vw,80px)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
                                        {p.name}
                                        <span style={{ color: p.accent }}>.</span>
                                    </h4>
                                    <p className="m-0 max-w-[48ch] text-[clamp(15px,1.2vw,18px)] leading-[1.5] text-on-dark-soft">
                                        {p.description}
                                    </p>

                                    <ul className="mt-5 flex flex-wrap gap-1.5 p-0">
                                        {p.features.map((f) => (
                                            <li
                                                key={f}
                                                className="list-none rounded-full border border-on-dark-faint px-3 py-1 text-[13px] text-on-dark"
                                            >
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium uppercase tracking-[0.06em] text-on-dark-soft">
                                        {p.stack.map((t) => (
                                            <span key={t}>{t}</span>
                                        ))}
                                    </div>

                                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                                        <a
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 [transition-timing-function:var(--spring)] hover:-translate-y-0.5"
                                            style={{ background: p.accent }}
                                        >
                                            Visit live site
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                                ↗
                                            </span>
                                        </a>
                                        {p.note && <span className="text-xs text-on-dark-soft">{p.note}</span>}
                                    </div>
                                </div>

                                {/* Browser-framed screenshot */}
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${p.name} in a new tab`}
                                    className="group block overflow-hidden rounded-xl border border-on-dark-faint bg-black transition-transform duration-500 [transition-timing-function:var(--ease)] hover:-translate-y-1 hover:rotate-[-0.6deg]"
                                >
                                    <div className="flex items-center gap-2 border-b border-on-dark-faint bg-[#222] px-3 py-2">
                                        <span className="flex gap-1.5">
                                            <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                            <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                            <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                                        </span>
                                        <span className="ml-2 truncate rounded-md bg-black/40 px-2.5 py-0.5 font-mono text-[11px] text-on-dark-soft">
                                            {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                        </span>
                                    </div>
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={p.image}
                                            alt={`${p.name} home page`}
                                            fill
                                            sizes="(min-width: 1024px) 55vw, 100vw"
                                            className="object-cover object-top transition-transform duration-[1.2s] [transition-timing-function:var(--ease)] group-hover:scale-[1.03]"
                                        />
                                    </div>
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </>
    );
}
