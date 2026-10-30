import Link from 'next/link'
import PageBanner from '@/components/PageBanner'

export default function Speakers() {
  return (
    <>
      <PageBanner title="Keynote Speakers" />
      <section className="page-section">
        <p>
          The 2027 keynote speakers will be announced here. The 2026 keynote is available on the{' '}
          <Link href="/2026#keynote" className="text-link">2026 edition</Link> page.
        </p>
      </section>
    </>
  )
}
