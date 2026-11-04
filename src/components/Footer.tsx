'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ChevronRight } from 'lucide-react';
import { categories, getCategoryTitle } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-emerald-900/40 pt-10 sm:pt-16 pb-10 sm:pb-12 mt-12 sm:mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className={`text-xl font-bold text-white ${isUrdu ? 'font-urdu' : 'tracking-tight'}`}>
                {t.siteName}
                {language !== 'ur' && <span className="text-amber-500">.com</span>}
              </span>
            </Link>
            <p className={`text-xs sm:text-sm text-emerald-200/90 ${isUrdu ? 'font-urdu text-xs sm:text-sm leading-[1.85]' : 'leading-relaxed'}`}>
              {t.footerMission}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerAbout}
            </p>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className={`text-sm font-semibold text-white uppercase flex items-center gap-2 ${isUrdu ? 'font-urdu text-xs sm:text-sm' : 'tracking-wider'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t.categories}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className={`hover:text-amber-400 transition flex items-center text-slate-400 hover:text-white ${
                      isUrdu ? 'font-urdu' : ''
                    }`}
                  >
                    <span>{getCategoryTitle(cat, language)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Portals */}
          <div className="space-y-3">
            <h4 className={`text-sm font-semibold text-white uppercase flex items-center gap-2 ${isUrdu ? 'font-urdu text-xs sm:text-sm' : 'tracking-wider'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t.portalsHeading}</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/chahal-hadith" className={`hover:text-amber-400 transition flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t.chahalHadith}</span>
                </Link>
              </li>
              <li>
                <Link href="/articles" className={`hover:text-amber-400 transition flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t.articles}</span>
                </Link>
              </li>
              <li>
                <Link href="/books" className={`hover:text-amber-400 transition flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t.books}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={`hover:text-amber-400 transition flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t.about}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Compliance */}
          <div className="space-y-3">
            <h4 className={`text-sm font-semibold text-white uppercase flex items-center gap-2 ${isUrdu ? 'font-urdu text-xs sm:text-sm' : 'tracking-wider'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t.legalHeading}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className={`hover:text-amber-400 transition ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className={`hover:text-amber-400 transition ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={`hover:text-amber-400 transition ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.disclaimer}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`hover:text-amber-400 transition ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} AkhlaqiBaatein.com &bull; {t.rightsReserved}</p>
          <p className={`flex items-center gap-1 text-emerald-300 ${isUrdu ? 'font-urdu text-sm' : ''}`}>
            {t.footerQuote}
          </p>
        </div>
      </div>
    </footer>
  );
}
