'use client'

import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: string
  description?: string
  className?: string
}

export default function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative py-24 overflow-hidden", className)}>
      <div className="container relative z-10">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
