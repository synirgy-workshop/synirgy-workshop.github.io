'use client'

import { FileEdit, FileCheck, Upload, Search, Presentation, AlertCircle } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Submission() {
  const steps = [
    { number: 1, title: 'Prepare Your Paper', description: 'Write your paper following CEUR format guidelines', icon: FileEdit },
    { number: 2, title: 'Format & Review', description: 'Ensure formatting requirements and page limits are met', icon: FileCheck },
    { number: 3, title: 'Submit via System', description: 'Upload PDF through the workshop submission portal (double-blind)', icon: Upload },
    { number: 4, title: 'Double-Blind Review', description: 'Papers reviewed by at least two independent expert reviewers', icon: Search },
    { number: 5, title: 'Present at Workshop', description: 'Oral presentations or poster session at the half-day workshop', icon: Presentation }
  ]

  return (
    <div className="relative">
      <PageBanner title="Submission Guidelines" description="How to prepare and submit your paper to SynIRgy Workshop" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Submission Process</SectionHeading>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block" />
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0
                return (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold hidden md:flex z-10">
                      {step.number}
                    </div>
                    <div className={`md:w-5/12 ${isEven ? '' : 'md:ml-auto'}`}>
                      <AnimatedCard>
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary md:hidden">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="md:hidden text-primary font-bold mb-2">Step {step.number}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </AnimatedCard>
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
          <SectionHeading>Formatting Requirements</SectionHeading>
          <AnimatedCard>
            <ul className="space-y-3 text-muted-foreground">
              <li>• All submissions must follow the CEUR Workshop Proceedings format</li>
              <li>• Full research papers: 12 pages (excluding references)</li>
              <li>• Short papers & work-in-progress: 4-6 pages (excluding references)</li>
              <li>• Demo papers: 5 pages (excluding references)</li>
              <li>• Negative results papers: 6-8 pages (excluding references)</li>
              <li>• Position papers (opinion, methodology, or survey): 4-6 pages (excluding references)</li>
              <li>• Papers must be submitted in PDF format</li>
              <li>• All submissions must be in English and anonymized for double-blind review</li>
              <li>• At least one author of accepted papers must register for ECIR 2026 and the workshop</li>
            </ul>
          </AnimatedCard>
          <div className="mt-8 p-6 rounded-xl border border-primary bg-primary/5">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Ethics & Plagiarism</h4>
                <p className="text-sm text-muted-foreground">All submissions must represent original work. Plagiarism and duplicate submissions are strictly prohibited and will result in rejection.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" disabled className="glow-effect">
              Submission System (Coming Soon)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
