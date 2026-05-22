'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.28, delay: Math.min(delay, 0.08), ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  tag: string
  title: string
  description?: string
}

export function SectionHeading({ tag, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">
          {tag}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-2xl font-sans font-semibold text-[var(--home-ink)] sm:text-3xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-sm text-[var(--home-muted)] sm:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
