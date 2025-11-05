'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
}

export default function SectionHeading({ children, className, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className={cn(
        "text-4xl md:text-5xl font-bold mb-4 relative inline-block",
        className
      )}>
        <span className="text-gradient">{children}</span>
        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-transparent" />
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-6">{subtitle}</p>
      )}
    </div>
  )
}
