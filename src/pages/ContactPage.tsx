import { useState, useEffect, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { CONTACT_INFO, SOCIAL_LINKS } from '../lib/portfolioData'
import {
  MailIcon,
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  RefreshCwIcon,
  ArrowRightIcon,
} from '../components/icons'

interface FormState {
  name: string
  email: string
  projectType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  message?: string
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Set page title for SEO and accessibility
  useEffect(() => {
    document.title = 'Contact — MANUL. | Creative Developer · AI · Digital Products'
    window.scrollTo({ top: 0, behavior: 'instant' })

    const typeParam = searchParams.get('type')
    if (typeParam) {
      const valid = [
        'Web Development',
        'UI/UX Design',
        'AI Product Development',
        'Full-Stack Application',
        'Consultation / Other',
      ]
      const match = valid.find(
        (v) => v.toLowerCase() === typeParam.trim().toLowerCase()
      )
      if (match) {
        setFormData((prev) => ({ ...prev, projectType: match }))
      }
    }
  }, [searchParams])

  function validate(): boolean {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Project Type validation
    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Please select a project type'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message (at least 10 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleInputChange(field: keyof FormState, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear inline error immediately upon editing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  function submitForm() {
    if (!validate()) {
      return
    }

    setStatus('loading')
    setErrorMessage('')

    // Mock submission handler (as instructed: no Supabase connection yet)
    setTimeout(() => {
      // Simulate error trigger if testing with error@test.com or name "TriggerError"
      if (
        formData.email.toLowerCase() === 'error@test.com' ||
        formData.name.trim().toLowerCase() === 'triggererror'
      ) {
        setStatus('error')
        setErrorMessage(
          'Failed to deliver your message due to a connection timeout. Please retry or contact hello@manul.dev directly.'
        )
        return
      }

      // Successful submission
      setStatus('success')
    }, 850)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    submitForm()
  }

  function handleResetForm() {
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
    })
    setErrors({})
    setStatus('idle')
    setErrorMessage('')
  }

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

            {/* 3. Social links */}
            <div className="contact-social-card">
              <span className="contact-social-label">Connect on Social</span>
              <div className="contact-social-row">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
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

          {/* Right Column: Contact Form with Validation & States */}
          <div className="contact-form-container">
            {/* STATE: Success */}
            {status === 'success' && (
              <div
                className="form-feedback-card success"
                role="status"
                aria-live="polite"
              >
                <div className="feedback-icon-wrapper success">
                  <CheckCircleIcon width={34} height={34} />
                </div>
                <h3 className="feedback-title success">✓ MESSAGE SENT</h3>
                <p className="feedback-desc">
                  Thanks — I'll get back to you within 24–48 hours.
                </p>
                <div className="feedback-actions">
                  <Link to="/" className="btn-primary">
                    <span>Back Home</span>
                    <ArrowRightIcon />
                  </Link>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleResetForm}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}

            {/* STATE: Error / Retry */}
            {status === 'error' && (
              <div
                className="form-feedback-card error"
                role="alert"
                aria-live="assertive"
              >
                <div className="feedback-icon-wrapper error">
                  <AlertCircleIcon width={34} height={34} />
                </div>
                <h3 className="feedback-title error">Submission Error</h3>
                <p className="feedback-desc">
                  {errorMessage ||
                    'Something went wrong while submitting your message. Please try again or reach out directly via email.'}
                </p>
                <div className="feedback-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={submitForm}
                  >
                    <RefreshCwIcon />
                    <span>Retry Now</span>
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setStatus('idle')}
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            )}

            {/* STATE: Default & Loading Form */}
            {(status === 'idle' || status === 'loading') && (
              <form onSubmit={handleSubmit} noValidate>
                {/* Field: Name */}
                <div className="contact-input-field">
                  <label htmlFor="contact-name" className="contact-label-text">
                    <span>Your Name</span>
                    <span className="contact-label-required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={`contact-text-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="John Doe"
                    value={formData.name}
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  {errors.name && (
                    <span id="name-error" className="field-error-message">
                      <AlertCircleIcon width={13} height={13} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Field: Email */}
                <div className="contact-input-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="contact-email" className="contact-label-text">
                    <span>Your Email</span>
                    <span className="contact-label-required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`contact-text-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="john@example.com"
                    value={formData.email}
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  {errors.email && (
                    <span id="email-error" className="field-error-message">
                      <AlertCircleIcon width={13} height={13} />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Field: Project Type */}
                <div className="contact-input-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="contact-project-type" className="contact-label-text">
                    <span>Project Type</span>
                    <span className="contact-label-required">*</span>
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    className={`contact-select-input ${errors.projectType ? 'input-error' : ''}`}
                    value={formData.projectType}
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'project-type-error' : undefined}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                  >
                    <option value="">Select project type...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="AI Product Development">AI Product Development</option>
                    <option value="Full-Stack Application">Full-Stack Application</option>
                    <option value="Consultation / Other">Consultation / Other</option>
                  </select>
                  {errors.projectType && (
                    <span id="project-type-error" className="field-error-message">
                      <AlertCircleIcon width={13} height={13} />
                      {errors.projectType}
                    </span>
                  )}
                </div>

                {/* Field: Message */}
                <div className="contact-input-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="contact-message" className="contact-label-text">
                    <span>Your Message</span>
                    <span className="contact-label-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className={`contact-textarea-input ${errors.message ? 'input-error' : ''}`}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    disabled={status === 'loading'}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                  {errors.message && (
                    <span id="message-error" className="field-error-message">
                      <AlertCircleIcon width={13} height={13} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    marginTop: '24px',
                    opacity: status === 'loading' ? 0.8 : 1,
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="form-spinner" aria-hidden="true" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
