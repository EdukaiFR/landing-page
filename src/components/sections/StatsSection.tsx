'use client';

import type { ReactNode } from 'react';

import { useTranslations } from 'next-intl';

import {
  Counter,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import {
  BrainIcon,
  ClockIcon,
  TrendingUpIcon,
  ZapIcon,
} from '@/components/icons';

interface StatItem {
  key: string;
  icon: ReactNode;
  value: number;
  prefix?: string;
  suffix: string;
}

const STATS: StatItem[] = [
  {
    key: 'timeSaved',
    icon: <ClockIcon className="h-6 w-6" />,
    value: 2,
    suffix: 'h',
  },
  {
    key: 'efficiency',
    icon: <ZapIcon className="h-6 w-6" />,
    value: 30,
    suffix: 's',
  },
  {
    key: 'retention',
    icon: <BrainIcon className="h-6 w-6" />,
    value: 40,
    prefix: '+',
    suffix: '%',
  },
  {
    key: 'improvement',
    icon: <TrendingUpIcon className="h-6 w-6" />,
    value: 3,
    suffix: 'x',
  },
];

/**
 * Statistics section showing key metrics about Edukai's effectiveness.
 * Uses generic stats about time saved and learning efficiency.
 */
export function StatsSection() {
  const t = useTranslations('home.stats');

  return (
    <section className="py-12 md:py-16">
      <FadeIn>
        <div className="from-brand mx-auto max-w-6xl rounded-3xl bg-gradient-to-br to-blue-600 px-6 py-10 md:px-12 md:py-14">
          <StaggerContainer
            className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
            staggerDelay={0.15}
          >
            {STATS.map(({ key, icon, value, prefix, suffix }) => (
              <StaggerItem
                key={key}
                className="flex flex-col items-center gap-3 text-center"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                  {icon}
                </div>

                {/* Value with animated counter */}
                <Counter
                  value={value}
                  prefix={prefix}
                  suffix={suffix}
                  duration={2}
                  className="font-inter text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                />

                {/* Label */}
                <span className="font-inter text-sm text-white/80 md:text-base">
                  {t(`items.${key}.label`)}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>
    </section>
  );
}
