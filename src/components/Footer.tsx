import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowRightIcon } from './icons'

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

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
              MANUL<span className="brand-dot">.</span>
            </Link>
            <p className="footer-brand-desc">
              Creative Developer · AI · Digital Products. Designing and building
              modern, useful digital experiences with care.
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
              <li>
                <a
                  href="https://github.com/manul"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/manul"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/manul"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <TwitterIcon />
                  <span>X (Twitter)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 MANUL. Designed &amp; Built with curiosity.</p>
        </div>
      </div>
    </footer>
  )
}
