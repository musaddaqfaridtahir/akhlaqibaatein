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
import { getDuroodBySlug } from '@/data/durood';
import { getNaatBySlug } from '@/data/naats';

export const BASE_URL = 'https://akhlaqibaatein.com';

export function getLocalizedQuotePath(slug: string, lang: Language): string {
  if (lang === 'en') return `/en/quotes/${slug}`;
  if (lang === 'ro') return `/roman/quotes/${slug}`;
  return `/quotes/${slug}`;
}

export function getLocalizedDuroodPath(slug: string, lang: Language): string {
  if (lang === 'en') return `/en/durood/${slug}`;
  if (lang === 'ro') return `/roman/durood/${slug}`;
  return `/durood/${slug}`;
}

export function getLocalizedNaatPath(slug: string, lang: Language): string {
  if (lang === 'en') return `/en/naat/${slug}`;
  if (lang === 'ro') return `/roman/naat/${slug}`;
  return `/naat/${slug}`;
}

export function getLocalizedPath(pathname: string, targetLang: Language): string {
  if (!pathname || pathname === '/') return '/';

  // 1. Durood detail: /(en|roman)/durood/[slug] or /durood/[slug]
  const duroodDetailMatch = pathname.match(/^\/(?:(?:en|roman)\/)?durood\/([^/?#]+)/i);
  if (duroodDetailMatch) {
    const slug = duroodDetailMatch[1];
    return getLocalizedDuroodPath(slug, targetLang);
  }

  // 2. Durood hub: /(en|roman)/durood or /durood
  if (/^\/(?:(?:en|roman)\/)?durood\/?$/i.test(pathname)) {
    if (targetLang === 'en') return '/en/durood';
    if (targetLang === 'ro') return '/roman/durood';
    return '/durood';
  }

  // 3. Naat detail: /(en|roman)/naat/[slug] or /naat/[slug]
  const naatDetailMatch = pathname.match(/^\/(?:(?:en|roman)\/)?naat\/([^/?#]+)/i);
  if (naatDetailMatch) {
    const slug = naatDetailMatch[1];
    return getLocalizedNaatPath(slug, targetLang);
  }

  // 4. Naat hub: /(en|roman)/naat or /naat
  if (/^\/(?:(?:en|roman)\/)?naat\/?$/i.test(pathname)) {
    if (targetLang === 'en') return '/en/naat';
    if (targetLang === 'ro') return '/roman/naat';
    return '/naat';
  }

  // 5. Quote detail: /(en|roman)/quotes/[slug] or /quotes/[slug]
  const quoteMatch = pathname.match(/^\/(?:(?:en|roman)\/)?quotes?\/([^/?#]+)/i);
  if (quoteMatch) {
    const slug = quoteMatch[1];
    return getLocalizedQuotePath(slug, targetLang);
  }

  return pathname;
}

export function getLocalizedQuoteUrl(slug: string, lang: Language): string {
  return `${BASE_URL}${getLocalizedQuotePath(slug, lang)}`;
}

export function getQuoteSlugFromPathname(pathname: string): string | null {
  const match = pathname.match(/^\/(?:(?:en|roman)\/)?quotes?\/([^/?#]+)/i);
  return match ? match[1] : null;
}

export function getRouteLanguageFromPathname(pathname: string): Language | null {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  if (pathname.startsWith('/roman/') || pathname === '/roman') return 'ro';
  if (
    pathname.startsWith('/quotes/') ||
    pathname.startsWith('/durood') ||
    pathname.startsWith('/naat')
  ) {
    return 'ur';
  }
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

export function buildDuroodMetadata(slug: string, lang: Language): Metadata {
  const durood = getDuroodBySlug(slug);

  if (!durood) {
    return {
      title: lang === 'en' ? 'Durood Not Found' : lang === 'ro' ? 'Durood Dastyab Nahi' : 'درود دستیاب نہیں',
    };
  }

  const canonicalUrl = `${BASE_URL}${getLocalizedDuroodPath(durood.slug, lang)}`;

  const title =
    lang === 'en'
      ? `${durood.title.en} — Arabic Text, English Meaning & Benefits | AkhlaqiBaatein.com`
      : lang === 'ro'
      ? `${durood.title.ro} — Arabic Matn, Roman Urdu Tarjuma aur Fazilat | AkhlaqiBaatein.com`
      : `${durood.title.ur} | ${durood.title.en} — عربی متن، اردو ترجمہ و فضیلت`;

  const description =
    lang === 'en'
      ? `${durood.englishTranslation.slice(0, 110)} — Benefits: ${durood.fazilat.en.slice(0, 110)}`
      : lang === 'ro'
      ? `${durood.romanUrdu.slice(0, 110)} — Fazilat: ${durood.fazilat.ro.slice(0, 110)}`
      : `${durood.urduTranslation} — ${durood.fazilat.ur}`.slice(0, 160);

  const keywords =
    lang === 'en'
      ? [
          durood.title.en,
          'Durood Sharif in English',
          'Salawat on Prophet Muhammad',
          'Benefits of Durood',
          ...durood.seoKeywords,
        ]
      : lang === 'ro'
      ? [
          durood.title.ro,
          'Durood sharif Roman Urdu',
          'Durood ki fazilat',
          'Durood o Salam roman',
          ...durood.seoKeywords,
        ]
      : [
          durood.title.ur,
          durood.title.en,
          'درود شریف اردو ترجمہ',
          'درود پاک کی فضیلت',
          ...durood.seoKeywords,
        ];

  return {
    title,
    description,
    keywords,
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
      ur: `${BASE_URL}/durood/${durood.slug}`,
      ro: `${BASE_URL}/roman/durood/${durood.slug}`,
      en: `${BASE_URL}/en/durood/${durood.slug}`,
    }),
  };
}

export function buildNaatMetadata(slug: string, lang: Language): Metadata {
  const naat = getNaatBySlug(slug);

  if (!naat) {
    return {
      title: lang === 'en' ? 'Naat Not Found' : lang === 'ro' ? 'Naat Dastyab Nahi' : 'نعت دستیاب نہیں',
    };
  }

  const canonicalUrl = `${BASE_URL}${getLocalizedNaatPath(naat.slug, lang)}`;

  const title =
    lang === 'en'
      ? `${naat.title.en} by ${naat.poet.en} — Complete Lyrics, Commentary & Meaning`
      : lang === 'ro'
      ? `${naat.title.ro} — Kalam ${naat.poet.ro} (Mukammal Ashaar aur Tashreeh)`
      : `${naat.title.ur} | ${naat.poet.ur} — مکمل اشعار، فرہنگ و تشریح`;

  const description =
    lang === 'en'
      ? `Classical prophetic devotional poetry by ${naat.poet.en} (${naat.sourceBook.en}). ${naat.tashreeh.en.slice(0, 130)}`
      : lang === 'ro'
      ? `Kalam: ${naat.poet.ro} (${naat.sourceBook.ro}). ${naat.tashreeh.ro.slice(0, 140)}`
      : `${naat.ashaar[0]?.misra1Ur} — ${naat.ashaar[0]?.misra2Ur}۔ کلام: ${naat.poet.ur} (${naat.sourceBook.ur})۔ ${naat.tashreeh.ur}`.slice(0, 160);

  const keywords =
    lang === 'en'
      ? [
          naat.title.en,
          naat.poet.en,
          naat.sourceBook.en,
          'Naat Sharif lyrics English',
          'Islamic Devotional Poetry',
          ...naat.seoKeywords,
        ]
      : lang === 'ro'
      ? [
          naat.title.ro,
          naat.poet.ro,
          naat.sourceBook.ro,
          'Naat lyrics Roman Urdu',
          'Kalam e Raza Roman',
          ...naat.seoKeywords,
        ]
      : [
          ...naat.seoKeywords,
          naat.title.ur,
          naat.poet.ur,
          naat.sourceBook.ur,
          'نعت شریف اردو اشعار',
        ];

  return {
    title,
    description,
    keywords,
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
      ur: `${BASE_URL}/naat/${naat.slug}`,
      ro: `${BASE_URL}/roman/naat/${naat.slug}`,
      en: `${BASE_URL}/en/naat/${naat.slug}`,
    }),
  };
}
