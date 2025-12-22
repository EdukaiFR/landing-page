'use client';

import { useTranslations } from 'next-intl';

import { NavLink } from '@/components/ui';
import { NAV_ITEMS } from '@/constants';

interface MobileMenuNavProps {
  onClose: () => void;
}

/**
 * Navigation links for mobile menu.
 */
export function MobileMenuNav({ onClose }: MobileMenuNavProps) {
  const t = useTranslations('header');

  return (
    <nav className="flex-1 px-6 py-6">
      <ul className="space-y-1">
        {NAV_ITEMS.map(({ key, href }) => (
          <li key={key}>
            <NavLink
              href={href}
              onClick={onClose}
              className="block rounded-lg px-3 py-3 text-base hover:bg-gray-50"
            >
              {t(`nav.${key}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
