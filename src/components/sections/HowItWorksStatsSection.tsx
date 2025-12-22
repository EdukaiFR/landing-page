import { useTranslations } from 'next-intl';

type StatKey = 'courses' | 'students' | 'successRate' | 'rating';

const STATS: StatKey[] = ['courses', 'students', 'successRate', 'rating'];

/**
 * Stats section showing key metrics.
 */
export function HowItWorksStatsSection() {
  const t = useTranslations('howItWorksPage.stats');

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div
          className="rounded-3xl px-8 py-12 md:px-12 md:py-16"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 100%)',
          }}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((statKey) => (
              <div key={statKey} className="text-center">
                <p className="font-inter text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  {t(`${statKey}.value`)}
                </p>
                <p className="font-inter mt-2 text-sm font-medium text-white/80 md:text-base">
                  {t(`${statKey}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
