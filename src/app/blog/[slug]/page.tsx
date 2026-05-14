import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog-data'
import { ArrowLeft, Eye, Calendar, User, Tag, BookOpen } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.title} — Hymn`,
    description: post.tagline,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  const related = getRelatedPosts(post)
  const paragraphs = post.content.split('\n\n').filter(Boolean)

  const storyDetails = [
    { icon: Calendar, label: 'Date',     value: post.date },
    { icon: Eye,      label: 'Views',    value: String(post.views) },
    { icon: User,     label: 'Author',   value: post.author },
    { icon: Tag,      label: 'Category', value: post.category },
  ]

  return (
    <div className="min-h-screen bg-[#000] text-white" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>

      {/* Top bar — matches screenshot exactly */}
      <div className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between px-6 py-3">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white/70"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Journal
          </Link>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-white/30">
            <button className="flex items-center gap-1.5 transition hover:text-white/60">
              <BookOpen className="h-3 w-3" /> Save
            </button>
            <button className="flex items-center gap-1.5 transition hover:text-white/60">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              Copy
            </button>
            <button className="flex items-center gap-1.5 transition hover:text-white/60">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="22"/></svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Main layout — two column like screenshot */}
      <div className="mx-auto max-w-screen-lg px-6 py-12 lg:flex lg:items-start lg:gap-12">

        {/* Left — article */}
        <article className="min-w-0 flex-1">

          {/* Category */}
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-white/35">
            {post.category}
          </p>

          {/* Title */}
          <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          {/* Slug */}
          <div className="mb-5 flex items-center gap-1.5">
            <User className="h-3 w-3 text-white/25" />
            <span className="text-[11px] text-white/30">{post.slug}</span>
          </div>

          {/* Tagline */}
          <p className="mb-6 text-[14px] leading-relaxed text-white/55 border-l-2 border-white/10 pl-4">
            {post.tagline}
          </p>

          {/* Meta row */}
          <div className="mb-12 flex flex-wrap items-center gap-3 text-[11px] text-white/30">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />{post.date}
            </span>
            <span className="text-white/15">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3 w-3" />{post.views}
            </span>
            <span className="text-white/15">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3 w-3" />{post.author}
            </span>
          </div>

          {/* Article content */}
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.9] text-white/70"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Related stories */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Related stories
                </p>
                <span className="text-[11px] text-white/25">{related.length} picks</span>
              </div>
              <div className="space-y-3">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${rel.color}`}
                    >
                      <span className="text-sm font-bold text-white/30">{rel.title.charAt(0)}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">{rel.date}</p>
                      <p className="mt-0.5 text-[14px] font-bold text-white transition group-hover:text-white/80">
                        {rel.title}
                      </p>
                      <p className="mt-0.5 text-[12px] text-white/40 line-clamp-1">{rel.tagline}</p>
                    </div>
                    <ArrowLeft className="h-4 w-4 shrink-0 rotate-180 text-white/15 transition group-hover:text-white/50" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom nav */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/30 transition hover:text-white/60"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Journal
            </Link>
          </div>

          {/* Footer quote */}
          <p className="mt-10 text-center text-[11px] italic text-white/15">
            &ldquo;Every story is part of life&apos;s journey&rdquo;
          </p>
        </article>

        {/* Right — Story details panel (desktop only) */}
        <aside className="hidden lg:block lg:w-[220px] lg:shrink-0 sticky top-20 self-start">
          <div className="rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Story details
              </p>
            </div>
            <div className="divide-y divide-white/[0.07]">
              {storyDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-between gap-2 px-4 py-3">
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-white/35">
                    <Icon className="h-3 w-3" />
                    {label}
                  </span>
                  <span className="text-[11px] font-medium text-white/60 text-right tabular-nums">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}
