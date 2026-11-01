import React from 'react';
import type { Metadata } from 'next';
import { Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { chahalHadithList } from '@/data/chahalHadith';
import ChahalHadithTracker from '@/components/ChahalHadithTracker';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'چَہل حدیث (40 Hadith) حفظ ٹریکر | AkhlaqiBaatein.com',
  description:
    'رسول اللہ ﷺ کی چالیس جامع، مختصر اور مستند احادیثِ مبارکہ (اربعین) کا حفظ ٹریکر۔ عربی متن، اردو ترجمہ، رومن اردو اور مختصر اخلاقی سبق کے ساتھ۔',
  keywords: [
    'Chahal Hadith',
    '40 Hadith Urdu',
    '40 Hadith Roman Urdu',
    'Arbaeen Hadith',
    'Hadith Memorization Tracker',
    'چل حدیث',
    'احادیث مبارکہ',
  ],
  alternates: {
    canonical: 'https://akhlaqibaatein.com/chahal-hadith',
  },
};

export default function ChahalHadithPage() {
  return (
    <div className="space-y-12">
      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Header Introduction */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-semibold border border-amber-500/30">
          <Award className="w-4 h-4 text-amber-500" />
          <span>اربعینِ اخلاق و حکمت (40 Hadith Memorization Portal)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-urdu leading-[2.1] text-slate-900 dark:text-white">
          چَہل حدیث: چالیس سنہری احادیثِ مبارکہ
        </h1>

        <p className="font-urdu text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-[2.2]">
          مختصر، جامع اور مستند نبوی ارشادات جو ہر مسلمان کے لیے حفظ کرنا اور اپنی روزمرہ زندگی میں اپنانا نہایت آسان ہے۔ اپنے حفظ کی پیش رفت کو نشان زد کریں اور دوسروں کے ساتھ شیئر کریں۔
        </p>
      </section>

      {/* Interactive Tracker Component with localStorage & Canvas status */}
      <ChahalHadithTracker hadithList={chahalHadithList} />

      {/* AdSlot */}
      <AdSlot position="in-article" />
    </div>
  );
}
