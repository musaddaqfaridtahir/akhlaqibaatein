'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  Clock,
  Coins,
  Calendar,
  Sparkles,
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
      href: isUrdu ? '/tools/qaza-namaz-calculator' : isRoman ? '/roman/tools/qaza-namaz-calculator' : '/en/tools/qaza-namaz-calculator',
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
      href: isUrdu ? '/tools/zakat-calculator' : isRoman ? '/roman/tools/zakat-calculator' : '/en/tools/zakat-calculator',
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
    {
      id: 'hijri-date-converter',
      href: isUrdu ? '/tools/hijri-date-converter' : isRoman ? '/roman/tools/hijri-date-converter' : '/en/tools/hijri-date-converter',
      icon: Calendar,
      title: {
        ur: 'ہجری و عیسوی تاریخ کنورٹر و کاؤنٹ ڈاؤن',
        ro: 'Hijri Date Converter & Events Countdown',
        en: 'Hijri Date Converter & Events Countdown',
      },
      desc: {
        ur: 'آج کی مصدقہ ہجری تاریخ، دو طرفہ عیسوی و ہجری کنورٹر، رویتِ ہلال مطابقت، اور رمضان و عیدین کا لائیو کاؤنٹ ڈاؤن۔',
        ro: 'Aaj ki Hijri date, two-way solar-lunar converter, chaand ka farq aur Ramadan o Eid ka live countdown.',
        en: 'Today’s verified Hijri date, two-way solar-lunar converter with moon sighting adjustment, and live countdowns to Ramadan and Eid.',
      },
      badge: {
        ur: 'لائیو کاؤنٹ ڈاؤن',
        ro: 'Live Countdown',
        en: 'Live Countdown',
      },
      gradient: 'from-[#0b1624] via-[#07130f] to-[#0d221a]',
      borderColor: 'border-cyan-600/50',
    },
    {
      id: 'namaz-timings',
      href: isUrdu ? '/tools/namaz-timings' : isRoman ? '/roman/tools/namaz-timings' : '/en/tools/namaz-timings',
      icon: Clock,
      title: {
        ur: 'نماز کے اوقات و اگلی نماز کا کاؤنٹ ڈاؤن',
        ro: 'Namaz Timings & Next Salah Countdown',
        en: 'Accurate Namaz Timings & Salah Countdown',
      },
      desc: {
        ur: 'پاکستان کے تمام بڑے شہروں اور دنیا بھر کے لیے فجر تا عشاء درست اوقات، حنفی و شافعی طریقہ اور اگلی نماز کا لائیو کاؤنٹ ڈاؤن۔',
        ro: 'Pakistan aur international shehron ke liye accurate Namaz timings, Hanafi o Shafii method aur agli namaz ka live timer.',
        en: 'Daily accurate prayer times for Pakistani and global diaspora cities with Hanafi/Shafi’i Asr toggle and live next prayer countdown.',
      },
      badge: {
        ur: 'جی پی ایس و مسلک سپورٹ',
        ro: 'GPS & Juristic',
        en: 'GPS & Juristic',
      },
      gradient: 'from-emerald-950 via-[#11221c] to-[#07130f]',
      borderColor: 'border-[#d4af37]/60',
    },
    {
      id: 'asma-ul-husna',
      href: isUrdu ? '/tools/asma-ul-husna' : isRoman ? '/roman/tools/asma-ul-husna' : '/en/tools/asma-ul-husna',
      icon: Sparkles,
      title: {
        ur: '۹۹ اسمائے حسنیٰ (تسبیح کاؤنٹر کے ساتھ)',
        ro: '99 Names of Allah Explorer & Counter',
        en: '99 Names of Allah Explorer & Counter',
      },
      desc: {
        ur: 'اللہ تعالیٰ کے ننانوے مبارک نام عربی خطِ نسخ، اردو و انگریزی معانی، روحانی اثرات اور بلٹ ان ٹیپ تسبیح کاؤنٹر کے ساتھ۔',
        ro: 'Allah Taala ke 99 Asma-e-Husna Arabic calligraphy, Urdu o English tarjuma aur built-in tap tasbeeh counter.',
        en: 'Explore the 99 Beautiful Names of Allah in Arabic Naskh with Urdu and English meanings, spiritual reflections, and interactive tap counter.',
      },
      badge: {
        ur: 'بلٹ ان تسبیح کاؤنٹر',
        ro: 'Tap Counter',
        en: 'Tap Counter',
      },
      gradient: 'from-[#1a1506] via-[#11221c] to-[#07130f]',
      borderColor: 'border-amber-400/50',
    },
    {
      id: 'fidya-kaffara-calculator',
      href: isUrdu ? '/tools/fidya-kaffara-calculator' : isRoman ? '/roman/tools/fidya-kaffara-calculator' : '/en/tools/fidya-kaffara-calculator',
      icon: Coins,
      title: {
        ur: 'فدیہ، کفارہ و صدقۂ فطر کیلکولیٹر',
        ro: 'Fidya, Kaffara & Fitrana Calculator',
        en: 'Fidya, Kaffara & Sadqa-e-Fitr Calculator',
      },
      desc: {
        ur: 'گندم، جو، کھجور اور کشمش کے شرعی اوزان پر صدقۂ فطر، قضاء روزوں کا فدیہ اور قسم و روزے کے کفارے کا دقیق حساب ۵ بین الاقوامی کرنسیوں میں۔',
        ro: 'Fitrana, roza fidya aur qasam o roza kaffara ka accurate sharai hisab gandam, jau aur khajoor ke meyar par 5 currencies mein.',
        en: 'Calculate Sadqa-e-Fitr, missed fasts Fidya, and Kaffara for broken oaths or fasts based on wheat, barley, dates, and raisins across 5 currencies.',
      },
      badge: {
        ur: '۵ بین الاقوامی کرنسیاں',
        ro: '5 Currencies',
        en: '5 Currencies',
      },
      gradient: 'from-[#1c0f0a] via-[#241c09] to-[#07130f]',
      borderColor: 'border-amber-500/50',
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
