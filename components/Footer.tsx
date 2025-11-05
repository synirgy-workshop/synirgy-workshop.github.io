import { Network, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="container relative py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Network className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SynIRgy Workshop</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Simulation and Synthetic Data for Information Retrieval
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/call-for-papers" className="text-muted-foreground hover:text-primary transition-colors">
                Call for Papers
              </Link>
              <Link href="/important-dates" className="text-muted-foreground hover:text-primary transition-colors">
                Important Dates
              </Link>
              <Link href="/submission" className="text-muted-foreground hover:text-primary transition-colors">
                Submission
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Connect</h3>
            <a
              href="mailto:synirgy@outlook.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              synirgy@outlook.com
            </a>
            <p className="text-sm text-muted-foreground">
              Part of{' '}
              <a
                href="https://ecir2026.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ECIR 2026
              </a>
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} SynIRgy Workshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
