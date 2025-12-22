import type { ComponentType, SVGProps } from 'react';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { InstagramIcon, LinkedInIcon, TikTokIcon } from '@/components/icons';
import { SocialIcon } from '@/components/ui';
import { SOCIAL_LINKS, type SocialPlatform } from '@/constants';

const SOCIAL_ICONS: Record<
  SocialPlatform,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  linkedin: LinkedInIcon,
};

/**
 * Footer social links section with icons and logo.
 */
export function FooterSocial() {
  const t = useTranslations('footer');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span className="font-inter text-base font-semibold tracking-[-0.48px] text-neutral-900">
          {t('sections.social')}
        </span>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ platform, href, label }) => {
            const Icon = SOCIAL_ICONS[platform];
            return (
              <SocialIcon key={label} href={href} label={label}>
                <Icon className="h-6 w-6" />
              </SocialIcon>
            );
          })}
        </div>
      </div>

      {/* Logo icon */}
      <div className="hidden lg:block">
        <Image
          src="/brand/LOGO - Edukai v2.svg"
          alt="Edukai"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
