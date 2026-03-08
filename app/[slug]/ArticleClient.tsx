'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ReadingProgress from '@/components/ReadingProgress'
import ArticleCard from '@/components/ArticleCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import ScrollReveal from '@/components/ScrollReveal'
import type { ArticleMeta } from '@/lib/articles'
interface ArticleClientProps {
  meta: ArticleMeta
  content: string
  related: ArticleMeta[]
}

export default function ArticleClient({ meta, content, related }: ArticleClientProps) {
  const formattedDate = new Date(meta.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <ReadingProgress />

      <article className="max-w-[720px] mx-auto px-6 md:px-8 pt-8 md:pt-16 pb-12">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-wider text-accent uppercase">{meta.category}</span>
            <span className="text-border">·</span>
            <time className="text-xs text-text-muted">{formattedDate}</time>
            <span className="text-border">·</span>
            <span className="text-xs text-text-muted">{meta.readingTime}</span>
          </div>

          <h1 className="font-editorial text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
            {meta.title}
          </h1>

          {meta.subtitle && (
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              {meta.subtitle}
            </p>
          )}

          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border-light">
            <div className="w-9 h-9 rounded-full bg-bg-dark flex items-center justify-center text-bg text-xs font-bold">
              AP
            </div>
            <div>
              <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                {meta.author}
              </Link>
              <p className="text-xs text-text-muted">Bionic</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose"
          dangerouslySetInnerHTML={{ __html: simpleMarkdown(content) }}
        />

        {/* End CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="bg-bg-card rounded-xl border border-border-light p-8 text-center">
            <h3 className="font-editorial text-xl font-bold mb-2">Want to explore this for your organisation?</h3>
            <p className="text-text-muted text-sm mb-5">30 minutes. No pitch. Just clarity.</p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-text-primary text-bg rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-secondary mb-4">Get field notes like this in your inbox.</p>
          <NewsletterSignup />
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="max-w-[1100px] mx-auto px-6 md:px-8 py-12 border-t border-border">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-6">Keep reading</p>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </ScrollReveal>
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
