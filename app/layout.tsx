
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const siteUrl = 'https://mahekoverseas.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Mahek Overseas | Overseas Recruitment & Global Careers',
    template: '%s | Mahek Overseas',
  },

  description:
    'Explore overseas recruitment and international career opportunities with Mahek Overseas. Enquire about recruitment services and opportunities across the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain and other destinations.',

  applicationName: 'Mahek Overseas',

  alternates: {
    canonical: '/',
  },

  keywords: [
    'Mahek Overseas',
    'overseas recruitment consultancy',
    'overseas recruitment agency India',
    'international recruitment',
    'manpower recruitment consultancy',
    'Gulf jobs',
    'jobs abroad',
    'UAE recruitment',
    'Saudi Arabia recruitment',
    'Qatar recruitment',
    'Kuwait recruitment',
    'Oman recruitment',
    'Bahrain recruitment',
  ],

  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Mahek Overseas',
    title: 'Mahek Overseas | Overseas Recruitment & Global Careers',
    description:
      'Connecting talent with international opportunities. Explore overseas recruitment services and global career enquiries with Mahek Overseas.',
    images: [
      {
        url: '/images/hero-workers.png',
        alt: 'Mahek Overseas international recruitment services',
      },
    ],
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mahek Overseas | Overseas Recruitment & Global Careers',
    description:
      'Explore international recruitment services and global career opportunities with Mahek Overseas.',
    images: ['/images/hero-workers.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  icons: {
    icon: '/images/mahek-logo-full.jpg',
    apple: '/images/mahek-logo-full.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b3d2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
