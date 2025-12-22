import { getRequestConfig } from 'next-intl/server';

import { DEFAULT_LOCALE } from './config';

export default getRequestConfig(async () => {
  const locale = DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
