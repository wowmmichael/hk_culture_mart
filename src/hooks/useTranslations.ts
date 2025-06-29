'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';

// Default translations
const translations = {
  'zh-TW': {
    'nav.home': '首頁',
    'nav.toys': '玩具',
    'nav.culture': '文創文旅',
    'nav.christmas': '聖誕節',
    'nav.halloween': '萬聖節',
    'nav.newyear': '贺年礼品',
    'nav.about': '關於我們',
    'site.title': '香岛文化',
    'site.description': '香港本地產品的多元市集，分享香港文化與創意'
  },
  'zh-CN': {
    'nav.home': '首页',
    'nav.toys': '玩具',
    'nav.culture': '文创文旅',
    'nav.christmas': '圣诞节',
    'nav.halloween': '万圣节',
    'nav.newyear': '贺年礼品',
    'nav.about': '关于我们',
    'site.title': '香岛文化',
    'site.description': '香港本地产品的多元市集，分享香港文化与创意'
  },
  'en': {
    'nav.home': 'Home',
    'nav.toys': 'Toys',
    'nav.culture': 'Cultural & Travel',
    'nav.christmas': 'Christmas',
    'nav.halloween': 'Halloween',
    'nav.newyear': 'New Year Gifts',
    'nav.about': 'About Us',
    'site.title': 'Island Cult',
    'site.description': 'A diverse marketplace for Hong Kong local products, sharing Hong Kong culture and creativity'
  }
};

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh-TW';
  
  const t = useMemo(() => {
    return (key: string) => {
      const localeDict = translations[locale as keyof typeof translations] || translations['zh-TW'];
      return localeDict[key as keyof typeof localeDict] || key;
    };
  }, [locale]);
  
  return { t, locale };
}
