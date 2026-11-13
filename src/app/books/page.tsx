'use client';

import React from 'react';
import Link from 'next/link';
import {
  Library,
  BookOpen,
  Layers,
  BookmarkCheck,
} from 'lucide-react';
import {
  books,
  getBookTitle,
  getBookDesc,
  getBookAuthor,
  getChapterTitle,
  getChapterDesc,
} from '@/data/books';
import AdSlot from '@/components/AdSlot';
import { quotes } from '@/data/quotes';
import { useLanguage } from '@/context/LanguageContext';

export default function BooksPage() {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  const availableBooks = books.filter((b) => b.status === 'available');
  const comingSoonBooks = books.filter((b) => b.status === 'coming-soon');

  const headers = {
    ur: {
      badge: 'کلاسیکی کتبِ اخلاق کی ڈیجیٹائزیشن',
      title: 'کتب خانہ: کلاسک اخلاقی شہ پارے',
      desc: 'صدیوں پر محیط مسلم اخلاقی و روحانی ورثے کو ڈیجیٹل دور میں محفوظ اور عام فہم بنانے کی ایک سنجیدہ علمی کاوش۔',
      editionBadge: 'کتاب اول: ڈیجیٹائزڈ مکمل ایڈیشن',
      authorLabel: 'مصنف:',
      pubLabel: 'اشاعت:',
      chaptersHeading: 'کتاب کے اہم ابواب و مضامین',
      quotesCountLabel: 'اقوال',
      comingSoonHeading: 'زیرِ تدوین کلاسک کتب',
      comingSoonDesc: 'جن کی ڈیجیٹائزیشن، تصحیح اور تشریحی کام پر ادارہ تیزی سے کام کر رہا ہے',
      comingSoonBadge: 'جلد دستیاب ہوگی',
    },
    ro: {
      badge: 'Classic Kutub-e-Akhlaq ki Digitization',
      title: 'Kutub Khana: Classic Akhlaqi Shahparay',
      desc: 'Sadiyon par muheet Muslim akhlaqi aur roohani sarmaye ko digital dor mein aasan aur aam fehm banane ki koshish.',
      editionBadge: 'Pehli Kitaab: Digitized Edition',
      authorLabel: 'Author / Musannif:',
      pubLabel: 'Publication:',
      chaptersHeading: 'Kitaab ke Ahem Abwab aur Mazameen',
      quotesCountLabel: 'aqwal',
      comingSoonHeading: 'Zair-e-Tadween Classic Kitabein',
      comingSoonDesc: 'Jin par Idara Akhlaqi Baatein tezi se kaam kar raha hai',
      comingSoonBadge: 'Coming Soon',
    },
    en: {
      badge: 'Classical Islamic Literature Digitization Initiative',
      title: 'Books Library: Classical Ethical Masterpieces',
      desc: 'Preserving centuries of profound spiritual literature, philosophical counsel, and moral maxims for the modern digital era.',
      editionBadge: 'Book #1: Complete Digitized Edition',
      authorLabel: 'Author:',
      pubLabel: 'Edition:',
      chaptersHeading: 'Primary Thematic Chapters',
      quotesCountLabel: 'Sayings',
      comingSoonHeading: 'Upcoming Classical Additions',
      comingSoonDesc: 'Currently being authenticated, annotated, and prepared by our editorial board',
      comingSoonBadge: 'Coming Soon',
    },
  }[language];

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <section className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/30 dark:from-emerald-950 dark:via-emerald-900 dark:to-slate-950 text-slate-900 dark:text-white shadow-md dark:shadow-xl border border-stone-200/90 dark:border-amber-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-amber-500/20 text-emerald-900 dark:text-amber-300 text-xs font-semibold border border-emerald-200 dark:border-amber-500/30">
            <Library className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
            <span className={isUrdu ? 'font-urdu' : ''}>{headers.badge}</span>
          </div>

          <h1
            className={`text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white break-words ${
              isUrdu ? 'font-urdu leading-[1.8]' : 'leading-tight'
            }`}
          >
            {headers.title}
          </h1>

          <p
            className={`text-xs sm:text-base text-slate-700 dark:text-emerald-100/90 break-words ${
              isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
            }`}
          >
            {headers.desc}
          </p>

          <div className="pt-2">
            <Link
              href="/makhzan-e-akhlaq"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition ${
                isUrdu ? 'font-urdu leading-normal' : ''
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>
                {isUrdu
                  ? 'مخزنِ اخلاق — مکمل ابواب و اقوال دیکھیں'
                  : language === 'ro'
                  ? 'Makhzan-e-Akhlaq Hub Aur Abwab Kholein'
                  : 'Explore Makhzan-e-Akhlaq Hub & Chapters'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Scholarly Credit Box */}
      <section className="p-4 sm:p-6 rounded-2xl bg-emerald-50/80 dark:bg-[#0d1b16] border border-emerald-200 dark:border-emerald-700/50 space-y-2">
        <div className="flex items-center gap-2 text-emerald-950 dark:text-emerald-300 font-bold text-sm sm:text-base">
          <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
          <span className={isUrdu ? 'font-urdu' : ''}>
            {isUrdu ? 'علمی مآخذ و کتبِ استفادہ' : language === 'ro' ? 'Ilmi Maakhiz aur Mustanad Kutub' : 'Scholarly Foundations & Textual Sources'}
          </span>
        </div>
        <p className={isUrdu ? 'font-urdu text-base sm:text-lg leading-[2.2] text-slate-800 dark:text-emerald-100/90' : 'text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-emerald-100/90'}>
          {isUrdu
            ? 'اس پلیٹ فارم کے اخلاقی مضامین و انتخاب میں مستند کتبِ تفسیر و حدیث، نہج البلاغہ، حلیۃ الاولیاء اور کلاسیکی اخلاقی تالیف ’مخزنِ اخلاق‘ سے استفادہ کیا گیا ہے۔'
            : language === 'ro'
            ? 'Is platform ke akhlaqi mazameen aur intekhab mein mustanad kutub-e-tafseer o hadith, Nahj al-Balagha, Hilyat al-Awliya aur classical akhlaqi taleef ’Makhzan-e-Akhlaq‘ se istifada kiya gaya hai.'
            : 'The ethical insights and selections on this platform draw directly from authoritative commentaries of the Quran, authentic Hadith collections, Nahj al-Balagha, Hilyat al-Awliya, and the classical moral masterpiece "Makhzan-e-Akhlaq".'}
        </p>
      </section>

      {/* Primary Available Book(s) */}
      {availableBooks.map((book) => {
        const bookTitle = getBookTitle(book, language);
        const bookDesc = getBookDesc(book, language);
        const bookAuthor = getBookAuthor(book, language);
        const bookQuoteCount = quotes.filter((q) => q.bookSlug === book.slug).length;

        const chapterCategoryLinks = [
          '/category/ahkam-e-khuda',
          '/category/irshadat-e-nabawi',
          '/category/aqwal-e-sahaba',
          '/category/khasail-e-nabawi',
          '/category/ambiya-o-hukama',
        ];

        const chapterCountsDynamic = [
          quotes.filter((q) => q.category === 'ahkam-e-khuda').length,
          quotes.filter((q) => q.category === 'irshadat-e-nabawi').length,
          quotes.filter((q) => q.category === 'aqwal-e-sahaba').length,
          quotes.filter((q) => q.category === 'khasail-e-nabawi').length,
          quotes.filter((q) => q.category === 'ambiya-o-hukama').length,
        ];

        return (
          <section
            key={book.slug}
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white dark:bg-[#11221c] border border-emerald-900/10 dark:border-emerald-800/60 shadow-xl space-y-6 sm:space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>
                    {headers.editionBadge} • {bookQuoteCount} {headers.quotesCountLabel}
                  </span>
                </div>
                <h2
                  className={`text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white ${
                    isUrdu ? 'font-urdu leading-[2.0]' : 'leading-tight'
                  }`}
                >
                  {bookTitle}
                </h2>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <p>
                  <strong>{headers.authorLabel} </strong> {bookAuthor}
                </p>
                <p>
                  <strong>{headers.pubLabel} </strong> {book.publicationYear}
                </p>
              </div>
            </div>

            <p
              className={`text-base sm:text-lg text-slate-700 dark:text-slate-300 ${
                isUrdu ? 'font-urdu leading-[2.3]' : 'leading-relaxed'
              }`}
            >
              {bookDesc}
            </p>

            {/* Chapters Breakdown */}
            <div className="space-y-4">
              <h3 className={`text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 ${isUrdu ? 'font-urdu text-2xl' : ''}`}>
                <Layers className="w-5 h-5 text-amber-500" />
                <span>{headers.chaptersHeading}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {book.chapters.map((ch, idx) => {
                  const chTitle = getChapterTitle(ch, language);
                  const chDesc = getChapterDesc(ch, language);
                  const href = chapterCategoryLinks[idx] || '/#categories';
                  const liveCount = chapterCountsDynamic[idx] ?? ch.quoteCount;

                  return (
                    <Link
                      key={ch.number}
                      href={href}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 hover:border-emerald-500 transition block"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-bold text-amber-600 dark:text-amber-400">
                          #{ch.number}
                        </span>
                        <span>
                          {liveCount} {headers.quotesCountLabel}
                        </span>
                      </div>

                      <h4
                        className={`text-lg font-bold text-slate-900 dark:text-white ${
                          isUrdu ? 'font-urdu leading-[2.0]' : 'leading-snug'
                        }`}
                      >
                        {chTitle}
                      </h4>
                      <p
                        className={`text-xs text-slate-500 dark:text-slate-400 pt-1 ${
                          isUrdu ? 'font-urdu leading-[1.9]' : 'leading-relaxed'
                        }`}
                      >
                        {chDesc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Mid-Page AdSlot */}
      <AdSlot position="in-article" />

      {/* Upcoming Classic Books */}
      <section className="space-y-6">
        <div>
          <h2 className={`text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
            {headers.comingSoonHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {headers.comingSoonDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comingSoonBooks.map((cb) => {
            const cbTitle = getBookTitle(cb, language);
            const cbDesc = getBookDesc(cb, language);
            const cbAuthor = getBookAuthor(cb, language);

            return (
              <div
                key={cb.slug}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 shadow-sm space-y-3 opacity-90 hover:opacity-100 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-xs font-semibold border border-amber-300/40">
                    {headers.comingSoonBadge}
                  </span>
                  <span className="text-xs text-slate-400">{cb.publicationYear}</span>
                </div>

                <h3 className={`text-2xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu leading-[2.0]' : ''}`}>
                  {cbTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {headers.authorLabel} {cbAuthor}
                </p>
                <p className={`text-xs text-slate-600 dark:text-slate-400 pt-1 ${isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'}`}>
                  {cbDesc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
