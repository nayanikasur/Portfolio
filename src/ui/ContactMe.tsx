"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const cardClasses =
        "flex flex-col items-center p-6 bg-gradient-to-br from-[#FFF5E1] to-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1";

    const linkClasses =
        "text-[#3F3D3A]/80 hover:text-[#3F3D3A] transition break-words";

    return (
        <section
            id="contact"
            ref={ref}
            className="min-h-screen bg-[#FFFAEB] text-[#3F3D3A] py-20 px-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
                {/* Title */}
                <h2 className="text-5xl font-extrabold mb-10 text-[#3F3D3A]">
                    Contact Me
                </h2>

                {/* Subtitle */}
                <p className="text-lg text-[#3F3D3A]/80 mb-12">
                    Let’s connect! Whether you have a project in mind, want to
                    collaborate, or just say hi — I’d love to hear from you.
                </p>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Email */}
                    <div className={cardClasses}>
                        <FaEnvelope className="text-4xl text-[#3F3D3A] mb-3" />
                        <p className="font-semibold">Email</p>
                        <a
                            href="mailto:nayanika.m19@gmail.com"
                            className={linkClasses}
                        >
                            nayanika.m19@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className={cardClasses}>
                        <FaPhoneAlt className="text-4xl text-[#3F3D3A] mb-3" />
                        <p className="font-semibold">Phone</p>
                        <a
                            href="tel:+917975057557"
                            className={linkClasses}
                        >
                            +91 79750 57557
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className={cardClasses}>
                        <FaLinkedin className="text-4xl text-[#3F3D3A] mb-3" />
                        <p className="font-semibold">LinkedIn</p>
                        <a
                            href="https://www.linkedin.com/in/nayanika-sur-49691b1a8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClasses}
                        >
                            linkedin.com/in/nayanika-sur
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className={cardClasses}>
                        <FaGithub className="text-4xl text-[#3F3D3A] mb-3" />
                        <p className="font-semibold">GitHub</p>
                        <a
                            href="https://github.com/nayanikasur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClasses}
                        >
                            github.com/nayanikasur
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
