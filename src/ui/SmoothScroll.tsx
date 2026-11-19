"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Lenis already honours `scroll-padding-top` (72px in globals.css), which keeps
// anchored sections clear of the sticky nav, so no extra offset is needed.
const NAV_OFFSET = 0;

declare global {
    interface Window {
        __lenis?: Lenis;
    }
}

/** Scroll to an element, smoothly via Lenis when it's running. */
export function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: NAV_OFFSET });
    else el.scrollIntoView({ behavior: "smooth" });
}

/** Momentum-style smooth scrolling for wheel and trackpad, like the reference site. */
export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            lerp: 0.09, // lower = glidier
            wheelMultiplier: 0.9,
            autoRaf: true,
            anchors: { offset: NAV_OFFSET },
        });
        window.__lenis = lenis;

        return () => {
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    return null;
}
