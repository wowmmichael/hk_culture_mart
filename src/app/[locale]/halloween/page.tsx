'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function HalloweenPage() {
  const { t } = useTranslations();
  const params = useParams();
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/halloween-banner.jpg"
          alt={t('nav.halloween')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('nav.halloween')}</h1>
            <p className="text-white text-lg">{t('halloween.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('halloween.header')}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('halloween.description')}
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 p-8 rounded-lg mb-12 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('halloween.featuredTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
              <h4 className="font-medium text-lg mb-2 text-gray-800">{t('halloween.category1')}</h4>
              <p className="text-gray-700">
                {t('halloween.category1Desc')}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
              <h4 className="font-medium text-lg mb-2 text-gray-800">{t('halloween.category2')}</h4>
              <p className="text-gray-700">
                {t('halloween.category2Desc')}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
              <h4 className="font-medium text-lg mb-2 text-gray-800">{t('halloween.category3')}</h4>
              <p className="text-gray-700">
                {t('halloween.category3Desc')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-red-600 mb-6">
            {t('halloween.availability')}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
