'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { ArrowRightIcon, HeartIcon } from '@/components/icons';
import { Button } from '@/components/ui';

/**
 * CTA section for the About page.
 */
export function AboutCTASection() {
  const t = useTranslations('aboutPage.cta');

  return (
    <section className="px-4 py-16 md:py-24">
      <FadeIn className="mx-auto max-w-4xl">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-12 md:px-12 md:py-16"
          style={{
            backgroundImage:
              'linear-gradient(158deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 100%)',
          }}
        >
          {/* Decorative Circles */}
          <div className="absolute -top-16 -left-16 size-64 rounded-full bg-white/10" />
          <div className="absolute -right-24 -bottom-24 size-96 rounded-full bg-white/10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="font-inter text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {t('title')}
            </h2>

            {/* Subtitle */}
            <p className="font-inter mt-4 max-w-2xl text-lg font-medium text-white/90 md:text-xl">
              {t('subtitle')}
            </p>

            {/* CTA Button */}
            <Button
              href="/#beta"
              variant="outline"
              size="lg"
              className="text-brand mt-8 gap-2 border-0 bg-white hover:bg-white/90"
            >
              {t('button')}
              <ArrowRightIcon className="h-5 w-5" />
            </Button>

            {/* Made in Alsace */}
            <div className="mt-8 flex items-center gap-2 text-white/80">
              <HeartIcon className="h-4 w-4 text-white/80" />
              <span className="font-inter text-sm font-medium">
                {t('madeIn')}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
