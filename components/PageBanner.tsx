'use client'

import Image from 'next/image'
import PageHero from './PageHero'

interface PageBannerProps {
  title: string
  description?: string
  className?: string
}

export default function PageBanner({ title, description, className }: PageBannerProps) {
  return (
    <div className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="../../banner-synirgy.png"
          alt="SynIRgy Workshop Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient Fade to White at Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content with PageHero */}
      <div className="relative z-10 w-full">
        <PageHero title={title} description={description} className={className} />
      </div>
    </div>
  )
}
