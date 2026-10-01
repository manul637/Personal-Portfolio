import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ContactForm } from '../components/contact/ContactForm'
import { CONTACT_INFO } from '../lib/portfolioData'
import { SITE_CONFIG } from '../config/site'
import { useProfile } from '../context/ProfileContext'
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
  const { profile } = useProfile()

  const email = profile?.email || CONTACT_INFO.email
  const location = profile?.location || CONTACT_INFO.location

  // Set page title for SEO
  useEffect(() => {
    const titleName = profile?.name ? `${profile.name.toUpperCase()}.` : 'MANUL.'
    const titleProfession = profile?.profession || 'Creative Developer · AI · Digital Products'
    document.title = `Contact — ${titleName} | ${titleProfession}`
  }, [profile])

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
              href={`mailto:${email}`}
              className="contact-info-pill-card"
              aria-label={`Send email to ${email}`}
            >
              <div className="contact-icon-circle" aria-hidden="true">
                <MailIcon />
              </div>
              <div className="contact-info-meta">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">{email}</span>
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
                <span className="contact-card-value">{location}</span>
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
                {[
                  {
                    name: 'GitHub',
                    url: profile?.githubUrl || SITE_CONFIG.social.github,
                    icon: 'github',
                  },
                  {
                    name: 'LinkedIn',
                    url:
                      profile?.linkedinUrl ||
                      (SITE_CONFIG.social.linkedin.includes('YOUR_')
                        ? null
                        : SITE_CONFIG.social.linkedin),
                    icon: 'linkedin',
                  },
                  {
                    name: 'X',
                    url:
                      profile?.xUrl ||
                      (SITE_CONFIG.social.x.includes('YOUR_') ? null : SITE_CONFIG.social.x),
                    icon: 'x',
                  },
                  {
                    name: 'Email',
                    url: `mailto:${email}`,
                    icon: 'email',
                  },
                ]
                  .filter((item): item is { name: string; url: string; icon: string } => Boolean(item.url))
                  .map((link) => (
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
