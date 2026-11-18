const TOOLS = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Temporal",
    "AWS EC2",
    "AWS S3",
    "Figma",
    "SVGator",
    "Firebase",
    "Git",
];

export default function Ticker() {
    // Rendered twice so the -50% loop is seamless.
    const row = [...TOOLS, ...TOOLS];
    return (
        <div className="ticker overflow-hidden border-y border-line-2 bg-bg-2" aria-label="Tools I use">
            <div className="ticker-track flex w-max">
                {row.map((t, i) => (
                    <span
                        key={i}
                        aria-hidden={i >= TOOLS.length}
                        className="whitespace-nowrap border-r border-line-2 px-8 py-3.5 font-display text-lg font-semibold tracking-[-0.01em]"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
