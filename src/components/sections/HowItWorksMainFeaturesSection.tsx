import { useTranslations } from 'next-intl';

import { CheckIcon } from '@/components/icons';
import { GRADIENTS } from '@/styles';

interface FeatureCardProps {
  titleKey: string;
  descriptionKey: string;
  featuresKey: string;
  featureCount: number;
  iconGradient: string;
  iconBgColor: string;
  t: ReturnType<typeof useTranslations>;
}

function FeatureCard({
  titleKey,
  descriptionKey,
  featuresKey,
  featureCount,
  iconGradient,
  iconBgColor,
  t,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
      {/* Icon */}
      <div
        className="flex size-14 items-center justify-center rounded-2xl"
        style={{ backgroundColor: iconBgColor }}
      >
        <div
          className="size-8 rounded-lg"
          style={{ backgroundImage: iconGradient }}
        />
      </div>

      {/* Title */}
      <h3 className="font-inter text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        {t(titleKey)}
      </h3>

      {/* Description */}
      <p className="font-inter text-base leading-relaxed text-neutral-900/70">
        {t(descriptionKey)}
      </p>

      {/* Feature List */}
      <ul className="flex flex-col gap-3">
        {Array.from({ length: featureCount }).map((_, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckIcon className="text-brand h-5 w-5 shrink-0" />
            <span className="font-inter text-sm text-neutral-700">
              {t(`${featuresKey}.${index}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Main features section with two large feature cards.
 */
export function HowItWorksMainFeaturesSection() {
  const t = useTranslations('howItWorksPage.mainFeatures');

  return (
    <section className="bg-surface px-4 pb-16 md:pb-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* AI Generation Card */}
        <FeatureCard
          titleKey="aiGeneration.title"
          descriptionKey="aiGeneration.description"
          featuresKey="aiGeneration.features"
          featureCount={4}
          iconGradient={GRADIENTS.blueText}
          iconBgColor="rgba(59, 130, 246, 0.1)"
          t={t}
        />

        {/* Smart Learning Card */}
        <FeatureCard
          titleKey="smartLearning.title"
          descriptionKey="smartLearning.description"
          featuresKey="smartLearning.features"
          featureCount={4}
          iconGradient="linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(139, 92, 246) 100%)"
          iconBgColor="rgba(168, 85, 247, 0.1)"
          t={t}
        />
      </div>
    </section>
  );
}
