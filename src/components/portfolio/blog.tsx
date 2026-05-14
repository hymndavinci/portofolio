'use client'

import Link from 'next/link'
import { Reveal } from './reveal'
import { ArrowLeft, Eye, User, Calendar, Tag, BookOpen, ArrowUpRight, Feather } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export default function Blog() {
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
              Latest Posts
            </h2>
            <p className="text-[14px] text-[var(--home-muted)]">
              Every story is part of life&apos;s journey.
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
                  {blogPosts.length} picks
                </span>
              </div>
            </Reveal>

            <div className="space-y-5">
              {blogPosts.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition-all duration-300 hover:border-white/20 hover:bg-black/30"
                  >
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[var(--home-muted)]">
                        <ArrowLeft className="h-3 w-3" />
                        <span>Back to Journal</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-[var(--home-muted)]">
                        <span className="flex items-center gap-1 transition group-hover:text-white/60">
                          <BookOpen className="h-3 w-3" /> Read
                        </span>
                        <span className="flex items-center gap-1 transition group-hover:text-white/60">
                          <ArrowUpRight className="h-3 w-3" /> Open
                        </span>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="flex divide-x divide-white/[0.07]">

                      {/* Left — article info */}
                      <div className="flex-1 space-y-3 p-5">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--home-muted)]">
                          {post.category}
                        </p>
                        <h3 className="text-[22px] font-bold leading-tight text-white transition group-hover:text-white/90 sm:text-[26px]">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <User className="h-3 w-3 text-[var(--home-muted)]" />
                          <span className="text-[11px] text-[var(--home-muted)]">{post.slug}</span>
                        </div>
                        <p className="text-[13px] leading-relaxed text-white/55 line-clamp-2">
                          {post.tagline}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-white/35">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3" />{post.date}
                          </span>
                          <span aria-hidden="true" className="text-white/20">&bull;</span>
                          <span className="inline-flex items-center gap-1">
                            <Eye className="h-3 w-3" />{post.views}
                          </span>
                          <span aria-hidden="true" className="text-white/20">&bull;</span>
                          <span className="inline-flex items-center gap-1">
                            <User className="h-3 w-3" />{post.author}
                          </span>
                        </div>
                      </div>

                      {/* Right — Story details panel */}
                      <div className="hidden w-[160px] shrink-0 flex-col sm:flex">
                        <div className="border-b border-white/[0.07] px-4 py-3">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                            Story details
                          </p>
                        </div>
                        <div className="flex flex-1 flex-col divide-y divide-white/[0.07]">
                          {[
                            { icon: Calendar, label: 'Date',     value: post.date.split(',')[0] },
                            { icon: Eye,      label: 'Views',    value: String(post.views) },
                            { icon: User,     label: 'Author',   value: post.author },
                            { icon: Tag,      label: 'Category', value: post.category },
                          ].map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-center justify-between gap-2 px-4 py-2.5">
                              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[var(--home-muted)]">
                                <Icon className="h-2.5 w-2.5" />
                                {label}
                              </span>
                              <span className="text-right text-[10px] font-medium tabular-nums text-white/60">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </Link>
                </Reveal>
              ))}
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
