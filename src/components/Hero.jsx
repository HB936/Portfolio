import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { AnimatePresence, motion } from 'framer-motion';

export default function Hero() {
    return (
        <div id="about" className="flex mt-8 sm:mt-16 lg:mt-20 text-white flex-col items-center text-justify px-4 sm:px-6" style={{ fontFamily: "Space Grotesk" }}>
            <div className="rounded-full mb-4 sm:mb-6 lg:mb-8 w-40 sm:w-56 lg:w-72 aspect-square border-[#B0BEC5] border-2 sm:border-3 lg:border-4 overflow-hidden drop-shadow-[0_0_5px_#4FC3F7]">
                <img className='w-full h-full object-cover' src="/hardik1.jpg" alt="Hardik" />
            </div>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold drop-shadow-[0_0_10px_#4FC3F7] text-center'>Hardik Biyani</h1>
            <TypeAnimation
                sequence={[
                    'Full Stack Developer', 500,
                    'React & Node.js Developer', 500,
                    'Shopify Developer', 500,
                    'WordPress Developer', 500,
                    'AI/ML Enthusiast', 500,
                    'UI/UX Enthusiast', 500,
                ]}
                speed={50}
                repeat={Infinity}
                deletionSpeed={40}
                className="text-sm sm:text-base lg:text-xl text-[#4FC3F7] mt-2 sm:mt-3"
                wrapper="span"
            />
            <div className="relative mt-3 sm:mt-4 lg:mt-6 max-w-4xl">
                <AnimatePresence>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-xs sm:text-sm lg:text-lg p-2 sm:p-4 lg:p-8 leading-relaxed'

                    >I'm a full-stack developer with hands-on experience building production-ready web applications across React.js, Node.js, Python, Shopify, and WordPress ecosystems. I've worked professionally as a Full Stack Developer at HealthMonk — building an animated waitlist platform with Three.js, integrating backend APIs with Resend and Google Sheets, and customising Shopify storefronts — and as a Web Developer for IFSA, where I built their official event website from scratch.

                        Beyond web development, I work on AI-driven projects including a Telegram Narrative Analyzer (semantic clustering, LLM integration) and a Digital Footprint Finder (OSINT, MERN stack). I'm comfortable across the stack — from crafting pixel-perfect UIs to designing REST APIs and Python microservices.

                        Skilled in TypeScript, Redux Toolkit, Three.js, and modern tooling, with a creative side in video and photo editing (Premiere Pro, Photoshop, Canva). Always building something interesting.
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    )
}
