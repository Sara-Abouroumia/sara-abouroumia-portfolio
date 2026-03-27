import { DM_Serif_Display, Space_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Sara Abouroumia — Full Stack Engineer',
  description:
    'Full stack software engineer specialising in cloud, deployment, and production systems.',
  metadataBase: new URL('https://sara-abouroumia-portfolio.vercel.app'),
  openGraph: {
    title: 'Sara Abouroumia — Full Stack Engineer',
    description:
      'Full stack software engineer specialising in cloud, deployment, and production systems.',
    url: 'https://sara-abouroumia-portfolio.vercel.app',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Sara Abouroumia — Full Stack Engineer',
    description:
      'Full stack software engineer specialising in cloud, deployment, and production systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${spaceMono.variable} ${dmSans.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
