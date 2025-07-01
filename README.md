This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying files in:

- `src/app/[locale]/page.tsx` - The main localized page component  
- `src/components/` - Reusable UI components

The page auto-updates as you edit the files.

## Internationalization (i18n)

This project uses a unified approach for handling translations in both client and server components:

### Translation Resources

All translations are stored in JSON files under the `public/locales/` directory:

- `public/locales/zh-TW/common.json` - Traditional Chinese translations
- `public/locales/zh-CN/common.json` - Simplified Chinese translations
- `public/locales/en/common.json` - English translations

### Core i18n System

The core internationalization system is defined in `src/i18n.ts`, providing:

- Type definitions for locales and translation keys
- Helper functions for path localization
- Server-side translation utilities

### Using Translations

#### In Client Components

```tsx
'use client';

import { useTranslations } from '@/hooks/useTranslations';

export default function MyClientComponent() {
  const { t, locale } = useTranslations();
  
  return <h1>{t('site.title')}</h1>;
}
```

#### In Server Components

```tsx
import { Locale } from '@/i18n';
import { createTranslator } from '@/lib/server-translation';

export default function MyServerComponent({ params }: { params: { locale: string } }) {
  const t = createTranslator(params.locale as Locale);
  
  return <h1>{t('site.title')}</h1>;
}
```

#### Direct Access in Server Components

You can also use the translation functions directly from the i18n module:

```tsx
import { getTranslation, Locale } from '@/i18n';

export default function AnotherServerComponent({ params }: { params: { locale: string } }) {
  const title = getTranslation(params.locale as Locale, 'site.title');
  
  return <h1>{title}</h1>;
}
```

### Managing Translations

To add new translations:

1. Add new keys to all locale files in `public/locales/`
2. Use nested objects for better organization (e.g., `site.title`, `nav.home`)
3. Access translations using the dot notation (e.g., `t('site.title')`)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
