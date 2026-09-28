import { SERVICES_DATA } from '../../lib/portfolioData'
import { SectionHeader } from '../ui/SectionHeader'
import { CodeIcon, PaletteIcon, SmartphoneIcon } from '../icons'

export function ServicesSection() {
  function renderServiceIcon(iconType: string) {
    if (iconType === 'code') {
      return <CodeIcon />
    }
    if (iconType === 'design') {
      return <PaletteIcon />
    }
    return <SmartphoneIcon />
  }

  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="WHAT I DO"
          titlePrefix="My"
          accentWord="Services"
          description="Transforming ideas into powerful digital solutions with creativity and precision."
        />

        {/* 3-Column Services Grid */}
        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card-item">
              <div
                className="service-icon-box"
                style={{
                  backgroundColor: `${service.accentColor}18`,
                  color: service.accentColor,
                }}
              >
                {renderServiceIcon(service.iconType)}
              </div>

              <h3 className="service-title-text">{service.title}</h3>
              <p className="service-desc-text">{service.description}</p>

              {/* Deliverables Bullet List */}
              <div className="service-deliverables-list">
                {service.deliverables.map((item) => (
                  <span key={item} className="service-deliverable-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
