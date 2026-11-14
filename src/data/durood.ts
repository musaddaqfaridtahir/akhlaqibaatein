import { Language } from './types';

export type DuroodCategory = 'Rozana' | 'Mushkilat' | 'Rizq' | 'Sehat' | 'Hizb' | 'Wird' | 'Qasida' | 'Mawlid';

export interface LocalizedString {
  ur: string;
  ro: string;
  en: string;
}

export interface DuroodFaq {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface DuroodItem {
  id: string;
  slug: string;
  title: LocalizedString;
  arabicText: string;
  urduTranslation: string;
  romanUrdu: string;
  englishTranslation: string;
  fazilat: LocalizedString;
  category: DuroodCategory;
  reference: LocalizedString;
  recommendedCount: number;
  seoKeywords: string[];
  faqs: DuroodFaq[];
  pdfFilename?: string;
}

export const DUROOD_CATEGORIES: {
  id: DuroodCategory | 'All';
  label: LocalizedString;
  desc: LocalizedString;
}[] = [
  {
    id: 'All',
    label: {
      ur: 'تمام درود و وظائف',
      ro: 'Tamam Durood o Wazaif',
      en: 'All Durood & Supplications',
    },
    desc: {
      ur: 'مکمل منتخب ذخیرہ',
      ro: 'Mukammal muntakhab majmooa',
      en: 'Complete authenticated collection',
    },
  },
  {
    id: 'Rozana',
    label: {
      ur: 'روزانہ کے معمولات',
      ro: 'Rozana Ke Mamoolat',
      en: 'Daily Recitations',
    },
    desc: {
      ur: 'صبح، شام اور بعد نماز کے معمولات',
      ro: 'Subah, shaam aur namaz ke baad ke azkar',
      en: 'Morning, evening, and post-prayer prayers',
    },
  },
  {
    id: 'Mushkilat',
    label: {
      ur: 'مشکلات سے نجات',
      ro: 'Mushkilat Se Nijat',
      en: 'Relief from Distress',
    },
    desc: {
      ur: 'پریشانیوں، ناگہانی آفات اور حاجات کے لیے',
      ro: 'Preshaniyon, aafat aur hajat ke liye',
      en: 'For trials, lawful needs, and ease in hardship',
    },
  },
  {
    id: 'Rizq',
    label: {
      ur: 'وسعتِ رزق و برکت',
      ro: 'Wusat-e-Rizq o Barkat',
      en: 'Sustenance & Prosperity',
    },
    desc: {
      ur: 'حلال کمائی، کشادگی اور قرض سے نجات',
      ro: 'Halal kamai, barkat aur qarz se nijat',
      en: 'Halal provision, barakah, and relief from debt',
    },
  },
  {
    id: 'Sehat',
    label: {
      ur: 'صحت، شفاء و عافیت',
      ro: 'Sehat, Shifa o Aafiyat',
      en: 'Health & Spiritual Healing',
    },
    desc: {
      ur: 'جسمانی اور روحانی امراض سے شفاء',
      ro: 'Jismani aur roohani amraaz se shifa',
      en: 'Spiritual healing and physical well-being',
    },
  },
  {
    id: 'Hizb',
    label: {
      ur: 'احزاب و حِفاظت',
      ro: 'Ahzab o Hifazat',
      en: 'Protective Ahzab',
    },
    desc: {
      ur: 'حزب البحر، حزب النصر اور ماثور دعائیں',
      ro: 'Hizb al-Bahr, Hizb al-Nasr aur hifazat ke azkar',
      en: 'Spiritual shield and divine sanctuary',
    },
  },
  {
    id: 'Wird',
    label: {
      ur: 'اوراد و رواتب',
      ro: 'Awrad o Rawatib',
      en: 'Daily Litanies & Awrad',
    },
    desc: {
      ur: 'الورد اللطیف اور راتب الحداد شریف',
      ro: 'Al-Wird al-Latif aur Ratib al-Haddad',
      en: 'Morning and evening established litanies',
    },
  },
  {
    id: 'Qasida',
    label: {
      ur: 'قصائد و مدائح',
      ro: 'Qasaid o Madaih',
      en: 'Prophetic Odes',
    },
    desc: {
      ur: 'قصیدہ بردہ، قصیدہ مضریہ اور نعتیہ قصائد',
      ro: 'Qasida Burda aur qasaid-e-salam',
      en: 'Devotional classical odes and poetry',
    },
  },
  {
    id: 'Mawlid',
    label: {
      ur: 'مولود شریف',
      ro: 'Mawlid Sharif',
      en: 'Mawlid Traditions',
    },
    desc: {
      ur: 'مولد البرزنجی، الدیبعی اور کتبِ میلاد',
      ro: 'Mawlid al-Barzanji aur zikr-e-wiladat',
      en: 'Narratives of the blessed Prophetic birth',
    },
  },
];

export const duroodList: DuroodItem[] = [
  {
    id: '1',
    slug: 'durood-e-ibrahimi',
    title: {
      ur: 'درودِ ابراہیمی (نماز والا افضل ترین درود)',
      ro: 'Durood-e-Ibrahimi (Namaz Ka Afzal Durood)',
      en: 'Durood-e-Ibrahimi (The Prophetic Salawat of Prayer)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ وَّعَلٰى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰى إِبْرَاهِيْمَ وَعَلٰى آلِ إِبْرَاهِيْمَ إِنَّكَ حَمِيْدٌ مَّجِيْدٌ ۝ اَللّٰهُمَّ بَارِكْ عَلٰى مُحَمَّدٍ وَّعَلٰى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰى إِبْرَاهِيْمَ وَعَلٰى آلِ إِبْرَاهِيْمَ إِنَّكَ حَمِيْدٌ مَّجِيْدٌ',
    urduTranslation:
      'اے اللہ! حضرت محمد ﷺ پر اور حضرت محمد ﷺ کی آل پر رحمت نازل فرما، جس طرح تو نے حضرت ابراہیمؑ پر اور حضرت ابراہیمؑ کی آل پر رحمت نازل فرمائی، بے شک تو بے حد تعریف والا اور بڑی بزرگی والا ہے۔ اے اللہ! حضرت محمد ﷺ پر اور حضرت محمد ﷺ کی آل پر برکت نازل فرما، جس طرح تو نے حضرت ابراہیمؑ پر اور حضرت ابراہیمؑ کی آل پر برکت نازل فرمائی، بے شک تو بے حد تعریف والا اور بڑی بزرگی والا ہے۔',
    romanUrdu:
      'Aye Allah! Hazrat Muhammad ﷺ par aur unki aal par rehmat nazil farma, jis tarah Tune Hazrat Ibrahimؑ aur unki aal par rehmat nazil farmai, beshak Tu tareef ke laiq aur bari buzurgi wala hai. Aye Allah! Hazrat Muhammad ﷺ par aur unki aal par barkat nazil farma, jis tarah Tune Hazrat Ibrahimؑ aur unki aal par barkat nazil farmai, beshak Tu tareef ke laiq aur azmat wala hai.',
    englishTranslation:
      'O Allah! Send Your mercy upon Muhammad ﷺ and upon the family of Muhammad, just as You sent Your mercy upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Full of Glory. O Allah! Send Your blessings upon Muhammad ﷺ and upon the family of Muhammad, just as You sent Your blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Full of Glory.',
    fazilat: {
      ur: 'درودِ ابراہیمی تمام صلوات میں سب سے افضل، برتر اور متفقہ طور پر ثابت شدہ درودِ پاک ہے۔ جب صحابہ کرام رضوان اللہ علیہم اجمعین نے رسول اللہ ﷺ سے دریافت کیا کہ "ہم آپ پر کس طرح درود بھیجیں؟" تو آپ ﷺ نے خود ان مبارک کلمات کی تعلیم فرمائی۔ صحیح بخاری اور صحیح مسلم کی متفق علیہ روایات کے مطابق، اس درود کو فرض نمازوں کے قعدہ اخیرہ میں تشہد کے بعد پڑھنا لازمی سنتِ مؤکدہ ہے۔ جو مسلمان اس درود کو روزانہ کثرت سے پڑھتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے، اس کے دس صغیرہ گناہ مٹاتا ہے اور اس کے دس درجات بلند فرماتا ہے۔ علاوہ ازیں، بروزِ قیامت حوضِ کوثر پر شفاعتِ مصطفیٰ ﷺ کا سب سے بڑا ذریعہ یہی درودِ پاک ہے۔ صوفیاء اور ائمہ حدیث نے لکھا ہے کہ قلبی سکون، فکری پریشانیوں کے خاتمے اور دعاؤں کی فوری قبولیت کے لیے درودِ ابراہیمی روزانہ بعد نمازِ فجر یا عشاء کم از کم 100 مرتبہ پڑھنا اکسیرِ اعظم ہے۔',
      ro: 'Durood-e-Ibrahimi tamam salawat mein sab se afzal aur mutafaqqah tor par Sahih Ahadith se sabit shuda durood hai. Sahaba Karam ne jab Rasoolullah ﷺ se pucha ke hum aap par kaise durood bhejein, to Aap ﷺ ne khud ye mubarak alfaaz sikhaye. Sahih Bukhari aur Sahih Muslim ke mutabiq har farz namaz ke aakhri qaiday mein ise parhna sunnat-e-muakkadah hai. Rozana iska wird karne wale par Allah ki 10 rehmatein nazil hoti hain, 10 gunah maaf hote hain aur darjaat buland hote hain.',
      en: 'Durood-e-Ibrahimi is the most superior and authentic of all invocations of blessings upon the Holy Prophet ﷺ. Taught directly by the Prophet ﷺ to his noble Companions, this prayer is recited in the final sitting of every formal Islamic prayer (Salah). According to rigorously authenticated traditions in Sahih al-Bukhari and Sahih Muslim, whoever recites it sincerely receives ten divine mercies from Allah, has ten sins expiated, and is elevated ten spiritual degrees.',
    },
    category: 'Rozana',
    reference: {
      ur: 'صحیح البخاری (حدیث 3370)، صحیح مسلم (حدیث 406)',
      ro: 'Sahih al-Bukhari (Hadith 3370), Sahih Muslim (Hadith 406)',
      en: 'Sahih al-Bukhari (Hadith 3370), Sahih Muslim (Hadith 406)',
    },
    recommendedCount: 100,
    pdfFilename: 'DUROOD-E-IBRAHIMI.pdf',
    seoKeywords: [
      'Durood e Ibrahimi with Urdu translation',
      'درود ابراہیمی اردو ترجمہ',
      'Durood e Ibrahimi English Roman',
      'Namaz ka durood sharif',
      'Sahih Bukhari Durood',
    ],
    faqs: [
      {
        question: {
          ur: 'درودِ ابراہیمی کی نماز میں کیا حیثیت ہے؟',
          ro: 'Namaz mein Durood-e-Ibrahimi ki kya hasiyat hai?',
          en: 'What is the significance of Durood-e-Ibrahimi in Salah?',
        },
        answer: {
          ur: 'درودِ ابراہیمی نماز کے آخری قعدے میں تشہد (التحیات) کے بعد پڑھنا مسنون اور احادیثِ صحیحہ کے مطابق نماز کا لازمی حصہ ہے۔',
          ro: 'Namaz ke aakhri qaiday mein Tashahhud ke baad Durood-e-Ibrahimi parhna sunnat-e-muakkadah aur namaz ka lazmi hissa hai.',
          en: 'Reciting Durood-e-Ibrahimi during the final sitting after the Tashahhud is an established Sunnah and an integral part of formal Islamic prayer.',
        },
      },
      {
        question: {
          ur: 'روزانہ درودِ ابراہیمی کتنی مرتبہ پڑھنا مستحب ہے؟',
          ro: 'Rozana kitni martaba parhna mustahab hai?',
          en: 'How many times is it recommended to recite daily?',
        },
        answer: {
          ur: 'روزانہ صبح و شام 11، 41 یا 100 مرتبہ پڑھنا نہایت بابرکت ہے۔ جمعہ کے مبارک دن اس کی کثرت کرنا خصوصاً باعثِ مغفرت ہے۔',
          ro: 'Rozana subah aur shaam 11, 41 ya 100 martaba parhna intehai ba-barkat hai. Juma ke din kasrat se parhna azeem sawab rakhta hai.',
          en: 'Reciting it 11, 41, or 100 times daily in the morning or evening is deeply blessed, especially on Fridays when abundant recitation is strongly encouraged.',
        },
      },
    ],
  },
  {
    id: '2',
    slug: 'salat-al-tanjina',
    title: {
      ur: 'درودِ تنجینا (صلاۃ التنجینا — مشکلات سے نجات)',
      ro: 'Durood-e-Tanjeena (Salat al-Tanjina for Relief)',
      en: 'Salat al-Tanjina (Durood Tanjeena for Deliverance)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنَجِّيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ وَالْآفَاتِ، وَتَقْضِيْ لَنَا بِهَا جَمِيْعَ الْحَاجَاتِ، وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ، وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ، وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ مِنْ جَمِيْعِ الْخَيْرَاتِ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ',
    urduTranslation:
      'اے اللہ! ہمارے آقا و سردار حضرت محمد ﷺ پر ایسی رحمت نازل فرما جس کے طفیل تو ہمیں تمام خوفناک حالات اور آفتوں سے نجات بخشے، اور اس کے ذریعے ہماری تمام جائز حاجات پوری فرما دے، اور اس کے سبب ہمیں تمام گناہوں اور برائیوں سے پاک و صاف فرما دے، اور اس کے ذریعے ہمیں اپنی بارگاہ میں بلند ترین درجات عطا فرما، اور اس کے وسیلے سے ہمیں زندگی میں اور مرنے کے بعد تمام بھلائیوں کی آخری انتہا تک پہنچا دے۔',
    romanUrdu:
      'Aye Allah! Hamare sardar Hazrat Muhammad ﷺ par aisi rehmat nazil farma jis ke tufail Tu hamein tamam khofnak halat aur aafaton se nijat bakhshe, aur is ke zariye hamari tamam hajat poori farma, aur hamein tamam buraiyon se paak farma, aur apne paas aala darjaat ata farma, aur zindagi mein aur maut ke baad tamam bhalaiyon ki inteha tak pohncha de.',
    englishTranslation:
      'O Allah! Bestow Your blessings upon our Master Muhammad ﷺ, blessings through which You deliver us from all perils and calamities, fulfill all our lawful needs, purify us from all evil deeds, elevate us to the highest ranks in Your presence, and lead us to the utmost limit of all goodness in this life and after death.',
    fazilat: {
      ur: 'درودِ تنجینا اسلامی تاریخ میں اکابر صلحاء، علماء اور ائمہ تصوف کا مجرب ترین درود مانا جاتا ہے۔ اس درود کے تاریخی پس منظر میں بیان کیا جاتا ہے کہ جب ایک مسلمان قافلہ سمندری طوفان میں پھنس گیا اور کشتی کے غرق ہونے کا شدید خطرہ تھا، تو رسول اللہ ﷺ نے خواب میں اپنے امتی کو اس درود کو کثرت سے پڑھنے کی تلقین فرمائی۔ جونہی اہل قافلہ نے یہ درود پڑھنا شروع کیا، سمندری طوفان تھم گیا اور تمام مسافر بحفاظت کنارے لگ گئے۔ اس درود میں پانچ جامع دعائیں یکجا ہیں: تمام مصائب اور خوفناک حالات سے حفاظت، جائز حاجات کی بلاتاخیر تکمیل، گناہوں سے باطنی تطہیر، اللہ کے ہاں درجات کی بلندی، اور دنیا و آخرت کی ہر خیر و برکت کا حصول۔ بیماری، مالی تنگی یا کسی بھی ناگہانی آفت کے وقت 41 یا 100 مرتبہ اس کا باوضو ورد کرنا آزمودہ ہے۔',
      ro: 'Salat al-Tanjina aafat, mushkilat aur jaiz hajat ke hal ke liye salaf-o-saliheen ka azeem tareen wird hai. Riwayat ke mutabiq samandari toofan mein phanse logon ne jab ise kasrat se parha to Allah ne toofan ko thaam diya. Is durood mein panj-gana duayein shamil hain jo aafat se nijat aur dunya o aakhirat ki bhalai faraham karti hain.',
      en: 'Salat al-Tanjina (The Prayer of Deliverance) is celebrated across Islamic history as a potent supplication during trials, acute anxiety, and illness. Scholars recount its origin during a perilous sea voyage where travelers facing imminent shipwreck were granted deliverance after reciting this prayer. It gathers five comprehensive petitions: safety from trials, fulfillment of legitimate aspirations, spiritual purification, elevation in divine ranks, and attainment of ultimate goodness in both worlds.',
    },
    category: 'Mushkilat',
    reference: {
      ur: 'دلائل الخیرات شریف، فوائد الصلوات للمشائخ',
      ro: 'Dalail al-Khayrat, Fawaid al-Salawat',
      en: 'Dala’il al-Khayrat, Classical Compilations of Sages',
    },
    recommendedCount: 41,
    pdfFilename: 'Durood-e-Tanjeena_akhlaqibaatein.pdf',
    seoKeywords: [
      'Durood e Tanjeena with Urdu translation',
      'Salat al Tanjina Arabic Urdu English',
      'درود تنجینا اردو ترجمہ اور فضیلت',
      'Durood for severe difficulties',
      'Durood Tanjeena Wazifa',
    ],
    faqs: [
      {
        question: {
          ur: 'درودِ تنجینا کس مقصد کے لیے پڑھا جاتا ہے؟',
          ro: 'Durood-e-Tanjeena kis maqsad ke liye parha jata hai?',
          en: 'For what purpose is Salat al-Tanjina recited?',
        },
        answer: {
          ur: 'بزرگانِ دین کے تجربات کے مطابق یہ درود ہر قسم کے خوف، ناگہانی حادثات، بیماری، گھریلو پریشانی اور قانونی یا مالی رکاوٹ کو دور کرنے کے لیے توکل کے ساتھ پڑھا جاتا ہے۔',
          ro: 'Buzurgan-e-deen ke mutabiq yeh har qism ki preshani, aafat, bimari aur ruki hui jaiz hajat ke liye parha jata hai.',
          en: 'Sages have historically prescribed it for overcoming profound distress, resolving difficult dilemmas, healing ailments, and seeking divine intervention in critical matters.',
        },
      },
      {
        question: {
          ur: 'اس کا معمول کتنی مرتبہ ہونا چاہیے؟',
          ro: 'Iska mamool kitni martaba hona chahiye?',
          en: 'How many times should one recite it?',
        },
        answer: {
          ur: 'کسی خاص حاجت یا پریشانی کے وقت 41 یا 100 مرتبہ بعد نمازِ عشاء پڑھنا نہایت مؤثر معمول ہے۔ روزانہ 11 مرتبہ حفاظت کے لیے پڑھا جا سکتا ہے۔',
          ro: 'Khas hajat ke waqt 41 ya 100 martaba parhein, aur rozana hifazat ke liye 11 bar parhna behtareen hai.',
          en: 'Reciting it 41 or 100 times after Isha prayer is common during severe trials, while reciting 11 times daily serves as a shield of spiritual protection.',
        },
      },
    ],
  },
  {
    id: '3',
    slug: 'salat-al-nariya',
    title: {
      ur: 'صلاۃ الناریہ (درودِ تفریجیہ — غموں اور رکاوٹوں کا حل)',
      ro: 'Salat al-Nariya (Salat al-Tafrijiyyah for Hardships)',
      en: 'Salat al-Nariya (The Prayer of Relief and Light)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ صَلَاةً كَامِلَةً وَّسَلِّمْ سَلَامًا تَامًّا عَلٰى سَيِّدِنَا مُحَمَّدِ ࣙالَّذِيْ تَنْحَلُّ بِهِ الْعُقَدُ، وَتَنْفَرِجُ بِهِ الْكُرَبُ، وَتُقْضٰى بِهِ الْحَوَائِجُ، وَتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِيْمِ، وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيْمِ، وَعَلٰى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ وَّنَفَسٍ بِعَدَدِ كُلِّ مَعْلُوْمٍ لَّكَ',
    urduTranslation:
      'اے اللہ! ہمارے آقا حضرت محمد ﷺ پر کامل رحمت نازل فرما اور کامل سلامتی بھیج، جن کے وسیلے سے الجھنیں اور گرہیں کھل جاتی ہیں، جن کے طفیل رنج و غم دور ہو جاتے ہیں، جن کے ذریعے حاجتیں برآتی ہیں، اور جن کے سبب من پسند مرادیں اور حسنِ خاتمہ نصیب ہوتا ہے، اور جن کے روئے انور کے صدقے بادلوں سے بارش طلب کی جاتی ہے؛ اور ان کی آل اور صحابہ پر بھی ہر لمحہ اور ہر سانس میں اتنی رحمتیں بھیج جتنی تیرے علم میں شمار شدہ اشیاء ہیں۔',
    romanUrdu:
      'Aye Allah! Hamare sardar Hazrat Muhammad ﷺ par kamil rehmat aur salamti nazil farma, jin ke waseele se girhein khul jati hain, gham door hote hain, hajat poori hoti hain, achi muradein aur husn-e-khatima milta hai, aur jin ke noorani chehre ke sadqe badal baraste hain; aur unki aal o ashab par har saans mein rehmat bhej.',
    englishTranslation:
      'O Allah! Bestow complete blessings and perfect peace upon our Master Muhammad ﷺ, by whose virtue knots of difficulty are untied, distress is relieved, needs are fulfilled, aspirations and a righteous ending are achieved, and rain clouds shower through his noble countenance; and upon his family and companions in every instant and breath, in the measure of all things known to You.',
    fazilat: {
      ur: 'صلاۃ الناریہ، جسے اہلِ مغرب و شام صلاۃ التفریجیہ (یعنی کشادگی اور غم دور کرنے والا درود) کہتے ہیں، امتِ مسلمہ کے جید علماء اور اہل اللہ کے ہاں انتہائی محترم اور سریع التاثیر درود ہے۔ اس کو "ناریہ" اس لیے کہا جاتا ہے کہ جس طرح آگ کسی شے کو فوری طور پر اپنی لپیٹ میں لے لیتی ہے، اسی طرح یہ مبارک درود مصیبتوں اور غموں کو جلا کر راکھ کر دیتا ہے۔ اس درود کے ذریعے اللہ تعالیٰ بندے کے پیچیدہ ترین مسائل حل فرما دیتا ہے، رکے ہوئے کاموں کو آسانی فراہم کرتا ہے اور خاتمہ بالایمان کی بشارت دیتا ہے۔ امام قرطبیؒ اور علامہ نبہانیؒ نے ذکر فرمایا ہے کہ جو شخص کسی بظاہر ناممکن کام یا شدید اضطراب کا شکار ہو، وہ خلوصِ نیت کے ساتھ اس درود کو اپنا وظیفہ بنائے، اللہ تعالیٰ اسے غیب سے راستہ عطا فرماتا ہے۔',
      ro: 'Salat al-Nariya jise Salat al-Tafrijiyyah bhi kaha jata hai, ghamon aur mushkil tareen rukawaton ko door karne ke liye mashhoor hai. Iska zikr Imam Qurtubiؒ aur deegar ahl-e-ilm ne kiya hai. Is durood ke zariye Allah pareshaniyon ko jala kar raakh kar deta hai aur roohani sukoon o aasaish ata farmata hai.',
      en: 'Salat al-Nariya (also known as Salat al-Tafrijiyyah, the Prayer of Relief) is widely recognized throughout Islamic scholarship for dispersing profound gloom, opening closed doors, and lifting insurmountable burdens. Imam al-Qurtubi and other traditional masters noted that reciting this Salawat with unwavering sincerity brings immediate comfort, clarifies perplexed affairs, and invokes divine assistance.',
    },
    category: 'Mushkilat',
    reference: {
      ur: 'افضل الصلوات علی سید السادات للعلامہ النبہانیؒ',
      ro: 'Afzal al-Salawat ala Sayyid al-Sadat by Allama al-Nabhani',
      en: 'Afzal al-Salawat ala Sayyid al-Sadat by Allama al-Nabhani',
    },
    recommendedCount: 11,
    pdfFilename: 'durood-nariya.pdf',
    seoKeywords: [
      'Salat al Nariya Arabic Urdu English',
      'Durood e Tafrijiyyah',
      'صلاۃ الناریہ اردو ترجمہ',
      'Salat al Nariya for urgent relief',
      'Durood for opening closed doors',
    ],
    faqs: [
      {
        question: {
          ur: 'اس درود کو صلاۃ الناریہ کیوں کہا جاتا ہے؟',
          ro: 'Is durood ko Salat al-Nariya kyun kehte hain?',
          en: 'Why is it named Salat al-Nariya?',
        },
        answer: {
          ur: 'علماء نے اس کا نام سرعتِ تاثیر اور مصیبتوں کے جلد ختم ہونے کی نسبت سے رکھا ہے، تاکہ بندے کو اللہ کی رحمت اور مدد پر یقین حاصل ہو۔',
          ro: 'Ulama ne iski fori taseer aur mushkilat ke jald khatam hone ki nisbat se ise Nariya (tez taseer) kaha hai.',
          en: 'Scholars gave it this metaphoric name due to its prompt spiritual efficacy in dispelling sorrow and bringing swift solace through divine mercy.',
        },
      },
    ],
  },
  {
    id: '4',
    slug: 'durood-e-khizri',
    title: {
      ur: 'درودِ خضری (مختصر، میٹھا اور روزانہ کا ورد)',
      ro: 'Durood-e-Khizri (Mukhtasar aur Dil-Nisheen Wird)',
      en: 'Durood-e-Khizri (The Concise Daily Salawat)',
    },
    arabicText: 'صَلَّى اللّٰهُ عَلٰى حَبِيْبِهٖ مُحَمَّدٍ وَّآلِهٖ وَسَلَّمَ',
    urduTranslation:
      'اللہ تعالیٰ اپنے حبیب حضرت محمد ﷺ پر اور ان کی آل پر رحمتیں اور سلامتی نازل فرمائے۔',
    romanUrdu:
      'Allah Ta’ala apne habeeb Hazrat Muhammad ﷺ par aur unki aal par rehmatein aur salamti nazil farmaye.',
    englishTranslation:
      'May Allah send abundant blessings and peace upon His Beloved Muhammad ﷺ and upon his noble family.',
    fazilat: {
      ur: 'درودِ خضری انتہائی مختصر، پرتاثیر اور روزانہ اٹھتے بیٹھتے کثرت سے پڑھا جانے والا درودِ پاک ہے۔ صوفیاء کرام اور اولیاء عظام نے اسے اپنے روزمرہ کے اوراد کا تاج قرار دیا ہے۔ اس کی سب سے بڑی خوبی یہ ہے کہ چند الفاظ پر مشتمل ہونے کے باعث ہر مسلمان—خواہ وہ چل رہا ہو، سفر میں ہو یا کام کاج میں مصروف ہو—بغیر کسی دقت کے سینکڑوں مرتبہ پڑھ سکتا ہے۔ اس درود کی مستقل تکرار سے دل سے غفلت اور دنیاوی کدورتیں دور ہوتی ہیں، باطن میں نور پیدا ہوتا ہے، اور نبی مکرم ﷺ سے والہانہ محبت اور قلبی تعلق استوار ہوتا ہے۔ مشائخ فرماتے ہیں کہ جو شخص روزانہ کم از کم 1000 یا 500 مرتبہ اس درود کا ورد کرتا ہے، اللہ تعالیٰ اس کے رزق میں برکت اور اس کے باطن کو ذکرِ الٰہی سے معطر فرما دیتا ہے۔',
      ro: 'Durood-e-Khizri nihayat mukhtasar aur nihayat sheerin durood hai jise safar, kaam ya farigh auqat mein asani se parha ja sakta hai. Iske rozana wird se dil mein noor paida hota hai aur Rasoolullah ﷺ ki sacchi mohabbat naseeb hoti hai.',
      en: 'Durood-e-Khizri is one of the most beloved and concise prayers upon the Prophet ﷺ. Its beauty lies in its simplicity, making it accessible to recite hundreds of times during daily commutes, work, or leisure. Sustained recitation polishes the heart, dispels spiritual lethargy, and cultivates deep love for the Messenger of Allah ﷺ.',
    },
    category: 'Rozana',
    reference: {
      ur: 'کنوز البرکات و روایات المشائخ',
      ro: 'Kunooz al-Barakat & Salaf Traditions',
      en: 'Kunooz al-Barakat & Sufi Lineages',
    },
    recommendedCount: 1000,
    pdfFilename: 'durood-khizri.pdf',
    seoKeywords: [
      'Durood e Khizri in Arabic and Urdu',
      'درود خضری اردو ترجمہ',
      'Short Durood Sharif for daily dhikr',
      'Durood Khizri 1000 times benefits',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا درودِ خضری کو چلتے پھرتے پڑھا جا سکتا ہے؟',
          ro: 'Kya chalte phirte parh sakte hain?',
          en: 'Can Durood-e-Khizri be recited while walking or working?',
        },
        answer: {
          ur: 'جی ہاں! اس مختصر درود کی خاصیت ہی یہ ہے کہ اسے اٹھتے بیٹھتے، سفر میں، یا کسی بھی کام کے دوران باوضو یا بغیر وضو دل میں اور زبان سے پڑھا جا سکتا ہے۔',
          ro: 'Ji haan, iski khasiyat yahi hai ke ise chalte phirte, safar ya kaam ke doran ba-asani parha ja sakta hai.',
          en: 'Yes, its brief phrasing allows it to be recited continually throughout the day, while commuting, working, or resting.',
        },
      },
    ],
  },
  {
    id: '5',
    slug: 'durood-e-shifa',
    title: {
      ur: 'درودِ شفاء (صلاۃ طب القلوب — جسمانی و روحانی صحت)',
      ro: 'Durood-e-Shifa (Tibb al-Quloob for Healing)',
      en: 'Durood-e-Shifa (The Healing Salawat of Hearts)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوْبِ وَدَوَائِهَا، وَعَافِيَةِ الْأَبْدَانِ وَشِفَائِهَا، وَنُوْرِ الْأَبْصَارِ وَضِيَائِهَا، وَعَلٰى آلِهِ وَصَحْبِهِ وَسَلِّمْ',
    urduTranslation:
      'اے اللہ! ہمارے آقا حضرت محمد ﷺ پر رحمت اور سلامتی نازل فرما جو دلوں کی دوا اور ان کا علاج ہیں، بدن کی تندرستی اور ان کی شفاء ہیں، اور آنکھوں کا نور اور ان کی روشنی ہیں، اور ان کی آل اور اصحاب پر بھی رحمت و سلامتی بھیج۔',
    romanUrdu:
      'Aye Allah! Hamare sardar Hazrat Muhammad ﷺ par rehmat aur salamti bhej jo dilon ka ilaaj aur unki dawa hain, jismon ki tandurusti aur shifa hain, aur aankhon ka noor o roshni hain, aur unki aal o ashab par bhi salamti ho.',
    englishTranslation:
      'O Allah! Bestow Your blessings upon our Master Muhammad ﷺ, the physician of hearts and their cure, the health of bodies and their healing, and the illumination of sights and their radiance; and upon his family and companions, and bestow peace.',
    fazilat: {
      ur: 'درودِ شفاء جسے "صلاۃ طب القلوب" بھی کہا جاتا ہے، بیماری، نقاہت، ذہنی تناؤ، اور قلبی امراض کے علاج کے لیے اہل ایمان کا صدیوں پرانا اور آزمودہ نسخہ ہے۔ اس درود کے مبارک کلمات میں جسم و روح دونوں کی شفا کا راز پوشیدہ ہے۔ پہلی دعا میں دلوں کی بیماریوں یعنی کینہ، حسد، ریاکاری اور غم سے نجات کی التجاء ہے؛ دوسری دعا میں اعضاء اور جسمانی امراض سے صحت و تندرستی کی درخواست ہے؛ اور تیسری دعا میں باطنی و ظاہری بینائی کے نور کا اضافہ طلب کیا گیا ہے۔ جب بھی کوئی شخص یا اس کا عزیز کسی بیماری میں مبتلا ہو، اسے چاہیے کہ پانی کے گلاس پر 11 یا 41 مرتبہ یہ درود پڑھ کر دم کرے اور خود پیئے یا مریض کو پلائے۔ اللہ تعالیٰ اپنے حبیب ﷺ کے صدقے شفا عطا فرماتا ہے۔',
      ro: 'Durood-e-Shifa jismani aur roohani bimariyon ke ilaaj ke liye intehai moassar wird hai. Is mein dilon ki dawa, jism ki sehat aur aankhon ke noor ki duayein shamil hain. Bimari ke doran 41 martaba parh kar dam karna bohot mufeed hai.',
      en: 'Durood-e-Shifa (The Remedy of Hearts) is renowned across Islamic tradition for bringing comfort to the afflicted and healing to bodily and spiritual ailments. The words address three dimensions of human wellness: purification of the heart from spiritual malice, rejuvenation of the body, and enlightenment of perception.',
    },
    category: 'Sehat',
    reference: {
      ur: 'مجموعہ ادعیہ و صلوات الصالحین',
      ro: 'Majmooa Ad’iyah & Salawat al-Saliheen',
      en: 'Traditional Islamic Therapeutics & Supplications',
    },
    recommendedCount: 41,
    pdfFilename: 'salat-al-tibiyya.pdf',
    seoKeywords: [
      'Durood e Shifa Arabic Urdu English',
      'Salat Tibb al Quloob',
      'درود شفاء اردو ترجمہ',
      'Durood for health and illness',
      'Spiritual healing Durood',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا اس درود کو پانی پر دم کر کے پیا جا سکتا ہے؟',
          ro: 'Kya pani par dam kar ke pee sakte hain?',
          en: 'Can this Durood be recited and blown over water for drinking?',
        },
        answer: {
          ur: 'جی ہاں! اکابرین نے فرمایا ہے کہ باوضو حالت میں 11 یا 41 مرتبہ پڑھ کر پانی پر دم کر کے مریض کو پلانا شفائے امراض میں معاون ثابت ہوتا ہے۔',
          ro: 'Ji haan, 11 ya 41 martaba parh kar pani par dam kar ke peena nihayat mufeed aur ba-barkat hai.',
          en: 'Yes, reciting it 11 or 41 times with purity and blowing upon clean water for the sick to drink is a time-tested practice among Muslim scholars.',
        },
      },
    ],
  },
  {
    id: '6',
    slug: 'durood-e-rizq-o-barkat',
    title: {
      ur: 'درودِ رزق و برکت (تنگدستی اور قرض سے نجات)',
      ro: 'Durood-e-Rizq o Barkat (For Provision & Relief from Debt)',
      en: 'Durood for Provision & Barakah (Relief from Debt)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ عَبْدِكَ وَرَسُوْلِكَ، وَصَلِّ عَلَى الْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ، وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ',
    urduTranslation:
      'اے اللہ! اپنے بندے اور اپنے رسول حضرت محمد ﷺ پر رحمت نازل فرما، اور تمام مومن مردوں اور مومن عورتوں پر، اور تمام مسلمان مردوں اور مسلمان عورتوں پر رحمت بھیج۔',
    romanUrdu:
      'Aye Allah! Apne bande aur apne rasool Hazrat Muhammad ﷺ par rehmat nazil farma, aur tamam momin mardon aur aurton par, aur tamam musalman mardon aur aurton par rehmat bhej.',
    englishTranslation:
      'O Allah! Send Your blessings upon Muhammad, Your servant and Your Messenger, and send blessings upon all believing men and believing women, and all Muslim men and Muslim women.',
    fazilat: {
      ur: 'صحیح احادیث میں رزق کی کشادگی اور مال میں خیر و برکت کے لیے یہ درودِ پاک بطورِ خاص منقول ہے۔ امام ابن حبانؒ اور امام بخاریؒ نے الادب المفرد میں حضرت ابوسعید خدریؓ سے روایت درج فرمائی ہے کہ رسول اللہ ﷺ نے ارشاد فرمایا: "جس مسلمان کے پاس صدقہ دینے کے لیے مال نہ ہو، وہ اپنی دعا میں یہ درود پڑھے، پس یہ اس کے حق میں زکوٰۃ (یعنی پاکیزگی اور برکت) کا قائم مقام ہو جائے گا۔" جو شخص معاشی تنگی، بے روزگاری یا قرض کے بوجھ تلے دبا ہو، اسے چاہیے کہ ہر نماز کے بعد اور خاص طور پر بعد نمازِ مغرب یا عشاء اس درود کو 100 مرتبہ اپنا معمول بنائے۔ اس درود کی برکت سے اللہ تعالیٰ حلال اور باوقار رزق کے راستے کھول دیتا ہے اور انسان کو مخلوق کی محتاجی سے بے نیاز فرما دیتا ہے۔',
      ro: 'Al-Adab al-Mufrad aur Sahih Ibn Hibban mein manqool riwayat ke mutabiq, Rasoolullah ﷺ ne farmaya ke jiske paas sadqah dene ko kuch na ho, wo yeh durood parhe, yeh uske liye paakeezgi aur barkat ka zariya banega. Qarz aur maali tangi mein iska wird bohot mufeed hai.',
      en: 'Recorded in Al-Adab al-Mufrad by Imam al-Bukhari and Sahih Ibn Hibban on the authority of Abu Sa’id al-Khudri (RA), the Prophet ﷺ said that whoever lacks wealth to give in charity should recite this Salawat, for it shall be an act of purification (Zakah) and blessing for them. It is widely recommended for those seeking relief from financial stress.',
    },
    category: 'Rizq',
    reference: {
      ur: 'الادب المفرد للإمام البخاري (حدیث 96)، صحیح ابن حبان (حدیث 903)',
      ro: 'Al-Adab al-Mufrad by Bukhari (Hadith 96), Sahih Ibn Hibban (903)',
      en: 'Al-Adab al-Mufrad by Bukhari (Hadith 96), Sahih Ibn Hibban (903)',
    },
    recommendedCount: 100,
    pdfFilename: 'Durood-Sharif-for-Attaining-Virtues-Equal-to-all-Creation.pdf',
    seoKeywords: [
      'Durood for Rizq and Wealth',
      'درود برائے وسعت رزق',
      'Durood e Rizq with Urdu translation',
      'Hadith on Durood for charity and debt',
    ],
    faqs: [
      {
        question: {
          ur: 'کیا اس درود کی فضیلت احادیث سے ثابت ہے؟',
          ro: 'Kya iski fazilat Hadith se sabit hai?',
          en: 'Is the virtue of this Durood recorded in Hadith?',
        },
        answer: {
          ur: 'جی ہاں! امام بخاریؒ نے الادب المفرد اور امام ابن حبانؒ نے اپنی صحیح میں اس حدیث کو درج کیا ہے جس میں مال نہ ہونے کی صورت میں اس درود کو صدقہ کا بدل قرار دیا گیا ہے۔',
          ro: 'Ji haan, Imam Bukhariؒ ne Al-Adab al-Mufrad mein ise ba-sanad riwayat kiya hai.',
          en: 'Yes, Imam al-Bukhari included this narration with authentic transmission in his work Al-Adab al-Mufrad.',
        },
      },
    ],
  },
  {
    id: '7',
    slug: 'durood-e-jumma-khas',
    title: {
      ur: 'درودِ جمعہ (80 سال کے گناہوں کی معافی کا مسنون درود)',
      ro: 'Durood-e-Jumma Khas (80 Saal Ke Gunah Maaf Hone Ka Durood)',
      en: 'Special Friday Durood (The 80-Year Expiation Salawat)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدِ ࣙالنَّبِيِّ الْأُمِّيِّ وَعَلٰى آلِهِ وَسَلِّمْ تَسْلِيْمًا',
    urduTranslation:
      'اے اللہ! ہمارے نبی امی حضرت محمد ﷺ پر اور آپ ﷺ کی آل پر رحمت اور خوب سلامتی نازل فرما۔',
    romanUrdu:
      'Aye Allah! Hamare Nabi-e-Ummi Hazrat Muhammad ﷺ par aur unki aal par rehmatein aur khoob salamti nazil farma.',
    englishTranslation:
      'O Allah! Send Your blessings upon Muhammad, the Unlettered Prophet, and upon his noble family, and bestow complete peace.',
    fazilat: {
      ur: 'جمعہ کے دن عصر کے بعد اس خاص درودِ پاک کی تلاوت احادیث اور کتبِ سلف میں بڑی تاکید کے ساتھ وارد ہوئی ہے۔ حضرت ابوہریرہؓ سے مروی ہے کہ حضور اقدس ﷺ نے ارشاد فرمایا: "جو شخص جمعہ کے دن نمازِ عصر کے بعد اپنی جگہ سے اٹھنے سے پہلے 80 مرتبہ یہ درود پڑھے، اللہ تعالیٰ اس کے 80 سال کے گناہ معاف فرما دیتا ہے اور اس کے لیے 80 سال کی عبادت کا ثواب لکھ دیتا ہے۔" یہ مبارک عمل دنیا بھر کے اہل علم، صلحاء اور بزرگانِ دین کا متوارث معمول رہا ہے۔ ہفتہ وار اس درود کی پابندی دل کو گناہوں کے اثرات سے پاک کرتی ہے، عمر اور وقت میں برکت عطا کرتی ہے اور روزِ محشر شفاعت کا مستحق بناتی ہے۔ ہر مسلمان کو چاہیے کہ جمعہ کے مبارک دن عصر تا مغرب اس تحفہ کو ضائع نہ ہونے دے۔',
      ro: 'Juma ke din Asr ke baad is durood ko 80 bar parhne ki bohot bari fazilat aayi hai. Riwayat ke mutabiq 80 saal ke gunah maaf hote hain aur 80 saal ki ibadat ka azeem sawab likha jata hai.',
      en: 'Scholars of prophetic tradition have consistently highlighted this specific formulation for Friday afternoons. Narrated by Abu Hurairah (RA), the Prophet ﷺ stated that whoever recites this Salawat eighty times after Asr prayer before leaving their seat on Friday shall have eighty years of sins forgiven and receive eighty years of worship written to their account.',
    },
    category: 'Rozana',
    reference: {
      ur: 'سنن دارقطنی، القول البدیع فی الصلاة علی الحبیب الشفیع للسخاویؒ',
      ro: 'Sunan al-Daraqutni, Al-Qawl al-Badi’ by Imam al-Sakhawi',
      en: 'Sunan al-Daraqutni, Al-Qawl al-Badi’ by Imam al-Sakhawi',
    },
    recommendedCount: 80,
    pdfFilename: 'Salat-al-Nabi-al-Ummi-Salawat.com_.pdf',
    seoKeywords: [
      'Friday special Durood',
      'درود جمعہ 80 سال کے گناہ',
      'Durood e Jumma with Urdu translation',
      'Salat al Nabi al Ummi',
    ],
    faqs: [
      {
        question: {
          ur: 'اس درود کو پڑھنے کا سب سے بہترین وقت کون سا ہے؟',
          ro: 'Parhne ka behtareen waqt konsa hai?',
          en: 'What is the most opportune time to recite it?',
        },
        answer: {
          ur: 'جمعہ کے دن نمازِ عصر کے فوراً بعد مصلے سے اٹھے بغیر 80 مرتبہ پڑھنا حدیث میں خصوصی طور پر بیان ہوا ہے۔',
          ro: 'Juma ke din Asr ki namaz ke baad musallay se uthne se pehle 80 bar parhna sab se afzal hai.',
          en: 'Directly after the Friday Asr prayer, before standing from one’s place of worship, reciting it eighty times is the commended practice.',
        },
      },
    ],
  },
  {
    id: '8',
    slug: 'durood-e-ghausia-tajdar',
    title: {
      ur: 'درودِ غوثیہ (روحانی قربت، سکون اور فیضانِ درود)',
      ro: 'Durood-e-Ghausia (Roohani Qurbat aur Faiz)',
      en: 'Durood-e-Ghausia (Salawat for Spiritual Illumination)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ عَلٰى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ مَّعْدِنِ الْجُوْدِ وَالْكَرَمِ، وَآلِهِ وَبَارِكْ وَسَلِّمْ',
    urduTranslation:
      'اے اللہ! ہمارے آقا اور ہمارے سردار حضرت محمد ﷺ پر رحمت بھیج جو سخاوت اور کرم کا سرچشمہ ہیں، اور آپ ﷺ کی آل پر بھی برکت اور سلامتی نازل فرما۔',
    romanUrdu:
      'Aye Allah! Hamare aqa aur maula Hazrat Muhammad ﷺ par rehmat bhej jo jood-o-karam ka sar-chashma hain, aur unki aal par barkat aur salamti nazil farma.',
    englishTranslation:
      'O Allah! Send Your mercy upon our Master and Protector Muhammad ﷺ, the very fountainhead of generosity and benevolence, and upon his family, and grant them blessings and peace.',
    fazilat: {
      ur: 'درودِ غوثیہ اہل تصوف اور بزرگانِ دین کا ایک انتہائی پیارا اور پرنور درود ہے۔ اس درود میں رسول اللہ ﷺ کے اوصافِ حمیدہ میں سے دو نہایت دلکش صفات—"الجود" (سخاوت) اور "الکرم" (بزرگی و بخشش)—کا تذکرہ کر کے اللہ کے حضور التجاء کی گئی ہے۔ جو مسلمان روحانی بے چینی، مایوسی یا دل کی سختی میں مبتلا ہو، اس کے لیے یہ درود اکسیر کی حیثیت رکھتا ہے۔ روزانہ نمازِ فجر کے بعد یا رات کو سوتے وقت 11 یا 41 مرتبہ اس کا ورد کرنے سے انسان کے دل میں عشقِ رسول ﷺ کی شمع روشن ہوتی ہے، اخلاق میں نرمی اور وقار پیدا ہوتا ہے اور انسان کے معاملات میں اللہ کی غیبی رحمت شاملِ حال ہو جاتی ہے۔',
      ro: 'Durood-e-Ghausia dil ki safai, roohani sukoon aur Rasoolullah ﷺ se gehra taalluq qaim karne ke liye parha jata hai. Iske parhne se dil mein noor aur maamlaat mein khair o barkat aati hai.',
      en: 'Durood-e-Ghausia focuses on the Prophet’s ﷺ boundless magnanimity and generosity. Sufi masters historically recommended this invocation for softening hardened hearts, overcoming inner despondency, and developing a tender, reverent relationship with the Messenger of Allah ﷺ.',
    },
    category: 'Rozana',
    reference: {
      ur: 'اورادِ قادریہ و زاد السالکین',
      ro: 'Awrad-e-Qadiriyyah & Zad al-Salikeen',
      en: 'Awrad-e-Qadiriyyah & Classical Devotionals',
    },
    recommendedCount: 41,
    pdfFilename: 'darood-ghousia-pdf.pdf',
    seoKeywords: [
      'Durood e Ghausia in Urdu',
      'درود غوثیہ مع اردو ترجمہ',
      'Durood Ghausia benefits',
      'Spiritual Durood for inner peace',
    ],
    faqs: [
      {
        question: {
          ur: 'اس درود کے مسلسل ورد سے کیا فائدہ حاصل ہوتا ہے؟',
          ro: 'Iske musalsal wird se kya faida hota hai?',
          en: 'What benefits are attained through regular recitation?',
        },
        answer: {
          ur: 'اس کے ورد سے انسان کے اخلاق میں حلم اور شفقت پیدا ہوتی ہے، قلبی وسوسے زائل ہوتے ہیں اور روحانی سکون میسر آتا ہے۔',
          ro: 'Is se dili sukoon, roohani taaqat aur akhlaq mein narmi o shafqat paida hoti hai.',
          en: 'Consistent recitation brings peace of mind, removes whispering anxieties, and instills gentle compassion in one’s daily character.',
        },
      },
    ],
  },
  {
    id: '9',
    slug: 'durood-e-shafi',
    title: {
      ur: 'درودِ امام شافعیؒ (مغفرت اور دائمی یاد کا درود)',
      ro: 'Durood-e-Imam Shafi’i (Durood for Forgiveness)',
      en: 'Salawat of Imam Shafi’i (Invocation of Constant Remembrance)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ كُلَّمَا ذَكَرَهُ الذَّاكِرُوْنَ، وَصَلِّ عَلٰى مُحَمَّدٍ كُلَّمَا غَفَلَ عَنْ ذِكْرِهِ الْغَافِلُوْنَ',
    urduTranslation:
      'اے اللہ! حضرت محمد ﷺ پر رحمت نازل فرما جب بھی ذکر کرنے والے آپ کا ذکر کریں، اور حضرت محمد ﷺ پر رحمت بھیج جب بھی غفلت برتنے والے آپ کے ذکر سے غافل ہوں۔',
    romanUrdu:
      'Aye Allah! Hazrat Muhammad ﷺ par rehmat bhej jab bhi zikr karne wale Aap ka zikr karein, aur rehmat bhej jab bhi ghaflat baratne wale Aap ke zikr se ghafil hon.',
    englishTranslation:
      'O Allah! Bestow Your blessings upon Muhammad whenever those who remember him engage in his remembrance, and bestow Your blessings upon Muhammad whenever the heedless neglect his remembrance.',
    fazilat: {
      ur: 'یہ مبارک درود جلیل القدر فقیہ و امام حضرت امام محمد بن ادریس الشافعیؒ سے منسوب ہے۔ کتبِ تاریخ و تذکرہ میں منقول ہے کہ امام شافعیؒ کے انتقال کے بعد ایک بزرگ نے انہیں خواب میں دیکھا اور پوچھا: "اللہ تعالیٰ نے آپ کے ساتھ کیا معاملہ فرمایا؟" انہوں نے جواب دیا: "اللہ نے میری بخشش فرما دی اور مجھے جنت کے اعلیٰ باغات میں عزت بخشی، اور یہ کرم اس درودِ پاک کی برکت سے ہوا جو میں اپنی کتاب الرسالہ کے آغاز میں لکھا کرتا تھا۔" یہ درود تمام اوقات—خواہ غفلت کے لمحات ہوں یا بیداری کے—کو نبی کریم ﷺ کی یاد سے محیط کر دیتا ہے۔ اس کا ورد دل کی سیاہی کو دھوتا ہے اور انسان کو دائمی ذکر کرنے والوں کی صف میں شامل کر دیتا ہے۔',
      ro: 'Yeh azeem durood Imam Shafi’iؒ se mansoob hai jo unhone apni kitaab Al-Risalah mein darj kiya. Khwab mein ahl-e-ilm ko bataya gaya ke is durood ki barkat se Allah ne unki maghfirat farmai aur aala darjaat ata kiye.',
      en: 'This revered Salawat is attributed to the great jurist and founder of the Shafi’i school of thought, Imam Muhammad ibn Idris al-Shafi’i. In historical accounts recorded by scholars, righteous sages saw the Imam in a dream after his passing and inquired about his standing with Allah; he conveyed that Allah granted him comprehensive forgiveness due to this very prayer which he penned in his masterwork Al-Risalah.',
    },
    category: 'Rozana',
    reference: {
      ur: 'مقدمہ کتاب الرسالہ للإمام الشافعیؒ، صفة الصفوة لابن الجوزیؒ',
      ro: 'Introduction to Kitab al-Risalah by Imam al-Shafi’i',
      en: 'Introduction to Kitab al-Risalah by Imam al-Shafi’i',
    },
    recommendedCount: 100,
    seoKeywords: [
      'Durood Imam Shafi Arabic Urdu',
      'درود امام شافعی اردو ترجمہ',
      'Durood for continuous forgiveness',
      'Salawat of Imam Shafi’i',
    ],
    faqs: [
      {
        question: {
          ur: 'اس درود کے الفاظ کا کیا گہرا مفہوم ہے؟',
          ro: 'Is durood ke alfaaz ka kya gehra mafhoom hai?',
          en: 'What is the profound meaning within its phrasing?',
        },
        answer: {
          ur: 'اس میں اللہ کے تمام بندوں کے ذکر اور غفلت کے تمام اوقات کو احاطہ کیا گیا ہے، جس کا مطلب ہے کہ کوئی لمحہ بھی درود کے بغیر خالی نہ رہے۔',
          ro: 'Is mein dunya ke har lamhe ko zikr se jora gaya hai taa ke koi ghari bhi Rasoolullah ﷺ par durood se khali na rahe.',
          en: 'It encompasses all periods of human remembrance as well as heedlessness, ensuring that every tick of time is populated with devotion.',
        },
      },
    ],
  },
  {
    id: '10',
    slug: 'durood-e-kamalia',
    title: {
      ur: 'درودِ کمالیہ (صلاۃ الکمالیہ — درجات کی بلندی اور وسعت)',
      ro: 'Durood-e-Kamalia (Salat al-Kamaliyyah)',
      en: 'Salat al-Kamaliyyah (The Prayer of Divine Perfection)',
    },
    arabicText:
      'اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَّعَلٰى آلِهٖ، كَمَا لَا نِهَايَةَ لِكَمَالِكَ وَعَدَدَ كَمَالِهِ',
    urduTranslation:
      'اے اللہ! ہمارے آقا حضرت محمد ﷺ پر اور آپ ﷺ کی آل پر ایسی رحمت، سلامتی اور برکت نازل فرما، جس کی کوئی انتہا نہ ہو جس طرح تیرے کمال کی کوئی انتہا نہیں، اور ان کے کمال کے اعداد کے برابر رحمت بھیج۔',
    romanUrdu:
      'Aye Allah! Hamare sardar Hazrat Muhammad ﷺ par aur unki aal par aisi rehmat, salamti aur barkat bhej, jiski koi inteha na ho jaise Tere kamal ki koi inteha nahi, aur unke kamal ke barabar rehmat bhej.',
    englishTranslation:
      'O Allah! Bestow blessings, peace, and grace upon our Master Muhammad and upon his family, infinite as there is no end to Your perfection, and matching the count of his perfection.',
    fazilat: {
      ur: 'درودِ کمالیہ ان پاکیزہ صلوات میں سے ہے جن کے معانی میں وسعت اور بے پایاں ثواب کا ذخیرہ ہے۔ اس درود میں اللہ تبارک و تعالیٰ کے کمال کی لامحدودیت کو سامنے رکھ کر رحمتیں طلب کی گئی ہیں۔ چونکہ اللہ تعالیٰ کے کمال کی کوئی حد اور انتہا نہیں، اس لیے اس درود کے ذریعے مانگی جانے والی رحمتیں بھی غیر محدود اور بے شمار ہو جاتی ہیں۔ بزرگانِ دین نے اس درود کو خصوصاً فکری یکسوئی، وسوسوں کے ازالے، عقل و فہم کی کشادگی اور دینی و دنیاوی کاموں میں برکت کے لیے تجویز کیا ہے۔ جو شخص روزانہ رات کو سونے سے قبل باوضو 11 یا 70 مرتبہ اس کا ورد کرے، اللہ تعالیٰ اس کے علم اور عمل میں خیر و برکت پیدا فرماتا ہے۔',
      ro: 'Durood-e-Kamalia mein Allah ke la-mehdood kamal ke sath Rasoolullah ﷺ par be-shumar rehmatein mangi gayi hain. Waswasay door karne aur ilmi o amali barkat ke liye bohot mufeed hai.',
      en: 'Salat al-Kamaliyyah links the petition of mercy to the infinite and boundless perfection of the Almighty. Because the perfection of Allah knows no ceiling or horizon, reciting this prayer invokes an unceasing stream of divine benevolence and spiritual elevation.',
    },
    category: 'Rozana',
    reference: {
      ur: 'کتب الصلوات و اوراد المشائخ الكرام',
      ro: 'Kutub al-Salawat & Classical Devotionals',
      en: 'Classical Arabic Devotionals of Sages',
    },
    recommendedCount: 70,
    seoKeywords: [
      'Durood Kamalia with Urdu translation',
      'درود کمالیہ اردو ترجمہ',
      'Salat al Kamaliyyah Arabic',
      'Infinite blessings Durood',
    ],
    faqs: [
      {
        question: {
          ur: 'درودِ کمالیہ کو کس وقت پڑھنا زیادہ بابرکت ہے؟',
          ro: 'Kis waqt parhna zyada ba-barkat hai?',
          en: 'When is it best to recite Salat al-Kamaliyyah?',
        },
        answer: {
          ur: 'رات کو سوتے وقت باوضو ہو کر 11 یا 70 مرتبہ پڑھنا ذہنی یکسوئی اور روحانی تازگی کے لیے نہایت مستحسن ہے۔',
          ro: 'Raat ko sotay waqt ba-wuzu 11 ya 70 bar parhna behtareen hai.',
          en: 'Reciting it 11 or 70 times at night prior to sleep in a state of ablution offers profound spiritual tranquility and focus.',
        },
      },
    ],
  },
  {
    id: "11",
    slug: "durood-e-akbar",
    title: {
        ur: "درودِ اکبر شریف",
        ro: "Durood-e-Akbar",
        en: "Durood-e-Akbar (The Grand Salutation)"
    },
    arabicText: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ نَبِيِّ الرَّحْمَةِ، وَشَفِيعِ الأُمَّةِ، وَكَاشِفِ الْغُمَّةِ، وَمُجْلِي الظُّلْمَةِ، وَعَلَى آلِهِ وَأَصْحَابِهِ وَسَلِّمْ تَسْلِيمًا كَثِيرًا دَائِمًا إِلَى يَوْمِ الدِّينِ.",
    urduTranslation: "اے اللہ! درود بھیج ہمارے آقا و مولا حضرت محمد ﷺ پر جو رحمت کے نبی، امت کے شفیع، رنج و غم کو دور فرمانے والے اور تاریکیوں کو چھانٹنے والے ہیں، اور آپ کی آل و اصحاب پر خوب بکثرت اور ہمیشہ قائم رہنے والا سلام نازل فرما قیامت کے دن تک۔",
    romanUrdu: "Allahumma salli ala sayyidina Muhammadin nabiyy-ir-rahmati, wa shafee-il-ummati, wa kaashif-il-ghummati, wa mujli-dh-dhulmati, wa ala aalihi wa as-habihi wa sallim tasleeman kaseeran daa-iman ila yawm-id-deen.",
    englishTranslation: "O Allah! Bestow peace and blessings upon our Master Muhammad ﷺ, the Prophet of Mercy, the Intercessor of the Nation, the Dispeller of sorrow, and the Banisher of darkness; and upon his family and companions, granting them abundant, enduring peace until the Day of Judgment.",
    fazilat: {
        ur: "درودِ اکبر بزرگانِ دین کا نہایت پرتاثیر اور جامع وظیفہ ہے۔ دل کی صفائی، قربِ رسالت مآب ﷺ اور روحانی درجات کی بلندی کے لیے روزانہ پڑھنا اکابرین کا معمول رہا ہے۔",
        ro: "Durood-e-Akbar roohani safai, qurb-e-risalat aur dilon ki bay-qarari door karne ke liye nihayat moasir wird hai.",
        en: "Durood-e-Akbar is a majestic, comprehensive prayer historically recited by spiritual luminaries to attain spiritual elevation, heart purification, and deep connection with the Prophetic presence."
    },
    category: "Rozana",
    reference: {
        ur: "مجموعہ اوراد و وظائفِ کبرا",
        ro: "Majmooa Awrad o Wazaif-e-Kubra",
        en: "Classical Compendiums of Grand Salawat"
    },
    recommendedCount: 11,
    seoKeywords: [
        "Durood Akbar in English",
        "Durood Akbar Roman Urdu",
        "درود اکبر شریف عربی متن و اردو ترجمہ",
        "Durood e Akbar benefits and fazilat"
    ],
    faqs: [
        {
            question: {
                ur: "درودِ اکبر کا یومیہ پڑھنے کا کیا طریقہ ہے؟",
                ro: "Durood-e-Akbar parhne ka rozana tareeqa kya hai?",
                en: "What is the daily recitation guideline for Durood-e-Akbar?"
            },
            answer: {
                ur: "صبح یا بعد نمازِ عشاء باوضو 3 یا 11 مرتبہ پڑھنا نہایت مبارک ہے۔",
                ro: "Subah ya Isha ke baad ba-wuzu 3 ya 11 martaba wird karein.",
                en: "It is recommended to recite it 3 or 11 times in a state of ablution after Fajr or Isha prayers."
            }
        }
    ],
    pdfFilename: "Durood-Akbar-PDF.pdf"
},
  {
    id: "12",
    slug: "durood-e-muqaddas",
    title: {
        ur: "درودِ مقدس شریف",
        ro: "Durood-e-Muqaddas",
        en: "Durood-e-Muqaddas (The Sacred Benediction)"
    },
    arabicText: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَلَاةً تُنَجِّينَا بِهَا مِنْ جَمِيعِ الأَهْوَالِ وَالآفَاتِ، وَتَقْضِي لَنَا بِهَا جَمِيعَ الحَاجَاتِ.",
    urduTranslation: "اے اللہ! رحمت نازل فرما ہمارے سردار اور آقا حضرت محمد ﷺ پر اور ان کی آل پر ایسا درود جس کی برکت سے تو ہمیں تمام خوف اور آفات سے نجات عطا فرما دے اور ہماری تمام حاجات کو پورا فرما دے۔",
    romanUrdu: "Allahumma salli ala sayyidina wa mawlana Muhammadin wa ala aali sayyidina wa mawlana Muhammadin salatan tunajjina biha min jamee-il-ahwali wal-aafat, wa taqdi lana biha jamee-al-hajat.",
    englishTranslation: "O Allah! Send Your divine peace and blessings upon our Leader and Master Muhammad ﷺ, and upon his family, a benediction by which You deliver us from all terrors and calamities, and fulfill for us all righteous needs.",
    fazilat: {
        ur: "درودِ مقدس کا ورد ناگہانی پریشانیوں، مصائب اور دشمن کے شر سے حفاظت کے لیے آزمودہ ہے۔ جمعرات اور جمعہ کی شب اس کا ورد دل کو سکون عطا کرتا ہے۔",
        ro: "Durood-e-Muqaddas preshaniyon aur aafat se hifazat ke liye nihayat afzal wird hai.",
        en: "Durood-e-Muqaddas is renowned for bestowing divine sanctuary from unexpected hardships, anxiety, and adversities."
    },
    category: "Mushkilat",
    reference: {
        ur: "کتبِ دعوات و تسخیرات",
        ro: "Kutub-e-Da’wat",
        en: "Traditional Classical Supplications"
    },
    recommendedCount: 7,
    seoKeywords: [
        "Durood Muqaddas lyrics Urdu English",
        "درود مقدس مکمل متن",
        "Durood e Muqaddas Roman Urdu",
        "Durood Muqaddas ki fazilat"
    ],
    faqs: [
        {
            question: {
                ur: "کیا درودِ مقدس ہر قسم کی حاجت کے لیے پڑھا جا سکتا ہے؟",
                ro: "Kya Durood Muqaddas har hajat ke liye parh saktay hain?",
                en: "Can Durood-e-Muqaddas be recited for lawful personal needs?"
            },
            answer: {
                ur: "جی ہاں، نیک اور جائز حاجات کے حصول اور آفات سے نجات کے لیے 7 یا 41 مرتبہ ورد مجرب ہے۔",
                ro: "Jee haan, 7 ya 41 martaba rozana parhna behad ba-barkat hai.",
                en: "Yes, reciting it 7 or 41 times with sincere intention is recommended for ease in all lawful pursuits."
            }
        }
    ],
    pdfFilename: "Durood-e-Muqaddas.pdf"
},
  {
    id: "13",
    slug: "durood-e-hazari",
    title: {
        ur: "درودِ ہزاری شریف",
        ro: "Durood-e-Hazari",
        en: "Durood-e-Hazari (Salawat al-Alfiyyah)"
    },
    arabicText: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا رَسُولَ اللهِ، الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حَبِيبَ اللهِ، الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا رَحْمَةً لِلْعَالَمِينَ.",
    urduTranslation: "درود اور سلام ہو آپ پر اے اللہ کے رسول! درود اور سلام ہو آپ پر اے اللہ کے محبوب! درود اور سلام ہو آپ پر اے تمام جہانوں کے لیے رحمت بنا کر بھیجے گئے نبی ﷺ!",
    romanUrdu: "As-salatu was-salamu alayka ya Rasool Allah, As-salatu was-salamu alayka ya Habib Allah, As-salatu was-salamu alayka ya Rahmatan lil-Alameen.",
    englishTranslation: "Blessings and peace be upon you, O Messenger of Allah! Blessings and peace be upon you, O Beloved of Allah! Blessings and peace be upon you, O Mercy to all the worlds!",
    fazilat: {
        ur: "درودِ ہزاری حضور نبی کریم ﷺ کی بارگاہِ اقدس میں کثرتِ سلام کا وہ مبارک صیغہ ہے جس کے پڑھنے والے کو ہزار درود پڑھنے کا ثواب حاصل ہوتا ہے۔ بارگاہِ رسالت کی حاضری کا شوق پیدا کرتا ہے۔",
        ro: "Durood-e-Hazari kaseer fazeelat aur bargah-e-risalat mein qurbat hasil karne ka behtareen zariya hai.",
        en: "Durood-e-Hazari holds the virtue of abundant salutations, imparting the spiritual reward of thousands of greetings and nurturing deep devotion in the believer’s heart."
    },
    category: "Rozana",
    reference: {
        ur: "زادِ سعید و مجموعہ صلوات",
        ro: "Zaad-e-Saeed",
        en: "Classical Prophetic Salutations Compilation"
    },
    recommendedCount: 100,
    seoKeywords: [
        "Durood Hazari in English",
        "درود ہزاری شریف عربی اردو",
        "Durood Hazari Roman Urdu",
        "Assalatu wassalamu alayka ya Rasool Allah lyrics"
    ],
    faqs: [
        {
            question: {
                ur: "درودِ ہزاری کے پڑھنے کا بہترین وقت کونسا ہے؟",
                ro: "Durood Hazari parhne ka behtareen waqt kaun sa hai?",
                en: "When is the best time to recite Durood-e-Hazari?"
            },
            answer: {
                ur: "نمازِ فجر اور نمازِ مغرب کے بعد 100 مرتبہ تسبیح کرنا روحانی فیض کا باعث ہے۔",
                ro: "Fajr aur Maghrib ke baad 100 martaba parhna behtareen hai.",
                en: "Reciting it 100 times after Fajr and Maghrib prayers is profoundly rewarding."
            }
        }
    ],
    pdfFilename: "durood-e-hazari-pdf.pdf"
},
  {
    id: "14",
    slug: "durood-ghousia",
    title: {
        ur: "درودِ غوثیہ شریف",
        ro: "Durood-e-Ghausia",
        en: "Durood-e-Ghausia (Salawat of Ghous al-Azam)"
    },
    arabicText: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ مَعْدِنِ الْجُودِ وَالْكَرَمِ، وَآلِهِ وَبَارِكْ وَسَلِّمْ.",
    urduTranslation: "اے اللہ! رحمت و درود نازل فرما ہمارے آقا حضرت محمد ﷺ پر جو سخاوت اور کرم کا سرچشمہ ہیں، اور آپ کی آل پر، اور برکت و سلامتی عطا فرما۔",
    romanUrdu: "Allahumma salli ala sayyidina Muhammadin ma’din-il-joodi wal-karami, wa aalihi wa baarik wa sallim.",
    englishTranslation: "O Allah! Bestow peace, blessings, and grace upon our Master Muhammad ﷺ, the very fountainhead of boundless generosity and noble grace, and upon his family.",
    fazilat: {
        ur: "حضور غوث الاعظم شیخ عبدالقادر جیلانیؒ کا پسندیدہ درودِ پاک ہے۔ وسعتِ رزق، باطنی کشائش اور روحانی فیوض و برکات کے حصول کے لیے اکسیر ہے۔",
        ro: "Hazrat Ghaus-e-Azam (R.A) ka pasandeeda durood sharif hai jo wusat-e-rizq aur roohani taraqqi ke liye nihayat moasir hai.",
        en: "Beloved litany of Sultan al-Awliya Shaykh Abdul Qadir Jilani (R.A), esteemed for opening the gates of sustenance and bestowing immense spiritual serenity."
    },
    category: "Rizq",
    reference: {
        ur: "غنیۃ الطالبین و فتوح الغیب",
        ro: "Ghunyat al-Talibeen",
        en: "Ghunyat al-Talibeen & Futuh al-Ghayb"
    },
    recommendedCount: 111,
    seoKeywords: [
        "Durood Ghausia in English",
        "درود غوثیہ شریف مع ترجمہ",
        "Durood e Ghausia Roman Urdu",
        "Sheikh Abdul Qadir Jilani Durood Sharif"
    ],
    faqs: [
        {
            question: {
                ur: "درودِ غوثیہ کو روزانہ کتنی بار پڑھنا چاہیے؟",
                ro: "Durood Ghausia rozana kitni bar parhna chahiye?",
                en: "How many times daily should Durood-e-Ghausia be recited?"
            },
            answer: {
                ur: "روزانہ بعد نمازِ عشاء یا صبح 11 یا 111 بار پڑھنا برکت و کشادگی کا باعث ہے۔",
                ro: "Rozana Isha ke baad 11 ya 111 martaba parhein.",
                en: "Reciting it 11 or 111 times after Isha brings profound blessings and financial ease."
            }
        }
    ],
    pdfFilename: "darood-ghousia-pdf.pdf"
},
  {
    id: "15",
    slug: "durood-awaisia",
    title: {
        ur: "درودِ اویسیہ شریف",
        ro: "Durood-e-Awaisia",
        en: "Durood-e-Awaisia (Salawat of Uwais al-Qarani)"
    },
    arabicText: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ كَمَا تُحِبُّ وَتَرْضَى لَهُ، وَصَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ كَمَا أَمَرْتَنَا أَنْ نُصَلِّيَ عَلَيْهِ.",
    urduTranslation: "اے اللہ! ہمارے آقا حضرت محمد ﷺ پر ایسا درود نازل فرما جیسا کہ تو ان کے لیے پسند فرماتا ہے اور راضی ہوتا ہے، اور ہمارے آقا حضرت محمد ﷺ پر ایسا درود بھیج جیسا تو نے ہمیں ان پر درود بھیجنے کا حکم دیا ہے۔",
    romanUrdu: "Allahumma salli ala sayyidina Muhammadin kama tuhibbu wa tarda lahu, wa salli ala sayyidina Muhammadin kama amartana an nusalliya alayh.",
    englishTranslation: "O Allah! Bestow peace upon our Master Muhammad ﷺ in the measure that You love and are pleased with for him; and bestow peace upon our Master Muhammad ﷺ as You have commanded us to pray for him.",
    fazilat: {
        ur: "حضرت اویس قرنیؒ کی نسبت سے منسوب یہ درودِ پاک رضائے الٰہی کے حصول اور حبِ رسول ﷺ کو دل میں پختہ کرنے کے لیے بے نظیر ہے۔",
        ro: "Hazrat Uwais Qarni (R.A) ki nisbat se mashhoor yeh durood-e-pak dilon mein Ishq-e-Rasool ﷺ jagata hai.",
        en: "Attributed to the spiritual lineage of Hazrat Uwais al-Qarani (R.A), this supplication kindles divine pleasure and deep prophetic love in the heart."
    },
    category: "Rozana",
    reference: {
        ur: "کشف المحجوب و تذکرۃ الاولیاء",
        ro: "Kashf al-Mahjoob",
        en: "Classical Sufi Traditions & Biographies"
    },
    recommendedCount: 33,
    seoKeywords: [
        "Durood Awaisia English",
        "درود اویسیہ عربی ترجمہ",
        "Durood e Awaisia Roman Urdu",
        "Uwais Qarni Durood"
    ],
    faqs: [
        {
            question: {
                ur: "درودِ اویسیہ کی خاص برکت کیا ہے؟",
                ro: "Durood Awaisia ki khas barkat kya hai?",
                en: "What is the primary spiritual blessing of Durood-e-Awaisia?"
            },
            answer: {
                ur: "اس کا متواتر ورد انسان کو اخلاص، عاجزی اور روحانی تسکین عطا فرماتا ہے۔",
                ro: "Iska wird dil mein ikhlaas aur aajzi paida karta hai.",
                en: "Consistent recitation purifies inward sincerity, humility, and peace of mind."
            }
        }
    ],
    pdfFilename: "durood-awaisia.pdf"
},
  {
    id: "16",
    slug: "salatul-mashishiyya",
    title: {
        ur: "صلاۃ المشیشیہ شریف",
        ro: "Salat al-Mashishiyya",
        en: "Salat al-Mashishiyya (Imam Ibn Mashish)"
    },
    arabicText: "اللَّهُمَّ صَلِّ عَلَى مَنْ مِنْهُ انْشَقَّتِ الأَسْرَارُ، وَانْفَلَقَتِ الأَنْوَارُ، وَفِيهِ ارْتَقَتِ الحَقَائِقُ، وَتَنَزَّلَتْ عُلُومُ آدَمَ فَأَعْجَزَ الخَلَائِقَ.",
    urduTranslation: "اے اللہ! رحمت نازل فرما اس مبارک ذات پر جن سے معرفت کے اسرار پھوٹے، جن سے ہدایت کے انوار چمکے، جن میں حقائق نے معراج پائی، اور جن پر علومِ آدم نازل ہوئے اور تمام مخلوق ان کی معرفت کے آگے عاجز آ گئی۔",
    romanUrdu: "Allahumma salli ala man minhun-shaqqat-il-asraar, wan-falaqat-il-anwaar, wa feehir-taqat-il-haqaa-iq, wa tanazzalat uloom-u-Aadama fa-a’jazal-khalaaiq.",
    englishTranslation: "O Allah! Bestow peace upon him from whom divine secrets split forth, and spiritual lights burst radiant, in whom supreme realities ascended, and Adam’s knowledge descended, leaving all creation in awe.",
    fazilat: {
        ur: "سیدی عبد السلام بن مشیشؒ کی یہ صلاۃ تصوف و معرفت کا سب سے عظیم منشور ہے۔ دل کی تاریکیوں کو جلا بخشنے اور معرفتِ ذاتِ نبوی ﷺ کے فہم کے لیے پڑھی جاتی ہے۔",
        ro: "Imam Abdus Salam Ibn Mashish (R.A) ki azeem salawat jo roohani baseerat aur noor-e-irfan ata karti hai.",
        en: "The immortal prayer of Imam Abd al-Salam Ibn Mashish (R.A), universally regarded as a pinnacle of metaphysical praise and inward illumination."
    },
    category: "Rozana",
    reference: {
        ur: "کتبِ شاذلیہ و مشائخِ طریقت",
        ro: "Shadhili Awrad & Liturgies",
        en: "Shadhili Spiritual Liturgies & Commentaries"
    },
    recommendedCount: 3,
    seoKeywords: [
        "Salat al Mashishiyya in English",
        "صلاۃ المشیشیہ اردو ترجمہ",
        "Salat al Mashishiyya Roman Urdu",
        "Ibn Mashish prayer lyrics"
    ],
    faqs: [
        {
            question: {
                ur: "صلاۃ المشیشیہ کب پڑھنی چاہیے؟",
                ro: "Salat al Mashishiyya kab parhni chahiye?",
                en: "When is Salat al-Mashishiyya traditionally recited?"
            },
            answer: {
                ur: "صبح بعد نمازِ فجر یا جمعہ کے دن اس کا مطالعہ اور ورد اہل اللہ کا محبوب معمول ہے۔",
                ro: "Subah Fajr ke baad ya Jumma ke din parhna behtareen hai.",
                en: "Traditionally recited once after the dawn prayer or on Fridays with contemplative presence."
            }
        }
    ],
    pdfFilename: "salatul-mashishiyya.pdf"
},
  {
    id: "17",
    slug: "salat-al-yaqutiyya",
    title: {
        ur: "صلاۃ الیاقوتیہ شریف",
        ro: "Salat al-Yaqutiyya",
        en: "Salat al-Yaqutiyya (The Ruby Benediction)"
    },
    arabicText: "إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى مَنْ جَعَلْتَهُ سَبَبًا لِانْشِقَاقِ أَسْرَارِكَ الجَبَرُوتِيَّةِ.",
    urduTranslation: "بے شک اللہ اور اس کے فرشتے درود بھیجتے ہیں اس نبیِ مکرم ﷺ پر، اے ایمان والو! تم بھی ان پر خوب درود و سلام بھیجو۔ اے اللہ! درود و سلام نازل فرما اس ہستی پر جنہیں تو نے اپنے اسرارِ جبروتیہ کے ظہور کا سبب بنایا۔",
    romanUrdu: "Innallaha wa malaa-ikatahu yusalloona alan-nabi, ya ayyuhallazeena aamanu sallu alayhi wa sallimu tasleema. Allahumma salli wa sallim ala man ja’altahu sababan lin-shiqaqi asraarikal-jabarootiyyah.",
    englishTranslation: "Indeed, Allah and His angels confer blessings upon the Prophet. O you who believe, pray for blessings upon him and salute him with peace! O Allah, bestow peace and blessings upon him whom You made the cause for the manifestation of Your celestial secrets.",
    fazilat: {
        ur: "امام محمد الفاسیؒ کا تصنیف کردہ یہ درود \"یاقوت\" یعنی سرخ قیمتی موتی کہلاتا ہے۔ اس کے روزانہ ورد سے گناہ مٹتے ہیں، فکر و غم دور ہوتا ہے اور دیدارِ نبی ﷺ کی سعادت نصیب ہوتی ہے۔",
        ro: "Salat al-Yaqutiyya qeemti yaqoot ki tarah dilon ko noor bakhshnay wala azeem durood hai.",
        en: "Composed by Imam Muhammad al-Fasi (R.A), likened to a precious ruby, this litany is celebrated for easing anxiety and illuminating the inner eye with prophetic light."
    },
    category: "Rozana",
    reference: {
        ur: "مجمع اللطائف العرشیہ",
        ro: "Majma al-Lataif al-Arshiyya",
        en: "Treasury of Heavenly Liturgies"
    },
    recommendedCount: 3,
    seoKeywords: [
        "Salat al Yaqutiyya English translation",
        "صلاۃ الیاقوتیہ عربی اردو",
        "Salat al Yaqutiyya Roman Urdu",
        "Ruby Salawat benefits"
    ],
    faqs: [
        {
            question: {
                ur: "اس درود کو یاقوتیہ کیوں کہا جاتا ہے؟",
                ro: "Is durood ko Yaqutiyya kyun kehtay hain?",
                en: "Why is this prayer named al-Yaqutiyya (The Ruby)?"
            },
            answer: {
                ur: "یاقوت انتہائی قیمتی اور چمکدار پتھر ہوتا ہے، اسی طرح یہ درود معرفت اور ثواب کے اعتبار سے روحانی جواہر کی مانند ہے۔",
                ro: "Yaqoot qeemti heera hai, aur yeh durood roohani aitebar se nihayat qeemti hai.",
                en: "Just as a ruby is exceedingly rare and radiant, this prayer is spiritually esteemed as a crown jewel among devotional salutations."
            }
        }
    ],
    pdfFilename: "salat-al-yaqutiyya.pdf"
},
  {
    id: "18",
    slug: "salat-al-badriyya",
    title: {
        ur: "صلاۃ البدریہ شریف",
        ro: "Salat al-Badriyya",
        en: "Salat al-Badriyya (Benediction of the Badr Champions)"
    },
    arabicText: "صَلَاةُ اللهِ سَلَامُ اللهِ عَلَى طٰهَ رَسُولِ اللهِ، صَلَاةُ اللهِ سَلَامُ اللهِ عَلَى يٰسٓ حَبِيبِ اللهِ، تَوَسَّلْنَا بِبِسْمِ اللهِ، وَبِالْهَادِي رَسُولِ اللهِ، وَكُلِّ مُجَاهِدٍ لِلَّهِ بِأَهْلِ الْبَدْرِ يَا أَللهُ.",
    urduTranslation: "اللہ کی رحمت اور سلام ہو طٰہٰ رسول اللہ ﷺ پر! اللہ کی رحمت اور سلام ہو یٰسٓ حبیب اللہ ﷺ پر! ہم نے اللہ کے نام اور ہادی رسول اللہ ﷺ کے وسیلے سے دعا مانگی، اور ہر اس مجاہد کے وسیلے سے جو اللہ کی راہ میں نکلا، اور اہلِ بدر کے وسیلے سے اے اللہ!",
    romanUrdu: "Salatullah salamullah ala Taha Rasoolillah, Salatullah salamullah ala Yaseen Habibillah. Tawassalna bi-Bismillah, wa bil-Haadi Rasoolillah, wa kulli mujaahidin lillah bi-Ahlil-Badri ya Allah.",
    englishTranslation: "Allah’s blessings and peace be upon Taha, the Messenger of Allah! Allah’s blessings and peace be upon Yasin, the Beloved of Allah! We seek intercession through the Name of Allah, and through the Guide, the Messenger of Allah, and through every servant striving for Allah, and through the noble Companions of Badr, O Allah!",
    fazilat: {
        ur: "صلاۃ البدریہ عالمِ اسلام میں مصائب، جنگوں، وباؤں اور شدید مشکلات کے خاتمے کے لیے پڑھی جانے والی تاریخ ساز دعا ہے۔ شہدائے و مجاہدینِ بدر کے طفیل دعائیں فوری مستجاب ہوتی ہیں۔",
        ro: "Salat al-Badriyya mushkilat, aafat aur beemariyon se nijat ke liye nihayat ba-asar dua hai.",
        en: "Salat al-Badriyya is historic across the Muslim world for seeking divine protection and relief from afflictions through the noble remembrance of the Companions of Badr."
    },
    category: "Mushkilat",
    reference: {
        ur: "دیوانِ صلوات و دعواتِ بدر",
        ro: "Diwan-e-Badriyyah",
        en: "Litany of Badr Intercessions"
    },
    recommendedCount: 7,
    seoKeywords: [
        "Salat al Badriyya lyrics English Urdu",
        "صلاۃ البدریہ مکمل متن",
        "Salatullah salamullah ala Taha Rasoolillah lyrics",
        "Ahl al Badr dua Roman Urdu"
    ],
    faqs: [
        {
            question: {
                ur: "صلاۃ البدریہ کس پریشانی میں پڑھنی چاہیے؟",
                ro: "Salat al-Badriyya kis preshani mein parhni chahiye?",
                en: "For what difficulties is Salat al-Badriyya recommended?"
            },
            answer: {
                ur: "کسی بھی سخت ناگہانی آفت، خوف، قرض یا بیماری کے وقت اجتماعی یا انفرادی طور پر پڑھنا بے حد مفید ہے۔",
                ro: "Sakht preshani aur aafat ke waqt 7 martaba parhna nihayat mufeed hai.",
                en: "It is especially efficacious during severe hardships, illness, fear, or overwhelming challenges."
            }
        }
    ],
    pdfFilename: "Salat-al-Badriyya.pdf"
},
  {
    id: "19",
    slug: "salat-al-kubra",
    title: {
        ur: "صلاۃ الکبریٰ (غوث الاعظمؒ)",
        ro: "Salat al-Kubra (Jilani)",
        en: "Salat al-Kubra (The Great Litany of Ghaus al-Azam)"
    },
    arabicText: "اللَّهُمَّ اجْعَلْ أَفْضَلَ صَلَوَاتِكَ أَبَدًا، وَأَنْمَى بَرَكَاتِكَ سَرْمَدًا، عَلَى أَشْرَفِ الْخَلَائِقِ الإِنْسَانِيَّةِ، مَجْمَعِ الحَقَائِقِ الإِيمَانِيَّةِ، طَوْرِ التَّجَلِّيَاتِ الإِحْسَانِيَّةِ، سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ.",
    urduTranslation: "اے اللہ! نازل فرما اپنی افضل ترین صلوات ہمیشہ کے لیے، اور اپنی افزوں تر برکات ابد تک، اشرف الخلائق، ایمانی حقائق کے مرکز، احسانی تجلیات کے مظہر، ہمارے سردار و مولیٰ حضرت محمد ﷺ پر۔",
    romanUrdu: "Allahummaj-al afdala salawatika abada, wa anma barakatika sarmada, ala ashrafil-khalaiq-il-insaniyyah, majma-il-haqaiq-il-eemaniyyah, tawr-it-tajalliyat-il-ihsaniyyah, sayyidina wa mawlana Muhammadin.",
    englishTranslation: "O Allah! Bestow Your most exalted blessings forever, and Your most abundant graces perpetually, upon the noblest of human creation, the confluence of spiritual truths, the focal mount of divine manifestations, our Master and Guide Muhammad ﷺ.",
    fazilat: {
        ur: "حضور سیدنا غوث الاعظم شیخ عبدالقادر جیلانیؒ کی عظیم ترین صلاۃ ہے جس کا معمول انسان کو دنیاوی و اخروی امان اور بلند مراتب عطا کرتا ہے۔",
        ro: "Hazrat Sheikh Abdul Qadir Jilani (R.A) ki azeem tareen salawat jo roohani maqamat buland karti hai.",
        en: "The grandest litany formulated by Sultan al-Awliya Shaykh Abdul Qadir Jilani (R.A), celebrated for securing both worldly and spiritual well-being."
    },
    category: "Rozana",
    reference: {
        ur: "الفیوضات الربانیۃ فی المآثر القادریۃ",
        ro: "Al-Fuyudat al-Rabbaniyyah",
        en: "Al-Fuyudat al-Rabbaniyyah fi al-Ma’athir al-Qadiriyyah"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Salat al Kubra Jilani English",
        "صلاۃ الکبری غوث اعظم اردو",
        "Salat al Kubra Roman Urdu",
        "Ghaus e Azam big durood"
    ],
    faqs: [
        {
            question: {
                ur: "صلاۃ الکبریٰ پڑھنے کی کیا شرائط ہیں؟",
                ro: "Salat al-Kubra parhne ki kya sharait hain?",
                en: "What are the recommended conditions for reciting Salat al-Kubra?"
            },
            answer: {
                ur: "باوضو، باادب اور دلی توجہ کے ساتھ دن میں ایک مرتبہ پڑھنا کافی ہے۔",
                ro: "Ba-wuzu aur adab ke sath din mein aik martaba parhein.",
                en: "It is best recited once daily with complete physical cleanliness, ablution, and focused presence of heart."
            }
        }
    ],
    pdfFilename: "Salat-al-Kubra-Salawat.com_.pdf"
},
  {
    id: "20",
    slug: "salat-al-nur-al-dhati",
    title: {
        ur: "صلاۃ النور الذاتی (الشاذلیؒ)",
        ro: "Salat al-Nur al-Dhati",
        en: "Salat al-Nur al-Dhati (The Primordial Essence Light)"
    },
    arabicText: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ النُّورِ الذَّاتِيِّ، وَالسِّرِّ السَّارِي فِي سَائِرِ الأَسْمَاءِ وَالصِّفَاتِ، وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ.",
    urduTranslation: "اے اللہ! درود و سلام اور برکت نازل فرما ہمارے آقا حضرت محمد ﷺ پر جو نورِ ذاتی ہیں، اور وہ مخفی راز ہیں جو تمام اسماء و صفات میں جاری و ساری ہے، اور آپ کی آل و اصحاب پر بھی سلامتی ہو۔",
    romanUrdu: "Allahumma salli wa sallim wa baarik ala sayyidina Muhammadin-in-noor-idh-dhaati, was-sirris-saari fee saa-iril-asmaa-i was-sifaat, wa ala aalihi wa sahbihi wa sallim.",
    englishTranslation: "O Allah! Bestow peace, blessings, and grace upon our Master Muhammad ﷺ, the Primordial Essence of Light, the pervasive Secret flowing through all divine Names and Attributes, and upon his family and companions.",
    fazilat: {
        ur: "امام ابو الحسن الشاذلیؒ کا یہ درود قلب کے زنگ کو دور کرنے، روحانی انوار کو جذب کرنے اور بلاؤں کو ٹالنے کے لیے مشہور ہے۔ روزانہ 100 مرتبہ پڑھنا کشائش پیدا کرتا ہے۔",
        ro: "Imam Shadhili (R.A) ka mashhoor durood jo dil ki bay-qarari aur andheray door karta hai.",
        en: "Formulated by Imam Abu al-Hasan al-Shadhili (R.A), this concise litany is deeply cherished for illuminating the intellect, dispelling inner depression, and drawing divine mercy."
    },
    category: "Rozana",
    reference: {
        ur: "افضل الصلوات علی سید السادات (امام نبہانیؒ)",
        ro: "Afdal al-Salawat (Imam Nabhani)",
        en: "Afdal al-Salawat of Imam Yusuf al-Nabhani"
    },
    recommendedCount: 100,
    seoKeywords: [
        "Salat al Nur al Dhati in English",
        "صلاۃ النور الذاتی ترجمہ و فضائل",
        "Salat al Nur al Dhati Roman Urdu",
        "Imam Shadhili Durood Noor e Zati"
    ],
    faqs: [
        {
            question: {
                ur: "اس درود کی خاص تعداد کیا ہے؟",
                ro: "Is durood ki khas tadaad kya hai?",
                en: "What is the recommended count for Salat al-Nur al-Dhati?"
            },
            answer: {
                ur: "اکابرین اسے روزانہ 41 یا 100 بار معمول بنانے کا مشورہ دیتے ہیں۔",
                ro: "Rozana 41 ya 100 martaba parhna nihayat mufeed hai.",
                en: "Traditional scholars recommend reciting it 41 or 100 times daily for inward clarity and ease."
            }
        }
    ],
    pdfFilename: "Salat-al-Nur-al-Dhati-Salawat.com_.pdf"
},
  {
    id: "21",
    slug: "salat-imam-nawawi",
    title: {
        ur: "صلاۃ الامام النوویؒ",
        ro: "Salat of Imam al-Nawawi",
        en: "Salat of Imam al-Nawawi (The Scholar’s Litany)"
    },
    arabicText: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الأُمِّيِّ، وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، صَلَاةً تَكُونُ لَكَ رِضَاءً، وَلِحَقِّهِ أَدَاءً.",
    urduTranslation: "اے اللہ! رحمت نازل فرما ہمارے سردار حضرت محمد ﷺ پر جو تیرے بندے اور تیرے رسول اور نبیِ امی ہیں، اور آلِ محمد ﷺ پر، ایسا درود جو تیری خوشنودی کا سبب بنے اور ان کے حق کی ادائیگی کا ذریعہ ہو۔",
    romanUrdu: "Allahumma salli ala sayyidina Muhammadin abdika wa rasoolikan-nabiyy-il-ummiyy, wa ala aali sayyidina Muhammad, salatan takoonu laka ridaa, wa li-haqqihi adaa.",
    englishTranslation: "O Allah! Bestow blessings upon our Master Muhammad ﷺ, Your servant, Your Messenger, the Unlettered Prophet, and upon the family of Muhammad ﷺ, a benediction that earns Your complete pleasure and fulfills his rightful honor.",
    fazilat: {
        ur: "شارحِ مسلم امام محی الدین یحییٰ بن شرف النوویؒ کا پسندیدہ درودِ پاک۔ علم میں برکت، فہمِ دین اور سنتِ نبوی پر استقامت کے لیے طلبہ اور اہل علم کا معمول رہا ہے۔",
        ro: "Imam Nawawi (R.A) ka pasandeeda durood jo ilm aur deen ki samajh mein barkat ata karta hai.",
        en: "Authored and loved by the illustrious jurist Imam Yahya ibn Sharaf al-Nawawi (R.A), recited by seekers of sacred knowledge to achieve clarity and firm grounding upon the Sunnah."
    },
    category: "Rozana",
    reference: {
        ur: "الاذکار للنووی",
        ro: "Al-Adhkar by Imam Nawawi",
        en: "Al-Adhkar by Imam al-Nawawi"
    },
    recommendedCount: 33,
    seoKeywords: [
        "Imam Nawawi Salawat English",
        "صلاۃ الامام النووی اردو",
        "Imam Nawawi Durood Roman Urdu",
        "Salawat for students and knowledge"
    ],
    faqs: [
        {
            question: {
                ur: "علمی ترقی کے لیے یہ درود کیسا ہے؟",
                ro: "Ilmi taraqqi ke liye yeh durood kaisa hai?",
                en: "How does this prayer aid in academic and religious study?"
            },
            answer: {
                ur: "مطالعہ سے قبل 7 یا 11 بار پڑھنے سے ذہن کھلتا ہے اور حافظہ مضبوط ہوتا ہے۔",
                ro: "Parhai se pehle 7 ya 11 bar parhna zehan tez karta hai.",
                en: "Reciting it 7 or 11 times before study invites divine facilitation and mental retention."
            }
        }
    ],
    pdfFilename: "Salat-al-Imam-al-Nawawi-Salawat.com_.pdf"
},
  {
    id: "22",
    slug: "salat-al-azimiyya",
    title: {
        ur: "صلاۃ العظیمیہ (احمد بن ادریسؒ)",
        ro: "Salat al-Azimiyya",
        en: "Salat al-Azimiyya (The Majestic Benediction)"
    },
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِنُورِ وَجْهِ اللهِ الْعَظِيمِ، الَّذِي مَلأَ أَرْكَانَ عَرْشِ اللهِ الْعَظِيمِ، أَنْ تُصَلِّيَ عَلَى مَوْلَانَا مُحَمَّدٍ ذِي الْقَدْرِ الْعَظِيمِ، وَعَلَى آلِ نَبِيِّ اللهِ الْعَظِيمِ.",
    urduTranslation: "اے اللہ! میں تجھ سے سوال کرتا ہوں اللہ عظیم کے چہرے کے اس نور کے وسیلے سے جس نے عرشِ عظیم کے تمام ارکان کو بھر دیا ہے، کہ تو رحمت نازل فرما ہمارے آقا حضرت محمد ﷺ پر جو عظیم قدر و منزلت والے ہیں، اور نبی اللہ العظیم کی آل پر۔",
    romanUrdu: "Allahumma inni as-aluka bi-noori wajh-illahil-azeem, allazi mala-a arkaana arsh-illahil-azeem, an tusalliya ala mawlana Muhammadin zil-qadril-azeem, wa ala aali nabiyy-illahil-azeem.",
    englishTranslation: "O Allah! I ask You by the Light of the Countenance of Allah the Magnificent, which fills the pillars of the Throne of Allah the Magnificent, to confer blessings upon our Master Muhammad of magnificent stature, and upon the family of the Prophet of Allah the Magnificent.",
    fazilat: {
        ur: "قطبِ زماں سیدی احمد بن ادریسؒ کا یہ عظیم درود بے پناہ برکات کا حامل ہے۔ اسے ایک بار پڑھنے کا ثواب دلائل الخیرات شریف کو کئی بار ختم کرنے کے برابر مانا گیا ہے۔",
        ro: "Sayyidi Ahmad Ibn Idris (R.A) ka shandar durood jo dilon ko taqwa aur noor ata karta hai.",
        en: "Celebrated litany of Sayyidi Ahmad ibn Idris (R.A), praised for carrying extraordinary spiritual weight equivalent to multiple recitations of the major salawat compendiums."
    },
    category: "Rozana",
    reference: {
        ur: "مجموعہ احزاب و اورادِ ادریسیہ",
        ro: "Awrad-e-Idrisiyyah",
        en: "Litanies of Imam Ahmad ibn Idris"
    },
    recommendedCount: 3,
    seoKeywords: [
        "Salat al Azimiyya in English",
        "صلاۃ العظیمیہ اردو ترجمہ",
        "Salat al Azimiyya Roman Urdu",
        "Ahmad ibn Idris Durood Sharif"
    ],
    faqs: [
        {
            question: {
                ur: "صلاۃ العظیمیہ روزانہ کتنی مرتبہ پڑھنی چاہیے؟",
                ro: "Salat al-Azimiyya rozana kitni martaba parhein?",
                en: "How many times should Salat al-Azimiyya be recited daily?"
            },
            answer: {
                ur: "صبح و شام 3 مرتبہ یا بعد نمازِ جمعہ باوضو پڑھنا اعلیٰ روحانی برکات لاتا ہے۔",
                ro: "Subah o shaam 3 martaba parhna behtareen hai.",
                en: "Reciting it 3 times morning and evening yields immense tranquility and spiritual illumination."
            }
        }
    ],
    pdfFilename: "Azeemiyya.pdf"
},
  {
    id: "23",
    slug: "hizb-al-bahr",
    title: {
        ur: "حزب البحر شریف (امام ابو الحسن الشاذلیؒ)",
        ro: "Hizb al-Bahr (Imam Shadhili)",
        en: "Hizb al-Bahr (The Litany of the Sea)"
    },
    arabicText: "يَا عَلِيُّ يَا عَظِيمُ يَا حَلِيمُ يَا عَلِيمُ، أَنْتَ رَبِّي وَعِلْمُكَ حَسْبِي، فَنِعْمَ الرَّبُّ رَبِّي، وَنِعْمَ الحَسْبُ حَسْبِي، تَنْصُرُ مَنْ تَشَاءُ وَأَنْتَ الْعَزِيزُ الرَّحِيمُ.",
    urduTranslation: "اے بلند و برتر! اے عظمت والے! اے بردبار! اے سب کچھ جاننے والے! تو میرا رب ہے اور تیرا علم میرے لیے کافی ہے، پس کیا ہی اچھا رب میرا رب ہے اور کیا ہی اچھا کفایت کرنے والا میرا کفیل ہے! تو جس کی چاہے مدد فرماتا ہے اور تو ہی غالب اور نہایت رحم والا ہے۔",
    romanUrdu: "Ya Aliyyu ya Azeemu ya Haleemu ya Aleem, Anta Rabbi wa ilmuka hasbi, fa-ni’mar-Rabbu Rabbi, wa ni’mal-hasbu hasbi, tansuru man tasha-u wa Antal-Azeez-ur-Raheem.",
    englishTranslation: "O Exalted, O Magnificent, O Forbearing, O All-Knowing! You are my Lord and Your knowledge suffices me; excellent is the Lord my Lord, and excellent is the Sufficient One my sufficiency! You grant victory to whomsoever You will, and You are the All-Mighty, the Most Merciful.",
    fazilat: {
        ur: "امام شاذلیؒ کا حزب البحر دنیا بھر میں ہر قسم کے زمینی و سمندری خطرات، ظالم کے شر، سحر، جادو اور ناگہانی حادثات سے حفاظت کا سب سے موثر حصار ہے۔",
        ro: "Hizb al-Bahr har qism ke khof, dushman aur aafat se hifazat ka azeem tareen hisaar hai.",
        en: "Formulated by Imam Abu al-Hasan al-Shadhili (R.A), Hizb al-Bahr is globally celebrated as an impenetrable spiritual shield against perils, tyranny, and hidden harms."
    },
    category: "Hizb",
    reference: {
        ur: "الاحزاب الشاذلیۃ المبارکۃ",
        ro: "Al-Ahzab al-Shadhiliyyah",
        en: "The Authentic Shadhili Litanies"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Hizb al Bahr English translation",
        "حزب البحر شریف اردو ترجمہ",
        "Hizb al Bahr Roman Urdu lyrics",
        "Imam Shadhili sea litany protection"
    ],
    faqs: [
        {
            question: {
                ur: "حزب البحر پڑھنے کا صحیح وقت کیا ہے؟",
                ro: "Hizb al-Bahr parhne ka sahih waqt kya hai?",
                en: "When is the most auspicious time to recite Hizb al-Bahr?"
            },
            answer: {
                ur: "عصر اور مغرب کے درمیانی وقت میں قبلہ رخ ہو کر پڑھنا اکابرین کا معمول ہے۔",
                ro: "Asr aur Maghrib ke darmiyan ba-wuzu parhna behtareen hai.",
                en: "It is traditionally recited once between the Asr and Maghrib prayers facing the Qiblah in complete ablution."
            }
        }
    ],
    pdfFilename: "HizbulBahr.pdf"
},
  {
    id: "24",
    slug: "hizb-al-nasr",
    title: {
        ur: "حزب النصر شریف (امام ابو الحسن الشاذلیؒ)",
        ro: "Hizb al-Nasr (Imam Shadhili)",
        en: "Hizb al-Nasr (The Litany of Divine Victory)"
    },
    arabicText: "اللَّهُمَّ بِسَطْوَةِ جَبَرُوتِ قَهْرِكَ، وَبِسُرْعَةِ إِغَاثَةِ نَصْرِكَ، وَبِغَيْرَتِكَ لِانْتِهَاكِ حُرُمَاتِكَ، نَسْأَلُكَ يَا سَمِيعُ يَا قَرِيبُ يَا مُجِيبُ أَنْ تَجْعَلَ كَيْدَ مَنْ كَادَنَا فِي نَحْرِهِ.",
    urduTranslation: "اے اللہ! تیری جبروتی قوت کے غلبے کے واسطے، اور تیری تیز ترین نصرت و مدد کے واسطے، اور تیری غیرت کے واسطے، ہم تجھ سے سوال کرتے ہیں اے سب سننے والے، اے قریب، اے دعاؤں کے قبول فرمانے والے، کہ تو ہمارے خلاف سازش کرنے والے کی چال اسی کے گلے میں ڈال دے۔",
    romanUrdu: "Allahumma bi-satwati jabarooti qahrik, wa bi-sur’ati ighaathati nasrik, wa bi-ghayratika lin-tihaaki hurumaatik, nas-aluka ya Samee-u ya Qareebu ya Mujeeb an taj’ala kayda man kaadana fee nahrih.",
    englishTranslation: "O Allah! By the dominant might of Your irresistible subjugation, and by the swift dispatch of Your divine aid, and by Your protective jealousy when Your sanctities are transgressed, we ask You, O All-Hearing, O Ever-Near, O Answerer of prayers, to turn the plots of our plotters upon their own throats.",
    fazilat: {
        ur: "مظلوم کی داد رسی، ظالموں کے شر سے نجات اور دشمن کے مکر و فریب کو ناکام بنانے کے لیے حزب النصر شمشیرِ بے نیام کی مانند مانی جاتی ہے۔",
        ro: "Zulm aur dushmani se hifazat ke liye Hizb al-Nasr nihayat taqatwar dua hai.",
        en: "Renowned as the sword of the oppressed, Hizb al-Nasr is recited during times of severe hostility, oppression, or injustice for divine relief and moral vindication."
    },
    category: "Hizb",
    reference: {
        ur: "الدر المنظوم فی الاوراد",
        ro: "Al-Durr al-Manzoom",
        en: "Classical Shadhili Duas of Victory"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Hizb al Nasr in English",
        "حزب النصر شریف اردو ترجمہ",
        "Hizb al Nasr Roman Urdu",
        "Imam Shadhili victory prayer"
    ],
    faqs: [
        {
            question: {
                ur: "کیا حزب النصر کسی پر ناجائز بددعا کے لیے پڑھ سکتے ہیں؟",
                ro: "Kya Hizb al-Nasr kisi par najaiz parh saktay hain?",
                en: "Can Hizb al-Nasr ever be recited against anyone wrongfully?"
            },
            answer: {
                ur: "ہرگز نہیں! یہ دعا صرف حق، عدل اور مظلومیت کے ازالے کے لیے ہے؛ ناحق پڑھنے سے انسان خود نقصان اٹھاتا ہے۔",
                ro: "Hargiz nahi, yeh sirf haq aur adal ke liye hai.",
                en: "Never. It is strictly reserved for lawful self-defense, truth, and relief from unprovoked injustice."
            }
        }
    ],
    pdfFilename: "Hizb-al-Nasr-Imam-Shadhili-Salawat.com_.pdf"
},
  {
    id: "25",
    slug: "ratib-al-haddad",
    title: {
        ur: "راتب الحداد شریف (امام عبداللہ بن علوی الحدادؒ)",
        ro: "Ratib al-Haddad",
        en: "Ratib al-Haddad (The Fortress of Protection)"
    },
    arabicText: "يَا رَبَّنَا وَاعْفُ عَنَّا وَامْحُ الَّذِي كَانَ مِنَّا. يَا ذَا الْجَلَالِ وَالإِكْرَامِ أَمِتْنَا عَلَى دِينِ الإِسْلَامِ. يَا قَوِيُّ يَا مَتِينُ اكْفِ شَرَّ الظَّالِمِينَ.",
    urduTranslation: "اے ہمارے پروردگار! ہمیں معاف فرما اور ہم سے جو خطائیں ہوئیں انہیں مٹا دے۔ اے جلال اور عزت والے! ہمیں دینِ اسلام پر موت عطا فرما۔ اے قوی اور مضبوط ذات! ظالموں کے شر سے ہماری حفاظت فرما۔",
    romanUrdu: "Ya Rabbana wa’fu anna wam-hul-lazi kaana minna. Ya Zal-Jalaali wal-Ikraam amitna ala deenil-Islam. Ya Qawiyyu ya Mateenu ikfi sharraz-zaalimeen.",
    englishTranslation: "O our Lord! Pardon us and wipe away our sins. O Possessor of Majesty and Honor, cause us to die upon the faith of Islam! O Mighty, O Firm One, avert from us the malice of all oppressors.",
    fazilat: {
        ur: "حضرموت کے عظیم مجدد امام عبداللہ بن علوی الحدادؒ کا یہ راتب گھر میں امن و برکت لانے، فقر و محتاجی دور کرنے اور ایمان پر خاتمہ کے لیے روزانہ پڑھا جاتا ہے۔",
        ro: "Ratib al-Haddad ghar mein aman, barkat aur eeman ki hifazat ke liye azeem wird hai.",
        en: "Composed by Imam Abdullah ibn Alawi al-Haddad (R.A), this daily litany is world-renowned for guarding households against poverty, disasters, and loss of faith."
    },
    category: "Wird",
    reference: {
        ur: "الوسیلۃ العظمیٰ فی اوراد باعلوی",
        ro: "Al-Waseelat al-Uzma",
        en: "Ba’alawi Litanies & Invocations"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Ratib al Haddad English translation",
        "راتب الحداد شریف مکمل متن",
        "Ratib al Haddad Roman Urdu",
        "Imam al Haddad daily litany"
    ],
    faqs: [
        {
            question: {
                ur: "راتب الحداد کب پڑھنا سنتِ مشائخ ہے؟",
                ro: "Ratib al-Haddad kab parhna chahiye?",
                en: "When is Ratib al-Haddad traditionally recited?"
            },
            answer: {
                ur: "نمازِ مغرب یا عشاء کے بعد گھر والوں کے ساتھ مل کر یا انفرادی طور پر روزانہ پڑھنا چاہیے۔",
                ro: "Maghrib ya Isha ke baad rozana parhein.",
                en: "Traditionally recited after Maghrib or Isha prayer, either individually or in family congregation."
            }
        }
    ],
    pdfFilename: "Ratib-al-Haddad.pdf"
},
  {
    id: "26",
    slug: "wird-al-latif",
    title: {
        ur: "الورد اللطیف (امام عبداللہ بن علوی الحدادؒ)",
        ro: "Al-Wird al-Latif",
        en: "Al-Wird al-Latif (The Subtle Morning & Evening Litany)"
    },
    arabicText: "حَسْبِيَ اللهُ لَا إِلٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ. بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    urduTranslation: "مجھے اللہ ہی کافی ہے، اس کے سوا کوئی عبادت کے لائق نہیں، اسی پر میں نے بھروسہ کیا اور وہی عرشِ عظیم کا مالک ہے۔ اللہ کے نام سے جس کے نام کی برکت سے زمین اور آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی اور وہ خوب سننے اور جاننے والا ہے۔",
    romanUrdu: "Hasbiyallahu la ilaha illa Huwa alayhi tawakkaltu wa Huwa Rabbul-Arshil-Azeem. Bismillahil-lazi la yadurru ma’asmihi shay-un fil-ardi wa la fis-samaa-i wa Huwas-Samee-ul-Aleem.",
    englishTranslation: "Allah is sufficient for me; there is no deity worthy of worship except Him; upon Him I rely, and He is the Lord of the Magnificent Throne. In the Name of Allah, with Whose Name nothing in the earth or the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    fazilat: {
        ur: "صبح اور شام کے مسنون نبوی اذکار پر مشتمل یہ ورد انسان کو دن بھر شیطانی وسوسوں، نظرِ بد اور ناگہانی حادثات سے محفوظ رکھتا ہے۔",
        ro: "Al-Wird al-Latif subah aur shaam ki hifazat aur dilon ke sukoon ka nuskha hai.",
        en: "Carefully compiled from authentic prophetic morning and evening supplications, Al-Wird al-Latif envelopes the reader in comprehensive spiritual security and inner tranquility."
    },
    category: "Wird",
    reference: {
        ur: "رسالۃ المعاونۃ والمظاہرۃ",
        ro: "Risalat al-Mu’awanah",
        en: "Risalat al-Mu’awanah of Imam al-Haddad"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Wird al Latif English pdf",
        "الورد اللطیف اردو ترجمہ",
        "Wird al Latif Roman Urdu",
        "Morning evening prophetic azkar"
    ],
    faqs: [
        {
            question: {
                ur: "الورد اللطیف کتنی دیر میں مکمل ہو جاتا ہے؟",
                ro: "Al-Wird al-Latif kitni der mein parha ja sakta hai?",
                en: "How long does it take to recite Al-Wird al-Latif?"
            },
            answer: {
                ur: "اطمینان کے ساتھ صرف 10 سے 15 منٹ میں صبح یا شام پڑھا جا سکتا ہے۔",
                ro: "10 se 15 minute mein mukammal ho jata hai.",
                en: "It takes approximately 10 to 15 minutes of calm, reflective recitation once in the morning and once before dusk."
            }
        }
    ],
    pdfFilename: "Wird-al-Latif-Salawat.pdf"
},
  {
    id: "27",
    slug: "qasida-mudariyya",
    title: {
        ur: "قصیدہ مضریہ فی الصلاۃ علی خیر البریہ",
        ro: "Qasida al-Mudariyya",
        en: "Qasida al-Mudariyya (The Endless Prophetic Ode)"
    },
    arabicText: "يَا رَبِّ صَلِّ عَلَى الْمُخْتَارِ مِنْ مُضَرٍ، وَالأَنْبِيَا وَجَمِيعِ الرُّسْلِ مَا ذُكِرُوا، وَصَلِّ رَبِّ عَلَى الْهَادِي وَشِيعَتِهِ، وَصَحْبِهِ مَنْ لِدِينِ الحَقِّ قَدْ نَصَرُوا.",
    urduTranslation: "اے میرے پروردگار! درود نازل فرما قبیلۂ مضر کے برگزیدہ رسول ﷺ پر، اور تمام انبیاء و جملہ رسولوں پر جب تک ان کا ذکر کیا جائے، اور درود بھیج اے رب ہادیِ اعظم ﷺ پر اور ان کی آل اور ان کے ان صحابہ پر جنہوں نے دینِ حق کی نصرت فرمائی۔",
    romanUrdu: "Ya Rabbi salli alal-Mukhtaari min Mudarin, wal-Ambiya wa jamee-ir-rusli ma zukiru. Wa salli Rabbi alal-Haadi wa shee’atihi, wa sahbihi man li-deenil-haqqi qad nasaru.",
    englishTranslation: "O Lord! Bestow blessings upon the Chosen One from the tribe of Mudar, and upon all prophets and messengers for as long as they are remembered; and bestow blessings, my Lord, upon the Guide, his blessed family, and his companions who gave victory to the True Faith.",
    fazilat: {
        ur: "امام شرف الدین البوصیریؒ (صاحبِ قصیدہ بردہ) کا تصنیف کردہ یہ بے مثال نعتیہ کلام بارش کے قطروں، ریت کے ذروں اور پودوں کے پتوں کی گنتی کے برابر درود بھیجنے کا ثواب سمیٹتا ہے۔",
        ro: "Imam Busiri (R.A) ka mashhoor qasida jo bay-shumar darood bhejne ka azeem sawaab rakhta hai.",
        en: "Composed by Imam al-Busiri (R.A), this masterpiece enumerates blessings matching raindrops, sand grains, and tree leaves, bringing boundless spiritual dividends."
    },
    category: "Qasida",
    reference: {
        ur: "دیوانِ بوصیری و مجموعہ نعت",
        ro: "Diwan al-Busiri",
        en: "Diwan of Imam Sharaf al-Din al-Busiri"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Qasida Mudariyya in English lyrics",
        "قصیدہ مضریہ اردو ترجمہ",
        "Qasida Mudariyya Roman Urdu",
        "Imam Busiri praise ode"
    ],
    faqs: [
        {
            question: {
                ur: "قصیدہ مضریہ پڑھنے کا کیا فائدہ ہے؟",
                ro: "Qasida Mudariyya parhne ka kya faida hai?",
                en: "What is the special blessing of Qasida al-Mudariyya?"
            },
            answer: {
                ur: "اس کے اشعار کائنات کی گنتیوں کے برابر درود پر مشتمل ہیں جس سے قلیل وقت میں عظیم اجر حاصل ہوتا ہے۔",
                ro: "Mukhtasar waqt mein la-tahashaa darood ka sawaab milta hai.",
                en: "Its verses invoke blessings matching all atoms in creation, securing immense reward in brief reading."
            }
        }
    ],
    pdfFilename: "Qasida-Mudariyya.pdf"
},
  {
    id: "28",
    slug: "dalail-al-khayrat",
    title: {
        ur: "دلائل الخیرات شریف (امام محمد بن سلیمان الجزولیؒ)",
        ro: "Dala’il al-Khayrat",
        en: "Dala’il al-Khayrat (The Waymarks of Benefits)"
    },
    arabicText: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ حَتَّى لَا يَبْقَى مِنَ الصَّلَاةِ شَيْءٌ، وَارْحَمْ سَيِّدَنَا مُحَمَّدًا حَتَّى لَا يَبْقَى مِنَ الرَّحْمَةِ شَيْءٌ، وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ حَتَّى لَا يَبْقَى مِنَ الْبَرَكَةِ شَيْءٌ.",
    urduTranslation: "اے اللہ! رحمت نازل فرما ہمارے آقا حضرت محمد ﷺ پر یہاں تک کہ درود میں سے کچھ باقی نہ بچے، اور رحم فرما ہمارے آقا حضرت محمد ﷺ پر یہاں تک کہ رحمت میں سے کچھ باقی نہ رہے، اور برکت نازل فرما ہمارے آقا حضرت محمد ﷺ پر یہاں تک کہ برکت میں سے کچھ باقی نہ رہے۔",
    romanUrdu: "Allahumma salli ala sayyidina Muhammadin hatta la yabqa minas-salati shay, warham sayyidina Muhammadan hatta la yabqa minar-rahmati shay, wa baarik ala sayyidina Muhammadin hatta la yabqa minal-barakati shay.",
    englishTranslation: "O Allah! Bestow peace upon our Master Muhammad ﷺ until no praise remains ungranted; have mercy upon our Master Muhammad ﷺ until no mercy remains unextended; and bless our Master Muhammad ﷺ until no blessing remains unbestowed.",
    fazilat: {
        ur: "تاریخِ اسلام میں درود و سلام کی سب سے زیادہ پڑھی جانے والی لازوال کتاب۔ روزانہ ایک حزب پڑھنے والا دنیاوی پریشانیوں سے آزاد ہو کر دیدارِ مصطفیٰ ﷺ کی سعادت سے فیضیاب ہوتا ہے۔",
        ro: "Islami tareekh ki sab se mashhoor kitaab jo dilon ko noor aur barkat se bhar deti hai.",
        en: "Authored in Morocco by Imam Muhammad ibn Sulayman al-Jazuli (R.A), this monumental work remains the most celebrated compendium of Prophetic prayers throughout human history."
    },
    category: "Rozana",
    reference: {
        ur: "دلائل الخیرات و شوارق الانوار",
        ro: "Dala’il al-Khayrat wa Shawariq al-Anwar",
        en: "Dala’il al-Khayrat of Imam al-Jazuli"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Dalail al Khayrat in English",
        "دلائل الخیرات شریف اردو ترجمہ مع پی ڈی ایف",
        "Dalail al Khayrat Roman Urdu",
        "Imam al Jazuli prayer book"
    ],
    faqs: [
        {
            question: {
                ur: "دلائل الخیرات کو ہفتے کے دنوں میں کیسے تقسیم کیا گیا ہے؟",
                ro: "Dalail al-Khayrat ko haftay ke dino mein kaisay parha jata hai?",
                en: "How is Dala’il al-Khayrat structured for weekly reading?"
            },
            answer: {
                ur: "اس کتاب میں 8 احزاب ہیں، پیر کے روز سے آغاز کر کے روزانہ ایک حزب پڑھ کر اتوار اور اگلے پیر کو مکمل کیا جاتا ہے۔",
                ro: "Peer se shuru kar ke rozana aik hissa parha jata hai.",
                en: "It is divided into eight daily sections (Ahzab), starting on Monday and completing on the following Monday."
            }
        }
    ],
    pdfFilename: "Jazuli_Dailail-alKhayrat_arabic-urdu.pdf"
},
  {
    id: "29",
    slug: "mawlid-al-barzanji",
    title: {
        ur: "مولد البرزنجی شریف (امام جعفر البرزنجیؒ)",
        ro: "Mawlid al-Barzanji",
        en: "Mawlid al-Barzanji (The Pearl of Prophetic Nativity)"
    },
    arabicText: "ابْتَدِئُ الإِمْلَاءَ بِاسْمِ الذَّاتِ الْعَلِيَّةِ، مُسْتَدِرًّا فَيْضَ الْبَرَكَاتِ عَلَى مَا أَنَالَهُ وَأَوْلَاهُ، وَأُثَنِّي بِحَمْدٍ مَوَارِدُهُ سَائِغَةٌ هَنِيَّةٌ، مُمْتَطِيًا مِنَ الشُّكْرِ الْجَمِيلِ مَطَايَاهُ.",
    urduTranslation: "میں اس تحریر کا آغاز ذاتِ باری تعالیٰ کے بابرکت نام سے کرتا ہوں، اس کے فضل و برکات کی بارش کا طلبگار ہوتے ہوئے اس نعمت پر جو اس نے عطا فرمائی، اور حمدِ باری تعالیٰ کرتا ہوں جس کے سرچشمے خوشگوار اور شیریں ہیں، شکرِ جمیل کے راستے پر گامزن ہوتے ہوئے۔",
    romanUrdu: "Abtadi-ul-imlaa-a bismidh-dhaatil-aliyyah, mustadirran faydal-barakaati ala ma anaalahu wa awlaah, wa usanni bi-hamdin mawaariduhu saa-ighatun haniyyah, mumtatiyan minash-shukril-jameeli mataayaah.",
    englishTranslation: "I begin this recital in the Name of the Supreme Essence, seeking the downpour of heavenly blessings upon all that He has bestowed, and following with praise whose sweet waters are pure and delightful, traversing the paths of sincere gratitude.",
    fazilat: {
        ur: "مدینہ منورہ کے مفتی امام جعفر البرزنجیؒ کی یہ کتاب عالمِ اسلام میں میلاد النبی ﷺ اور اوصافِ نبوی کی تلاوت کے لیے صدیوں سے سند کی حیثیت رکھتی ہے۔",
        ro: "Mawlid al-Barzanji milad sharif aur seerat-e-pak ki azeem tareen kitaab hai.",
        en: "Authored in Madinah al-Munawwarah by Mufti Ja’far al-Barzanji (R.A), this rhymed narrative of the Nativity is universally recited across the Muslim world."
    },
    category: "Mawlid",
    reference: {
        ur: "عقد الجوہر فی مولد النبی الازہر",
        ro: "Iqd al-Jawhar fi Mawlid an-Nabiyy al-Azhar",
        en: "The Jewel Necklace of the Nativity"
    },
    recommendedCount: 1,
    seoKeywords: [
        "Mawlid al Barzanji English text",
        "مولد البرزنجی شریف اردو ترجمہ",
        "Mawlid al Barzanji Roman Urdu",
        "Seerat and Mawlid poems"
    ],
    faqs: [
        {
            question: {
                ur: "مولد البرزنجی کی محافل میں تلاوت کا کیا طریقہ ہے؟",
                ro: "Mawlid al-Barzanji parhne ka kya tareeqa hai?",
                en: "How is Mawlid al-Barzanji recited in gatherings?"
            },
            answer: {
                ur: "اسے خوش الحانی اور باادب انداز میں پڑھا جاتا ہے، اور جب ولادتِ باسعادت کا ذکر آتا ہے تو تعظیماً صلوات و سلام پیش کیا جاتا ہے۔",
                ro: "Ba-adab aur khush-ilhani ke sath parha jata hai.",
                en: "It is chanted melodiously in respectful assemblies, culminating in the standing salutations (Qiyam) upon the Prophet ﷺ."
            }
        }
    ],
    pdfFilename: "Mawlid-al-Barzanji.pdf"
},
  {
    id: "30",
    slug: "the-shimmering-light-mawlid",
    title: {
        ur: "الضیاء اللامع فی ذکر مولد النبی الشافع (حبیب عمر بن حفیظ)",
        ro: "The Shimmering Light Mawlid (Al-Dhiya al-Lami)",
        en: "The Shimmering Light Mawlid (Habib Umar bin Hafiz)"
    },
    arabicText: "يَا رَبَّنَا صَلِّ وَسَلِّمْ دَائِمًا، عَلَى حَبِيبِكَ مَنْ إِلَيْكَ دَعَانَا، وَآلِهِ وَصَحْبِهِ وَمَنْ لَهُ، تَوَالَى فِي مَحَبَّتِكَ وَرَعَانَا.",
    urduTranslation: "اے ہمارے پروردگار! ہمیشہ درود و سلام نازل فرما اپنے محبوب ﷺ پر جنہوں نے ہمیں تیری طرف بلایا، اور ان کی آل و اصحاب پر اور ہر اس شخص پر جس نے تیری محبت میں ان سے وفاداری نبھائی۔",
    romanUrdu: "Ya Rabbana salli wa sallim daa-iman, ala Habibika man ilayka da’aana, wa aalihi wa sahbihi wa man lahu, tawaala fee mahabbatika wa ra’aana.",
    englishTranslation: "O our Lord! Shower perpetual peace and blessings upon Your Beloved who summoned us back unto You, and upon his family, his companions, and whoever walks in their footsteps with devoted love.",
    fazilat: {
        ur: "عالمِ اسلام کے نامور مفکر علامہ حبیب عمر بن حفیظ کا تصنیف کردہ معاصر شاہکار جو رسول اللہ ﷺ کی ولادت، سیرت، شمائل اور معجزات کو پرتاثیر اور جدید فہم کے ساتھ پیش کرتا ہے۔",
        ro: "Habib Umar bin Hafiz ka maqbool-e-aam mawlid jo dilon ko Ishq-e-Rasool se roshan karta hai.",
        en: "Authored by the contemporary sage Habib Umar bin Hafiz, this radiant work combines the classical spirit of the Mawlid with deep spiritual contemplation for the modern era."
    },
    category: "Mawlid",
    reference: {
        ur: "الضیاء اللامع بدار المصطفیٰ تریم",
        ro: "Al-Dhiya al-Lami (Tarim, Yemen)",
        en: "Al-Dhiya al-Lami (Dar al-Mustafa, Tarim)"
    },
    recommendedCount: 1,
    seoKeywords: [
        "The Shimmering Light Mawlid in English",
        "الضیاء اللامع حبیب عمر بن حفیظ اردو",
        "Al Dhiya al Lami Roman Urdu",
        "Modern Mawlid poems lyrics"
    ],
    faqs: [
        {
            question: {
                ur: "الضیاء اللامع کا مرکزی پیغام کیا ہے؟",
                ro: "Al-Dhiya al-Lami ka markazi paigham kya hai?",
                en: "What is the central theme of The Shimmering Light Mawlid?"
            },
            answer: {
                ur: "نبی کریم ﷺ کے اخلاقِ حسنہ کو اپنانا، باہمی محبت و اخوت کو فروغ دینا اور دلوں کو اللہ کی طرف موڑنا ہے۔",
                ro: "Husn-e-akhlaq aur dilon ko Allah ki taraf morna hai.",
                en: "To rekindle intense love for the Prophet ﷺ, embody his sublime character, and heal social discord."
            }
        }
    ],
    pdfFilename: "The-Shimmering-Light-Mawlid.pdf"
}
];

export function getDuroodBySlug(slug: string): DuroodItem | undefined {
  return duroodList.find((item) => item.slug === slug);
}

export function getDuroodsByCategory(category: DuroodCategory): DuroodItem[] {
  return duroodList.filter((item) => item.category === category);
}

export function getDuroodCategoryLabel(
  category: DuroodCategory | 'All',
  lang: Language = 'ur'
): string {
  const match = DUROOD_CATEGORIES.find((c) => c.id === category);
  if (!match) return category;
  if (lang === 'en') return match.label.en;
  if (lang === 'ro') return match.label.ro;
  return match.label.ur;
}

export function getDuroodCategoryLabelUr(category: DuroodCategory | 'All'): string {
  return getDuroodCategoryLabel(category, 'ur');
}
