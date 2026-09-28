import { Link } from 'react-router-dom'
import { ArrowRightIcon, SparkleIcon } from '../icons'

export function ServicesCta() {
  return (
    <section className="services-cta-banner-section" aria-label="Start a project call to action">
      <div className="services-cta-banner-card">
        {/* Ambient Glow Blob */}
        <div className="services-cta-glow" aria-hidden="true" />

        <div className="services-cta-content">
          <div className="services-cta-eyebrow">
            <SparkleIcon width={14} height={14} />
            <span>HAVE A PROJECT?</span>
          </div>

          <h2 className="services-cta-heading">
            Let&apos;s Build <span className="accent-text">Something Useful.</span>
          </h2>

          <p className="services-cta-description">
            Tell me what you&apos;re trying to create. I&apos;ll help turn the rough idea
            into a clear, structured starting point.
          </p>

          <div className="services-cta-actions">
            <Link to="/contact" className="btn-primary">
              <span>Start a Project</span>
              <ArrowRightIcon width={16} height={16} />
            </Link>
            <Link to="/work" className="btn-secondary">
              <span>View My Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
