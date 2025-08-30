import { motion } from "framer-motion";
const HeroSection = () => {
    return (<main
        id="hero"
        className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden"
    >
        {/* Background SVG */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img
                src="/bg-grid.svg"
                alt="background"
                className="w-1/2 h-auto"
            />
        </div>

        {/* Foreground content */}
        <motion.h1
            initial={{ scale: 0.2, opacity: 0, letterSpacing: "-0.5em" }}
            animate={{ scale: 1, opacity: 1, letterSpacing: "0em" }}
            transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full text-[25vw] text-center font-bold relative z-10"
        >
            NAYANIKA
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-[2vw]"
        >
            Turning imagination into interactive reality
        </motion.p>
    </main>)
}

export default HeroSection