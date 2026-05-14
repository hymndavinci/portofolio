'use client'

import { Reveal } from './reveal'
import {
  Code2,
  Database,
  Globe,
  HardDrive,
  Terminal,
  Wrench,
  Layout,
  Lightbulb,
} from 'lucide-react'

const learningItems = [
  {
    id: '01',
    icon: Code2,
    title: 'Programming fundamentals',
    description: 'Writing logic clearly and understanding how code runs.',
  },
  {
    id: '05',
    icon: Database,
    title: 'Databases',
    description: 'Modeling data, writing queries, and managing relationships.',
  },
  {
    id: '02',
    icon: HardDrive,
    title: 'Data structures & algorithms',
    description: 'Learning how data is organized and problems are solved efficiently.',
  },
  {
    id: '06',
    icon: Terminal,
    title: 'Operating systems',
    description: 'Studying processes, files, memory, and the system layer underneath.',
  },
  {
    id: '03',
    icon: Globe,
    title: 'Web systems',
    description: 'Exploring how frontend, backend, APIs, and servers communicate.',
  },
  {
    id: '07',
    icon: Wrench,
    title: 'Git, Linux & tooling',
    description: 'Using developer tools to work, debug, and manage projects better.',
  },
  {
    id: '04',
    icon: Layout,
    title: 'Application architecture',
    description: 'Understanding how app features are structured and connected.',
  },
  {
    id: '08',
    icon: Lightbulb,
    title: 'Problem solving',
    description: 'Breaking complex ideas into smaller steps that can be tested.',
  },
]

export default function Learning() {
  return (
    <section id="learning" className="scroll-mt-24">
      <div className="space-y-8">
        {/* Section header */}
        <Reveal>
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">
              Currently Learning
            </p>
            <p className="text-[14px] text-[var(--home-muted)]">
              Areas I am exploring step by step to understand the bigger picture of computer science.
            </p>
          </div>
        </Reveal>

        {/* 2-column numbered grid */}
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {learningItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="flex items-start gap-4">
                {/* Number + icon column */}
                <div className="flex flex-col items-center gap-1.5 pt-0.5">
                  <span className="text-[10px] font-mono tabular-nums text-[var(--home-muted)]">
                    {item.id}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--home-accent)]/20 bg-[var(--home-accent)]/10 text-[var(--home-accent)]">
                    <item.icon className="h-3.5 w-3.5" />
                  </span>
                </div>
                {/* Text */}
                <div className="space-y-1">
                  <p className="text-[14px] font-bold text-white">{item.title}</p>
                  <p className="text-[13px] leading-relaxed text-[var(--home-muted)]">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
