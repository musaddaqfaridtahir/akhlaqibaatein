import React from 'react';

interface AdSlotProps {
  position: 'header' | 'in-article' | 'sidebar';
  adClient?: string;
  adSlotId?: string;
  className?: string;
}

export default function AdSlot({
  position,
  adClient = 'ca-pub-XXXXXXXXXXXXXXXX',
  adSlotId = '1234567890',
  className = '',
}: AdSlotProps) {
  // CLS-safe dimension mappings to prevent Google Core Web Vitals layout shift
  const dimensionStyles = {
    header: 'min-h-[90px] max-w-[728px] my-6',
    'in-article': 'min-h-[250px] max-w-[650px] my-8',
    sidebar: 'min-h-[300px] w-full my-4',
  }[position];

  return (
    <div
      className={`mx-auto w-full flex flex-col items-center justify-center p-3 rounded-xl border border-dashed border-emerald-900/20 dark:border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 transition-all ${dimensionStyles} ${className}`}
      aria-label="Advertisement / اشتہار"
    >
      <div className="w-full flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-2 px-1">
        <span>Advertisement</span>
        <span className="font-urdu text-xs leading-none">اشتہار</span>
      </div>

      {/* 
        Google AdSense Unit Placeholder 
        Replace placeholder with active script when approved:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client={adClient}
             data-ad-slot={adSlotId}
             data-ad-format="auto"
             data-full-width-responsive="true" />
      */}
      <div className="flex-1 w-full flex flex-col items-center justify-center text-center p-4 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800">
        <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
          Ad Space ({position}) &bull; AkhlaqiBaatein.com
        </p>
        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-urdu">
          اس جگہ پر گوگل ایڈسینس کے مصدقہ اور شائستہ اشتہارات دکھائے جائیں گے۔
        </p>
      </div>
    </div>
  );
}
