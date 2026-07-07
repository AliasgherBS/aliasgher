import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alefiyah Abbas',
  description: 'Creative portfolio of Alefiyah Abbas - Writer, SEO Specialist, and Digital Media Strategist helping brands grow through content and digital storytelling.',
  keywords: ['writer', 'SEO specialist', 'digital media strategist', 'content creator', 'social media', 'copywriter'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Alefiyah Abbas',
    description: 'Writer, SEO Specialist & Digital Storyteller',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
