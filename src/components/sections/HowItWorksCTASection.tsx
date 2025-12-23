'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { ArrowRightIcon } from '@/components/icons';
import { Button } from '@/components/ui';

/**
 * CTA section for the How It Works page.
 */
export function HowItWorksCTASection() {
  const t = useTranslations('howItWorksPage.cta');

  return (
    <section className="px-4 py-16 md:py-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="font-inter text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
          {t('title')}
        </h2>

        {/* Subtitle */}
        <p className="font-inter mx-auto mt-4 max-w-xl text-base font-medium text-neutral-900/70 md:text-lg">
          {t('subtitle')}
        </p>

        {/* CTA Button */}
        <Button
          href="/#beta"
          variant="primary"
          size="lg"
          className="mx-auto mt-8 gap-2"
        >
          {t('button')}
          <ArrowRightIcon className="h-5 w-5" />
        </Button>

        {/* Note */}
        <p className="font-inter mt-6 text-sm text-neutral-500">{t('note')}</p>
      </FadeIn>
    </section>
  );
}
