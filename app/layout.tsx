import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Mahek Overseas | Global Recruitment Solutions',
  description:
    'Mahek Overseas is an ethical overseas recruitment consultancy connecting skilled professionals with verified employers in the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain and beyond.',
  generator: 'v0.app',
  keywords: [
    'overseas recruitment',
    'Gulf jobs',
    'manpower consultancy',
    'jobs abroad',
    'UAE jobs',
    'Saudi Arabia jobs',
    'Mahek Overseas',
  ],
  openGraph: {
    title: 'Mahek Overseas | Global Recruitment Solutions',
    description: 'Your Gateway to Global Careers — ethical, transparent overseas recruitment.',
    images: ['/images/hero-workers.png'],
    type: 'website',
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
