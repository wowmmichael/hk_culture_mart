import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_HK } from "next/font/google";
import { LocaleProvider } from "@/contexts/LocaleContext";
import BodyWrapper from "@/components/BodyWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansHK = Noto_Sans_HK({
  variable: "--font-noto-sans-hk",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "香岛文化 | Island Cult",
  description: "香港本地產品的多元市集，分享香港文化與創意",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: { locale?: string };
}>) {
  const locale = params?.locale || 'zh-TW';
  
  // Set html lang attribute based on locale
  const langAttribute = locale === 'zh-TW' ? 'zh-Hant-HK' : 
                         locale === 'zh-CN' ? 'zh-Hans-CN' : 'en';
                         
  return (
    <html lang={langAttribute}>
      <BodyWrapper
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansHK.variable} antialiased bg-gray-50 font-[family-name:var(--font-noto-sans-hk)]`}
      >
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </BodyWrapper>
    </html>
  );
}
