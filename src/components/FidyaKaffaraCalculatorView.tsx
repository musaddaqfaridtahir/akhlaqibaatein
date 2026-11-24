'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Coins,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  Calendar,
  AlertCircle,
  HelpCircle,
  Info,
  Check,
  Copy,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type CurrencyCode = 'PKR' | 'USD' | 'GBP' | 'SAR' | 'AED';

interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  labelUr: string;
  labelEn: string;
  staples: {
    wheat: number; // 2kg
    barley: number; // 3.5kg
    dates: number; // 3.5kg
    raisins: number; // 3.5kg
  };
}

const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  PKR: {
    code: 'PKR',
    symbol: '₨',
    labelUr: 'پاکستانی روپیہ (PKR)',
    labelEn: 'Pakistani Rupee (PKR)',
    staples: {
      wheat: 300,
      barley: 650,
      dates: 2200,
      raisins: 3800,
    },
  },
  USD: {
    code: 'USD',
    symbol: '$',
    labelUr: 'امریکی ڈالر (USD)',
    labelEn: 'US Dollar (USD)',
    staples: {
      wheat: 6,
      barley: 12,
      dates: 25,
      raisins: 40,
    },
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    labelUr: 'برطانوی پاؤنڈ (GBP)',
    labelEn: 'British Pound (GBP)',
    staples: {
      wheat: 5,
      barley: 10,
      dates: 20,
      raisins: 32,
    },
  },
  SAR: {
    code: 'SAR',
    symbol: '﷼',
    labelUr: 'سعودی ریال (SAR)',
    labelEn: 'Saudi Riyal (SAR)',
    staples: {
      wheat: 20,
      barley: 40,
      dates: 80,
      raisins: 130,
    },
  },
  AED: {
    code: 'AED',
    symbol: 'د.إ',
    labelUr: 'اماراتی درہم (AED)',
    labelEn: 'UAE Dirham (AED)',
    staples: {
      wheat: 20,
      barley: 40,
      dates: 80,
      raisins: 130,
    },
  },
};

