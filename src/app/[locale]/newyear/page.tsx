'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function NewYearPage() {
  const { t } = useTranslations();
  const params = useParams();
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/newyear-banner.jpg"
          alt={t('nav.newyear')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('newyear.title')}</h1>
            <p className="text-white text-lg">{t('newyear.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('newyear.header')}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('newyear.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-red-700">{t('newyear.category1')}</h3>
            <p className="text-gray-700">
              {t('newyear.category1Desc')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-red-700">{t('newyear.category2')}</h3>
            <p className="text-gray-700">
              {t('newyear.category2Desc')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-red-700">{t('newyear.category3')}</h3>
            <p className="text-gray-700">
              {t('newyear.category3Desc')}
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-red-600 mb-6">
            {t('newyear.availability')}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
