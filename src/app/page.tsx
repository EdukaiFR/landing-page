import { HeroSection, VideoShowcase } from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E9F0FF]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 xl:px-16">
        <HeroSection />
        <VideoShowcase />
      </div>
    </main>
  );
}
