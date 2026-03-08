'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactClient() {
  return (
    <section className="max-w-[80rem] mx-auto px-[5%] pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left column — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-6">
            Let&apos;s talk.
          </h1>
          <div className="space-y-6 text-text-primary text-lg leading-relaxed">
            <p>
              30 minutes. No pitch. No deck. Just a genuine exploration of where you are and whether I can help.
            </p>
            <p>
              If you&apos;re rethinking how your organisation operates in the age of AI — or you know you should be — this is where it starts.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-text-primary text-bg rounded-lg text-base font-medium hover:bg-accent transition-colors"
            >
              Book a Call →
            </a>
          </div>
        </motion.div>

        {/* Right column — direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-8">
            <div>
              <h2 className="font-editorial text-[1.5rem] md:text-[1.75rem] font-semibold leading-[1.2] mb-4">
                Or reach out directly
              </h2>
              <div className="space-y-4 text-text-primary text-lg leading-relaxed">
                <div>
                  <span className="text-sm uppercase tracking-[0.15em] text-text-muted block mb-1">Email</span>
                  <a href="mailto:ap@bionic.global" className="hover:text-accent transition-colors">
                    ap@bionic.global
                  </a>
                </div>
                <div>
                  <span className="text-sm uppercase tracking-[0.15em] text-text-muted block mb-1">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/amitpatel911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Connect →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
