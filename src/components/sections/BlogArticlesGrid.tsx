'use client';

import { useTranslations } from 'next-intl';

import {
  FadeIn,
  HoverLift,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import { ArrowRightIcon } from '@/components/icons';

interface CategoryStyle {
  bg: string;
  text: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  Innovation: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  Productivité: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
  },
  Méthodologie: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  'Bien-être': {
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  Conseils: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
  },
  Organisation: {
    bg: 'bg-pink-50',
    text: 'text-pink-600',
  },
};

const ARTICLES_COUNT = 6;

/**
 * Grid of article cards for the Blog page.
 */
export function BlogArticlesGrid() {
  const t = useTranslations('blogPage.articles');

  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <FadeIn>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-inter text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {t('title')}
            </h2>
            <button
              type="button"
              className="font-inter flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-700"
            >
              {t('viewAll')}
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>

        {/* Articles Grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {Array.from({ length: ARTICLES_COUNT }).map((_, index) => {
            const category = t(`items.${index}.category`);
            const style = CATEGORY_STYLES[category] || {
              bg: 'bg-gray-50',
              text: 'text-gray-600',
            };

            return (
              <StaggerItem key={index}>
                <HoverLift>
                  <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50/50 p-5 transition-shadow hover:shadow-md">
                    {/* Category Tag */}
                    <div
                      className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 ${style.bg}`}
                    >
                      <span
                        className={`font-inter text-xs font-semibold ${style.text}`}
                      >
                        {category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-inter text-lg leading-snug font-semibold text-neutral-900">
                      {t(`items.${index}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="font-inter mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                      {t(`items.${index}.description`)}
                    </p>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-neutral-500">
                        <div className="flex items-center gap-1.5">
                          {/* Avatar placeholder */}
                          <div className="flex size-5 items-center justify-center rounded-full bg-gray-200">
                            <span className="text-[10px] font-medium text-gray-500">
                              {t(`items.${index}.author`).charAt(0)}
                            </span>
                          </div>
                          <span className="font-inter font-medium">
                            {t(`items.${index}.author`)}
                          </span>
                        </div>
                        <span className="text-neutral-300">•</span>
                        <span className="font-inter">
                          {t(`items.${index}.readTime`)}
                        </span>
                      </div>

                      {/* Arrow */}
                      <ArrowRightIcon className="group-hover:text-brand h-4 w-4 text-neutral-400 transition-colors" />
                    </div>
                  </article>
                </HoverLift>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
