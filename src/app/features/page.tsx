import { getTranslations } from 'next-intl/server';

import {
  FeaturesHeroSection,
  FormatsSection,
  HowItWorksSection,
  RevolutionSection,
  VideoShowcase,
} from '@/components';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('featuresPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function FeaturesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 xl:px-16">
        <FeaturesHeroSection />
        <VideoShowcase />
        <HowItWorksSection />
        <RevolutionSection />
        <FormatsSection />
      </div>
    </main>
  );
}
