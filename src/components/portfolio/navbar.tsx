'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanyard } from '@/hooks/use-lanyard'
import { useTheme } from '@/hooks/use-theme'
import { Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Connect', href: '#contact' },
]


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { presence, mounted } = useLanyard("443335216833101825")
  const { isLight, toggle } = useTheme()

  const discordUser = presence?.data?.discord_user
  const avatarSrc =
    discordUser?.avatar
      ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.${discordUser.avatar.startsWith('a_') ? 'gif' : 'png'}?size=128`
      : '/profile.png'

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-40 px-4 pt-5"
      >
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
          {/* Logo pill */}
          <a
            href="#top"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/20"
          >
            <div className="relative hidden h-7 w-7 overflow-hidden rounded-full border border-white/15 bg-white/[0.06] sm:block">
              <Image
                src={avatarSrc}
                alt="Navbar avatar"
                fill
                className="object-cover"
                sizes="28px"
                unoptimized={avatarSrc.endsWith('.gif')}
              />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
              HYMN
            </span>
          </a>

          {/* Desktop nav links (tengah/kanan) — muncul di lg ke atas */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/50 rounded-full transition hover:text-white hover:bg-white/[0.06]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/20 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </span>
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/20 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                  <path d="M4 6h16" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden={!menuOpen}
            className="fixed inset-0 z-50 flex items-center bg-black/95 backdrop-blur-sm"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur transition hover:border-white/20 hover:text-white"
              aria-label="Close menu"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </span>
            </button>

            <ul className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-6 sm:gap-5 sm:px-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block w-fit font-sans font-semibold leading-[0.95] tracking-tight transition text-[clamp(2.15rem,6vw,4.5rem)] text-white hover:text-white/55"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
