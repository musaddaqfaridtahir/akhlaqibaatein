'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
  Download,
  Share2,
  Globe,
  Layers,
  Compass,
} from 'lucide-react';
import { Quote, Category } from '@/data/types';
import {
  getQuoteText,
  getQuoteTitle,
  getQuoteAuthor,
  getQuoteTashreeh,
  getQuoteAmliSabaq,
  getQuoteSource,
  getQuoteTags,
} from '@/data/quotes';
import { getCategoryTitle } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import QuoteCard from './QuoteCard';
import StatusImageModal from './StatusImageModal';

interface QuoteDetailViewProps {
  quote: Quote;
  category?: Category;
  relatedQuotes: Quote[];
}

export default function QuoteDetailView({
  quote,
  category,
  relatedQuotes,
}: QuoteDetailViewProps) {
  const { language, t, showToast } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const isUrdu = language === 'ur';

  // Active language view
  const quoteTitle = getQuoteTitle(quote, language) || quote.title?.ur || quote.urdu.slice(0, 50);
  const quoteText = getQuoteText(quote, language);
  const quoteAuthor = getQuoteAuthor(quote, language);
  const quoteTashreeh = getQuoteTashreeh(quote, language);
  const quoteAmliSabaq = getQuoteAmliSabaq(quote, language);
  const quoteSource = getQuoteSource(quote, language);
  const quoteTags = getQuoteTags(quote, language);
  const categoryTitle = category ? getCategoryTitle(category, language) : quote.category;

  // Tri-lingual content for simultaneous DOM rendering (solves Google Search Console / AdSense thin-content risk)
  const urduTitle = getQuoteTitle(quote, 'ur') || quote.title?.ur || '';
  const urduText = getQuoteText(quote, 'ur');
  const urduAuthor = getQuoteAuthor(quote, 'ur');
  const urduTashreeh = getQuoteTashreeh(quote, 'ur');
  const urduAmli = getQuoteAmliSabaq(quote, 'ur');
  const urduSource = getQuoteSource(quote, 'ur');
  const urduTags = getQuoteTags(quote, 'ur');

  const romanTitle = getQuoteTitle(quote, 'ro') || quote.title?.ro || '';
  const romanText = getQuoteText(quote, 'ro');
  const romanAuthor = getQuoteAuthor(quote, 'ro');
  const romanTashreeh = getQuoteTashreeh(quote, 'ro');
  const romanAmli = getQuoteAmliSabaq(quote, 'ro');
  const romanSource = getQuoteSource(quote, 'ro');
  const romanTags = getQuoteTags(quote, 'ro');

  const englishTitle = getQuoteTitle(quote, 'en') || quote.title?.en || '';
  const englishText = getQuoteText(quote, 'en');
  const englishAuthor = getQuoteAuthor(quote, 'en');
  const englishTashreeh = getQuoteTashreeh(quote, 'en');
  const englishAmli = getQuoteAmliSabaq(quote, 'en');
  const englishSource = getQuoteSource(quote, 'en');
  const englishTags = getQuoteTags(quote, 'en');

  const handleCopy = () => {
    const quoteUrl = `https://akhlaqibaatein.com/quote/${quote.slug}`;
    const textToCopy = `"${quoteText}"\n\n— ${quoteAuthor} (${quoteSource})\n\n${quoteUrl}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast(t.copiedBtn);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const quoteUrl = `https://akhlaqibaatein.com/quote/${quote.slug}`;
    const message = encodeURIComponent(
      `"${quoteText}"\n\n— ${quoteAuthor}\n\n${t.tashreehHeading}:\n${quoteTashreeh}\n\n${quoteUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  // Dynamic FAQs tailored to the specific quote, author, and book reference
  const dynamicFaqs = [
    {
      question:
        language === 'ur'
          ? `اس فرمان / قول کا بنیادی اخلاقی مفہوم اور تشریح کیا ہے؟`
          : language === 'ro'
          ? `"${quoteTitle}" ka bunyadi akhlaqi mafhoom aur tashreeh kya hai?`
          : `What is the core moral meaning and explanation of "${quoteTitle}"?`,
      answer:
        language === 'ur'
          ? `${quoteTashreeh} ${quoteAmliSabaq ? `اس فرمان سے ہمیں یہ سبق ملتا ہے کہ: ${quoteAmliSabaq}` : ''}`
          : language === 'ro'
          ? `${quoteTashreeh} ${quoteAmliSabaq ? `Is se humein yeh amli sabaq milta hai: ${quoteAmliSabaq}` : ''}`
          : `${quoteTashreeh} ${quoteAmliSabaq ? `The practical lesson derived from this teaching is: ${quoteAmliSabaq}` : ''}`,
    },
    {
      question:
        language === 'ur'
          ? `یہ قول کس ہستی کا ہے اور اس کا مستند ماخذ کون سی کتاب ہے؟`
          : language === 'ro'
          ? `Yeh qoul kis shakhsiyat ka hai aur is ka mustanad maakhaz kya hai?`
          : `Who is the author of this wisdom and what is its authentic reference?`,
      answer:
        language === 'ur'
          ? `یہ پرحکمت ارشاد ${quoteAuthor} کی مبارک تعلیمات میں سے ہے اور یہ مستند اسلامی کتاب "${quoteSource}" سے ماخوذ ہے۔ یہ قول ${categoryTitle} کے تحت اخلاقی اصلاح کا اہم ستون ہے۔`
          : language === 'ro'
          ? `Yeh pur-hikmat irshad ${quoteAuthor} ki mubarak taleemat mein se hai aur yeh mustanad kitaab "${quoteSource}" se maakhuz hai. Yeh qoul ${categoryTitle} ke tehat akhlaqi islah ka ahem sabaq hai.`
          : `This profound teaching is attributed to ${quoteAuthor} and is faithfully cited from the classical reference "${quoteSource}". It serves as a foundational pillar within ${categoryTitle}.`,
    },
    {
      question:
        language === 'ur'
          ? `اس اخلاقی درس پر روزمرہ زندگی میں عملی طور پر کیسے عمل کیا جا سکتا ہے؟`
          : language === 'ro'
          ? `Is akhlaqi dars par rozmarra zindagi mein amli taur par kaise amal kiya jaye?`
          : `How can one practically apply this ethical wisdom in daily living?`,
      answer:
        quoteAmliSabaq ||
        (language === 'ur'
          ? `اس پر عمل کرنے کا بہترین طریقہ یہ ہے کہ انسان اپنی زبان، نیت اور معاملات کو پاکیزہ رکھے، دوسروں کے ساتھ حسنِ سلوک کرے، اور صبر و شکر کو اپنی مستقل عادت بنائے۔`
          : language === 'ro'
          ? `Is par amal karne ka behtareen tareeqa yeh hai ke insan apni zaban, niyat aur muamlat ko pakeeza rakhe, doosron ke sath husn-e-sulook kare, aur sabr o shukr ko apni aadat banaye.`
          : `The most effective way to practice this wisdom is by maintaining pure intentions, speaking with kindness, upholding honesty in all transactions, and embracing patience and gratitude.`),
    },
    {
      question:
        language === 'ur'
          ? `یہ قول کن اہم اخلاقی موضوعات اور اقدار پر روشنی ڈالتا ہے؟`
          : language === 'ro'
          ? `Is qoul mein kin ahem akhlaqi mauzo'at par roshni dali gayi hai?`
          : `What key ethical themes and virtues are highlighted in this teaching?`,
      answer:
        language === 'ur'
          ? `یہ قول بنیادی طور پر ${quoteTags.join('، ')} جیسے اعلیٰ اخلاقی و روحانی اوصاف کی اہمیت کو اجاگر کرتا ہے، جو ایک پرامن اور باوقار معاشرے کی بنیاد ہیں۔`
          : language === 'ro'
          ? `Yeh qoul bunyadi taur par ${quoteTags.join(', ')} jaise aala akhlaqi o roohani awsaf ki ehmiyat ko wazeh karta hai, jo ba-waqar muashray ki bunyad hain.`
          : `This teaching primarily highlights foundational virtues such as ${quoteTags.join(', ')}, nurturing spiritual purification and communal harmony.`,
    },
  ];

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dynamicFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema Markup for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-sm space-y-6 sm:space-y-8 overflow-hidden">
        {/* Category & Author Badge */}
        <div className="flex items-center justify-between gap-2.5 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
            <span
              className={`text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-700/50 px-3 py-1 rounded-full uppercase ${
                isUrdu ? 'font-urdu text-xs sm:text-sm' : 'tracking-wide'
              }`}
            >
              {quoteAuthor}
            </span>
          </div>

          {category && (
            <Link
              href={`/category/${category.slug}`}
              className={`text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition font-medium ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              #{categoryTitle}
            </Link>
          )}
        </div>

        {/* Primary Quote Display in User's Active Language */}
        <div className="py-3 sm:py-4 border-y border-stone-200 dark:border-slate-800 space-y-3">
          {quoteTitle && (
            <h2
              className={`font-bold text-slate-900 dark:text-slate-100 break-words ${
                isUrdu
                  ? 'font-urdu text-base sm:text-xl md:text-2xl leading-[1.8] sm:leading-[2.0] text-right'
                  : 'text-base sm:text-lg md:text-xl text-left'
              }`}
            >
              {quoteTitle}
            </h2>
          )}
          <h1
            className={`font-normal text-slate-900 dark:text-slate-50 break-words ${
              isUrdu
                ? 'font-urdu text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.9] sm:leading-[2.2] md:leading-[2.4] text-right'
                : 'text-lg sm:text-xl md:text-2xl lg:text-3xl italic leading-relaxed text-left'
            }`}
          >
            {isUrdu ? quoteText : `“${quoteText}”`}
          </h1>
        </div>

        {/* Action Buttons Toolbar: Responsive Grid on Mobile */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center pt-2">
          <button
            onClick={handleCopy}
            className={`col-span-1 min-h-[42px] px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-stone-300 dark:border-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition active:scale-95 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">{t.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t.copyBtn}</span>
              </>
            )}
          </button>

          <button
            onClick={handleWhatsAppShare}
            className={`col-span-1 min-h-[42px] px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-slate-800 dark:hover:bg-emerald-900/60 dark:text-emerald-300 border border-stone-300 dark:border-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition active:scale-95 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>{t.shareBtn}</span>
          </button>

          <button
            onClick={() => setShowStatusModal(true)}
            className={`col-span-2 sm:col-span-1 sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 border border-amber-600/30 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition active:scale-95 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadBtn}</span>
          </button>
        </div>

        {/* Primary Explanation / Tashreeh in Active Language */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-500" />
            <h3 className={isUrdu ? 'font-urdu text-base sm:text-lg' : ''}>
              {t.tashreehHeading}
            </h3>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-emerald-50/60 dark:bg-slate-800/60 border-s-4 border-emerald-700 dark:border-emerald-500 border border-emerald-100 dark:border-slate-700 space-y-3">
            <p
              className={`text-slate-800 dark:text-slate-200 ${
                isUrdu
                  ? 'font-urdu text-xs sm:text-sm md:text-base leading-[1.85] sm:leading-[2.0]'
                  : 'text-xs sm:text-sm leading-relaxed'
              }`}
            >
              {quoteTashreeh}
            </p>

            {quoteAmliSabaq && (
              <div className="pt-3 border-t border-emerald-200/60 dark:border-slate-700">
                <p className={`text-sm text-slate-800 dark:text-slate-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  <strong className="text-emerald-900 dark:text-amber-400 font-bold">
                    {t.amliSabaqHeading}{' '}
                  </strong>
                  {quoteAmliSabaq}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Authentic Citation */}
        <div
          className={`flex items-center gap-2 p-4 rounded-2xl bg-stone-100 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 ${
            isUrdu ? 'font-urdu' : ''
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-500 shrink-0" />
          <span>
            <strong>{t.sourceHeading} </strong>
            {quoteSource}
          </span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap pt-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Tags:</span>
          {quoteTags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1 rounded-xl bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200 dark:border-slate-700 ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* ========================================================================= */}
      {/* TRI-LINGUAL ARCHIVE & DETAILED COMMENTARY (SIMULTANEOUS DOM RENDERING)     */}
      {/* Solves Googlebot "Thin Content" Risk by rendering 500+ words on every page */}
      {/* ========================================================================= */}
      <section
        aria-label="Complete Tri-Lingual Editions"
        className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-sm space-y-6"
      >
        <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-stone-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Globe className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <h2
              className={`text-lg sm:text-xl font-bold ${
                isUrdu ? 'font-urdu text-xl sm:text-2xl' : ''
              }`}
            >
              {language === 'ur'
                ? 'سہ لسانی ذخیرہ و مکمل تشریحی متون (اردو • Roman • English)'
                : language === 'ro'
                ? 'Seh-Lisani Zakhira o Tafseeli Matn (Urdu • Roman • English)'
                : 'Complete Tri-Lingual Edition & Comprehensive Analysis'}
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>3 Languages &bull; 100% Authentic Citations</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {language === 'ur'
            ? 'قارئینِ کرام اور علمی محققین کی آسانی کے لیے اس قول کی مکمل اردو تشریح، رومن اردو تلفظ اور مستند انگریزی ترجمہ ایک ہی جگہ فراہم کیا گیا ہے تاکہ ہر زبان کا قاری اس حکمت سے رہنمائی پا سکے۔'
            : language === 'ro'
            ? 'Qari-een ki asani ke liye is qoul ki mukammal Urdu tashreeh, Roman Urdu talaffuz aur English tarjuma aik hi jagah faraham kiya gaya hai.'
            : 'For scholarly reference and universal accessibility, this wisdom is presented below in all three editions: original Urdu script with commentary, Roman Urdu transliteration, and academic English translation.'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          {/* 1. Urdu Edition Card */}
          <div
            dir="rtl"
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] dark:bg-slate-950/80 border border-stone-200 dark:border-slate-800 space-y-4 shadow-2xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-stone-200/80 dark:border-slate-800 pb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 font-urdu">
                  اردو ایڈیشن
                </span>
                <span className="text-xs text-slate-500 font-urdu">{urduAuthor}</span>
              </div>

              {urduTitle && (
                <h3 className="font-bold text-slate-900 dark:text-white font-urdu text-base leading-relaxed">
                  {urduTitle}
                </h3>
              )}

              <blockquote className="p-3 rounded-xl bg-white dark:bg-slate-900 border-r-4 border-emerald-600 text-slate-900 dark:text-slate-100 font-urdu text-sm sm:text-base leading-[2.1]">
                {urduText}
              </blockquote>

              <div className="space-y-1.5 pt-1">
                <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-400 font-urdu">
                  تشریح و اخلاقی پیغام:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-urdu leading-[2.0]">
                  {urduTashreeh}
                </p>
              </div>

              {urduAmli && (
                <div className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs font-urdu text-slate-800 dark:text-amber-200 leading-[1.9]">
                  <strong>عملی سبق: </strong>
                  {urduAmli}
                </div>
              )}
            </div>

            <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 font-urdu border-t border-stone-200 dark:border-slate-800">
              ماخذ: {urduSource}
            </div>
          </div>

          {/* 2. Roman Urdu Edition Card */}
          <div
            dir="ltr"
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] dark:bg-slate-950/80 border border-stone-200 dark:border-slate-800 space-y-4 shadow-2xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-stone-200/80 dark:border-slate-800 pb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-950 dark:text-amber-300">
                  Roman Urdu
                </span>
                <span className="text-xs text-slate-500 font-medium">{romanAuthor}</span>
              </div>

              {romanTitle && (
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                  {romanTitle}
                </h3>
              )}

              <blockquote className="p-3 rounded-xl bg-white dark:bg-slate-900 border-l-4 border-amber-500 text-slate-900 dark:text-slate-100 text-xs sm:text-sm italic leading-relaxed">
                “{romanText}”
              </blockquote>

              <div className="space-y-1.5 pt-1">
                <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                  Tafseel o Akhlaqi Pegham:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {romanTashreeh}
                </p>
              </div>

              {romanAmli && (
                <div className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-slate-800 dark:text-amber-200 leading-normal">
                  <strong>Amli Sabaq: </strong>
                  {romanAmli}
                </div>
              )}
            </div>

            <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-stone-200 dark:border-slate-800">
              Source: {romanSource}
            </div>
          </div>

          {/* 3. English Edition Card */}
          <div
            dir="ltr"
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] dark:bg-slate-950/80 border border-stone-200 dark:border-slate-800 space-y-4 shadow-2xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-stone-200/80 dark:border-slate-800 pb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300">
                  English Translation
                </span>
                <span className="text-xs text-slate-500 font-medium">{englishAuthor}</span>
              </div>

              {englishTitle && (
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                  {englishTitle}
                </h3>
              )}

              <blockquote className="p-3 rounded-xl bg-white dark:bg-slate-900 border-l-4 border-blue-600 text-slate-900 dark:text-slate-100 text-xs sm:text-sm italic leading-relaxed">
                “{englishText}”
              </blockquote>

              <div className="space-y-1.5 pt-1">
                <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                  Moral Commentary & Meaning:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {englishTashreeh}
                </p>
              </div>

              {englishAmli && (
                <div className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-slate-800 dark:text-amber-200 leading-normal">
                  <strong>Practical Takeaway: </strong>
                  {englishAmli}
                </div>
              )}
            </div>

            <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-stone-200 dark:border-slate-800">
              Reference: {englishSource}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DYNAMIC, CONTEXT-AWARE FAQ SECTION (TAILORED TO QUOTE, AUTHOR & BOOK)     */}
      {/* ========================================================================= */}
      <section
        aria-label="Frequently Asked Questions"
        className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-sm space-y-6"
      >
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
          <h2 className={`text-xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
            {t.faqHeading}
          </h2>
        </div>

        <div className="space-y-4">
          {dynamicFaqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800 space-y-2 transition-all hover:border-emerald-300 dark:hover:border-slate-700"
            >
              <h3
                className={`font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-start gap-2 ${
                  isUrdu ? 'font-urdu leading-relaxed' : ''
                }`}
              >
                <Compass className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-1" />
                <span>{faq.question}</span>
              </h3>
              <p
                className={`text-xs sm:text-sm text-slate-700 dark:text-slate-300 ps-6 ${
                  isUrdu ? 'font-urdu leading-[2.1]' : 'leading-relaxed'
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Quotes Grid */}
      {relatedQuotes.length > 0 && (
        <section className="space-y-6">
          <h2 className={`text-2xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
            {t.relatedQuotes}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedQuotes.map((rq) => (
              <QuoteCard key={rq.id} quote={rq} />
            ))}
          </div>
        </section>
      )}

      {/* Status Image Modal */}
      <StatusImageModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        data={{
          text: quoteText,
          explanation: quoteAmliSabaq || quoteTashreeh,
          author: quoteAuthor,
          category: categoryTitle,
          slug: quote.slug,
          lang: language,
        }}
      />
    </>
  );
}
