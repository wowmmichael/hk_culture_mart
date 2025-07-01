'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from "@/hooks/useTranslations";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function IPPartnershipsPage() {
  const { t } = useTranslations();
  const params = useParams();
  const locale = params?.locale || 'zh-TW';
  
  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    ipType: '',
    message: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here in a real implementation
    alert('Thank you for your interest! Our team will contact you soon.');
  };
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96">
        <Image
          src="/images/ip-partnerships-banner.jpg"
          alt={t('ipPartnerships.title')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('ipPartnerships.title')}</h1>
            <p className="text-white text-lg md:text-xl">{t('ipPartnerships.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('ipPartnerships.header')}</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            {t('ipPartnerships.description')}
          </p>
        </div>
        
        {/* Mainland China IPs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image 
              src="/images/mainland-ips.jpg" 
              alt={t('ipPartnerships.sections.mainlandIPs.title')} 
              fill 
              className="object-cover" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('ipPartnerships.sections.mainlandIPs.title')}</h3>
            <p className="text-gray-700 mb-6">
              {t('ipPartnerships.sections.mainlandIPs.description')}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h4 className="font-medium text-lg mb-3 text-gray-800">{t('ipPartnerships.partnerWithUs')}</h4>
              <ul className="space-y-2">
                {[0, 1, 2, 3].map(index => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>{t(`ipPartnerships.sections.mainlandIPs.benefits.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* International IPs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="md:order-2 relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image 
              src="/images/overseas-ips.jpg" 
              alt={t('ipPartnerships.sections.overseasIPs.title')} 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('ipPartnerships.sections.overseasIPs.title')}</h3>
            <p className="text-gray-700 mb-6">
              {t('ipPartnerships.sections.overseasIPs.description')}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h4 className="font-medium text-lg mb-3 text-gray-800">{t('ipPartnerships.partnerWithUs')}</h4>
              <ul className="space-y-2">
                {[0, 1, 2, 3].map(index => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>{t(`ipPartnerships.sections.overseasIPs.benefits.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Collaboration Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">{t('ipPartnerships.sections.collaboration.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map(index => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-xl mb-3 text-gray-800">{t(`ipPartnerships.sections.collaboration.options.${index}.title`)}</h4>
                <p className="text-gray-700">
                  {t(`ipPartnerships.sections.collaboration.options.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Success Stories Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">{t('ipPartnerships.successStories')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Success story cards would be populated here */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-64 flex items-center justify-center">
              <p className="text-gray-500 italic text-center">Success story case study #1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-64 flex items-center justify-center">
              <p className="text-gray-500 italic text-center">Success story case study #2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-64 flex items-center justify-center">
              <p className="text-gray-500 italic text-center">Success story case study #3</p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('ipPartnerships.contactUs')}</h3>
          </div>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ipType" className="block text-sm font-medium text-gray-700 mb-1">IP Type</label>
                  <select
                    id="ipType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    value={formData.ipType}
                    onChange={e => setFormData({...formData, ipType: e.target.value})}
                    required
                  >
                    <option value="">Select IP Type</option>
                    <option value="mainland">Mainland China IP</option>
                    <option value="international">International IP</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                >
                  {t('ipPartnerships.contactButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
