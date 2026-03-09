'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from '@/components/NewsletterSignup'
import type { ArticleMeta } from '@/lib/articles'

export default function HomeClient({ articles }: { articles: ArticleMeta[] }) {
  return (
    <>
      {/* ── Article Listing (Webflow-style vertical feed) ── */}
      <section className="max-w-[48rem] mx-auto px-[5%] pt-8 md:pt-16">
        {articles.map((article, i) => {
          const d = new Date(article.date)
          const formattedDate = `${String(d.getDate()).padStart(2, '0')} ${d.toLocaleDateString('en-GB', { month: 'long' }).toUpperCase()} ${d.getFullYear()}`

          return (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="pb-12 md:pb-16"
            >
              {/* Hero image */}
              {article.heroImage && (
                <Link href={`/${article.slug}`} className="group/img block mb-6">
                  <div className="aspect-[16/9] bg-white rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      width={768}
                      height={432}
                      className="w-full h-full object-contain transition-opacity duration-300 group-hover/img:opacity-80"
                    />
                  </div>
                </Link>
              )}

              {/* Date */}
              <div className="text-sm text-text-muted mb-3">
                {formattedDate}
              </div>

              {/* Title */}
              <Link href={`/${article.slug}`} className="block mb-2">
                <h2 className="font-editorial text-[1.75rem] md:text-[2.25rem] font-semibold leading-[1.2] tracking-tight hover:opacity-70 transition-opacity">
                  {article.title}
                </h2>
              </Link>

              {/* Byline */}
              <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                <span>written by</span>
                <Link href="/about" className="text-text-primary hover:opacity-70 transition-opacity">
                  {article.author}
                </Link>
              </div>

              {/* Subtitle */}
              {article.subtitle && (
                <p className="text-text-secondary text-base leading-relaxed">
                  {article.subtitle}
                </p>
              )}

              {/* Divider */}
              <div className="w-full h-px bg-[#d1cdca] mt-12 md:mt-16" />
            </motion.article>
          )
        })}
      </section>

      {/* ── Newsletter Section (dark, "Join the uprising") ── */}
      <section id="subscribe" className="relative overflow-hidden mb-16">
        <div className="relative z-10 px-[5%]">
          <div className="max-w-[48rem] mx-auto py-16 md:py-20">
            <div className="text-center">
              <div className="text-white/60 text-sm mb-4">Dispatches</div>
              <h2 className="font-editorial text-[2.25rem] md:text-[3rem] font-semibold leading-[1.2] text-white mb-6">
                Join the uprising
              </h2>
              <p className="text-white/60 text-base mb-8">
                Field notes from the front lines. Weekly.
              </p>
              <div className="max-w-[36rem] mx-auto">
                <NewsletterSignup variant="dark" />
                <p className="text-white/40 text-xs mt-4">
                  By clicking Sign Up you&apos;re confirming that you agree with our{' '}
                  <Link href="/terms" className="text-white/60 underline">
                    Terms and Conditions
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
        <Image
          src="/images/Header.jpg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </section>
    </>
  )
}
