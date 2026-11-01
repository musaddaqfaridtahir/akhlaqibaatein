'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  const strings = {
    ur: {
      code: '۴۰۴ • صفحہ دستیاب نہیں',
      title: 'یہ صفحہ دستیاب نہیں ہے',
      desc: 'معذرت! آپ جس صفحے یا قول کو تلاش کر رہے ہیں وہ تبدیل ہو چکا ہے یا موجود نہیں۔ آپ صفحۂ اول سے دوبارہ تلاش کر سکتے ہیں۔',
    },
    ro: {
      code: '404 • Page Not Found',
      title: 'Yeh safha dastyab nahi hai',
      desc: 'Maazrat! Aap jis qol ya safhe ko dhoond rahe hain woh tabdeel ho chuka hai ya mojood nahi.',
    },
    en: {
      code: '404 • Page Not Found',
      title: 'This Page Could Not Be Found',
      desc: 'The wisdom page or record you are seeking may have been moved or updated. Please navigate back to the home portal.',
    },
  }[language];

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/30">
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
          {strings.code}
        </span>
        <h1 className={`text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu leading-[2.1]' : ''}`}>
          {strings.title}
        </h1>
        <p className={`text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto ${isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'}`}>
          {strings.desc}
        </p>
      </div>

      <Link
        href="/"
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm shadow-md transition ${
          isUrdu ? 'font-urdu' : ''
        }`}
      >
        <Home className="w-4 h-4" />
        <span>{t.backToHome}</span>
      </Link>
    </div>
  );
}
