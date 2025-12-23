'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { GRADIENTS } from '@/styles';

type CategoryKey =
  | 'all'
  | 'methodology'
  | 'innovation'
  | 'productivity'
  | 'wellbeing'
  | 'tips'
  | 'organization';

const CATEGORIES: CategoryKey[] = [
  'all',
  'methodology',
  'innovation',
  'productivity',
  'wellbeing',
  'tips',
  'organization',
];

interface BlogHeroSectionProps {
  activeCategory?: CategoryKey;
  onCategoryChange?: (category: CategoryKey) => void;
}

/**
 * Hero section for the Blog page with search and category filters.
 */
export function BlogHeroSection({
  activeCategory = 'all',
  onCategoryChange,
}: BlogHeroSectionProps) {
  const t = useTranslations('blogPage');
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>(activeCategory);

  const handleCategoryClick = (category: CategoryKey) => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <FadeIn delay={0} direction="down">
          <div
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5"
            style={{ backgroundImage: GRADIENTS.blueText }}
          >
            <span className="font-inter text-sm font-semibold text-white">
              {t('hero.badge')}
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.1} duration={0.6}>
          <h1 className="font-inter text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {t.rich('hero.title', {
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
          <p className="font-inter mx-auto mt-4 max-w-xl text-base font-medium text-neutral-900/70 md:text-lg">
            {t('hero.subtitle')}
          </p>
        </FadeIn>

        {/* Search Bar */}
        <FadeIn delay={0.3}>
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <svg
                className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                className="font-inter focus:border-brand focus:ring-brand/20 w-full rounded-full border border-gray-200 bg-white py-3 pr-4 pl-12 text-sm text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:outline-none"
              />
            </div>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`font-inter rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-brand text-white'
                    : 'bg-white text-neutral-600 hover:bg-gray-100'
                }`}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
