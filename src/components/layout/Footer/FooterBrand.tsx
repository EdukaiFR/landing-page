import { useTranslations } from 'next-intl';

import { HeartIcon } from '@/components/icons';
import { GRADIENTS } from '@/styles';

/**
 * Footer brand section with logo, tagline, and badge.
 */
export function FooterBrand() {
  const t = useTranslations('footer');

  return (
    <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1 lg:max-w-89.75">
      <div className="flex flex-col">
        <span className="font-outfit text-[30px] font-bold text-black">
          Edukai
        </span>
        <span className="font-inter text-base font-semibold tracking-[-0.48px] text-neutral-900">
          {t('tagline')}
        </span>
      </div>

      {/* Badge */}
      <div
        className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full px-5 py-2 sm:max-w-89.75"
        style={{ backgroundImage: GRADIENTS.blueGlow }}
      >
        <HeartIcon className="h-5 w-5 shrink-0 text-red-500" />
        <span
          className="font-inter bg-clip-text text-base font-semibold"
          style={{
            WebkitTextFillColor: 'transparent',
            backgroundImage: GRADIENTS.blueText,
          }}
        >
          {t('badge')}
        </span>
      </div>
    </div>
  );
}
