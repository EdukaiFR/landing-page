import { FooterBrand } from './FooterBrand';
import { FooterLegal } from './FooterLegal';
import { FooterNav } from './FooterNav';
import { FooterSocial } from './FooterSocial';

/**
 * Footer component with brand info, navigation, social links, and legal info.
 * Composed of smaller, focused sub-components for maintainability.
 */
export function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 border-b border-neutral-900/25 py-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">
          <FooterBrand />
          <FooterNav />
          <FooterSocial />
        </div>

        <FooterLegal />
      </div>
    </footer>
  );
}
