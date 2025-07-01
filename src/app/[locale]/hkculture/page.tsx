'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from '@/hooks/useTranslations';
import MainLayout from '@/components/MainLayout';
import ActionButtons from '@/components/ActionButtons';

export default function HKCulturePage() {
  const { t } = useTranslations();
  const params = useParams();
  const locale = params?.locale || 'zh-TW';

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-red-500 py-16 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image 
            src="/images/hero-image.jpg" 
            alt="Hong Kong Culture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hkculture.title')}</h1>
          <p className="text-xl md:text-2xl max-w-2xl">{t('hkculture.subtitle')}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('hkculture.header')}</h2>
          <p className="text-lg text-gray-600 mb-8">{t('hkculture.description')}</p>
          
          {/* Feature Sections */}
          <div className="space-y-16">
            {/* IP Development Section */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-red-600">{t('hkculture.ipDevelopment')}</h3>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <p className="text-gray-700">{t('hkculture.ipDesc')}</p>
                  <div className="mt-6">
                    <ActionButtons 
                      primaryText={t('hkculture.learnMore')}
                      primaryLink={`/${locale}/culture`}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/toys-banner-low.jpg"
                    alt="Hong Kong IP Development"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </section>

            {/* Travel Culture Section */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-red-600">{t('hkculture.travelCulture')}</h3>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                <div className="md:w-1/2">
                  <p className="text-gray-700">{t('hkculture.travelDesc')}</p>
                  <div className="mt-6">
                    <ActionButtons 
                      primaryText={t('hkculture.learnMore')}
                      primaryLink={`/${locale}/culture`}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/hero-image.jpg"
                    alt="Hong Kong Travel Culture"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Categories Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{t('hkculture.featuredTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-red-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{t('hkculture.category1')}</h3>
                  <p className="text-gray-600">{t('hkculture.category1Desc')}</p>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-amber-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{t('hkculture.category2')}</h3>
                  <p className="text-gray-600">{t('hkculture.category2Desc')}</p>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-blue-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{t('hkculture.category3')}</h3>
                  <p className="text-gray-600">{t('hkculture.category3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
