'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function CulturePage() {
  const { t } = useTranslations();
  const params = useParams();
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/culture-banner.jpg"
          alt={t('nav.culture')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('nav.culture')}</h1>
            <p className="text-white text-lg">{t('culture.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('culture.header')}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('culture.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('culture.featureTitle')}</h3>
            <p className="text-gray-700 mb-4">
              {t('culture.featureDesc1')}
            </p>
            <p className="text-gray-700">
              {t('culture.featureDesc2')}
            </p>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/culture-feature.jpg" 
              alt={t('culture.featureAlt')} 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('culture.comingSoonTitle')}</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            {t('culture.comingSoonDesc')}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
