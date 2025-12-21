import React from 'react'
import { motion } from 'framer-motion'

const hobbyIcons = {
  "Solving Cubes": "🎲",
  "Football": "⚽",
  "Video Editing": "🎬",
  "Photo Editing": "🖼️",
  "Entertainment": "🎭"
}

const HobbyCard = ({ hobby, icon, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
    className="group relative h-full"
  >
    {/* Gradient glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#4FC3F7]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur-xl"></div>
    
    <div className="relative h-full border border-[#B0BEC5]/30 bg-gradient-to-br from-slate-900/40 to-slate-950/60 rounded-2xl p-6 backdrop-blur-sm group-hover:border-[#4FC3F7]/50 transition-all duration-300 flex flex-col">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-[#4FC3F7] via-[#81D4FA] to-transparent rounded-t-2xl w-full"></div>
      
      {/* Icon */}
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Hobby name */}
      <h3 className="text-lg font-bold text-white group-hover:text-[#4FC3F7] transition-colors duration-300 mb-2">
        {hobby}
      </h3>
      
      {/* Description */}
      <p className="text-[#B0BEC5] text-xs leading-relaxed flex-grow">
        {desc}
      </p>
      
      {/* Decorative dots */}
      <div className="mt-3 flex gap-2">
        <div className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full opacity-60"></div>
        <div className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full opacity-40"></div>
        <div className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full opacity-20"></div>
      </div>
    </div>
  </motion.div>
)

const hobbiesData = [
  { 
    name: "Solving Cubes", 
    key: "Solving Cubes",
    desc: "I solve cubes from 2x2 to 6x6 and various other permutations. I have competed at the national level and achieved a rank of 5th overall in India for one of the competitions."
  },
  { 
    name: "Football", 
    key: "Football",
    desc: "A passionate footballer since my school days. I have developed strong teamwork, agility, and strategic thinking through consistent participation in sports."
  },
  { 
    name: "Video Editing", 
    key: "Video Editing",
    desc: "Video editing has been a creative outlet since school. I enjoy incorporating visual effects and animation elements at a competent level, bringing stories to life through motion and effects."
  },
  { 
    name: "Photo Editing", 
    key: "Photo Editing",
    desc: "Passionate about photo editing since my earlier years. I enjoy retouching, color grading, and enhancing visuals to create compelling imagery with a professional touch."
  },
  { 
    name: "Entertainment", 
    key: "Entertainment",
    desc: "I enjoy exploring diverse forms of entertainment, from various movies across genres to anime. It helps me unwind and gain fresh perspectives from different storytelling styles."
  }
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white" style={{ fontFamily: 'Space Grotesk' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 lg:mb-16 text-center sm:text-left"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#4FC3F7] to-[#81D4FA] bg-clip-text text-transparent drop-shadow-[0_0_20px_#4FC3F7]/20">
              My Hobbies
            </h2>
            <div className="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-[#4FC3F7] to-transparent mt-3 sm:mt-4"></div>
          </div>
          <p className="text-[#B0BEC5] mt-3 sm:mt-4 text-sm sm:text-base lg:text-xl max-w-2xl">
            Interests and passions that keep me energized.
          </p>
        </motion.div>

        {/* Hobbies Grid - 3 top, 2 bottom */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {hobbiesData.slice(0, 3).map((hobby, i) => (
              <HobbyCard key={hobby.key} hobby={hobby.name} icon={hobbyIcons[hobby.key]} desc={hobby.desc} index={i} />
            ))}
          </div>
          
          {/* Bottom row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full sm:w-2/3 lg:w-1/2">
              {hobbiesData.slice(3, 5).map((hobby, i) => (
                <HobbyCard key={hobby.key} hobby={hobby.name} icon={hobbyIcons[hobby.key]} desc={hobby.desc} index={i + 3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
