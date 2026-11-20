'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeartHandshake,
  Copy,
  Check,
  ShieldCheck,
  Server,
  Globe,
  Sparkles,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Info,
  Mail,
  Building2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SupportView() {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';
  const isEnglish = language === 'en';

  const [copiedField, setCopiedField] = useState<'title' | 'iban' | null>(null);

  const paymentDetails = {
    platform: 'SadaPay (Pakistan)',
    title: 'MUSADDAQ FARID TAHIR',
    iban: 'PK23SADA0000003111122125',
  };

  const handleCopy = (text: string, field: 'title' | 'iban') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    showToast(
      isUrdu
        ? `${field === 'iban' ? 'آئی بی اے این (IBAN)' : 'اکاؤنٹ ٹائٹل'} کاپی ہو گیا`
        : `${field === 'iban' ? 'IBAN' : 'Account Title'} copied to clipboard`
    );
    setTimeout(() => {
      setCopiedField((prev) => (prev === field ? null : prev));
    }, 2500);
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="max-w-4xl mx-auto space-y-10">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
          isUrdu ? 'font-urdu' : 'font-sans'
        }`}
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'سرورق' : 'Home'}
        </Link>
        {isUrdu ? (
          <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
        )}
        <span className="text-slate-900 dark:text-[#fef3c7] font-semibold">
          {isUrdu ? 'ہمارا تعاون کریں' : isRoman ? 'Support Us' : 'Support Our Mission'}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-emerald-950 via-[#0b241c] to-[#050e0b] text-white shadow-xl border-2 border-amber-500/40">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 text-center sm:text-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30">
            <HeartHandshake className="w-4 h-4 text-amber-300" />
            <span>{isUrdu ? 'صدقہ جاریہ • مستقل ثواب کا ذریعہ' : isRoman ? 'Sadqa-e-Jariya • Ongoing Charity' : 'Ongoing Charity (Sadqa-e-Jariya)'}</span>
          </div>

          <h1
            className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#fef3c7] leading-[1.8] sm:leading-[1.9] ${
              isUrdu ? 'font-urdu' : 'font-sans tracking-tight'
            }`}
          >
            {isUrdu
              ? 'اخلاقی باتیں — اشاعتِ دین و اخلاق میں حصہ دار بنیں'
              : isRoman
              ? 'AkhlaqiBaatein.com — Deen Aur Akhlaq Phelane Mein Hissa Dalein'
              : 'Support Our Mission — Preserving Authentic Islamic Wisdom'}
          </h1>

          <p
            className={`text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed ${
              isUrdu ? 'font-urdu text-base sm:text-lg leading-[2.1]' : ''
            }`}
          >
            {isUrdu
              ? 'اخلاقی باتیں ایک آزاد، غیر تجارتی اور علمی پلیٹ فارم ہے جہاں لاکھوں مسلمان روزانہ مستند احادیث، مسنون دعائیں، درود شریف اور سیرت کے واقعات بغیر کسی فیس یا رکاوٹ کے پڑھتے ہیں۔ اس مشن کو جاری رکھنے کے لیے آپ کا نفلی مالی تعاون ہمارے لیے تقویت کا باعث ہے۔'
              : isRoman
              ? 'AkhlaqiBaatein.com aik azaad aur ghair-tijarti platform hai jahan lakhon Musalman mustanad ahadith, duain aur durood-e-pak parhte hain. Is khidmat ko jari rakhne ke liye aapka taawun sadqa-e-jariya hai.'
              : 'AkhlaqiBaatein.com is an independent non-commercial Islamic treasury delivering authentic Hadith, Prophetic invocations, and classical moral literature freely to millions worldwide.'}
          </p>
        </div>
      </header>

      {/* Primary Payment Card: SadaPay Pakistan */}
      <section className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#11221c] border-2 border-amber-400/70 dark:border-[#d4af37]/60 shadow-lg space-y-8">
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-stone-200 dark:border-emerald-800/60 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 dark:bg-amber-400/20 text-[#d4af37] border border-amber-400/40 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
                {isUrdu ? 'براہِ راست اکاؤنٹ تفصیلات' : 'Direct Payment Account'}
              </span>
              <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
                {paymentDetails.platform}
              </h2>
            </div>
          </div>

          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Raast / IBFT 100% Compatible</span>
          </span>
        </div>

        {/* Account Details Box */}
        <div className="grid grid-cols-1 gap-5">
          {/* Account Title */}
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-emerald-300/80 font-medium block">
                {isUrdu ? 'اکاؤنٹ کا نام (Account Title):' : 'Account Title (Recipient Name):'}
              </span>
              <p className="text-lg sm:text-xl font-mono font-bold text-slate-900 dark:text-[#fef3c7] select-all">
                {paymentDetails.title}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(paymentDetails.title, 'title')}
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shrink-0 shadow-xs ${
                copiedField === 'title'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-amber-600 hover:bg-amber-700 text-white'
              }`}
            >
              {copiedField === 'title' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" />
                  <span>{isUrdu ? 'کاپی ہو گیا ✓' : 'Copied ✓'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{isUrdu ? 'ٹائٹل کاپی کریں' : 'Copy Title'}</span>
                </>
              )}
            </button>
          </div>

          {/* IBAN */}
          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-[#0a1813] border-2 border-amber-300 dark:border-[#d4af37]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs text-amber-900 dark:text-amber-300 font-semibold block">
                {isUrdu ? 'بین الاقوامی اکاؤنٹ نمبر (IBAN - 24 Digits):' : 'International Bank Account Number (IBAN):'}
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-mono font-extrabold text-slate-900 dark:text-white tracking-wide select-all break-all">
                {paymentDetails.iban}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(paymentDetails.iban, 'iban')}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition cursor-pointer shrink-0 shadow-md ${
                copiedField === 'iban'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white'
              }`}
            >
              {copiedField === 'iban' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" />
                  <span>{isUrdu ? 'کاپی ہو گیا ✓' : 'Copied ✓'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{isUrdu ? 'IBAN کاپی کریں' : 'Copy IBAN'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2-Step Transfer Instructions */}
        <div className="space-y-4 pt-2">
          <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-[#fef3c7] flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>
              {isUrdu
                ? 'کسی بھی بینکنگ ایپ یا والٹ سے رقم بھیجنے کا آسان طریقہ:'
                : 'How to Transfer via Any Banking App or Wallet:'}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-400">
                <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-mono">1</span>
                <span>{isUrdu ? 'بینک سلیکشن (Bank Select)' : 'Step 1: Select Bank'}</span>
              </div>
              <p className="text-slate-700 dark:text-emerald-100/80 leading-relaxed">
                {isUrdu
                  ? 'اپنی بینک ایپ (UBL, HBL, Meezan, Bank Alfalah, وغیرہ) یا موبائل والٹ (JazzCash, Easypaisa, Nayapay, SadaPay) کھولیں اور "Send Money" میں جا کر "SadaPay" کو بطور ریسیور بینک منتخب کریں۔'
                  : 'Open your banking app (Meezan, HBL, UBL, etc.) or mobile wallet (JazzCash, Easypaisa, SadaPay) and choose "Bank Transfer" -> Select "SadaPay".'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-mono">2</span>
                <span>{isUrdu ? 'IBAN درج کریں اور تصدیق کریں' : 'Step 2: Enter IBAN & Send'}</span>
              </div>
              <p className="text-slate-700 dark:text-emerald-100/80 leading-relaxed">
                {isUrdu
                  ? 'اوپر دیا گیا IBAN درج فرمائیں، ٹائٹل MUSADDAQ FARID TAHIR کی تصدیق کریں اور جتنا بھی نفلی تعاون آپ آسانی سے کر سکتے ہوں بھیج دیں۔'
                  : 'Paste the IBAN (PK23SADA0000003111122125), verify recipient title MUSADDAQ FARID TAHIR, and complete your transfer.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Expense Breakdown (Where your contribution goes) */}
      <section className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            {isUrdu ? 'شفافیت و احتساب' : 'Transparency & Allocation'}
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'آپ کا تعاون کہاں خرچ ہوتا ہے؟' : 'Where Does Your Contribution Go?'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/10 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu text-base' : 'text-sm'}`}>
              {isUrdu ? 'کلاؤڈ سرور و ڈیٹا بیس' : 'Cloud Servers & Fast Bandwidth'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              {isUrdu
                ? 'تیز رفتار ویب ہوسٹنگ، سی ڈی این (CDN)، اور کلاؤڈ ڈیٹا بیس کے ماہانہ اخراجات تاکہ سائٹ ہر وقت ۲۴ گھنٹے آن لائن رہے۔'
                : 'High-speed cloud compute, CDN assets, and reliable databases ensuring 99.9% uptime worldwide.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu text-base' : 'text-sm'}`}>
              {isUrdu ? 'ڈومین و سیکیورٹی سرٹیفکیٹ' : 'Domain & Security Certificates'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              {isUrdu
                ? 'سالانہ ڈومین تجدید، ایس ایس ایل انکرپشن اور سرور پروٹیکشن ٹولز کی ادائیگی۔'
                : 'Annual domain renewals, SSL encryption, and security protections keeping the site safe.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/10 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu text-base' : 'text-sm'}`}>
              {isUrdu ? 'علمی تحقیق و نایاب کتب' : 'Classical Text Preservation'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              {isUrdu
                ? 'کلاسیکی کتبِ اخلاق، احادیث اور دعاؤں کے متون کی تصدیق اور اردو، رومن اور انگریزی میں ڈیجیٹائزیشن۔'
                : 'Continuous verification and digitization of classical Islamic texts and moral traditions.'}
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & Scholarly Disclaimers Box (AdSense & Legal Safe) */}
      <section className="rounded-3xl p-6 sm:p-8 bg-amber-50/70 dark:bg-[#0d1e17] border border-amber-300 dark:border-amber-700/50 space-y-4 text-xs sm:text-sm text-slate-800 dark:text-emerald-100/90 leading-relaxed">
        <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-sm sm:text-base">
          <Info className="w-5 h-5 shrink-0" />
          <span className={isUrdu ? 'font-urdu text-base' : ''}>
            {isUrdu ? 'اہم شرعی و قانونی وضاحت (Disclaimer):' : 'Important Note & Compliance Disclaimer:'}
          </span>
        </div>

        <ul className="space-y-2.5 list-disc list-inside">
          <li>
            {isUrdu
              ? 'اخلاقی باتیں (AkhlaqiBaatein.com) کوئی رجسٹرڈ این جی او (NGO) یا سرکاری ٹرسٹ نہیں ہے، بلکہ یہ ایک نجی تعلیمی و دینی پراجیکٹ ہے۔'
              : 'AkhlaqiBaatein.com is an independent private educational platform, not a registered non-governmental organization (NGO) or charity trust.'}
          </li>
          <li>
            {isUrdu
              ? 'ہم زکوٰۃ کی وصولی کا دعویٰ نہیں کرتے۔ برائے مہربانی اپنا نفلی ہدیہ، صدقہ یا تبرع ہی سائٹ کے انتظامی و سرور اخراجات کے لیے ارسال فرمائیں۔'
              : 'We do not solicit mandatory Zakat. All contributions are treated as voluntary gifts (Hadiya) and optional charity (Nafli Sadqa) dedicated to server hosting and educational costs.'}
          </li>
          <li>
            {isUrdu
              ? 'یہ تمام خدمات ہر صارف کے لیے مکمل طور پر مفت، غیر مشروط اور بغیر کسی تجارتی لالچ کے دستیاب ہیں۔'
              : 'Access to all content, duain, and tools remains 100% free and open to everyone without any paywalls or prerequisites.'}
          </li>
        </ul>
      </section>

      {/* Contact & Confirmation Section */}
      <section className="rounded-3xl p-6 sm:p-8 bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-800/40 text-center space-y-4">
        <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'تعاون کے بعد اطلاع یا تصدیق:' : 'Transfer Confirmation or Feedback:'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-emerald-100/80 max-w-xl mx-auto leading-relaxed">
          {isUrdu
            ? 'اگر آپ رقم ارسال فرمانے کے بعد سکرین شاٹ یا تصدیقی پیغام بھیجنا چاہیں، یا کوئی دعا یا تجویز شامل کروانا چاہیں، تو ہماری سرکاری ای میل پر ارسال فرما سکتے ہیں:'
            : 'If you wish to share a screenshot, note of receipt, or request special prayers, feel free to reach out to our editorial team:'}
        </p>

        <a
          href="mailto:info@akhlaqibaatein.com?subject=AkhlaqiBaatein%20Support%20Confirmation"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm transition shadow-xs"
        >
          <Mail className="w-4 h-4 text-amber-300" />
          <span>info@akhlaqibaatein.com</span>
        </a>

        <p className={`text-xs text-amber-700 dark:text-amber-400 font-semibold pt-2 ${isUrdu ? 'font-urdu text-sm' : ''}`}>
          {isUrdu
            ? 'جَزَاكُمُ اللّٰهُ خَيْرًا وَأَحْسَنَ الْجَزَاءِ فِي الدُّنْيَا وَالْآخِرَةِ'
            : 'Jazakum Allahu Khairan for supporting timeless Islamic wisdom.'}
        </p>
      </section>
    </div>
  );
}
