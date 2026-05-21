import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog-data'
import { ArrowLeft, Eye, Calendar, User, Tag, Feather } from 'lucide-react'
import { db } from '@/lib/db'
import ViewTracker from '@/components/ViewTracker'
import BlogActions from '@/components/portfolio/blog-actions'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

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

  const viewRecord = await db.postView.findUnique({ where: { slug } })
  const realViews = viewRecord?.views ?? post.views

  const related = getRelatedPosts(post)
  const paragraphs = post.content.split('\n\n').filter(Boolean)

  const storyDetails = [
    { icon: Calendar, label: 'Date', value: post.date },
    { icon: Eye, label: 'Views', value: realViews.toLocaleString() },
    { icon: User, label: 'Author', value: post.author },
    { icon: Tag, label: 'Category', value: post.category },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
      <div className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/blog"
            className="flex min-w-0 items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40 transition hover:text-white/70 sm:text-[11px] sm:tracking-[0.25em]"
          >
            <ArrowLeft className="h-3 w-3 shrink-0" />
            <span className="truncate">Back to Journal</span>
          </Link>
          <BlogActions
            title={post.title}
            url={`https://hymndavinci.web.id/blog/${slug}`}
          />
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-4 py-10 sm:px-6 sm:py-12 lg:flex lg:items-start lg:gap-12">
        <article className="min-w-0 flex-1">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-white/35">
            {post.category}
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          <div className="mb-5 flex min-w-0 items-center gap-1.5">
            <User className="h-3 w-3 shrink-0 text-white/25" />
            <span className="truncate text-[11px] text-white/30">{post.slug}</span>
          </div>

          <p className="mb-6 border-l-2 border-white/10 pl-4 text-[14px] leading-relaxed text-white/55">
            {post.tagline}
          </p>

          <div className="mb-12 flex flex-wrap items-center gap-3 text-[11px] text-white/30">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />{post.date}
            </span>
            <span className="text-white/15">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3 w-3" />
              <ViewTracker slug={slug} initialViews={realViews} />
            </span>
            <span className="text-white/15">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3 w-3" />{post.author}
            </span>
          </div>

          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-[15px] leading-[1.9] text-white/70">
                {para}
              </p>
            ))}
          </div>

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
                      <Feather className="h-5 w-5 text-white/40" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">{rel.date}</p>
                      <p className="mt-0.5 text-[14px] font-bold text-white transition group-hover:text-white/80">
                        {rel.title}
                      </p>
                      <p className="mt-0.5 line-clamp-1 text-[12px] text-white/40">{rel.tagline}</p>
                    </div>
                    <ArrowLeft className="h-4 w-4 shrink-0 rotate-180 text-white/15 transition group-hover:text-white/50" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-white/10 pt-6">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/30 transition hover:text-white/60"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Journal
            </Link>
          </div>

          <p className="mt-10 text-center text-[11px] italic text-white/15">
            &ldquo;Every story is part of life&apos;s journey&rdquo;
          </p>
        </article>

        <aside className="sticky top-20 hidden self-start lg:block lg:w-[220px] lg:shrink-0">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
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
                  <span className="text-right text-[11px] font-medium tabular-nums text-white/60">
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
