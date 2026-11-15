'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Check, Sparkles } from 'lucide-react';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';

interface TasbeehCircleProps {
  slug: string;
  defaultTarget?: number;
  lang?: Language;
  className?: string;
}

const PRESET_TARGETS = [33, 41, 100];

export default function TasbeehCircle({
  slug,
  defaultTarget = 33,
  lang,
  className = '',
}: TasbeehCircleProps) {
  const { language, showToast } = useLanguage();
  const activeLang: Language = lang || language;
  const isUrdu = activeLang === 'ur';
  const isRoman = activeLang === 'ro';

  const storageKey = `akhlaqi_tasbeeh_${slug}`;
  const initialTarget = PRESET_TARGETS.includes(defaultTarget) ? defaultTarget : 33;

  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(initialTarget);
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [isPressing, setIsPressing] = useState<boolean>(false);
  const [completedNotification, setCompletedNotification] = useState<boolean>(false);

  // Load persisted state from localStorage on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.count === 'number' && parsed.count >= 0) {
          setCount(parsed.count);
        }
        if (typeof parsed.target === 'number' && PRESET_TARGETS.includes(parsed.target)) {
          setTarget(parsed.target);
        }
      }
    } catch {
      // Ignore storage errors in restricted contexts
    } finally {
      setHydrated(true);
    }
  }, [storageKey]);

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

  const handleIncrement = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    persistState(nextCount, target);

    // Haptic feedback for mobile devices
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(18);
      } catch {
        // Ignore vibration error
      }
    }

    setIsPressing(true);
    setTimeout(() => setIsPressing(false), 120);

    // Goal reached celebration
    if (nextCount === target) {
      setCompletedNotification(true);
      showToast(
        isUrdu
          ? `ماشاء اللہ! آپ کا ${target} مرتبہ کا ہدف مکمل ہو گیا`
          : isRoman
          ? `MashaAllah! Aapka ${target} bar ka target mukammal ho gaya!`
          : `MashaAllah! You have completed your target of ${target}!`
      );
      setTimeout(() => setCompletedNotification(false), 3000);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(0);
    persistState(0, target);
    showToast(isUrdu ? 'تسبیح دوبارہ صفر ہو گئی' : 'Tasbeeh reset to 0');
  };

  const handleTargetChange = (newTarget: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setTarget(newTarget);
    persistState(count, newTarget);
  };

  // SVG Progress Ring Calculations
  const radius = 42;
  const strokeWidth = 4.5;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = target > 0 ? Math.min(count / target, 1) : 0;
  const strokeDashoffset = circumference - progressRatio * circumference;
  const percentage = Math.round(progressRatio * 100);

  if (!hydrated) {
    return (
      <div className={`flex flex-col items-center justify-center p-3 ${className}`}>
        <div className="w-24 h-24 rounded-full bg-emerald-950/40 border border-[#d4af37]/30 animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Interactive Circular Button */}
      <button
        type="button"
        onClick={handleIncrement}
        aria-label={isUrdu ? 'تسبیح شمار کریں (+1)' : 'Increment count (+1)'}
        className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center cursor-pointer transition-transform duration-100 focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-lg ${
          isPressing ? 'scale-95' : 'hover:scale-[1.03]'
        } ${
          completedNotification
            ? 'bg-gradient-to-br from-emerald-900 to-[#07130f] ring-4 ring-[#d4af37]'
            : 'bg-gradient-to-br from-[#0c1e17] via-[#07130f] to-[#040a08] border border-[#d4af37]/40'
        }`}
      >
        {/* SVG Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 96 96"
        >
          {/* Background Track */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-emerald-950/80 dark:text-emerald-900/40"
          />
          {/* Active Progress Stroke */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#d4af37"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-200 ease-out"
          />
        </svg>

        {/* Center Live Count & Target */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-1">
          <span className="font-sans text-2xl sm:text-3xl font-black text-white leading-none tracking-tight">
            {count}
          </span>
          <span className="font-sans text-[10px] sm:text-xs text-amber-200/90 font-bold mt-0.5">
            / {target}
          </span>
          <span className={`text-[9px] text-[#d4af37] mt-0.5 uppercase tracking-wider font-semibold ${
            isUrdu ? 'font-urdu' : 'font-sans'
          }`}>
            {isUrdu ? 'ورد (+1)' : '+1 Tap'}
          </span>
        </div>
      </button>

      {/* Control Pills Beneath the Circle: Targets + Reset */}
      <div className="flex items-center gap-1.5 mt-2.5 flex-wrap justify-center">
        {/* Preset Target Selector Pills */}
        <div className="inline-flex items-center gap-1 bg-stone-900/80 dark:bg-[#07130f] px-1.5 py-0.5 rounded-full border border-[#d4af37]/35 shadow-xs">
          {PRESET_TARGETS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={(e) => handleTargetChange(t, e)}
              className={`px-2 py-0.5 rounded-full text-[11px] font-sans font-bold transition cursor-pointer ${
                target === t
                  ? 'bg-[#d4af37] text-slate-950 shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Compact Reset Button */}
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-900/80 dark:bg-[#07130f] text-slate-300 hover:text-red-300 border border-[#d4af37]/30 hover:border-red-400/50 text-[11px] font-medium transition cursor-pointer"
          title={isUrdu ? 'دوبارہ شروع کریں' : 'Reset counter'}
        >
          <RotateCcw className="w-2.5 h-2.5" />
          <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
            {isUrdu ? 'صفر' : 'Reset'}
          </span>
        </button>
      </div>
    </div>
  );
}
