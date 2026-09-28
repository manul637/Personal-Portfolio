import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ContactForm } from '../components/contact/ContactForm'
import { CONTACT_INFO, SOCIAL_LINKS } from '../lib/portfolioData'
import {
  MailIcon,
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
  ArrowRightIcon,
} from '../components/icons'

export default function ContactPage() {
  const [searchParams] = useSearchParams()

  // Set page title for SEO
  useEffect(() => {
    document.title = 'Contact — MANUL. | Creative Developer · AI · Digital Products'
  }, [])

  // Derive initial project type from query param on render
  const typeParam = searchParams.get('type')
  const validTypes = [
    'Web Development',
    'UI/UX Design',
    'AI Product Development',
    'Full-Stack Application',
    'Consultation / Other',
  ]
  const initialProjectType =
    (typeParam &&
      validTypes.find((v) => v.toLowerCase() === typeParam.trim().toLowerCase())) ||
    ''

  function renderSocialIcon(iconType: string) {
    switch (iconType) {
      case 'github':
        return <GithubIcon width={16} height={16} />
      case 'linkedin':
        return <LinkedinIcon width={16} height={16} />
      case 'x':
        return <XIcon width={15} height={15} />
      case 'email':
        return <MailIcon width={16} height={16} />
      default:
        return <ArrowRightIcon width={16} height={16} />
    }
  }

  return (
    <div className="section-wrapper contact-page-wrapper">
      <Container>
        {/* 1. Contact Hero / Heading matching UI reference */}
        <SectionHeader
          eyebrow="GET IN TOUCH"
          titlePrefix="Contact"
          accentWord="Me"
          description="Have a project, idea, collaboration, or interesting problem? Tell me a little about it."
        />

        {/* 2-Column Responsive Contact Grid */}
        <div className="contact-section-grid">
          {/* Left Column: Contact Information & Social Links */}
          <div className="contact-cards-stack">
            {/* 1. Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="contact-info-pill-card"
              aria-label={`Send email to ${CONTACT_INFO.email}`}
            >
              <div className="contact-icon-circle" aria-hidden="true">
                <MailIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">{CONTACT_INFO.email}</span>
              </div>
            </a>

            {/* 2. Availability */}
            <div className="contact-info-pill-card">
              <div className="contact-icon-circle" aria-hidden="true">
                <BriefcaseIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Availability</span>
                <span className="contact-card-value">{CONTACT_INFO.availability}</span>
              </div>
            </div>

            {/* 3. Location */}
            <div className="contact-info-pill-card">
              <div className="contact-icon-circle" aria-hidden="true">
                <MapPinIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-value">{CONTACT_INFO.location}</span>
              </div>
            </div>

            {/* 4. Response Time */}
            <div className="contact-info-pill-card">
              <div className="contact-icon-circle" aria-hidden="true">
                <ClockIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Response Time</span>
                <span className="contact-card-value">{CONTACT_INFO.responseTime}</span>
              </div>
            </div>

            {/* 5. Social links */}
            <div className="contact-social-card">
              <span className="contact-social-label">Connect on Social</span>
              <div className="contact-social-row">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="contact-social-btn"
                    aria-label={`Connect via ${link.name}`}
                  >
                    {renderSocialIcon(link.icon)}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reusable Contact Form with Validation & States */}
          <div className="contact-form-container">
            <ContactForm
              showProjectType={true}
              initialProjectType={initialProjectType}
              redirectToHomeOnSuccess={true}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
