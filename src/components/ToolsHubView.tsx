'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  Clock,
  Coins,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ToolsHubView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const tools = [
    {
      id: 'qaza-namaz',
      href: '/tools/qaza-namaz-calculator',
      icon: Clock,
      title: {
        ur: 'قضا نماز کیلکولیٹر و ٹریکر چارٹ',
        ro: 'Qaza Namaz Calculator & Tracker',
        en: 'Qaza Namaz Calculator & Printable Tracker',
      },
      desc: {
        ur: 'زندگی بھر کی چھوٹی ہوئی نمازوں کا درست تخمینہ لگائیں، روزانہ قضا کا ہدف طے کریں اور اخلاقی باتیں برانڈڈ پرنٹ ایبل ٹریکر چارٹ حاصل کریں۔',
        ro: 'Zindagi ki qaza namazon ka hisab lagayein, daily target set karein aur free printable tracker chart download karein.',
        en: 'Calculate your lifetime missed prayers (Fajr to Witr), set manageable daily targets, and download a printable watermarked tracker chart.',
      },
      badge: {
        ur: 'مفت پرنٹ ایبل چارٹ',
        ro: 'Free Printable',
        en: 'Printable Chart',
      },
      gradient: 'from-emerald-950 via-[#0d221a] to-[#07130f]',
      borderColor: 'border-[#d4af37]/50',
    },
    {
      id: 'zakat-calculator',
      href: '/tools/zakat-calculator',
      icon: Coins,
      title: {
        ur: 'جامع زکوٰۃ کیلکولیٹر (نصاب گائیڈ)',
        ro: 'Zakat Calculator (Nisab Guide)',
        en: 'Accurate Zakat Calculator & Nisab Guide',
      },
      desc: {
        ur: 'سونے، چاندی، نقدی، تجارتی مال اور شیئرز پر 2.5% زکوٰۃ کا شرعی حساب۔ پانچ بین الاقوامی کرنسیوں (PKR, USD, SAR, AED, GBP) میں۔',
        ro: 'Sona, chandi, cash aur business maal par 2.5% zakat ka exact sharai hisab 5 international currencies mein.',
        en: 'Calculate exact 2.5% Zakat on Gold, Silver, Cash, Inventory, and Receivables minus immediate debts across PKR, USD, SAR, AED, and GBP.',
      },
      badge: {
        ur: 'شرعی تحقیق شدہ',
        ro: 'Fiqhi Verified',
        en: 'Fiqh Verified',
      },
      gradient: 'from-[#1a1506] via-[#241c09] to-[#0d0f0a]',
      borderColor: 'border-amber-400/50',
    },
  ];

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-10">
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
        <span className="text-slate-900 dark:text-white font-bold">
          {isUrdu ? 'اسلامی ٹولز و کیلکولیٹرز' : isRoman ? 'Islamic Tools & Calculators' : 'Islamic Tools & Calculators'}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-[#d4af37] border border-[#d4af37]/40 text-xs sm:text-sm font-bold shadow-xs">
          <Calculator className="w-4 h-4 text-[#d4af37]" />
          <span>{isUrdu ? 'مستند شرعی سہولیات و ڈیجیٹل آلات' : 'Islamic Utilities & Free Calculators'}</span>
        </div>
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#fef3c7] ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans tracking-tight'
          }`}
        >
          {isUrdu
            ? 'اسلامی کیلکولیٹرز و ڈیجیٹل ٹولز'
            : isRoman
            ? 'Islami Calculators aur Digital Tools'
            : 'Islamic Calculators & Digital Utilities'}
        </h1>
        <p
          className={`text-sm sm:text-base text-slate-600 dark:text-emerald-100/80 max-w-2xl mx-auto ${
            isUrdu ? 'font-urdu leading-[1.9]' : 'font-sans'
          }`}
        >
          {isUrdu
            ? 'اپنی قضا نمازوں کا تخمینہ لگائیں، زکوٰۃ کا مستند حساب کریں، یا اپنے نام کے ساتھ خوبصورت 9:16 واٹس ایپ اسٹیٹس کارڈ ڈاؤن لوڈ کریں۔'
            : 'Estimate missed prayers, compute accurate Zakat on your assets, or generate custom-named 9:16 HD WhatsApp status cards.'}
        </p>
      </header>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className={`group relative overflow-hidden rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#11221c] border-2 ${tool.borderColor} shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800/10 dark:bg-[#07130f] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-900 dark:text-[#d4af37] border border-amber-500/30 ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}>
                    {tool.badge[language] || tool.badge.ur}
                  </span>
                </div>

                <h2
                  className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#d4af37] transition-colors ${
                    isUrdu ? 'font-urdu leading-[1.8]' : 'font-sans'
                  }`}
                >
                  {tool.title[language] || tool.title.ur}
                </h2>

                <p
                  className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-100/80 ${
                    isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans leading-relaxed'
                  }`}
                >
                  {tool.desc[language] || tool.desc.ur}
                </p>
              </div>

              <div
                className={`mt-6 pt-4 border-t border-stone-200 dark:border-emerald-800/50 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-800 dark:text-[#d4af37] ${
                  isUrdu ? 'font-urdu' : 'font-sans'
                }`}
              >
                <span>{isUrdu ? 'ٹول استعمال کریں' : isRoman ? 'Tool Use Karein' : 'Open Tool'}</span>
                {isUrdu ? (
                  <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Scholarly Assurance Banner */}
      <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#040907] border border-[#d4af37]/40 text-white space-y-4 shadow-lg">
        <div className="flex items-center gap-2 text-[#d4af37]">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <h3 className={`text-base sm:text-lg font-bold ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
            {isUrdu ? 'علمی و شرعی تصدیق کا معیار' : 'Scholarly Verification & Reliability'}
          </h3>
        </div>
        <p className={`text-xs sm:text-sm text-emerald-100/90 ${isUrdu ? 'font-urdu leading-[1.9]' : 'font-sans'}`}>
          {isUrdu
            ? 'اخلاقی باتیں کے تمام اسلامی آلات و کیلکولیٹرز کو جمہور فقہاء اور معتبر دارالافتاء کے اصولوں کے عین مطابق ڈیزائن کیا گیا ہے۔ قضا نمازوں کی ترتیب اور زکوٰۃ کے نصاب میں احتیاط کے پہلو کو مقدم رکھا گیا ہے۔'
            : 'All AkhlaqiBaatein digital calculators are constructed in strict alignment with orthodox Islamic jurisprudence and reviewed against verified Fiqh standards.'}
        </p>
      </section>
    </div>
  );
}
