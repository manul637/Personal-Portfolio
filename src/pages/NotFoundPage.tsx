import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { ArrowLeftIcon, ArrowRightIcon } from '../components/icons'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404: Page Not Found — MANUL. | Creative Developer · AI · Digital Products'
  }, [])

  return (
    <div className="section-wrapper project-not-found-wrapper">
      <Container>
        <div className="project-not-found-card">
          <span className="not-found-badge">404 · NOT FOUND</span>
          <h1 className="not-found-title">Page Doesn't Exist</h1>
          <p className="not-found-desc">
            The page you are looking for may have been moved, deleted, or does not exist.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              <ArrowLeftIcon width={16} height={16} />
              <span>Return Home</span>
            </Link>
            <Link to="/work" className="btn-secondary">
              <span>Browse Projects</span>
              <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
