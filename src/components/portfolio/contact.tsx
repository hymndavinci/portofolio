'use client'

import { Reveal, SectionHeading } from './reveal'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="space-y-8">
        <SectionHeading
          tag="Contact"
          title="Let's talk"
          description="For projects, and general inquiries."
        />

        <Reveal delay={0.1}>
          <div className="grid gap-8 sm:grid-cols-2 pt-4">
            {/* Email */}
            <div className="space-y-4">
              <span className="flex text-[var(--home-accent)]">
                <Mail className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--home-muted)]">
                  Email
                </p>
                <p className="text-[15px] font-bold text-white">
                  hymndavinci@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <span className="flex text-[var(--home-accent)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--home-muted)]">
                  Location
                </p>
                <p className="text-[15px] font-bold text-white">
                  Purbalingga, Indonesia
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
