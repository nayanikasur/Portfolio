"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EMAIL, GITHUB, LINKEDIN, PHONE, PHONE_HREF, RESUME } from "./data";

type Props = { onOpenPalette: () => void };

export default function Contact({ onOpenPalette }: Props) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    const linkCls =
        "w-max border-b border-transparent text-white transition-colors duration-200 hover:border-current hover:text-yellow";

    return (
        <footer
            id="contact"
            className="foot-grid px-gx relative overflow-hidden bg-dark pb-7 pt-[clamp(110px,12vw,170px)] text-on-dark"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-[1] mb-[clamp(64px,9vw,120px)] text-center"
            >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-on-dark-faint px-3.5 py-[7px] font-mono text-xs tracking-[0.02em] text-on-dark-soft">
                    <i className="h-2 w-2 rounded-full bg-green" /> Inbox open
                </span>

                <h2 className="big m-0 font-display text-[clamp(48px,9vw,128px)] font-bold leading-none tracking-[-0.04em] text-white">
                    Let&apos;s build
                    <br />
                    something <em className="text-yellow">good</em>.
                </h2>
                <p className="mx-auto mt-3.5 max-w-[46ch] text-[clamp(16px,1.3vw,19px)] text-on-dark-soft">
                    A project, a role, or just a hello. I read everything and reply to most things within a day.
                </p>

                <div className="mt-7 flex flex-col items-center gap-3">
                    <a
                        href={`mailto:${EMAIL}`}
                        className="group inline-block break-all border-b-2 border-white/50 pb-1 font-display text-[clamp(22px,4vw,56px)] font-medium tracking-[-0.03em] text-white transition-colors hover:border-orange hover:text-orange"
                    >
                        {EMAIL}{" "}
                        <span className="inline-block transition-transform duration-300 [transition-timing-function:var(--spring)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[8deg]">
                            ↗
                        </span>
                    </a>
                    <button
                        onClick={copy}
                        className="rounded-full border border-on-dark-faint px-3.5 py-1.5 font-mono text-xs text-on-dark-soft transition-colors hover:border-white hover:text-white"
                        aria-live="polite"
                    >
                        {copied ? "Copied ✓" : "Copy email"}
                    </button>
                </div>

                <div className="mt-[clamp(48px,6vw,80px)] grid justify-center gap-7 text-center sm:grid-cols-[repeat(3,auto)] sm:gap-[clamp(32px,8vw,120px)] sm:text-left">
                    <div className="flex flex-col items-center gap-1.5 text-[15px] sm:items-start">
                        <span className="mono mb-1.5 !text-on-dark-soft">Direct</span>
                        <a href={`mailto:${EMAIL}`} className={linkCls}>
                            Email
                        </a>
                        <a href={PHONE_HREF} className={linkCls}>
                            {PHONE}
                        </a>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-[15px] sm:items-start">
                        <span className="mono mb-1.5 !text-on-dark-soft">Elsewhere</span>
                        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkCls}>
                            LinkedIn ↗
                        </a>
                        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={linkCls}>
                            GitHub ↗
                        </a>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-[15px] sm:items-start">
                        <span className="mono mb-1.5 !text-on-dark-soft">Paperwork</span>
                        <a href={RESUME} download className={linkCls}>
                            Résumé (PDF)
                        </a>
                        <b className="font-medium text-white">Bangalore, India</b>
                    </div>
                </div>
            </motion.div>

            {/* Giant wordmark */}
            <div
                aria-hidden="true"
                className="relative mb-[clamp(40px,6vw,80px)] flex flex-col font-display text-[clamp(60px,13.5vw,230px)] font-extrabold leading-[0.86] tracking-[-0.065em]"
            >
                <span className="outline-word">Nayanika</span>
                <span className="text-white">
                    Sur<span className="text-orange">.</span>
                </span>
            </div>

            <div className="relative flex flex-wrap justify-between gap-4 border-t border-on-dark-faint pt-4 text-[13px] text-on-dark-soft">
                <span>© {new Date().getFullYear()} Nayanika Sur. Designed and built by hand.</span>
                <button onClick={onOpenPalette} className="flex items-center gap-2 transition-colors hover:text-white">
                    Press{" "}
                    <kbd className="rounded-md border border-on-dark-faint px-1.5 py-0.5 font-mono text-[11px] text-on-dark">⌘K</kbd>{" "}
                    to jump anywhere
                </button>
            </div>
        </footer>
    );
}
