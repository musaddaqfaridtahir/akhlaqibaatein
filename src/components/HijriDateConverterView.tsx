'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  Copy,
  Check,
  Compass,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getKarachiNow } from '@/lib/dateUtils';

interface HijriParts {
  hYear: number;
  hMonth: number;
  hDay: number;
}

const ISLAMIC_MONTHS = [
  { id: 1, ur: 'محرم الحرام', ro: 'Muharram', en: 'Muharram' },
  { id: 2, ur: 'صفر المظفر', ro: 'Safar', en: 'Safar' },
  { id: 3, ur: 'ربیع الاول', ro: 'Rabi-ul-Awwal', en: 'Rabi al-Awwal' },
  { id: 4, ur: 'ربیع الثانی', ro: 'Rabi-us-Sani', en: 'Rabi al-Thani' },
  { id: 5, ur: 'جمادی الاول', ro: 'Jumada-al-Awwal', en: 'Jumada al-Awwal' },
  { id: 6, ur: 'جمادی الثانی', ro: 'Jumada-us-Sani', en: 'Jumada al-Thani' },
  { id: 7, ur: 'رجب المرجب', ro: 'Rajab', en: 'Rajab' },
  { id: 8, ur: 'شعبان المعظم', ro: 'Shaban', en: 'Shaban' },
  { id: 9, ur: 'رمضان المبارک', ro: 'Ramadan', en: 'Ramadan' },
  { id: 10, ur: 'شوال المکرم', ro: 'Shawwal', en: 'Shawwal' },
  { id: 11, ur: 'ذی القعدہ', ro: 'Zilqad', en: 'Dhu al-Qadah' },
  { id: 12, ur: 'ذی الحجہ', ro: 'Zilhajj', en: 'Dhu al-Hijjah' },
];

const GREG_MONTHS = [
  { id: 0, ur: 'جنوری', ro: 'January', en: 'January' },
  { id: 1, ur: 'فروری', ro: 'February', en: 'February' },
  { id: 2, ur: 'مارچ', ro: 'March', en: 'March' },
  { id: 3, ur: 'اپریل', ro: 'April', en: 'April' },
  { id: 4, ur: 'مئی', ro: 'May', en: 'May' },
  { id: 5, ur: 'جون', ro: 'June', en: 'June' },
  { id: 6, ur: 'جولائی', ro: 'July', en: 'July' },
  { id: 7, ur: 'اگست', ro: 'August', en: 'August' },
  { id: 8, ur: 'ستمبر', ro: 'September', en: 'September' },
  { id: 9, ur: 'اکتوبر', ro: 'October', en: 'October' },
  { id: 10, ur: 'نومبر', ro: 'November', en: 'November' },
  { id: 11, ur: 'دسمبر', ro: 'December', en: 'December' },
];

const DAYS_NAMES = [
  { id: 0, ur: 'اتوار', ro: 'Itwar', en: 'Sunday' },
  { id: 1, ur: 'پیر', ro: 'Peer', en: 'Monday' },
  { id: 2, ur: 'منگل', ro: 'Mangal', en: 'Tuesday' },
  { id: 3, ur: 'بدھ', ro: 'Budh', en: 'Wednesday' },
  { id: 4, ur: 'جمعرات', ro: 'Jumerat', en: 'Thursday' },
  { id: 5, ur: 'جمعہ', ro: 'Jummah', en: 'Friday' },
  { id: 6, ur: 'ہفتہ', ro: 'Hafta', en: 'Saturday' },
];

function hijriToJDN(year: number, month: number, day: number): number {
  return (
    Math.floor((11 * year + 3) / 30) +
    354 * year +
    30 * month -
    Math.floor((month - 1) / 2) +
    day +
    1948440 -
    385
  );
}

