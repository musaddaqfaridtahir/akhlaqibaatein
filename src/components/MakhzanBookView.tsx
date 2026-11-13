'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Layers,
  Library,
  Sparkles,
} from 'lucide-react';
import { books, getBookAuthor, getBookDesc, getBookTitle, getChapterDesc, getChapterTitle } from '@/data/books';
import { categories, getCategoryTitle } from '@/data/categories';
import { quotes } from '@/data/quotes';
import { useLanguage } from '@/context/LanguageContext';
import QuoteCard from '@/components/QuoteCard';
import AdSlot from '@/components/AdSlot';
import SupportAndResourcesCard from '@/components/SupportAndResourcesCard';

const INITIAL_QUOTES = 12;
const STEP_QUOTES = 12;

export default function MakhzanBookView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const [visibleCount, setVisibleCount] = useState(INITIAL_QUOTES);

  const primaryBook = books[0];
  const ArrowIcon = isUrdu ? ChevronLeft : ChevronRight;

  // Curated classical ethics quotes derived from Makhzan-e-Akhlaq & parallel sources
  const curatedQuotes = quotes.filter((q) => {
    const rawRef = `${q.bookRef || ''} ${q.source || ''} ${q.sourceEnglish || ''}`.toLowerCase();
    return q.bookSlug === primaryBook.slug || rawRef.includes('makhzan') || rawRef.includes('مخزن');
  });

  const chapterCategorySlugs = [
    'ahkam-e-khuda',
    'irshadat-e-nabawi',
    'aqwal-e-sahaba',
    'khasail-e-nabawi',
    'ambiya-o-hukama',
  ];

  const displayList = curatedQuotes.length > 0 ? curatedQuotes : quotes.slice(0, 36);
  const visibleQuotes = displayList.slice(0, visibleCount);
  const remaining = Math.max(0, displayList.length - visibleCount);

  return (
    <div
      dir={isUrdu ? 'rtl' : 'ltr'}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8"
    >
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 flex-wrap ${
          isUrdu ? 'font-urdu' : ''
        }`}
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-amber-300 font-medium transition">
          {isUrdu ? 'صفحہ اول' : 'Home'}
        </Link>
        <ArrowIcon className="w-3.5 h-3.5 opacity-60 shrink-0" />
        <Link href="/books" className="hover:text-emerald-800 dark:hover:text-amber-300 font-medium transition">
          {isUrdu ? 'کتب خانہ' : language === 'ro' ? 'Kutub Khana' : 'Library'}
        </Link>
        <ArrowIcon className="w-3.5 h-3.5 opacity-60 shrink-0" />
        <span className="text-slate-900 dark:text-white font-semibold">
          {getBookTitle(primaryBook, language)}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-950 via-[#0d2b22] to-[#081c16] text-white border border-emerald-800/70 shadow-lg space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold">
          <Library className="w-4 h-4 shrink-0" />
          <span className={isUrdu ? 'font-urdu leading-normal' : ''}>
            {isUrdu
              ? 'کلاسیکی اسلامی اخلاقی تالیف • ابواب و انتخاب'
              : language === 'ro'
              ? 'Klasiki Islami Akhlaqi Kitab • Abwab aur Muntakhab Aqwal'
              : 'Classical Islamic Ethics Volume • Chapters & Selected Wisdom'}
          </span>
        </div>

        <h1
          className={`text-2xl sm:text-4xl font-bold text-white leading-snug ${
            isUrdu ? 'font-urdu leading-[1.9]' : ''
          }`}
        >
          {getBookTitle(primaryBook, language)}
        </h1>

        <p className={`text-xs sm:text-sm font-semibold text-amber-300 ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'تالیف و علمی ماخذ: ' : language === 'ro' ? 'Taalif o Maakhuz: ' : 'Compiled from Classical Works: '}
          {getBookAuthor(primaryBook, language)}
        </p>

        <p
          className={`text-sm sm:text-base text-emerald-100/90 max-w-3xl leading-relaxed ${
            isUrdu ? 'font-urdu leading-[2.1] text-base sm:text-lg' : ''
          }`}
        >
          {getBookDesc(primaryBook, language)}
        </p>

        {/* Scholarly Attribution Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 space-y-1.5">
          <p
            className={`text-xs sm:text-sm text-emerald-50/95 leading-relaxed ${
              isUrdu ? 'font-urdu leading-[2.0] text-sm sm:text-base' : ''
            }`}
          >
            {isUrdu
              ? 'اس پلیٹ فارم کے اخلاقی مضامین و انتخاب میں مستند کتبِ تفسیر و حدیث، نہج البلاغہ، حلیۃ الاولیاء اور کلاسیکی اخلاقی تالیف ’مخزنِ اخلاق‘ سے استفادہ کیا گیا ہے۔'
              : language === 'ro'
              ? 'Is platform ke akhlaqi mazameen aur intekhab mein mustanad kutub-e-tafseer o hadith, Nahj al-Balagha, Hilyat al-Awliya aur klasiki akhlaqi taalif "Makhzan-e-Akhlaq" se istifada kiya gaya hai.'
              : 'The ethical teachings on this page draw upon authenticated Quranic commentary, Prophetic Hadith compilations, Nahj al-Balagha, Hilyat al-Awliya, and the classical Urdu ethical compendium Makhzan-e-Akhlaq.'}
          </p>
        </div>
      </header>

      <AdSlot position="header" />

      {/* Chapters Overview */}
      {primaryBook.chapters && primaryBook.chapters.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h2
              className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              <Layers className="w-5 h-5 text-emerald-700 dark:text-amber-400 shrink-0" />
              <span>
                {isUrdu
                  ? 'کتاب کے بنیادی ابواب و موضوعات'
                  : language === 'ro'
                  ? 'Kitaab ke Bunyadi Abwab aur Chapters'
                  : 'Core Chapters & Ethical Themes'}
              </span>
            </h2>
            <span className={`text-xs sm:text-sm text-slate-500 dark:text-emerald-300/80 ${isUrdu ? 'font-urdu' : ''}`}>
              {primaryBook.chapters.length} {isUrdu ? 'ابواب' : language === 'ro' ? 'Abwab' : 'Chapters'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {primaryBook.chapters.map((chapter, idx) => {
              const targetCategory =
                categories.find((c) => c.slug === chapterCategorySlugs[idx]) ||
                categories[idx % categories.length];
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50">
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span>
                          {isUrdu ? `باب ${idx + 1}` : `Chapter ${idx + 1}`}
                        </span>
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold text-slate-900 dark:text-emerald-200 ${
                        isUrdu ? 'font-urdu leading-[1.85]' : ''
                      }`}
                    >
                      {getChapterTitle(chapter, language)}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/80 ${
                        isUrdu ? 'font-urdu leading-[1.95]' : 'leading-relaxed'
                      }`}
                    >
                      {getChapterDesc(chapter, language)}
                    </p>
                  </div>

                  {targetCategory && (
                    <div className="pt-2 border-t border-stone-200 dark:border-emerald-800/40">
                      <Link
                        href={`/category/${targetCategory.slug}`}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-amber-400 hover:underline ${
                          isUrdu ? 'font-urdu' : ''
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5 shrink-0" />
                        <span>{getCategoryTitle(targetCategory, language)}</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      <AdSlot position="in-article" />

      {/* Curated Quotes Selection */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h2
            className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-white ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            {isUrdu
              ? 'مخزنِ اخلاق سے منتخب اقوال و دروس'
              : language === 'ro'
              ? 'Makhzan-e-Akhlaq se Muntakhab Aqwal o Asbaaq'
              : 'Selected Teachings & Moral Reflections'}
          </h2>
          <span className={`text-xs sm:text-sm text-slate-500 dark:text-emerald-300/80 ${isUrdu ? 'font-urdu' : ''}`}>
            {displayList.length} {isUrdu ? 'مضامین' : language === 'ro' ? 'Aqwal' : 'Entries'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {visibleQuotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>

        {remaining > 0 && (
          <div className="pt-3 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + STEP_QUOTES)}
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer ${
                isUrdu ? 'font-urdu leading-normal' : ''
              }`}
            >
              <span>
                {isUrdu
                  ? `مزید اقوال پڑھیں (${remaining} باقی)`
                  : language === 'ro'
                  ? `Mazeed Aqwal Parhein (${remaining} Baqi)`
                  : `Load More Teachings (${remaining} Remaining)`}
              </span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </div>
        )}
      </section>

      <SupportAndResourcesCard />

      <AdSlot position="footer" />
    </div>
  );
}
