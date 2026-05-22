'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Github, Loader2, Send, Star } from 'lucide-react'
import { Reveal } from './reveal'

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
      <div className="space-y-8">
        <Reveal>
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">Rating</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Rate This Portfolio</h2>
            <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--home-muted)]">
              Leave a quick rating and message. Public feedback helps make this portfolio sharper.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--home-muted)]">Average</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-bold leading-none text-white">{roundedAverage}</span>
                <span className="pb-1 text-[12px] text-white/35">/ 5.0</span>
              </div>
              <div className="mt-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Star
                    key={value}
                    className={`h-4 w-4 ${value <= Math.round(average) ? 'fill-[var(--home-accent)] text-[var(--home-accent)]' : 'text-white/15'}`}
                  />
                ))}
              </div>
              <p className="mt-4 text-[12px] text-[var(--home-muted)]">
                Based on {count} {count === 1 ? 'rating' : 'ratings'}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
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
                      <span className="truncate text-[12px] font-medium text-white/65">
                        {session.user.name || session.user.email}
                      </span>
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
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-[13px] leading-relaxed text-white/75 outline-none transition placeholder:text-white/25 focus:border-white/25"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] text-white/25">{message.trim().length}/500</span>
                    <button
                      type="submit"
                      disabled={submitting || message.trim().length < 2}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-[11px] font-medium text-white/60 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                      Submit rating
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[13px] font-medium text-white/60">Login to rate this portfolio.</p>
                    <p className="mt-1 text-[12px] text-white/35">One public rating per account.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => signIn('github')}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-[11px] font-medium text-white/60 transition hover:border-white/30 hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </button>
                    <button
                      type="button"
                      onClick={() => signIn('google')}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-[11px] font-medium text-white/60 transition hover:border-white/30 hover:text-white"
                    >
                      Google
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {error && <p className="text-[12px] text-red-400">{error}</p>}

        <div className="space-y-3">
          {loading ? (
            <div className="flex items-center gap-2 text-[12px] text-white/35">
              <Loader2 className="h-4 w-4 animate-spin" /> Loading ratings...
            </div>
          ) : ratings.length > 0 ? (
            ratings.map((item) => (
              <Reveal key={item.id}>
                <article className="rounded-2xl border border-white/10 bg-white/[0.015] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      {item.user.image ? (
                        <img src={item.user.image} alt="" className="h-8 w-8 shrink-0 rounded-full border border-white/10" />
                      ) : (
                        <div className="h-8 w-8 shrink-0 rounded-full border border-white/10 bg-white/[0.04]" />
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold text-white/70">{item.user.name || 'Anonymous'}</p>
                        <p className="text-[10px] text-white/30">{formatDate(item.updatedAt)}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <Star key={value} className={`h-3.5 w-3.5 ${value <= item.rating ? 'fill-[var(--home-accent)] text-[var(--home-accent)]' : 'text-white/15'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="whitespace-pre-wrap text-[13px] leading-relaxed text-white/55">{item.message}</p>
                </article>
              </Reveal>
            ))
          ) : (
            <p className="rounded-2xl border border-dashed border-white/10 p-4 text-center text-[12px] text-white/35">
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
