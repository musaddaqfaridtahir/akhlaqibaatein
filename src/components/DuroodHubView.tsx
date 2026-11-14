'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, Sparkles, BookOpen, ArrowLeft, ArrowRight, Layers, Hash, Download, FileText, CheckCircle2 } from 'lucide-react';
import {
  duroodList,
  DUROOD_CATEGORIES,
  DuroodCategory,
  getDuroodCategoryLabel,
} from '@/data/durood';
import { DUROOD_LIBRARY_CATALOG, DuroodLibraryFile } from '@/data/duroodLibrary';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import AdSlot from '@/components/AdSlot';

interface LocalizedFaq {
  question: { ur: string; ro: string; en: string };
  answer: { ur: string; ro: string; en: string };
}

const HUB_FAQS: LocalizedFaq[] = [
  {
    question: {
      ur: 'درودِ پاک پڑھنے کی سب سے اہم فضیلت کیا ہے؟',
      ro: 'Durood-e-Pak parhne ki sab se ahem fazilat kya hai?',
      en: 'What is the most significant virtue of sending blessings upon the Prophet ﷺ?',
    },
    answer: {
      ur: 'صحیح احادیث کے مطابق جو شخص حضور نبی کریم ﷺ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے، اس کے دس گناہ معاف فرماتا ہے اور اس کے دس درجات بلند فرماتا ہے۔',
      ro: 'Sahih Ahadith ke mutabiq jo shakhs Nabi Kareem ﷺ par 1 bar durood bhejta hai, Allah us par 10 rehmatein nazil farmata hai, 10 gunah maaf karta hai aur 10 darjaat buland karta hai.',
      en: 'According to authenticated Hadith, whoever sends blessings upon the Prophet ﷺ once, Allah bestows ten mercies upon him, expiates ten sins, and raises him ten spiritual ranks.',
    },
  },
  {
    question: {
      ur: 'کیا ہر درود کا ڈیجیٹل تسبیح کاؤنٹر الگ محفوظ رہتا ہے؟',
      ro: 'Kya har durood ka digital tasbeeh counter alag save rehta hai?',
      en: 'Does each Durood retain its own interactive Tasbeeh count?',
    },
    answer: {
      ur: 'جی ہاں! ہر درود کے لیے الگ ڈیجیٹل تسبیح کاؤنٹر اور ہدف مقرر ہے جو آپ کے براؤزر میں محفوظ رہتا ہے تاکہ آپ دوبارہ آنے پر اپنی تسبیح وہیں سے جاری رکھ سکیں۔',
      ro: 'Ji haan, har durood ke liye alag counter aur target browser mein mehfooz rehta hai.',
      en: 'Yes, each Durood maintains an independent counter and target saved locally in your browser so you can resume your count at any time.',
    },
  },
  {
    question: {
      ur: 'اسٹیٹس کارڈ کس ریزولوشن میں ڈاؤن لوڈ ہوتا ہے؟',
      ro: 'Status Card kis resolution mein download hota hai?',
      en: 'In what format and resolution is the Status Card downloaded?',
    },
    answer: {
      ur: 'اسٹیٹس کارڈ 1080x1920 (9:16 Vertical HD) فارمیٹ میں ڈاؤن لوڈ ہوتا ہے جو واٹس ایپ اسٹیٹس اور انسٹاگرام اسٹوری کے لیے بالکل موزوں ہے۔',
      ro: 'Status card 1080x1920 (9:16 Vertical HD) format mein save hota hai jo WhatsApp Status ke liye ideal hai.',
      en: 'The Status Card is generated at 1080x1920 (9:16 Vertical HD), specifically formatted for WhatsApp Status and mobile sharing.',
    },
  },
];

interface DuroodHubViewProps {
  routeLanguage?: Language;
}

