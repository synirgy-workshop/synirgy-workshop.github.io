'use client'

import { User, Mail, Users, MapPin, Globe, GraduationCap, Twitter } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import { Badge } from '@/components/ui/badge'

export default function Organizers() {
  const chairs = [
    {
      name: 'Manel Slokom',
      affiliation: 'CWI (Human-Centered Data Analytics Group)',
      location: 'The Hague, Netherlands',
      email: 'manel.slokom@cwi.nl',
      role: 'Workshop Chair',
      image: '/organizers/manel.png',
      links: {
        twitter: 'https://x.com/manelslokom',
        linkedin: 'https://www.linkedin.com/in/manel-slokom-a9b36779/',
        scholar: 'https://scholar.google.com/citations?user=TgdCne8AAAAJ&hl=fr'
      }
    },
    {
      name: 'Alejandro Bellogin',
      affiliation: 'Universidad Autónoma de Madrid',
      location: 'Madrid, Spain',
      email: 'alejandro.bellogin@uam.es',
      role: 'Workshop Chair',
      image: '/organizers/alejandro.jpeg',
      links: {
        twitter: 'https://x.com/abellogin',
        website: 'https://abellogin.github.io/',
        linkedin: 'https://www.linkedin.com/in/alejandro-bellog%C3%ADn-8011724/',
        scholar: 'https://scholar.google.com/citations?user=jekP1YYAAAAJ&hl=en'
      }
    },
    {
      name: 'Andrea Barraza-Urbina',
      affiliation: 'Grubhub',
      location: 'Paphos, Cyprus',
      email: 'apbarraza@gmail.com',
      role: 'Workshop Chair',
      image: '/organizers/andrea.jpeg',
      links: {
        website: 'https://apbarraza.com/',
        linkedin: 'https://www.linkedin.com/in/andrea-barraza/',
        scholar: 'https://scholar.google.com/citations?user=z6pLrvYAAAAJ&hl'
      }
    },
    {
      name: 'Mayank Singh',
      affiliation: 'advicehub.ai',
      location: 'Toronto, Canada',
      email: 'mayanksingh@advicehub.ai',
      role: 'Workshop Chair',
      image: '/organizers/mayank.jpeg',
      links: {
        twitter: 'https://x.com/mayansingh09',
        website: 'https://singhmayank.com/',
        linkedin: 'https://www.linkedin.com/in/mayanksingh09/'
      }
    }
  ]

  const pc = [
    'Krisztian Balog, University of Stavanger, Norway',
    'Nolwenn Bernard, University of Stavanger, Norway',
    'Ivan Cantador, Universidad Autónoma de Madrid, Spain',
    'Masoud Mansoury, TU Delft, The Netherlands',
    'Savvina Danil, Centrum Wiskunde & Informatica, The Netherlands',
    'Linus Dietz, King\'s College London, United Kingdom',
    'Marcel Hauck, Mainz University of Applied Sciences, Germany',
    'Sole Pera, TU Delft, The Netherlands',
    'Roger Zhe Li, Huawei Ireland Research Center, Ireland',
    'Nynke Krol, Official Statistics, The Netherlands',
    'Laurens Naudts, Institute for Information Law, University of Amsterdam',
    'Max van Drunen, Institute for Information Law, University of Amsterdam'
  ]

  return (
    <div className="relative">
      <PageBanner title="Organizers" description="Workshop chairs and program committee members" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Workshop Chairs</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chairs.map((chair, index) => (
              <AnimatedCard key={index} delay={0.1 * (index + 1)}>
                <div className="flex flex-col items-center text-center space-y-4">
                  {chair.image ? (
                    <Image
                      src={chair.image}
                      alt={chair.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <User className="h-12 w-12 text-primary/50" />
                    </div>
                  )}
                  <div>
                    <Badge className="mb-2">{chair.role}</Badge>
                    <h3 className="text-xl font-bold mb-1">{chair.name}</h3>
                    <p className="text-muted-foreground mb-2">{chair.affiliation}</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3" />
                      <span>{chair.location}</span>
                    </div>
                    <a href={`mailto:${chair.email}`} className="text-sm text-primary hover:underline inline-flex items-center gap-1 mb-3">
                      <Mail className="h-3 w-3" />
                      {chair.email}
                    </a>
                    <div className="flex items-center justify-center gap-3 mt-3">
                      {chair.links.twitter && (
                        <a
                          href={chair.links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Twitter/X"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {chair.links.website && (
                        <a
                          href={chair.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Website"
                        >
                          <Globe className="h-5 w-5" />
                        </a>
                      )}
                      {chair.links.linkedin && (
                        <a
                          href={chair.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {chair.links.scholar && (
                        <a
                          href={chair.links.scholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Google Scholar"
                        >
                          <GraduationCap className="h-5 w-5" />
                        </a>
                      )}
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
          <SectionHeading>Program Committee</SectionHeading>
          <AnimatedCard>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pc.map((member, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{member}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground italic mt-6">More PC members to be announced...</p>
          </AnimatedCard>
        </div>
      </section>
    </div>
  )
}
