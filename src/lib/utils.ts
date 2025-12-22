import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with Tailwind CSS conflict resolution.
 * Uses clsx for conditional classes and tailwind-merge to resolve conflicts.
 *
 * @param inputs - Class values to combine (strings, objects, arrays)
 * @returns Merged class string with resolved Tailwind conflicts
 *
 * @example
 * // Basic usage
 * cn('px-4 py-2', 'bg-blue-500')
 * // => 'px-4 py-2 bg-blue-500'
 *
 * @example
 * // Conditional classes
 * cn('base-class', isActive && 'active-class', { 'error': hasError })
 *
 * @example
 * // Tailwind conflict resolution
 * cn('px-2 py-1', 'px-4')
 * // => 'py-1 px-4' (px-2 is overridden by px-4)
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
