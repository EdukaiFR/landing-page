'use client';

import { useEffect } from 'react';

/**
 * Hook to lock body scroll when a condition is true.
 * Useful for modals, mobile menus, etc.
 * @param isLocked - Whether to lock the scroll
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}
