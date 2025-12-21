import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { motion } from 'framer-motion'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Set up PDF worker - using the recommended import method
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setLoading(false)
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1)
  }

  const goToNextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1)
  }

  return (
    <section id="resume" className="w-full py-20 px-4 sm:px-6 text-white" style={{ fontFamily: 'Space Grotesk' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:text-left"
        >
          <div className="inline-block">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#4FC3F7] to-[#81D4FA] bg-clip-text text-transparent drop-shadow-[0_0_20px_#4FC3F7]/20">
              Resume
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#4FC3F7] to-transparent mt-4"></div>
          </div>
          <p className="text-[#B0BEC5] mt-4 text-lg max-w-2xl">
            Download or view my professional resume.
          </p>
        </motion.div>

        {/* PDF Viewer Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="border border-[#B0BEC5]/30 bg-gradient-to-br from-slate-900/40 to-slate-950/60 rounded-2xl p-8 backdrop-blur-sm">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-[#4FC3F7] via-[#81D4FA] to-transparent rounded-t-2xl"></div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={goToPreviousPage}
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 bg-[#4FC3F7]/20 hover:bg-[#4FC3F7]/30 disabled:opacity-50 disabled:cursor-not-allowed text-[#4FC3F7] rounded-lg transition-all duration-200 font-semibold"
                >
                  ← Previous
                </button>
                <span className="text-[#B0BEC5] font-semibold">
                  Page {pageNumber} of {numPages || '...'}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  className="px-4 py-2 bg-[#4FC3F7]/20 hover:bg-[#4FC3F7]/30 disabled:opacity-50 disabled:cursor-not-allowed text-[#4FC3F7] rounded-lg transition-all duration-200 font-semibold"
                >
                  Next →
                </button>
              </div>

              <a
                href="/Resume.pdf"
                download="Hardik_Biyani_Resume.pdf"
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#4FC3F7] to-[#81D4FA] hover:from-[#81D4FA] hover:to-[#4FC3F7] text-slate-950 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="bg-slate-950/50 rounded-xl p-6 overflow-auto max-h-[700px] flex justify-center">
              {loading && (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4FC3F7]"></div>
                    <p className="text-[#B0BEC5] mt-4">Loading resume...</p>
                  </div>
                </div>
              )}
              <Document
                file="/Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<span className="text-[#B0BEC5]">Loading...</span>}
                error={<span className="text-red-400">Failed to load PDF. Please try downloading instead.</span>}
              >
                <Page pageNumber={pageNumber} width={450} />
              </Document>
            </div>

            {/* Footer Info */}
            <div className="mt-6 pt-6 border-t border-[#B0BEC5]/20 text-center text-sm text-[#B0BEC5]">
              <p>Click the buttons above to navigate through pages or download the full PDF</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
