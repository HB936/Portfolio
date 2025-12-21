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
                    'Wordpress Developer', 500,
                    'React Developer', 500,
                    'UI Enthusiast', 500,
                    'Full Stack Coder', 500,
                    'Shopify Developer', 500,
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

                    >I'm a passionate HTML & React developer specializing in responsive UI design and frontend development. Experienced with ReactJS, Tailwind CSS, and JavaScript, having worked on real-world projects including interface replications for Myntra, RedBus, and IIP Academy through professional training.

                        Built interactive applications including a quiz creator/player platform with state management and a habit tracking analytics app. Proficient with component libraries (Storybook), modern build tools, and responsive design principles.

                        Currently focused on building responsive UI components and experimenting with ThreeJS for 3D interactivity.
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    )
}
