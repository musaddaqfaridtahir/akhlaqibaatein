import { Category, Language } from './types';

export const categories: Category[] = [
  {
    id: '1',
    slug: 'ahkam-e-khuda',
    titleUrdu: 'احکامِ خدا',
    titleRoman: 'Ahkam-e-Khuda',
    titleEnglish: 'Divine Commandments',
    descriptionUrdu: 'قرآنِ مجید کے ابدی اخلاقی احکام جن میں صبر، شکر، عدل اور راہِ خدا میں خرچ کرنے کی ہدایات دی گئی ہیں۔',
    descriptionRoman: 'Quran-e-Majeed ke abadi akhlaqi ahkam jin mein sabr, shukr, adal aur raah-e-Khuda mein kharch karne ki hidayat hain.',
    descriptionEnglish: 'Eternal ethical and moral commandments of the Holy Quran regarding patience, gratitude, justice, and charity.',
    iconName: 'BookOpen',
    quoteCount: 15,
  },
  {
    id: '2',
    slug: 'irshadat-e-nabawi',
    titleUrdu: 'ارشاداتِ نبوی ﷺ',
    titleRoman: 'Irshadat-e-Nabawi ﷺ',
    titleEnglish: 'Prophetic Traditions ﷺ',
    descriptionUrdu: 'حضور نبی کریم ﷺ کے سنہرے ارشادات جن میں ہمسایوں کے حقوق، صدق و دیانت، حیا، اور خوش خلقی کی تلقین فرمائی گئی ہے۔',
    descriptionRoman: 'Huzoor Nabi Kareem ﷺ ke sunehre irshadat jin mein hamsayon ke huqooq, sachai, haya aur khush-khalqi ki talqeen hai.',
    descriptionEnglish: 'Sacred sayings of Prophet Muhammad ﷺ emphasizing neighborly rights, integrity, modesty, and compassionate character.',
    iconName: 'Sparkles',
    quoteCount: 24,
  },
  {
    id: '3',
    slug: 'khasail-e-nabawi',
    titleUrdu: 'خصائل و شمائلِ نبوی ﷺ',
    titleRoman: 'Khasail-o-Shamail-e-Nabawi ﷺ',
    titleEnglish: 'Noble Virtues of the Prophet ﷺ',
    descriptionUrdu: 'خاتم النبیین ﷺ کی پاکیزہ سیرت، بے مثال تواضع، عدل و انصاف، عفو و درگزر اور مساوات کے دلنشین پہلو۔',
    descriptionRoman: 'Khatam-un-Nabiyyin ﷺ ki pakeeza seerat, be-misaal tawazoh, adal o insaf aur masawat ke sunehre pehloo.',
    descriptionEnglish: 'The sublime character, humility, equality, mercy, and exemplary lifestyle of Prophet Muhammad ﷺ.',
    iconName: 'HeartHandshake',
    quoteCount: 12,
  },
  {
    id: '4',
    slug: 'aqwal-e-sahaba',
    titleUrdu: 'اقوالِ صحابہ و خلفاءؓ',
    titleRoman: 'Aqwal-e-Sahaba & Khulafa',
    titleEnglish: 'Wisdom of the Companions & Caliphs',
    descriptionUrdu: 'حضرت ابوبکر صدیق، حضرت عمر فاروق، حضرت عثمان غنی اور حضرت علی مرتضیٰ رضی اللہ عنہم کے بصیرت افروز اقوال۔',
    descriptionRoman: 'Hazrat Abu Bakr Siddiq, Hazrat Umar Farooq, Hazrat Usman Ghani aur Hazrat Ali (R.A) ke baseerat-afrooz aqwal.',
    descriptionEnglish: 'Profound wisdom and timeless maxims of the Rightly Guided Caliphs and noble Companions (R.A).',
    iconName: 'ShieldCheck',
    quoteCount: 28,
  },
  {
    id: '5',
    slug: 'ambiya-o-hukama',
    titleUrdu: 'انبیاء و حکماء کی نصیحتیں',
    titleRoman: 'Ambiya & Hukama ki Nasihatain',
    titleEnglish: 'Counsel of Prophets & Sages',
    descriptionUrdu: 'حضرت سلیمانؑ، حضرت عیسیٰؑ، حکیم لقمان، سقراط، افلاطون اور بو علی سینا کی اخلاقی و فکری نصیحتیں۔',
    descriptionRoman: 'Hazrat Suleman (A.S), Hazrat Isa (A.S), Hakeem Luqman, Suqrat aur Bu Ali Sina ki akhlaqi nasihatain.',
    descriptionEnglish: 'Moral parables and ethical aphorisms from Prophet Solomon, Prophet Jesus, Luqman the Wise, and classical philosophers.',
    iconName: 'Compass',
    quoteCount: 18,
  },
  {
    id: '6',
    slug: 'sabaq-aamoz-waqiat',
    titleUrdu: 'سبق آموز واقعات و حکایات',
    titleRoman: 'Sabaq Aamoz Waqiat',
    titleEnglish: 'Inspiring Moral Stories',
    descriptionUrdu: 'تاریخِ اسلام اور کلاسیکی کتب سے عدل، ایثار، سخاوت اور عبرت حاصل کرنے کے سچے اور روح پرور واقعات۔',
    descriptionRoman: 'Tareekh-e-Islam aur classic kutub se adal, eesaar, sakhawat aur ibrat ke sachay waqiat.',
    descriptionEnglish: 'Historical moral accounts of justice, selflessness, charity, and reflection from classical Islamic texts.',
    iconName: 'ScrollText',
    quoteCount: 14,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoryTitle(cat: Category, lang: Language): string {
  if (lang === 'ur') return cat.titleUrdu;
  if (lang === 'en') return cat.titleEnglish;
  return cat.titleRoman;
}

export function getCategoryDesc(cat: Category, lang: Language): string {
  if (lang === 'ur') return cat.descriptionUrdu;
  if (lang === 'en') return cat.descriptionEnglish;
  return cat.descriptionRoman;
}
