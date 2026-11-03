'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Copy,
  Check,
  Download,
  Share2,
} from 'lucide-react';
import { Quote, Category } from '@/data/types';
import {
  getQuoteText,
  getQuoteTitle,
  getQuoteAuthor,
  getQuoteTashreeh,
  getQuoteAmliSabaq,
  getQuoteSource,
  getQuoteTags,
} from '@/data/quotes';
import { getCategoryTitle } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import QuoteCard from './QuoteCard';
import StatusImageModal from './StatusImageModal';

interface QuoteDetailViewProps {
  quote: Quote;
  category?: Category;
  relatedQuotes: Quote[];
}

export default function QuoteDetailView({
  quote,
  category,
  relatedQuotes,
}: QuoteDetailViewProps) {
  const { language, t, showToast } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const isUrdu = language === 'ur';

  const quoteTitle = getQuoteTitle(quote, language);
  const quoteText = getQuoteText(quote, language);
  const quoteAuthor = getQuoteAuthor(quote, language);
  const quoteTashreeh = getQuoteTashreeh(quote, language);
  const quoteAmliSabaq = getQuoteAmliSabaq(quote, language);
  const quoteSource = getQuoteSource(quote, language);
  const quoteTags = getQuoteTags(quote, language);
  const categoryTitle = category ? getCategoryTitle(category, language) : quote.category;

  const handleCopy = () => {
    const quoteUrl = `https://akhlaqibaatein.com/quote/${quote.slug}`;
    const textToCopy = `"${quoteText}"\n\n— ${quoteAuthor} (${quoteSource})\n\n${quoteUrl}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast(t.copiedBtn);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const quoteUrl = `https://akhlaqibaatein.com/quote/${quote.slug}`;
    const message = encodeURIComponent(
      `"${quoteText}"\n\n— ${quoteAuthor}\n\n${t.tashreehHeading}\n${quoteUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <>
      <article className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-sm space-y-6 sm:space-y-8 overflow-hidden">
        {/* Category & Author Badge */}
        <div className="flex items-center justify-between gap-2.5 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
            <h2
              className={`text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-700/50 px-3 py-1 rounded-full tracking-wide uppercase ${
                isUrdu ? 'font-urdu text-sm sm:text-base' : ''
              }`}
            >
              {quoteAuthor}
            </h2>
          </div>

          {category && (
            <Link
              href={`/category/${category.slug}`}
              className={`text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition font-medium ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              #{categoryTitle}
            </Link>
          )}
        </div>

        {/* Big Quote Display in Isolated Language */}
        <div className="py-3 sm:py-4 border-y border-stone-200 dark:border-slate-800 space-y-3">
          {quoteTitle && (
            <h2
              className={`font-bold text-slate-900 dark:text-slate-100 break-words ${
                isUrdu
                  ? 'font-urdu text-xl sm:text-2xl md:text-3xl leading-[2.2] text-right'
                  : 'text-lg sm:text-xl md:text-2xl text-left'
              }`}
            >
              {quoteTitle}
            </h2>
          )}
          <h1
            className={`font-normal text-slate-900 dark:text-slate-50 break-words ${
              isUrdu
                ? 'font-urdu text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[2.5] text-right'
                : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-left'
            }`}
          >
            {isUrdu ? quoteText : `“${quoteText}”`}
          </h1>
        </div>

        {/* Action Buttons Toolbar: Responsive Grid on Mobile */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center pt-2">
          <button
            onClick={handleCopy}
            className={`col-span-1 min-h-[44px] px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-stone-300 dark:border-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition active:scale-95 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">{t.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t.copyBtn}</span>
              </>
            )}
          </button>

          <button
            onClick={handleWhatsAppShare}
            className={`col-span-1 min-h-[44px] px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-slate-800 dark:hover:bg-emerald-900/60 dark:text-emerald-300 border border-stone-300 dark:border-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition active:scale-95 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>{t.shareBtn}</span>
          </button>

          <button
            onClick={() => setShowStatusModal(true)}
            className={`col-span-2 sm:col-span-1 sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 border border-amber-600/30 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition active:scale-95 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadBtn}</span>
          </button>
        </div>

        {/* Detailed Explanation / Tashreeh in Active Language */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-lg">
            <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-500" />
            <h3 className={isUrdu ? 'font-urdu text-xl' : ''}>
              {t.tashreehHeading}
            </h3>
          </div>

          <div className="p-6 rounded-3xl bg-emerald-50/60 dark:bg-slate-800/60 border-s-4 border-emerald-700 dark:border-emerald-500 border border-emerald-100 dark:border-slate-700 space-y-4">
            <p
              className={`text-slate-800 dark:text-slate-200 ${
                isUrdu ? 'font-urdu text-base sm:text-lg leading-[2.3]' : 'text-sm sm:text-base leading-relaxed'
              }`}
            >
              {quoteTashreeh}
            </p>

            {quoteAmliSabaq && (
              <div className="pt-3 border-t border-emerald-200/60 dark:border-slate-700">
                <p className={`text-sm text-slate-800 dark:text-slate-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  <strong className="text-emerald-900 dark:text-amber-400 font-bold">
                    {t.amliSabaqHeading}{' '}
                  </strong>
                  {quoteAmliSabaq}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Authentic Citation */}
        <div
          className={`flex items-center gap-2 p-4 rounded-2xl bg-stone-100 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 ${
            isUrdu ? 'font-urdu' : ''
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-500 shrink-0" />
          <span>
            <strong>{t.sourceHeading} </strong>
            {quoteSource}
          </span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap pt-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Tags:</span>
          {quoteTags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1 rounded-xl bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200 dark:border-slate-700 ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* SEO Long-Tail FAQ Section */}
      <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
          <h2 className={`text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
            {t.faqHeading}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800">
            <h3 className={`font-semibold text-sm sm:text-base text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {t.faqMeaningQuestion}
            </h3>
            <p className={`text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2 ${isUrdu ? 'font-urdu leading-[2.1]' : 'leading-relaxed'}`}>
              {t.faqMeaningAnswer}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800">
            <h3 className={`font-semibold text-sm sm:text-base text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {t.faqSourceQuestion}
            </h3>
            <p className={`text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2 ${isUrdu ? 'font-urdu leading-[2.1]' : 'leading-relaxed'}`}>
              {t.faqSourceAnswer} ({quoteSource})
            </p>
          </div>
        </div>
      </section>

      {/* Related Quotes Grid */}
      {relatedQuotes.length > 0 && (
        <section className="space-y-6">
          <h2 className={`text-2xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
            {t.relatedQuotes}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedQuotes.map((rq) => (
              <QuoteCard key={rq.id} quote={rq} />
            ))}
          </div>
        </section>
      )}

      {/* Status Image Modal */}
      <StatusImageModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        data={{
          text: quoteText,
          explanation: quoteAmliSabaq || quoteTashreeh,
          author: quoteAuthor,
          category: categoryTitle,
          slug: quote.slug,
          lang: language,
        }}
      />
    </>
  );
}
