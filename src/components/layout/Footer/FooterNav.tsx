import { useTranslations } from 'next-intl';

import { NavLink } from '@/components/ui';
import { FOOTER_NAV_ITEMS } from '@/constants';

/**
 * Footer navigation links section.
 */
export function FooterNav() {
  const t = useTranslations('footer');
  const tNav = useTranslations('header.nav');

  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-inter text-base font-semibold tracking-[-0.48px] text-neutral-900">
        {t('sections.pages')}
      </span>
      <nav className="flex flex-col gap-2">
        {FOOTER_NAV_ITEMS.map(({ key, href }) => (
          <NavLink
            key={key}
            href={href}
            className="text-neutral-muted text-sm hover:text-neutral-900"
          >
            {key === 'home' ? t('nav.home') : tNav(key)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
