'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, ReactNode } from 'react';
import { locales, defaultLocale, Locale, isValidLocale } from '@/i18n';

// Create a context for locale information
export interface LocaleContextProps {
  locale: Locale;
  changeLocale: (newLocale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps>({
  locale: defaultLocale,
  changeLocale: () => {},
});

// Provider component
export function LocaleProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  
  // Ensure we have a valid locale or default to the defaultLocale
  const currentLocale = (params?.locale as string) || defaultLocale;
  const locale = isValidLocale(currentLocale) ? (currentLocale as Locale) : defaultLocale;

  const changeLocale = (newLocale: Locale) => {
    const currentPath = pathname || '';
    
    // Extract the current locale from the pathname
    const segments = currentPath.split('/').filter(Boolean);
    const basePath = segments.length > 1 ? segments.slice(1).join('/') : '';
    const newPath = `/${newLocale}${basePath ? '/' + basePath : ''}`;
    
    router.push(newPath);
  };
  
  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

// Custom hook to use the locale
export function useLocale() {
  return useContext(LocaleContext);
}
