import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Post Pilot AI - AI-Powered Social Media Content Creation',
  description: 'Transform your social media presence with AI that understands trending topics, creates engaging content, and schedules posts across all platforms automatically.',
  keywords: 'AI content creation, social media automation, content scheduling, viral content, social media marketing',
  authors: [{ name: 'Post Pilot AI' }],
  openGraph: {
    title: 'Post Pilot AI - Create Viral Social Content in Seconds',
    description: 'Transform your social media presence with AI-powered content generation, smart scheduling, and performance analytics.',
    url: 'https://post-pilot-ai.vercel.app',
    siteName: 'Post Pilot AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Post Pilot AI - AI-Powered Content Creation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post Pilot AI - Create Viral Social Content in Seconds',
    description: 'Transform your social media presence with AI-powered content generation and smart scheduling.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}