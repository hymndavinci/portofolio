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
import https from 'https'

export const dynamic = 'force-dynamic'

const DISCORD_USER_ID = '443335216833101825'

async function getDiscordAvatarSrc(): Promise<string> {
  try {
    const data = await new Promise<{ success: boolean; data: { discord_user: { id: string; avatar: string } } }>(
      (resolve, reject) => {
        const req = https.request(
          {
            hostname: 'api.lanyard.rest',
            path: `/v1/users/${DISCORD_USER_ID}`,
            method: 'GET',
            rejectUnauthorized: false,
          },
          (res) => {
            let raw = ''
            res.on('data', (chunk) => { raw += chunk })
            res.on('end', () => {
              try { resolve(JSON.parse(raw)) }
              catch (e) { reject(e) }
            })
          }
        )
        req.on('error', reject)
        req.end()
      }
    )
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
              <Learning />
              <Skills />
              <Experience />
              <Certificates />
              <Projects />
              <Blog />
              <Contact />
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
