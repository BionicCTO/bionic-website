'use client'

import ScrollReveal from './ScrollReveal'

interface DarkBandProps {
  children: React.ReactNode
  className?: string
}

export default function DarkBand({ children, className = '' }: DarkBandProps) {
  return (
    <section className={`bg-bg-dark text-bg py-20 md:py-28 ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          {children}
        </ScrollReveal>
      </div>
    </section>
  )
}
