import Link from 'next/link'
import PageBanner from '@/components/PageBanner'

export default function AcceptedPapers() {
  return (
    <>
      <PageBanner title="Accepted Papers" />
      <section className="page-section">
        <p>
          Accepted papers for 2027 will be listed here after notifications are sent. The 2026 papers are
          available on the <Link href="/2026#papers" className="text-link">2026 edition</Link> page.
        </p>
      </section>
    </>
  )
}
