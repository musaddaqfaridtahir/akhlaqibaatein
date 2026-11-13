'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, Sparkles, BookOpen, ArrowLeft, Layers, Hash } from 'lucide-react';
import {
  duroodList,
  DUROOD_CATEGORIES,
  DuroodCategory,
  getDuroodCategoryLabelUr,
} from '@/data/durood';
import AdSlot from '@/components/AdSlot';
import SupportAndResourcesCard from '@/components/SupportAndResourcesCard';

interface HubFaq {
  question: string;
  answer: string;
}

const HUB_FAQS: HubFaq[] = [
  {
    question: 'درودِ پاک پڑھنے کی سب سے اہم فضیلت کیا ہے؟',
    answer:
      'صحیح احادیث کے مطابق جو شخص حضور نبی کریم ﷺ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے، اس کے دس گناہ معاف ہوتے ہیں اور دس درجات بلند کیے جاتے ہیں۔',
  },
  {
    question: 'کیا اس صفحے پر موجود ہر درود کا ڈیجیٹل تسبیح کاؤنٹر الگ محفوظ ہوتا ہے؟',
    answer:
      'جی ہاں! ہر درود اور وظیفے کے صفحے پر اپنا الگ ڈیجیٹل تسبیح کاؤنٹر موجود ہے جو آپ کے براؤزر میں محفوظ رہتا ہے تاکہ دوبارہ آنے پر آپ وہیں سے گنتی جاری رکھ سکیں۔',
  },
  {
    question: 'کیا میں کسی بھی درود کی برانڈڈ PDF ڈاؤن لوڈ کر سکتا ہوں؟',
    answer:
      'جی ہاں، ہر درود کے تفصیلی صفحے پر عربی متن، اردو ترجمہ اور فضیلت پر مشتمل AkhlaqiBaatein.com کی خوبصورت برانڈڈ PDF ایک کلک میں ڈاؤن لوڈ کی جا سکتی ہے۔',
  },
];

