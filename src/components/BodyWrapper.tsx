'use client';

import { useEffect, useState } from 'react';

interface BodyWrapperProps {
  className: string;
  children: React.ReactNode;
}

/**
 * BodyWrapper component to handle hydration mismatches with body attributes
 * This specifically addresses issues with browser extensions that inject attributes
 * into the body tag, causing hydration mismatches.
 */
export default function BodyWrapper({ className, children }: BodyWrapperProps) {
  // State to track if we're on the client side after hydration is complete
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side after component mounts
    setIsClient(true);
  }, []);

  // During the initial render (server-side), render with only the basic attributes
  // After hydration, render with the suppressHydrationWarning to avoid mismatch warnings
  if (!isClient) {
    return (
      <body className={className}>
        {children}
      </body>
    );
  }

  // After hydration, use suppressHydrationWarning to handle any browser extension additions
  return (
    <body className={className} suppressHydrationWarning>
      {children}
    </body>
  );
}
