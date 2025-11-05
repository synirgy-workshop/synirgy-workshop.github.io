'use client'

import { FileText, Award } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import Link from 'next/link'

export default function AcceptedPapers() {
  return (
    <div className="relative">
      <PageBanner title="Accepted Papers" description="List of accepted papers for SynIRgy Workshop 2026" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="Papers will be announced after the review process is complete">
            Coming Soon
          </SectionHeading>
          <AnimatedCard delay={0.1}>
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-primary/50 mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-6">
                The list of accepted papers will be published here after the notification deadline.
              </p>
              <Link href="/call-for-papers" className="text-primary hover:underline inline-flex items-center gap-2">
                Submit Your Paper →
              </Link>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.2} className="mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Example Format
              </h3>
              <p className="text-muted-foreground">Once papers are accepted, they will be listed in the following format:</p>
              <div className="mt-4 p-6 rounded-lg border border-border bg-card">
                <h4 className="text-lg font-semibold mb-2">Paper Title Example</h4>
                <p className="text-sm text-muted-foreground mb-1"><strong>Authors:</strong> Author 1, Author 2, Author 3</p>
                <p className="text-sm text-muted-foreground mb-1"><strong>Session:</strong> Session Name</p>
                <p className="text-sm text-muted-foreground"><strong>Presentation Time:</strong> TBA</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  )
}
