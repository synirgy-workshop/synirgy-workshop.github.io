'use client'

import { Calendar, Bell, FileCheck, Award, Users } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import GridOverlay from '@/components/GridOverlay'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function ImportantDates() {
  const dates = [
    {
      date: '15 January 2026',
      event: 'Abstract Submission Deadline',
      description: 'Submit your paper abstract',
      icon: FileCheck,
      color: 'from-blue-900 to-black'
    },
    {
      date: '19 January 2026',
      event: 'Paper Submission Deadline',
      description: 'Submit your full, short, or position paper',
      icon: Calendar,
      color: 'from-blue-900 to-black'
    },
    {
      date: '13 February 2026',
      event: 'Notification of Acceptance',
      description: 'Authors will be notified of review decisions',
      icon: Bell,
      color: 'from-blue-900 to-black'
    },
    {
      date: '23 February 2026',
      event: 'Camera-Ready Deadline',
      description: 'Submit final version of accepted papers',
      icon: FileCheck,
      color: 'from-blue-900 to-black'
    },
    {
      date: '2 April 2026',
      event: 'Workshop Date',
      description: 'SynIRgy Workshop at ECIR 2026',
      icon: Award,
      color: 'from-blue-900 to-black'
    },
    {
      date: '29 March - 2 April 2026',
      event: 'ECIR 2026 Conference',
      description: 'Main conference dates',
      icon: Users,
      color: 'from-blue-900 to-black'
    }
  ]

  return (
    <div className="relative">
      <PageBanner
        title="Important Dates"
        description="Key deadlines and milestones for the SynIRgy Workshop"
      />

      <section className="relative py-24">
        <div className="container relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Calendar className="mr-2 h-4 w-4" />
                All deadlines are 23:59 AoE (Anywhere on Earth)
              </Badge>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

            {/* Timeline items */}
            <div className="space-y-16">
              {dates.map((item, index) => {
                const isEven = index % 2 === 0
                const Icon = item.icon

                return (
                  <div
                    key={index}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center ${
                      isEven ? '' : 'md:grid-flow-dense'
                    }`}
                  >
                    {/* Left side */}
                    <div className={`${isEven ? 'md:text-right' : 'md:col-start-2'}`}>
                      <div className="inline-block">
                        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.date}
                        </div>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center relative z-10">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Right side */}
                    <div className={`${isEven ? 'md:col-start-2' : ''}`}>
                      <div className="p-6 rounded-xl border border-border bg-card">
                        <div className="flex items-start gap-4 md:hidden mb-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>
            Additional Information
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Submission System
              </h3>
              <p className="text-muted-foreground mb-4">
                Papers should be submitted through EasyChair. Please review the submission guidelines before submitting.
              </p>
              <div className="space-y-2">
                <Link
                  href="https://easychair.org/conferences?conf=synirgy2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  Submit on EasyChair →
                </Link>
                <br />
                <Link
                  href="/submission"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  View Submission Guidelines →
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-4">
                Follow us on social media or check this page regularly for updates on important dates
                and workshop announcements.
              </p>
              <Link
                href="/venue"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                Contact & Social Media →
              </Link>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl border border-primary bg-primary/5">
            <div className="flex items-start gap-4">
              <FileCheck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Registration Requirement</h4>
                <p className="text-sm text-muted-foreground">
                  At least one author of each accepted paper must register for ECIR 2026 and the workshop
                  to present the paper. Please refer to the main conference website for registration details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
