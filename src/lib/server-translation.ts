import { Locale, defaultLocale, getTranslation, TranslationKey } from '@/i18n';

/**
 * Create a translation function for a specific locale
 * Useful for server components that need to use translations
 * 
 * @example
 * ```tsx
 * import { createTranslator } from '@/lib/server-translation';
 * 
 * export default function MyServerComponent({ params }: { params: { locale: string } }) {
 *   const t = createTranslator(params.locale as Locale);
 *   return <h1>{t('site.title')}</h1>;
 * }
 * ```
 */
export function createTranslator(locale: Locale) {
  return (key: TranslationKey): string => getTranslation(locale, key);
}
