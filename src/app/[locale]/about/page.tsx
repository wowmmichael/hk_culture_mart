'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useTranslations();
  const params = useParams();
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/hero-image.jpg"
          alt={t('nav.about')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('nav.about')}</h1>
            <p className="text-white text-lg">{t('about.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('about.mission')}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('about.missionText')}
          </p>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('about.story')}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('about.storyText1')}
          </p>
          <p className="text-lg text-gray-700 mb-8">
            {t('about.storyText2')}
          </p>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('about.values')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('about.value1')}</h3>
              <p className="text-gray-700">
                {t('about.value1Text')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('about.value2')}</h3>
              <p className="text-gray-700">
                {t('about.value2Text')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('about.value3')}</h3>
              <p className="text-gray-700">
                {t('about.value3Text')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('about.value4')}</h3>
              <p className="text-gray-700">
                {t('about.value4Text')}
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('about.contact')}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {t('about.address')}
            </p>
            <p className="text-lg text-gray-700 mb-6 flex items-center justify-center">
              <span>📞 {t('about.phone')}</span>
              <span className="mx-3 text-gray-400">|</span>
              <span>✉️ {t('about.email')}</span>
            </p>
            
            <div className="mt-6">
              <p className="text-lg text-gray-700 mb-4">{t('about.scanQR')}</p>
              <div className="flex justify-center space-x-8 items-center">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-2">
                    <Image 
                      src="/images/whatsapp.jpg" 
                      alt={`${t('about.whatsapp')} QR Code`} 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base text-gray-700">{t('about.whatsapp')}</p>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-2">
                    <Image 
                      src="/images/wechat.jpg" 
                      alt={`${t('about.wechat')} QR Code`} 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base text-gray-700">{t('about.wechat')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
