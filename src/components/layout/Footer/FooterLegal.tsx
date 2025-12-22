import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { HeartIcon } from '@/components/icons';

/**
 * Footer bottom bar with legal links and copyright.
 */
export function FooterLegal() {
  const t = useTranslations('footer');

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left">
      {/* Legal links */}
      <div className="text-neutral-light flex items-center gap-2 text-sm font-medium sm:gap-4">
        <Link
          href="/legal"
          className="font-inter tracking-[-0.42px] transition-colors hover:text-neutral-900"
        >
          {t('legal.terms')}
        </Link>
        <span className="text-xl leading-none sm:text-2xl">-</span>
        <Link
          href="/privacy"
          className="font-inter tracking-[-0.42px] transition-colors hover:text-neutral-900"
        >
          {t('legal.privacy')}
        </Link>
      </div>

      {/* Copyright */}
      <div className="text-neutral-light flex items-center gap-1.5 text-sm font-medium">
        <span className="font-inter tracking-[-0.42px]">{t('madeWith')}</span>
        <HeartIcon className="h-3.5 w-4 text-red-500" />
        <span className="font-inter tracking-[-0.42px]">
          • {t('copyright', { year: new Date().getFullYear() })}
        </span>
      </div>
    </div>
  );
}
