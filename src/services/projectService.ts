import { supabase } from '../lib/supabase'
import type { ProjectDetail } from '../types/project'

export interface SupabaseProjectRow {
  id?: string | number
  created_at?: string
  updated_at?: string
  slug: string
  title: string
  category: string
  short_description: string
  description: string
  technologies: string[]
  github_url: string | null
  demo_url: string | null
  featured: boolean
  sort_order: number
  content: {
    subtitle?: string | null
    filterCategory?: 'All' | 'Web Apps' | 'AI' | 'Fintech' | 'UI/UX'
    accentColor?: string
    role?: string
    timeline?: string | null
    status?: string | null
    problem?: ProjectDetail['problem']
    solution?: ProjectDetail['solution']
    features?: ProjectDetail['features']
    technicalImplementation?: ProjectDetail['technicalImplementation']
    process?: ProjectDetail['process']
    results?: ProjectDetail['results']
  } | null
}

/**
 * Maps a raw Supabase project row to the TypeScript ProjectDetail structure used across the frontend.
 */
export function mapSupabaseProjectToProjectDetail(row: SupabaseProjectRow): ProjectDetail {
  const content = row.content || {}

  // Determine filterCategory from content, or derive sensibly from category
  let filterCategory: 'All' | 'Web Apps' | 'AI' | 'Fintech' | 'UI/UX'
  if (content.filterCategory) {
    filterCategory = content.filterCategory
  } else {
    const cat = (row.category || '').toUpperCase()
    if (cat.includes('AI')) filterCategory = 'AI'
    else if (cat.includes('FINTECH')) filterCategory = 'Fintech'
    else if (cat.includes('UI/UX')) filterCategory = 'UI/UX'
    else filterCategory = 'Web Apps'
  }

  return {
    slug: row.slug,
    title: row.title,
    subtitle: content.subtitle || undefined,
    category: row.category,
    filterCategory,
    shortDescription: row.short_description,
    overview: row.description,
    accentColor: content.accentColor || '#3B82F6',

    // Hero Metadata
    role: content.role || 'Developer & Designer',
    timeline: content.timeline || undefined,
    status: content.status || undefined,
    tags: Array.isArray(row.technologies) ? row.technologies : [],

    // Nested Case Study Sections
    problem: content.problem || undefined,
    solution: content.solution || undefined,
    features: content.features || undefined,
    technicalImplementation: content.technicalImplementation || undefined,
    process: content.process || undefined,
    results: content.results || undefined,

    // Links & Flags
    githubUrl: row.github_url || undefined,
    liveUrl: row.demo_url || undefined,
    featured: Boolean(row.featured),
  }
}

/**
 * Computes adjacent (previous and next) projects based on sort order.
 */
export function computeAdjacentProjects(
  projects: ProjectDetail[],
  currentSlug: string
): { prev?: ProjectDetail; next?: ProjectDetail } {
  const index = projects.findIndex(
    (p) => p.slug.toLowerCase() === currentSlug.toLowerCase()
  )
  if (index === -1 || projects.length === 0) return {}

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1]
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0]

  return { prev, next }
}

/**
 * Fetches all projects from Supabase ordered by sort_order.
 */
export async function getAllProjects(): Promise<ProjectDetail[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('[projectService] Failed to fetch projects from Supabase:', error.message)
    throw error
  }

  return (data || []).map((row) =>
    mapSupabaseProjectToProjectDetail(row as unknown as SupabaseProjectRow)
  )
}

/**
 * Fetches featured projects from Supabase.
 */
export async function getFeaturedProjects(): Promise<ProjectDetail[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('[projectService] Failed to fetch featured projects from Supabase:', error.message)
    throw error
  }

  return (data || []).map((row) =>
    mapSupabaseProjectToProjectDetail(row as unknown as SupabaseProjectRow)
  )
}

/**
 * Fetches a single project by its unique slug.
 */
export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  if (!slug) return null

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug.trim().toLowerCase())
    .maybeSingle()

  if (error) {
    console.error(`[projectService] Failed to fetch project "${slug}" from Supabase:`, error.message)
    throw error
  }

  if (!data) return null
  return mapSupabaseProjectToProjectDetail(data as unknown as SupabaseProjectRow)
}
