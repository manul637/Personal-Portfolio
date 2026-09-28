import { useState, type FormEvent } from 'react'
import { CONTACT_INFO } from '../../lib/portfolioData'
import { SectionHeader } from '../ui/SectionHeader'
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from '../icons'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function validate(): boolean {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message (at least 10 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate async submission with mock handler (no backend yet per instructions)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 800)
  }

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

          {/* Right Column: Contact Form */}
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-feedback-card">
                <div style={{ color: '#22c55e' }}>
                  <CheckCircleIcon width={36} height={36} />
                </div>
                <h4 className="feedback-title">✓ MESSAGE SENT</h4>
                <p className="feedback-desc">
                  Thanks for reaching out! I'll review your message and get back
                  to you within 24–48 hours.
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  style={{ marginTop: '12px', fontSize: '14px' }}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-input-field">
                  <label htmlFor="contact-name" className="contact-label-text">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="contact-text-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: undefined })
                    }}
                  />
                  {errors.name && (
                    <span className="field-error-message">{errors.name}</span>
                  )}
                </div>

                <div className="contact-input-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="contact-email" className="contact-label-text">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="contact-text-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: undefined })
                    }}
                  />
                  {errors.email && (
                    <span className="field-error-message">{errors.email}</span>
                  )}
                </div>

                <div className="contact-input-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="contact-message" className="contact-label-text">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="contact-textarea-input"
                    placeholder="Tell me about your project, idea, or problem..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: undefined })
                    }}
                  />
                  {errors.message && (
                    <span className="field-error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    marginTop: '22px',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
