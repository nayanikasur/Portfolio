"use client";
import AboutSection from "@/ui/AboutSection";
import Contact from "@/ui/ContactMe";
import ExperienceSection from "@/ui/ExperienceSection";
import HeroSection from "@/ui/HeroSection";
import NavigationBar from "@/ui/NavigationBar";
import SkillsSection from "@/ui/SkillsSection";

export default function Home() {
  return (
    <div className="bg-[#FFFAEB] text-[#3F3D3A] min-h-screen">
      {/* 🔹 Navigation Bar */}
      <NavigationBar />

      {/* 🔹 Hero Section */}
      <HeroSection />


      {/* 🔹 About Section */}
      <AboutSection />

      {/* 🔹 Experience Section */}
      <ExperienceSection />

      {/* 🔹 Skills Section */}
      <SkillsSection />

      {/* 🔹 Contact Section */}
      <Contact />
    </div>
  );
}
