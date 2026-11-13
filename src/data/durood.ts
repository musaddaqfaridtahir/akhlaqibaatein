import { Language } from './types';

export type DuroodCategory = 'Rozana' | 'Mushkilat' | 'Rizq' | 'Sehat';

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
