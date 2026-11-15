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
  DuaItem,
  duainList,
  getDuaCategoryLabel,
} from '@/data/duain';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import TasbeehCircle from '@/components/TasbeehCircle';
import { generateDuaStatusImage } from '@/utils/duaStatusGenerator';

interface DuaDetailViewProps {
  dua: DuaItem;
  routeLanguage?: Language;
}

export default function DuaDetailView({ dua, routeLanguage }: DuaDetailViewProps) {
  const { language, showToast } = useLanguage();
  const activeLang: Language = routeLanguage || language;
  const isUrdu = activeLang === 'ur';
  const isRoman = activeLang === 'ro';
  const isEnglish = activeLang === 'en';

  const [copied, setCopied] = useState(false);
  const [downloadingStatus, setDownloadingStatus] = useState(false);

  const hubPath = isEnglish ? '/en/duain' : isRoman ? '/roman/duain' : '/duain';
  const getDetailPath = (slug: string) =>
    isEnglish ? `/en/duain/${slug}` : isRoman ? `/roman/duain/${slug}` : `/duain/${slug}`;

  const currentTitle = isUrdu ? dua.title.ur : isRoman ? dua.title.ro : dua.title.en;
  const currentRef = isUrdu ? dua.reference.ur : isRoman ? dua.reference.ro : dua.reference.en;
  const currentFazilat = isUrdu ? dua.fazilat.ur : isRoman ? dua.fazilat.ro : dua.fazilat.en;
  const categoryLabel = getDuaCategoryLabel(dua.category, activeLang);

  const relatedDuas = duainList.filter((d) => d.slug !== dua.slug).slice(0, 4);

  const handleCopy = () => {
    const shareUrl = `https://akhlaqibaatein.com${getDetailPath(dua.slug)}`;
    const payload = `${currentTitle}\n\n${dua.arabicText}\n\nترجمہ: ${dua.urduTranslation}\n\nحوالہ: ${dua.reference.ur}\n\n${shareUrl}`;
    navigator.clipboard.writeText(payload);
    setCopied(true);
    showToast(isUrdu ? 'مکمل مسنون دعا کاپی ہو گئی' : 'Dua text copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const shareUrl = `https://akhlaqibaatein.com${getDetailPath(dua.slug)}`;
    const msg = encodeURIComponent(
      `*${currentTitle}*\n\n${dua.arabicText}\n\n*ترجمہ:* ${dua.urduTranslation}\n*حوالہ:* ${dua.reference.ur}\n\nمکمل مسنون دعا اور تسبیح کاؤنٹر:\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  const handleDownloadStatusCard = async () => {
    if (downloadingStatus) return;
    setDownloadingStatus(true);
    try {
      await generateDuaStatusImage({
        dua,
        count: 0,
        target: dua.recommendedCount,
        lang: activeLang,
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
      {/* Top Header: Breadcrumb & 3-Edition Language Switcher */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
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
          <Link href={hubPath} className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
            {isUrdu ? 'مسنون دعائیں' : isRoman ? 'Masnoon Duain' : 'Daily Duas'}
          </Link>
          {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
          <span className="text-slate-900 dark:text-white font-bold line-clamp-1">
            {currentTitle}
          </span>
        </nav>

        {/* 3-Language Edition Switcher Pills */}
        <div className="flex items-center gap-1 bg-stone-100 dark:bg-[#11221c] p-1 rounded-xl border border-stone-200 dark:border-emerald-800/50 text-xs shadow-xs">
          <Link
            href={`/duain/${dua.slug}`}
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'ur'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            اردو
          </Link>
          <Link
            href={`/roman/duain/${dua.slug}`}
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'ro'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            Roman
          </Link>
          <Link
            href={`/en/duain/${dua.slug}`}
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'en'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            English
          </Link>
        </div>
      </div>

      {/* Main Hero Card containing Arabic Text + Compact Circular Tasbeeh Counter inside same view */}
      <article className="print-clean-card rounded-3xl p-5 sm:p-8 lg:p-10 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-[#d4af37]/35 shadow-sm space-y-6">
        {/* Category & Reference Badges */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/40 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>{categoryLabel}</span>
          </span>

          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/50 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>{currentRef}</span>
          </span>
        </div>

        {/* Title */}
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#fef3c7] ${
            isUrdu ? 'font-urdu leading-[1.9] sm:leading-[2.0]' : 'font-sans leading-tight'
          }`}
        >
          {currentTitle}
        </h1>

        {/* Arabic Plaque with Crystal-Clear Naskh Font + Integrated Compact Circular Tasbeeh Counter */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#050e0b] border-2 border-[#d4af37]/70 shadow-lg text-center space-y-6">
          <p className="font-arabic text-base sm:text-lg text-[#d4af37] text-center" lang="ar" dir="rtl">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p
            className="font-arabic text-2xl sm:text-3xl md:text-4xl text-white leading-[2.5] text-center select-all"
            lang="ar"
            dir="rtl"
          >
            {dua.arabicText}
          </p>

          {/* Compact Circular Tasbeeh Counter placed directly in the same view */}
          <div className="no-print pt-2 flex flex-col items-center justify-center">
            <TasbeehCircle
              slug={dua.slug}
              defaultTarget={dua.recommendedCount || 33}
              lang={activeLang}
            />
          </div>
        </div>

        {/* Action Buttons Bar: Primary 9:16 HD Status + Copy + Share + Print */}
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
                  : 'Generating 9:16 Card...'
                : isUrdu
                ? 'اسٹیٹس کارڈ ڈاؤن لوڈ کریں (9:16 HD)'
                : 'Download Status Card (9:16 HD)'}
            </span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-emerald-900/60 dark:hover:bg-emerald-800/80 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
              {copied ? (isUrdu ? 'کاپی ہو گیا' : 'Copied') : isUrdu ? 'کاپی کریں' : 'Copy'}
            </span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
              {isUrdu ? 'واٹس ایپ' : 'WhatsApp'}
            </span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 dark:bg-emerald-950/70 dark:hover:bg-emerald-900 text-slate-700 dark:text-emerald-200 border border-stone-200 dark:border-emerald-800/50 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
              {isUrdu ? 'پرنٹ' : 'Print'}
            </span>
          </button>
        </div>

        {/* Translations Section (Urdu, Roman Urdu, English) */}
        <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-emerald-800/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <h2 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'ترجمہ و مفہوم' : isRoman ? 'Tarjuma aur Mafhoom' : 'Translations & Meaning'}
            </h2>
          </div>

          {/* Urdu Translation */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 space-y-1.5">
            <span className="text-xs font-bold text-emerald-800 dark:text-[#d4af37] block font-urdu">
              اردو سلیس ترجمہ:
            </span>
            <p className="font-urdu text-base sm:text-lg text-slate-900 dark:text-emerald-100 leading-[2.1]">
              {dua.urduTranslation}
            </p>
          </div>

          {/* Roman Urdu */}
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0c1814] border border-stone-200 dark:border-emerald-900/60 space-y-1">
            <span className="text-xs font-bold text-slate-600 dark:text-emerald-300 block">
              Roman Urdu:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-emerald-100/90 leading-relaxed font-sans italic">
              {dua.romanUrdu}
            </p>
          </div>

          {/* English Translation */}
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0c1814] border border-stone-200 dark:border-emerald-900/60 space-y-1">
            <span className="text-xs font-bold text-slate-600 dark:text-emerald-300 block">
              English Translation:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-emerald-100/90 leading-relaxed font-sans">
              {dua.englishTranslation}
            </p>
          </div>
        </section>

        {/* In-Depth Scholarly Fazilat & Context Section (AdSense Safety) */}
        <section className="space-y-3 pt-4 border-t border-stone-200 dark:border-emerald-800/50">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
            <h2 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'فضیلت، برکات اور شرعی پس منظر'
                : isRoman
                ? 'Fazilat aur Shara’i Pas-e-Manzar'
                : 'Spiritual Virtues, Merits & Context'}
            </h2>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/50 dark:bg-[#101c18] border border-amber-200/80 dark:border-[#d4af37]/30 text-slate-800 dark:text-emerald-100/90">
            <p className={`text-sm sm:text-base ${
              isUrdu ? 'font-urdu leading-[2.2]' : 'font-sans leading-relaxed'
            }`}>
              {currentFazilat}
            </p>
          </div>
        </section>

        {/* Authentic Reference Box */}
        <section className="p-4 sm:p-5 rounded-2xl bg-stone-100 dark:bg-[#0a1411] border border-stone-200 dark:border-emerald-800/40 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className={`text-xs sm:text-sm font-bold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'مستند شرعی حوالہ:' : 'Authentic Reference:'}
            </span>
            <span className={`text-xs sm:text-sm text-emerald-800 dark:text-[#d4af37] font-semibold ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {currentRef}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-emerald-300/70 font-sans">
            Verified by Editorial Board
          </span>
        </section>

        {/* FAQs Section */}
        {dua.faqs && dua.faqs.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-emerald-800/50">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h2 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                {isUrdu ? 'عام پوچھے جانے والے سوالات (FAQs)' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="space-y-3">
              {dua.faqs.map((faq, idx) => {
                const qText = isUrdu ? faq.question.ur : isRoman ? faq.question.ro : faq.question.en;
                const aText = isUrdu ? faq.answer.ur : isRoman ? faq.answer.ro : faq.answer.en;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0c1814] border border-stone-200 dark:border-emerald-900/60 space-y-1.5"
                  >
                    <h3 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                      {qText}
                    </h3>
                    <p className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/85 ${isUrdu ? 'font-urdu leading-[2.0]' : 'font-sans leading-relaxed'}`}>
                      {aText}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </article>

      {/* Related Duas */}
      <section className="no-print space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className={`text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'دیگر منتخب مسنون دعائیں' : 'Related Daily Masnoon Duas'}
          </h2>
          <Link
            href={hubPath}
            className={`text-xs sm:text-sm font-bold text-emerald-800 dark:text-[#d4af37] hover:underline flex items-center gap-1 ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          >
            <span>{isUrdu ? 'تمام دعائیں دیکھیں' : 'View All Duas'}</span>
            {isUrdu ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedDuas.map((rel) => {
            const relTitle = isUrdu ? rel.title.ur : isRoman ? rel.title.ro : rel.title.en;
            return (
              <Link
                key={rel.id}
                href={getDetailPath(rel.slug)}
                className="group rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 hover:border-[#d4af37] transition space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/35">
                    {getDuaCategoryLabel(rel.category, activeLang)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-emerald-300/70 font-sans">
                    {rel.recommendedCount}x Wird
                  </span>
                </div>

                <h3 className={`text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}>
                  {relTitle}
                </h3>
                <p className="font-arabic text-base text-slate-700 dark:text-emerald-100/85 line-clamp-1" dir="rtl">
                  {rel.arabicText}
                </p>
                <span className="text-xs text-slate-500 dark:text-emerald-300/80 block">
                  حوالہ: {rel.reference[activeLang] || rel.reference.ur}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
