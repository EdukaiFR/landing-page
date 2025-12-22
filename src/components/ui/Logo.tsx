import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CONFIG = {
  sm: { image: 24, text: 'text-xl' },
  md: { image: 32, text: 'text-[30px]' },
  lg: { image: 40, text: 'text-4xl' },
} as const;

/**
 * Edukai logo component with optional text.
 */
export function Logo({ showText = true, size = 'md' }: LogoProps) {
  const { image, text } = SIZE_CONFIG[size];

  return (
    <Link href="/" className="flex items-center gap-2 rounded-full">
      <Image
        src="/brand/LOGO - Edukai v2.svg"
        alt="Edukai"
        width={image}
        height={image}
        className="rounded-full"
        priority
      />
      {showText && (
        <span className={`font-outfit ${text} font-medium text-blue-600`}>
          Edukai
        </span>
      )}
    </Link>
  );
}
