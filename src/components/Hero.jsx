import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { AnimatePresence, motion } from 'framer-motion';

export default function Hero() {
    return (
        <div id="about" className="flex mt-[150px] text-white flex-col items-center text-justify" style={{ fontFamily: "Space Grotesk" }}>
            <div className="rounded-full mb-[40px] w-[380px] aspect-square border-[#B0BEC5] border-4 overflow-hidden drop-shadow-[0_0_5px_#4FC3F7]">
                <img className='w-full h-full object-cover' src="../images/hardik1.jpg" alt="Hardik" />
            </div>
            <h1 className='text-[50px] drop-shadow-[0_0_10px_#4FC3F7]'>Hardik Biyani</h1>
            <TypeAnimation
                sequence={[
                    'Wordpress Developer', 500,
                    'React Developer', 500,
                    'UI Enthusiast', 500,
                    'Full Stack Coder', 500,
                    'Shopify Developer', 500,
                ]}
                speed={50}
                repeat={Infinity}
                deletionSpeed={40}
                className="text-xl text-[#4FC3F7]"
                wrapper="span"
            />
            <div className="relative mt-[20px]">
                <AnimatePresence>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-2xl p-8'

                    >I’m a passionate HTML Developer with expertise in ReactJS, Tailwind CSS, and JavaScript. I’ve worked on several real-world projects, including replicating the interfaces of Myntra, RedBus, and IIP Academy during my training under Mr. Bhagirath Giri at WS CUBE TECH. This experience gave me a solid foundation in responsive design and UI/UX development.

                        I recently developed a quiz application that allows users to both play and create quizzes, which enhanced my skills in state management and user interactivity. I’ve also worked with Storybook for component libraries, refining my approach to UI component design.

                        Currently, I’m focused on building responsive UI components and experimenting with ReactJS and ThreeJs to add interactivity and 3D features to my projects. I’m constantly exploring new tools and techniques to improve my skills and deliver modern, user-friendly web experiences.
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    )
}
