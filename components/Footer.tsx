'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative">
      <div className="px-[5%]">
        <div className="max-w-[80rem] mx-auto py-16 md:py-20">
          {/* Top section: Logo + details | Nav columns */}
          <div className="pb-10 md:pb-16">
            <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16">
              {/* Left: Logo + Built by */}
              <div>
                <Link href="/" className="inline-block mb-6 -ml-[16px]">
                  <Image src="/images/bionic-logo.svg" alt="BIONIC" width={120} height={50} />
                </Link>
                <div className="mb-1 text-base text-text-secondary">
                  Built by <Link href="/about" className="underline hover:text-text-primary transition-colors">Amit Patel</Link>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-4 mt-8">
                  <a href="https://www.linkedin.com/in/amitpatel" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z" />
                    </svg>
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors" aria-label="X (Twitter)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: Nav links */}
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-sm font-semibold py-1 hover:text-[#b4b0ac] transition-colors">Home</Link>
                <Link href="/about" className="text-sm font-semibold py-1 hover:text-[#b4b0ac] transition-colors">About</Link>
                <Link href="/contact" className="text-sm font-semibold py-1 hover:text-[#b4b0ac] transition-colors">Contact</Link>
                <Link href="/subscribe" className="text-sm font-semibold py-1 hover:text-[#b4b0ac] transition-colors">Subscribe</Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#d1cdca]" />

          {/* Bottom bar */}
          <div className="pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-text-secondary">
                &copy; {new Date().getFullYear()} Bionic. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy-policy" className="underline hover:text-text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="underline hover:text-text-primary transition-colors">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
