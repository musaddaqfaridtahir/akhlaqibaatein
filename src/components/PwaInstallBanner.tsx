'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Download, Share, PlusSquare } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default function PwaInstallBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [showIosInstructions, setShowIosInstructions] = useState(false);
  const triggeredRef = useRef(false);

  // Language detection
  const isEnglish = pathname.startsWith('/en');
  const isRoman = pathname.startsWith('/roman');
  const isUrdu = !isEnglish && !isRoman;

  // Elevation if page has FloatingTasbeeh
  const hasFloatingCounter = pathname.includes('/durood/') || pathname.includes('/duain/');

  useEffect(() => {
    // 1. Never show if already running in standalone/PWA mode
    if (typeof window === 'undefined') return;

    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) return;

    // 2. Smart Cooldown: Check 14 days dismissal
    try {
      const dismissedAt = localStorage.getItem('ab_pwa_dismissed_at');
      if (dismissedAt) {
        const elapsed = Date.now() - parseInt(dismissedAt, 10);
        const fourteenDays = 14 * 24 * 60 * 60 * 1000;
        if (elapsed < fourteenDays) return;
      }
    } catch {
      // Ignore localStorage errors
    }

    // 3. Detect iOS Safari
    const isIosDevice =
      /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIos(isIosDevice);

    // 4. Capture beforeinstallprompt for Android / Chrome / Edge
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    const triggerBanner = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setVisible(true);
    };

    // 5. Trigger A: 15-second timer
    const timer = setTimeout(() => {
      triggerBanner();
    }, 15000);

    // 6. Trigger B: 35% scroll down
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrollPercent = (window.scrollY / totalHeight) * 100;
        if (scrollPercent >= 35) {
          triggerBanner();
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem('ab_pwa_dismissed_at', Date.now().toString());
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      try {
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          localStorage.setItem('ab_pwa_dismissed_at', Date.now().toString());
          setVisible(false);
        }
      } catch {
        // Fallback
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      setShowIosInstructions(true);
    }
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label={isUrdu ? 'ایپ انسٹال کریں' : 'Install App'}
      dir={isUrdu ? 'rtl' : 'ltr'}
      className={`fixed ${
        hasFloatingCounter ? 'bottom-24 sm:bottom-5' : 'bottom-4 sm:bottom-5'
      } left-3 right-3 sm:left-auto sm:right-5 sm:max-w-sm z-40 animate-in fade-in slide-in-from-bottom-5 duration-300`}
    >
      <div className="bg-[#07130f]/95 dark:bg-[#07130f]/98 backdrop-blur-md text-slate-100 rounded-2xl p-4 border border-[#d4af37]/60 shadow-2xl relative">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          aria-label={isUrdu ? 'بند کریں' : 'Close'}
          className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 p-1 rounded-full text-slate-400 hover:text-white hover:bg-stone-800/60 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#d4af37]/50 shrink-0 bg-[#0d221a] flex items-center justify-center shadow-sm">
            <Image
              src="/icons/icon-192x192.png"
              alt="Akhlaqi Baatein App Icon"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1 flex-1 pr-4 rtl:pr-0 rtl:pl-4">
            <h4
              className={`text-sm font-bold text-white leading-tight ${
                isUrdu ? 'font-urdu' : 'font-sans'
              }`}
            >
              {isUrdu
                ? 'اخلاقی باتیں ایپ انسٹال کریں'
                : isRoman
                ? 'Akhlaqi Baatein App Install Karein'
                : 'Install Akhlaqi Baatein App'}
            </h4>
            <p
              className={`text-[11px] text-emerald-200/90 leading-tight ${
                isUrdu ? 'font-urdu leading-normal' : ''
              }`}
            >
              {isUrdu
                ? 'تیز مطالعہ، تسبیح کاؤنٹر اور آف لائن سہولت'
                : isRoman
                ? 'Tez mutala, tasbeeh counter aur offline sahulat'
                : 'Faster reading, Tasbeeh counter & offline access'}
            </p>
          </div>
        </div>

        {/* Action Button & iOS Guide */}
        <div className="mt-3 pt-2.5 border-t border-[#d4af37]/25 space-y-2">
          {isIos ? (
            <div className="text-[11px] text-amber-200/95 bg-[#0d221a] rounded-xl p-2.5 border border-[#d4af37]/35 flex items-center gap-2">
              <Share className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className={isUrdu ? 'font-urdu leading-normal' : ''}>
                {isUrdu ? (
                  <>
                    انسٹال کرنے کے لیے نیچے <strong>Share</strong> آئیکن دبائیں اور{' '}
                    <strong>Add to Home Screen</strong> منتخب کریں۔
                  </>
                ) : isRoman ? (
                  <>
                    Install karne ke liye <strong>Share</strong> icon dabayein aur{' '}
                    <strong>Add to Home Screen</strong> chunein.
                  </>
                ) : (
                  <>
                    To install, tap the <strong>Share</strong> icon in Safari and select{' '}
                    <strong>Add to Home Screen</strong>.
                  </>
                )}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleInstallClick}
                className={`flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  isUrdu ? 'font-urdu' : ''
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {isUrdu
                    ? 'ایپ انسٹال کریں'
                    : isRoman
                    ? 'Install App'
                    : 'Install App'}
                </span>
              </button>
              <button
                onClick={handleDismiss}
                className={`py-2 px-3 rounded-xl bg-stone-900/60 hover:bg-stone-800 text-stone-300 border border-stone-700/60 text-xs font-semibold transition cursor-pointer ${
                  isUrdu ? 'font-urdu' : ''
                }`}
              >
                {isUrdu ? 'بعد میں' : isRoman ? 'Baad Mein' : 'Later'}
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
