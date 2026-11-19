"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { EMAIL, GITHUB, LINKEDIN, NAV, RESUME } from "./data";
import { scrollToId } from "./SmoothScroll";

type Item = { label: string; hint: string; run: () => void };

type Props = { open: boolean; onClose: () => void };

export default function CommandPalette({ open, onClose }: Props) {
    const [q, setQ] = useState("");
    const [i, setI] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const items: Item[] = useMemo(() => {
        const go = (id: string) => () => scrollToId(id);
        const open = (url: string) => () => window.open(url, "_blank", "noopener");
        return [
            { label: "Top of the page", hint: "Go", run: go("hero") },
            ...NAV.map((n) => ({ label: n.label, hint: "Go", run: go(n.id) })),
            { label: "Download résumé", hint: "PDF", run: open(RESUME) },
            { label: "Email Nayanika", hint: "Mail", run: () => (window.location.href = `mailto:${EMAIL}`) },
            {
                label: "Copy email address",
                hint: "Copy",
                run: () => {
                    navigator.clipboard?.writeText(EMAIL).catch(() => { });
                },
            },
            { label: "GitHub", hint: "↗", run: open(GITHUB) },
            { label: "LinkedIn", hint: "↗", run: open(LINKEDIN) },
        ];
    }, []);

    const filtered = items.filter((it) => it.label.toLowerCase().includes(q.toLowerCase()));

    useEffect(() => {
        if (open) {
            setQ("");
            setI(0);
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    }, [open]);

    if (!open) return null;

    const choose = (it?: Item) => {
        if (!it) return;
        onClose();
        it.run();
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/30 px-4 pt-[14vh] backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            data-lenis-prevent
        >
            <div
                className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,.45)]"
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    ref={inputRef}
                    value={q}
                    onChange={(e) => {
                        setQ(e.target.value);
                        setI(0);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setI((v) => Math.min(v + 1, filtered.length - 1));
                        } else if (e.key === "ArrowUp") {
                            e.preventDefault();
                            setI((v) => Math.max(v - 1, 0));
                        } else if (e.key === "Enter") {
                            choose(filtered[i]);
                        } else if (e.key === "Escape") {
                            onClose();
                        }
                    }}
                    placeholder="Where to?"
                    className="w-full border-b border-line px-5 py-4 font-display text-lg font-medium outline-none placeholder:text-muted"
                />
                <ul className="max-h-[50vh] overflow-y-auto p-2">
                    {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">Nothing here. Try another word.</li>}
                    {filtered.map((it, idx) => (
                        <li key={it.label}>
                            <button
                                onMouseEnter={() => setI(idx)}
                                onClick={() => choose(it)}
                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[15px] ${idx === i ? "bg-ink text-white" : ""
                                    }`}
                            >
                                {it.label}
                                <span className={`font-mono text-[11px] ${idx === i ? "text-white/60" : "text-muted"}`}>{it.hint}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4 border-t border-line bg-bg-2 px-4 py-2 font-mono text-[11px] text-muted">
                    <span>↑↓ move</span>
                    <span>↵ open</span>
                    <span>esc close</span>
                </div>
            </div>
        </div>
    );
}
