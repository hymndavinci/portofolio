'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Reveal } from './reveal'
import { Eye, ArrowUpRight, Feather, BookOpen } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export default function Blog() {
  const [viewsMap, setViewsMap] = useState<Record<string, number>>({})

  useEffect(() => {
    fetch('/api/views')
      .then((r) => r.json())
      .then((data) => {
        if (data && typeof data === 'object') {
          setViewsMap(data)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section id="blog" className="scroll-mt-24">
      <div className="space-y-8">

        {/* Section heading */}
        <Reveal>
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">
              Journal
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Writing
            </h2>
            <p className="text-[14px] text-[var(--home-muted)]">
              Notes, reflections, and personal writing kept in one quiet corner.
            </p>
          </div>
        </Reveal>

        {blogPosts.length > 0 ? (
          <>
            <Reveal delay={0.05}>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--home-muted)]">
                  Stories
                </span>
                <span className="text-[10px] text-[var(--home-muted)]">
                  {blogPosts.length} entries
                </span>
              </div>
            </Reveal>

            <div className="space-y-1">
              {blogPosts.map((post, i) => {
                const liveViews = viewsMap[post.slug] !== undefined ? viewsMap[post.slug] : post.views

                return (
                  <Reveal key={post.id} delay={i * 0.06}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-200 hover:bg-white/[0.03]"
                    >
                      {/* Gradient icon */}
                      <div className={`h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                        <Feather className="h-3 w-3 text-white/60" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25 mb-0.5">{post.category}</p>
                        <p className="text-[13px] font-semibold leading-snug text-white/70 transition group-hover:text-white line-clamp-1">
                          {post.title}
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/25">
                          {post.date.split(',')[0]}
                          <span className="mx-1.5 text-white/15">·</span>
                          <span className="inline-flex items-center gap-1"><Eye className="h-2.5 w-2.5" />{liveViews}</span>
                          <span className="mx-1.5 text-white/15">·</span>
                          {post.author}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/15 transition group-hover:text-white/40" />
                    </Link>
                  </Reveal>
                )
              })}
            </div>

            {/* Footer quote */}
            <Reveal delay={0.15}>
              <p className="text-center text-[11px] italic text-white/20">
                &ldquo;Every story is part of life&apos;s journey&rdquo;
              </p>
            </Reveal>
          </>
        ) : (
          <Reveal delay={0.05}>
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-black/10 py-16 text-center">
              <BookOpen className="h-6 w-6 text-white/20" />
              <p className="text-[13px] font-medium text-[var(--home-muted)]">
                No posts yet. Writing coming soon...
              </p>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  )
}
