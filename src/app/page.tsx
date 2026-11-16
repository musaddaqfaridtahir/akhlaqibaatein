'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Compass,
  HeartHandshake,
  ScrollText,
  Library,
  Clock,
  Award,
  Calculator,
  Camera,
  Feather,
} from 'lucide-react';
import { categories, getCategoryBySlug, getCategoryTitle, getCategoryDesc } from '@/data/categories';
import { quotes } from '@/data/quotes';
import { duroodList } from '@/data/durood';
import { duainList } from '@/data/duain';
import { naatsList } from '@/data/naats';
import {
  articles,
  getArticleTitle,
  getArticleSummary,
  getArticleAuthor,
  getArticleReadTime,
} from '@/data/articles';
import {
  books,
  getBookTitle,
  getBookDesc,
  getBookAuthor,
  getChapterTitle,
} from '@/data/books';
import SearchAndQuoteFeed from '@/components/SearchAndQuoteFeed';
import QuoteCard from '@/components/QuoteCard';
import AdSlot from '@/components/AdSlot';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';
  const isEnglish = language === 'en';

  const quoteOfTheDay = quotes.find((q) => q.featured) || quotes[0];
  const featuredArticles = [...articles].reverse().slice(0, 3);
  const primaryBook = books[0];

  const heroContent = {
    ur: {
      badge: 'کلاسیکی اخلاقیات و روحانی بصیرت کا گنجینہ',
      title: 'اخلاقی باتیں و اسلامی حکمت',
      desc: 'قرآنی احکام، ارشاداتِ نبوی ﷺ، اقوالِ صحابہؓ اور کلاسیکی کتب (جیسے مخزنِ اخلاق) کا مستند ذخیرہ۔ باوقار واٹس ایپ اسٹیٹس جنریٹر کے ساتھ۔',
      hadithBtn: 'چہل احادیث حفظ کریں',
      libraryBtn: 'کتب خانہ دیکھیں',
      categoriesHeading: 'موضوعات و ابوابِ اخلاق',
      categoriesSub: 'کلاسیکی کتب کے موضوعاتی ابواب کے مطابق اخلاقی تعلیمات پڑھیں',
      allCategoryQuotes: 'تمام اقوال پڑھیں',
    },
    ro: {
      badge: 'Classic Akhlaqiat aur Roohani Baseerat ka Zakheera',
      title: 'Akhlaqi Baatein aur Islami Hikmat',
      desc: 'Quran-e-Majeed, Irshadat-e-Nabawi ﷺ, Aqwal-e-Sahaba (R.A) aur classic kutub (Makhzan-e-Akhlaq) ka mustanad zakheera. WhatsApp status card generator ke sath.',
      hadithBtn: '40 Ahadith Hifz Karein',
      libraryBtn: 'Kutub Khana Dekhein',
      categoriesHeading: 'Categories aur Abwab-e-Akhlaq',
      categoriesSub: 'Classic kitabon ke abwab ke mutabiq aqwal o irshadat parhein',
      allCategoryQuotes: 'Tamam Aqwal Parhein',
    },
    en: {
      badge: 'Treasury of Classical Islamic Ethics & Spiritual Wisdom',
      title: 'Akhlaqi Baatein & Islamic Wisdom',
      desc: 'Authentic Quranic injunctions, Prophetic traditions, sayings of the Companions, and classical moral literature with instant WhatsApp status card generator.',
      hadithBtn: 'Memorize 40 Hadith',
      libraryBtn: 'Explore Books Library',
      categoriesHeading: 'Thematic Moral Categories',
      categoriesSub: 'Browse ethical teachings organized by classical literary chapters',
      allCategoryQuotes: 'Explore All Sayings',
    },
  }[language];

  const categoryIcons: Record<string, React.ReactNode> = {
    'ahkam-e-khuda': <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    'irshadat-e-nabawi': <Sparkles className="w-6 h-6 text-amber-500" />,
    'khasail-e-nabawi': <HeartHandshake className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    'aqwal-e-sahaba': <ShieldCheck className="w-6 h-6 text-amber-500" />,
    'ambiya-o-hukama': <Compass className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    'sabaq-aamoz-waqiat': <ScrollText className="w-6 h-6 text-amber-500" />,
    'naat-sharif': <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  };

  return (
    <div className="space-y-10 sm:space-y-16">
      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-10 md:py-14 md:px-12 lg:p-16 bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/30 dark:from-emerald-950 dark:via-emerald-900 dark:to-slate-950 text-slate-900 dark:text-white shadow-lg dark:shadow-2xl border border-stone-200/90 dark:border-amber-500/30 islamic-pattern transition-colors">
        <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-amber-500/20 text-emerald-900 dark:text-amber-300 text-xs sm:text-sm font-semibold border border-emerald-200 dark:border-amber-500/30">
            <Sparkles className="w-4 h-4 text-emerald-700 dark:text-amber-400 shrink-0" />
            <span className={isUrdu ? 'font-urdu leading-normal' : ''}>{heroContent.badge}</span>
          </div>

          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white break-words ${
              isUrdu ? 'font-urdu leading-[1.8] sm:leading-[1.9]' : 'leading-tight tracking-tight'
            }`}
          >
            {heroContent.title}
          </h1>

          <p
            className={`text-xs sm:text-base md:text-lg text-slate-700 dark:text-emerald-100/90 break-words ${
              isUrdu ? 'font-urdu leading-[1.85] sm:leading-[2.0]' : 'leading-relaxed'
            }`}
          >
            {heroContent.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/chahal-hadith"
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition active:scale-95 ${
                isUrdu ? 'font-urdu leading-normal' : ''
              }`}
            >
              <Award className="w-4 h-4 shrink-0" />
              <span>{heroContent.hadithBtn}</span>
            </Link>

            <Link
              href="/makhzan-e-akhlaq"
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl bg-white hover:bg-stone-100 text-slate-800 border border-stone-300 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/15 font-semibold text-xs sm:text-sm shadow-xs backdrop-blur-md transition active:scale-95 ${
                isUrdu ? 'font-urdu leading-normal' : ''
              }`}
            >
              <Library className="w-4 h-4 shrink-0" />
              <span>{heroContent.libraryBtn}</span>
            </Link>
          </div>
        </div>

        {/* Decorative Golden Ambient Blur */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-emerald-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Homepage First-Fold Conversion Engine: Top Wazaif, Durood & Duain with Interactive Tasbeeh */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-amber-900 dark:text-[#d4af37] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                {isUrdu
                  ? 'آن لائن تسبیح کاؤنٹر کے ساتھ • خودکار محفوظ ہدف'
                  : isRoman
                  ? 'Online Tasbeeh Counter ke sath • Auto-Saving Target'
                  : 'Interactive Digital Tasbeeh • Auto-Saved Progress'}
              </span>
            </div>

            <h2
              className={`text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-[#fef3c7] ${
                isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans tracking-tight'
              }`}
            >
              {isUrdu
                ? 'روزمرہ کے مقبول ترین وظائف، درودِ پاک اور مسنون اذکار (آن لائن تسبیح کے ساتھ)'
                : isRoman
                ? 'Rozmarra ke Maqbool Tareen Wazaif, Durood-e-Pak aur Masnoon Azkar'
                : 'Top Daily Wazaif, Durood-e-Pak & Masnoon Supplications (with Online Tasbeeh)'}
            </h2>

            <p
              className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/80 max-w-3xl ${
                isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans'
              }`}
            >
              {isUrdu
                ? 'فوری تلاوت اور ڈیجیٹل تسبیح کے لیے اپنے مطلوبہ درود یا وظیفے پر کلک کریں — مستند عربی متن، ترجمہ، فضیلت اور 1-کلک 9:16 HD اسٹیٹس کارڈ کے ساتھ۔'
                : isRoman
                ? 'Direct 1-click access to authenticated Salawat & Quranic Azkar with real-time saving digital circular tasbeeh counter.'
                : 'Direct 1-click access to authenticated Salawat & Quranic Azkar with real-time saving digital circular tasbeeh counter.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={isEnglish ? '/en/durood' : isRoman ? '/roman/durood' : '/durood'}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800/10 hover:bg-emerald-800/20 text-emerald-900 dark:bg-[#d4af37]/15 dark:hover:bg-[#d4af37]/25 dark:text-[#fef3c7] border border-emerald-300 dark:border-[#d4af37]/40 text-xs sm:text-sm font-bold transition ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              <span>{isUrdu ? 'تمام درود و وظائف' : 'All Durood'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 8 High-Conversion Fast Access Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 'tanjina',
              href: '/durood/salat-al-tanjina',
              titleUr: 'درودِ تنجینا',
              titleRo: 'Durood e Tanjeena',
              titleEn: 'Salat al-Tanjina',
              benefitUr: 'مشکلات اور پریشانیوں سے نجات کا اکسیر وظیفہ',
              benefitRo: 'Mushkilat aur pareshaniyon se nijat (41 bar)',
              benefitEn: 'Relief from acute distress & severe hardships',
              target: '41× ورد',
              categoryUr: 'مشکل کشائی',
              categoryRo: 'Mushkilat',
              categoryEn: 'Hardship Relief',
              badgeColor: 'bg-amber-100 dark:bg-[#07130f] text-amber-950 dark:text-[#d4af37] border-amber-300 dark:border-[#d4af37]/40',
            },
            {
              id: 'taj',
              href: '/durood/durood-e-taj',
              titleUr: 'درودِ تاج',
              titleRo: 'Durood-e-Taj',
              titleEn: 'Salat al-Taj',
              benefitUr: 'دلی مرادوں، روحانی سکون اور حصولِ برکت کا ورد',
              benefitRo: 'Dili muradon aur roohani sukoon ka wird',
              benefitEn: 'Spiritual peace & fulfillment of pure wishes',
              target: '33× ورد',
              categoryUr: 'روحانی سکون',
              categoryRo: 'Sukoon',
              categoryEn: 'Spiritual Peace',
              badgeColor: 'bg-emerald-100 dark:bg-[#07130f] text-emerald-950 dark:text-emerald-400 border-emerald-300 dark:border-emerald-600/40',
            },
            {
              id: 'ibrahimi',
              href: '/durood/durood-e-ibrahimi',
              titleUr: 'درودِ ابراہیمی',
              titleRo: 'Durood-e-Ibrahimi',
              titleEn: 'Durood-e-Ibrahimi',
              benefitUr: 'نماز کا افضل ترین مسنون درود شریف اور شفاعت',
              benefitRo: 'Namaz ka afzal tareen masnoon durood',
              benefitEn: 'Supreme Prophetic Salawat recited in prayer',
              target: '100× ورد',
              categoryUr: 'افضل ترین درود',
              categoryRo: 'Supreme',
              categoryEn: 'Supreme Blessings',
              badgeColor: 'bg-amber-100 dark:bg-[#07130f] text-amber-950 dark:text-[#d4af37] border-amber-300 dark:border-[#d4af37]/40',
            },
            {
              id: 'nariya',
              href: '/durood/salat-al-nariya',
              titleUr: 'درودِ ناریہ',
              titleRo: 'Salat al-Nariya',
              titleEn: 'Salat al-Nariya',
              benefitUr: 'فوری مشکل کشائی اور بندشوں کے خاتمے کا مجرب ورد',
              benefitRo: 'Fori mushkil kushai ka mujarrab wird',
              benefitEn: 'Swift relief from afflictions and blocked paths',
              target: '41× ورد',
              categoryUr: 'فوری کشائش',
              categoryRo: 'Swift Relief',
              categoryEn: 'Swift Relief',
              badgeColor: 'bg-emerald-100 dark:bg-[#07130f] text-emerald-950 dark:text-emerald-400 border-emerald-300 dark:border-emerald-600/40',
            },
            {
              id: 'ayat-kursi',
              href: '/duain/ayat-ul-kursi',
              titleUr: 'آیت الکرسی',
              titleRo: 'Ayat ul Kursi',
              titleEn: 'Ayat al-Kursi (2:255)',
              benefitUr: 'قرآن مجید کی اعظم ترین آیت اور حفاظت کا قرآنی حصار',
              benefitRo: 'Quran ki azeem tareen aayat aur hisar',
              benefitEn: 'Greatest verse of the Quran for divine protection',
              target: '7× ورد',
              categoryUr: 'اعظم آیات',
              categoryRo: 'Protection',
              categoryEn: 'Divine Shield',
              badgeColor: 'bg-emerald-100 dark:bg-[#07130f] text-emerald-950 dark:text-emerald-400 border-emerald-300 dark:border-emerald-600/40',
            },
            {
              id: 'manzil',
              href: '/duain/manzil-dua',
              titleUr: 'منزل شریف',
              titleRo: 'Manzil Shareef',
              titleEn: 'Manzil Shareef',
              benefitUr: 'نظرِ بد، سحر، جادو اور ہر بلا سے مکمل حفاظت',
              benefitRo: 'Nazar-e-bad, jadu aur aaseeb se hifazat',
              benefitEn: 'Complete protection against evil eye & sorcery',
              target: 'یومیہ 1 بار',
              categoryUr: 'شفاء و حفاظت',
              categoryRo: 'Ruqyah',
              categoryEn: 'Spiritual Cure',
              badgeColor: 'bg-amber-100 dark:bg-[#07130f] text-amber-950 dark:text-[#d4af37] border-amber-300 dark:border-[#d4af37]/40',
            },
            {
              id: 'sayyid-istighfar',
              href: '/duain/sayyid-ul-istighfar',
              titleUr: 'سید الاستغفار',
              titleRo: 'Sayyid ul Istighfar',
              titleEn: 'Sayyid al-Istighfar',
              benefitUr: 'توبہ و مغفرت کا سردار — جنت کی بشارت کا نبوی نسخہ',
              benefitRo: 'Tauba ka sardar — jannat ki basharat',
              benefitEn: 'Master of forgiveness & divine acceptance',
              target: '3× ورد',
              categoryUr: 'مغفرت و رزق',
              categoryRo: 'Forgiveness',
              categoryEn: 'Forgiveness',
              badgeColor: 'bg-amber-100 dark:bg-[#07130f] text-amber-950 dark:text-[#d4af37] border-amber-300 dark:border-[#d4af37]/40',
            },
            {
              id: 'qunoot',
              href: '/duain/dua-e-qunoot',
              titleUr: 'دعائے قنوت',
              titleRo: 'Dua-e-Qunoot',
              titleEn: 'Dua-e-Qunoot',
              benefitUr: 'نمازِ وتر کی مسنون دعا مع اعراب و اردو ترجمہ',
              benefitRo: 'Namaz-e-Witr ki masnoon dua',
              benefitEn: 'Core supplication of the Witr prayer',
              target: 'نمازِ وتر',
              categoryUr: 'مسنون نماز',
              categoryRo: 'Daily Prayer',
              categoryEn: 'Witr Prayer',
              badgeColor: 'bg-emerald-100 dark:bg-[#07130f] text-emerald-950 dark:text-emerald-400 border-emerald-300 dark:border-emerald-600/40',
            },
          ].map((item) => {
            const itemHref = isEnglish
              ? `/en${item.href}`
              : isRoman
              ? `/roman${item.href}`
              : item.href;
            const itemTitle = isUrdu ? item.titleUr : isRoman ? item.titleRo : item.titleEn;
            const itemBenefit = isUrdu ? item.benefitUr : isRoman ? item.benefitRo : item.benefitEn;
            const itemCat = isUrdu ? item.categoryUr : isRoman ? item.categoryRo : item.categoryEn;

            return (
              <Link
                key={item.id}
                href={itemHref}
                className="group relative rounded-3xl p-5 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/20 dark:from-[#0d221a] dark:via-[#11221c] dark:to-[#07130f] border-2 border-stone-200/90 dark:border-[#d4af37]/40 shadow-sm hover:shadow-xl hover:border-[#d4af37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border leading-[1.9] ${item.badgeColor} ${
                      isUrdu ? 'font-urdu' : 'font-sans'
                    }`}>
                      {itemCat}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#d4af37]/20 border border-[#d4af37]/40 text-amber-950 dark:text-[#fef3c7] leading-[1.9]">
                      {item.target}
                    </span>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] group-hover:text-emerald-700 dark:group-hover:text-[#d4af37] transition-colors ${
                      isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans'
                    }`}
                  >
                    {itemTitle}
                  </h3>

                  <p
                    className={`text-xs text-slate-600 dark:text-emerald-100/80 line-clamp-2 ${
                      isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans leading-relaxed'
                    }`}
                  >
                    {itemBenefit}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t border-stone-200 dark:border-emerald-800/50 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-[#d4af37] group-hover:underline ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{isUrdu ? 'آن لائن تسبیح پڑھیں' : isRoman ? 'Tasbeeh Parhein' : 'Read with Tasbeeh'}</span>
                  </span>
                  {isUrdu ? (
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Utility Action Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
          <Link
            href={isEnglish ? '/en/tools/qaza-namaz-calculator' : isRoman ? '/roman/tools/qaza-namaz-calculator' : '/tools/qaza-namaz-calculator'}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-[#d4af37]/35 shadow-xs hover:border-[#d4af37] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-800/10 dark:bg-[#07130f] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                <Clock className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div>
                <p className={`text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'قضاء نماز کیلکولیٹر' : 'Qaza Namaz Calculator'}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-emerald-200/70">
                  {isUrdu ? 'چھوٹی ہوئی نمازوں کا ٹریکر' : 'Missed prayers lifetime tracker'}
                </p>
              </div>
            </div>
            {isUrdu ? (
              <ArrowLeft className="w-4 h-4 text-[#d4af37] group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
            )}
          </Link>

          <Link
            href={isEnglish ? '/en/status-maker' : isRoman ? '/roman/status-maker' : '/status-maker'}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-[#d4af37]/35 shadow-xs hover:border-[#d4af37] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-[#07130f] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                <Camera className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div>
                <p className={`text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'اسلامی اسٹیٹس میکر (9:16 HD)' : 'Islamic Status Maker (9:16 HD)'}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-emerald-200/70">
                  {isUrdu ? 'اپنے نام کے ساتھ واٹس ایپ کارڈ' : 'Custom name WhatsApp card'}
                </p>
              </div>
            </div>
            {isUrdu ? (
              <ArrowLeft className="w-4 h-4 text-[#d4af37] group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
            )}
          </Link>

          <Link
            href={isEnglish ? '/en/duain' : isRoman ? '/roman/duain' : '/duain'}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-[#d4af37]/35 shadow-xs hover:border-[#d4af37] transition group sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-800/10 dark:bg-[#07130f] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div>
                <p className={`text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu ? 'تمام مسنون دعائیں و اوراد' : 'All Masnoon Duain & Azkar'}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-emerald-200/70">
                  {isUrdu ? `${duainList.length} منتخب قرآنی و نبوی دعائیں` : `${duainList.length} Authenticated supplications`}
                </p>
              </div>
            </div>
            {isUrdu ? (
              <ArrowLeft className="w-4 h-4 text-[#d4af37] group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
        </div>
      </section>

      {/* Quote of the Day Spotlight Card */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2
              className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white ${
                isUrdu ? 'font-urdu leading-normal' : ''
              }`}
            >
              {t.quoteOfTheDay}
            </h2>
          </div>
          <span
            className={`text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 ${
              isUrdu ? 'font-urdu leading-normal' : ''
            }`}
          >
            {t.selectedQuote}
          </span>
        </div>
        <QuoteCard quote={quoteOfTheDay} />
      </section>

      {/* Category Grid Section */}
      <section id="categories" className="space-y-6 scroll-mt-24">
        <div>
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white ${
              isUrdu ? 'font-urdu leading-[1.8]' : ''
            }`}
          >
            {heroContent.categoriesHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {heroContent.categoriesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Durood o Wazaif Hub */}
          <Link
            href="/durood"
            className="group p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/40 dark:from-[#0d221a] dark:via-[#11221c] dark:to-[#07130f] border-2 border-[#d4af37]/60 shadow-md hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-amber-500/15 dark:bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#d4af37]" />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-[#07130f] text-amber-950 dark:text-[#d4af37] border border-amber-300 dark:border-[#d4af37]/40 shadow-xs ${
                    isUrdu ? 'font-urdu leading-normal' : ''
                  }`}
                >
                  {duroodList.length} {isUrdu ? 'درود شریف' : isRoman ? 'Durood-e-Pak' : 'Salawat'}
                </span>
              </div>

              <div>
                <h3
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] group-hover:text-emerald-700 dark:group-hover:text-[#d4af37] transition-colors ${
                    isUrdu ? 'font-urdu leading-[1.8]' : ''
                  }`}
                >
                  {isUrdu ? 'درود و وظائف' : isRoman ? 'Durood & Wazaif Hub' : 'Durood & Salawat Hub'}
                </h3>
              </div>

              <p
                className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/85 line-clamp-2 ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
                }`}
              >
                {isUrdu
                  ? 'مستند اعراب شدہ عربی متن، اردو ترجمہ، فضیلت اور ڈیجیٹل سرکلر تسبیح کاؤنٹر کے ساتھ منتخب درودِ پاک۔'
                  : isRoman
                  ? 'Mustanad Arabic Naskh text, Roman Urdu tarjuma, fazilat aur digital circular tasbeeh counter.'
                  : 'Classical authenticated Salawat upon Prophet Muhammad ﷺ with Arabic text, translations, virtues, and interactive counter.'}
              </p>
            </div>

            <div
              className={`mt-4 pt-4 border-t border-[#d4af37]/30 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-[#d4af37] ${
                isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
              }`}
            >
              <span>{isUrdu ? 'درود و وظائف پڑھیں' : isRoman ? 'Durood Parhein' : 'Explore Durood Hub'}</span>
              {isUrdu ? (
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
          </Link>

          {/* Card 2: Masnoon Duain Hub */}
          <Link
            href="/duain"
            className="group p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/40 dark:from-[#0d221a] dark:via-[#11221c] dark:to-[#07130f] border-2 border-emerald-600/50 dark:border-emerald-600/60 shadow-md hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-500/15 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-[#07130f] text-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600/40 shadow-xs ${
                    isUrdu ? 'font-urdu leading-normal' : ''
                  }`}
                >
                  {duainList.length} {isUrdu ? 'مسنون دعائیں' : isRoman ? 'Masnoon Duain' : 'Daily Duas'}
                </span>
              </div>

              <div>
                <h3
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#d4af37] transition-colors ${
                    isUrdu ? 'font-urdu leading-[1.8]' : ''
                  }`}
                >
                  {isUrdu ? 'مسنون دعائیں' : isRoman ? 'Masnoon Duain Hub' : 'Daily Masnoon Duas'}
                </h3>
              </div>

              <p
                className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/85 line-clamp-2 ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
                }`}
              >
                {isUrdu
                  ? 'پریشانی، قرض، رزق، بیماری سے شفاء اور حفاظت کی مستند احادیث و قرآن کی دعائیں، مع ترجمہ و تسبیح۔'
                  : isRoman
                  ? 'Preshani, qarz, rizq aur shifa ki mustanad masnoon duain tarjuma aur circular tasbeeh counter ke sath.'
                  : 'Authentic Quranic & Prophetic prayers for anxiety, debt relief, health, and protection with counters.'}
              </p>
            </div>

            <div
              className={`mt-4 pt-4 border-t border-emerald-500/30 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300 ${
                isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
              }`}
            >
              <span>{isUrdu ? 'تمام مسنون دعائیں پڑھیں' : isRoman ? 'Duain Parhein' : 'Explore Daily Duas'}</span>
              {isUrdu ? (
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
          </Link>

          {/* Card 3: Diwan-e-Naat Sharif Hub */}
          <Link
            href="/naat"
            className="group p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/40 dark:from-[#0d221a] dark:via-[#11221c] dark:to-[#07130f] border-2 border-[#d4af37]/60 shadow-md hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-amber-500/15 dark:bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 group-hover:scale-105 transition-transform">
                  <Feather className="w-6 h-6 text-[#d4af37]" />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-[#07130f] text-amber-950 dark:text-[#d4af37] border border-amber-300 dark:border-[#d4af37]/40 shadow-xs ${
                    isUrdu ? 'font-urdu leading-normal' : ''
                  }`}
                >
                  {naatsList.length} {isUrdu ? 'منتخب کلام' : isRoman ? 'Naat Verses' : 'Sacred Odes'}
                </span>
              </div>

              <div>
                <h3
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] group-hover:text-emerald-700 dark:group-hover:text-[#d4af37] transition-colors ${
                    isUrdu ? 'font-urdu leading-[1.8]' : ''
                  }`}
                >
                  {isUrdu ? 'دیوانِ نعت شریف' : isRoman ? 'Diwan-e-Naat Sharif' : 'Sacred Naat & Diwan'}
                </h3>
              </div>

              <p
                className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/85 line-clamp-2 ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
                }`}
              >
                {isUrdu
                  ? 'کلاسیکی دیوان، مکمل ۶ تا ۸ اشعار، اردو و رومن متن، لغت و فرہنگ اور ۹:۱۶ نعت اسٹیٹس کارڈ کے ساتھ۔'
                  : isRoman
                  ? 'Mukammal 6-8 ashaar, Roman Urdu lyrics, farhang aur 9:16 Naat status card ke sath classical diwan.'
                  : 'Complete classical 6 to 8 couplets with Roman lyrics, vocabulary meanings, and 9:16 HD status card downloads.'}
              </p>
            </div>

            <div
              className={`mt-4 pt-4 border-t border-[#d4af37]/30 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-[#d4af37] ${
                isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
              }`}
            >
              <span>{isUrdu ? 'مکمل دیوان پڑھیں' : isRoman ? 'Diwan Parhein' : 'Explore Naat Sharif'}</span>
              {isUrdu ? (
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
          </Link>

          {/* Card 4: Islamic Calculators & Tools */}
          <Link
            href="/tools"
            className="group p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/40 dark:from-[#0d221a] dark:via-[#11221c] dark:to-[#07130f] border-2 border-emerald-600/50 dark:border-emerald-600/60 shadow-md hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-500/15 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-[#07130f] text-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600/40 shadow-xs ${
                    isUrdu ? 'font-urdu leading-normal' : ''
                  }`}
                >
                  {isUrdu ? 'قضا نماز و زکوٰۃ' : 'Namaz & Zakat'}
                </span>
              </div>

              <div>
                <h3
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#d4af37] transition-colors ${
                    isUrdu ? 'font-urdu leading-[1.8]' : ''
                  }`}
                >
                  {isUrdu ? 'اسلامی کیلکولیٹرز' : isRoman ? 'Islamic Calculators' : 'Islamic Calculators & Tools'}
                </h3>
              </div>

              <p
                className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/85 line-clamp-2 ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
                }`}
              >
                {isUrdu
                  ? 'زندگی بھر کی قضا نمازوں کا تخمینہ و پرنٹ ایبل چارٹ، اور سونے چاندی کے نصاب پر ۲.۵ فیصد زکوٰۃ کا شرعی حساب۔'
                  : isRoman
                  ? 'Qaza namaz ka hisab aur printable chart, plus sona chandi ke nisab par 2.5% zakat calculator.'
                  : 'Lifetime Qaza Namaz calculator with printable tracker sheet, and precise 2.5% Zakat calculator across 5 currencies.'}
              </p>
            </div>

            <div
              className={`mt-4 pt-4 border-t border-emerald-500/30 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300 ${
                isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
              }`}
            >
              <span>{isUrdu ? 'کیلکولیٹرز استعمال کریں' : isRoman ? 'Tools Use Karein' : 'Open Calculators'}</span>
              {isUrdu ? (
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
          </Link>

          {/* Card 5: Custom Name Status Maker */}
          <Link
            href="/status-maker"
            className="group p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/40 dark:from-[#0d221a] dark:via-[#11221c] dark:to-[#07130f] border-2 border-[#d4af37]/60 shadow-md hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-amber-500/15 dark:bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 group-hover:scale-105 transition-transform">
                  <Camera className="w-6 h-6 text-[#d4af37]" />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-[#07130f] text-amber-950 dark:text-[#d4af37] border border-amber-300 dark:border-[#d4af37]/40 shadow-xs ${
                    isUrdu ? 'font-urdu leading-normal' : ''
                  }`}
                >
                  {isUrdu ? 'اپنا نام لکھیں • 9:16 HD' : 'Custom Name • 9:16'}
                </span>
              </div>

              <div>
                <h3
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] group-hover:text-emerald-700 dark:group-hover:text-[#d4af37] transition-colors ${
                    isUrdu ? 'font-urdu leading-[1.8]' : ''
                  }`}
                >
                  {isUrdu ? 'جمعہ و روزانہ اسٹیٹس میکر' : isRoman ? 'Jumma & Daily Status Maker' : 'Islamic Status Maker'}
                </h3>
              </div>

              <p
                className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/85 line-clamp-2 ${
                  isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
                }`}
              >
                {isUrdu
                  ? 'جمعہ مبارک، صبح بخیر دعائیں اور اقوال پر اپنا نام لکھ کر ۱۰۸۰×۱۹۲۰ فل ایچ ڈی واٹس ایپ اسٹیٹس کارڈ بنائیں۔'
                  : isRoman
                  ? 'Jumma Mubarak, morning duas aur aqwal par apna naam likh kar 1080x1920 Full HD WhatsApp card banayein.'
                  : 'Create custom-named 9:16 Full HD cards for Jumma Mubarak, Morning Prayers, and Golden Sayings.'}
              </p>
            </div>

            <div
              className={`mt-4 pt-4 border-t border-[#d4af37]/30 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-[#d4af37] ${
                isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
              }`}
            >
              <span>{isUrdu ? 'اپنا کارڈ بنائیں' : isRoman ? 'Card Banayein' : 'Create Custom Card'}</span>
              {isUrdu ? (
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
          </Link>

          {categories.filter((cat) => cat.slug !== 'naat-sharif').map((cat) => {
            const catTitle = getCategoryTitle(cat, language);
            const catDesc = getCategoryDesc(cat, language);
            const catQuoteCount = quotes.filter((q) => q.category === cat.slug).length;
            const catArticleCount = articles.filter((art) => art.category === cat.slug).length;

            const countLabel =
              catQuoteCount > 0
                ? language === 'ur'
                  ? `${catQuoteCount} اقوال`
                  : language === 'ro'
                  ? `${catQuoteCount} Aqwal`
                  : `${catQuoteCount} Quotes`
                : catArticleCount > 0
                ? language === 'ur'
                  ? `${catArticleCount} ${catArticleCount === 1 ? 'مضمون' : 'مضامین'}`
                  : language === 'ro'
                  ? `${catArticleCount} ${catArticleCount === 1 ? 'Mazmoon' : 'Mazameen'}`
                  : `${catArticleCount} ${catArticleCount === 1 ? 'Article' : 'Articles'}`
                : '0';

            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#11221c] border border-stone-200/90 dark:border-emerald-800/60 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 group-hover:bg-amber-500/10 transition-colors">
                      {categoryIcons[cat.slug] || <BookOpen className="w-6 h-6 text-emerald-600" />}
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 ${
                        isUrdu ? 'font-urdu leading-normal' : ''
                      }`}
                    >
                      {countLabel}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors ${
                        isUrdu ? 'font-urdu leading-[1.8]' : ''
                      }`}
                    >
                      {catTitle}
                    </h3>
                  </div>

                  <p
                    className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 ${
                      isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
                    }`}
                  >
                    {catDesc}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400 ${
                    isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
                  }`}
                >
                  <span>{heroContent.allCategoryQuotes}</span>
                  {isUrdu ? (
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Main Interactive Search & Quotes Feed */}
      <section className="space-y-6 pt-4">
        <SearchAndQuoteFeed initialQuotes={quotes} excludeId={quoteOfTheDay.id} />
      </section>

      {/* Mid-Page AdSlot */}
      <AdSlot position="in-article" />

      {/* Long-Form Moral & Seerat Articles Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-[1.8] mb-4 ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              {t.featuredArticles}
            </h2>
            <p className={`text-xs sm:text-sm text-slate-500 dark:text-slate-400 ${isUrdu ? 'font-urdu leading-relaxed' : ''}`}>
              {t.featuredArticlesDesc}
            </p>
          </div>
          <Link
            href="/articles"
            className={`text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 self-start sm:self-auto ${
              isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
            }`}
          >
            <span>{t.allArticlesLink}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((art) => {
            const artTitle = getArticleTitle(art, language);
            const artSummary = getArticleSummary(art, language);
            const artAuthor = getArticleAuthor(art, language);
            const artReadTime = getArticleReadTime(art, language);
            const artCat = getCategoryBySlug(art.category);
            const artCatTitle = artCat ? getCategoryTitle(artCat, language) : art.category;

            return (
              <article
                key={art.slug}
                className="group bg-white dark:bg-[#11221c] rounded-3xl p-5 sm:p-6 border border-stone-200/90 dark:border-emerald-800/60 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span
                      className={`px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium ${
                        isUrdu ? 'font-urdu leading-normal' : ''
                      }`}
                    >
                      #{artCatTitle}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{artReadTime}</span>
                    </span>
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors ${
                      isUrdu ? 'font-urdu leading-[1.8]' : 'leading-snug'
                    }`}
                  >
                    <Link href={`/articles/${art.slug}`}>{artTitle}</Link>
                  </h3>

                  <p
                    className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 ${
                      isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
                    }`}
                  >
                    {artSummary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className={`text-slate-600 dark:text-slate-300 ${isUrdu ? 'font-urdu text-xs' : ''}`}>
                    {artAuthor}
                  </span>
                  <Link
                    href={`/articles/${art.slug}`}
                    className={`font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 flex items-center gap-1 ${
                      isUrdu ? 'font-urdu text-xs sm:text-sm' : ''
                    }`}
                  >
                    <span>{t.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Classic Books Showcase: Makhzan-e-Akhlaq */}
      <section className="rounded-3xl p-5 sm:p-8 lg:p-10 bg-gradient-to-r from-white via-emerald-50/40 to-amber-50/30 dark:from-emerald-900 dark:via-emerald-950 dark:to-slate-900 text-slate-900 dark:text-white shadow-md dark:shadow-xl border border-stone-200/90 dark:border-amber-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-amber-500/20 text-emerald-900 dark:text-amber-300 text-xs font-semibold border border-emerald-200 dark:border-amber-500/20">
              <Library className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
              <span className={isUrdu ? 'font-urdu' : ''}>{t.bookShowcaseTag}</span>
            </div>

            <h2 className={`text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu leading-[1.8]' : ''}`}>
              {getBookTitle(primaryBook, language)}
            </h2>

            <p className={`text-xs sm:text-sm md:text-base text-slate-700 dark:text-emerald-100/90 ${isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'}`}>
              {getBookDesc(primaryBook, language)}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              {primaryBook.chapters.map((ch) => (
                <span
                  key={ch.number}
                  className={`px-3 py-1 rounded-xl bg-emerald-50 dark:bg-white/10 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-white/10 ${
                    isUrdu ? 'font-urdu' : ''
                  }`}
                >
                  {getChapterTitle(ch, language)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-emerald-50/50 dark:bg-white/5 backdrop-blur-md border border-emerald-100 dark:border-white/10 text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-300 flex items-center justify-center shadow-inner">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <p className={`text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
                {getBookAuthor(primaryBook, language)}
              </p>
            </div>
            <Link
              href="/makhzan-e-akhlaq"
              className={`w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-xs font-bold transition shadow-md ${
                isUrdu ? 'font-urdu text-sm' : ''
              }`}
            >
              {t.viewAllChapters}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
