import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-[48rem] mx-auto px-[5%] pt-12 md:pt-20 pb-16 md:pb-24">
      <h1 className="font-editorial text-[2rem] md:text-[2.75rem] font-semibold leading-[1.2] mb-4">
        Privacy Policy
      </h1>
      <p className="text-text-muted text-sm mb-10">Last updated: March 2026</p>

      <div className="prose space-y-8 text-text-primary text-base leading-relaxed">
        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Who we are</h2>
          <p>
            Bionic (<strong>bionic.global</strong>) is operated by Amit Patel. This site publishes
            articles, field notes and a newsletter on AI, leadership and enterprise transformation.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">What data we collect</h2>
          <p>
            <strong>Newsletter subscribers.</strong> When you sign up to the newsletter we collect
            your email address. This is stored and processed by our email provider,{' '}
            <a href="https://www.beehiiv.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Beehiiv
            </a>
            , under their privacy policy. We do not sell, rent or share your email address with
            third parties.
          </p>
          <p className="mt-4">
            <strong>Analytics.</strong> We may use privacy-friendly, cookie-free analytics to
            understand which articles are read and where traffic comes from. No personal data is
            collected or shared with advertisers.
          </p>
          <p className="mt-4">
            <strong>Booking.</strong> If you book a call via Cal.com, your name and email are
            processed by{' '}
            <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Cal.com
            </a>{' '}
            under their privacy policy.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Cookies</h2>
          <p>
            This site does not use tracking cookies. No cookie consent banner is required.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Your rights</h2>
          <p>
            Under UK GDPR and the Data Protection Act 2018, you have the right to access, correct
            or delete any personal data we hold about you. To exercise these rights, email{' '}
            <a href="mailto:ap@bionic.global" className="text-accent hover:underline">ap@bionic.global</a>.
          </p>
          <p className="mt-4">
            To unsubscribe from the newsletter, click the unsubscribe link at the bottom of any
            email.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Third-party services</h2>
          <p>This site uses the following third-party services:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Vercel</strong> — hosting and content delivery</li>
            <li><strong>Beehiiv</strong> — newsletter management</li>
            <li><strong>Cal.com</strong> — appointment scheduling</li>
          </ul>
          <p className="mt-4">
            Each service has its own privacy policy. We encourage you to review them.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected on
            this page with an updated date.
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-[1.25rem] font-semibold mb-3">Contact</h2>
          <p>
            For any privacy-related questions, email{' '}
            <a href="mailto:ap@bionic.global" className="text-accent hover:underline">ap@bionic.global</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
