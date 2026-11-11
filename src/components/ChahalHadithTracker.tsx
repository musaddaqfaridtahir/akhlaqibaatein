'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Circle,
  Sparkles,
  Copy,
  Download,
  Award,
  Search,
} from 'lucide-react';
import { ChahalHadithItem } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import {
  getHadithText,
  getHadithTashreeh,
  getHadithRef,
  getHadithTheme,
} from '@/data/chahalHadith';
import StatusImageModal from './StatusImageModal';
import { CanvasData } from '@/lib/canvasGenerator';

interface ChahalHadithTrackerProps {
  hadithList: ChahalHadithItem[];
}

export default function ChahalHadithTracker({
  hadithList,
}: ChahalHadithTrackerProps) {
  const [memorizedIds, setMemorizedIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [activeModalData, setActiveModalData] = useState<CanvasData | null>(null);

  const { language, t, showToast } = useLanguage();
  const isUrdu = language === 'ur';

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ab_memorized_hadith');
      if (saved) {
        setMemorizedIds(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const toggleMemorized = (id: number) => {
    let next: number[];
    if (memorizedIds.includes(id)) {
      next = memorizedIds.filter((item) => item !== id);
      showToast(
        isUrdu
          ? `حدیث نمبر ${id} کو زیرِ مطالعہ فہرست میں شامل کر دیا گیا۔`
          : `Hadith #${id} updated.`
      );
    } else {
      next = [...memorizedIds, id];
      showToast(
        isUrdu
          ? `ماشاءاللہ! حدیث نمبر ${id} حفظ مکمل!`
          : language === 'ro'
          ? `Masha'Allah! Hadith #${id} hifz mukammal!`
          : `Masha'Allah! Hadith #${id} marked as memorized!`
      );
    }
    setMemorizedIds(next);
    localStorage.setItem('ab_memorized_hadith', JSON.stringify(next));
  };

  const themes = ['All', ...Array.from(new Set(hadithList.map((h) => getHadithTheme(h, language))))];

  const filteredList = hadithList.filter((item) => {
    const itemTheme = getHadithTheme(item, language);
    if (selectedTheme !== 'All' && itemTheme !== selectedTheme) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchArabic = item.arabic.includes(searchTerm.trim());
      const matchText = getHadithText(item, language).toLowerCase().includes(q);
      const matchTashreeh = getHadithTashreeh(item, language).toLowerCase().includes(q);
      const matchRef = getHadithRef(item, language).toLowerCase().includes(q);
      if (!matchArabic && !matchText && !matchTashreeh && !matchRef) {
        return false;
      }
    }
    return true;
  });

  const totalCount = hadithList.length;
  const memorizedCount = memorizedIds.length;
  const progressPercent = Math.round((memorizedCount / totalCount) * 100);

  const handleCopyHadith = (h: ChahalHadithItem) => {
    const text = getHadithText(h, language);
    const ref = getHadithRef(h, language);
    const textToCopy = `#${h.id}\n\n${h.arabic}\n\n${text}\n\n${t.sourceHeading} ${ref}\n\nhttps://akhlaqibaatein.com/chahal-hadith`;
    navigator.clipboard.writeText(textToCopy);
    showToast(t.copiedBtn);
  };

  return (
    <div className="w-full space-y-8">
      {/* Memorization Progress Dashboard Box */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/30 dark:from-emerald-900 dark:via-emerald-950 dark:to-slate-950 text-slate-900 dark:text-white shadow-md dark:shadow-xl border border-stone-200/90 dark:border-amber-500/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-amber-500/20 text-emerald-900 dark:text-amber-300 text-xs font-semibold border border-emerald-200 dark:border-amber-500/30">
              <Award className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
              <span className={isUrdu ? 'font-urdu' : ''}>{t.arbaeenTitle}</span>
            </div>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold leading-[1.8] ${isUrdu ? 'font-urdu' : ''}`}>
              {t.memorizationProgress} {memorizedCount} / {totalCount}
            </h2>
            <p className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-200/90 max-w-xl ${isUrdu ? 'font-urdu leading-[1.85]' : ''}`}>
              {t.arbaeenSubtitle}
            </p>
          </div>

          {/* Progress Circular Badge */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-emerald-50 dark:bg-white/10 text-emerald-950 dark:text-white border border-emerald-200 dark:border-white/10 shrink-0 min-w-[150px]">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400">
              {progressPercent}%
            </span>
            <span className={`text-xs text-emerald-200 mt-1 ${isUrdu ? 'font-urdu' : ''}`}>
              {t.memorized}
            </span>
            <span className="text-[11px] text-slate-300">
              {memorizedCount} / {totalCount}
            </span>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="mt-6 w-full bg-emerald-950/80 rounded-full h-3 p-0.5 border border-emerald-700/50">
          <div
            className="bg-gradient-to-r from-amber-500 to-amber-300 h-2 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${Math.max(progressPercent, 2)}%` }}
          />
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchHadithPlaceholder}
            className={`w-full h-12 pl-10 pr-4 rounded-xl text-base bg-white dark:bg-slate-900 border border-stone-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          />
        </div>

        {/* Theme Pills (Swipeable on Mobile) */}
        <div className="w-full sm:w-auto overflow-hidden">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
            {themes.map((themeName) => (
              <button
                key={themeName}
                onClick={() => setSelectedTheme(themeName)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition shrink-0 ${
                  isUrdu ? 'font-urdu leading-none pt-2' : ''
                } ${
                  selectedTheme === themeName
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-300 dark:border-slate-700 hover:border-emerald-700 hover:text-emerald-800'
                }`}
              >
                {themeName === 'All' ? t.allPill : themeName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hadith Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredList.map((hadith) => {
          const isMemorized = memorizedIds.includes(hadith.id);
          const hadithText = getHadithText(hadith, language);
          const hadithTashreeh = getHadithTashreeh(hadith, language);
          const hadithRef = getHadithRef(hadith, language);
          const hadithTheme = getHadithTheme(hadith, language);

          return (
            <article
              key={hadith.id}
              className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                isMemorized
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                  : 'bg-white dark:bg-[#11221c] border-stone-200/90 dark:border-emerald-800/60 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Top Bar with Number & Memorized Checkbox */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-emerald-900 text-amber-300 text-xs font-bold flex items-center justify-center">
                  #{hadith.id}
                </span>

                <button
                  onClick={() => toggleMemorized(hadith.id)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition active:scale-95 ${
                    isUrdu ? 'font-urdu' : ''
                  } ${
                    isMemorized
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border border-stone-200 dark:border-slate-700'
                  }`}
                  aria-label="Toggle Memorized"
                >
                  {isMemorized ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-amber-300" />
                      <span>{t.memorized}</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-slate-400" />
                      <span>{t.markMemorized}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Arabic Sacred Text */}
              <div className="py-2 border-b border-dashed border-stone-200 dark:border-slate-800">
                <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-emerald-950 dark:text-emerald-300 font-semibold leading-[2.0] sm:leading-[2.2]">
                  {hadith.arabic}
                </p>
              </div>

              {/* Strictly Isolated Language Translation */}
              <div className="pt-3">
                <p
                  className={`text-slate-900 dark:text-slate-50 font-normal sm:font-medium ${
                    isUrdu
                      ? 'font-urdu text-base sm:text-lg md:text-xl leading-[1.85] sm:leading-[2.1]'
                      : 'text-sm sm:text-base italic leading-relaxed'
                  }`}
                >
                  {isUrdu ? hadithText : `“${hadithText}”`}
                </p>
              </div>

              {/* Short Moral Lesson */}
              <div
                className={`mt-3 p-3 sm:p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-slate-800/60 border-s-4 border-emerald-700 dark:border-emerald-500 border border-emerald-100 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 ${
                  isUrdu ? 'font-urdu text-xs sm:text-sm leading-[1.85] sm:leading-[1.95]' : 'leading-relaxed'
                }`}
              >
                <strong className="text-emerald-900 dark:text-emerald-400">
                  {t.amliSabaqHeading}{' '}
                </strong>
                {hadithTashreeh}
              </div>

              {/* Reference & Actions Bar */}
              <div className="pt-3.5 mt-4 border-t border-stone-200 dark:border-slate-800/80 flex items-center justify-between gap-2.5 flex-wrap text-xs">
                <span className={`text-xs text-slate-600 dark:text-slate-400 truncate ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.sourceHeading} {hadithRef}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyHadith(hadith)}
                    className="min-h-[40px] min-w-[40px] px-3 py-2 rounded-xl bg-stone-100 hover:bg-emerald-800 text-slate-800 hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-stone-300 dark:border-slate-700 transition flex items-center justify-center active:scale-95"
                    title={t.copyBtn}
                    aria-label={t.copyBtn}
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveModalData({
                        text: hadithText,
                        explanation: hadithTashreeh,
                        author: isUrdu ? 'ارشاداتِ نبوی ﷺ' : language === 'en' ? 'Prophetic Tradition ﷺ' : 'Irshad-e-Nabawi ﷺ',
                        category: isUrdu ? 'چَہل حدیث' : language === 'en' ? '40 Hadith' : '40 Ahadith',
                        slug: `hadith-${hadith.id}`,
                        lang: language,
                        bookRef: hadithRef || undefined,
                      })
                    }
                    className={`min-h-[40px] px-3 py-2 rounded-xl text-slate-950 bg-amber-500 hover:bg-amber-600 transition flex items-center justify-center gap-1.5 font-bold shadow-xs border border-amber-600/30 active:scale-95 ${
                      isUrdu ? 'font-urdu text-xs' : 'text-xs'
                    }`}
                    title={t.downloadBtn}
                    aria-label={t.downloadBtn}
                  >
                    <Download className="w-4 h-4" />
                    <span>{t.downloadBtn}</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activeModalData && (
        <StatusImageModal
          isOpen={!!activeModalData}
          onClose={() => setActiveModalData(null)}
          data={activeModalData}
        />
      )}
    </div>
  );
}
