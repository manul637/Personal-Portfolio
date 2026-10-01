import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getWhatsAppUrl } from '../config/site'
import { getAllProjects } from '../services/projectService'
import { useProfile } from '../context/ProfileContext'
import { formatWhatsAppUrl } from '../services/profileService'
import type { ProjectDetail } from '../types/project'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Tag } from '../components/ui/Tag'
import {
  GithubIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  SparkleIcon,
  RefreshCwIcon,
} from '../components/icons'

type FilterCategory = 'All' | 'Web Apps' | 'AI' | 'Fintech' | 'UI/UX'

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All')
  const [allProjects, setAllProjects] = useState<ProjectDetail[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { profile } = useProfile()
  const whatsAppUrl = formatWhatsAppUrl(profile?.whatsappNumber) || getWhatsAppUrl()

  useEffect(() => {
    let isMounted = true

    async function fetchProjects() {
      try {
        setLoading(true)
        setError(null)
        const data = await getAllProjects()
        if (isMounted) {
          setAllProjects(data)
        }
      } catch (err) {
        if (isMounted) {
          console.error('Failed to load projects from Supabase:', err)
          setError(
            err instanceof Error ? err.message : 'Failed to load projects from database.'
          )
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchProjects()

    return () => {
      isMounted = false
    }
  }, [])

  // Filter projects based on active pill
  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.filterCategory === activeFilter)

  // Featured project (Finora)
  const featuredProject = allProjects.find((p) => p.slug === 'finora')

  const filterTabs: FilterCategory[] = ['All', 'Web Apps', 'AI', 'Fintech', 'UI/UX']

  return (
    <div className="work-page-wrapper">
      {/* 1. Header Section */}
      <section className="section-wrapper work-header-section">
        <Container>
          <SectionHeader
            eyebrow="MY PORTFOLIO"
            titlePrefix="Selected"
            accentWord="Work"
            description="A collection of products, experiments, interfaces, and projects I've worked on across modern web engineering and artificial intelligence."
          />

          {/* Filter Pills */}
          <div className="work-filter-bar">
            {filterTabs.map((filter) => {
              const count =
                filter === 'All'
                  ? allProjects.length
                  : allProjects.filter((p) => p.filterCategory === filter).length

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`work-filter-pill ${activeFilter === filter ? 'active' : ''}`}
                >
                  <span>{filter}</span>
                  <span className="filter-count-badge">{count}</span>
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 2. Featured Project Spotlight (Shown when on 'All' or 'Fintech') */}
      {featuredProject && (activeFilter === 'All' || activeFilter === 'Fintech') && (
        <section className="featured-spotlight-section">
          <Container>
            <div className="featured-spotlight-card">
              <div className="spotlight-visual-side">
                <div className="spotlight-visual-box">
                  <div className="spotlight-watermark">FINORA</div>
                  <span className="spotlight-domain-pill">{featuredProject.category}</span>
                </div>
              </div>

              <div className="spotlight-content-side">
                <div className="spotlight-eyebrow-row">
                  <SparkleIcon width={16} height={16} className="spotlight-sparkle" />
                  <span className="spotlight-eyebrow-text">FEATURED CASE STUDY</span>
                </div>

                <h2 className="spotlight-title">
                  {featuredProject.title} — {featuredProject.subtitle}
                </h2>
                <p className="spotlight-desc">{featuredProject.shortDescription}</p>

                {/* Highlights from Notion */}
                <div className="spotlight-highlights-list">
                  <div className="spotlight-highlight-item">
                    <span className="spotlight-bullet">✓</span>
                    <span>Smart transaction categorization & spending insights</span>
                  </div>
                  <div className="spotlight-highlight-item">
                    <span className="spotlight-bullet">✓</span>
                    <span>Natural-language transaction search & saving goals</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="spotlight-tags-row">
                  {featuredProject.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="spotlight-actions-row">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="spotlight-primary-btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRightIcon width={16} height={16} />
                  </Link>

                  <div className="spotlight-external-actions">
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-circle"
                        aria-label={`View ${featuredProject.title} on GitHub`}
                      >
                        <GithubIcon width={16} height={16} />
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-circle"
                        aria-label={`Open ${featuredProject.title} demo`}
                      >
                        <ExternalLinkIcon width={15} height={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 3. All Projects Grid */}
      <section className="section-wrapper work-grid-section">
        <Container>
          <div className="work-grid-header">
            <h3 className="work-grid-count">
              {loading
                ? 'Loading projects...'
                : `Showing ${filteredProjects.length} ${filteredProjects.length === 1 ? 'Project' : 'Projects'}`}
            </h3>
          </div>

          {loading && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <span className="form-spinner" style={{ display: 'inline-block', marginBottom: '16px' }} />
              <p>Loading projects from database...</p>
            </div>
          )}

          {error && (
            <div className="form-feedback-card error" style={{ maxWidth: '600px', margin: '30px auto' }}>
              <h3 className="feedback-title error">Unable to Load Projects</h3>
              <p className="feedback-desc">{error}</p>
              <div className="feedback-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => window.location.reload()}
                >
                  <RefreshCwIcon />
                  <span>Retry</span>
                </button>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.slug} className="project-card-item">
                {/* Image Banner */}
                <div
                  className="project-image-box"
                  style={{
                    background: `linear-gradient(135deg, rgba(23, 26, 34, 0.95) 0%, rgba(13, 15, 20, 0.98) 100%)`,
                  }}
                >
                  <span className="project-domain-pill">{project.category}</span>

                  <div className="project-action-icons">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-circle"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon width={16} height={16} />
                      </a>
                    )}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="project-action-circle"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ExternalLinkIcon width={15} height={15} />
                    </Link>
                  </div>

                  <div
                    style={{
                      fontSize: '26px',
                      fontWeight: 800,
                      color: project.accentColor,
                      opacity: 0.35,
                      letterSpacing: '2px',
                    }}
                  >
                    {project.title.toUpperCase()}
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-info-body">
                  <h3 className="project-title-text">{project.title}</h3>
                  <p className="project-desc-text">{project.shortDescription}</p>

                  <div className="project-tags-row">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  <div className="project-card-bottom-cta">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="project-card-link-btn"
                    >
                      <span>
                        {project.slug === 'finora' ? 'View Case Study' : 'View Project'}
                      </span>
                      <ArrowRightIcon width={14} height={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            </div>
          )}
        </Container>
      </section>

      {/* 4. Bottom CTA from Notion */}
      <section className="section-wrapper work-cta-section">
        <Container>
          <div className="work-cta-card">
            <span className="work-cta-eyebrow">MORE IN PROGRESS</span>
            <h2 className="work-cta-title">The Next Project Could Be Yours.</h2>
            <p className="work-cta-desc">
              Have an idea, web app, or AI tool you'd like to bring to life? Let's discuss how we
              can build it together.
            </p>
            <div className="work-cta-btn-wrap">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="work-cta-btn"
              >
                Start Conversation →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
