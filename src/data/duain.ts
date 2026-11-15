import { Language } from './types';

export type DuaCategory =
  | 'Mushkilat'
  | 'Rizq'
  | 'Hifazat'
  | 'Sehat'
  | 'Rozana'
  | 'Ilm'
  | 'Walidain';

export interface LocalizedText {
  ur: string;
  ro: string;
  en: string;
}

export interface DuaItem {
  id: string;
  slug: string;
  title: LocalizedText;
  arabicText: string;
  urduTranslation: string;
  romanUrdu: string;
  englishTranslation: string;
  fazilat: LocalizedText;
  reference: LocalizedText;
  category: DuaCategory;
  recommendedCount: number;
  seoKeywords: string[];
  faqs: {
    question: LocalizedText;
    answer: LocalizedText;
  }[];
}

export const DUA_CATEGORIES: DuaCategory[] = [
  'Mushkilat',
  'Rizq',
  'Hifazat',
  'Sehat',
  'Rozana',
  'Ilm',
  'Walidain',
];

export function getDuaCategoryLabel(cat: DuaCategory, lang: Language): string {
  const labels: Record<DuaCategory, LocalizedText> = {
    Mushkilat: {
      ur: 'پریشانی و غم سے نجات',
      ro: 'Preshani o Gham se Nijat',
      en: 'Relief from Distress & Anxiety',
    },
    Rizq: {
      ur: 'رزق میں کشادگی و ادائے قرض',
      ro: 'Rizq o Qarz se Nijat',
      en: 'Sustenance & Debt Relief',
    },
    Hifazat: {
      ur: 'حفاظت و نظرِ بد سے امان',
      ro: 'Hifazat o Nazar-e-Bad',
      en: 'Protection & Evil Eye Defense',
    },
    Sehat: {
      ur: 'صحت، درد اور شفائے کامل',
      ro: 'Sehat aur Shifa-e-Kamil',
      en: 'Health & Healing Supplications',
    },
    Rozana: {
      ur: 'یومیہ اذکار و سفر',
      ro: 'Rozana Azkar aur Safar',
      en: 'Daily Supplications & Travel',
    },
    Ilm: {
      ur: 'علم، ذہانت و حافظہ',
      ro: 'Ilm aur Hafza mein Izafa',
      en: 'Knowledge, Memory & Wisdom',
    },
    Walidain: {
      ur: 'والدین کی مغفرت و رحمت',
      ro: 'Walidain ki Maghfirat',
      en: 'Parents Blessing & Mercy',
    },
  };
  return labels[cat]?.[lang] || cat;
}

