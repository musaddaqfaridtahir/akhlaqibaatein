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
    slug: 'faizan-e-sunnat',
    titleUrdu: 'فیضانِ سنت (آداب و اخلاقِ نبوی ﷺ)',
    titleRoman: 'Faizan-e-Sunnat: Sunan o Aadaab-e-Nabawi ﷺ',
    titleEnglish: 'Faizan-e-Sunnat: Prophetic Etiquette & Daily Sunnahs',
    author: 'Classical Sunnah Compilations',
    authorUrdu: 'مستند کتبِ سنت و شمائل',
    authorEnglish: 'Authenticated Classical Sunnah Works',
    publicationYear: 'Upcoming Edition',
    status: 'coming-soon',
    descriptionUrdu: 'روزمرہ زندگی، کھانے پینے، گفتگو، ملاقات، سفر اور عبادات کی پاکیزہ سنتوں اور ان کی روحانی برکات پر مبنی جامع موضوعاتی سلسلہ۔',
    descriptionRoman: 'Rozmarrah zindagi, khane peene, guftugu, mulaqat aur ibadat ki pyari sunnaton aur un ki barkaton par mabni silsila.',
    description: 'A structured volume dedicated to prophetic etiquette, daily Sunnah practices, and their profound spiritual wisdom in everyday life.',
    chapters: [],
  },
  {
    id: 'b3',
    slug: 'muntakhib-ahadith',
    titleUrdu: 'منتخب احادیثِ مبارکہ',
    titleRoman: 'Muntakhib Ahadith-e-Mubarakah',
    titleEnglish: 'Muntakhib Ahadith: Selected Prophetic Traditions',
    author: 'Kutub-e-Sittah & Classical Mohadditheen',
    authorUrdu: 'ائمہ محدثین (صحاحِ ستہ)',
    authorEnglish: 'Classical Hadith Compilers (Sihah Sittah)',
    publicationYear: 'Upcoming Edition',
    status: 'coming-soon',
    descriptionUrdu: 'صحیح بخاری، صحیح مسلم اور سننِ اربعہ سے ایمان، اخلاق، معاشرت اور تزکیۂ نفس پر مشتمل مستند احادیث کا سہ لسانی انتخاب۔',
    descriptionRoman: 'Sahih Bukhari, Sahih Muslim aur Sunan-e-Arbaa se iman, akhlaq aur muashrat par mabni mustanad ahadith ka intekhab.',
    description: 'Authenticated selections from the Six Canonical Hadith Collections addressing faith, ethical refinement, justice, and community life.',
    chapters: [],
  },
  {
    id: 'b4',
    slug: 'qurani-ayaat',
    titleUrdu: 'منتخب قرآنی آیات و تدبرِ قرآن',
    titleRoman: 'Qurani Ayaat: Tadabbur o Hikmat',
    titleEnglish: 'Selected Quranic Verses & Moral Contemplation',
    author: 'Al-Quran Al-Kareem (Thematic Tafseer)',
    authorUrdu: 'القرآن الحکیم (موضوعاتی تفسیر)',
    authorEnglish: 'The Noble Quran (Ethical Reflections)',
    publicationYear: 'Upcoming Edition',
    status: 'coming-soon',
    descriptionUrdu: 'قرآنِ کریم کی ابدی اخلاقی تعلیمات، والدین کے حقوق، عدل و احسان، سچائی اور صبر و شکر کی روشنی میں جامع تفہیم و تدبر۔',
    descriptionRoman: 'Quran-e-Kareem ki abadi akhlaqi taleemat, huqooq-ul-ibad, adal o ihsan aur sabr o shukr par mabni tafheem.',
    description: 'A thematic treasury exploring Quranic injunctions on truthfulness, mercy, humility, stewardship, and ethical accountability.',
    chapters: [],
  },
  {
    id: 'b5',
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
