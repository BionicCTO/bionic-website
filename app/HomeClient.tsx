'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import ScrollReveal from '@/components/ScrollReveal'
import DarkBand from '@/components/DarkBand'
import NewsletterSignup from '@/components/NewsletterSignup'
import type { ArticleMeta } from '@/lib/articles'

export default function HomeClient({ articles }: { articles: ArticleMeta[] }) {
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-5">
            AI × Leadership × Building
          </p>
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Where leaders learn{' '}
            <span className="text-accent">to build.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Field notes from the intersection of care, cover, and code.
            On AI architecture, leadership, and rebuilding the systems that
            protect human health. By{' '}
            <Link href="/about" className="text-text-primary font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-all">
              Amit Patel
            </Link>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 text-sm text-text-muted"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Clinical background
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Insurtech founder
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            IFHP Network Chair
          </span>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <hr className="border-border" />
      </div>

      {/* Featured article */}
      {featured && (
        <section className="max-w-[1100px] mx-auto px-6 md:px-8 py-12 md:py-16">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-6">Latest</p>
            <ArticleCard {...featured} featured />
          </ScrollReveal>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="max-w-[1100px] mx-auto px-6 md:px-8 pb-12 md:pb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.1}>
                <ArticleCard {...article} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Manifesto dark band */}
      <DarkBand>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">Manifesto</p>
          <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            The gap nobody talks about.
          </h2>
          <p className="text-bg/70 text-lg leading-relaxed mb-4">
            Your leadership team is smart. Some of them use AI daily. But there&apos;s a difference between using ChatGPT and understanding what AI can actually do across your business — the workflows, the agents, the strategy.
          </p>
          <p className="text-bg/70 text-lg leading-relaxed mb-4">
            That gap isn&apos;t a failure of intelligence.{' '}
            <strong className="text-bg">It&apos;s a failure of exposure.</strong>
          </p>
          <p className="text-bg/70 text-lg leading-relaxed mb-8">
            Most AI training teaches people to prompt.{' '}
            <span className="text-accent font-medium">We teach leaders to build.</span>
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            Read the full manifesto
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </DarkBand>
    </>
  )
}
