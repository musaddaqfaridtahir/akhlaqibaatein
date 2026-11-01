export type Language = 'ur' | 'ro' | 'en';

export interface LocalizedText {
  ur: string;
  ro: string;
  en: string;
}

export interface QuoteItem {
  id: string;
  slug: string;
  categorySlug: string;
  bookRef: string;
  author: LocalizedText;
  title: LocalizedText;
  quote: LocalizedText;
  tashreeh: LocalizedText;
  tags: LocalizedText[];
}

export interface Category {
  id: string;
  slug: string;
  titleUrdu: string;
  titleRoman: string;
  titleEnglish: string;
  descriptionUrdu: string;
  descriptionRoman: string;
  descriptionEnglish: string;
  iconName: string;
  quoteCount: number;
}

export interface Quote {
  id: string;
  slug: string;
  category: string; // matches Category slug
  author: string; // Roman name
  authorUrdu: string;
  authorEnglish: string;
  authorEra?: string;
  authorEraUrdu?: string;
  authorEraEnglish?: string;
  urdu: string;
  roman: string;
  english: string;
  tashreeh: string; // Urdu detailed commentary
  tashreehRoman: string; // Roman Urdu detailed commentary
  tashreehEnglish: string; // English detailed commentary
  amliSabaq?: string; // Urdu daily practical lesson
  amliSabaqRoman?: string; // Roman daily practical lesson
  amliSabaqEnglish?: string; // English daily practical lesson
  source: string; // Urdu source
  sourceRoman: string; // Roman source
  sourceEnglish: string; // English source
  tags: string[];
  tagsUrdu?: string[];
  tagsEnglish?: string[];
  bookSlug?: string;
  bookRef?: string;
  title?: LocalizedText;
  featured?: boolean;
}

export interface ChahalHadithItem {
  id: number;
  arabic: string;
  urdu: string;
  roman: string;
  english: string;
  tashreeh: string; // Urdu
  tashreehRoman: string; // Roman
  tashreehEnglish: string; // English
  reference: string;
  referenceUrdu: string;
  referenceEnglish: string;
  theme: string;
  themeUrdu: string;
  themeEnglish: string;
}

export interface Article {
  id: string;
  slug: string;
  titleUrdu: string;
  titleRoman: string;
  titleEnglish: string;
  category: string;
  author: string;
  authorUrdu: string;
  authorEnglish: string;
  readTime: string;
  readTimeUrdu: string;
  readTimeEnglish: string;
  publishedAt: string;
  summaryUrdu: string;
  summaryRoman: string;
  summaryEnglish: string;
  content: {
    heading: string;
    headingUrdu: string;
    headingRoman: string;
    headingEnglish: string;
    bodyUrdu: string;
    bodyRoman: string;
    bodyEnglish: string;
  }[];
  keyTakeaways: string[];
  keyTakeawaysRoman: string[];
  keyTakeawaysEnglish: string[];
  tags: string[];
}

export interface BookChapter {
  number: number;
  titleUrdu: string;
  titleRoman: string;
  titleEnglish: string;
  description: string;
  descriptionUrdu: string;
  descriptionRoman: string;
  quoteCount: number;
}

export interface Book {
  id: string;
  slug: string;
  titleUrdu: string;
  titleRoman: string;
  titleEnglish: string;
  author: string;
  authorUrdu: string;
  authorEnglish: string;
  publicationYear: string;
  description: string;
  descriptionUrdu: string;
  descriptionRoman: string;
  chapters: BookChapter[];
  status: 'available' | 'coming-soon';
}
