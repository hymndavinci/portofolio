'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Github, Loader2, Send, Star } from 'lucide-react'
import { Reveal } from './reveal'
import GoogleIcon from './google-icon'

interface RatingUser {
  id: string
  name: string | null
  image: string | null
}

interface RatingItem {
  id: string
  rating: number
  message: string
  updatedAt: string
  user: RatingUser
}

export default function PortfolioRating() {
  const { data: session, status } = useSession()
  const [ratings, setRatings] = useState<RatingItem[]>([])
  const [selectedRating, setSelectedRating] = useState(5)
  const [message, setMessage] = useState('')
  const [average, setAverage] = useState(0)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const roundedAverage = useMemo(() => average.toFixed(1), [average])
  const featuredRatings = ratings.slice(0, 6)

  useEffect(() => {
    let active = true

    async function loadRatings() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch('/api/portfolio-rating', { cache: 'no-store' })
        const data = await response.json()

        if (!response.ok) throw new Error(data?.error || 'Failed to load ratings')

        if (active) {
          setRatings(data.ratings || [])
          setAverage(data.average || 0)
          setCount(data.count || 0)
        }
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : 'Failed to load ratings')
      } finally {
        if (active) setLoading(false)
      }
    }

    loadRatings()

    return () => {
      active = false
    }
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cleanMessage = message.trim()

    if (cleanMessage.length < 2 || submitting) return

    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/portfolio-rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: selectedRating, message: cleanMessage }),
      })
      const data = await response.json()

      if (!response.ok) throw new Error(data?.error || 'Failed to submit rating')

      setRatings((current) => [data.rating, ...current.filter((item) => item.user.id !== data.rating.user.id)])
      setAverage(data.average || 0)
      setCount(data.count || 0)
      setMessage('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit rating')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="rating" className="scroll-mt-24">
      <div className="space-y-6">
        <Reveal>
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Rating</p>
              <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/35 sm:inline-flex">
                Public feedback
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Rate This Portfolio</h2>
            <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--home-muted)]">
              Drop a rating and a short message. Clean feedback, public display, one rating per account.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025]">
            <div className="grid gap-0 lg:grid-cols-[300px_1fr]">
              <div className="border-b border-white/10 bg-black/20 p-5 lg:border-b-0 lg:border-r">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--home-muted)]">Average Score</p>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-5xl font-bold leading-none text-white">{roundedAverage}</span>
                      <span className="pb-1 text-[12px] text-white/35">/ 5.0</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-right">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">Total</p>
                    <p className="mt-1 text-lg font-bold text-white">{count}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Star
                      key={value}
                      className={`h-4 w-4 ${value <= Math.round(average) ? 'fill-[var(--home-accent)] text-[var(--home-accent)]' : 'text-white/15'}`}
                    />
                  ))}
                </div>

                <p className="mt-5 text-[12px] leading-relaxed text-[var(--home-muted)]">
                  {count > 0 ? `Based on ${count} public ${count === 1 ? 'rating' : 'ratings'}.` : 'No ratings yet. Be the first one.'}
                </p>
              </div>

              <div className="p-5">
                {status === 'loading' ? (
                  <div className="flex items-center gap-2 text-[12px] text-white/40">
                    <Loader2 className="h-4 w-4 animate-spin" /> Checking session...
                  </div>
                ) : session?.user ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2">
                        {session.user.image ? (
                          <img src={session.user.image} alt="" className="h-8 w-8 shrink-0 rounded-full border border-white/10" />
                        ) : (
                          <div className="h-8 w-8 shrink-0 rounded-full border border-white/10 bg-white/[0.04]" />
                        )}
                        <div className="min-w-0">
                          <p className="truncate text-[12px] font-semibold text-white/70">{session.user.name || session.user.email}</p>
                          <p className="text-[10px] text-white/30">Your rating can be updated later.</p>
                        </div>
                      </div>
                      <button type="button" onClick={() => signOut()} className="text-[11px] text-white/35 transition hover:text-white/65">
                        Sign out
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setSelectedRating(value)}
                          className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-[12px] font-medium transition ${
                            selectedRating === value
                              ? 'border-[var(--home-accent)] bg-[var(--home-accent)]/10 text-white'
                              : 'border-white/10 text-white/45 hover:border-white/25 hover:text-white/70'
                          }`}
                        >
                          <Star className={`h-3.5 w-3.5 ${selectedRating >= value ? 'fill-[var(--home-accent)] text-[var(--home-accent)]' : 'text-white/20'}`} />
                          b{value}
                        </button>
                      ))}
                    </div>

                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value.slice(0, 500))}
                      placeholder="Tulis pesan singkat buat portfolio ini..."
                      rows={3}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-[13px] leading-relaxed text-white/75 outline-none transition placeholder:text-white/25 focus:border-white/25"
                    />

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] text-white/25">{message.trim().length}/500</span>
                      <button
                        type="submit"
                        disabled={submitting || message.trim().length < 2}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-4 py-2 text-[11px] font-medium text-white/60 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                        Submit rating
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div className="max-w-sm">
                      <p className="text-[15px] font-semibold text-white/75">Login to rate this portfolio.</p>
                      <p className="mt-1 text-[12px] leading-relaxed text-white/35">Use GitHub or Google. One public rating per account.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => signIn('github')}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-4 py-2 text-[11px] font-medium text-white/60 transition hover:border-white/30 hover:text-white"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </button>
                      <button
                        type="button"
                        onClick={() => signIn('google')}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-4 py-2 text-[11px] font-medium text-white/60 transition hover:border-white/30 hover:text-white"
                      >
                        <GoogleIcon /> Google
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {error && <p className="text-[12px] text-red-400">{error}</p>}

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--home-muted)]">Latest Feedback</p>
            <span className="text-[10px] text-white/30">{featuredRatings.length} shown</span>
          </div>

          {loading ? (
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 p-4 text-[12px] text-white/35">
              <Loader2 className="h-4 w-4 animate-spin" /> Loading ratings...
            </div>
          ) : featuredRatings.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredRatings.map((item) => (
                <Reveal key={item.id}>
                  <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.018] p-4 transition hover:border-white/20 hover:bg-white/[0.03]">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2">
                        {item.user.image ? (
                          <img src={item.user.image} alt="" className="h-9 w-9 shrink-0 rounded-full border border-white/10" />
                        ) : (
                          <div className="h-9 w-9 shrink-0 rounded-full border border-white/10 bg-white/[0.04]" />
                        )}
                        <div className="min-w-0">
                          <p className="truncate text-[12px] font-semibold text-white/75">{item.user.name || 'Anonymous'}</p>
                          <p className="text-[10px] text-white/30">{formatDate(item.updatedAt)}</p>
                        </div>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/55">
                        <Star className="h-3 w-3 fill-[var(--home-accent)] text-[var(--home-accent)]" /> b{item.rating}
                      </span>
                    </div>
                    <p className="line-clamp-3 whitespace-pre-wrap text-[13px] leading-relaxed text-white/55">{item.message}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-white/10 p-5 text-center text-[12px] text-white/35">
              No portfolio ratings yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}
