import { CONTACT_INFO } from '../../lib/portfolioData'
import { SectionHeader } from '../ui/SectionHeader'
import { ContactForm } from '../contact/ContactForm'
import { MailIcon, PhoneIcon, MapPinIcon } from '../icons'

export function ContactSection() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="GET IN TOUCH"
          titlePrefix="Contact"
          accentWord="Me"
          description="Have a project, idea, collaboration, or interesting problem? Tell me a little about it."
        />

        {/* 2-Column Contact Grid */}
        <div className="contact-section-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-cards-stack">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="contact-info-pill-card"
            >
              <div className="contact-icon-circle">
                <MailIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">{CONTACT_INFO.email}</span>
              </div>
            </a>

            <div className="contact-info-pill-card">
              <div className="contact-icon-circle">
                <PhoneIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Availability</span>
                <span className="contact-card-value">{CONTACT_INFO.availability}</span>
              </div>
            </div>

            <div className="contact-info-pill-card">
              <div className="contact-icon-circle">
                <MapPinIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-value">{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reusable Contact Form */}
          <div className="contact-form-container">
            <ContactForm showProjectType={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

