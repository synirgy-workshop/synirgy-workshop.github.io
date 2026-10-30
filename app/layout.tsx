import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://synirgy-workshop.github.io'),
  title: 'SynIRgy Workshop - WWW 2027',
  description: 'SynIRgy: Simulation and Synthetic Data for Web-Scale Information Access, a workshop at The Web Conference 2027',
  openGraph: {
    type: 'website',
    siteName: 'SynIRgy Workshop',
    locale: 'en_GB',
    title: 'SynIRgy at The Web Conference 2027',
    description: 'Simulation and Synthetic Data for Web-Scale Information Access. Join the research conversation in Dublin, May 2027.',
    images: [{
      url: '/images/social-preview.jpg',
      width: 1200,
      height: 630,
      type: 'image/jpeg',
      alt: 'SynIRgy — Simulation and Synthetic Data for Web-Scale Information Access. Dublin, May 2027.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SynIRgy at The Web Conference 2027',
    description: 'Simulation and Synthetic Data for Web-Scale Information Access. Dublin, May 2027.',
    images: [{ url: '/images/social-preview.jpg', alt: 'SynIRgy workshop at The Web Conference 2027 in Dublin.' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

