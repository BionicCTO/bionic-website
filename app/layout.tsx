import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://bionic.global'),
  title: {
    default: 'Bionic — Where leaders learn to build',
    template: '%s | Bionic',
  },
  description: 'Field notes on AI, leadership, and building what comes next. By Amit Patel.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bionic — Where leaders learn to build',
    description: 'Field notes on AI, leadership, and building what comes next.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Bionic',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Bionic — Where leaders learn to build' }],
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
        {/* JSON-LD: WebSite + Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Bionic',
                url: 'https://bionic.global',
                description: 'Field notes on AI, leadership, and building what comes next.',
                author: { '@type': 'Person', name: 'Amit Patel' },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Amit Patel',
                url: 'https://bionic.global/about',
                jobTitle: 'AI & Enterprise Strategy Advisor',
                sameAs: ['https://www.linkedin.com/in/amitpatel911'],
                worksFor: { '@type': 'Organization', name: 'Bionic', url: 'https://bionic.global' },
              },
            ]),
          }}
        />

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
