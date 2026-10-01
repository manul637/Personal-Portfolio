-- ==============================================================================
-- Supabase Schema & Seed: public.profile table
-- Single-row editable personal/site information
-- ==============================================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.profile (
  id text PRIMARY KEY DEFAULT 'main',
  name text NOT NULL,
  profession text NOT NULL,
  headline text NOT NULL,
  email text,
  location text,
  github_url text,
  linkedin_url text,
  x_url text,
  whatsapp_number text,
  profile_image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. Configure Row Level Security (RLS)
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;

-- Allow anon and authenticated users to SELECT the profile
DROP POLICY IF EXISTS "Allow public read access on profile" ON public.profile;
CREATE POLICY "Allow public read access on profile"
  ON public.profile
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- No INSERT, UPDATE, or DELETE policies granted to anon (denied by default)

-- 3. Seed initial single profile row from existing project data
INSERT INTO public.profile (
  id,
  name,
  profession,
  headline,
  email,
  location,
  github_url,
  linkedin_url,
  x_url,
  whatsapp_number,
  profile_image_url
) VALUES (
  'main',
  'Manul',
  'Creative Web & Frontend Developer',
  'Building Digital Experiences That Actually Matter.',
  'hello@manul.dev',
  'Based in India',
  'https://github.com/manul637',
  NULL, -- Placeholder in site.ts (YOUR_LINKEDIN_USERNAME)
  NULL, -- Placeholder in site.ts (YOUR_X_HANDLE)
  '919302663171',
  NULL  -- Local webp asset; Supabase Storage not yet created
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  profession = EXCLUDED.profession,
  headline = EXCLUDED.headline,
  email = EXCLUDED.email,
  location = EXCLUDED.location,
  github_url = EXCLUDED.github_url,
  linkedin_url = EXCLUDED.linkedin_url,
  x_url = EXCLUDED.x_url,
  whatsapp_number = EXCLUDED.whatsapp_number,
  profile_image_url = EXCLUDED.profile_image_url,
  updated_at = now();
