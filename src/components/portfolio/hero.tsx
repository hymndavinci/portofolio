'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Reveal } from './reveal'
import DiscordPresence from './discord-presence'
import { useLanyard } from '@/hooks/use-lanyard'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bintankdisini',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@hymndavinci',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5" aria-hidden="true">
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/dgmK9F2tvc',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="h-5 w-5" aria-hidden="true">
        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c35.713,16.5,74.146,25.22,112.585,25.22s76.871-8.72,112.584-25.22a1.819,1.819,0,0,1,1.9.256c2.943,2.426,6.027,4.828,9.109,7.137a1.885,1.885,0,0,1-.185,3.126,321.173,321.173,0,0,1-45.868,21.853,1.86,1.86,0,0,0-1.019,2.588,348.2,348.2,0,0,0,30.038,48.84,1.9,1.9,0,0,0,2.063.676A487.666,487.666,0,0,0,611.57,405.729a2.016,2.016,0,0,0,.765-1.375C622.854,284.141,595.6,173.2,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
      </svg>
    ),
  },
]

const statusColors: Record<string, string> = {
  online: 'bg-emerald-500',
  idle: 'bg-amber-400',
  dnd: 'bg-red-500',
  offline: 'bg-zinc-500',
}

function HeroAvatar({ src, status, mounted }: { src: string; status: string; mounted: boolean }) {
  const dotColor = mounted ? statusColors[status] || statusColors.offline : statusColors.offline

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:mx-0"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full border-[3px] border-transparent border-l-red-500 border-t-red-500 rotate-[-16deg]" />
      <span className="pointer-events-none absolute inset-[6px] rounded-full border-[3px] border-transparent border-r-red-500 border-b-red-400 rotate-[22deg]" />
      <span className="pointer-events-none absolute inset-[-5px] rounded-full border border-transparent border-l-red-400/70 border-t-red-400/70 rotate-[-34deg]" />
      <span className="pointer-events-none absolute inset-[14px] rounded-full bg-red-500/10 blur-2xl" />

      <div className="absolute inset-[18px] overflow-hidden rounded-full border border-[color:var(--home-border-strong,rgba(255,255,255,0.15))] bg-[var(--home-soft)] shadow-[0_24px_70px_rgba(239,68,68,0.18)]">
        <Image
          src={src}
          alt="hymndavinci profile photo"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 220px, 260px"
          priority
          unoptimized
        />
      </div>

      <div className="absolute bottom-4 left-1 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[var(--home-bg)] bg-[var(--home-surface)] text-2xl font-black leading-none text-[var(--home-ink)] shadow-lg shadow-black/15">
        !
      </div>

      <div className="absolute bottom-6 right-2 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[var(--home-bg)] bg-violet-600 text-white shadow-lg shadow-violet-500/25">
        <span className="ml-0.5 text-sm font-black">▶</span>
      </div>

      <div className="absolute right-5 top-6 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[var(--home-bg)] bg-red-500 text-white shadow-lg shadow-red-500/25">
        <span className="text-lg font-black leading-none">✦</span>
      </div>

      <div className={`absolute left-[62%] top-[22%] h-4 w-4 rounded-full border-[3px] border-[var(--home-bg)] ${dotColor} shadow-sm`} />
    </motion.div>
  )
}

export default function Hero({ avatarSrc }: { avatarSrc: string }) {
  const { presence, mounted } = useLanyard("443335216833101825")
  const discordStatus = presence?.data?.discord_status || 'offline'

  const discordUser = presence?.data?.discord_user
  const liveAvatarSrc =
    mounted && discordUser?.avatar
      ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.${discordUser.avatar.startsWith('a_') ? 'gif' : 'png'}?size=512`
      : avatarSrc

  return (
    <section
      id="top"
      className="grid gap-10 pb-14 pt-6 lg:grid-cols-[280px_1fr] lg:items-center"
    >
      <HeroAvatar src={liveAvatarSrc} status={discordStatus} mounted={mounted} />

      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--home-muted)]">
              Portfolio
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-sans font-bold leading-tight tracking-tight text-[var(--home-ink)] sm:text-5xl lg:text-[4.5rem]">
              Bintang Kurniawan
            </h1>
          </Reveal>
          <div className="space-y-3 pt-2">
            <Reveal delay={0.1}>
              <p className="text-[15px] font-medium tracking-wide text-[var(--home-ink)] opacity-90">
                Web developer focused on modern interfaces and practical user experiences.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--home-muted)]">
                I build clean, responsive web apps with stable functionality, thoughtful details, and real-world usability.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--home-border)] bg-[var(--home-surface)] text-[var(--home-muted)] shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition hover:border-[color:var(--home-accent)] hover:bg-[var(--home-surface-soft)] hover:text-[var(--home-ink)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <DiscordPresence presence={presence} mounted={mounted} />
      </motion.div>
    </section>
  )
}
