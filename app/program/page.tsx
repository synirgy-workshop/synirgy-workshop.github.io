'use client'

import { Clock, Coffee, Presentation, Users, Award, Mic, MessageSquare, Printer, FileText, MapPin, Calendar } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Program() {
  const schedule = [
    { time: '13:30 - 13:40', event: 'Opening & Welcome', type: 'opening', icon: Users },
    { time: '13:40 - 14:25', event: 'Keynote: Dr. Dávid Zibriczky', description: 'From Evaluation to Automation: Synthetic Data for RAG Assistants and Semi-Agentic Orchestration - 35 min talk + 10 min Q&A', type: 'keynote', icon: Presentation },
    { time: '14:25 - 14:40', event: 'Presentation: Sami Heikkinen', description: '10 min talk + 2 min Q&A', type: 'presentation', icon: Presentation },
    { time: '14:40 - 14:45', event: '5-Minute Madness', description: '1-minute lightning talk per poster', type: 'poster', icon: Mic },
    { time: '14:45 - 15:00', event: 'Poster Discussion', type: 'poster', icon: MessageSquare },
    { time: '15:00 - 15:30', event: 'Coffee Break', type: 'break', icon: Coffee },
    { time: '15:30 - 16:40', event: 'Paper Presentations', description: '5 presentations (10 min talk + 4 min Q&A each)', type: 'presentation', icon: Presentation },
    { time: '16:55 - 17:00', event: 'Closing Remarks', type: 'closing', icon: Award }
  ]

  const getBadgeVariant = (type: string) => {
    switch(type) {
      case 'keynote': return 'default'
      case 'presentation': return 'secondary'
      case 'poster': return 'secondary'
      case 'break': return 'outline'
      default: return 'secondary'
    }
  }

  return (
    <div className="relative">
      <PageBanner title="Program" description="Half-day afternoon workshop on 2 April 2026, combining keynote, paper presentations, and poster discussions" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">2 April 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">13:30 - 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Room H3SO3</span>
            </div>
          </div>

          <SectionHeading subtitle="Afternoon session with keynote, presentations, and poster discussion">
            Workshop Schedule
          </SectionHeading>
          <div className="divide-y divide-border">
            {schedule.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center gap-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0" style={{ width: '140px', fontVariantNumeric: 'tabular-nums' }}>
                    <Clock className="h-4 w-4 shrink-0" />
                    <span className="whitespace-nowrap">{item.time}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{item.event}</h3>
                      <Badge variant={getBadgeVariant(item.type)}>{item.type}</Badge>
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16">
            <SectionHeading subtitle="Guidelines for poster presenters at the workshop">
              Poster Information
            </SectionHeading>
            <AnimatedCard>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Each poster will be introduced with a <strong>1-minute lightning talk</strong> during the 5-Minute Madness session, followed by a dedicated poster discussion period.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Format Requirements
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                      <li><strong>Size:</strong> A0 portrait (841 &times; 1189 mm); A1 also acceptable</li>
                      <li><strong>File:</strong> PDF (single page), print-ready, fonts embedded</li>
                      <li><strong>Images:</strong> 300 dpi recommended</li>
                      <li><strong>Paper:</strong> Standard matte/satin poster paper (fabric posters may be available - ask the print shop)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Printer className="h-4 w-4 text-primary" />
                      Printing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      For printing companies in Delft, see the{' '}
                      <a
                        href="https://ecir2026.eu/programme/information-for-authors-of-accepted-papers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        ECIR 2026 information for authors
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
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
