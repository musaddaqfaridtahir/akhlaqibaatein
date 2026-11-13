import { Language } from './types';

export interface SherItem {
  id: number;
  misra1Ur: string;
  misra2Ur: string;
  misra1Ro: string;
  misra2Ro: string;
  meaningEn: string;
}

export interface FarhangItem {
  word: string;
  meaningUr: string;
  meaningRo: string;
  meaningEn: string;
}

export interface NaatItem {
  id: string;
  slug: string;
  title: {
    ur: string;
    ro: string;
    en: string;
  };
  poet: {
    ur: string;
    ro: string;
    en: string;
  };
  sourceBook: {
    ur: string;
    ro: string;
    en: string;
  };
  ashaar: SherItem[];
  tashreeh: {
    ur: string;
    ro: string;
    en: string;
  };
  farhang: FarhangItem[];
  category: 'Naat' | 'Salam' | 'Hamd' | 'Manqabat' | 'Qasida';
  seoKeywords: string[];
}

export const naatsList: NaatItem[] = [
  {
    id: '1',
    slug: 'mustafa-jaan-e-rehmat-pe-lakhon-salam',
    title: {
      ur: 'مصطفیٰ جانِ رحمت پہ لاکھوں سلام (سلامِ رضا)',
      ro: 'Mustafa Jaan-e-Rehmat Pe Lakhon Salam (Salam-e-Raza)',
      en: 'Mustafa Jaan-e-Rehmat Pe Lakhon Salam (The Immortal Prophetic Salutation)',
    },
    poet: {
      ur: 'امام احمد رضا خان قادریؒ',
      ro: 'Imam Ahmad Raza Khan (R.A)',
      en: 'Imam Ahmad Raza Khan (R.A)',
    },
    sourceBook: {
      ur: 'حدائقِ بخشش (دیوانِ نعت)',
      ro: 'Hadaiq-e-Bakhshish',
      en: 'Hadaiq-e-Bakhshish (Treasury of Forgiveness)',
    },
    category: 'Salam',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'مصطفیٰ جانِ رحمت پہ لاکھوں سلام',
        misra2Ur: 'شمعِ بزمِ ہدایت پہ لاکھوں سلام',
        misra1Ro: 'Mustafa jaan-e-rehmat pe lakhon salam',
        misra2Ro: 'Shama-e-bazm-e-hidayat pe lakhon salam',
        meaningEn: 'Millions of salutations upon Mustafa, the very soul of divine mercy; Millions of salutations upon the luminous lamp of guidance.',
      },
      {
        id: 2,
        misra1Ur: 'شہرِ یارِ ارم، تاجدارِ حرم',
        misra2Ur: 'نو بہارِ شفاعت پہ لاکھوں سلام',
        misra1Ro: 'Shehr-yaar-e-iram, tajdar-e-haram',
        misra2Ro: 'Nau-bahar-e-shafa’at pe lakhon salam',
        meaningEn: 'Sovereign of paradise and crowned guardian of the sanctuary; Millions of salutations upon the spring blossom of intercession.',
      },
      {
        id: 3,
        misra1Ur: 'شبنمِ باغِ جود و سخا پر درود',
        misra2Ur: 'شمعِ بزمِ محبت پہ لاکھوں سلام',
        misra1Ro: 'Shabnam-e-bagh-e-jood o sakha par durood',
        misra2Ro: 'Shama-e-bazm-e-mohabbat pe lakhon salam',
        meaningEn: 'Blessings upon the morning dew of the garden of boundless generosity; Millions of salutations upon the beacon of eternal love.',
      },
      {
        id: 4,
        misra1Ur: 'جس کے ماتھے شفاعت کا سہرا رہا',
        misra2Ur: 'اس جبینِ سعادت پہ لاکھوں سلام',
        misra1Ro: 'Jis ke maathay shafa’at ka sehra raha',
        misra2Ro: 'Us jabeen-e-sa’adat pe lakhon salam',
        meaningEn: 'Upon whose brow rests the glorious crown of intercession; Millions of salutations upon that blessed, illuminated forehead.',
      },
      {
        id: 5,
        misra1Ur: 'جس طرف اٹھ گئی دم میں دم آ گیا',
        misra2Ur: 'اس نگاہِ عنایت پہ لاکھوں سلام',
        misra1Ro: 'Jis taraf uth gayi dam mein dam aa gaya',
        misra2Ro: 'Us nigah-e-inayat pe lakhon salam',
        meaningEn: 'Whichever direction his gaze turned, life rushed back into fainting hearts; Millions of salutations upon that glance of divine benevolence.',
      },
      {
        id: 6,
        misra1Ur: 'دور و نزدیک کے سننے والے وہ کان',
        misra2Ur: 'کانِ لعلِ کرامت پہ لاکھوں سلام',
        misra1Ro: 'Door o nazdeek ke sunnay walay woh kaan',
        misra2Ro: 'Kaan-e-la’al-e-karamat pe lakhon salam',
        meaningEn: 'Those blessed ears that perceive from near and afar; Millions of salutations upon that mine of priceless miracles.',
      },
      {
        id: 7,
        misra1Ur: 'بے سہاروں کا والی، غریبوں کا آس',
        misra2Ur: 'بے کسوں کی حمایت پہ لاکھوں سلام',
        misra1Ro: 'Be-saharon ka wali, ghareebon ka aas',
        misra2Ro: 'Be-kason ki himayat pe lakhon salam',
        meaningEn: 'Protector of the helpless, sanctuary of the impoverished; Millions of salutations upon the champion of the downtrodden.',
      },
      {
        id: 8,
        misra1Ur: 'کاش محشر میں جب ان کی آمد ہو اور',
        misra2Ur: 'بھیجیں سب ان کی شوکت پہ لاکھوں سلام',
        misra1Ro: 'Kaash mehshar mein jab unki aamad ho aur',
        misra2Ro: 'Bhejein sab unki shaukat pe lakhon salam',
        meaningEn: 'Oh that glorious moment when he arrives on the Day of Resurrection, and all creation unites in sending millions of salutations upon his majesty.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: امام احمد رضا خان قادریؒ کا تصنیف کردہ "سلامِ رضا" برصغیر اور دنیا بھر کی مساجد و محافل میں پڑھا جانے والا مقبول ترین منظوم ہدیۂ نعت ہے۔ اس کلام میں شاعر نے رسول اکرم ﷺ کی ذاتِ مبارکہ کو "جانِ رحمت" یعنی سراپا رحمت اور تمام کائنات کے لیے منبعِ خیر قرار دیا ہے۔ اس کلام کی سب سے بڑی ادبی اور روحانی خصوصیت یہ ہے کہ اس میں قرآن و سنت کے نصوص کو نہایت فصیح و بلیغ شعری پیراہن میں ڈھالا گیا ہے۔ آپ ﷺ کی نگاہِ عنایت، سخاوت، بے سہاروں کی دستگیری اور قیامت کے دن شفاعتِ کبریٰ کے مناظر اس خوبصورتی سے بیان ہوئے ہیں کہ پڑھنے اور سننے والے کا دل عشقِ رسول ﷺ کی تپش سے منور ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دل میں روزانہ درود و سلام کا ذوق پیدا کریں اور آپ ﷺ کی سنت پر عمل کرتے ہوئے غریبوں اور محتاجوں کا سہارا بنیں۔',
      ro: 'Markazi Khayal o Tashreeh: Imam Ahmad Raza Khan (R.A) ka mashhoor-tareen "Salam-e-Raza" aalam-e-Islam ka azeem tareen manzoom nazrana hai. Is kalam mein Huzoor ﷺ ki Rehmat-ul-Lil-Alameen hone aur mahshar mein shafa’at-e-kubra ko intehai dil-kash andaz mein bayan kiya gaya hai. Sacha aashiq-e-Rasool woh hai jo rozana Durood o Salam parhe aur be-saharon ki madad kare.',
      en: 'Spiritual Theme & Explanation: Known universally across the Muslim world as "Salam-e-Raza", this poetic masterpiece composed by Imam Ahmad Raza Khan expresses boundless love and veneration for Prophet Muhammad ﷺ. Drawing directly from Quranic motifs of universal mercy and divine intercession, the verses portray the Prophet as the radiant lamp of guidance, the refuge of the destitute, and the ultimate intercessor on the Day of Judgment. Embodying this prayer means cultivating regular salutations and extending gentle compassion to all.',
    },
    farhang: [
      { word: 'جانِ رحمت', meaningUr: 'رحمت کی اصل روح اور سرچشمہ', meaningRo: 'Rehmat ki asal rooh', meaningEn: 'The very essence of divine mercy' },
      { word: 'شمعِ بزمِ ہدایت', meaningUr: 'راہنمائی کی محفل کا روشن چراغ', meaningRo: 'Hidayat ki roshan shama', meaningEn: 'The luminous beacon of guidance' },
      { word: 'شہر یارِ ارم', meaningUr: 'جنت کے بادشاہ اور سردار', meaningRo: 'Jannat ke badshah', meaningEn: 'Sovereign of Paradise' },
      { word: 'باغِ جود و سخا', meaningUr: 'سخاوت اور کرم کا سرسبز باغ', meaningRo: 'Sakhawat ka bagh', meaningEn: 'Garden of boundless benevolence' },
    ],
    seoKeywords: [
      'Mustafa Jaan e Rehmat Pe Lakhon Salam full lyrics',
      'مصطفی جان رحمت پہ لاکھوں سلام مکمل',
      'Salam e Raza lyrics Urdu English Roman',
      'Hadaiq e Bakhshish Naat lyrics',
    ],
  },
  {
    id: '2',
    slug: 'qasida-burda-shareef',
    title: {
      ur: 'قصیدہ بردہ شریف (مولای صل وسلم دائما ابدا)',
      ro: 'Qasida Burda Sharif (Mawlaya Salli wa Sallim)',
      en: 'Qasida Burda Sharif (The Ode of the Cloak)',
    },
    poet: {
      ur: 'امام شرف الدین البوصیریؒ',
      ro: 'Imam Sharaf al-Din al-Busiri (R.A)',
      en: 'Imam Sharaf al-Din al-Busiri (R.A)',
    },
    sourceBook: {
      ur: 'الکواکب الدریہ فی مدح خیر البریہ',
      ro: 'Al-Kawakib al-Durriyyah',
      en: 'Al-Kawakib al-Durriyyah (The Celestial Stars in Praise of the Best of Creation)',
    },
    category: 'Qasida',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'مَوْلَايَ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا',
        misra2Ur: 'عَلٰى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ',
        misra1Ro: 'Mawlaya salli wa sallim da’iman abada',
        misra2Ro: 'Ala habeebika khayril khalqi kullihimi',
        meaningEn: 'O my Lord! Send continuous blessings and peace forever upon Your Beloved, the best of all creation.',
      },
      {
        id: 2,
        misra1Ur: 'مُحَمَّدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّقَلَيْنِ',
        misra2Ur: 'وَالْفَرِيقَيْنِ مِنْ عُرْبٍ وَّمِنْ عَجَمِ',
        misra1Ro: 'Muhammadun sayyidul kawnayni wath-thaqalayni',
        misra2Ro: 'Wal-fareeqayni min ‘urbin wa min ‘ajami',
        meaningEn: 'Muhammad is the Master of both worlds, the two weightier creations (men and jinn), and the two branches of mankind—Arabs and non-Arabs.',
      },
      {
        id: 3,
        misra1Ur: 'هُوَ الْحَبِيبُ الَّذِي تُرْجٰى شَفَاعَتُهُ',
        misra2Ur: 'لِكُلِّ هَوْلٍ مِّنَ الْأَهْوَالِ مُقْتَحَمِ',
        misra1Ro: 'Huwal habeebul ladhi turja shafa’atuhu',
        misra2Ro: 'Likulli hawlim minal ahwali muqtahami',
        meaningEn: 'He is the beloved intimate whose intercession is ardently hoped for against every terror among overwhelming hardships.',
      },
      {
        id: 4,
        misra1Ur: 'دَعَا إِلَى اللّٰهِ فَالْمُسْتَمْسِكُونَ بِهِ',
        misra2Ur: 'مُسْتَمْسِكُونَ بِحَبْلٍ غَيْرِ مُنْفَصِمِ',
        misra1Ro: 'Da’a ilallahi fal-mustamsikoona bihi',
        misra2Ro: 'Mustamsikoona bihablin ghayri munfasimi',
        meaningEn: 'He called towards Allah, and those who hold steadfastly to him grasp a rope that can never be severed.',
      },
      {
        id: 5,
        misra1Ur: 'فَاقَ النَّبِيِّينَ فِي خَلْقٍ وَّفِي خُلُقٍ',
        misra2Ur: 'وَلَمْ يُدَانُوهُ فِي عِلْمٍ وَّلَا كَرَمِ',
        misra1Ro: 'Faqan-nabiyyeena fee khalqin wa fee khuluqin',
        misra2Ro: 'Wa lam yudanuhu fee ‘ilmin wa la karami',
        meaningEn: 'He surpassed all Prophets in physical grace and inner character, and none can approach him in divine knowledge or generosity.',
      },
      {
        id: 6,
        misra1Ur: 'وَكُلُّهُمْ مِّن رَّسُولِ اللّٰهِ مُلْتَمِسٌ',
        misra2Ur: 'غَرْفًا مِّنَ الْبَحْرِ أَوْ رَشْفًا مِّنَ الدِّيَمِ',
        misra1Ro: 'Wa kulluhum mir-rasoolil laahi multamisun',
        misra2Ro: 'Gharfam minal bahri aw rashfam minad-diyami',
        meaningEn: 'All seeking from the Messenger of Allah a handful from his boundless ocean or a sip from his unceasing rain of wisdom.',
      },
      {
        id: 7,
        misra1Ur: 'فَمَبْلَغُ الْعِلْمِ فِيهِ أَنَّهُ بَشَرٌ',
        misra2Ur: 'وَأَنَّهُ خَيْرُ خَلْقِ اللّٰهِ كُلِّهِمِ',
        misra1Ro: 'Fa mablaghul ‘ilmi feehi annahu basharun',
        misra2Ro: 'Wa annahu khayru khalqil laahi kullihimi',
        meaningEn: 'The utmost limit of our human knowledge concerning him is that he is a human being, yet indeed the pinnacle of all Allah’s creation.',
      },
      {
        id: 8,
        misra1Ur: 'يَا رَبِّ بِالْمُصْطَفٰى بَلِّغْ مَقَاصِدَنَا',
        misra2Ur: 'وَاغْفِرْ لَنَا مَا مَضَى يَا وَاسِعَ الْكَرَمِ',
        misra1Ro: 'Ya Rabbi bil-Mustafa balligh maqaasidana',
        misra2Ro: 'Waghfir lana ma mada ya wasi’al karami',
        meaningEn: 'O my Lord! For the sake of the Chosen One, grant us our noble aspirations, and forgive our past sins, O Most Generous of All.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: قصیدہ بردہ شریف اسلامی تاریخ کا سب سے مشہور، متبرک اور لازوال عربی نعتیہ قصیدہ ہے۔ اس کے مصنف امام شرف الدین البوصیریؒ فالج کے شدید مرض میں مبتلا ہو گئے تھے، جس پر انہوں نے بارگاہِ رسالت ﷺ میں شفاء اور نجات کی نیت سے یہ پرسوز کلام تالیف کیا۔ خواب میں حضور نبی کریم ﷺ نے تشریف لا کر اپنا مبارک کمبل (بردہ) امام بوصیریؒ پر ڈال دیا اور ان کے جسم پر دستِ شفاء پھیرا۔ صبح اٹھے تو فالج کا نام و نشان نہ تھا۔ اس قصیدے میں رسول اللہ ﷺ کے اخلاقِ حسنہ، مساوات، علم، نبوی معجزات اور قیامت کے ہولناک مناظر میں آپ ﷺ کی شفاعت کا غیر معمولی تذکرہ ہے۔ دنیا کی درجنوں زبانوں میں اس کی شروحات لکھی گئیں۔ آج کا عملی پیغام یہ ہے کہ اپنے تمام ارادوں میں نبی اکرم ﷺ کے اسوہ کو ہادی بنائیں اور اللہ کے حضور گناہوں کی بخشش کے طالب رہیں۔',
      ro: 'Markazi Khayal o Tashreeh: Qasida Burda Sharif aalam-e-Islam ka tareekhi tareen arabi qasida hai. Imam al-Busiriؒ ne faalij ki bimari ke doran bargah-e-risalat mein yeh qasida likha. Khwab mein Huzoor ﷺ ne apni mubarak chadar un par dali aur wo sehat-yab ho gaye. Is qasiday mein husn-e-akhlaq, seerat aur shafa’at ko nihayat aala fasahat ke sath bayan kiya gaya hai.',
      en: 'Spiritual Theme & Explanation: Composed in the 13th century by Imam al-Busiri, Qasida al-Burda (The Ode of the Mantle) stands as the most celebrated poem in the Arabic language. Suffering from debilitating paralysis, the poet composed these verses seeking spiritual and physical healing. In a dream, the Prophet ﷺ draped his own mantle over the poet, and he awakened fully cured. The ode remains a monument of devotion, celebrating the unmatched character and universal mercy of the Prophet ﷺ.',
    },
    farhang: [
      { word: 'سَیِّدُ الْکَوْنَیْن', meaningUr: 'دونوں جہانوں (دنیا و آخرت) کے سردار', meaningRo: 'Dono jahano ke sardar', meaningEn: 'Master of both realms' },
      { word: 'الثَّقَلَیْن', meaningUr: 'جن اور انسان', meaningRo: 'Jinn aur insan', meaningEn: 'Mankind and Jinn' },
      { word: 'حَبْلٍ غَیْرِ مُنْفَصِم', meaningUr: 'مضبوط رسی جو کبھی نہیں ٹوٹتی', meaningRo: 'Mazboot rassi jo na tootay', meaningEn: 'An unbreakable bond' },
      { word: 'غَرْفًا مِّنَ الْبَحْر', meaningUr: 'سمندر سے ایک چلو بھر پانی', meaningRo: 'Samandar se aik chullo paani', meaningEn: 'A single handful from the ocean' },
    ],
    seoKeywords: [
      'Qasida Burda Sharif full text Urdu translation',
      'قصیدہ بردہ شریف مکمل اردو ترجمہ',
      'Mawlaya salli wa sallim lyrics',
      'Imam Busiri Qasida Burda',
    ],
  },
  {
    id: '3',
    slug: 'woh-nabiyon-mein-rehmat-laqab-panay-wala',
    title: {
      ur: 'وہ نبیوں میں رحمت لقب پانے والا (مسدسِ حالی)',
      ro: 'Woh Nabiyon Mein Rehmat Laqab Panay Wala (Musaddas-e-Hali)',
      en: 'Woh Nabiyon Mein Rehmat Laqab Panay Wala (The Prophetic Mercy to Humanity)',
    },
    poet: {
      ur: 'مولانا الطاف حسین حالیؒ',
      ro: 'Maulana Altaf Hussain Hali (R.A)',
      en: 'Maulana Altaf Hussain Hali (R.A)',
    },
    sourceBook: {
      ur: 'مسدسِ حالی (مد و جزرِ اسلام)',
      ro: 'Musaddas-e-Hali',
      en: 'Musaddas-e-Hali (The Flow and Ebb of Islam)',
    },
    category: 'Naat',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'وہ نبیوں میں رحمت لقب پانے والا',
        misra2Ur: 'مرادیں غریبوں کی بر لانے والا',
        misra1Ro: 'Woh nabiyon mein rehmat laqab panay wala',
        misra2Ro: 'Muradein ghareebon ki bar lanay wala',
        meaningEn: 'He who earned the title of Mercy among all Prophets; He who brought to fulfillment the deepest hopes of the poor.',
      },
      {
        id: 2,
        misra1Ur: 'مصیبت میں غیروں کے کام آنے والا',
        misra2Ur: 'وہ اپنے پرائے کا غم کھانے والا',
        misra1Ro: 'Museebat mein ghairon ke kaam aanay wala',
        misra2Ro: 'Woh apne paraye ka gham khanay wala',
        meaningEn: 'He who stood by total strangers in their affliction; He who carried the burdens and sorrows of friend and foe alike.',
      },
      {
        id: 3,
        misra1Ur: 'فقیروں کا ملجا، ضعیفوں کا ماویٰ',
        misra2Ur: 'یتیموں کا والی، غلاموں کا مولیٰ',
        misra1Ro: 'Faqeeron ka malja, za’eefon ka maawa',
        misra2Ro: 'Yateemon ka wali, ghulamon ka mawla',
        meaningEn: 'Sanctuary of the destitute, shelter of the frail; Guardian of vulnerable orphans, liberator of the enslaved.',
      },
      {
        id: 4,
        misra1Ur: 'خطا کار سے درگزر کرنے والا',
        misra2Ur: 'بد اندیش کے دل میں گھر کرنے والا',
        misra1Ro: 'Khata-kaar se darguzar karnay wala',
        misra2Ro: 'Bad-andeesh ke dil mein ghar karnay wala',
        meaningEn: 'He who forgave those who erred against him; He who conquered the hearts of his enemies through sheer gentleness.',
      },
      {
        id: 5,
        misra1Ur: 'مفاسد کا زیر و زبر کرنے والا',
        misra2Ur: 'قبائل کو شیر و شکر کرنے والا',
        misra1Ro: 'Mafasid ka zeer o zabar karnay wala',
        misra2Ro: 'Qabail ko sheer o shakar karnay wala',
        meaningEn: 'He who dismantled corrupt social injustices; He who harmonized warring clans into sweet brotherhood.',
      },
      {
        id: 6,
        misra1Ur: 'اتر کر حرا سے سوئے قوم آیا',
        misra2Ur: 'اور اک نسخۂ کیمیا ساتھ لایا',
        misra1Ro: 'Utar kar Hira se soye qawm aaya',
        misra2Ro: 'Aur ik nuskha-e-keemiya saath laya',
        meaningEn: 'Descending from the sacred Cave of Hira, he returned to his people, bearing the life-transforming elixir of Divine Revelation.',
      },
      {
        id: 7,
        misra1Ur: 'مسِ خام کو جس نے کندن بنایا',
        misra2Ur: 'کھرا اور کھوٹا الگ کر دکھایا',
        misra1Ro: 'Mis-e-khaam ko jis ne kundan banaya',
        misra2Ro: 'Khara aur khota alag kar dikhaya',
        meaningEn: 'Which transmuted raw, crude metal into pure refined gold; Distinguishing truth from falsehood with absolute clarity.',
      },
      {
        id: 8,
        misra1Ur: 'رہا ڈر نہ بیڑے کو موجِ بلا کا',
        misra2Ur: 'ادھر سے ادھر پھر گیا رخ ہوا کا',
        misra1Ro: 'Raha dar na beray ko mauj-e-bala ka',
        misra2Ro: 'Idhar se udhar phir gaya rukh hawa ka',
        meaningEn: 'The ship of humanity feared the storms of destruction no longer; For the very winds of destiny turned toward righteousness.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: اردو کے مایہ ناز ادیب و مصلح مولانا الطاف حسین حالیؒ کا کلام "وہ نبیوں میں رحمت لقب پانے والا" سیرتِ نبوی ﷺ کے سماجی، اخلاقی اور انسانی حقوق کے پہلو کا شاہکار احاطہ ہے۔ حالیؒ نے اس مسدس میں دکھایا کہ قبل از اسلام عرب معاشرہ جہالت، خونریزی، قبائلی عصبیت اور عورتوں و یتیموں کے استحصال کی دلدل میں پھنسا ہوا تھا۔ حضور ﷺ کی تشریف آوری اور غارِ حرا سے لائے گئے "نسخۂ کیمیا" (قرآنِ مجید) نے انسانوں کو مساوات، اخوت، عدل اور باہمی رحم دلی کا سبق دیا۔ آپ ﷺ نے دشمنوں کو معاف فرمایا اور غلاموں کو برابری کا وقار بخشا۔ آج کے دور میں اس کلام کا سب سے بڑا درس یہ ہے کہ اسلام صرف رسومات کا نام نہیں بلکہ دکھی انسانیت کے کام آنا، ظلم کا خاتمہ کرنا اور امن و محبت پھیلانا ہی اصل روحِ مصطفیٰ ﷺ ہے۔',
      ro: 'Markazi Khayal o Tashreeh: Maulana Altaf Hussain Hali (R.A) ki Musaddas ka yeh hissa Seerat-e-Tayyiba ke samaji aur insani pehlu ko ujaagar karta hai. Huzoor ﷺ ne dushmano ko maaf kiya, yateemon ka sahara banay aur qabaili laraiyon ko khatam kar ke bhaicharay ka dars diya. Aaj ka amli sabaq yeh hai ke be-saharon ki madad karein aur aman o insaf ko farogh dein.',
      en: 'Spiritual Theme & Explanation: Written by Maulana Altaf Hussain Hali, this celebrated poem captures the profound humanitarian impact of the Prophet Muhammad ﷺ. Depicting how pre-Islamic Arabia was healed from endless tribal feuds and injustice, Hali illustrates the transforming power of the "elixir" (the Quran) brought down from Hira. The verses emphasize the Prophet’s gentleness toward adversaries, compassion for orphans, and dismantling of oppression.',
    },
    farhang: [
      { word: 'ملجا و ماویٰ', meaningUr: 'پناہ گاہ اور جائے امن', meaningRo: 'Panah-gah aur thikana', meaningEn: 'Refuge and sanctuary' },
      { word: 'بد اندیش', meaningUr: 'بُرا چاہنے والا / دشمن', meaningRo: 'Bura chahnay wala', meaningEn: 'Malicious adversary' },
      { word: 'شیر و شکر', meaningUr: 'دودھ اور چینی کی طرح ایک جان', meaningRo: 'Apas mein ghul mil jana', meaningEn: 'Harmoniously united like milk and sugar' },
      { word: 'نسخۂ کیمیا', meaningUr: 'قرآنِ مجید (تانبے کو سونا بنانے والا نسخہ)', meaningRo: 'Quran-e-Majeed', meaningEn: 'The miraculous alchemy of the Quran' },
      { word: 'مسِ خام', meaningUr: 'کچا تانبا (اخلاق سے محروم انسان)', meaningRo: 'Kacha taanba', meaningEn: 'Raw base metal (unrefined human condition)' },
    ],
    seoKeywords: [
      'Woh Nabiyon Mein Rehmat Laqab Panay Wala lyrics',
      'وہ نبیوں میں رحمت لقب پانے والا مکمل',
      'Musaddas e Hali Naat lyrics Urdu',
      'Altaf Hussain Hali Naat lyrics',
    ],
  },
  {
    id: '4',
    slug: 'subh-taiba-mein-hui-bat-ta-hai-bada-noor-ka',
    title: {
      ur: 'صبح طیبہ میں ہوئی بٹتا ہے باڑہ نور کا (کلامِ رضا)',
      ro: 'Subh Taiba Mein Hui Bat-ta Hai Bada Noor Ka',
      en: 'Dawn Has Broken in Madinah: The Radiance of Guidance is Distributed',
    },
    poet: {
      ur: 'امام احمد رضا خان قادریؒ',
      ro: 'Imam Ahmad Raza Khan (R.A)',
      en: 'Imam Ahmad Raza Khan (R.A)',
    },
    sourceBook: {
      ur: 'حدائقِ بخشش',
      ro: 'Hadaiq-e-Bakhshish',
      en: 'Hadaiq-e-Bakhshish',
    },
    category: 'Naat',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'صبح طیبہ میں ہوئی بٹتا ہے باڑہ نور کا',
        misra2Ur: 'صدقہ لینے نور کا آیا ہے تارا نور کا',
        misra1Ro: 'Subh Taiba mein hui bat-ta hai bada noor ka',
        misra2Ro: 'Sadqah lenay noor ka aaya hai tara noor ka',
        meaningEn: 'Morning has dawned in Madinah, divine illumination is being shared; The morning star has arrived as a beggar seeking alms of this radiant light.',
      },
      {
        id: 2,
        misra1Ur: 'باغِ طیبہ میں سہانی پھول پھولے نور کے',
        misra2Ur: 'نکہتیں پھیلی ہوئی ہیں چار سو بر نور کی',
        misra1Ro: 'Bagh-e-Taiba mein suhani phool phoolay noor ke',
        misra2Ro: 'Nikhtein phayli hui hain chaar soo bar noor ki',
        meaningEn: 'In the garden of Madinah, enchanting flowers of light have blossomed; Fragrances of divine grace permeate the four corners of creation.',
      },
      {
        id: 3,
        misra1Ur: 'تیرے ہی ماتھے رہا اے جانِ جاں سہرا نور کا',
        misra2Ur: 'بخت جاگا نور کا چمکا ستارہ نور کا',
        misra1Ro: 'Tere hi maathay raha aye jaan-e-jaan sehra noor ka',
        misra2Ro: 'Bakht jaaga noor ka chamka sitara noor ka',
        meaningEn: 'Upon your blessed brow, O soul of our souls, rests the bridal wreath of light; The destiny of light has awakened, the morning star of grace shines resplendent.',
      },
      {
        id: 4,
        misra1Ur: 'شمعِ دل، شمعِ جگر، شمعِ تمنا، شمعِ جاں',
        misra2Ur: 'سب بجھیں اور اک رہے روشن اجالا نور کا',
        misra1Ro: 'Shama-e-dil, shama-e-jigar, shama-e-tamanna, shama-e-jaan',
        misra2Ro: 'Sab bujhein aur ik rahay roshan ujala noor ka',
        meaningEn: 'The lamp of the heart, of longing, and of transient mortal life may fade; Yet single and eternal remains the divine radiance of the Prophet.',
      },
      {
        id: 5,
        misra1Ur: 'مہرِ چرخِ دِیں ہے وہ ماہِ تمامِ مصطفیٰ',
        misra2Ur: 'ہے فلک کے چاند سے بڑھ کر نظارہ نور کا',
        misra1Ro: 'Mehr-e-charkh-e-deen hai woh maah-e-tamaam-e-Mustafa',
        misra2Ro: 'Hai falak ke chaand se barh kar nazara noor ka',
        meaningEn: 'He is the radiant sun upon the firmament of faith, the full moon of Mustafa; Far outshining the celestial moon in moral and spiritual beauty.',
      },
      {
        id: 6,
        misra1Ur: 'جو گدا دیکھو لیے جاتا ہے جھولی نور کی',
        misra2Ur: 'نور کی سرکار ہے کیا اس میں توڑا نور کا',
        misra1Ro: 'Jo gada dekho liye jata hai jholi noor ki',
        misra2Ro: 'Noor ki sarkar hai kya is mein toda noor ka',
        meaningEn: 'Every humble beggar walks away with their mantle overflowing with light; In the court of the Prophet, can there ever be scarcity of divine mercy?',
      },
      {
        id: 7,
        misra1Ur: 'اہلِ محشر کی نظر ہے تیرے دامن پر لگی',
        misra2Ur: 'ڈھانپ لے اے بے کسوں کے آس چادر نور کی',
        misra1Ro: 'Ahl-e-mehshar ki nazar hai tere daaman par lagi',
        misra2Ro: 'Dhaanp le aye be-kason ke aas chadar noor ki',
        meaningEn: 'The eyes of all on Resurrection Day are fixed upon your cloak of mercy; Cover us, O hope of the helpless, beneath your mantle of divine light.',
      },
      {
        id: 8,
        misra1Ur: 'اے رضاؔ یہ احمدِ نوری کا فیضِ جود ہے',
        misra2Ur: 'بن گیا ہر اک سخن تیرا سفینہ نور کا',
        misra1Ro: 'Aye Raza yeh Ahmad-e-Noori ka faiz-e-jood hai',
        misra2Ro: 'Ban gaya har ik sukhan tera safeena noor ka',
        meaningEn: 'O Raza! It is through the generous spiritual grace of the Master that every line you compose becomes a vessel sailing across an ocean of light.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: یہ نعتیہ کلام مدینہ منورہ کی فضاؤں اور ذاتِ رسالت مآب ﷺ کے نورانی فیضان کی تصویر کشی کا نادر نمونہ ہے۔ امام احمد رضا خانؒ نے مطلع میں استعارہ قائم کیا کہ جب مدینہ منورہ میں صبح طلوع ہوتی ہے تو ایسا معلوم ہوتا ہے کہ آسمان کا ستارہ بھی حضور ﷺ کے دربار سے خیرات اور نور مانگنے جھک رہا ہے۔ اس نعت کا اصل پیغام یہ ہے کہ انسان دنیا کی فانی لذتوں اور عارضی روشنیوں کے پیچھے بھاگنے کے بجائے سیرتِ رسول ﷺ کے پائیدار نور سے اپنے دل کو آباد کرے، کیونکہ میدانِ حشر میں یہی نور انسان کا نجات دہندہ بنے گا۔',
      ro: 'Markazi Khayal o Tashreeh: Yeh kalam Madinah Munawwarah ki noorani fizao aur Rasool-e-Akram ﷺ ki rehmat o sakhawat ka azeem bayan hai. Dunya ki tamam roshniyan fani hain jabkeh Nabi ﷺ ki hidayat ka noor abadi hai. Is kalam se sabaq milta hai ke dil ko zikr aur sunnat ki roshni se aabaad rakhein.',
      en: 'Spiritual Theme & Explanation: This sublime ode paints the spiritual atmosphere of Madinah, depicting how the dawn of Prophetic guidance dissipates all moral darkness. Contrasting the fleeting lamps of worldly desires against the timeless illumination of the Prophet’s character, the poet reminds us that true dignity lies in turning toward divine guidance and embodying ethical excellence.',
    },
    farhang: [
      { word: 'طیبہ', meaningUr: 'مدینہ منورہ کا مبارک نام (پاکیزہ شہر)', meaningRo: 'Madinah Munawwarah', meaningEn: 'The pure city of Madinah' },
      { word: 'باڑہ', meaningUr: 'خیرات یا فیض کا عام بٹوارا', meaningRo: 'Khairat ya feiz ka hissa', meaningEn: 'Bountiful distribution of gifts' },
      { word: 'نکہتیں', meaningUr: 'خوشبوئیں، مہک', meaningRo: 'Khushbuyein', meaningEn: 'Sweet heavenly fragrances' },
      { word: 'گدا', meaningUr: 'فقیر، محتاج، سائل', meaningRo: 'Faqeer ya mangnay wala', meaningEn: 'Humble petitioner / seeker' },
    ],
    seoKeywords: [
      'Subh Taiba Mein Hui lyrics',
      'صبح طیبہ میں ہوئی بٹتا ہے باڑہ نور کا مکمل',
      'Kalam e Raza Subh Taiba lyrics',
      'Hadaiq e Bakhshish Noor naat',
    ],
  },
  {
    id: '5',
    slug: 'faaslon-ko-takalluf-hai-hum-se-agar',
    title: {
      ur: 'فاصلوں کو تکلف ہے ہم سے اگر (پروفیسر اقبال عظیم)',
      ro: 'Faaslon Ko Takalluf Hai Hum Se Agar (Iqbal Azeem)',
      en: 'Faaslon Ko Takalluf Hai Hum Se Agar (Longing for the Sacred Sanctuary)',
    },
    poet: {
      ur: 'پروفیسر اقبال عظیمؒ',
      ro: 'Prof. Iqbal Azeem (R.A)',
      en: 'Prof. Iqbal Azeem (R.A)',
    },
    sourceBook: {
      ur: 'مضراب (کلیاتِ اقبال عظیم)',
      ro: 'Mizraab (Kulliyat-e-Iqbal Azeem)',
      en: 'Mizraab (Poetic Works of Iqbal Azeem)',
    },
    category: 'Naat',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'فاصلوں کو تکلف ہے ہم سے اگر',
        misra2Ur: 'ہم بھی بے بس نہیں ہیں، نہ بے کس ہیں ہم',
        misra1Ro: 'Faaslon ko takalluf hai hum se agar',
        misra2Ro: 'Hum bhi be-bas nahi hain, na be-kas hain hum',
        meaningEn: 'If physical distances pose an obstacle before us; We are neither helpless nor destitute in spirit.',
      },
      {
        id: 2,
        misra1Ur: 'ان کو پائیں گے ہم اپنے سینے میں ہی',
        misra2Ur: 'ان کے کوچے سے جب دل لگا لیں گے ہم',
        misra1Ro: 'Un ko paayein ge hum apne seenay mein hi',
        misra2Ro: 'Un ke koochay se jab dil laga lein ge hum',
        meaningEn: 'We shall find his blessed presence deep within our own hearts; Once we anchor our deepest affections in his holy street.',
      },
      {
        id: 3,
        misra1Ur: 'ان کی رحمت سے جب مسکرا دے گی آنکھ',
        misra2Ur: 'اشکِ غم کو بھی خوشبو بنا لیں گے ہم',
        misra1Ro: 'Un ki rehmat se jab muskura de gi aankh',
        misra2Ro: 'Ashk-e-gham ko bhi khushboo bana lein ge hum',
        meaningEn: 'When his boundless mercy brings a gentle smile to the eye; We shall transform our tears of longing into pure fragrance.',
      },
      {
        id: 4,
        misra1Ur: 'گنبدِ خضریٰ پر جب نگاہیں ہوں گی',
        misra2Ur: 'ساری دنیا کے غم بھول جائیں گے ہم',
        misra1Ro: 'Gumbad-e-Khizra par jab nigahein hon gi',
        misra2Ro: 'Saari duniya ke gham bhool jayein ge hum',
        meaningEn: 'When our gazing eyes rest upon the Green Dome; We shall forget all trials and griefs of this fleeting world.',
      },
      {
        id: 5,
        misra1Ur: 'ہم گنہگار ہیں پر وہ غفار ہیں',
        misra2Ur: 'اپنا دامن دعا سے سجا لیں گے ہم',
        misra1Ro: 'Hum gunahgar hain par woh ghaffar hain',
        misra2Ro: 'Apna daaman dua se saja lein ge hum',
        meaningEn: 'We carry shortcomings, yet Allah is All-Forgiving and he is our intercessor; We shall adorn our empty mantles with fervent prayer.',
      },
      {
        id: 6,
        misra1Ur: 'یا نبی ﷺ! التجا ہے کہ وہ دن بھی آئے',
        misra2Ur: 'تیرے روضے کی جالی کو چومیں گے ہم',
        misra1Ro: 'Ya Nabi ﷺ! iltija hai ke woh din bhi aaye',
        misra2Ro: 'Tere rozay ki jaali ko choomein ge hum',
        meaningEn: 'O Prophet ﷺ! Our prayer is that the blessed day arrives when we stand in devotion before your sacred resting place.',
      },
      {
        id: 7,
        misra1Ur: 'اے اقبالؔ ان کی مدحت ہے میرا نصیب',
        misra2Ur: 'اس کرم کا شکر کیسے ادا کریں گے ہم',
        misra1Ro: 'Aye Iqbal un ki midhat hai mera naseeb',
        misra2Ro: 'Is karam ka shukr kaisay ada karein ge hum',
        meaningEn: 'O Iqbal! Singing his praise is my greatest honor in life; How can our humble tongue ever express gratitude for such divine grace?',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: پروفیسر اقبال عظیمؒ نے بصارت سے محروم ہونے کے باوجود اس کلام میں جس والہانہ عقیدت اور قلبی روانی کا مظاہرہ کیا ہے، وہ دنیائے نعت میں اپنی مثال آپ ہے۔ اس نعت کا بنیادی پیغام یہ ہے کہ اگر ظاہری طور پر انسان مدینہ منورہ سے ہزاروں میل دور ہو، لیکن اگر دل میں سچا عشقِ رسول ﷺ، ادب اور اتباعِ سنت موجود ہو تو جغرافیائی فاصلے مٹ جاتے ہیں اور مومن اپنے سینے میں ہی روضۂ رسول ﷺ کا نور محسوس کرتا ہے۔ شاعر سکھاتا ہے کہ مایوسی اور بے بسی کو چھوڑ کر آنسوؤں اور دعاؤں کے ذریعے اپنے تعلق باللہ اور تعلق بالرسول کو مضبوط کریں۔',
      ro: 'Markazi Khayal o Tashreeh: Professor Iqbal Azeemؒ ne aankhon ki basarat na hone ke bawajood dil ki gehraiyon se yeh pur-dard naat tehreer farmai. Is kalam ka sabaq yeh hai ke agar dil mein sachi mohabbat ho to Madinah Munawwarah ke faslay qurbat mein badal jate hain.',
      en: 'Spiritual Theme & Explanation: Penned by the visually impaired educator and poet Professor Iqbal Azeem, this deeply emotive Naat reflects how true devotion transcends physical mileage. Even if oceans separate the believer from Madinah, cultivating pure love and adherence to the Sunnah turns the human chest into a sanctuary of peace.',
    },
    farhang: [
      { word: 'تکلف', meaningUr: 'جھجھک، رکاوٹ، دوری', meaningRo: 'Rukawat ya doori', meaningEn: 'Hesitation or barrier' },
      { word: 'گنبدِ خضریٰ', meaningUr: 'مسجد نبوی ﷺ کا سبز گنبد', meaningRo: 'Sabz Gumbad', meaningEn: 'The sacred Green Dome of Madinah' },
      { word: 'مدحت', meaningUr: 'تعریف، حمد و ثناء، نعت', meaningRo: 'Tareef o Naat', meaningEn: 'Sacred praise and eulogy' },
    ],
    seoKeywords: [
      'Faaslon Ko Takalluf Hai Hum Se Agar lyrics',
      'فاصلوں کو تکلف ہے ہم سے اگر مکمل',
      'Iqbal Azeem Naat lyrics',
      'Madinah longing Naat lyrics Urdu',
    ],
  },
  {
    id: '6',
    slug: 'tajdar-e-haram-ae-shahenshah-e-deen',
    title: {
      ur: 'تاجدارِ حرم اے شہنشاہِ دیں (حکیم مرزا ادیب / صابری برادرز)',
      ro: 'Tajdar-e-Haram Ae Shahenshah-e-Deen',
      en: 'Tajdar-e-Haram: Sovereign of the Sacred Sanctuary',
    },
    poet: {
      ur: 'حکیم مرزا ادیب و پرنم الہ آبادیؒ',
      ro: 'Hakim Mirza Adeeb & Purnam Allahabadi',
      en: 'Hakim Mirza Adeeb & Purnam Allahabadi',
    },
    sourceBook: {
      ur: 'دیوانِ قوالی و کلامِ نعت',
      ro: 'Diwan-e-Naat o Qawwali',
      en: 'Diwan of Classical Devotional Poetry',
    },
    category: 'Naat',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'تاجدارِ حرم، اے شہنشاہِ دیں',
        misra2Ur: 'تم پہ ہر دم کروڑوں درود و سلام',
        misra1Ro: 'Tajdar-e-haram, ae shahenshah-e-deen',
        misra2Ro: 'Tum pe har dam karoron durood o salam',
        meaningEn: 'O Sovereign of the Sanctuary, O Emperor of Faith; Upon you in every instant be millions of blessings and salutations.',
      },
      {
        id: 2,
        misra1Ur: 'ہو نگاہِ کرم ہم پہ سلطانِ دیں',
        misra2Ur: 'تم پہ ہر دم کروڑوں درود و سلام',
        misra1Ro: 'Ho nigah-e-karam hum pe sultan-e-deen',
        misra2Ro: 'Tum pe har dam karoron durood o salam',
        meaningEn: 'Cast your glance of benevolence upon our state, O Prince of Faith; Upon you in every instant be millions of blessings and peace.',
      },
      {
        id: 3,
        misra1Ur: 'کوئی مفلس ہے کوئی گدا ہے یہاں',
        misra2Ur: 'سب کے سر پر تمہاری عطا ہے یہاں',
        misra1Ro: 'Koi muflis hai koi gada hai yahan',
        misra2Ro: 'Sab ke sar par tumhari ata hai yahan',
        meaningEn: 'Here stand the impoverished and the humble seekers; Over every head extends the umbrella of your divine bounty.',
      },
      {
        id: 4,
        misra1Ur: 'دکھ دردمندوں کا درماں تمہی ہو',
        misra2Ur: 'ہم غریبوں کے والی و سلطاں تمہی ہو',
        misra1Ro: 'Dukh dard-mandon ka darmaan tumhi ho',
        misra2Ro: 'Hum ghareebon ke wali o sultan tumhi ho',
        meaningEn: 'You are the gentle cure for hearts crushed by agony; You are the true guardian and benefactor of the humble.',
      },
      {
        id: 5,
        misra1Ur: 'چشمِ رحمت کشا سوئے بے کس نما',
        misra2Ur: 'یا شفیع الوریٰ، یا نبی المصطفیٰ ﷺ',
        misra1Ro: 'Chashm-e-rehmat kusha soye be-kas numa',
        misra2Ro: 'Ya shafee’al wara, ya Nabiyyal Mustafa',
        meaningEn: 'Open your merciful eye upon the destitute; O intercessor of all creation, O Chosen Prophet of Allah.',
      },
      {
        id: 6,
        misra1Ur: 'دور رہ کر بھی ہم تیرے دربار میں',
        misra2Ur: 'کھڑے ہیں باادب تیری سرکار میں',
        misra1Ro: 'Door reh kar bhi hum tere darbar mein',
        misra2Ro: 'Kharay hain ba-adab teri sarkar mein',
        meaningEn: 'Though distant in body, our spirits stand reverently present in your blessed court.',
      },
      {
        id: 7,
        misra1Ur: 'مجھ کو دنیا کی دولت کی پروا نہیں',
        misra2Ur: 'تیرا در ہی ہے میرا جہاں اور امیں',
        misra1Ro: 'Mujh ko duniya ki daulat ki parwa nahi',
        misra2Ro: 'Tera dar hi hai mera jahan aur ameen',
        meaningEn: 'I harbor no attachment for the fleeting riches of this earth; Your threshold is my world, my refuge, and my honor.',
      },
      {
        id: 8,
        misra1Ur: 'غم کے ماروں کو مل جائے دار الشفاء',
        misra2Ur: 'تاجدارِ حرم اے شہنشاہِ دیں',
        misra1Ro: 'Gham ke maaron ko mil jaye dar-ush-shifa',
        misra2Ro: 'Tajdar-e-haram ae shahenshah-e-deen',
        meaningEn: 'May bruised and grieving souls find the dwelling of absolute healing; O Sovereign of the Sanctuary, O Emperor of Faith.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: "تاجدارِ حرم" قوالی اور نعتیہ ادب کا وہ سدا بہار کلام ہے جس نے دہائیوں سے دنیا بھر کے سامعین کے دلوں کو تڑپایا ہے۔ صابری برادرز کی پرتاثیر آواز نے اسے بین الاقوامی شہرت بخشی۔ اس کلام کا مرکزی نکتہ یہ ہے کہ دنیا کا انسان جب تمام سہاروں سے مایوس ہو جاتا ہے، تو وہ رحمۃ للعالمین ﷺ کی بارگاہ میں دستِ دعا اٹھاتا ہے۔ یہ کلام انسان کو مادہ پرستی کی حرص سے آزاد کر کے روحانی قناعت، دعا، عاجزی اور درود کی عادت اپنانے کی ترغیب دیتا ہے۔',
      ro: 'Markazi Khayal o Tashreeh: "Tajdar-e-Haram" aalam-e-Islam ki mashhoor tareen naatiya nazm hai jise Sabri Brothers ne aalmi shohrat ataa ki. Yeh kalam insan ko aajzi, dua aur Rasoolullah ﷺ se taalluq qaim karne ka dars deta hai.',
      en: 'Spiritual Theme & Explanation: Immortalized by legendary vocalists, Tajdar-e-Haram is one of the most recognized devotional hymns in the subcontinent. It captures the cry of an afflicted soul turning away from fleeting worldly wealth toward the eternal spiritual fountainhead of the Prophet ﷺ.',
    },
    farhang: [
      { word: 'تاجدارِ حرم', meaningUr: 'حرمِ کعبہ و مدینہ کے تاجدار سردار', meaningRo: 'Haram ke badshah', meaningEn: 'Sovereign of the Sacred Sanctuary' },
      { word: 'درماں', meaningUr: 'علاج، دوا، تسکین', meaningRo: 'Ilaaj ya dawa', meaningEn: 'Cure / Remedy' },
      { word: 'شفیع الوریٰ', meaningUr: 'ساری مخلوق کی شفاعت فرمانے والے', meaningRo: 'Makhlooq ki shafa’at karne wale', meaningEn: 'Intercessor of all creation' },
    ],
    seoKeywords: [
      'Tajdar e Haram full lyrics',
      'تاجدار حرم اے شہنشاہ دیں مکمل',
      'Tajdar e Haram Sabri Brothers lyrics',
      'Classical Qawwali Naat lyrics',
    ],
  },
  {
    id: '7',
    slug: 'woh-soo-e-lalazar-phirte-hain',
    title: {
      ur: 'وہ سوئے لالہ زار پھرتے ہیں (کلامِ رضا)',
      ro: 'Woh Soo-e-Lalazar Phirte Hain (Kalam-e-Raza)',
      en: 'Woh Soo-e-Lalazar Phirte Hain (The Gentle Stroll through the Garden of Flowers)',
    },
    poet: {
      ur: 'امام احمد رضا خان قادریؒ',
      ro: 'Imam Ahmad Raza Khan (R.A)',
      en: 'Imam Ahmad Raza Khan (R.A)',
    },
    sourceBook: {
      ur: 'حدائقِ بخشش',
      ro: 'Hadaiq-e-Bakhshish',
      en: 'Hadaiq-e-Bakhshish',
    },
    category: 'Naat',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'وہ سوئے لالہ زار پھرتے ہیں',
        misra2Ur: 'تیرے دن اے بہار پھرتے ہیں',
        misra1Ro: 'Woh soo-e-lalazar phirte hain',
        misra2Ro: 'Tere din aye bahaar phirte hain',
        meaningEn: 'He strolls toward the garden of tulips; O spring, your glorious days have returned.',
      },
      {
        id: 2,
        misra1Ur: 'جو قدم لے لیا ہے ماتھے پر',
        misra2Ur: 'خاک کے وہ وقار پھرتے ہیں',
        misra1Ro: 'Jo qadam le liya hai maathay par',
        misra2Ro: 'Khaak ke woh waqar phirte hain',
        meaningEn: 'The humble dust that touched his blessed footsteps now wanders endowed with supreme dignity.',
      },
      {
        id: 3,
        misra1Ur: 'کوئی کیوں پوچھے تیری باتوں کو',
        misra2Ur: 'وہ نہ پوچھیں تو کون پوچھے گا',
        misra1Ro: 'Koi kyun poochay teri baaton ko',
        misra2Ro: 'Woh na poochein to kaun poochay ga',
        meaningEn: 'Why should anyone pay heed to our broken words? Yet if he does not show compassion to us, who else ever will?',
      },
      {
        id: 4,
        misra1Ur: 'ان کے در پر جو گر پڑے اک بار',
        misra2Ur: 'غم سے وہ رستگار پھرتے ہیں',
        misra1Ro: 'Un ke dar par jo gir paray ik baar',
        misra2Ro: 'Gham se woh rustagaar phirte hain',
        meaningEn: 'Whoever prostrates in humility at his threshold walks through life liberated from sorrow.',
      },
      {
        id: 5,
        misra1Ur: 'ریزشِ ابرِ جود ہے ہر سو',
        misra2Ur: 'بے طلب بادہ خوار پھرتے ہیں',
        misra1Ro: 'Reezish-e-abr-e-jood hai har soo',
        misra2Ro: 'Be-talab baada-khwaar phirte hain',
        meaningEn: 'The drizzle of generosity pours forth on all sides; Drinkers of divine wisdom receive bounty even without asking.',
      },
      {
        id: 6,
        misra1Ur: 'اے رضاؔ خود وہ ہیں کرم فرما',
        misra2Ur: 'اور تجھ سے گناہگار پھرتے ہیں',
        misra1Ro: 'Aye Raza khud woh hain karam-farma',
        misra2Ro: 'Aur tujh se gunahgaar phirte hain',
        meaningEn: 'O Raza! He himself is the sovereign of mercy, and forgiveness encompasses sinners like thee.',
      },
      {
        id: 7,
        misra1Ur: 'ان کے جلووں کی تاب لائے کون',
        misra2Ur: 'شمع پر جان نثار پھرتے ہیں',
        misra1Ro: 'Un ke jalwon ki taab laaye kaun',
        misra2Ro: 'Shama par jaan-nisaar phirte hain',
        meaningEn: 'Who can bear the blinding splendor of his spiritual manifestations? Devoted moths circle his eternal flame.',
      },
      {
        id: 8,
        misra1Ur: 'پھول مہکے ہیں ان کے رستے میں',
        misra2Ur: 'باغبانِ بہار پھرتے ہیں',
        misra1Ro: 'Phool mehkay hain un ke rastay mein',
        misra2Ro: 'Baghban-e-bahaar phirte hain',
        meaningEn: 'Sweet blossoms exude perfume along his sacred pathways, as spring’s gardeners celebrate his footsteps.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: یہ نعت امام احمد رضا خانؒ کے نازک خیال اور شاعرانہ تخیل کا حسین ترین شاہکار ہے۔ اس میں شاعر نے بہار، پھولوں، لالہ زار اور مدینہ کی مٹی کی نزاکت کو علامت بنا کر رسول اللہ ﷺ کی تشریف آوری کے فیوض و برکات کو بیان کیا ہے۔ جب انسان کا دل رسول اللہ ﷺ کے ذکر سے معطر ہوتا ہے تو اس کے اندر مایوسی کا خزاں ختم ہو جاتا ہے اور اخلاق و روحانیت کی بہار آ جاتی ہے۔',
      ro: 'Markazi Khayal o Tashreeh: Yeh naat intehai nazaakat aur adabi shaoor ka namoona hai. Madinah ki khaak aur Rasoolullah ﷺ ke qadmon ki barkat se insan ki zindagi mein roohani bahaar aati hai.',
      en: 'Spiritual Theme & Explanation: Featuring delicate floral imagery, this classical poem celebrates how the Prophet’s guidance breathes life into dead hearts, just as the footsteps of spring awaken sleeping gardens.',
    },
    farhang: [
      { word: 'لالہ زار', meaningUr: 'سرخ پھولوں (لالہ) کا باغ', meaningRo: 'Surkh phoolon ka bagh', meaningEn: 'Garden of blooming tulips' },
      { word: 'رستگار', meaningUr: 'نجات پانے والا، آزاد', meaningRo: 'Nijat panay wala', meaningEn: 'Delivered / liberated' },
      { word: 'ریزشِ ابرِ جود', meaningUr: 'سخاوت کے بادل کی بارش', meaningRo: 'Sakhawat ki baarish', meaningEn: 'Drizzle of the cloud of generosity' },
    ],
    seoKeywords: [
      'Woh Soo e Lalazar Phirte Hain lyrics',
      'وہ سوئے لالہ زار پھرتے ہیں مکمل',
      'Hadaiq e Bakhshish Lalazar Naat',
      'Kalam e Raza lyrics Urdu',
    ],
  },
  {
    id: '8',
    slug: 'kabe-ke-badr-ud-duja-tum-pe-karoron-durood',
    title: {
      ur: 'کعبے کے بدر الدجیٰ تم پہ کروڑوں درود (کلامِ رضا)',
      ro: 'Kabe Ke Badr-ud-Duja Tum Pe Karoron Durood',
      en: 'Kabe Ke Badr-ud-Duja: Full Moon of Makkah, Morning Sun of Madinah',
    },
    poet: {
      ur: 'امام احمد رضا خان قادریؒ',
      ro: 'Imam Ahmad Raza Khan (R.A)',
      en: 'Imam Ahmad Raza Khan (R.A)',
    },
    sourceBook: {
      ur: 'حدائقِ بخشش',
      ro: 'Hadaiq-e-Bakhshish',
      en: 'Hadaiq-e-Bakhshish',
    },
    category: 'Salam',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'کعبے کے بدر الدجیٰ تم پہ کروڑوں درود',
        misra2Ur: 'طیبہ کے شمس الضحیٰ تم پہ کروڑوں درود',
        misra1Ro: 'Kaabay ke badrud-duja tum pe karoron durood',
        misra2Ro: 'Taiba ke shamsud-duha tum pe karoron durood',
        meaningEn: 'O full moon illuminating darkness around the Kaabah, millions of blessings upon you; O radiant morning sun over Madinah, millions of blessings upon you.',
      },
      {
        id: 2,
        misra1Ur: 'شافعِ روزِ جزا تم پہ کروڑوں درود',
        misra2Ur: 'دافعِ جملہ بلا تم پہ کروڑوں درود',
        misra1Ro: 'Shafe-e-roz-e-jaza tum pe karoron durood',
        misra2Ro: 'Dafe-e-jumla bala tum pe karoron durood',
        meaningEn: 'Intercessor upon the Day of Reckoning, millions of blessings upon you; Disperser of all afflictions, millions of blessings upon you.',
      },
      {
        id: 3,
        misra1Ur: 'جان و دلِ اولیا، قبلۂ اہلِ صفا',
        misra2Ur: 'مظہرِ نورِ خدا تم پہ کروڑوں درود',
        misra1Ro: 'Jaan o dil-e-awliya, qibla-e-ahl-e-safa',
        misra2Ro: 'Mazhar-e-noor-e-khuda tum pe karoron durood',
        meaningEn: 'Soul and heart of the saints, spiritual compass of the pure; Manifestation of the light of Allah, millions of blessings upon you.',
      },
      {
        id: 4,
        misra1Ur: 'کوئی نہ پہنچا جہاں تم ہو پہنچے وہاں',
        misra2Ur: 'سدرہ کے معراج پر تم پہ کروڑوں درود',
        misra1Ro: 'Koi na pohncha jahan tum ho pohnchay wahan',
        misra2Ro: 'Sidra ke me’raj par tum pe karoron durood',
        meaningEn: 'Where no mortal or angel could ever reach, thither didst thou ascend; Upon the pinnacle of the Ascension beyond Sidra, millions of blessings upon you.',
      },
      {
        id: 5,
        misra1Ur: 'تم ہو شفیعِ امم، تم پہ خدا کا کرم',
        misra2Ur: 'بحرِ عطا و شیم تم پہ کروڑوں درود',
        misra1Ro: 'Tum ho shafee’-e-umam, tum pe khuda ka karam',
        misra2Ro: 'Bahr-e-ata o shiyam tum pe karoron durood',
        meaningEn: 'You are the intercessor for all nations, crowned with divine favor; Ocean of bounty and noble character, millions of blessings upon you.',
      },
      {
        id: 6,
        misra1Ur: 'تیرے ہی دم سے ہے دیں، تیرے ہی دم سے زمیں',
        misra2Ur: 'اے شہِ عرشِ بریں تم پہ کروڑوں درود',
        misra1Ro: 'Tere hi dam se hai deen, tere hi dam se zameen',
        misra2Ro: 'Aye sheh-e-arsh-e-bareen tum pe karoron durood',
        meaningEn: 'Through your mission stands faith, and through your grace the earth finds balance; O prince honored upon the celestial Throne, millions of blessings upon you.',
      },
      {
        id: 7,
        misra1Ur: 'بے کس و بے آس ہیں، تیرے ہی پاس ہیں',
        misra2Ur: 'رحمتِ ربِ علا تم پہ کروڑوں درود',
        misra1Ro: 'Be-kas o be-aas hain, tere hi paas hain',
        misra2Ro: 'Rehmat-e-rabb-e-ula tum pe karoron durood',
        meaningEn: 'Helpless and without worldly anchor, we turn to your sanctuary; Mercy of the Exalted Lord, millions of blessings upon you.',
      },
      {
        id: 8,
        misra1Ur: 'وردِ زباں ہو رضاؔ صبح و مسا رات دن',
        misra2Ur: 'صلِ علیٰ مصطفیٰ تم پہ کروڑوں درود',
        misra1Ro: 'Wird-e-zaban ho Raza subh o masa raat din',
        misra2Ro: 'Salli ala Mustafa tum pe karoron durood',
        meaningEn: 'Let your tongue continually recite, O Raza, morning and night: Blessings upon al-Mustafa, millions of salutations upon you.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: یہ کلام بارگاہِ مصطفیٰ ﷺ میں ہدیۂ درود پیش کرنے کا جامع ترین اور باادب انداز ہے۔ شاعر نے مکہ مکرمہ کی بعثت کو رات کے اندھیرے میں چودھویں کے چاند اور مدینہ منورہ کے دور کو صبح کے روشن سورج سے تشبیہ دی ہے۔ یہ نعت یاد دلاتی ہے کہ سچے مسلمان کا سب سے قیمتی اثاثہ روزانہ درود شریف کا ورد رکھنا ہے، جس سے دنیا میں سکون اور آخرت میں شفاعت نصیب ہوتی ہے۔',
      ro: 'Markazi Khayal o Tashreeh: Yeh salam Nabi Kareem ﷺ ki azmat aur shafa’at ka dilkash bayan hai. Subah o shaam Durood Shareef ka wird dil ko paak karta hai.',
      en: 'Spiritual Theme & Explanation: Interweaving the sacred geography of Makkah and Madinah with the theme of intercession, this beloved hymn encourages believers to turn Durood into a daily morning and evening practice.',
    },
    farhang: [
      { word: 'بدر الدجیٰ', meaningUr: 'تاریکیوں کو مٹانے والا چودھویں کا چاند', meaningRo: 'Andhere ka chaand', meaningEn: 'Full moon illuminating the night' },
      { word: 'شمس الضحیٰ', meaningUr: 'صبح کا روشن آفتاب', meaningRo: 'Subah ka suraj', meaningEn: 'The radiant morning sun' },
      { word: 'دافعِ جملہ بلا', meaningUr: 'تمام آفتوں اور مصیبتوں کو ٹالنے والے', meaningRo: 'Aafat ko door karne wale', meaningEn: 'Disperser of all afflictions' },
    ],
    seoKeywords: [
      'Kabe Ke Badr ud Duja lyrics',
      'کعبے کے بدر الدجیٰ تم پہ کروڑوں درود مکمل',
      'Kalam e Raza Durood lyrics',
      'Badrud Duja Shamsud Duha lyrics',
    ],
  },
  {
    id: '9',
    slug: 'main-to-panjtan-ka-ghulam-hoon',
    title: {
      ur: 'میں تو پنجتن کا غلام ہوں (منقبت و محبتِ اہلِ بیت)',
      ro: 'Main To Panjtan Ka Ghulam Hoon',
      en: 'Main To Panjtan Ka Ghulam Hoon (Love of the Prophetic Household)',
    },
    poet: {
      ur: 'کلامِ عارفین و قدما',
      ro: 'Classical Devotional Sages',
      en: 'Classical Devotional Sages',
    },
    sourceBook: {
      ur: 'دیوانِ مناقب و مدحت',
      ro: 'Diwan-e-Manaqib',
      en: 'Classical Anthology of Prophetic Household Devotion',
    },
    category: 'Manqabat',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'میں تو پنجتن کا غلام ہوں، میں تو پنجتن کا غلام ہوں',
        misra2Ur: 'پنجتن کے در کا فقیر ہوں، ان کے فیض کا میں گدا ہوں',
        misra1Ro: 'Main to Panjtan ka ghulam hoon, main to Panjtan ka ghulam hoon',
        misra2Ro: 'Panjtan ke dar ka faqeer hoon, un ke faiz ka main gada hoon',
        meaningEn: 'I am a humble devotee of the Holy Five; A seeker standing at their threshold, sustained by their spiritual bounty.',
      },
      {
        id: 2,
        misra1Ur: 'مصطفیٰ، مرتضیٰ، فاطمہ، شبر و شبیر',
        misra2Ur: 'انہی کے در سے وابستہ ہے میری یہ تقدیر',
        misra1Ro: 'Mustafa, Murtaza, Fatima, Shabbar o Shabbeer',
        misra2Ro: 'Unhi ke dar se wabasta hai meri yeh taqdeer',
        meaningEn: 'Mustafa, Murtaza, Fatima, Hasan and Hussain; Bound to their noble court is my destiny in this life and the next.',
      },
      {
        id: 3,
        misra1Ur: 'مجھے خوفِ محشر نہیں کوئی، مجھے فکرِ روزِ جزا نہیں',
        misra2Ur: 'میرے لب پہ نامِ حسینؑ ہے، مجھے کوئی اور دوا نہیں',
        misra1Ro: 'Mujhe khauf-e-mahshar nahi koi, mujhe fikr-e-roz-e-jaza nahi',
        misra2Ro: 'Mere lab pe naam-e-Hussein hai, mujhe koi aur dawa nahi',
        meaningEn: 'I dread not the terrors of the Reckoning, nor do anxieties overcome me; For love of the Prophetic house is the cure to all my wounds.',
      },
      {
        id: 4,
        misra1Ur: 'نہ جھکے گا سر یہ کہیں کبھی، نہ مٹے گی میری یہ بندگی',
        misra2Ur: 'انہیں پانچ تن کے طفیل سے مجھے مل گئی ہے یہ زندگی',
        misra1Ro: 'Na jhukay ga sar yeh kaheen kabhi, na mitay gi meri yeh bandagi',
        misra2Ro: 'Inhein paanch tan ke tufail se mujhe mil gayi hai yeh zindagi',
        meaningEn: 'Never shall my head bow before tyranny, nor shall my devotion waver; Through their spiritual grace my life has gained eternal purpose.',
      },
      {
        id: 5,
        misra1Ur: 'جو نبی ﷺ کا ہے وہ علیؓ کا ہے، جو علیؓ کا ہے وہ نبی ﷺ کا ہے',
        misra2Ur: 'اسی اک تعلقِ پاک سے مرا رشتہ سارا جڑا ہوا',
        misra1Ro: 'Jo Nabi ka hai woh Ali ka hai, jo Ali ka hai woh Nabi ka hai',
        misra2Ro: 'Isi ik taalluq-e-paak se mera rishta saara jura hua',
        meaningEn: 'Whosoever belongs to the Prophet belongs to Ali, and whoever holds fast to Ali loves the Prophet; Upon this sanctified bond rests our faith.',
      },
      {
        id: 6,
        misra1Ur: 'درِ مصطفیٰ ﷺ کے فقیر کو ہے جہان کی پروا کیا',
        misra2Ur: 'جہاں خاک بھی ان کے قدموں کی ہے اکسیرِ اعظمِ کبریا',
        misra1Ro: 'Dar-e-Mustafa ke faqeer ko hai jahan ki parwa kya',
        misra2Ro: 'Jahan khaak bhi un ke qadmon ki hai ikseer-e-aazam-e-kibriya',
        meaningEn: 'What cares a beggar at the court of Mustafa for the fleeting vanities of the earth? Where the very dust beneath their feet is the supreme elixir of divine dignity.',
      },
      {
        id: 7,
        misra1Ur: 'میرا دم ہے ان کی پناہ میں، میرا دل ہے ان کی نگاہ میں',
        misra2Ur: 'میں تو پنجتن کا غلام ہوں، میں تو پنجتن کا غلام ہوں',
        misra1Ro: 'Mera dam hai un ki panah mein, mera dil hai un ki nigah mein',
        misra2Ro: 'Main to Panjtan ka ghulam hoon, main to Panjtan ka ghulam hoon',
        meaningEn: 'My every breath resides under their protection, my heart beneath their compassionate gaze; I am ever a devoted servant of the Prophetic house.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: پنجتن پاک یعنی حضور اکرم ﷺ، حضرت علی المرتضیٰؓ، سیدہ فاطمۃ الزہراؓ، امام حسنؓ اور امام حسینؓ کی محبت قرآنِ مجید کی سورۃ الشوریٰ کی آیت ’قُل لَّا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا إِلَّا الْمَوَدَّةَ فِي الْقُرْبَىٰ‘ کے تحت ہر مسلمان کے ایمان کا لازمی حصہ ہے۔ اس کلام میں شاعر نے اسی عقیدت کا برملا اظہار کیا ہے کہ اہلِ بیتِ رسول ﷺ کی محبت اور سیرت پر عمل پیرا ہو کر انسان ظلم اور خود غرضی کے خلاف ڈٹ جانے کا حوصلہ پاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے بچوں کے دلوں میں اصحاب و اہل بیت کی محبت اور ایثار کا جذبہ پیدا کریں۔',
      ro: 'Markazi Khayal o Tashreeh: Panjtan Paak aur Ahl-e-Bait ki mohabbat Quran o Sunnat se sabit shuda hai. Is kalam mein unhi paakeeza hastiyon se wafadari aur sachay kirdar ka izhar kiya gaya hai.',
      en: 'Spiritual Theme & Explanation: Anchored in the Quranic injunction to revere the Prophet’s noble household, this devotion celebrates the spiritual lineage of the Panjtan. Their lives model courageous resistance against injustice, steadfast faith, and immense generosity.',
    },
    farhang: [
      { word: 'پنجتن پاک', meaningUr: 'پانچ مبارک ہستیاں (نبی ﷺ، علیؓ، فاطمہؓ، حسنؓ، حسینؓ)', meaningRo: 'Paanch paak hastiyan', meaningEn: 'The Five Holy Persons of the Prophetic Household' },
      { word: 'اکسیرِ اعظم', meaningUr: 'وہ دوا جو ہر روگ دور کر دے', meaningRo: 'Har bimari ka ilaaj', meaningEn: 'The supreme restorative elixir' },
      { word: 'طُفیل', meaningUr: 'وسیلہ، صدقہ، برکت', meaningRo: 'Waseela ya barkat', meaningEn: 'Through the virtue and blessing of' },
    ],
    seoKeywords: [
      'Main To Panjtan Ka Ghulam Hoon lyrics',
      'میں تو پنجتن کا غلام ہوں مکمل کلام',
      'Panjtan Pak Manqabat lyrics Urdu',
      'Ahle Bait Naat lyrics',
    ],
  },
  {
    id: '10',
    slug: 'ilahi-teri-chokhat-par-bhikari-ban-ke-aaya-hoon',
    title: {
      ur: 'الٰہی تیری چوکھٹ پر بھکاری بن کے آیا ہوں (مناجات و حمد)',
      ro: 'Ilahi Teri Chokhat Par Bhikari Ban Ke Aaya Hoon',
      en: 'Ilahi Teri Chokhat Par: A Penitent Beggar at the Divine Threshold',
    },
    poet: {
      ur: 'کلامِ صلحاء (توبہ و مناجات)',
      ro: 'Classical Devotional Munajat',
      en: 'Classical Devotional Munajat',
    },
    sourceBook: {
      ur: 'سفینۂ توبہ و مناجات',
      ro: 'Safeena-e-Tauba',
      en: 'Vessel of Penitence and Supplication',
    },
    category: 'Hamd',
    ashaar: [
      {
        id: 1,
        misra1Ur: 'الٰہی تیری چوکھٹ پر بھکاری بن کے آیا ہوں',
        misra2Ur: 'سراپا معصیت ہوں میں، ندامت ساتھ لایا ہوں',
        misra1Ro: 'Ilahi teri chokhat par bhikari ban ke aaya hoon',
        misra2Ro: 'Sarapa ma’siyat hoon main, nidamat saath laya hoon',
        meaningEn: 'O my Lord! I have arrived at Your divine threshold as a humble beggar; Wholly burdened with shortcomings, bearing only deep repentance.',
      },
      {
        id: 2,
        misra1Ur: 'نہ زادِ راہ ہے کوئی، نہ اعمالِ حسیں کوئی',
        misra2Ur: 'فقط تیری عنایت پر بھروسا کر کے آیا ہوں',
        misra1Ro: 'Na zaad-e-raah hai koi, na aamaal-e-haseen koi',
        misra2Ro: 'Faqat teri inayat par bharosa kar ke aaya hoon',
        meaningEn: 'I possess no provisions for the journey, nor righteous deeds to present; Placing all my trust solely in Your unceasing benevolence.',
      },
      {
        id: 3,
        misra1Ur: 'گناہوں نے مرا دامن سیاہی سے بھرا ایسا',
        misra2Ur: 'تیری رحمت کے دریا میں دھلانے دل کو لایا ہوں',
        misra1Ro: 'Gunahon ne mera daaman siyahi se bhara aisa',
        misra2Ro: 'Teri rehmat ke darya mein dhulanay dil ko laya hoon',
        meaningEn: 'My sins have darkened my mantle so deeply; I have brought my trembling heart to wash in the boundless ocean of Your forgiveness.',
      },
      {
        id: 4,
        misra1Ur: 'تُو ہی رحمن و غفار ہے، تُو ہی ستار و غفار',
        misra2Ur: 'مٹا دے ہر خطاؤں کو، میں تیرا بن کے آیا ہوں',
        misra1Ro: 'Tu hi Rahman o Ghaffar hai, tu hi Sattar o Ghaffar',
        misra2Ro: 'Mita de har khataon ko, main tera ban ke aaya hoon',
        meaningEn: 'You alone are the Most Gracious, the Veiler of faults, the Ever-Forgiving; Wipe away all my transgressions, for I return wholly to You.',
      },
      {
        id: 5,
        misra1Ur: 'بحقِ سیدِ کونین ﷺ، شفیعِ روزِ محشر کے',
        misra2Ur: 'الٰہی دور کر دے غم، سہارا مانگنے آیا ہوں',
        misra1Ro: 'Bi-haqq-e-sayyid-e-kawnayn, shafee’-e-roz-e-mehshar ke',
        misra2Ro: 'Ilahi door kar de gham, sahara mangnay aaya hoon',
        meaningEn: 'For the sake of the Master of both worlds, the intercessor on the Day of Reckoning; O Lord, dispel my sorrows, for I seek Your divine support.',
      },
      {
        id: 6,
        misra1Ur: 'اگر تُو نے جھٹک ڈالا تو جاؤں گا کہاں مولا',
        misra2Ur: 'تیرے ہی در پہ مرنے کی تمنا لے کے آیا ہوں',
        misra1Ro: 'Agar tu ne jhatak daala to jaon ga kahan maula',
        misra2Ro: 'Tere hi dar pe marnay ki tamanna le ke aaya hoon',
        meaningEn: 'If You turn me away, whither can I turn, O my Master? I come harboring only the longing to die at Your sacred door.',
      },
      {
        id: 7,
        misra1Ur: 'الٰہی مان لے میری یہ توبہ کی گھڑی اب تو',
        misra2Ur: 'تیرے احسان کے آگے میں سر خم کر کے آیا ہوں',
        misra1Ro: 'Ilahi maan le meri yeh tauba ki ghari ab to',
        misra2Ro: 'Tere ehsan ke aagay main sar-kham kar ke aaya hoon',
        meaningEn: 'O my Lord! Accept this hour of sincere repentance; Before Your boundless grace, I bow my head in humble surrender.',
      },
    ],
    tashreeh: {
      ur: 'مرکزی خیال و تشریح: یہ کلام بارگاہِ خداوندی میں عاجزی، ندامت اور سچی توبہ کی وہ مناجات ہے جس نے لاکھوں گناہگار بندوں کے دلوں کو روتے ہوئے خدا کے قریب کیا۔ جنید جمشیدؒ اور دیگر معروف نعت خوانوں کی آواز میں یہ کلام سن کر انسان کو اپنی زندگی کے مقصد، فانی دنیا کی حقیقت اور رب کی وسیع رحمت کا احساس ہوتا ہے۔ اس مناجات کا بنیادی پیغام یہ ہے کہ گناہ کتنا ہی بڑا کیوں نہ ہو، اللہ تعالیٰ کی رحمت اس سے کہیں وسیع تر ہے، بشرطیکہ انسان سچے دل سے توبہ کرے اور دوبارہ گناہ نہ کرنے کا عزم کرے۔',
      ro: 'Markazi Khayal o Tashreeh: Yeh azeem munajat bande ki Allah ke samne aajzi aur tauba ka aaeena hai. Insan ke gunah kitne hi zyada kyun na hon, Allah ki rehmat us se kahin bari hai.',
      en: 'Spiritual Theme & Explanation: A beloved prayer of penitence and surrender, this hymn mirrors the sincere turning of an erring servant back to their Creator. It emphasizes that no matter the gravity of past sins, divine mercy knows no limits for the heart that bows with true humility.',
    },
    farhang: [
      { word: 'سراپا معصیت', meaningUr: 'سر تا پا گناہوں میں ڈوبا ہوا', meaningRo: 'Gunaahon mein ghira hua', meaningEn: 'Wholly covered in shortcomings' },
      { word: 'زادِ راہ', meaningUr: 'سفر کا خرچ اور سامان', meaningRo: 'Safar ka samaan', meaningEn: 'Provisions for the ultimate journey' },
      { word: 'سر خَم', meaningUr: 'جھکا ہوا سر (عاجزی و انکساری)', meaningRo: 'Jhuka hua sar', meaningEn: 'A bowed head in reverence' },
    ],
    seoKeywords: [
      'Ilahi Teri Chokhat Par Bhikari Ban Ke Aaya Hoon lyrics',
      'الٰہی تیری چوکھٹ پر بھکاری بن کے آیا ہوں مکمل',
      'Junaid Jamshed Munajat lyrics',
      'Tauba Munajat Hamd lyrics Urdu',
    ],
  },
];

export function getNaatBySlug(slug: string): NaatItem | undefined {
  return naatsList.find((item) => item.slug === slug);
}

export function getNaatsByCategory(category: NaatItem['category']): NaatItem[] {
  return naatsList.filter((item) => item.category === category);
}
