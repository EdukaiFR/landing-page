/**
 * Layout Components barrel export
 * Contains layout-level components (Header, Footer, etc.)
 */

export { Footer } from './Footer';
export { Header } from './Header';
export { MobileMenu } from './MobileMenu';

// Re-export sub-components for granular imports if needed
export { FooterBrand, FooterLegal, FooterNav, FooterSocial } from './Footer';

export {
  MobileMenuActions,
  MobileMenuBackdrop,
  MobileMenuCloseButton,
  MobileMenuNav,
} from './MobileMenu';
