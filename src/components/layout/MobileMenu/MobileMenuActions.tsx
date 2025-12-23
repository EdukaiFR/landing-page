'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

interface MobileMenuActionsProps {
  onClose: () => void;
}

/**
 * Action buttons for mobile menu (language selector and CTA).
 */
export function MobileMenuActions({ onClose }: MobileMenuActionsProps) {
  const t = useTranslations('header');

  return (
    <div className="border-t border-gray-200 px-6 py-6">
      <Button
        variant="ghost"
        size="md"
        aria-label={t('language.label')}
        className="mb-4 w-full justify-center font-semibold"
      >
        {t('language.french')}
      </Button>

      <Button
        href="https://beta.edukai.fr"
        variant="primary"
        size="lg"
        onClick={onClose}
        className="w-full justify-center"
      >
        {t('login')}
      </Button>
    </div>
  );
}
