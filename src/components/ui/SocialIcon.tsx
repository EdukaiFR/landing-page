import type { ComponentProps, ReactNode } from 'react';

import Link from 'next/link';

interface SocialIconProps extends Omit<
  ComponentProps<typeof Link>,
  'className'
> {
  children: ReactNode;
  label: string;
}

/**
 * Social media icon link with consistent styling.
 */
export function SocialIcon({ children, label, ...props }: SocialIconProps) {
  return (
    <Link
      className="text-[#212121] transition-colors hover:text-blue-600"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
}
