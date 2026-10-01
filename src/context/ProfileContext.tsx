import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { getProfile, type ProfileData } from '../services/profileService'

interface ProfileContextType {
  profile: ProfileData | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

const ProfileContext = createContext<ProfileContextType>({
  profile: null,
  loading: true,
  error: null,
  refetch: async () => {},
})

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const data = await getProfile('main')
      setProfile(data)
      setError(null)
    } catch (err) {
      console.error('[ProfileContext] Failed to load profile:', err)
      setError(err instanceof Error ? err.message : 'Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let isMounted = true

    getProfile('main')
      .then((data) => {
        if (isMounted) {
          setProfile(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error('[ProfileContext] Failed to load profile:', err)
          setError(err instanceof Error ? err.message : 'Failed to load profile')
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
  }, [])

  return (
    <ProfileContext.Provider value={{ profile, loading, error, refetch: fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProfile(): ProfileContextType {
  return useContext(ProfileContext)
}
