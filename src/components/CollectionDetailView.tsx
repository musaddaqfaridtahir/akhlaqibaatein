'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Sparkles,
  BookMarked,
} from 'lucide-react';
import type { Quote } from '@/data/types';
import {
  seoCollections,
  SerializableSeoCollection,
  getCollectionBadge,
  getCollectionIntro,
  getCollectionTitle,
} from '@/data/collections';
import { useLanguage } from '@/context/LanguageContext';
import QuoteCard from '@/components/QuoteCard';
import AdSlot from '@/components/AdSlot';
import SupportAndResourcesCard from '@/components/SupportAndResourcesCard';

interface CollectionDetailViewProps {
  collection: SerializableSeoCollection;
  matchedQuotes: Quote[];
}

const INITIAL_COUNT = 12;
const STEP_COUNT = 12;

export default function CollectionDetailView({
  collection,
  matchedQuotes,
}: CollectionDetailViewProps) {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const badge = getCollectionBadge(collection, language);
  const title = getCollectionTitle(collection, language);
  const intro = getCollectionIntro(collection, language);
  const visibleQuotes = matchedQuotes.slice(0, visibleCount);
  const remaining = Math.max(0, matchedQuotes.length - visibleCount);
  const ArrowIcon = isUrdu ? ChevronLeft : ChevronRight;

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
        <Link href="/collections" className="hover:text-emerald-800 dark:hover:text-amber-300 font-medium transition">
          {isUrdu ? 'موضوعاتی مجموعے' : language === 'ro' ? 'Muntakhab Collections' : 'Collections'}
        </Link>
        <ArrowIcon className="w-3.5 h-3.5 opacity-60 shrink-0" />
        <span className="text-slate-900 dark:text-white font-semibold line-clamp-1">{title}</span>
      </nav>

      {/* Hero Header Card */}
      <header className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-950 via-[#0d2b22] to-[#081c16] text-white border border-emerald-800/70 shadow-lg space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className={isUrdu ? 'font-urdu leading-normal' : ''}>{badge}</span>
        </div>

        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug ${
            isUrdu ? 'font-urdu leading-[1.9] sm:leading-[2.0]' : ''
          }`}
        >
          {title}
        </h1>

        <p
          className={`text-sm sm:text-base text-emerald-100/90 max-w-3xl leading-relaxed ${
            isUrdu ? 'font-urdu leading-[2.1] text-base sm:text-lg' : ''
          }`}
        >
          {intro}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-emerald-100 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <BookMarked className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {matchedQuotes.length}{' '}
              {isUrdu ? 'مستند اقوال و ارشادات' : language === 'ro' ? 'Mustanad Aqwal' : 'Curated Quotes & Hadiths'}
            </span>
          </span>
        </div>

        {/* Hub Switcher Pills */}
        <div className="pt-3 border-t border-emerald-800/60 flex items-center gap-2 flex-wrap">
          {seoCollections.map((hub) => {
            const isCurrent = hub.slug === collection.slug;
            const hubLabel = getCollectionTitle(hub, language);
            return (
              <Link
                key={hub.slug}
                href={`/collections/${hub.slug}`}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                  isUrdu ? 'font-urdu leading-normal' : ''
                } ${
                  isCurrent
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/10'
                }`}
              >
                {hubLabel}
              </Link>
            );
          })}
        </div>
      </header>

      <AdSlot position="header" />

      {/* Quote Grid */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {visibleQuotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>

        {remaining > 0 && (
          <div className="pt-3 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + STEP_COUNT)}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer ${
                isUrdu ? 'font-urdu leading-normal' : ''
              }`}
            >
              <span>
                {isUrdu
                  ? `مزید اقوال دیکھیں (${remaining} باقی)`
                  : language === 'ro'
                  ? `Mazeed Aqwal Dekhein (${remaining} Baqi)`
                  : `Load More Quotes (${remaining} Remaining)`}
              </span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </div>
        )}
      </section>

      <AdSlot position="in-article" />

      {/* FAQ Section */}
      {collection.faqs.length > 0 && (
        <section
          aria-label="Frequently Asked Questions"
          className="rounded-3xl p-5 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm space-y-5"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <h2 className={`text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {t.faqHeading}
            </h2>
          </div>

          <div className="space-y-3">
            {collection.faqs.map((faq, idx) => {
              const q = isUrdu ? faq.questionUrdu : language === 'en' ? faq.questionEnglish : faq.questionRoman;
              const a = isUrdu ? faq.answerUrdu : language === 'en' ? faq.answerEnglish : faq.answerRoman;
              return (
                <details
                  key={idx}
                  open={idx === 0}
                  className="group p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-[#0d1b16] border border-stone-200 dark:border-emerald-800/50"
                >
                  <summary
                    className={`font-bold text-sm sm:text-base text-slate-900 dark:text-emerald-200 cursor-pointer list-none flex items-center justify-between gap-2 ${
                      isUrdu ? 'font-urdu leading-relaxed' : ''
                    }`}
                  >
                    <span>{q}</span>
                    <ChevronDown className="w-4 h-4 text-emerald-700 dark:text-amber-400 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p
                    className={`mt-3 text-xs sm:text-sm text-slate-700 dark:text-emerald-100/85 ${
                      isUrdu ? 'font-urdu leading-[2.05]' : 'leading-relaxed'
                    }`}
                  >
                    {a}
                  </p>
                </details>
              );
            })}
          </div>
        </section>
      )}

      <SupportAndResourcesCard />

      <AdSlot position="footer" />
    </div>
  );
}
