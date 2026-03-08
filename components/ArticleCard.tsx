'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ArticleCardProps {
  title: string
  subtitle: string
  date: string
  slug: string
  category?: string
  featured?: boolean
  heroImage?: string
}

export default function ArticleCard({ title, subtitle, date, slug, category, featured, heroImage }: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group ${featured ? 'col-span-full' : ''}`}
    >
      <Link href={`/${slug}`} className="block">
        <div className={`bg-bg-elevated rounded-xl border border-border-light p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-border ${
          featured ? 'md:flex md:items-center md:gap-10' : ''
        }`}>
          {/* Illustration */}
          <div className={`bg-bg-dark rounded-lg flex items-center justify-center mb-5 overflow-hidden ${
            featured ? 'md:mb-0 md:w-1/2 aspect-[16/10]' : 'aspect-[16/9]'
          }`}>
            {heroImage ? (
              <Image
                src={heroImage}
                alt={title}
                width={featured ? 600 : 400}
                height={featured ? 375 : 225}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="text-bg/20 text-6xl font-editorial select-none">✦</div>
            )}
          </div>

          <div className={featured ? 'md:w-1/2' : ''}>
            {/* Meta */}
            <div className="flex items-center gap-3 mb-3">
              <time className="text-xs text-text-muted font-medium">{formattedDate}</time>
              {category && (
                <>
                  <span className="text-border">·</span>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{category}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h3 className={`font-editorial font-bold leading-snug mb-2 group-hover:text-accent transition-colors duration-200 ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}>
              {title}
            </h3>

            {/* Subtitle */}
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
              {subtitle}
            </p>

            {/* Read more */}
            <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
              Read article
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
