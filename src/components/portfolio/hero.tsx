'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Reveal } from './reveal'
import DiscordPresence from './discord-presence'
import { useLanyard } from '@/hooks/use-lanyard'

const ANGRY_DECORATION_SRC = 'https://raw.githubusercontent.com/Hayanaga/SillyTavern-AvatarDecorations-CSS/main/dc-decorations/1_Angry.png'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bintankdisini',
    icon: 'https://cdn.simpleicons.org/instagram/111827',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@hymndavinci',
    icon: 'https://cdn.simpleicons.org/tiktok/111827',
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/dgmK9F2tvc',
    icon: 'https://cdn.simpleicons.org/discord/111827',
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
      <div className="absolute inset-[26px] overflow-hidden rounded-full border border-[color:var(--home-border-strong,rgba(255,255,255,0.15))] bg-[var(--home-soft)] shadow-[0_24px_70px_rgba(239,68,68,0.12)]">
        <Image
          src={src}
          alt="hymndavinci profile photo"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 210px, 250px"
          priority
          unoptimized
        />
      </div>

      <img
        src={ANGRY_DECORATION_SRC}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain select-none"
        draggable={false}
      />

      <div className={`absolute bottom-11 right-9 z-20 h-4 w-4 rounded-full border-[3px] border-[var(--home-bg)] ${dotColor} shadow-sm`} />
    </motion.div>
  )
}

export default function Hero({ avatarSrc }: { avatarSrc: string }) {
  const { presence, mounted } = useLanyard('443335216833101825')
  const discordStatus = presence?.data?.discord_status || 'offline'
  const discordUser = presence?.data?.discord_user
  const liveAvatarSrc =
    mounted && discordUser?.avatar
      ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.${discordUser.avatar.startsWith('a_') ? 'gif' : 'png'}?size=512`
      : avatarSrc

  return (
    <section id="top" className="grid gap-10 pb-14 pt-6 lg:grid-cols-[280px_1fr] lg:items-center">
      <HeroAvatar src={liveAvatarSrc} status={discordStatus} mounted={mounted} />

      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--home-muted)]">Portfolio</p>
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--home-border)] bg-white/70 text-[var(--home-ink)] shadow-[0_18px_40px_rgba(0,0,0,0.10)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[color:var(--home-accent)] hover:bg-white/90 dark:bg-white/[0.06] dark:hover:bg-white/[0.10]"
                >
                  <img src={social.icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain opacity-90" draggable={false} />
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
