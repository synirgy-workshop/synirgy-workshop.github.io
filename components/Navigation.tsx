'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const pathname = usePathname().replace(/(.)\/$/, '$1')
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/call-for-papers', label: 'Call for Papers' },
    { href: '/important-dates', label: 'Important Dates' },
    { href: '/submission', label: 'Submission' },
    { href: '/program', label: 'Program' },
    { href: '/organizers', label: 'Organizers' },
    { href: '/2026', label: '2026 Edition' },
  ]

  return (
    <nav className="site-navigation sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="wide-content flex h-20 items-center justify-between">
        <Link href="/" className="brand-mark">
          <span className="brand-symbol" aria-hidden="true">⁙</span> SynIRgy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={cn(
                'nav-link text-sm transition-colors hover:text-foreground',
                pathname === item.href ? 'font-medium text-foreground' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
              <div className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'rounded-md px-3 py-2 transition-colors hover:bg-muted',
                      pathname === item.href ? 'bg-muted font-medium' : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
