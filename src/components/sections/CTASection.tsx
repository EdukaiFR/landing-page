import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

/**
 * Call-to-action section encouraging users to start.
 */
export function CTASection() {
  const t = useTranslations('pricingPage.cta');

  return (
    <section className="px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-inter text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
          {t('title')}
        </h2>
        <p className="font-inter mt-4 text-neutral-600">{t('subtitle')}</p>
        <div className="mt-8">
          <Button href="#beta" variant="primary" size="lg">
            {t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
