'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/portfolio/navbar'
import Hero from '@/components/portfolio/hero'
import About from '@/components/portfolio/about'
import Learning from '@/components/portfolio/learning'
import Skills from '@/components/portfolio/skills'
import Experience from '@/components/portfolio/experience'
import Certificates from '@/components/portfolio/certificates'
import Projects from '@/components/portfolio/projects'
import Blog from '@/components/portfolio/blog'
import Contact from '@/components/portfolio/contact'
import Sidebar, { MobileSidebar } from '@/components/portfolio/sidebar'
import Footer from '@/components/portfolio/footer'

export default function Home() {
  return (
    <div className="home-portfolio min-h-screen bg-[var(--home-bg)] text-[var(--home-ink)]">
      <div className="relative isolate">
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 mx-auto w-full max-w-screen-xl px-4 pb-20 pt-24 sm:px-6 lg:px-10"
        >
          <Hero />

          {/* Two-column layout */}
          <div className="mt-20 lg:flex lg:items-start lg:gap-10">
            {/* Main content */}
            <div className="space-y-24 lg:min-w-0 lg:flex-[1_1_0%]">
              <About />
              <Learning />
              <Skills />
              <Experience />
              <Certificates />
              <Projects />
              <Blog />
              <Contact />
            </div>

            {/* Desktop sticky sidebar */}
            <Sidebar />
          </div>

          {/* Mobile sidebar */}
          <div className="mt-8">
            <MobileSidebar />
          </div>

          <Footer />
        </motion.main>
      </div>
    </div>
  )
}
