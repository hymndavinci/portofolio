'use client'

import { Reveal } from './reveal'
import TechMarquee from './tech-marquee'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="py-6 text-center text-sm text-[var(--home-muted)]">
            Copyright {new Date().getFullYear()} HYMN. All rights reserved.
          </div>
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <Reveal>
          <TechMarquee />
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-6 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[clamp(6rem,24vw,18rem)] font-sans font-bold uppercase tracking-[0.12em] leading-none text-transparent" style={{ WebkitTextStroke: '2px var(--hymn-stroke)' }}>
            HYMN
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
