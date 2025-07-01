'use client';

import { useParams } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import type { Locale, TranslationKey } from '@/i18n';
import { defaultLocale } from '@/i18n';

/**
 * Client-side hook to access translations
 * Uses dynamic imports to load translations on demand
 * Falls back to default locale if translation is missing
 */
export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as Locale) || defaultLocale;
  const [translations, setTranslations] = useState<Record<string, any>>({});
  
  useEffect(() => {
    // Load translations dynamically
    async function loadTranslations() {
      try {
        const localeData = await import(`../../public/locales/${locale}/common.json`);
        setTranslations(localeData.default);
      } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error);
        
        // Fallback to default locale
        if (locale !== defaultLocale) {
          try {
            const fallbackData = await import(`../../public/locales/${defaultLocale}/common.json`);
            setTranslations(fallbackData.default);
          } catch (e) {
            console.error(`Failed to load fallback translations for locale: ${defaultLocale}`, e);
          }
        }
      }
    }
    
    loadTranslations();
  }, [locale]);
  
  const t = useMemo(() => {
    return (key: TranslationKey) => {
      // Handle nested keys like 'site.title'
      const keys = key.split('.');
      let value: any = translations;
      
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
      
      return value || key;
    };
  }, [translations]);
  
  return { t, locale };
}
