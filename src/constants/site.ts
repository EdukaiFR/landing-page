/**
 * Site-wide configuration constants
 */

export const SITE_CONFIG = {
  name: 'Edukai',
  description: "Plateforme d'apprentissage innovante",
  url: 'https://edukai.fr',
  locale: 'fr-FR',
} as const;

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/edukai',
  linkedin: 'https://linkedin.com/company/edukai',
  github: 'https://github.com/edukai',
} as const;

/**
 * Navigation routes
 */
export const ROUTES = {
  home: '/',
  features: '/#features',
  pricing: '/#pricing',
  contact: '/contact',
  login: '/login',
  signup: '/signup',
} as const;

/**
 * Breakpoints matching Tailwind defaults
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
