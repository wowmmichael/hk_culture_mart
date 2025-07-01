import zhTW from '../public/locales/zh-TW/common.json';
import zhCN from '../public/locales/zh-CN/common.json';
import en from '../public/locales/en/common.json';

// Define supported locales and the default locale
export const locales = ['zh-TW', 'zh-CN', 'en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale = 'zh-TW' as Locale;

// Type definitions for translations
export type TranslationKey = string;
export type TranslationDictionary = Record<string, any>;

// Cache translations in memory for better performance
export const translationsCache: Record<Locale, TranslationDictionary> = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'en': en,
};

/**
 * Get static route parameters for localized routes
 */
export function getStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

/**
 * Server-side translation function
 */
export function getTranslation(locale: Locale, key: TranslationKey): string {
  const translations = translationsCache[locale] || translationsCache[defaultLocale];
  
  // Handle nested keys like 'site.title'
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }
  
  return value || key;
}

/**
 * Get all translations for a locale
 */
export function getAllTranslations(locale: Locale): TranslationDictionary {
  return translationsCache[locale] || translationsCache[defaultLocale];
}

/**
 * Get a localized path
 */
export function getLocalizedPath(path: string, locale: string): string {
  // Handle root path
  if (path === '/' || path === '') {
    return `/${locale}`;
  }
  
  // Handle paths that already have a locale
  if (locales.some(loc => path.startsWith(`/${loc}/`) || path === `/${loc}`)) {
    const segments = path.split('/').filter(Boolean);
    segments[0] = locale; // Replace the locale
    return `/${segments.join('/')}`;
  }
  
  // Handle paths without locale
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Get display name for a locale
 */
export function getLocaleDisplayName(locale: string): string {
  return getLocaleNames()[locale as Locale] || locale;
}

/**
 * Get all locale names
 */
export function getLocaleNames(): Record<Locale, string> {
  return {
    'zh-TW': '繁體中文',
    'zh-CN': '简体中文',
    'en': 'English'
  };
}

/**
 * Check if a string is a supported locale
 */
export function isValidLocale(locale: string): boolean {
  return locales.includes(locale as Locale);
}