function jdnToGregorian(jd: number): Date {
  let l = jd + 68569;
  const n = Math.floor((4 * l) / 146097);
  l = l - Math.floor((146097 * n + 3) / 4);
  const i = Math.floor((4000 * (l + 1)) / 1461001);
  l = l - Math.floor((1461 * i) / 4) + 31;
  const j = Math.floor((80 * l) / 2447);
  const day = l - Math.floor((2447 * j) / 80);
  l = Math.floor(j / 11);
  const month = j + 2 - 12 * l;
  const year = 100 * (n - 49) + i + l;
  return new Date(year, month - 1, day);
}

function getHijriPartsFromDate(date: Date, adj = -1): HijriParts {
  const d = new Date(date);
  d.setDate(d.getDate() + adj);
  try {
    const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const parts = formatter.formatToParts(d);
    return {
      hDay: parseInt(parts.find((p) => p.type === 'day')?.value || '1', 10),
      hMonth: parseInt(parts.find((p) => p.type === 'month')?.value || '1', 10),
      hYear: parseInt(parts.find((p) => p.type === 'year')?.value || '1448', 10),
    };
  } catch {
    return { hDay: 1, hMonth: 1, hYear: 1448 };
  }
}

function convertHijriToGregorianDate(hYear: number, hMonth: number, hDay: number, adj = -1): Date {
  const jd = hijriToJDN(hYear, hMonth, hDay);
  const baseDate = jdnToGregorian(jd);
  for (let offset = -4; offset <= 4; offset++) {
    const testDate = new Date(baseDate);
    testDate.setDate(testDate.getDate() + offset);
    const parts = getHijriPartsFromDate(testDate, adj);
    if (parts.hYear === hYear && parts.hMonth === hMonth && parts.hDay === hDay) {
      return testDate;
    }
  }
  return baseDate;
}

