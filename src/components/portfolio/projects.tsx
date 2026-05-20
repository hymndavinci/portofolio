'use client'

import { Reveal } from './reveal'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'kasir-pintar',
    title: 'KasirPintar AI',
    description: 'Aplikasi manajemen keuangan untuk UMKM yang ditenagai Google Gemini AI. Catat transaksi, scan struk, dan dapatkan analisa bisnis secara instan. Semua data tersimpan di perangkat — 100% privacy-first.',
    badge: 'AI · Finance',
    live: true,
    tags: ['Next.js', 'TypeScript', 'Google Gemini AI', 'PWA', 'localStorage'],
    href: 'https://kasirpintarai.vercel.app',
    github: 'https://github.com/hymndavinci/Kasir-Pintar',
  },
  {
    id: 'bintang-movies',
    title: 'BintangMovies',
    description: 'Netflix-style streaming web app untuk browsing dan nonton film & serial TV dengan subtitle Indonesia. Didukung TMDB API, multi video player, dan fitur Film Sub Indo via IdlixAPI.',
    badge: 'Streaming · Entertainment',
    live: true,
    tags: ['React', 'TypeScript', 'Vite', 'TMDB API', 'React Router'],
    href: 'https://hymndavinci.web.id',
    github: null,
  },
]

export default function PersonalProjects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="space-y-8">
        <Reveal>
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Projects</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Personal Project</h2>
            <p className="text-[14px] text-[var(--home-muted)]">A focused set of projects with clear details and stable delivery.</p>
          </div>
        </Reveal>

        {projects.length > 0 ? (
          <>
            {/* Featured label row */}
            <Reveal delay={0.05}>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--home-muted)]">Featured</span>
                <span className="text-[10px] text-[var(--home-muted)]">Top picks</span>
              </div>
            </Reveal>

            {/* Project cards */}
            <div className="space-y-6">
              {projects.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition hover:border-white/20">


                    <div className="p-5 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {p.live && (
                          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">Live</span>
                        )}
                        {p.badge && (
                          <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">{p.badge}</span>
                        )}
                      </div>

                      <p className="text-[17px] font-bold text-white">{p.title}</p>
                      <p className="text-[13px] text-[var(--home-muted)]">{p.description}</p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {p.tags.map((tag: string) => (
                          <span key={tag} className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-[var(--home-muted)]">{tag}</span>
                        ))}
                      </div>

                      {p.href && (
                        <div className="pt-2 flex items-center gap-2">
                          <a href={p.href} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-white/20 hover:text-white">
                            Live <ArrowUpRight className="h-3 w-3" />
                          </a>
                          {p.github && (
                            <a href={p.github} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-white/20 hover:text-white">
                              GitHub <ArrowUpRight className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <Reveal delay={0.05}>
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-black/10 py-16 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white/20">
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
              <p className="text-[13px] font-medium text-[var(--home-muted)]">Currently building amazing things...</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
