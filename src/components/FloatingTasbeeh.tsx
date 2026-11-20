'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  RotateCcw,
  Sparkles,
  GripHorizontal,
  Minus,
  Maximize2,
  Check,
} from 'lucide-react';
import { Language } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';

interface FloatingTasbeehProps {
  slug: string;
  defaultTarget?: number;
  title?: string;
  lang?: Language;
}

const PRESET_TARGETS = [33, 41, 100, 0]; // 0 represents Unlimited (∞)

export default function FloatingTasbeeh({
  slug,
  defaultTarget = 33,
  title,
  lang,
}: FloatingTasbeehProps) {
  const { language, showToast } = useLanguage();
  const activeLang: Language = lang || language;
  const isUrdu = activeLang === 'ur';
  const isRoman = activeLang === 'ro';

  const storageKey = `akhlaqi_floating_tasbeeh_${slug}`;
  const legacyStorageKey = `akhlaqi_tasbeeh_${slug}`;
  const posStorageKey = 'akhlaqi_floating_tasbeeh_pos';
  const minStorageKey = 'akhlaqi_floating_tasbeeh_min';

  // Target initialization
  const initialTarget = PRESET_TARGETS.includes(defaultTarget) ? defaultTarget : 33;

  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(initialTarget);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isPressing, setIsPressing] = useState<boolean>(false);
  const [justCompleted, setJustCompleted] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Position state (null before client measurement)
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  // Drag tracking refs
  const dragRef = useRef<{
    startX: number;
    startY: number;
    posX: number;
    posY: number;
    hasMoved: boolean;
    pointerId: number | null;
  }>({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0,
    hasMoved: false,
    pointerId: null,
  });

  const cardRef = useRef<HTMLDivElement | null>(null);

  // Clamping helper
  const clampPosition = useCallback(
    (x: number, y: number, width = 136, height = 180) => {
      if (typeof window === 'undefined') return { x, y };
      const paddingX = 12;
      const minX = paddingX;
      const maxX = Math.max(minX, window.innerWidth - width - paddingX);

      const topNavMargin = 84; // Leave room for sticky navbar
      const bottomMargin = 96; // Leave room for bottom bar / footer
      const minY = topNavMargin;
      const maxY = Math.max(minY, window.innerHeight - height - bottomMargin);

      return {
        x: Math.max(minX, Math.min(x, maxX)),
        y: Math.max(minY, Math.min(y, maxY)),
      };
    },
    []
  );

  // Initial load from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load count & target
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
      } else {
        // Fallback to legacy inline counter state if present
        const legacy = window.localStorage.getItem(legacyStorageKey);
        if (legacy) {
          const parsedLegacy = JSON.parse(legacy);
          if (typeof parsedLegacy.count === 'number') setCount(parsedLegacy.count);
          if (typeof parsedLegacy.target === 'number') setTarget(parsedLegacy.target);
        }
      }

      // Load minimized state
      const savedMin = window.localStorage.getItem(minStorageKey);
      if (savedMin === 'true') {
        setIsMinimized(true);
      }

      // Load saved position or use safe default (bottom-24 right-4)
      const bubbleW = savedMin === 'true' ? 120 : 136;
      const bubbleH = savedMin === 'true' ? 44 : 180;
      const defaultX = window.innerWidth - bubbleW - 16;
      const defaultY = window.innerHeight - bubbleH - 96;

      const savedPos = window.localStorage.getItem(posStorageKey);
      if (savedPos) {
        const parsedPos = JSON.parse(savedPos);
        if (typeof parsedPos.x === 'number' && typeof parsedPos.y === 'number') {
          setPosition(clampPosition(parsedPos.x, parsedPos.y, bubbleW, bubbleH));
        } else {
          setPosition(clampPosition(defaultX, defaultY, bubbleW, bubbleH));
        }
      } else {
        setPosition(clampPosition(defaultX, defaultY, bubbleW, bubbleH));
      }
    } catch {
      // Ignore storage errors in restricted contexts
    } finally {
      setMounted(true);
    }
  }, [storageKey, legacyStorageKey, clampPosition]);

  // Handle window resize to keep bubble clamped
  useEffect(() => {
    const handleResize = () => {
      if (!position) return;
      const bubbleW = isMinimized ? 120 : 136;
      const bubbleH = isMinimized ? 44 : 180;
      setPosition((prev) => (prev ? clampPosition(prev.x, prev.y, bubbleW, bubbleH) : null));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [position, isMinimized, clampPosition]);

  // Persist count and target
  const persistState = useCallback(
    (nextCount: number, nextTarget: number) => {
      try {
        const payload = JSON.stringify({ count: nextCount, target: nextTarget });
        window.localStorage.setItem(storageKey, payload);
        // Also sync legacy key for inline counter
        window.localStorage.setItem(legacyStorageKey, payload);
        window.dispatchEvent(
          new CustomEvent('akhlaqi_tasbeeh_sync', {
            detail: { slug, count: nextCount, target: nextTarget },
          })
        );
      } catch {
        // Ignore quota errors
      }
    },
    [storageKey, legacyStorageKey, slug]
  );

  // Cross-counter real-time synchronization
  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.slug === slug) {
        if (typeof customEvent.detail.count === 'number') {
          setCount(customEvent.detail.count);
        }
        if (typeof customEvent.detail.target === 'number' && PRESET_TARGETS.includes(customEvent.detail.target)) {
          setTarget(customEvent.detail.target);
        }
      }
    };

    window.addEventListener('akhlaqi_tasbeeh_sync', handleSync);
    return () => window.removeEventListener('akhlaqi_tasbeeh_sync', handleSync);
  }, [slug]);

  // Count Increment
  const handleIncrement = useCallback(() => {
    setCount((prev) => {
      const nextCount = prev + 1;
      persistState(nextCount, target);

      // Haptic feedback
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate(15);
        } catch {}
      }

      // Goal completion check
      if (target > 0 && nextCount === target) {
        setJustCompleted(true);
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
          try {
            navigator.vibrate([35, 50, 35]);
          } catch {}
        }
        showToast(
          isUrdu
            ? `ماشاء اللہ! آپ کا ${target} مرتبہ کا ہدف مکمل ہوا`
            : isRoman
            ? `MashaAllah! Aapka ${target} bar ka target mukammal hua!`
            : `MashaAllah! Target of ${target} completed!`
        );
        setTimeout(() => setJustCompleted(false), 3000);
      }

      return nextCount;
    });

    setIsPressing(true);
    setTimeout(() => setIsPressing(false), 120);
  }, [persistState, target, isUrdu, isRoman, showToast]);

  // Reset count
  const handleReset = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    setCount(0);
    setJustCompleted(false);
    persistState(0, target);
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(20);
      } catch {}
    }
    showToast(isUrdu ? 'تسبیح کاؤنٹر ری سیٹ ہو گیا' : 'Tasbeeh counter reset to 0');
  };

  // Cycle target (33 -> 41 -> 100 -> 0 -> 33)
  const handleCycleTarget = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    const currentIndex = PRESET_TARGETS.indexOf(target);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % PRESET_TARGETS.length;
    const nextTarget = PRESET_TARGETS[nextIndex];
    setTarget(nextTarget);
    persistState(count, nextTarget);
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch {}
    }
  };

  // Toggle minimize
  const toggleMinimize = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    setIsMinimized((prev) => {
      const nextMin = !prev;
      try {
        window.localStorage.setItem(minStorageKey, String(nextMin));
      } catch {}
      return nextMin;
    });
  };

  // Pointer Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!position) return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
      hasMoved: false,
      pointerId: e.pointerId,
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragRef.current.pointerId !== e.pointerId) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const dist = Math.hypot(dx, dy);

    if (dist > 6) {
      dragRef.current.hasMoved = true;
      const bubbleW = isMinimized ? 120 : 136;
      const bubbleH = isMinimized ? 44 : 180;
      const newPos = clampPosition(
        dragRef.current.posX + dx,
        dragRef.current.posY + dy,
        bubbleW,
        bubbleH
      );
      setPosition(newPos);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragRef.current.pointerId !== e.pointerId) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (!dragRef.current.hasMoved) {
      // Tap detected!
      if (isMinimized) {
        setIsMinimized(false);
      } else {
        handleIncrement();
      }
    } else {
      // Drag completed: persist position
      if (position) {
        try {
          window.localStorage.setItem(posStorageKey, JSON.stringify(position));
        } catch {}
      }
    }
    dragRef.current.pointerId = null;
  };

  // SVG Radial Ring Math
  const radius = 38;
  const stroke = 4;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = target > 0 ? Math.min(1, count / target) : 0;
  const strokeDashoffset = circumference - progressRatio * circumference;

  if (!mounted || !position) return null;

  return (
    <div
      ref={cardRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="button"
      tabIndex={0}
      aria-label="Floating Tasbeeh Counter. Tap to count, drag to move."
      className={`fixed z-40 select-none cursor-pointer transition-transform duration-75 no-print ${
        isPressing ? 'scale-95' : 'hover:scale-[1.02]'
      }`}
    >
      {isMinimized ? (
        /* Minimized Compact Floating Pill */
        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#091712]/95 backdrop-blur-md border border-amber-400/80 shadow-xl text-white group">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 text-[#d4af37] flex items-center justify-center shrink-0">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
          </div>
          <div className="flex items-baseline gap-1 font-mono text-xs font-bold text-amber-300">
            <span>{count}</span>
            <span className="text-[10px] text-emerald-200/70">
              /{target === 0 ? '∞' : target}
            </span>
          </div>
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={toggleMinimize}
            className="w-5 h-5 rounded-lg bg-emerald-950 hover:bg-emerald-800 text-amber-300 flex items-center justify-center transition"
            title="Expand Tasbeeh"
            aria-label="Expand Tasbeeh"
          >
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
      ) : (
        /* Full Draggable Circular Tasbeeh Bubble */
        <div className="relative w-[136px] rounded-3xl p-3 bg-gradient-to-b from-[#0a1813]/98 via-[#07130f]/98 to-[#050e0b]/98 backdrop-blur-md border-2 border-amber-400/80 shadow-2xl text-white flex flex-col items-center gap-2">
          {/* Top Bar: Drag Grip + Minimize Icon */}
          <div className="w-full flex items-center justify-between px-1 text-slate-400">
            <div
              className="flex items-center text-amber-400/70 hover:text-amber-300"
              title="Move / Drag"
            >
              <GripHorizontal className="w-4 h-4" />
            </div>

            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={toggleMinimize}
              className="w-5 h-5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition"
              title="Minimize"
              aria-label="Minimize"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Circular Count Face with SVG Radial Progress Ring */}
          <div className="relative w-[92px] h-[92px] flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 92 92">
              {/* Background Ring Track */}
              <circle
                cx="46"
                cy="46"
                r={radius}
                className="text-emerald-950/80"
                strokeWidth={stroke}
                stroke="currentColor"
                fill="transparent"
              />
              {/* Animated Progress Ring */}
              <circle
                cx="46"
                cy="46"
                r={radius}
                className={`transition-all duration-150 ${
                  justCompleted ? 'text-emerald-400' : 'text-[#d4af37]'
                }`}
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={target > 0 ? strokeDashoffset : 0}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            {/* Inner Circular Face */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#0d221a] to-[#040a08] border border-amber-400/40 flex flex-col items-center justify-center shadow-inner pointer-events-none">
              {justCompleted ? (
                <div className="flex flex-col items-center justify-center animate-bounce">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-[9px] font-bold text-emerald-300 font-urdu leading-none">
                    مکمل ✓
                  </span>
                </div>
              ) : (
                <>
                  <span className="font-mono text-2xl font-extrabold text-[#fef3c7] leading-none tracking-tight">
                    {count}
                  </span>
                  <span className="text-[10px] font-mono text-amber-300/80 font-bold leading-tight mt-0.5">
                    /{target === 0 ? '∞' : target}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Bottom Action Controls: Target Cycle & Reset Buttons */}
          <div className="w-full flex items-center justify-between gap-1 pt-1 border-t border-emerald-900/40">
            {/* Target Button */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleCycleTarget}
              className="px-2 py-1 rounded-lg bg-emerald-950/90 hover:bg-emerald-900 text-[10px] font-bold font-mono text-amber-300 border border-amber-400/30 transition flex items-center gap-1 shadow-xs"
              title="Change Target (33 / 41 / 100 / ∞)"
              aria-label="Target"
            >
              <span className="text-[9px] text-slate-300 font-sans">هدف:</span>
              <span>{target === 0 ? '∞' : target}</span>
            </button>

            {/* Reset Button */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleReset}
              className="w-7 h-7 rounded-lg bg-emerald-950/90 hover:bg-rose-950 text-slate-300 hover:text-rose-300 border border-stone-700/40 hover:border-rose-500/50 flex items-center justify-center transition shadow-xs"
              title="Reset Count to 0"
              aria-label="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
