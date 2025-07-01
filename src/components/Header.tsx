'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { useTranslations } from '@/hooks/useTranslations';
import { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh-TW';
  const localizedHref = `/${locale}${href === '/' ? '' : href}`;
  
  return (
    <Link 
      href={localizedHref} 
      className={`px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-100 transition-colors font-medium ${className}`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const { t, locale } = useTranslations();
  const [translations, setTranslations] = useState<Record<string, string>>({
    siteTitle: '香岛文化',
    home: '首頁',
    hkculture: '港式文化',
    culture: '文創文旅',
    hkfestival: '節慶活動',
    ipPartnerships: 'IP合作',
    about: '關於我們',
  });

  useEffect(() => {
    function loadTranslations() {
      const nav = {
        siteTitle: String(t('site.title')),
        home: String(t('nav.home')),
        hkculture: String(t('nav.hkculture')),
        culture: String(t('nav.culture')),
        hkfestival: String(t('nav.hkfestival')),
        ipPartnerships: String(t('nav.ipPartnerships')),
        about: String(t('nav.about'))
      };
      setTranslations(nav);
    }
    
    loadTranslations();
  }, [t, locale]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <NavLink href="/" className="font-bold text-xl text-red-700">{translations.siteTitle}</NavLink>
          
          <div className="flex items-center space-x-1">
            <NavLink href="/">{translations.home}</NavLink>
            <NavLink href="/hkculture">{translations.hkculture}</NavLink>
            <NavLink href="/culture">{translations.culture}</NavLink>
            <NavLink href="/hkfestival">{translations.hkfestival}</NavLink>
            <NavLink href="/ip-partnerships">{translations.ipPartnerships}</NavLink>
            <NavLink href="/about">{translations.about}</NavLink>
          </div>
          
          <div>
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </header>
  );
}
