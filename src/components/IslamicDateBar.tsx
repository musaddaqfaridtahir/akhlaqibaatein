'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { computeFormattedDate } from '@/lib/dateUtils';

export default function IslamicDateBar() {
  const { language } = useLanguage();
  const dateString = useMemo(
    () => computeFormattedDate(new Date(), language),
    [language]
  );

  const quickLinks =
    language === 'ur'
      ? [
          { href: '/category/ahkam-e-khuda', label: 'آیت کریمہ' },
          { href: '/category/irshadat-e-nabawi', label: 'حدیث نبوی ﷺ' },
          { href: '/category/aqwal-e-sahaba', label: 'اقوالِ زریں' },
        ]
      : language === 'ro'
      ? [
          { href: '/category/ahkam-e-khuda', label: 'Ayat-e-Kareema' },
          { href: '/category/irshadat-e-nabawi', label: 'Hadith-e-Nabawi ﷺ' },
          { href: '/category/aqwal-e-sahaba', label: 'Aqwal-e-Zareen' },
        ]
      : [
          { href: '/category/ahkam-e-khuda', label: 'Quranic Verses' },
          { href: '/category/irshadat-e-nabawi', label: 'Prophetic Hadith ﷺ' },
          { href: '/category/aqwal-e-sahaba', label: 'Golden Wisdom' },
        ];

  return (
    <section
      aria-label="Islamic & Gregorian Date Bar"
      className="w-full bg-white/95 dark:bg-slate-900/95 border-b border-stone-200/90 dark:border-slate-800 transition-colors shadow-2xs"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex flex-col items-center justify-center gap-0.5 sm:gap-1 text-center">
        {/* Date Line: Day, Hijri Date, Gregorian Date */}
        <p
          suppressHydrationWarning
          className={`text-xs sm:text-sm font-bold text-[#9E3B3B] dark:text-amber-300 leading-normal ${
            language === 'ur' ? 'font-urdu text-sm sm:text-base' : 'tracking-wide'
          }`}
        >
          {dateString}
        </p>

        {/* Quick Category Anchors */}
        <nav
          aria-label="Quick Category Links"
          className={`flex items-center justify-center flex-wrap gap-x-2.5 sm:gap-x-4 text-xs sm:text-sm ${
            language === 'ur' ? 'font-urdu text-sm sm:text-base' : 'font-medium'
          }`}
        >
          {quickLinks.map((item, idx) => (
            <React.Fragment key={item.href}>
              {idx > 0 && (
                <span
                  aria-hidden="true"
                  className="text-stone-300 dark:text-slate-600 select-none font-sans"
                >
                  —
                </span>
              )}
              <Link
                href={item.href}
                className="text-emerald-800 hover:text-emerald-950 dark:text-emerald-400 dark:hover:text-emerald-200 font-bold transition-colors underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
}
