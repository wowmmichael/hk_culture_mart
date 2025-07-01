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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [exploreText, setExploreText] = useState("");
  const [categoriesTitle, setCategoriesTitle] = useState("");
  const [hkcultureTitle, setHkcultureTitle] = useState("");
  const [hkcultureDesc, setHkcultureDesc] = useState("");
  const [festivalTitle, setFestivalTitle] = useState("");
  const [festivalDesc, setFestivalDesc] = useState("");
  const [ipTitle, setIpTitle] = useState("");
  const [ipDesc, setIpDesc] = useState("");

  useEffect(() => {
    function loadTranslations() {
      setTitle(String(t('site.title')));
      setDescription(String(t('site.description')));
      setExploreText(String(t('home.explore')));
      setCategoriesTitle(String(t('home.categories.title')));
      setHkcultureTitle(String(t('home.categories.hkculture')));
      setHkcultureDesc(String(t('home.categories.hkcultureDesc')));
      setFestivalTitle(String(t('home.categories.festival')));
      setFestivalDesc(String(t('home.categories.festivalDesc')));
      setIpTitle(String(t('home.categories.ipPartnerships')));
      setIpDesc(String(t('home.categories.ipPartnershipsDesc')));
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
                href={`${localePrefix}/hkculture`}
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{categoriesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href={`${localePrefix}/hkculture`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/toys-banner-low.jpg" 
                    alt={hkcultureTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{hkcultureTitle}</h3>
                  <p className="text-gray-600">{hkcultureDesc}</p>
                </div>
              </div>
            </Link>
            <Link href={`${localePrefix}/hkfestival`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/hkfestival-banner.jpg" 
                    alt={festivalTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{festivalTitle}</h3>
                  <p className="text-gray-600">{festivalDesc}</p>
                </div>
              </div>
            </Link>
            <Link href={`${localePrefix}/ip-partnerships`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/ip-partnerships-banner.jpg" 
                    alt={ipTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{ipTitle}</h3>
                  <p className="text-gray-600">{ipDesc}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
