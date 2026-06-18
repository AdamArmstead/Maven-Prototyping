import type { Metadata } from 'next'
import { Schibsted_Grotesk, Hanken_Grotesk, Newsreader, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--display',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--body',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--quote',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Adam Armstead — Product Design Leader',
  description:
    'Senior Manager of Product Design at ServiceNow. 20+ years turning ambiguity into shipped experiences, leading designers across business units and time zones.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${hanken.variable} ${newsreader.variable} ${ibmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
