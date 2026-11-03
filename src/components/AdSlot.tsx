import React from 'react';

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
  const clientId = adClient || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  // If no valid AdSense Client ID is configured, do not render any placeholder or empty container
  if (!clientId || clientId.trim() === '' || clientId.includes('XXXX') || clientId === 'ca-pub-XXXXXXXXXXXXXXXX') {
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
      className={`mx-auto w-full flex flex-col items-center justify-center p-3 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all ${dimensionStyles} ${className}`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={adSlotId || ''}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
