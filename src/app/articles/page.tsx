'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import {
  articles,
  getArticleTitle,
  getArticleSummary,
  getArticleAuthor,
  getArticleReadTime,
} from '@/data/articles';
import AdSlot from '@/components/AdSlot';
import { useLanguage } from '@/context/LanguageContext';
import { getCategoryBySlug, getCategoryTitle } from '@/data/categories';

export default function ArticlesPage() {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categoryFilters = [
    { id: 'all', labelUrdu: 'تمام مقالات', labelRoman: 'Tamam Articles', labelEnglish: 'All Articles' },
    { id: 'hikayat-e-rumi', labelUrdu: 'حکایاتِ رومیؒ', labelRoman: 'Hikayat-e-Rumi', labelEnglish: 'Rumi Stories' },
    { id: 'khasail-e-nabawi', labelUrdu: 'سیرت و خصائلِ نبوی ﷺ', labelRoman: 'Seerat-e-Nabawi ﷺ', labelEnglish: 'Prophetic Character' },
    { id: 'irshadat-e-nabawi', labelUrdu: 'احادیث و ارشادات', labelRoman: 'Hadith & Teachings', labelEnglish: 'Hadith & Teachings' },
    { id: 'aqwal-e-sahaba', labelUrdu: 'اقوالِ صحابہؓ و تاریخ', labelRoman: 'Aqwal-e-Sahaba & History', labelEnglish: 'Companions & History' },
    { id: 'ahkam-e-khuda', labelUrdu: 'قرآنی احکام و فلسفہ', labelRoman: 'Qurani Ahkam', labelEnglish: 'Quranic Injunctions' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter((art) => art.category === selectedCategory);

  const pageHeaders = {
    ur: {
      badge: 'علمی و اخلاقی مقالات',
      title: 'سبق آموز مضامین، سیرت و تاریخ',
      desc: 'حضور اکرم ﷺ کی پاکیزہ سیرت، صحابہ کرامؓ کے عدل و ایثار اور اسلامی اخلاقیات کے جامع فہم پر مبنی طویل اور مستند تحریریں۔',
    },
    ro: {
      badge: 'Ilmi aur Akhlaqi Maqalaat',
      title: 'Sabaq Aamoz Mazameen, Seerat aur Tareekh',
      desc: 'Huzoor ﷺ ki seerat, Sahaba Karam (R.A) ke adal aur Islami akhlaqiat par mustanad aur tafseeli tehreerein.',
    },
    en: {
      badge: 'Ethical & Historical Treatises',
      title: 'Moral Essays, Prophetic Biography & History',
      desc: 'Research-grounded, authentic reflections exploring the sublime character of Prophet Muhammad ﷺ, the justice of the Caliphs, and timeless social ethics.',
    },
  }[language];

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <section className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-xl border border-amber-500/30">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{pageHeaders.badge}</span>
          </div>

          <h1
            className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-white break-words ${
              isUrdu ? 'font-urdu leading-[2.1]' : 'leading-tight'
            }`}
          >
            {pageHeaders.title}
          </h1>

          <p
            className={`text-sm sm:text-base text-emerald-100/90 break-words ${
              isUrdu ? 'font-urdu leading-[2.2]' : 'leading-relaxed'
            }`}
          >
            {pageHeaders.desc}
          </p>
        </div>
      </section>

      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Category Filter Tags */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categoryFilters.map((tab) => {
          const isActive = selectedCategory === tab.id;
          const label = language === 'ur' ? tab.labelUrdu : language === 'en' ? tab.labelEnglish : tab.labelRoman;
          const count = tab.id === 'all' ? articles.length : articles.filter((a) => a.category === tab.id).length;
          if (count === 0 && tab.id !== 'all') return null;

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              } ${isUrdu ? 'font-urdu' : ''}`}
            >
              <span>{label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-emerald-900 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredArticles.map((art) => {
          const artTitle = getArticleTitle(art, language);
          const artSummary = getArticleSummary(art, language);
          const artAuthor = getArticleAuthor(art, language);
          const artReadTime = getArticleReadTime(art, language);
          const catObj = getCategoryBySlug(art.category);
          const catTitle =
            art.category === 'hikayat-e-rumi'
              ? (language === 'ur' ? 'حکایاتِ رومیؒ' : 'Hikayat-e-Rumi')
              : (catObj ? getCategoryTitle(catObj, language) : art.category);

          return (
            <article
              key={art.slug}
              className="group bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span
                    className={`px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200/60 dark:border-emerald-800 ${
                      isUrdu ? 'font-urdu leading-normal' : ''
                    }`}
                  >
                    #{catTitle}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{artReadTime}</span>
                  </span>
                </div>

                <div>
                  <h2
                    className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors ${
                      isUrdu ? 'font-urdu leading-[2.1]' : 'leading-snug'
                    }`}
                  >
                    <Link href={`/articles/${art.slug}`}>{artTitle}</Link>
                  </h2>
                </div>

                <p
                  className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 ${
                    isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'
                  }`}
                >
                  {artSummary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className={`text-slate-600 dark:text-slate-300 ${isUrdu ? 'font-urdu' : ''}`}>
                  {artAuthor}
                </span>
                <Link
                  href={`/articles/${art.slug}`}
                  className={`font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                    isUrdu ? 'font-urdu text-sm' : ''
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

      <AdSlot position="in-article" />
    </div>
  );
}
