'use client';

import { useTranslations } from 'next-intl';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

interface PainPointItem {
  key: string;
}

const PAIN_POINTS: PainPointItem[] = [
  { key: 'manualSupports' },
  { key: 'wastedHours' },
  { key: 'noTime' },
  { key: 'noMethodology' },
];

/**
 * Pain points section showing user frustrations that Edukai solves.
 * Displays a headline and 4 cards with common problems.
 */
export function PainPointsSection() {
  const t = useTranslations('home.painPoints');

  return (
    <section className="flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-16 lg:py-20">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
          <h2 className="font-inter max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl xl:text-[56px] xl:leading-[1.5]">
            {t.rich('title', {
              highlight: (chunks) => (
                <span className="text-brand">{chunks}</span>
              ),
            })}
          </h2>
          <p className="font-inter text-neutral-light max-w-2xl text-base tracking-tight md:text-lg lg:text-xl">
            {t('subtitle')}
          </p>
        </div>
      </FadeIn>

      {/* Pain Points Grid */}
      <StaggerContainer
        className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"
        staggerDelay={0.1}
      >
        {PAIN_POINTS.map(({ key }) => (
          <StaggerItem key={key}>
            <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-red-200 bg-white px-6 py-6 text-center transition-transform hover:scale-[1.02]">
              <span className="text-3xl" role="img" aria-hidden="true">
                ❌
              </span>
              <p className="font-inter text-base leading-relaxed font-medium tracking-tight text-neutral-900">
                {t(`items.${key}`)}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
