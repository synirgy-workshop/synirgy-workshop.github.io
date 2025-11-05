'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Network } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/call-for-papers', label: 'Call for Papers' },
    { href: '/important-dates', label: 'Important Dates' },
    { href: '/program', label: 'Program' },
    { href: '/speakers', label: 'Speakers' },
    { href: '/organizers', label: 'Organizers' },
    { href: '/submission', label: 'Submission' },
    { href: '/accepted-papers', label: 'Accepted Papers' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-border bg-background shadow-sm">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-8 hover:opacity-80 transition-opacity">
          <Network className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl hidden md:inline-block">
            SynIRgy Workshop
          </span>
          <span className="font-bold text-xl md:hidden">
            SynIRgy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-base font-medium transition-colors hover:text-primary relative group",
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-2 border-border">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Network className="h-7 w-7 text-primary" />
                  <span className="font-bold text-xl">SynIRgy Workshop</span>
                </div>
                <Separator className="bg-border h-0.5" />
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 text-base font-medium transition-colors rounded-md border",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground border-primary font-bold"
                        : "text-foreground border-border hover:border-primary"
                    )}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="ml-auto h-3 w-3 rounded-full bg-white" />
                    )}
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
