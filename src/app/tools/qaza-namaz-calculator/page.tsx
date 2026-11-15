'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Printer,
  Sparkles,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function QazaNamazCalculatorPage() {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  // State inputs
  const [years, setYears] = useState<number>(1);
  const [months, setMonths] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [dailyTarget, setDailyTarget] = useState<number>(1); // e.g., 1 Qaza per regular prayer
  const [includeWitr, setIncludeWitr] = useState<boolean>(true);

  // Calculations
  const totalDays = Math.max(0, years * 365 + months * 30 + days);
  const prayersPerDay = includeWitr ? 6 : 5;
  const totalPrayersPerType = totalDays;
  const grandTotalPrayers = totalDays * prayersPerDay;

  // Timeline estimation
  const effectiveDailyTarget = Math.max(1, dailyTarget);
  const daysToComplete = totalDays > 0 ? Math.ceil(totalDays / effectiveDailyTarget) : 0;
  const monthsToComplete = (daysToComplete / 30).toFixed(1);
  const yearsToComplete = (daysToComplete / 365).toFixed(1);

  const completionDate = new Date();
  completionDate.setDate(completionDate.getDate() + daysToComplete);
  const formattedCompletion = completionDate.toLocaleDateString(
    isUrdu ? 'ur-PK' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleReset = () => {
    setYears(1);
    setMonths(0);
    setDays(0);
    setDailyTarget(1);
    showToast(isUrdu ? 'کیلکولیٹر ری سیٹ ہو گیا' : 'Calculator reset');
  };

  const prayerTypes = [
    { id: 'fajr', ur: 'فجر', ro: 'Fajr', en: 'Fajr', rakat: '2 فرض' },
    { id: 'zuhr', ur: 'ظہر', ro: 'Zuhr', en: 'Zuhr', rakat: '4 فرض' },
    { id: 'asr', ur: 'عصر', ro: 'Asr', en: 'Asr', rakat: '4 فرض' },
    { id: 'maghrib', ur: 'مغرب', ro: 'Maghrib', en: 'Maghrib', rakat: '3 فرض' },
    { id: 'isha', ur: 'عشاء', ro: 'Isha', en: 'Isha', rakat: '4 فرض' },
    ...(includeWitr
      ? [{ id: 'witr', ur: 'وتر واجب', ro: 'Witr Wajib', en: 'Witr Wajib', rakat: '3 واجب' }]
      : []),
  ];

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-8 max-w-5xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
          isUrdu ? 'font-urdu' : 'font-sans'
        }`}
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'سرورق' : 'Home'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <Link href="/tools" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'اسلامی ٹولز' : 'Tools'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <span className="text-slate-900 dark:text-white font-bold">
          {isUrdu ? 'قضا نماز کیلکولیٹر' : 'Qaza Namaz Calculator'}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-[#d4af37] border border-[#d4af37]/40 text-xs sm:text-sm font-bold shadow-xs">
          <Clock className="w-4 h-4 text-[#d4af37]" />
          <span>{isUrdu ? 'قضائے عمری کا مستند شرعی حساب' : 'Lifetime Missed Prayers Calculator'}</span>
        </div>
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#fef3c7] ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans tracking-tight'
          }`}
        >
          {isUrdu
            ? 'قضا نماز کیلکولیٹر و پرنٹ ایبل ٹریکر'
            : isRoman
            ? 'Qaza Namaz Calculator & Printable Tracker'
            : 'Qaza Namaz Calculator & Printable Tracker'}
        </h1>
        <p
          className={`text-xs sm:text-sm md:text-base text-slate-600 dark:text-emerald-100/80 max-w-2xl mx-auto ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans'
          }`}
        >
          {isUrdu
            ? 'بلوغت کے بعد سے رہ جانے والی نمازوں کا تخمینہ لگائیں، روزانہ کا ہدف مقرر کریں اور اپنی قضا نمازوں کا باوقار پرنٹ ایبل ٹریکر چارٹ محفوظ کریں۔'
            : 'Estimate your missed prayers since maturity, set a manageable daily goal, and download a printable watermarked chart to track your journey.'}
        </p>
      </header>

      {/* Main Interactive Calculator Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-[#d4af37]/40 shadow-lg space-y-8">
        {/* Step 1: Missed Time Duration Inputs */}
        <div className="space-y-4">
          <h2
            className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] flex items-center gap-2 ${
              isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans'
            }`}
          >
            <Calendar className="w-5 h-5 text-[#d4af37]" />
            <span>{isUrdu ? '1. چھوٹی ہوئی مدت درج کریں:' : '1. Enter Duration of Missed Prayers:'}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? 'سال (Years)' : 'Years'}
              </label>
              <input
                type="number"
                min="0"
                max="80"
                value={years}
                onChange={(e) => setYears(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden text-center text-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? 'مہینے (Months)' : 'Months'}
              </label>
              <input
                type="number"
                min="0"
                max="11"
                value={months}
                onChange={(e) => setMonths(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden text-center text-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? 'دن (Days)' : 'Days'}
              </label>
              <input
                type="number"
                min="0"
                max="30"
                value={days}
                onChange={(e) => setDays(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden text-center text-lg"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Daily Target & Witr Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200 dark:border-emerald-800/40">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
              {isUrdu
                ? '2. روزانہ کتنے وقت کی قضا پڑھیں گے؟ (Daily Target)'
                : '2. Daily Qaza Target (Days per day):'}
            </label>
            <select
              value={dailyTarget}
              onChange={(e) => setDailyTarget(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden"
            >
              <option value="1">1 دن کی قضا روزانہ (ہر فرض نماز کے ساتھ 1 قضا)</option>
              <option value="2">2 دن کی قضا روزانہ (ہر نماز کے ساتھ 2 قضا)</option>
              <option value="3">3 دن کی قضا روزانہ (ہر نماز کے ساتھ 3 قضا)</option>
              <option value="5">5 دن کی قضا روزانہ (تیز رفتار ادائیگی)</option>
            </select>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-3 pt-6">
            <label className="text-xs font-bold text-slate-700 dark:text-emerald-200 cursor-pointer flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeWitr}
                onChange={(e) => setIncludeWitr(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded-sm focus:ring-[#d4af37]"
              />
              <span>{isUrdu ? 'نمازِ وتر واجب شامل کریں (حنفی مسلک)' : 'Include Witr Wajib (Hanafi)'}</span>
            </label>
          </div>
        </div>

        {/* Step 3: Calculation Results Dashboard */}
        <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-emerald-800/40">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3
              className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              {isUrdu ? 'مجموعی خلاصہ و ہدفِ تکمیل:' : 'Total Breakdown & Target Timeline:'}
            </h3>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-emerald-700 dark:text-emerald-400 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isUrdu ? 'دوبارہ شروع کریں' : 'Reset'}</span>
            </button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/50 text-center">
              <span className="text-xs text-slate-500 dark:text-emerald-300/70 font-medium">
                {isUrdu ? 'کل چھوٹی مدت' : 'Total Days'}
              </span>
              <p className="text-xl sm:text-2xl font-black text-emerald-800 dark:text-[#d4af37] mt-1">
                {totalDays.toLocaleString()} {isUrdu ? 'دن' : 'days'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/50 text-center">
              <span className="text-xs text-slate-500 dark:text-emerald-300/70 font-medium">
                {isUrdu ? 'ہر نماز کی تعداد' : 'Per Prayer Type'}
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                {totalPrayersPerType.toLocaleString()}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/50 text-center">
              <span className="text-xs text-slate-500 dark:text-emerald-300/70 font-medium">
                {isUrdu ? 'کل واجب نمازیں' : 'Grand Total'}
              </span>
              <p className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">
                {grandTotalPrayers.toLocaleString()}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/60 text-center">
              <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">
                {isUrdu ? 'تخمینی تکمیل' : 'Est. Completion'}
              </span>
              <p className="text-lg sm:text-xl font-black text-emerald-900 dark:text-[#fef3c7] mt-1">
                {yearsToComplete} {isUrdu ? 'سال' : 'years'}
              </p>
            </div>
          </div>

          {/* Timeline Notification Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900/10 via-[#d4af37]/15 to-emerald-900/10 border border-[#d4af37]/40 text-center text-xs sm:text-sm font-bold text-slate-800 dark:text-emerald-200">
            {isUrdu ? (
              <p>
                اگر آپ روزانہ <span className="text-[#d4af37] font-black">{dailyTarget} دن</span> کی قضا ادا کریں تو ان شاء اللہ{' '}
                <span className="text-[#d4af37] font-black">{formattedCompletion}</span> تک آپ کی تمام قضا نمازیں مکمل ہو جائیں گی۔
              </p>
            ) : (
              <p>
                By praying <span className="text-[#d4af37] font-black">{dailyTarget} days</span> of Qaza daily, you will complete all missed prayers by{' '}
                <span className="text-[#d4af37] font-black">{formattedCompletion}</span>, insha’Allah.
              </p>
            )}
          </div>
        </div>

        {/* Printable Qaza Tracker Sheet Preview */}
        <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-emerald-800/40">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3
                className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                {isUrdu ? 'قضا نماز ٹریکر چارٹ (پرنٹ ایبل شیٹ)' : 'Printable Qaza Tracker Sheet:'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isUrdu
                  ? 'اس چارٹ کو پرنٹ کر کے اپنی جائے نماز یا کمرے میں لگائیں اور ادا شدہ نمازوں پر نشان لگاتے جائیں۔'
                  : 'Print this sheet, place it by your prayer rug, and check off each completed prayer.'}
              </p>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-amber-500 hover:brightness-105 text-[#0a1411] font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer transition active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                {isUrdu ? 'ٹریکر چارٹ پرنٹ کریں' : 'Print Tracker Chart'}
              </span>
            </button>
          </div>

          {/* Tracker Table */}
          <div className="overflow-x-auto rounded-2xl border border-stone-300 dark:border-emerald-800">
            <table className="w-full text-xs sm:text-sm text-center">
              <thead className="bg-stone-100 dark:bg-[#07130f] text-slate-700 dark:text-[#d4af37] border-b border-stone-300 dark:border-emerald-800">
                <tr>
                  <th className="py-3 px-3">نماز (Prayer)</th>
                  <th className="py-3 px-3">رکعت (Rak’at)</th>
                  <th className="py-3 px-3">کل تعداد (Total)</th>
                  <th className="py-3 px-3">روزانہ ہدف (Target)</th>
                  <th className="py-3 px-3">چیک باکس (Track)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-emerald-800/40">
                {prayerTypes.map((p) => (
                  <tr key={p.id} className="hover:bg-stone-50 dark:hover:bg-[#07130f]/50">
                    <td className="py-3 px-3 font-bold font-urdu text-sm sm:text-base text-slate-900 dark:text-white">
                      {p.ur} ({p.en})
                    </td>
                    <td className="py-3 px-3 text-slate-600 dark:text-emerald-200 font-urdu">
                      {p.rakat}
                    </td>
                    <td className="py-3 px-3 font-mono font-bold text-emerald-800 dark:text-[#d4af37]">
                      {totalPrayersPerType.toLocaleString()}
                    </td>
                    <td className="py-3 px-3 font-mono font-bold text-slate-700 dark:text-slate-300">
                      {dailyTarget} / دن
                    </td>
                    <td className="py-3 px-3">
                      <div className="w-5 h-5 mx-auto border-2 border-stone-400 dark:border-emerald-600 rounded-md"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center text-[11px] text-slate-400 dark:text-emerald-300/60 font-sans">
            اخلاقی باتیں • AkhlaqiBaatein.com — مستند اسلامی اذکار و وظائف گنجینہ
          </div>
        </div>
      </div>

      {/* 250-Word Scholarly Fiqhi Guide & FAQs (AdSense Compliant) */}
      <section className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/40 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-[#d4af37]">
          <BookOpen className="w-5 h-5 shrink-0" />
          <h2
            className={`text-xl sm:text-2xl font-bold ${
              isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans'
            }`}
          >
            {isUrdu ? 'قضائے عمری کا شرعی طریقہ اور فقہی احکام' : 'Fiqhi Rules & Method of Qaza-e-Umri'}
          </h2>
        </div>

        <div
          className={`space-y-4 text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 leading-relaxed ${
            isUrdu ? 'font-urdu leading-[2.0]' : 'font-sans'
          }`}
        >
          <p>
            {isUrdu
              ? 'نماز دین کا ستون اور اسلام کا اہم ترین رکن ہے۔ اگر کسی مسلمان کی نمازیں غفلت، سستی یا لاعلمی کی بنا پر چھوٹ گئی ہوں، تو جمہور فقہائے امت (احناف، مالکیہ، شافعیہ اور حنابلہ) کے متفقہ فیصلے کے مطابق ان تمام فوت شدہ نمازوں کی قضا ادا کرنا فرضِ عین ہے۔ رسول اللہ ﷺ نے ارشاد فرمایا: "جو شخص نماز سے سو جائے یا اسے بھول جائے تو اس کا کفارہ یہی ہے کہ جب یاد آئے اسے ادا کرے۔" (صحیح مسلم)'
              : 'Prayer is the pillar of faith. According to the consensus of traditional jurists (Hanafi, Maliki, Shafi’i, and Hanbali), missed prayers remain an outstanding debt to Allah and must be systematically made up as Qaza-e-Umri.'}
          </p>

          <p>
            {isUrdu
              ? 'قضا نماز کی نیت کا آسان طریقہ یہ ہے کہ دل میں ارادہ کرے: "میں اپنی چھوٹی ہوئی نمازوں میں سے سب سے پہلی فجر (یا ظہر وغیرہ) کی نماز قضا پڑھتا ہوں۔" اسی طرح ہر بار پڑھتے وقت "سب سے پہلی" کی نیت کرتا رہے تاکہ ترتیب قائم رہے۔ قضا نمازوں میں صرف فرض رکعتیں اور وتر واجب ادا کیے جاتے ہیں؛ سنتیں قضا نہیں ہوتیں سوائے اسی دن کی فجر کی سنت کے جو زوال سے پہلے ادا کی جا رہی ہو۔'
              : 'The intention (Niyyah) for Qaza is: "I intend to pray the first missed Fajr (or Zuhr, etc.) upon me." In Qaza, only the obligatory (Fard) units and Witr Wajib are made up; regular Sunnah prayers are not repeated.'}
          </p>

          <p>
            {isUrdu
              ? 'روزانہ کی ادائیگی کو بوجھ نہ بنائیں بلکہ ہر فرض نماز کے ساتھ اسی وقت کی ایک قضا نماز پڑھنے کا معمول بنا لیں۔ مثلاً فجر کے بعد یا پہلے ایک قضا فجر، ظہر کے بعد ایک قضا ظہر۔ اس ترتیب سے ایک دن میں پورے ایک دن کی قضا باآسانی ادا ہو جاتی ہے اور چند سالوں میں زندگی بھر کا بوجھ اتر جاتا ہے۔ سچی توبہ اور استغفار ساتھ رکھنا ضروری ہے کیونکہ تاخیر پر ندامت توبہ کی روح ہے۔'
              : 'Make Qaza manageable by performing one missed prayer alongside each regular daily prayer. With consistency, years of missed prayers can be comfortably settled while seeking sincere forgiveness from Allah.'}
          </p>
        </div>

        {/* FAQs */}
        <div className="pt-4 border-t border-stone-200 dark:border-emerald-800/40 space-y-3">
          <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'اکثر پوچھے جانے والے سوالات (FAQs):' : 'Frequently Asked Questions:'}
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40">
              <p className="font-bold text-slate-900 dark:text-[#d4af37]">
                {isUrdu ? 'س: کیا قضا نماز کسی بھی وقت پڑھی جا سکتی ہے؟' : 'Q: At what times can Qaza prayers be offered?'}
              </p>
              <p className="text-slate-600 dark:text-emerald-100/80 mt-1">
                {isUrdu
                  ? 'ج: تین مکروہ اوقات (طلوعِ آفتاب، عین زوال یعنی نصف النہار، اور غروبِ آفتاب) کے علاوہ رات یا دن کے کسی بھی وقت قضا نماز پڑھی جا سکتی ہے۔'
                  : 'A: Qaza prayers can be performed at any time of the day or night except during the three prohibited times: sunrise, zenith (Zawaal), and sunset.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40">
              <p className="font-bold text-slate-900 dark:text-[#d4af37]">
                {isUrdu ? 'س: کیا فوت شدہ شخص کی طرف سے نماز کا فدیہ دیا جا سکتا ہے؟' : 'Q: Can Fidyah be paid on behalf of a deceased person?'}
              </p>
              <p className="text-slate-600 dark:text-emerald-100/80 mt-1">
                {isUrdu
                  ? 'ج: زندہ انسان کو اپنی قضا خود ہی پڑھنی ہوگی۔ البتہ اگر کوئی شخص وصیت کر کے فوت ہو جائے تو اس کے ترکے سے ہر قضا نماز اور وتر کے بدلے صدقہ فطر کے برابر فدیہ دیا جا سکتا ہے۔'
                  : 'A: A living person must pray their own Qaza. However, if someone passes away leaving a bequest, Fidyah equivalent to Sadaqah al-Fitr per missed prayer may be paid from their estate.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
