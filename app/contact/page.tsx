import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a call with Amit Patel. 30 minutes. No pitch. Just clarity.',
}

export default function ContactPage() {
  return <ContactClient />
}
