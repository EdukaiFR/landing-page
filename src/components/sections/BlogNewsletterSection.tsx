'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { Button } from '@/components/ui';

/**
 * Newsletter signup section for the Blog page.
 */
export function BlogNewsletterSection() {
  const t = useTranslations('blogPage.newsletter');

  return (
    <section className="px-4 py-12 md:py-16">
      <FadeIn className="mx-auto max-w-2xl">
        <div
          className="rounded-3xl px-6 py-10 text-center md:px-12 md:py-14"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 100%)',
          }}
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-white/20">
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="font-inter text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="font-inter mx-auto mt-3 max-w-md text-base text-white/80">
            {t('description')}
          </p>

          {/* Email Form */}
          <div className="mx-auto mt-8 max-w-sm">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={t('placeholder')}
                className="font-inter flex-1 rounded-full border-0 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/30 focus:outline-none"
              />
              <Button
                variant="outline"
                className="text-brand border-0 bg-white hover:bg-white/90"
              >
                {t('button')}
              </Button>
            </div>
          </div>

          {/* Note */}
          <p className="font-inter mt-4 text-xs text-white/60">{t('note')}</p>
        </div>
      </FadeIn>
    </section>
  );
}
