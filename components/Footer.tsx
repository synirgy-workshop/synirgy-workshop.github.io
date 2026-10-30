import { CONFERENCE_NAME, CONFERENCE_URL } from '@/lib/conference'

const Footer = () => {
  return (
    <footer className="site-footer border-t border-border">
      <div className="wide-content flex flex-col gap-2 py-8 text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>SynIRgy: Simulation and Synthetic Data for Web-Scale Information Access</p>
        <p>
          Part of{' '}
          <a href={CONFERENCE_URL} target="_blank" rel="noopener noreferrer" className="text-link">
            {CONFERENCE_NAME}
          </a>
          {' · '}
          <a href="mailto:synirgy@outlook.com" className="text-link">
            synirgy@outlook.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
