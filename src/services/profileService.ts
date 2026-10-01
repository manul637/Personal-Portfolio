import { supabase } from '../lib/supabase'

export interface SupabaseProfileRow {
  id: string
  name: string
  profession: string
  headline: string
  email: string | null
  location: string | null
  github_url: string | null
  linkedin_url: string | null
  x_url: string | null
  whatsapp_number: string | null
  profile_image_url: string | null
  created_at?: string
  updated_at?: string
}

export interface ProfileData {
  id: string
  name: string
  profession: string
  headline: string
  email: string | null
  location: string | null
  githubUrl: string | null
  linkedinUrl: string | null
  xUrl: string | null
  whatsappNumber: string | null
  profileImageUrl: string | null
  createdAt?: string
  updatedAt?: string
}

/**
 * Ensures an external URL starts with https:// if provided without a protocol.
 */
export function formatExternalUrl(url?: string | null): string | null {
  if (!url) return null
  const trimmed = url.trim()
  if (!trimmed) return null
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

/**
 * Maps a raw Supabase profile record to the camelCase ProfileData model.
 */
export function mapSupabaseProfile(row: SupabaseProfileRow): ProfileData {
  return {
    id: row.id,
    name: row.name,
    profession: row.profession,
    headline: row.headline,
    email: row.email,
    location: row.location,
    githubUrl: formatExternalUrl(row.github_url),
    linkedinUrl: formatExternalUrl(row.linkedin_url),
    xUrl: formatExternalUrl(row.x_url),
    whatsappNumber: row.whatsapp_number,
    profileImageUrl: row.profile_image_url,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

/**
 * Fetches the portfolio profile row from the public.profile table.
 * If no profileId is provided, returns the single default owner record.
 */
export async function getProfile(profileId?: string): Promise<ProfileData | null> {
  let query = supabase.from('profile').select('*')

  if (profileId) {
    query = query.eq('id', profileId)
  }

  const { data, error } = await query.limit(1).maybeSingle()

  if (error) {
    console.error('[profileService] Failed to fetch profile from Supabase:', error.message)
    throw error
  }

  if (!data) return null
  return mapSupabaseProfile(data as unknown as SupabaseProfileRow)
}

/**
 * Helper to construct an encoded WhatsApp wa.me link from a stored phone number.
 */
export function formatWhatsAppUrl(
  phoneNumber: string | null | undefined,
  defaultMessage?: string
): string {
  if (!phoneNumber) return ''
  const cleanNumber = phoneNumber.replace(/\D/g, '')
  if (!cleanNumber) return ''
  const messageParam = defaultMessage ? `?text=${encodeURIComponent(defaultMessage)}` : ''
  return `https://wa.me/${cleanNumber}${messageParam}`
}
