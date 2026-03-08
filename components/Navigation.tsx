'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-md shadow-sm border-b border-border-light'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Left nav links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Wild Thoughts
              </Link>
              <span className="text-border">/</span>
              <Link
                href="/about"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                About
              </Link>
              <span className="text-border">/</span>
              <Link
                href="/contact"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Center logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image
                src="/images/bionic-logo.svg"
                alt="BIONIC"
                width={scrolled ? 120 : 154}
                height={scrolled ? 52 : 66}
                className="transition-all duration-300"
                priority
              />
            </Link>

            {/* Right - Book a Call */}
            <div className="hidden md:flex items-center ml-auto">
              <Link
                href="/contact"
                className="text-sm font-medium px-5 py-2 bg-text-primary text-bg rounded-full hover:bg-accent transition-colors duration-200"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden ml-auto p-2"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-text-primary"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-full bg-text-primary"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-text-primary"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-2xl font-editorial">
                Wild Thoughts
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="text-2xl font-editorial">
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-2xl font-editorial">
                Contact
              </Link>
              <hr className="border-border my-4" />
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium px-6 py-3 bg-text-primary text-bg rounded-full text-center"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
