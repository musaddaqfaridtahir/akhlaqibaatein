'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Language } from '@/data/types';
import { uiTranslations, TranslationDictionary } from '@/data/uiTranslations';
import { getRouteLanguageFromPathname } from '@/lib/quoteSeo';

export type ThemeMode = 'light' | 'dark';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  theme: ThemeMode;
  toggleTheme: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function applyLanguageToDOM(lang: Language) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (lang === 'ur') {
    root.dir = 'rtl';
    root.lang = 'ur';
    root.classList.add('lang-ur');
    root.classList.remove('lang-en', 'lang-ro');
  } else if (lang === 'ro') {
    root.dir = 'ltr';
    root.lang = 'ur-Latn';
    root.classList.add('lang-ro');
    root.classList.remove('lang-ur', 'lang-en');
  } else {
    root.dir = 'ltr';
    root.lang = 'en';
    root.classList.add('lang-en');
    root.classList.remove('lang-ur', 'lang-ro');
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const routeLang = getRouteLanguageFromPathname(pathname);

  const [storedLang, setStoredLang] = useState<Language>('ur');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const language: Language = routeLang || storedLang;

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      const savedLang = localStorage.getItem('ab_language') as Language | null;
      if (savedLang && ['ur', 'ro', 'en'].includes(savedLang)) {
        setStoredLang(savedLang);
      }

      const savedTheme = localStorage.getItem('ab_theme') as ThemeMode | null;
      if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    });

    return () => window.cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    applyLanguageToDOM(language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setStoredLang(lang);
    localStorage.setItem('ab_language', lang);
    applyLanguageToDOM(lang);
  };

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('ab_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const t = uiTranslations[language] || uiTranslations.ur;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        theme,
        toggleTheme,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-950 text-white dark:bg-emerald-800 px-5 py-3 rounded-full shadow-2xl border border-emerald-500/40 text-sm font-medium flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
