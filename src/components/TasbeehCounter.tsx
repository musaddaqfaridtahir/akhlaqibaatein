'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Plus, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

interface TasbeehCounterProps {
  slug: string;
  duroodTitleUr: string;
  defaultTarget?: number;
}

interface StoredTasbeehState {
  count: number;
  target: number;
}

const PRESET_TARGETS = [11, 41, 100];

export default function TasbeehCounter({
  slug,
  duroodTitleUr,
  defaultTarget = 41,
}: TasbeehCounterProps) {
  const storageKey = `akhlaqi_tasbeeh_${slug}`;
  const initialTarget = PRESET_TARGETS.includes(defaultTarget) ? defaultTarget : 41;

  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(initialTarget);
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [pulse, setPulse] = useState<boolean>(false);
  const [confirmReset, setConfirmReset] = useState<boolean>(false);

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
    } catch {
      // Ignore storage read errors in restricted contexts
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
    setConfirmReset(false);
    persistState(nextCount, target);

    setPulse(true);
    setTimeout(() => setPulse(false), 180);

    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(15);
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

  const progressPct = Math.min(100, Math.round((count / target) * 100));
  const isCompleted = count >= target;

  // SVG Ring metrics
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPct / 100) * circumference;

  return (
    <section
      dir="rtl"
      aria-label="Digital Tasbeeh Counter"
      className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0a1411] via-[#11221c] to-[#08110e] text-white border border-[#d4af37]/40 shadow-xl space-y-6"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 rounded-full bg-[#d4af37]/10 blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37]">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span className="font-urdu">ڈیجیٹل تسبیح کاؤنٹر</span>
          </div>
          <h2 className="font-urdu text-lg sm:text-xl font-bold text-white">
            {duroodTitleUr} — تعداد شمار کریں
          </h2>
        </div>

        {/* Preset Target Pills */}
        <div className="flex items-center gap-1.5 bg-[#07100d] p-1.5 rounded-2xl border border-[#d4af37]/30">
          <span className="font-urdu text-xs text-emerald-200/80 px-2">ہدف:</span>
          {PRESET_TARGETS.map((preset) => {
            const active = target === preset;
            return (
              <button
                key={preset}
                type="button"
                onClick={() => handleTargetChange(preset)}
                className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  active
                    ? 'bg-[#d4af37] text-[#0a1411] shadow-sm'
                    : 'text-emerald-100/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {preset}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ring + Count Readout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-2">
        <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
          <svg className="w-36 h-36 -rotate-90" viewBox="0 0 140 140">
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="rgba(212, 175, 55, 0.18)"
              strokeWidth="10"
            />
            <circle
              cx="70"
              cy="70"
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
            <span className="text-[11px] font-bold text-emerald-200/80">
              {progressPct}% / {target}
            </span>
          </div>
        </div>

        {/* Increment Button + Progress Bar */}
        <div className="flex-1 w-full space-y-4">
          <button
            type="button"
            onClick={handleIncrement}
            className={`w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#d4af37] hover:brightness-105 text-[#0a1411] font-extrabold text-base sm:text-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-3 transition-transform cursor-pointer select-none ${
              pulse ? 'scale-[0.97]' : 'active:scale-95'
            }`}
          >
            <Plus className="w-6 h-6 stroke-[2.75]" />
            <span className="font-urdu text-lg sm:text-xl leading-normal">
              تسبیح گنیں (+1)
            </span>
          </button>

          {/* Linear progress bar */}
          <div className="space-y-1.5">
            <div className="w-full h-2.5 rounded-full bg-[#07100d] border border-emerald-800/60 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  isCompleted ? 'bg-emerald-400' : 'bg-[#d4af37]'
                }`}
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="flex items-center justify-between gap-2 text-xs">
              {isCompleted ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-300 font-urdu font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>ماشاء اللہ! آپ کا ہدف ({target}) مکمل ہو گیا</span>
                </span>
              ) : (
                <span className="font-urdu text-emerald-200/80">
                  ہدف ({target}) مکمل ہونے میں {Math.max(0, target - count)} باقی
                </span>
              )}

              {/* Reset with inline confirmation */}
              {!confirmReset ? (
                <button
                  type="button"
                  onClick={() => setConfirmReset(true)}
                  disabled={count === 0}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-urdu text-emerald-200/80 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>ری سیٹ کریں</span>
                </button>
              ) : (
                <div className="flex items-center gap-1.5 bg-red-950/80 border border-red-400/40 px-2.5 py-1 rounded-xl">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span className="font-urdu text-[11px] text-red-100">گنتی صفر کریں؟</span>
                  <button
                    type="button"
                    onClick={handleConfirmedReset}
                    className="px-2 py-0.5 rounded bg-red-600 hover:bg-red-500 text-white text-[11px] font-bold font-urdu cursor-pointer"
                  >
                    ہاں
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] font-urdu cursor-pointer"
                  >
                    نہیں
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="font-urdu text-xs text-emerald-200/70 border-t border-emerald-800/50 pt-3">
        نوٹ: آپ کی تسبیح کا ریکارڈ خودکار طریقے سے محفوظ رہتا ہے، صفحہ بند یا ریفریش کرنے پر بھی گنتی ضائع نہیں ہوگی۔
      </p>
    </section>
  );
}
