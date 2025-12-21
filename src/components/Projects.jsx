import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative h-full"
  >
    {/* Gradient background on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#4FC3F7]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
    
    <div className="relative h-full border border-[#B0BEC5]/40 bg-gradient-to-br from-slate-900/50 to-slate-950 rounded-xl p-6 backdrop-blur-sm group-hover:border-[#4FC3F7]/60 transition-all duration-300">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#4FC3F7] to-transparent rounded-t-xl"></div>
      
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-white group-hover:text-[#4FC3F7] transition-colors duration-300 flex-1 pr-2">
          {project.title}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#4FC3F7]/10 text-[#4FC3F7] hover:bg-[#4FC3F7]/20 transition-all duration-200"
            title="View project"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
      
      <p className="text-[#B0BEC5] leading-relaxed text-sm mb-5">
        {project.desc}
      </p>
      
      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#B0BEC5]/20">
        {project.tech.split(' · ').map((tech, i) => (
          <span
            key={i}
            className="inline-block px-3 py-1.5 text-xs font-medium text-[#4FC3F7] bg-[#4FC3F7]/10 rounded-full group-hover:bg-[#4FC3F7]/20 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
)

const projects = [
  {
    title: "IFSA Trader's Cup 2025",
    desc: "Event website using Divi Builder with Excel-based participant tracking for registrations.",
    link: "https://ifsa-network.com/traders-cup/",
    tech: "WordPress · Divi · Excel",
  },
  {
    title: "Shopify E-Commerce Store",
    desc: "Health snack brand store — designed UI/UX and implemented full storefront (pre-launch, NDA). Demo available upon request.",
    link: "https://ibb.co/album/gjR8L1",
    tech: "Shopify · UI/UX · Design",
  },
  {
    title: "Habit Tracker",
    desc: "Personal analytics & habit tracking app — built entirely in a single .tsx file with real-time data visualization.",
    link: "https://habit-tracker-1-green.vercel.app",
    tech: "Next.js · TypeScript · Tailwind",
  },
  {
    title: "Blog Maker",
    desc: "Full-stack blog editor with creation, editing, publishing, and auto-save drafts using debounce. Clean architecture implementation.",
    link: "https://blog-maker-vercel.vercel.app",
    tech: "Full-stack · Node.js · React · Debounce",
  },
  {
    title: "IShop E-Commerce",
    desc: "Full-stack e-commerce platform with complete frontend and backend integration via REST APIs.",
    tech: "Full-stack · REST APIs · Database",
  },
  {
    title: "WordPress & WooCommerce Development",
    desc: "Custom shop page, AJAX-based add-to-cart with state management, wishlist integration, and Tailwind-styled cart functionality.",
    link: "https://ibb.co/album/dWFxrQ",
    tech: "WordPress · WooCommerce · AJAX · Tailwind",
  },
  {
    title: "Crypto Price Tracker",
    desc: "Real-time price tracking with simulated WebSocket updates, gainers/losers filters, unit tests, and localStorage state management via Redux.",
    link: "https://crypto-price-tracker-topaz.vercel.app",
    tech: "React · Redux Toolkit · TypeScript · Testing",
  },
  {
    title: "Quiz Maker & Player",
    desc: "Interactive web app for creating and playing custom quizzes with real-time scoring and user-friendly interface.",
    link: "https://ibb.co/album/Rkd7ZT",
    tech: "React · Tailwind · State Management",
  },
  {
    title: "UI Component Library",
    desc: "Reusable React components with Tailwind CSS and Storybook integration. Badge component completed, Accordion in development.",
    tech: "React · Tailwind · Storybook · Design Systems",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white" style={{ fontFamily: 'Space Grotesk' }}>
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
              Projects
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#4FC3F7] to-transparent mt-3 sm:mt-4"></div>
          </div>
          <p className="text-[#B0BEC5] mt-3 sm:mt-4 text-sm sm:text-base lg:text-xl max-w-2xl">
            A selection of recent work showcasing expertise across frontend, backend, and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
