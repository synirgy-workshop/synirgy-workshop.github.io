import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import { WORKSHOP_DATE, WORKSHOP_LOCATION } from '@/lib/conference'

const schedule = [
  { time: '09:00', activity: 'Opening and introductions (5 min)' },
  { time: '09:05', activity: 'Keynote (45 min)' },
  { time: '09:50', activity: 'Coffee break and poster session' },
  { time: '10:15', activity: 'Lightning talks by authors of accepted papers, 10 min each' },
  { time: '11:15', activity: 'Breakout groups on three themes, e.g. validity of synthetic data, LLM-based user simulation, reproducibility (45 min)' },
  { time: '12:00', activity: 'Panel discussion with audience participation (30 min)' },
  { time: '12:30', activity: 'Report-back and next steps (15 min)' },
]

export default function Program() {
  return (
    <>
      <PageBanner title="Program" description={`${WORKSHOP_DATE} · ${WORKSHOP_LOCATION}`} />
      <section className="page-section">
        <p>
          SynIRgy is a half-day in-person event organized around interaction. Authors give short talks, and
          most of the time goes to small-group work and open discussion. This program is tentative.
        </p>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {schedule.map((item) => (
            <div key={item.time} className="flex gap-6 py-3">
              <span className="w-12 shrink-0 tabular-nums text-muted-foreground">{item.time}</span>
              <span>{item.activity}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Keynote speakers and accepted papers will be announced here. See also the{' '}
          <Link href="/2026" className="text-link">2026 edition</Link>.
        </p>
      </section>
    </>
  )
}
