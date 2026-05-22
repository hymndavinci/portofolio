'use client'

import { Reveal } from './reveal'

interface Skill {
  name: string
  short: string
  color: string
  darkText?: boolean
}

interface SkillCategory {
  title: string
  subtitle: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'HTML5', short: 'HTML', color: '#E34F26' },
      { name: 'CSS3', short: 'CSS', color: '#1572B6' },
      { name: 'JavaScript', short: 'JS', color: '#F7DF1E', darkText: true },
      { name: 'TypeScript', short: 'TS', color: '#3178C6' },
      { name: 'PHP', short: 'PHP', color: '#777BB4' },
      { name: 'Python', short: 'PY', color: '#3776AB' },
      { name: 'C', short: 'C', color: '#00599C' },
    ],
  },
  {
    title: 'Tech Stack',
    subtitle: 'Frameworks & core libraries',
    skills: [
      { name: 'React', short: 'R', color: '#61DAFB', darkText: true },
      { name: 'Next.js', short: 'N', color: '#0f172a' },
      { name: 'Tailwind CSS', short: 'TW', color: '#06B6D4', darkText: true },
      { name: 'Prisma', short: 'PR', color: '#2D3748' },
      { name: 'Laravel', short: 'LA', color: '#FF2D20' },
      { name: 'Node.js', short: 'ND', color: '#339933' },
    ],
  },
  {
    title: 'Database',
    subtitle: 'Data layer services',
    skills: [
      { name: 'MySQL', short: 'SQL', color: '#2563eb' },
      { name: 'Supabase', short: 'SB', color: '#059669' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="space-y-8 border-t border-[color:var(--home-border,rgba(255,255,255,0.10))] pt-8">
        <Reveal>
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Skills</p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--home-ink)] sm:text-4xl">
              Languages and tools
            </h2>
            <p className="max-w-3xl text-[14px] leading-relaxed text-[var(--home-muted)]">
              A focused set of technologies organized by how I use them across the projects I build.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.04}>
              <div className="border-t border-[color:var(--home-border,rgba(255,255,255,0.10))] pt-6">
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--home-muted)]">
                      {category.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--home-muted)]">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--home-muted)] opacity-80">
                    {category.skills.length} tools
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group rounded-2xl border border-[color:var(--home-border,rgba(255,255,255,0.10))] bg-[var(--home-surface,rgba(255,255,255,0.025))] p-4 transition hover:border-[color:var(--home-accent)] hover:bg-[var(--home-surface-soft,rgba(255,255,255,0.045))]"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[12px] font-black tracking-tight shadow-sm"
                          style={{
                            backgroundColor: skill.color,
                            color: skill.darkText ? '#020617' : '#ffffff',
                          }}
                        >
                          {skill.short}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-[13px] font-semibold text-[var(--home-ink)]">
                            {skill.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[var(--home-muted)]">
                            {category.title === 'Database' ? 'Data' : category.title === 'Languages' ? 'Language' : 'Stack'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
