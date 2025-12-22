'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { Button, NavLink } from '@/components/ui';
import { NAV_ITEMS } from '@/constants';
import { useScrollLock } from '@/hooks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile navigation menu with smooth slide animation.
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('header');
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useScrollLock(isOpen);

  /* eslint-disable react-hooks/set-state-in-effect -- Required for mount/unmount animations */
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    }

    setVisible(false);
    const timer = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(timer);
  }, [isOpen]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          visible ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`absolute inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Close button */}
          <div className="flex items-center justify-end px-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              <span className="sr-only">Fermer le menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
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

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-6">
            <Button
              variant="ghost"
              size="md"
              aria-label={t('language.label')}
              className="mb-4 w-full justify-center font-semibold"
            >
              FR
            </Button>

            <Button
              href="#beta"
              variant="primary"
              size="lg"
              onClick={onClose}
              className="w-full justify-center"
            >
              {t('cta')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
