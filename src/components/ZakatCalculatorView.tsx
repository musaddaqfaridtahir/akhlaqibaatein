'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Coins,
  ShieldCheck,
  RotateCcw,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type CurrencyCode = 'PKR' | 'USD' | 'GBP' | 'SAR' | 'AED';

interface CurrencyData {
  symbol: string;
  goldPerGram: number;
  silverPerGram: number;
}

const CURRENCIES: Record<CurrencyCode, CurrencyData> = {
  PKR: { symbol: 'Rs.', goldPerGram: 24500, silverPerGram: 295 },
  USD: { symbol: '$', goldPerGram: 88, silverPerGram: 1.05 },
  GBP: { symbol: '£', goldPerGram: 69, silverPerGram: 0.82 },
  SAR: { symbol: 'SAR', goldPerGram: 330, silverPerGram: 3.9 },
  AED: { symbol: 'AED', goldPerGram: 323, silverPerGram: 3.85 },
};

// Classical Nisab thresholds in grams:
// Silver Nisab: 52.5 Tola = 612.36 grams
// Gold Nisab: 7.5 Tola = 87.48 grams
const SILVER_NISAB_GRAMS = 612.36;
const GOLD_NISAB_GRAMS = 87.48;

export default function ZakatCalculatorView() {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [currency, setCurrency] = useState<CurrencyCode>('PKR');
  const [goldGrams, setGoldGrams] = useState<number>(0);
  const [silverGrams, setSilverGrams] = useState<number>(0);
  const [cashInHand, setCashInHand] = useState<number>(0);
  const [bankBalance, setBankBalance] = useState<number>(0);
  const [businessStock, setBusinessStock] = useState<number>(0);
  const [receivables, setReceivables] = useState<number>(0);
  const [debts, setDebts] = useState<number>(0);

  const curr = CURRENCIES[currency];

  // Asset valuations
  const goldValue = goldGrams * curr.goldPerGram;
  const silverValue = silverGrams * curr.silverPerGram;
  const totalGrossAssets =
    goldValue + silverValue + cashInHand + bankBalance + businessStock + receivables;
  const netZakatableWealth = Math.max(0, totalGrossAssets - debts);

  // Nisab threshold (Silver Nisab is the standard followed for mixed assets by majority scholars)
  const silverNisabValue = SILVER_NISAB_GRAMS * curr.silverPerGram;
  const goldNisabValue = GOLD_NISAB_GRAMS * curr.goldPerGram;

  const isEligible = netZakatableWealth >= silverNisabValue;
  const zakatPayable = isEligible ? netZakatableWealth * 0.025 : 0;

  const handleReset = () => {
    setGoldGrams(0);
    setSilverGrams(0);
    setCashInHand(0);
    setBankBalance(0);
    setBusinessStock(0);
    setReceivables(0);
    setDebts(0);
    showToast(isUrdu ? 'زکوٰۃ کیلکولیٹر ری سیٹ ہو گیا' : 'Calculator reset');
  };

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
          {isUrdu ? 'زکوٰۃ کیلکولیٹر' : 'Zakat Calculator'}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-900 dark:text-[#d4af37] border border-[#d4af37]/40 text-xs sm:text-sm font-bold shadow-xs">
          <Coins className="w-4 h-4 text-[#d4af37]" />
          <span>{isUrdu ? 'مستند شرعی زکوٰۃ و نصاب گائیڈ' : 'Accurate 2.5% Zakat & Nisab Calculator'}</span>
        </div>
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#fef3c7] ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans tracking-tight'
          }`}
        >
          {isUrdu
            ? 'جامع شرعی زکوٰۃ کیلکولیٹر'
            : isRoman
            ? 'Sharia Zakat Calculator & Nisab'
            : 'Comprehensive Sharia Zakat Calculator'}
        </h1>
        <p
          className={`text-xs sm:text-sm md:text-base text-slate-600 dark:text-emerald-100/80 max-w-2xl mx-auto ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans'
          }`}
        >
          {isUrdu
            ? 'سونے، چاندی، نقدی، بینک بیلنس اور کاروباری مال کی زکوٰۃ کا درست حساب لگائیں اور شرعی نصاب کے مطابق واجب الادا زکوٰۃ معلوم کریں۔'
            : 'Accurately calculate your annual Zakat across gold, silver, bank balances, and commercial assets based on authentic classical Nisab standards.'}
        </p>
      </header>

      {/* Calculator Container */}
      <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-[#d4af37]/40 shadow-lg space-y-8">
        {/* Currency Selector */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-stone-200 dark:border-emerald-800/40">
          <div>
            <h2 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'کرنسی کا انتخاب کریں:' : 'Select Currency:'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-emerald-300/70">
              {isUrdu ? 'قیمتیں متعلقہ ملک کے تخمینی مارکیٹ ریٹ کے مطابق ہیں' : 'Rates reflect estimated standard market prices'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  currency === c
                    ? 'bg-emerald-800 text-white dark:bg-[#d4af37] dark:text-[#0a1411] shadow-xs'
                    : 'bg-stone-100 text-slate-700 dark:bg-[#07130f] dark:text-emerald-200 hover:bg-stone-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Nisab Reference Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-[#d4af37]/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-amber-900 dark:text-[#d4af37] font-bold">
                {isUrdu ? 'چاندی کا نصاب (52.5 تولہ / 612.36 گرام)' : 'Silver Nisab (612.36g)'}
              </span>
              <p className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-0.5">
                {curr.symbol} {Math.round(silverNisabValue).toLocaleString()}
              </p>
            </div>
            <ShieldCheck className="w-7 h-7 text-[#d4af37]" />
          </div>

          <div className="p-4 rounded-2xl bg-stone-100 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-600 dark:text-emerald-300 font-bold">
                {isUrdu ? 'سونے کا نصاب (7.5 تولہ / 87.48 گرام)' : 'Gold Nisab (87.48g)'}
              </span>
              <p className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-0.5">
                {curr.symbol} {Math.round(goldNisabValue).toLocaleString()}
              </p>
            </div>
            <Coins className="w-7 h-7 text-amber-500" />
          </div>
        </div>

        {/* Assets Form */}
        <div className="space-y-4">
          <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'قابلِ زکوٰۃ اثاثے درج کریں:' : 'Enter Zakatable Assets:'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? `سونا گرام میں (${curr.symbol} ${curr.goldPerGram}/گرام)` : `Gold in Grams (${curr.symbol} ${curr.goldPerGram}/g)`}
              </label>
              <input
                type="number"
                min="0"
                value={goldGrams || ''}
                placeholder="0"
                onChange={(e) => setGoldGrams(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? `چاندی گرام میں (${curr.symbol} ${curr.silverPerGram}/گرام)` : `Silver in Grams (${curr.symbol} ${curr.silverPerGram}/g)`}
              </label>
              <input
                type="number"
                min="0"
                value={silverGrams || ''}
                placeholder="0"
                onChange={(e) => setSilverGrams(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? `نقدی رقم (Cash in Hand) — ${curr.symbol}` : `Cash in Hand (${curr.symbol})`}
              </label>
              <input
                type="number"
                min="0"
                value={cashInHand || ''}
                placeholder="0"
                onChange={(e) => setCashInHand(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? `بینک بیلنس و سیونگز — ${curr.symbol}` : `Bank Accounts & Savings (${curr.symbol})`}
              </label>
              <input
                type="number"
                min="0"
                value={bankBalance || ''}
                placeholder="0"
                onChange={(e) => setBankBalance(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? `کاروباری اسٹاک اور مالِ تجارت — ${curr.symbol}` : `Business Merchandise & Stock (${curr.symbol})`}
              </label>
              <input
                type="number"
                min="0"
                value={businessStock || ''}
                placeholder="0"
                onChange={(e) => setBusinessStock(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? `دیے گئے قابلِ وصول قرضے — ${curr.symbol}` : `Money Lent to Others / Receivables (${curr.symbol})`}
              </label>
              <input
                type="number"
                min="0"
                value={receivables || ''}
                placeholder="0"
                onChange={(e) => setReceivables(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Deductions / Liabilities */}
        <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-emerald-800/40">
          <h3 className={`text-base sm:text-lg font-bold text-red-600 dark:text-red-400 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'منہائی (واجب الادا قرضے و ادائیگیاں):' : 'Deductions (Debts Due Immediately):'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                {isUrdu ? `فوری واجب الادا قرضے — ${curr.symbol}` : `Immediate Debts & Liabilities (${curr.symbol})`}
              </label>
              <input
                type="number"
                min="0"
                value={debts || ''}
                placeholder="0"
                onChange={(e) => setDebts(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-red-300 dark:border-red-900/60 bg-red-50/40 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-red-500 outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Results Dashboard */}
        <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-emerald-800/40">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'حتمی زکوٰۃ کا خلاصہ:' : 'Final Zakat Calculation:'}
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/50 text-center">
              <span className="text-xs text-slate-500 dark:text-emerald-300/70 font-medium">
                {isUrdu ? 'مجموعی اثاثہ جات' : 'Gross Assets'}
              </span>
              <p className="text-xl font-black text-slate-900 dark:text-white mt-1">
                {curr.symbol} {Math.round(totalGrossAssets).toLocaleString()}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/50 text-center">
              <span className="text-xs text-slate-500 dark:text-emerald-300/70 font-medium">
                {isUrdu ? 'خالص قابلِ زکوٰۃ مالیت' : 'Net Zakatable Wealth'}
              </span>
              <p className="text-xl font-black text-emerald-800 dark:text-[#d4af37] mt-1">
                {curr.symbol} {Math.round(netZakatableWealth).toLocaleString()}
              </p>
            </div>

            <div className={`p-4 rounded-2xl border text-center ${
              isEligible
                ? 'bg-gradient-to-br from-emerald-800 to-emerald-950 text-white border-[#d4af37]'
                : 'bg-stone-100 dark:bg-[#07130f] border-stone-200 dark:border-emerald-800/50'
            }`}>
              <span className="text-xs font-bold text-amber-300">
                {isUrdu ? 'واجب الادا زکوٰۃ (2.5%)' : 'Total Zakat Payable (2.5%)'}
              </span>
              <p className="text-2xl font-black text-[#d4af37] mt-1">
                {curr.symbol} {Math.round(zakatPayable).toLocaleString()}
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-2xl text-center text-xs sm:text-sm font-bold border ${
            isEligible
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200'
              : 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
          }`}>
            {isEligible ? (
              <p>
                {isUrdu
                  ? `ماشاء اللہ! آپ کی خالص مالیت نصاب سے زائد ہے۔ آپ پر کل `
                  : `Your net wealth exceeds the Nisab threshold. You are required to pay `}
                <span className="text-emerald-700 dark:text-[#d4af37] font-black underline underline-offset-4">
                  {curr.symbol} {Math.round(zakatPayable).toLocaleString()}
                </span>{' '}
                {isUrdu ? 'بطور زکوٰۃ غرباء و مساکین کو ادا کرنا فرض ہے۔' : 'as obligatory Zakat.'}
              </p>
            ) : (
              <p>
                {isUrdu
                  ? `آپ کی خالص مالیت چاندی کے نصاب (${curr.symbol} ${Math.round(silverNisabValue).toLocaleString()}) سے کم ہے، اس لیے شرعاً آپ پر فی الحال زکوٰۃ فرض نہیں ہے۔`
                  : `Your net wealth is below the silver Nisab threshold (${curr.symbol} ${Math.round(silverNisabValue).toLocaleString()}), meaning Zakat is not currently obligatory upon you.`}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 250-Word Scholarly Zakat Guide & FAQs (AdSense Compliant) */}
      <section className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/40 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-[#d4af37]">
          <BookOpen className="w-5 h-5 shrink-0" />
          <h2
            className={`text-xl sm:text-2xl font-bold ${
              isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans'
            }`}
          >
            {isUrdu ? 'زکوٰۃ کے بنیادی شرعی احکام و مصارف' : 'Fundamental Rules & Beneficiaries of Zakat'}
          </h2>
        </div>

        <div
          className={`space-y-4 text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 leading-relaxed ${
            isUrdu ? 'font-urdu leading-[2.0]' : 'font-sans'
          }`}
        >
          <p>
            {isUrdu
              ? 'زکوٰۃ اسلام کا تیسرا بنیادی ستون اور مالی عبادت ہے۔ قرآن مجید میں نماز کے ساتھ بیاسی مقامات پر زکوٰۃ کی ادائیگی کا حکم دیا گیا ہے۔ اللہ تعالیٰ کا فرمان ہے: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا" (ان کے اموال سے صدقہ لیجیے جس کے ذریعے آپ انہیں پاک اور بابرکت بنائیں)۔ زکوٰۃ ادا کرنے سے مال میں کمی نہیں ہوتی بلکہ اللہ تعالیٰ اس میں خیر و برکت اور پاکیزگی عطا فرماتا ہے۔'
              : 'Zakat is the third pillar of Islam and a mandatory financial obligation commanded alongside prayer throughout the Holy Quran. Allah commands: "Take from their wealth a charity by which you purify them and cause them increase" (Surah At-Tawbah 9:103). Paying Zakat does not diminish wealth; it sanctifies and expands it.'}
          </p>

          <p>
            {isUrdu
              ? 'زکوٰۃ کا نصاب یہ ہے کہ اگر کسی شخص کے پاس ساڑھے سات تولہ (87.48 گرام) سونا، یا ساڑھے باون تولہ (612.36 گرام) چاندی، یا اس کی قیمت کے برابر نقدی رقم، شیئرز یا تجارتی مال موجود ہو اور اس پر قمری سال گزر جائے تو اس پر کل مالیت کا چالیسواں حصہ یعنی ڈھائی فیصد (2.5%) زکوٰۃ ادا کرنا فرض ہے۔ اگر سونے کے ساتھ تھوڑی سی نقدی یا چاندی بھی ہو تو احتیاطاً اور فقراء کے فائدے کے لیے چاندی کے نصاب کا اعتبار کیا جاتا ہے۔'
              : 'The Nisab threshold is 87.48g of gold or 612.36g of silver (or equivalent in cash/trade goods). When assets are mixed, classical jurisprudence favors the silver Nisab to ensure maximum benefit for impoverished recipients. The payable rate is strictly 2.5% (one-fortieth) of net wealth.'}
          </p>

          <p>
            {isUrdu
              ? 'زکوٰۃ کے مصارف قرآن مجید کی سورۂ توبہ آیت 60 میں متعین کیے گئے ہیں، جن میں فقراء، مساکین، مقروضین اور مسافر شامل ہیں۔ زکوٰۃ اپنے والدین، دادا دادی، اولاد اور شوہر یا بیوی کو نہیں دی جا سکتی۔ البتہ اپنے مستحق بھائی، بہن، چچا، پھوپھی اور دیگر قریبی رشتہ داروں کو زکوٰۃ دینا دگنے اجر (زکوٰۃ کا ثواب اور صلہ رحمی کا اجر) کا باعث ہے۔'
              : 'Surah At-Tawbah (9:60) explicitly defines the eight categories of recipients, notably the poor, the destitute, those in debt, and stranded travelers. Zakat cannot be given to direct ascendants (parents/grandparents), direct descendants (children/grandchildren), or spouses, but giving to needy siblings and relatives yields double reward.'}
          </p>
        </div>

        {/* FAQs */}
        <div className="pt-4 border-t border-stone-200 dark:border-emerald-800/40 space-y-3">
          <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'اہم ترین سوالات و جوابات (FAQs):' : 'Frequently Asked Questions:'}
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40">
              <p className="font-bold text-slate-900 dark:text-[#d4af37]">
                {isUrdu ? 'س: کیا ذاتی استعمال کے زیورات پر زکوٰۃ واجب ہے؟' : 'Q: Is Zakat due on personal use jewelry?'}
              </p>
              <p className="text-slate-600 dark:text-emerald-100/80 mt-1">
                {isUrdu
                  ? 'ج: احناف کے نزدیک سونا چاندی چاہے استعمال میں ہو یا الماری میں رکھا ہو، اگر نصاب کو پہنچ جائے تو اس پر زکوٰۃ فرض ہے۔'
                  : 'A: According to the Hanafi school and cautious scholarly consensus, gold and silver jewelry are zakatable regardless of whether they are actively worn or stored.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40">
              <p className="font-bold text-slate-900 dark:text-[#d4af37]">
                {isUrdu ? 'س: کیا زکوٰۃ رمضان المبارک سے پہلے ادا کی جا سکتی ہے؟' : 'Q: Can Zakat be paid in advance before Ramadan?'}
              </p>
              <p className="text-slate-600 dark:text-emerald-100/80 mt-1">
                {isUrdu
                  ? 'ج: جی ہاں! اگر کوئی شخص نصاب کا مالک ہو تو وہ سال پورا ہونے سے پہلے بھی پیشگی زکوٰۃ ادا کر سکتا ہے۔'
                  : 'A: Yes, if a person possesses Nisab, they are permitted to pay Zakat months in advance to assist immediate charitable causes.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}