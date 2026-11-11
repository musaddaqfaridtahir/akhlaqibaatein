import { Category, Language } from './types';

export const categories: Category[] = [
  {
    id: '1',
    slug: 'ahkam-e-khuda',
    titleUrdu: 'قرآن و احکامِ الٰہی',
    titleRoman: 'Quran o Ahkam-e-Khuda',
    titleEnglish: 'Quran & Divine Commandments',
    descriptionUrdu: 'قرآنِ مجید کے ابدی اخلاقی احکام جن میں صبر، شکر، عدل اور راہِ خدا میں خرچ کرنے کی ہدایات دی گئی ہیں۔',
    descriptionRoman: 'Quran-e-Majeed ke abadi akhlaqi ahkam jin mein sabr, shukr, adal aur raah-e-Khuda mein kharch karne ki hidayat hain.',
    descriptionEnglish: 'Eternal ethical and moral commandments of the Holy Quran regarding patience, gratitude, justice, and charity.',
    iconName: 'BookOpen',
    quoteCount: 94,
  },
  {
    id: '2',
    slug: 'irshadat-e-nabawi',
    titleUrdu: 'ارشادات و احادیثِ نبوی ﷺ',
    titleRoman: 'Hadith-e-Nabawi ﷺ',
    titleEnglish: 'Prophetic Hadith ﷺ',
    descriptionUrdu: 'حضور نبی کریم ﷺ کے سنہرے ارشادات جن میں ہمسایوں کے حقوق، صدق و دیانت، حیا، اور خوش خلقی کی تلقین فرمائی گئی ہے۔',
    descriptionRoman: 'Huzoor Nabi Kareem ﷺ ke sunehre irshadat jin mein hamsayon ke huqooq, sachai, haya aur khush-khalqi ki talqeen hai.',
    descriptionEnglish: 'Sacred sayings and moral teachings of Prophet Muhammad ﷺ emphasizing neighborly rights, integrity, modesty, and compassion.',
    iconName: 'Sparkles',
    quoteCount: 136,
  },
  {
    id: '3',
    slug: 'khasail-e-nabawi',
    titleUrdu: 'پیاری سنتیں و آداب (فیضانِ سنت)',
    titleRoman: 'Pyari Sunnatain (Faizan-e-Sunnat)',
    titleEnglish: 'Prophetic Sunan & Manners (Faizan-e-Sunnat)',
    descriptionUrdu: 'خاتم النبیین ﷺ کی پیاری سنتیں، کھانے پینے، سونے جاگنے اور ملاقات کے آداب، اور بے مثال حسنِ اخلاق کے سچے اسوے۔',
    descriptionRoman: 'Khatam-un-Nabiyyin ﷺ ki pyari sunnatain, khane peene aur guftugu ke sunehre adab Faizan-e-Sunnat ki roshni mein.',
    descriptionEnglish: 'Sublime prophetic manners, daily Sunnahs of dining, greeting, humility, and lifestyle inspired by classical Shamail and Faizan-e-Sunnat.',
    iconName: 'HeartHandshake',
    quoteCount: 46,
  },
  {
    id: '4',
    slug: 'aqwal-e-sahaba',
    titleUrdu: 'اقوالِ صحابہ و زریں اقوال',
    titleRoman: 'Aqwal-e-Sahaba & Quotes',
    titleEnglish: 'Wisdom of the Companions & Golden Quotes',
    descriptionUrdu: 'حضرت ابوبکر صدیق، حضرت عمر فاروق، حضرت عثمان غنی اور حضرت علی مرتضیٰ رضی اللہ عنہم کے بصیرت افروز اقوال۔',
    descriptionRoman: 'Hazrat Abu Bakr Siddiq, Hazrat Umar Farooq, Hazrat Usman Ghani aur Hazrat Ali (R.A) ke baseerat-afrooz aqwal.',
    descriptionEnglish: 'Profound wisdom and timeless maxims of the Rightly Guided Caliphs and noble Companions (R.A).',
    iconName: 'ShieldCheck',
    quoteCount: 108,
  },
  {
    id: '5',
    slug: 'ambiya-o-hukama',
    titleUrdu: 'حکمتِ انبیاء و اقوالِ حکماء',
    titleRoman: 'Hikmat-e-Ambiya o Hukama',
    titleEnglish: 'Wisdom of Prophets & Classical Sages',
    descriptionUrdu: 'حضرت سلیمانؑ، حضرت عیسیٰؑ، حکیم لقمان اور مسلم حکماء کی اخلاقی، فکری اور تربیتی نصیحتیں۔',
    descriptionRoman: 'Hazrat Suleman (A.S), Hazrat Isa (A.S), Hakeem Luqman aur buzurgan-e-deen ki akhlaqi nasihatain.',
    descriptionEnglish: 'Moral parables and ethical aphorisms from Prophet Solomon, Prophet Jesus, Luqman the Wise, and classical Muslim thinkers.',
    iconName: 'Compass',
    quoteCount: 47,
  },
  {
    id: '6',
    slug: 'sabaq-aamoz-waqiat',
    titleUrdu: 'سبق آموز واقعات و حکایات',
    titleRoman: 'Quotes & Hikayat (Moral Stories)',
    titleEnglish: 'Quotes & Hikayat (Inspiring Moral Stories)',
    descriptionUrdu: 'تاریخِ اسلام اور کلاسیکی کتب سے عدل، ایثار، سخاوت اور عبرت حاصل کرنے کے سچے اور روح پرور واقعات۔',
    descriptionRoman: 'Tareekh-e-Islam aur classic kutub se adal, eesaar, sakhawat aur ibrat ke sachay waqiat o hikayat.',
    descriptionEnglish: 'Historical moral accounts of justice, selflessness, charity, and reflection from classical Islamic literature.',
    iconName: 'ScrollText',
    quoteCount: 19,
  },
  {
    id: '7',
    slug: 'naat-sharif',
    titleUrdu: 'نعت شریف و منظوم کلام',
    titleRoman: 'Naat Sharif Lyrics',
    titleEnglish: 'Naat Sharif Lyrics & Sacred Praise',
    descriptionUrdu: 'سرورِ کونین ﷺ کی بارگاہِ اقدس میں منظوم نذرانۂ عقیدت، حمد و ثناء، اور کلامِ رضا و اکابرینِ امت۔',
    descriptionRoman: 'Huzoor Sarwar-e-Kawnain ﷺ ki bargah mein manzoom nazrana-e-aqeedat, Naat Sharif lyrics aur kalam-e-aarifeen.',
    descriptionEnglish: 'Sacred poetry, devotional lyrics, and spiritual reflections in honor of Prophet Muhammad ﷺ with moral insights.',
    iconName: 'Sparkles',
    quoteCount: 0,
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
