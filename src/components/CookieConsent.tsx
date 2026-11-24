'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();

  // Detect language from URL path
  const isEnglish = pathname.startsWith('/en');
  const isRoman = pathname.startsWith('/roman');
  const isUrdu = !isEnglish && !isRoman;

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        // Small delay so page renders first
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const handleConsent = (type: 'granted' | 'denied') => {
    try {
      localStorage.setItem('cookie_consent', type);
      localStorage.setItem('cookie_consent_date', new Date().toISOString());

      // Update Google Consent Mode v2 if gtag is available
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag('consent', 'update', {
          ad_storage: type,
          ad_user_data: type,
          ad_personalization: type,
          analytics_storage: type,
        });
      }
    } catch {
      // Fallback
    }
    setShowBanner(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <aside
      role="region"
      aria-label={isUrdu ? 'کوکیز اور پرائیویسی رضامندی' : 'Cookie and Privacy Consent'}
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-5 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto pointer-events-auto bg-[#07130f]/95 text-slate-100 border border-[#d4af37]/50 shadow-2xl rounded-2xl p-4 sm:p-5 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
              <Cookie className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div className="space-y-1">
              <h3 className={`text-sm sm:text-base font-bold text-white flex items-center gap-1.5 ${isUrdu ? 'font-urdu' : ''}`}>
                <span>
                  {isUrdu
                    ? 'کوکیز اور پرائیویسی پالیسی'
                    : isRoman
                    ? 'Cookies aur Privacy Policy'
                    : 'Cookie & Privacy Choices'}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
              </h3>
              <p className={`text-xs sm:text-sm text-slate-300 leading-relaxed ${isUrdu ? 'font-urdu leading-normal text-xs sm:text-sm' : ''}`}>
                {isUrdu
                  ? 'ہم سائٹ پر بہترین تجربہ، ٹریفک کے تجزیے اور اخلاقی مواد کو مفت رکھنے کے لیے کوکیز کا استعمال کرتے ہیں۔ مزید معلومات کے لیے ہماری '
                  : isRoman
                  ? 'Hum website par behtar tajarba, traffic analysis aur islami mawad ko muft rakhne ke liye cookies istemal karte hain. Mazeed tafseelat ke liye hamari '
                  : 'We use cookies to enhance user experience, measure traffic, and keep authentic Islamic content free via relevant advertising. Read our '}
                <Link
                  href={isEnglish ? '/en/privacy-policy' : isRoman ? '/roman/privacy-policy' : '/privacy-policy'}
                  className="text-amber-400 underline hover:text-amber-300 font-medium"
                >
                  {isUrdu ? 'پرائیویسی پالیسی' : isRoman ? 'Privacy Policy' : 'Privacy Policy'}
                </Link>
                {isUrdu
                  ? ' ملاحظہ فرمائیں۔'
                  : isRoman
                  ? ' mulahiza karein.'
                  : ' for details.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={() => handleConsent('denied')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-stone-600 hover:border-stone-400 bg-stone-900/60 hover:bg-stone-800 text-stone-300 transition cursor-pointer flex-1 sm:flex-initial text-center ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              {isUrdu ? 'صرف ضروری' : isRoman ? 'Sirf Zaroori' : 'Necessary Only'}
            </button>
            <button
              onClick={() => handleConsent('granted')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-700 hover:bg-emerald-600 text-white border border-[#d4af37]/60 shadow-sm transition cursor-pointer flex-1 sm:flex-initial text-center ${
                isUrdu ? 'font-urdu' : ''
              }`}
            >
              {isUrdu ? 'سب قبول کریں' : isRoman ? 'Sab Qabool Karein' : 'Accept All'}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
