import { Globe, GraduationCap, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'

export default function Organizers() {
  const chairs = [
    {
      name: 'Manel Slokom',
      affiliation: 'Hotelschool The Hague',
      location: 'The Hague, Netherlands',
      email: 'manel.slokom@live.fr',
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
      name: 'Mayank Singh',
      affiliation: '1Dial',
      location: 'Toronto, Canada',
      email: 'mayank@1dial.ai',
      role: 'Workshop Chair',
      image: '/organizers/mayank.jpeg',
      links: {
        twitter: 'https://x.com/mayansingh09',
        website: 'https://singhmayank.com/',
        linkedin: 'https://www.linkedin.com/in/mayanksingh09/'
      }
    },
    {
      name: 'Andrea Barraza-Urbina',
      affiliation: 'Independent Researcher',
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
      name: 'Thierno Kante',
      affiliation: 'EDICIA',
      location: 'Nantes, France',
      email: 'thierno.kante@edicia.fr',
      role: 'Workshop Chair',
      links: {}
    }
  ]

  const linkTypes = [
    { key: 'website', label: 'Website', icon: Globe },
    { key: 'scholar', label: 'Google Scholar', icon: GraduationCap },
    { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { key: 'twitter', label: 'Twitter/X', icon: Twitter },
  ] as const


  return (
    <>
      <PageBanner title="Organizers" description="Workshop chairs and program committee members." />
      <section className="page-section">
        <SectionHeading subtitle="The main point of contact is Manel Slokom.">Workshop Chairs</SectionHeading>
        <div className="grid gap-8 sm:grid-cols-2">
          {chairs.map((chair) => {
            const links: Partial<Record<(typeof linkTypes)[number]['key'], string>> = chair.links
            return (
              <div key={chair.name} className="flex gap-4">
                {chair.image ? (
                  <Image
                    src={chair.image}
                    alt={chair.name}
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground">
                    {chair.name.split(' ').map((part) => part[0]).join('')}
                  </div>
                )}
                <div className="min-w-0 text-sm">
                  <h3 className="text-base">{chair.name}</h3>
                  <p className="text-muted-foreground">{chair.affiliation}</p>
                  <p className="text-muted-foreground">{chair.location}</p>
                  <a href={`mailto:${chair.email}`} className="text-link break-words">{chair.email}</a>
                  <div className="mt-2 flex gap-3">
                    {linkTypes.map(({ key, label, icon: Icon }) => links[key] && (
                      <a
                        key={key}
                        href={links[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`${chair.name} on ${label}`}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Program Committee</SectionHeading>
        <p className="text-muted-foreground">TBA</p>
      </section>
    </>
  )
}
