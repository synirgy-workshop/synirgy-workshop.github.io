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
      name: 'Dr. Dávid Zibriczky',
      affiliation: 'Head of Data Science and Cognitive AI, DSV',
      title: 'From Evaluation to Automation: Synthetic Data for RAG Assistants and Semi-Agentic Orchestration',
      bio: 'David currently serves as Head of Data Science and Cognitive AI at DSV, the world\'s leading freight forwarding logistics company. He leads global, cross-functional teams building advanced analytics and AI solutions that drive operational excellence and innovation at scale. He holds an M.Sc. in Computer Science and a Ph.D. in Business and Management and brings over 16 years of experience in Data Science and AI, specialized in Recommender Systems and Generative AI. His work spans logistics, travel, healthcare, finance, and tech across both startup and enterprise environments. As a passionate researcher, David has co-authored more than 20 peer-reviewed publications, holds a patent in RecSys, and regularly speaks at international conferences on applied AI and machine learning.',
      abstract: 'Optimizing conversational AI systems is particularly challenging in early deployment stages, when little or no real user interaction data is available. In this keynote, we address three key design questions for RAG assistants and orchestration services with particular attention to synthetic data generation. First, how can RAG-based assistants be optimized before real conversational data becomes available? Second, is enterprise knowledge better retrieved through one general-purpose assistant or several specialized ones? Third, how should retrieval be orchestrated across assistants in an automated and scalable way? The presentation highlights some real examples during our journey as well as opens additional questions for further discussion during the session.',
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
                  {speaker.abstract && (
                    <div className="mt-6 text-left">
                      <h4 className="font-semibold mb-2">Abstract</h4>
                      <p className="text-muted-foreground text-sm">{speaker.abstract}</p>
                    </div>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
