import { Link } from 'react-router-dom'
import { HERO_DATA } from '../../lib/portfolioData'
import { ArrowRightIcon } from '../icons'
import heroPortrait from '../../assets/hero_portrait.jpg'

export function HeroSection() {
  return (
    <section className="container">
      <div className="hero-section">
        {/* Left Column: Portrait Card with Tilted Wireframes & Glow */}
        <div className="hero-portrait-col">
          <div className="hero-portrait-wrapper">
            {/* Tilted Wireframe Layer 1 */}
            <div className="hero-wireframe-back" aria-hidden="true" />
            {/* Tilted Wireframe Layer 2 */}
            <div className="hero-wireframe-front" aria-hidden="true" />

            {/* Solid Card with Portrait */}
            <div className="hero-portrait-card">
              <img
                src={heroPortrait}
                alt="Manul - Creative Web & Frontend Developer"
                className="hero-portrait-img"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Call to Actions */}
        <div className="hero-content-col">
          <div className="hero-greeting">
            <span>{HERO_DATA.greetingPrefix}</span>
            <span className="accent-name">{HERO_DATA.name}</span>
          </div>

          <h1 className="hero-headline">
            {HERO_DATA.headlineLead}{' '}
            <span className="headline-yellow">{HERO_DATA.headlineAccent}</span>
            <span className="hero-typing-cursor">|</span>
          </h1>

          <p className="hero-description">{HERO_DATA.description}</p>

          <div className="hero-cta-group">
            <Link to="/contact" className="btn-primary">
              <span>{HERO_DATA.primaryCtaText}</span>
              <ArrowRightIcon />
            </Link>
            <a href="#featured-projects" className="btn-secondary">
              <span>{HERO_DATA.secondaryCtaText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
