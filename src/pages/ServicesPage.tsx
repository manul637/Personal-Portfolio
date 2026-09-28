import { useState, useEffect } from 'react'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ServiceCard } from '../components/services/ServiceCard'
import { ProcessTimeline } from '../components/services/ProcessTimeline'
import { WhyWorkWithMe } from '../components/services/WhyWorkWithMe'
import { ServicesCta } from '../components/services/ServicesCta'
import { DETAILED_SERVICES } from '../../src/lib/servicesData'
import { SparkleIcon } from '../components/icons'

const SERVICE_CATEGORIES = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    dotClass: 'web',
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    dotClass: 'design',
  },
  {
    id: 'ai-product-development',
    number: '03',
    title: 'AI Product Development',
    dotClass: 'ai',
  },
]

export default function ServicesPage() {
  // First card ('web-development') expanded by default so user immediately sees rich deliverables
  const [expandedCards, setExpandedCards] = useState<Set<string>>(
    new Set(['web-development'])
  )
  const [activeCategoryId, setActiveCategoryId] = useState<string>('web-development')

  useEffect(() => {
    document.title = 'Services — MANUL. | Creative Developer · AI · Digital Products'
    window.scrollTo({ top: 0, behavior: 'instant' })

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore comprehensive digital product services: Web Development, UI/UX Design, and AI Product Development with a transparent four-stage process.'
      )
    }
  }, [])

  function toggleCard(id: string) {
    setExpandedCards((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
        setActiveCategoryId(id)
      }
      return next
    })
  }

  function handleCategoryClick(categoryId: string) {
    setActiveCategoryId(categoryId)
    setExpandedCards((prev) => {
      const next = new Set(prev)
      next.add(categoryId)
      return next
    })
    const elem = document.getElementById(`service-toggle-btn-${categoryId}`)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  function handleToggleAll() {
    if (expandedCards.size === DETAILED_SERVICES.length) {
      // Collapse all
      setExpandedCards(new Set())
    } else {
      // Expand all
      setExpandedCards(new Set(DETAILED_SERVICES.map((s) => s.id)))
    }
  }

  const allExpanded = expandedCards.size === DETAILED_SERVICES.length

  return (
    <div className="services-page-wrapper">
      <Container>
        {/* Page Hero Header */}
        <header className="services-hero-header">
          <SectionHeader
            eyebrow="WHAT I DO"
            titlePrefix="I Build"
            accentWord="Digital Products"
            titleSuffix="From Idea To Interface."
            description="Whether you need a high-converting website, a polished web application, or an AI-powered product, I can help turn the idea into something people can actually use."
          />

          {/* Services Category Selectors (Horizontal Rounded-Rectangle Cards) */}
          <div
            className="services-category-selectors"
            role="tablist"
            aria-label="Services Category Selectors"
          >
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`category-tab-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls={`service-expanded-content-${cat.id}`}
                  className={`services-category-card ${cat.dotClass} ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <span className="category-card-text">
                    <span className="category-card-number">{cat.number}</span>{' '}
                    <span className="category-card-title">{cat.title}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </header>

        {/* Services List Section */}
        <section
          className="services-list-section"
          aria-labelledby="services-list-heading"
        >
          <div className="services-list-controls">
            <div className="services-list-label-group">
              <span className="services-list-subheading">
                <SparkleIcon width={14} height={14} className="services-star-icon" />
                EXPLORE ALL OFFERINGS
              </span>
              <p className="services-list-hint">
                Click any service card to expand deliverables, technologies, and project scope.
              </p>
            </div>

            <button
              type="button"
              className="services-toggle-all-btn"
              onClick={handleToggleAll}
              aria-label={allExpanded ? 'Collapse all service details' : 'Expand all service details'}
            >
              {allExpanded ? 'Collapse All −' : 'Expand All +'}
            </button>
          </div>

          <div className="services-cards-stack">
            {DETAILED_SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedCards.has(service.id)}
                onToggle={() => toggleCard(service.id)}
              />
            ))}
          </div>
        </section>

        {/* 4-Stage Process Section */}
        <ProcessTimeline />

        {/* Why Work With Me Section */}
        <WhyWorkWithMe />

        {/* Services Page Bottom CTA */}
        <ServicesCta />
      </Container>
    </div>
  )
}
