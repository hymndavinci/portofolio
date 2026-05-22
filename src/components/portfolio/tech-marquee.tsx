const techStack = [
  'Building with Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'Prisma',
  'Google Gemini AI',
  'Lavalink',
  'NVIDIA NIM',
  'Vercel',
]

const repeatedStack = [...techStack, ...techStack]

export default function TechMarquee() {
  return (
    <section aria-label="Technology stack" className="mt-12 overflow-hidden border-y border-white/10 py-3">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex min-w-max items-center gap-3 pr-3 tech-marquee-track">
          {repeatedStack.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--home-accent)]" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .tech-marquee-track {
          animation: tech-marquee 34s linear infinite;
        }

        section:hover .tech-marquee-track {
          animation-play-state: paused;
        }

        @keyframes tech-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
