'use client';

import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  position: 'header' | 'in-article' | 'sidebar';
  adClient?: string;
  adSlotId?: string;
  className?: string;
}

export default function AdSlot({
  position,
  adClient,
  adSlotId,
  className = '',
}: AdSlotProps) {
  const clientId = (adClient || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '').trim();
  const slotId = (adSlotId || '').trim();
  const pushedRef = useRef(false);

  const isValidClient =
    Boolean(clientId) &&
    /^ca-pub-\d{10,}$/.test(clientId) &&
    !clientId.includes('XXXX') &&
    !/ca-pub-0{6,}/i.test(clientId) &&
    !clientId.includes('123456') &&
    !slotId.includes('XXXX');

  useEffect(() => {
    if (!isValidClient || pushedRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        // @ts-expect-error Google AdSense global script object
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch (err) {
      // Ignore adsbygoogle race condition / blocked errors
      if (process.env.NODE_ENV === 'development') {
        console.warn('AdSense push notice:', err);
      }
    }
  }, [isValidClient]);

  // If no valid approved AdSense Client ID is configured, return null completely.
  // Never render empty boxes, dashed borders, or blank heights that trigger AdSense policy rejections.
  if (!isValidClient) {
    return null;
  }

  // CLS-safe dimension mappings to prevent Google Core Web Vitals layout shift
  const dimensionStyles = {
    header: 'min-h-[90px] max-w-[728px] my-6',
    'in-article': 'min-h-[250px] max-w-[650px] my-8',
    sidebar: 'min-h-[300px] w-full my-4',
  }[position];

  return (
    <div
      className={`mx-auto w-full flex flex-col items-center justify-center p-2 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all ${dimensionStyles} ${className}`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
