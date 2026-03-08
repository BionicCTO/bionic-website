'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to form handler (Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <section className="max-w-[1100px] mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <h1 className="font-editorial text-4xl md:text-5xl font-bold mb-4">
          Let&apos;s talk.
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-12">
          30 minutes. No pitch. No deck. Just a genuine exploration of where you are and whether I can help.
        </p>

        {/* Calendly embed placeholder */}
        <div className="bg-bg-elevated border border-border-light rounded-xl p-8 mb-12">
          <h2 className="font-editorial text-xl font-bold mb-2">Book a Call</h2>
          <p className="text-text-muted text-sm mb-4">
            Pick a time that works for you.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 bg-text-primary text-bg rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            Open Calendar →
          </a>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="font-editorial text-xl font-bold mb-2">Or send a message</h2>
          <p className="text-text-muted text-sm mb-6">
            Not sure where to start? Most conversations begin here.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center"
            >
              <p className="text-accent font-medium text-lg mb-1">Message sent.</p>
              <p className="text-text-secondary text-sm">I&apos;ll be in touch shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all"
              />
              <textarea
                placeholder="What are you working on?"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-text-primary text-bg rounded-full text-sm font-medium hover:bg-accent transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </motion.div>

      {/* Direct contact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 pt-8 border-t border-border"
      >
        <div className="flex flex-wrap gap-8 text-sm text-text-muted">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-text-secondary block mb-1">Email</span>
            <a href="mailto:ap@bionic.global" className="hover:text-accent transition-colors">ap@bionic.global</a>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-text-secondary block mb-1">LinkedIn</span>
            <a href="https://www.linkedin.com/in/amitpatel" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Connect →</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
