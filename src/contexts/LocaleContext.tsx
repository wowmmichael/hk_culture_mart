'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, ReactNode } from 'react';
import { locales, defaultLocale } from '../lib/i18n';

// Create a context for locale information
export interface LocaleContextProps {
  locale: string;
  changeLocale: (newLocale: string) => void;
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
  const locale = (params?.locale as string) || defaultLocale;

  const changeLocale = (newLocale: string) => {
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
