import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description: 'The manifesto, the work, and the practitioner behind Bionic.',
}

export default function AboutPage() {
  return <AboutClient />
}
