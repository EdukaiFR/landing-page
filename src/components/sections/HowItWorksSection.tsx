import Image from 'next/image';

import { useTranslations } from 'next-intl';

interface StepImage {
  src: string;
  alt: string;
}

const STEPS: StepImage[] = [
  {
    src: '/images/how-it-works/step-1.png',
    alt: 'Étape 1 - Importez vos cours',
  },
  {
    src: '/images/how-it-works/step-2.png',
    alt: 'Étape 2 - IA analyse le contenu',
  },
  {
    src: '/images/how-it-works/step-3.png',
    alt: 'Étape 3 - Quiz générés automatiquement',
  },
  {
    src: '/images/how-it-works/step-4.png',
    alt: 'Étape 4 - Suivez vos progrès',
  },
];

/**
 * How It Works section showing the 4-step process.
 * Displays step cards in a responsive grid.
 */
export function HowItWorksSection() {
  const t = useTranslations('home.howItWorks');

  return (
    <section className="flex flex-col items-center gap-10 px-4 py-12 md:gap-14 md:py-16 lg:py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center md:gap-6">
        <h2 className="font-inter max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl xl:text-[77px]">
          {t.rich('title', {
            highlight: (chunks) => (
              <span className="text-brand block">{chunks}</span>
            ),
          })}
        </h2>
        <p className="font-inter text-neutral-light max-w-3xl text-base font-bold tracking-tight md:text-lg lg:text-xl">
          {t('subtitle')}
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-sm transition-transform hover:scale-[1.02]"
          >
            <Image
              src={step.src}
              alt={step.alt}
              width={354}
              height={362}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
