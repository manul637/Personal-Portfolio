import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircleIcon,
  AlertCircleIcon,
  RefreshCwIcon,
  ArrowRightIcon,
} from '../icons'

export interface ContactFormProps {
  showProjectType?: boolean
  initialProjectType?: string
  redirectToHomeOnSuccess?: boolean
}

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

const PROJECT_TYPE_OPTIONS = [
  'Web Development',
  'UI/UX Design',
  'AI Product Development',
  'Full-Stack Application',
  'Consultation / Other',
]

export function ContactForm({
  showProjectType = true,
  initialProjectType = '',
  redirectToHomeOnSuccess = false,
}: ContactFormProps) {
  // Initialize state directly to avoid useEffect setState cascading renders
  const [formData, setFormData] = useState<FormState>(() => ({
    name: '',
    email: '',
    projectType: initialProjectType,
    message: '',
  }))

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

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

    if (showProjectType && !formData.projectType.trim()) {
      newErrors.projectType = 'Please select a project type'
    }

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
          'Failed to deliver your message due to a connection timeout. Please retry or contact directly.'
        )
        return
      }

      setStatus('success')
    }, 800)
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

  return (
    <div className="contact-form-inner">
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
            Thanks — I'll review your message and get back to you within 24–48 hours.
          </p>
          <div className="feedback-actions">
            {redirectToHomeOnSuccess && (
              <Link to="/" className="btn-primary">
                <span>Back Home</span>
                <ArrowRightIcon />
              </Link>
            )}
            <button
              type="button"
              className={redirectToHomeOnSuccess ? 'btn-secondary' : 'btn-primary'}
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

          {/* Field: Project Type (Optional based on prop) */}
          {showProjectType && (
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
                {PROJECT_TYPE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <span id="project-type-error" className="field-error-message">
                  <AlertCircleIcon width={13} height={13} />
                  {errors.projectType}
                </span>
              )}
            </div>
          )}

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
              placeholder="Tell me about your project, idea, or problem..."
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
  )
}
