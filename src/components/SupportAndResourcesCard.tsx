'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeartHandshake,
  FileDown,
  BookOpen,
  ExternalLink,
  X,
  CheckCircle2,
  Printer,
} from 'lucide-react';
import { Language, Quote } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';

interface SupportAndResourcesCardProps {
  quote?: Quote;
  routeLanguage?: Language;
}

interface RecommendedBookInfo {
  titleUrdu: string;
  titleRoman: string;
  titleEnglish: string;
  authorUrdu: string;
  authorEnglish: string;
  noteUrdu: string;
  noteRoman: string;
  noteEnglish: string;
  href: string;
  isExternal: boolean;
}

function matchRecommendedBook(quote?: Quote): RecommendedBookInfo {
  const ref = `${quote?.bookRef || ''} ${quote?.source || ''} ${quote?.sourceEnglish || ''}`.toLowerCase();

  if (ref.includes('bukhari')) {
    return {
      titleUrdu: 'صحیح البخاری (مکمل اردو و انگلش ترجمہ)',
      titleRoman: 'Sahih al-Bukhari (Mukammal Urdu & English Edition)',
      titleEnglish: 'Sahih al-Bukhari — Authenticated Arabic-English Edition',
      authorUrdu: 'امام محمد بن اسماعیل البخاریؒ',
      authorEnglish: 'Imam Muhammad ibn Ismail al-Bukhari',
      noteUrdu: 'اس قول کا حوالہ صحیح بخاری سے منسلک ہے — مکمل کتابی مطالعے کے لیے مستند ایڈیشن۔',
      noteRoman: 'Is irshad ka hawala Sahih Bukhari se hai — mukammal mutalaay ke liye mustanad edition.',
      noteEnglish: 'Recommended edition matching this quote’s Hadith source for deeper household study.',
      href: '/books',
      isExternal: false,
    };
  }

  if (ref.includes('muslim')) {
    return {
      titleUrdu: 'صحیح مسلم (تفسیر و فوائدِ اخلاق سمیت)',
      titleRoman: 'Sahih Muslim (Sharh o Fawaid-e-Akhlaq ke Sath)',
      titleEnglish: 'Sahih Muslim — Complete Classical Translation & Commentary',
      authorUrdu: 'امام مسلم بن الحجاج القشیریؒ',
      authorEnglish: 'Imam Muslim ibn al-Hajjaj al-Qushayri',
      noteUrdu: 'صحیح مسلم کی مستند احادیث اور اخلاقی ابواب کے مطالعے کے لیے منتخب کتاب۔',
      noteRoman: 'Sahih Muslim ki mustanad ahadith aur akhlaqi abwab ke mutalaay ke liye muntakhab kitaab.',
      noteEnglish: 'Paired with this narration from Sahih Muslim for authentic prophetic ethics study.',
      href: '/books',
      isExternal: false,
    };
  }

  if (ref.includes('tirmidhi') || ref.includes('shamail')) {
    return {
      titleUrdu: 'شمائلِ ترمذی و جامع ترمذی (سیرت و اخلاقِ نبوی ﷺ)',
      titleRoman: 'Shamail-e-Tirmidhi & Jami al-Tirmidhi Edition',
      titleEnglish: 'Shama’il al-Muhammadiyyah — Character of the Prophet ﷺ',
      authorUrdu: 'امام ابو عیسیٰ محمد الترمذیؒ',
      authorEnglish: 'Imam Abu Isa al-Tirmidhi',
      noteUrdu: 'حضور اکرم ﷺ کی عاداتِ مبارکہ اور حسنِ اخلاق جاننے کے لیے لازوال شاہکار۔',
      noteRoman: 'Huzoor ﷺ ki pyari aadaat aur husn-e-akhlaq samajhne ke liye lajawab shahkar.',
      noteEnglish: 'Classical portrait of the Prophet’s ﷺ daily character, gentleness, and habits.',
      href: '/category/khasail-e-nabawi',
      isExternal: false,
    };
  }

  return {
    titleUrdu: 'مخزنِ اخلاق (ڈیجیٹل و تحقیقی ایڈیشن)',
    titleRoman: 'Makhzan-e-Akhlaq (Classic Edition & Moral Treasury)',
    titleEnglish: 'Makhzan-e-Akhlaq — Treasury of Classical Islamic Ethics',
    authorUrdu: 'مولانا فضلِ حق و علمائے سلفؒ',
    authorEnglish: 'Maulana Fazl-e-Haq & Classical Sages',
    noteUrdu: 'اسلامی اخلاقیات، حکمتِ لقمان، اقوالِ صحابہؓ اور نبوی تعلیمات کا جامع و مستند مجموعہ۔',
    noteRoman: 'Islami akhlaqiat, hikmat-e-Luqman, aur aqwal-e-sahaba ka jame aur mustanad majmooa.',
    noteEnglish: 'Our foundational classical volume pairing Quranic wisdom, Hadith, and moral parables.',
    href: '/makhzan-e-akhlaq',
    isExternal: false,
  };
}

