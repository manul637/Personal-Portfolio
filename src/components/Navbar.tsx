import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './icons'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <>
      <header className="navbar-fixed-container">
        {/* Desktop Floating Pill Navbar */}
        <nav className="navbar-desktop-pill" aria-label="Main Navigation">
          <Link to="/" className="brand-logo">
            MANUL<span className="brand-dot">.</span>
          </Link>

          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav-link-item active' : 'nav-link-item'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions-desktop">
            <Link to="/contact" className="nav-cta-btn">
              Contact me
            </Link>
            <div className="nav-status-ring" title="Available for work">
              <div className="nav-status-ring-dot" />
            </div>
          </div>
        </nav>

        {/* Mobile Header Bar */}
        <div className="navbar-mobile-bar">
          <Link to="/" className="brand-logo">
            MANUL<span className="brand-dot">.</span>
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
            onClick={() => setIsMobileMenuOpen(false)}
          >
            MANUL<span className="brand-dot">.</span>
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
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-nav-bottom">
          <Link
            to="/contact"
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact me →
          </Link>
        </div>
      </div>
    </>
  )
}
