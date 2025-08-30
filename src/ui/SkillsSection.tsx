"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaFigma, FaGitAlt,
} from "react-icons/fa";
import {
    SiRedux, SiJquery, SiFirebase, SiTailwindcss, SiNextdotjs,
    SiExpress, SiMongodb, SiPostgresql, SiSvg,
} from "react-icons/si";
import { SiAmazons3, SiAmazonec2 } from "react-icons/si";


const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "AJAX", icon: <SiJquery /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "SVGator", icon: <SiSvg /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Amazon S3", icon: <SiAmazons3 /> },
    { name: "EC2 Instance", icon: <SiAmazonec2 /> },
    { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    return (
        <section id="skills" ref={ref} className="min-h-screen bg-[#FFFAEB] text-[#3F3D3A] py-20 px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-6xl mx-auto"
            >
                {/* Title */}
                <h2 className="text-5xl font-extrabold text-center mb-16 text-[#3F3D3A]">
                    My Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#3F3D3A]/10 hover:bg-[#3F3D3A]/20 transition shadow-sm"
                        >
                            <div className="text-5xl mb-3 text-[#3F3D3A]/80">{skill.icon}</div>
                            <p className="text-lg font-semibold text-[#3F3D3A]">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
