import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This file is required for Next.js to recognize the pages directory
// but we're primarily using the App Router
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    // If someone somehow lands on the root path in Pages Router, redirect to default locale
    if (router.pathname === '/') {
      window.location.href = '/zh-TW';
    }
  }, [router.pathname]);
  
  // Render the component properly for any valid Pages Router routes
  return <Component {...pageProps} />;
}
