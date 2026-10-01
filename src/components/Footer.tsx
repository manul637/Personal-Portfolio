import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowRightIcon } from './icons'
import { SITE_CONFIG } from '../config/site'
import { useProfile } from '../context/ProfileContext'

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const { profile } = useProfile()

  const brandName = profile?.name ? profile.name.toUpperCase() : 'MANUL'
  const githubUrl = profile?.githubUrl || SITE_CONFIG.social.github
  const linkedinUrl =
    profile?.linkedinUrl ||
    (SITE_CONFIG.social.linkedin.includes('YOUR_') ? null : SITE_CONFIG.social.linkedin)
  const xUrl =
    profile?.xUrl || (SITE_CONFIG.social.x.includes('YOUR_') ? null : SITE_CONFIG.social.x)

  const handleSkillsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const elem = document.getElementById('skills')
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
      navigate({ pathname: '/', hash: '#skills' }, { replace: false })
    } else {
      navigate({ pathname: '/', hash: '#skills' })
    }
  }

  return (
    <footer className="site-footer">
      {/* Ambient Radial Glow behind Footer */}
      <div className="ambient-glow-blob ambient-glow-footer" />

      <div className="container">
        {/* Top CTA Banner */}
        <div className="footer-cta-banner">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">READY TO BUILD?</span>
            <h3 className="footer-cta-heading">Let's create something useful.</h3>
          </div>
          <Link to="/contact" className="btn-primary">
            <span>Get Started</span>
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Main Footer Columns */}
        <div className="footer-main-columns">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo" style={{ fontSize: '22px' }}>
              {brandName}<span className="brand-dot">.</span>
            </Link>
            <p className="footer-brand-desc">
              {profile?.profession ? `${profile.profession}. ` : 'Creative Developer · AI · Digital Products. '}
              {profile?.headline || 'Designing and building modern, useful digital experiences with care.'}
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="footer-col-title">EXPLORE</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <a href="#skills" onClick={handleSkillsClick} className="footer-link">
                  Skills
                </a>
              </li>
              <li>
                <Link to="/work" className="footer-link">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="footer-col-title">CONNECT</h4>
            <ul className="footer-links-list">
              {githubUrl && (
                <li>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <GithubIcon />
                    <span>GitHub</span>
                  </a>
                </li>
              )}
              {linkedinUrl && (
                <li>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </a>
                </li>
              )}
              {xUrl && (
                <li>
                  <a
                    href={xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <TwitterIcon />
                    <span>X (Twitter)</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 {brandName}. Designed &amp; Built with curiosity.</p>
        </div>
      </div>
    </footer>
  )
}
