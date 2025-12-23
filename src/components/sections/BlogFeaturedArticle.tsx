'use client';

import { useTranslations } from 'next-intl';

import { FadeIn, HoverLift } from '@/components/animations';
import { ArrowRightIcon } from '@/components/icons';
import { GRADIENTS } from '@/styles';

/**
 * Featured article card for the Blog page.
 */
export function BlogFeaturedArticle() {
  const t = useTranslations('blogPage.featured');

  return (
    <section className="px-4 pb-12 md:pb-16">
      <FadeIn className="mx-auto max-w-5xl">
        <HoverLift>
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Placeholder */}
              <div
                className="flex aspect-video items-center justify-center lg:aspect-auto lg:min-h-[400px]"
                style={{ backgroundImage: GRADIENTS.blueGlow }}
              >
                {/* Featured badge */}
                <div
                  className="absolute top-4 left-4 rounded-full px-3 py-1.5 lg:top-6 lg:left-6"
                  style={{ backgroundImage: GRADIENTS.blueText }}
                >
                  <span className="font-inter text-xs font-semibold text-white">
                    {t('badge')}
                  </span>
                </div>
                <span className="font-inter text-lg text-blue-300">
                  Image à venir
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                {/* Category Tag */}
                <div
                  className="mb-4 inline-flex w-fit items-center rounded-full px-3 py-1"
                  style={{ backgroundImage: GRADIENTS.blueGlow }}
                >
                  <span
                    className="font-inter bg-clip-text text-xs font-semibold"
                    style={{
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: GRADIENTS.blueText,
                    }}
                  >
                    {t('category')}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-inter text-2xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  {t('title')}
                </h2>

                {/* Description */}
                <p className="font-inter mt-4 text-base leading-relaxed text-neutral-600">
                  {t('description')}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    {/* Avatar placeholder */}
                    <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
                      <span className="font-inter text-xs font-medium text-gray-500">
                        {t('author').charAt(0)}
                      </span>
                    </div>
                    <span className="font-inter font-medium">
                      {t('author')}
                    </span>
                  </div>
                  <span className="text-neutral-300">•</span>
                  <span className="font-inter">{t('date')}</span>
                  <span className="text-neutral-300">•</span>
                  <span className="font-inter">{t('readTime')}</span>
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="text-brand mt-6 inline-flex items-center gap-2 font-medium transition-colors hover:text-blue-700"
                >
                  <span className="font-inter">{t('cta')}</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </HoverLift>
      </FadeIn>
    </section>
  );
}
