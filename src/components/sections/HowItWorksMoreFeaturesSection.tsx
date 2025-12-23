'use client';

import { useTranslations } from 'next-intl';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { GRADIENTS } from '@/styles';

type FeatureKey =
  | 'timeSaving'
  | 'personalization'
  | 'sharing'
  | 'pdfExport'
  | 'security'
  | 'updates'
  | 'tips'
  | 'badges'
  | 'collaboration';

const FEATURES: FeatureKey[] = [
  'timeSaving',
  'personalization',
  'sharing',
  'pdfExport',
  'security',
  'updates',
  'tips',
  'badges',
  'collaboration',
];

/**
 * "Et bien plus encore" section with 9 feature cards in a grid.
 */
export function HowItWorksMoreFeaturesSection() {
  const t = useTranslations('howItWorksPage.moreFeatures');

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-inter text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
              {t('title')}
            </h2>
            <p className="font-inter mx-auto mt-4 max-w-2xl text-base font-medium text-neutral-900/70 md:text-lg">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {FEATURES.map((featureKey) => (
            <StaggerItem key={featureKey}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all hover:shadow-md">
                {/* Icon Placeholder */}
                <div
                  className="flex size-12 items-center justify-center rounded-xl"
                  style={{ backgroundImage: GRADIENTS.blueGlow }}
                >
                  <div
                    className="size-6 rounded-md"
                    style={{ backgroundImage: GRADIENTS.blueText }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-inter text-lg font-semibold text-neutral-900">
                  {t(`items.${featureKey}.title`)}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm leading-relaxed text-neutral-600">
                  {t(`items.${featureKey}.description`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
