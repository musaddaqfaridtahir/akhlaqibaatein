'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/types';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t, theme, toggleTheme } = useLanguage();

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/chahal-hadith', label: t.chahalHadith, badge: '40' },
    { href: '/articles', label: t.articles },
    { href: '/books', label: t.books },
    { href: '/about', label: t.about },
  ];

  const languageOptions: { code: Language; label: string }[] = [
    { code: 'ur', label: 'اردو' },
    { code: 'ro', label: 'Roman' },
    { code: 'en', label: 'English' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-slate-950/90 border-b border-stone-200 dark:border-emerald-500/20 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Logo & Brand in Strict Language */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-emerald-400 truncate ${language === 'ur' ? 'font-urdu' : ''}`}>
                {t.siteName}
                {language !== 'ur' && <span className="text-amber-700 dark:text-amber-400">.com</span>}
              </span>
              <span className={`hidden sm:block text-xs text-slate-600 dark:text-slate-400 leading-tight ${language === 'ur' ? 'font-urdu text-sm' : ''}`}>
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 ${
                    language === 'ur' ? 'font-urdu text-base' : ''
                  } ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 font-bold shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-slate-900'
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

          {/* Right Action Icons: Strict 3-Language Toggle + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Desktop & Tablet 3-Language Strict Switcher */}
            <div className="hidden sm:flex items-center bg-stone-100 dark:bg-slate-900 p-1 rounded-2xl border border-stone-200 dark:border-emerald-500/20 shadow-xs">
              <div className="flex items-center px-2 text-slate-500 dark:text-slate-400">
                <Languages className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
              </div>
              {languageOptions.map((opt) => {
                const isActive = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    onClick={() => setLanguage(opt.code)}
                    className={`px-3 py-1 text-xs rounded-xl font-bold transition-all ${
                      isActive
                        ? 'bg-emerald-800 text-white shadow-sm scale-105'
                        : 'text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-300'
                    } ${opt.code === 'ur' ? 'font-urdu text-sm leading-none pt-1.5' : ''}`}
                    title={`Switch to ${opt.label}`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Quick Compact Language Switcher */}
            <div className="sm:hidden flex items-center bg-stone-100 dark:bg-slate-900 p-0.5 rounded-xl border border-stone-200 dark:border-emerald-500/20">
              {languageOptions.map((opt) => {
                const isActive = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    onClick={() => setLanguage(opt.code)}
                    className={`px-2 py-0.5 text-[11px] font-bold rounded-lg transition-all ${
                      isActive
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-700 dark:text-slate-300'
                    } ${opt.code === 'ur' ? 'font-urdu text-xs leading-none pt-1' : ''}`}
                  >
                    {opt.code === 'ur' ? 'اردو' : opt.code.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 transition"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
              )}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-stone-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-800 mb-2">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {language === 'ur' ? 'زبان منتخب کریں:' : language === 'ro' ? 'Language chunein:' : 'Select Language:'}
            </span>
            <div className="flex gap-1">
              {languageOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => {
                    setLanguage(opt.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                    language === opt.code
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-400 bg-stone-100 dark:bg-slate-800'
                  } ${opt.code === 'ur' ? 'font-urdu' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium ${
                  language === 'ur' ? 'font-urdu text-base' : ''
                } ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
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
