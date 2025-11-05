'use client'

import { Calendar, MapPin, FileText, Users, Target, Presentation } from 'lucide-react'
import Image from 'next/image'
import GridOverlay from '@/components/GridOverlay'
import AnimatedCard from '@/components/AnimatedCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Home() {

  const topics = [
    "User Behavior & Interaction",
    "Synthetic Data Generation",
    "Algorithm Development & Evaluation",
    "Bias and Ethics",
    "Reproducibility & Infrastructure",
    "LLM-Based Simulation",
    "RAG Pipeline Evaluation",
    "Privacy-Preserving Synthetic Data"
  ]

  return (
    <div className="relative">

      {/* Hero Section with Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="banner-synirgy.png"
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

        <div className="container relative z-10 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div>
                <Badge variant="default" className="text-base px-6 py-2 mb-6 bg-primary text-primary-foreground border border-primary font-bold">
                  ECIR 2026 Workshop
                </Badge>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                SynIRgy
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Simulation and Synthetic Data for Information Retrieval
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Bringing together researchers and practitioners to explore innovative evaluation
              methods, synergies, and best practices in simulation and synthetic data for IR
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <Calendar className="h-6 w-6 text-blue-400" />
                <span>Date: 2 April 2026</span>
              </div>
              <div className="hidden sm:block text-blue-400 font-bold">•</div>
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span>Location: TBA</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center pt-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 border border-primary">
                <Link href="/call-for-papers">
                  <FileText className="mr-2 h-6 w-6" />
                  Call for Papers
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border border-border hover:border-primary">
                <Link href="/submission">
                  Submit Your Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 bg-background">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Workshop Overview
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Explore innovative approaches to evaluation beyond real-world user data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard title="About the Workshop">
              <div className="space-y-4">
                <p className="text-foreground">
                  The SynIRgy workshop brings together researchers from information access systems, including search, 
                  LLMs, recommender systems, and related fields to explore the synergies between synthetic data and 
                  simulation for Information Retrieval.
                </p>
                <p className="text-foreground">
                  This half-day in-person event combines high-quality research presentations with informal networking 
                  and focused discussions around synthetic data and simulation in IR, fostering community building 
                  and establishing a shared vocabulary in this emerging field.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard title="Workshop Goals">
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Foster community building and establish a shared vocabulary across information access systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Identify key challenges and open problems in synthetic data and simulation for IR</span>
                </li>
                <li className="flex items-start gap-3">
                  <Presentation className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Produce a report summarizing discussions and outlining future directions for the field</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard title="Topics of Interest">
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <Badge key={index} variant="secondary" className="text-sm border border-border bg-secondary text-foreground">
                    {topic}
                  </Badge>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard title="Important Notice">
              <div className="space-y-4">
                <p className="text-foreground">
                  All participants must register for ECIR 2026 to attend the workshop.
                </p>
                <Button asChild variant="outline" className="w-full text-base py-3 border border-border hover:border-primary">
                  <a href="https://ecir2026.eu/" target="_blank" rel="noopener noreferrer">
                    View Conference Details
                  </a>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Join Us at SynIRgy
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Submit your research and be part of shaping the future of simulation
              and synthetic data in Information Retrieval
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 border border-primary">
                <Link href="/submission">
                  <FileText className="mr-2 h-6 w-6" />
                  Submit a Paper
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border border-border hover:border-primary">
                <Link href="/important-dates">
                  <Calendar className="mr-2 h-6 w-6" />
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
