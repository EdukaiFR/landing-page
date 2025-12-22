/**
 * Navigation constants
 * Centralized navigation items and social links for consistency across components
 */

/**
 * Main navigation items used in Header and Footer
 */
export const NAV_ITEMS = [
  { key: 'features', href: '#features' },
  { key: 'howItWorks', href: '#howItWorks' },
  { key: 'pricing', href: '#pricing' },
  { key: 'about', href: '#about' },
  { key: 'blog', href: '#blog' },
] as const;

/**
 * Footer-specific navigation (includes home)
 */
export const FOOTER_NAV_ITEMS = [
  { key: 'home', href: '/' },
  ...NAV_ITEMS,
] as const;

/**
 * Social media link identifiers
 * Icons are mapped in components to avoid importing React components in constants
 */
export type SocialPlatform = 'instagram' | 'tiktok' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'instagram',
    href: 'https://instagram.com/edukai',
    label: 'Instagram',
  },
  {
    platform: 'tiktok',
    href: 'https://tiktok.com/@edukai',
    label: 'TikTok',
  },
  {
    platform: 'linkedin',
    href: 'https://linkedin.com/company/edukai',
    label: 'LinkedIn',
  },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
export type FooterNavItem = (typeof FOOTER_NAV_ITEMS)[number];