export default function DuroodHubView({ routeLanguage }: DuroodHubViewProps = {}) {
  const { language } = useLanguage();
  const activeLang: Language = routeLanguage || language;
  const isUrdu = activeLang === 'ur';
  const isRoman = activeLang === 'ro';
  const isEnglish = activeLang === 'en';

  const [selectedCategory, setSelectedCategory] = useState<DuroodCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getDetailPath = (slug: string) =>
    isEnglish ? `/en/durood/${slug}` : isRoman ? `/roman/durood/${slug}` : `/durood/${slug}`;

  const filteredDuroods = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return duroodList.filter((item) => {
      const catMatch = selectedCategory === 'All' || item.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      const haystack = `${item.title.ur} ${item.title.en} ${item.title.ro} ${item.arabicText} ${item.urduTranslation} ${item.romanUrdu} ${item.englishTranslation} ${item.fazilat.ur} ${item.reference.ur}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Top Header: Breadcrumb & 3-Edition Language Switcher */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
          isUrdu ? 'font-urdu' : 'font-sans'
        }`}>
          <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
            {isUrdu ? 'سرورق' : 'Home'}
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-slate-900 dark:text-white font-bold">
            {isUrdu ? 'درود و وظائف' : isRoman ? 'Durood o Wazaif' : 'Durood & Wazaif Hub'}
          </span>
        </nav>

        {/* 3-Language Edition Switcher Pills */}
        <div className="flex items-center gap-1 bg-stone-100 dark:bg-[#11221c] p-1 rounded-xl border border-stone-200 dark:border-emerald-800/50 text-xs shadow-xs">
          <Link
            href="/durood"
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'ur'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            اردو
          </Link>
          <Link
            href="/roman/durood"
            className={`px-2.5 py-1 rounded-lg transition font-medium ${
              activeLang === 'ro'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-slate-700 dark:text-emerald-200 hover:text-emerald-900'
            }`}
          >
            Roman
          </Link>
          <Link
            href="/en/durood"
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

      {/* Hero Banner */}
      <header className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#050e0b] text-white border-2 border-[#d4af37]/45 shadow-xl space-y-5">
        <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs sm:text-sm font-semibold">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className={isUrdu ? 'font-urdu leading-normal' : 'font-sans'}>
            {isUrdu
              ? 'مخزنِ اخلاق اور مستند اسلامی اذکار • AkhlaqiBaatein.com'
              : 'Treasury of Classical Islamic Ethics & Prophetic Salawat'}
          </span>
        </div>

        <h1 className={`text-2xl sm:text-4xl font-bold text-white ${
          isUrdu ? 'font-urdu leading-[1.9] sm:leading-[2.0]' : 'font-sans leading-tight'
        }`}>
          {isUrdu
            ? 'گوشۂ درود و سلام اور مستند وظائف (عربی متن، ترجمہ و ڈیجیٹل تسبیح)'
            : isRoman
            ? 'Gosha-e-Durood o Salam Aur Mustanad Wazaif (Tasbeeh & Status Cards)'
            : 'Durood o Salam & Wazaif Hub — Prophetic Salawat, Digital Tasbeeh & HD Cards'}
        </h1>

        <p className={`text-sm sm:text-base text-emerald-100/90 max-w-3xl ${
          isUrdu ? 'font-urdu leading-[2.1]' : 'font-sans leading-relaxed'
        }`}>
          {isUrdu
            ? 'حضور نبی کریم ﷺ کی بارگاہِ اقدس میں ہدیۂ درود و سلام پیش کرنے کے لیے منتخب مسنون اور مجرب درودِ پاک — مستند اعراب شدہ عربی متن، ترجمہ، تفصیلی فضیلت، ہر درود کے ساتھ انفرادی ڈیجیٹل تسبیح اور 9:16 HD اسٹیٹس کارڈ ڈاؤن لوڈ کی سہولت کے ساتھ۔'
            : isRoman
            ? 'Rasoolullah ﷺ ki bargah mein hadiyah-e-durood pesh karne ke liye muntakhab aur mustanad salawat — Arabic Naskh text, tarjuma, fazilat, digital tasbeeh counter aur 9:16 HD status cards.'
            : 'A scholarly, authenticated repository of blessings upon the Prophet Muhammad ﷺ — featuring crystal-clear Arabic Naskh typography, translations, detailed spiritual context, interactive Tasbeeh counters, and downloadable 9:16 HD Status Cards.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-amber-200 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <BookOpen className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              {isUrdu
                ? `${duroodList.length} منتخب درودِ پاک و اوراد`
                : `${duroodList.length} Authenticated Salawat`}
            </span>
          </span>
        </div>
      </header>

      <AdSlot position="header" />

      {/* Search & Category Filters */}
      <section className="space-y-4">
        <div className="relative">
          <Search className={`w-4 h-4 text-slate-400 absolute ${isUrdu ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 pointer-events-none`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isUrdu
                ? 'درود کا نام، عربی لفظ یا فضیلت تلاش کریں...'
                : isRoman
                ? 'Durood ka naam ya lafz talash karein...'
                : 'Search Durood by title, Arabic keyword, or virtue...'
            }
            className={`w-full ${
              isUrdu ? 'pr-11 pl-10' : 'pl-11 pr-10'
            } py-3.5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 shadow-xs ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className={`absolute ${isUrdu ? 'left-3.5' : 'right-3.5'} top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap">
          {DUROOD_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            const label = isUrdu ? cat.label.ur : isRoman ? cat.label.ro : cat.label.en;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition shrink-0 cursor-pointer ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                } ${
                  active
                    ? 'bg-[#0a1411] dark:bg-[#d4af37] text-[#d4af37] dark:text-[#0a1411] border border-[#d4af37] shadow-sm'
                    : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-emerald-100/85 border border-stone-200 dark:border-emerald-800/60 hover:border-[#d4af37]/70'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Durood Cards Grid */}
      {filteredDuroods.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredDuroods.map((item) => {
            const itemTitle = isUrdu ? item.title.ur : isRoman ? item.title.ro : item.title.en;
            const itemTrans = isUrdu
              ? item.urduTranslation
              : isRoman
              ? item.romanUrdu
              : item.englishTranslation;
            const itemRef = isUrdu ? item.reference.ur : isRoman ? item.reference.ro : item.reference.en;

            return (
              <article
                key={item.id}
                className="group rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-[#d4af37]/30 shadow-sm hover:shadow-md hover:border-[#d4af37] transition flex flex-col justify-between gap-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/35 ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}>
                      <Layers className="w-3.5 h-3.5 shrink-0" />
                      <span>{getDuroodCategoryLabel(item.category, activeLang)}</span>
                    </span>

                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200/80 dark:border-amber-700/50 ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}>
                      <Hash className="w-3 h-3 shrink-0" />
                      <span>{isUrdu ? `معمول: ${item.recommendedCount} بار` : `Target: ${item.recommendedCount}`}</span>
                    </span>
                  </div>

                  <h2 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition ${
                    isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans leading-snug'
                  }`}>
                    <Link href={getDetailPath(item.slug)}>{itemTitle}</Link>
                  </h2>

                  {/* Arabic Plaque with Crystal-Clear Naskh Font */}
                  <div className="p-4 rounded-2xl bg-[#07130f] border border-[#d4af37]/40 text-center">
                    <p
                      className="font-arabic text-lg sm:text-xl text-white leading-[2.5] text-center"
                      lang="ar"
                      dir="rtl"
                    >
                      {item.arabicText}
                    </p>
                  </div>

                  {/* Translation Snippet */}
                  <div className="space-y-1">
                    <span className={`text-xs font-bold text-emerald-800 dark:text-[#d4af37] ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}>
                      {isUrdu ? 'ترجمہ:' : 'Translation:'}
                    </span>
                    <p className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 line-clamp-3 ${
                      isUrdu ? 'font-urdu leading-[2.0]' : 'font-sans leading-relaxed'
                    }`}>
                      {itemTrans}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-emerald-800/50 flex items-center justify-between gap-2">
                  <span className={`text-xs text-slate-500 dark:text-emerald-300/75 truncate ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}>
                    {itemRef}
                  </span>

                  <Link
                    href={getDetailPath(item.slug)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0a1411] hover:bg-emerald-900 dark:bg-[#d4af37] dark:hover:bg-amber-400 text-[#d4af37] dark:text-[#0a1411] text-xs sm:text-sm font-bold shrink-0 transition shadow-xs ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    <span>{isUrdu ? 'تسبیح، فضیلت و اسٹیٹس کارڈ' : isRoman ? 'Tasbeeh o Status Card' : 'Tasbeeh & Status Card'}</span>
                    {isUrdu ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <div className="text-center py-14 px-4 rounded-3xl bg-white dark:bg-[#11221c] border border-dashed border-stone-300 dark:border-emerald-800/60 space-y-2">
          <p className={`text-lg font-bold text-slate-800 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'کوئی درود یا وظیفہ نہیں ملا' : 'No Durood found'}
          </p>
          <p className={`text-sm text-slate-500 dark:text-emerald-200/75 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu
              ? 'برائے مہربانی تلاش کے الفاظ تبدیل کریں یا تمام درود منتخب کریں۔'
              : 'Please refine your search query or reset category filter.'}
          </p>
        </div>
      )}

      {/* 100 Classical Durood & Wazaif PDF Library Section */}
      <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#050e0b] text-white border-2 border-[#d4af37]/45 shadow-xl space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap border-b border-emerald-800/60 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{isUrdu ? '100 مستند کتب و اوراد لائبریری' : '100 Authentic Durood & Wazaif Library'}</span>
            </div>
            <h2 className={`text-xl sm:text-2xl font-bold text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'کلاسیکی درود، احزاب و قصائد — واٹر مارک شدہ پی ڈی ایف لائبریری'
                : isRoman
                ? 'Classical Durood, Hizb o Qasaid Library (Watermarked PDFs)'
                : 'Classical Salawat, Hizb & Devotionals Library (Watermarked PDFs)'}
            </h2>
            <p className={`text-xs sm:text-sm text-emerald-200/80 max-w-2xl ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu
                ? 'تمام کتب و اوراد خودکار AkhlaqiBaatein.com برانڈنگ اور صفائی کے ساتھ ڈاؤن لوڈ کے لیے دستیاب ہیں۔'
                : 'All classical texts are automatically stamped with official AkhlaqiBaatein.com watermarks.'}
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-xl bg-white/10 text-amber-200 text-xs font-bold font-sans">
            100 Complete Texts
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[520px] overflow-y-auto pr-1">
          {DUROOD_LIBRARY_CATALOG.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-[#050e0b]/90 border border-emerald-800/50 hover:border-[#d4af37]/70 transition flex items-center justify-between gap-3"
            >
              <div className="space-y-1 min-w-0 flex-1">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-950 text-[#d4af37] border border-[#d4af37]/30">
                  {item.category}
                </span>
                <h3 className={`text-xs sm:text-sm font-bold text-white truncate ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? item.titleUr : item.titleEn}
                </h3>
                <span className="text-[10px] text-emerald-200/60 block">
                  {item.sizeKb} KB • PDF
                </span>
              </div>

              <a
                href={`/api/durood-pdf?file=${encodeURIComponent(item.filename)}`}
                download
                className="shrink-0 p-2.5 rounded-xl bg-[#d4af37] hover:bg-amber-400 text-[#0a1411] font-bold text-xs shadow-xs transition active:scale-95 flex items-center gap-1 cursor-pointer"
                title="Download watermarked PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className={`text-[11px] ${isUrdu ? 'font-urdu font-bold' : 'font-sans font-semibold'}`}>
                  {isUrdu ? 'محفوظ کریں' : 'Save'}
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <AdSlot position="in-article" />

      {/* Structured FAQs */}
      <section className="rounded-3xl p-5 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm space-y-4">
        <h2 className={`text-xl font-bold text-slate-900 dark:text-[#d4af37] ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
          {isUrdu
            ? 'درود و وظائف سے متعلق اہم سوالات'
            : isRoman
            ? 'Durood o Wazaif Se Mutalliq Sawalat'
            : 'Frequently Asked Questions about Durood & Wazaif'}
        </h2>
        <div className="space-y-3">
          {HUB_FAQS.map((faq, idx) => {
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
                <p className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/85 leading-[2.05] ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}>
                  {a}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <AdSlot position="footer" />
    </div>
  );
}
