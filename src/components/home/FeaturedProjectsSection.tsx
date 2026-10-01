import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProjects } from '../../services/projectService'
import type { ProjectDetail } from '../../types/project'
import { SectionHeader } from '../ui/SectionHeader'
import { Tag } from '../ui/Tag'
import { GithubIcon, ExternalLinkIcon } from '../icons'

export function FeaturedProjectsSection() {
  const [featuredProjects, setFeaturedProjects] = useState<ProjectDetail[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    getFeaturedProjects()
      .then((data) => {
        if (isMounted) {
          setFeaturedProjects(data)
        }
      })
      .catch((err) => {
        console.error('Failed to load featured projects from Supabase:', err)
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="featured-projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="MY PORTFOLIO"
          titlePrefix="Featured"
          accentWord="Projects"
          description="A selection of things I've designed, built, experimented with, and occasionally broken before fixing."
        />

        {/* 3-Column Projects Grid */}
        <div className="projects-grid">
          {loading && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
              <span className="form-spinner" style={{ display: 'inline-block', marginBottom: '12px' }} />
              <p>Loading featured projects...</p>
            </div>
          )}
          {!loading && featuredProjects.map((project) => (
            <article key={project.slug} className="project-card-item">
              {/* Image Banner with Action Icons & Domain Badge */}
              <div
                className="project-image-box"
                style={{
                  background: `linear-gradient(135deg, rgba(23, 26, 34, 0.9) 0%, rgba(13, 15, 20, 0.95) 100%)`,
                }}
              >
                {/* Domain Pill Badge */}
                <span className="project-domain-pill">{project.category}</span>

                {/* Top-Right Action Buttons */}
                <div className="project-action-icons">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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

                {/* Decorative Project Abstract Icon */}
                <div
                  style={{
                    fontSize: '28px',
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
                <h3 className="project-title-text">
                  <Link to={`/projects/${project.slug}`} className="project-title-link">
                    {project.title}
                  </Link>
                </h3>
                <p className="project-desc-text">{project.shortDescription}</p>

                {/* Technology Tags */}
                <div className="project-tags-row">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel / Pagination Dots from Screenshot */}
        <div className="project-pagination-dots" aria-hidden="true">
          <div className="pagination-pill-active" />
          <div className="pagination-dot-inactive" />
          <div className="pagination-dot-inactive" />
        </div>

        {/* Mobile View All Button from Mobile Reference */}
        <Link to="/work" className="mobile-view-all-projects-btn">
          View All Projects &gt;
        </Link>
      </div>
    </section>
  )
}
