import React from 'react'
import { motion } from 'framer-motion'

/* ─── Data ─────────────────────────────────────────────── */

const workExperience = [
  {
    role: 'Full Stack Developer',
    company: 'Health Monk',
    period: 'Aug '25 – May '26',
    bullets: [
      'Designed and customized a Shopify e-commerce website, built interactive frontend sections using reusable JavaScript blocks.',
      'Built an animated waiting list landing page using React.js and Three.js for immersive user onboarding experiences.',
      'Integrated Node.js/Python backend with Resend API for automated discount code email delivery to waiting list users.',
      'Created APIs to sync user registrations with Google Sheets and store customer data in Shopify databases securely.',
    ],
    tech: ['React.js', 'Three.js', 'Node.js', 'Python', 'Shopify', 'Resend API', 'Google Sheets API'],
  },
  {
    role: 'Web Developer',
    company: 'International Finance Student Association (IFSA)',
    period: 'Jun '25 – Jul '25',
    bullets: [
      'Developed the official IFSA event website using WordPress, Divi Builder, HTML, CSS, and JavaScript from scratch.',
      'Integrated Google Sheets API for real-time event data synchronization and seamless cross-device compatibility.',
    ],
    tech: ['WordPress', 'Divi Builder', 'HTML', 'CSS', 'JavaScript', 'Google Sheets API'],
    link: 'https://ifsa-network.com/traders-cup/',
  },
]

