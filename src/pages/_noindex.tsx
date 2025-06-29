import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NoIndex() {
  const _ = useRouter();

  useEffect(() => {
    // Redirect immediately to avoid conflict with App Router
    window.location.href = '/zh-TW';
  }, []);

  return null;
}
