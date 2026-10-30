import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays, MapPin, Users, Database, ScanSearch, Scale, Workflow, ArrowRight } from 'lucide-react'
import DatesTable from '@/components/DatesTable'
import { CONFERENCE_NAME, CONFERENCE_URL, WORKSHOP_DATE, WORKSHOP_LOCATION } from '@/lib/conference'

const themes = [
  { icon: Users, title: 'Users and interaction', text: 'Simulated users, synthetic profiles, and the question of how closely they reflect real behaviour.', tag: 'People & behaviour' },
  { icon: Database, title: 'Creating synthetic data', text: 'Generation methods, data fidelity, and the trade-offs between privacy and utility.', tag: 'Data & generation' },
  { icon: ScanSearch, title: 'Developing and evaluating algorithms', text: 'Repeatable environments for search, recommendation, and retrieval-augmented AI.', tag: 'Systems & evaluation' },
  { icon: Scale, title: 'Bias and ethics', text: 'Fairness, inclusive personas, transparency, and responsible uses of generated data.', tag: 'Trust & responsibility' },
  { icon: Workflow, title: 'Reproducibility and tooling', text: 'Shared simulators, open infrastructure, and standards that make studies comparable.', tag: 'Tools & practice' },
]

export default function Home() {
  return (
    <>
      <header className="research-hero">
        <div className="wide-content hero-grid">
          <div className="hero-copy">
            <a href={CONFERENCE_URL} target="_blank" rel="noopener noreferrer" className="conference-link">The Web Conference 2027 <ArrowUpRight size={15} /></a>
            <h1>SynIRgy</h1>
            <p className="hero-title">Simulation and Synthetic Data for Web-Scale Information Access</p>
            <p className="hero-description">A meeting point for researchers building, questioning, and evaluating synthetic worlds.</p>
            <div className="hero-actions"><Link className="primary-link" href="/call-for-papers">Explore the call for papers <ArrowUpRight size={18} /></Link><Link className="quiet-link" href="/program">The workshop</Link></div>
          </div>
          <figure className="hero-art"><Image src="/images/synthetic-landscape.webp" alt="Abstract glass layers and blue data points forming a simulated information landscape" width={1536} height={1024} priority /><figcaption>Real questions. Synthetic worlds.</figcaption></figure>
        </div>
      </header>
      <div className="event-strip"><div className="wide-content event-grid"><div><CalendarDays size={20} /><span>{WORKSHOP_DATE}</span></div><div><MapPin size={20} /><span>{WORKSHOP_LOCATION}</span></div><div><Users size={20} /><span>Half-day, in person</span></div></div></div>
      <section className="wide-content intro-section">
        <div className="intro-copy"><p className="section-kicker">The research question</p><h2>How do we study systems<br className="desktop-break" /> that respond to people?</h2><p>Logged user data can be skewed, incomplete, and restricted for privacy reasons. Simulation and synthetic data create controlled, repeatable settings for studying search, recommendation, and personalization.</p><p>SynIRgy brings researchers and practitioners together to compare methods, challenge assumptions, and develop shared practice. Building on ECIR 2026, the workshop brings this conversation to the web community.</p><Link href="/2026" className="quiet-link">Explore the first edition <ArrowUpRight size={16} /></Link></div>
        <div className="research-diagram"><div className="diagram-heading"><span className="diagram-dot" /> From interaction to insight</div><div className="simulation-flow"><div className="flow-node"><Users size={26}/><strong>Model people</strong><span>Users & interactions</span></div><ArrowRight className="flow-arrow" size={21}/><div className="flow-node"><Database size={26}/><strong>Generate data</strong><span>Synthetic populations</span></div><ArrowRight className="flow-arrow" size={21}/><div className="flow-node"><ScanSearch size={26}/><strong>Evaluate systems</strong><span>Search & recommendation</span></div></div><div className="feedback-loop"><span>↳</span> Compare, validate, refine <span>↰</span></div><p className="diagram-note">At every step: validity, fairness, privacy, and reproducibility.</p></div>
      </section>
      <section className="themes-section"><div className="wide-content"><div className="section-intro"><div><p className="section-kicker">Topics of interest</p><h2>Five connected areas.<br />One shared conversation.</h2></div><p>From the people we model to the tools we share, we welcome methodological work, ethical reflection, and applied case studies.</p></div><div className="theme-list">{themes.map(({icon: Icon,title,text,tag})=><Link href="/call-for-papers" className="theme-row" key={title}><div className="theme-icon"><Icon size={27} strokeWidth={1.4}/></div><div className="theme-name"><span>{tag}</span><h3>{title}</h3></div><p>{text}</p><ArrowUpRight className="theme-arrow" size={22}/></Link>)}</div></div></section>
      <section className="wide-content workshop-section"><div className="workshop-image"><Image src="/images/research-loop.webp" loading="eager" alt="" width={1536} height={1024} /><div className="image-caption">A shared space for open questions.</div></div><div className="workshop-copy"><p className="section-kicker">Built around discussion</p><h2>Bring your methods.<br />Leave with new directions.</h2><p>A half-day of lightning talks, breakout groups, and open discussion. Together, we will exchange methods and datasets, establish common terminology, and identify the field’s most pressing open problems.</p><ul className="outcome-list"><li><span /> A community research roadmap</li><li><span /> A shared collection of tools and resources</li><li><span /> A report on open challenges and next steps</li></ul><Link href="/program" className="quiet-link">View the tentative program <ArrowUpRight size={16}/></Link></div></section>
      <section className="dates-section"><div className="wide-content dates-grid"><div><p className="section-kicker">Plan your contribution</p><h2>Important dates</h2><DatesTable/><p className="date-note">All deadlines are 23:59 AoE (Anywhere on Earth).</p></div><aside className="participate"><span className="participate-symbol" aria-hidden="true">↗</span><h2>Join the conversation<br />in Dublin.</h2><p>Research papers, work in progress, demos, negative results, and position papers are welcome.</p><Link href="/submission" className="primary-link">Submission guidelines <ArrowUpRight size={18}/></Link><p className="attendance-note">All participants must register for <a href={CONFERENCE_URL} target="_blank" rel="noopener noreferrer">{CONFERENCE_NAME}</a> to attend.</p></aside></div></section>
    </>
  )
}
