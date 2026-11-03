'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Target } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const content = {
    ur: {
      badge: 'ہمارا وژن اور عزم',
      title: 'تعارف: ادارہ اخلاقی باتیں',
      subtitle: 'ایک غیر تجارتی اور خالص علمی و فکری کاوش جس کا مقصد نسلِ نو کے دل و دماغ کو اسلامی مکارمِ اخلاق، نبوی آداب اور کلاسیکی دانائی کی خوشبو سے معطر کرنا ہے۔',
      missionHeading: 'ہماری بنیادی تحریک اور پس منظر',
      missionText1: 'موجودہ ڈیجیٹل دور میں جہاں سوشل میڈیا پر معلومات کا طوفان برپا ہے، وہاں باوقار اخلاق، صبر، شکر، بڑوں کا ادب اور حسنِ معاشرت کی اقدار تیزی سے پسِ پشت جا رہی ہیں۔ کتابیں الماریوں کی زینت بن چکی ہیں اور نئی نسل کا رابطہ اپنی روایات سے کمزور ہو رہا ہے۔',
      missionText2: 'اس فکری ضرورت کو محسوس کرتے ہوئے ہم نے "اخلاقی باتیں ڈاٹ کام" کی بنیاد رکھی۔ ہمارا مشن کلاسیکی اخلاقی شاہکاروں جیسے کہ "مخزنِ اخلاق"، اقوالِ خلفائے راشدین، اور جامع احادیثِ مبارکہ کو جدید اور موبائل فرینڈلی شکل میں دنیا بھر کے قارئین تک پہنچانا ہے۔',
      standardsHeading: 'ادارتی معیار اور تحقیق کا طریقہ کار',
      standard1: 'صحت و اسناد: ہم ہر آیت، حدیث اور قول کا اصل حوالہ (کتاب اور باب کے ساتھ) نقل کرنے کے پابند ہیں۔',
      standard2: 'غیر فرقہ وارانہ رویہ: ہمارا پورٹل ہر قسم کے مسلکی تعصب سے پاک، خالصتاً آفاقی اسلامی اخلاقیات اور انسانیت سازی پر مرکوز ہے۔',
      standard3: 'جامع تشریح: ہر قول کے ساتھ تفصیلی اخلاقی فہم اور روزمرہ زندگی کے عملی اسباق پیش کیے جاتے ہیں۔',
    },
    ro: {
      badge: 'Hamara Vision aur Azam',
      title: 'Ta\'aruf: Idara Akhlaqi Baatein',
      subtitle: 'Aik ghair-tijarati aur khalis ilmi koshish jis ka maqsad nasal-e-nau ko Islami akhlaqiat, nabawi aadaab aur classic hikmat se aagah karna hai.',
      missionHeading: 'Hamari Bunyadi Tehreek aur Pas-Manzar',
      missionText1: 'Digital dor mein social media ke bahaao ke darmiyan ba-waqar akhlaq, sabr, shukr aur bhalai ki qadrein peechay reh gayi hain. Naujawan nasal ka rabta kitabon se toot raha hai.',
      missionText2: 'Is zaroorat ke pesh-e-nazar hum ne AkhlaqiBaatein.com shuru kiya. Hamara mission Makhzan-e-Akhlaq, Aqwal-e-Khulafa aur mustanad ahadith ko mobile-friendly andaz mein aam karna hai.',
      standardsHeading: 'Idarati Meyar aur Tehqeeq',
      standard1: 'Sihhat aur Asnad: Har aayat, hadith aur qol ka asal hawala kitab ke sath darj kiya jata hai.',
      standard2: 'Ghair-Firqawarana Rawaiyya: Hamara platform kisi maslaki taasub se paak, aafaqi Islami akhlaq par qayam hai.',
      standard3: 'Jame Tashreeh: Har qol ke sath amli sabaq aur roozmarrah zindagi ke asbaaq diye gaye hain.',
    },
    en: {
      badge: 'Our Vision & Purpose',
      title: 'About AkhlaqiBaatein.com',
      subtitle: 'An independent educational initiative dedicated to reviving classical Islamic virtues, prophetic etiquette, and timeless moral maxims for the modern digital generation.',
      missionHeading: 'Our Background & Core Inspiration',
      missionText1: 'In an era of fleeting digital noise, foundational human virtues such as patience, gratitude, humility, and honest labor are increasingly displaced. Younger generations frequently lose touch with the enduring moral masterpieces of classical Islamic civilization.',
      missionText2: 'AkhlaqiBaatein.com was created to bridge this divide by authenticating, digitizing, and illuminating monumental ethical works such as Makhzan-e-Akhlaq, the maxims of the Rightly Guided Caliphs, and authentic prophetic aphorisms.',
      standardsHeading: 'Editorial Rigor & Verification Standards',
      standard1: 'Authenticity & Sources: Every verse, tradition, and historical saying is meticulously cross-referenced against authentic classical texts.',
      standard2: 'Universal Islamic Ethics: Our platform remains resolutely non-sectarian, focusing entirely upon universal moral character, spiritual purification, and social justice.',
      standard3: 'Actionable Moral Lessons: Beyond mere quotations, each wisdom features practical, real-world applications for daily living.',
    },
  }[language];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Hero Header */}
      <section className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-xl border border-amber-500/30">
        <div className="space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{content.badge}</span>
          </div>

          <h1
            className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-white break-words ${
              isUrdu ? 'font-urdu leading-[2.1]' : 'leading-tight'
            }`}
          >
            {content.title}
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg text-emerald-100/90 break-words ${
              isUrdu ? 'font-urdu leading-[2.2]' : 'leading-relaxed'
            }`}
          >
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Box */}
      <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 sm:space-y-8 text-slate-800 dark:text-slate-200">
        <div className="space-y-4">
          <h2
            className={`text-2xl font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <Target className="w-6 h-6 text-amber-500" />
            <span>{content.missionHeading}</span>
          </h2>

          <p className={isUrdu ? 'font-urdu text-base sm:text-lg leading-[2.3]' : 'text-sm sm:text-base leading-relaxed'}>
            {content.missionText1}
          </p>

          <p className={isUrdu ? 'font-urdu text-base sm:text-lg leading-[2.3]' : 'text-sm sm:text-base leading-relaxed'}>
            {content.missionText2}
          </p>
        </div>

        {/* Editorial Standards */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2
            className={`text-2xl font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            <span>{content.standardsHeading}</span>
          </h2>

          <ul className={`space-y-3 ${isUrdu ? 'font-urdu text-base leading-[2.1]' : 'text-sm sm:text-base leading-relaxed'}`}>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 shrink-0" />
              <span>{content.standard1}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 shrink-0" />
              <span>{content.standard2}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 shrink-0" />
              <span>{content.standard3}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* In-Article AdSlot */}
      <AdSlot position="in-article" />
    </div>
  );
}