export default function DuroodHubView() {
  const [selectedCategory, setSelectedCategory] = useState<DuroodCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDuroods = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return duroodList.filter((item) => {
      const catMatch = selectedCategory === 'All' || item.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      const haystack = `${item.title.ur} ${item.title.en} ${item.arabicText} ${item.urduTranslation} ${item.fazilat} ${item.reference}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div dir="rtl" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 font-urdu">
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          سرورق
        </Link>
        <span className="opacity-60">/</span>
        <span className="text-slate-900 dark:text-white font-bold">درود و وظائف</span>
      </nav>

      {/* Hero Banner */}
      <header className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0a1411] via-[#11221c] to-[#07100d] text-white border border-[#d4af37]/45 shadow-xl space-y-5">
        <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs sm:text-sm font-semibold">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="font-urdu leading-normal">مخزنِ اخلاق اور مستند اسلامی اذکار • AkhlaqiBaatein.com</span>
        </div>

        <h1 className="font-urdu text-2xl sm:text-4xl font-bold text-white leading-[1.9] sm:leading-[2.0]">
          گوشۂ درود و سلام اور مستند وظائف (عربی متن و اردو ترجمہ)
        </h1>

        <p className="font-urdu text-sm sm:text-base text-emerald-100/90 max-w-3xl leading-[2.1]">
          حضور نبی کریم ﷺ کی بارگاہ میں ہدیۂ درود و سلام پیش کرنے کے لیے منتخب مسنون و مجرب درودِ پاک — مستند عربی متن، آسان اردو ترجمہ، فضیلت، ڈیجیٹل تسبیح کاؤنٹر اور برانڈڈ PDF ڈاؤن لوڈ کی سہولت کے ساتھ۔
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-urdu text-amber-200">
            <BookOpen className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>{duroodList.length} منتخب درودِ پاک و اوراد</span>
          </span>
        </div>
      </header>

      <AdSlot position="header" />

      {/* Search & Category Filters */}
      <section className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="درود کا نام، عربی لفظ یا فضیلت تلاش کریں..."
            className="w-full pr-11 pl-10 py-3.5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 text-sm sm:text-base font-urdu text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap">
          {DUROOD_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-urdu font-bold whitespace-nowrap transition shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#0a1411] dark:bg-[#d4af37] text-[#d4af37] dark:text-[#0a1411] border border-[#d4af37] shadow-sm'
                    : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-emerald-100/85 border border-stone-200 dark:border-emerald-800/60 hover:border-[#d4af37]/70'
                }`}
              >
                {cat.labelUr}
              </button>
            );
          })}
        </div>
      </section>

      {/* Durood Cards Grid */}
      {filteredDuroods.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredDuroods.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-[#d4af37]/30 shadow-sm hover:shadow-md hover:border-[#d4af37] transition flex flex-col justify-between gap-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-urdu font-bold bg-emerald-50 dark:bg-[#0a1411] text-emerald-900 dark:text-[#d4af37] border border-emerald-200 dark:border-[#d4af37]/35">
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span>{getDuroodCategoryLabelUr(item.category)}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-urdu font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200/80 dark:border-amber-700/50">
                    <Hash className="w-3 h-3 shrink-0" />
                    <span>معمول: {item.recommendedCount} بار</span>
                  </span>
                </div>

                <h2 className="font-urdu text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition leading-[1.85]">
                  <Link href={`/durood/${item.slug}`}>{item.title.ur}</Link>
                </h2>

                {/* Arabic Plaque */}
                <div className="p-4 rounded-2xl bg-[#0a1411] border border-[#d4af37]/40 text-center">
                  <p className="font-arabic text-lg sm:text-xl text-white leading-[2.2] text-center">
                    {item.arabicText}
                  </p>
                </div>

                {/* Urdu Translation snippet */}
                <div className="space-y-1">
                  <span className="font-urdu text-xs font-bold text-emerald-800 dark:text-[#d4af37]">
                    اردو ترجمہ:
                  </span>
                  <p className="font-urdu text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 leading-[2.0] line-clamp-3">
                    {item.urduTranslation}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 dark:border-emerald-800/50 flex items-center justify-between gap-2">
                <span className="font-urdu text-xs text-slate-500 dark:text-emerald-300/75 truncate">
                  {item.reference}
                </span>

                <Link
                  href={`/durood/${item.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0a1411] hover:bg-emerald-900 dark:bg-[#d4af37] dark:hover:bg-amber-400 text-[#d4af37] dark:text-[#0a1411] font-urdu text-xs sm:text-sm font-bold shrink-0 transition shadow-xs"
                >
                  <span>تسبیح، فضیلت و PDF</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="text-center py-14 px-4 rounded-3xl bg-white dark:bg-[#11221c] border border-dashed border-stone-300 dark:border-emerald-800/60 space-y-2">
          <p className="font-urdu text-lg font-bold text-slate-800 dark:text-white">
            کوئی درود یا وظیفہ نہیں ملا
          </p>
          <p className="font-urdu text-sm text-slate-500 dark:text-emerald-200/75">
            برائے مہربانی تلاش کے الفاظ تبدیل کریں یا تمام درود منتخب کریں۔
          </p>
        </div>
      )}

      <AdSlot position="in-article" />

      {/* FAQs Section */}
      <section className="rounded-3xl p-5 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm space-y-4">
        <h2 className="font-urdu text-xl font-bold text-slate-900 dark:text-[#d4af37]">
          درود و وظائف سے متعلق اہم سوالات
        </h2>
        <div className="space-y-3">
          {HUB_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-stone-50 dark:bg-[#0a1411] border border-stone-200 dark:border-emerald-800/50 space-y-1.5"
            >
              <h3 className="font-urdu text-sm sm:text-base font-bold text-slate-900 dark:text-emerald-200">
                {faq.question}
              </h3>
              <p className="font-urdu text-xs sm:text-sm text-slate-700 dark:text-emerald-100/85 leading-[2.05]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SupportAndResourcesCard routeLanguage="ur" />

      <AdSlot position="footer" />
    </div>
  );
}
