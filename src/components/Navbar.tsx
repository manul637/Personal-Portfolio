import { useState, useEffect, type MouseEvent } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './icons'
import { getWhatsAppUrl } from '../config/site'
import { useProfile } from '../context/ProfileContext'
import { formatWhatsAppUrl } from '../services/profileService'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { profile } = useProfile()
  const brandName = profile?.name ? profile.name.toUpperCase() : 'MANUL'
  const whatsAppUrl = formatWhatsAppUrl(profile?.whatsappNumber) || getWhatsAppUrl()

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Active state calculations
  const isSkillsActive = location.pathname === '/' && location.hash === '#skills'
  const isHomeActive = location.pathname === '/' && !isSkillsActive

  const handleSkillsClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (location.pathname === '/') {
      const elem = document.getElementById('skills')
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
      navigate({ pathname: '/', hash: '#skills' }, { replace: false })
    } else {
      // Navigate to home with hash
      navigate({ pathname: '/', hash: '#skills' })
    }
  }

  const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false)
    if (location.pathname === '/') {
      if (location.hash) {
        e.preventDefault()
        navigate({ pathname: '/', hash: '' })
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="navbar-fixed-container">
        {/* Desktop Floating Pill Navbar */}
        <nav className="navbar-desktop-pill" aria-label="Main Navigation">
          <Link to="/" className="brand-logo" onClick={handleHomeClick}>
            {brandName}<span className="brand-dot">.</span>
          </Link>

          <div className="nav-links-desktop">
            <NavLink
              to="/"
              onClick={handleHomeClick}
              className={() =>
                isHomeActive ? 'nav-link-item active' : 'nav-link-item'
              }
            >
              Home
            </NavLink>

            <a
              href="#skills"
              onClick={handleSkillsClick}
              className={isSkillsActive ? 'nav-link-item active' : 'nav-link-item'}
            >
              Skills
            </a>

            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? 'nav-link-item active' : 'nav-link-item'
              }
            >
              Work
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'nav-link-item active' : 'nav-link-item'
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link-item active' : 'nav-link-item'
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-link-item active' : 'nav-link-item'
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="nav-actions-desktop">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
            >
              WhatsApp Me
            </a>
            <div className="nav-status-ring" title="Available for work">
              <div className="nav-status-ring-dot" />
            </div>
          </div>
        </nav>

        {/* Mobile Header Bar */}
        <div className="navbar-mobile-bar">
          <Link to="/" className="brand-logo">
            {brandName}<span className="brand-dot">.</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-trigger"
            aria-label="Open mobile navigation menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-nav-top">
          <Link
            to="/"
            className="brand-logo"
            onClick={handleHomeClick}
          >
            {brandName}<span className="brand-dot">.</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-trigger"
            aria-label="Close mobile navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-nav-links">
          <NavLink
            to="/"
            className={() =>
              isHomeActive ? 'mobile-nav-item active' : 'mobile-nav-item'
            }
            onClick={handleHomeClick}
          >
            Home
          </NavLink>

          <a
            href="#skills"
            onClick={handleSkillsClick}
            className={isSkillsActive ? 'mobile-nav-item active' : 'mobile-nav-item'}
          >
            Skills
          </a>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        <div className="mobile-nav-bottom">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WhatsApp Me
          </a>
        </div>
      </div>
    </>
  )
}
