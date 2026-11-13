'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookMarked, Sparkles } from 'lucide-react';
import {
  seoCollections,
  getCollectionBadge,
  getCollectionIntro,
  getCollectionTitle,
  getQuotesForCollection,
} from '@/data/collections';
import { useLanguage } from '@/context/LanguageContext';
import AdSlot from '@/components/AdSlot';
import SupportAndResourcesCard from '@/components/SupportAndResourcesCard';

export default function CollectionsIndexView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const ArrowCta = isUrdu ? ArrowLeft : ArrowRight;

  return (
    <div
      dir={isUrdu ? 'rtl' : 'ltr'}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8"
    >
      <header className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-950 via-[#0d2b22] to-[#081c16] text-white border border-emerald-800/70 shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className={isUrdu ? 'font-urdu leading-normal' : ''}>
            {isUrdu
              ? 'مستند موضوعاتی مجموعے • AkhlaqiBaatein.com'
              : language === 'ro'
              ? 'Muntakhab Mauzuaati Collections'
              : 'Curated Spiritual & Ethical Collections'}
          </span>
        </div>

        <h1 className={`text-2xl sm:text-4xl font-bold ${isUrdu ? 'font-urdu leading-[1.9]' : ''}`}>
          {isUrdu
            ? 'مقبول موضوعاتی مجموعے (قرآن و حدیث اور اخلاقیات)'
            : language === 'ro'
            ? 'Maqbool Islami Collections — Jumma, Sabr, Rizq aur Walidain'
            : 'Popular Islamic Quote & Hadith Collections'}
        </h1>

        <p
          className={`text-sm sm:text-base text-emerald-100/90 max-w-3xl leading-relaxed ${
            isUrdu ? 'font-urdu leading-[2.1]' : ''
          }`}
        >
          {isUrdu
            ? 'زندگی کے اہم ترین روحانی و اخلاقی موضوعات پر مستند قرآنی آیات، ارشاداتِ نبوی ﷺ اور حکیمانہ اقوال کے خصوصی مجموعے — ہر مجموعے میں مکمل تشریح اور واٹس ایپ اسٹیٹس ڈاؤن لوڈ کی سہولت موجود ہے۔'
            : language === 'ro'
            ? 'Zindagi ke ahem tareen mauzoaat jaise Jumma Mubarak, Sabr o Shukr, Rizq aur Barkat, aur Walidain ke Huqooq par mabni mustanad ahadeeth aur aqwal ke khasoosi hubs.'
            : 'Explore dedicated thematic hubs covering Blessed Friday reflections, Patience & Gratitude, Lawful Sustenance & Barakah, and Honoring Parents—complete with bilingual commentary and downloadable status cards.'}
        </p>

        <div className="pt-1">
          <Link
            href="/"
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <span>{isUrdu ? 'صفحہ اول' : 'Home'}</span>
          </Link>
        </div>
      </header>

      <AdSlot position="header" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {seoCollections.map((col) => {
          const matchedCount = getQuotesForCollection(col).length;
          return (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group rounded-3xl p-6 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm hover:shadow-md hover:border-emerald-400 dark:hover:border-amber-500/60 transition flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50 ${
                    isUrdu ? 'font-urdu leading-normal' : ''
                  }`}
                >
                  {getCollectionBadge(col, language)}
                </span>

                <h2
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-amber-300 transition ${
                    isUrdu ? 'font-urdu leading-[1.85]' : ''
                  }`}
                >
                  {getCollectionTitle(col, language)}
                </h2>

                <p
                  className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/80 line-clamp-3 ${
                    isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'
                  }`}
                >
                  {getCollectionIntro(col, language)}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 dark:border-emerald-800/50 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-800 dark:text-amber-400">
                <span className={`inline-flex items-center gap-1.5 ${isUrdu ? 'font-urdu' : ''}`}>
                  <BookMarked className="w-4 h-4 shrink-0" />
                  <span>
                    {matchedCount} {isUrdu ? 'اقوال' : language === 'ro' ? 'Aqwal' : 'Quotes'}
                  </span>
                </span>

                <span className={`inline-flex items-center gap-1 ${isUrdu ? 'font-urdu' : ''}`}>
                  <span>
                    {isUrdu ? 'مجموعہ کھولیں' : language === 'ro' ? 'Collection Dekhein' : 'Explore Hub'}
                  </span>
                  <ArrowCta className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <SupportAndResourcesCard />

      <AdSlot position="footer" />
    </div>
  );
}
