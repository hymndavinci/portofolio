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
          <span className="tech-marquee-key">stack</span>
          <span className="tech-marquee-eq">=</span>
          <span className="tech-marquee-value">{item}</span>
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section aria-label="Website technology stack" className="tech-marquee-shell mt-12">
      <div className="tech-marquee-terminal">
        <span className="tech-marquee-led" />
        <span className="tech-marquee-led" />
        <span className="tech-marquee-led" />
      </div>
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
