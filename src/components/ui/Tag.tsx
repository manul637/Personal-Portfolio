import type { HTMLAttributes, ReactNode } from 'react'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export function Tag({ children, className = '', ...props }: TagProps) {
  return (
    <span className={`tag-pill ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}
