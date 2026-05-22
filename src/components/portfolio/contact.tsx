'use client'

import { Reveal } from './reveal'
import { ArrowUpRight, MapPin } from 'lucide-react'

const contactLinks = [
  {
    label: 'Email',
    value: 'hymndavinci@gmail.com',
    href: 'mailto:hymndavinci@gmail.com',
  },
  {
    label: 'Telegram',
    value: '@cahay4ngkasa',
    href: 'https://t.me/cahay4ngkasa',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Reveal>
        <div className="mb-2 space-y-2">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Contact</p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="space-y-7">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something clean.
            </h2>

            <p className="max-w-md text-[14px] leading-relaxed text-[var(--home-muted)]">
              Available for web development projects, UI implementation, and collaborative product builds.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">{link.label}</p>
                    <p className="truncate text-[13px] font-medium text-white/80">{link.value}</p>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/35 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70" />
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[12px] text-white/45">
            <span className="inline-flex items-center gap-1.5 font-medium text-white/60">
              <MapPin className="h-3.5 w-3.5" />
              Purbalingga, Indonesia
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
            <span>Open for freelance and collaboration.</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