export default function FidyaKaffaraCalculatorView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [activeTab, setActiveTab] = useState<'fitrana' | 'fidya' | 'kaffara'>('fitrana');
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('PKR');

  // Editable staple rates initialized with currency defaults
  const [stapleRates, setStapleRates] = useState(CURRENCIES.PKR.staples);

  // Tab 1: Fitrana state
  const [familyMembers, setFamilyMembers] = useState<number>(5);
  const [chosenStaple, setChosenStaple] = useState<'wheat' | 'barley' | 'dates' | 'raisins'>('wheat');

  // Tab 2: Roza Fidya state
  const [missedFasts, setMissedFasts] = useState<number>(30);
  const [fidyaStaple, setFidyaStaple] = useState<'wheat' | 'barley' | 'dates' | 'raisins'>('wheat');

  // Tab 3: Kaffara state
  const [kaffaraType, setKaffaraType] = useState<'oath' | 'fast'>('oath');
  const [kaffaraCount, setKaffaraCount] = useState<number>(1);
  const [kaffaraStaple, setKaffaraStaple] = useState<'wheat' | 'barley' | 'dates' | 'raisins'>('wheat');

  const [copied, setCopied] = useState(false);

  // Update rates when currency changes
  const handleCurrencyChange = (newCode: CurrencyCode) => {
    setSelectedCurrency(newCode);
    setStapleRates(CURRENCIES[newCode].staples);
  };

  const curr = CURRENCIES[selectedCurrency];

  // Calculations
  const fitranaPerPerson = stapleRates[chosenStaple];
  const fitranaTotal = familyMembers * fitranaPerPerson;

  const fidyaPerDay = stapleRates[fidyaStaple];
  const fidyaTotal = missedFasts * fidyaPerDay;

  const kaffaraPersonsPerEvent = kaffaraType === 'oath' ? 10 : 60;
  const kaffaraRatePerEvent = kaffaraPersonsPerEvent * stapleRates[kaffaraStaple];
  const kaffaraTotal = kaffaraCount * kaffaraRatePerEvent;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-10 max-w-5xl mx-auto">
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
          {isUrdu ? 'فدیہ، کفارہ و صدقۂ فطر کیلکولیٹر' : isRoman ? 'Fidya, Kaffara & Fitrana' : 'Fidya, Kaffara & Fitrana Calculator'}
        </span>
      </nav>

      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#11221c] border-2 border-[#d4af37]/60 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-right rtl:md:text-right ltr:md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-amber-300 text-xs font-bold">
              <Coins className="w-4 h-4 text-[#d4af37]" />
              <span>{isUrdu ? 'مستند شرعی اوزان و بین الاقوامی کرنسیاں' : 'Shar’i Standards & Multi-Currency Calculator'}</span>
            </div>

            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fef3c7] ${
                isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans'
              }`}
            >
              {isUrdu
                ? 'فدیہ، کفارہ اور صدقۂ فطر (فطرانہ) کیلکولیٹر'
                : 'Fidya, Kaffara & Sadqa-e-Fitr (Fitrana) Calculator'}
            </h1>

            <p className={`text-xs sm:text-sm text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'گندم، جو، کھجور اور کشمش کے شرعی اوزان کے مطابق صدقۂ فطر، قضاءِ روزوں کا فدیہ اور قسم و روزے کے کفارے کا دقیق حساب لگائیں۔'
                : 'Accurately calculate Sadqa-e-Fitr, Roza Fidya for missed fasts, and Kaffara for broken oaths or fasts across 5 international currencies.'}
            </p>
          </div>

          {/* Currency Selector */}
          <div className="bg-[#07100d] border border-[#d4af37]/40 rounded-2xl p-4 space-y-2 shrink-0 w-full md:w-auto text-center md:text-right">
            <label className={`block text-xs font-bold text-amber-300 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? 'کرنسی کا انتخاب:' : 'Select Currency:'}
            </label>
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                <button
                  key={code}
                  onClick={() => handleCurrencyChange(code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    selectedCurrency === code
                      ? 'bg-emerald-700 text-white shadow-xs border border-[#d4af37]/60'
                      : 'bg-stone-900/80 text-stone-400 hover:text-white border border-stone-800'
                  }`}
                >
                  {code} ({CURRENCIES[code].symbol})
                </button>
              ))}
            </div>
            <p className="text-[11px] text-stone-400">
              {isUrdu ? 'قیمتوں کو اپنے مقامی بازار کے مطابق ایڈٹ بھی کیا جا سکتا ہے۔' : 'Editable commodity market rates.'}
            </p>
          </div>
        </div>
      </div>

      {/* Editable Staple Rates Reference Bar */}
      <section className="bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 rounded-3xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-[#d4af37]" />
            <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? `اجناس کے شرعی اوزان و نرخ (${curr.code})` : `Commodity Standards & Market Rates (${curr.code})`}
            </h3>
          </div>
          <span className="text-xs text-slate-500 dark:text-emerald-300/80">
            {isUrdu ? 'ضرورت کے مطابق ریٹ تبدیل کر سکتے ہیں' : 'Edit values to match local market rates'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Wheat */}
          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-1.5">
            <span className={`text-xs font-bold text-amber-500 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? 'گندم / آٹا (۲ کلو)' : 'Wheat (2 kg / 0.5 Sa’)'}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-stone-400">{curr.symbol}</span>
              <input
                type="number"
                min="0"
                value={stapleRates.wheat}
                onChange={(e) => setStapleRates({ ...stapleRates, wheat: Math.max(0, parseFloat(e.target.value) || 0) })}
                className="w-full font-bold text-sm bg-transparent border-b border-stone-300 dark:border-stone-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          {/* Barley */}
          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-1.5">
            <span className={`text-xs font-bold text-amber-500 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? 'جو (۳.۵ کلو)' : 'Barley (3.5 kg / 1 Sa’)'}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-stone-400">{curr.symbol}</span>
              <input
                type="number"
                min="0"
                value={stapleRates.barley}
                onChange={(e) => setStapleRates({ ...stapleRates, barley: Math.max(0, parseFloat(e.target.value) || 0) })}
                className="w-full font-bold text-sm bg-transparent border-b border-stone-300 dark:border-stone-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-1.5">
            <span className={`text-xs font-bold text-amber-500 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? 'کھجور (۳.۵ کلو)' : 'Dates (3.5 kg / 1 Sa’)'}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-stone-400">{curr.symbol}</span>
              <input
                type="number"
                min="0"
                value={stapleRates.dates}
                onChange={(e) => setStapleRates({ ...stapleRates, dates: Math.max(0, parseFloat(e.target.value) || 0) })}
                className="w-full font-bold text-sm bg-transparent border-b border-stone-300 dark:border-stone-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          {/* Raisins */}
          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-1.5">
            <span className={`text-xs font-bold text-amber-500 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? 'کشمش (۳.۵ کلو)' : 'Raisins (3.5 kg / 1 Sa’)'}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-stone-400">{curr.symbol}</span>
              <input
                type="number"
                min="0"
                value={stapleRates.raisins}
                onChange={(e) => setStapleRates({ ...stapleRates, raisins: Math.max(0, parseFloat(e.target.value) || 0) })}
                className="w-full font-bold text-sm bg-transparent border-b border-stone-300 dark:border-stone-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Main Calculation Tabs */}
      <section className="bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
        {/* Tab Headers */}
        <div className="flex items-center justify-center sm:justify-start gap-2 bg-stone-100 dark:bg-[#07130f] p-1.5 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('fitrana')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'fitrana'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 dark:text-emerald-300/80 hover:text-slate-900 dark:hover:text-white'
            } ${isUrdu ? 'font-urdu' : ''}`}
          >
            {isUrdu ? '۱. صدقۂ فطر (فطرانہ)' : '1. Sadqa-e-Fitr (Fitrana)'}
          </button>
          <button
            onClick={() => setActiveTab('fidya')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'fidya'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 dark:text-emerald-300/80 hover:text-slate-900 dark:hover:text-white'
            } ${isUrdu ? 'font-urdu' : ''}`}
          >
            {isUrdu ? '۲. روزے کا فدیہ' : '2. Roza Fidya'}
          </button>
          <button
            onClick={() => setActiveTab('kaffara')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'kaffara'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 dark:text-emerald-300/80 hover:text-slate-900 dark:hover:text-white'
            } ${isUrdu ? 'font-urdu' : ''}`}
          >
            {isUrdu ? '۳. قسم و روزے کا کفارہ' : '3. Oath / Fast Kaffara'}
          </button>
        </div>

        {/* TAB 1: Sadqa-e-Fitr (Fitrana) */}
        {activeTab === 'fitrana' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'گھر کے افراد کی کل تعداد (بڑے و بچے):' : 'Number of Family Members (Adults & Minors):'}
                </label>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={familyMembers}
                    onChange={(e) => setFamilyMembers(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'جنس کا معیار منتخب کریں:' : 'Select Staple Standard:'}
                </label>
                <select
                  value={chosenStaple}
                  onChange={(e) => setChosenStaple(e.target.value as any)}
                  className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                >
                  <option value="wheat">{isUrdu ? `گندم (۲ کلو) — ${curr.symbol} ${stapleRates.wheat}` : `Wheat (2kg) — ${curr.symbol} ${stapleRates.wheat}`}</option>
                  <option value="barley">{isUrdu ? `جو (۳.۵ کلو) — ${curr.symbol} ${stapleRates.barley}` : `Barley (3.5kg) — ${curr.symbol} ${stapleRates.barley}`}</option>
                  <option value="dates">{isUrdu ? `کھجور (۳.۵ کلو) — ${curr.symbol} ${stapleRates.dates}` : `Dates (3.5kg) — ${curr.symbol} ${stapleRates.dates}`}</option>
                  <option value="raisins">{isUrdu ? `کشمش (۳.۵ کلو) — ${curr.symbol} ${stapleRates.raisins}` : `Raisins (3.5kg) — ${curr.symbol} ${stapleRates.raisins}`}</option>
                </select>
              </div>
            </div>

            {/* Result Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-[#0d221a] to-[#07130f] border border-[#d4af37]/60 p-5 sm:p-6 text-[#fef3c7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className={`text-xs font-bold text-amber-400 uppercase tracking-wider ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'کل واجب الادا صدقۂ فطر (فطرانہ):' : 'Total Payable Sadqa-e-Fitr:'}
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#fef3c7] font-mono">
                  {curr.symbol} {fitranaTotal.toLocaleString()}
                </p>
                <p className={`text-xs text-emerald-200/90 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu
                    ? `${familyMembers} افراد × ${curr.symbol} ${fitranaPerPerson} فی کس`
                    : `${familyMembers} person(s) × ${curr.symbol} ${fitranaPerPerson} each`}
                </p>
              </div>

              <button
                onClick={() => handleCopy(`Sadqa-e-Fitr: ${curr.symbol} ${fitranaTotal.toLocaleString()} (${familyMembers} persons)`)}
                className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-2 transition cursor-pointer self-end sm:self-center"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? (isUrdu ? 'کاپی ہو گیا!' : 'Copied!') : (isUrdu ? 'نتیجہ کاپی کریں' : 'Copy Result')}</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Roza Fidya */}
        {activeTab === 'fidya' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-800 dark:text-amber-200 text-xs sm:text-sm leading-relaxed">
              <p className={isUrdu ? 'font-urdu leading-normal' : ''}>
                {isUrdu
                  ? 'شرعی نوٹ: فدیہ صرف ان افراد کے لیے ہے جو بڑھاپے یا ایسی دائمی بیماری میں مبتلا ہوں جس سے صحت یابی کی امید نہ ہو اور وہ آئندہ روزہ رکھنے پر قادر نہ ہوں۔ عارضی بیمار بعد میں قضاء روزہ ہی رکھیں گے۔'
                  : 'Fiqhi Note: Fidya applies strictly to chronically ill individuals or elderly persons who cannot fast and have no realistic prospect of physical recovery. Temporarily ill individuals must make up missed fasts (Qaza) later.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'چھوٹے ہوئے روزوں کی تعداد:' : 'Number of Missed Fasts:'}
                </label>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <input
                    type="number"
                    min="1"
                    max="360"
                    value={missedFasts}
                    onChange={(e) => setMissedFasts(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'فدیہ کا پیمانہ (۱ صدقۂ فطر فی روزہ):' : 'Fidya Benchmark (1 Fitrana per fast):'}
                </label>
                <select
                  value={fidyaStaple}
                  onChange={(e) => setFidyaStaple(e.target.value as any)}
                  className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                >
                  <option value="wheat">{isUrdu ? `گندم (۲ کلو) — ${curr.symbol} ${stapleRates.wheat}` : `Wheat (2kg) — ${curr.symbol} ${stapleRates.wheat}`}</option>
                  <option value="barley">{isUrdu ? `جو (۳.۵ کلو) — ${curr.symbol} ${stapleRates.barley}` : `Barley (3.5kg) — ${curr.symbol} ${stapleRates.barley}`}</option>
                  <option value="dates">{isUrdu ? `کھجور (۳.۵ کلو) — ${curr.symbol} ${stapleRates.dates}` : `Dates (3.5kg) — ${curr.symbol} ${stapleRates.dates}`}</option>
                  <option value="raisins">{isUrdu ? `کشمش (۳.۵ کلو) — ${curr.symbol} ${stapleRates.raisins}` : `Raisins (3.5kg) — ${curr.symbol} ${stapleRates.raisins}`}</option>
                </select>
              </div>
            </div>

            {/* Result Box */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-[#0d221a] to-[#07130f] border border-[#d4af37]/60 p-5 sm:p-6 text-[#fef3c7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className={`text-xs font-bold text-amber-400 uppercase tracking-wider ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'کل واجب الادا فدیہ:' : 'Total Payable Fidya:'}
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#fef3c7] font-mono">
                  {curr.symbol} {fidyaTotal.toLocaleString()}
                </p>
                <p className={`text-xs text-emerald-200/90 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu
                    ? `${missedFasts} روزے × ${curr.symbol} ${fidyaPerDay} فی روزہ فدیہ`
                    : `${missedFasts} fast(s) × ${curr.symbol} ${fidyaPerDay} per day`}
                </p>
              </div>

              <button
                onClick={() => handleCopy(`Roza Fidya: ${curr.symbol} ${fidyaTotal.toLocaleString()} (${missedFasts} missed fasts)`)}
                className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-2 transition cursor-pointer self-end sm:self-center"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? (isUrdu ? 'کاپی ہو گیا!' : 'Copied!') : (isUrdu ? 'نتیجہ کاپی کریں' : 'Copy Result')}</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: Kaffara */}
        {activeTab === 'kaffara' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'کفارے کی قسم کا انتخاب کریں:' : 'Select Kaffara Violation Type:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setKaffaraType('oath')}
                  className={`p-4 rounded-2xl border text-right rtl:text-right ltr:text-left transition cursor-pointer space-y-1 ${
                    kaffaraType === 'oath'
                      ? 'bg-emerald-950/60 border-[#d4af37] ring-1 ring-[#d4af37]'
                      : 'bg-stone-50 dark:bg-[#07130f] border-stone-200 dark:border-stone-800'
                  }`}
                >
                  <p className="font-bold text-sm text-slate-900 dark:text-white">
                    {isUrdu ? 'قسم توڑنے کا کفارہ (۱۰ مساکین)' : 'Broken Oath Kaffara (10 Miskeen)'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-emerald-200/80">
                    {isUrdu
                      ? 'سورۃ المائدہ (۸۹): ۱۰ مسکینوں کو دو وقت کا اوسط کھانا یا کپڑا فراہم کرنا۔'
                      : 'Surah Al-Ma’idah (89): Feeding 10 poor persons two meals or clothing them.'}
                  </p>
                </button>

                <button
                  onClick={() => setKaffaraType('fast')}
                  className={`p-4 rounded-2xl border text-right rtl:text-right ltr:text-left transition cursor-pointer space-y-1 ${
                    kaffaraType === 'fast'
                      ? 'bg-emerald-950/60 border-[#d4af37] ring-1 ring-[#d4af37]'
                      : 'bg-stone-50 dark:bg-[#07130f] border-stone-200 dark:border-stone-800'
                  }`}
                >
                  <p className="font-bold text-sm text-slate-900 dark:text-white">
                    {isUrdu ? 'رمضان کا روزہ جان بوجھ کر توڑنا (۶۰ مساکین)' : 'Deliberate Fast Break Kaffara (60 Miskeen)'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-emerald-200/80">
                    {isUrdu
                      ? 'بلا عذر روزہ توڑنے پر: ۶۰ مساکین کو دو وقت کھانا کھلانا (یا مسلسل ۶۰ روزے رکھنا)۔'
                      : 'Breaking fast intentionally without valid excuse: feeding 60 poor two meals (or 60 consecutive fasts).'}
                  </p>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'کفاروں کی تعداد:' : 'Number of Kaffara Events:'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={kaffaraCount}
                  onChange={(e) => setKaffaraCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-xs sm:text-sm font-semibold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'کھانے کا پیمانہ / جنس:' : 'Food Benchmark Staple:'}
                </label>
                <select
                  value={kaffaraStaple}
                  onChange={(e) => setKaffaraStaple(e.target.value as any)}
                  className="w-full p-3.5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-300 dark:border-emerald-800/80 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                >
                  <option value="wheat">{isUrdu ? `گندم (۲ کلو) — ${curr.symbol} ${stapleRates.wheat}` : `Wheat (2kg) — ${curr.symbol} ${stapleRates.wheat}`}</option>
                  <option value="barley">{isUrdu ? `جو (۳.۵ کلو) — ${curr.symbol} ${stapleRates.barley}` : `Barley (3.5kg) — ${curr.symbol} ${stapleRates.barley}`}</option>
                  <option value="dates">{isUrdu ? `کھجور (۳.۵ کلو) — ${curr.symbol} ${stapleRates.dates}` : `Dates (3.5kg) — ${curr.symbol} ${stapleRates.dates}`}</option>
                  <option value="raisins">{isUrdu ? `کشمش (۳.۵ کلو) — ${curr.symbol} ${stapleRates.raisins}` : `Raisins (3.5kg) — ${curr.symbol} ${stapleRates.raisins}`}</option>
                </select>
              </div>
            </div>

            {/* Result Box */}
            <div className="rounded-2xl bg-gradient-to-r from-[#1c0f0a] via-[#241c09] to-[#07130f] border border-amber-500/60 p-5 sm:p-6 text-[#fef3c7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className={`text-xs font-bold text-amber-400 uppercase tracking-wider ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'کل واجب الادا کفارہ:' : 'Total Payable Kaffara:'}
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#fef3c7] font-mono">
                  {curr.symbol} {kaffaraTotal.toLocaleString()}
                </p>
                <p className={`text-xs text-amber-200/90 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu
                    ? `${kaffaraCount} کفارہ × (${kaffaraPersonsPerEvent} مساکین × ${curr.symbol} ${stapleRates[kaffaraStaple]})`
                    : `${kaffaraCount} kaffara × (${kaffaraPersonsPerEvent} persons × ${curr.symbol} ${stapleRates[kaffaraStaple]})`}
                </p>
              </div>

              <button
                onClick={() => handleCopy(`Kaffara: ${curr.symbol} ${kaffaraTotal.toLocaleString()} (${kaffaraType === 'oath' ? '10 poor' : '60 poor'})`)}
                className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-2 transition cursor-pointer self-end sm:self-center"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? (isUrdu ? 'کاپی ہو گیا!' : 'Copied!') : (isUrdu ? 'نتیجہ کاپی کریں' : 'Copy Result')}</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Scholarly Fiqh Explanation */}
      <section className="bg-stone-50 dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-[#d4af37]" />
          <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'صدقۂ فطر، فدیہ اور کفارہ کے شرعی احکام و فقہی اصول' : 'Shar’i Rules Regarding Fitrana, Fidya & Kaffara'}
          </h3>
        </div>

        <div className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 leading-relaxed space-y-3 ${isUrdu ? 'font-urdu text-sm sm:text-base leading-[2.0]' : ''}`}>
          <p>
            {isUrdu ? (
              <>
                <strong>صدقۂ فطر (فطرانہ):</strong> رسول اللہ ﷺ نے ہر مسلمان مرد و عورت، آزاد و غلام، چھوٹے اور بڑے پر عید الفطر کی نماز سے پہلے صدقۂ فطر ادا کرنا فرض قرار دیا تاکہ روزوں کی لغزشوں کی پاکیزگی اور مساکین کی عید کی خوشی کا سامان ہو سکے (بخاری: ۱۵۰۳)۔ اس کی مقدار نصف صاع گندم (تقریباً ۲ کلو گرام) یا ایک صاع جو، کھجور یا کشمش (تقریباً ۳.۵ کلو گرام) ہے۔
              </>
            ) : isRoman ? (
              <>
                <strong>Sadqa-e-Fitr (Fitrana):</strong> Rasool Allah ﷺ ne har musalman par Eid ki namaz se pehle Fitrana wajib farmaya (Sahih Bukhari: 1503) taakay rozon ki kotahiyan paak hon aur ghareebon ki Eid sanwar sakay. Iska meyar aadha sa’ gandam (2kg) ya aik sa’ jau, khajoor ya kishmish (3.5kg) hai.
              </>
            ) : (
              <>
                <strong>Sadqa-e-Fitr (Fitrana):</strong> Prophet Muhammad ﷺ prescribed Sadqa-e-Fitr as an obligation upon every Muslim (young or old, male or female) prior to the Eid-ul-Fitr prayer (Sahih Bukhari: 1503) to purify the fasting person from idle speech and provide nourishment for the poor. The standard measure is 1/2 Sa’ of wheat (approx. 2 kg) or 1 full Sa’ of barley, dates, or raisins (approx. 3.5 kg).
              </>
            )}
          </p>
          <p>
            {isUrdu ? (
              <>
                <strong>فدیہ اور کفارہ کا فرق:</strong> فدیہ ان معذوروں کے لیے ہے جو بڑھاپے یا لا علاج بیماری کی وجہ سے کبھی روزہ رکھنے کے قابل نہ رہیں (سورۃ البقرہ: ۱۸۴)۔ جبکہ کفارہ ایک شرعی تعزیر ہے جو بلا عذر دانستہ رمضان کا روزہ کھانے پینے یا مباشرت سے توڑنے پر (۶۰ روزے یا ۶۰ مساکین کا کھانا)، یا اللہ کی قسم کھا کر توڑنے پر (۱۰ مساکین کا کھانا، سورۃ المائدہ: ۸۹) لازم آتا ہے۔ یہ تمام ادائیگیاں مستحقینِ زکوٰۃ (فقراء و مساکین) کو ہی دی جا سکتی ہیں۔
              </>
            ) : isRoman ? (
              <>
                <strong>Fidya aur Kaffara ka Farq:</strong> Fidya aam taur par na-qabil-e-ilaj bemari ya shadeed burhapay ke sabab roza na rakhne par aik fitrana rozaana hota hai. Kaffara qasam todne (10 miskeen) ya bila uzr jaan boojh kar roza todne (60 miskeen) par jurmana hota hai.
              </>
            ) : (
              <>
                <strong>Distinction between Fidya & Kaffara:</strong> Fidya is compensation for chronic inability to fast due to permanent illness or extreme old age (1 Fitrana rate per missed fast, Quran 2:184). Kaffara is expiation/penalty for violating a sacred obligation—such as deliberately breaking a fast without excuse (feeding 60 poor or fasting 60 consecutive days) or breaking an oath (feeding or clothing 10 poor, Quran 5:89). Both must be distributed strictly to deserving poor (Miskeen and Faqeer).
              </>
            )}
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-4">
        <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'عام پوچھے جانے والے سوالات (FAQs)' : 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-3">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'صدقۂ فطر کی ادائیگی کا سب سے افضل وقت کون سا ہے؟'
                : 'What is the most virtuous time to pay Sadqa-e-Fitr?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'افضل وقت عید الفطر کی صبح نمازِ عید سے قبل ادا کرنا ہے، تا ہم رمضان المبارک کے دوران کسی بھی وقت پیشگی ادا کرنا بھی جائز اور مستحب ہے تاکہ مستحقین عید کی ضروریات بروقت پوری کر سکیں۔'
                : 'The optimal time is on the morning of Eid-ul-Fitr prior to the congregational prayer. However, paying in advance during Ramadan is completely permissible and praiseworthy so the impoverished can meet their holiday needs in good time.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'کیا اجناس کے بجائے نقدی رقم کی صورت میں فطرانہ یا فدیہ ادا کرنا جائز ہے؟'
                : 'Is it permissible to pay Fitrana or Fidya in cash rather than actual grain?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'جی ہاں! فقہائے احناف کے نزدیک اور عصرِ حاضر کے اکثر مفتیانِ کرام کے فتوے کے مطابق اناج کی قیمت کے برابر نقدی ادا کرنا نہ صرف جائز ہے بلکہ غریب کی حاجت کے لیے زیادہ مفید و بہتر ہے۔'
                : 'Yes! According to the Hanafi juristic school and contemporary Islamic scholars, paying the cash equivalent of the designated grain weight is thoroughly permissible and often far more beneficial for modern poor recipients to purchase clothing or medicine.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'کیا صدقۂ فطر، فدیہ یا کفارہ اپنے قریبی رشتہ داروں کو دیا جا سکتا ہے؟'
                : 'Can Fitrana, Fidya, or Kaffara be given to close relatives?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'والدین، اولاد اور میاں بیوی کے علاوہ دیگر مستحق قریبی رشتہ داروں (جیسے بھائی، بہن، چچا، پھوپھی، خالہ، ماموں) کو دینا جائز بلکہ دوہرے اجر (صدقہ اور صلہ رحمی) کا باعث ہے۔'
                : 'Yes, except for ascending (parents, grandparents), descending (children, grandchildren), or spouse relationships. Giving to impoverished siblings, aunts, uncles, and cousins is not only permissible but carries double reward for charity and maintaining kinship.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
