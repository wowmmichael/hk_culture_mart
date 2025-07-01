import { Locale } from '@/i18n';
import { createTranslator } from '@/lib/server-translation';

/**
 * Example server component that uses translations
 * This is just for demonstration purposes
 */
export default function ServerTranslationExample({ locale }: { locale: Locale }) {
  // Create a translator for the given locale
  const t = createTranslator(locale);
  
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold">{t('site.title')}</h2>
      <p>{t('site.description')}</p>
      
      <div className="mt-4">
        <p><strong>This is a server component using translations</strong></p>
        <p>Current locale: {locale}</p>
      </div>
    </div>
  );
}
