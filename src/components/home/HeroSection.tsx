import { Link } from 'react-router-dom'
import { HERO_DATA } from '../../lib/portfolioData'
import { ArrowRightIcon } from '../icons'
import heroPortrait from '../../assets/hero_portrait.webp'
import { useProfile } from '../../context/ProfileContext'

function splitProfession(profession?: string | null) {
  if (!profession) {
    return { lead: HERO_DATA.headlineLead, accent: HERO_DATA.headlineAccent }
  }
  const ampIndex = profession.indexOf('&')
  if (ampIndex !== -1) {
    return {
      lead: profession.slice(0, ampIndex + 1).trim(),
      accent: profession.slice(ampIndex + 1).trim(),
    }
  }
  const words = profession.trim().split(/\s+/)
  if (words.length <= 1) return { lead: '', accent: profession }
  const midpoint = Math.ceil(words.length / 2)
  return {
    lead: words.slice(0, midpoint).join(' '),
    accent: words.slice(midpoint).join(' '),
  }
}

export function HeroSection() {
  const { profile } = useProfile()

  const displayName = profile?.name || HERO_DATA.name
  const headlineParts = splitProfession(profile?.profession)
  const displayDescription = profile?.headline || HERO_DATA.description
  const imageSrc = profile?.profileImageUrl || heroPortrait

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
                src={imageSrc}
                onError={(e) => {
                  if (e.currentTarget.src !== heroPortrait) {
                    e.currentTarget.src = heroPortrait
                  }
                }}
                alt={`${displayName} - ${profile?.profession || 'Creative Web & Frontend Developer'}`}
                width={896}
                height={1200}
                className="hero-portrait-img"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Call to Actions */}
        <div className="hero-content-col">
          <div className="hero-greeting">
            <span>{HERO_DATA.greetingPrefix}</span>
            <span className="accent-name">{displayName}</span>
          </div>

          <h1 className="hero-headline">
            {headlineParts.lead && `${headlineParts.lead} `}
            <span className="headline-yellow">{headlineParts.accent}</span>
            <span className="hero-typing-cursor">|</span>
          </h1>

          <p className="hero-description">{displayDescription}</p>

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

