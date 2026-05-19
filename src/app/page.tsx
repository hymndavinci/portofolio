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
import MotionMain from '@/components/portfolio/motion-main'

async function getLanyardData(userId: string) {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
      next: { revalidate: 60 } // Cache selama 60 detik
    })
    if (!res.ok) return null
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch Lanyard data on server:', error)
    return null
  }
}

export default async function Home() {
  const initialPresence = await getLanyardData("443335216833101825")

  return (
    <div className="home-portfolio min-h-screen bg-[var(--home-bg)] text-[var(--home-ink)]">
      <div className="relative isolate">
        <Navbar initialPresence={initialPresence} />

        <MotionMain>
          <Hero initialPresence={initialPresence} />

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
        </MotionMain>
      </div>
    </div>
  )
}
