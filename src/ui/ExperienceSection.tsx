"use client";

import { motion } from "framer-motion";
import { Bug, Box, Cloud, Code, Code2, Database, KeyRound, Layers, Plug, Search, Shield, Users, Workflow, Zap } from "lucide-react";
import ActScreen, { Sticker } from "./ActScreen";

type Experience = {
    title: string;
    company: string;
    formerly?: string;
    location: string;
    duration: string;
    type: string;
    accent: string;
    description: string;
    achievements: { icon: React.ComponentType<{ className?: string }>; text: string; impact: string }[];
    technologies: string[];
};

const experiences: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "Amoga",
        location: "Bangalore, Karnataka",
        duration: "Mar 2026 – Present",
        type: "Full-time",
        accent: "#ef5533",
        description:
            "MERN stack developer who owns the platform's user management and permissions, works in PostgreSQL and Temporal every day, and is now taking on integrations.",
        achievements: [
            { icon: KeyRound, text: "Own the entire user management and permissions system", impact: "The go-to person for how users, roles and access work across the product" },
            { icon: Database, text: "Build on PostgreSQL day in, day out", impact: "Data models and queries behind the platform's core features" },
            { icon: Workflow, text: "Orchestrate backend workflows with Temporal", impact: "Long-running processes that survive failures and retries" },
            { icon: Plug, text: "Taking ownership of the platform's integrations", impact: "Growing scope from core platform to the services it connects to" },
        ],
        technologies: ["React.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Temporal", "RBAC"],
    },
    {
        title: "Software Development Engineer",
        company: "VISCR AI",
        formerly: "Sekyurity AI",
        location: "Bangalore, Karnataka",
        duration: "Jun 2024 – Jan 2026",
        type: "Full-time",
        accent: "#18a0fb",
        description: "Built scalable, secure, and user-focused AI-driven web applications from scratch.",
        achievements: [
            { icon: Code, text: "Developed scalable front-end applications using React.js, Next.js, and Tailwind CSS", impact: "Delivered responsive, high-performance interfaces aligned with design specs" },
            { icon: Database, text: "Integrated authentication systems, dashboards, and AI-powered chat features", impact: "Improved user engagement and security across critical workflows" },
            { icon: Cloud, text: "Deployed applications on AWS EC2 and configured S3 buckets for storage", impact: "Enabled reliable hosting and seamless content delivery" },
            { icon: Zap, text: "Optimized MongoDB and PostgreSQL queries for performance and scalability", impact: "Reduced query response times and improved system reliability" },
            { icon: Users, text: "Collaborated in Agile teams with sprint planning, code reviews, and API documentation", impact: "Increased delivery efficiency and cross-team alignment" },
        ],
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS EC2", "AWS S3", "REST APIs", "Agile"],
    },
    {
        title: "Frontend Engineer",
        company: "My Yoga Teacher",
        location: "Bangalore, Karnataka",
        duration: "Dec 2023 – Mar 2024",
        type: "Full-time",
        accent: "#1bc47d",
        description: "Enhanced core platform features and optimized performance for a fitness-focused product.",
        achievements: [
            { icon: Code, text: "Developed and enhanced front-end features using React.js", impact: "Improved overall platform functionality and usability" },
            { icon: Bug, text: "Resolved production bugs and optimized system performance", impact: "Reduced downtime and improved customer experience" },
            { icon: Layers, text: "Implemented Redux and Redux-Saga for state management", impact: "Enabled efficient data flow and asynchronous operations" },
            { icon: Code2, text: "Built custom reusable UI components with HTML5, CSS3, and responsive design", impact: "Delivered visually appealing, mobile-friendly interfaces" },
            { icon: Search, text: "Conducted SEO optimization for better platform visibility", impact: "Boosted organic traffic and improved search rankings" },
        ],
        technologies: ["React.js", "Redux", "Redux-Saga", "HTML5", "CSS3", "SEO", "Responsive Design", "Agile"],
    },
    {
        title: "Software Development Intern",
        company: "SafeSend",
        location: "Bangalore, Karnataka",
        duration: "Feb 2023 – Sep 2023",
        type: "Internship",
        accent: "#ee46d3",
        description: "Contributed to the development of an e-commerce platform and API SDKs.",
        achievements: [
            { icon: Code, text: "Developed and maintained front-end features using React.js", impact: "Delivered responsive and engaging user interfaces" },
            { icon: Shield, text: "Wrote unit test cases for .NET backend services", impact: "Improved code quality and reliability across modules" },
            { icon: Box, text: "Designed and built C# SDKs for API integrations", impact: "Streamlined developer workflows and reduced integration time" },
            { icon: Users, text: "Collaborated with cross-functional teams in Agile sprints", impact: "Ensured smooth development and timely delivery of features" },
        ],
        technologies: ["React.js", ".NET", "C#", "Unit Testing", "REST APIs", "Agile"],
    },
];

