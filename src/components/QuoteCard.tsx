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
      <article className="group relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-stone-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
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
              className={`text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition font-medium ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              #{categoryTitle}
            </Link>
          )}
        </div>

        {/* STRICT ISOLATED QUOTE DISPLAY */}
        <div className="space-y-3 my-2">
          {/* Quote Title Heading if available */}
          {quoteTitle && (
            <h3
              className={`font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-800 dark:hover:text-emerald-300 transition ${
                isUrdu ? 'font-urdu text-xl text-right leading-[2.0]' : 'text-base sm:text-lg text-left'
              }`}
            >
              <Link href={`/quote/${quote.slug}`}>
                {quoteTitle}
              </Link>
            </h3>
          )}

          {/* Main Quote Text */}
          <div className="pt-0.5 pb-2">
            <p
              className={`text-slate-900 dark:text-slate-50 font-medium hover:text-emerald-800 dark:hover:text-emerald-300 transition ${
                isUrdu
                  ? 'font-urdu text-2xl sm:text-[26px] leading-[2.4] text-right'
                  : 'text-lg sm:text-xl italic leading-relaxed text-left'
              }`}
            >
              <Link href={`/quote/${quote.slug}`}>
                {isUrdu ? quoteText : `“${quoteText}”`}
              </Link>
            </p>
          </div>

          {/* Explanation / Tashreeh in Isolated Language */}
          <div className="pt-2 text-xs sm:text-sm">
            <div className="flex items-center justify-between">
              <span
                className={`font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 ${
                  isUrdu ? 'font-urdu text-sm' : ''
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                <span>{t.tashreehHeading}</span>
              </span>
              <button
                onClick={() => setShowFullTashreeh(!showFullTashreeh)}
                className={`text-xs font-semibold text-emerald-800 dark:text-amber-400 hover:underline flex items-center gap-0.5 ${
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
                className={`mt-3 p-4 rounded-2xl bg-emerald-50/60 dark:bg-slate-800/60 border-s-4 border-emerald-700 dark:border-emerald-500 border border-emerald-100 dark:border-slate-700 space-y-2 ${
                  isUrdu ? 'font-urdu text-sm leading-[2.2]' : 'text-xs sm:text-sm leading-relaxed'
                }`}
              >
                <p className="text-slate-800 dark:text-slate-200">{quoteTashreeh}</p>
                {quoteAmliSabaq && (
                  <p className="text-xs text-slate-800 dark:text-slate-200 pt-2 border-t border-emerald-200/60 dark:border-slate-700">
                    <strong className="text-emerald-900 dark:text-amber-400 font-bold">
                      {t.amliSabaqHeading}{' '}
                    </strong>
                    {quoteAmliSabaq}
                  </p>
                )}
              </div>
            ) : (
              <p
                className={`mt-1.5 line-clamp-2 text-slate-700 dark:text-slate-300 ${
                  isUrdu ? 'font-urdu text-sm leading-[2.0]' : 'text-xs leading-relaxed'
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
            <BookOpen className="w-3 h-3 text-emerald-700 dark:text-emerald-500" />
            <span>
              <strong>{t.sourceHeading}</strong> {quoteSource}
            </span>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="pt-4 mt-2 border-t border-stone-200 dark:border-slate-800 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-stone-300 dark:border-slate-700 transition flex items-center gap-1 ${
                isUrdu ? 'font-urdu text-sm' : ''
              }`}
              title={t.copyBtn}
              aria-label={t.copyBtn}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">{t.copiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.copyBtn}</span>
                </>
              )}
            </button>

            {/* Status Image Generator Button */}
            <button
              onClick={() => setShowStatusModal(true)}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 border border-amber-600/30 transition flex items-center gap-1.5 shadow-xs ${
                isUrdu ? 'font-urdu text-sm' : ''
              }`}
              title={t.downloadBtn}
              aria-label={t.downloadBtn}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.downloadBtn}</span>
            </button>

            {/* WhatsApp Share */}
            <button
              onClick={handleWhatsAppShare}
              className={`p-2 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-slate-800 dark:hover:bg-emerald-900/60 dark:text-emerald-300 border border-stone-300 dark:border-slate-700 transition flex items-center gap-1 ${
                isUrdu ? 'font-urdu text-sm' : ''
              }`}
              title={t.shareBtn}
              aria-label={t.shareBtn}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.shareBtn}</span>
            </button>
          </div>

          {/* Full Page Link */}
          <Link
            href={`/quote/${quote.slug}`}
            className={`text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition ${
              isUrdu ? 'font-urdu text-sm' : ''
            }`}
          >
            <span>{t.fullPage}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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
