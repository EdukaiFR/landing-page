'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { ArrowCircleRightIcon, HeartIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import { GRADIENTS } from '@/styles';

/**
 * Hero section with badge, headline, description, and CTA buttons.
 * Mobile-first responsive design.
 */
export function HeroSection() {
  const t = useTranslations('home.hero');

  return (
    <section className="lg:-pb-20 lg:-py-20 flex flex-col items-center gap-3 px-4 py-12 text-center md:gap-9 md:py-16">
      {/* Badge */}
      <FadeIn delay={0} direction="down">
        <div
          className="flex h-12 items-center justify-center gap-2.5 rounded-full px-5 py-2"
          style={{ backgroundImage: GRADIENTS.blueGlow }}
        >
          <HeartIcon className="h-5 w-5 shrink-0 text-red-500" />
          <span
            className="font-inter bg-clip-text text-sm font-semibold md:text-base"
            style={{
              WebkitTextFillColor: 'transparent',
              backgroundImage: GRADIENTS.blueText,
            }}
          >
            {t('badge')}
          </span>
        </div>
      </FadeIn>

      {/* Headline */}
      <FadeIn delay={0.1} duration={0.6}>
        <h1 className="font-inter max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl xl:text-[77px] xl:leading-[1.1]">
          {t.rich('title', {
            highlight: (chunks) => <span className="text-brand">{chunks}</span>,
          })}
        </h1>
      </FadeIn>

      {/* Description */}
      <FadeIn delay={0.2} duration={0.6}>
        <div className="font-inter text-neutral-light max-w-3xl text-base leading-relaxed tracking-tight md:text-lg lg:text-xl">
          <p>{t('description.line1')}</p>
          <p>
            {t.rich('description.line2', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </p>
        </div>
      </FadeIn>

      {/* CTA Buttons */}
      <FadeIn delay={0.35} duration={0.5}>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/#beta" variant="primary" size="lg">
            {t('cta.primary')}
          </Button>
          <Button href="/about" variant="outline" size="lg">
            {t('cta.secondary')}
            <ArrowCircleRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
