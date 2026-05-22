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
    description: 'Writing clear logic and understanding how code executes.',
  },
  {
    id: '05',
    icon: Database,
    title: 'Databases',
    description: 'Designing data models, writing queries, and managing relationships.',
  },
  {
    id: '02',
    icon: HardDrive,
    title: 'Data structures & algorithms',
    description: 'Learning how data is organized and how problems can be solved efficiently.',
  },
  {
    id: '06',
    icon: Terminal,
    title: 'Operating systems',
    description: 'Studying processes, files, memory, and the system layer underneath applications.',
  },
  {
    id: '03',
    icon: Globe,
    title: 'Web systems',
    description: 'Understanding how frontend, backend, APIs, and servers communicate.',
  },
  {
    id: '07',
    icon: Wrench,
    title: 'Git, Linux & tooling',
    description: 'Using developer tools to build, debug, and manage projects with better control.',
  },
  {
    id: '04',
    icon: Layout,
    title: 'Application architecture',
    description: 'Structuring features, data flow, and components so applications stay maintainable.',
  },
  {
    id: '08',
    icon: Lightbulb,
    title: 'Problem solving',
    description: 'Breaking complex ideas into smaller steps that can be tested and improved.',
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
              Learning Path
            </p>
            <p className="text-[14px] text-[var(--home-muted)]">
              Core areas I am building step by step to strengthen my computer science foundation.
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
