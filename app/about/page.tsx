import type { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description: 'The manifesto, the work, and the practitioner behind Bionic.',
}

export default function AboutPage() {
  const articles = getAllArticles().slice(0, 3)
  return <AboutClient recentArticles={articles} />
}
