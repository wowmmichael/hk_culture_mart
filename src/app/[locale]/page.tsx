'use client';

import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocalizedHomePage() {
  const { t, locale } = useTranslations();
  const params = useParams();
  const [title, setTitle] = useState("香岛文化");
  const [description, setDescription] = useState("發掘香港本地文化與創意，支持本地創作者");
  const [exploreText, setExploreText] = useState("探索產品");

  useEffect(() => {
    function loadTranslations() {
      setTitle(String(t('site.title')));
      setDescription(String(t('site.description')));
      setExploreText(String(t('nav.toys')));
    }
    loadTranslations();
  }, [t, locale]);

  // Ensure all links include the locale
  const currentLocale = params?.locale || 'zh-TW';
  const localePrefix = `/${currentLocale}`;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-700">{title}</h1>
              <p className="text-xl text-gray-700 mb-8">{description}</p>
              <Link 
                href={`${localePrefix}/toys`}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {exploreText}
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/images/hero-image.jpg" 
                alt={title}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">主要分類</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href={`${localePrefix}/toys`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/toys-banner-low.jpg" 
                    alt="玩具"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">玩具</h3>
                  <p className="text-gray-600">探索香港特色玩具和收藏品</p>
                </div>
              </div>
            </Link>
            <Link href={`${localePrefix}/culture`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/culture-banner-low.jpg" 
                    alt="文創文旅"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">文創文旅</h3>
                  <p className="text-gray-600">發現香港文化創意和旅遊產品</p>
                </div>
              </div>
            </Link>
            <Link href={`${localePrefix}/newyear`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/newyear-banner-low.jpg" 
                    alt="農曆新年"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">農曆新年</h3>
                  <p className="text-gray-600">新年特色禮品和裝飾</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
