"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ACTS, EMAIL, NAV } from "./data";

type Props = { onOpenPalette: () => void };

const NavigationBar = ({ onOpenPalette }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");

    // Active section = the last chapter whose top has passed 45% of the viewport.
    // Each chapter's content sits after its act screen in the DOM, so this stays
    // correct while scrolling in either direction.
    useEffect(() => {
        const ids = ["hero", ...NAV.map((n) => n.id)];
        let frame = 0;
        const update = () => {
            frame = 0;
            const line = window.innerHeight * 0.45;
            let current = "hero";
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = id;
            }
            setActive(current);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    const act = ACTS.find((a) => a.id === active);

    return (
        <>
            <nav
                className={`px-gx sticky top-0 z-50 flex items-center gap-7 border-b py-3.5 backdrop-blur-[14px] transition-colors duration-300 ${active === "contact"
                    ? "border-on-dark-faint bg-dark/80 text-on-dark [&_.pill-btn]:bg-white [&_.pill-btn]:text-ink [&_kbd]:border-on-dark-faint [&_kbd]:bg-dark-2 [&_.logo-box]:bg-white [&_.logo-box]:text-ink"
                    : "border-line bg-white/80"
                    }`}
            >
                <a
                    href="#hero"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-ink focus:px-3 focus:py-1.5 focus:text-white"
                >
                    Skip to content
                </a>

                {/* Logo */}
                <a href="#hero" className="flex flex-none items-center gap-2.5" aria-label="Nayanika Sur, home">
                    <span className="logo-box flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink font-display text-sm font-extrabold tracking-tight text-white transition-transform duration-500 [transition-timing-function:var(--spring)] hover:rotate-[-8deg] hover:scale-110">
                        N<span className="text-orange">.</span>
                    </span>
                    <span className="hidden font-display text-[15px] font-bold uppercase tracking-tight sm:inline">
                        Nayanika&apos;s folio
                    </span>
                </a>

                {/* Links */}
                <ul className="ml-2 hidden gap-[22px] text-sm font-medium md:flex">
                    {NAV.map((n) => (
                        <li key={n.id}>
                            <a
                                href={`#${n.id}`}
                                className={`whitespace-nowrap transition-opacity duration-200 hover:opacity-100 ${active === n.id ? "opacity-100" : "opacity-60"
                                    }`}
                            >
                                {n.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="ml-auto flex items-center gap-4">
                    <button
                        onClick={onOpenPalette}
                        className="hidden items-center gap-2 text-sm font-medium opacity-60 transition-opacity hover:opacity-100 sm:flex"
                        aria-label="Open command menu"
                    >
                        <kbd className="rounded-md border border-line-2 bg-bg-2 px-1.5 py-0.5 font-mono text-[11px]">⌘K</kbd>
                        Jump
                    </button>
                    <a href={`mailto:${EMAIL}`} className="pill-btn hidden sm:inline-flex">
                        Let&apos;s build
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-full border border-line-2 p-2 md:hidden"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="fixed inset-x-0 top-[61px] z-50 border-b border-line bg-white px-5 pb-5 md:hidden">
                    <ul className="flex flex-col">
                        {NAV.map((n, i) => (
                            <li key={n.id}>
                                <a
                                    href={`#${n.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-baseline gap-3 border-b border-line py-3"
                                >
                                    <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="font-display text-3xl font-extrabold tracking-[-0.04em]">{n.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href={`mailto:${EMAIL}`} className="pill-btn mt-4 w-full justify-center">
                        Let&apos;s build
                    </a>
                </div>
            )}

            {/* Floating act tag (bottom-left) */}
            <div
                aria-hidden="true"
                className={`fixed bottom-[clamp(14px,2vw,26px)] left-[clamp(14px,2vw,28px)] z-40 flex h-9 items-center gap-2 rounded-full pl-3 pr-4 shadow-[0_10px_24px_-12px_rgba(0,0,0,.5)] transition-all duration-300 ${act ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"
                    }`}
                style={{ background: act?.ac ?? "#111", color: act?.ai ?? "#fff" }}
            >
                <i className="h-2 w-2 rounded-full" style={{ background: act?.ah ?? "#ffd84d" }} />
                <span className="text-[11px] opacity-70">Act {act?.num}</span>
                <b className="font-display text-sm font-bold tracking-tight">{act?.label}</b>
            </div>
        </>
    );
};

export default NavigationBar;
