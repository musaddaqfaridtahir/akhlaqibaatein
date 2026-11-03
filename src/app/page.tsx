'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Compass,
  HeartHandshake,
  ScrollText,
  Library,
  Clock,
  Award,
} from 'lucide-react';
import { categories, getCategoryTitle, getCategoryDesc } from '@/data/categories';
import { quotes } from '@/data/quotes';
import {
  articles,
  getArticleTitle,
  getArticleSummary,
  getArticleAuthor,
  getArticleReadTime,
} from '@/data/articles';
import {
  books,
  getBookTitle,
  getBookDesc,
  getBookAuthor,
  getChapterTitle,
} from '@/data/books';
import SearchAndQuoteFeed from '@/components/SearchAndQuoteFeed';
import QuoteCard from '@/components/QuoteCard';
import AdSlot from '@/components/AdSlot';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  const quoteOfTheDay = quotes.find((q) => q.featured) || quotes[0];
  const featuredArticles = articles.slice(0, 3);
  const primaryBook = books[0];

  const heroContent = {
    ur: {
      badge: 'کلاسیکی اخلاقیات و روحانی بصیرت کا گنجینہ',
      title: 'اخلاقی باتیں و اسلامی حکمت',
      desc: 'قرآنی احکام، ارشاداتِ نبوی ﷺ، اقوالِ صحابہؓ اور کلاسیکی کتب (جیسے مخزنِ اخلاق) کا مستند ذخیرہ۔ باوقار واٹس ایپ اسٹیٹس جنریٹر کے ساتھ۔',
      hadithBtn: 'چہل احادیث حفظ کریں',
      libraryBtn: 'کتب خانہ دیکھیں',
      categoriesHeading: 'موضوعات و ابوابِ اخلاق',
      categoriesSub: 'کلاسیکی کتب کے موضوعاتی ابواب کے مطابق اخلاقی تعلیمات پڑھیں',
      allCategoryQuotes: 'تمام اقوال پڑھیں',
    },
    ro: {
      badge: 'Classic Akhlaqiat aur Roohani Baseerat ka Zakheera',
      title: 'Akhlaqi Baatein aur Islami Hikmat',
      desc: 'Quran-e-Majeed, Irshadat-e-Nabawi ﷺ, Aqwal-e-Sahaba (R.A) aur classic kutub (Makhzan-e-Akhlaq) ka mustanad zakheera. WhatsApp status card generator ke sath.',
      hadithBtn: '40 Ahadith Hifz Karein',
      libraryBtn: 'Kutub Khana Dekhein',
      categoriesHeading: 'Categories aur Abwab-e-Akhlaq',
      categoriesSub: 'Classic kitabon ke abwab ke mutabiq aqwal o irshadat parhein',
      allCategoryQuotes: 'Tamam Aqwal Parhein',
    },
    en: {
      badge: 'Treasury of Classical Islamic Ethics & Spiritual Wisdom',
      title: 'Akhlaqi Baatein & Islamic Wisdom',
      desc: 'Authentic Quranic injunctions, Prophetic traditions, sayings of the Companions, and classical moral literature with instant WhatsApp status card generator.',
      hadithBtn: 'Memorize 40 Hadith',
      libraryBtn: 'Explore Books Library',
      categoriesHeading: 'Thematic Moral Categories',
      categoriesSub: 'Browse ethical teachings organized by classical literary chapters',
      allCategoryQuotes: 'Explore All Sayings',
    },
  }[language];

  const categoryIcons: Record<string, React.ReactNode> = {
    'ahkam-e-khuda': <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    'irshadat-e-nabawi': <Sparkles className="w-6 h-6 text-amber-500" />,
    'khasail-e-nabawi': <HeartHandshake className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    'aqwal-e-sahaba': <ShieldCheck className="w-6 h-6 text-amber-500" />,
    'ambiya-o-hukama': <Compass className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    'sabaq-aamoz-waqiat': <ScrollText className="w-6 h-6 text-amber-500" />,
  };

  return (
    <div className="space-y-10 sm:space-y-16">
      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-10 md:py-14 md:px-12 lg:p-16 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-2xl border border-amber-500/30 islamic-pattern">
        <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{heroContent.badge}</span>
          </div>

          <h1
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white ${
              isUrdu ? 'font-urdu leading-[2.1]' : 'leading-tight'
            }`}
          >
            {heroContent.title}
          </h1>

          <p
            className={`text-sm sm:text-xl text-emerald-100/90 font-light ${
              isUrdu ? 'font-urdu leading-[2.3]' : 'leading-relaxed'
            }`}
          >
            {heroContent.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/chahal-hadith"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-amber-500/20 transition active:scale-95 ${
                isUrdu ? 'font-urdu text-base' : ''
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{heroContent.hadithBtn}</span>
            </Link>

            <Link
              href="/books"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/15 transition active:scale-95 ${
                isUrdu ? 'font-urdu text-base' : ''
              }`}
            >
              <Library className="w-4 h-4" />
              <span>{heroContent.libraryBtn}</span>
            </Link>
          </div>
        </div>

        {/* Decorative Golden Ambient Blur */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Quote of the Day Spotlight Card */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2
              className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-white ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              {t.quoteOfTheDay}
            </h2>
          </div>
          <span
            className={`text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            {t.selectedQuote}
          </span>
        </div>
        <QuoteCard quote={quoteOfTheDay} />
      </section>

      {/* Category Grid Section */}
      <section id="categories" className="space-y-6 scroll-mt-24">
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            {heroContent.categoriesHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {heroContent.categoriesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const catTitle = getCategoryTitle(cat, language);
            const catDesc = getCategoryDesc(cat, language);

            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 group-hover:bg-amber-500/10 transition-colors">
                      {categoryIcons[cat.slug] || <BookOpen className="w-6 h-6 text-emerald-600" />}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {cat.quoteCount}+
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors ${
                        isUrdu ? 'font-urdu leading-[2.1]' : ''
                      }`}
                    >
                      {catTitle}
                    </h3>
                  </div>

                  <p
                    className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 ${
                      isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'
                    }`}
                  >
                    {catDesc}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400 ${
                    isUrdu ? 'font-urdu text-sm' : ''
                  }`}
                >
                  <span>{heroContent.allCategoryQuotes}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Main Interactive Search & Quotes Feed */}
      <section className="space-y-6 pt-4">
        <SearchAndQuoteFeed initialQuotes={quotes} />
      </section>

      {/* Mid-Page AdSlot */}
      <AdSlot position="in-article" />

      {/* Long-Form Moral & Seerat Articles Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2
              className={`text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              {t.featuredArticles}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t.featuredArticlesDesc}
            </p>
          </div>
          <Link
            href="/articles"
            className={`text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 self-start sm:self-auto ${
              isUrdu ? 'font-urdu text-sm' : ''
            }`}
          >
            <span>{t.allArticlesLink}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((art) => {
            const artTitle = getArticleTitle(art, language);
            const artSummary = getArticleSummary(art, language);
            const artAuthor = getArticleAuthor(art, language);
            const artReadTime = getArticleReadTime(art, language);

            return (
              <article
                key={art.slug}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-6 border border-stone-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium">
                      #{art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{artReadTime}</span>
                    </span>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors ${
                      isUrdu ? 'font-urdu leading-[2.1]' : 'leading-snug'
                    }`}
                  >
                    <Link href={`/articles/${art.slug}`}>{artTitle}</Link>
                  </h3>

                  <p
                    className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 ${
                      isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'
                    }`}
                  >
                    {artSummary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className={`text-slate-600 dark:text-slate-300 ${isUrdu ? 'font-urdu' : ''}`}>
                    {artAuthor}
                  </span>
                  <Link
                    href={`/articles/${art.slug}`}
                    className={`font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 flex items-center gap-1 ${
                      isUrdu ? 'font-urdu' : ''
                    }`}
                  >
                    <span>{t.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Classic Books Showcase: Makhzan-e-Akhlaq */}
      <section className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-emerald-900 via-emerald-950 to-slate-900 text-white shadow-xl border border-amber-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Library className="w-3.5 h-3.5" />
              <span>{t.bookShowcaseTag}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold ${isUrdu ? 'font-urdu leading-[2.0]' : ''}`}>
              {getBookTitle(primaryBook, language)}
            </h2>

            <p className={`text-sm sm:text-base text-emerald-100/90 ${isUrdu ? 'font-urdu leading-[2.2]' : 'leading-relaxed'}`}>
              {getBookDesc(primaryBook, language)}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              {primaryBook.chapters.map((ch) => (
                <span
                  key={ch.number}
                  className={`px-3 py-1 rounded-xl bg-white/10 text-emerald-200 border border-white/10 ${
                    isUrdu ? 'font-urdu' : ''
                  }`}
                >
                  {getChapterTitle(ch, language)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center shadow-inner">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <p className={`text-base font-bold text-white ${isUrdu ? 'font-urdu' : ''}`}>
                {getBookAuthor(primaryBook, language)}
              </p>
            </div>
            <Link
              href="/books"
              className={`w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition shadow-md ${
                isUrdu ? 'font-urdu text-sm' : ''
              }`}
            >
              {t.viewAllChapters}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