export const duainList: DuaItem[] = [
  {
    id: 'dua-1',
    slug: 'preshani-aur-bechaini-ki-dua',
    title: {
      ur: 'پریشانی، بے چینی اور غم سے نجات کی دعا',
      ro: 'Preshani, Bechaini aur Gham se Nijat ki Dua',
      en: 'Dua for Relief from Anxiety, Sorrow, and Mental Distress',
    },
    arabicText:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    urduTranslation:
      'اے اللہ! میں غم اور فکر سے تیری پناہ مانگتا ہوں، اور عاجزی و سستی سے تیری پناہ چاہتا ہوں، اور بزدلی و کنجوسی سے تیری پناہ مانگتا ہوں، اور قرض کے بوجھ اور لوگوں کے غلبے و دباؤ سے تیری پناہ چاہتا ہوں۔',
    romanUrdu:
      'Allahumma inni a’oodhu bika minal-hammi wal-hazani, wa a’oodhu bika minal-‘ajzi wal-kasali, wa a’oodhu bika minal-jubni wal-bukhli, wa a’oodhu bika min ghalabatid-dayni wa qahrir-rijal.',
    englishTranslation:
      'O Allah! I seek refuge in You from grief and sorrow, from incapacity and laziness, from cowardice and miserliness, and from being overcome by debt and oppressed by men.',
    fazilat: {
      ur: 'یہ مبارک دعا جامع ترین نبوی اذکار میں سے ہے۔ حضرت ابو سعید خدریؓ سے روایت ہے کہ رسول اللہ ﷺ نے مسجدِ نبوی میں ایک پریشان حال انصاری صحابی حضرت ابو امامہؓ کو دیکھ کر فرمایا: "کیا میں تمہیں ایسے کلمات نہ سکھاؤں کہ جب تم انہیں پڑھو تو اللہ تمہارا غم دور فرما دے اور تمہارا قرض ادا کر دے؟" انہوں نے کہا: کیوں نہیں یا رسول اللہ! آپ ﷺ نے یہ دعا صبح و شام پڑھنے کی تلقین فرمائی۔ حضرت ابو امامہؓ فرماتے ہیں کہ میں نے یہ عمل اپنایا تو اللہ نے میرا سارا غم دور کر دیا اور میرا قرض اتار دیا۔',
      ro: 'Yeh dua pareshani aur dukhon ke dauran qalb ko sukoon bakhshti hai. Huzoor ﷺ ne Hazrat Abu Umamah (R.A) ko yeh dua subah aur sham parhne ki hidayat farmayi jis se unke qarz aur gham door ho gaye.',
      en: 'Reported by Sahih Bukhari, this comprehensive prophetic prayer shields the heart against anxiety, sorrow, lethargy, crippling debt, and human oppression. Scholars advise reciting it daily with unwavering faith.',
    },
    reference: {
      ur: 'صحیح بخاری: 2893، سنن ابی داؤد: 1555 (صحیح)',
      ro: 'Sahih Bukhari: 2893, Sunan Abi Dawud: 1555',
      en: 'Sahih Bukhari: 2893, Sunan Abi Dawud: 1555 (Sahih)',
    },
    category: 'Mushkilat',
    recommendedCount: 33,
    seoKeywords: [
      'Preshani ki dua',
      'Gham se nijat ki dua',
      'Allahumma inni aoodhu bika minal hammi',
      'Dua for anxiety and depression Islam',
      'پریشانی کی مسنون دعا',
      'غم سے نجات کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'اس دعا کو دن میں کتنی مرتبہ پڑھنا مسنون ہے؟',
          ro: 'Is dua ko din mein kitni martaba parhna chahiye?',
          en: 'How many times should this Dua be recited daily?',
        },
        answer: {
          ur: 'صبح و شام 3 یا 7 مرتبہ، اور شدید ذہنی تناؤ کے وقت 33 مرتبہ پڑھنا مجرب ہے۔',
          ro: 'Subah o sham 3 ya 7 martaba, aur shadeed pareshani ke waqt 33 bar parhein.',
          en: 'Reciting it 3 or 7 times morning and evening, or 33 times during distress, brings deep serenity.',
        },
      },
    ],
  },
  {
    id: 'dua-2',
    slug: 'qarz-se-nijat-aur-rizq-ki-dua',
    title: {
      ur: 'قرض کی ادائیگی اور کشادگیٔ رزق کی دعا',
      ro: 'Qarz ki Adayegi aur Kushadgi-e-Rizq ki Dua',
      en: 'Dua for Paying Off Debts and Attracting Abundant Halal Sustenance',
    },
    arabicText:
      'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    urduTranslation:
      'اے اللہ! مجھے اپنے حلال کے ساتھ اپنے حرام سے بے نیاز و کافی کر دے، اور مجھے اپنے فضل و کرم کے ذریعے اپنے سوا ہر کسی سے غنی و بے پروا بنا دے۔',
    romanUrdu:
      'Allahummak-fini bi-halalika ‘an haramika, wa aghnini bi-fadlika ‘amman siwaka.',
    englishTranslation:
      'O Allah! Suffice me with what is lawful against what is unlawful, and enrich me with Your bounty so that I depend on none other than You.',
    fazilat: {
      ur: 'جامع ترمذی کی صحیح روایت ہے کہ ایک مقروض شخص حضرت علی المرتضیٰؓ کے پاس حاضر ہوا اور کہا کہ میں قرض ادا کرنے سے عاجز آ گیا ہوں، میری مدد فرمائیے۔ حضرت علیؓ نے فرمایا: "کیا میں تمہیں وہ مبارک کلمات نہ سکھاؤں جو رسول اللہ ﷺ نے مجھے سکھائے تھے؟ اگر تمہارے ذمے صِیر پہاڑ کے برابر بھی قرض ہوا تو اللہ تعالیٰ تمہاری طرف سے اسے ادا فرما دے گا۔" پھر آپؓ نے یہ دعا سکھائی۔ یہ دعا مالی تنگی دور کرنے اور حلال رزق میں برکت کا نبوی وظیفہ ہے۔',
      ro: 'Hazrat Ali (R.A) ne farmaya ke agar pahar ke barabar bhi qarz ho to Allah is dua ki barkat se ada farma dega. Yeh halal rozi aur rizq ki barakat ka mustanad azim wazifa hai.',
      en: 'Narrated in Jami` at-Tirmidhi, Ali ibn Abi Talib (R.A) taught this prayer to an indebted individual, stating that even if a debt were the size of a great mountain, Allah would facilitate its settlement through sincere recitation.',
    },
    reference: {
      ur: 'جامع ترمذی: 3563، مسند احمد: 1319 (حسن صحیح)',
      ro: 'Jami` at-Tirmidhi: 3563, Musnad Ahmad: 1319',
      en: 'Jami` at-Tirmidhi: 3563, Musnad Ahmad: 1319 (Hasan Sahih)',
    },
    category: 'Rizq',
    recommendedCount: 41,
    seoKeywords: [
      'Qarz utarne ki dua',
      'Rizq ki dua',
      'Allahummakfini bi halalika',
      'Dua for paying off debt',
      'قرض سے نجات کی دعا',
      'رزق میں برکت کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا نماز کے بعد یہ دعا پڑھ سکتے ہیں؟',
          ro: 'Kya namaz ke baad yeh dua parh sakte hain?',
          en: 'Can this Dua be recited after obligatory prayers?',
        },
        answer: {
          ur: 'جی ہاں، ہر فرض نماز کے بعد 11 یا 21 مرتبہ پڑھنا رزق کی تنگی دور کرنے میں بے حد مؤثر ہے۔',
          ro: 'Har namaz ke baad 11 ya 21 martaba parhna nihayat faydemand hai.',
          en: 'Reciting it 11 or 21 times after each obligatory prayer facilitates debt relief and blessed income.',
        },
      },
    ],
  },
  {
    id: 'dua-3',
    slug: 'nazar-e-bad-se-hifazat-ki-dua',
    title: {
      ur: 'نظرِ بد اور ہر شر سے حفاظت کی دعا',
      ro: 'Nazar-e-Bad aur Har Shar se Hifazat ki Dua',
      en: 'Dua for Protection Against the Evil Eye, Envy, and Harm',
    },
    arabicText:
      'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
    urduTranslation:
      'میں پناہ مانگتا ہوں اللہ کے مکمل کلمات کے ساتھ، ہر شیطان سے اور ہر زہریلے جانور سے، اور ہر لگ جانے والی نظرِ بد سے۔',
    romanUrdu:
      'A’oodhu bi-kalimatil-lahit-tammati min kulli shaytanin wa hammah, wa min kulli ‘aynin lammah.',
    englishTranslation:
      'I seek refuge in the perfect words of Allah from every devil and poisonous creature, and from every evil, envious eye.',
    fazilat: {
      ur: 'صحیح بخاری کی متفق علیہ حدیث کے مطابق رسول اللہ ﷺ حضرت حسنؓ اور حضرت حسینؓ پر دم فرماتے ہوئے ارشاد فرماتے تھے: "تمہارے جدِ امجد سیدنا ابراہیم علیہ السلام اپنے دونوں بیٹوں اسماعیل اور اسحاق علیہما السلام کے لیے یہی کلمات پڑھ کر پناہ مانگا کرتے تھے۔" نظرِ بد برحق ہے اور انسان کو نقصان پہنچا سکتی ہے، لہٰذا بچوں، گھر اور کاروبار کو نظرِ بد سے بچانے کے لیے اس نبوی حصار کو روزانہ پڑھنا چاہیے۔',
      ro: 'Huzoor ﷺ Hazrat Hassan aur Hussain (R.A) ko yeh dua parh kar dam farmate the. Bachon aur ghar walon ko nazar-e-bad se bachane ke liye yeh behtareen nabawi hisar hai.',
      en: 'Recorded in Sahih Bukhari, the Prophet Muhammad ﷺ would seek divine protection for his grandsons Hasan and Husayn (R.A) with this supplication, affirming that Prophet Ibrahim (A.S) used the exact prayer for Ismail and Ishaq (A.S).',
    },
    reference: {
      ur: 'صحیح بخاری: 3371، سنن ابی داؤد: 4737',
      ro: 'Sahih Bukhari: 3371, Sunan Abi Dawud: 4737',
      en: 'Sahih Bukhari: 3371, Sunan Abi Dawud: 4737 (Sahih)',
    },
    category: 'Hifazat',
    recommendedCount: 33,
    seoKeywords: [
      'Nazar ki dua',
      'Nazar e bad se bachne ki dua',
      'Aoodhu bi kalimatillahit tammah',
      'Dua for evil eye protection',
      'نظر بد کی دعا',
      'حفاظت کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا بچوں پر اس دعا کا دم کیا جا سکتا ہے؟',
          ro: 'Kya bachon par dam kar sakte hain?',
          en: 'Can this be recited and blown over children?',
        },
        answer: {
          ur: 'جی ہاں! 3 مرتبہ پڑھ کر بچوں پر پھونکنا عین سنتِ نبوی ﷺ ہے۔',
          ro: 'Ji haan, 3 bar parh kar bachon par dam karna sunnat hai.',
          en: 'Yes, reciting 3 times and gently blowing over infants is directly in accordance with prophetic practice.',
        },
      },
    ],
  },
  {
    id: 'dua-4',
    slug: 'bimari-aur-dard-se-shifa-ki-dua',
    title: {
      ur: 'بیماری اور جسمانی درد سے شفاء کی مسنون دعا',
      ro: 'Bimari aur Dard se Shifa ki Masnoon Dua',
      en: 'Prophetic Dua for Healing Sickness, Pain, and Physical Suffering',
    },
    arabicText:
      'اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَاسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
    urduTranslation:
      'اے اللہ! لوگوں کے پالنے والے پروردگار! تکلیف کو دور فرما دے، شفاء عطا فرما، تو ہی شفاء دینے والا ہے، تیرے سوا کوئی شفاء دینے والا نہیں، ایسی شفاء نصیب فرما جو کسی بیماری کو باقی نہ چھوڑے۔',
    romanUrdu:
      'Allahumma Rabban-nasi, adh-hibil-ba’s, ishfi antash-Shafi, la shifa’a illa shifa’uk, shifa’an la yughadiru saqama.',
    englishTranslation:
      'O Allah, Lord of mankind! Remove the suffering and grant cure. You are the Ultimate Healer; there is no healing except Yours—a cure that leaves behind no disease.',
    fazilat: {
      ur: 'حضرت عائشہ صدیقہؓ فرماتی ہیں کہ رسول اللہ ﷺ جب بھی اپنے گھر کے کسی بیمار کی عیادت فرماتے تو اپنا دایاں ہاتھ اس کے درد کے مقام پر رکھتے اور یہ مبارک دعا پڑھتے تھے۔ اللہ تعالیٰ ہی شافیِ مطلق ہے اور مادی ادویات کے ساتھ اس مسنون دعا کا اہتمام شفاء کی رفتار کو تیز تر کر دیتا ہے۔ کینسر، بخار، آپریشن یا دائمی امراض میں مبتلا احباب کے لیے یہ اکسیرِ اعظم ہے۔',
      ro: 'Huzoor ﷺ mareez ki ayadat ke waqt apna daayan haath dard ki jagah rakh kar yeh dua parha karte the. Shifa ke liye yeh behtareen roohani nuskha hai.',
      en: 'Whenever visiting the sick, Prophet Muhammad ﷺ would place his blessed right hand upon the area of pain and invoke this prayer (Sahih Bukhari & Muslim). It represents an unmatched spiritual remedy alongside medical care.',
    },
    reference: {
      ur: 'صحیح بخاری: 5743، صحیح مسلم: 2191',
      ro: 'Sahih Bukhari: 5743, Sahih Muslim: 2191',
      en: 'Sahih Bukhari: 5743, Sahih Muslim: 2191 (Agreed Upon)',
    },
    category: 'Sehat',
    recommendedCount: 41,
    seoKeywords: [
      'Bimari se shifa ki dua',
      'Dard ki dua',
      'Allahumma rabban nas adhhibil bas',
      'Dua for sick health Shifa',
      'شفا کی دعا',
      'بیماری کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا درد کی جگہ ہاتھ رکھ کر پڑھنا ضروری ہے؟',
          ro: 'Kya dard wali jagah par haath rakhna zaroori hai?',
          en: 'Should one place their hand over the painful area while reciting?',
        },
        answer: {
          ur: 'جی ہاں، درد کی جگہ پر دایاں ہاتھ رکھ کر 7 مرتبہ یہ دعا پڑھنا سنت ہے۔',
          ro: 'Dard ki jagah daayan haath rakh kar 7 martaba parhna sunnat hai.',
          en: 'Yes, resting your right hand over the pain and reciting 7 times aligns with sunnah.',
        },
      },
    ],
  },
  {
    id: 'dua-5',
    slug: 'sakht-musibat-ke-waqt-ki-dua',
    title: {
      ur: 'شدید مصیبت اور کرب کے وقت آیتِ کریمہ کی دعا',
      ro: 'Sakht Musibat aur Karb ke Waqt Ayat-e-Kareema ki Dua',
      en: 'Ayat-e-Kareema: The Powerful Supplication for Impossible Hardships and Peril',
    },
    arabicText:
      'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    urduTranslation:
      'تیرے سوا کوئی معبود نہیں، تو ہر عیب اور نقص سے پاک ہے، بے شک میں ہی کوتاہی کرنے والوں اور قصورواروں میں سے ہوں۔',
    romanUrdu:
      'La ilaha illa anta subhanaka inni kuntu minaz-zalimeen.',
    englishTranslation:
      'There is no deity worthy of worship except You; exalted are You! Truly, I have been among the wrongdoers.',
    fazilat: {
      ur: 'یہ حضرت یونس علیہ السلام کی وہ دعا ہے جو انہوں نے مچھلی کے پیٹ کی گھپ اندھیروں میں اپنے رب سے مانگی تھی۔ رسول اللہ ﷺ نے ارشاد فرمایا: "مچھلی والے پیغمبر (ذوالنون) کی دعا جو انہوں نے مچھلی کے پیٹ میں مانگی، کوئی بھی مسلمان کسی بھی مصیبت و مشکل میں اس دعا کے ذریعے اللہ کو پکارے گا تو اللہ اس کی دعا لازماً قبول فرمائے گا۔" عدالتی مقدمات، لاعلاج بیماریوں اور گھریلو مشکلات میں اس کا ورد بے شمار برکات کا حامل ہے۔',
      ro: 'Hazrat Yunus (A.S) ne machhli ke pait mein yeh dua mangi thi. Huzoor ﷺ ne farmaya ke jo musalman kisi bhi mushkil mein yeh dua mangega, Allah usey zaroor nijat dega.',
      en: 'Found in Surah Al-Anbiya (21:87) and Jami` at-Tirmidhi (3505), the Prophet ﷺ confirmed that whenever any Muslim calls upon Allah with this supplication during any severe hardship, Allah unquestionably answers their call.',
    },
    reference: {
      ur: 'القرآن الكريم، سورة الأنبياء: 87، جامع ترمذی: 3505 (صحیح)',
      ro: 'Surah Al-Anbiya: 87, Jami` at-Tirmidhi: 3505',
      en: 'Quran 21:87, Jami` at-Tirmidhi: 3505 (Sahih)',
    },
    category: 'Mushkilat',
    recommendedCount: 100,
    seoKeywords: [
      'Ayat e kareema',
      'La ilaha illa anta subhanaka',
      'Musibat ki dua',
      'Dua of Prophet Yunus',
      'آیت کریمہ',
      'مصیبت کے وقت کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'آیتِ کریمہ کا معمول کتنی مرتبہ ہونا چاہیے؟',
          ro: 'Ayat-e-Kareema kitni dafa parhein?',
          en: 'How frequently should Ayat-e-Kareema be chanted?',
        },
        answer: {
          ur: 'روزانہ 100 مرتبہ پڑھنا غموں سے نجات دلاتا ہے، اور خصوصی ضرورت پر کثرت سے ورد کرنا چاہیے۔',
          ro: 'Rozana 100 martaba parhna ghamon se azaadi dilata hai.',
          en: 'Reciting it 100 times daily removes immense grief and brings miraculous ease.',
        },
      },
    ],
  },
  {
    id: 'dua-6',
    slug: 'sone-aur-uthne-ki-masnoon-dua',
    title: {
      ur: 'رات کو سونے اور صبح بیدار ہونے کی مسنون دعائیں',
      ro: 'Raat ko Sone aur Subah Uthne ki Masnoon Duain',
      en: 'Sunnah Supplications for Sleeping at Night and Waking in the Morning',
    },
    arabicText:
      'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا • الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    urduTranslation:
      'سونے کی دعا: اے اللہ! تیرے ہی نام کے ساتھ میں مرتا (سوتا) ہوں اور جیتا (جاگتا) ہوں۔ • بیدار ہونے کی دعا: تمام تعریفیں اس اللہ کے لیے ہیں جس نے ہمیں مارنے (سلانے) کے بعد زندہ کیا اور اسی کی طرف اٹھ کر جانا ہے۔',
    romanUrdu:
      'Sone ki dua: Bismika Allahumma amootu wa ahya. • Uthne ki dua: Alhamdu lillahilladhi ahyana ba’da ma amatana wa ilayhin-nushoor.',
    englishTranslation:
      'Before Sleep: In Your name, O Allah, I die and I live. • Upon Waking: Praise is to Allah Who gave us life after having taken it, and unto Him is the resurrection.',
    fazilat: {
      ur: 'نیند موت کی چھوٹی بہن ہے۔ سیدنا حذیفہ بن یمانؓ فرماتے ہیں کہ نبی کریم ﷺ جب رات کو اپنے بستر پر تشریف لے جاتے تو اپنا دایاں ہاتھ رخسارِ مبارک کے نیچے رکھتے اور "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا" پڑھتے۔ اور جب صبح بیدار ہوتے تو اللہ کی حمد و شکر کے ساتھ "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا..." کا ورد فرماتے۔ یہ عمل انسان کی نیند کو عبادت اور دن کے آغاز کو شکر گزاری میں بدل دیتا ہے۔',
      ro: 'Neend maut ki tarah hai. Huzoor ﷺ sote waqt bismika Allahumma aur uthte waqt Alhamdu lillahilladhi ahyana parhte the. Is se raat aur din barkat se bhar jate hain.',
      en: 'Reported in Sahih Bukhari (6312), the Prophet ﷺ taught these two sublime phrases to bracket human sleep with divine remembrance, acknowledging that every morning is a gift of resurrection and renewal.',
    },
    reference: {
      ur: 'صحیح بخاری: 6312، 6324، صحیح مسلم: 2711',
      ro: 'Sahih Bukhari: 6312, Sahih Muslim: 2711',
      en: 'Sahih Bukhari: 6312, Sahih Muslim: 2711 (Sahih)',
    },
    category: 'Rozana',
    recommendedCount: 33,
    seoKeywords: [
      'Sone ki dua',
      'Uthne ki dua',
      'Bismika Allahumma amootu wa ahya',
      'Alhamdu lillahilladhi ahyana',
      'سونے کی دعا',
      'جاگنے کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا وضو کر کے سونا سنت ہے؟',
          ro: 'Kya wazu karke sona sunnat hai?',
          en: 'Is it sunnah to perform wudhu before sleeping?',
        },
        answer: {
          ur: 'جی ہاں، باوضو ہو کر دائیں کروٹ پر سونا اور یہ مسنون دعا پڑھنا سنتِ نبوی ہے۔',
          ro: 'Ji haan, ba-wazu hokar daayin karwat sona sunnat hai.',
          en: 'Yes, going to bed in a state of purity on one’s right side and reciting this prayer is authentic sunnah.',
        },
      },
    ],
  },
  {
    id: 'dua-7',
    slug: 'ghar-se-nikalne-aur-safar-ki-dua',
    title: {
      ur: 'گھر سے نکلنے، دکان کھولنے اور سفر کی دعا',
      ro: 'Ghar se Nikalne, Dukan Kholne aur Safar ki Dua',
      en: 'Dua for Leaving Home, Starting Business, and Embarking on a Safe Journey',
    },
    arabicText:
      'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    urduTranslation:
      'اللہ کے نام کے ساتھ (نکلتا ہوں)، میں نے اللہ پر بھروسہ کیا، اور گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ ہی کی توفیق سے ہے۔',
    romanUrdu:
      'Bismillahi tawakkaltu ‘alallah, wa la hawla wa la quwwata illa billah.',
    englishTranslation:
      'In the name of Allah, I place my trust in Allah; there is no might and no power except with Allah.',
    fazilat: {
      ur: 'سنن ابی داؤد اور ترمذی کی روایت کے مطابق رسول اللہ ﷺ نے ارشاد فرمایا: "جب کوئی شخص اپنے گھر سے نکلتے وقت یہ دعا پڑھتا ہے تو غیب سے پکار کر کہا جاتا ہے: تمہیں ہدایت دی گئی، تمہاری کفایت کی گئی اور تمہیں ہر برائی سے محفوظ کر دیا گیا، اور شیطان اس کے راستے سے دور ہٹ جاتا ہے۔" ایک شیطان دوسرے شیطان سے کہتا ہے: تم اس شخص پر کیسے قابو پا سکتے ہو جسے اللہ کی طرف سے ہدایت، کفایت اور تحفظ نصیب ہو گیا ہو؟ دفتر، دکان، کاروبار یا طویل سفر پر جاتے وقت یہ دعا پڑھنا ہر حادثے سے حفاظت کی ضمانت ہے۔',
      ro: 'Huzoor ﷺ ne farmaya ke jab insan ghar se nikalte waqt yeh dua parhta hai to farishte uski hifazat karte hain aur shaitan us se door bhag jata hai. Safar aur rozgar mein yeh behtareen hisar hai.',
      en: 'The Messenger of Allah ﷺ explained that whenever a believer recites this prayer upon stepping out of the house, angels proclaim that they have been guided, protected, and safeguarded, compelling Satan to retreat helplessly.',
    },
    reference: {
      ur: 'سنن ابی داؤد: 5095، جامع ترمذی: 3426 (صحیح)',
      ro: 'Sunan Abi Dawud: 5095, Jami` at-Tirmidhi: 3426',
      en: 'Sunan Abi Dawud: 5095, Jami` at-Tirmidhi: 3426 (Sahih)',
    },
    category: 'Rozana',
    recommendedCount: 33,
    seoKeywords: [
      'Ghar se nikalne ki dua',
      'Safar ki dua',
      'Bismillahi tawakkaltu alallah',
      'Dua for leaving home',
      'گھر سے نکلنے کی دعا',
      'سفر کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا روزانہ دفتر جاتے وقت یہ دعا پڑھنی چاہیے؟',
          ro: 'Kya rozana office ya dukan jate waqt parhein?',
          en: 'Should this be recited daily before leaving for work?',
        },
        answer: {
          ur: 'جی ہاں! جب بھی گھر کی دہلیز پار کریں، یہ دعا پڑھ کر نکلنا دن بھر کی حفاظت کی سنتِ نبوی ہے۔',
          ro: 'Ji haan, har bar ghar se qadam bahar nikalte waqt parhna sunnat-e-nabawi hai.',
          en: 'Yes, reciting it whenever crossing the threshold ensures divine protection throughout the day.',
        },
      },
    ],
  },
  {
    id: 'dua-8',
    slug: 'walidain-ke-liye-maghfirat-ki-dua',
    title: {
      ur: 'والدین کی صحت اور مغفرت کی قرآنی دعا',
      ro: 'Walidain ki Sehat aur Maghfirat ki Qurani Dua',
      en: 'Quranic Supplication for Parents’ Health, Mercy, and Forgiveness',
    },
    arabicText:
      'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا • رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    urduTranslation:
      'اے میرے رب! ان دونوں (میرے والدین) پر ویسے ہی رحم فرما جیسا انہوں نے بچپن میں مجھے شفقت کے ساتھ پالا تھا۔ • اے ہمارے پروردگار! مجھے اور میرے والدین کو اور تمام مومنوں کو بخش دے جس دن حساب قائم ہوگا۔',
    romanUrdu:
      'Rabbir-hamhuma kama rabbayani sagheera. • Rabbanagh-fir lee wa li-walidayya wa lil-mu’mineena yawma yaqoomul-hisab.',
    englishTranslation:
      'My Lord, have mercy upon them both as they brought me up when I was small. • Our Lord, forgive me and my parents and the believers on the Day when the account is established.',
    fazilat: {
      ur: 'قرآن مجید سورۂ بنی اسرائیل میں اللہ تعالیٰ نے والدین کے ساتھ حسنِ سلوک کا حکم دیتے ہوئے اس دعا کی تلقین فرمائی ہے۔ رسول اللہ ﷺ نے فرمایا: "جب انسان مر جاتا ہے تو اس کے اعمال کا سلسلہ منقطع ہو جاتا ہے سوائے تین چیزوں کے: صدقۂ جاریہ، وہ علم جس سے نفع اٹھایا جائے، اور نیک اولاد جو اس کے لیے دعا کرے۔" والدین زندہ ہوں تو ان کی صحت و عافیت اور وفات پا چکے ہوں تو درجات کی بلندی کے لیے اس قرآنی دعا کا اہتمام اولاد کا لازمی حق ہے۔',
      ro: 'Yeh Qurani dua har namaz ke baad walidain ke liye parhni chahiye. Huzoor ﷺ ne farmaya ke neik aulad ki dua se marhoomeen ke darjaat jannat mein buland hote hain.',
      en: 'Revealed in Surah Al-Isra (17:24) and Surah Ibrahim (14:41), this prayer is the greatest gift a child can offer to their parents, earning them divine mercy in this life and exalted ranks in the Hereafter.',
    },
    reference: {
      ur: 'القرآن الكريم، سورة الإسراء: 24، سورة إبراهيم: 41',
      ro: 'Surah Al-Isra: 24, Surah Ibrahim: 41',
      en: 'Quran 17:24 & 14:41',
    },
    category: 'Walidain',
    recommendedCount: 33,
    seoKeywords: [
      'Walidain ke liye dua',
      'Rabbir hamhuma kama rabbayani sagheera',
      'Parents dua in Islam',
      'Dua for mother and father',
      'والدین کے لیے دعا',
      'ماں باپ کی مغفرت کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا فوت شدہ والدین کے لیے یہ دعا نافع ہے؟',
          ro: 'Kya wafat yafta walidain ke liye yeh dua faydemand hai?',
          en: 'Does this prayer benefit deceased parents?',
        },
        answer: {
          ur: 'جی ہاں! صحیح مسلم کی حدیث ہے کہ نیک اولاد کی دعا سے مرنے کے بعد بھی والدین کے درجات بلند ہوتے ہیں۔',
          ro: 'Ji haan, Sahih Muslim ki hadith ke mutabiq walidain ko is se azeem ajar milta hai.',
          en: 'Yes, authentic Hadith confirms that prayers from righteous children continuously elevate parents in Paradise.',
        },
      },
    ],
  },
  {
    id: 'dua-9',
    slug: 'ilm-aur-hafzay-mein-izafay-ki-dua',
    title: {
      ur: 'علم، ذہانت اور مضبوط حافظے کی دعا',
      ro: 'Ilm, Zahanat aur Mazboot Hafzay ki Dua',
      en: 'Dua for Knowledge, Sharp Memory, Eloquence, and Intellectual Excellence',
    },
    arabicText:
      'رَبِّ زِدْنِي عِلْمًا • رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي، يَفْقَهُوا قَوْلِي',
    urduTranslation:
      'اے میرے پروردگار! میرے علم میں اضافہ فرما۔ • اے میرے رب! میرا سینہ میرے لیے کھول دے، اور میرا کام میرے لیے آسان کر دے، اور میری زبان کی گرہ کھول دے تاکہ لوگ میری بات اچھی طرح سمجھ سکیں۔',
    romanUrdu:
      'Rabbi zidni ‘ilma. • Rabbish-rah lee sadri, wa yassir lee amri, wahlul ‘uqdatam-mil-lisani, yafqahoo qawlee.',
    englishTranslation:
      'My Lord, increase me in knowledge. • My Lord, expand for me my chest with assurance, ease for me my task, and untie the knot from my tongue that they may understand my speech.',
    fazilat: {
      ur: 'قرآن مجید میں اللہ تعالیٰ نے اپنے پیارے حبیب ﷺ کو بھی علم میں اضافے کی دعا سکھائی: "وقل رب زدنی علما"۔ اور حضرت موسیٰ علیہ السلام نے فرعون کی طرف تبلیغ کے لیے روانہ ہوتے وقت اللہ سے سینہ کشادہ کرنے، کام آسان کرنے اور زبان کی فصاحت مانگی تھی۔ طلباء و طالبات، اساتذہ، اور ہر وہ شخص جو امتحان، انٹرویو یا تقریر کی تیاری کر رہا ہو، اس کے لیے یہ قرآنی آیات کا ورد ذہنی وسعت، یادداشت کی مضبوطی اور زبان کی سلاست عطا کرتا ہے۔',
      ro: 'Yeh do quraani duaein zahanat, hafza aur taqreer mein rawani ke liye la-jawaab hain. Students ke imtehan aur interview ke liye yeh behtareen amal hai.',
      en: 'Combining Surah Ta-Ha (20:114) and Moses’ supplication (20:25-28), these verses are universally recited by students, teachers, and scholars to unlock deep comprehension, memory retention, and eloquent articulation.',
    },
    reference: {
      ur: 'القرآن الكريم، سورة طه: 25-28 و 114',
      ro: 'Surah Ta-Ha: 25-28 & 114',
      en: 'Quran 20:25-28 & 20:114',
    },
    category: 'Ilm',
    recommendedCount: 33,
    seoKeywords: [
      'Ilm mein izafay ki dua',
      'Rabbi zidni ilma',
      'Rabbishrah li sadri',
      'Exam dua memory increase',
      'علم میں اضافے کی دعا',
      'حافظہ تیز کرنے کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'امتحان کے پرچے سے پہلے کتنی بار پڑھنا چاہیے؟',
          ro: 'Imtehan se pehle kitni dafa parhein?',
          en: 'How many times should students recite this before exams?',
        },
        answer: {
          ur: 'پڑھائی شروع کرتے وقت اور پرچہ حل کرنے سے قبل 7 مرتبہ پڑھنا ذہن کو یکسو اور پرسکون رکھتا ہے۔',
          ro: 'Parhai se pehle 7 bar parhna zehan ko tez aur pur-sukoon banata hai.',
          en: 'Reciting it 7 times before study sessions or opening an exam paper sharpens recall and calms nervousness.',
        },
      },
    ],
  },
  {
    id: 'dua-10',
    slug: 'istikhara-aur-khair-mangne-ki-dua',
    title: {
      ur: 'مشکل فیصلے میں خیر مانگنے اور استخارے کی مسنون دعا',
      ro: 'Mushkil Faislay mein Khair Mangne aur Istikhara ki Dua',
      en: 'Dua-e-Istikhara: Prophetic Supplication for Guidance in Crucial Decisions',
    },
    arabicText:
      'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ',
    urduTranslation:
      'اے اللہ! میں تیرے علم کی برکت سے تجھ سے خیر طلب کرتا ہوں، اور تیری قدرت کے ذریعے تجھ سے طاقت مانگتا ہوں، اور میں تیرے عظیم فضل کا سوال کرتا ہوں، کیونکہ تو قدرت رکھتا ہے اور میں بے بس ہوں، تو سب جانتا ہے اور میں نہیں جانتا، اور تو تمام پوشیدہ باتوں کا جاننے والا ہے۔',
    romanUrdu:
      'Allahumma inni astakheeruka bi-‘ilmika, wa astaqdiruka bi-qudratika, wa as-aluka min fadlikal-‘azeem, fa-innaka taqdiru wa la aqdir, wa ta’lamu wa la a’lam, wa anta ‘allamul-ghuyoob.',
    englishTranslation:
      'O Allah, I seek Your counsel through Your knowledge, and I seek strength through Your power, and I ask of Your immense bounty; for You have power and I have none, You know and I know not, and You are the Knower of the unseen.',
    fazilat: {
      ur: 'صحیح بخاری میں حضرت جابر بن عبداللہؓ فرماتے ہیں کہ رسول اللہ ﷺ ہمیں تمام معاملات میں استخارہ کرنا اسی طرح سکھایا کرتے تھے جیسے قرآن کی سورت سکھاتے تھے۔ جب انسان شادی، کاروبار، سفر یا کسی بڑے فیصلے میں کشمکش کا شکار ہو تو دو رکعت نفل پڑھ کر یہ دعا مانگنا اللہ کی طرف سے بہترین خیر، دل کے اطمینان اور برکت کا راستہ ہموار کرتا ہے۔ اس دعا سے انسان پچھتاوے اور غلط فیصلوں کے نقصانات سے ہمیشہ محفوظ رہتا ہے۔',
      ro: 'Huzoor ﷺ ne har ahem kaam se pehle Istikhara sikhaya jaisa Quran ki soorat sikhate the. Shadi, business ya career ke faisle mein yeh dua dil ko yaqeen aur khair bakhshti hai.',
      en: 'Narrated in Sahih Bukhari (1162), the Companions recounted that the Prophet ﷺ taught Istikhara for every major affair just as he would teach a chapter of the Quran, ensuring clarity, peace of mind, and divine guidance in crucial life choices.',
    },
    reference: {
      ur: 'صحیح بخاری: 1162، 6382، جامع ترمذی: 480 (صحیح)',
      ro: 'Sahih Bukhari: 1162, Jami` at-Tirmidhi: 480',
      en: 'Sahih Bukhari: 1162, Jami` at-Tirmidhi: 480 (Sahih)',
    },
    category: 'Mushkilat',
    recommendedCount: 33,
    seoKeywords: [
      'Istikhara ki dua',
      'Allahumma inni astakheeruka bi ilmika',
      'Dua for decision making',
      'Istikhara prayer Arabic text',
      'استخارہ کی دعا',
      'فیصلے میں خیر کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا استخارے کے بعد خواب آنا ضروری ہے؟',
          ro: 'Kya Istikhara ke baad khwab aana zaroori hai?',
          en: 'Is it necessary to see a dream after praying Istikhara?',
        },
        answer: {
          ur: 'نہیں! استخارے کے بعد دل کا کسی ایک طرف مائل ہو جانا اور رکاوٹوں کا دور ہونا ہی اصل اشارہ ہے۔',
          ro: 'Nahi, dil ka sukoon aur raste aasan hona hi asal nishani hai.',
          en: 'No, dream is not required. Inner peace, inclination of the heart, and ease in circumstances are the true indicators.',
        },
      },
    ],
  },
  {
    id: 'dua-11',
    slug: 'ayat-ul-kursi',
    title: {
      ur: 'آیت الکرسی — اعظم آیاتِ قرآنی مع اردو ترجمہ و فضیلت',
      ro: 'Ayat ul Kursi — Azam Ayat-e-Qurani مع Urdu Translation',
      en: 'Ayat al-Kursi (The Throne Verse) — Surah Al-Baqarah Verse 255',
    },
    arabicText:
      'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    urduTranslation:
      'اللہ! اس کے سوا کوئی عبادت کے لائق نہیں، وہ ہمیشہ زندہ اور سب کو سنبھالنے والا ہے۔ اسے نہ اونگھ آتی ہے نہ نیند۔ اسی کا ہے جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے۔ کون ہے جو اس کی اجازت کے بغیر اس کے حضور سفارش کر سکے؟ وہ جانتا ہے جو کچھ بندوں کے سامنے ہے اور جو کچھ ان کے پیچھے ہے، اور وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کر سکتے مگر جتنا وہ چاہے۔ اس کی کرسی آسمانوں اور زمین کو اپنے گھیرے میں لیے ہوئے ہے، اور ان دونوں کی حفاظت اس پر گراں نہیں گزرتی، اور وہی سب سے بلند، عظمت والا ہے۔',
    romanUrdu:
      'Allahu laaa ilaaha illaa Huwal-Hayyul-Qayyoom; laa ta’khuzuhu sinatunw-wa laa nawm; lahu maa fis-samaawaati wa maa fil-ard; man zal-lazee yashfa’u ‘indahooo illaa bi-iznih; ya’lamu maa bayna aydeehim wa maa khalfahum, wa laa yuheetoona bi-shay’im-min ‘ilmihee illaa bimaa shaaa’; wasi’a Kursiyyuhus-samaawaati wal-arda wa laa ya’ooduhoo hifzuhumaa; wa Huwal-‘Aliyyul-‘Azeem.',
    englishTranslation:
      'Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
    fazilat: {
      ur: 'آیت الکرسی قرآن مجید کی سب سے عظیم ترین آیت ہے (صحیح مسلم: 810)۔ رسول اللہ ﷺ نے فرمایا کہ جو شخص ہر فرض نماز کے بعد آیت الکرسی کی تلاوت کرے گا، اس کے اور جنت کے درمیان سوائے موت کے کوئی رکاوٹ نہیں (سنن نسائی الکبری: 9848)۔ حضرت ابوہریرہؓ کی معروف حدیث کے مطابق، رات کو سوتے وقت آیت الکرسی پڑھنے والے پر صبح تک اللہ کی طرف سے ایک محافظ مقرر کر دیا جاتا ہے اور شیطان اس کے قریب بھی نہیں پھٹکتا۔ یہ آیت حفاظتِ جان و مال، نظرِ بد کے خاتمے، اور شیطانی وسوسوں سے امان کا سب سے طاقتور حصار ہے۔',
      ro: 'Ayat ul Kursi Quran-e-Pak ki azeem tareen aayat hai. Farz namaz ke baad parhne se jannat ki basharat aur raat ko sote waqt parhne se shaitan aur har burai se hifazat ka ilahi hisar qaim hota hai.',
      en: 'Ayat al-Kursi is the greatest verse of the Holy Quran (Sahih Muslim: 810). The Prophet Muhammad ﷺ declared that whoever recites it after every obligatory prayer, nothing stands between him and Paradise except death, and reciting it before sleep invokes divine angels of protection from all harm and evil.',
    },
    reference: {
      ur: 'القرآن الكريم، سورة البقرة: 255؛ صحيح مسلم: 810، سنن النسائي الكبرى: 9848',
      ro: 'Surah Al-Baqarah: 255; Sahih Muslim: 810',
      en: 'Quran 2:255; Sahih Muslim: 810, Sunan an-Nasa’i Al-Kubra: 9848',
    },
    category: 'Hifazat',
    recommendedCount: 7,
    seoKeywords: [
      'Ayat ul Kursi',
      'Ayat al Kursi Urdu translation',
      'Ayat ul Kursi Arabic text',
      'Ayat ul Kursi fazilat',
      'آیت الکرسی',
      'آیت الکرسی اردو ترجمہ',
      'آیت الکرسی وظیفہ',
      'Ayat ul Kursi Roman Urdu',
    ],
    faqs: [
      {
        question: {
          ur: 'آیت الکرسی کو روزانہ کتنی بار پڑھنا چاہیے؟',
          ro: 'Ayat ul Kursi rozana kitni bar parhni chahiye?',
          en: 'How many times should Ayat al-Kursi be recited daily?',
        },
        answer: {
          ur: 'ہر فرض نماز کے بعد ایک مرتبہ، رات کو سونے سے قبل ایک بار اور صبح و شام 3 یا 7 مرتبہ تلاوت کرنا مسنون اور باعثِ برکت ہے۔',
          ro: 'Har farz namaz ke baad 1 dafa, sote waqt 1 dafa, aur subah shaam 3 ya 7 bar parhna masnoon hai.',
          en: 'It is recommended to recite it once after each of the five daily prayers, once before sleeping, and 3 or 7 times during morning and evening supplications.',
        },
      },
      {
        question: {
          ur: 'کیا آیت الکرسی سے نظرِ بد اور سحر دور ہوتا ہے؟',
          ro: 'Kya Ayat ul Kursi se nazar-e-bad aur jadu door hota hai?',
          en: 'Does Ayat al-Kursi protect against evil eye and witchcraft?',
        },
        answer: {
          ur: 'جی ہاں، آیت الکرسی تمام شیطانی اثرات، سحر اور حاسدین کی نظرِ بد کا سب سے مضبوط تریاق ہے۔',
          ro: 'Ji haan, Ayat ul Kursi har qism ke jadu aur nazar-e-bad ke asraat ko zail karti hai.',
          en: 'Yes, Ayat al-Kursi is universally recognized as the most potent divine shield against witchcraft, jinn interference, and malicious envy.',
        },
      },
    ],
  },
  {
    id: 'dua-12',
    slug: 'sayyid-ul-istighfar',
    title: {
      ur: 'سید الاستغفار — توبہ و استغفار کی سب سے افضل دعا مع اردو ترجمہ و فضیلت',
      ro: 'Sayyid ul Istighfar — Afzal Tareen Tauba ki Dua',
      en: 'Sayyid al-Istighfar — The Master of Seeking Forgiveness',
    },
    arabicText:
      'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    urduTranslation:
      'اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں۔ تو نے ہی مجھے پیدا کیا اور میں تیرا بندہ ہوں، اور میں اپنی استطاعت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے کے شر سے تیری پناہ مانگتا ہوں، اپنے اوپر تیری دی ہوئی نعمتوں کا دل و جان سے اعتراف کرتا ہوں، اور اپنے گناہوں کا اقرار کرتا ہوں، پس تو مجھے معاف فرما دے کیونکہ تیرے سوا کوئی گناہوں کو معاف کرنے والا نہیں۔',
    romanUrdu:
      'Allahumma Anta Rabbi, laa ilaaha illaa Anta, khalaqtanee wa ana ‘abduka, wa ana ‘alaa ‘ahdika wa wa’dika mastata’tu, a’oodhu bika min sharri maa sana’tu, aboo’u laka bi-ni’matika ‘alayya, wa aboo’u laka bi-dhambee faghfir lee fa-innahoo laa yaghfirudh-dhunooba illaa Ant.',
    englishTranslation:
      'O Allah, You are my Lord; none has the right to be worshipped but You. You created me and I am Your servant, and I remain upon Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I completely acknowledge Your favor upon me, and I confess my sin to You, so forgive me, for none forgives sins except You.',
    fazilat: {
      ur: 'صحیح بخاری (6306) میں حضرت شداد بن اوسؓ سے روایت ہے کہ رسول اللہ ﷺ نے فرمایا: "یہ سید الاستغفار یعنی تمام استغفاروں کا سردار ہے۔ جس شخص نے کامل یقین کے ساتھ دن کے وقت اسے پڑھا اور شام ہونے سے پہلے اس کا انتقال ہو گیا تو وہ اہلِ جنت میں سے ہوگا، اور جس نے رات کو یقین کے ساتھ پڑھا اور صبح سے پہلے وفات پا گیا تو وہ بھی اہلِ جنت میں سے ہوگا"۔ یہ دعا بندگی کا سب سے اعلیٰ اظہار، گناہوں کی فوری بخشش اور رزق و زندگی میں برکت کا سرچشمہ ہے۔',
      ro: 'Sahih Bukhari (6306) ke mutabiq yeh Sayyid ul Istighfar hai. Subah ya shaam yaqeen se parhne wale ke liye jannat ki qatee bashaarat hai. Yeh gunahon ki bakhshish aur dili sukoon ka azeem tareen zariya hai.',
      en: 'In Sahih Bukhari (6306), the Prophet ﷺ declared this the paramount supplication for repentance. Whoever recites it with firm conviction during the morning or evening and passes away before the next part of the day is guaranteed to be among the people of Paradise.',
    },
    reference: {
      ur: 'صحیح بخاری: 6306، 6323؛ جامع ترمذی: 3393 (صحیح)',
      ro: 'Sahih Bukhari: 6306; Jami` at-Tirmidhi: 3393',
      en: 'Sahih Bukhari: 6306, 6323; Jami` at-Tirmidhi: 3393',
    },
    category: 'Rozana',
    recommendedCount: 3,
    seoKeywords: [
      'Sayyid ul Istighfar',
      'Sayyidul Istighfar Urdu translation',
      'Tauba ki dua',
      'Best Istighfar dua',
      'سید الاستغفار',
      'توبہ کی مسنون دعا',
      'استغفار کا وظیفہ',
      'Sayyid al Istighfar Roman Urdu',
    ],
    faqs: [
      {
        question: {
          ur: 'سید الاستغفار پڑھنے کا بہترین وقت کون سا ہے؟',
          ro: 'Sayyid ul Istighfar parhne ka behtareen waqt konsa hai?',
          en: 'What is the best time to recite Sayyid al-Istighfar?',
        },
        answer: {
          ur: 'صبح کی نماز کے بعد اور شام کو مغرب کے بعد روزانہ پڑھنا مسنون حدیث کے مطابق جنت کی بشارت کا سبب ہے۔',
          ro: 'Fajr ke baad aur Maghrib ke baad rozana parhna sab se afzal hai.',
          en: 'Daily recitation after Fajr prayer in the morning and after Maghrib in the evening is the recommended prophetic tradition.',
        },
      },
    ],
  },
  {
    id: 'dua-13',
    slug: 'dua-e-qunoot',
    title: {
      ur: 'دعائے قنوت — نمازِ وتر کی مسنون دعا مع اردو ترجمہ و فضیلت',
      ro: 'Dua e Qunoot — Namaz-e-Witr ki Masnoon Dua',
      en: 'Dua-e-Qunoot — Supplication for Witr Prayer with English & Urdu Translation',
    },
    arabicText:
      'اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحَقٌ',
    urduTranslation:
      'اے اللہ! ہم تجھ ہی سے مدد چاہتے ہیں اور تجھ سے بخشش مانگتے ہیں، تجھ پر ایمان لاتے ہیں اور تجھ ہی پر بھروسا کرتے ہیں، اور تیری بہترین تعریف کرتے ہیں، تیرا شکر ادا کرتے ہیں اور تیری ناشکری نہیں کرتے، اور ہم ہر اس شخص کو الگ کرتے اور چھوڑتے ہیں جو تیری نافرمانی کرے۔ اے اللہ! ہم تیری ہی عبادت کرتے ہیں، اور تیرے ہی لیے نماز پڑھتے اور سجدہ کرتے ہیں، اور تیری ہی طرف دوڑتے اور حاضر ہوتے ہیں، ہم تیری رحمت کے امیدوار ہیں اور تیرے عذاب سے ڈرتے ہیں، بیشک تیرا عذاب کافروں کو پہنچنے والا ہے۔',
    romanUrdu:
      'Allahumma innaa nasta’eenuka wa nastaghfiruka wa nu’minu bika wa natawakkalu ‘alayka wa nuthnee ‘alaykal-khayr, wa nashkuruka wa laa nakfuruk, wa nakhla’u wa natruku man yafjuruk. Allahumma iyyaaka na’budu wa laka nusallee wa nasjud, wa ilayka nas’aa wa nahfid, narjoo rahmataka wa nakhshaa ‘adhaabak, inna ‘adhaabaka bil-kuffaari mulhaq.',
    englishTranslation:
      'O Allah, we seek Your aid and ask Your forgiveness, we believe in You and place our trust in You, and we praise You in the finest manner. We thank You and do not display ingratitude, and we abandon and reject whoever disobeys You. O Allah, You alone do we worship, and to You we pray and prostrate; towards You we strive and rush. We hope for Your mercy and fear Your punishment; surely, Your punishment overtakes the disbelievers.',
    fazilat: {
      ur: 'دعائے قنوت نمازِ عشاء کے وتر میں تیسری رکعت میں رکوع سے قبل تکبیر کہہ کر ہاتھ باندھ کر پڑھی جاتی ہے۔ یہ دعا توحید، اخلاص، عاجزی اور اللہ کی بندگی کا پرشکوہ اعتراف ہے۔ امام ابن ابی شیبہ اور بیہقی نے حضرت عمر بن خطاب اور حضرت عبداللہ بن مسعود رضی اللہ عنہما سے اس کے کلمات روایت فرمائے ہیں۔ وتر میں دعائے قنوت پڑھنے سے دل کو گناہوں سے پاکیزگی نصیب ہوتی ہے اور بندہ شب کے وقت اللہ کے قرب اور حفاظت کی پناہ میں آتا ہے۔',
      ro: 'Dua-e-Qunoot Namaz-e-Witr ki teesri rakat mein parhi jati hai. Yeh dua Allah se madad, toba, tawakkul aur rehmat talab karne ka mustanad tareeqa hai jo rooh ko itminan bakhshta hai.',
      en: 'Dua-e-Qunoot is the cornerstone supplication of the Witr prayer after Isha. It embodies complete monotheism, submission, gratitude, and refuge in Allah’s boundless mercy while invoking divine protection from punishment.',
    },
    reference: {
      ur: 'مصنف ابن أبي شيبة: 6965، السنن الكبرى للبيهقي: 2/498، سنن الترمذي: 464',
      ro: 'Musannaf Ibn Abi Shaybah: 6965, Al-Bayhaqi: 2/498',
      en: 'Musannaf Ibn Abi Shaybah: 6965, Sunan al-Bayhaqi: 2/498, Jami` at-Tirmidhi: 464',
    },
    category: 'Rozana',
    recommendedCount: 1,
    seoKeywords: [
      'Dua e Qunoot',
      'Dua Qunoot Urdu translation',
      'Dua e Qunoot Arabic text',
      'Dua Qunoot Witr prayer',
      'دعائے قنوت',
      'نماز وتر کی دعا',
      'دعائے قنوت اردو ترجمہ',
      'Dua e Qunoot Roman English',
    ],
    faqs: [
      {
        question: {
          ur: 'اگر کسی کو دعائے قنوت یاد نہ ہو تو وہ وتر میں کیا پڑھے؟',
          ro: 'Agar Dua e Qunoot yaad na ho to kya parhein?',
          en: 'What should one recite in Witr if they haven’t memorized Dua-e-Qunoot?',
        },
        answer: {
          ur: 'جب تک دعائے قنوت یاد نہ ہو، اس وقت تک "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً..." یا تین مرتبہ "اللَّهُمَّ اغْفِرْ لِي" پڑھ سکتے ہیں، لیکن اسے جلد یاد کرنا چاہیے۔',
          ro: 'Rabbana Aatina fid-dunya parh lein jab tak Dua e Qunoot yaad na ho.',
          en: 'Until memorized, one may recite "Rabbana atina fid-dunya hasanatan..." or "Allahumma-ghfir lee" three times, while actively learning the full Qunoot.',
        },
      },
    ],
  },
  {
    id: 'dua-14',
    slug: 'dua-e-hajat',
    title: {
      ur: 'دعائے حاجت — دلی مراد، مقصد میں کامیابی اور مشکل کشائی کی مسنون دعا',
      ro: 'Dua e Hajat — Dili Murad aur Mushkil Kushai ki Dua',
      en: 'Dua-e-Hajat — Supplication for Fulfillment of Needs and Critical Requests',
    },
    arabicText:
      'لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ، سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ، وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ، لَا تَدَعْ لِي ذَنْبًا إِلَّا غَفَرْتَهُ، وَلَا هَمًّا إِلَّا فَرَّجْتَهُ، وَلَا حَاجَةً هِيَ لَكَ رِضًا إِلَّا قَضَيْتَهَا يَا أَرْحَمَ الرَّاحِمِينَ',
    urduTranslation:
      'اللہ کے سوا کوئی معبود نہیں جو بردبار اور کرم فرمانے والا ہے۔ پاک ہے اللہ جو عرشِ عظیم کا مالک ہے۔ تمام تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا رب ہے۔ اے اللہ! میں تجھ سے تیری رحمت کے اسباب، تیری مغفرت کے ذرائع، ہر نیکی میں سے حصہ اور ہر گناہ سے سلامتی مانگتا ہوں۔ میرے لیے کوئی ایسا گناہ نہ چھوڑ جسے تو معاف نہ فرمائے، اور نہ کوئی ایسا غم جسے تو دور نہ کرے، اور نہ کوئی ایسی جائز حاجت جس میں تیری رضا ہو مگر اسے تو پوری فرما دے، اے تمام رحم کرنے والوں سے بڑھ کر رحم فرمانے والے!',
    romanUrdu:
      'Laa ilaaha illallāhul-Haleemul-Kareem, Subhanallahi Rabbil-‘Arshil-‘Azeem, Alhamdulillahi Rabbil-‘Aalameen. As-aluka moojibaati rahmatik, wa ‘azaa-ima maghfiratik, wal-ghaneemata min kulli birr, was-salaamata min kulli ithm. Laa tada’ lee dhamban illaa ghafartah, wa laa hamman illaa farrajtah, wa laa haajatan hiya laka ridan illaa qadaytahaa, yaa Arhamar-Raahimeen.',
    englishTranslation:
      'There is no deity except Allah, the Most Forbearing, the Most Generous. Glory be to Allah, Lord of the Magnificent Throne. All praise is due to Allah, Lord of the worlds. I ask You for the means of Your mercy, the resolves of Your forgiveness, the spoils of every virtue, and safety from every sin. Leave no sin of mine unforgiven, no distress unrelieved, and no need that is pleasing to You unfulfilled, O Most Merciful of the merciful!',
    fazilat: {
      ur: 'جامع ترمذی (479) اور سنن ابن ماجہ (1384) میں حضرت عبداللہ بن ابی اوفی رضی اللہ عنہ سے مروی ہے کہ رسول اللہ ﷺ نے فرمایا: جس شخص کو اللہ تعالیٰ کی بارگاہ میں یا بنی نوع انسان کے سامنے کوئی اہم ضرورت یا حاجت درپیش ہو، تو وہ اچھی طرح وضو کرے، دو رکعت نماز (صلوٰۃ الحاجت) پڑھے، پھر اللہ کی حمد و ثناء اور نبی کریم ﷺ پر درود شریف بھیجے، اس کے بعد یہ دعا مانگے۔ بزرگانِ دین نے آزمایا ہے کہ جب کوئی جائز کام اٹکا ہوا ہو یا قانونی، گھریلو و مالی رکاوٹ پیش آئے تو صلوٰۃ الحاجت کے ساتھ یہ دعا پڑھنے سے اللہ تعالیٰ بندِشوں کو ختم کر کے اسباب پیدا فرما دیتا ہے۔',
      ro: 'Sunan Ibn Majah aur Tirmidhi ke mutabiq jab koi mushkil masla ya dili murad darpaish ho to do rakat Salat ul Hajat parh kar yeh dua mangein. Har jaiz maqsad aur rukawat door karne ke liye la-jawaab amal hai.',
      en: 'Recorded in Jami` at-Tirmidhi (479) and Sunan Ibn Majah (1384), this supplication is recited after praying two Rakats of Salat al-Hajah when seeking divine intervention for urgent needs, health, employment, marriage, or financial relief.',
    },
    reference: {
      ur: 'جامع ترمذی: 479، سنن ابن ماجہ: 1384',
      ro: 'Jami` at-Tirmidhi: 479, Sunan Ibn Majah: 1384',
      en: 'Jami` at-Tirmidhi: 479, Sunan Ibn Majah: 1384',
    },
    category: 'Mushkilat',
    recommendedCount: 11,
    seoKeywords: [
      'Dua e Hajat',
      'Dua Hajat Urdu translation',
      'Salat ul Hajat dua',
      'Dua for urgent wish',
      'دعائے حاجت',
      'مشکل کشائی کی دعا',
      'حاجت برآری کی مسنون دعا',
      'Dua e Hajat Roman Urdu',
    ],
    faqs: [
      {
        question: {
          ur: 'صلوٰۃ الحاجت پڑھنے کا کیا طریقہ ہے؟',
          ro: 'Salat ul Hajat parhne ka tareeqa kya hai?',
          en: 'How to perform Salat al-Hajah?',
        },
        answer: {
          ur: 'تازہ وضو کر کے خلوص کے ساتھ 2 رکعت نفل نماز پڑھیں، سلام پھیر کر درود شریف پڑھیں اور پھر خشوع سے دعائے حاجت مانگیں۔',
          ro: 'Taza wuzu kar ke 2 rakat nafal parhein, Durood Shareef parhein aur phir Dua e Hajat mangein.',
          en: 'Perform fresh ablution, pray 2 Rak’ah voluntary prayer, send blessings upon the Prophet ﷺ, and sincerely supplicate with Dua-e-Hajat.',
        },
      },
    ],
  },
  {
    id: 'dua-15',
    slug: 'manzil-dua',
    title: {
      ur: 'منزل شریف — نظرِ بد، سحر، جادو اور شیطانی اثرات سے مکمل حفاظت کا قرآنی حصار',
      ro: 'Manzil Shareef — Nazar-e-Bad, Jadu aur Hifazat ka Qurani Hisar',
      en: 'Manzil Shareef — Complete Quranic Verses for Protection against Evil Eye, Sorcery, and Harm',
    },
    arabicText:
      'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾ • الم ﴿١﴾ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ • اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ • لَا إِكْرَاهَ فِي الدِّينِ • قُلْ هُوَ اللَّهُ أَحَدٌ • قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    urduTranslation:
      'شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔ تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے... (منزل شریف میں سورۂ فاتحہ، سورۂ بقرہ کی ابتدائی و آخری آیات اور آیت الکرسی، سورۂ آل عمران، سورۂ اعراف، سورۂ مومنون، سورۂ جن، سورۂ صافات اور معوذتین شامل ہیں جو ہر بلا، سحر اور شیطانی فتنوں کا تریاق ہیں)۔',
    romanUrdu:
      'Bismillahir-Rahmanir-Raheem. Alhamdulillahi Rabbil-‘Aalameen... Manzil Shareef 33 makhsoos Qurani aayat ka mustanad majmua hai jisme Surah Al-Fatiha, Surah Al-Baqarah (1-5, 163, 255-257, 284-286), Surah Al-Imran, Al-A’raf, Al-Mu’minun, Al-Jinn, As-Saffat aur Al-Mu’awwidhatayn shamil hain.',
    englishTranslation:
      'In the name of Allah, the Most Gracious, the Most Merciful. All praise is for Allah, Lord of the worlds... The Manzil comprises 33 designated verses of the Holy Quran compiled from authentic Prophetic traditions as an impenetrable fortress against malevolence, witchcraft, jinns, depression, and the evil eye.',
    fazilat: {
      ur: 'منزل شریف قرآن مجید کی ان منتخب 33 آیات کا مجموعہ ہے جنہیں رسول اللہ ﷺ نے مریضوں اور آسیب و سحر زدہ افراد کے دم کرنے کے لیے استعمال فرمایا (مسند احمد: 21196، مستدرک حاکم: 4/216)۔ جب حضرت ابی بن کعبؓ نے ایک جناتی اثر والے دیہاتی کو بارگاہِ رسالت ﷺ میں پیش کیا تو آپ ﷺ نے یہی آیات پڑھ کر دم فرمائیں اور وہ شخص فوراً صحت یاب ہو گیا۔ روزانہ صبح یا شام ایک مرتبہ منزل شریف کی تلاوت کرنے والے گھر اور افراد پر جادو ٹونے، حاسدوں کی بری نظر، وسوسوں اور اچانک حادثات کا کوئی اثر نہیں ہوتا۔ یہ روحانی امراض اور ڈپریشن سے نجات کا لاجواب قرآنی نسخہ ہے۔',
      ro: 'Manzil Shareef 33 Qurani aayat ka mustanad majmua hai jise Huzoor ﷺ ne jadu, aaseeb aur bimari ke ilaj ke liye dam farmaya (Musnad Ahmad: 21196). Rozana ghar mein parhne se dushman ki nazar aur shaitani shar se kamil hifazat rehti hai.',
      en: 'Recorded in Musnad Ahmad (21196) and Al-Mustadrak (4/216), the verses of Manzil were prescribed by the Prophet ﷺ for healing, dispelling sorcery, alleviating acute anxiety, and shielding against demonic whispers and the destructive evil eye.',
    },
    reference: {
      ur: 'مسند أحمد: 21196، مستدرك الحاكم: 4/216، مصنف ابن أبي شيبة: 23534',
      ro: 'Musnad Ahmad: 21196, Mustadrak al-Hakim: 4/216',
      en: 'Musnad Ahmad: 21196, Al-Mustadrak: 4/216, Musannaf Ibn Abi Shaybah: 23534',
    },
    category: 'Hifazat',
    recommendedCount: 1,
    seoKeywords: [
      'Manzil Dua',
      'Manzil Shareef Urdu',
      'Manzil pdf reading',
      'Manzil for jadu and nazar',
      'منزل شریف',
      'منزل دعا مع اردو ترجمہ',
      'جادو اور نظر بد سے حفاظت کی منزل',
      'Manzil Shareef full Arabic',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا منزل روزانہ پڑھنا ضروری ہے؟',
          ro: 'Kya Manzil rozana parhna zaroori hai?',
          en: 'Should Manzil be recited on a daily basis?',
        },
        answer: {
          ur: 'روزانہ صبح یا شام ایک مرتبہ پڑھنا گھر اور اہل و عیال کے لیے بے پناہ حفاظت اور برکت کا باعث ہے۔',
          ro: 'Rozana subah ya sham 1 dafa parhna ghar aur ahl-e-khana ki hifazat ke liye behtareen hai.',
          en: 'Reciting it once daily in the morning or evening surrounds your home and family with divine security against negative energies.',
        },
      },
    ],
  },
  {
    id: 'dua-16',
    slug: 'surah-al-kahf-first-last-10-verses',
    title: {
      ur: 'سورۃ الکہف کی پہلی و آخری 10 آیات — فتنۂ دجال سے حفاظت کا مسنون نبوی وظیفہ',
      ro: 'Surah Al-Kahf ki Pehli aur Aakhri 10 Ayaat — Fitna-e-Dajjal se Hifazat',
      en: 'First and Last 10 Verses of Surah Al-Kahf — Protection from the Tribulation of Dajjal',
    },
    arabicText:
      'الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا ۜ ﴿١﴾ قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا ﴿٢﴾ مَّاكِثِينَ فِيهِ أَبَدًا ﴿٣﴾ وَيُنذِرَ الَّذِينَ قَالُوا اتَّخَذَ اللَّهُ وَلَدًا ﴿٤﴾ مَّا لَهُم بِهِ مِنْ عِلْمٍ وَلَا لِآبَائِهِمْ ۚ كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ ۚ إِن يَقُولُونَ إِلَّا كَذِبًا ﴿٥﴾ فَلَعَلَّكَ بَاخِعٌ نَّفْسَكَ عَلَىٰ آثَارِهِمْ إِن لَّمْ يُؤْمِنُوا بِهَٰذَا الْحَدِيثِ أَسَفًا ﴿٦﴾ إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا ﴿٧﴾ وَإِنَّا لَجَاعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا ﴿٨﴾ أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا ﴿٩﴾ إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا ﴿١٠﴾',
    urduTranslation:
      'تمام تعریفیں اللہ ہی کے لیے ہیں جس نے اپنے بندے پر کتاب نازل فرمائی اور اس میں کوئی کجی نہ رکھی، بالکل سیدھی اور محکم تاکہ وہ اس کی طرف سے سخت عذاب کی وعید سنائے، اور ایمان والوں کو جو نیک اعمال کرتے ہیں یہ خوشخبری دے کہ ان کے لیے بہترین اجر (جنت) ہے جس میں وہ ہمیشہ رہیں گے... اے ہمارے پروردگار! ہمیں اپنی جناب سے خاص رحمت عطا فرما اور ہمارے معاملے میں ہمارے لیے ہدایت اور بھلائی کا راستہ آسان کر دے۔',
    romanUrdu:
      'Alhamdu lillahil-lazeee anzala ‘alaa ‘abdihil-Kitaaba wa lam yaj’al lahoo ‘iwajaa; Qayyimal-liyundhira ba’san shadeedam-mil-ladunhu wa yubashshiral-mu’mineenal-ladheena ya’maloonas-saalihaati anna lahum ajran hasanaa; Maakitheena feehi abadaa... Iz awal-fityatu ilal-Kahfi faqaaloo Rabbanaaa aatinaa mil-ladunka rahmatanw-wa hayyi’ lanaa min amrinaa rashadaa.',
    englishTranslation:
      'All praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance. He has made it straight, to warn of severe punishment from Him and to give good tidings to the believers who do righteous deeds that they will have a good reward in which they will abide forever... [When] the youths retreated to the cave and said, "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance."',
    fazilat: {
      ur: 'صحیح مسلم (809) میں حضرت ابو درداءؓ سے روایت ہے کہ نبی کریم ﷺ نے فرمایا: "جس نے سورۃ الکہف کی ابتدائی دس آیات یاد کر لیں، وہ دجال کے فتنے سے محفوظ رہے گا"، اور ایک دوسری روایت میں آخری دس آیات کا ذکر ہے۔ نیز جمعہ کے دن سورۃ الکہف پڑھنے والے کے لیے دو جمعوں کے درمیان نور روشن کر دیا جاتا ہے (مستدرک حاکم: 2/399)۔ یہ آیات مادہ پرستی، کفر، اور فتنوں کے دور میں ایمان کی استقامت اور اللہ پر توکل کے نور کا عظیم ترین ذریعہ ہیں۔',
      ro: 'Sahih Muslim (809) ke mutabiq Surah Al-Kahf ki pehli 10 aayat yaad karne aur parhne wala Fitna-e-Dajjal se mehfooz rehta hai. Jumma ke din iski tilawat se agle jumma tak roohani noor chamakta rehta hai.',
      en: 'In Sahih Muslim (809), Abu al-Darda reported that the Prophet ﷺ stated: "Whoever memorizes the first ten verses of Surah Al-Kahf will be protected from the trial of the Dajjal (Anti-Christ)." It is a beacon of light between two Fridays.',
    },
    reference: {
      ur: 'القرآن الكريم، سورة الكهف: 1-10؛ صحيح مسلم: 809، مستدرك الحاكم: 2/399',
      ro: 'Surah Al-Kahf: 1-10; Sahih Muslim: 809',
      en: 'Quran 18:1-10; Sahih Muslim: 809, Al-Mustadrak: 2/399',
    },
    category: 'Rozana',
    recommendedCount: 1,
    seoKeywords: [
      'Surah Kahf first 10 verses',
      'Surah Kahf Urdu translation',
      'Fitna e Dajjal se hifazat',
      'Surah Kahf Friday wird',
      'سورۃ الکہف کی پہلی 10 آیات',
      'سورۃ الکہف اردو ترجمہ',
      'فتنہ دجال کی دعا',
      'Surah Al Kahf 10 verses Roman Urdu',
    ],
    faqs: [
      {
        question: {
          ur: 'جمعہ کے دن سورۃ الکہف پڑھنے کی کیا فضیلت ہے؟',
          ro: 'Jumma ko Surah Kahf parhne ki kya fazilat hai?',
          en: 'What is the virtue of reciting Surah Al-Kahf on Friday?',
        },
        answer: {
          ur: 'حدیث شریف کے مطابق اس کے پڑھنے والے کے لیے اگلے جمعہ تک ایک خاص روحانی نور روشن رہتا ہے اور دجالی فتنوں سے امان ملتی ہے۔',
          ro: 'Hadees ke mutabiq parhne wale ke liye agle jumma tak noor roshan rehta hai.',
          en: 'According to authentic hadiths, an illuminating light shines for the reciter from one Friday to the next, protecting their faith from worldly corruption.',
        },
      },
    ],
  },
  {
    id: 'dua-17',
    slug: 'surah-al-mulk-aur-waqiah-wird',
    title: {
      ur: 'سورۃ الملک و سورۃ الواقعہ کا وظیفہ — عذابِ قبر سے نجات اور رزق کی فراوانی کا نبوی ورد',
      ro: 'Surah Al-Mulk aur Surah Al-Waqiah Wird — Azab-e-Qabr se Nijat aur Rizq',
      en: 'Surah Al-Mulk & Surah Al-Waqiah Wird — Salvation from Grave Torment & Abundant Sustenance',
    },
    arabicText:
      'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿١﴾ الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ ﴿٢﴾ ... إِذَا وَقَعَتِ الْوَاقِعَةُ ﴿١﴾ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ﴿٢﴾ خَافِضَةٌ رَّافِعَةٌ ﴿٣﴾ إِذَا رُجَّتِ الْأَرْضُ رَجًّا ﴿٤﴾',
    urduTranslation:
      'بڑی برکت والا ہے وہ جس کے ہاتھ میں تمام بادشاہی ہے اور وہ ہر چیز پر قادر ہے۔ جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں سے کس کے عمل اچھے ہیں، اور وہ زبردست بخشنے والا ہے... جب واقع ہونے والی (قیامت) واقع ہو جائے گی، اس کے واقع ہونے میں کوئی جھوٹ نہیں، وہ کسی کو پست کرنے والی اور کسی کو بلند کرنے والی ہوگی...',
    romanUrdu:
      'Tabaarakal-lazee biyadihil-mulku wa Huwa ‘alaa kulli shay’in Qadeer; Allazee khalaqal-mawta wal-hayaata liyabluwakum ayyukum ahsanu ‘amalaa; wa Huwal-‘Azeezul-Ghafoor... Izaa waqa’atil-waaqi’ah; laysa liwaq’atihaa kaadhibah; khaafidatur-raafi’ah.',
    englishTranslation:
      'Blessed is He in whose hand is dominion, and He is over all things competent. [He] who created death and life to test you as to which of you is best in deed—and He is the Exalted in Might, the Forgiving... When the Inevitable Event befalls, there will be no denying its occurrence. It will bring down [some] and elevate [others].',
    fazilat: {
      ur: 'سنن ترمذی (2891) اور سنن ابوداؤد میں مروی ہے کہ رسول اللہ ﷺ نے فرمایا: "قرآن میں تیس آیتوں پر مشتمل ایک سورت ہے جس نے ایک شخص کی اس قدر سفارش کی کہ اس کی مغفرت فرما دی گئی، اور وہ سورۃ تبارک الذی بیدہ الملک ہے"۔ حضرت عبداللہ بن مسعودؓ فرماتے ہیں کہ جو شخص ہر رات سورۃ الملک پڑھے گا، اللہ تعالیٰ اس کی برکت سے اسے عذابِ قبر سے محفوظ رکھے گا۔ اور حضرت عبداللہ بن مسعودؓ ہی سے بیہقی میں مروی ہے کہ نبی ﷺ نے فرمایا: "جس نے ہر رات سورۃ الواقعہ کی تلاوت کی، اسے کبھی فاقہ کشی اور مالی تنگی نہیں پہنچے گی"۔ اس لیے مغرب و عشاء کے بعد یہ دونوں سورتیں پڑھنا دینی و دنیاوی خوشحالی کا اکسیر ہے۔',
      ro: 'Surah Al-Mulk raat ko parhne se azaab-e-qabr se kamil najaat milti hai (Tirmidhi: 2891), aur Surah Al-Waqiah har raat parhne se faqa aur rizq ki tangi kabhi nahi aati. Yeh dono sooratein dunya o aakhirat ki kamyabi ka zariya hain.',
      en: 'Narrated in Jami` at-Tirmidhi (2891), Surah Al-Mulk intercedes for its companion until all sins are forgiven and shields against the torment of the grave. Reciting Surah Al-Waqiah every night brings unending abundance and shields against destitution.',
    },
    reference: {
      ur: 'جامع ترمذی: 2891، سنن ابن ماجہ: 3786، شعب الإيمان للبيهقي: 2269',
      ro: 'Jami` at-Tirmidhi: 2891, Shu’ab al-Iman Al-Bayhaqi: 2269',
      en: 'Jami` at-Tirmidhi: 2891, Sunan Ibn Majah: 3786, Shu’ab al-Iman: 2269',
    },
    category: 'Rizq',
    recommendedCount: 1,
    seoKeywords: [
      'Surah Mulk Urdu translation',
      'Surah Waqiah for rizq',
      'Azab e qabr se nijat ki surah',
      'Surah Mulk audio text',
      'سورۃ الملک اردو ترجمہ',
      'سورۃ الواقعہ کا وظیفہ',
      'رزق میں برکت کی سورۃ',
      'Surah Mulk Waqiah Roman Urdu',
    ],
    faqs: [
      {
        question: {
          ur: 'سورۃ الملک اور سورۃ الواقعہ کب پڑھنی چاہیے؟',
          ro: 'Surah Mulk aur Surah Waqiah kab parhein?',
          en: 'When should Surah Al-Mulk and Surah Al-Waqiah be recited?',
        },
        answer: {
          ur: 'سورۃ الواقعہ مغرب کے بعد اور سورۃ الملک عشاء کے بعد یا سونے سے قبل تلاوت کرنا مسنون روایات سے ثابت ہے۔',
          ro: 'Surah Waqiah Maghrib ke baad aur Surah Mulk sone se pehle parhna sab se afzal hai.',
          en: 'Surah Al-Waqiah is customarily recited after Maghrib, while Surah Al-Mulk is recited after Isha or right before sleep.',
        },
      },
    ],
  },
];

