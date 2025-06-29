import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Home() {
  // The middleware will handle the redirect to the appropriate locale
  // This is just a fallback in case middleware doesn't catch it
  redirect('/zh-TW');
}
