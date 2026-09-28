export interface SectionHeaderProps {
  eyebrow?: string
  titlePrefix?: string
  accentWord?: string
  titleSuffix?: string
  description?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  titlePrefix,
  accentWord,
  titleSuffix,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">
        {titlePrefix && `${titlePrefix} `}
        {accentWord && <span className="accent-word">{accentWord}</span>}
        {titleSuffix && ` ${titleSuffix}`}
      </h2>
      <div className="accent-underline-bar" />
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
