import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { DetailedService } from '../../lib/servicesData'
import {
  CodeIcon,
  PaletteIcon,
  CpuIcon,
  PlusIcon,
  MinusIcon,
  CheckIcon,
  ArrowRightIcon,
} from '../icons'

interface ServiceCardProps {
  service: DetailedService
  isExpanded: boolean
  onToggle: () => void
}

export function ServiceCard({ service, isExpanded, onToggle }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  function renderIcon() {
    if (service.iconType === 'code') {
      return <CodeIcon width={22} height={22} />
    }
    if (service.iconType === 'design') {
      return <PaletteIcon width={22} height={22} />
    }
    return <CpuIcon width={22} height={22} />
  }

  const contentId = `service-expanded-content-${service.id}`
  const buttonId = `service-toggle-btn-${service.id}`

  return (
    <article
      className={`service-detail-card ${isExpanded ? 'is-expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isExpanded
          ? service.accentColor
          : isHovered
          ? `${service.accentColor}55`
          : undefined,
      }}
    >
      {/* Clickable Header for Card Expansion */}
      <button
        type="button"
        id={buttonId}
        className="service-detail-header-btn"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${service.title}`}
      >
        <div className="service-detail-header-left">
          {/* Service Number & Icon */}
          <div className="service-detail-badge-group">
            <span
              className="service-detail-number"
              style={{ color: service.accentColor }}
            >
              {service.number}
            </span>
            <div
              className="service-detail-icon-box"
              style={{
                backgroundColor: `${service.accentColor}18`,
                color: service.accentColor,
              }}
              aria-hidden="true"
            >
              {renderIcon()}
            </div>
          </div>

          {/* Service Title & Short Summary */}
          <div className="service-detail-heading-group">
            <h3 className="service-detail-title">{service.title}</h3>
            <p className="service-detail-short-summary">{service.shortSummary}</p>
            {/* Tags preview on header */}
            <div className="service-detail-tags-row">
              {service.tags.map((tag) => (
                <span key={tag} className="service-detail-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Indicator: + / − */}
        <div
          className={`service-detail-toggle-indicator ${isExpanded ? 'active' : ''}`}
          style={{
            borderColor: isExpanded ? service.accentColor : undefined,
            color: isExpanded ? service.accentColor : undefined,
          }}
          aria-hidden="true"
        >
          {isExpanded ? <MinusIcon width={18} height={18} /> : <PlusIcon width={18} height={18} />}
        </div>
      </button>

      {/* Expanded Content Drawer */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`service-detail-content-drawer ${isExpanded ? 'open' : 'closed'}`}
      >
        <div className="service-detail-content-inner">
          <div className="service-detail-divider" />

          <div className="service-expanded-grid">
            {/* Section 1: What It Is */}
            <div className="service-expanded-section">
              <h4 className="service-expanded-section-title">
                <span className="section-title-bullet" style={{ backgroundColor: service.accentColor }} />
                What It Is
              </h4>
              <p className="service-expanded-description">{service.whatItIs}</p>
            </div>

            {/* Section 2: Who It Is For */}
            <div className="service-expanded-section">
              <h4 className="service-expanded-section-title">
                <span className="section-title-bullet" style={{ backgroundColor: service.accentColor }} />
                Who It Is For
              </h4>
              <div className="service-target-audience-box">
                <p>{service.whoItIsFor}</p>
              </div>
            </div>

            {/* Section 3: What I Provide / Includes */}
            <div className="service-expanded-section">
              <h4 className="service-expanded-section-title">
                <span className="section-title-bullet" style={{ backgroundColor: service.accentColor }} />
                What I Provide
              </h4>
              <ul className="service-features-list">
                {service.whatIProvide.map((feature) => (
                  <li key={feature} className="service-feature-item">
                    <span
                      className="service-check-icon-circle"
                      style={{
                        backgroundColor: `${service.accentColor}18`,
                        color: service.accentColor,
                      }}
                      aria-hidden="true"
                    >
                      <CheckIcon width={13} height={13} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Deliverables */}
            <div className="service-expanded-section">
              <h4 className="service-expanded-section-title">
                <span className="section-title-bullet" style={{ backgroundColor: service.accentColor }} />
                Deliverables
              </h4>
              <div className="service-deliverables-grid">
                {service.deliverables.map((deliverable) => (
                  <div key={deliverable} className="service-deliverable-chip">
                    <span
                      className="deliverable-accent-dot"
                      style={{ backgroundColor: service.accentColor }}
                    />
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Relevant Technologies / Tools */}
            <div className="service-expanded-section">
              <h4 className="service-expanded-section-title">
                <span className="section-title-bullet" style={{ backgroundColor: service.accentColor }} />
                Relevant Technologies &amp; Tools
              </h4>
              <div className="service-tech-tags-wrapper">
                {service.technologies.map((tech) => (
                  <span key={tech} className="service-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="service-expanded-footer">
            <Link
              to={`/contact?type=${encodeURIComponent(service.title)}`}
              className="service-action-link"
              style={{
                backgroundColor: `${service.accentColor}14`,
                borderColor: `${service.accentColor}44`,
                color: service.accentColor,
              }}
            >
              <span>Discuss {service.title}</span>
              <ArrowRightIcon width={15} height={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
