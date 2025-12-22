import { useTranslations } from 'next-intl';

import { GRADIENTS } from '@/styles';

const FOUNDERS_COUNT = 3;

/**
 * Founders section showing the team members.
 */
export function AboutFoundersSection() {
  const t = useTranslations('aboutPage.founders');

  return (
    <section className="bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-inter text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {t.rich('title', {
              highlight: (chunks) => (
                <span
                  className="bg-clip-text"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: GRADIENTS.blueText,
                  }}
                >
                  {chunks}
                </span>
              ),
            })}
          </h2>
          <p className="font-inter mt-4 text-lg font-medium text-neutral-900/80 md:text-xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {Array.from({ length: FOUNDERS_COUNT }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-lg"
            >
              {/* Avatar Container */}
              <div className="relative">
                {/* Avatar Placeholder */}
                <div className="flex size-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg">
                  <span className="font-inter text-3xl text-blue-300">
                    {t(`members.${index}.name`).charAt(0)}
                  </span>
                </div>

                {/* Specialty Badge */}
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 whitespace-nowrap"
                  style={{ backgroundImage: GRADIENTS.blueText }}
                >
                  <span className="font-inter text-xs font-semibold text-white">
                    {t(`members.${index}.specialty`)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-inter text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                  {t(`members.${index}.name`)}
                </h3>
                <p className="font-inter mt-1 text-base text-neutral-900/70">
                  {t(`members.${index}.role`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
