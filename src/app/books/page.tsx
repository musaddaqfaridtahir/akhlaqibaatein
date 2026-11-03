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
      <section className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-xl border border-amber-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Library className="w-3.5 h-3.5" />
            <span>{headers.badge}</span>
          </div>

          <h1
            className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-white break-words ${
              isUrdu ? 'font-urdu leading-[2.1]' : 'leading-tight'
            }`}
          >
            {headers.title}
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg text-emerald-100/90 break-words ${
              isUrdu ? 'font-urdu leading-[2.2]' : 'leading-relaxed'
            }`}
          >
            {headers.desc}
          </p>
        </div>
      </section>

      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Primary Available Book: Makhzan-e-Akhlaq */}
      {availableBooks.map((book) => {
        const bookTitle = getBookTitle(book, language);
        const bookDesc = getBookDesc(book, language);
        const bookAuthor = getBookAuthor(book, language);

        return (
          <section
            key={book.slug}
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white dark:bg-slate-900 border border-emerald-900/10 dark:border-emerald-500/20 shadow-xl space-y-6 sm:space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>{headers.editionBadge}</span>
                </div>
                <h2
                  className={`text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white ${
                    isUrdu ? 'font-urdu leading-[2.0]' : 'leading-tight'
                  }`}
                >
                  {bookTitle}
                </h2>
              </div>

              <div className="text-xs text-slate-500 space-y-1">
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
                {book.chapters.map((ch) => {
                  const chTitle = getChapterTitle(ch, language);
                  const chDesc = getChapterDesc(ch, language);

                  return (
                    <div
                      key={ch.number}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 hover:border-emerald-500 transition"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-bold text-amber-600 dark:text-amber-400">
                          #{ch.number}
                        </span>
                        <span>
                          {ch.quoteCount} {headers.quotesCountLabel}
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
                    </div>
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
