/**
 * Global Site Configuration
 * Centralized settings for external contacts, social links, and metadata.
 */

export const SITE_CONFIG = {
  name: 'MANUL.',
  tagline: 'Creative Developer · AI · Digital Products',

  // WhatsApp Configuration
  // International format: country code followed by phone number with no +, spaces, hyphens, or brackets
  // (e.g., '919876543210' for India). Update this number whenever needed.
  whatsApp: {
    phoneNumber: '919302663171',
    defaultMessage: 'Hi Manul! I found your portfolio and would like to discuss a project.',
  },

  // Social Links
  social: {
    github: 'https://github.com/manul637',
    linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME', // [TODO: Replace with actual LinkedIn username]
    x: 'https://x.com/YOUR_X_HANDLE', // [TODO: Replace with actual X handle]
    email: 'hello@manul.dev', // [TODO: Replace with actual email if different]
  },
}

/**
 * Returns the fully encoded WhatsApp wa.me URL
 * @param phoneNumber Optional override for the recipient phone number (digits only)
 * @param message Optional override for the pre-filled message
 * @returns Formatted wa.me URL string
 */
export function getWhatsAppUrl(
  phoneNumber = SITE_CONFIG.whatsApp.phoneNumber,
  message = SITE_CONFIG.whatsApp.defaultMessage
): string {
  // Strip any non-digit characters (no +, spaces, hyphens, or brackets)
  const cleanNumber = phoneNumber.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`
}
