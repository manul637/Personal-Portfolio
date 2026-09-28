import { useState } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { PROCESS_STAGES } from '../../lib/servicesData'

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section className="services-process-section" aria-labelledby="process-heading">
      <SectionHeader
        eyebrow="HOW I WORK"
        titlePrefix="Simple Process."
        accentWord="Serious Output."
        description="A structured four-step journey designed to take your idea from ambiguity to a polished, high-performing product."
      />

      {/* Desktop & Mobile Interactive Process Flow */}
      <div className="process-timeline-container">
        {/* Connecting Line Tracker */}
        <div className="process-track-line" aria-hidden="true">
          <div
            className="process-track-progress"
            style={{ width: `${(activeStep / (PROCESS_STAGES.length - 1)) * 100}%` }}
          />
        </div>

        <div className="process-stages-grid" role="list">
          {PROCESS_STAGES.map((stage, index) => {
            const isSelected = activeStep === index
            const isCompleted = activeStep > index

            return (
              <div
                key={stage.number}
                role="listitem"
                className={`process-stage-item ${isSelected ? 'is-active' : ''} ${
                  isCompleted ? 'is-completed' : ''
                }`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveStep(index)
                  }
                }}
                aria-label={`Stage ${stage.number}: ${stage.title} - ${stage.subtitle}`}
              >
                {/* Node marker with number */}
                <div className="process-stage-node">
                  <span className="process-node-number">{stage.number}</span>
                </div>

                {/* Stage Content Card */}
                <div className="process-stage-card">
                  <div className="process-stage-card-header">
                    <span className="process-stage-badge">Stage {stage.number}</span>
                    <h3 className="process-stage-title">{stage.title}</h3>
                    <span className="process-stage-subtitle">{stage.subtitle}</span>
                  </div>

                  <p className="process-stage-desc">{stage.description}</p>

                  <div className="process-stage-details">
                    <span className="process-details-label">Key Focus</span>
                    <p className="process-details-text">{stage.details}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
