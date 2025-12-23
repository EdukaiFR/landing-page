'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { GRADIENTS } from '@/styles';

interface StepConfig {
  key: 'ideation' | 'prototype' | 'development';
  badgeColor: string;
  badgeBg: string;
  iconSrc: string;
  gradientFrom: string;
  gradientTo: string;
  paragraphCount: number;
  highlightIndex: number;
}

const STEPS: StepConfig[] = [
  {
    key: 'ideation',
    badgeColor: 'text-blue-500',
    badgeBg: 'bg-blue-50',
    iconSrc: '/images/about/step1-icon.svg',
    gradientFrom: 'from-blue-100',
    gradientTo: 'to-blue-50',
    paragraphCount: 4,
    highlightIndex: 2,
  },
  {
    key: 'prototype',
    badgeColor: 'text-purple-600',
    badgeBg: 'bg-purple-50',
    iconSrc: '/images/about/step2-icon.svg',
    gradientFrom: 'from-purple-100',
    gradientTo: 'to-purple-50',
    paragraphCount: 4,
    highlightIndex: -1,
  },
  {
    key: 'development',
    badgeColor: 'text-green-600',
    badgeBg: 'bg-green-50',
    iconSrc: '/images/about/step3-icon.svg',
    gradientFrom: 'from-green-100',
    gradientTo: 'to-green-50',
    paragraphCount: 4,
    highlightIndex: -1,
  },
];

interface StepCardProps {
  step: StepConfig;
  index: number;
  t: ReturnType<typeof useTranslations>;
}

function StepCard({ step, index, t }: StepCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Text Content */}
      <div className="flex flex-1 flex-col gap-4">
        {/* Badge */}
        <div
          className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 ${step.badgeBg}`}
        >
          <Image
            src={step.iconSrc}
            alt=""
            width={18}
            height={18}
            className="shrink-0"
          />
          <span
            className={`font-inter text-sm font-semibold ${step.badgeColor}`}
          >
            {t(`steps.${step.key}.badge`)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-inter text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          {t(`steps.${step.key}.title`)}
        </h3>

        {/* Paragraphs */}
        <div className="flex flex-col gap-4">
          {Array.from({ length: step.paragraphCount }).map((_, pIndex) => (
            <p
              key={pIndex}
              className={`font-inter text-base leading-relaxed md:text-lg ${
                pIndex === step.highlightIndex
                  ? 'font-semibold text-neutral-900'
                  : 'font-medium text-neutral-900/80'
              }`}
            >
              {t(`steps.${step.key}.paragraphs.${pIndex}`)}
            </p>
          ))}
        </div>
      </div>

      {/* Image Placeholder */}
      <div
        className={`flex aspect-square w-full flex-1 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br shadow-lg ${step.gradientFrom} ${step.gradientTo}`}
      >
        <span className="font-inter text-lg text-neutral-400">
          Image à venir
        </span>
      </div>
    </div>
  );
}

/**
 * Story section showing the 3 steps of Edukai's creation.
 */
export function AboutStorySection() {
  const t = useTranslations('aboutPage.story');

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <FadeIn className="mb-16 text-center">
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
          <p className="font-inter mx-auto mt-4 max-w-3xl text-lg font-medium text-neutral-900/80 md:text-xl">
            {t('subtitle')}
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer
          className="flex flex-col gap-16 md:gap-20"
          staggerDelay={0.2}
        >
          {STEPS.map((step, index) => (
            <StaggerItem
              key={step.key}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <StepCard step={step} index={index} t={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
