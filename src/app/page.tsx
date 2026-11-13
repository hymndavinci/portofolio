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
import PortfolioRating from '@/components/portfolio/portfolio-rating'
import Sidebar, { MobileSidebar } from '@/components/portfolio/sidebar'
import Footer from '@/components/portfolio/footer'
import MotionMain from '@/components/portfolio/motion-main'

const DISCORD_USER_ID = '1528259806199152772'

async function getDiscordAvatarSrc(): Promise<string> {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`, {
      // Cache 1 jam: halaman bisa static (ISR) dan tidak fetch Lanyard tiap request
      next: { revalidate: 3600 },
    })
    if (!res.ok) return '/profile.png'
    const data = (await res.json()) as {
      success: boolean
      data: { discord_user: { id: string; avatar: string | null } }
    }
    const user = data?.data?.discord_user
    if (user?.avatar) {
      const ext = user.avatar.startsWith('a_') ? 'gif' : 'png'
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=512`
    }
  } catch {
    // fallback ke profile.png jika fetch gagal
  }
  return '/profile.png'
}

export default async function Home() {
  const avatarSrc = await getDiscordAvatarSrc()

  return (
    <div className="home-portfolio min-h-screen bg-[var(--home-bg)] text-[var(--home-ink)]">
      <div className="relative isolate">
        <Navbar />

        <MotionMain>
          <Hero avatarSrc={avatarSrc} />

          {/* Two-column layout */}
          <div className="mt-20 lg:flex lg:items-start lg:gap-10">
            {/* Main content */}
            <div className="space-y-24 lg:min-w-0 lg:flex-[1_1_0%]">
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Learning />
              <Certificates />
              <Blog />
              <Contact />
              <PortfolioRating />
            </div>

            {/* Desktop sidebar */}
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
