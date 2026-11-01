import { Book, BookChapter, Language } from './types';

export const books: Book[] = [
  {
    id: 'b1',
    slug: 'makhzan-e-akhlaq',
    titleUrdu: 'مخزنِ اخلاق',
    titleRoman: 'Makhzan-e-Akhlaq: The Treasury of Moral Wisdom',
    titleEnglish: 'Makhzan-e-Akhlaq: The Treasury of Moral Wisdom',
    author: 'Maulana Fazl-e-Haq / Classic Islamic Sages',
    authorUrdu: 'مولانا فضلِ حق و علمائے سلف',
    authorEnglish: 'Maulana Fazl-e-Haq & Classical Sages',
    publicationYear: '1904',
    status: 'available',
    descriptionUrdu: 'اردو ادب اور اسلامی اخلاقیات کی تاریخی شاہکار کتاب جس میں آیاتِ قرآنی، احادیثِ نبوی، اقوالِ صحابہ، اور صوفیاء و حکماء کی حکمت بھری نصیحتوں کو موضوع وار منظم کیا گیا ہے۔',
    descriptionRoman: 'Urdu adab aur Islami akhlaqiat ki tareekhi shahkar kitaab jis mein ayaat, ahadith, aqwal-e-sahaba aur hukama ki nasihaton ko jama kiya gaya hai.',
    description: 'A foundational masterpiece of classical Urdu and Islamic moral literature compiling essential ethical virtues across thematic chapters.',
    chapters: [
      {
        number: 1,
        titleUrdu: 'باب اول: احکامِ خدا و توحید',
        titleRoman: 'Baab 1: Ahkam-e-Khuda & Tauheed',
        titleEnglish: 'Chapter 1: Divine Commands & Monotheism',
        description: 'Divine commands on worship, truthfulness, and soul purification.',
        descriptionUrdu: 'توحید، سچائی اور باطنی پاکیزگی کے ربانی احکام۔',
        descriptionRoman: 'Tauheed, sachai aur roohani pakeezgi ke ilahi ahkam.',
        quoteCount: 15,
      },
      {
        number: 2,
        titleUrdu: 'باب دوم: مکارمِ اخلاق و شمائلِ نبوی ﷺ',
        titleRoman: 'Baab 2: Makarim-e-Akhlaq & Shamail-e-Nabawi ﷺ',
        titleEnglish: 'Chapter 2: Prophetic Character & Compassion',
        description: 'Prophetic character, humility, smiling, and speaking gently.',
        descriptionUrdu: 'رسول اللہ ﷺ کا حسنِ خلق، عاجزی، مسکراہٹ اور نرم گفتگو۔',
        descriptionRoman: 'Huzoor ﷺ ka husn-e-akhlaq, aajzi aur narmi.',
        quoteCount: 24,
      },
      {
        number: 3,
        titleUrdu: 'باب سوم: حقوق العباد و حقوق الجوار',
        titleRoman: 'Baab 3: Huqooq-ul-Ibaad & Hamsaye ke Huqooq',
        titleEnglish: 'Chapter 3: Human Rights & Neighborly Duties',
        description: 'Social duties towards parents, neighbors, and the poor.',
        descriptionUrdu: 'والدین، ہمسایوں اور ناداروں کے معاشرتی و اخلاقی حقوق۔',
        descriptionRoman: 'Walidain, parosion aur ghareebon ke huqooq.',
        quoteCount: 18,
      },
      {
        number: 4,
        titleUrdu: 'باب چہارم: صبر، شکر اور استقامت',
        titleRoman: 'Baab 4: Sabr, Shukr & Istaqamat',
        titleEnglish: 'Chapter 4: Patience, Gratitude & Perseverance',
        description: 'Virtue of endurance during trials and profound gratitude in ease.',
        descriptionUrdu: 'آزمائش میں صبر اور خوشحالی میں شکر کی لازوال فضیلت۔',
        descriptionRoman: 'Aazmaish mein sabr aur nemat par shukr ki fazeelat.',
        quoteCount: 22,
      },
      {
        number: 5,
        titleUrdu: 'باب پنجم: حکمتِ لقمان و دانائے سلف',
        titleRoman: 'Baab 5: Hikmat-e-Luqman & Ancient Sages',
        titleEnglish: 'Chapter 5: Counsel of Luqman the Wise',
        description: 'Timeless parables and aphorisms from Luqman the Wise.',
        descriptionUrdu: 'حکیم لقمان اور دانائے روزگار کے سنہرے اور فکری ارشادات۔',
        descriptionRoman: 'Hakeem Luqman aur danish-waron ke sunehre aqwal.',
        quoteCount: 16,
      },
    ],
  },
  {
    id: 'b2',
    slug: 'gulistan-e-saadi',
    titleUrdu: 'گلستانِ سعدی',
    titleRoman: 'Gulistan-e-Saadi',
    titleEnglish: 'The Rose Garden by Sheikh Saadi',
    author: 'Sheikh Saadi Shirazi (رحمۃ اللہ علیہ)',
    authorUrdu: 'شیخ مصلح الدین سعدی شیرازیؒ',
    authorEnglish: 'Sheikh Saadi Shirazi (R.A)',
    publicationYear: 'Classic 1258 CE',
    status: 'coming-soon',
    descriptionUrdu: 'فارسی و اردو دنیا کا سب سے زیادہ پڑھا جانے والا اخلاقی مجموعہ جس میں دلنشین حکایات بیان ہوئی ہیں۔',
    descriptionRoman: 'Farsi o Urdu dunya ka mashhoor akhlaqi majmooa jis mein sunehri hikayat darj hain.',
    description: 'One of the greatest moral classics of world literature filled with parables on justice and contentment.',
    chapters: [],
  },
];

export function getBookTitle(book: Book, lang: Language): string {
  if (lang === 'ur') return book.titleUrdu;
  if (lang === 'en') return book.titleEnglish;
  return book.titleRoman;
}

export function getBookDesc(book: Book, lang: Language): string {
  if (lang === 'ur') return book.descriptionUrdu;
  if (lang === 'en') return book.description;
  return book.descriptionRoman;
}

export function getBookAuthor(book: Book, lang: Language): string {
  if (lang === 'ur') return book.authorUrdu;
  if (lang === 'en') return book.authorEnglish;
  return book.author;
}

export function getChapterTitle(ch: BookChapter, lang: Language): string {
  if (lang === 'ur') return ch.titleUrdu;
  if (lang === 'en') return ch.titleEnglish;
  return ch.titleRoman;
}

export function getChapterDesc(ch: BookChapter, lang: Language): string {
  if (lang === 'ur') return ch.descriptionUrdu;
  if (lang === 'en') return ch.description;
  return ch.descriptionRoman;
}
