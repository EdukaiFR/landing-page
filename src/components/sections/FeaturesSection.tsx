import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

interface FeatureImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface FeatureItem {
  key: string;
  images: FeatureImage[];
  reverse?: boolean;
}

interface FeatureImagesProps {
  images: FeatureImage[];
}

/**
 * Renders feature images with proper layout based on count.
 */
function FeatureImages({ images }: FeatureImagesProps) {
  const firstImage = images[0];
  const secondImage = images[1];

  if (!firstImage) return null;

  if (images.length === 1) {
    return (
      <div className="relative overflow-hidden rounded-2xl border-4 border-white/35 shadow-lg">
        <Image
          src={firstImage.src}
          alt={firstImage.alt}
          width={firstImage.width}
          height={firstImage.height}
          className="h-auto w-full max-w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap">
      <div className="relative overflow-hidden rounded-2xl border-4 border-white/35 shadow-lg">
        <Image
          src={firstImage.src}
          alt={firstImage.alt}
          width={firstImage.width}
          height={firstImage.height}
          className="h-auto w-full object-cover"
        />
      </div>
      <Image
        src="/images/features/lightbulb.svg"
        alt=""
        width={50}
        height={50}
        className="hidden lg:block"
        aria-hidden="true"
      />
      {secondImage && (
        <div className="relative overflow-hidden rounded-2xl border-4 border-white/35 shadow-lg">
          <Image
            src={secondImage.src}
            alt={secondImage.alt}
            width={secondImage.width}
            height={secondImage.height}
            className="h-auto w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

const FEATURES: FeatureItem[] = [
  {
    key: 'generateSupports',
    images: [
      {
        src: '/images/features/generate-supports-1.png',
        alt: 'Interface de génération de supports',
        width: 365,
        height: 269,
      },
      {
        src: '/images/features/generate-supports-2.png',
        alt: 'Confirmation de génération',
        width: 321,
        height: 156,
      },
    ],
  },
  {
    key: 'trackProgress',
    images: [
      {
        src: '/images/features/track-progress.png',
        alt: 'Tableau de bord de progression',
        width: 578,
        height: 288,
      },
    ],
    reverse: true,
  },
  {
    key: 'communityCourses',
    images: [
      {
        src: '/images/features/community-courses.png',
        alt: 'Cours de la communauté',
        width: 712,
        height: 259,
      },
    ],
  },
];

/**
 * Features section showcasing Edukai's main capabilities.
 * Displays alternating text/image blocks with responsive layout.
 */
export function FeaturesSection() {
  const t = useTranslations('home.features');

  return (
    <section className="flex flex-col items-center gap-12 px-4 py-12 md:gap-20 md:py-16 lg:gap-24 lg:py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center md:gap-6">
        <h2 className="font-inter max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl xl:text-[77px]">
          {t.rich('title', {
            highlight: (chunks) => <span className="text-brand">{chunks}</span>,
          })}
        </h2>
        <p className="font-inter text-neutral-light max-w-3xl text-base tracking-tight md:text-lg lg:text-xl">
          {t('subtitle')}
        </p>
      </div>

      {/* Features */}
      <div className="flex w-full max-w-6xl flex-col gap-16 md:gap-24 lg:gap-32">
        {FEATURES.map(({ key, images, reverse }) => (
          <div
            key={key}
            className={`flex flex-col items-center gap-8 md:gap-12 lg:flex-row lg:gap-16 ${
              reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className="flex flex-col gap-4 text-center md:gap-6 lg:w-[400px] lg:shrink-0 lg:text-left">
              <h3 className="font-inter text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl xl:text-[45px] xl:leading-tight">
                {t(`items.${key}.title`)}
              </h3>
              <p className="font-inter text-neutral-light text-base leading-relaxed tracking-tight md:text-lg lg:text-xl">
                {t(`items.${key}.description`)}
              </p>
            </div>

            {/* Images */}
            <div className="flex flex-1 items-center justify-center gap-4 lg:justify-end">
              <FeatureImages images={images} />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        href="#beta"
        variant="primary"
        size="lg"
        className="border-4 border-white/35"
      >
        {t('cta')}
      </Button>
    </section>
  );
}
