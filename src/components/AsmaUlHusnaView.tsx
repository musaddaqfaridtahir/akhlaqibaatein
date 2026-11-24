'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Info,
  Check,
  Copy,
  Heart,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { asmaUlHusna, AsmaName } from '@/data/asma-ul-husna';

export default function AsmaUlHusnaView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [searchQuery, setSearchQuery] = useState('');
  const [counts, setCounts] = useState<Record<number, number>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Load counts from localStorage on mount
  useEffect(() => {
    try {
      const savedCounts: Record<number, number> = {};
      asmaUlHusna.forEach((item) => {
        const val = localStorage.getItem(`asma_count_${item.id}`);
        if (val) {
          savedCounts[item.id] = parseInt(val, 10) || 0;
        }
      });
      setCounts(savedCounts);
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleIncrement = (id: number) => {
    setCounts((prev) => {
      const nextVal = (prev[id] || 0) + 1;
      try {
        localStorage.setItem(`asma_count_${id}`, nextVal.toString());
      } catch {
        // Ignore
      }
      return { ...prev, [id]: nextVal };
    });
  };

  const handleResetCount = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCounts((prev) => {
      const updated = { ...prev };
      delete updated[id];
      try {
        localStorage.removeItem(`asma_count_${id}`);
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleCopy = (item: AsmaName, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${item.arabic} — ${item.roman} (${item.urdu} / ${item.english})`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredNames = useMemo(() => {
    if (!searchQuery.trim()) return asmaUlHusna;
    const q = searchQuery.toLowerCase().trim();
    return asmaUlHusna.filter(
      (item) =>
        item.arabic.includes(q) ||
        item.urdu.toLowerCase().includes(q) ||
        item.roman.toLowerCase().includes(q) ||
        item.english.toLowerCase().includes(q) ||
        item.id.toString() === q
    );
  }, [searchQuery]);

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
          {isUrdu ? '۹۹ اسمائے حسنیٰ ایکسپلورر' : isRoman ? '99 Names of Allah' : '99 Names of Allah Explorer'}
        </span>
      </nav>

      {/* Hero Card with Sahih Hadith */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#11221c] border-2 border-[#d4af37]/60 p-6 sm:p-8 shadow-2xl text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-amber-300 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>{isUrdu ? 'وَلِلّٰهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا' : 'Asma-ul-Husna (The 99 Beautiful Names of Allah)'}</span>
        </div>

        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-black text-[#fef3c7] ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans'
          }`}
        >
          {isUrdu ? '۹۹ اسمائے حسنیٰ — معانی، فضائل و تسبیح کاؤنٹر' : '99 Names of Allah (Asma-ul-Husna) Explorer'}
        </h1>

        {/* Hadith Quote Box */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#07100d]/90 border border-[#d4af37]/40 p-4 sm:p-5 text-amber-200/95 space-y-2">
          <p className="font-arabic text-base sm:text-xl text-[#fef3c7] leading-[2.2] dir-rtl">
            &quot;إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا مِائَةً إِلاَّ وَاحِدًا مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ&quot;
          </p>
          <p className={`text-xs sm:text-sm text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'رسول اللہ ﷺ نے ارشاد فرمایا: "بے شک اللہ تعالیٰ کے ننانوے نام ہیں یعنی ایک کم سو، جس نے ان کا احصاء کیا (یاد کیا، سمجھا اور ان کے تقاضوں پر عمل کیا) وہ جنت میں داخل ہوگا"۔ (صحیح بخاری: 2736، صحیح مسلم: 2677)'
              : 'The Messenger of Allah ﷺ said: "Indeed, Allah has ninety-nine names, one hundred less one; whoever enumerates them (preserves, understands, and acts upon them) shall enter Paradise." (Sahih al-Bukhari 2736, Sahih Muslim 2677)'}
          </p>
        </div>
      </div>

      {/* Interactive Search Bar & Stats */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative flex-1 w-full">
            <div className="relative flex items-center h-12 shadow-sm rounded-2xl overflow-hidden border border-stone-300 dark:border-emerald-800/80 bg-white dark:bg-[#11221c] focus-within:ring-2 focus-within:ring-[#d4af37] transition">
              <div className="px-3.5 text-emerald-800 dark:text-[#d4af37] shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isUrdu
                    ? 'عربی، اردو، رومن یا انگریزی معنی کے ذریعے تلاش کریں...'
                    : 'Search by Arabic, Urdu, Roman or English meaning...'
                }
                className={`w-full h-full py-0 px-2 text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none ${
                  isUrdu ? 'font-urdu' : ''
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3.5 text-slate-400 hover:text-white shrink-0 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-emerald-300/80 shrink-0">
            <span className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-[#0d221a] border border-emerald-300 dark:border-emerald-700/60">
              {isUrdu
                ? `${filteredNames.length} مبارک نام ظاہر ہیں`
                : `${filteredNames.length} Names Found`}
            </span>
          </div>
        </div>
      </div>

      {/* 99 Names Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNames.map((item) => {
          const userCount = counts[item.id] || 0;
          return (
            <div
              key={item.id}
              className="rounded-3xl p-5 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              {/* Card Top: Number, Transliteration, Copy */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-[#07130f] border border-[#d4af37]/50 text-[#d4af37] text-xs font-black flex items-center justify-center font-mono">
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-extrabold text-slate-800 dark:text-white font-sans tracking-wide">
                    {item.roman}
                  </span>
                </div>

                <button
                  onClick={(e) => handleCopy(item, e)}
                  title="Copy details"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 transition cursor-pointer"
                >
                  {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Central Arabic Calligraphy Display */}
              <div className="text-center py-2 space-y-2">
                <p className="font-arabic text-3xl sm:text-4xl text-emerald-800 dark:text-[#fef3c7] leading-[2.4] font-bold tracking-normal group-hover:scale-105 transition-transform duration-200">
                  {item.arabic}
                </p>
                <p className={`text-sm sm:text-base font-bold text-slate-900 dark:text-emerald-100 ${isUrdu ? 'font-urdu leading-relaxed' : ''}`}>
                  {isUrdu ? item.urdu : item.english}
                </p>
                {isUrdu && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                    {item.english}
                  </p>
                )}
              </div>

              {/* Spiritual Reflection / Fazilat */}
              <div className="p-3 rounded-2xl bg-stone-50 dark:bg-[#07130f] border border-stone-200 dark:border-emerald-900/40 text-[11px] sm:text-xs text-slate-600 dark:text-emerald-200/90 leading-relaxed">
                <p className={isUrdu ? 'font-urdu leading-normal' : ''}>
                  {isUrdu ? item.reflectionUrdu : item.reflectionEnglish}
                </p>
              </div>

              {/* Built-in Tap Counter */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-800/10 hover:bg-emerald-800/20 dark:bg-emerald-900/30 dark:hover:bg-emerald-800/50 text-emerald-800 dark:text-amber-300 border border-emerald-300 dark:border-[#d4af37]/40 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{isUrdu ? 'تسبیح پڑھیں (+1)' : 'Count Zikr (+1)'}</span>
                </button>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="min-w-8 text-center px-2 py-1 rounded-lg bg-stone-100 dark:bg-[#07130f] text-slate-900 dark:text-[#fef3c7] font-mono text-xs font-bold border border-stone-200 dark:border-stone-800">
                    {userCount}
                  </span>
                  {userCount > 0 && (
                    <button
                      onClick={(e) => handleResetCount(item.id, e)}
                      title={isUrdu ? 'ری سیٹ کریں' : 'Reset'}
                      className="p-1 rounded-lg text-stone-400 hover:text-red-400 transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scholarly Article on Asma-ul-Husna */}
      <section className="bg-stone-50 dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#d4af37]" />
          <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'اسمائے حسنیٰ کا شرعی مقام، فضیلت اور احصاء کا مفہوم' : 'Spiritual Significance of the 99 Names of Allah'}
          </h3>
        </div>

        <div className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 leading-relaxed space-y-3 ${isUrdu ? 'font-urdu text-sm sm:text-base leading-[2.0]' : ''}`}>
          <p>
            {isUrdu ? (
              <>
                قرآنِ کریم میں اللہ رب العزت نے اپنے پاک ناموں کے متعلق سورۃ الاعراف (آیت ۱۸۰) میں ارشاد فرمایا: <em>&quot;اور اچھے اچھے نام اللہ ہی کے ہیں، سو ان ناموں کے ساتھ اس کو پکارو&quot;</em>۔ حدیثِ نبوی ﷺ میں ننانوے ناموں کو یاد کرنے والے کے لیے جنت کی عظیم بشارت وارد ہوئی ہے۔ علمائے امت اور شارحینِ حدیث (جیسے امام خطابی، امام غزالی اور حافظ ابن حجرؒ) نے صراحت فرمائی ہے کہ حدیث کے لفظ <strong>&quot;أَحْصَاهَا&quot;</strong> کے تین بنیادی درجات ہیں: پہلا درجہ ان ناموں اور ان کے معانی کو یاد کرنا؛ دوسرا درجہ ان صفاتِ الٰہی پر پختہ یقین رکھنا؛ اور تیسرا درجہ ان کے تقاضوں کے مطابق اپنی عملی زندگی کو سنوارنا۔
              </>
            ) : isRoman ? (
              <>
                Quran Majeed (Surah Al-Araf: 180) mein irshad hai: <em>&quot;Aur achhe achhe naam Allah hi ke hain, so unhi naamon se Usko pukaro&quot;</em>. Sahih Hadith ke mutabiq 99 Asma-ul-Husna ka ihsa karne wale ke liye jannat ki basharat hai. Ulema ne farmaya ke ihsa ke 3 darjaat hain: naamon ko yaad karna, unke maani ko samajhna, aur unke taqazay ke mutabiq zindagi basar karna.
              </>
            ) : (
              <>
                The Holy Quran commands: <em>&quot;And to Allah belong the best names, so invoke Him by them&quot;</em> (Surah Al-A&apos;raf: 180). Classical commentators like Imam al-Ghazali and Ibn Hajar explain that the Prophetic phrase <strong>&quot;man ahsaha&quot;</strong> signifies three profound levels: committing the names and their definitions to memory, deeply comprehending their theological realities, and actively embodying their moral imperatives (such as manifesting mercy, generosity, and justice) in daily human conduct.
              </>
            )}
          </p>
          <p>
            {isUrdu ? (
              <>
                مثلاً جب بندہ اللہ تعالیٰ کے نام <strong>الرَّحِيمُ</strong> کا ذکر کرتا ہے تو اس کے دل میں مخلوقِ خدا پر رحم کرنے کا جذبہ پیدا ہونا چاہیے؛ جب <strong>الْكَرِيمُ</strong> کو یاد کرے تو سخاوت اختیار کرے؛ اور جب <strong>الْعَفُوُّ</strong> کو پکارے تو لوگوں کی خطاؤں کو معاف کرنے کی عادت ڈالے۔ اس طرح اسمائے حسنیٰ نہ صرف بندگی کا بہترین زبانی وظیفہ ہیں بلکہ انسان کی اخلاقی و روحانی تربیت کا سب سے کامل دستور ہیں۔
              </>
            ) : isRoman ? (
              <>
                Misaal ke taur par jab banda Allah ke naam Ar-Raheem ka zikr kare to uske dil mein makhlooq par reham ka jazba aana chahiye, Al-Kareem se sakhawat aur Al-Afuww se logon ko maaf karne ki aadat apnani chahiye. Asma-ul-Husna roohani aur akhlaqi tarbiyat ka azeem tareen zariya hain.
              </>
            ) : (
              <>
                Contemplating divine names transforms character: invoking Ar-Raheem inspires compassion toward all creatures; meditating on Al-Kareem cultivates open-handed generosity; and calling upon Al-Afuww instills the virtue of pardoning those who wrong us. Thus, Asma-ul-Husna is both profound devotional remembrance and a transformative moral blueprint.
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
                ? 'کیا اللہ تعالیٰ کے اسمائے مبارکہ صرف ۹۹ تک ہی محدود ہیں؟'
                : 'Are Allah’s names restricted exclusively to ninety-nine?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'نہیں! جمہور علمائے امت کے نزدیک اللہ تعالیٰ کے نام اور صفات لامحدود ہیں۔ حدیث میں ننانوے ناموں کی تخصیص کا مطلب یہ ہے کہ ان ۹۹ خاص ناموں کو یاد کرنے اور سمجھنے پر جنت کی خصوصی بشارت ہے، جیسا کہ صحیح حدیث میں آتا ہے: "یا اللہ! میں تیرے ان تمام ناموں کے واسطے سے مانگتا ہوں جو تو نے اپنے علمِ غیب میں مخفی رکھے ہیں" (مسند احمد: 3712)۔'
                : 'No. The majority of scholars affirm that Allah’s divine names and attributes are infinite. The Prophetic mention of ninety-nine specifies a special group associated with the promise of Paradise upon enumeration, as evidenced by the authentic supplication: "...or which You kept concealed in the knowledge of the unseen with You" (Musnad Ahmad 3712).'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'اسمائے حسنیٰ کے ذریعے دعا مانگنے کا شرعی طریقہ کیا ہے؟'
                : 'What is the recommended method of supplicating through Asma-ul-Husna?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'بہترین طریقہ یہ ہے کہ اپنی حاجت کے مطابق مناسب اسمِ الٰہی کا واسطہ دیا جائے۔ مثلاً مغفرت کے لیے "یا غفور، یا غفار، اغفر لی"، رزق میں وسعت کے لیے "یا رزاق، یا وہاب، ارزقنی"، اور بیماری سے شفاء کے لیے "یا شافی، یا حی یا قیوم اشفنی" کہہ کر دعا مانگی جائے۔'
                : 'The most effective method is aligning your petition with the appropriate divine attribute: for forgiveness, invoke "Ya Ghaffar, Ya Ghafoor"; for sustenance, call upon "Ya Razzaq, Ya Wahhab"; and for health and recovery, invoke "Ya Shafi, Ya Hayyu Ya Qayyum".'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'کیا غیر عربی بولنے والے کے لیے اردو یا انگریزی میں اسمائے حسنیٰ کو سمجھنا احصاء میں شامل ہے؟'
                : 'Does understanding Asma-ul-Husna in Urdu or English count toward "Ahsaha"?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'جی ہاں! اصل مقصد اللہ تعالیٰ کی معرفت، دل میں تعظیم اور عمل کی اصلاح ہے۔ اگر کوئی شخص اپنی مادری زبان میں ان کے معانی سمجھ کر اللہ کو پکارتا ہے اور ان پر یقین رکھتا ہے تو وہ ان شاء اللہ حدیث کی بشارت کا مستحق ہوگا۔'
                : 'Yes! The fundamental objective is knowing Allah, revering Him with conviction, and transforming one’s character. Anyone who learns and contemplates their meanings in their native tongue with sincere faith qualifies for the Prophetic promise, insha’Allah.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
