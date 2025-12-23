'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { GRADIENTS } from '@/styles';

/**
 * Hero section for the How It Works page.
 */
export function HowItWorksHeroSection() {
  const t = useTranslations('howItWorksPage.hero');

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <FadeIn delay={0} direction="down">
          <div
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5"
            style={{ backgroundImage: GRADIENTS.blueGlow }}
          >
            <span
              className="font-inter bg-clip-text text-sm font-semibold"
              style={{
                WebkitTextFillColor: 'transparent',
                backgroundImage: GRADIENTS.blueText,
              }}
            >
              {t('badge')}
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.1} duration={0.6}>
          <h1 className="font-inter text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {t.rich('title', {
              highlight: (chunks) => (
                <span
                  className="bg-clip-text"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: GRADIENTS.blueText,
                  }}
                >
                  {chunks}
                </span>
              ),
            })}
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} duration={0.6}>
          <p className="font-inter mx-auto mt-4 max-w-2xl text-lg font-medium text-neutral-900/80 md:text-xl">
            {t('subtitle')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
