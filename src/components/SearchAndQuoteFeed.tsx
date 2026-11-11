'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, ChevronDown } from 'lucide-react';
import { Quote } from '@/data/types';
import QuoteCard from './QuoteCard';
import { useLanguage } from '@/context/LanguageContext';
import {
  getQuoteText,
  getQuoteTitle,
  getQuoteAuthor,
  getQuoteTashreeh,
  getQuoteTags,
} from '@/data/quotes';

interface SearchAndQuoteFeedProps {
  initialQuotes: Quote[];
}

const INITIAL_VISIBLE_COUNT = 18;
const LOAD_MORE_STEP = 24;

export default function SearchAndQuoteFeed({ initialQuotes }: SearchAndQuoteFeedProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);
  const { language, t } = useLanguage();

  const isUrdu = language === 'ur';

  const quickPillsByLang = {
    ur: [
      { key: 'All', label: 'تمام اقوال' },
      { key: 'Islah', label: 'اصلاح' },
      { key: 'Sabr', label: 'صبر' },
      { key: 'Shukr', label: 'شکر' },
      { key: 'Hamsaya', label: 'ہمسایہ' },
      { key: 'Ilm', label: 'علم' },
      { key: 'Akhlaq', label: 'اخلاق' },
      { key: 'Tawazoh', label: 'تواضع' },
    ],
    ro: [
      { key: 'All', label: 'Tamam Aqwal' },
      { key: 'Islah', label: 'Islah' },
      { key: 'Sabr', label: 'Sabr' },
      { key: 'Shukr', label: 'Shukr' },
      { key: 'Hamsaya', label: 'Hamsaya' },
      { key: 'Ilm', label: 'Ilm' },
      { key: 'Akhlaq', label: 'Akhlaq' },
      { key: 'Tawazoh', label: 'Tawazoh' },
    ],
    en: [
      { key: 'All', label: 'All Sayings' },
      { key: 'Islah', label: 'Self-Reform' },
      { key: 'Sabr', label: 'Patience' },
      { key: 'Shukr', label: 'Gratitude' },
      { key: 'Hamsaya', label: 'Neighbors' },
      { key: 'Ilm', label: 'Knowledge' },
      { key: 'Akhlaq', label: 'Character' },
      { key: 'Tawazoh', label: 'Humility' },
    ],
  }[language];

  const filteredQuotes = useMemo(() => {
    return initialQuotes.filter((q) => {
      // Filter by tag
      if (selectedTag !== 'All') {
        const hasTag = q.tags.some(
          (item) => item.toLowerCase() === selectedTag.toLowerCase()
        );
        if (!hasTag) return false;
      }

      // Filter by category
      if (selectedCategory !== 'All' && q.category !== selectedCategory) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const text = getQuoteText(q, language).toLowerCase();
        const title = getQuoteTitle(q, language).toLowerCase();
        const author = getQuoteAuthor(q, language).toLowerCase();
        const tashreeh = getQuoteTashreeh(q, language).toLowerCase();
        const tags = getQuoteTags(q, language).join(' ').toLowerCase();

        // Also search across alternative languages for user convenience
        const anyText = `${q.urdu} ${q.roman} ${q.english} ${q.author} ${q.authorUrdu} ${q.authorEnglish} ${q.title ? `${q.title.ur} ${q.title.ro} ${q.title.en}` : ''}`.toLowerCase();

        if (
          !text.includes(query) &&
          !title.includes(query) &&
          !author.includes(query) &&
          !tashreeh.includes(query) &&
          !tags.includes(query) &&
          !anyText.includes(query)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [initialQuotes, searchQuery, selectedTag, selectedCategory, language]);

  const visibleQuotes = useMemo(() => {
    return filteredQuotes.slice(0, visibleCount);
  }, [filteredQuotes, visibleCount]);

  const remainingCount = Math.max(0, filteredQuotes.length - visibleQuotes.length);
  const nextBatchCount = Math.min(LOAD_MORE_STEP, remainingCount);

  return (
    <section className="w-full space-y-4 sm:space-y-6">
      {/* Search Input Bar with Strict Isolation */}
      <div className="relative max-w-3xl mx-auto">
        <div className="relative flex items-center h-12 shadow-sm rounded-2xl overflow-hidden border border-stone-300 dark:border-emerald-800/60 bg-white dark:bg-[#11221c] focus-within:ring-2 focus-within:ring-emerald-800/60 transition">
          <div className="px-3.5 text-emerald-800 dark:text-emerald-400 shrink-0">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(INITIAL_VISIBLE_COUNT);
            }}
            placeholder={t.searchPlaceholder}
            className={`w-full h-full py-0 px-2 text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none ${
              isUrdu ? 'font-urdu leading-normal' : ''
            }`}
            aria-label="Search"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setVisibleCount(INITIAL_VISIBLE_COUNT);
              }}
              className="px-3.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 shrink-0"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Topic Pills Bar (Swipeable on Mobile) */}
      <div className="w-full max-w-full overflow-hidden pt-1">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
          <span
            className={`text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider px-1 hidden sm:inline shrink-0 ${
              isUrdu ? 'font-urdu text-xs' : ''
            }`}
          >
            {t.topicsHeading}
          </span>
          {quickPillsByLang.map((pill) => {
            const isActive = selectedTag === pill.key;
            return (
              <button
                key={pill.key}
                onClick={() => {
                  setSelectedTag(pill.key);
                  setVisibleCount(INITIAL_VISIBLE_COUNT);
                }}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  isUrdu ? 'font-urdu text-xs leading-normal' : ''
                } ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-stone-300 dark:border-slate-700 hover:border-emerald-700 hover:text-emerald-800'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Reset Filter */}
      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 px-1">
        <span className={isUrdu ? 'font-urdu text-xs sm:text-sm' : ''}>
          {t.availableQuotes} <strong>{filteredQuotes.length}</strong> {t.itemsFound}
        </span>
        {(searchQuery || selectedTag !== 'All' || selectedCategory !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('All');
              setSelectedCategory('All');
              setVisibleCount(INITIAL_VISIBLE_COUNT);
            }}
            className={`text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 ${
              isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
            }`}
          >
            <span>{t.resetFilters}</span>
          </button>
        )}
      </div>

      {/* Quotes Cards Grid */}
      {filteredQuotes.length > 0 ? (
        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {visibleQuotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>

          {remainingCount > 0 && (
            <div className="pt-2 pb-2 flex flex-col items-center justify-center gap-3">
              <p
                className={`text-xs sm:text-sm text-slate-500 dark:text-slate-400 ${
                  isUrdu ? 'font-urdu leading-normal' : ''
                }`}
              >
                {isUrdu
                  ? `اس وقت ${visibleQuotes.length} از ${filteredQuotes.length} اقوال دکھائے جا رہے ہیں`
                  : language === 'ro'
                  ? `Abhi ${visibleQuotes.length} / ${filteredQuotes.length} aqwal dikhaye ja rahe hain`
                  : `Showing ${visibleQuotes.length} of ${filteredQuotes.length} sayings`}
              </p>

              <div className="w-52 h-1.5 rounded-full bg-stone-200 dark:bg-emerald-950 overflow-hidden">
                <div
                  className="h-full bg-emerald-700 dark:bg-amber-400 transition-all duration-300 rounded-full"
                  style={{
                    width: `${Math.min(100, (visibleQuotes.length / filteredQuotes.length) * 100)}%`,
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer ${
                  isUrdu ? 'font-urdu leading-normal' : ''
                }`}
              >
                {isUrdu ? (
                  <>
                    <span>مزید اقوال دیکھیں</span>
                    <span dir="ltr" className="font-sans text-xs sm:text-sm opacity-95">
                      (Load More — {nextBatchCount} More)
                    </span>
                  </>
                ) : language === 'ro' ? (
                  <span>Mazeed Aqwal Dekhein (Load More — {nextBatchCount} More)</span>
                ) : (
                  <span>Load More Sayings ({nextBatchCount} More)</span>
                )}
                <ChevronDown className="w-4 h-4 shrink-0" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3
            className={`text-base font-semibold text-slate-800 dark:text-slate-200 ${
              isUrdu ? 'font-urdu text-xl' : ''
            }`}
          >
            {t.noResultsTitle}
          </h3>
          <p
            className={`text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto ${
              isUrdu ? 'font-urdu text-sm' : ''
            }`}
          >
            {t.noResultsDesc}
          </p>
        </div>
      )}
    </section>
  );
}
