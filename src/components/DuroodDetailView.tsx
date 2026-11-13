'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  HelpCircle,
  Layers,
  Share2,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Printer,
  Image as ImageIcon,
} from 'lucide-react';
import {
  DuroodItem,
  duroodList,
  getDuroodCategoryLabel,
} from '@/data/durood';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import TasbeehCounter from '@/components/TasbeehCounter';
import { generateDuroodStatusImage } from '@/utils/duroodStatusGenerator';

interface DuroodDetailViewProps {
  durood: DuroodItem;
}

export default function DuroodDetailView({ durood }: DuroodDetailViewProps) {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [copied, setCopied] = useState(false);
  const [downloadingStatus, setDownloadingStatus] = useState(false);

  const categoryLabel = getDuroodCategoryLabel(durood.category, language);
  const relatedDuroods = duroodList.filter((d) => d.slug !== durood.slug).slice(0, 4);

  const currentTitle = isUrdu ? durood.title.ur : isRoman ? durood.title.ro : durood.title.en;
  const currentTranslation = isUrdu
    ? durood.urduTranslation
    : isRoman
    ? durood.romanUrdu
    : durood.englishTranslation;
  const currentFazilat = isUrdu ? durood.fazilat.ur : isRoman ? durood.fazilat.ro : durood.fazilat.en;
  const currentRef = isUrdu ? durood.reference.ur : isRoman ? durood.reference.ro : durood.reference.en;

  const handleCopy = () => {
    const shareUrl = `https://akhlaqibaatein.com/durood/${durood.slug}`;
    const payload = `${currentTitle}\n\n${durood.arabicText}\n\n${
      isUrdu ? 'ترجمہ:' : 'Translation:'
    }\n${currentTranslation}\n\n${shareUrl}`;
    navigator.clipboard.writeText(payload);
    setCopied(true);
    showToast(isUrdu ? 'درودِ پاک اور ترجمہ کاپی ہو گیا' : 'Durood text and translation copied');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const shareUrl = `https://akhlaqibaatein.com/durood/${durood.slug}`;
    const message = encodeURIComponent(
      `*${currentTitle}*\n\n${durood.arabicText}\n\n*${
        isUrdu ? 'ترجمہ:' : 'Translation:'
      }*\n${currentTranslation}\n\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const handleDownloadStatusCard = async () => {
    if (downloadingStatus) return;
    setDownloadingStatus(true);
    try {
      let savedName = '';
      if (typeof window !== 'undefined') {
        savedName = window.localStorage.getItem('akhlaqi_tasbeeh_user_name') || '';
      }
      await generateDuroodStatusImage({
        durood,
        userName: savedName,
        target: durood.recommendedCount,
        lang: language as Language,
      });
      showToast(
        isUrdu
          ? 'اسٹیٹس کارڈ کامیابی سے محفوظ ہو گیا'
          : isRoman
          ? 'Status card kamyabi se download ho gaya'
          : 'Status Card downloaded successfully'
      );
    } catch {
      showToast(
        isUrdu
          ? 'تصویر تیار کرنے میں مسئلہ پیش آیا، دوبارہ کوشش کریں'
          : 'Failed to generate status card, please retry'
      );
    } finally {
      setDownloadingStatus(false);
    }
  };

  const handlePdfDownload = () => {
    if (durood.pdfFilename) {
      window.open(`/api/durood-pdf?slug=${durood.slug}&file=${durood.pdfFilename}`, '_blank');
      showToast(isUrdu ? 'واٹر مارک شدہ پی ڈی ایف ڈاؤن لوڈ ہو رہی ہے...' : 'Downloading watermarked PDF...');
    } else if (typeof window !== 'undefined') {
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
          {isUrdu ? 'سرورق' : isRoman ? 'Home' : 'Home'}
        </Link>
        {isUrdu ? (
          <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
        )}
        <Link href="/durood" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'درود و وظائف' : isRoman ? 'Durood o Wazaif' : 'Durood & Wazaif'}
        </Link>
        {isUrdu ? (
          <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
        )}
        <span className="text-slate-900 dark:text-white font-bold line-clamp-1">
          {currentTitle}
        </span>
      </nav>

      {/* Main Hero Card containing Arabic Text + Personalized Tasbeeh Counter inside same viewport */}
      <article className="print-clean-card rounded-3xl p-5 sm:p-8 lg:p-10 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-[#d4af37]/35 shadow-sm space-y-6">
        {/* Category & Reference Badges */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/40 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>{categoryLabel}</span>
          </span>

          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/50 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>{currentRef}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#fef3c7] ${
          isUrdu ? 'font-urdu leading-[1.9] sm:leading-[2.0]' : 'font-sans leading-tight'
        }`}>
          {currentTitle}
        </h1>

        {/* Arabic Plaque (Hero Area with Crystal-Clear Naskh Font) */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#050e0b] border-2 border-[#d4af37]/70 shadow-lg text-center space-y-4">
          <p className="font-arabic text-base sm:text-lg text-[#d4af37] text-center" lang="ar" dir="rtl">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p
            className="font-arabic text-2xl sm:text-3xl md:text-4xl text-white leading-[2.5] text-center select-all"
            lang="ar"
            dir="rtl"
          >
            {durood.arabicText}
          </p>
        </div>

        {/* Interactive Digital Tasbeeh Counter — Placed DIRECTLY below Arabic Plaque inside hero card! */}
        <div className="no-print pt-2">
          <TasbeehCounter durood={durood} defaultTarget={durood.recommendedCount} />
        </div>

        {/* Clean Action Buttons Bar: Primary 9:16 HD Status + Print / Save as PDF + Copy + Share */}
        <div className="no-print flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleDownloadStatusCard}
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
                : isRoman
                ? 'Status Card Download Karein'
                : 'Download Status Card'}
            </span>
          </button>

          <button
            type="button"
            onClick={handlePdfDownload}
            className={`min-h-[48px] px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-[#0a1411] dark:hover:bg-emerald-900/70 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <Printer className="w-4 h-4 shrink-0" />
            <span>
              {isUrdu ? 'پی ڈی ایف محفوظ کریں' : isRoman ? 'PDF Mehfooz Karein' : 'Save PDF'}
            </span>
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

        {/* Translation Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/60 space-y-2.5">
          <h2 className={`text-base sm:text-lg font-bold text-emerald-900 dark:text-[#d4af37] flex items-center gap-2 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>{isUrdu ? 'اردو ترجمہ:' : isRoman ? 'Roman Urdu Tarjuma:' : 'English Translation:'}</span>
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-slate-800 dark:text-emerald-50/95 leading-[2.2] ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            {currentTranslation}
          </p>
        </div>

        {/* Fazilat & Context (Rich 150+ words scholarly explanation) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-[#0a1713] border-s-4 border-emerald-700 dark:border-[#d4af37] border border-emerald-200/80 dark:border-emerald-800/60 space-y-2.5">
          <h2 className={`text-base sm:text-lg font-bold text-emerald-950 dark:text-[#d4af37] flex items-center gap-2 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>
              {isUrdu
                ? 'فضیلت، برکات اور تحقیقی پسِ منظر:'
                : isRoman
                ? 'Fazilat, Barkat aur Pas-e-Manzar:'
                : 'Virtues, Blessings & Scholarly Context:'}
            </span>
          </h2>
          <p className={`text-sm sm:text-base text-slate-800 dark:text-emerald-100/90 leading-[2.2] ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            {currentFazilat}
          </p>
        </div>
      </article>

      {/* Structured FAQs */}
      {durood.faqs.length > 0 && (
        <section className="print-clean-card rounded-3xl p-5 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#d4af37] shrink-0" />
            <h2 className={`text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'اہم سوالات و رہنمائی'
                : isRoman
                ? 'Ahem Sawalat o Rehnumai'
                : 'Frequently Asked Questions & Guidance'}
            </h2>
          </div>

          <div className="space-y-3">
            {durood.faqs.map((faq, idx) => {
              const q = isUrdu ? faq.question.ur : isRoman ? faq.question.ro : faq.question.en;
              const a = isUrdu ? faq.answer.ur : isRoman ? faq.answer.ro : faq.answer.en;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/50 space-y-1.5"
                >
                  <h3 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-emerald-200 ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}>
                    {q}
                  </h3>
                  <p className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/85 leading-[2.1] ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}>
                    {a}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Related Duroods */}
      <section className="no-print space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className={`text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu
              ? 'مزید منتخب درود و وظائف'
              : isRoman
              ? 'Mazeed Muntakhab Durood o Wazaif'
              : 'Related Prophetic Salawat'}
          </h2>
          <Link
            href="/durood"
            className={`text-xs sm:text-sm font-bold text-emerald-800 dark:text-[#d4af37] hover:underline flex items-center gap-1 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <span>{isUrdu ? 'تمام درود دیکھیں' : isRoman ? 'Tamam Durood Dekhein' : 'View All Durood'}</span>
            {isUrdu ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedDuroods.map((rel) => {
            const relTitle = isUrdu ? rel.title.ur : isRoman ? rel.title.ro : rel.title.en;
            return (
              <Link
                key={rel.id}
                href={`/durood/${rel.slug}`}
                className="group rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 hover:border-[#d4af37] transition space-y-2.5"
              >
                <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/35 ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}>
                  {getDuroodCategoryLabel(rel.category, language)}
                </span>
                <h3 className={`text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}>
                  {relTitle}
                </h3>
                <p
                  className="font-arabic text-base text-slate-700 dark:text-emerald-100/85 line-clamp-1"
                  lang="ar"
                  dir="rtl"
                >
                  {rel.arabicText}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
