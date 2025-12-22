import { getTranslations } from 'next-intl/server';

import {
  HowItWorksCTASection,
  HowItWorksHeroSection,
  HowItWorksMainFeaturesSection,
  HowItWorksMoreFeaturesSection,
  HowItWorksStatsSection,
} from '@/components';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('howItWorksPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <HowItWorksHeroSection />
      <HowItWorksMainFeaturesSection />
      <HowItWorksMoreFeaturesSection />
      <HowItWorksStatsSection />
      <HowItWorksCTASection />
    </main>
  );
}
