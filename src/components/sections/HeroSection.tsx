import { useTranslations } from 'next-intl';

import { ArrowCircleRightIcon, HeartIcon } from '@/components/icons';
import { Button } from '@/components/ui';

/**
 * Hero section with badge, headline, description, and CTA buttons.
 * Mobile-first responsive design.
 */
export function HeroSection() {
  const t = useTranslations('home.hero');

  return (
    <section className="flex flex-col items-center gap-6 px-4 py-12 text-center md:gap-9 md:py-16 lg:py-20">
      {/* Badge */}
      <div
        className="flex h-12 items-center justify-center gap-2.5 rounded-full px-5 py-2"
        style={{
          backgroundImage:
            'linear-gradient(65deg, rgba(37, 99, 235, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
        }}
      >
        <HeartIcon className="h-5 w-5 shrink-0 text-red-500" />
        <span
          className="font-inter bg-clip-text text-sm font-semibold md:text-base"
          style={{
            WebkitTextFillColor: 'transparent',
            backgroundImage:
              'linear-gradient(46deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 100%)',
          }}
        >
          {t('badge')}
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-inter max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-[#212121] md:text-5xl lg:text-6xl xl:text-[77px] xl:leading-[1.1]">
        {t.rich('title', {
          highlight: (chunks) => (
            <span className="text-[#3678ff]">{chunks}</span>
          ),
        })}
      </h1>

      {/* Description */}
      <div className="font-inter max-w-3xl text-base leading-relaxed tracking-tight text-[#212121]/80 md:text-lg lg:text-xl">
        <p>{t('description.line1')}</p>
        <p>
          {t.rich('description.line2', {
            bold: (chunks) => <span className="font-bold">{chunks}</span>,
          })}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button href="#beta" variant="primary" size="lg">
          {t('cta.primary')}
        </Button>
        <Button href="#about" variant="outline" size="lg">
          {t('cta.secondary')}
          <ArrowCircleRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
