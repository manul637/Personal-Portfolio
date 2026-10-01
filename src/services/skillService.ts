import { supabase } from '../lib/supabase'
import type { SkillItem } from '../lib/portfolioData'

export interface SupabaseSkillRow {
  id: string
  name: string
  category: 'Frontend' | 'Backend' | 'AI & Data' | 'Tools'
  description: string | null
  icon_key: string
  color: string
  sort_order: number
  created_at?: string
}

/**
 * Maps a raw Supabase skill row to the existing SkillItem structure.
 */
export function mapSupabaseSkillToSkillItem(row: SupabaseSkillRow): SkillItem {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    description: row.description || '',
    iconKey: row.icon_key,
    color: row.color,
  }
}

/**
 * Fetches all skills from Supabase ordered by sort_order.
 */
export async function getAllSkills(): Promise<SkillItem[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('[skillService] Failed to fetch skills from Supabase:', error.message)
    throw error
  }

  return (data || []).map((row) =>
    mapSupabaseSkillToSkillItem(row as unknown as SupabaseSkillRow)
  )
}

/**
 * Fetches skills filtered by category from Supabase ordered by sort_order.
 */
export async function getSkillsByCategory(
  category: 'Frontend' | 'Backend' | 'AI & Data' | 'Tools'
): Promise<SkillItem[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .eq('category', category)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error(`[skillService] Failed to fetch skills for category "${category}":`, error.message)
    throw error
  }

  return (data || []).map((row) =>
    mapSupabaseSkillToSkillItem(row as unknown as SupabaseSkillRow)
  )
}
