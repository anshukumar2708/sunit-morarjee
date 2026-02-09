import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: 'hsl(220 15% 8%)',
}

export const metadata: Metadata = {
  title: 'SUNIT MORARJEE - Bollywood Actor',
  description: 'Professional portfolio of Sunit Morarjee - Award-winning Bollywood actor with 15+ years of experience in leading roles across blockbuster films.',
  keywords: ['Bollywood', 'Actor', 'Portfolio', 'Films', 'Entertainment'],
  authors: [{ name: 'Sunit Morarjee' }],
  openGraph: {
    title: 'SUNIT MORARJEE - Bollywood Actor',
    description: 'Award-winning Bollywood actor with 15+ years of experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="hsl(220 15% 8%)" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
