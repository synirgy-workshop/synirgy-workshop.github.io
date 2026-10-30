import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import { CONFERENCE_NAME } from '@/lib/conference'

export default function CallForPapers() {
  const topics = [
    { title: 'Users and interaction', description: 'Simulated users and synthetic profiles, LLM-based simulators, and checking them against real behaviour' },
    { title: 'Creating synthetic data', description: 'Ways to measure how close synthetic data is to real data, privacy–utility trade-offs, and using or adapting LLMs as generators' },
    { title: 'Developing and evaluating algorithms', description: 'What a simulation environment needs to offer, reinforcement learning in interactive settings, and how to simulate and benchmark RAG pipelines' },
    { title: 'Bias and ethics', description: 'Reducing and avoiding bias, transparency and accountability, misuse, and diverse, inclusive personas' },
    { title: 'Reproducibility and tooling', description: 'What reproducibility means for simulations, standards for comparison, FAIR practices, and open-source infrastructure' },
  ]

  const submissionTypes = [
    { type: 'Long papers', pages: '6-8 pages' },
    { type: 'Short or work-in-progress papers', pages: '2-4 pages' },
    { type: 'Demos' },
    { type: 'Reports of negative results' },
    { type: 'Position papers', description: 'Opinion pieces, methodology proposals, or brief surveys' },
  ]

  const tracks = [
    { title: 'Search, Recommendation, and Retrieval-Augmented AI', description: 'Simulated users and synthetic data for training and evaluating search, recommender, and RAG systems' },
    { title: 'Evaluation, Human Computation, and Resources', description: 'Reproducible evaluation methods, simulation as a complement to studies with human participants, and shared datasets, tools, and benchmarks' },
    { title: 'Security and Privacy', description: 'Synthetic data as an alternative to sharing real user data, and the privacy risks of generated data' },
  ]

  const guidelines = [
    'Submissions must be written in English',
    'Paper template: to be announced',
    'Submit in PDF format via the workshop submission system',
    `At least one author of each accepted paper must register for ${CONFERENCE_NAME} and the workshop`,
    'Each accepted paper must be presented by at least one of its authors at the workshop',
  ]

  const criteria = [
    'Fit with the workshop topics',
    'Whether the paper can contribute to the discussion sessions',
    'The quality of the writing',
  ]

  const outcomes = [
    'Springer proceedings for the accepted papers, similar to the SynIRgy 2026 edition',
    'A community research roadmap, started in the breakout sessions',
    'An open, shared list of simulators, synthetic datasets, and evaluation resources',
    'A short report on the discussions, open challenges, and next steps',
  ]

  return (
    <>
      <PageBanner
        title="Call for Papers"
        description="Submit your research on simulation and synthetic data for web-scale information access."
      />

      <section className="page-section">
        <SectionHeading>Workshop Scope</SectionHeading>
        <div className="space-y-4">
          <p>
            Web platforms change as people use them. Users react to what is recommended, systems learn from
            those reactions, and side effects such as filter bubbles, popularity bias, and uneven exposure build
            up over time. Fixed test collections show only a snapshot of this process. Simulation lets
            researchers follow these dynamics in a setting they control and can repeat, and large language
            models have made it much easier to create synthetic users, interactions, reviews, and dialogues.
          </p>
          <p>
            This progress brings open questions. How closely do LLM-generated users resemble real ones? For
            which evaluation purposes is synthetic data appropriate? How should privacy, data utility, and
            fairness be balanced against each other? Which ethical risks come with generated data? And how can
            simulation-based results be repeated and compared across studies?
          </p>
        </div>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading subtitle="The workshop covers, without being limited to:">Topics of Interest</SectionHeading>
        <dl className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.title}>
              <dt className="font-medium">{topic.title}</dt>
              <dd className="text-muted-foreground">{topic.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading subtitle="The workshop fits most closely with three tracks of The Web Conference 2027:">Fit with The Web Conference</SectionHeading>
        <dl className="space-y-4">
          {tracks.map((track) => (
            <div key={track.title}>
              <dt className="font-medium">{track.title}</dt>
              <dd className="text-muted-foreground">{track.description}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4">
          Beyond these tracks, the workshop also gives neighboring web-oriented communities, such as user
          modeling, social computing, and web mining, a place to meet around a common methodological topic.
        </p>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Submission Types</SectionHeading>
        <div className="divide-y divide-border border-y border-border">
          {submissionTypes.map((item) => (
            <div key={item.type} className="py-3">
              <div className="flex justify-between gap-4">
                <h3 className="font-medium">{item.type}</h3>
                {item.pages && <span className="shrink-0 text-sm text-muted-foreground">{item.pages}</span>}
              </div>
              {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          The paper template and any remaining page limits will be confirmed with the submission link.
        </p>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Submission Guidelines</SectionHeading>
        <ul className="list-disc space-y-2 pl-5">
          {guidelines.map((guideline) => (
            <li key={guideline}>{guideline}</li>
          ))}
        </ul>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Review Process</SectionHeading>
        <p>Each submission is reviewed double-blind by at least two experts. Reviewers assess:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {criteria.map((criterion) => (
            <li key={criterion}>{criterion}</li>
          ))}
        </ul>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Outcomes</SectionHeading>
        <ul className="list-disc space-y-2 pl-5">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <p className="mt-8 flex flex-wrap gap-5 font-medium">
          <Link href="/submission" className="text-link">How to submit →</Link>
          <Link href="/important-dates" className="text-link">Important dates →</Link>
        </p>
      </section>
    </>
  )
}
