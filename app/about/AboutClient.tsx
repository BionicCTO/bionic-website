'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import DarkBand from '@/components/DarkBand'

export default function AboutClient() {
  return (
    <>
      {/* Manifesto hero */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 max-w-3xl">
            My Manifesto.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl space-y-6"
        >
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            People are dying needlessly.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            The system is broken. We&apos;ve been gaslit into believing that&apos;s normal.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            I&apos;ve watched it fail people who didn&apos;t have to die.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            That&apos;s why I&apos;m writing this.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            But rage without a roadmap is just noise.
          </p>
          <p className="text-lg md:text-xl text-text-primary font-medium leading-relaxed">
            This is the systematic playbook for rebuilding healthcare with AI.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Written from both sides of the boardroom table.
          </p>
        </motion.div>
      </section>

      {/* Dark band — the gap */}
      <DarkBand>
        <div className="max-w-3xl">
          <h2 className="font-editorial text-3xl md:text-4xl font-bold leading-tight mb-6">
            The gap nobody talks about.
          </h2>
          <p className="text-bg/70 text-lg leading-relaxed mb-4">
            Your leadership team is smart. Some of them use AI daily. But there&apos;s a difference between using ChatGPT and understanding what AI can actually do across your business — the workflows, the agents, the strategy.
          </p>
          <p className="text-bg/70 text-lg leading-relaxed mb-4">
            That gap isn&apos;t a failure of intelligence.{' '}
            <strong className="text-bg">It&apos;s a failure of exposure.</strong>
          </p>
          <p className="text-bg/70 text-lg leading-relaxed">
            Most AI training teaches people to prompt.{' '}
            <span className="text-accent font-medium">We teach leaders to build.</span>
          </p>
          <p className="text-bg/50 text-lg leading-relaxed mt-6">
            The landscape moves so fast that even engaged leaders have blind spots. Bionic closes them — in hours, not months.
          </p>
        </div>
      </DarkBand>

      {/* The Work */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            <div>
              <h2 className="font-editorial text-3xl md:text-4xl font-bold mb-6">The Work</h2>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  I operate where code, cover and care collide.
                </p>
                <p>
                  I&apos;ve turned around a £450M healthcare business. Operationally. Financially. Then executed a 2-step divestment at 2.5x above board expectations.
                </p>
                <p>
                  Built a digital MGA focused on health insurance. Took it through the FCA sandbox. Brought a capacity line from Japan. Worked enterprise product and licensing deals with major insurers.
                </p>
                <p>
                  Shaped Bupa&apos;s £3B UK insurance and provision portfolio. Led multiple M&A deals. Deployed capital that created a unicorn.
                </p>
                <p>
                  I chair the International Federation of Health Plans&apos; AI and emerging tech network. 80+ health insurers. 40+ markets. 250M+ lives. We work on AI strategy, transformation and governance at scale.
                </p>
                <p className="text-text-primary font-medium">
                  I&apos;ve operated on patients. I&apos;ve operated on P&Ls.
                </p>
                <p className="text-text-primary font-medium">
                  I know what works. I know what kills.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <h2 className="font-editorial text-3xl md:text-4xl font-bold mb-6">What I Write</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                This isn&apos;t theory. It&apos;s field notes. I document four things:
              </p>
              <div className="space-y-5">
                {[
                  { tag: 'BUILD', desc: 'AI-native architecture. Evaluation. Agents. Infrastructure. How to actually build systems that work.' },
                  { tag: 'GOVERN', desc: 'Board oversight. Risk. AI policy. Accountability. How to control what you\'ve built.' },
                  { tag: 'TRANSFORM', desc: 'Venture build. Transformation strategy. Operating models. How to change without breaking.' },
                  { tag: 'PREPARE', desc: 'Future of work. Education. Critical thinking. How to ready your organisation and yourself.' },
                ].map((item) => (
                  <div key={item.tag} className="group">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold tracking-wider text-accent uppercase mt-1 shrink-0 w-24">
                        {item.tag}
                      </span>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio / Practitioner */}
      <section className="border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">Your Practitioner</p>
              <h2 className="font-editorial text-3xl md:text-4xl font-bold mb-6">Amit Patel</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">Amit Patel has sat on every side of the table.</strong>
                </p>
                <p>
                  He started in surgery — high-stakes decisions under pressure, with incomplete information, where the cost of getting it wrong is real.
                </p>
                <p>
                  He left the NHS to work at the intersection of healthcare, insurance and technology — running corporate strategy, M&A and corporate venture build for Bupa, founding an FCA-regulated MGA and building an AI-powered insurtech from scratch.
                </p>
                <p>
                  Now he chairs the AI & Emerging Tech network for the International Federation of Health Plans and is a member of The Agentics Foundation.
                </p>
                <p className="text-accent font-medium text-lg">
                  He brings leadership to the build — and the build to the leadership.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="font-editorial text-2xl md:text-3xl font-bold mb-4">
              Interested? <span className="text-accent">Let&apos;s chat.</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              30 minutes. No pitch. We&apos;ll figure out what your team needs and whether Bionic is the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-text-primary text-bg rounded-full font-medium hover:bg-accent transition-colors duration-200"
            >
              Book a Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
