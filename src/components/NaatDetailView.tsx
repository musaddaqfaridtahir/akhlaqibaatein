'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Share2,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Printer,
  Image as ImageIcon,
  Feather,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { NaatItem, naatsList } from '@/data/naats';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { generateNaatStatusImage } from '@/utils/naatStatusGenerator';

interface NaatDetailViewProps {
  naat: NaatItem;
}

export default function NaatDetailView({ naat }: NaatDetailViewProps) {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [copied, setCopied] = useState(false);
  const [downloadingStatus, setDownloadingStatus] = useState(false);

  const currentTitle = isUrdu ? naat.title.ur : isRoman ? naat.title.ro : naat.title.en;
  const currentPoet = isUrdu ? naat.poet.ur : isRoman ? naat.poet.ro : naat.poet.en;
  const currentSource = isUrdu ? naat.sourceBook.ur : isRoman ? naat.sourceBook.ro : naat.sourceBook.en;
  const currentTashreeh = isUrdu ? naat.tashreeh.ur : isRoman ? naat.tashreeh.ro : naat.tashreeh.en;

  const relatedNaats = naatsList.filter((n) => n.slug !== naat.slug).slice(0, 4);

  const handleCopy = () => {
    const shareUrl = `https://akhlaqibaatein.com/naat/${naat.slug}`;
    const allVerses = naat.ashaar
      .map((s) => `${s.misra1Ur}\n${s.misra2Ur}`)
      .join('\n\n');
    const payload = `${naat.title.ur}\nکلام: ${naat.poet.ur} (${naat.sourceBook.ur})\n\n${allVerses}\n\n${shareUrl}`;
    navigator.clipboard.writeText(payload);
    setCopied(true);
    showToast(isUrdu ? 'مکمل نعتِ پاک کاپی ہو گئی' : 'Naat text copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const shareUrl = `https://akhlaqibaatein.com/naat/${naat.slug}`;
    const excerpt = `${naat.ashaar[0]?.misra1Ur}\n${naat.ashaar[0]?.misra2Ur}`;
    const msg = encodeURIComponent(
      `*${naat.title.ur}*\nکلام: ${naat.poet.ur}\n\n${excerpt}\n\nمکمل ${naat.ashaar.length} اشعار اور تشریح پڑھیں:\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  const handleDownloadStatus = async () => {
    if (downloadingStatus) return;
    setDownloadingStatus(true);
    try {
      await generateNaatStatusImage({
        naat,
        lang: language as Language,
      });
      showToast(
        isUrdu
          ? 'اسٹیٹس کارڈ کامیابی سے محفوظ ہو گیا'
          : 'Status Card downloaded successfully'
      );
    } catch {
      showToast(
        isUrdu
          ? 'تصویر تیار کرنے میں مسئلہ پیش آیا، دوبارہ کوشش کریں'
          : 'Failed to generate image, please retry'
      );
    } finally {
      setDownloadingStatus(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 flex-wrap ${
          isUrdu ? 'font-urdu' : 'font-sans'
        }`}
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'سرورق' : 'Home'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <Link href="/naat" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'نعت شریف و کلام' : 'Naat Sharif'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <span className="text-slate-900 dark:text-white font-bold line-clamp-1">
          {currentTitle}
        </span>
      </nav>

      {/* Main Diwan Hero Card */}
      <article className="print-clean-card rounded-3xl p-5 sm:p-8 lg:p-10 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-[#d4af37]/35 shadow-sm space-y-6">
        {/* Category & Poet Badges */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/40 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <Feather className="w-3.5 h-3.5 shrink-0" />
            <span>کلام: {currentPoet}</span>
          </span>

          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/50 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>{currentSource}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#fef3c7] ${
          isUrdu ? 'font-urdu leading-[1.9] sm:leading-[2.0]' : 'font-sans leading-tight'
        }`}>
          {currentTitle}
        </h1>

        <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/80 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
          {isUrdu
            ? `مشتمل بر ${naat.ashaar.length} مکمل اشعار • منتخب کلاسیکی دیوان • تصدیق شدہ متن`
            : `Complete ${naat.ashaar.length} Ashaar • Classical Islamic Diwan Collection`}
        </p>

        {/* Action Buttons Bar */}
        <div className="no-print flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <button
            type="button"
            onClick={handleDownloadStatus}
            disabled={downloadingStatus}
            className="flex-1 min-h-[48px] px-5 py-3 rounded-2xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#d4af37] hover:brightness-105 text-[#0a1411] font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 shrink-0 stroke-[2.2]" />
            <span className={isUrdu ? 'font-urdu text-sm sm:text-base leading-normal' : 'font-sans'}>
              {downloadingStatus
                ? isUrdu
                  ? 'کارڈ تیار ہو رہا ہے...'
                  : 'Generating Card...'
                : isUrdu
                ? 'اسٹیٹس کارڈ ڈاؤن لوڈ کریں'
                : 'Download Status Card'}
            </span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className={`min-h-[48px] px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-[#0a1411] dark:hover:bg-emerald-900/70 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <Printer className="w-4 h-4 shrink-0" />
            <span>{isUrdu ? 'پی ڈی ایف محفوظ کریں' : 'Save PDF'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className={`min-h-[48px] px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-[#0a1411] dark:hover:bg-emerald-900/70 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (isUrdu ? 'کاپی ہو گیا' : 'Copied') : isUrdu ? 'تحریر کاپی کریں' : 'Copy Text'}</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className={`min-h-[48px] px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-[#0a1411] dark:hover:bg-emerald-900/70 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>{isUrdu ? 'واٹس ایپ شیئر' : 'WhatsApp Share'}</span>
          </button>
        </div>

        {/* Classical Diwan Layout (Full 6-10 Ashaar rendered elegantly) */}
        <div className="space-y-4 pt-4">
          <div className="text-center pb-2">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
              {isUrdu ? 'متنِ کلامِ پاک • Diwan Verses' : 'Complete Sacred Verses'}
            </span>
          </div>

          <div className="space-y-4">
            {naat.ashaar.map((sher, idx) => (
              <div
                key={sher.id}
                className="relative overflow-hidden rounded-2xl p-5 sm:p-7 bg-[#FAF8F5] dark:bg-[#07130f] border border-stone-200 dark:border-[#d4af37]/30 text-center space-y-3 transition hover:border-[#d4af37]"
              >
                {/* Sher Number Pill */}
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-900/10 dark:bg-emerald-950 text-emerald-800 dark:text-[#d4af37] text-[11px] font-bold">
                  شعر #{idx + 1}
                </span>

                {/* Urdu Misra 1 & Misra 2 */}
                <div className="space-y-2">
                  <p className="font-urdu text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-[2.1] sm:leading-[2.2]">
                    {sher.misra1Ur}
                  </p>
                  <p className="font-urdu text-xl sm:text-2xl md:text-3xl font-bold text-emerald-950 dark:text-[#fef3c7] leading-[2.1] sm:leading-[2.2]">
                    {sher.misra2Ur}
                  </p>
                </div>

                {/* Roman Urdu or English Subtext based on language switcher */}
                {(isRoman || language === 'en') && (
                  <div className="pt-2 border-t border-stone-200 dark:border-emerald-800/40 text-xs sm:text-sm text-slate-600 dark:text-emerald-200/80 font-sans space-y-1">
                    {isRoman && (
                      <p className="italic">
                        {sher.misra1Ro} / {sher.misra2Ro}
                      </p>
                    )}
                    {language === 'en' && (
                      <p className="text-slate-700 dark:text-emerald-100">
                        Meaning: {sher.meaningEn}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Farhang / Difficult Words Table */}
        {naat.farhang.length > 0 && (
          <div className="p-5 sm:p-6 rounded-2xl bg-[#07130f] border border-[#d4af37]/40 text-white space-y-3">
            <h3 className={`text-base sm:text-lg font-bold text-[#d4af37] flex items-center gap-2 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}>
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>{isUrdu ? 'لغت و فرہنگ (مشکل الفاظ کے معانی):' : 'Vocabulary & Poetic Meanings:'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {naat.farhang.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-black/40 border border-emerald-800/50 flex items-start justify-between gap-3"
                >
                  <span className="font-bold text-[#d4af37] font-urdu text-sm sm:text-base">
                    {item.word}:
                  </span>
                  <span className={`text-emerald-100/90 text-right ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? item.meaningUr : isRoman ? item.meaningRo : item.meaningEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Literary Tashreeh & Context (150-200+ words) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-[#0a1713] border-s-4 border-emerald-700 dark:border-[#d4af37] border border-emerald-200/80 dark:border-emerald-800/60 space-y-2.5">
          <h2 className={`text-base sm:text-lg font-bold text-emerald-950 dark:text-[#d4af37] flex items-center gap-2 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>
              {isUrdu
                ? 'مرکزی خیال، ادبی تشریح اور روحانی پیغام:'
                : isRoman
                ? 'Markazi Khayal, Tashreeh aur Roohani Paigham:'
                : 'Central Spiritual Theme, Literary Analysis & Ethical Message:'}
            </span>
          </h2>
          <p className={`text-sm sm:text-base text-slate-800 dark:text-emerald-100/90 leading-[2.2] ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            {currentTashreeh}
          </p>
        </div>
      </article>

      {/* Related Naats */}
      <section className="no-print space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className={`text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu
              ? 'دیگر منتخب کلام و نعت شریف'
              : 'Related Classical Naat Sharif'}
          </h2>
          <Link
            href="/naat"
            className={`text-xs sm:text-sm font-bold text-emerald-800 dark:text-[#d4af37] hover:underline flex items-center gap-1 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <span>{isUrdu ? 'تمام کلام دیکھیں' : 'View Full Diwan'}</span>
            {isUrdu ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedNaats.map((rel) => {
            const relTitle = isUrdu ? rel.title.ur : isRoman ? rel.title.ro : rel.title.en;
            const relPoet = isUrdu ? rel.poet.ur : isRoman ? rel.poet.ro : rel.poet.en;
            return (
              <Link
                key={rel.id}
                href={`/naat/${rel.slug}`}
                className="group rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 hover:border-[#d4af37] transition space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/35">
                    {rel.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-emerald-300/70">
                    {rel.ashaar.length} اشعار
                  </span>
                </div>

                <h3 className={`text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}>
                  {relTitle}
                </h3>
                <p className="font-urdu text-sm text-slate-700 dark:text-emerald-100/85 line-clamp-1">
                  {rel.ashaar[0]?.misra1Ur} — {rel.ashaar[0]?.misra2Ur}
                </p>
                <span className="text-xs text-slate-500 dark:text-emerald-300/80 block">
                  کلام: {relPoet}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
