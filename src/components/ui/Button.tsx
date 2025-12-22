import type { ComponentProps, ReactNode } from 'react';

import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentProps<'button'>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:opacity-90',
  outline:
    'bg-white border border-[#333]/20 text-[#343a40] hover:border-blue-500 hover:text-blue-600',
  ghost: 'bg-transparent text-[#333] hover:text-blue-600',
} as const;

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
} as const;

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-inter font-semibold tracking-[-0.48px] transition-all';

/**
 * Reusable Button component with multiple variants and sizes.
 * Can render as a button or a Link based on the href prop.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const combinedClassName =
    `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<ButtonAsButton, keyof ButtonBaseProps>;
  return (
    <button type="button" className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
