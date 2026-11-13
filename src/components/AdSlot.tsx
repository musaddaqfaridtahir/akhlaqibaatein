'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface AdSlotProps {
  position: 'header' | 'in-article' | 'sidebar' | 'footer';
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
  const { language } = useLanguage();
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
      if (process.env.NODE_ENV === 'development') {
        console.warn('AdSense push notice:', err);
      }
    }
  }, [isValidClient]);

  // Compliance guard: never render empty placeholder ad boxes when AdSense ID is unset/invalid
  if (!isValidClient) {
    return null;
  }

  // Fixed CLS-safe height reservations (>= 250px for primary rectangular/in-article units)
  const dimensionStyles: Record<AdSlotProps['position'], string> = {
    header: 'min-h-[90px] sm:min-h-[250px] max-w-[728px] my-6',
    'in-article': 'min-h-[250px] max-w-[728px] my-8',
    sidebar: 'min-h-[300px] w-full my-4',
    footer: 'min-h-[250px] max-w-[728px] my-8',
  };

  const labelText =
    language === 'ur' ? 'اشتہار • Advertisement' : 'Advertisement';

  return (
    <aside
      className={`mx-auto w-full flex flex-col items-center justify-center p-3 rounded-2xl border border-stone-200/80 dark:border-emerald-800/40 bg-white/90 dark:bg-[#0d1b16] transition-all ${dimensionStyles[position]} ${className}`}
      aria-label="Advertisement"
    >
      <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-emerald-300/50 mb-1.5 select-none">
        {labelText}
      </span>
      <div className="w-full flex-1 flex items-center justify-center min-h-[210px]">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
