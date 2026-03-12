'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ReadingProgress from '@/components/ReadingProgress'
import NewsletterSignup from '@/components/NewsletterSignup'
import ScrollReveal from '@/components/ScrollReveal'
import VideoExplainer from '@/components/VideoExplainer'
import type { ArticleMeta } from '@/lib/articles'

interface ArticleClientProps {
  meta: ArticleMeta
  content: string
  related: ArticleMeta[]
}

export default function ArticleClient({ meta, content, related }: ArticleClientProps) {
  const d = new Date(meta.date)
  const formattedDate = `${String(d.getDate()).padStart(2, '0')} ${d.toLocaleDateString('en-GB', { month: 'long' }).toUpperCase()} ${d.getFullYear()}`

  return (
    <>
      <ReadingProgress />

      {/* ── Hero Image ── */}
      {meta.heroImage && (
        <div className="px-[5%]">
          <div className="max-w-[48rem] mx-auto pt-12 md:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[16/9] overflow-hidden flex items-center justify-center">
                <Image
                  src={meta.heroImage}
                  alt={meta.title}
                  width={768}
                  height={432}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* ── Article Header (centred, Webflow-style) ── */}
      <header className="px-[5%]">
        <div className={`max-w-[48rem] mx-auto ${meta.heroImage ? 'pt-8 md:pt-12' : 'pt-12 md:pt-20'} pb-8 md:pb-12`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: meta.heroImage ? 0.1 : 0 }}
            className="text-center flex flex-col items-center"
          >
            <div className="text-sm uppercase tracking-[0.15em] text-text-muted mb-6">
              {formattedDate} · {meta.readingTime}
            </div>

            <h1 className="font-editorial text-[2.5rem] md:text-[3.5rem] font-semibold leading-[1.2] tracking-tight mb-4">
              {meta.title}
            </h1>

            <div className="h-2" />

            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>written by</span>
              <Link href="/about" className="text-text-primary hover:text-accent transition-colors">
                {meta.author}
              </Link>
            </div>

            <div className="h-8" />

            {meta.subtitle && (
              <p className="text-text-secondary text-xl md:text-[1.35rem] leading-relaxed max-w-[40rem]">
                {meta.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </header>

      {/* ── Video Explainer ── */}
      {meta.videoUrl && (
        <div className="px-[5%]">
          <div className="max-w-[48rem] mx-auto">
            <VideoExplainer videoUrl={meta.videoUrl} title={meta.title} />
          </div>
        </div>
      )}

      {/* ── Article Content ── */}
      <section className="px-[5%]">
        <div className="max-w-[80rem] mx-auto pt-0 pb-12 md:pb-[5rem]">
          <div className="max-w-[48rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose"
              dangerouslySetInnerHTML={{ __html: simpleMarkdown(content) }}
            />

            {/* Divider */}
            <div className="w-full h-px bg-[#d1cdca] mt-12 mb-12" />

            {/* Bottom byline + next article */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <span>written by</span>
                <Link href="/about" className="text-text-primary hover:text-accent transition-colors">
                  {meta.author}
                </Link>
              </div>

              {related.length > 0 && (
                <div className="text-right">
                  <div className="text-text-muted text-sm mb-1">Read more</div>
                  <Link
                    href={`/${related[0].slug}`}
                    className="text-text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    {related[0].title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter Section (dark, Webflow "Join the uprising") ── */}
      <section className="relative overflow-hidden rounded-t-2xl">
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
              <div className="max-w-[30rem] mx-auto">
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

      {/* ── Read my thoughts (related articles) ── */}
      {related.length > 0 && (
        <section className="max-w-[80rem] mx-auto px-[5%] py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-3">
              Read my thoughts
            </h2>
            <p className="text-text-primary text-base">More from the field.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((article) => {
              const ad = new Date(article.date)
              const articleDate = `${String(ad.getDate()).padStart(2, '0')} ${ad.toLocaleDateString('en-GB', { month: 'long' }).toUpperCase()} ${ad.getFullYear()}`
              return (
                <ScrollReveal key={article.slug}>
                  <div className="group">
                    {/* Hero image */}
                    {article.heroImage && (
                      <Link href={`/${article.slug}`} className="block mb-4">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg flex items-center justify-center p-6">
                          <Image
                            src={article.heroImage}
                            alt={article.title}
                            width={400}
                            height={300}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    )}

                    <div className="text-sm text-text-muted mb-2">{articleDate}</div>

                    <Link href={`/${article.slug}`} className="block mb-1">
                      <h3 className="font-editorial text-[1.25rem] md:text-[1.4rem] font-semibold leading-[1.3] group-hover:opacity-70 transition-opacity">
                        {article.title}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
                      <span>written by</span>
                      <Link href="/about" className="text-text-primary hover:opacity-70 transition-opacity">
                        {article.author}
                      </Link>
                    </div>

                    <p className="text-text-primary text-sm leading-relaxed line-clamp-2">
                      {article.subtitle}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

// Simple markdown to HTML converter (avoids needing react-markdown as dependency)
function simpleMarkdown(md: string): string {
  let html = md
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote><p>$1</p></blockquote>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr />')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')

  // Wrap in paragraph tags
  html = '<p>' + html + '</p>'

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>(<h[123]>)/g, '$1')
  html = html.replace(/(<\/h[123]>)<\/p>/g, '$1')
  html = html.replace(/<p>(<hr \/>)<\/p>/g, '$1')
  html = html.replace(/<p>(<blockquote>)/g, '$1')
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1')
  html = html.replace(/<p>(<li>)/g, '<ul>$1')
  html = html.replace(/(<\/li>)<\/p>/g, '$1</ul>')

  return html
}