export default function HijriDateConverterView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [moonAdjustment, setMoonAdjustment] = useState<number>(-1); // -1 for Pakistan / South Asia default
  const [activeTab, setActiveTab] = useState<'g2h' | 'h2g'>('g2h');
  const [copied, setCopied] = useState(false);

  // Form states for Gregorian to Hijri
  const [gregInputDate, setGregInputDate] = useState<string>('2026-11-24');

  // Form states for Hijri to Gregorian
  const [hInputYear, setHInputYear] = useState<number>(1448);
  const [hInputMonth, setHInputMonth] = useState<number>(6);
  const [hInputDay, setHInputDay] = useState<number>(13);

  // Mount with current live date
  useEffect(() => {
    const now = getKarachiNow();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    setGregInputDate(`${y}-${m}-${d}`);

    const hNow = getHijriPartsFromDate(now, moonAdjustment);
    setHInputYear(hNow.hYear);
    setHInputMonth(hNow.hMonth);
    setHInputDay(hNow.hDay);
  }, [moonAdjustment]);

  // Today's Live Values
  const todayLive = useMemo(() => {
    const now = getKarachiNow();
    const hijri = getHijriPartsFromDate(now, moonAdjustment);
    const dayOfWeek = now.getDay();
    const dayName = DAYS_NAMES[dayOfWeek];
    const hijriMonth = ISLAMIC_MONTHS[hijri.hMonth - 1] || ISLAMIC_MONTHS[0];
    const gregMonth = GREG_MONTHS[now.getMonth()];

    return {
      now,
      hijri,
      dayOfWeek,
      dayName: isUrdu ? dayName.ur : isRoman ? dayName.ro : dayName.en,
      hijriMonthName: isUrdu ? hijriMonth.ur : isRoman ? hijriMonth.ro : hijriMonth.en,
      gregMonthName: isUrdu ? gregMonth.ur : isRoman ? gregMonth.ro : gregMonth.en,
      gregDay: now.getDate(),
      gregYear: now.getFullYear(),
    };
  }, [moonAdjustment, isUrdu, isRoman]);

  // Result: Gregorian -> Hijri
  const g2hResult = useMemo(() => {
    try {
      const [y, m, d] = gregInputDate.split('-').map(Number);
      const parsedDate = new Date(y, m - 1, d);
      if (isNaN(parsedDate.getTime())) return null;

      const hijri = getHijriPartsFromDate(parsedDate, moonAdjustment);
      const dayOfWeek = parsedDate.getDay();
      const dayName = DAYS_NAMES[dayOfWeek];
      const hMonthObj = ISLAMIC_MONTHS[hijri.hMonth - 1] || ISLAMIC_MONTHS[0];
      const gMonthObj = GREG_MONTHS[parsedDate.getMonth()];

      const formattedHijri = isUrdu
        ? `${hijri.hDay} ${hMonthObj.ur} ${hijri.hYear}ھ`
        : isRoman
        ? `${hijri.hDay} ${hMonthObj.ro} ${hijri.hYear} AH`
        : `${hijri.hDay} ${hMonthObj.en} ${hijri.hYear} AH`;

      const formattedDay = isUrdu ? dayName.ur : isRoman ? dayName.ro : dayName.en;
      const formattedGreg = isUrdu
        ? `${parsedDate.getDate()} ${gMonthObj.ur} ${parsedDate.getFullYear()}ء`
        : isRoman
        ? `${parsedDate.getDate()} ${gMonthObj.ro} ${parsedDate.getFullYear()}`
        : `${gMonthObj.en} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

      return {
        hijri,
        formattedHijri,
        formattedDay,
        formattedGreg,
      };
    } catch {
      return null;
    }
  }, [gregInputDate, moonAdjustment, isUrdu, isRoman]);

  // Result: Hijri -> Gregorian
  const h2gResult = useMemo(() => {
    try {
      const gDate = convertHijriToGregorianDate(hInputYear, hInputMonth, hInputDay, moonAdjustment);
      const dayOfWeek = gDate.getDay();
      const dayName = DAYS_NAMES[dayOfWeek];
      const hMonthObj = ISLAMIC_MONTHS[hInputMonth - 1] || ISLAMIC_MONTHS[0];
      const gMonthObj = GREG_MONTHS[gDate.getMonth()];

      const formattedHijri = isUrdu
        ? `${hInputDay} ${hMonthObj.ur} ${hInputYear}ھ`
        : isRoman
        ? `${hInputDay} ${hMonthObj.ro} ${hInputYear} AH`
        : `${hInputDay} ${hMonthObj.en} ${hInputYear} AH`;

      const formattedDay = isUrdu ? dayName.ur : isRoman ? dayName.ro : dayName.en;
      const formattedGreg = isUrdu
        ? `${gDate.getDate()} ${gMonthObj.ur} ${gDate.getFullYear()}ء`
        : isRoman
        ? `${gDate.getDate()} ${gMonthObj.ro} ${gDate.getFullYear()}`
        : `${gMonthObj.en} ${gDate.getDate()}, ${gDate.getFullYear()}`;

      return {
        gDate,
        formattedHijri,
        formattedDay,
        formattedGreg,
      };
    } catch {
      return null;
    }
  }, [hInputYear, hInputMonth, hInputDay, moonAdjustment, isUrdu, isRoman]);

  // Upcoming Islamic Events Countdown
  const eventsCountdown = useMemo(() => {
    const now = getKarachiNow();
    const currentHYear = todayLive.hijri.hYear;

    const list = [
      {
        slug: 'ramadan',
        title: { ur: 'یکم رمضان المبارک', ro: '1st Ramadan', en: '1st Ramadan (Fasting Begins)' },
        subtitle: { ur: 'ماہِ صیام و نزولِ قرآن', ro: 'Month of Fasting', en: 'Month of the Holy Quran' },
        hMonth: 9,
        hDay: 1,
        color: 'from-emerald-950 to-[#07130f]',
        border: 'border-emerald-600/50',
      },
      {
        slug: 'eid-fitr',
        title: { ur: 'عید الفطر (یکم شوال)', ro: 'Eid-ul-Fitr (1st Shawwal)', en: 'Eid-ul-Fitr' },
        subtitle: { ur: 'یومِ انعام و شکر گزاری', ro: 'Festival of Eid', en: 'Celebration of Gratitude' },
        hMonth: 10,
        hDay: 1,
        color: 'from-[#1a1506] to-[#07130f]',
        border: 'border-amber-500/50',
      },
      {
        slug: 'eid-adha',
        title: { ur: 'عید الاضحیٰ (۱۰ ذی الحجہ)', ro: 'Eid-ul-Adha (10th Zilhajj)', en: 'Eid-ul-Adha' },
        subtitle: { ur: 'سنتِ ابراہیمی و قربانی کے ایام', ro: 'Sunnat-e-Ibrahimi', en: 'Feast of Sacrifice' },
        hMonth: 12,
        hDay: 10,
        color: 'from-[#1c0f0a] to-[#07130f]',
        border: 'border-amber-600/50',
      },
      {
        slug: 'ashura',
        title: { ur: 'یومِ عاشورہ (۱۰ محرم الحرام)', ro: 'Day of Ashura (10th Muharram)', en: 'Day of Ashura' },
        subtitle: { ur: 'شہادتِ امام حسینؓ و مسنون روزہ', ro: 'Shahadat-e-Imam Hussain (R.A)', en: '10th Muharram' },
        hMonth: 1,
        hDay: 10,
        color: 'from-[#0b1624] to-[#07130f]',
        border: 'border-cyan-600/40',
      },
      {
        slug: 'eid-milad',
        title: { ur: '۱۲ ربیع الاول (میلاد النبی ﷺ)', ro: '12th Rabi-ul-Awwal', en: '12th Rabi al-Awwal' },
        subtitle: { ur: 'ولادتِ باسعادت خاتم النبیین ﷺ', ro: 'Wiladat-e-Mustafa ﷺ', en: 'Mawlid un-Nabi ﷺ' },
        hMonth: 3,
        hDay: 12,
        color: 'from-emerald-950 to-[#0d221a]',
        border: 'border-[#d4af37]/50',
      },
    ];

    return list.map((ev) => {
      let targetYear = currentHYear;
      let targetDate = convertHijriToGregorianDate(targetYear, ev.hMonth, ev.hDay, moonAdjustment);
      // Reset hours for clean day diff
      const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const targetDateOnly = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());

      if (targetDateOnly.getTime() < nowDateOnly.getTime()) {
        targetYear++;
        targetDate = convertHijriToGregorianDate(targetYear, ev.hMonth, ev.hDay, moonAdjustment);
      }

      const diffTime = targetDate.getTime() - now.getTime();
      const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

      const gregMonthObj = GREG_MONTHS[targetDate.getMonth()];
      const dayName = DAYS_NAMES[targetDate.getDay()];
      const targetFormatted = isUrdu
        ? `${targetDate.getDate()} ${gregMonthObj.ur} ${targetDate.getFullYear()}ء (${dayName.ur})`
        : isRoman
        ? `${targetDate.getDate()} ${gregMonthObj.ro} ${targetDate.getFullYear()} (${dayName.ro})`
        : `${gregMonthObj.en} ${targetDate.getDate()}, ${targetDate.getFullYear()} (${dayName.en})`;

      return {
        ...ev,
        diffDays,
        targetFormatted,
      };
    });
  }, [todayLive.hijri.hYear, moonAdjustment, isUrdu, isRoman]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-10 max-w-5xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
          isUrdu ? 'font-urdu' : 'font-sans'
        }`}
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'سرورق' : 'Home'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <Link href="/tools" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'اسلامی ٹولز' : 'Tools'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <span className="text-slate-900 dark:text-white font-bold">
          {isUrdu ? 'ہجری و عیسوی تاریخ کنورٹر' : isRoman ? 'Hijri Date Converter' : 'Hijri Date Converter'}
        </span>
      </nav>

      {/* Hero Card with Prominent Today's Date */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#11221c] border-2 border-[#d4af37]/60 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-right rtl:md:text-right ltr:md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-amber-300 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>{isUrdu ? 'آج کی مصدقہ ہجری و عیسوی تاریخ' : 'Today’s Verified Hijri Date'}</span>
            </div>

            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fef3c7] ${
                isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans'
              }`}
            >
              {todayLive.hijri.hDay} {todayLive.hijriMonthName} {todayLive.hijri.hYear}ھ
            </h1>

            <p className={`text-sm sm:text-base text-emerald-200/90 flex items-center justify-center md:justify-start gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
              <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>
                {todayLive.dayName}، {todayLive.gregDay} {todayLive.gregMonthName} {todayLive.gregYear}ء (Pakistan Standard Time)
              </span>
            </p>
          </div>

          {/* Moon Sighting Adjustment Toggle */}
          <div className="bg-[#07100d] border border-[#d4af37]/40 rounded-2xl p-4 text-center space-y-2 shrink-0 w-full md:w-auto">
            <span className={`text-xs font-bold text-amber-300 flex items-center justify-center gap-1.5 ${isUrdu ? 'font-urdu' : ''}`}>
              <Compass className="w-3.5 h-3.5" />
              <span>{isUrdu ? 'رویتِ ہلال مطابقت (چاند کا فرق):' : 'Moon Sighting Adjustment:'}</span>
            </span>
            <div className="flex items-center justify-center gap-1.5 p-1 bg-stone-900/80 rounded-xl border border-stone-800">
              <button
                onClick={() => setMoonAdjustment(-1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  moonAdjustment === -1
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {isUrdu ? '-۱ دن (پاکستان)' : '-1 Day (PK/IN)'}
              </button>
              <button
                onClick={() => setMoonAdjustment(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  moonAdjustment === 0
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {isUrdu ? '۰ دن (خلیج/ام القریٰ)' : '0 Day (Gulf/KSA)'}
              </button>
              <button
                onClick={() => setMoonAdjustment(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  moonAdjustment === 1
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                +1 Day
              </button>
            </div>
            <p className="text-[11px] text-stone-400 max-w-xs">
              {isUrdu
                ? 'پاکستان اور برصغیر میں چاند عموماً خلیج کے اگلے روز نظر آتا ہے۔'
                : 'Account for local moon sighting variations across regions.'}
            </p>
          </div>
        </div>
      </div>

      {/* Two-Way Converter Module */}
      <section className="bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-emerald-800/60 pb-4 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-[#d4af37]" />
            <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? 'دو طرفہ تاریخ کنورٹر' : isRoman ? 'Two-Way Date Converter' : 'Two-Way Date Converter'}
            </h2>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-[#07130f] p-1 rounded-2xl border border-stone-200 dark:border-[#d4af37]/30">
            <button
              onClick={() => setActiveTab('g2h')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'g2h'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 dark:text-emerald-300/80 hover:text-slate-900 dark:hover:text-white'
              } ${isUrdu ? 'font-urdu' : ''}`}
            >
              {isUrdu ? 'عیسوی تا ہجری' : 'Gregorian → Hijri'}
            </button>
            <button
              onClick={() => setActiveTab('h2g')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'h2g'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 dark:text-emerald-300/80 hover:text-slate-900 dark:hover:text-white'
              } ${isUrdu ? 'font-urdu' : ''}`}
            >
              {isUrdu ? 'ہجری تا عیسوی' : 'Hijri → Gregorian'}
            </button>
          </div>
        </div>

        {/* Tab 1: Gregorian to Hijri */}
        {activeTab === 'g2h' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'عیسوی (انگریزی) تاریخ منتخب کریں:' : 'Select Gregorian (Solar) Date:'}
              </label>
              <input
                type="date"
                value={gregInputDate}
                onChange={(e) => setGregInputDate(e.target.value)}
                className="w-full sm:max-w-md p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
              />
            </div>

            {g2hResult && (
              <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-[#0d221a] to-[#07130f] border border-[#d4af37]/60 p-5 sm:p-6 text-[#fef3c7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className={`text-xs font-bold text-amber-400 uppercase tracking-wider ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? 'تبدیل شدہ ہجری تاریخ:' : 'Converted Islamic Date:'}
                  </span>
                  <p className={`text-2xl sm:text-3xl font-extrabold text-[#fef3c7] ${isUrdu ? 'font-urdu leading-[1.8]' : ''}`}>
                    {g2hResult.formattedHijri}
                  </p>
                  <p className={`text-xs sm:text-sm text-emerald-200/90 ${isUrdu ? 'font-urdu' : ''}`}>
                    {g2hResult.formattedDay} &bull; {g2hResult.formattedGreg}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(`${g2hResult.formattedHijri} (${g2hResult.formattedDay})`)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-2 transition cursor-pointer self-end sm:self-center"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? (isUrdu ? 'کاپی ہو گیا!' : 'Copied!') : (isUrdu ? 'تاریخ کاپی کریں' : 'Copy Date')}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Hijri to Gregorian */}
        {activeTab === 'h2g' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'ہجری دن (1 تا 30):' : 'Hijri Day (1-30):'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={hInputDay}
                  onChange={(e) => setHInputDay(Math.min(30, Math.max(1, parseInt(e.target.value, 10) || 1)))}
                  className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'اسلامی مہینہ:' : 'Islamic Month:'}
                </label>
                <select
                  value={hInputMonth}
                  onChange={(e) => setHInputMonth(parseInt(e.target.value, 10))}
                  className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                >
                  {ISLAMIC_MONTHS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.id}. {isUrdu ? m.ur : isRoman ? m.ro : m.en}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'ہجری سال:' : 'Hijri Year (AH):'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="1600"
                  value={hInputYear}
                  onChange={(e) => setHInputYear(parseInt(e.target.value, 10) || 1448)}
                  className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {h2gResult && (
              <div className="rounded-2xl bg-gradient-to-r from-[#1a1506] via-[#241c09] to-[#07130f] border border-amber-400/50 p-5 sm:p-6 text-[#fef3c7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className={`text-xs font-bold text-amber-400 uppercase tracking-wider ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? 'تبدیل شدہ عیسوی تاریخ:' : 'Converted Gregorian Date:'}
                  </span>
                  <p className={`text-2xl sm:text-3xl font-extrabold text-[#fef3c7] ${isUrdu ? 'font-urdu leading-[1.8]' : ''}`}>
                    {h2gResult.formattedGreg} ({h2gResult.formattedDay})
                  </p>
                  <p className={`text-xs sm:text-sm text-amber-200/90 ${isUrdu ? 'font-urdu' : ''}`}>
                    {h2gResult.formattedHijri}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(`${h2gResult.formattedGreg} (${h2gResult.formattedDay})`)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-2 transition cursor-pointer self-end sm:self-center"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? (isUrdu ? 'کاپی ہو گیا!' : 'Copied!') : (isUrdu ? 'تاریخ کاپی کریں' : 'Copy Date')}</span>
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Upcoming Islamic Events Countdown Grid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#d4af37]" />
          <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'اہم اسلامی ایام و تہواروں کا لائیو کاؤنٹ ڈاؤن' : 'Upcoming Islamic Events Countdown'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventsCountdown.map((ev) => (
            <div
              key={ev.slug}
              className={`rounded-2xl p-5 bg-gradient-to-br ${ev.color} border ${ev.border} text-[#fef3c7] shadow-lg flex flex-col justify-between space-y-3`}
            >
              <div>
                <h3 className={`text-base sm:text-lg font-bold ${isUrdu ? 'font-urdu leading-[1.8]' : ''}`}>
                  {isUrdu ? ev.title.ur : isRoman ? ev.title.ro : ev.title.en}
                </h3>
                <p className={`text-xs text-emerald-200/80 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? ev.subtitle.ur : isRoman ? ev.subtitle.ro : ev.subtitle.en}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37]">
                    {ev.diffDays}
                  </span>
                  <span className={`text-xs text-stone-300 ml-1.5 rtl:ml-0 rtl:mr-1.5 ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? 'دن باقی' : 'days left'}
                  </span>
                </div>
                <span className="text-[11px] text-stone-300 text-right rtl:text-left">
                  {ev.targetFormatted}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarly Fiqh Explanation & Guide */}
      <section className="bg-stone-50 dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-[#d4af37]" />
          <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'ہجری (قمری) تقویم کی شرعی حیثیت و تاریخی پس منظر' : 'Understanding the Islamic (Hijri) Calendar'}
          </h3>
        </div>

        <div className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 leading-relaxed space-y-3 ${isUrdu ? 'font-urdu text-sm sm:text-base leading-[2.0]' : ''}`}>
          <p>
            {isUrdu ? (
              <>
                اسلامی یا ہجری تقویم ایک خالص قمری نظام ہے جس کا مدار چاند کی گردش پر ہے۔ اس کا آغاز حضرت عمر فاروق رضی اللہ عنہ کے دورِ خلافت میں سن ۱۷ ہجری میں صحابہ کرامؓ کے باہمی مشورے سے کیا گیا، اور تاریخ کا نقطۂ آغاز سرورِ کونین حضرت محمد مصطفیٰ ﷺ کی مکہ مکرمہ سے مدینہ منورہ کی طرف تاریخی ہجرت کو قرار دیا گیا۔ قرآنِ مجید کی سورۃ التوبہ (آیت ۳۶) میں اللہ تعالیٰ کا ارشاد ہے: <em>&quot;بے شک مہینوں کی گنتی اللہ کے نزدیک بارہ مہینے ہے&quot;</em>، جن میں چار مہینے حرمت والے ہیں (رجب، ذوالقعدہ، ذوالحجہ، اور محرم)۔
              </>
            ) : isRoman ? (
              <>
                Islami ya Hijri Calendar aik qamri (lunar) nizam hai jiska daromadar chaand ki gardish par hota hai. Iska aaghaz Hazrat Umar Farooq (R.A) ke daur-e-khilafat mein 17 Hijri mein Sahaba Karam ke mashwaray se hua, aur iska nuqta-e-aaghaz Huzoor Akram ﷺ ki Madinah Munawwarah ki taraf Hijrat hai. Quran Majeed (Surah At-Tawbah: 36) ke mutabiq Allah ke nazdeek saal ke 12 maheenay hain jin mein se chaar hurmat wale hain.
              </>
            ) : (
              <>
                The Islamic (Hijri) Calendar is a strictly lunar calendar based on the cycles of the moon. Established in 17 AH under the caliphate of Umar ibn al-Khattab (R.A) with the consensus of the Companions, its epoch marks the historic migration (Hijrah) of Prophet Muhammad ﷺ from Makkah to Madinah. Encompassing 354 or 355 days annually, it rotates through the solar seasons every 33 years, governing sacred worships such as Ramadan, Hajj, and Zakat.
              </>
            )}
          </p>
          <p>
            {isUrdu ? (
              <>
                شمسی سال ۳۶۵ دن کا ہوتا ہے جبکہ قمری سال ۳۵۴ یا ۳۵۵ دن پر مشتمل ہوتا ہے، جس کی وجہ سے ہجری سال شمسی سال کے مقابلے میں ہر سال تقریباً ۱۰ تا ۱۲ دن پیچھے چلا جاتا ہے اور تقریباً ۳۳ سال میں موسموں کا ایک مکمل دور مکمل کرتا ہے۔ چاند دیکھنے کے شرعی اصول کے مطابق ہر قمری مہینہ ۲۹ یا ۳۰ دن کا ہوتا ہے، اور مختلف جغرافیائی خطوں میں مطلع صاف ہونے اور رویتِ ہلال کے وقت میں فرق کی وجہ سے ہجری تاریخ میں ایک دن کا فرق واقع ہو سکتا ہے۔
              </>
            ) : isRoman ? (
              <>
                Shamsi saal 365 din ka jabkay qamri saal 354 ya 355 din ka hota hai. Har maheena 29 ya 30 din ka hota hai aur shariat mein ibadat ka taayun chaand dekh kar kiya jata hai. Mukhtalif mumalik mein rooyat-e-hilal ke mutabiq tareekh mein aik din ka farq aana qudrati hai.
              </>
            ) : (
              <>
                Unlike solar calendars, each Islamic month commences with the confirmed physical sighting of the new crescent moon (Hilal), meaning months consist of either 29 or 30 days. This natural astronomical reality accounts for minor 1-day geographical variations between regions such as the Arabian Gulf and South Asia.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-4">
        <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'عام پوچھے جانے والے سوالات (FAQs)' : 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-3">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'اسلامی (ہجری) اور شمسی (عیسوی) سال میں بنیادی فرق کیا ہے؟'
                : 'What is the main difference between Hijri and Gregorian years?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'شمسی سال زمین کی سورج کے گرد گردش پر مبنی ہوتا ہے اور ۳۶۵.۲۴ دن کا ہوتا ہے، جبکہ ہجری سال چاند کی زمین کے گرد گردش پر مبنی ہوتا ہے اور تقریباً ۳۵۴ دن کا ہوتا ہے۔ یہی وجہ ہے کہ رمضان اور عیدین ہر سال انگریزی تاریخوں میں ۱۰ تا ۱۲ دن پہلے آتے ہیں۔'
                : 'A solar year is 365.25 days based on Earth’s revolution around the sun, whereas a Hijri year is roughly 354 days based on 12 lunar cycles. Consequently, Islamic events shift approximately 10-12 days earlier each solar year.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'پاکستان اور سعودی عرب کی ہجری تاریخوں میں ایک دن کا فرق کیوں ہوتا ہے؟'
                : 'Why does the Hijri date differ by one day between Pakistan and Saudi Arabia?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'چاند زمین کے مغرب کی طرف افق پر نمودار ہوتا ہے، چنانچہ جغرافیائی فاصلے اور افق کے فرق (اختلافِ مطالع) کے باعث جب سعودی عرب میں نیا چاند نظر آتا ہے تو اس وقت پاکستان میں چاند کی عمر کم ہونے کی وجہ سے اکثر نظر نہیں آتا، جس سے پاکستان میں مہینہ ایک دن بعد شروع ہوتا ہے۔'
                : 'Due to geographical coordinates and differences in moon visibility horizons (ikhtilaf-e-matali), the new crescent is often visible in western longitudes (Middle East) hours before it reaches sufficient visibility altitude in eastern regions (South Asia).'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'کیا ہجری تاریخ کا شرعی حساب غروبِ آفتاب سے تبدیل ہوتا ہے؟'
                : 'Does the Islamic date change at sunset or midnight?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'جی ہاں! شریعتِ اسلامی میں نیا اسلامی دن اور تاریخ رات ۱۲ بجے کے بجائے مغرب یعنی سورج غروب ہوتے ہی شروع ہو جاتی ہے۔ مثلاً جمعرات کے روز غروبِ آفتاب کے بعد سے ہی جمعۃ المبارک کی رات شروع ہو جاتی ہے۔'
                : 'Yes! In Islamic jurisprudence, a new date begins at sunset (Maghrib), not midnight. For instance, Thursday night after sunset is considered Friday night in the Islamic calendar.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
