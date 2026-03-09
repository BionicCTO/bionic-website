'use client'

import { useState, useMemo } from 'react'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function NewsletterSignup({ variant = 'default' }: { variant?: 'default' | 'inline' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [loading, setLoading] = useState(false)
  const emailValid = useMemo(() => isValidEmail(email), [email])

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

  const isDark = variant === 'dark'

  if (status === 'success') {
    return (
      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-accent'}`}>
        Thank you! Your submission has been received!
      </p>
    )
  }

  if (status === 'error') {
    return (
      <div className="text-center">
        <p className={`text-sm mb-2 ${isDark ? 'text-white' : 'text-red-500'}`}>
          Oops! Something went wrong while submitting the form.
        </p>
        <button onClick={() => setStatus('idle')} className="text-sm text-accent underline">
          Try again
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full grid grid-cols-[1fr_max-content] gap-4"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`w-full px-3 py-2 rounded-lg text-base border outline-none transition-all min-h-[2.75rem] ${
          isDark
            ? 'bg-white border-white text-[#1A1A1A] placeholder:text-[#5C5650] focus:border-white focus:shadow-[0_0_0_4px_rgba(255,255,255,0.1)]'
            : 'bg-white border-[#b4b0ac] text-text-primary placeholder:text-black/50 hover:bg-[#f3f3f2] focus:bg-[#f3f3f2] focus:border-black focus:shadow-[0_0_0_4px_rgba(0,0,0,0.1)]'
        }`}
      />
      <button
        type="submit"
        disabled={loading}
        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all min-h-[2.75rem] border ${
          isDark
            ? `bg-white text-black border-white ${emailValid ? 'hover:bg-accent hover:border-accent hover:text-white' : 'hover:bg-[#f3f3f2]'}`
            : `bg-black text-white border-black ${emailValid ? 'hover:bg-accent hover:border-accent' : 'hover:bg-[#242121]'}`
        }`}
      >
        {loading ? 'Please wait...' : 'Sign up'}
      </button>
    </form>
  )
}
