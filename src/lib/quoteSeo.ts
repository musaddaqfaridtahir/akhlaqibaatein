import type { Metadata } from 'next';
import { Language } from '@/data/types';
import {
  getQuoteBySlug,
  getQuoteTitle,
  getQuoteText,
  getQuoteAuthor,
  getQuoteTashreeh,
  getQuoteSource,
  getQuoteTags,
  formatBookRef,
} from '@/data/quotes';

export const BASE_URL = 'https://akhlaqibaatein.com';

export function getLocalizedQuotePath(slug: string, lang: Language): string {
  if (lang === 'en') return `/en/quotes/${slug}`;
  if (lang === 'ro') return `/roman/quotes/${slug}`;
  return `/quotes/${slug}`;
}

export function getLocalizedQuoteUrl(slug: string, lang: Language): string {
  return `${BASE_URL}${getLocalizedQuotePath(slug, lang)}`;
}

export function getQuoteSlugFromPathname(pathname: string): string | null {
  const match = pathname.match(/^\/(?:(?:en|roman)\/)?quotes?\/([^/?#]+)/i);
  return match ? match[1] : null;
}

export function getRouteLanguageFromPathname(pathname: string): Language | null {
  if (pathname.startsWith('/en/')) return 'en';
  if (pathname.startsWith('/roman/')) return 'ro';
  if (pathname.startsWith('/quotes/')) return 'ur';
  return null;
}

export function buildHreflangAlternates(paths: {
  canonical: string;
  ur: string;
  en: string;
  ro?: string;
}): NonNullable<Metadata['alternates']> {
  return {
    canonical: paths.canonical,
    languages: {
      ur: paths.ur,
      en: paths.en,
      ...(paths.ro ? { 'ur-Latn': paths.ro } : {}),
      'x-default': paths.ur,
    },
  };
}

export function buildQuoteMetadata(
  slug: string,
  lang: Language,
  options: { canonicalLang?: Language } = {}
): Metadata {
  const quote = getQuoteBySlug(slug);

  if (!quote) {
    return {
      title: lang === 'en' ? 'Quote Not Found' : 'قول دستیاب نہیں',
    };
  }

  const canonicalLang = options.canonicalLang || lang;
  const quoteTitle = getQuoteTitle(quote, lang);
  const quoteText = getQuoteText(quote, lang);
  const quoteAuthor = getQuoteAuthor(quote, lang);
  const quoteTashreeh = getQuoteTashreeh(quote, lang);
  const cleanSource = formatBookRef(getQuoteSource(quote, lang), quote.category, lang);
  const localizedTags = getQuoteTags(quote, lang);

  const title =
    lang === 'en'
      ? `${quoteTitle || quoteText.slice(0, 56)} — ${quoteAuthor}`
      : lang === 'ro'
      ? `${quoteTitle || quoteText.slice(0, 56)} — ${quoteAuthor}`
      : quoteTitle
      ? `${quoteTitle} — ${quoteAuthor}`
      : `${quoteText.slice(0, 52)}... (${quoteAuthor})`;

  const sourceSuffix = cleanSource ? ` (${cleanSource})` : '';
  const description =
    lang === 'en'
      ? `${quoteText.slice(0, 115)}${sourceSuffix} — ${quoteTashreeh.slice(0, 120)}`
      : lang === 'ro'
      ? `${quoteText.slice(0, 115)}${sourceSuffix} — ${quoteTashreeh.slice(0, 120)}`
      : `${quoteText.slice(0, 105)}${sourceSuffix} | ${quoteTashreeh.slice(0, 110)}`;

  const canonicalUrl = getLocalizedQuoteUrl(quote.slug, canonicalLang);

  return {
    title,
    description,
    keywords: [
      quoteAuthor,
      quote.authorEnglish,
      quote.authorUrdu,
      quote.category,
      ...localizedTags,
      ...quote.tags,
      'AkhlaqiBaatein',
      'Makhzan-e-Akhlaq',
      'Islamic Quotes',
      'Islami Aqwal',
      'Hadith in Urdu and English',
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      locale: lang === 'en' ? 'en_US' : 'ur_PK',
      url: canonicalUrl,
      siteName: 'AkhlaqiBaatein.com',
      images: [
        {
          url: `${BASE_URL}/logo.png`,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [`${BASE_URL}/logo.png`],
    },
    alternates: buildHreflangAlternates({
      canonical: canonicalUrl,
      ur: getLocalizedQuoteUrl(quote.slug, 'ur'),
      ro: getLocalizedQuoteUrl(quote.slug, 'ro'),
      en: getLocalizedQuoteUrl(quote.slug, 'en'),
    }),
  };
}
