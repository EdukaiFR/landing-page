'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

/**
 * Revolution section comparing traditional study methods vs Edukai.
 * Displays headline and two comparison cards.
 */
export function RevolutionSection() {
  const t = useTranslations('featuresPage.revolution');

  return (
    <section className="flex flex-col items-center gap-10 px-4 py-12 md:gap-14 md:py-16 lg:py-20">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
          <h2 className="font-inter max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl xl:text-[77px] xl:leading-[1.2]">
            {t.rich('title', {
              highlight: (chunks) => (
                <span className="text-brand block">{chunks}</span>
              ),
            })}
          </h2>
          <div className="font-inter text-neutral-light max-w-3xl text-base tracking-tight md:text-lg lg:text-xl">
            <p>{t('subtitle.line1')}</p>
            <p>{t('subtitle.line2')}</p>
          </div>
        </div>
      </FadeIn>

      {/* Comparison Cards */}
      <StaggerContainer
        className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
        staggerDelay={0.2}
      >
        <StaggerItem direction="left">
          <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
            <Image
              src="/images/features-page/comparison-traditional.png"
              alt={t('traditional.alt')}
              width={563}
              height={433}
              className="h-auto w-full object-cover"
            />
          </div>
        </StaggerItem>
        <StaggerItem direction="right">
          <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
            <Image
              src="/images/features-page/comparison-edukai.png"
              alt={t('edukai.alt')}
              width={562}
              height={433}
              className="h-auto w-full object-cover"
            />
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
