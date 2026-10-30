import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'

const schedule = [
  { time: '13:30 - 13:40', event: 'Opening & Welcome' },
  { time: '13:40 - 14:25', event: 'Keynote: Dr. Dávid Zibriczky', description: 'From Evaluation to Automation: Synthetic Data for RAG Assistants and Semi-Agentic Orchestration - 35 min talk + 10 min Q&A' },
  { time: '14:25 - 14:40', event: 'Presentation: Sami Heikkinen', description: '10 min talk + 2 min Q&A' },
  { time: '14:40 - 14:45', event: '5-Minute Madness', description: '1-minute lightning talk per poster' },
  { time: '14:45 - 15:00', event: 'Poster Discussion' },
  { time: '15:00 - 15:30', event: 'Coffee Break' },
  { time: '15:30 - 16:40', event: 'Paper Presentations', description: '5 presentations (10 min talk + 4 min Q&A each)' },
  { time: '16:55 - 17:00', event: 'Closing Remarks' },
]

const papers = [
  { title: 'A Four-Dimensional Framework for Evaluating Synthetic Data Generation Methods: Balancing Privacy and Utility', type: 'Poster' },
  { title: 'AMBER: A Modular Evaluation Pipeline for Business-Oriented Recommender Systems', type: 'Short Paper, Presentation' },
  { title: 'A Reinforcement Learning Approach to User Group Behavior Imitation', type: 'Presentation' },
  { title: 'Flattening Realities: Why Conventional Simulation Approaches Risk Misrepresenting Children\'s Information Access', type: 'Opinion, Poster' },
  { title: 'Synthetic Compliance for Regulatory RAG: A Progressive Benchmark Suite from Simple to Complex Queries', type: 'Short Paper, Poster' },
  { title: 'Evaluating Multi-Hop Reasoning in RAG Systems: A Comparison of LLM-Based Retriever Evaluation Strategies', type: 'Full Paper, Presentation' },
  { title: 'Are Synthetic Users Rational? A Psychometric Analysis of LLM-Generated Customer Preferences', type: 'Full Paper, Presentation' },
  { title: 'SynCED-EnDe 2025: A Synthetic and Curated English–German Dataset for Critical Error Detection in Machine Translation', type: 'Resource / Full Paper, Presentation' },
  { title: 'Synthetic Data for Virtual Try-On: Methodology and Lessons Learned', type: 'Full Paper, Presentation' },
  { title: 'Is Synthetic Data Still Fit for Purpose in the Age of GenAI?', type: 'Opinion, Poster' },
]

const programCommittee = [
  'Anas Buhyah',
  'Dominik Kowald',
  'Roger Zhe Li',
  'Yuhong Liu',
  'Savvina Daniil',
  'Linus W. Dietz',
]

const bio = 'David currently serves as Head of Data Science and Cognitive AI at DSV, the world\'s leading freight forwarding logistics company. He leads global, cross-functional teams building advanced analytics and AI solutions that drive operational excellence and innovation at scale. He holds an M.Sc. in Computer Science and a Ph.D. in Business and Management and brings over 16 years of experience in Data Science and AI, specialized in Recommender Systems and Generative AI. His work spans logistics, travel, healthcare, finance, and tech across both startup and enterprise environments. As a passionate researcher, David has co-authored more than 20 peer-reviewed publications, holds a patent in RecSys, and regularly speaks at international conferences on applied AI and machine learning.'

const abstract = 'Optimizing conversational AI systems is particularly challenging in early deployment stages, when little or no real user interaction data is available. In this keynote, we address three key design questions for RAG assistants and orchestration services with particular attention to synthetic data generation. First, how can RAG-based assistants be optimized before real conversational data becomes available? Second, is enterprise knowledge better retrieved through one general-purpose assistant or several specialized ones? Third, how should retrieval be orchestrated across assistants in an automated and scalable way? The presentation highlights some real examples during our journey as well as opens additional questions for further discussion during the session.'

export default function Edition2026() {
  return (
    <>
      <PageBanner
        title="SynIRgy 2026"
        description="The First Workshop on Simulation and Synthetic Data for Information Retrieval, held on 2 April 2026 at ECIR 2026 in Delft, the Netherlands."
      />

      <section className="page-section">
        <p className="flex flex-wrap gap-5 font-medium">
          <a href="https://link.springer.com/book/10.1007/978-3-032-21324-2" target="_blank" rel="noopener noreferrer" className="text-link">
            Proceedings on Springer →
          </a>
          <a href="https://ecir2026.eu/" target="_blank" rel="noopener noreferrer" className="text-link">
            ECIR 2026 →
          </a>
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5">
          <li>About 20 submissions, of which 10 were accepted</li>
          <li>About 35 participants, in addition to the organizers</li>
          <li>A keynote, paper sessions, and a poster session, grouped into three tracks: evaluation and methodology, applications of synthetic data, and broader perspectives and impact</li>
        </ul>
      </section>

      <section id="keynote" className="page-section scroll-mt-14 pt-0 md:pt-0">
        <SectionHeading>Keynote</SectionHeading>
        <div className="flex items-center gap-4">
          <Image
            src="/speakers/david-zibriczky.png"
            alt="Dr. Dávid Zibriczky"
            width={72}
            height={72}
            className="h-[72px] w-[72px] rounded-full object-cover"
          />
          <div>
            <h3>Dr. Dávid Zibriczky</h3>
            <p className="text-sm text-muted-foreground">Head of Data Science and Cognitive AI, DSV</p>
          </div>
        </div>
        <p className="mt-4 font-medium">
          From Evaluation to Automation: Synthetic Data for RAG Assistants and Semi-Agentic Orchestration
        </p>
        <p className="mt-3 text-muted-foreground">{abstract}</p>
        <h3 className="mt-5">Bio</h3>
        <p className="mt-1 text-muted-foreground">{bio}</p>
      </section>

      <section id="program" className="page-section scroll-mt-14 pt-0 md:pt-0">
        <SectionHeading subtitle="2 April 2026, 13:30 - 17:00, Room H3SO3">Program</SectionHeading>
        <div className="divide-y divide-border border-y border-border">
          {schedule.map((item) => (
            <div key={item.time} className="flex flex-col gap-x-6 py-3 sm:flex-row">
              <span className="shrink-0 text-sm tabular-nums text-muted-foreground sm:w-28 sm:pt-0.5">{item.time}</span>
              <div>
                <h3 className="font-medium">{item.event}</h3>
                {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="papers" className="page-section scroll-mt-14 pt-0 md:pt-0">
        <SectionHeading>Accepted Papers</SectionHeading>
        <ol className="list-decimal space-y-3 pl-5">
          {papers.map((paper) => (
            <li key={paper.title}>
              {paper.title}
              <span className="block text-sm text-muted-foreground">{paper.type}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">
          To access the current versions of the papers, please{' '}
          <a
            href="https://drive.google.com/drive/folders/1_krI8_OAX59HYSEGlUnQRn7XKAKgJdU8?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            request access on Google Drive
          </a>
          .
        </p>
      </section>

      <section className="page-section pt-0 md:pt-0">
        <SectionHeading>Program Committee</SectionHeading>
        <ul className="grid gap-2 sm:grid-cols-2">
          {programCommittee.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
