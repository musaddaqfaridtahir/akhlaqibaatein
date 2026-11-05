'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/types';

function computeFormattedDate(date: Date, language: Language, adjustmentDays = -1): string {
  const adjustedDate = new Date(date);
  adjustedDate.setDate(adjustedDate.getDate() + adjustmentDays);

  let hMonthNum = 5;
  let hDay = '24';
  let hYear = '1448';

  try {
    const hijriFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const parts = hijriFormatter.formatToParts(adjustedDate);
    hMonthNum = parseInt(parts.find((p) => p.type === 'month')?.value || '1', 10);
    hDay = parts.find((p) => p.type === 'day')?.value || '1';
    hYear = parts.find((p) => p.type === 'year')?.value || '1448';
  } catch {
    // Graceful fallback
  }

  const dayOfWeek = date.getDay();
  const gregDay = date.getDate();
  const gregMonthNum = date.getMonth();
  const gregYear = date.getFullYear();

  if (language === 'ur') {
    const daysUr = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
    const monthsUr = [
      'جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون',
      'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر',
    ];
    const islamicMonthsUr = [
      'محرم الحرام', 'صفر المظفر', 'ربیع الاول', 'ربیع الثانی',
      'جمادی الاول', 'جمادی الثانی', 'رجب المرجب', 'شعبان المعظم',
      'رمضان المبارک', 'شوال المکرم', 'ذی القعدہ', 'ذی الحجہ',
    ];
    return `${daysUr[dayOfWeek]}، ${hDay} ${islamicMonthsUr[hMonthNum - 1] || 'جمادی الاول'} ${hYear}ھ، ${gregDay} ${monthsUr[gregMonthNum]}، ${gregYear}ء`;
  }

  if (language === 'ro') {
    const daysRo = ['Itwar', 'Peer', 'Mangal', 'Budh', 'Jumerat', 'Jummah', 'Hafta'];
    const monthsRo = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const islamicMonthsRo = [
      'Muharram', 'Safar', 'Rabi-ul-Awwal', 'Rabi-us-Sani',
      'Jumada-al-Awwal', 'Jumada-us-Sani', 'Rajab', 'Shaban',
      'Ramadan', 'Shawwal', 'Zilqad', 'Zilhajj',
    ];
    return `${daysRo[dayOfWeek]}, ${hDay} ${islamicMonthsRo[hMonthNum - 1] || 'Jumada-al-Awwal'} ${hYear} AH, ${gregDay} ${monthsRo[gregMonthNum]}, ${gregYear}`;
  }

  // English
  const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const islamicMonthsEn = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
    'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah',
  ];
  return `${daysEn[dayOfWeek]}, ${hDay} ${islamicMonthsEn[hMonthNum - 1] || 'Jumada al-Awwal'} ${hYear} AH, ${monthsEn[gregMonthNum]} ${gregDay}, ${gregYear}`;
}

export default function IslamicDateBar() {
  const { language } = useLanguage();
  const [dateString, setDateString] = useState<string>(() =>
    computeFormattedDate(new Date(), language)
  );

  useEffect(() => {
    setDateString(computeFormattedDate(new Date(), language));
  }, [language]);

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