const slugAliases: Record<string, string> = {
  'preshani-aur-gham-se-nijat-ki-dua': 'preshani-aur-bechaini-ki-dua',
  'preshani-aur-gham-ki-dua': 'preshani-aur-bechaini-ki-dua',
  'qarz-utarne-aur-kushadgi-rizq-ki-dua': 'qarz-se-nijat-aur-rizq-ki-dua',
  'nazar-e-bad-aur-hifazat-ki-dua': 'nazar-e-bad-se-hifazat-ki-dua',
  'nazar-e-bad-ki-dua': 'nazar-e-bad-se-hifazat-ki-dua',
  'bimari-se-shifa-ki-masnoon-dua': 'bimari-aur-dard-se-shifa-ki-dua',
  'musibat-aur-sakhti-ke-waqt-ki-dua': 'sakht-musibat-ke-waqt-ki-dua',
  'ilm-aur-hunar-mein-izafay-ki-dua': 'ilm-aur-hafzay-mein-izafay-ki-dua',
};

export function getDuaBySlug(slug: string): DuaItem | undefined {
  const resolved = slugAliases[slug] || slug;
  return duainList.find((item) => item.slug === resolved);
}

export function getDuasByCategory(category: DuaCategory): DuaItem[] {
  return duainList.filter((item) => item.category === category);
}
