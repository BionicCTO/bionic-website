import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Bionic — Where leaders learn to build',
    template: '%s | Bionic',
  },
  description: 'Field notes on AI, leadership, and building what comes next. By Amit Patel.',
  openGraph: {
    title: 'Bionic — Where leaders learn to build',
    description: 'Field notes on AI, leadership, and building what comes next.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg text-text-primary min-h-screen">
        {/* Background texture — fixed, 40% opacity like Webflow */}
        <div className="background-texture" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/background-texture.jpg" alt="" />
        </div>

        <div className="page-wrapper">
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
