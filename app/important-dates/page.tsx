import Link from 'next/link'
import DatesTable from '@/components/DatesTable'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import { CONFERENCE_NAME, CONFERENCE_URL } from '@/lib/conference'

export default function ImportantDates() {
  return (
    <>
      <PageBanner
        title="Important Dates"
        description="All deadlines are 23:59 AoE (Anywhere on Earth)."
      />

      <section className="page-section">
        <DatesTable />
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Submitting and Attending</SectionHeading>
        <div className="space-y-4">
          <p>
            Read the{' '}
            <Link href="/submission" className="text-link">
              submission guidelines
            </Link>{' '}
            before you submit. The submission link will be posted there once it is available.
          </p>
          <p>
            At least one author of each accepted paper must register for{' '}
            <a href={CONFERENCE_URL} target="_blank" rel="noopener noreferrer" className="text-link">
              {CONFERENCE_NAME}
            </a>{' '}
            and the workshop to present the paper.
          </p>
          <p>
            Questions? Email{' '}
            <a href="mailto:synirgy@outlook.com" className="text-link">
              synirgy@outlook.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
