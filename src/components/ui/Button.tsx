import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  asLink?: boolean
  href?: string
  children: ReactNode
}

export function Button({
  variant = 'primary',
  asLink = false,
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
      ? 'btn-secondary'
      : 'btn-ghost'

  const combinedClass = `${variantClass} ${className}`.trim()

  if (asLink && href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  )
}
