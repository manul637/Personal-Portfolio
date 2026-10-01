import { useState, useEffect } from 'react'
import { getAllSkills } from '../../services/skillService'
import type { SkillItem } from '../../lib/portfolioData'
import { SectionHeader } from '../ui/SectionHeader'

const CATEGORIES = ['All Technologies', 'Frontend', 'Backend', 'AI & Data', 'Tools'] as const
type Category = (typeof CATEGORIES)[number]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Technologies')
  const [skills, setSkills] = useState<SkillItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let isMounted = true

    getAllSkills()
      .then((data) => {
        if (isMounted) {
          setSkills(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error('Failed to load skills from Supabase:', err)
          setError(
            err instanceof Error ? err.message : 'Failed to load skills from database.'
          )
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [reloadKey])

  // Filter skills based on selected category, defaulting to top 4 for initial view
  const filteredSkills =
    activeCategory === 'All Technologies'
      ? skills.slice(0, 4) // Show standard 4 top skills (JS, React, Next, Tailwind)
      : skills.filter((s) => s.category === activeCategory)

  // Custom icon renderer per skill
  function renderSkillIcon(skill: SkillItem) {
    if (skill.iconKey === 'JS') {
      return (
        <span
          style={{
            backgroundColor: '#F7DF1E',
            color: '#000000',
            padding: '4px 8px',
            borderRadius: '6px',
            fontWeight: 800,
            fontSize: '18px',
          }}
        >
          JS
        </span>
      )
    }

    if (skill.iconKey === 'React') {
      return (
        <svg width="34" height="34" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    }

    if (skill.iconKey === 'Next') {
      return (
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#000000',
            border: '1.5px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '16px',
          }}
        >
          N
        </div>
      )
    }

    if (skill.iconKey === 'Tailwind') {
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      )
    }

    // Generic fallback with badge
    return (
      <span
        style={{
          color: skill.color,
          fontSize: '15px',
          fontWeight: 700,
        }}
      >
        {skill.name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header with Eyebrow, Heading & Underline */}
        <SectionHeader
          eyebrow="MY EXPERTISE"
          titlePrefix="Skills &"
          accentWord="Technologies"
          description="Tools I use to turn ideas into fast, scalable and polished digital experiences."
        />

        {/* Category Filter Pills */}
        <div className="skills-filter-container">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Frontend' && <span>&lt;/&gt;</span>}
              {cat === 'Backend' && <span>⚙</span>}
              {cat === 'Tools' && <span>🔧</span>}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {loading && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
              <span className="form-spinner" style={{ display: 'inline-block', marginBottom: '12px' }} />
              <p>Loading skills...</p>
            </div>
          )}

          {error && !loading && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '30px 0', color: 'var(--text-muted)' }}>
              <p style={{ color: 'var(--color-danger, #ef4444)', marginBottom: '12px' }}>{error}</p>
              <button
                type="button"
                className="btn-primary"
                style={{ display: 'inline-flex', padding: '8px 16px', fontSize: '13px' }}
                onClick={() => {
                  setLoading(true)
                  setReloadKey((k) => k + 1)
                }}
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && filteredSkills.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '30px 0', color: 'var(--text-muted)' }}>
              <p>No skills found in this category.</p>
            </div>
          )}

          {!loading &&
            !error &&
            filteredSkills.map((skill) => (
              <div key={skill.id} className="skill-card-item">
                <div className="skill-icon-wrapper">{renderSkillIcon(skill)}</div>
                <h3 className="skill-name-text">{skill.name}</h3>
                <span className="skill-category-label">{skill.category}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
