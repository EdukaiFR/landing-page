import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { ArrowRightIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import { GRADIENTS } from '@/styles';

/**
 * Hero section for the About page.
 */
export function AboutHeroSection() {
  const t = useTranslations('aboutPage.hero');

  return (
    <section className="bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5"
            style={{ backgroundImage: GRADIENTS.blueGlow }}
          >
            <Image
              src="/images/about/badge-icon.svg"
              alt=""
              width={18}
              height={18}
              className="shrink-0"
            />
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
          <h1 className="font-inter text-4xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
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

          {/* Description */}
          <div className="flex flex-col gap-4">
            <p className="font-inter text-lg leading-relaxed font-bold text-neutral-900/90 md:text-xl">
              {t('description.bold')}
            </p>
            <p className="font-inter text-lg leading-relaxed font-medium text-neutral-900/80 md:text-xl">
              {t('description.regular')}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            href="#beta"
            variant="primary"
            size="lg"
            className="mt-4 w-fit gap-2"
          >
            {t('cta')}
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </div>

        {/* Right Image Placeholder */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-xl lg:aspect-square">
          {/* Placeholder for team/product image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-inter text-lg text-blue-300">
              Image à venir
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
