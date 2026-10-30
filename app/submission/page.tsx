import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import { CONFERENCE_NAME } from '@/lib/conference'

export default function Submission() {
  const steps = [
    { title: 'Prepare your paper', description: 'Write your paper using the paper template, which will be announced with the submission link' },
    { title: 'Check the format', description: 'Ensure formatting requirements and page limits are met' },
    { title: 'Submit', description: 'Upload your PDF through the workshop submission portal (double-blind)' },
    { title: 'Review', description: 'Papers are reviewed by at least two experts' },
    { title: 'Present at the workshop', description: 'Short talks, a poster session, and group discussion at the half-day workshop' },
  ]

  const requirements = [
    <>Accepted paper types and page limits are listed in the <Link href="/call-for-papers" className="text-link">call for papers</Link></>,
    'Papers must be submitted in PDF format',
    'All submissions must be in English and anonymized for double-blind review',
    `At least one author of accepted papers must register for ${CONFERENCE_NAME} and the workshop`,
    'Each accepted paper must be presented by at least one of its authors at the workshop',
    'All submissions must represent original work. Plagiarism and duplicate submissions are strictly prohibited and will result in rejection',
    'Accepted papers will appear in the Springer proceedings',
  ]

  return (
    <>
      <PageBanner
        title="Submission"
        description="How to prepare and submit your paper to the SynIRgy Workshop."
      />

      <section className="page-section">
        <div className="rounded-lg bg-muted p-5">
          <h2 className="text-base">Submission link</h2>
          <p className="mt-1 text-muted-foreground">
            The link will be posted here once it is available. Papers are due by{' '}
            <Link href="/important-dates" className="text-link">4 January 2027</Link>.
          </p>
        </div>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Process</SectionHeading>
        <ol className="list-decimal space-y-3 pl-5">
          {steps.map((step) => (
            <li key={step.title}>
              <span className="font-medium">{step.title}.</span>{' '}
              <span className="text-muted-foreground">{step.description}.</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Requirements</SectionHeading>
        <ul className="list-disc space-y-2 pl-5">
          {requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
