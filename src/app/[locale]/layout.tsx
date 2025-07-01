import { getStaticParams } from "@/i18n";

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
