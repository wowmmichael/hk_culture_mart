'use client';

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { useParams } from "next/navigation";

export default function Footer() {
  const { t } = useTranslations();
  const params = useParams();
  const currentLocale = params?.locale || 'zh-TW';
  const localePrefix = `/${currentLocale}`;

  return (
    <footer className="bg-white pt-12 pb-8 mt-12 border-t border-gray-100 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-red-700">{t('site.title')}</h3>
            <p className="text-gray-700 text-sm">
              {t('site.description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href={`${localePrefix}`} className="text-gray-700 hover:text-red-600">{t('nav.home')}</Link></li>
              <li><Link href={`${localePrefix}/toys`} className="text-gray-700 hover:text-red-600">{t('nav.toys')}</Link></li>
              <li><Link href={`${localePrefix}/culture`} className="text-gray-700 hover:text-red-600">{t('nav.culture')}</Link></li>
              <li><Link href={`${localePrefix}/about`} className="text-gray-700 hover:text-red-600">{t('nav.about')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">{t('footer.festivalSpecial')}</h3>
            <ul className="space-y-2">
              <li><Link href={`${localePrefix}/newyear`} className="text-gray-700 hover:text-red-600">{t('nav.newyear')}</Link></li>
              <li><Link href={`${localePrefix}/christmas`} className="text-gray-700 hover:text-red-600">{t('nav.christmas')}</Link></li>
              <li><Link href={`${localePrefix}/halloween`} className="text-gray-700 hover:text-red-600">{t('nav.halloween')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">{t('footer.contactUs')}</h3>
            <p className="text-gray-700 text-sm mb-2">{t('footer.address')}</p>
            <p className="text-gray-700 text-sm flex items-center mb-4">
              <span>📞 {t('footer.phone')}</span>
              <span className="mx-3 text-gray-400">|</span>
              <span>✉️ {t('footer.email')}</span>
            </p>
            
            <div className="mt-4">
              <p className="text-gray-700 text-sm mb-2">{t('footer.scanQR')}</p>
              <div className="flex space-x-4 items-center">
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-1">
                    <Image 
                      src="/images/whatsapp.jpg" 
                      alt={`${t('footer.whatsapp')} QR Code`} 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600">{t('footer.whatsapp')}</p>
                </div>
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-1">
                    <Image 
                      src="/images/wechat.jpg" 
                      alt={`${t('footer.wechat')} QR Code`} 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600">{t('footer.wechat')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
