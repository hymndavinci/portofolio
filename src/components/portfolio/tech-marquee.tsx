const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL',
  'Vercel',
]

function MarqueeGroup() {
  return (
    <div className="tech-marquee-group" aria-hidden="true">
      {techStack.map((item) => (
        <span key={item} className="tech-marquee-item">
          {item}
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section aria-label="Website technology stack" className="tech-marquee-shell mt-12">
      <div className="tech-marquee-label">Built with</div>
      <div className="tech-marquee-mask">
        <div className="tech-marquee-track">
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>
    </section>
  )
}
