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
];

const slugAliases: Record<string, string> = {
  'preshani-aur-gham-se-nijat-ki-dua': 'preshani-aur-bechaini-ki-dua',
  'qarz-utarne-aur-kushadgi-rizq-ki-dua': 'qarz-se-nijat-aur-rizq-ki-dua',
  'nazar-e-bad-aur-hifazat-ki-dua': 'nazar-e-bad-se-hifazat-ki-dua',
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
