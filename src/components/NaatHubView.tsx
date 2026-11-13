'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, Sparkles, BookOpen, ArrowLeft, ArrowRight, Feather, Layers } from 'lucide-react';
import { naatsList, NaatItem } from '@/data/naats';
import { useLanguage } from '@/context/LanguageContext';
import AdSlot from '@/components/AdSlot';

export default function NaatHubView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Naat', 'Salam', 'Qasida', 'Hamd', 'Manqabat'];

  const filteredNaats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return naatsList.filter((item) => {
      const catMatch = selectedCategory === 'All' || item.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      const haystack = `${item.title.ur} ${item.title.en} ${item.title.ro} ${item.poet.ur} ${item.poet.en} ${item.sourceBook.ur} ${item.ashaar.map((s) => s.misra1Ur + ' ' + s.misra2Ur).join(' ')}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
        isUrdu ? 'font-urdu' : 'font-sans'
      }`}>
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'سرورق' : 'Home'}
        </Link>
        <span className="opacity-60">/</span>
        <span className="text-slate-900 dark:text-white font-bold">
          {isUrdu ? 'دیوانِ نعت شریف' : 'Naat Sharif Hub'}
        </span>
      </nav>

      {/* Hero Banner */}
      <header className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#050e0b] text-white border-2 border-[#d4af37]/45 shadow-xl space-y-5">
        <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs sm:text-sm font-semibold">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className={isUrdu ? 'font-urdu leading-normal' : 'font-sans'}>
            {isUrdu
              ? 'مخزنِ اخلاق اور مستند نعتیہ دیوان • AkhlaqiBaatein.com'
              : 'Treasury of Classical Devotional Poetry & Sacred Lyrics'}
          </span>
        </div>

        <h1 className={`text-2xl sm:text-4xl font-bold text-white ${
          isUrdu ? 'font-urdu leading-[1.9] sm:leading-[2.0]' : 'font-sans leading-tight'
        }`}>
          {isUrdu
            ? 'دیوانِ نعتِ رسول ﷺ اور منظوم کلامِ عرفان (مکمل اشعار و تشریح)'
            : isRoman
            ? 'Diwan-e-Naat-e-Rasool ﷺ (Mukammal Ashaar o Tashreeh)'
            : 'Diwan-e-Naat Sharif — Classical Prophetic Poetry & Complete Lyrics'}
        </h1>

        <p className={`text-sm sm:text-base text-emerald-100/90 max-w-3xl ${
          isUrdu ? 'font-urdu leading-[2.1]' : 'font-sans leading-relaxed'
        }`}>
          {isUrdu
            ? 'اردو و عربی شاعری کے شاہکار، کلاسیکی نعتیہ دیوان (قصیدہ بردہ شریف، کلامِ رضا، مسدسِ حالی، کلامِ اقبال) — ہر نعت کے 6 تا 10 مکمل اشعار، مصرعہ اولیٰ و ثانیہ کی باوقار ترتیب، فرہنگ اور ادبی و روحانی تشریح کے ساتھ۔'
            : isRoman
            ? 'Urdu aur Arabi shairi ke shahkar, classical naatiya diwan — har naat ke 6 se 10 mukammal ashaar, farhang aur adabi tashreeh ke sath.'
            : 'Masterpieces of classical Islamic devotional poetry — featuring complete 6–10 couplets, vocabulary guides, spiritual commentaries, and downloadable 9:16 HD Status cards.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-amber-200 ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            <Feather className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              {isUrdu ? `${naatsList.length} منتخب کلاسیکی کلام` : `${naatsList.length} Classical Odes`}
            </span>
          </span>
        </div>
      </header>

      <AdSlot position="header" />

      {/* Search & Category Filter */}
      <section className="space-y-4">
        <div className="relative">
          <Search className={`w-4 h-4 text-slate-400 absolute ${isUrdu ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 pointer-events-none`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isUrdu
                ? 'نعت کا عنوان، شاعر کا نام یا مصرع تلاش کریں...'
                : 'Search Naat by title, poet, or verse...'
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
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition shrink-0 cursor-pointer ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                } ${
                  active
                    ? 'bg-[#0a1411] dark:bg-[#d4af37] text-[#d4af37] dark:text-[#0a1411] border border-[#d4af37] shadow-sm'
                    : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-emerald-100/85 border border-stone-200 dark:border-emerald-800/60 hover:border-[#d4af37]/70'
                }`}
              >
                {cat === 'All'
                  ? isUrdu
                    ? 'تمام کلام'
                    : 'All Kalam'
                  : cat === 'Naat'
                  ? isUrdu
                    ? 'نعت شریف'
                    : 'Naat'
                  : cat === 'Salam'
                  ? isUrdu
                    ? 'سلامِ رضا'
                    : 'Salam'
                  : cat === 'Hamd'
                  ? isUrdu
                    ? 'حمد و مناجات'
                    : 'Hamd'
                  : isUrdu
                  ? 'منقبتِ اہلِ بیت'
                  : 'Manqabat'}
              </button>
            );
          })}
        </div>
      </section>

      {/* Naats Grid */}
      {filteredNaats.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredNaats.map((item) => {
            const itemTitle = isUrdu ? item.title.ur : isRoman ? item.title.ro : item.title.en;
            const itemPoet = isUrdu ? item.poet.ur : isRoman ? item.poet.ro : item.poet.en;
            const itemSource = isUrdu ? item.sourceBook.ur : isRoman ? item.sourceBook.ro : item.sourceBook.en;

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
                      <span>{item.category}</span>
                    </span>

                    <span className="text-xs text-slate-500 dark:text-emerald-300/80 font-sans font-semibold">
                      {item.ashaar.length} Ashaar (اشعار)
                    </span>
                  </div>

                  <h2 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#d4af37] transition ${
                    isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans leading-snug'
                  }`}>
                    <Link href={`/naat/${item.slug}`}>{itemTitle}</Link>
                  </h2>

                  {/* Poetic Opening Couplet Snippet */}
                  <div className="p-4 rounded-2xl bg-[#07130f] border border-[#d4af37]/40 text-center space-y-1.5">
                    <p className="font-urdu text-base sm:text-lg text-white font-bold leading-[2.1]">
                      {item.ashaar[0]?.misra1Ur}
                    </p>
                    <p className="font-urdu text-base sm:text-lg text-[#fef3c7] font-bold leading-[2.1]">
                      {item.ashaar[0]?.misra2Ur}
                    </p>
                  </div>

                  <p className={`text-xs text-slate-500 dark:text-emerald-200/70 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    کلام: {itemPoet} • {itemSource}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-emerald-800/50 flex items-center justify-between gap-2">
                  <span className={`text-xs text-slate-500 dark:text-emerald-300/75 truncate ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    فرہنگ و تشریح شامل ہے
                  </span>

                  <Link
                    href={`/naat/${item.slug}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0a1411] hover:bg-emerald-900 dark:bg-[#d4af37] dark:hover:bg-amber-400 text-[#d4af37] dark:text-[#0a1411] text-xs sm:text-sm font-bold shrink-0 transition shadow-xs ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}
                  >
                    <span>{isUrdu ? 'مکمل کلام و تشریح پڑھیں' : 'Read Full Kalam'}</span>
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
            {isUrdu ? 'کوئی کلام نہیں ملا' : 'No Kalam found'}
          </p>
          <p className={`text-sm text-slate-500 dark:text-emerald-200/75 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'برائے مہربانی تلاش کے الفاظ تبدیل کریں۔' : 'Please refine your search query.'}
          </p>
        </div>
      )}

      <AdSlot position="footer" />
    </div>
  );
}
