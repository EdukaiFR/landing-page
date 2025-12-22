'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { BurgerButton, Button, Logo, NavLink } from '@/components/ui';
import { NAV_ITEMS } from '@/constants';

import { MobileMenu } from './MobileMenu';

/**
 * Main header/navigation component for the landing page.
 * Displays the logo, navigation links, language selector, and CTA button.
 * Includes responsive mobile menu with animations.
 */
export function Header() {
  const t = useTranslations('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white shadow-[0px_4px_4px_0px_rgba(54,120,255,0.05)]">
        <div className="flex w-full items-center justify-between px-6 py-2.5 md:px-10 lg:px-16 xl:px-24">
          <Logo />

          <nav className="hidden items-center gap-7.5 md:flex">
            {NAV_ITEMS.map(({ key, href }) => (
              <NavLink key={key} href={href}>
                {t(`nav.${key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
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

          <div className="flex md:hidden">
            <BurgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
