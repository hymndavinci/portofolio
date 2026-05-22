'use client'

import { FormEvent, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Github, Loader2, MessageCircle, Send } from 'lucide-react'
import GoogleIcon from './google-icon'

interface CommentUser {
  id: string
  name: string | null
  image: string | null
}

interface CommentItem {
  id: string
  body: string
  createdAt: string
  user: CommentUser
}

interface CommentsProps {
  targetType: 'blog' | 'project'
  targetSlug: string
}

export default function Comments({ targetType, targetSlug }: CommentsProps) {
  const { data: session, status } = useSession()
  const [comments, setComments] = useState<CommentItem[]>([])
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadComments() {
      setLoading(true)
      setError('')
      try {
        const params = new URLSearchParams({ targetType, targetSlug })
        const response = await fetch(`/api/comments?${params.toString()}`, { cache: 'no-store' })
        const data = await response.json()
        if (!response.ok) throw new Error(data?.error || 'Failed to load comments')
        if (active) setComments(data.comments || [])
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : 'Failed to load comments')
      } finally {
        if (active) setLoading(false)
      }
    }

    loadComments()
    return () => { active = false }
  }, [targetType, targetSlug])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cleanBody = body.trim()
    if (cleanBody.length < 2 || submitting) return

    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetType, targetSlug, body: cleanBody }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data?.error || 'Failed to post comment')
      setComments((current) => [data.comment, ...current])
      setBody('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to post comment')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mt-16 border-t border-white/10 pt-10">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55">
            <MessageCircle className="h-4 w-4" /> Comments
          </p>
          <p className="mt-1 text-[12px] text-white/35">Login to leave a public note.</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/35">
          {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
        </span>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        {status === 'loading' ? (
          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <Loader2 className="h-4 w-4 animate-spin" /> Checking session...
          </div>
        ) : session?.user ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                {session.user.image ? (
                  <img src={session.user.image} alt="" className="h-7 w-7 shrink-0 rounded-full border border-white/10" />
                ) : (
                  <div className="h-7 w-7 shrink-0 rounded-full border border-white/10 bg-white/[0.04]" />
                )}
                <span className="truncate text-[12px] font-medium text-white/65">
                  {session.user.name || session.user.email}
                </span>
              </div>
              <button type="button" onClick={() => signOut()} className="text-[11px] text-white/35 transition hover:text-white/65">
                Sign out
              </button>
            </div>

            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value.slice(0, 500))}
              placeholder="Write a comment..."
              rows={3}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-[13px] leading-relaxed text-white/75 outline-none transition placeholder:text-white/25 focus:border-white/25"
            />
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] text-white/25">{body.trim().length}/500</span>
              <button
                type="submit"
                disabled={submitting || body.trim().length < 2}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-[11px] font-medium text-white/60 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                Post
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-white/45">Sign in before posting a comment.</p>
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
                <GoogleIcon /> Google
              </button>
            </div>
          </div>
        )}
      </div>

      {error && <p className="mt-3 text-[12px] text-red-400">{error}</p>}

      <div className="mt-5 space-y-3">
        {loading ? (
          <div className="flex items-center gap-2 text-[12px] text-white/35">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading comments...
          </div>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <article key={comment.id} className="rounded-2xl border border-white/10 bg-white/[0.015] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  {comment.user.image ? (
                    <img src={comment.user.image} alt="" className="h-8 w-8 shrink-0 rounded-full border border-white/10" />
                  ) : (
                    <div className="h-8 w-8 shrink-0 rounded-full border border-white/10 bg-white/[0.04]" />
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-semibold text-white/70">{comment.user.name || 'Anonymous'}</p>
                    <p className="text-[10px] text-white/30">{formatDate(comment.createdAt)}</p>
                  </div>
                </div>
              </div>
              <p className="whitespace-pre-wrap text-[13px] leading-relaxed text-white/55">{comment.body}</p>
            </article>
          ))
        ) : (
          <p className="rounded-2xl border border-dashed border-white/10 p-4 text-center text-[12px] text-white/35">
            No comments yet.
          </p>
        )}
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
