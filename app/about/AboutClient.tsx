'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from '@/components/NewsletterSignup'
import type { ArticleMeta } from '@/lib/articles'

export default function AboutClient({ recentArticles }: { recentArticles: ArticleMeta[] }) {
  return (
    <>
      {/* ── Section 1: My Manifesto (left-aligned text + right image) ── */}
      <section className="max-w-[80rem] mx-auto px-[5%] pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-6">
              My Manifesto
            </h2>
            <div className="space-y-6 text-base leading-relaxed">
              <p className="text-text-primary font-medium text-lg">
                Enterprises are built to deploy human capital.
              </p>
              <p className="text-text-primary font-medium text-lg">
                AI-native operations assume a different unit of work entirely — <strong>digital labour.</strong>
              </p>
              <p className="text-text-primary">
                It&apos;s not possible to make the transition inside an entity whose every process, governance structure and cost model assumes a human as the unit of work.
              </p>
              <p className="text-text-primary font-medium text-lg">
                This is not a technology problem. It is a <strong>structural</strong> one.<br />
                And it is the problem every enterprise is now trying to solve.
              </p>
            </div>
          </motion.div>

          {/* Right column — creature illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center"
          >
            <Image
              src="/images/blog-image-1.png"
              alt="Illustration"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Work (right-aligned text + left image) ── */}
      <section className="max-w-[80rem] mx-auto px-[5%] pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column — creature illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-2 md:order-1"
          >
            <Image
              src="/images/blog-image-2.png"
              alt="Illustration"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto"
            />
          </motion.div>

          {/* Right column — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <h2 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-6">
              The Work
            </h2>
            <div className="space-y-4 text-text-primary text-base leading-relaxed">
              <p>
                I&apos;ve turned around a £450M healthcare business. Built an FCA-regulated insurtech from scratch. Deployed capital that created a unicorn. Chaired the AI and emerging tech network for 80+ health insurers across 40+ markets.
              </p>
              <p className="text-text-primary font-medium">
                But the real work isn&apos;t any of that.
              </p>
              <p>
                The real work is showing leaders what happens when you stop optimising the old architecture — and start building the new one. When you stop deploying humans into processes designed in the 1990s and start designing for the workforce you&apos;ll actually have: <strong className="text-text-primary">part carbon, part code.</strong>
              </p>
              <p className="text-text-primary font-medium">
                I know what breaks. And I know what builds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: What I Write (left-aligned text + right image) ── */}
      <section className="max-w-[80rem] mx-auto px-[5%] pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-6">
              What I Write
            </h2>
            <div className="space-y-4 text-text-primary text-base leading-relaxed">
              <p>This isn&apos;t theory. It&apos;s field notes.</p>
              <p>I document four things:</p>
              <p>
                <strong className="text-text-primary">BUILD.</strong> AI-native architecture. Evaluation. Agents. Infrastructure. How to actually build systems that work.
              </p>
              <p>
                <strong className="text-text-primary">GOVERN.</strong> Board oversight. Risk. AI policy. Accountability. How to control what you&apos;ve built.
              </p>
              <p>
                <strong className="text-text-primary">TRANSFORM.</strong> Venture build. Transformation strategy. Operating models. How to change without breaking.
              </p>
              <p>
                <strong className="text-text-primary">PREPARE.</strong> Future of work. Education. Critical thinking. How to ready your people.
              </p>
              <p>No consultants&apos; slide decks. No permission-seeking.</p>
              <p>Just what&apos;s working at the intersection of AI, insurance and healthcare. And what isn&apos;t.</p>
            </div>
          </motion.div>

          {/* Right column — creature illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Image
              src="/images/blog-image-3.png"
              alt="Illustration"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Who This Is For (right-aligned text + left image) ── */}
      <section className="max-w-[80rem] mx-auto px-[5%] pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column — creature illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-2 md:order-1"
          >
            <Image
              src="/images/blog-image-1.png"
              alt="Illustration"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto"
            />
          </motion.div>

          {/* Right column — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <h2 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-6">
              Who This Is For
            </h2>
            <div className="space-y-4 text-text-primary text-base leading-relaxed">
              <p>
                Board members who know something huge is wrong but can&apos;t name it.
              </p>
              <p>
                Executives done with digital transformation that doesn&apos;t transform anything.
              </p>
              <p>
                Operators who want to fix the system. Not just optimise it.
              </p>
              <p>
                Founders building at the edge.
              </p>
              <p className="text-text-primary font-medium">
                If you&apos;re here, you&apos;re not satisfied with incrementalism.
              </p>
              <p className="text-text-primary font-medium">Good.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter Section (dark, "Join the uprising") ── */}
      <section className="relative overflow-hidden">
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

      {/* ── Read my thoughts (3 recent articles) ── */}
      {recentArticles.length > 0 && (
        <section className="max-w-[80rem] mx-auto px-[5%] py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-3">
              Read my thoughts
            </h2>
            <p className="text-text-primary text-base">Read articles related.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentArticles.map((article) => {
              const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).toUpperCase()

              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  {/* Hero image */}
                  {article.heroImage && (
                    <Link href={`/${article.slug}`} className="block mb-4">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={article.heroImage}
                          alt={article.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  )}

                  <div className="text-sm text-text-muted mb-2">{formattedDate}</div>

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
                </motion.div>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
