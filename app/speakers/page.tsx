'use client'

import { User } from 'lucide-react'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'

export default function Speakers() {
  const speakers = [
    {
      name: 'Dávid Zibriczky',
      affiliation: '',
      title: 'TBA',
      bio: 'Title and abstract to be announced.',
      image: '/speakers/david-zibriczky.png'
    }
  ]

  return (
    <div className="relative">
      <PageBanner title="Keynote Speaker" description="Distinguished speaker sharing insights on simulation and synthetic data for IR" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="">
            Keynote
          </SectionHeading>
          <div className="max-w-2xl mx-auto">
            {speakers.map((speaker, index) => (
              <AnimatedCard key={index} delay={0.1 * (index + 1)}>
                <div className="flex flex-col items-center text-center space-y-4">
                  {speaker.image ? (
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <User className="h-20 w-20 text-primary/50" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
                    {speaker.affiliation && (
                      <p className="text-muted-foreground mb-1">{speaker.affiliation}</p>
                    )}
                    <p className="text-sm text-muted-foreground italic">&ldquo;{speaker.title}&rdquo;</p>
                  </div>
                  <p className="text-muted-foreground">{speaker.bio}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
