'use client';

import { useTranslations } from 'next-intl';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CheckIcon, XIcon } from '@/components/icons';

interface ComparisonItem {
  key: string;
}

const COMPARISON_ITEMS: ComparisonItem[] = [
  { key: 'createSupports' },
  { key: 'findContent' },
  { key: 'trackProgress' },
  { key: 'stayMotivated' },
];

/**
 * Comparison section showing traditional methods vs Edukai.
 * Displays a side-by-side comparison of pain points and solutions.
 */
export function ComparisonSection() {
  const t = useTranslations('home.comparison');

  return (
    <section className="flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-16 lg:py-20">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
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

      {/* Comparison Grid */}
      <StaggerContainer
        className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
        staggerDelay={0.2}
      >
        {/* Traditional Method */}
        <StaggerItem direction="left">
          <div className="flex h-full flex-col gap-4 rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <XIcon className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-inter text-lg font-semibold text-neutral-900 md:text-xl">
                {t('traditional.title')}
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {COMPARISON_ITEMS.map(({ key }) => (
                <li key={key} className="flex items-start gap-3">
                  <XIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span className="font-inter text-sm text-neutral-700 md:text-base">
                    {t(`traditional.items.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>

        {/* With Edukai */}
        <StaggerItem direction="right">
          <div className="flex h-full flex-col gap-4 rounded-2xl border-2 border-green-200 bg-green-50/50 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckIcon className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="font-inter text-lg font-semibold text-neutral-900 md:text-xl">
                {t('edukai.title')}
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {COMPARISON_ITEMS.map(({ key }) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="font-inter text-sm text-neutral-700 md:text-base">
                    {t(`edukai.items.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
