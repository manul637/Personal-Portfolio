export interface ProjectProblemPoint {
  title: string
  description: string
}

export interface ProjectSolutionPrinciple {
  title: string
  description: string
}

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectProcessStep {
  step: string
  name: string
  description: string
}

export interface ProjectResultMetric {
  value: string
  label: string
}

export interface ProjectTechSection {
  category: string
  items: string[]
  details?: string
}

export interface ProjectDetail {
  slug: string
  title: string
  subtitle?: string
  category: string
  filterCategory: 'All' | 'Web Apps' | 'AI' | 'Fintech' | 'UI/UX'
  shortDescription: string
  overview: string
  accentColor: string

  // Hero Metadata
  role: string
  timeline?: string
  status?: string
  tags: string[]

  // Problem / Challenge
  problem?: {
    eyebrow?: string
    heading: string
    description: string
    points?: ProjectProblemPoint[]
  }

  // Solution
  solution?: {
    eyebrow?: string
    heading: string
    description: string
    principles?: ProjectSolutionPrinciple[]
  }

  // Key Features
  features?: ProjectFeature[]

  // Technical Implementation
  technicalImplementation?: {
    overview: string
    highlights?: ProjectTechSection[]
  }

  // Process / Approach
  process?: {
    eyebrow?: string
    heading?: string
    steps: ProjectProcessStep[]
  }

  // Results / Outcome
  results?: {
    eyebrow?: string
    heading: string
    description: string
    metrics?: ProjectResultMetric[]
  }

  // Links
  githubUrl?: string
  liveUrl?: string

  // Flags
  featured?: boolean
}
