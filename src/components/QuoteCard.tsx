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
  formatBookRef,
} from '@/data/quotes';
import { getCategoryBySlug, getCategoryTitle } from '@/data/categories';
import { uiTranslations } from '@/data/uiTranslations';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedQuotePath, getLocalizedQuoteUrl } from '@/lib/quoteSeo';
import StatusImageModal from './StatusImageModal';

interface QuoteCardProps {
  quote: Quote;
  showCategoryBadge?: boolean;
  displayLanguage?: Language;
}

export default function QuoteCard({
  quote,
  showCategoryBadge = true,
  displayLanguage,
}: QuoteCardProps) {
  const { language, showToast } = useLanguage();
  const activeLanguage = displayLanguage || language;
  const activeT = uiTranslations[activeLanguage];
  const quoteHref = getLocalizedQuotePath(quote.slug, activeLanguage);
  const [copied, setCopied] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const category = getCategoryBySlug(quote.category);
  const quoteTitle = getQuoteTitle(quote, activeLanguage);
  const quoteText = getQuoteText(quote, activeLanguage);
  const quoteAuthor = getQuoteAuthor(quote, activeLanguage);
  const quoteTashreeh = getQuoteTashreeh(quote, activeLanguage);
  const quoteAmliSabaq = getQuoteAmliSabaq(quote, activeLanguage);
  const quoteSource = getQuoteSource(quote, activeLanguage);
  const cleanSource = formatBookRef(quoteSource, quote.category, activeLanguage);
  const categoryTitle = category ? getCategoryTitle(category, activeLanguage) : quote.category;

  const isUrdu = activeLanguage === 'ur';

  const handleCopy = () => {
    const quoteUrl = getLocalizedQuoteUrl(quote.slug, activeLanguage);
    const textToCopy = `"${quoteText}"\n\n— ${quoteAuthor}${cleanSource ? ` (${cleanSource})` : ''}\n\n${quoteUrl}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast(activeT.copiedBtn);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const quoteUrl = getLocalizedQuoteUrl(quote.slug, activeLanguage);
    const message = encodeURIComponent(
      `"${quoteText}"\n\n— ${quoteAuthor}\n\n${activeT.tashreehHeading}\n${quoteUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <>
      <article className="group relative bg-white dark:bg-[#11221c] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 border border-stone-200/90 dark:border-emerald-800/60 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden">
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-2.5 mb-3.5 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <span
              className={`text-xs font-bold text-amber-950 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-700/50 px-2.5 py-0.5 rounded-full uppercase ${
                isUrdu ? 'font-urdu text-xs leading-normal' : 'tracking-wide'
              }`}
            >
              {quoteAuthor}
            </span>
          </div>

          {showCategoryBadge && category && (
            <Link
              href={`/category/${quote.category}`}
              className={`text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700/60 hover:bg-emerald-100 transition font-medium ${
                isUrdu ? 'font-urdu leading-normal' : ''
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
                isUrdu ? 'font-urdu text-sm sm:text-base md:text-lg text-right leading-[1.8]' : 'text-sm sm:text-base text-left'
              }`}
            >
              <Link href={quoteHref}>
                {quoteTitle}
              </Link>
            </h3>
          )}

          {/* Main Quote Text with Responsive Nastaleeq sizing */}
          <div className="pt-0.5 pb-1">
            <p
              className={`text-slate-900 dark:text-[#f0fdf4] font-normal sm:font-medium hover:text-emerald-800 dark:hover:text-emerald-300 transition break-words whitespace-pre-line ${
                isUrdu
                  ? 'font-urdu text-base sm:text-xl md:text-2xl leading-[1.9] sm:leading-[2.2] md:leading-[2.3] text-right'
                  : 'text-sm sm:text-base md:text-lg leading-relaxed italic text-left'
              }`}
            >
              <Link href={quoteHref}>
                {isUrdu ? quoteText : `“${quoteText}”`}
              </Link>
            </p>
          </div>

          {/* Explanation / Tashreeh in Isolated Language (Line-clamped + Pageview Multiplier CTA) */}
          <div className="pt-1.5 text-xs sm:text-sm space-y-2.5">
            <div className="flex items-center justify-between">
              <span
                className={`font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 ${
                  isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 shrink-0" />
                <span>{activeT.tashreehHeading}</span>
              </span>
            </div>

            <p
              className={`line-clamp-2 text-slate-700 dark:text-emerald-100/90 whitespace-pre-line ${
                isUrdu ? 'font-urdu text-xs sm:text-sm leading-[1.85] sm:leading-[1.95]' : 'text-xs sm:text-sm leading-relaxed'
              }`}
            >
              {quoteTashreeh}
            </p>

            <div className="pt-0.5">
              <Link
                href={quoteHref}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/70 border border-emerald-200/90 dark:border-emerald-700/60 text-xs sm:text-sm font-bold text-emerald-900 dark:text-amber-300 transition-colors ${
                  isUrdu ? 'font-urdu leading-normal' : ''
                }`}
              >
                <span>{activeT.readFullCta}</span>
              </Link>
            </div>
          </div>

          {/* Source Citation - Only shown if canonical reference exists */}
          {cleanSource && (
            <div
              className={`pt-1 flex items-center gap-1.5 text-xs text-slate-600 dark:text-emerald-200/80 ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <span className="truncate">
                <strong>{activeT.sourceHeading}</strong> {cleanSource}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons Bar: Mobile-Optimized Grid & Flex on Tablet/Desktop */}
        <div className="pt-3.5 mt-2 border-t border-stone-200 dark:border-emerald-800/40 flex flex-wrap items-center gap-2.5">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center w-full sm:w-auto">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`col-span-1 min-h-[42px] px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-emerald-900/60 dark:hover:bg-emerald-800/80 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 transition flex items-center justify-center gap-1.5 active:scale-95 ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={activeT.copyBtn}
              aria-label={activeT.copyBtn}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">{activeT.copiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{activeT.copyBtn}</span>
                </>
              )}
            </button>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsAppShare}
              className={`col-span-1 min-h-[42px] px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-emerald-900/60 dark:hover:bg-emerald-800/80 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 transition flex items-center justify-center gap-1.5 active:scale-95 ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={activeT.shareBtn}
              aria-label={activeT.shareBtn}
            >
              <Share2 className="w-4 h-4" />
              <span>{activeT.shareBtn}</span>
            </button>

            {/* Status Image Generator Button: Full width on mobile row 2 */}
            <button
              onClick={() => setShowStatusModal(true)}
              className={`col-span-2 sm:col-span-1 sm:w-auto min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 border border-amber-600/30 transition flex items-center justify-center gap-2 shadow-xs active:scale-95 ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={activeT.downloadBtn}
              aria-label={activeT.downloadBtn}
            >
              <Download className="w-4 h-4" />
              <span>{activeT.downloadBtn}</span>
            </button>
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
          lang: activeLanguage,
          title: quoteTitle,
          bookRef: cleanSource || undefined,
        }}
      />
    </>
  );
}
