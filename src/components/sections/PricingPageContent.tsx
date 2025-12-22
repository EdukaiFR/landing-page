'use client';

import { useState } from 'react';

import { PricingCardsSection } from './PricingCardsSection';
import { PricingHeroSection } from './PricingHeroSection';

/**
 * Client-side wrapper for pricing page content that needs state.
 * Manages the billing toggle state between hero and cards sections.
 */
export function PricingPageContent() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <PricingHeroSection onBillingChange={setIsAnnual} />
      <PricingCardsSection isAnnual={isAnnual} />
    </>
  );
}
