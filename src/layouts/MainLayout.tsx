import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { SparkleIcon } from '../components/icons'

export default function MainLayout() {
  const location = useLocation()

  // Handle hash scrolling when navigating across routes (e.g. /work -> /#skills)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const scrollToTarget = () => {
        const elem = document.getElementById(id)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
          return true
        }
        return false
      }

      // Try scrolling immediately, with short timeout fallbacks for route transition rendering
      if (!scrollToTarget()) {
        const timer1 = setTimeout(scrollToTarget, 50)
        const timer2 = setTimeout(scrollToTarget, 150)
        return () => {
          clearTimeout(timer1)
          clearTimeout(timer2)
        }
      }
    }
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      {/* Ambient Radial Yellow Glow Effects */}
      <div className="ambient-glow-layer" aria-hidden="true">
        <div className="ambient-glow-blob ambient-glow-top-left" />
        <div className="ambient-glow-blob ambient-glow-hero-portrait" />
        <div className="ambient-glow-blob ambient-glow-center" />

        {/* Decorative Sparkle Stars from Reference */}
        <div className="sparkle-star" style={{ top: '18%', right: '12%' }}>
          <SparkleIcon width={18} height={18} />
        </div>
        <div className="sparkle-star" style={{ top: '55%', left: '8%' }}>
          <SparkleIcon width={22} height={22} />
        </div>
        <div className="sparkle-star" style={{ bottom: '25%', right: '15%' }}>
          <SparkleIcon width={20} height={20} />
        </div>
      </div>

      {/* Floating Pill Header / Mobile Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="site-main">
        <Outlet />
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  )
}