const STICKY_TOPS = ["top-[84px]", "top-[100px]", "top-[116px]", "top-[132px]"];

const ExperienceSection = () => {
    return (
        <>
            <ActScreen
                act={1}
                title="Four teams. One habit: *shipping*."
                sub="From an internship writing SDKs to building AI-powered products end to end. Here's where I've been and what I left behind."
                toc={[
                    { href: "#work", label: "Where I've worked" },
                    { href: "#toolkit", label: "What I used" },
                ]}
                stickers={
                    <>
                        <Sticker x="66%" y="14%" r={8}>
                            <div className="rounded-xl border-2 border-white bg-[#111] px-4 py-3 font-mono text-[13px] text-white shadow-[5px_5px_0_#fff]">
                                <span className="text-[#1bc47d]">$</span> git push origin main
                                <div className="mt-1 text-white/60">✓ deployed in 42s</div>
                            </div>
                        </Sticker>
                        <Sticker x="80%" y="50%" r={-12}>
                            <div className="grid h-[150px] w-[150px] place-items-center rounded-full border-[3px] border-dashed border-[#ffd84d] text-center font-display text-lg font-extrabold uppercase leading-tight text-[#ffd84d]">
                                PR
                                <br />
                                approved
                            </div>
                        </Sticker>
                        <Sticker x="60%" y="66%" r={-4}>
                            <div className="rounded-full border-2 border-white bg-white px-5 py-3 font-display text-xl font-extrabold text-[#2f5bff] shadow-[4px_4px_0_#111]">
                                v3.0 shipped ✦
                            </div>
                        </Sticker>
                    </>
                }
            />

            <section id="work" className="px-gx py-[clamp(80px,10vw,140px)]">
                <div className="mb-[clamp(24px,3.4vw,48px)] flex flex-wrap items-end justify-between gap-5">
                    <h3 className="h2 m-0 font-display text-[clamp(34px,5vw,64px)] font-bold leading-none tracking-[-0.03em]">
                        Where I&apos;ve <em>worked</em>.
                    </h3>
                    <span className="mono">2.1 · {experiences.length} roles · 2023 → now</span>
                </div>

                <div className="flex flex-col gap-6">
                    {experiences.map((exp, i) => (
                        <motion.article
                            key={exp.company}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative overflow-hidden rounded-[20px] border border-on-dark-faint bg-dark-2 text-on-dark shadow-[0_-20px_60px_-30px_rgba(0,0,0,.8)] lg:sticky ${STICKY_TOPS[i]}`}
                        >
                            <div
                                className={`grid items-start gap-[clamp(20px,3.4vw,48px)] p-[clamp(22px,3vw,40px)] ${exp.achievements.length ? "lg:grid-cols-[1fr_1.15fr]" : ""
                                    }`}
                            >
                                {/* Left: role */}
                                <div>
                                    <span className="mono !text-on-dark-soft">
                                        {String(i + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")} · {exp.type}
                                    </span>
                                    <h4 className="mb-4 mt-3.5 font-display text-[clamp(40px,5.6vw,80px)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
                                        {exp.company}
                                        <span style={{ color: exp.accent }}>.</span>
                                    </h4>
                                    {exp.formerly && (
                                        <p className="mono -mt-2 mb-3 !text-on-dark-soft">formerly {exp.formerly}</p>
                                    )}
                                    <p className="m-0 font-display text-lg font-semibold text-white">{exp.title}</p>
                                    <p className="mt-1 text-sm text-on-dark-soft">
                                        {exp.duration} · {exp.location}
                                    </p>
                                    <p className="mt-5 max-w-[48ch] text-[clamp(15px,1.2vw,18px)] leading-[1.5] text-on-dark-soft">
                                        {exp.description}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium uppercase tracking-[0.06em]">
                                        {exp.technologies.map((t) => (
                                            <span key={t} className="border-b border-on-dark-faint pb-0.5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: achievements */}
                                {exp.achievements.length > 0 && (
                                <ul className="m-0 flex flex-col gap-2 rounded-xl bg-black/40 p-3 sm:p-4">
                                    {exp.achievements.map((a) => (
                                        <li
                                            key={a.text}
                                            className="group flex gap-3.5 rounded-lg p-2.5 transition-colors hover:bg-white/[0.04]"
                                        >
                                            <span
                                                className="grid h-9 w-9 flex-none place-items-center rounded-lg transition-transform duration-300 [transition-timing-function:var(--spring)] group-hover:-rotate-6 group-hover:scale-110"
                                                style={{ background: exp.accent, color: "#111" }}
                                            >
                                                <a.icon className="h-[18px] w-[18px]" />
                                            </span>
                                            <div>
                                                <p className="m-0 text-[15px] font-medium leading-snug text-white">{a.text}</p>
                                                <p className="m-0 mt-1 text-[13px] leading-snug text-on-dark-soft">→ {a.impact}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ExperienceSection;