export default function SupportAndResourcesCard({
  quote,
  routeLanguage,
}: SupportAndResourcesCardProps) {
  const { language, showToast } = useLanguage();
  const activeLang = routeLanguage || language;
  const isUrdu = activeLang === 'ur';
  const [showSupportModal, setShowSupportModal] = useState(false);

  const recommendedBook = matchRecommendedBook(quote);
  const affiliateUrl = process.env.NEXT_PUBLIC_RECOMMENDED_BOOK_URL?.trim();

  const handlePrintablePdf = () => {
    if (typeof window !== 'undefined') {
      showToast(
        isUrdu
          ? 'پرنٹ / پی ڈی ایف ڈائیلاگ کھولا جا رہا ہے — "Save as PDF" منتخب کریں۔'
          : activeLang === 'ro'
          ? 'Print / PDF view khul raha hai — "Save as PDF" select karein.'
          : 'Opening print-ready view — choose "Save as PDF" to download.'
      );
      window.print();
    }
  };

  const labels = {
    ur: {
      sectionTitle: 'علمی وسائل، صدقہ جاریہ اور کتابی رہنمائی',
      sectionSub: 'دینی و اخلاقی علم کی ترویج میں شریک ہوں یا پرنٹ ایبل پوسٹرز حاصل کریں',
      supportTitle: 'ہمارے مشن میں تعاون کریں (صدقہ جاریہ)',
      supportDesc:
        'دنیا بھر میں مقیم مسلمان قارئین کے لیے مفت سہ لسانی اسلامی مواد، تحقیق اور ایچ ڈی کارڈز جاری رکھنے میں ہمارا ساتھ دیں۔',
      supportCta: 'صدقہ جاریہ / تعاون تفصیلات',
      pdfTitle: 'پرنٹ ایبل پی ڈی ایف (مخزنِ اخلاق / 40 حدیث پوسٹر)',
      pdfDesc:
        'گھر، مسجد یا تعلیمی ادارے میں آویزاں کرنے کے لیے چَہل حدیث اور اخلاقی پوسٹر پرنٹ / PDF محفوظ کریں۔',
      pdfCta: 'پرنٹ / PDF محفوظ کریں',
      pdfAltLink: '40 احادیث پوسٹر کھولیں',
      bookBadge: 'تجویز کردہ مستند کتاب',
      bookCta: 'کتاب و ابواب دیکھیں',
      disclosure: 'تحقیقی سفارش • Editorial Recommendation',
      modalTitle: 'صدقہ جاریہ — علمِ نافع پھیلانے میں حصہ لیں',
      modalBody:
        'اخلاقی باتیں ڈاٹ کام ایک آزاد تعلیمی و اصلاحی منصوبہ ہے۔ اوورسیز قارئین سرور ہوسٹنگ، اردو کمپوزنگ اور کتب کی ڈیجیٹائزیشن میں تعاون یا علمی شراکت کے لیے براہِ راست رابطہ صفحے یا آفیشل ای میل کے ذریعے رابطہ کر سکتے ہیں۔',
      modalAction: 'رابطہ و تعاون فارم کھولیں',
      closeLabel: 'بند کریں',
    },
    ro: {
      sectionTitle: 'Ilmi Wasail, Sadqah-e-Jariyah aur Kitabi Rehnumai',
      sectionSub: 'Islami taleemat aam karne ke mission mein shareek hon ya printable PDFs hasil karein',
      supportTitle: 'Hamare Mission Mein Taawun Karein (Sadqah-e-Jariyah)',
      supportDesc:
        'Duniya bhar mein Urdu, Roman aur English readers ke liye free Islami tahqeeq aur HD status cards jari rakhne mein madad karein.',
      supportCta: 'Support Our Mission (Sadqah-e-Jariyah)',
      pdfTitle: 'Download Printable PDF (Makhzan-e-Akhlaq / 40 Hadith Poster)',
      pdfDesc:
        'Ghar, masjid ya school ke liye saaf print-ready poster ya mukammal 40 Ahadith sheet PDF format mein save karein.',
      pdfCta: 'Save / Print Printable PDF',
      pdfAltLink: '40 Ahadith Poster Kholein',
      bookBadge: 'Mustanad Kitabi Sifarish',
      bookCta: 'Kitaab Dekhein',
      disclosure: 'Editorial & Book Recommendation',
      modalTitle: 'Sadqah-e-Jariyah — Ilm-e-Nafe Ko Aam Karein',
      modalBody:
        'AkhlaqiBaatein.com aik ghair-janibdar ilmi o islahi platform hai. Overseas qarieen hosting, digitizing aur ilmi taawun ki tafseelat ke liye hamare official contact page ke zariye rabta farma sakte hain.',
      modalAction: 'Contact & Support Desk Kholein',
      closeLabel: 'Band Karein',
    },
    en: {
      sectionTitle: 'Support Our Mission & Classic Study Resources',
      sectionSub: 'Help keep tri-lingual Islamic wisdom ad-light, open-access, and printable worldwide',
      supportTitle: 'Support Our Mission (Sadqah-e-Jariyah)',
      supportDesc:
        'Empower free Urdu, Roman Urdu, and English digitization of classical Islamic ethics for families and students overseas.',
      supportCta: 'Support Mission (Sadqah-e-Jariyah)',
      pdfTitle: 'Download Printable PDF (Makhzan-e-Akhlaq / 40 Hadith Poster)',
      pdfDesc:
        'Save a clean print-ready PDF edition of this page or open our 40 Hadith study poster for your home or classroom.',
      pdfCta: 'Save as Printable PDF',
      pdfAltLink: 'Open 40 Hadith Poster',
      bookBadge: 'Recommended Islamic Book Reference',
      bookCta: 'Explore Edition',
      disclosure: 'Curated Scholarly & Affiliate Reference',
      modalTitle: 'Contribute via Sadqah-e-Jariyah (Enduring Charity)',
      modalBody:
        'AkhlaqiBaatein.com is dedicated to preserving authentic classical ethics in clean tri-lingual formats. International supporters wishing to sponsor manuscript digitization or scholarship outreach can coordinate directly with our editorial desk.',
      modalAction: 'Connect With Editorial Desk',
      closeLabel: 'Close',
    },
  }[activeLang];

  const bookTitle =
    activeLang === 'ur'
      ? recommendedBook.titleUrdu
      : activeLang === 'en'
      ? recommendedBook.titleEnglish
      : recommendedBook.titleRoman;
  const bookNote =
    activeLang === 'ur'
      ? recommendedBook.noteUrdu
      : activeLang === 'en'
      ? recommendedBook.noteEnglish
      : recommendedBook.noteRoman;
  const bookAuthor = isUrdu ? recommendedBook.authorUrdu : recommendedBook.authorEnglish;

  return (
    <>
      <section className="print:hidden rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white border border-amber-500/30 shadow-xl space-y-6">
        <div className="space-y-1.5 border-b border-emerald-800/70 pb-4">
          <h2
            className={`text-lg sm:text-2xl font-bold text-amber-300 ${
              isUrdu ? 'font-urdu leading-[1.9]' : ''
            }`}
          >
            {labels.sectionTitle}
          </h2>
          <p
            className={`text-xs sm:text-sm text-emerald-100/80 ${
              isUrdu ? 'font-urdu leading-[1.9]' : 'leading-relaxed'
            }`}
          >
            {labels.sectionSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* 1. Sadqah-e-Jariyah Support Card */}
          <div className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-700/60 hover:border-amber-400/50 transition space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3
                className={`text-sm sm:text-base font-bold text-white ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-snug'
                }`}
              >
                {labels.supportTitle}
              </h3>
              <p
                className={`text-xs text-emerald-100/80 ${
                  isUrdu ? 'font-urdu leading-[1.95]' : 'leading-relaxed'
                }`}
              >
                {labels.supportDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowSupportModal(true)}
              className={`w-full min-h-[42px] px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm transition active:scale-95 flex items-center justify-center gap-2 ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              <HeartHandshake className="w-4 h-4 shrink-0" />
              <span>{labels.supportCta}</span>
            </button>
          </div>

          {/* 2. Printable PDF & 40 Hadith Poster Card */}
          <div className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-700/60 hover:border-amber-400/50 transition space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <FileDown className="w-5 h-5" />
              </div>
              <h3
                className={`text-sm sm:text-base font-bold text-white ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-snug'
                }`}
              >
                {labels.pdfTitle}
              </h3>
              <p
                className={`text-xs text-emerald-100/80 ${
                  isUrdu ? 'font-urdu leading-[1.95]' : 'leading-relaxed'
                }`}
              >
                {labels.pdfDesc}
              </p>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                onClick={handlePrintablePdf}
                className={`w-full min-h-[42px] px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs border border-emerald-500/40 transition active:scale-95 flex items-center justify-center gap-2 ${
                  isUrdu ? 'font-urdu' : ''
                }`}
              >
                <Printer className="w-4 h-4 shrink-0" />
                <span>{labels.pdfCta}</span>
              </button>
              <Link
                href="/chahal-hadith"
                className={`block text-center text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline ${
                  isUrdu ? 'font-urdu' : ''
                }`}
              >
                {labels.pdfAltLink}
              </Link>
            </div>
          </div>

          {/* 3. Source-Matched Recommended Book Affiliate Callout */}
          <div className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-700/60 hover:border-amber-400/50 transition space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-900/90 text-amber-300 border border-amber-500/30">
                  {labels.bookBadge}
                </span>
              </div>
              <h3
                className={`text-sm sm:text-base font-bold text-white ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-snug'
                }`}
              >
                {bookTitle}
              </h3>
              <p className="text-[11px] text-amber-300/90 font-medium">{bookAuthor}</p>
              <p
                className={`text-xs text-emerald-100/80 ${
                  isUrdu ? 'font-urdu leading-[1.95]' : 'leading-relaxed'
                }`}
              >
                {bookNote}
              </p>
            </div>
            <div className="space-y-1.5">
              {affiliateUrl ? (
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className={`w-full min-h-[42px] px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition flex items-center justify-center gap-2 ${
                    isUrdu ? 'font-urdu' : ''
                  }`}
                >
                  <span>{labels.bookCta}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              ) : (
                <Link
                  href={recommendedBook.href}
                  className={`w-full min-h-[42px] px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition flex items-center justify-center gap-2 ${
                    isUrdu ? 'font-urdu' : ''
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>{labels.bookCta}</span>
                </Link>
              )}
              <p className="text-[10px] text-emerald-200/60 text-center">{labels.disclosure}</p>
            </div>
          </div>
        </div>
      </section>

      {showSupportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-[#11221c] border border-emerald-700/50 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 px-6 bg-emerald-950 text-white">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className={`font-bold text-sm sm:text-base ${isUrdu ? 'font-urdu' : ''}`}>
                  {labels.modalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSupportModal(false)}
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-emerald-900"
                aria-label={labels.closeLabel}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p
                className={`text-sm text-slate-700 dark:text-emerald-100/90 ${
                  isUrdu ? 'font-urdu leading-[2.1]' : 'leading-relaxed'
                }`}
              >
                {labels.modalBody}
              </p>

              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2.5 text-xs text-emerald-900 dark:text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>info@akhlaqibaatein.com</span>
              </div>

              <div className="flex gap-2.5 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setShowSupportModal(false)}
                  className={`flex-1 py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs text-center transition ${
                    isUrdu ? 'font-urdu text-sm' : ''
                  }`}
                >
                  {labels.modalAction}
                </Link>
                <button
                  type="button"
                  onClick={() => setShowSupportModal(false)}
                  className={`py-2.5 px-4 rounded-xl bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs ${
                    isUrdu ? 'font-urdu' : ''
                  }`}
                >
                  {labels.closeLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
