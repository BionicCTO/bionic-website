'use client'

import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      {/* Newsletter band */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-editorial text-2xl md:text-3xl mb-3">Stay in the loop.</h3>
          <p className="text-text-secondary text-sm mb-6">
            Field notes on AI, leadership, and building what comes next. No spam. Unsubscribe anytime.
          </p>
          <NewsletterSignup />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-black tracking-[0.15em] text-sm uppercase">BIONIC</span>
              <span className="text-text-muted text-sm">· Where leaders learn to build.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <Link href="/" className="hover:text-text-primary transition-colors">Wild Thoughts</Link>
              <Link href="/about" className="hover:text-text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Contact</Link>
              <a
                href="https://www.linkedin.com/in/amitpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-text-muted text-xs">
              © {new Date().getFullYear()} Bionic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
