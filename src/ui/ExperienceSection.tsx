"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight, Award, Code, Database, Users, Zap, Cloud, Bug, Layers, Code2, Search, Shield, Box } from "lucide-react";

const experiences = [
    {
        title: "Software Development Engineer",
        company: "Sekyurity AI",
        location: "Bangalore, Karnataka",
        duration: "Jun 2024 – Present",
        type: "Full-time",
        description: "Building scalable, secure, and user-focused AI-driven web applications from scratch.",
        achievements: [
            {
                icon: Code,
                text: "Developed scalable front-end applications using React.js, Next.js, and Tailwind CSS",
                impact: "Delivered responsive, high-performance interfaces aligned with design specs"
            },
            {
                icon: Database,
                text: "Integrated authentication systems, dashboards, and AI-powered chat features",
                impact: "Improved user engagement and security across critical workflows"
            },
            {
                icon: Cloud,
                text: "Deployed applications on AWS EC2 and configured S3 buckets for storage",
                impact: "Enabled reliable hosting and seamless content delivery"
            },
            {
                icon: Zap,
                text: "Optimized MongoDB and PostgreSQL queries for performance and scalability",
                impact: "Reduced query response times and improved system reliability"
            },
            {
                icon: Users,
                text: "Collaborated in Agile teams with sprint planning, code reviews, and API documentation",
                impact: "Increased delivery efficiency and cross-team alignment"
            }
        ],
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS EC2", "AWS S3", "REST APIs", "Agile"]
    },
    {
        title: "Frontend Engineer",
        company: "My Yoga Teacher",
        location: "Bangalore, Karnataka",
        duration: "Dec 2023 – Mar 2024",
        type: "Full-time",
        description: "Enhanced core platform features and optimized performance for a fitness-focused product.",
        achievements: [
            {
                icon: Code,
                text: "Developed and enhanced front-end features using React.js",
                impact: "Improved overall platform functionality and usability"
            },
            {
                icon: Bug,
                text: "Resolved production bugs and optimized system performance",
                impact: "Reduced downtime and improved customer experience"
            },
            {
                icon: Layers,
                text: "Implemented Redux and Redux-Saga for state management",
                impact: "Enabled efficient data flow and asynchronous operations"
            },
            {
                icon: Code2,
                text: "Built custom reusable UI components with HTML5, CSS3, and responsive design",
                impact: "Delivered visually appealing, mobile-friendly interfaces"
            },
            {
                icon: Search,
                text: "Conducted SEO optimization for better platform visibility",
                impact: "Boosted organic traffic and improved search rankings"
            }
        ],
        technologies: ["React.js", "Redux", "Redux-Saga", "HTML5", "CSS3", "SEO", "Responsive Design", "Agile"]
    },
    {
        title: "Software Development Intern",
        company: "SafeSend",
        location: "Bangalore, Karnataka",
        duration: "Feb 2023 – Sep 2023",
        type: "Internship",
        description: "Contributed to the development of an e-commerce platform and API SDKs.",
        achievements: [
            {
                icon: Code,
                text: "Developed and maintained front-end features using React.js",
                impact: "Delivered responsive and engaging user interfaces"
            },
            {
                icon: Shield,
                text: "Wrote unit test cases for .NET backend services",
                impact: "Improved code quality and reliability across modules"
            },
            {
                icon: Box,
                text: "Designed and built C# SDKs for API integrations",
                impact: "Streamlined developer workflows and reduced integration time"
            },
            {
                icon: Users,
                text: "Collaborated with cross-functional teams in Agile sprints",
                impact: "Ensured smooth development and timely delivery of features"
            }
        ],
        technologies: ["React.js", ".NET", "C#", "Unit Testing", "REST APIs", "Agile"]
    }
];


const ExperienceSection = () => {
    return (
        <section id="experience" className="min-h-screen bg-[#FFFAEB] px-5 lg:px-10 py-20">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-[#3F3D3A] mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-xl text-[#3F3D3A]/70 max-w-2xl mx-auto">
                        Delivering innovative solutions across full-stack development, with a focus on scalable architecture and exceptional user experiences.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-[#3F3D3A]/30 rounded-full lg:left-1/2 lg:-translate-x-1/2" />

                    <div className="space-y-16">
                        {experiences.map((exp, i) => (
                            <div
                                key={i}
                                className={`
                                    relative group
                                    ${i % 2 === 0
                                        ? "lg:pr-8 lg:ml-0 lg:mr-auto lg:w-1/2"
                                        : "lg:pl-8 lg:ml-auto lg:mr-0 lg:w-1/2"
                                    }
                                `}
                            >
                                {/* Timeline Node */}
                                <div
                                    style={{ "right": i % 2 ? "" : "-1px", "left": i % 2 ? "-1px" : "" }}
                                    className={` absolute top-8 w-8 h-8 rounded-full bg-[#3F3D3A] border-4 border-[#FFFAEB] shadow-lg 
                                                flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                            ${i % 2 === 0
                                            ? "left-[19px] lg:left-auto lg:right-[-17px] lg:translate-x-1/2"
                                            : "left-[19px] lg:left-[-17px] lg:translate-x-[-50%]"
                                        }`}
                                >
                                    <div className="w-2 h-2 bg-[#FFFAEB] rounded-full" />
                                </div>

                                {/* Experience Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="ml-16 lg:ml-0 bg-white rounded-2xl shadow-lg border border-[#3F3D3A]/10 overflow-hidden group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2"
                                >
                                    {/* Header */}
                                    <div className="bg-[#3F3D3A] p-6 text-[#FFFAEB]">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-2xl font-bold">{exp.title}</h3>
                                                <p className="text-[#FFFAEB]/80 text-lg font-medium">{exp.company}</p>
                                            </div>
                                            <span className="bg-[#FFFAEB]/20 px-3 py-1 rounded-full text-lg font-medium">
                                                {exp.type}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-lg text-[#FFFAEB]/80">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.duration}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-[#3F3D3A]/80 text-lg mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="space-y-4 mb-6">
                                            {exp.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-[#FFFAEB] border border-[#3F3D3A]/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                        <achievement.icon className="w-5 h-5 text-[#3F3D3A]" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="text-[#3F3D3A] font-medium mb-1">
                                                            {achievement.text}
                                                        </p>
                                                        <p className="text-lg text-[#3F3D3A]/70 font-medium flex items-center gap-1">
                                                            <ChevronRight className="w-3 h-3" />
                                                            {achievement.impact}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="border-t border-[#3F3D3A]/10 pt-4">
                                            <p className="text-lg font-medium text-[#3F3D3A]/70 mb-3">
                                                Technologies Used:
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-[#3F3D3A]/5 text-[#3F3D3A] text-lg font-medium rounded-full border border-[#3F3D3A]/20 hover:bg-[#3F3D3A]/10 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
