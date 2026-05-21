'use client'

import { Reveal } from './reveal'
import { ArrowUpRight, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Reveal>
        <div className="space-y-2 mb-2">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Contact</p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s talk
          </h2>

          <p className="text-[14px] text-[var(--home-muted)] max-w-sm">
            Open for projects, collabs, or just a good conversation. Drop me a line anytime.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hymndavinci@gmail.com"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-[13px] font-medium text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
            >
              hymndavinci@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://t.me/cahay4ngkasa"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-[13px] font-medium text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
            >
              Telegram
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <span className="flex items-center gap-1.5 text-[13px] font-medium text-white/60">
            <MapPin className="h-3.5 w-3.5" />
            Purbalingga, Indonesia
          </span>
        </div>
      </Reveal>
    </section>
  )
}
