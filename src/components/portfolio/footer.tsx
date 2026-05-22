'use client'

import { Reveal } from './reveal'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-2 py-6 text-center text-[12px] text-[var(--home-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <span>Copyright {new Date().getFullYear()} HYMN. All rights reserved.</span>
            <span className="text-white/30">Built with Next.js, TypeScript, and Tailwind CSS.</span>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-6 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[clamp(5rem,22vw,16rem)] font-sans font-bold uppercase leading-none tracking-[0.12em] text-transparent" style={{ WebkitTextStroke: '2px var(--hymn-stroke)' }}>
            HYMN
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
