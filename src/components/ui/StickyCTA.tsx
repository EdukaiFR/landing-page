'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/Button';

/**
 * Sticky CTA button that appears when scrolling past the hero section.
 * Full-width bar on mobile, floating button on desktop.
 */
export function StickyCTA() {
  const t = useTranslations('home.stickyCta');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px (past hero section)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile: Full-width bar at bottom */}
      <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur-sm md:hidden">
        <Button href="/#beta" variant="primary" size="lg" className="w-full">
          {t('button')}
        </Button>
      </div>

      {/* Desktop: Floating button bottom-right */}
      <div className="fixed right-6 bottom-6 z-50 hidden md:block">
        <Button
          href="/#beta"
          variant="primary"
          size="lg"
          className="shadow-xl transition-transform hover:scale-105"
        >
          {t('button')}
        </Button>
      </div>
    </>
  );
}
