'use client'

import { Reveal, SectionHeading } from './reveal'

interface Skill {
  name: string
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
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    ],
  },
  {
    title: 'Tech Stack',
    subtitle: 'Frameworks & core libraries',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/2D3748' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    title: 'Database',
    subtitle: 'Data layer services',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading
        kicker="Skills"
        title="Languages and tools"
        description="A focused set of technologies organized by how I use them across the projects I build."
      />

      <div className="mt-10 space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <Reveal key={category.title} delay={categoryIndex * 0.04}>
            <div className="border-t border-[color:var(--home-border,rgba(255,255,255,0.10))] pt-6">
              <div className="mb-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">
                  {category.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--home-muted)]">
                  {category.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex h-11 w-11 items-center justify-center transition hover:-translate-y-0.5"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                      loading="lazy"
                      className="h-8 w-8 object-contain drop-shadow-sm"
                    />
                    <span className="sr-only">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
