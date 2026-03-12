import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

export default function TermsPage() {
  return (
    <section className="max-w-[48rem] mx-auto px-[5%] pt-12 md:pt-20 pb-16 md:pb-24">
      <h1 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-4">
        Terms &amp; Conditions
      </h1>
      <p className="text-text-muted text-sm mb-10">Last updated: March 2026</p>

      <div className="prose space-y-8 text-text-primary text-base leading-relaxed">
        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Overview</h2>
          <p>
            By accessing and using <strong>bionic.global</strong> you agree to these terms. If you
            do not agree, please do not use the site.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Content</h2>
          <p>
            All articles, field notes and other written content on this site are the original work
            of Amit Patel unless otherwise attributed. Content is provided for informational and
            educational purposes only.
          </p>
          <p className="mt-4">
            You may share links to articles freely. You may not reproduce, republish or redistribute
            full articles without written permission. Brief quotations with attribution and a link
            back to the original are welcome.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">AI-generated media</h2>
          <p>
            Some content on this site — including video explainers and audio summaries — is generated
            using AI tools (such as Google NotebookLM). These are clearly labelled as
            &ldquo;AI-generated&rdquo; wherever they appear. While we review AI-generated content
            for accuracy, it should not be treated as professional advice.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Newsletter</h2>
          <p>
            By subscribing to the Bionic newsletter you consent to receiving periodic emails. You
            can unsubscribe at any time using the link at the bottom of each email. Your email
            address is processed in accordance with our{' '}
            <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Not professional advice</h2>
          <p>
            Nothing on this site constitutes legal, financial, medical or professional advice. The
            views expressed are personal opinions based on experience and research. You should seek
            appropriate professional counsel before making business decisions based on content
            published here.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">External links</h2>
          <p>
            This site may link to third-party websites and resources. We are not responsible for the
            content, accuracy or practices of external sites.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Limitation of liability</h2>
          <p>
            This site is provided &ldquo;as is&rdquo; without warranties of any kind. To the
            fullest extent permitted by law, Amit Patel and Bionic shall not be liable for any
            damages arising from your use of this site or reliance on its content.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Governing law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of England and
            Wales.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Contact</h2>
          <p>
            For any questions about these terms, email{' '}
            <a href="mailto:ap@bionic.global" className="text-accent hover:underline">ap@bionic.global</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
