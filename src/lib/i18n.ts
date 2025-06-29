export function getStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export async function getTranslations(locale: string) {
  return (await import(`../../public/locales/${locale}/common.json`)).default;
}

export const defaultLocale = 'zh-TW';
export const locales = ['zh-TW', 'zh-CN', 'en'];

export function getLocaleName(locale: string): string {
  const localeNames = {
    'zh-TW': '繁體中文',
    'zh-CN': '简体中文',
    'en': 'English',
  };
  return localeNames[locale as keyof typeof localeNames] || locale;
}
