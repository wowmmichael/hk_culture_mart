'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function HKFestivalPage() {
  const { t } = useTranslations();
  const params = useParams();
  const locale = params?.locale || 'zh-TW';
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/hkfestival-banner.jpg"
          alt={t('hkfestival.title')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('hkfestival.title')}</h1>
            <p className="text-white text-lg">{t('hkfestival.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('hkfestival.header')}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('hkfestival.description')}
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 p-8 rounded-lg mb-12 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">{t('hkfestival.featuredTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h4 className="font-medium text-lg mb-2 text-gray-800">{t('hkfestival.category1')}</h4>
              <p className="text-gray-700 mb-4">
                {t('hkfestival.category1Desc')}
              </p>
              <Link href={`/${locale}/hkfestival/newyear`} className="text-red-600 hover:text-red-700 font-medium">
                {t('newyear.title')} →
              </Link>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h4 className="font-medium text-lg mb-2 text-gray-800">{t('hkfestival.category2')}</h4>
              <p className="text-gray-700 mb-4">
                {t('hkfestival.category2Desc')}
              </p>
              <div className="space-y-2">
                <Link href={`/${locale}/hkfestival/christmas`} className="block text-red-600 hover:text-red-700 font-medium">
                  {t('nav.festival.christmas')} →
                </Link>
                <Link href={`/${locale}/hkfestival/halloween`} className="block text-red-600 hover:text-red-700 font-medium">
                  {t('nav.festival.halloween')} →
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h4 className="font-medium text-lg mb-2 text-gray-800">{t('hkfestival.category3')}</h4>
              <p className="text-gray-700">
                {t('hkfestival.category3Desc')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Lunar New Year Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="relative h-48">
              <Image 
                src="/images/newyear-banner.jpg" 
                alt={t('newyear.title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{t('newyear.title')}</h3>
              <p className="text-gray-700 text-sm mb-3">{t('newyear.subtitle')}</p>
              <Link 
                href={`/${locale}/hkfestival/newyear`}
                className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                {t('home.explore')}
              </Link>
            </div>
          </div>
          
          {/* Christmas Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="relative h-48">
              <Image 
                src="/images/christmas-banner.jpg" 
                alt={t('nav.festival.christmas')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{t('nav.festival.christmas')}</h3>
              <p className="text-gray-700 text-sm mb-3">{t('christmas.subtitle')}</p>
              <Link 
                href={`/${locale}/hkfestival/christmas`}
                className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                {t('home.explore')}
              </Link>
            </div>
          </div>
          
          {/* Halloween Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="relative h-48">
              <Image 
                src="/images/halloween-banner.jpg" 
                alt={t('nav.festival.halloween')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{t('nav.festival.halloween')}</h3>
              <p className="text-gray-700 text-sm mb-3">{t('halloween.subtitle')}</p>
              <Link 
                href={`/${locale}/hkfestival/halloween`}
                className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                {t('home.explore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
