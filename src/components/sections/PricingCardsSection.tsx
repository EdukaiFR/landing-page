'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import {
  HoverLift,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import { CheckIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import { GRADIENTS } from '@/styles';

interface AnimatedPriceProps {
  price: string;
}

/**
 * Animated price component with smooth transition on value change.
 */
function AnimatedPrice({ price }: AnimatedPriceProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={price}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="font-inter text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl"
      >
        {price}
      </motion.span>
    </AnimatePresence>
  );
}

interface PricingCardsSectionProps {
  isAnnual?: boolean;
}

/**
 * Pricing cards section showing the three plans.
 */
export function PricingCardsSection({
  isAnnual = false,
}: PricingCardsSectionProps) {
  const t = useTranslations('pricingPage.plans');

  return (
    <section className="px-4 py-8 md:py-12">
      <StaggerContainer
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3"
        staggerDelay={0.15}
      >
        {/* Hobby Plan */}
        <StaggerItem>
          <HoverLift>
            <div className="flex h-full flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-inter text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                    {t('hobby.name')}
                  </h3>
                  <p className="font-inter mt-2 text-base text-neutral-600">
                    {t('hobby.description')}
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-inter text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
                    {t('hobby.free')}
                  </span>
                  <span className="font-inter text-lg text-neutral-600">
                    {t('hobby.period')}
                  </span>
                </div>
              </div>

              <Button
                href="/#beta"
                variant="outline"
                size="lg"
                className="w-full"
              >
                {t('hobby.cta')}
              </Button>

              <div className="flex flex-col gap-4">
                <p className="font-inter text-lg font-semibold text-neutral-900">
                  {t('hobby.featuresTitle')}
                </p>
                <ul className="flex flex-col gap-3">
                  {[0, 1, 2].map((index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="text-brand mt-1 h-5 w-5 shrink-0" />
                      <span className="font-inter text-base text-neutral-700">
                        {t(`hobby.features.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="flex items-start gap-3 rounded-full px-5 py-3"
                style={{ backgroundImage: GRADIENTS.blueGlow }}
              >
                <span className="text-lg">ℹ️</span>
                <p
                  className="font-inter bg-clip-text text-sm font-semibold"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: GRADIENTS.blueText,
                  }}
                >
                  {t('hobby.info')}
                </p>
              </div>
            </div>
          </HoverLift>
        </StaggerItem>

        {/* Premium Plan */}
        <StaggerItem>
          <HoverLift>
            <div className="border-brand relative flex h-full flex-col gap-8 rounded-2xl border-2 bg-white p-6 shadow-sm md:p-8">
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5"
                style={{ backgroundImage: GRADIENTS.blueText }}
              >
                <span className="font-inter text-sm font-semibold text-white">
                  {t('premium.badge')}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-inter text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                    {t('premium.name')}
                  </h3>
                  <p className="font-inter mt-2 text-base text-neutral-600">
                    {t('premium.description')}
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <AnimatedPrice price={isAnnual ? '6€' : '8€'} />
                  <AnimatePresence>
                    {isAnnual && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="font-inter text-2xl text-neutral-400 line-through"
                      >
                        8€
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span className="font-inter text-lg text-neutral-600">
                    {t('premium.period')}
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full cursor-not-allowed opacity-60"
                disabled
              >
                {t('premium.cta')}
              </Button>

              <div className="flex flex-col gap-4">
                <p className="font-inter text-lg font-semibold text-neutral-900">
                  {t('premium.featuresTitle')}
                </p>
                <ul className="flex flex-col gap-3">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="text-brand mt-1 h-5 w-5 shrink-0" />
                      <span className="font-inter text-base text-neutral-700">
                        {t(`premium.features.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="flex items-start gap-3 rounded-full px-5 py-3"
                style={{ backgroundImage: GRADIENTS.blueGlow }}
              >
                <span className="text-lg">ℹ️</span>
                <p
                  className="font-inter bg-clip-text text-sm font-medium"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: GRADIENTS.blueText,
                  }}
                >
                  {t('premium.info')}
                </p>
              </div>
            </div>
          </HoverLift>
        </StaggerItem>

        {/* Family Plan */}
        <StaggerItem>
          <HoverLift>
            <div className="flex h-full flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-inter text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                    {t('family.name')}
                  </h3>
                  <p className="font-inter mt-2 text-base text-neutral-600">
                    {t('family.description')}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <AnimatedPrice price={isAnnual ? '15€' : '20€'} />
                    <AnimatePresence>
                      {isAnnual && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="font-inter text-2xl text-neutral-400 line-through"
                        >
                          20€
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span className="font-inter text-lg text-neutral-600">
                      {t('family.period')}
                    </span>
                  </div>
                  <p className="font-inter text-base text-neutral-600">
                    {t('family.extraChild')}
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full cursor-not-allowed opacity-50"
                disabled
              >
                {t('family.cta')}
              </Button>

              <div className="flex flex-col gap-4">
                <p className="font-inter text-lg font-semibold text-neutral-900">
                  {t('family.featuresTitle')}
                </p>
                <ul className="flex flex-col gap-3">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="text-brand mt-1 h-5 w-5 shrink-0" />
                      <span className="font-inter text-base text-neutral-700">
                        {t(`family.features.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-inter text-lg font-semibold text-neutral-900">
                  {t('family.servicesTitle')}
                </p>
                <ul className="flex flex-col gap-3">
                  {[0, 1].map((index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="text-brand mt-1 h-5 w-5 shrink-0" />
                      <span className="font-inter text-base text-neutral-700">
                        {t(`family.services.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="flex items-start gap-3 rounded-full px-5 py-3"
                style={{ backgroundImage: GRADIENTS.blueGlow }}
              >
                <span className="text-lg">ℹ️</span>
                <p
                  className="font-inter bg-clip-text text-sm font-medium"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: GRADIENTS.blueText,
                  }}
                >
                  {t('family.info')}
                </p>
              </div>
            </div>
          </HoverLift>
        </StaggerItem>
      </StaggerContainer>

      {/* Beta availability note */}
      <p className="font-inter mt-8 text-center text-sm text-neutral-500">
        {t('betaNote')}
      </p>
    </section>
  );
}
