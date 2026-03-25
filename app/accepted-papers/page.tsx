'use client'

import { FileText, ExternalLink } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Badge } from '@/components/ui/badge'

const papers = [
  { title: 'A Four-Dimensional Framework for Evaluating Synthetic Data Generation Methods: Balancing Privacy and Utility', type: 'Poster' },
  { title: 'AMBER: A Modular Evaluation Pipeline for Business-Oriented Recommender Systems', type: 'Short Paper, Presentation' },
  { title: 'A Reinforcement Learning Approach to User Group Behavior Imitation', type: 'Presentation' },
  { title: 'Flattening Realities: Why Conventional Simulation Approaches Risk Misrepresenting Children\'s Information Access', type: 'Opinion, Poster' },
  { title: 'Synthetic Compliance for Regulatory RAG: A Progressive Benchmark Suite from Simple to Complex Queries', type: 'Short Paper, Poster' },
  { title: 'Evaluating Multi-Hop Reasoning in RAG Systems: A Comparison of LLM-Based Retriever Evaluation Strategies', type: 'Full Paper, Presentation' },
  { title: 'Are Synthetic Users Rational? A Psychometric Analysis of LLM-Generated Customer Preferences', type: 'Full Paper, Presentation' },
  { title: 'SynCED-EnDe 2025: A Synthetic and Curated English–German Dataset for Critical Error Detection in Machine Translation', type: 'Resource / Full Paper, Presentation' },
  { title: 'Synthetic Data for Virtual Try-On: Methodology and Lessons Learned', type: 'Full Paper, Presentation' },
  { title: 'Is Synthetic Data Still Fit for Purpose in the Age of GenAI?', type: 'Opinion, Poster' },
]

export default function AcceptedPapers() {
  return (
    <div className="relative">
      <PageBanner title="Accepted Papers" description="List of accepted papers for SynIRgy Workshop 2026" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="Papers accepted at SynIRgy Workshop 2026">
            Accepted Papers
          </SectionHeading>
          <AnimatedCard delay={0.1}>
            <ol className="space-y-2">
              {papers.map((paper, index) => (
                <li key={index} className="flex items-start gap-2 text-base">
                  <span className="text-muted-foreground shrink-0 mt-0.5">{index + 1}.</span>
                  <span className="text-foreground">
                    {paper.title}
                    {paper.type.split(', ').map((tag) => (
                      <span key={tag} className="inline-block ml-1.5 align-middle text-[10px] font-medium px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ol>
          </AnimatedCard>
          <AnimatedCard delay={0.3} className="mt-8">
            <div className="text-center py-6">
              <p className="text-lg text-muted-foreground mb-4">
                To access the current versions of the papers, please request access via the link below.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1_krI8_OAX59HYSEGlUnQRn7XKAKgJdU8?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2 text-lg font-semibold"
              >
                <ExternalLink className="h-5 w-5" />
                Access Papers on Google Drive
              </a>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  )
}
