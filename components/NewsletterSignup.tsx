'use client'

import { useState } from 'react'

export default function NewsletterSignup({ variant = 'default' }: { variant?: 'default' | 'inline' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Beehiiv API
    if (email) {
      setStatus('success')
      setEmail('')
    }
  }

  if (status === 'success') {
    return (
      <p className={`text-sm font-medium ${variant === 'dark' ? 'text-accent' : 'text-accent'}`}>
        You&apos;re in. Welcome to Bionic.
      </p>
    )
  }

  const isDark = variant === 'dark'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={`flex-1 px-4 py-3 rounded-full text-sm border outline-none transition-all focus:ring-2 focus:ring-accent/30 ${
          isDark
            ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40'
            : 'bg-bg-elevated border-border text-text-primary placeholder:text-text-muted'
        }`}
      />
      <button
        type="submit"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isDark
            ? 'bg-accent text-white hover:bg-accent-dark'
            : 'bg-text-primary text-bg hover:bg-accent'
        }`}
      >
        Subscribe
      </button>
    </form>
  )
}
