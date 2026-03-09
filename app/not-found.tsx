'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="max-w-[48rem] mx-auto px-[5%] pt-16 md:pt-24 pb-20 md:pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-[6rem] md:text-[8rem] font-editorial font-semibold leading-none text-text-muted/30 mb-4">
          404
        </div>
        <h1 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-[30rem] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist — or it moved while we weren&apos;t looking.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex px-8 py-3 bg-text-primary text-bg rounded-lg text-base font-medium hover:bg-accent transition-colors"
          >
            Back to articles
          </Link>
          <Link
            href="/about"
            className="inline-flex px-8 py-3 border border-text-primary text-text-primary rounded-lg text-base font-medium hover:bg-black/5 transition-colors"
          >
            About Bionic
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
