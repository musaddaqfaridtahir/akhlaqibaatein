'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function TrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') {
      return;
    }

    const timer = setTimeout(() => {
      const pageTitle = document.title || 'AkhlaqiBaatein.com';
      const pageLocation = window.location.href;

      (window as any).gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: pageLocation,
        page_path: pathname,
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  );
}
