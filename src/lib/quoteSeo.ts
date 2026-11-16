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
import { getDuaBySlug } from '@/data/duain';

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

export function getLocalizedDuaPath(slug: string, lang: Language): string {
  if (lang === 'en') return `/en/duain/${slug}`;
  if (lang === 'ro') return `/roman/duain/${slug}`;
  return `/duain/${slug}`;
}

export function getLocalizedPath(pathname: string, targetLang: Language): string {
  if (!pathname || pathname === '/' || pathname === '/en' || pathname === '/roman' || pathname === '/ur') {
    if (targetLang === 'en') return '/en';
    if (targetLang === 'ro') return '/roman';
    return '/';
  }

  // 1. Durood detail: /(en|roman)/durood/[slug] or /durood/[slug]
  const duroodDetailMatch = pathname.match(/^\/(?:(?:en|roman|ur)\/)?durood\/([^/?#]+)/i);
  if (duroodDetailMatch) {
    const slug = duroodDetailMatch[1];
    return getLocalizedDuroodPath(slug, targetLang);
  }

  // 2. Durood hub: /(en|roman)/durood or /durood
  if (/^\/(?:(?:en|roman|ur)\/)?durood\/?$/i.test(pathname)) {
    if (targetLang === 'en') return '/en/durood';
    if (targetLang === 'ro') return '/roman/durood';
    return '/durood';
  }

  // 3. Dua detail: /(en|roman)/duain/[slug] or /duain/[slug]
  const duaDetailMatch = pathname.match(/^\/(?:(?:en|roman|ur)\/)?duain\/([^/?#]+)/i);
  if (duaDetailMatch) {
    const slug = duaDetailMatch[1];
    return getLocalizedDuaPath(slug, targetLang);
  }

  // 4. Dua hub: /(en|roman)/duain or /duain
  if (/^\/(?:(?:en|roman|ur)\/)?duain\/?$/i.test(pathname)) {
    if (targetLang === 'en') return '/en/duain';
    if (targetLang === 'ro') return '/roman/duain';
    return '/duain';
  }

  // 5. Naat detail: /(en|roman)/naat/[slug] or /naat/[slug]
  const naatDetailMatch = pathname.match(/^\/(?:(?:en|roman|ur)\/)?naat\/([^/?#]+)/i);
  if (naatDetailMatch) {
    const slug = naatDetailMatch[1];
    return getLocalizedNaatPath(slug, targetLang);
  }

  // 6. Naat hub: /(en|roman)/naat or /naat
  if (/^\/(?:(?:en|roman|ur)\/)?naat\/?$/i.test(pathname)) {
    if (targetLang === 'en') return '/en/naat';
    if (targetLang === 'ro') return '/roman/naat';
    return '/naat';
  }

  // 7. Quote detail: /(en|roman)/quotes/[slug] or /quotes/[slug]
  const quoteMatch = pathname.match(/^\/(?:(?:en|roman|ur)\/)?quotes?\/([^/?#]+)/i);
  if (quoteMatch) {
    const slug = quoteMatch[1];
    return getLocalizedQuotePath(slug, targetLang);
  }

  // Strip existing locale prefix to get base path
  const strippedPath = pathname.replace(/^\/(?:en|roman|ur)(?=\/|$)/, '') || '/';
  if (strippedPath === '/') {
    if (targetLang === 'en') return '/en';
    if (targetLang === 'ro') return '/roman';
    return '/';
  }

  // For general routes (tools, status-maker, articles, etc.)
  if (targetLang === 'en') return `/en${strippedPath}`;
  if (targetLang === 'ro') return `/roman${strippedPath}`;
  return strippedPath;
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
  if (pathname.startsWith('/ur/') || pathname === '/ur') return 'ur';
  if (
    pathname.startsWith('/quotes/') ||
    pathname.startsWith('/durood') ||
    pathname.startsWith('/duain') ||
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
      title: lang === 'en' ? 'Durood Not Found' : lang === 'ro' ? 'Durood Dastyab Nahi' : 'درود شریف دستیاب نہیں',
    };
  }

  const canonicalUrl = `${BASE_URL}${getLocalizedDuroodPath(durood.slug, lang)}`;

  const title =
    lang === 'en'
      ? `${durood.title.en} (${durood.title.ro}) — Arabic Text, Translation & Benefits`
      : lang === 'ro'
      ? `${durood.title.ro} with Urdu Translation & Fazilat | ${durood.title.ur}`
      : `${durood.title.ur} مع اردو ترجمہ و فضیلت | ${durood.title.ro} in Urdu`;

  const description =
    lang === 'en'
      ? `${durood.title.en} (${durood.title.ro}): Authenticated Arabic text, English translation, spiritual virtues, and interactive online Tasbeeh counter on AkhlaqiBaatein.com.`
      : lang === 'ro'
      ? `${durood.title.ro} (${durood.title.ur}) — Mustanad Arabic Naskh text, Roman Urdu tarjuma, fazilat aur online circular tasbeeh counter.`
      : `${durood.title.ur} (${durood.title.ro}) — مستند اعراب شدہ عربی متن، اردو ترجمہ، فضیلت و برکات اور آن لائن ڈیجیٹل سرکلر تسبیح کاؤنٹر کے ساتھ۔`;

  const keywords =
    lang === 'en'
      ? [
          durood.title.en,
          durood.title.ro,
          'Durood Sharif in English',
          'Salawat on Prophet Muhammad',
          'Benefits of Durood',
          'Online Tasbeeh Counter',
          ...durood.seoKeywords,
        ]
      : lang === 'ro'
      ? [
          durood.title.ro,
          durood.title.ur,
          'Durood sharif Roman Urdu',
          'Durood ki fazilat',
          'Durood o Salam roman',
          'Online Tasbeeh counter',
          ...durood.seoKeywords,
        ]
      : [
          durood.title.ur,
          durood.title.ro,
          durood.title.en,
          'درود شریف اردو ترجمہ',
          'درود پاک کی فضیلت',
          'آن لائن تسبیح کاؤنٹر',
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
      ? `${naat.title.en} (${naat.title.ro}) by ${naat.poet.en} — Complete Lyrics & Meaning`
      : lang === 'ro'
      ? `${naat.title.ro} (${naat.title.ur}) — Kalam ${naat.poet.ro} Lyrics & Tashreeh`
      : `${naat.title.ur} مع اردو ترجمہ و تشریح | ${naat.title.ro} Kalam ${naat.poet.ro}`;

  const description =
    lang === 'en'
      ? `Classical prophetic devotional poetry: ${naat.title.en} by ${naat.poet.en} (${naat.sourceBook.en}). Complete verified verses, English translation, and poetic commentary.`
      : lang === 'ro'
      ? `${naat.title.ro} — Kalam ${naat.poet.ro} (${naat.sourceBook.ro}). Mukammal ashaar, Roman Urdu tashreeh aur asan maani.`
      : `${naat.title.ur} — کلام: ${naat.poet.ur} (${naat.sourceBook.ur})۔ مکمل مستند اشعار، فرہنگ و لغت، اور جامع روحانی تشریح۔`;

  const keywords =
    lang === 'en'
      ? [
          naat.title.en,
          naat.title.ro,
          naat.poet.en,
          naat.sourceBook.en,
          'Naat Sharif lyrics English',
          'Islamic Devotional Poetry',
          ...naat.seoKeywords,
        ]
      : lang === 'ro'
      ? [
          naat.title.ro,
          naat.title.ur,
          naat.poet.ro,
          naat.sourceBook.ro,
          'Naat lyrics Roman Urdu',
          'Kalam e Raza Roman',
          ...naat.seoKeywords,
        ]
      : [
          naat.title.ur,
          naat.title.ro,
          naat.poet.ur,
          naat.sourceBook.ur,
          'نعت شریف اردو اشعار',
          'کلام رضا تشریح',
          ...naat.seoKeywords,
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

export function buildDuaMetadata(slug: string, lang: Language): Metadata {
  const dua = getDuaBySlug(slug);

  if (!dua) {
    return {
      title: lang === 'en' ? 'Dua Not Found' : lang === 'ro' ? 'Dua Dastyab Nahi' : 'دعا دستیاب نہیں',
    };
  }

  const canonicalUrl = `${BASE_URL}${getLocalizedDuaPath(dua.slug, lang)}`;

  const title =
    lang === 'en'
      ? `${dua.title.en} (${dua.title.ro}) — Arabic Text, Translation & Virtues`
      : lang === 'ro'
      ? `${dua.title.ro} with Urdu Translation & Fazilat | ${dua.title.ur}`
      : `${dua.title.ur} مع اردو ترجمہ و فضیلت | ${dua.title.ro} in Urdu`;

  const description =
    lang === 'en'
      ? `${dua.title.en} (${dua.title.ro}): Authenticated Quranic and Prophetic supplication with Arabic text, English translation, spiritual context, and digital Tasbeeh counter.`
      : lang === 'ro'
      ? `${dua.title.ro} (${dua.title.ur}) — Masnoon dua Arabic text, Roman Urdu tarjuma, fazilat aur digital circular tasbeeh counter.`
      : `${dua.title.ur} (${dua.title.ro}) — مسنون قرآنی و نبوی دعا مع اعراب شدہ عربی متن، اردو ترجمہ، فضیلت اور آن لائن ڈیجیٹل سرکلر تسبیح کاؤنٹر۔`;

  const keywords =
    lang === 'en'
      ? [
          dua.title.en,
          dua.title.ro,
          'Masnoon Duain in English',
          'Daily Islamic Supplications',
          'Prophetic Duas with translation',
          'Online Tasbeeh Counter',
          ...dua.seoKeywords,
        ]
      : lang === 'ro'
      ? [
          dua.title.ro,
          dua.title.ur,
          'Masnoon duain Roman Urdu',
          'Dua ki fazilat',
          'Islamic Duas in Roman',
          'Online Tasbeeh counter',
          ...dua.seoKeywords,
        ]
      : [
          dua.title.ur,
          dua.title.ro,
          'مسنون دعائیں اردو ترجمہ',
          'قرآنی دعائیں',
          'احادیث کی دعائیں',
          'آن لائن تسبیح کاؤنٹر',
          ...dua.seoKeywords,
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
      ur: `${BASE_URL}/duain/${dua.slug}`,
      ro: `${BASE_URL}/roman/duain/${dua.slug}`,
      en: `${BASE_URL}/en/duain/${dua.slug}`,
    }),
  };
}
