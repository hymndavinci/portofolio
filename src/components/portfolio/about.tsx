'use client'

import { Reveal, SectionHeading } from './reveal'
import {
  Code,
  Gamepad2,
  Music,
  Palette,
  Star,
  Cpu,
  Hammer,
  ScanEye,
} from 'lucide-react'

const principles = [
  {
    icon: Cpu,
    title: 'Understand the system',
    description: 'Learn how each part works, not just how to use it.',
  },
  {
    icon: Hammer,
    title: 'Build to learn',
    description: 'Turn concepts into small projects and real practice.',
  },
  {
    icon: ScanEye,
    title: 'Keep it clear',
    description: 'Make the result simple, readable, and useful.',
  },
]

const interests = [
  { label: 'Programming', icon: Code },
  { label: 'Games', icon: Gamepad2 },
  { label: 'Music', icon: Music },
  { label: 'Art', icon: Palette },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="space-y-10">
        <SectionHeading
          tag="About"
          title="Focused on Consistency"
          description="I am Bintang, I enjoy building useful and meaningful solutions while continuously learning and improving. I focus on keeping things simple, structured, and easy to understand whether it's software, systems, or ideas."
        />

        {/* Principles grid — 3 columns like Phyon */}
        <div className="grid gap-6 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="space-y-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--home-accent)]/20 bg-[var(--home-accent)]/10 text-[var(--home-accent)]">
                  <p.icon className="h-4 w-4" />
                </span>
                <p className="text-[15px] font-bold text-white">{p.title}</p>
                <p className="text-[13px] leading-relaxed text-[var(--home-muted)]">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interests */}
        <Reveal delay={0.2}>
          <div className="space-y-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[var(--home-accent)]" />
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--home-muted)]">
                Interests
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-[var(--home-muted)] transition hover:border-white/20"
                >
                  <span className="text-[var(--home-accent)]">
                    <interest.icon className="h-4 w-4" />
                  </span>
                  {interest.label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
