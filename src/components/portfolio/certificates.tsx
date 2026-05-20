'use client'

import { Reveal } from './reveal'
import { Award } from 'lucide-react'

const certs = [
  {
    id: '01',
    title: '#JuaraVibeCoding',
    issuer: 'Google',
    year: '2025',
    description: 'Kompetisi coding berbasis AI yang diselenggarakan oleh Google Indonesia.',
    status: 'Completed',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <div className="space-y-8">
        <Reveal>
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Certificates</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Personal Certificate</h2>
            <p className="text-[14px] text-[var(--home-muted)]">Formal learning that supports my daily build process.</p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {certs.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.08}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[var(--home-accent)]">
                  <Award className="h-3.5 w-3.5" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--home-muted)]">Certificate</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-mono text-[var(--home-muted)]">{cert.id}</span>
                  <div className="space-y-1">
                    <p className="text-[15px] font-bold text-white">{cert.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--home-muted)]">
                      {cert.issuer} | {cert.year}
                    </p>
                    <p className="text-[13px] text-[var(--home-muted)]">{cert.description}</p>
                    <span className="inline-block rounded border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-[var(--home-muted)]">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
