'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Copy,
  Check,
  Download,
  Share2,
  BookOpen,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  Quote,
  Language,
} from '@/data/types';
import {
  getQuoteText,
  getQuoteTitle,
  getQuoteAuthor,
  getQuoteTashreeh,
  getQuoteAmliSabaq,
  getQuoteSource,
  getQuoteTags,
} from '@/data/quotes';
import { getCategoryBySlug, getCategoryTitle } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import StatusImageModal from './StatusImageModal';

interface QuoteCardProps {
  quote: Quote;
  showCategoryBadge?: boolean;
}

export default function QuoteCard({
  quote,
  showCategoryBadge = true,
}: QuoteCardProps) {
  const { language, t, showToast } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showFullTashreeh, setShowFullTashreeh] = useState(false);

  const category = getCategoryBySlug(quote.category);
  const quoteTitle = getQuoteTitle(quote, language);
  const quoteText = getQuoteText(quote, language);
  const quoteAuthor = getQuoteAuthor(quote, language);
  const quoteTashreeh = getQuoteTashreeh(quote, language);
  const quoteAmliSabaq = getQuoteAmliSabaq(quote, language);
  const quoteSource = getQuoteSource(quote, language);
  const quoteTags = getQuoteTags(quote, language);
  const categoryTitle = category ? getCategoryTitle(category, language) : quote.category;

  const isUrdu = language === 'ur';

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
      <article className="group relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 border border-stone-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden">
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-2.5 mb-3.5 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <span
              className={`text-xs font-bold text-amber-950 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-700/50 px-2.5 py-0.5 rounded-full tracking-wide uppercase ${
                isUrdu ? 'font-urdu text-sm' : ''
              }`}
            >
              {quoteAuthor}
            </span>
          </div>

          {showCategoryBadge && category && (
            <Link
              href={`/category/${quote.category}`}
              className={`text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition font-medium ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              #{categoryTitle}
            </Link>
          )}
        </div>

        {/* STRICT ISOLATED QUOTE DISPLAY */}
        <div className="space-y-3 my-1 sm:my-2">
          {/* Quote Title Heading if available */}
          {quoteTitle && (
            <h3
              className={`font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-800 dark:hover:text-emerald-300 transition break-words ${
                isUrdu ? 'font-urdu text-lg sm:text-xl text-right leading-[2.0]' : 'text-base sm:text-lg text-left'
              }`}
            >
              <Link href={`/quote/${quote.slug}`}>
                {quoteTitle}
              </Link>
            </h3>
          )}

          {/* Main Quote Text with Responsive Nastaleeq sizing */}
          <div className="pt-0.5 pb-1">
            <p
              className={`text-slate-900 dark:text-slate-50 font-medium hover:text-emerald-800 dark:hover:text-emerald-300 transition break-words ${
                isUrdu
                  ? 'font-urdu text-xl leading-[2.25] sm:text-2xl sm:leading-[2.4] md:text-[28px] text-right'
                  : 'text-base leading-relaxed sm:text-lg md:text-xl italic text-left'
              }`}
            >
              <Link href={`/quote/${quote.slug}`}>
                {isUrdu ? quoteText : `“${quoteText}”`}
              </Link>
            </p>
          </div>

          {/* Explanation / Tashreeh in Isolated Language */}
          <div className="pt-1.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between">
              <span
                className={`font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 ${
                  isUrdu ? 'font-urdu text-sm' : ''
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 shrink-0" />
                <span>{t.tashreehHeading}</span>
              </span>
              <button
                onClick={() => setShowFullTashreeh(!showFullTashreeh)}
                className={`text-xs font-semibold text-emerald-800 dark:text-amber-400 hover:underline flex items-center gap-0.5 p-1 ${
                  isUrdu ? 'font-urdu' : ''
                }`}
              >
                {showFullTashreeh ? (
                  <>
                    <span>{t.showLess}</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>{t.readMore}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {showFullTashreeh ? (
              <div
                className={`mt-2.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/60 dark:bg-slate-800/60 border-s-4 border-emerald-700 dark:border-emerald-500 border border-emerald-100 dark:border-slate-700 space-y-2 ${
                  isUrdu ? 'font-urdu text-base leading-[2.1] sm:text-lg' : 'text-sm leading-relaxed sm:text-base'
                }`}
              >
                <p className="text-slate-800 dark:text-slate-200">{quoteTashreeh}</p>
                {quoteAmliSabaq && (
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 pt-2 border-t border-emerald-200/60 dark:border-slate-700">
                    <strong className="text-emerald-900 dark:text-amber-400 font-bold">
                      {t.amliSabaqHeading}{' '}
                    </strong>
                    {quoteAmliSabaq}
                  </p>
                )}
              </div>
            ) : (
              <p
                className={`mt-1 line-clamp-2 text-slate-700 dark:text-slate-300 ${
                  isUrdu ? 'font-urdu text-base leading-[2.0] sm:text-lg' : 'text-xs sm:text-sm leading-relaxed'
                }`}
              >
                {quoteTashreeh}
              </p>
            )}
          </div>

          {/* Source Citation */}
          <div
            className={`pt-1 flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-500 shrink-0" />
            <span className="truncate">
              <strong>{t.sourceHeading}</strong> {quoteSource}
            </span>
          </div>
        </div>

        {/* Action Buttons Bar: Mobile-Optimized Grid & Flex on Tablet/Desktop */}
        <div className="pt-3.5 mt-2 border-t border-stone-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center w-full sm:w-auto">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`col-span-1 min-h-[42px] px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-stone-300 dark:border-slate-700 transition flex items-center justify-center gap-1.5 active:scale-95 ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={t.copyBtn}
              aria-label={t.copyBtn}
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

            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsAppShare}
              className={`col-span-1 min-h-[42px] px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-slate-800 dark:hover:bg-emerald-900/60 dark:text-emerald-300 border border-stone-300 dark:border-slate-700 transition flex items-center justify-center gap-1.5 active:scale-95 ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={t.shareBtn}
              aria-label={t.shareBtn}
            >
              <Share2 className="w-4 h-4" />
              <span>{t.shareBtn}</span>
            </button>

            {/* Status Image Generator Button: Full width on mobile row 2 */}
            <button
              onClick={() => setShowStatusModal(true)}
              className={`col-span-2 sm:col-span-1 sm:w-auto min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 border border-amber-600/30 transition flex items-center justify-center gap-2 shadow-xs active:scale-95 ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={t.downloadBtn}
              aria-label={t.downloadBtn}
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadBtn}</span>
            </button>
          </div>

          {/* Full Page Link */}
          <div className="flex justify-end pt-1 sm:pt-0">
            <Link
              href={`/quote/${quote.slug}`}
              className={`text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              <span>{t.fullPage}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      {/* Status Image Generator Modal in Active Language */}
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
