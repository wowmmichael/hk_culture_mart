'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { useMemo } from 'react';

export default function ToysPage() {
  const { t, locale } = useTranslations();
  const params = useParams();
  const currentLocale = params?.locale || 'zh-TW';
  
  // Toy product data with translations
  const toys = useMemo(() => [
    {
      id: "plush-panda",
      title: t('toys.product1.title'),
      description: t('toys.product1.description'),
      imageUrl: "/images/plush-panda.jpg"
    },
    {
      id: "panda-keychain",
      title: t('toys.product2.title'),
      description: t('toys.product2.description'),
      imageUrl: "/images/panda-keychain.jpg"
    },
    {
      id: "panda-shirt",
      title: t('toys.product3.title'),
      description: t('toys.product3.description'),
      imageUrl: "/images/panda-green-shirt.jpg"
    },
    {
      id: "black-panda",
      title: t('toys.product4.title'),
      description: t('toys.product4.description'),
      imageUrl: "/images/black-panda.jpg"
    },
    {
      id: "white-panda",
      title: t('toys.product5.title'),
      description: t('toys.product5.description'),
      imageUrl: "/images/white-panda.jpg"
    },
  ], [t]);
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/toys-banner-low.jpg"
          alt={t('nav.toys')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('nav.toys')}</h1>
            <p className="text-white text-lg">{t('toys.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toys.map(toy => (
            <ProductCard
              key={toy.id}
              id={toy.id}
              title={toy.title}
              description={toy.description}
              imageUrl={toy.imageUrl}
              href={`/${currentLocale}/toys/${toy.id}`}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
