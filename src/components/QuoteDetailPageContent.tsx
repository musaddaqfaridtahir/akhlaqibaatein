import React from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Language, Quote } from '@/data/types';
import { getCategoryBySlug, getCategoryTitle } from '@/data/categories';
import {
  getQuoteAuthor,
  getQuoteTags,
  getQuoteTashreeh,
  getQuoteText,
  getQuoteTitle,
  getRelatedQuotes,
} from '@/data/quotes';
import { getLocalizedQuoteUrl } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import QuoteDetailView from '@/components/QuoteDetailView';
import SupportAndResourcesCard from '@/components/SupportAndResourcesCard';

interface QuoteDetailPageContentProps {
  quote: Quote;
  routeLanguage: Language;
}

export default function QuoteDetailPageContent({
  quote,
  routeLanguage,
}: QuoteDetailPageContentProps) {
  const isUrdu = routeLanguage === 'ur';
  const category = getCategoryBySlug(quote.category);
  const categoryTitle = category ? getCategoryTitle(category, routeLanguage) : quote.category;
  const quoteTitle = getQuoteTitle(quote, routeLanguage) || getQuoteText(quote, routeLanguage).slice(0, 60);
  const quoteText = getQuoteText(quote, routeLanguage);
  const quoteAuthor = getQuoteAuthor(quote, routeLanguage);
  const quoteTashreeh = getQuoteTashreeh(quote, routeLanguage);
  const relatedQuotes = getRelatedQuotes(
    quote.slug,
    quote.category,
    6,
    getQuoteTags(quote, routeLanguage)
  );
  const quoteUrl = getLocalizedQuoteUrl(quote.slug, routeLanguage);
  const BreadcrumbArrow = isUrdu ? ChevronLeft : ChevronRight;

  return (
    <>
      <JsonLd
        type="quotation"
        quote={{
          text: quoteText,
          author: quoteAuthor,
          url: quoteUrl,
        }}
      />
      <JsonLd
        type="article"
        article={{
          title: quoteTitle,
          description: quoteTashreeh,
          url: quoteUrl,
          author: quoteAuthor,
          publishedAt: '2025-01-01',
        }}
      />

      <div
        dir={isUrdu ? 'rtl' : 'ltr'}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8"
      >
        <nav
          aria-label="Breadcrumb"
          className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 flex-wrap ${
            isUrdu ? 'font-urdu' : ''
          }`}
        >
          <Link href="/" className="hover:text-emerald-800 dark:hover:text-amber-300 font-medium transition">
            {isUrdu ? 'صفحہ اول' : 'Home'}
          </Link>
          <BreadcrumbArrow className="w-3.5 h-3.5 opacity-60 shrink-0" />
          {category && (
            <>
              <Link
                href={`/category/${category.slug}`}
                className="hover:text-emerald-800 dark:hover:text-amber-300 font-medium transition"
              >
                {categoryTitle}
              </Link>
              <BreadcrumbArrow className="w-3.5 h-3.5 opacity-60 shrink-0" />
            </>
          )}
          <span className="text-slate-900 dark:text-white font-semibold line-clamp-1">
            {quoteTitle}
          </span>
        </nav>

        <AdSlot position="header" />

        <QuoteDetailView
          quote={quote}
          category={category}
          relatedQuotes={relatedQuotes}
          routeLanguage={routeLanguage}
        />

        <AdSlot position="in-article" />

        <SupportAndResourcesCard quote={quote} routeLanguage={routeLanguage} />

        <AdSlot position="footer" />
      </div>
    </>
  );
}
