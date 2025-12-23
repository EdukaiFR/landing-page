'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { CheckIcon } from '@/components/icons';

type FeatureValue = boolean | number | string;

interface ComparisonFeature {
  key: string;
  hobby: FeatureValue;
  premium: FeatureValue;
  family: FeatureValue;
}

const COMPARISON_FEATURES: ComparisonFeature[] = [
  { key: 'questionsGenerated', hobby: 10, premium: 20, family: 20 },
  {
    key: 'revisionSheets',
    hobby: 'Basique',
    premium: 'Élaborée',
    family: 'Élaborée',
  },
  { key: 'advancedStats', hobby: false, premium: true, family: true },
  { key: 'revisionMethods', hobby: false, premium: true, family: true },
  { key: 'parentDashboard', hobby: false, premium: false, family: true },
  { key: 'prioritySupport', hobby: false, premium: false, family: true },
  { key: 'communityAccess', hobby: false, premium: true, family: true },
];

/**
 * Renders a cell value in the comparison table.
 */
function CellValue({ value }: { value: FeatureValue }) {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckIcon className="text-brand mx-auto h-5 w-5" />
    ) : (
      <span className="text-neutral-300">—</span>
    );
  }
  return <span className="font-inter text-sm text-neutral-700">{value}</span>;
}

/**
 * Feature comparison table for pricing plans.
 */
export function PricingComparisonSection() {
  const t = useTranslations('pricingPage.comparison');

  return (
    <section className="px-4 py-12 md:py-16">
      <FadeIn className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="font-inter text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
            {t('title')}
          </h2>
          <p className="font-inter mt-3 text-neutral-600">{t('subtitle')}</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="font-inter py-4 text-left text-sm font-semibold text-neutral-900">
                  {t('headers.features')}
                </th>
                <th className="font-inter py-4 text-center text-sm font-medium text-neutral-500">
                  {t('headers.hobby')}
                </th>
                <th className="font-inter text-brand py-4 text-center text-sm font-semibold">
                  {t('headers.premium')}
                </th>
                <th className="font-inter py-4 text-center text-sm font-medium text-neutral-500">
                  {t('headers.family')}
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((feature) => (
                <tr
                  key={feature.key}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <td className="font-inter py-4 text-sm text-neutral-700">
                    {t(`features.${feature.key}`)}
                  </td>
                  <td className="py-4 text-center">
                    <CellValue value={feature.hobby} />
                  </td>
                  <td className="bg-blue-50/50 py-4 text-center">
                    <CellValue value={feature.premium} />
                  </td>
                  <td className="py-4 text-center">
                    <CellValue value={feature.family} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </section>
  );
}
