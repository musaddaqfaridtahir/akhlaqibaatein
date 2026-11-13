'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Check,
  ChevronLeft,
  Copy,
  Download,
  HelpCircle,
  Layers,
  Share2,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import {
  DuroodItem,
  duroodList,
  getDuroodCategoryLabelUr,
} from '@/data/durood';
import { useLanguage } from '@/context/LanguageContext';
import { generateDuroodPdf } from '@/utils/generatePdf';
import TasbeehCounter from '@/components/TasbeehCounter';

interface DuroodDetailViewProps {
  durood: DuroodItem;
}

export default function DuroodDetailView({ durood }: DuroodDetailViewProps) {
  const { showToast } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  const categoryLabelUr = getDuroodCategoryLabelUr(durood.category);
  const relatedDuroods = duroodList.filter((d) => d.slug !== durood.slug).slice(0, 4);

  const handleCopy = () => {
    const shareUrl = `https://akhlaqibaatein.com/durood/${durood.slug}`;
    const payload = `${durood.title.ur}\n\n${durood.arabicText}\n\nاردو ترجمہ:\n${durood.urduTranslation}\n\n${shareUrl}`;
    navigator.clipboard.writeText(payload);
    setCopied(true);
    showToast('درودِ پاک اور ترجمہ کاپی ہو گیا');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const shareUrl = `https://akhlaqibaatein.com/durood/${durood.slug}`;
    const message = encodeURIComponent(
      `*${durood.title.ur}*\n\n${durood.arabicText}\n\n*اردو ترجمہ:*\n${durood.urduTranslation}\n\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const handleDownloadPdf = async () => {
    if (downloadingPdf) return;
    setDownloadingPdf(true);
    try {
      await generateDuroodPdf(durood);
      showToast('برانڈڈ PDF کامیابی سے ڈاؤن لوڈ ہو گئی');
    } catch {
      showToast('PDF تیار کرنے میں مسئلہ پیش آیا، دوبارہ کوشش کریں');
    } finally {
      setDownloadingPdf(false);
    }
  };

  return (
    <div dir="rtl" className="space-y-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 font-urdu flex-wrap"
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          سرورق
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" />
        <Link href="/durood" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          درود و وظائف
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" />
        <span className="text-slate-900 dark:text-white font-bold line-clamp-1">
          {durood.title.ur}
        </span>
      </nav>

      {/* Main Durood & Urdu Translation Card */}
      <article className="rounded-3xl p-5 sm:p-8 lg:p-10 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-[#d4af37]/35 shadow-sm space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-urdu font-bold bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/40">
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>{categoryLabelUr}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-urdu font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/50">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>{durood.reference}</span>
          </span>
        </div>

        <h1 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-[#fef3c7] leading-[1.9] sm:leading-[2.0]">
          {durood.title.ur}
        </h1>

        {/* Arabic Plaque */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0a1411] via-[#11221c] to-[#07100d] border-2 border-[#d4af37]/70 shadow-lg text-center space-y-4">
          <p className="font-arabic text-base sm:text-lg text-[#d4af37] text-center">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-white leading-[2.3] sm:leading-[2.5] text-center">
            {durood.arabicText}
          </p>
        </div>

        {/* Action Buttons Bar: Prominent Branded PDF + Copy + WhatsApp */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={downloadingPdf}
            className="flex-1 min-h-[48px] px-5 py-3 rounded-2xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#d4af37] hover:brightness-105 text-[#0a1411] font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span className="font-urdu text-sm sm:text-base leading-normal">
              {downloadingPdf
                ? 'برانڈڈ PDF تیار ہو رہی ہے...'
                : '📥 اس درود کی برانڈڈ PDF ڈاؤن لوڈ کریں (Download Branded PDF)'}
            </span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="min-h-[48px] px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-[#0a1411] dark:hover:bg-emerald-900/70 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 font-urdu text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'کاپی ہو گیا' : 'تحریر کاپی کریں'}</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="min-h-[48px] px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-[#0a1411] dark:hover:bg-emerald-900/70 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 font-urdu text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>واٹس ایپ شیئر</span>
          </button>
        </div>

        {/* Urdu Translation */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#0a1411] border border-stone-200 dark:border-emerald-800/60 space-y-2.5">
          <h2 className="font-urdu text-base sm:text-lg font-bold text-emerald-900 dark:text-[#d4af37] flex items-center gap-2">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>اردو ترجمہ:</span>
          </h2>
          <p className="font-urdu text-sm sm:text-base md:text-lg text-slate-800 dark:text-emerald-50/95 leading-[2.2]">
            {durood.urduTranslation}
          </p>
        </div>

        {/* Fazilat & Benefits */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-[#0d1b16] border-s-4 border-emerald-700 dark:border-[#d4af37] border border-emerald-200/80 dark:border-emerald-800/60 space-y-2.5">
          <h2 className="font-urdu text-base sm:text-lg font-bold text-emerald-950 dark:text-[#d4af37] flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>فضیلت، برکات اور پسِ منظر:</span>
          </h2>
          <p className="font-urdu text-sm sm:text-base text-slate-800 dark:text-emerald-100/90 leading-[2.2]">
            {durood.fazilat}
          </p>
        </div>
      </article>

      {/* Interactive Digital Tasbeeh Counter */}
      <TasbeehCounter
        slug={durood.slug}
        duroodTitleUr={durood.title.ur}
        defaultTarget={durood.recommendedCount}
      />

      {/* FAQs */}
      {durood.faqs.length > 0 && (
        <section className="rounded-3xl p-5 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#d4af37] shrink-0" />
            <h2 className="font-urdu text-xl font-bold text-slate-900 dark:text-white">
              سوالات و رہنمائی
            </h2>
          </div>

          <div className="space-y-3">
            {durood.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0a1411] border border-stone-200 dark:border-emerald-800/50 space-y-1.5"
              >
                <h3 className="font-urdu text-sm sm:text-base font-bold text-slate-900 dark:text-emerald-200">
                  {faq.question}
                </h3>
                <p className="font-urdu text-xs sm:text-sm text-slate-700 dark:text-emerald-100/85 leading-[2.1]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Duroods */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-urdu text-xl font-bold text-slate-900 dark:text-white">
            مزید منتخب درود و وظائف
          </h2>
          <Link
            href="/durood"
            className="font-urdu text-xs sm:text-sm font-bold text-emerald-800 dark:text-[#d4af37] hover:underline flex items-center gap-1"
          >
            <span>تمام درود دیکھیں</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedDuroods.map((rel) => (
            <Link
              key={rel.id}
              href={`/durood/${rel.slug}`}
              className="group rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 hover:border-[#d4af37] transition space-y-2.5"
            >
              <span className="inline-block font-urdu text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/35">
                {getDuroodCategoryLabelUr(rel.category)}
              </span>
              <h3 className="font-urdu text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition">
                {rel.title.ur}
              </h3>
              <p className="font-arabic text-base text-slate-700 dark:text-emerald-100/85 line-clamp-1">
                {rel.arabicText}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
