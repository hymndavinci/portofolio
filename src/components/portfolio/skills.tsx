'use client'

import { Reveal } from './reveal'

interface Skill {
  name: string
  color: string
  icon: string
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
      { name: 'HTML5', color: '#E34F26', icon: 'HTML' },
      { name: 'CSS3', color: '#1572B6', icon: 'CSS' },
      { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
      { name: 'TypeScript', color: '#3178C6', icon: 'TS' },
      { name: 'PHP', color: '#777BB4', icon: 'PHP' },
      { name: 'Python', color: '#3776AB', icon: 'PY' },
      { name: 'C', color: '#00599C', icon: 'C' },
    ],
  },
  {
    title: 'Tech Stack',
    subtitle: 'Frameworks & core libraries',
    skills: [
      { name: 'React', color: '#61DAFB', icon: 'R' },
      { name: 'Next.js', color: '#111827', icon: 'N' },
      { name: 'Tailwind CSS', color: '#06B6D4', icon: 'TW' },
      { name: 'Prisma', color: '#2D3748', icon: 'PR' },
      { name: 'Laravel', color: '#FF2D20', icon: 'LA' },
      { name: 'Node.js', color: '#339933', icon: 'ND' },
    ],
  },
  {
    title: 'Database',
    subtitle: 'Data layer services',
    skills: [
      { name: 'MySQL', color: '#2563EB', icon: 'SQL' },
      { name: 'Supabase', color: '#059669', icon: 'SB' },
    ],
  },
]

function getBadgeTextColor(color: string) {
  return ['#F7DF1E', '#61DAFB', '#06B6D4'].includes(color) ? '#020617' : '#ffffff'
}

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
                <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
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

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group relative">
                      <button
                        type="button"
                        aria-label={skill.name}
                        className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[color:var(--home-border,rgba(255,255,255,0.10))] bg-[var(--home-surface,rgba(255,255,255,0.025))] transition hover:-translate-y-0.5 hover:border-[color:var(--home-accent)] hover:bg-[var(--home-surface-soft,rgba(255,255,255,0.045))]"
                      >
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-xl text-[11px] font-black tracking-tight shadow-sm"
                          style={{
                            backgroundColor: skill.color,
                            color: getBadgeTextColor(skill.color),
                          }}
                        >
                          {skill.icon}
                        </span>
                      </button>

                      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-20 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[color:var(--home-border-strong,rgba(255,255,255,0.15))] bg-[var(--home-bg)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--home-ink)] opacity-0 shadow-lg shadow-black/10 transition group-hover:opacity-100">
                        {skill.name}
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
