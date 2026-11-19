"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Cards that pin on top of each other while scrolling (desktop only).
 * A spacer after each card gives it time to sit still before the next one
 * slides over it; the covered card shrinks and dims slightly as that happens.
 * On desktop every card is given the height of the tallest one.
 */
export default function StackCards({ children }: { children: React.ReactNode[] }) {
    const root = useRef<HTMLDivElement>(null);
    const [minH, setMinH] = useState(0);

    useEffect(() => {
        const el = root.current;
        if (!el) return;
        const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-stack-item] > :first-child"));

        // Natural height = the card's inner content + its borders (ignores any min-height we set).
        const measure = () => {
            if (!window.matchMedia("(min-width: 1024px)").matches) return setMinH(0);
            const tallest = Math.max(
                ...cards.map((c) => {
                    const inner = c.firstElementChild as HTMLElement | null;
                    return (inner?.offsetHeight ?? 0) + (c.offsetHeight - c.clientHeight);
                })
            );
            setMinH(Math.ceil(tallest));
        };

        measure();
        const ro = new ResizeObserver(measure);
        cards.forEach((c) => c.firstElementChild && ro.observe(c.firstElementChild));
        window.addEventListener("resize", measure);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [children.length]);

    return (
        <div ref={root} className="flex flex-col" style={{ "--mh": minH ? `${minH}px` : "auto" } as React.CSSProperties}>
            {children.map((card, i) => (
                <StackItem key={i} index={i} total={children.length}>
                    {card}
                </StackItem>
            ))}
        </div>
    );
}

function StackItem({ index, total, children }: { index: number; total: number; children: React.ReactNode }) {
    const spacer = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const last = index === total - 1;

    // 0 when the next card enters at the bottom of the screen, 1 when it reaches the top.
    const { scrollYProgress } = useScroll({ target: spacer, offset: ["end end", "end start"] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, last || reduce ? 1 : 0.94]);
    const shade = useTransform(scrollYProgress, [0, 1], [0, last ? 0 : 0.5]);

    return (
        <>
            <motion.div
                data-stack-item
                style={{ scale, transformOrigin: "50% 0%", "--st": `${84 + index * 16}px` } as React.ComponentProps<typeof motion.div>["style"]}
                className="relative lg:sticky lg:top-[var(--st)] lg:[&>:first-child]:min-h-[var(--mh)]"
            >
                {children}
                <motion.div
                    aria-hidden="true"
                    style={{ opacity: shade }}
                    className="pointer-events-none absolute inset-0 hidden rounded-[20px] bg-black lg:block"
                />
            </motion.div>
            <div ref={spacer} aria-hidden="true" className={last ? "h-0" : "h-6 lg:h-[40vh]"} />
        </>
    );
}
