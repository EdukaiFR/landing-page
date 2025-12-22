import type { ComponentType, SVGProps } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import {
  HeartIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from '@/components/icons';
import { NavLink, SocialIcon } from '@/components/ui';
import {
  FOOTER_NAV_ITEMS,
  SOCIAL_LINKS,
  type SocialPlatform,
} from '@/constants';

const SOCIAL_ICONS: Record<
  SocialPlatform,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  linkedin: LinkedInIcon,
};

/**
 * Footer component with brand info, navigation, social links, and legal info.
 */
export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('header.nav');

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 border-b border-[#212121]/25 py-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">
          {/* Brand section */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1 lg:max-w-[359px]">
            <div className="flex flex-col">
              <span className="font-outfit text-[30px] font-bold text-black">
                Edukai
              </span>
              <span className="font-inter text-base font-semibold tracking-[-0.48px] text-[#212121]">
                {t('tagline')}
              </span>
            </div>

            {/* Badge */}
            <div
              className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full px-5 py-2 sm:max-w-[359px]"
              style={{
                backgroundImage:
                  'linear-gradient(65deg, rgba(37, 99, 235, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
              }}
            >
              <HeartIcon className="h-5 w-5 shrink-0 text-red-500" />
              <span
                className="font-inter bg-clip-text text-base font-semibold"
                style={{
                  WebkitTextFillColor: 'transparent',
                  backgroundImage:
                    'linear-gradient(46deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 100%)',
                }}
              >
                {t('badge')}
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-2.5">
            <span className="font-inter text-base font-semibold tracking-[-0.48px] text-[#212121]">
              {t('sections.pages')}
            </span>
            <nav className="flex flex-col gap-2">
              {FOOTER_NAV_ITEMS.map(({ key, href }) => (
                <NavLink
                  key={key}
                  href={href}
                  className="text-sm text-[#212121]/75 hover:text-[#212121]"
                >
                  {key === 'home' ? t('nav.home') : tNav(key)}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-inter text-base font-semibold tracking-[-0.48px] text-[#212121]">
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
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left">
          {/* Legal links */}
          <div className="flex items-center gap-2 text-sm font-medium text-[#212121]/80 sm:gap-4">
            <Link
              href="/legal"
              className="font-inter tracking-[-0.42px] transition-colors hover:text-[#212121]"
            >
              {t('legal.terms')}
            </Link>
            <span className="text-xl leading-none sm:text-2xl">-</span>
            <Link
              href="/privacy"
              className="font-inter tracking-[-0.42px] transition-colors hover:text-[#212121]"
            >
              {t('legal.privacy')}
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm font-medium text-[#212121]/80">
            <span className="font-inter tracking-[-0.42px]">
              {t('madeWith')}
            </span>
            <HeartIcon className="h-3.5 w-4 text-red-500" />
            <span className="font-inter tracking-[-0.42px]">
              • {t('copyright', { year: new Date().getFullYear() })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
