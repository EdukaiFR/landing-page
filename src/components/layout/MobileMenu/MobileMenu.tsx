'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { useScrollLock } from '@/hooks';

import { MobileMenuActions } from './MobileMenuActions';
import { MobileMenuBackdrop } from './MobileMenuBackdrop';
import { MobileMenuCloseButton } from './MobileMenuCloseButton';
import { MobileMenuNav } from './MobileMenuNav';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile navigation menu with smooth slide animation.
 * Composed of smaller, focused sub-components for maintainability.
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const tA11y = useTranslations('accessibility');
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
      <MobileMenuBackdrop visible={visible} onClose={onClose} />

      {/* Panel */}
      <div
        className={`absolute inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <MobileMenuCloseButton
            onClose={onClose}
            ariaLabel={tA11y('closeMenu')}
          />
          <MobileMenuNav onClose={onClose} />
          <MobileMenuActions onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
