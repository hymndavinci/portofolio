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
    id: 'hymn-plus',
    title: 'Hymn+',
    description: 'Dashboard personal untuk mengelola workflow Discord, status akun, music system, AI chat, screenshot utility, dan worker tools dalam satu panel yang ringan dan terstruktur.',
    badge: 'Dashboard · Automation',
    live: true,
    tags: ['Node.js', 'Express', 'EJS', 'Lavalink', 'NVIDIA NIM'],
    href: null,
    github: null,
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected Work</h2>
            <p className="text-[14px] text-[var(--home-muted)]">Focused builds with real features, clear interfaces, and stable delivery.</p>
          </div>
        </Reveal>

        {projects.length > 0 ? (
          <>
            {/* Featured label row */}
            <Reveal delay={0.05}>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--home-muted)]">Featured</span>
                <span className="text-[10px] text-[var(--home-muted)]">{projects.length} selected projects</span>
              </div>
            </Reveal>

            {/* Project list */}
            <div className="space-y-0">
              {projects.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.08}>
                  <div className="group flex items-start gap-6 rounded-2xl -mx-6 p-6 py-7 transition-all duration-200 hover:bg-white/[0.02]">

                    {/* Number */}
                    <span className="mt-1 shrink-0 font-mono text-[11px] tabular-nums text-white/20 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Content */}
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {p.live && (
                          <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </span>
                        )}
                        {p.badge && (
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">{p.badge}</span>
                        )}
                      </div>

                      <h3 className="text-[20px] font-bold leading-tight tracking-tight text-white transition group-hover:text-white/90 sm:text-[24px]">
                        {p.title}
                      </h3>

                      <p className="text-[12px] leading-relaxed text-white/40 max-w-lg">
                        {p.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap items-center gap-x-0 pt-1">
                        {p.tags.map((tag: string, ti: number) => (
                          <span key={tag} className="text-[10px] text-white/25">
                            {tag}
                            {ti < p.tags.length - 1 && <span className="mx-2 text-white/15">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 flex-col items-end gap-2 pt-1">
                      {p.href && (
                        <a href={p.href} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-1.5 text-[11px] font-medium text-white/50 transition hover:border-white/30 hover:text-white/80">
                          Live <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-1.5 text-[11px] font-medium text-white/50 transition hover:border-white/30 hover:text-white/80">
                          GitHub <ArrowUpRight className="h-3 w-3" />
                        </a>
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
