const techStack = [
  'Next.js',
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

function MarqueeGroup() {
  return (
    <div className="tech-marquee-group" aria-hidden="true">
      {techStack.map((item) => (
        <span key={item} className="tech-marquee-item">
          <span className="tech-marquee-dot" />
          {item}
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section aria-label="Built with technology stack" className="mt-12 border-y border-white/10 py-3">
      <div className="flex items-center gap-4 overflow-hidden">
        <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--home-accent)]">
          Built with
        </p>
        <div className="tech-marquee-mask">
          <div className="tech-marquee-track">
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>
      </div>
    </section>
  )
}
