import type fr from '../../messages/fr.json';

type Messages = typeof fr;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
