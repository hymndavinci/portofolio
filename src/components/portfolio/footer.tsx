'use client'

import { Reveal } from './reveal'

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="py-6 text-center text-sm text-[var(--home-muted)]">
            Copyright {new Date().getFullYear()} HYMN. All rights reserved.
          </div>
        </Reveal>
      </div>

      {/* Huge name */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-[clamp(6rem,24vw,18rem)] font-sans font-bold uppercase tracking-[0.12em] leading-none text-transparent" style={{ WebkitTextStroke: '2px var(--hymn-stroke)' }}>
            HYMN
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
