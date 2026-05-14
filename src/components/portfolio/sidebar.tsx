'use client'

import { Reveal } from './reveal'
import { User, Languages, GraduationCap, BookOpen, Feather } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

const profileData = [
  { label: 'Name', value: 'M Bintang Kurniawan' },
  { label: 'Pronouns', value: 'He/Him' },
  { label: 'Age', value: '21 years old' },
  { label: 'Role', value: 'Developer' },
  { label: 'Focus', value: 'Consistency' },
  { label: 'Passion', value: 'Make good things' },
  { label: 'Status', value: 'Learning' },
]

const languageData = [
  { name: 'Bahasa Indonesia', level: 'Expert', percent: 100 },
  { name: 'English', level: 'Intermediate', percent: 70 },
  { name: 'Japanese', level: 'Beginner', percent: 15 },
  { name: 'German', level: 'Beginner', percent: 10 },
]

const educationData = [
  {
    school: 'University Muhammadiyah Purwokerto',
    degree: 'Bachelor of Informatics',
    year: '2023 - Present',
    status: 'In Progress',
  },
]

// latestPosts now comes from blog.tsx (blogPosts)

export default function Sidebar() {
  return (
    <aside className="hidden lg:block lg:w-[340px] lg:shrink-0 lg:border-l lg:border-white/10 lg:pl-8 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide">
      <div className="space-y-3 pb-6">

        {/* Profile Card */}
        <div className="rounded-2xl border border-white/10 bg-black/20">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <User className="h-3 w-3 text-[var(--home-accent)]" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Profile</p>
          </div>
          <div className="divide-y divide-white/[0.07]">
            {profileData.map((item) => (
              <Reveal key={item.label}>
                <div className="flex items-center justify-between gap-2 px-4 py-2.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">{item.label}</span>
                  <span className="text-[12px] font-medium text-[var(--home-ink)]">{item.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Languages Card */}
        <div className="rounded-2xl border border-white/10 bg-black/20">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <Languages className="h-3 w-3 text-[var(--home-accent)]" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Languages</p>
          </div>
          <div className="grid gap-2 p-3">
            {languageData.map((lang) => (
              <Reveal key={lang.name}>
                <div className="rounded-xl border border-white/[0.07] bg-black/20 p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-[11px] font-medium text-[var(--home-ink)]">{lang.name}</span>
                    <span className="shrink-0 text-[10px] tabular-nums text-[var(--home-muted)]">
                      {lang.level} &bull; {lang.percent}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-[3px] w-full rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[var(--home-accent)] transition-all duration-1000"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="rounded-2xl border border-white/10 bg-black/20">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <GraduationCap className="h-3 w-3 text-[var(--home-accent)]" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Education</p>
          </div>
          <div className="p-4">
            {educationData.map((edu) => (
              <Reveal key={edu.school}>
                <div>
                  <p className="text-[12px] font-semibold text-[var(--home-ink)]">{edu.degree}</p>
                  <p className="mt-0.5 text-[10px] text-[var(--home-muted)]">{edu.school}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] text-[var(--home-muted)]">{edu.year}</span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      {edu.status}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Latest Posts Card */}
        <div className="rounded-2xl border border-white/10 bg-black/20">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-3 w-3 text-[var(--home-accent)]" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Latest Posts</p>
            </div>
            <span className="text-[10px] tabular-nums text-[var(--home-muted)]">{blogPosts.length}</span>
          </div>
          <div className="space-y-2 p-3">
            {blogPosts.map((post) => (
              <Reveal key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2.5 transition hover:border-white/20"
                >
                  <div className="flex items-start gap-2.5">
                    <div className={`relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                      <Feather className="h-4 w-4 text-white/40" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-white/80 line-clamp-2">{post.title}</p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-1 text-[10px] text-white/40">
                        <span>{post.date}</span>
                        <span aria-hidden="true" className="text-white/25">&bull;</span>
                        <span className="tabular-nums">{post.views} views</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </aside>
  )
}

export function MobileSidebar() {
  return (
    <div className="space-y-4 lg:hidden">
      <div className="rounded-2xl border border-white/10 bg-black/20">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <User className="h-3 w-3 text-[var(--home-accent)]" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Profile</p>
        </div>
        <div className="divide-y divide-white/[0.07]">
          {profileData.map((item) => (
            <Reveal key={item.label}>
              <div className="flex flex-col gap-0.5 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">{item.label}</span>
                <span className="text-[12px] font-medium text-[var(--home-ink)]">{item.value}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <Languages className="h-3 w-3 text-[var(--home-accent)]" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Languages</p>
        </div>
        <div className="grid gap-2 p-3">
          {languageData.map((lang) => (
            <Reveal key={lang.name}>
              <div className="rounded-xl border border-white/[0.07] bg-black/20 p-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-[11px] font-medium text-[var(--home-ink)]">{lang.name}</span>
                  <span className="shrink-0 text-[10px] tabular-nums text-[var(--home-muted)]">
                    {lang.level} &bull; {lang.percent}%
                  </span>
                </div>
                <div className="mt-1.5 h-[3px] w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[var(--home-accent)] transition-all duration-1000"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <GraduationCap className="h-3 w-3 text-[var(--home-accent)]" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Education</p>
        </div>
        <div className="p-4">
          {educationData.map((edu) => (
            <Reveal key={edu.school}>
              <div>
                <p className="text-[12px] font-semibold text-[var(--home-ink)]">{edu.degree}</p>
                <p className="mt-0.5 text-[10px] text-[var(--home-muted)]">{edu.school}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] text-[var(--home-muted)]">{edu.year}</span>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    {edu.status}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Latest Posts Card — Mobile */}
      <div className="rounded-2xl border border-white/10 bg-black/20">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-3 w-3 text-[var(--home-accent)]" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--home-muted)]">Latest Posts</p>
          </div>
          <span className="text-[10px] tabular-nums text-[var(--home-muted)]">{blogPosts.length}</span>
        </div>
        <div className="space-y-2 p-3">
          {blogPosts.map((post) => (
            <Reveal key={post.id}>
              <a
                href={post.href}
                className="block rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2.5 transition hover:border-white/20"
              >
                <div className="flex items-start gap-2.5">
                  <div className={`relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                    <Feather className="h-4 w-4 text-white/40" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-white/80 line-clamp-2">{post.title}</p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-1 text-[10px] text-white/40">
                      <span>{post.date}</span>
                      <span aria-hidden="true" className="text-white/25">&bull;</span>
                      <span className="tabular-nums">{post.views} views</span>
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
