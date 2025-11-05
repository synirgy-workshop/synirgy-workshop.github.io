'use client'

import { Clock, Coffee, Presentation, Users, Award } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Program() {
  const schedule = [
    { time: '09:00 - 09:15', event: 'Opening & Welcome', type: 'opening', icon: Users },
    { time: '09:15 - 11:00', event: 'Keynote + Paper Session 1: Simulation Methods', type: 'keynote', icon: Presentation },
    { time: '11:00 - 11:30', event: 'Break and Poster Session', type: 'break', icon: Coffee },
    { time: '11:30 - 12:15', event: 'Keynote + Paper Session 2: Synthetic Data and Evaluation', type: 'keynote', icon: Presentation },
    { time: '12:15 - 12:30', event: 'Closing Remarks and Future Directions', type: 'closing', icon: Award }
  ]

  const getBadgeVariant = (type: string) => {
    switch(type) {
      case 'keynote': return 'default'
      case 'papers': return 'secondary'
      case 'break': return 'outline'
      default: return 'secondary'
    }
  }

  return (
    <div className="relative">
      <PageBanner title="Program" description="Half-day workshop schedule combining research presentations with networking and discussions" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="Detailed program will be announced closer to the workshop date">
            Tentative Schedule
          </SectionHeading>
          <div className="space-y-4">
            {schedule.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedCard key={index}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{item.event}</h3>
                          <Badge variant={getBadgeVariant(item.type)}>{item.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href="/accepted-papers" className="text-primary hover:underline inline-flex items-center gap-2">
              View Accepted Papers →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
