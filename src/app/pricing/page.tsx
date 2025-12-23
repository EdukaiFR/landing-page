import { getTranslations } from 'next-intl/server';

import {
  CTASection,
  FAQSection,
  PricingComparisonSection,
  PricingPageContent,
} from '@/components';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pricingPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function PricingPage() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 xl:px-16">
        <PricingPageContent />
        <PricingComparisonSection />
      </div>
      <FAQSection />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 xl:px-16">
        <CTASection />
      </div>
    </main>
  );
}
