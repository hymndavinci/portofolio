import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
      <div className="w-full max-w-xl text-center">
        <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-white/35">404</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-white/55">
          The page you are trying to open does not exist, moved, or is no longer available.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-white/65 transition hover:border-white/30 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-white/65 transition hover:border-white/30 hover:text-white"
          >
            View projects <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
