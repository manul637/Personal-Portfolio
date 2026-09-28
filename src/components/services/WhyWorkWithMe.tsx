import { useState } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { WHY_WORK_WITH_ME } from '../../lib/servicesData'
import { TargetIcon, LayersIcon, ZapIcon, ArrowRightIcon } from '../icons'

export function WhyWorkWithMe() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  function renderIcon(type: 'target' | 'layers' | 'zap') {
    if (type === 'target') {
      return <TargetIcon width={24} height={24} />
    }
    if (type === 'layers') {
      return <LayersIcon width={24} height={24} />
    }
    return <ZapIcon width={24} height={24} />
  }

  return (
    <section className="services-why-work-section" aria-labelledby="why-work-heading">
      <SectionHeader
        eyebrow="WHY CHOOSE ME"
        titlePrefix="Built Different."
        accentWord="Why Work With Me."
        description="Bridging the gap between engineering rigor and thoughtful interface design."
      />

      <div className="why-work-grid" role="list">
        {WHY_WORK_WITH_ME.map((item) => {
          const isHovered = hoveredId === item.id

          return (
            <article
              key={item.id}
              role="listitem"
              className={`why-work-card ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              tabIndex={0}
            >
              {/* Card Top: Icon & Indicator */}
              <div className="why-work-top-row">
                <div className="why-work-icon-box" aria-hidden="true">
                  {renderIcon(item.iconType)}
                </div>
                <span className="why-work-arrow-indicator" aria-hidden="true">
                  <ArrowRightIcon width={16} height={16} />
                </span>
              </div>

              {/* Title & Badge */}
              <div className="why-work-content-group">
                <span className="why-work-badge">{item.badge}</span>
                <h3 className="why-work-title">{item.title}</h3>
                <p className="why-work-desc">{item.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
