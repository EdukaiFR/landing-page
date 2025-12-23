'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { FadeIn } from '@/components/animations';
import { GRADIENTS } from '@/styles';

interface PricingHeroSectionProps {
  onBillingChange?: (isAnnual: boolean) => void;
}

/**
 * Hero section for the Pricing page with billing toggle.
 */
export function PricingHeroSection({
  onBillingChange,
}: PricingHeroSectionProps) {
  const t = useTranslations('pricingPage.hero');
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (annual: boolean) => {
    setIsAnnual(annual);
    onBillingChange?.(annual);
  };

  return (
    <section className="flex flex-col items-center gap-6 px-4 py-12 text-center md:gap-8 md:py-16 lg:pt-20 lg:pb-5">
      {/* Badge */}
      <FadeIn delay={0} direction="down">
        <div
          className="flex h-10 items-center justify-center gap-2 rounded-full px-4 py-2"
          style={{ backgroundImage: GRADIENTS.blueGlow }}
        >
          <span
            className="font-inter bg-clip-text text-sm font-semibold"
            style={{
              WebkitTextFillColor: 'transparent',
              backgroundImage: GRADIENTS.blueText,
            }}
          >
            {t('badge')}
          </span>
        </div>
      </FadeIn>

      {/* Title */}
      <FadeIn delay={0.1} duration={0.6}>
        <h1 className="font-inter max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl xl:text-[56px]">
          {t.rich('title', {
            highlight: (chunks) => <span className="text-brand">{chunks}</span>,
          })}
        </h1>
      </FadeIn>

      {/* Subtitle */}
      <FadeIn delay={0.2} duration={0.6}>
        <p className="font-inter text-neutral-light text-sm tracking-tight md:text-base">
          {t('subtitle')}
        </p>
      </FadeIn>

      {/* Billing Toggle */}
      <FadeIn delay={0.3}>
        <div className="flex items-center rounded-full bg-white p-1 shadow-sm">
          {/* Monthly button */}
          <button
            type="button"
            onClick={() => handleToggle(false)}
            className="font-inter relative rounded-full px-4 py-2 text-sm font-semibold"
          >
            {!isAnnual && (
              <motion.div
                layoutId="billing-indicator"
                className="bg-brand absolute inset-0 rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                !isAnnual ? 'text-white' : 'text-neutral-800'
              }`}
            >
              {t('billing.monthly')}
            </span>
          </button>

          {/* Annual button */}
          <button
            type="button"
            onClick={() => handleToggle(true)}
            className="font-inter relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          >
            {isAnnual && (
              <motion.div
                layoutId="billing-indicator"
                className="bg-brand absolute inset-0 rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isAnnual ? 'text-white' : 'text-neutral-800'
              }`}
            >
              {t('billing.annual')}
            </span>
            <span className="relative z-10 rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
              -20%
            </span>
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
