import { getTranslations } from 'next-intl/server';

import {
  BlogArticlesGrid,
  BlogFeaturedArticle,
  BlogHeroSection,
  BlogNewsletterSection,
} from '@/components';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('blogPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHeroSection />
      <BlogFeaturedArticle />
      <BlogArticlesGrid />
      <BlogNewsletterSection />
    </main>
  );
}
