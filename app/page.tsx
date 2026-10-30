import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DatesTable from '@/components/DatesTable'
import SectionHeading from '@/components/SectionHeading'
import { CONFERENCE_NAME, CONFERENCE_URL, WORKSHOP_DATE, WORKSHOP_LOCATION } from '@/lib/conference'

export default function Home() {
  const themes = [
    'Users and interaction',
    'Creating synthetic data',
    'Developing and evaluating algorithms',
    'Bias and ethics',
    'Reproducibility and tooling',
  ]

  const objectives = [
    'Exchange methods, datasets, and practical experience',
    'Develop common terminology and a shared view of good practice',
    'Name the main open problems, especially around validity, fairness, privacy, and reproducibility',
    'Deliver concrete outputs for the community: a short report, a research roadmap, and a shared resource',
  ]

  return (
    <>
      <header className="border-b border-border">
        <div className="page-content py-14 md:py-20">
          <a
            href={CONFERENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm font-medium"
          >
            Workshop at The Web Conference 2027 ({CONFERENCE_NAME})
          </a>
          <h1 className="mt-3 text-4xl md:text-5xl">SynIRgy</h1>
          <p className="mt-2 text-xl text-muted-foreground">
            Simulation and Synthetic Data for Web-Scale Information Access
          </p>
          <p className="mt-6 text-sm">
            {WORKSHOP_DATE} · {WORKSHOP_LOCATION}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button asChild size="lg" className="px-6">
              <Link href="/call-for-papers">Call for Papers</Link>
            </Button>
            <Link href="/important-dates" className="text-link text-sm font-medium">
              Important dates →
            </Link>
          </div>
        </div>
      </header>

      <section className="page-section space-y-4">
        <SectionHeading>About the Workshop</SectionHeading>
        <p>
          Evaluating today&apos;s information access systems is hard when it relies only on logged user data,
          which tends to be skewed, incomplete, and often restricted for privacy reasons. Simulation and
          synthetic data offer a way forward: they create controlled, repeatable settings in which web search,
          recommendation, and personalization algorithms can be trained, tested, and compared.
        </p>
        <p>
          SynIRgy invites researchers and practitioners to exchange experience, compare practices, and work on
          open problems in the use of simulation and synthetic data for information access on the Web. It
          follows the first SynIRgy workshop at ECIR 2026 and brings the topic to the web community. We welcome
          methodological work, ethical reflection, and applied case studies.
        </p>
        <p>
          The half-day in-person program is built around discussion rather than paper presentations alone, and
          it will lead to a short report and a community roadmap for the field.
        </p>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Objectives</SectionHeading>
        <ul className="list-disc space-y-2 pl-5">
          {objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Themes</SectionHeading>
        <ul className="grid list-disc gap-x-8 gap-y-2 pl-5 sm:grid-cols-2">
          {themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
        <p className="mt-4">
          <Link href="/call-for-papers" className="text-link">Read the full call for papers →</Link>
        </p>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Important Dates</SectionHeading>
        <DatesTable />
        <p className="mt-4 text-sm text-muted-foreground">All deadlines are 23:59 AoE (Anywhere on Earth).</p>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Attending</SectionHeading>
        <p>
          All participants must register for{' '}
          <a href={CONFERENCE_URL} target="_blank" rel="noopener noreferrer" className="text-link">
            {CONFERENCE_NAME}
          </a>{' '}
          to attend the workshop. See the{' '}
          <Link href="/2026" className="text-link">
            2026 edition
          </Link>{' '}
          for earlier talks and papers.
        </p>
      </section>
    </>
  )
}
