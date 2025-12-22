import Image from 'next/image';

/**
 * Video showcase section displaying the product demo.
 * Features the Edukai mascot logo overlapping the top of the video frame.
 */
export function VideoShowcase() {
  return (
    <section className="relative w-full px-4 pb-8 md:pb-12 lg:pb-16">
      {/* Edukai mascot logo - positioned behind the video */}
      <div className="relative mx-auto flex justify-center">
        <Image
          src="/brand/LOGO - Edukai v2.svg"
          alt="Edukai"
          width={80}
          height={80}
          className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
        />
      </div>

      {/* Video container overlapping the logo */}
      <div className="relative z-10 mx-auto -mt-8 max-w-5xl md:-mt-10 lg:-mt-12">
        <div className="overflow-hidden rounded-3xl border-[10px] border-blue-500/5 md:rounded-[40px] md:border-[15px] lg:rounded-[50px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/Edukai - Generation 4K.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
