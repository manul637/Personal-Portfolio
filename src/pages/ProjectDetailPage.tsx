import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectBySlug, getAdjacentProjects, getAllProjects } from '../lib/projectsData'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Tag } from '../components/ui/Tag'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  GithubIcon,
  CheckIcon,
  CpuIcon,
  SparkleIcon,
  LayersIcon,
} from '../components/icons'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const project = slug ? getProjectBySlug(slug) : undefined
  const adjacent = slug ? getAdjacentProjects(slug) : {}
  const allProjects = getAllProjects()

  // Set document title on project/slug change
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | MANUL.`
    } else {
      document.title = `Project Not Found | MANUL.`
    }
  }, [slug, project])

  // Sensible fallback for invalid or non-existent slugs
  if (!project) {
    return (
      <div className="section-wrapper project-not-found-wrapper">
        <Container>
          <div className="project-not-found-card">
            <span className="not-found-badge">404 · ERROR</span>
            <h1 className="not-found-title">Project Not Found</h1>
            <p className="not-found-desc">
              The project or case study with slug{' '}
              <code className="not-found-slug">/projects/{slug}</code> could not be found. It may
              have been renamed or doesn't exist.
            </p>

            <div className="not-found-actions">
              <Button variant="primary" onClick={() => navigate('/projects')}>
                <ArrowLeftIcon width={16} height={16} />
                Browse All Projects
              </Button>
              <Button variant="secondary" onClick={() => navigate('/')}>
                Go To Home
              </Button>
            </div>

            <div className="not-found-suggestions">
              <h3 className="suggestions-heading">Available Projects & Case Studies:</h3>
              <div className="suggestions-grid">
                {allProjects.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="suggestion-item-link"
                  >
                    <span className="suggestion-title">{p.title}</span>
                    <span className="suggestion-category">{p.category}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION */}
      <section className="project-top-nav-bar">
        <Container>
          <div className="project-breadcrumb-row">
            <Link to="/projects" className="project-back-link">
              <ArrowLeftIcon width={15} height={15} />
              <span>Back to Projects</span>
            </Link>

            <div className="project-top-actions">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-meta-action-btn"
                  title="View on GitHub"
                >
                  <GithubIcon width={16} height={16} />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-meta-action-btn primary"
                  title="Open Live Preview"
                >
                  <ExternalLinkIcon width={14} height={14} />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. PROJECT HERO SECTION */}
      <header className="project-hero-section">
        <Container>
          <div className="project-hero-header">
            {/* Domain / Category Pill */}
            <div className="project-hero-eyebrow-row">
              <span className="project-domain-pill-hero">{project.category}</span>
              {project.status && (
                <span className="project-status-pill">{project.status}</span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h1 className="project-hero-title">
              {project.title}
              {project.subtitle && (
                <span className="project-hero-subtitle-block"> — {project.subtitle}</span>
              )}
            </h1>

            {/* Short Description */}
            <p className="project-hero-summary">{project.shortDescription}</p>

            {/* Technology Tags Row */}
            <div className="project-hero-tags-row">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            {/* Metadata Bar (Role, Timeline, Category, Status, Tools) */}
            <div className="project-meta-grid">
              <div className="project-meta-card">
                <span className="meta-card-label">ROLE</span>
                <span className="meta-card-value">{project.role}</span>
              </div>

              {project.timeline && (
                <div className="project-meta-card">
                  <span className="meta-card-label">TIMELINE</span>
                  <span className="meta-card-value">{project.timeline}</span>
                </div>
              )}

              <div className="project-meta-card">
                <span className="meta-card-label">CATEGORY</span>
                <span className="meta-card-value">{project.category}</span>
              </div>

              {project.status && (
                <div className="project-meta-card">
                  <span className="meta-card-label">STATUS</span>
                  <span className="meta-card-value">{project.status}</span>
                </div>
              )}

              <div className="project-meta-card span-all">
                <span className="meta-card-label">CORE TOOLS</span>
                <span className="meta-card-value highlight-yellow">
                  {project.tags.join(' · ')}
                </span>
              </div>
            </div>
          </div>

          {/* Large Visual Hero Banner */}
          <div
            className="project-hero-visual-card"
            style={
              {
                '--project-accent': project.accentColor,
              } as React.CSSProperties
            }
          >
            <div className="project-visual-glow" />
            <div className="project-visual-content">
              <div className="project-visual-watermark">
                {project.title.toUpperCase()}
              </div>

              <div className="project-visual-overlay-info">
                <span className="visual-badge">{project.category}</span>
                <h2 className="visual-headline">{project.title}</h2>
                <p className="visual-sub">{project.shortDescription}</p>

                <div className="visual-actions-row">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="visual-cta-btn primary"
                    >
                      <ExternalLinkIcon width={16} height={16} />
                      <span>Launch Project</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="visual-cta-btn secondary"
                    >
                      <GithubIcon width={16} height={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. PROJECT OVERVIEW */}
      <section className="case-study-section" id="overview">
        <Container>
          <div className="case-section-header">
            <span className="case-section-eyebrow">CONTEXT & BACKGROUND</span>
            <h2 className="case-section-title">Project Overview</h2>
          </div>

          <div className="project-overview-content-card">
            <p className="overview-lead-paragraph">{project.overview}</p>
          </div>
        </Container>
      </section>

      {/* 4. THE PROBLEM / CHALLENGE (Conditionally rendered) */}
      {project.problem && (
        <section className="case-study-section" id="problem">
          <Container>
            <div className="case-section-header">
              <span className="case-section-eyebrow">{project.problem.eyebrow || 'THE PROBLEM'}</span>
              <h2 className="case-section-title">{project.problem.heading}</h2>
              <p className="case-section-description">{project.problem.description}</p>
            </div>

            {project.problem.points && project.problem.points.length > 0 && (
              <div className="problem-points-grid">
                {project.problem.points.map((pt, idx) => (
                  <article key={pt.title} className="problem-point-card">
                    <div className="problem-card-badge">
                      <span className="problem-num">0{idx + 1}</span>
                      <span className="problem-tag">PAIN POINT</span>
                    </div>
                    <h3 className="problem-point-title">{pt.title}</h3>
                    <p className="problem-point-desc">{pt.description}</p>
                  </article>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 5. THE SOLUTION & PRINCIPLES (Conditionally rendered) */}
      {project.solution && (
        <section className="case-study-section" id="solution">
          <Container>
            <div className="case-section-header">
              <span className="case-section-eyebrow">
                {project.solution.eyebrow || 'THE SOLUTION'}
              </span>
              <h2 className="case-section-title">{project.solution.heading}</h2>
              <p className="case-section-description">{project.solution.description}</p>
            </div>

            {project.solution.principles && project.solution.principles.length > 0 && (
              <div className="solution-principles-grid">
                {project.solution.principles.map((pr, idx) => (
                  <div key={pr.title} className="solution-principle-card">
                    <div className="solution-icon-wrap">
                      <CheckIcon width={18} height={18} />
                    </div>
                    <div className="solution-principle-body">
                      <div className="principle-step-num">PRINCIPLE 0{idx + 1}</div>
                      <h3 className="solution-principle-title">{pr.title}</h3>
                      <p className="solution-principle-desc">{pr.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 6. KEY FEATURES (Conditionally rendered) */}
      {project.features && project.features.length > 0 && (
        <section className="case-study-section" id="features">
          <Container>
            <div className="case-section-header">
              <span className="case-section-eyebrow">CORE CAPABILITIES</span>
              <h2 className="case-section-title">Key Features</h2>
              <p className="case-section-description">
                Tailored features designed to deliver clarity, efficiency, and a refined user
                experience.
              </p>
            </div>

            <div className="case-features-grid">
              {project.features.map((feat, index) => (
                <div key={feat.title} className="case-feature-item-card">
                  <div className="feature-card-header">
                    <span className="feature-counter">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <SparkleIcon width={18} height={18} className="feature-sparkle-icon" />
                  </div>
                  <h3 className="case-feature-name">{feat.title}</h3>
                  <p className="case-feature-desc">{feat.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 7. TECHNICAL IMPLEMENTATION (Conditionally rendered) */}
      {project.technicalImplementation && (
        <section className="case-study-section" id="technical">
          <Container>
            <div className="case-section-header">
              <span className="case-section-eyebrow">UNDER THE HOOD</span>
              <h2 className="case-section-title">Technical Implementation</h2>
              <p className="case-section-description">
                {project.technicalImplementation.overview}
              </p>
            </div>

            {project.technicalImplementation.highlights && (
              <div className="tech-highlights-grid">
                {project.technicalImplementation.highlights.map((hl) => (
                  <div key={hl.category} className="tech-highlight-card">
                    <div className="tech-highlight-top">
                      <CpuIcon width={22} height={22} className="tech-highlight-icon" />
                      <h3 className="tech-highlight-category">{hl.category}</h3>
                    </div>

                    <div className="tech-highlight-tags">
                      {hl.items.map((item) => (
                        <span key={item} className="tech-sub-tag">
                          {item}
                        </span>
                      ))}
                    </div>

                    {hl.details && <p className="tech-highlight-details">{hl.details}</p>}
                  </div>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 8. PROCESS & APPROACH (Conditionally rendered) */}
      {project.process && project.process.steps && project.process.steps.length > 0 && (
        <section className="case-study-section" id="process">
          <Container>
            <div className="case-section-header">
              <span className="case-section-eyebrow">
                {project.process.eyebrow || 'THE APPROACH'}
              </span>
              <h2 className="case-section-title">
                {project.process.heading || 'Execution Methodology'}
              </h2>
            </div>

            <div className="process-timeline-grid">
              {project.process.steps.map((st) => (
                <div key={st.step} className="process-timeline-card">
                  <div className="timeline-step-badge">STEP {st.step}</div>
                  <h3 className="process-step-name">{st.name}</h3>
                  <p className="process-step-desc">{st.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 9. RESULTS & IMPACT (Conditionally rendered) */}
      {project.results && (
        <section className="case-study-section" id="results">
          <Container>
            <div className="case-section-header">
              <span className="case-section-eyebrow">
                {project.results.eyebrow || 'THE OUTCOME'}
              </span>
              <h2 className="case-section-title">{project.results.heading}</h2>
              <p className="case-section-description">{project.results.description}</p>
            </div>

            {project.results.metrics && project.results.metrics.length > 0 && (
              <div className="results-metrics-grid">
                {project.results.metrics.map((m) => (
                  <div key={m.label} className="metric-box-card">
                    <span className="metric-value-number">{m.value}</span>
                    <span className="metric-label-text">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* 10. RELEVANT LINKS & ACTION BAR */}
      <section className="case-study-section links-action-section">
        <Container>
          <div className="project-links-callout-card">
            <div className="links-callout-left">
              <span className="links-callout-eyebrow">PROJECT ARTIFACTS</span>
              <h3 className="links-callout-title">Interested in exploring further?</h3>
              <p className="links-callout-desc">
                Review the production repository or launch the interactive live demonstration.
              </p>
            </div>

            <div className="links-callout-actions">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  onClick={() => window.open(project.liveUrl, '_blank', 'noreferrer')}
                >
                  <ExternalLinkIcon width={16} height={16} />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  onClick={() => window.open(project.githubUrl, '_blank', 'noreferrer')}
                >
                  <GithubIcon width={16} height={16} />
                  GitHub Repository
                </Button>
              )}
              <Button variant="ghost" onClick={() => navigate('/projects')}>
                <LayersIcon width={16} height={16} />
                All Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. NEXT / PREVIOUS PROJECT NAVIGATION */}
      <section className="adjacent-projects-nav-section">
        <Container>
          <div className="adjacent-projects-grid">
            {adjacent.prev && (
              <Link
                to={`/projects/${adjacent.prev.slug}`}
                className="adjacent-project-card prev"
              >
                <div className="adjacent-dir-label">
                  <ArrowLeftIcon width={14} height={14} />
                  <span>PREVIOUS PROJECT</span>
                </div>
                <h3 className="adjacent-project-title">{adjacent.prev.title}</h3>
                <span className="adjacent-project-category">{adjacent.prev.category}</span>
              </Link>
            )}

            {adjacent.next && (
              <Link
                to={`/projects/${adjacent.next.slug}`}
                className="adjacent-project-card next"
              >
                <div className="adjacent-dir-label right">
                  <span>NEXT PROJECT</span>
                  <ArrowRightIcon width={14} height={14} />
                </div>
                <h3 className="adjacent-project-title">{adjacent.next.title}</h3>
                <span className="adjacent-project-category">{adjacent.next.category}</span>
              </Link>
            )}
          </div>
        </Container>
      </section>

      {/* 12. BOTTOM CONVERSION CTA */}
      <section className="project-bottom-cta-section">
        <Container>
          <div className="project-bottom-cta-card">
            <span className="bottom-cta-eyebrow">HAVE A SIMILAR CHALLENGE?</span>
            <h2 className="bottom-cta-heading">Let's build something useful together.</h2>
            <p className="bottom-cta-desc">
              Have an idea, project, or need engineering expertise to turn a concept into reality?
              I'm always open to discussing new opportunities.
            </p>
            <div className="bottom-cta-btn-wrap">
              <Button variant="primary" onClick={() => navigate('/contact')}>
                Start a Conversation →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
