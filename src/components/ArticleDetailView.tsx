'use client';

import React from 'react';
import Link from 'next/link';
import {
  Clock,
  Sparkles,
  CheckCircle2,
  ListOrdered,
  HelpCircle,
} from 'lucide-react';
import { Article, Category } from '@/data/types';
import {
  getArticleTitle,
  getArticleSummary,
  getArticleAuthor,
  getArticleReadTime,
} from '@/data/articles';
import { getCategoryTitle } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import AdSlot from './AdSlot';

interface ArticleDetailViewProps {
  article: Article;
  category?: Category;
}

export default function ArticleDetailView({
  article,
  category,
}: ArticleDetailViewProps) {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  const title = getArticleTitle(article, language);
  const summary = getArticleSummary(article, language);
  const author = getArticleAuthor(article, language);
  const readTime = getArticleReadTime(article, language);
  let categoryTitle = category ? getCategoryTitle(category, language) : article.category;
  if (article.category === 'hikayat-e-rumi') {
    categoryTitle = language === 'ur' ? 'حکایاتِ رومیؒ' : language === 'en' ? 'Hikayat-e-Rumi' : 'Hikayat-e-Rumi';
  }

  const takeaways =
    language === 'ur'
      ? article.keyTakeaways
      : language === 'en'
      ? article.keyTakeawaysEnglish
      : article.keyTakeawaysRoman;

  return (
    <article className="max-w-4xl mx-auto space-y-8 sm:space-y-10 overflow-hidden">
      {/* Article Hero Card */}
      <header className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
              #{categoryTitle}
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{readTime}</span>
            </span>
          </div>
          <span className={isUrdu ? 'font-urdu' : ''}>
            {t.publishedOn} {article.publishedAt}
          </span>
        </div>

        <h1
          className={`font-bold text-slate-900 dark:text-white ${
            isUrdu
              ? 'font-urdu text-xl sm:text-3xl lg:text-4xl leading-[1.8] sm:leading-[2.0] text-right'
              : 'text-xl sm:text-3xl lg:text-4xl leading-tight text-left'
          }`}
        >
          {title}
        </h1>

        {/* Executive Summary Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border-s-4 border-emerald-600 text-slate-800 dark:text-slate-200 space-y-2">
          <p className={isUrdu ? 'font-urdu text-xs sm:text-base leading-[1.85] sm:leading-[1.95]' : 'text-xs sm:text-base leading-relaxed'}>
            {summary}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 dark:border-slate-800 flex-wrap gap-2">
          <span className={`text-emerald-900 dark:text-emerald-300 font-medium ${isUrdu ? 'font-urdu text-sm' : ''}`}>
            {article.authorName ? `${language === 'ur' ? 'مصنف: ' : language === 'en' ? 'Author: ' : 'Musannif: '}${article.authorName}` : author}
          </span>
          {article.reviewerName && (
            <span className={`text-slate-600 dark:text-slate-400 font-medium ${isUrdu ? 'font-urdu text-sm' : ''}`}>
              {language === 'ur' ? 'تحقیقی جائزہ: ' : language === 'en' ? 'Reviewed by: ' : 'Tahqeeqi Jaiza: '}{article.reviewerName}
            </span>
          )}
        </div>
      </header>

      {/* Table of Contents Box */}
      <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-3">
        <h3 className={`font-semibold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2 ${isUrdu ? 'font-urdu text-lg' : ''}`}>
          <ListOrdered className="w-4 h-4 text-amber-500" />
          <span>{t.tableOfContents}</span>
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm">
          {article.content.map((sec, idx) => {
            const secHeading =
              language === 'ur'
                ? sec.headingUrdu
                : language === 'en'
                ? sec.headingEnglish
                : sec.headingRoman;

            return (
              <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </span>
                <a
                  href={`#section-${idx}`}
                  className={`hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline ${
                    isUrdu ? 'font-urdu text-sm' : ''
                  }`}
                >
                  {secHeading}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Article Body Sections */}
      <div className="space-y-10">
        {article.content.map((sec, idx) => {
          const secHeading =
            language === 'ur'
              ? sec.headingUrdu
              : language === 'en'
              ? sec.headingEnglish
              : sec.headingRoman;

          const secBody =
            language === 'ur'
              ? sec.bodyUrdu
              : language === 'en'
              ? sec.bodyEnglish
              : sec.bodyRoman;

          return (
            <section
              key={idx}
              id={`section-${idx}`}
              className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200/80 dark:border-emerald-800/60 shadow-md space-y-6 scroll-mt-24"
            >
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between flex-wrap gap-2">
                <h2
                  className={`font-bold text-emerald-950 dark:text-emerald-300 ${
                    isUrdu ? 'font-urdu text-lg sm:text-2xl leading-[1.8]' : 'text-lg sm:text-2xl leading-snug'
                  }`}
                >
                  {secHeading}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-medium">
                  #{idx + 1}
                </span>
              </div>

              {/* Strict Language Paragraphs */}
              <div
                className={`text-slate-800 dark:text-slate-200 space-y-4 ${
                  isUrdu
                    ? 'font-urdu text-sm sm:text-base leading-[1.85] sm:leading-[2.0] text-right'
                    : 'text-xs sm:text-base leading-relaxed text-left'
                }`}
              >
                {secBody.split('\n').map((para, pIdx) => {
                  const hasArabicHarakat = (para.match(/[\u064B-\u065F\u0670]/g) || []).length >= 3;
                  return (
                    <p
                      key={pIdx}
                      className={
                        hasArabicHarakat
                          ? 'font-arabic text-base sm:text-xl md:text-2xl leading-[2.5] text-emerald-950 dark:text-emerald-200 font-medium py-1.5'
                          : ''
                      }
                      dir={hasArabicHarakat ? 'rtl' : undefined}
                      lang={hasArabicHarakat ? 'ar' : undefined}
                    >
                      {para}
                    </p>
                  );
                })}
              </div>

              {idx === 1 && <AdSlot position="in-article" />}
            </section>
          );
        })}
      </div>

      {/* Key Takeaways Card */}
      <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white shadow-xl border border-amber-500/30 space-y-5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h2 className={`text-2xl font-bold ${isUrdu ? 'font-urdu' : ''}`}>
            {t.keyTakeaways}
          </h2>
        </div>

        <ul className="space-y-3">
          {takeaways.map((takeaway, tIdx) => (
            <li
              key={tIdx}
              className={`flex items-start gap-3 ${
                isUrdu ? 'font-urdu text-base leading-[2.1]' : 'text-sm sm:text-base leading-relaxed'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Frequently Asked Questions (FAQ) Card */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200/80 dark:border-emerald-800/60 shadow-md space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'اہم سوالات و جوابات (FAQ)'
                : language === 'en'
                ? 'Frequently Asked Questions (FAQ)'
                : 'Ahem Sawalaat o Jawabaat (FAQ)'}
            </h2>
          </div>

          <div className="space-y-4">
            {article.faqs.map((faq, fIdx) => {
              const q =
                language === 'ur'
                  ? faq.questionUrdu
                  : language === 'en'
                  ? faq.questionEnglish
                  : faq.questionRoman;
              const a =
                language === 'ur'
                  ? faq.answerUrdu
                  : language === 'en'
                  ? faq.answerEnglish
                  : faq.answerRoman;

              return (
                <div
                  key={fIdx}
                  className="rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/60 dark:border-emerald-800/40 space-y-2"
                >
                  <h3
                    className={`font-bold text-emerald-950 dark:text-emerald-300 flex items-start gap-2 ${
                      isUrdu
                        ? 'font-urdu text-base sm:text-lg leading-[1.8] text-right'
                        : 'text-sm sm:text-base font-semibold text-left'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs flex items-center justify-center shrink-0 mt-0.5">
                      Q{fIdx + 1}
                    </span>
                    <span>{q}</span>
                  </h3>
                  <div
                    className={`text-slate-700 dark:text-slate-300 ps-8 ${
                      isUrdu
                        ? 'font-urdu text-sm sm:text-base leading-[1.85] text-right'
                        : 'text-xs sm:text-sm leading-relaxed text-left'
                    }`}
                  >
                    <p>{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Article Tags */}
      <div className="flex items-center gap-2 flex-wrap pt-4">
        <span className="text-xs font-semibold text-slate-400 uppercase">Tags:</span>
        {article.tags.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
          >
            #{item}
          </span>
        ))}
      </div>
    </article>
  );
}
