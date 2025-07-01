'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function ChristmasPage() {
  const { t } = useTranslations();
  const params = useParams();
  const locale = params?.locale || 'zh-TW';
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/christmas-banner.jpg"
          alt={t('nav.festival.christmas')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('nav.festival.christmas')}</h1>
            <p className="text-white text-lg">{t('christmas.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href={`/${locale}`} className="hover:text-red-600">{t('nav.home')}</Link>
          <span className="mx-2">›</span>
          <Link href={`/${locale}/hkfestival`} className="hover:text-red-600">{t('nav.hkfestival')}</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">{t('nav.festival.christmas')}</span>
        </nav>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('christmas.header')}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('christmas.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/christmas-feature.jpg" 
              alt={t('christmas.featureAlt')} 
              fill 
              className="object-cover" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('christmas.featureTitle')}</h3>
            <p className="text-gray-700 mb-4">
              {t('christmas.featureDesc1')}
            </p>
            <p className="text-gray-700">
              {t('christmas.featureDesc2')}
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-green-600 mb-6">
            {t('christmas.availability')}
          </p>
          <Link 
            href={`/${locale}/hkfestival`}
            className="inline-block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            {t('hkfestival.exploreMore')}
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
