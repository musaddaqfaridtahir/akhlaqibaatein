'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  RotateCcw,
  Plus,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  User,
  Share2,
  Image as ImageIcon,
  Check,
} from 'lucide-react';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { DuroodItem } from '@/data/durood';
import { generateDuroodStatusImage } from '@/utils/duroodStatusGenerator';
import { computeFormattedDate } from '@/lib/dateUtils';

interface TasbeehCounterProps {
  durood: DuroodItem;
  defaultTarget?: number;
}

interface StoredTasbeehState {
  count: number;
  target: number;
}

const PRESET_TARGETS = [11, 41, 100, 313, 1000];

export default function TasbeehCounter({
  durood,
  defaultTarget = 41,
}: TasbeehCounterProps) {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const slug = durood.slug;
  const storageKey = `akhlaqi_tasbeeh_${slug}`;
  const userNameKey = 'akhlaqi_tasbeeh_user_name';

  const initialTarget = PRESET_TARGETS.includes(defaultTarget) ? defaultTarget : 41;

  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(initialTarget);
  const [userName, setUserName] = useState<string>('');
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [pulse, setPulse] = useState<boolean>(false);
  const [confirmReset, setConfirmReset] = useState<boolean>(false);
  const [downloadingStatus, setDownloadingStatus] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Load persisted state from localStorage on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<StoredTasbeehState>;
        if (typeof parsed.count === 'number' && parsed.count >= 0) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setCount(parsed.count);
        }
        if (typeof parsed.target === 'number' && PRESET_TARGETS.includes(parsed.target)) {
          setTarget(parsed.target);
        }
      }

      const savedName = window.localStorage.getItem(userNameKey);
      if (savedName) {
        setUserName(savedName);
      }
    } catch {
      // Ignore storage read errors in restricted contexts
    } finally {
      setHydrated(true);
    }
  }, [storageKey, userNameKey]);

  const persistState = useCallback(
    (nextCount: number, nextTarget: number) => {
      try {
        window.localStorage.setItem(
          storageKey,
          JSON.stringify({ count: nextCount, target: nextTarget })
        );
      } catch {
        // Ignore quota / privacy mode errors
      }
    },
    [storageKey]
  );

  const handleNameChange = (val: string) => {
    setUserName(val);
    try {
      window.localStorage.setItem(userNameKey, val);
    } catch {
      // Ignore storage errors
    }
  };

  const handleIncrement = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    setConfirmReset(false);
    persistState(nextCount, target);

    setPulse(true);
    setTimeout(() => setPulse(false), 160);

    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(15);
      } catch {
        // Ignore if disabled
      }
    }
  };

  const handleTargetChange = (nextTarget: number) => {
    setTarget(nextTarget);
    setConfirmReset(false);
    persistState(count, nextTarget);
  };

  const handleConfirmedReset = () => {
    setCount(0);
    setConfirmReset(false);
    persistState(0, target);
  };

  const handleDownloadCard = async () => {
    if (downloadingStatus) return;
    setDownloadingStatus(true);
    try {
      await generateDuroodStatusImage({
        durood,
        userName,
        count,
        target,
        lang: language as Language,
      });
      showToast(
        isUrdu
          ? 'اسٹیٹس کارڈ کامیابی سے محفوظ ہو گیا'
          : isRoman
          ? 'Status card kamyabi se download ho gaya'
          : 'Status Card downloaded successfully'
      );
    } catch {
      showToast(
        isUrdu
          ? 'تصویر تیار کرنے میں مسئلہ پیش آیا، دوبارہ کوشش کریں'
          : 'Failed to generate status card, please retry'
      );
    } finally {
      setDownloadingStatus(false);
    }
  };

  const handleShareMini = () => {
    const shareUrl = `https://akhlaqibaatein.com/durood/${durood.slug}`;
    const title = isUrdu ? durood.title.ur : isRoman ? durood.title.ro : durood.title.en;
    const msg = encodeURIComponent(
      `${title}\nورد و تسبیح: ${count} / ${target} مرتبہ مکمل\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  const handleCopyLink = () => {
    const shareUrl = `https://akhlaqibaatein.com/durood/${durood.slug}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    showToast(isUrdu ? 'صفحے کا لنک کاپی ہو گیا' : 'Link copied to clipboard');
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const progressPct = Math.min(100, Math.round((count / target) * 100));
  const isCompleted = count >= target;
  const dateString = computeFormattedDate(new Date(), language as Language);

  // SVG Ring metrics
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPct / 100) * circumference;

  const duroodTitle = isUrdu ? durood.title.ur : isRoman ? durood.title.ro : durood.title.en;

  return (
    <section
      aria-label="Interactive Tasbeeh Counter"
      className="relative overflow-hidden rounded-3xl p-5 sm:p-7 bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#050e0b] text-white border-2 border-[#d4af37]/60 shadow-xl space-y-6"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-60 h-60 rounded-full bg-[#d4af37]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Top Row: Title & Optional Personalization Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#d4af37]">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
              {isUrdu
                ? 'ڈیجیٹل تسبیح کاؤنٹر (وردِ درود)'
                : isRoman
                ? 'Digital Tasbeeh Counter'
                : 'Interactive Tasbeeh Counter'}
            </span>
          </div>

          {/* Clean Target Selector Pills */}
          <div className="flex items-center gap-1.5 bg-[#050e0b] p-1.5 rounded-2xl border border-[#d4af37]/35">
            <span className={`text-xs text-emerald-200/80 px-2 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {isUrdu ? 'ہدف:' : isRoman ? 'Hadaf:' : 'Target:'}
            </span>
            {PRESET_TARGETS.map((preset) => {
              const active = target === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handleTargetChange(preset)}
                  className={`px-2.5 py-1 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                    active
                      ? 'bg-[#d4af37] text-[#0a1411] shadow-sm font-extrabold'
                      : 'text-emerald-100/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {preset}
                </button>
              );
            })}
          </div>
        </div>

        {/* Personalized Reciter Name Input */}
        <div className="flex items-center gap-2 bg-[#050e0b]/90 border border-[#d4af37]/30 rounded-2xl px-3.5 py-2">
          <User className="w-4 h-4 text-[#d4af37] shrink-0" />
          <input
            type="text"
            value={userName}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder={
              isUrdu
                ? 'تسبیح میں اپنا نام لکھیں (مثلاً: مصدق فرید)...'
                : isRoman
                ? 'Tasbeeh mein apna naam likhein (maslan: Musaddaq)...'
                : 'Enter your name for Tasbeeh (e.g. Musaddaq)...'
            }
            className={`flex-1 bg-transparent text-xs sm:text-sm text-emerald-100 placeholder:text-emerald-200/40 focus:outline-none ${
              isUrdu ? 'font-urdu' : 'font-sans'
            }`}
          />
        </div>

        {/* Warm Personalization Greeting Header */}
        {userName.trim() && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className={isUrdu ? 'font-urdu font-bold' : 'font-sans font-medium'}>
              {isUrdu
                ? `ماشاء اللہ! ${userName.trim()} کا وردِ درود جاری ہے`
                : isRoman
                ? `Masha Allah! ${userName.trim()} ka wird-e-durood jari hai`
                : `Masha'Allah! ${userName.trim()}'s Durood recitation is in progress`}
            </span>
          </div>
        )}
      </div>

      {/* Main Counter Centerpiece: Ring + Big Increment Button */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-1">
        {/* Progress Circular Dial (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
            <svg className="w-36 h-36 -rotate-90" viewBox="0 0 130 130">
              <circle
                cx="65"
                cy="65"
                r={radius}
                fill="none"
                stroke="rgba(212, 175, 55, 0.18)"
                strokeWidth="10"
              />
              <circle
                cx="65"
                cy="65"
                r={radius}
                fill="none"
                stroke={isCompleted ? '#34d399' : '#d4af37'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span
                className={`text-4xl font-extrabold tracking-tight tabular-nums transition-transform duration-150 ${
                  pulse ? 'scale-110 text-[#d4af37]' : 'text-white'
                }`}
              >
                {hydrated ? count : 0}
              </span>
              {/* Clean Accurate Progress Readout Badge */}
              <span className="px-2 py-0.5 rounded-full bg-emerald-900/60 text-[11px] font-bold text-emerald-200 border border-emerald-500/30 tabular-nums">
                {isUrdu
                  ? `تعداد: ${count} / ${target} (${progressPct}%)`
                  : `Count: ${count} / ${target} (${progressPct}%)`}
              </span>
            </div>
          </div>
        </div>

        {/* Big Increment Action & Reset (8 cols) */}
        <div className="md:col-span-8 space-y-4">
          <button
            type="button"
            onClick={handleIncrement}
            className={`w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#d4af37] hover:brightness-105 text-[#0a1411] font-extrabold text-lg sm:text-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-3 transition-transform cursor-pointer select-none active:scale-95 ${
              pulse ? 'scale-[0.98]' : ''
            }`}
          >
            <Plus className="w-7 h-7 stroke-[3]" />
            <span className={isUrdu ? 'font-urdu text-xl sm:text-2xl leading-normal' : 'font-sans font-bold'}>
              {isUrdu ? 'تسبیح گنیں (+1)' : isRoman ? 'Tasbeeh Ganein (+1)' : 'Count Tasbeeh (+1)'}
            </span>
          </button>

          {/* Progress Bar & Status Feedback */}
          <div className="space-y-1.5">
            <div className="w-full h-3 rounded-full bg-[#050e0b] border border-emerald-800/70 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  isCompleted ? 'bg-emerald-400 shadow-md shadow-emerald-400/50' : 'bg-[#d4af37]'
                }`}
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="flex items-center justify-between gap-2 text-xs flex-wrap">
              {isCompleted ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-300 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                    {isUrdu
                      ? `ماشاء اللہ! آپ کا ہدف (${target}) مکمل ہو گیا`
                      : isRoman
                      ? `Masha Allah! Hadaf (${target}) mukammal ho gaya`
                      : `Masha'Allah! Target (${target}) completed`}
                  </span>
                </span>
              ) : (
                <span className={`text-emerald-200/80 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                  {isUrdu
                    ? `ہدف (${target}) مکمل ہونے میں ${Math.max(0, target - count)} باقی`
                    : isRoman
                    ? `Hadaf (${target}) mein ${Math.max(0, target - count)} baqi`
                    : `${Math.max(0, target - count)} recitations remaining to reach target (${target})`}
                </span>
              )}

              {/* Reset Confirmation Button */}
              {!confirmReset ? (
                <button
                  type="button"
                  onClick={() => setConfirmReset(true)}
                  disabled={count === 0}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs text-emerald-200/80 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer ${
                    isUrdu ? 'font-urdu' : 'font-sans'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isUrdu ? 'ری سیٹ کریں' : isRoman ? 'Reset Karein' : 'Reset'}</span>
                </button>
              ) : (
                <div className="flex items-center gap-1.5 bg-red-950/80 border border-red-400/40 px-2.5 py-1 rounded-xl">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span className={`text-[11px] text-red-100 ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
                    {isUrdu ? 'گنتی صفر کریں؟' : 'Reset count to 0?'}
                  </span>
                  <button
                    type="button"
                    onClick={handleConfirmedReset}
                    className="px-2 py-0.5 rounded bg-red-600 hover:bg-red-500 text-white text-[11px] font-bold cursor-pointer"
                  >
                    {isUrdu ? 'ہاں' : 'Yes'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] cursor-pointer"
                  >
                    {isUrdu ? 'نہیں' : 'No'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mini Tasbeeh Card (Personalized Status Card Preview & 1-Click Download) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#050e0b]/80 border border-[#d4af37]/40 space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-[#d4af37] tracking-wider uppercase">
              {isUrdu ? 'تسبیح کارڈ • Mini Tasbeeh Card' : 'Personalized Status Card'}
            </span>
            <h3 className={`text-sm sm:text-base font-bold text-white ${isUrdu ? 'font-urdu' : 'font-sans'}`}>
              {userName.trim() ? `${userName.trim()} — ${duroodTitle}` : duroodTitle}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadCard}
              disabled={downloadingStatus}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-amber-400 text-[#0a1411] font-bold text-xs sm:text-sm hover:brightness-105 shadow-sm transition active:scale-95 cursor-pointer disabled:opacity-60"
            >
              <ImageIcon className="w-4 h-4 shrink-0" />
              <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
                {downloadingStatus
                  ? isUrdu
                    ? 'کارڈ تیار ہو رہا ہے...'
                    : 'Generating...'
                  : isUrdu
                  ? 'اسٹیٹس کارڈ ڈاؤن لوڈ کریں (9:16 HD)'
                  : isRoman
                  ? 'Status Card Download Karein'
                  : 'Download Status Card (9:16 HD)'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleShareMini}
              aria-label="Share on WhatsApp"
              className="p-2 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/50 transition cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              aria-label="Copy Link"
              className="p-2 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/50 transition cursor-pointer"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <RotateCcw className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-emerald-200/70 border-t border-emerald-800/40 pt-2 flex-wrap gap-2">
          <span>{dateString}</span>
          <span className="font-semibold text-[#d4af37]">AkhlaqiBaatein.com</span>
        </div>
      </div>
    </section>
  );
}
