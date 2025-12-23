'use client';

import { useTranslations } from 'next-intl';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

type StatKey = 'courses' | 'students' | 'successRate' | 'rating';

const STATS: StatKey[] = ['courses', 'students', 'successRate', 'rating'];

/**
 * Stats section showing key metrics.
 */
export function HowItWorksStatsSection() {
  const t = useTranslations('howItWorksPage.stats');

  return (
    <section className="px-4 py-16 md:py-24">
      <FadeIn className="mx-auto max-w-5xl">
        <div
          className="rounded-3xl px-8 py-12 md:px-12 md:py-16"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 100%)',
          }}
        >
          <StaggerContainer
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            staggerDelay={0.1}
          >
            {STATS.map((statKey) => (
              <StaggerItem key={statKey} className="text-center">
                <p className="font-inter text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  {t(`${statKey}.value`)}
                </p>
                <p className="font-inter mt-2 text-sm font-medium text-white/80 md:text-base">
                  {t(`${statKey}.label`)}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>
    </section>
  );
}
