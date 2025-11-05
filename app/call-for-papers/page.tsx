'use client'

import { FileText, Users, Target, CheckCircle, BookOpen, Lightbulb, Database } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function CallForPapers() {
  const topics = [
    {
      icon: Users,
      title: "User Behavior & Interaction",
      description: "Modeling realistic user interactions with LLMs, synthetic user profiles validation, and bridging gaps between simulated and real user behavior"
    },
    {
      icon: Database,
      title: "Synthetic Data Generation",
      description: "Metrics for similarity assessment, privacy-preserving synthetic datasets, LLM fine-tuning for data generation, and validation for real-world applicability"
    },
    {
      icon: Target,
      title: "Algorithm Development & Evaluation",
      description: "Simulation environment requirements, reinforcement learning for interactive systems, RAG pipeline evaluation, and validity of synthetic data for evaluation"
    },
    {
      icon: BookOpen,
      title: "Bias and Ethics",
      description: "Using synthetic data to mitigate bias, ethical concerns with LLM-generated data, ensuring diversity in user personas, and preventing bias reinforcement"
    },
    {
      icon: Lightbulb,
      title: "Reproducibility & Infrastructure",
      description: "Defining reproducibility in synthetic data, applying FAIR principles, standardization efforts, and open-source tools for scalable simulation environments"
    }
  ]

  const submissionTypes = [
    {
      type: "Full Research Papers",
      pages: "12 pages",
      description: "Presenting completed work with comprehensive evaluation and analysis",
      color: "primary"
    },
    {
      type: "Short Papers & Work-in-Progress",
      pages: "4-6 pages",
      description: "Preliminary results, focused contributions, or ongoing research",
      color: "secondary"
    },
    {
      type: "Demo Papers",
      pages: "5 pages",
      description: "Demonstrations of tools, systems, or interactive applications",
      color: "secondary"
    },
    {
      type: "Negative Results Papers",
      pages: "6-8 pages",
      description: "Reporting unexpected or negative findings that provide valuable insights",
      color: "secondary"
    },
    {
      type: "Position Papers",
      pages: "4-6 pages",
      description: "Opinion papers, research methodology papers, or short survey papers on SynIRgy themes",
      color: "secondary"
    }
  ]

  const guidelines = [
    "Submissions must be written in English",
    "Follow the CEUR Workshop Proceedings format",
    "Submit in PDF format via the workshop submission system",
    "All papers undergo double-blind peer review by at least two independent reviewers",
    "Page limits exclude references",
    "At least one author of each accepted paper must register for ECIR 2026 and the workshop",
    "Full experiments are not required for position papers, but preliminary results are encouraged"
  ]

  return (
    <div className="relative">
      <PageBanner
        title="Call for Papers"
        description="Submit your research on simulation and synthetic data for Information Retrieval"
      />

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="Join us in advancing the field of simulation and synthetic data for IR">
            Workshop Scope
          </SectionHeading>

          <AnimatedCard>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The SynIRgy workshop brings together researchers from information access systems, including search, 
                LLMs, recommender systems, and related fields. Our goal is to foster community building, establish 
                a shared vocabulary, and identify key challenges and open problems in synthetic data and simulation 
                for Information Retrieval.
              </p>
              <p className="text-muted-foreground">
                This half-day in-person event is designed to combine high-quality research presentations with 
                informal networking and focused discussions. The workshop will explore key research questions 
                around user behavior modeling, synthetic data generation, algorithm evaluation, bias and ethics, 
                and reproducibility infrastructure.
              </p>
              <p className="text-muted-foreground">
                As a result, a short report will summarize the discussions and outline future directions. These 
                outcomes will lay the foundation for later editions and potential activities such as tutorials, 
                survey papers, or a special journal issue.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="outline">Community Building</Badge>
                <Badge variant="outline">Research Collaboration</Badge>
                <Badge variant="outline">Future Directions</Badge>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="We welcome contributions on, but not limited to">
            Topics of Interest
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <AnimatedCard
                key={index}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>
            Submission Types
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissionTypes.map((item, index) => (
              <AnimatedCard key={index}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{item.type}</h3>
                    <Badge>{item.pages}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-lg border border-border bg-card">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Page limits exclude references. All submissions should follow the
              CEUR Workshop Proceedings format.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>
            Submission Guidelines
          </SectionHeading>

          <AnimatedCard>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{guideline}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard className="mt-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Review Process & Evaluation Criteria
              </h3>
              <p className="text-muted-foreground">
                We follow a double-blind peer-review process. Each submission will be reviewed by at least two 
                independent reviewers who are experts in the respective topic. Papers will be evaluated based on:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Relevance:</strong> Focus on areas related to synthetic data, simulation methods, and IR</li>
                <li>• <strong>Discussion potential:</strong> Ability to encourage interaction and provide foundation for workshop sessions</li>
                <li>• <strong>Quality:</strong> Well-structured arguments, clear communication, and appropriate use of language</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                All accepted contributions will be published in CEUR-WS workshop proceedings. Based on interest and 
                paper quality, we may organize a follow-up special issue in a relevant journal.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Ready to Submit?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Submit your research and be part of shaping the future of simulation and synthetic data in IR
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="glow-effect">
                <Link href="/submission">
                  <FileText className="mr-2 h-5 w-5" />
                  Submission Guidelines
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/important-dates">
                  View Important Dates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
