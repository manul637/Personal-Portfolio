import { supabase } from '../lib/supabase'

export interface ContactSubmission {
  name: string
  email: string
  project_type: string
  message: string
}

export async function submitContactForm(
  data: ContactSubmission
) {
  // Ensure client cannot manually set id, created_at, or status
  const payload = {
    name: data.name,
    email: data.email,
    project_type: data.project_type,
    message: data.message,
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert(payload)

  if (error) {
    throw error
  }
}
