import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY
    const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID || 'pub_bfa9e80f-1540-4005-ae5a-f6a40e273cf2'

    if (!BEEHIIV_API_KEY) {
      // Fallback: redirect to Beehiiv subscribe page if no API key configured
      return NextResponse.json({ success: true, fallback: true })
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'bionic_website',
        }),
      }
    )

    if (!res.ok) {
      const error = await res.text()
      console.error('Beehiiv API error:', error)
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
