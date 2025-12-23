'use client';

import { useTranslations } from 'next-intl';

import {
  FadeIn,
  HoverLift,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import { QuoteIcon } from '@/components/icons';

interface Testimonial {
  key: string;
}

const TESTIMONIALS: Testimonial[] = [
  { key: 'julia' },
  { key: 'gwen' },
  { key: 'nathanael' },
  { key: 'julien' },
];

/**
 * Testimonials section displaying feedback from beta users.
 * Shows 4 real testimonials in a responsive grid.
 */
export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');

  return (
    <section className="flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-16 lg:py-20">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
          <span className="font-inter bg-brand/10 text-brand inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
            {t('badge')}
          </span>
          <h2 className="font-inter max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {t.rich('title', {
              highlight: (chunks) => (
                <span className="text-brand">{chunks}</span>
              ),
            })}
          </h2>
          <p className="font-inter text-neutral-light max-w-2xl text-base tracking-tight md:text-lg">
            {t('subtitle')}
          </p>
        </div>
      </FadeIn>

      {/* Testimonials Grid */}
      <StaggerContainer
        className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.1}
      >
        {TESTIMONIALS.map(({ key }) => (
          <StaggerItem key={key}>
            <HoverLift>
              <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                {/* Quote Icon */}
                <QuoteIcon className="text-brand/20 h-8 w-8" />

                {/* Quote */}
                <p className="font-inter flex-1 text-sm leading-relaxed text-neutral-700 md:text-base">
                  &ldquo;{t(`items.${key}.quote`)}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="from-brand flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br to-blue-600 text-sm font-semibold text-white">
                    {t(`items.${key}.name`).charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-inter text-sm font-semibold text-neutral-900">
                      {t(`items.${key}.name`)}
                    </span>
                    <span className="font-inter text-xs text-neutral-500">
                      {t(`items.${key}.role`)}
                    </span>
                  </div>
                </div>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
