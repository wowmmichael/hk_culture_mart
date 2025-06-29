// Define supported locales and the default locale
export const locales = ['zh-TW', 'zh-CN', 'en'];
export const defaultLocale = 'zh-TW';

// Helper functions for locale management

// Get a localized path
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

// Get display name for a locale
export function getLocaleDisplayName(locale: string): string {
  const displayNames: Record<string, string> = {
    'zh-TW': '繁體中文',
    'zh-CN': '简体中文',
    'en': 'English'
  };
  
  return displayNames[locale] || locale;
}

// Check if a string is a supported locale
export function isValidLocale(locale: string): boolean {
  return locales.includes(locale);
}
