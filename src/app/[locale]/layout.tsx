import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_HK } from "next/font/google";
import { getStaticParams } from "@/lib/i18n";

// We're not using the dynamic generateMetadata with params
// since it causes issues with how Next.js handles dynamic routes
// Instead, we'll use static metadata that will apply to all locales

// Base metadata that applies to all locales
export const metadata: Metadata = {
  title: "香岛文化 | Island Cult",
  description: "香港本地產品的多元市集，分享香港文化與創意",
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return getStaticParams();
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // We can safely use params.locale here for language attribute
  // but should avoid using it for metadata which causes the error
  return children;
}
