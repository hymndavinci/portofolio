'use client'

import { Reveal } from './reveal'
import TechMarquee from './tech-marquee'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="py-5 text-center text-[11px] text-[var(--home-muted)]">
            Copyright {new Date().getFullYear()} HYMN. All rights reserved.
          </div>
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-3 pt-2 sm:px-6 lg:px-8">
        <Reveal>
          <TechMarquee />
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-8 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[clamp(5.5rem,23vw,17rem)] font-sans font-bold uppercase tracking-[0.1em] leading-none text-transparent opacity-90" style={{ WebkitTextStroke: '1.6px var(--hymn-stroke)' }}>
            HYMN
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
