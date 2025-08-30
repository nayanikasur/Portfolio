import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-2 fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center">
                {/* Resume Button with blur */}
                <a
                    href="/Nayanika-Sur-Resume.pdf"
                    download
                    className="rounded-full h-20 w-20 flex items-center justify-center
             border-[3px] border-[#FFFAEB]/70 
             bg-[#FFFAEB]/[0.05] backdrop-blur-md 
             shadow-md hover:shadow-xl 
             hover:scale-105 transition-all duration-300 ease-in-out
             font-semibold text-[#FFFAEB]/90"
                >
                    Resume
                </a>


                {/* Desktop Nav Links */}
                <ul className="hidden sm:flex justify-end gap-10 py-4 px-6 font-semibold text-lg bg-[#FFFAEB]/[0.05] backdrop-blur-md rounded-full shadow-sm">
                    <li>
                        <a href="#about" className="hover:text-[#767676] transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:text-[#767676] transition-colors">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-[#767676] transition-colors">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-[#767676] transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden p-3 bg-[#FFFAEB]/[0.05] backdrop-blur-md rounded-full shadow-sm"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="sm:hidden mt-4 flex flex-col items-start gap-4 py-4 px-6 font-semibold text-lg bg-[#FFFAEB]/[0.9] backdrop-blur-md rounded-xl shadow-md">
                    <li>
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-[#767676] transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-[#767676] transition-colors"
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-[#767676] transition-colors"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-[#767676] transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavigationBar;
