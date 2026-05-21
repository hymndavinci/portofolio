import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { db } from '@/lib/db'
import { ArrowLeft, Eye, Calendar, Feather } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Journal — Hymn',
  description: 'Thoughts, reflections, and stories.',
}

export default async function BlogListPage() {
  // Fetch semua view counts dari DB dalam 1 query
  const allViews = await db.postView.findMany()
  const viewMap = Object.fromEntries(allViews.map((v) => [v.slug, v.views]))
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>

      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white/70"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Portfolio
          </Link>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/25">Journal</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">

        {/* Heading */}
        <div className="mb-12 space-y-2">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">Writing</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Journal</h1>
          <p className="text-sm text-white/40">Every story is part of life&apos;s journey.</p>
        </div>

        {/* Post list */}
        <div className="space-y-px">
          <div className="mb-4 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Stories</span>
            <span className="text-[10px] text-white/30">{blogPosts.length} picks</span>
          </div>

          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-4 border-b border-white/[0.07] py-5 transition hover:border-white/20"
            >
              {/* Thumbnail */}
              <div
                className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${post.color}`}
              >
                <Feather className="h-5 w-5 text-white/40" />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">{post.category}</p>
                    <p className="mt-0.5 text-[16px] font-bold text-white transition group-hover:text-white/80">
                      {post.title}
                    </p>
                  </div>
                  <ArrowLeft className="mt-1 h-3.5 w-3.5 shrink-0 rotate-180 text-white/15 transition group-hover:text-white/50" />
                </div>
                <p className="text-[12px] text-white/40 line-clamp-1">{post.tagline}</p>
                <div className="flex items-center gap-3 pt-0.5 text-[11px] text-white/25">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />{post.date}
                  </span>
                  <span>&bull;</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="h-3 w-3" />
                    {(viewMap[post.slug] ?? post.views).toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-16 text-center text-[11px] italic text-white/20">
          &ldquo;Every story is part of life&apos;s journey&rdquo;
        </p>
      </div>
    </div>
  )
}
