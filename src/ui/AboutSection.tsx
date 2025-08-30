// const AboutSection = () => {
//     return (<><section
//         id="about"
//         className="min-h-screen p-2"
//     >
//         <div className="flex justify-center items-center">
//             <h2 className="text-5xl font-bold">About Me</h2>
//         </div>

//         <div className="flex  sm:flex-row flex-col sm:space-x-2 space-y-8 items-center mt-8">
//             <div className="grow flex justify-center items-center pointer-events-none">
//                 <img
//                     src="/hitting-hammer.svg"
//                     alt="background"
//                     className="w-1/2 h-auto"
//                 />
//             </div>
//             <div className="w-[50%] flex flex-col space-y-2">
//                 <div>
//                     Hey, I’m Nayanika
//                 </div>
//                 <div>
//                     I code, design, and build cool stuff on the web. As a MERN stack developer,
//                 </div>
//                 <div>
//                     I’ve handled everything from crafting UIs in Figma to developing complete applications front to back.
//                 </div>
//                 <div>
//                     I don’t just imagine products—I make them real. Always curious, always building, and super excited about what’s next in my dev journey.
//                 </div>
//             </div>
//         </div>
//     </section></>)
// }

// export default AboutSection


const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen py-20 px-6 sm:px-8 bg-[#FFFAEB] text-[#3F3D3A]">
            {/* Centered Heading */}
            <h2 className="text-5xl font-bold text-center mb-12">
                About Me
            </h2>

            {/* Flex Layout */}
            <div className="flex sm:flex-row flex-col sm:space-x-8 space-y-8 items-center max-w-6xl mx-auto">
                {/* Image */}
                <div className="flex justify-center items-center w-full sm:w-1/2 pointer-events-none">
                    <img
                        src="/hitting-hammer.svg"
                        alt="background"
                        className="w-2/3 h-auto"
                    />
                </div>

                {/* Text */}
                <div className="w-full sm:w-1/2 flex flex-col space-y-4 text-lg leading-relaxed">
                    <p>Hey, I’m <span className="font-semibold">Nayanika</span>.</p>
                    <p>I code, design, and build cool stuff on the web. As a <span className="font-semibold">MERN stack developer</span>,</p>
                    <p>I’ve handled everything from crafting UIs in Figma to developing complete applications front to back.</p>
                    <p>I don’t just imagine products — I make them real. Always curious, always building, and super excited about what’s next in my dev journey.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
