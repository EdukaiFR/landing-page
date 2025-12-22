export const locales = ['fr'] as const;
export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = 'fr';
