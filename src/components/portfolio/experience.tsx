'use client'

import { Reveal } from './reveal'
import { Building2 } from 'lucide-react'

const experiences = [
  {
    id: '01',
    role: 'Community Owner',
    status: 'Current',
    company: 'Dahayu',
    period: '2024 - now',
    description: 'Founded and managed Dahayu Community with 400+ active members. Led moderation, operations, community growth, events, and development coordination to keep the environment active and organized.',
  },
  {
    id: '02',
    role: 'Freelance Developer',
    status: 'Ended',
    company: 'Discord Client',
    period: '2026',
    description: 'Built a custom Discord-based project for a client by translating requirements into functional features, managing the development process independently, and delivering the requested result on time.',
  },
  {
    id: '03',
    role: 'Website Developer',
    status: 'Current',
    company: 'Kh1ev Community',
    period: '2024 - now',
    description: 'Developing the official Kh1ev Community website with a focus on frontend implementation, responsive layout, and clear user experience.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="space-y-10">
        <Reveal>
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Experience</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Practical Work</h2>
            <p className="text-[14px] text-[var(--home-muted)]">Community, freelance, and website work shaped by clear execution and steady collaboration.</p>
          </div>
        </Reveal>

        <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-[42px] before:w-[1px] before:bg-white/5">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <div className="relative flex gap-6 sm:gap-8">
                <div className="flex w-[46px] shrink-0 items-start justify-between pt-1">
                  <span className="text-[11px] uppercase tracking-widest text-[var(--home-muted)]">{exp.id}</span>
                  <span className="relative z-10 mt-1 h-2 w-2 rounded-full bg-[#EF4444] shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
                </div>
                <div className="flex-1 space-y-3 pb-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[17px] font-bold text-white">{exp.role}</h3>
                    <span className="rounded-full border border-white/10 bg-transparent px-3 py-1 text-[10px] font-medium tracking-wider text-[var(--home-muted)]">{exp.status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-[var(--home-muted)]">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{exp.company} | {exp.period}</span>
                  </div>
                  <p className="max-w-2xl text-[14px] leading-[1.6] text-[var(--home-muted)]">{exp.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
