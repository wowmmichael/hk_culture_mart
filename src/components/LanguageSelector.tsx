'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Locale, getLocaleNames } from '@/i18n';

// Get language options from the i18n utility
const localeNames = getLocaleNames();
const languages = Object.entries(localeNames).map(([code, name]) => ({ 
  code: code as Locale, 
  name 
}));

export default function LanguageSelector() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = (params?.locale as Locale) || 'zh-TW';
  const [isOpen, setIsOpen] = useState(false);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && !(event.target as Element).closest('.language-selector')) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  // Change language handler
  const changeLanguage = (locale: Locale) => {
    // Get the path without the locale prefix
    const currentPath = pathname || '';
    const segments = currentPath.split('/').filter(Boolean);
    
    // If there's more than the locale in the path, keep the rest
    const routePath = segments.length > 1 ? `/${segments.slice(1).join('/')}` : '';
    
    // Navigate to the same page but with the new locale
    router.push(`/${locale}${routePath}`);
    setIsOpen(false);
  };
  
  // Get current language display name
  const currentLanguage = languages.find(lang => lang.code === currentLocale)?.name || currentLocale;
  
  return (
    <div className="language-selector relative">
      <button 
        className="flex items-center px-3 py-2 text-gray-800 hover:text-red-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {/* Globe Icon */}
        <Image 
          src="/globe.svg" 
          alt="Language" 
          width={20}
          height={20}
          className="mr-2"
          aria-hidden="true"
        />
        <span className="mr-1">{currentLanguage}</span>
        <svg 
          className="w-4 h-4 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-1 w-32 z-50 border border-gray-200">
          {languages.map(language => (
            <button
              key={language.code}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language.code === currentLocale 
                  ? 'bg-gray-100 text-red-600 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => changeLanguage(language.code)}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
