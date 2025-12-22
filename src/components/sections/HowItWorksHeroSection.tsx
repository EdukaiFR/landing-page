import { useTranslations } from 'next-intl';

import { GRADIENTS } from '@/styles';

/**
 * Hero section for the How It Works page.
 */
export function HowItWorksHeroSection() {
  const t = useTranslations('howItWorksPage.hero');

  return (
    <section className="bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
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

        {/* Title */}
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

        {/* Subtitle */}
        <p className="font-inter mx-auto mt-4 max-w-2xl text-lg font-medium text-neutral-900/80 md:text-xl">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
