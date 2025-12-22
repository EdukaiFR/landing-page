import type { ComponentProps } from 'react';

import Link from 'next/link';

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, 'className'> {
  isActive?: boolean;
}

const BASE_STYLES =
  'font-inter text-sm font-medium tracking-[-0.42px] text-[#333] transition-colors hover:text-blue-600';

/**
 * Reusable navigation link component with consistent styling.
 */
export function NavLink({
  isActive = false,
  children,
  ...props
}: NavLinkProps) {
  const className = `${BASE_STYLES} ${isActive ? 'text-blue-600' : ''}`.trim();

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}
