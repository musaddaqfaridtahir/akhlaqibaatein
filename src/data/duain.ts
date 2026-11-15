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
      ur: 'علم و نافع حکمت میں اضافہ',
      ro: 'Ilm aur Hikmat mein Izafa',
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
    slug: 'preshani-aur-gham-se-nijat-ki-dua',
    title: {
      ur: 'پریشانی، بے چینی اور غم سے نجات کی مسنون دعا',
      ro: 'Preshani, Bechaini aur Gham se Nijat ki Dua',
      en: 'Dua for Relief from Anxiety, Sorrow, and Distress',
    },
    arabicText:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    urduTranslation:
      'اے اللہ! میں غم اور فکر سے تیری پناہ مانگتا ہوں، اور عاجزی و سستی سے تیری پناہ چاہتا ہوں، اور بزدلی و کنجوسی سے تیری پناہ مانگتا ہوں، اور قرض کے بوجھ اور لوگوں کے غلبے و دباؤ سے تیری پناہ چاہتا ہوں۔',
    romanUrdu:
      'Allahumma inni a’oodhu bika minal-hammi wal-hazan, wa a’oodhu bika minal-’ajzi wal-kasal, wa a’oodhu bika minal-jubni wal-bukhl, wa a’oodhu bika min ghalabatid-dayni wa qahrir-rijal.',
    englishTranslation:
      'O Allah, I seek refuge in You from grief and sorrow, from helplessness and laziness, from cowardice and miserliness, and from the burden of debt and the oppression of men.',
    fazilat: {
      ur: 'یہ جامع اور پرتاثیر دعا حضور نبی کریم ﷺ صبح و شام کثرت سے پڑھا کرتے تھے۔ حضرت انس بن مالکؓ فرماتے ہیں کہ میں رسول اللہ ﷺ کے ساتھ کثرت سے رہتا تھا اور آپ ﷺ کو اکثر یہ دعا مانگتے سنتا تھا۔ اس دعا میں انسان کو لاحق ہونے والی ہر قسم کی ذہنی بے چینی، مستقبل کے اندیشوں (الہم)، ماضی کے صدمات (الحزن)، جسمانی کمزوری، مالی بحران اور ظالموں کے دباؤ سے نجات طلب کی گئی ہے۔ علمائے ربانیین فرماتے ہیں کہ جو شخص ہر صبح و شام صدقِ دل سے اس دعا کو تین یا گیارہ مرتبہ اپنا معمول بنا لے، اللہ تعالیٰ اس کی پریشانیوں کو راحت میں بدل دیتا ہے اور اس کے دل کو سکونِ قلب عطا فرماتا ہے۔',
      ro: 'Huzoor Nabi Kareem ﷺ subah o sham is mubarak dua ka wird bakasrat farmate thay. Is dua mein zehni bechaini, mustaqbil ke khof, maazi ke dukh, susti, qarz ke dabao aur logon ke zulm se panah mangi gayi hai. Jo shakhs subah o sham iska wird kare, Allah uske dilon ko sakoon o itminan bakhsh deta hai.',
      en: 'This profound Prophetic invocation covers the core ailments of human life: psychological anxiety, sorrow over past events, physical indolence, financial burden, and oppression by ruthless individuals. Authentic reports confirm that Prophet Muhammad ﷺ recited it regularly in the morning and evening for complete emotional and spiritual fortitude.',
    },
    reference: {
      ur: 'صحیح البخاری: 2893، سنن ابی داؤد: 1555',
      ro: 'Sahih al-Bukhari: 2893, Sunan Abi Dawud: 1555',
      en: 'Sahih al-Bukhari: 2893, Sunan Abi Dawud: 1555',
    },
    category: 'Mushkilat',
    recommendedCount: 33,
    seoKeywords: [
      'Preshani ki dua',
      'Gham se nijat ki dua',
      'Dua for anxiety and depression Islam',
      'Allahumma inni aoodhu bika minal hammi wal hazan',
      'پریشانی کی دعا',
      'بے چینی دور کرنے کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'یہ دعا کس وقت پڑھنا سب سے زیادہ مفید ہے؟',
          ro: 'Yeh dua kis waqt parhna afzal hai?',
          en: 'When is the best time to recite this supplication?',
        },
        answer: {
          ur: 'صبح کی نماز کے بعد اور عصر یا مغرب کے وقت کم از کم 3 تا 7 مرتبہ پڑھنا انتہائی مجرب اور سنتِ نبوی ہے۔',
          ro: 'Subah Fajar ke baad aur sham Asar ya Maghrib ke waqt 3 se 7 bar parhna sunnat aur mujarrab hai.',
          en: 'It is highly recommended following the Fajr prayer and in the evening during Maghrib supplications.',
        },
      },
    ],
  },
  {
    id: 'dua-2',
    slug: 'qarz-utarne-aur-kushadgi-rizq-ki-dua',
    title: {
      ur: 'قرض سے نجات اور رزق میں کشادگی و برکت کی مسنون دعا',
      ro: 'Qarz se Nijat aur Kushadgi-e-Rizq ki Dua',
      en: 'Dua for Payment of Debts and Abundance in Halal Sustenance',
    },
    arabicText:
      'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    urduTranslation:
      'اے اللہ! مجھے حلال رزق دے کر حرام سے بچا لے، اور اپنے فضل و کرم سے مجھے اپنے سوا ہر ایک سے بے نیاز فرما دے۔',
    romanUrdu:
      'Allahummak-finee bi halalika ‘an haramika, wa aghninee bi fadlika ‘amman siwak.',
    englishTranslation:
      'O Allah, suffice me with Your lawful provisions against Your unlawful ones, and enrich me by Your grace from anyone other than You.',
    fazilat: {
      ur: 'جامع ترمذی کی صحیح روایت کے مطابق حضرت علی المرتضیٰ رضی اللہ عنہ کے پاس ایک مقروض شخص آیا جس پر بوجھ تھا۔ آپؓ نے فرمایا: کیا میں تمہیں وہ پرتاثیر کلمات نہ سکھاؤں جو مجھے رسول اللہ ﷺ نے سکھائے تھے؟ اگر تمہارے اوپر صِیر پہاڑ کے برابر بھی قرض کا بوجھ ہو تو اللہ تعالیٰ تمہاری طرف سے اس کی ادائیگی کا غیبی سامان فرما دے گا۔ اس دعا میں انسان اللہ سے حلال کی برکت اور غیر اللہ کی محتاجی سے استغناء مانگتا ہے۔ رزق میں حلال کی توفیق اور استقامت کا یہ سب سے مستند اور جامع وظیفہ ہے۔',
      ro: 'Hazrat Ali (R.A) ne farmaya ke Huzoor ﷺ ne unhein yeh azeem dua sikhayi aur farmaya ke agar tum par pahar ke barabar bhi qarz ho to Allah use ada farma dega. Is dua mein halal rizq aur ghair Allah se beniyazi ki darkhwast hai.',
      en: 'Sayyiduna Ali (R.A) related that the Prophet Muhammad ﷺ taught him this powerful supplication, stating that even if one had debts as immense as Mount Sir, Allah would facilitate their repayment through His miraculous provision of Halal sustenance.',
    },
    reference: {
      ur: 'جامع ترمذی: 3563 (حدیث حسن)، مسند احمد: 1319',
      ro: 'Jami` at-Tirmidhi: 3563, Musnad Ahmad: 1319',
      en: 'Jami` at-Tirmidhi: 3563 (Hasan), Musnad Ahmad: 1319',
    },
    category: 'Rizq',
    recommendedCount: 41,
    seoKeywords: [
      'Qarz utarne ki dua',
      'Rizq mein barkat ki dua',
      'Allahummakfini bihalalika an haramik',
      'Dua for paying off debt',
      'قرض کی دعا',
      'رزق کی کشادگی',
    ],
    faqs: [
      {
        question: {
          ur: 'اس دعا کا روزانہ ورد کتنی تعداد میں کرنا چاہیے؟',
          ro: 'Is dua ka wird rozana kitni bar karein?',
          en: 'How many times should this prayer be recited daily?',
        },
        answer: {
          ur: 'ہر نماز کے بعد 11 مرتبہ اور سونے سے پہلے 33 یا 100 مرتبہ پڑھنا کشادگیِ رزق کے لیے بے حد مؤثر ہے۔',
          ro: 'Har namaz ke baad 11 martaba aur raat ko 33 ya 100 bar parhna nihayat mufeed hai.',
          en: 'Reciting it 11 times after obligatory prayers and 33 or 100 times before sleep brings profound openings.',
        },
      },
    ],
  },
  {
    id: 'dua-3',
    slug: 'nazar-e-bad-aur-hifazat-ki-dua',
    title: {
      ur: 'نظرِ بد، حاسدین اور ہر شر سے بچوں و گھر کی حفاظت کی دعا',
      ro: 'Nazar-e-Bad aur Har Shar se Hifazat ki Dua',
      en: 'Dua for Protection from Evil Eye, Harm, and Jealousy',
    },
    arabicText:
      'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
    urduTranslation:
      'میں اللہ تعالیٰ کے مکمل اور پرتاثیر کلمات کی پناہ مانگتا ہوں ہر شیطان اور زہریلے جانور سے، اور ہر نقصان پہنچانے والی نظرِ بد سے۔',
    romanUrdu:
      'A’oodhu bi-kalimatil-lahit-tammati min kulli shaytanin wa hammah, wa min kulli ‘aynin lammah.',
    englishTranslation:
      'I seek refuge in the perfect words of Allah from every devil and poisonous reptile, and from every harmful and envious evil eye.',
    fazilat: {
      ur: 'صحیح البخاری کی مستند روایت ہے کہ حضرت ابراہیم علیہ السلام اپنے بیٹوں حضرت اسماعیل اور حضرت اسحاق علیہما السلام کو ان کلمات کے ذریعے اللہ کی پناہ میں دیا کرتے تھے۔ بعد ازاں حضور اقدس ﷺ اپنے نواسوں حضرت حسن اور حضرت حسین رضی اللہ عنہما پر دم فرماتے اور ارشاد فرماتے کہ تمہارے جدِ امجد ابراہیمؑ بھی اپنے فرزندوں کو انہی کلمات سے پناہ دیا کرتے تھے۔ یہ دعا بچوں، گھر، اہلِ خانہ اور کاروبار کو حسد، نظرِ بد اور خبیث اثرات سے محفوظ رکھنے کے لیے ایک ناقابلِ تسخیر روحانی قلعہ ہے۔',
      ro: 'Sahih Bukhari mein marwi hai ke Huzoor ﷺ Hazrat Imam Hasan aur Imam Hussain (R.A) ko inhi mubarak kalimaat ke zariye dam farmaya karte thay. Yeh dua nazar-e-bad aur shar se hifazat ka lajawab hisar hai.',
      en: 'Prophet Muhammad ﷺ was accustomed to seeking protection for his beloved grandsons, Al-Hasan and Al-Husayn, with these timeless words, affirming that Patriarch Abraham (A.S) used to seek refuge for Ishmael and Isaac with the exact same invocation.',
    },
    reference: {
      ur: 'صحیح البخاری: 3371، سنن ابی داؤد: 4737',
      ro: 'Sahih al-Bukhari: 3371, Sunan Abi Dawud: 4737',
      en: 'Sahih al-Bukhari: 3371, Sunan Abi Dawud: 4737',
    },
    category: 'Hifazat',
    recommendedCount: 33,
    seoKeywords: [
      'Nazar e bad ki dua',
      'Bachon ki hifazat ki dua',
      'Aoodhu bikalimatillahit tammati',
      'Dua for evil eye protection',
      'نظر بد کی دعا',
      'حفاظت کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا یہ دعا بچوں پر دم کی جا سکتی ہے؟',
          ro: 'Kya yeh dua bachon par dam ki ja sakti hai?',
          en: 'Can this prayer be recited and blown over children?',
        },
        answer: {
          ur: 'جی ہاں! 3 مرتبہ پڑھ کر دونوں ہاتھوں پر پھونک ماریں اور بچے کے پورے جسم پر ہاتھ پھیر لیں۔',
          ro: 'Ji haan, 3 bar parh kar bachon par dam karna azeem sunnat-e-nabawi hai.',
          en: 'Yes, recite it three times, blow into your hands, and pass them over the child’s body.',
        },
      },
    ],
  },
  {
    id: 'dua-4',
    slug: 'bimari-se-shifa-ki-masnoon-dua',
    title: {
      ur: 'بیماری، تکلیف اور جسمانی درد سے کامل شفاء کی مسنون دعا',
      ro: 'Bimari aur Dard se Kamil Shifa ki Dua',
      en: 'Prophetic Supplication for Healing, Sickness, and Complete Recovery',
    },
    arabicText:
      'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
    urduTranslation:
      'اے تمام انسانوں کے پروردگار! تکلیف کو دور فرما دے، شفاء عطا فرما، تو ہی شفاء دینے والا ہے، تیری شفاء کے سوا کوئی شفاء نہیں، ایسی شفاء عطا فرما جو کسی بیماری اور درد کو باقی نہ چھوڑے۔',
    romanUrdu:
      'Adh-hibil-ba’sa Rabban-nas, ishfi wa Antash-Shafi, la shifa’a illa shifa’uk, shifa’an la yughadiru saqama.',
    englishTranslation:
      'Remove the harm, O Lord of mankind, and heal; for You are the Healer. There is no cure except Your cure, a cure that leaves behind no sickness.',
    fazilat: {
      ur: 'ام المومنین حضرت عائشہ صدیقہ رضی اللہ عنہا فرماتی ہیں کہ جب رسول اللہ ﷺ اپنے گھرانے کے کسی فرد کی تیمارداری فرماتے یا خود طبیعت ناساز ہوتی تو اپنے دائیں ہاتھ سے مریض کو چھوتے اور یہ دعا تلاوت فرماتے۔ یہ دعا توحیدِ شفاء کا ایسا شاہکار ہے جس میں اعتراف کیا گیا ہے کہ مادی دوائیں محض سبب ہیں، حقیقی شفاء بخشنے والی ذات صرف اور صرف اللہ رب العزت کی ہے۔ کسی بھی جسمانی، قلبی یا دائمی بیماری کے وقت مریض پر دم کرنا سنتِ متواترہ ہے۔',
      ro: 'Sayyidah Aisha (R.A) farmati hain ke Rasoolullah ﷺ beemar ki ayadat ke waqt apna dayaan hath mubarak mariz par phairte aur yeh azeem dua parhte. Yeh dua har beemari ke liye azeem shifa hai.',
      en: 'Lady Aisha (R.A) narrated that whenever the Messenger of Allah ﷺ visited the sick, he would place his right hand on the affected area and recite this sacred supplication, acknowledging Allah as the sole true Healer of all ailments.',
    },
    reference: {
      ur: 'صحیح البخاری: 5743، صحیح مسلم: 2191',
      ro: 'Sahih al-Bukhari: 5743, Sahih Muslim: 2191',
      en: 'Sahih al-Bukhari: 5743, Sahih Muslim: 2191',
    },
    category: 'Sehat',
    recommendedCount: 33,
    seoKeywords: [
      'Bimari se shifa ki dua',
      'Dard ki dua',
      'Adhhibil basa rabban nas',
      'Islamic dua for health and healing',
      'شفا کی دعا',
      'بیماری کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'درد والے مقام پر ہاتھ رکھ کر پڑھنا کیسا ہے؟',
          ro: 'Kya dard wale maqam par hath rakh kar parhein?',
          en: 'Should one place their hand on the painful area while reciting?',
        },
        answer: {
          ur: 'جی ہاں، دایاں ہاتھ درد یا تکلیف والے حصے پر رکھ کر 7 مرتبہ یہ دعا پڑھنا سنت ہے۔',
          ro: 'Ji haan, dayaan hath dard ki jagah rakh kar 7 martaba parhna sunnat-e-nabawi hai.',
          en: 'Yes, placing the right hand over the pain and repeating it seven times follows prophetic tradition.',
        },
      },
    ],
  },
  {
    id: 'dua-5',
    slug: 'musibat-aur-sakhti-ke-waqt-ki-dua',
    title: {
      ur: 'شدید مصیبت، کرب اور بندشوں کے وقت کی قرآنی دعا (دعاۓ یونسؑ)',
      ro: 'Musibat aur Sakhti ke Waqt ki Dua (Dua-e-Yunus)',
      en: 'Dua of Prophet Yunus (A.S) for Overcoming Calamity and Impossible Hardships',
    },
    arabicText: 'لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    urduTranslation:
      'تیرے سوا کوئی معبودِ برحق نہیں، تو ہر عیب و نقص سے پاک ہے، بے شک میں ہی اپنی جان پر زیادتی اور قصور کرنے والوں میں سے تھا۔',
    romanUrdu: 'La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen.',
    englishTranslation:
      'There is no deity worthy of worship except You; exalted are You. Indeed, I have been of the wrongdoers.',
    fazilat: {
      ur: 'قرآنِ حکیم میں حضرت یونس علیہ السلام کے مچھلی کے پیٹ میں پکارنے کا واقعہ بیان ہوا ہے۔ رسول اللہ ﷺ نے ارشاد فرمایا: "دعاۓ ذوالنون (یونسؑ) جو انہوں نے مچھلی کے پیٹ میں مانگی تھی، کوئی بھی مسلمان کسی بھی مشکل و مصیبت میں اس دعا کے ذریعے اللہ کو پکارے گا، اللہ تعالیٰ لازماً اس کی دعا قبول فرمائے گا۔" اس آیتِ کریمہ میں توحید، تسبیح اور اپنے گناہوں کے اعتراف (استغفار) کا ایسا سنگم ہے جو بڑی سے بڑی ناممکن مصیبت کو آنِ واحد میں ٹال دیتا ہے۔',
      ro: 'Rasoolullah ﷺ ne farmaya ke jo musalman bhi kisi sakht musibat mein Ayat-e-Kareema parh kar Allah ko pukarega, Allah uski dua zaroor qabool farmayega.',
      en: 'The Prophet Muhammad ﷺ declared that no Muslim supplicates with the invocation of Dhul-Nun (Prophet Jonah) during any affliction or distress except that Allah immediately answers and grants relief.',
    },
    reference: {
      ur: 'سورۃ الانبیاء: 87، جامع ترمذی: 3505 (صحیح)',
      ro: 'Surah Al-Anbiya: 87, Jami` at-Tirmidhi: 3505',
      en: 'Quran 21:87, Jami` at-Tirmidhi: 3505 (Sahih)',
    },
    category: 'Mushkilat',
    recommendedCount: 100,
    seoKeywords: [
      'Ayat e kareema ki fazilat',
      'Dua e yunus',
      'Musibat ke waqt ki dua',
      'La ilaha illa anta subhanaka inni kuntu minaz zalimeen',
      'آیت کریمہ',
      'مشکل کشائی کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'آیتِ کریمہ کو کتنی بار پڑھنا افضل ہے؟',
          ro: 'Ayat e Kareema ko kitni bar parhna afzal hai?',
          en: 'How many times is it recommended to recite Ayat-e-Karimah?',
        },
        answer: {
          ur: 'روزانہ 100 مرتبہ یا کسی سخت مشکل کے حل کے لیے باوضو 313 یا 1250 مرتبہ کا ختم پڑھا جاتا ہے۔',
          ro: 'Rozana 100 bar, aur kisi ahem maqsad ke liye 313 ya 1250 bar parhna intehai mujarrab hai.',
          en: 'Reciting it 100 times daily, or 313 times during serious crisis, brings immediate divine openings.',
        },
      },
    ],
  },
  {
    id: 'dua-6',
    slug: 'walidain-ke-liye-maghfirat-ki-dua',
    title: {
      ur: 'والدین کی درازیِ عمر، مغفرت اور رحمت کے لیے قرآنی دعا',
      ro: 'Walidain ki Maghfirat aur Rehmat ki Dua',
      en: 'Quranic Supplication for Parents’ Mercy, Forgiveness, and Long Life',
    },
    arabicText: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    urduTranslation:
      'اے میرے پروردگار! میرے والدین پر اسی طرح بے پایاں رحم فرما جس طرح انہوں نے بچپن میں محبت اور شفقت کے ساتھ میری پرورش فرمائی۔',
    romanUrdu: 'Rabbir-hamhuma kama rabbayani sagheera.',
    englishTranslation:
      'My Lord, have mercy upon them both, even as they brought me up when I was small.',
    fazilat: {
      ur: 'اللہ تعالیٰ نے قرآنِ مجید کی سورۃ الاسراء میں توحید کے بعد سب سے زیادہ تاکید والدین کے ادب، اطاعت اور احسان کی فرمائی ہے۔ اس دعا کے ذریعے اولاد اپنے والدین کے اس احسانِ عظیم کا اعتراف کرتی ہے جو انہوں نے بچپن کی بے بس حالت میں کیا۔ حدیثِ مبارکہ میں آتا ہے کہ جب انسان فوت ہو جاتا ہے تو اس کے اعمال منقطع ہو جاتے ہیں مگر نیک اولاد جو اس کے لیے دعائے مغفرت کرتی رہے اس کا ثواب مسلسل درجات بلند کرتا رہتا ہے۔ والدین حیات ہوں یا وفات پا چکے ہوں، یہ دعا ان کے لیے سب سے بڑا تحفہ ہے۔',
      ro: 'Allah Ta’ala ne Quran-e-Pak mein walidain ke liye yeh azeem dua sikhayi hai. Sahih Hadith ke mutabiq nek aulad ki dua se marne ke baad bhi walidain ke darjaat jannat mein buland hote hain.',
      en: 'Revealed in Surah Al-Isra, this divine supplication teaches children to repay their parents’ unconditional sacrifices with prayers for Allah’s infinite mercy, serving as an ongoing continuous charity for parents even after their passing.',
    },
    reference: {
      ur: 'سورۃ الاسراء: 24، صحیح مسلم: 1631',
      ro: 'Surah Al-Isra: 24, Sahih Muslim: 1631',
      en: 'Quran 17:24, Sahih Muslim: 1631',
    },
    category: 'Walidain',
    recommendedCount: 33,
    seoKeywords: [
      'Walidain ke liye dua',
      'Maa baap ki maghfirat ki dua',
      'Rabbir hamhuma kama rabbayani sagheera',
      'Dua for parents health and forgiveness',
      'والدین کی دعا',
      'ماں باپ کی مغفرت',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا یہ دعا فوت شدہ والدین کے لیے بھی کارآمد ہے؟',
          ro: 'Kya yeh dua marhoomeen walidain ke liye bhi mufeed hai?',
          en: 'Does this prayer benefit parents who have passed away?',
        },
        answer: {
          ur: 'جی ہاں! یہ دعا حیات اور فوت شدہ دونوں حالتوں میں والدین کے لیے رحمت و مغفرت کا عظیم ذریعہ ہے۔',
          ro: 'Ji haan, marhoomeen walidain ke liye yeh sab se behtareen tofa hai.',
          en: 'Yes, it directly benefits parents both during their life and in the grave as ongoing mercy.',
        },
      },
    ],
  },
  {
    id: 'dua-7',
    slug: 'ilm-aur-hunar-mein-izafay-ki-dua',
    title: {
      ur: 'علم، حافظے اور نافع حکمت میں اضافے کی قرآنی و مسنون دعا',
      ro: 'Ilm, Hafiza aur Hikmat mein Izafay ki Dua',
      en: 'Supplication for Expansion of Knowledge, Sharp Memory, and Useful Wisdom',
    },
    arabicText:
      'رَبِّ زِدْنِي عِلْمًا، اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا',
    urduTranslation:
      'اے میرے رب! میرے علم میں اضافہ فرما۔ اے اللہ! جو علم تو نے مجھے عطا فرمایا ہے اس سے مجھے نفع پہنچا، اور مجھے وہ علم سکھا جو میرے لیے فائدہ مند ہو، اور میرے علم میں مزید اضافہ فرما۔',
    romanUrdu:
      'Rabbi zidnee ‘ilma, Allahumman-fa’nee bima ‘allamtanee, wa ‘allimnee ma yanfa’unee, wa zidnee ‘ilma.',
    englishTranslation:
      'My Lord, increase me in knowledge. O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.',
    fazilat: {
      ur: 'اللہ تعالیٰ نے اپنے حبیب پاک خاتم النبیین ﷺ کو دنیا کی کسی نعمت میں اضافے کی دعا کی تلقین نہیں فرمائی سوائے علم کے؛ فرمایا: "وَقُل رَّبِّ زِدْنِي عِلْمًا"۔ علم دین کی روشنی اور دنیا کے تمام مسائل کی درست فہم عطا کرتا ہے۔ اس مسنون دعا میں علمِ نافع طلب کیا گیا ہے تاکہ انسان جو کچھ پڑھے یا سیکھے وہ محض معلومات کا انبار نہ بنے بلکہ اس کے کردار، اخلاق، روزگار اور آخرت کی کامیابی کا ذریعہ بنے۔ طلبہ، اساتذہ اور محققین کے لیے اس کا یومیہ ورد بے حد مفید ہے۔',
      ro: 'Quran mein Allah ne Rasoolullah ﷺ ko ilm mein izafay ki dua mangne ka hukm diya. Yeh dua zehen kholne, imtehan mein kamyabi aur ilm-e-nafe hasil karne ke liye behtareen hai.',
      en: 'Allah specifically commanded the Prophet ﷺ to ask for an increase in nothing of this world except knowledge. This combined Quranic and Hadith prayer sharpens retention, eliminates intellectual confusion, and channels learned skills toward beneficial pursuits.',
    },
    reference: {
      ur: 'سورۃ طہٰ: 114، جامع ترمذی: 3599، سنن ابن ماجہ: 251',
      ro: 'Surah Ta-Ha: 114, Jami` at-Tirmidhi: 3599',
      en: 'Quran 20:114, Jami` at-Tirmidhi: 3599, Sunan Ibn Majah: 251',
    },
    category: 'Ilm',
    recommendedCount: 33,
    seoKeywords: [
      'Ilm mein izafay ki dua',
      'Rabbi zidni ilma',
      'Hafiza tez karne ki dua',
      'Dua for exam success and memory',
      'علم میں اضافہ کی دعا',
      'حافظہ تیز کرنے کی دعا',
    ],
    faqs: [
      {
        question: {
          ur: 'طلبہ امتحانات کے دوران یہ دعا کس طرح پڑھیں؟',
          ro: 'Students exams mein yeh dua kaise parhein?',
          en: 'How should students practice this prayer before exams?',
        },
        answer: {
          ur: 'مطالعہ شروع کرنے سے پہلے 3 مرتبہ اور امتحانی پرچہ حل کرنے سے قبل 7 مرتبہ پڑھنا ذہن کو یکسو کرتا ہے۔',
          ro: 'Parhai se pehle 3 bar aur paper se pehle 7 bar parhna zehen ko roshan karta hai.',
          en: 'Reciting it three times prior to study and seven times before taking tests grounds the intellect.',
        },
      },
    ],
  },
  {
    id: 'dua-8',
    slug: 'ghar-se-nikalne-aur-safar-ki-dua',
    title: {
      ur: 'گھر سے نکلنے، کاروبار اور سفر میں غیبی حفاظت و برکت کی مسنون دعا',
      ro: 'Ghar se Nikalne aur Safar ki Masnoon Dua',
      en: 'Prophetic Supplication upon Leaving Home and Traveling for Work & Safety',
    },
    arabicText: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
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
];

export function getDuaBySlug(slug: string): DuaItem | undefined {
  return duainList.find((item) => item.slug === slug);
}
