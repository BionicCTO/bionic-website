'use client'

import { useState } from 'react'

export default function NewsletterSignup({ variant = 'default' }: { variant?: 'default' | 'inline' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <p className={`text-sm font-medium ${variant === 'dark' ? 'text-accent' : 'text-accent'}`}>
        You&apos;re in. Welcome to Bionic.
      </p>
    )
  }

  if (status === 'error') {
    return (
      <div className="text-center">
        <p className="text-sm text-red-500 mb-2">Something went wrong. Please try again.</p>
        <button onClick={() => setStatus('idle')} className="text-sm text-accent underline">
          Try again
        </button>
      </div>
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
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
