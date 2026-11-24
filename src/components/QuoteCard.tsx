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
  getQuoteAuthor,
  getQuoteTashreeh,
  getQuoteAmliSabaq,
  getQuoteSource,
  formatBookRef,
} from '@/data/quotes';
import { getCategoryBySlug, getCategoryTitle } from '@/data/categories';
import { uiTranslations } from '@/data/uiTranslations';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedQuoteUrl } from '@/lib/quoteSeo';
import StatusImageModal from './StatusImageModal';

/**
 * Safely renders honorific ligatures (ﷺ) in an inline non-overflowing span
 * so Nastaleeq ligatures never clip outside compact badge borders.
 */
function renderBadgeText(text: string): React.ReactNode {
  if (!text) return text;
  const parts = text.split(/(\uFDFA|\uFDFB|ﷺ)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    /^(\uFDFA|\uFDFB|ﷺ)$/.test(part) ? (
      <span
        key={i}
        className="font-sans text-[0.85em] leading-none inline-block align-middle mx-0.5"
      >
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

interface QuoteCardProps {
  quote: Quote;
  index?: number;
  showCategoryBadge?: boolean;
  displayLanguage?: Language;
}

export default function QuoteCard({
  quote,
  index,
  showCategoryBadge = true,
  displayLanguage,
}: QuoteCardProps) {
  const { language, showToast } = useLanguage();
  const activeLanguage = displayLanguage || language;
  const activeT = uiTranslations[activeLanguage];
  const [copied, setCopied] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const category = getCategoryBySlug(quote.category);
  const quoteText = getQuoteText(quote, activeLanguage);
  const quoteAuthor = getQuoteAuthor(quote, activeLanguage);
  const rawTashreeh = getQuoteTashreeh(quote, activeLanguage);
  // Strip redundant prefixes so "پسِ منظر و تشریح:" never repeats under "تشریح اور عملی سبق:"
  const cleanTashreeh = rawTashreeh
    .replace(/^(پسِ منظر و تشریح:|تشریح و پس منظر:|تشریح:|پس منظر:|پسِ منظر:)\s*/i, '')
    .replace(/^(Pas-e-Manzar o Tashreeh:|Tashreeh:|Explanation:)\s*/i, '')
    .trim();

  const quoteAmliSabaq = getQuoteAmliSabaq(quote, activeLanguage);
  const quoteSource = getQuoteSource(quote, activeLanguage);
  const cleanSource = formatBookRef(quoteSource, quote.category, activeLanguage);
  const categoryTitle = category ? getCategoryTitle(category, activeLanguage) : quote.category;

  const isUrdu = activeLanguage === 'ur';
  const isRoman = activeLanguage === 'ro';

  const isUnreviewedHadith = quote.category === 'irshadat-e-nabawi' && !quote.reviewed;
  const displayAuthor = isUnreviewedHadith && /ارشادِ نبوی|Irshad-e-Nabawi|Prophetic Tradition/i.test(quoteAuthor)
    ? (isUrdu ? 'زیرِ تحقیق قول' : isRoman ? 'Zer-e-Tehqeeq Qol' : 'Under Review Wisdom')
    : quoteAuthor;

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
      `"${quoteText}"\n\n— ${quoteAuthor}\n\n${cleanTashreeh.slice(0, 120)}...\n\n${quoteUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <>
      <article className="group relative bg-white dark:bg-[#11221c] rounded-2xl p-4 sm:p-5 border border-stone-200/90 dark:border-emerald-800/60 shadow-xs hover:border-[#d4af37]/60 hover:shadow-md transition-all duration-200 flex flex-col gap-3 overflow-hidden">
        {/* Top Header Row: Serial, Author, Category, and Action Buttons */}
        <div className="flex items-center justify-between gap-2.5 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {index !== undefined && (
              <span className="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-900 dark:text-[#d4af37] border border-amber-500/30 text-xs font-mono font-bold">
                #{index + 1}
              </span>
            )}

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              <span
                className={`text-xs font-bold text-amber-950 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-700/50 px-2.5 py-0.5 rounded-full inline-flex items-center ${
                  isUrdu ? 'font-urdu text-xs leading-normal' : 'tracking-wide'
                }`}
              >
                {renderBadgeText(displayAuthor)}
              </span>
            </div>

            {showCategoryBadge && (
              isUnreviewedHadith ? (
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 font-semibold inline-flex items-center gap-1 ${
                    isUrdu ? 'font-urdu leading-normal' : ''
                  }`}
                  title={isUrdu ? 'یہ روایت تاحال علمائے کرام کے زیرِ تحقیق و تخریج ہے' : 'This tradition is currently under scholarly verification'}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {activeLanguage === 'en' ? 'Under Review' : activeLanguage === 'ro' ? 'Zer-e-Tehqeeq' : 'زیرِ تحقیق'}
                </span>
              ) : (
                category && (
                  <Link
                    href={`/category/${quote.category}`}
                    className={`text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700/60 hover:bg-emerald-100 transition font-medium inline-flex items-center ${
                      isUrdu ? 'font-urdu leading-normal' : ''
                    }`}
                  >
                    #{renderBadgeText(categoryTitle)}
                  </Link>
                )
              )
            )}
          </div>

          {/* Action Buttons Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-emerald-900/60 dark:hover:bg-emerald-800/80 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 transition flex items-center gap-1 active:scale-95 cursor-pointer ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={activeT.copyBtn}
              aria-label={activeT.copyBtn}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="hidden sm:inline">{activeT.copiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{activeT.copyBtn}</span>
                </>
              )}
            </button>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsAppShare}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-emerald-900/60 dark:hover:bg-emerald-800/80 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 transition flex items-center gap-1 active:scale-95 cursor-pointer ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title={activeT.shareBtn}
              aria-label={activeT.shareBtn}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{activeT.shareBtn}</span>
            </button>

            {/* Status Image Generator Button */}
            <button
              onClick={() => setShowStatusModal(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 border border-amber-600/30 transition flex items-center gap-1 shadow-xs active:scale-95 cursor-pointer ${
                isUrdu ? 'font-urdu' : ''
              }`}
              title="9:16 HD Status Image"
              aria-label="9:16 HD Status Image"
            >
              <Download className="w-3.5 h-3.5" />
              <span>9:16</span>
            </button>

            {/* Expandable Tashreeh Toggle Button */}
            {cleanTashreeh && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 active:scale-95 cursor-pointer ${
                  isExpanded
                    ? 'bg-emerald-800 text-white dark:bg-[#d4af37] dark:text-[#0a1411]'
                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/80 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-700/50'
                }`}
              >
                <span className={isUrdu ? 'font-urdu text-xs' : ''}>
                  {isExpanded
                    ? isUrdu
                      ? 'تشریح بند کریں ▴'
                      : isRoman
                      ? 'Band karein ▴'
                      : 'Hide ▴'
                    : isUrdu
                    ? 'تشریح ▾'
                    : isRoman
                    ? 'Tashreeh ▾'
                    : 'Explanation ▾'}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Clean Single-Line / Compact Statement in Nastaleeq */}
        <div className="pt-1 pb-1">
          <p
            className={`text-slate-900 dark:text-[#f0fdf4] font-normal transition break-words ${
              isUrdu
                ? 'font-urdu text-lg sm:text-xl md:text-2xl leading-[1.85] sm:leading-[2.1] text-right'
                : 'text-sm sm:text-base md:text-lg leading-relaxed italic text-left'
            }`}
          >
            {isUrdu ? quoteText : `“${quoteText}”`}
          </p>
        </div>

        {/* Expandable Tashreeh Details */}
        {isExpanded && cleanTashreeh && (
          <div className="pt-2 border-t border-stone-200 dark:border-emerald-800/40 text-xs sm:text-sm space-y-2.5 bg-stone-50/80 dark:bg-[#07130f]/60 p-3.5 rounded-xl animate-in fade-in duration-200">
            <div className="flex items-center gap-1.5 text-emerald-900 dark:text-[#d4af37] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 shrink-0" />
              <span className={isUrdu ? 'font-urdu text-sm' : ''}>{activeT.tashreehHeading}</span>
            </div>

            <p
              className={`text-slate-700 dark:text-emerald-100/90 whitespace-pre-line ${
                isUrdu
                  ? 'font-urdu text-xs sm:text-sm leading-[1.9] sm:leading-[2.0]'
                  : 'text-xs sm:text-sm leading-relaxed'
              }`}
            >
              {cleanTashreeh}
            </p>

            {cleanSource && (
              <div
                className={`pt-1.5 flex items-center gap-1.5 text-xs text-slate-600 dark:text-emerald-200/80 border-t border-stone-200 dark:border-emerald-800/30 ${
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
        )}
      </article>

      {/* Status Image Generator Modal in Active Language (No duplicate title passed) */}
      <StatusImageModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        data={{
          text: quoteText,
          explanation: quoteAmliSabaq || cleanTashreeh,
          author: quoteAuthor,
          category: categoryTitle,
          slug: quote.slug,
          lang: activeLanguage,
          title: undefined,
          bookRef: cleanSource || undefined,
        }}
      />
    </>
  );
}
