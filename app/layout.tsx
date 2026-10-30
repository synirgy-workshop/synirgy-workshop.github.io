import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SynIRgy Workshop - WWW 2027',
  description: 'SynIRgy: Simulation and Synthetic Data for Web-Scale Information Access, a workshop at The Web Conference 2027',
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

