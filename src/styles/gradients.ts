/**
 * Design tokens for gradients used across the application.
 * Centralizes gradient definitions for consistency and maintainability.
 */
export const GRADIENTS = {
  /** Blue glow background gradient for badges and highlights */
  blueGlow:
    'linear-gradient(65deg, rgba(37, 99, 235, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',

  /** Blue text gradient for emphasized text */
  blueText:
    'linear-gradient(46deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 100%)',
} as const;

/** Type for gradient keys */
export type GradientKey = keyof typeof GRADIENTS;
