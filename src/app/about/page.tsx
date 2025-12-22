import { getTranslations } from 'next-intl/server';

import {
  AboutCTASection,
  AboutFoundersSection,
  AboutHeroSection,
  AboutStorySection,
  AboutValuesSection,
} from '@/components';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('aboutPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <AboutStorySection />
      <AboutFoundersSection />
      <AboutValuesSection />
      <AboutCTASection />
    </main>
  );
}
