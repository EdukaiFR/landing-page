import { useTranslations } from 'next-intl';

import { Button, Logo, NavLink } from '@/components/ui';

const NAV_ITEMS = [
  'features',
  'howItWorks',
  'pricing',
  'about',
  'blog',
] as const;

/**
 * Main header/navigation component for the landing page.
 * Displays the logo, navigation links, language selector, and CTA button.
 */
export function Header() {
  const t = useTranslations('header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white shadow-[0px_4px_4px_0px_rgba(54,120,255,0.05)]">
      <div className="flex w-full items-center justify-between px-6 py-2.5 md:px-10 lg:px-16 xl:px-24">
        <Logo />

        <nav className="hidden items-center gap-7.5 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item} href={`#${item}`}>
              {t(`nav.${item}`)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            aria-label={t('language.label')}
            className="font-semibold"
          >
            FR
          </Button>

          <Button href="#beta" variant="primary" size="md">
            {t('cta')}
          </Button>
        </div>
      </div>
    </header>
  );
}
