"use client";

import { useEffect, useState } from "react";
import AboutSection from "@/ui/AboutSection";
import CommandPalette from "@/ui/CommandPalette";
import Contact from "@/ui/ContactMe";
import ExperienceSection from "@/ui/ExperienceSection";
import HeroSection from "@/ui/HeroSection";
import NavigationBar from "@/ui/NavigationBar";
import ProjectsSection from "@/ui/ProjectsSection";
import SkillsSection from "@/ui/SkillsSection";
import SmoothScroll from "@/ui/SmoothScroll";
import Ticker from "@/ui/Ticker";

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  // ⌘K / Ctrl+K toggles the command menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openPalette = () => setPaletteOpen(true);

  return (
    <>
      <SmoothScroll />
      <NavigationBar onOpenPalette={openPalette} />
      <main>
        <HeroSection />
        <Ticker />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Contact onOpenPalette={openPalette} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
