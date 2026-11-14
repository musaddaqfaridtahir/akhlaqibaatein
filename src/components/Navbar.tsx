'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Sparkles, Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/types';
import { getLocalizedPath } from '@/lib/quoteSeo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t, theme, toggleTheme } = useLanguage();

  const handleLanguageSwitch = (targetLang: Language) => {
    setLanguage(targetLang);
    if (pathname) {
      const newPath = getLocalizedPath(pathname, targetLang);
      if (newPath !== pathname) {
        router.push(newPath);
      }
    }
  };

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/#categories', label: t.categories },
    { href: '/durood', label: t.duroodWazaif },
    { href: '/naat', label: t.naatSharif },
    { href: '/chahal-hadith', label: t.chahalHadith, badge: '40' },
    { href: '/articles', label: t.articles },
    { href: '/books', label: t.books },
    { href: '/about', label: t.about },
    { href: '/contact', label: t.contact },
  ];

  const languageOptions: { code: Language; label: string }[] = [
    { code: 'ur', label: 'اردو' },
    { code: 'ro', label: 'Roman' },
    { code: 'en', label: 'English' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-[#0a1411]/95 border-b border-stone-200 dark:border-emerald-800/40 transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Row 1: Brand Logo & Desktop Nav or Mobile Action Icons */}
        <div className="flex items-center justify-between h-14 sm:h-20 gap-2">
          {/* Logo & Brand in Strict Language */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`text-base sm:text-xl font-bold text-slate-900 dark:text-emerald-400 truncate ${language === 'ur' ? 'font-urdu' : 'tracking-tight'}`}>
                {t.siteName}
                {language !== 'ur' && <span className="text-amber-700 dark:text-amber-400">.com</span>}
              </span>
              <span className={`hidden sm:block text-xs text-slate-600 dark:text-slate-400 leading-tight ${language === 'ur' ? 'font-urdu text-xs' : ''}`}>
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (whitespace-nowrap & compact gap to prevent 2-line wrap) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold transition flex items-center gap-1 whitespace-nowrap shrink-0 ${
                    language === 'ur' ? 'font-urdu text-sm xl:text-base' : ''
                  } ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 font-bold shadow-xs'
                      : 'text-slate-700 dark:text-emerald-100/80 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-[#11221c]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop 3-Language Strict Switcher */}
            <div className="hidden md:flex items-center bg-stone-100 dark:bg-[#11221c] p-1 rounded-2xl border border-stone-200 dark:border-emerald-800/50 shadow-xs">
              <div className="flex items-center px-2 text-slate-500 dark:text-emerald-300/70">
                <Languages className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
              </div>
              {languageOptions.map((opt) => {
                const isActive = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    onClick={() => handleLanguageSwitch(opt.code)}
                    className={`px-3 py-1 text-xs rounded-xl font-bold transition-all ${
                      isActive
                        ? 'bg-emerald-800 text-white shadow-sm scale-105'
                        : 'text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-300'
                    } ${opt.code === 'ur' ? 'font-urdu text-xs leading-normal' : ''}`}
                    title={`Switch to ${opt.label}`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Dark/Light Mode Toggle (Min 40x40px touch target on mobile) */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#11221c] dark:hover:bg-emerald-950 border border-transparent dark:border-emerald-800/40 text-slate-700 dark:text-emerald-200 transition"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
              )}
            </button>

            {/* Mobile Hamburger Trigger (Min 40x40px touch target on mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#11221c] dark:hover:bg-emerald-950 border border-transparent dark:border-emerald-800/40 text-slate-800 dark:text-emerald-200 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Row 2 (Mobile Only): Full-Width Segmented Language Switcher */}
        <div className="md:hidden pb-2.5 pt-0.5">
          <div className="grid grid-cols-3 gap-1 p-1 bg-stone-100 dark:bg-[#11221c] rounded-lg text-xs sm:text-sm border border-stone-200 dark:border-emerald-800/40 shadow-xs">
            {languageOptions.map((opt) => {
              const isActive = language === opt.code;
              return (
                <button
                  key={opt.code}
                  onClick={() => handleLanguageSwitch(opt.code)}
                  className={`py-1.5 px-2 rounded-md font-bold transition-all text-center flex items-center justify-center ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-stone-200 dark:hover:bg-emerald-950'
                  } ${opt.code === 'ur' ? 'font-urdu text-xs leading-normal' : ''}`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0a1411] border-b border-stone-200 dark:border-emerald-800/40 px-4 pt-2 pb-6 space-y-1.5 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition ${
                  language === 'ur' ? 'font-urdu text-lg' : ''
                } ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 font-bold'
                    : 'text-slate-700 dark:text-emerald-100/90 hover:bg-stone-100 dark:hover:bg-[#11221c]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
