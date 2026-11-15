'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  X,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Layers,
  BookOpen,
  HeartHandshake,
} from 'lucide-react';
import {
  duainList,
  DUA_CATEGORIES,
  DuaCategory,
  getDuaCategoryLabel,
  DuaItem,
} from '@/data/duain';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import AdSlot from '@/components/AdSlot';

interface DuaHubViewProps {
  routeLanguage?: Language;
}

export default function DuaHubView({ routeLanguage }: DuaHubViewProps = {}) {
  const { language } = useLanguage();
  const activeLang: Language = routeLanguage || language;
  const isUrdu = activeLang === 'ur';
  const isRoman = activeLang === 'ro';
  const isEnglish = activeLang === 'en';

  const [selectedCategory, setSelectedCategory] = useState<DuaCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getDetailPath = (slug: string) =>
    isEnglish ? `/en/duain/${slug}` : isRoman ? `/roman/duain/${slug}` : `/duain/${slug}`;

  const filteredDuas = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return duainList.filter((item) => {
      const catMatch = selectedCategory === 'All' || item.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      const haystack = `${item.title.ur} ${item.title.en} ${item.title.ro} ${item.arabicText} ${item.urduTranslation} ${item.romanUrdu} ${item.englishTranslation} ${item.fazilat.ur} ${item.reference.ur}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Top Header: Breadcrumb & 3-Edition Language Switcher */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <nav
          aria-label="Breadcrumb"
          className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}
        >
          <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
            {isUrdu ? 'سرورق' : 'Home'}
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-slate-900 dark:text-white font-bold">
            {isUrdu ? 'مسنون دعائیں' : isRoman ? 'Masnoon Duain' : 'Daily Masnoon Duas'}
          </span>
        </nav>

        {/* 3-Language Edition Switcher Pills */}
        <div className="flex items-center gap-1 bg-stone-100 dark:bg-[#11221c] p-1 rounded-xl border border-stone-200 dark:border-emerald-800/50 text-xs shadow-xs">
          <Link
            href="/duain"
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'ur'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            اردو
          </Link>
          <Link
            href="/roman/duain"
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'ro'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            Roman
          </Link>
          <Link
            href="/en/duain"
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'en'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            English
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <header className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#050e0b] text-white border-2 border-[#d4af37]/45 shadow-xl space-y-5">
        <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs sm:text-sm font-semibold">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className={isUrdu ? 'font-urdu leading-normal' : 'font-sans'}>
            {isUrdu
              ? 'مستند قرآنی و نبوی دعاؤں کا انسائیکلوپیڈیا • AkhlaqiBaatein.com'
              : 'Treasury of Authentic Daily Prophetic & Quranic Invocations'}
          </span>
        </div>

        <h1
          className={`text-2xl sm:text-4xl font-bold text-white ${
            isUrdu ? 'font-urdu leading-[1.9] sm:leading-[2.0]' : 'font-sans leading-tight'
          }`}
        >
          {isUrdu
            ? 'مسنون دعائیں — مستند قرآنی و احادیث کی دعائیں مع عربی اعراب، ترجمہ و تسبیح'
            : isRoman
            ? 'Daily Masnoon Duain — Arabic Naskh Text, Roman Tarjuma aur Tasbeeh'
            : 'Daily Masnoon Duas — Authentic Quranic & Prophetic Prayers with Meaning & Counter'}
        </h1>

        <p
          className={`text-sm sm:text-base text-emerald-100/90 max-w-3xl ${
            isUrdu ? 'font-urdu leading-[2.1]' : 'font-sans leading-relaxed'
          }`}
        >
          {isUrdu
            ? 'پریشانی و غم سے نجات، ادائے قرض، رزق میں برکت، نظرِ بد سے حفاظت، بیماری سے شفاء اور روزمرہ زندگی کے لیے رسول اللہ ﷺ کی سکھائی ہوئی مستند دعائیں — مکمل عربی نسخ فونٹ، ترجمہ، فضیلت، ڈیجیٹل تسبیح کاؤنٹر اور 9:16 HD واٹس ایپ اسٹیٹس کارڈ کے ساتھ۔'
            : isRoman
            ? 'Preshani se nijat, qarz ki adaigi, rizq mein barkat, shifa aur hifazat ki authentic masnoon duain — Arabic Naskh font, tarjuma, fazilat aur digital tasbeeh counter ke sath.'
            : 'Explore essential daily supplications for distress relief, debt clearance, halal sustenance, healing, and divine protection — featuring crystal-clear Arabic Naskh typography, translations, spiritual virtues, and interactive counters.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-amber-200 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              {isUrdu ? `${duainList.length} منتخب مستند مسنون دعائیں` : `${duainList.length} Authenticated Duas`}
            </span>
          </span>
        </div>
      </header>

      <AdSlot position="header" />

      {/* Search & Category Filter */}
      <section className="space-y-4">
        <div className="relative">
          <Search className={`w-4 h-4 text-slate-400 absolute ${isUrdu ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 pointer-events-none`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isUrdu
                ? 'دعا کا عنوان، عربی الفاظ، مقصد یا ترجمہ تلاش کریں...'
                : 'Search Dua by title, Arabic keyword, or topic...'
            }
            className={`w-full ${
              isUrdu ? 'pr-11 pl-10' : 'pl-11 pr-10'
            } py-3.5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 shadow-xs ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className={`absolute ${isUrdu ? 'left-3.5' : 'right-3.5'} top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition shrink-0 cursor-pointer ${
              isUrdu ? 'font-urdu' : 'font-sans'
            } ${
              selectedCategory === 'All'
                ? 'bg-[#0a1411] dark:bg-[#d4af37] text-[#d4af37] dark:text-[#0a1411] border border-[#d4af37] shadow-sm'
                : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-emerald-100/85 border border-stone-200 dark:border-emerald-800/60 hover:border-[#d4af37]/70'
            }`}
          >
            {isUrdu ? 'تمام مسنون دعائیں' : 'All Duas'}
          </button>

          {DUA_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition shrink-0 cursor-pointer ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                } ${
                  active
                    ? 'bg-[#0a1411] dark:bg-[#d4af37] text-[#d4af37] dark:text-[#0a1411] border border-[#d4af37] shadow-sm'
                    : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-emerald-100/85 border border-stone-200 dark:border-emerald-800/60 hover:border-[#d4af37]/70'
                }`}
              >
                {getDuaCategoryLabel(cat, activeLang)}
              </button>
            );
          })}
        </div>
      </section>

      {/* Duas Grid */}
      {filteredDuas.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredDuas.map((item) => {
            const itemTitle = isUrdu ? item.title.ur : isRoman ? item.title.ro : item.title.en;
            const itemTrans = isUrdu ? item.urduTranslation : isRoman ? item.romanUrdu : item.englishTranslation;

            return (
              <article
                key={item.id}
                className="group rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-[#d4af37]/30 shadow-sm hover:shadow-md hover:border-[#d4af37] transition flex flex-col justify-between gap-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/35 ${
                        isUrdu ? 'font-urdu' : 'font-sans'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 shrink-0" />
                      <span>{getDuaCategoryLabel(item.category, activeLang)}</span>
                    </span>

                    <span className="text-xs text-slate-500 dark:text-emerald-300/80 font-sans font-semibold">
                      {item.recommendedCount}x Wird (ورد)
                    </span>
                  </div>

                  <h2
                    className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition ${
                      isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans leading-snug'
                    }`}
                  >
                    <Link href={getDetailPath(item.slug)}>{itemTitle}</Link>
                  </h2>

                  {/* Arabic Text Plaque Preview */}
                  <div className="p-4 rounded-2xl bg-[#07130f] border border-[#d4af37]/40 text-center">
                    <p
                      className="font-arabic text-lg sm:text-xl text-white font-bold leading-[2.5] select-all line-clamp-2"
                      lang="ar"
                      dir="rtl"
                    >
                      {item.arabicText}
                    </p>
                  </div>

                  {/* Translation Preview */}
                  <p
                    className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/85 line-clamp-2 ${
                      isUrdu ? 'font-urdu leading-[1.9]' : 'leading-relaxed'
                    }`}
                  >
                    {itemTrans}
                  </p>

                  <p className={`text-xs text-slate-500 dark:text-emerald-200/70 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    حوالہ: {item.reference[activeLang] || item.reference.ur}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-emerald-800/50 flex items-center justify-between gap-2">
                  <span className={`text-xs text-slate-500 dark:text-emerald-300/75 truncate ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    تسبیح کاؤنٹر و اسٹیٹس شامل
                  </span>

                  <Link
                    href={getDetailPath(item.slug)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0a1411] hover:bg-emerald-900 dark:bg-[#d4af37] dark:hover:bg-amber-400 text-[#d4af37] dark:text-[#0a1411] text-xs sm:text-sm font-bold shrink-0 transition shadow-xs ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    <span>{isUrdu ? 'مکمل مسنون دعا و تسبیح پڑھیں' : 'Read Full Dua & Tasbeeh'}</span>
                    {isUrdu ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <div className="text-center py-14 px-4 rounded-3xl bg-white dark:bg-[#11221c] border border-dashed border-stone-300 dark:border-emerald-800/60 space-y-2">
          <p className={`text-lg font-bold text-slate-800 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'کوئی مسنون دعا نہیں ملی' : 'No Duas found'}
          </p>
          <p className={`text-sm text-slate-500 dark:text-emerald-200/75 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'برائے مہربانی تلاش کے الفاظ تبدیل کریں۔' : 'Please refine your search query.'}
          </p>
        </div>
      )}

      <AdSlot position="footer" />
    </div>
  );
}
