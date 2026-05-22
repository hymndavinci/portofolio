import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Target, Wrench } from 'lucide-react'
import { getProjectBySlug, projects } from '@/lib/project-data'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} — Project`,
    description: project.tagline,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return notFound()

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
      <div className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/#projects"
            className="flex min-w-0 items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40 transition hover:text-white/70 sm:text-[11px] sm:tracking-[0.25em]"
          >
            <ArrowLeft className="h-3 w-3 shrink-0" />
            <span className="truncate">Back to Projects</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">Project Detail</span>
        </div>
      </div>

      <main className="mx-auto max-w-screen-lg px-4 py-10 sm:px-6 sm:py-14">
        <section className="border-b border-white/10 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className={`flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] ${project.status === 'Live' ? 'text-emerald-400' : 'text-white/35'}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${project.status === 'Live' ? 'bg-emerald-400' : 'bg-white/25'}`} />
              {project.status}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">{project.badge}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-[16px]">
            {project.tagline}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-white/65 transition hover:border-white/30 hover:text-white"
              >
                Live Site <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-white/65 transition hover:border-white/30 hover:text-white"
              >
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </section>

        <section className="grid gap-10 py-10 lg:grid-cols-[1fr_260px] lg:items-start">
          <article className="space-y-10">
            <DetailBlock icon={Layers} title="Overview" body={project.overview} />

            <div className="grid gap-5 sm:grid-cols-2">
              <DetailBlock icon={Target} title="Problem" body={project.problem} />
              <DetailBlock icon={Wrench} title="Solution" body={project.solution} />
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">Key Features</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" />
                    <span className="text-[13px] leading-relaxed text-white/65">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <DetailBlock icon={Wrench} title="My Role" body={project.role} />
          </article>

          <aside className="rounded-2xl border border-white/10 bg-black/20 p-5 lg:sticky lg:top-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/55">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

function DetailBlock({ icon: Icon, title, body }: { icon: typeof Layers; title: string; body: string }) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-white/35" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">{title}</p>
      </div>
      <p className="max-w-2xl text-[14px] leading-[1.85] text-white/65">{body}</p>
    </section>
  )
}