const keyProjects = [
  {
    title: 'Digital Footprint Finder',
    subtitle: 'OSINT platform for tracking users\' digital exposure',
    bullets: [
      'Integrated HaveIBeenPwned API for email breach detection and Phoneinfoga for phone validation and reconnaissance.',
      'Built Python microservices using Sherlock for username OSINT and Puppeteer for Yandex reverse image search workflows.',
      'Designed on MERN architecture with secure processing and zero user-data storage for enhanced privacy protection.',
    ],
    tech: ['MERN', 'Python', 'Sherlock', 'Puppeteer', 'HaveIBeenPwned API', 'Phoneinfoga'],
  },
  {
    title: 'Telegram Narrative Analyzer',
    subtitle: 'AI system for tracking narrative propagation across Telegram channels',
    bullets: [
      'Implemented semantic clustering using Sentence Transformers and DBSCAN for narrative grouping and contextual analysis.',
      'Developed "patient zero" detection and integrated Qwen LLM to validate claims against trusted live RSS feeds.',
      'Created interactive propagation dashboards using React and Node.js for real-time narrative tracking and visualization.',
    ],
    tech: ['React', 'Node.js', 'Sentence Transformers', 'DBSCAN', 'Qwen LLM', 'Python'],
  },
  {
    title: 'Habit Tracker',
    subtitle: 'Personal analytics & habit tracking app',
    bullets: [
      'Built entirely in a single .tsx file with real-time data visualization and persistent local state management.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://habit-tracker-1-green.vercel.app',
  },
  {
    title: 'IShop E-Commerce',
    subtitle: 'Full-stack e-commerce platform',
    bullets: [
      'Complete frontend and backend integration via REST APIs with database-backed product and order management.',
    ],
    tech: ['Full-stack', 'REST APIs', 'Database'],
  },
  {
    title: 'Shopify E-Commerce Store',
    subtitle: 'Health snack brand storefront (NDA)',
    bullets: [
      'Designed UI/UX and implemented full storefront for a health snack brand (pre-launch, NDA). Demo available upon request.',
    ],
    tech: ['Shopify', 'UI/UX', 'Design'],
    link: 'https://ibb.co/album/gjR8L1',
  },
  {
    title: 'WordPress & WooCommerce Development',
    subtitle: 'Custom e-commerce shop experience',
    bullets: [
      'Custom shop page, AJAX-based add-to-cart with state management, wishlist integration, and Tailwind-styled cart functionality.',
    ],
    tech: ['WordPress', 'WooCommerce', 'AJAX', 'Tailwind'],
    link: 'https://ibb.co/album/dWFxrQ',
  },
]

/* ─── Sub-components ────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

function WorkCard({ job, index }) {
  return (
    <motion.div {...fadeUp(index * 0.1)} className="relative pl-8 sm:pl-10">
      {/* Timeline dot */}
      <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#4FC3F7] shadow-[0_0_10px_#4FC3F7] ring-4 ring-slate-950" />
      {/* Vertical line (not on last) */}
      <span className="absolute left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-[#4FC3F7]/40 to-transparent" />

      <div className="group border border-[#B0BEC5]/25 bg-gradient-to-br from-slate-900/60 to-slate-950 rounded-xl p-5 sm:p-6 backdrop-blur-sm hover:border-[#4FC3F7]/50 transition-all duration-300 mb-6">
        {/* Top accent */}
        <div className="absolute top-0 left-0 h-px w-24 bg-gradient-to-r from-[#4FC3F7] to-transparent rounded-t-xl" />

        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#4FC3F7] transition-colors duration-300">
              {job.role}
            </h3>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="text-[#4FC3F7] font-semibold text-sm">{job.company}</span>
              {job.link && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-5 h-5 rounded bg-[#4FC3F7]/10 text-[#4FC3F7] hover:bg-[#4FC3F7]/25 transition-all"
                  title="View project"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <span className="text-xs text-[#B0BEC5] bg-[#4FC3F7]/8 border border-[#4FC3F7]/20 px-2.5 py-1 rounded-full whitespace-nowrap">
            {job.period}
          </span>
        </div>

        <ul className="space-y-1.5 mb-4">
          {job.bullets.map((b, i) => (
            <li key={i} className="text-[#B0BEC5] text-sm leading-relaxed flex gap-2">
              <span className="text-[#4FC3F7] mt-1 flex-shrink-0">–</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#B0BEC5]/15">
          {job.tech.map((t, i) => (
            <span key={i} className="px-2 py-0.5 text-[10px] sm:text-xs font-medium text-[#4FC3F7] bg-[#4FC3F7]/10 rounded-full group-hover:bg-[#4FC3F7]/18 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ proj, index }) {
  return (
    <motion.article
      {...fadeUp(index * 0.07)}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4FC3F7]/8 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
      <div className="relative h-full border border-[#B0BEC5]/30 bg-gradient-to-br from-slate-900/55 to-slate-950 rounded-xl p-5 sm:p-6 backdrop-blur-sm group-hover:border-[#4FC3F7]/55 transition-all duration-300 flex flex-col">
        <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[#4FC3F7] to-transparent rounded-t-xl" />

        <div className="flex items-start justify-between mb-1.5">
          <h3 className="text-base font-bold text-white group-hover:text-[#4FC3F7] transition-colors duration-300 flex-1 pr-2">
            {proj.title}
          </h3>
          {proj.link && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-[#4FC3F7]/10 text-[#4FC3F7] hover:bg-[#4FC3F7]/22 transition-all"
              title="View project"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        <p className="text-[#4FC3F7]/70 text-xs italic mb-3">{proj.subtitle}</p>

        <ul className="space-y-1.5 flex-1 mb-4">
          {proj.bullets.map((b, i) => (
            <li key={i} className="text-[#B0BEC5] text-sm leading-relaxed flex gap-2">
              <span className="text-[#4FC3F7] mt-1 flex-shrink-0">–</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#B0BEC5]/15">
          {proj.tech.map((t, i) => (
            <span key={i} className="px-2 py-0.5 text-[10px] sm:text-xs font-medium text-[#4FC3F7] bg-[#4FC3F7]/10 rounded-full group-hover:bg-[#4FC3F7]/18 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Main Export ───────────────────────────────────────── */

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white"
      style={{ fontFamily: 'Space Grotesk' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div {...fadeUp()} className="mb-12 sm:mb-14 lg:mb-16 text-center sm:text-left">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#4FC3F7] to-[#81D4FA] bg-clip-text text-transparent drop-shadow-[0_0_20px_#4FC3F7]/20">
              Experience
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#4FC3F7] to-transparent mt-3 sm:mt-4" />
          </div>
          <p className="text-[#B0BEC5] mt-3 sm:mt-4 text-sm sm:text-base lg:text-xl max-w-2xl">
            Professional journey and key projects showcasing expertise across full-stack, Shopify, and AI-driven development.
          </p>
        </motion.div>

        {/* ── Work Experience ── */}
        <motion.div {...fadeUp(0.05)} className="mb-12 sm:mb-14">
          <h3 className="text-lg sm:text-xl font-semibold text-[#B0BEC5] uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-[#4FC3F7]/30 to-transparent" />
            Work Experience
            <span className="h-px flex-1 bg-gradient-to-l from-[#4FC3F7]/30 to-transparent" />
          </h3>
          <div className="relative">
            {workExperience.map((job, i) => (
              <WorkCard key={job.company} job={job} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Key Projects ── */}
        <motion.div {...fadeUp(0.1)}>
          <h3 className="text-lg sm:text-xl font-semibold text-[#B0BEC5] uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-[#4FC3F7]/30 to-transparent" />
            Key Projects
            <span className="h-px flex-1 bg-gradient-to-l from-[#4FC3F7]/30 to-transparent" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {keyProjects.map((p, i) => (
              <ProjectCard key={p.title} proj={p} index={i} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
