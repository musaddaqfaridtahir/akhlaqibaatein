'use client';

import React from 'react';
import Link from 'next/link';
import { Folder, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Category } from '@/data/types';
import { getCategoryTitle, getCategoryDesc } from '@/data/categories';
import { Quote, Article } from '@/data/types';
import {
  getArticleTitle,
  getArticleSummary,
  getArticleReadTime,
} from '@/data/articles';
import QuoteCard from './QuoteCard';
import { useLanguage } from '@/context/LanguageContext';

interface CategoryDetailViewProps {
  category: Category;
  quotes: Quote[];
  articles: Article[];
}

export default function CategoryDetailView({
  category,
  quotes,
  articles,
}: CategoryDetailViewProps) {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  const catTitle = getCategoryTitle(category, language);
  const catDesc = getCategoryDesc(category, language);

  return (
    <div className="space-y-12">
      {/* Category Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/30 dark:from-emerald-950 dark:via-emerald-900 dark:to-slate-950 text-slate-900 dark:text-white shadow-md dark:shadow-xl border border-stone-200/90 dark:border-amber-500/30">
        <div className="relative z-10 space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-amber-500/20 text-emerald-900 dark:text-amber-300 text-xs font-semibold border border-emerald-200 dark:border-amber-500/30">
            <Folder className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
            <span className={isUrdu ? 'font-urdu' : ''}>{t.categories}</span>
          </div>

          <h1
            className={`text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white break-words ${
              isUrdu ? 'font-urdu leading-[1.8]' : 'leading-tight'
            }`}
          >
            {catTitle}
          </h1>

          <p
            className={`text-xs sm:text-base text-slate-700 dark:text-emerald-100/90 break-words ${
              isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
            }`}
          >
            {catDesc}
          </p>
        </div>

        <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 bg-emerald-500/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Quotes Feed in Category */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-2xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
            {catTitle} ({quotes.length})
          </h2>
          <span className="text-xs text-slate-500">
            {quotes.length} {t.itemsFound}
          </span>
        </div>

        {quotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {quotes.map((q) => (
              <QuoteCard key={q.id} quote={q} showCategoryBadge={false} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-[#11221c] rounded-3xl border border-stone-200 dark:border-emerald-800/60">
            <BookOpen className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
            <p className={`text-sm text-slate-600 dark:text-emerald-300 ${isUrdu ? 'font-urdu' : ''}`}>
              {t.noResultsTitle}
            </p>
          </div>
        )}
      </section>

      {/* Articles in Category (if any) */}
      {articles.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-emerald-800/40">
          <h2 className={`text-2xl font-bold text-slate-900 dark:text-[#f0fdf4] ${isUrdu ? 'font-urdu' : ''}`}>
            {t.featuredArticles}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {articles.map((art) => {
              const artTitle = getArticleTitle(art, language);
              const artSummary = getArticleSummary(art, language);
              const artReadTime = getArticleReadTime(art, language);

              return (
                <article
                  key={art.slug}
                  className="bg-white dark:bg-[#11221c] rounded-3xl p-6 border border-stone-200 dark:border-emerald-800/60 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-emerald-300/70">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-500" />
                        <span>{artReadTime}</span>
                      </span>
                      <span>{art.publishedAt}</span>
                    </div>

                    <h3
                      className={`text-xl font-bold text-slate-900 dark:text-[#f0fdf4] ${
                        isUrdu ? 'font-urdu leading-[2.1]' : 'leading-snug'
                      }`}
                    >
                      <Link href={`/articles/${art.slug}`}>{artTitle}</Link>
                    </h3>

                    <p
                      className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/90 line-clamp-2 ${
                        isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'
                      }`}
                    >
                      {artSummary}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-100 dark:border-emerald-800/40 flex justify-end">
                    <Link
                      href={`/articles/${art.slug}`}
                      className={`text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 ${
                        isUrdu ? 'font-urdu' : ''
                      }`}
                    >
                      <span>{t.readArticle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
