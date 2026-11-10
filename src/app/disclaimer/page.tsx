import React from 'react';
import type { Metadata } from 'next';
import { AlertCircle, BookOpen, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer (اعلانِ لاتعلقی و علمی وضاحت)',
  description:
    'Islamic, religious, and educational content disclaimer for AkhlaqiBaatein.com.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-xl border border-amber-500/30">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Religious & Educational Disclaimer</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-urdu leading-[2.1] break-words">
            علمی و اخلاقی وضاحت (Disclaimer)
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200">
            Last Updated: October 2026 &bull; AkhlaqiBaatein.com
          </p>
        </div>
      </header>

      <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white dark:bg-[#11221c] border border-slate-200/80 dark:border-emerald-800/60 shadow-xl space-y-8 text-slate-800 dark:text-[#f0fdf4] text-sm leading-relaxed">
        {/* Scholarly Credit Box */}
        <div className="p-4 sm:p-6 rounded-2xl bg-emerald-50/80 dark:bg-[#0d1b16] border border-emerald-200 dark:border-emerald-700/50 space-y-2">
          <div className="flex items-center gap-2 text-emerald-950 dark:text-emerald-300 font-bold text-sm sm:text-base">
            <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="font-urdu">
              علمی مآخذ و کتبِ استفادہ (Scholarly Reference)
            </span>
          </div>
          <p className="font-urdu leading-[2.2] text-slate-800 dark:text-emerald-100/90 text-base">
            اس پلیٹ فارم کے اخلاقی مضامین و انتخاب میں مستند کتبِ تفسیر و حدیث، نہج البلاغہ، حلیۃ الاولیاء اور کلاسیکی اخلاقی تالیف ’مخزنِ اخلاق‘ سے استفادہ کیا گیا ہے۔
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-urdu">
            1. اخلاقی و دعوتی حیثیت (Educational & Moral Nature)
          </h2>
          <p className="font-urdu leading-[2.2] text-slate-700 dark:text-slate-300 text-base">
            <strong>اخلاقی باتیں ڈاٹ کام (AkhlaqiBaatein.com)</strong> کوئی دارالافتاء یا شرعی عدالت نہیں ہے۔ اس پورٹل پر پیش کیے جانے والے مضامین، اقوال، اور تفاسیر کا مقصد صرف اخلاقی بیداری، اسلامی تاریخ سے آگاہی، اور حسنِ اخلاق کی ترویج ہے۔ کسی بھی مخصوص فقہی مسئلے، قانونی یا ذاتی شرعی فیصلے کے لیے اپنے معتمد مقامی علماء کرام اور مستند دارالافتاء سے براہِ راست رجوع فرمائیں۔
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-urdu">
            2. احادیث و اسناد کی تحقیق (Hadith Authentication Policy)
          </h2>
          <p className="font-urdu leading-[2.2] text-slate-700 dark:text-slate-300 text-base">
            ہم احادیث اور تاریخی اقوال نقل کرتے وقت ائمہ محدثین کی کتب (جیسے صحیح بخاری، صحیح مسلم، سنن اربعہ اور مخزنِ اخلاق) سے مکمل حوالہ نقل کرنے کی ہر ممکن کوشش کرتے ہیں۔ اگر کسی جگہ ترجمے، املاء یا حوالہ میں کوئی نادانستہ غلطی نظر آئے تو ہم سے رابطہ فرما کر تصحیح فرمائیں، ہم فوری تحقیق کے بعد اصلاح کے پابند ہیں۔
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. Third-Party Links & Ads
          </h2>
          <p>
            AkhlaqiBaatein.com may contain links to external websites and advertisements delivered by Google AdSense and other advertising networks. We do not endorse or take responsibility for the content, privacy practices, or accuracy of third-party external websites.
          </p>
        </div>
      </section>
    </div>
  );
}
