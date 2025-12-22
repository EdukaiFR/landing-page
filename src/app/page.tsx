import {
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  PainPointsSection,
  VideoShowcase,
} from '@/components';

export default function Home() {
  return (
    <main className="bg-surface min-h-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 xl:px-16">
        <HeroSection />
        <VideoShowcase />
        <PainPointsSection />
        <FeaturesSection />
        <HowItWorksSection />
      </div>
    </main>
  );
}
