import React from 'react'
import { motion } from 'framer-motion'

const iconMap = {
  "Languages": "💻",
  "Frameworks & Libraries": "⚙️",
  "Tools": "🛠️",
  "Core Concepts": "✨"
}

const SkillCategory = ({ category, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="group relative h-full"
  >
    {/* Gradient glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#4FC3F7]/15 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur-xl"></div>
    
    <div className="relative h-full border border-[#B0BEC5]/30 bg-gradient-to-br from-slate-900/40 to-slate-950/60 rounded-2xl p-8 backdrop-blur-sm group-hover:border-[#4FC3F7]/50 transition-all duration-300">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-[#4FC3F7] via-[#81D4FA] to-transparent rounded-t-2xl"></div>
      
      {/* Icon and Title */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {iconMap[category]}
        </span>
        <h3 className="text-2xl font-bold text-white group-hover:text-[#4FC3F7] transition-colors duration-300">
          {category}
        </h3>
      </div>
      
      {/* Skills as tags */}
      <div className="flex flex-wrap gap-3">
        {skills.split(', ').map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 + i * 0.02 }}
            className="inline-block px-3.5 py-2 text-xs font-semibold text-[#4FC3F7] bg-gradient-to-br from-[#4FC3F7]/15 to-[#4FC3F7]/5 border border-[#4FC3F7]/30 rounded-full group-hover:bg-gradient-to-br group-hover:from-[#4FC3F7]/25 group-hover:to-[#4FC3F7]/10 group-hover:border-[#4FC3F7]/50 transition-all duration-300 hover:scale-105"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
)

const skillsData = [
  {
    category: "Languages",
    skills: "JavaScript, TypeScript, Python, Java, C, SQL, PHP, HTML, CSS, MATLAB, R"
  },
  {
    category: "Frameworks & Libraries",
    skills: "React.js, Node.js, Express.js, Redux Toolkit, Tailwind CSS, Bootstrap, Firebase, Three.js, Three Fiber"
  },
  {
    category: "Tools",
    skills: "Git, WordPress, WooCommerce, Shopify, REST APIs, Sheets API, Resend API, LM Studio, Claude Code, Antigravity, Canva, Photoshop, Premiere Pro"
  },
  {
    category: "Core Concepts",
    skills: "Data Structures & Algorithms, DBMS, OOP, Software Engineering, Machine Learning, Data Analytics, NLP, Statistical Analysis, Data Visualization, Supervised/Unsupervised Learning, LLM Integration, Video & Photo Editing"
  }
]

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white" style={{ fontFamily: 'Space Grotesk' }}>
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
              Technical Skills
            </h2>
            <div className="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-[#4FC3F7] to-transparent mt-3 sm:mt-4"></div>
          </div>
          <p className="text-[#B0BEC5] mt-3 sm:mt-4 text-sm sm:text-base lg:text-xl max-w-2xl">
            Proficient across a wide range of technologies and tools for full-stack development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {skillsData.map((skill, i) => (
            <SkillCategory key={skill.category} category={skill.category} skills={skill.skills} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills