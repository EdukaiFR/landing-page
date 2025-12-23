import {
  BetaSignupSection,
  ComparisonSection,
  FeaturesSection,
  HeroSection,
  HomeFAQSection,
  HowItWorksSection,
  PainPointsSection,
  StatsSection,
  TestimonialsSection,
  VideoShowcase,
} from '@/components';
import { StickyCTA } from '@/components/ui';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-10 xl:px-16">
        <HeroSection />
        <VideoShowcase />
        <StatsSection />
        <PainPointsSection />
        <ComparisonSection />
        <FeaturesSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <HomeFAQSection />
        <BetaSignupSection />
      </div>
      <StickyCTA />
    </main>
  );
}
