import { Quote, Language } from './types';

// src/data/quotes.ts - Batch #1 from Makhzan-e-Akhlaq (Pages 7 to 19)

export interface LocalizedText {
  ur: string;
  ro: string;
  en: string;
}

export interface QuoteItem {
  id: string;
  slug: string;
  categorySlug: string;
  bookRef: string;
  author: LocalizedText;
  title: LocalizedText;
  quote: LocalizedText;
  tashreeh: LocalizedText;
  tags: LocalizedText[];
}

export const batch1Quotes: QuoteItem[] = [
  {
    id: "ma-001",
    slug: "amal-ka-daromadar-niyaton-par-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تمام اعمال کا دارومدار نیتوں پر ہے",
      ro: "Tamam Aamaal Ka Daromadar Niyaton Par Hai",
      en: "Actions Are Judged by Intentions"
    },
    quote: {
      ur: "تمام اعمال کا دارومدار نیتوں پر ہے، اور ہر انسان کو وہی ملے گا جس کی اس نے نیت کی ہو۔",
      ro: "Tamam aamaal ka daromadar niyaton par hai, aur har insan ko wahi milega jis ki us ne niyat ki ho.",
      en: "Actions are but by intention and every man shall have but that which he intended."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: نیت کسی بھی عمل کی روح ہوتی ہے۔ اگر نیت خالص اللہ کی رضا کے لیے ہو تو چھوٹا سا کام بھی عبادت بن جاتا ہے، اور اگر دکھاوا ہو تو بڑے سے بڑے عمل کا بھی کوئی اجر نہیں ملتا۔ آج کا عملی سبق یہ ہے کہ ہر نیک کام سے پہلے اپنے دل کی نیت کو ضرور خالص کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Niyat kisi bhi amal ki rooh hoti hai. Agar niyat khalis Allah ki raza ke liye ho to chota sa kaam bhi ibadat ban jata hai, aur agar dikhawa ho to bade se bade amal ka bhi koi ajr nahi milta. Aaj ka amli sabaq yeh hai ke har nek kaam se pehle apne dil ki niyat ko zaroor khalis karein.",
      en: "Context & Practical Lesson: Intention is the soul of every action; purity of purpose elevates even the smallest deed into profound worship."
    },
    tags: [
      { ur: "اخلاص", ro: "Ikhlas", en: "Sincerity" },
      { ur: "نیت", ro: "Niyat", en: "Intention" }
    ]
  },
  {
    id: "ma-002",
    slug: "behtareen-insan-woh-hai-jo-quran-sikhe-aur-sikhaye",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تم میں سے بہترین انسان وہ ہے جو قرآن سیکھے اور سکھائے",
      ro: "Tum Mein Se Behtareen Insan Woh Hai Jo Quran Sikhe Aur Sikhaye",
      en: "The Best Among You is the One Who Learns and Teaches the Quran"
    },
    quote: {
      ur: "تم میں سے بہترین وہ شخص ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔",
      ro: "Tum mein se behtareen woh shakhs hai jo Quran sikhe aur doosron ko sikhaye.",
      en: "The best of you are those who learn the Quran and teach it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآنِ کریم اللہ کا کلام ہے اور اس سے جڑنا انسان کو دنیا اور آخرت میں بلند مقام عطا کرتا ہے۔ علمِ نافع کو دوسروں تک پہنچانا صدقۂ جاریہ ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ قرآن کی تلاوت کو اپنا معمول بنائیں اور اس کا پیغام دوسروں تک پہنچائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran-e-Kareem Allah ka kalam hai aur is se jurna insan ko duniya aur akhirat mein buland maqam ata karta hai. Ilm-e-naafai ko doosron tak pohanchana sadqa-e-jariya hai. Aaj ka amli sabaq yeh hai ke rozana Quran ki tilawat ko apna mamool banayein aur us ka paigham doosron tak pohanchayein.",
      en: "Context & Practical Lesson: Connecting with the Quran and sharing its wisdom with others brings ultimate honor and serves as a continuous charity."
    },
    tags: [
      { ur: "قرآن فہمی", ro: "Quran Fehmi", en: "Quranic Wisdom" },
      { ur: "علم", ro: "Ilm", en: "Knowledge" }
    ]
  },
  {
    id: "ma-003",
    slug: "din-khair-khwahi-ka-nam-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دین سراسر خیر خواہی اور بھلائی کا نام ہے",
      ro: "Deen Sarasar Khair-Khwahi Aur Bhalai Ka Naam Hai",
      en: "Religion is Sincere Advice and Benevolence"
    },
    quote: {
      ur: "دین خیر خواہی کا نام ہے؛ ہم نے عرض کیا: کس کے ساتھ؟ آپ ﷺ نے فرمایا: اللہ کے ساتھ، اس کی کتاب کے ساتھ، اس کے رسول کے ساتھ، اور مسلمانوں کے ائمہ اور عام لوگوں کے ساتھ۔",
      ro: "Deen khair-khwahi ka naam hai; hum ne arz kiya: Kis ke sath? Aap ﷺ ne farmaya: Allah ke sath, us ki kitab ke sath, us ke Rasool ke sath, aur musalmanon ke aimmah aur aam logon ke sath.",
      en: "Religion is sincerity. We said: To whom? He said: To Allah, His Book, His Messenger, and to the leaders of the Muslims and their common folk."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: خیر خواہی کا مفہوم یہ ہے کہ انسان ہر ایک کے ساتھ بھلائی چاہے، احکام کی پابندی کرے اور کسی کے ساتھ فریب یا دھوکہ نہ کرے۔ آج کا عملی سبق یہ ہے کہ اپنے تمام تعلقات میں سچائی اور خیر خواہی کا جذبہ پیدا کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Khair-khwahi ka mafhoom yeh hai ke insan har aik ke sath bhalai chahe, ahkam ki pabandi kare aur kisi ke sath fareeb ya dhoka na kare. Aaj ka amli sabaq yeh hai ke apne tamam talluqat mein sachai aur khair-khwahi ka jazba paida karein.",
      en: "Context & Practical Lesson: Sincere benevolence toward God, His scripture, His Prophet, and fellow humans forms the complete framework of faith."
    },
    tags: [
      { ur: "خیر خواہی", ro: "Khair-Khwahi", en: "Sincere Goodwill" },
      { ur: "اخلاق", ro: "Akhlaq", en: "Ethics" }
    ]
  },
  {
    id: "ma-004",
    slug: "musalman-woh-hai-jiski-zaban-aur-hath-se-doosre-mehfooz-rahein",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے محفوظ رہیں",
      ro: "Haqeeqi Musalman Woh Hai Jis Ki Zaban Aur Hath Se Doosre Mehfooz Rahein",
      en: "A True Muslim is One Who Harms No One with Tongue or Hand"
    },
    quote: {
      ur: "سچا مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں، اور سچا مہاجر وہ ہے جو ان چیزوں کو چھوڑ دے جن سے اللہ نے منع فرمایا ہے۔",
      ro: "Sacha musalman woh hai jis ki zaban aur hath se doosre musalman mehfooz rahein, aur sacha muhajir woh hai jo un cheezon ko chhor de jin se Allah ne mana farmaya hai.",
      en: "A Muslim is the one from whose tongue and hands the Muslims are safe; and a Muhajir (emigrant) is the one who forsakes what Allah has forbidden."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کسی کو تکلیف نہ دینا، گالی گلوچ، غیبت یا جسمانی نقصان سے بچنا کامل ایمان کی علامت ہے۔ آج کا عملی سبق یہ ہے کہ اپنی زبان کو قابو میں رکھیں اور اپنے عمل سے کسی کو دکھ نہ پہنچائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Kisi ko takleef na dena, gaali-galoch, gheebat ya jismani nuqsan se bachna kamil eman ki alamat hai. Aaj ka amli sabaq yeh hai ke apni zaban ko qaboo mein rakhein aur apne amal se kisi ko dukh na pohanchayein.",
      en: "Context & Practical Lesson: Guarding our tongue and hands from hurting others is the core test of practicing true Islamic character."
    },
    tags: [
      { ur: "سلامتی", ro: "Salamati", en: "Peacefulness" },
      { ur: "حفظِ زبان", ro: "Hifz-e-Zaban", en: "Guarding Speech" }
    ]
  },
  {
    id: "ma-005",
    slug: "apne-bhai-ke-liye-wahi-pasand-karo-jo-apne-liye-karte-ho",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اپنے بھائی کے لیے وہی پسند کرو جو اپنے لیے کرتے ہو",
      ro: "Apne Bhai Ke Liye Wahi Pasand Karo Jo Apne Liye Karte Ho",
      en: "Love for Your Brother What You Love for Yourself"
    },
    quote: {
      ur: "تم میں سے کوئی اس وقت تک کامل مومن نہیں ہو سکتا جب تک کہ وہ اپنے بھائی کے لیے بھی وہی کچھ پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
      ro: "Tum mein se koi us waqt tak kamil momin nahi ho sakta jab tak ke woh apne bhai ke liye bhi wahi kuch pasand na kare jo apne liye pasand karta hai.",
      en: "None of you truly believes until he wishes for his brother what he wishes for himself."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: یہ اصول انسانی محبت اور اخوت کی معراج ہے۔ جب انسان خود غرضی سے نکل کر دوسروں کی بھلائی کو اپنی طرح عزیز رکھتا ہے تو معاشرے سے حسد اور بغض ختم ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کے ساتھ وہی معاملہ کریں جو آپ اپنے ساتھ چاہتے ہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Yeh usool insani mohabbat aur ukhuwwat ki meraj hai. Jab insan khud-gharzi se nikal kar doosron ki bhalai ko apni tarah azeez rakhta hai to muashray se hasad aur bughz khatam ho jata hai. Aaj ka amli sabaq yeh hai ke doosron ke sath wahi muamla karein jo aap apne sath chahte hain.",
      en: "Context & Practical Lesson: Eradicating selfishness by wishing well for others fosters a deeply harmonious and supportive society."
    },
    tags: [
      { ur: "اخوت", ro: "Ukhuwwat", en: "Brotherhood" },
      { ur: "باہمی محبت", ro: "Bahami Mohabbat", en: "Mutual Affection" }
    ]
  },
  {
    id: "ma-006",
    slug: "jo-shakhs-reham-nahi-karta-us-par-reham-nahi-kiya-jata",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مخلوق پر رحم کرنے والے پر رب کی رحمت ہوتی ہے",
      ro: "Makhlooq Par Reham Karne Wale Par Rab Ki Rehmat Hoti Hai",
      en: "Those Who Show Mercy Will Receive Divine Mercy"
    },
    quote: {
      ur: "جو شخص لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ اس پر رحم نہیں فرماتا۔",
      ro: "Jo shakhs logon par reham nahi karta, Allah Ta'ala us par reham nahi farmata.",
      en: "He who does not show mercy to people, Allah will not show mercy to him."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: رحمت اور شفقت مومن کا بنیادی زیور ہیں۔ جب ہم کمزوروں، ماتحتوں اور حیوانات پر نرمی کرتے ہیں تو آسمان والے کی رحمت ہمارے شاملِ حال ہوتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دل میں نرمی پیدا کریں اور ہر ذی روح کے ساتھ شفقت سے پیش آئیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Rehmat aur shafqat momin ka bunyadi zewar hain. Jab hum kamzoron, matehton aur haywanon par narmi karte hain to asman wale ki rehmat hamare shamil-e-haal hoti hai. Aaj ka amli sabaq yeh hai ke apne dil mein narmi paida karein aur har zi-rooh ke sath shafqat se pesh aayein.",
      en: "Context & Practical Lesson: Showing tenderness and compassion to creation unlocks the boundless mercy of the Creator."
    },
    tags: [
      { ur: "رحمدلی", ro: "Reham-Dili", en: "Compassion" },
      { ur: "شفقت", ro: "Shafqat", en: "Tenderness" }
    ]
  },
  {
    id: "ma-007",
    slug: "muskurana-bhi-sadqa-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Tirmidhi & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اپنے بھائی کے سامنے مسکرانا بھی صدقہ ہے",
      ro: "Apne Bhai Ke Samne Muskurana Bhi Sadqa Hai",
      en: "Smiling in the Face of Your Brother is Charity"
    },
    quote: {
      ur: "اپنے بھائی کے سامنے تمہارا مسکرانا تمہارے لیے صدقہ ہے، اور تمہارا نیکی کا حکم دینا اور برائی سے روکنا صدقہ ہے۔",
      ro: "Apne bhai ke samne tumhara muskurana tumhare liye sadqa hai, aur tumhara neki ka hukm dena aur burai se rokna sadqa hai.",
      en: "Your smile for your brother is charity for you, your commanding good and forbidding evil is charity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام نے نیکی کو صرف مال خرچ کرنے تک محدود نہیں رکھا، بلکہ ایک خوبصورت مسکراہٹ اور خوش اخلاقی کو بھی صدقہ قرار دیا ہے۔ آج کا عملی سبق یہ ہے کہ ملنے والے ہر شخص سے خندہ پیشانی اور مسکراتے ہوئے ملیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam ne neki ko sirf maal kharch karne tak mehdood nahi rakha, balkay aik khoobsurat muskurahat aur khush-akhlaqi ko bhi sadqa qarar diya hai. Aaj ka amli sabaq yeh hai ke milne wale har shakhs se khanda-peshani aur muskurate hue milein.",
      en: "Context & Practical Lesson: Charity in Islam is accessible to everyone; a warm, cheerful smile brightens lives and earns spiritual reward."
    },
    tags: [
      { ur: "خوش اخلاقی", ro: "Khush-Akhlaqi", en: "Good Manners" },
      { ur: "صدقہ", ro: "Sadqa", en: "Charity" }
    ]
  },
  {
    id: "ma-008",
    slug: "takatwar-woh-hai-jo-gusse-par-qaboo-rakhe",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اصل طاقتور وہ ہے جو غصے کے وقت خود پر قابو رکھے",
      ro: "Asal Taqatwar Woh Hai Jo Gusse Ke Waqt Khud Par Qaboo Rakhe",
      en: "The Strong Man Controls Himself When Angry"
    },
    quote: {
      ur: "طاقتور وہ نہیں جو دنگل میں سب کو پچھاڑ دے، بلکہ اصل طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
      ro: "Taqatwar woh nahi jo dangal mein sab ko pachhar de, balkay asal taqatwar woh hai jo gusse ke waqt apne nafs par qaboo rakhe.",
      en: "The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جسمانی زور آزمائی عارضی ہوتی ہے، لیکن اپنے غصے اور جذبات پر فتح پانا سب سے بڑی روحانی اور اخلاقی فتح ہے۔ آج کا عملی سبق یہ ہے کہ اشتعال انگیزی کے وقت خاموشی اختیار کریں اور جذبات کو قابو میں رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jismani zor-aazmai aarzi hoti hai, lekin apne gusse aur jazbaat par fateh pana sab se badi roohani aur akhlaqi fateh hai. Aaj ka amli sabaq yeh hai ke ishtial-angezi ke waqt khamoshi ikhtiyar karein aur jazbaat ko qaboo mein rakhein.",
      en: "Context & Practical Lesson: True power lies in emotional self-mastery during moments of extreme provocation."
    },
    tags: [
      { ur: "ضبطِ نفس", ro: "Zabt-e-Nafs", en: "Self-Control" },
      { ur: "غصے پر قابو", ro: "Gusse Par Qaboo", en: "Managing Anger" }
    ]
  },
  {
    id: "ma-009",
    slug: "haya-iman-ka-hissa-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حیا ایمان کا بنیادی اور لازمی حصہ ہے",
      ro: "Haya Eman Ka Bunyadi Aur Lazmi Hissa Hai",
      en: "Modesty is an Integral Part of Faith"
    },
    quote: {
      ur: "حیا ایمان کا ایک اہم حصہ ہے، اور ایمان کا ٹھکانہ جنت میں ہے۔",
      ro: "Haya eman ka aik ahem hissa hai, aur eman ka thikana Jannat mein hai.",
      en: "Modesty is a branch of faith, and faith leads to Paradise."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حیا انسان کو برائی اور بے حیائی سے روکنے والی سب سے بڑی اخلاقی ڈھال ہے۔ جس دل میں حیا مر جائے وہاں اخلاقی زوال شروع ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنی گفتگو، لباس اور رویے میں حیا کو نمایاں رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Haya insan ko burai aur be-hayaai se rokne wali sab se badi akhlaqi dhal hai. Jis dil mein haya mar jaye wahan akhlaqi zawal shuru ho jata hai. Aaj ka amli sabaq yeh hai ke apni guftugu, libas aur rawaiye mein haya ko numayan rakhein.",
      en: "Context & Practical Lesson: Modesty acts as an internal moral compass, protecting character from vulgarity and steering the soul toward righteousness."
    },
    tags: [
      { ur: "حیا و پاکدامنی", ro: "Haya o Pakdamani", en: "Modesty & Purity" },
      { ur: "اخلاق", ro: "Akhlaq", en: "Morality" }
    ]
  },
  {
    id: "ma-010",
    slug: "behtareen-insan-woh-hai-jiska-akhlaq-acha-ho",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تم میں سے بہترین وہ ہے جس کے اخلاق سب سے اچھے ہوں",
      ro: "Tum Mein Se Behtareen Woh Hai Jis Ke Akhlaq Sab Se Achay Hon",
      en: "The Best Among You Possess the Finest Character"
    },
    quote: {
      ur: "تم میں سے بہترین وہ لوگ ہیں جن کے اخلاق سب سے اچھے ہیں۔",
      ro: "Tum mein se behtareen woh log hain jin ke akhlaq sab se achay hain.",
      en: "The best among you are those who have the best manners and character."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عبادات کے ساتھ ساتھ حسنِ اخلاق وہ وزن دار نیکی ہے جو توازنِ حیات کو قائم رکھتی ہے۔ ایک خوش اخلاق انسان لوگوں کے دلوں میں گھر کر لیتا ہے۔ آج کا عملی سبق یہ ہے کہ گھر اور باہر سب کے ساتھ نرمی اور اچھے اخلاق سے پیش آئیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Ibadaton ke sath sath husn-e-akhlaq woh wazan-dar neki hai jo tawazun-e-hayat ko qayam rakhti hai. Aik khush-akhlaq insan logon ke dilon mein ghar kar leta hai. Aaj ka amli sabaq yeh hai ke ghar aur bahar sab ke sath narmi aur achay akhlaq se pesh aayein.",
      en: "Context & Practical Lesson: Noble character and sweet manners carry immense weight on the scale of righteous deeds."
    },
    tags: [
      { ur: "حسنِ اخلاق", ro: "Husn-e-Akhlaq", en: "Noble Character" },
      { ur: "کردار", ro: "Kirdar", en: "Virtuous Conduct" }
    ]
  },
  {
    id: "ma-011",
    slug: "sacha-aur-diya-dar-tajir-nabi-aur-siddiqin-ke-sath-hoga",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Tirmidhi & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "سچا اور دیانت دار تاجر انبیاء اور صدیقین کے ساتھ ہوگا",
      ro: "Sacha Aur Diyanat-Dar Tajir Anbiya Aur Siddiqeen Ke Sath Hoga",
      en: "The Honest Merchant Will Be with Prophets and Truthful Souls"
    },
    quote: {
      ur: "سچا اور امانت دار تاجر قیامت کے دن انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔",
      ro: "Sacha aur amanat-dar tajir qayamat ke din anbiya, siddiqeen aur shuhada ke sath hoga.",
      en: "The truthful, honest merchant is associated with the prophets, the truthful, and the martyrs."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کاروبار اور تجارت میں دیانت داری، سچائی اور ناپ تول پورا رکھنا اتنی بڑی نیکی ہے کہ اسلام نے اسے بلند ترین روحانی مقام سے نوازا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے ہر کاروباری لین دین میں ایمانداری کو شعار بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Karobar aur tijarat mein diyanat-dari, sachai aur naap-tol poora rakhna itni badi neki hai ke Islam ne isay buland tareen roohani maqam se nawaza hai. Aaj ka amli sabaq yeh hai ke apne har karobari lain-dain mein imandari ko shiar banayein.",
      en: "Context & Practical Lesson: Financial integrity and absolute honesty in trade elevate a working person to the highest spiritual ranks."
    },
    tags: [
      { ur: "دیانت داری", ro: "Diyanat-Dari", en: "Honesty in Business" },
      { ur: "حلال تجارت", ro: "Halal Tijarat", en: "Ethical Trade" }
    ]
  },
  {
    id: "ma-012",
    slug: "dua-ibadat-ka-maghaz-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Tirmidhi & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دعا عبادت کا مغز اور روح ہے",
      ro: "Dua Ibadat Ka Maghaz Hai",
      en: "Supplication is the Core of Worship"
    },
    quote: {
      ur: "دعا ہی اصل عبادت (اور اس کا مغز) ہے۔",
      ro: "Dua hi asal ibadat (aur us ka maghaz) hai.",
      en: "Supplication is [the essence of] worship."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان کا اپنی بے بسی اور احتیاج کو رب کے سامنے رکھنا ہی بندگی کی معراج ہے۔ دعا تقدیر کو بدلنے اور دل کو سکون دینے کا سب سے بڑا ذریعہ ہے۔ آج کا عملی سبق یہ ہے کہ اپنے ہر معاملے میں اللہ سے دعا کا اہتمام کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan ka apni be-basi aur ehtiaj ko Rab ke samne rakhna hi bandagi ki meraj hai. Dua taqdeer ko badalne aur dil ko sukoon dene ka sab se bada zariya hai. Aaj ka amli sabaq yeh hai ke apne har muamlay mein Allah se dua ka ehtimam karein.",
      en: "Context & Practical Lesson: Expressing complete dependency on the Almighty through heartfelt supplication is the very heart of worship."
    },
    tags: [
      { ur: "دعا", ro: "Dua", en: "Supplication" },
      { ur: "عجز و انکسار", ro: "Ajz o Inksar", en: "Supplication & Submission" }
    ]
  },
  {
    id: "ma-013",
    slug: "asani-paida-karo-tangi-mein-na-dalo",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "لوگوں کے لیے آسانیاں پیدا کرو، مشکلات کھڑی نہ کرو",
      ro: "Logon Ke Liye Asaniyan Paida Karo, Mushkilat Khari Na Karo",
      en: "Make Things Easy for People and Do Not Make Them Difficult"
    },
    quote: {
      ur: "لوگوں کے لیے آسانی پیدا کرو اور سختی و تنگی پیدا نہ کرو؛ لوگوں کو خوشخبری دو اور انہیں متنفر نہ کرو۔",
      ro: "Logon ke liye asani paida karo aur sakhti o tangi paida na karo; logon ko khush-khabri do aur unhein mutanaffir na karo.",
      en: "Facilitate things for people and do not make things difficult for them; give them glad tidings and do not drive them away."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: دینِ اسلام فطرت اور آسانی کا دین ہے۔ بعض لوگ اپنے سخت مزاج اور بے جا شرائط سے دوسروں کے لیے دین اور دنیا دونوں کو بوجھل بنا دیتے ہیں۔ آج کا عملی سبق یہ ہے کہ اپنے گھر، کاروبار اور نصیحت کے انداز میں نرمی اور سہولت پیدا کریں تاکہ لوگ آپ کے قریب آئیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Deen-e-Islam fitrat aur asani ka deen hai. Baaz log apne sakht mizaj aur be-ja sharait se doosron ke liye deen aur duniya dono ko bojhal bana dete hain. Aaj ka amli sabaq yeh hai ke apne ghar, karobar aur nasihat ke andaz mein narmi aur sahulat paida karein taake log aap ke qareeb aayein.",
      en: "Context & Practical Lesson: True wisdom facilitates ease and inspires hope; harshness and rigidness only alienate hearts."
    },
    tags: [
      { ur: "تیسیر و آسانی", ro: "Taiseer o Asani", en: "Ease & Facilitation" },
      { ur: "نرم خوئی", ro: "Naram-Khoi", en: "Gentleness" }
    ]
  },
  {
    id: "ma-014",
    slug: "narmi-jis-cheez-mein-hoti-hai-usay-khoobsurat-bana-deti-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "نرمی ہر معاملے کو زینت بخشتی ہے اور سختی بگاڑ دیتی ہے",
      ro: "Narmi Har Muamlay Ko Zeenat Bakhshati Hai Aur Sakhti Bigar Deti Hai",
      en: "Gentleness Beautifies Everything It Touches"
    },
    quote: {
      ur: "نرمی جس چیز میں بھی پائی جائے اسے خوبصورت اور آراستہ بنا دیتی ہے، اور جس چیز سے نرمی نکال لی جائے وہ بدصورت اور عیب دار ہو جاتی ہے۔",
      ro: "Narmi jis cheez mein bhi payi jaye usay khoobsurat aur aarasta bana deti hai, aur جس چیز سے نرمی نکال لی جائے وہ بدصورت اور عیب دار ہو جاتی ہے۔",
      en: "Gentleness is not found in anything except that it beautifies it, and it is not removed from anything except that it disgraces it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: تلخ لہجہ اور درشت رویہ سچی بات کی تاثیر بھی ختم کر دیتا ہے، جبکہ نرمی اور شائستگی بگڑے ہوئے کام بھی سنوار دیتی ہے۔ آج کا عملی سبق یہ ہے کہ اولاد کی تربیت ہو یا کاروباری لین دین، ہر جگہ نرمی (رفق) کو اپنا ہتھیار بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Talkh lehja aur durusht rawaiya sachi baat ki taseer bhi khatam kar deta hai, jabkeh narmi aur shaistagi bigray huye kaam bhi sanwar deti hai. Aaj ka amli sabaq yeh hai ke aulad ki tarbiyat ho ya karobari lain-dain, har jagah narmi (rifq) ko apna hathyar banayein.",
      en: "Context & Practical Lesson: Gentleness ('Rifq') unlocks doors that force can never open, bringing grace and effectiveness to parenting, leadership, and daily speech."
    },
    tags: [
      { ur: "رفق و نرمی", ro: "Rifq o Narmi", en: "Gentleness" },
      { ur: "حسنِ سلوک", ro: "Husn-e-Sulook", en: "Kind Conduct" }
    ]
  },
  {
    id: "ma-015",
    slug: "behtareen-insan-woh-hai-jo-dosron-ko-nafa-pohanchaye",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Al-Mu'jam Al-Awsat & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "سب سے بہترین انسان وہ ہے جو دوسرے انسانوں کے لیے نفع بخش ہو",
      ro: "Sab Se Behtareen Insan Woh Hai Jo Doosre Insanon Ke Liye Nafa-Bakhsh Ho",
      en: "The Best of People Are Those Most Beneficial to Others"
    },
    quote: {
      ur: "تمام انسانوں میں اللہ کے نزدیک سب سے بہترین وہ شخص ہے جو لوگوں کو سب سے زیادہ نفع پہنچانے والا ہو۔",
      ro: "Tamam insanon mein Allah ke nazdeek sab se behtareen woh shakhs hai jo logon ko sab se zyada nafa pohanchane wala ho.",
      en: "The best of people are those who bring the most benefit to the rest of mankind."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اپنے لیے تو ہر جاندار جیتا ہے، لیکن اشرف المخلوقات ہونے کی معراج یہ ہے کہ انسان کے علم، ہنر، مال اور اخلاق سے دوسرے انسانوں کو فائدہ پہنچے۔ آج کا عملی سبق یہ ہے کہ روزانہ اپنے ہنر یا وقت کے ذریعے کم از کم ایک شخص کی مشکل آسان کرنے کی کوشش کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Apne liye to har jandar jeeta hai, لیکن Ashraf-ul-Makhlooqat hone ki meraj yeh hai ke insan ke ilm, hunar, maal aur akhlaq se doosre insanon ko faida pohanche. Aaj ka amli sabaq yeh hai ke rozana apne hunar ya waqt ke zariye kam az kam aik shakhs ki mushkil asan karne ki koshish karein.",
      en: "Context & Practical Lesson: A meaningful life is measured by how much value, relief, and benefit we contribute to the people around us."
    },
    tags: [
      { ur: "نفع بخشی", ro: "Nafa-Bakhshi", en: "Serving Humanity" },
      { ur: "خدمتِ خلق", ro: "Khidmat-e-Khalq", en: "Public Benefit" }
    ]
  }
];

export function quoteItemToQuote(item: QuoteItem, featured = false): Quote {
  return {
    id: item.id,
    slug: item.slug,
    category: item.categorySlug,
    author: item.author.ro,
    authorUrdu: item.author.ur,
    authorEnglish: item.author.en,
    authorEra: item.bookRef,
    authorEraUrdu: item.bookRef,
    authorEraEnglish: item.bookRef,
    urdu: item.quote.ur,
    roman: item.quote.ro,
    english: item.quote.en,
    tashreeh: item.tashreeh.ur,
    tashreehRoman: item.tashreeh.ro,
    tashreehEnglish: item.tashreeh.en,
    source: item.bookRef,
    sourceRoman: item.bookRef,
    sourceEnglish: item.bookRef,
    tags: item.tags.map((t) => t.ro),
    tagsUrdu: item.tags.map((t) => t.ur),
    tagsEnglish: item.tags.map((t) => t.en),
    bookSlug: 'makhzan-e-akhlaq',
    bookRef: item.bookRef,
    title: item.title,
    featured,
  };
}

export const batch2Quotes: QuoteItem[] = [
  {
    id: "ma-016",
    slug: "neki-aur-taqwa-mein-aik-doosre-ki-madad-karo",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Ma'idah (5:2) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نیکی اور پرہیزگاری کے کاموں میں باہمی تعاون کا حکم",
      ro: "Neki Aur Parhezgari Ke Kaamon Mein Bahami Taawun Ka Hukm",
      en: "Cooperating in Righteousness and Piety, Not in Sin"
    },
    quote: {
      ur: "اور نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کے ساتھ تعاون کیا کرو، اور گناہ اور زیادتی کے کاموں میں کسی کا ساتھ مت دو؛ اور اللہ سے ڈرتے رہو۔",
      ro: "Aur neki aur parhezgari ke kaamon mein aik doosre ke sath taawun kiya karo, aur gunah aur ziyadati ke kaamon mein kisi ka sath mat do; aur Allah se darte raho.",
      en: "And cooperate with one another in goodness and righteousness, and do not cooperate in sin and transgression; and be mindful of Allah."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ المائدہ کی یہ آیت اجتماعی زندگی کا سنہرا قانون طے کرتی ہے کہ دوستی یا رشتہ داری کی خاطر کسی کے غلط کام یا ظلم میں مددگار بننا حرام ہے، البتہ بھلائی اور خیر کا کام جہاں بھی ہو اس میں بڑھ چڑھ کر ہاتھ بٹانا فرض ہے۔ آج کا عملی سبق یہ ہے کہ ہر اچھے اور فلاحی کام میں لوگوں کا بازو بنیں اور ناجائز کاموں سے صاف معذرت کر لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Ma'idah ki yeh aayat ijtimai zindagi ka sunehra qanoon tay karti hai ke dosti ya rishtedari ki khatir kisi ke ghalat kaam ya zulm mein madadgar banna haram hai, albatta bhalai aur khair ka kaam jahan bhi ho us mein barh charh kar hath batana farz hai. Aaj ka amli sabaq yeh hai ke har achay aur falahi kaam mein logon ka bazu banein aur najaiz kaamon se saaf maazrat kar lein.",
      en: "Context & Practical Lesson: True loyalty never means backing a friend or relative in wrongdoing; rather, a principled person supports every noble cause while refusing to participate in injustice."
    },
    tags: [
      { ur: "تعاون علی البر", ro: "Taawun Alal-Birr", en: "Mutual Cooperation" },
      { ur: "اصول پسندی", ro: "Usool-Pasandi", en: "Principled Conduct" }
    ]
  },
  {
    id: "ma-017",
    slug: "ghussa-peena-aur-logon-ko-maaf-karna-muttaqeen-ki-shan",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Aal-e-Imran (3:134) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تنگدستی و خوشحالی میں خرچ کرنا اور غصہ پی جانا",
      ro: "Tangdasti o Khushhali Mein Kharch Karna Aur Ghussa Pee Jana",
      en: "Spending in Prosperity and Adversity and Restraining Anger"
    },
    quote: {
      ur: "متقی وہ لوگ ہیں جو خوشحالی اور تنگدستی دونوں حالتوں میں (اللہ کی راہ میں) خرچ کرتے ہیں، اور غصے کو پی جانے والے ہیں اور لوگوں کے قصور معاف کرنے والے ہیں؛ اور اللہ احسان کرنے والوں سے محبت فرماتا ہے۔",
      ro: "Muttaqi woh log hain jo khushhali aur tangdasti dono halaton mein (Allah ki raah mein) kharch karte hain, aur gusse ko pee jane wale hain aur logon ke qusoor maaf karne wale hain; aur Allah ihsan karne walon se mohabbat farmata hai.",
      en: "The righteous are those who spend in charity during ease and hardship, who restrain their anger, and who pardon the people—and Allah loves the doers of good."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جنت کے وارث بننے والے متقی بندوں کی تین عملی نشانیاں بتائی گئی ہیں: مال کم ہو یا زیادہ مخلوقِ خدا پر خرچ کرنا، طیش کے وقت اپنا غصہ پی جانا، اور بدلہ لینے کی طاقت کے باوجود معاف کر کے احسان کا معاملہ کرنا۔ آج کا عملی سبق یہ ہے کہ غصے کا گھونٹ پی کر درگزر کرنے کی عادت اپنائیں کیونکہ اللہ کی محبت اسی میں پوشیدہ ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Jannat ke waris banne wale muttaqi bandon ki teen amli nishaniyan batai gayi hain: maal kam ho ya zyada makhlooq-e-Khuda par kharch karna, taish ke waqt apna ghussa pee jana, aur badla lene ki taqat ke bawajood maaf kar ke ihsan ka muamla karna. Aaj ka amli sabaq yeh hai ke gusse ka ghoont pee kar darguzar karne ki aadat apnayein kyunkeh Allah ki mohabbat isi mein posheeda hai.",
      en: "Context & Practical Lesson: Generosity in all seasons, swallowing anger when provoked, and graciously pardoning others are the three hallmarks of souls beloved by God."
    },
    tags: [
      { ur: "کظمِ غیظ", ro: "Kazm-e-Ghaiz", en: "Restraining Anger" },
      { ur: "عفو و احسان", ro: "Afw o Ihsan", en: "Forgiveness & Grace" }
    ]
  },
  {
    id: "ma-018",
    slug: "naap-tol-mein-kami-karne-walon-ke-liye-halakat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Mutaffifin (83:1-3) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ناپ تول اور حقوق کی ادائیگی میں ڈنڈی مارنے کی سخت وعید",
      ro: "Naap-Tol Aur Huqooq Ki Adaigi Mein Dandi Marne Ki Sakht Waeed",
      en: "Woe to Those Who Give Less in Measure and Weight"
    },
    quote: {
      ur: "بڑی ہلاکت اور تباہی ہے ناپ تول میں کمی کرنے والوں کے لیے؛ جن کا حال یہ ہے کہ جب لوگوں سے ناپ کر لیتے ہیں تو پورا پورا وصول کرتے ہیں، اور جب انہیں ناپ کر یا تول کر دیتے ہیں تو گھٹا کر دیتے ہیں۔",
      ro: "Badi halakat aur tabahi hai naap-tol mein kami karne walon ke liye; jin ka haal yeh hai ke jab logon se naap kar lete hain to poora poora wasool karte hain, aur jab unhein naap kar ya tol kar dete hain to ghata kar dete hain.",
      en: "Woe to those who give less in measure and weight—those who, when they take a measure from people, demand it in full, but when they measure or weigh for others, give less than due."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ المطففین میں تطفيف (ڈنڈی مارنے) سے مراد صرف ترازو کا وزن کم کرنا نہیں، بلکہ زندگی کے ہر معاملے میں اپنا حق پورا مانگنا اور دوسرے کا حق ادا کرتے وقت کوتاہی کرنا ہے۔ آج کا عملی سبق یہ ہے کہ دکان، کاروبار، ملازمت کی ڈیوٹی اور گھریلو حقوق میں ہمیشہ پورا اور کھرا انصاف کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Mutaffifin mein tatfeef (dandi marne) se murad sirf tarazu ka wazan kam karna nahi, balkay zindagi ke har muamlay mein apna haq poora mangna aur doosre ka haq ada karte waqt kotahi karna hai. Aaj ka amli sabaq yeh hai ke dukan, karobar, mulazmat ki duty aur ghareloo huqooq mein hamesha poora aur khara insaf karein.",
      en: "Context & Practical Lesson: Fraud in weights and measures extends to every double standard where a person demands their full rights while shortchanging others in work, trade, or family duties."
    },
    tags: [
      { ur: "دیانت داری", ro: "Diyanat-Dari", en: "Fair Dealing" },
      { ur: "حقوق کی ادائیگی", ro: "Huqooq Ki Adaigi", en: "Fulfilling Rights" }
    ]
  },
  {
    id: "ma-019",
    slug: "ibadat-ke-das-hissay-aur-rizq-e-halal",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "طلبِ حلال عبادت کا سب سے بڑا حصہ ہے",
      ro: "Talab-e-Halal Ibadat Ka Sab Se Bada Hissa Hai",
      en: "Earning Lawful Sustenance is Nine-Tenths of Worship"
    },
    quote: {
      ur: "عبادت کے دس جزو ہیں، نو ان میں سے طلبِ حلال میں ہیں۔",
      ro: "Ibadat ke das juzo hain, nau un mein se talab-e-halal mein hain.",
      en: "Worship consists of ten parts, nine of which lie in earning a lawful livelihood."
    },
    tashreeh: {
      ur: "دیانت داری اور محنت سے اپنے اہل و عیال کے لیے حلال روزی کمانا محض دنیاوی کام نہیں بلکہ عبادت کا سب سے بڑا درجہ ہے۔ حرام کمائی عبادات کے اثر کو ختم کر دیتی ہے۔",
      ro: "Diyanat-dari aur mehnat se apne ahl-o-ayal ke liye halal rozi kamana mehaz dunyawi kaam nahi balkay ibadat ka sab se bada darja hai. Haram kamai ibadat ke asar ko khatam kar deti hai.",
      en: "Working honestly to provide lawful sustenance for one's family is not merely a worldly task, but the highest form of devotion."
    },
    tags: [
      { ur: "رزقِ حلال", ro: "Rizq-e-Halal", en: "Lawful Earning" },
      { ur: "دیانت", ro: "Diyanat", en: "Honesty" }
    ]
  },
  {
    id: "ma-020",
    slug: "momin-ki-zaban-dil-ke-peechay",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بولنے سے پہلے سوچنے کی عادت",
      ro: "Bolne Se Pehle Sochne Ki Aadat",
      en: "Thinking Before Speaking"
    },
    quote: {
      ur: "مومن کی زبان دل سے پیچھے رہتی ہے، یعنی جب بولنا چاہتا ہے تو پہلے دل میں سوچ لیتا ہے تب زبان سے نکالتا ہے۔",
      ro: "Momin ki zaban dil se peechay rehti hai, yani jab bolna chahta hai to pehle dil mein سوچ leta hai tab zaban se nikalta hai.",
      en: "A believer's tongue follows behind their heart: whenever they wish to speak, they reflect first and only then utter the words."
    },
    tashreeh: {
      ur: "زبان کی حفاظت انسان کو بے شمار فتنوں اور ندامت سے بچاتی ہے۔ عقلمند انسان ہمیشہ اپنے الفاظ کو تول کر بولتا ہے تاکہ کسی کی دل آزاری نہ ہو۔",
      ro: "Zaban ki hifazat insan ko be-shumar fitnon aur nadamat se bachati hai. Aqalmand insan hamesha apne alfaz ko tol kar bolta hai taake kisi ki dil-aazari na ho.",
      en: "Guarding the tongue protects a person from countless regrets. A wise person weighs every word carefully before speaking."
    },
    tags: [
      { ur: "زبان کی حفاظت", ro: "Zaban Ki Hifazat", en: "Guarding Speech" },
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" }
    ]
  },
  {
    id: "ma-021",
    slug: "char-khoobiyan-aur-kamil-kamyabi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "چار خوبیاں جو دنیا بھر کی دولت سے بہتر ہیں",
      ro: "Char Khoobiyan Jo Duniya Bhar Ki Daulat Se Behtar Hain",
      en: "Four Virtues Greater Than All Worldly Wealth"
    },
    quote: {
      ur: "دنیا کی کوئی چیز تیرے پاس نہ ہو لیکن یہ چار چیزیں ہوں تو تجھے کوئی ضرر نہیں: راست گفتاری، حفظِ امانت، خوش خلقی اور غذائے حلال۔",
      ro: "Duniya ki koi cheez tere paas na ho lekin yeh char cheezein hon to tujhe koi zarar nahi: rast-guftari, hifz-e-amanat, khush-khulqi aur ghiza-e-halal.",
      en: "Even if you possess nothing of the world, you suffer no loss if you have four qualities: truthful speech, trustworthiness, good character, and lawful sustenance."
    },
    tashreeh: {
      ur: "انسان کی اصل قیمت اس کے بینک بیلنس سے نہیں بلکہ سچائی، امانت داری، عمدہ اخلاق اور حلال کمائی سے پہچانی جاتی ہے۔ جس کے پاس یہ چار صفات ہیں وہ سب سے غنی ہے۔",
      ro: "Insan ki asal qeemat us ke bank balance se nahi balkay sachai, amanat-dari, umda akhlaq aur halal kamai se pehchani jati hai. Jis ke paas yeh char sifat hain woh sab se ghani hai.",
      en: "True human worth is measured not by material possessions, but by truthfulness, integrity, noble manners, and pure earnings."
    },
    tags: [
      { ur: "امانت", ro: "Amanat", en: "Trustworthiness" },
      { ur: "خوش اخلاقی", ro: "Khush Akhlaqi", en: "Good Character" }
    ]
  },
  {
    id: "ma-022",
    slug: "jhagra-aur-jhoot-chhorne-par-jannat-ki-zamanat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 23",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "جھگڑا چھوڑنے اور خوش اخلاقی پر جنت کی ضمانت",
      ro: "Jhagra Chhorne Aur Khush-Akhlaqi Par Jannat Ki Zamanat",
      en: "Guarantee of Paradise for Leaving Disputes and Good Manners"
    },
    quote: {
      ur: "جو شخص جھگڑا چھوڑ دے گو حق ہی پر ہو اس کے واسطے مضافاتِ جنت، جو جھوٹ کہنا چھوڑ دے خواہ بطور ظرافت ہو اس کے لیے وسطِ جنت، اور خوش خلق کے لیے جنت کے اعلیٰ درجے میں ایک گھر کا میں ضامن ہوں۔",
      ro: "Jo shakhs jhagra chhor de go haq hi par ho us ke wastay muzafat-e-Jannat, jo jhoot kehna chhor de khwah bator-e-zarafat ho us ke liye wast-e-Jannat, aur khush-khulq ke liye Jannat ke aala darjay mein aik ghar ka main zamin hoon.",
      en: "I guarantee a house in the surroundings of Paradise for one who gives up arguing even when right, a house in the middle of Paradise for one who abandons lying even in jest, and a house in the highest part of Paradise for one with noble character."
    },
    tashreeh: {
      ur: "اپنی انا کو مار کر بحث و تکرار سے بچنا، مذاق میں بھی جھوٹ نہ بولنا اور ہر حال میں اچھے اخلاق کا مظاہرہ کرنا انسان کو جنت کے بلند ترین درجات تک پہنچا دیتا ہے۔",
      ro: "Apni ana ko maar kar behas-o-takrar se bachna, mazaq mein bhi jhoot na bolna aur har haal mein achay akhlaq ka muzahira karna insan ko Jannat ke buland-tareen darjat tak pohancha deta hai.",
      en: "Setting aside ego to avoid pointless arguments, speaking the truth even in humor, and maintaining noble manners elevate a person to the highest ranks."
    },
    tags: [
      { ur: "سچائی", ro: "Sachai", en: "Truthfulness" },
      { ur: "اخلاقِ حسنہ", ro: "Akhlaq-e-Hasana", en: "Noble Manners" }
    ]
  },
  {
    id: "ma-023",
    slug: "nafs-ke-sath-bada-jihad-aur-gussa",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 25-26",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اپنے نفس کی اصلاح سب سے بڑا جہاد ہے",
      ro: "Apne Nafs Ki Islah Sab Se Bada Jihad Hai",
      en: "Striving Against One's Own Ego is the Greatest Struggle"
    },
    quote: {
      ur: "اپنے نفس کے ساتھ جہاد سب سے بڑا جہاد ہے، اور حقیقی صبر مصیبت کو اول ہی وقت برداشت کر لینا ہے۔",
      ro: "Apne nafs ke sath jihad sab se bada jihad hai, aur haqeeqi sabr musibat ko awwal hi waqt bardasht kar lena hai.",
      en: "Striving against one's own lower self is the greatest struggle, and true patience is exercising restraint at the very first strike of calamity."
    },
    tashreeh: {
      ur: "اپنی بری خواہشات، غصے اور نفسانی کمزوریوں پر قابو پانا سب سے بڑی بہادری ہے۔ اور صبر کا اصل کمال یہی ہے کہ صدمہ پہنچتے ہی انسان شکوہ کرنے کے بجائے حوصلہ رکھے۔",
      ro: "Apni buri khuwaishat, gusse aur nafsani kamzoriyon par qaboo pana sab se badi bahaduri hai. Aur sabr ka asal kamal yehi hai ke sadma pohanchte hi insan shikwa karne ke bajaye hausla rakhe.",
      en: "Conquering one's inner desires, anger, and ego is the highest form of courage, and real patience shines at the initial moment of hardship."
    },
    tags: [
      { ur: "اصلاحِ نفس", ro: "Islah-e-Nafs", en: "Self-Discipline" },
      { ur: "صبر", ro: "Sabr", en: "Patience" }
    ]
  },
  {
    id: "ma-024",
    slug: "sab-se-behtar-insan-nafa-pohanchane-wala",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 29",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "سب سے بہترین انسان کون ہے؟",
      ro: "Sab Se Behtareen Insan Kaun Hai?",
      en: "Who is the Best of People?"
    },
    quote: {
      ur: "سب سے بہتر وہ شخص ہے جو لوگوں کو نفع پہنچائے، تمہیں چاہیے کہ سب کے لیے نفع بخش بن جاؤ۔",
      ro: "Sab se behtar woh shakhs hai jo logon ko nafa pohanchaye, tumhein chahiye ke sab ke liye nafa-bakhsh ban jao.",
      en: "The best of people is the one who brings the most benefit to others; strive to be beneficial to all."
    },
    tashreeh: {
      ur: "انسان کی بڑائی کا معیار یہ ہے کہ اس کے علم، مال اور وجود سے دوسرے انسانوں کو کتنا فائدہ پہنچتا ہے۔ اپنی زندگی کو مخلوقِ خدا کی بھلائی کے لیے وقف کرنا عظیم ترین عمل ہے۔",
      ro: "Insan ki barai ka miyar yeh hai ke us ke ilm, maal aur wujood se doosre insanon ko kitna faida pohanchta hai. Apni zindagi ko makhlooq-e-Khuda ki bhalai ke liye waqf karna azeem-tareen amal hai.",
      en: "The true measure of greatness is how much benefit others derive from your knowledge, resources, and presence."
    },
    tags: [
      { ur: "خدمتِ خلق", ro: "Khidmat-e-Khalq", en: "Service to Humanity" },
      { ur: "بھلائی", ro: "Bhalai", en: "Benevolence" }
    ]
  },
  {
    id: "ma-025",
    slug: "khutba-hujjat-ul-wida-masawat-e-insani",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 33 & 54",
    author: {
      ur: "خصائلِ نبوی ﷺ (حجۃ الوداع)",
      ro: "Khasail-e-Nabawi ﷺ (Hujjat-ul-Wida)",
      en: "Prophetic Biography ﷺ (Farewell Sermon)"
    },
    title: {
      ur: "انسانی مساوات کا عالمگیر اعلان",
      ro: "Insani Masawat Ka Aalamgeer Ailan",
      en: "The Universal Declaration of Human Equality"
    },
    quote: {
      ur: "عربی کو عجمی پر اور عجمی کو عربی پر، گورے کو کالے پر اور کالے کو گورے پر کوئی ترجیح نہیں مگر پرہیزگاری کے ساتھ۔",
      ro: "Arabi ko Ajami par aur Ajami ko Arabi par, goray ko kalay par aur kalay ko goray par koi tarjeeh nahi magar parhezgari ke sath.",
      en: "An Arab has no superiority over a non-Arab, nor a non-Arab over an Arab; a white person has no superiority over a black person, nor a black person over a white person, except by piety and righteous action."
    },
    tashreeh: {
      ur: "حجۃ الوداع کے موقع پر حضور اکرم ﷺ نے رنگ، نسل، زبان اور علاقے کے تمام بت توڑ کر اعلان فرمایا کہ تمام انسان آدم کی اولاد ہیں اور عزت کا معیار صرف تقویٰ اور اچھا کردار ہے۔",
      ro: "Hujjat-ul-Wida ke mauqa par Huzoor Akram ﷺ ne rang, nasal, zaban aur ilaqay ke tamam but tor kar ailan farmaya ke tamam insan Aadam ki aulad hain aur izzat ka miyar sirf taqwa aur acha kirdar hai.",
      en: "In the Farewell Sermon, the Prophet ﷺ abolished all prejudices of race, color, and lineage, establishing that honor lies solely in righteousness and moral character."
    },
    tags: [
      { ur: "مساوات", ro: "Masawat", en: "Equality" },
      { ur: "حجۃ الوداع", ro: "Hujjat-ul-Wida", en: "Farewell Sermon" }
    ]
  },
  {
    id: "ma-026",
    slug: "qoum-ka-sardar-qoum-ka-khadim",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 35",
    author: {
      ur: "خصائلِ نبوی ﷺ",
      ro: "Khasail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "قوم کا سردار قوم کا خادم ہے",
      ro: "Qoum Ka Sardar Qoum Ka Khadim Hai",
      en: "The Leader of a Nation is Its Servant"
    },
    quote: {
      ur: "قوم کا سردار قوم کا خادم ہے، اور تمام مخلوق اللہ کا کنبہ ہے؛ اللہ کے نزدیک سب سے محبوب انسان وہ ہیں جو اس کی مخلوق کے ساتھ بہترین سلوک کریں۔",
      ro: "Qoum ka sardar qoum ka khadim hai, aur tamam makhlooq Allah ka kunba hai; Allah ke nazdeek sab se mehboob insan woh hain jo us ki makhlooq ke sath behtareen sulook karein.",
      en: "The leader of a people is their servant, and all creation is the family of God; the most beloved people to God are those who treat His creation with the greatest kindness."
    },
    tashreeh: {
      ur: "حضور اکرم ﷺ کا ذاتی نمونہ یہی تھا کہ آپ سفر اور حضر میں صحابہ کے ساتھ برابر کام میں شریک ہوتے۔ سچی سرداری حکم چلانے میں نہیں بلکہ مخلوقِ خدا کی خدمت کرنے میں ہے۔",
      ro: "Huzoor Akram ﷺ ka zaati namoona yehi tha ke Aap safar aur hazar mein Sahaba ke sath barabar kaam mein shareek hote. Sachi sardari hukm chalane mein nahi balkay makhlooq-e-Khuda ki khidmat karne mein hai.",
      en: "True leadership is defined by humble service rather than authority. Working alongside others and showing compassion to all creation brings one closest to the Creator."
    },
    tags: [
      { ur: "قیادت", ro: "Qiyadat", en: "Leadership" },
      { ur: "تواضع", ro: "Tawazu", en: "Humility" }
    ]
  },
  {
    id: "ma-027",
    slug: "kaamon-ki-tameel-mein-raazdari",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 59 (Chahal Hadith #6)",
    author: {
      ur: "چہل احادیث (ارشادِ نبوی ﷺ)",
      ro: "Chahal Hadith (Irshad-e-Nabawi ﷺ)",
      en: "40 Hadith (Prophetic Tradition ﷺ)"
    },
    title: {
      ur: "مقاصد کی کامیابی میں رازداری کی اہمیت",
      ro: "Maqasid Ki Kamyabi Mein Raazdari Ki Ahmiyat",
      en: "The Power of Discretion in Achieving Goals"
    },
    quote: {
      ur: "اپنے کاموں کی تعمیل میں رازداری کی مدد لو۔",
      ro: "Apne kaamon ki tameel mein raazdari ki madad lo.",
      en: "Seek help in the successful fulfillment of your needs through discretion and secrecy."
    },
    tashreeh: {
      ur: "اپنے منصوبوں اور ارادوں کو وقت سے پہلے ہر جگہ بیان کرنے سے حسد اور رکاوٹیں پیدا ہوتی ہیں۔ عقلمندی کا تقاضا ہے کہ خاموشی اور یکسوئی سے محنت کی جائے۔",
      ro: "Apne mansoobon aur iradon ko waqt se pehle har jagah bayan karne se hasad aur rukawatein paida hoti hain. Aqalmandi ka taqaza hai ke khamoshi aur yaksoi se mehnat ki jaye.",
      en: "Announcing plans prematurely often invites envy and unnecessary obstacles. Working quietly with focus until a goal is achieved is a mark of wisdom."
    },
    tags: [
      { ur: "رازداری", ro: "Raazdari", en: "Discretion" },
      { ur: "کامیابی", ro: "Kamyabi", en: "Success" }
    ]
  },
  {
    id: "ma-028",
    slug: "daulatmandi-dil-ki-daulatmandi-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 59 (Chahal Hadith #17)",
    author: {
      ur: "چہل احادیث (ارشادِ نبوی ﷺ)",
      ro: "Chahal Hadith (Irshad-e-Nabawi ﷺ)",
      en: "40 Hadith (Prophetic Tradition ﷺ)"
    },
    title: {
      ur: "حقیقی امیری دل کا غنی ہونا ہے",
      ro: "Haqeeqi Ameeri Dil Ka Ghani Hona Hai",
      en: "True Wealth is the Richness of the Heart"
    },
    quote: {
      ur: "دولتمندی دل کی دولتمندی ہے، اور تھوڑی چیز جو کفایت کرے اس سے بہتر ہے جو کثیر ہو لیکن غافل کر دے۔",
      ro: "Daulatmandi dil ki daulatmandi hai, aur thori cheez jo kifayat kare us se behtar hai jo kaseer ho lekin ghafil kar de.",
      en: "True wealth is the contentment of the soul; and a little that suffices is better than abundance that leads to heedlessness."
    },
    tashreeh: {
      ur: "جس انسان کے دل میں قناعت اور شکر نہیں وہ کروڑوں کما کر بھی فقیر رہتا ہے، اور جس کا دل قانع ہو وہ کم وسائل میں بھی پرسکون اور بے نیاز زندگی گزارتا ہے۔",
      ro: "Jis insan ke dil mein qana'at aur shukr nahi woh karoron kama kar bhi faqeer rehta hai, aur jis ka dil qane' ho woh kam wasail mein bhi pur-sukoon aur be-niyaz zindagi guzarta hai.",
      en: "A person without contentment remains poor despite vast riches, whereas a grateful heart enjoys peace and dignity even with modest means."
    },
    tags: [
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" },
      { ur: "سکون", ro: "Sukoon", en: "Inner Peace" }
    ]
  },
  {
    id: "ma-029",
    slug: "aamaal-ka-aitbar-niyaton-ke-mutabiq",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 60 (Chahal Hadith #33)",
    author: {
      ur: "چہل احادیث (ارشادِ نبوی ﷺ)",
      ro: "Chahal Hadith (Irshad-e-Nabawi ﷺ)",
      en: "40 Hadith (Prophetic Tradition ﷺ)"
    },
    title: {
      ur: "اعمال کی قبولیت کا دارومدار نیت پر ہے",
      ro: "Aamaal Ki Qubooliyat Ka Daromadar Niyat Par Hai",
      en: "Actions Are Judged by Intentions"
    },
    quote: {
      ur: "اعمال کا اعتبار نیتوں کے مطابق ہوتا ہے، اور جو لوگوں کا ممنونِ احسان نہیں ہوتا وہ اللہ کا بھی شکر ادا نہیں کرتا۔",
      ro: "Aamaal ka aitbar niyaton ke mutabiq hota hai, aur jo logon ka mamnoon-e-ehsan nahi hota woh Allah ka bhi shukr ada nahi karta.",
      en: "Deeds are judged solely by intentions; and whoever is not grateful to people is not grateful to Allah."
    },
    tashreeh: {
      ur: "ہر عمل کی قدر و قیمت اس کے پیچھے چھپی نیت اور اخلاص سے طے ہوتی ہے۔ دکھاوے کا بڑا عمل بھی بے سود ہے، جبکہ خالص نیت سے کیا گیا چھوٹا کام بھی عظیم اجر رکھتا ہے۔",
      ro: "Har amal ki qadr-o-qeemat us ke peechay chhupi niyat aur ikhlas se tay hoti hai. Dikhaway ka bada amal bhi be-sood hai, jabkeh khalis niyat se kiya gaya chota kaam bhi azeem ajr rakhta hai.",
      en: "The value of every action depends on the sincerity behind it. Even a small deed performed with pure intention carries immense spiritual weight."
    },
    tags: [
      { ur: "نیت", ro: "Niyat", en: "Intention" },
      { ur: "شکر گزاری", ro: "Shukr Guzari", en: "Gratitude" }
    ]
  },
  {
    id: "ma-030",
    slug: "behtareen-kaam-aitdaal-aur-miyana-rawi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 60 (Chahal Hadith #35)",
    author: {
      ur: "چہل احادیث (ارشادِ نبوی ﷺ)",
      ro: "Chahal Hadith (Irshad-e-Nabawi ﷺ)",
      en: "40 Hadith (Prophetic Tradition ﷺ)"
    },
    title: {
      ur: "بہترین کام وہ ہے جو اعتدال سے کیا جائے",
      ro: "Behtareen Kaam Woh Hai Jo Aitdaal Se Kiya Jaye",
      en: "The Best of Affairs is the Middle Path"
    },
    quote: {
      ur: "بہترین کام وہ ہے جو اعتدال سے کیا جائے، اور جو میانہ روی اختیار کرتا ہے وہ کبھی مفلس نہیں ہوتا۔",
      ro: "Behtareen kaam woh hai jo aitdaal se kiya jaye, aur jo miyana-rawi ikhtiyar karta hai woh kabhi muflis nahi hota.",
      en: "The best of matters is that which is done with moderation, and whoever practices financial balance will never fall into destitution."
    },
    tashreeh: {
      ur: "زندگی کے ہر شعبے—عبادت، خرچ، خوراک اور گفتگو—میں افراط و تفریط سے بچ کر درمیانی راہ اختیار کرنا ہی کامیابی اور خوشحالی کی ضمانت ہے۔",
      ro: "Zindagi ke har shobay—ibadat, kharch, khorak aur guftugu—mein ifraat-o-tafreet se bach kar darmiyani raah ikhtiyar karna hi kamyabi aur khushhali ki zamanat hai.",
      en: "Avoiding extremes in spending, worship, speech, and daily habits by following the balanced middle path guarantees lasting stability."
    },
    tags: [
      { ur: "میانہ روی", ro: "Miyana Rawi", en: "Moderation" },
      { ur: "کفایت شعاری", ro: "Kifayat Shiari", en: "Frugality" }
    ]
  }
];

export const batch3Quotes: QuoteItem[] = [
  {
    id: "ma-031",
    slug: "sabr-aur-istiqamat-ka-ajr-be-hisaab",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Az-Zumar (39:10) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "صبر کرنے والوں کو ان کا اجر بے حساب دیا جاتا ہے",
      ro: "Sabr Karne Walon Ko Un Ka Ajr Be-Hisab Diya Jata Hai",
      en: "The Patient Will Be Given Their Reward Without Account"
    },
    quote: {
      ur: "آپ کہہ دیجیے کہ اے میرے بندو جو ایمان لائے ہو، اپنے پروردگار سے ڈرو؛ جو لوگ اس دنیا میں نیکی کرتے ہیں ان کے لیے بھلائی ہے، اور اللہ کی زمین کشادہ ہے، بے شک صبر کرنے والوں کو ان کا اجر بے حساب دیا جائے گا۔",
      ro: "Aap keh dijiye ke aye mere bandoo jo eman laye ho, apne Parwardigar se daro; jo log is duniya mein neki karte hain un ke liye bhalai hai, aur Allah ki zameen kushada hai, be-shak sabr karne walon ko un ka ajr be-hisab diya jayega.",
      en: "Say, 'O My servants who have believed, fear your Lord. For those who do good in this world is good, and the earth of Allah is spacious. Indeed, the patient will be given their reward without account.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مصیبتوں پر صبر کرنے کا بدلہ عام نیکیوں کی طرح گنتی کے ساتھ نہیں بلکہ بغیر کسی حساب اور حدود کے عطا کیا جاتا ہے۔ آج کا عملی سبق یہ ہے کہ زندگی کی تنگیوں اور آزمائشوں میں ہمت نہ ہاریں بلکہ صبر کا دامن تھامے رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Museebaton par sabr karne ka badla aam nekiyon ki tarah ginti ke sath nahi balkay baghair kisi hisab aur hudood ke ata kiya jata hai. Aaj ka amli sabaq yeh hai ke zindagi ki tangiyon aur aazmaishon mein himmat na harein balkay sabr ka daman thame rahein.",
      en: "Context & Practical Lesson: Patience during hardships carries an immeasurable, boundless reward from the Almighty."
    },
    tags: [
      { ur: "صبر", ro: "Sabr", en: "Patience" },
      { ur: "اجرِ بے حساب", ro: "Ajr-e-Be-Hisab", en: "Boundless Reward" }
    ]
  },
  {
    id: "ma-032",
    slug: "shukr-karoge-to-aur-zyada-nemat-milegi",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ibrahim (14:7) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "شکر گزاری کا انعام: نعمتوں میں اضافہ اور ناشکری پر عذاب",
      ro: "Shukr-Guzari Ka Inaam: Nematon Mein Izafa Aur Nashukri Par Azab",
      en: "Gratitude Brings Increase; Ingratitude Brings Severe Consequences"
    },
    quote: {
      ur: "اور جب تمہارے رب نے خبردار کر دیا کہ اگر تم شکر کرو گے تو میں تمہیں اور زیادہ دوں گا، اور اگر تم ناشکری کرو گے تو میرا عذاب بہت سخت ہے۔",
      ro: "Aur jab tumhare Rab ne khabardar kar diya ke agar tum shukr karo ge to main tumhein aur zyada doonga, aur agar tum nashukri karo ge to mera azab bohot sakht hai.",
      en: "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: شکر صرف زبان سے 'الحمدللہ' کہنے کا نام نہیں، بلکہ دیے گئے وسائل کو اچھے اور جائز کاموں میں استعمال کرنا بھی شکر ہے۔ آج کا عملی سبق یہ ہے کہ اپنی چھوٹی بڑی نعمتوں پر ہمیشہ شکر گزار رہیں تاکہ رزق اور سکون میں برکت ہو۔",
      ro: "Pas-e-Manzar o Tashreeh: Shukr sirf zaban se 'Alhamdulillah' kehne ka naam nahi, balkay diye gaye wasail ko achay aur jaiz kaamon mein istemal karna bhi shukr hai. Aaj ka amli sabaq yeh hai ke apni choti badi nematon par hamesha shukr-guzar rahein taake rizq aur sukoon mein barkat ho.",
      en: "Context & Practical Lesson: True gratitude is expressed through both words and righteous actions, unlocking continuous divine abundance."
    },
    tags: [
      { ur: "شکر گزاری", ro: "Shukr-Guzari", en: "Gratitude" },
      { ur: "برکت", ro: "Barkat", en: "Abundance" }
    ]
  },
  {
    id: "ma-033",
    slug: "taqwa-aur-allah-par-bharosa-rizq-ka-zariya",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah At-Talaq (65:2-3) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تقویٰ اختیار کرنے والے کے لیے غیبی رزق اور آسانیاں",
      ro: "Taqwa Ikhtiyar Karne Wale Ke Liye Ghaibi Rizq Aur Asaniyan",
      en: "Provision from Unexpected Sources for Those with Taqwa"
    },
    quote: {
      ur: "اور جو شخص اللہ سے ڈرے (تقویٰ اختیار کرے) تو اللہ اس کے لیے مشکلات سے نکلنے کا کوئی راستہ پیدا کر دیتا ہے، اور اسے ایسی جگہ سے رزق عطا کرتا ہے جہاں سے اس کا گمان بھی نہیں ہوتا۔",
      ro: "Aur jo shakhs Allah se dare (taqwa ikhtiyar kare) to Allah us ke liye mushkilat se nikalne ka koi rasta paida kar deta hai, aur usay aisi jagah se rizq ata karta hai jahan se us ka guman bhi nahi hota.",
      en: "And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان جب رزق کی تنگی یا پریشانی میں خدا ترسی کا دامن نہیں چھوڑتا اور احکام کی پابندی کرتا ہے، تو اللہ ایسے دروازے کھولتا ہے جن کا انسان تصور بھی نہیں کر سکتا۔ آج کا عملی سبق یہ ہے کہ مشکل حالات میں بھی اصولوں پر سمجھوتہ نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan jab rizq ki tangi ya pareshani mein khuda-tarsi ka daman nahi chorta aur ahkam ki pabandi karta hai, to Allah aise darwaze kholta hai jin ka insan tasawwur bhi nahi kar sakta. Aaj ka amli sabaq yeh hai ke mushkil halaat mein bhi usoolon par samjhota na karein.",
      en: "Context & Practical Lesson: Maintaining moral integrity and God-consciousness during financial trials opens unexpected doors of provision and ease."
    },
    tags: [
      { ur: "تقویٰ اور رزق", ro: "Taqwa o Rizq", en: "Piety & Provision" },
      { ur: "آسانی", ro: "Asani", en: "Ease" }
    ]
  },
  {
    id: "ma-034",
    slug: "posheeda-khairat-aur-ehsan-ka-usool",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 63",
    author: {
      ur: "حضرت عیسیٰ علیہ السلام",
      ro: "Hazrat Isa (A.S)",
      en: "Prophet Jesus (A.S)"
    },
    title: {
      ur: "پوشیدہ صدقہ اور اخلاق کا سنہرا اصول",
      ro: "Posheeda Sadqa Aur Akhlaq Ka Sunehra Usool",
      en: "Secret Charity and the Golden Rule of Morality"
    },
    quote: {
      ur: "جب تو خیرات کرے تو جو تیرا دایاں ہاتھ کرتا ہے اسے تیرا بایاں ہاتھ نہ جانے، اور جو کچھ تم چاہتے ہو کہ لوگ تمہارے ساتھ کریں وہی تم بھی ان کے ساتھ کرو۔",
      ro: "Jab tu khairat kare to jo tera dayan hath karta hai usay tera bayan hath na jane, aur jo kuch tum chahte ho ke log tumhare sath karein wahi tum bhi un ke sath karo.",
      en: "When you give charity, do not let your left hand know what your right hand is doing; and treat others exactly as you wish to be treated by them."
    },
    tashreeh: {
      ur: "ریاکاری اور دکھاوے کی نیکی اللہ کی بارگاہ میں مقبول نہیں ہوتی۔ سچی نیکی وہ ہے جو خاموشی سے کی جائے، اور بہترین اخلاق یہ ہے کہ انسان دوسروں کے لیے وہی رویہ اختیار کرے جو خود اپنے لیے چاہتا ہے۔",
      ro: "Riyakari aur dikhaway ki neki Allah ki bargah mein maqbool nahi hoti. Sachi neki woh hai jo khamoshi se ki jaye, aur behtareen akhlaq yeh hai ke insan doosron ke liye wahi rawaiya ikhtiyar kare jo khud apne liye chahta hai.",
      en: "Virtuous deeds done for public praise lose their spiritual value. True charity is given quietly, and universal morality lies in treating everyone with the fairness we desire for ourselves."
    },
    tags: [
      { ur: "اخلاص", ro: "Ikhlas", en: "Sincerity" },
      { ur: "اخلاقیات", ro: "Akhlaqiyat", en: "Ethics" }
    ]
  },
  {
    id: "ma-035",
    slug: "ibadat-aik-tijarat-aur-taqwa-sarmaya",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 66",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "عبادت کی تجارت اور تقویٰ کا سرمایہ",
      ro: "Ibadat Ki Tijarat Aur Taqwa Ka Sarmaya",
      en: "The Trade of Worship and Capital of Piety"
    },
    quote: {
      ur: "عبادت ایک پیشہ ہے، دکان اس کی خلوت ہے، راس المال اس کا تقویٰ ہے، اور نفع اس کا جنت ہے۔",
      ro: "Ibadat aik pesha hai, dukan us ki khalwat hai, raas-ul-maal us ka taqwa hai, aur nafa us ka Jannat hai.",
      en: "Worship is a noble trade: its shop is solitude, its capital is piety, and its profit is Paradise."
    },
    tashreeh: {
      ur: "جس طرح دنیاوی تجارت کے لیے سرمایہ اور یکسوئی درکار ہوتی ہے، اسی طرح آخرت کی کامیابی کے لیے گناہوں سے بچنا (تقویٰ) اصل پونجی ہے اور تنہائی میں اپنے رب کو یاد کرنا اس نفع بخش تجارت کا مرکز ہے۔",
      ro: "Jis tarah dunyawi tijarat ke liye sarmaya aur yaksoi darkar hoti hai, isi tarah akhirat ki kamyabi ke liye gunahon se bachna (taqwa) asal poonji hai aur tanhai mein apne Rab ko yaad karna is nafa-bakhsh tijarat ka markaz hai.",
      en: "Just as worldly commerce requires capital and focus, spiritual success relies on piety as its core investment and sincere private devotion as its marketplace."
    },
    tags: [
      { ur: "تقویٰ", ro: "Taqwa", en: "Piety" },
      { ur: "عبادت", ro: "Ibadat", en: "Worship" }
    ]
  },
  {
    id: "ma-036",
    slug: "ilm-peghambaron-ki-miras-aur-dil-ki-zindagi",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 67",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "علم پیغمبروں کی میراث اور دل کی زندگی ہے",
      ro: "Ilm Peghambaron Ki Miras Aur Dil Ki Zindagi Hai",
      en: "Knowledge is the Legacy of Prophets and Life of the Heart"
    },
    quote: {
      ur: "علم پیغمبروں کی میراث ہے اور مال کفار (فرعون و قارون وغیرہ) کی۔ دل مردہ ہے اور اس کی زندگی علم ہے، علم بھی مردہ ہے اور اس کی زندگی طلب کرنے سے ہے۔",
      ro: "Ilm Peghambaron ki miras hai aur maal kuffar (Firaun o Qaroon waghaira) ki. Dil murda hai aur us ki zindagi ilm hai, ilm bhi murda hai aur us ki zindagi talab karne se hai.",
      en: "Knowledge is the inheritance of the Prophets, whereas hoarded wealth was the legacy of Pharaoh and Korah. The heart is lifeless without knowledge, and knowledge comes alive through active seeking."
    },
    tashreeh: {
      ur: "علم کے سبب کسی انسان نے خدائی کا دعویٰ نہیں کیا، جبکہ مال کے غرور نے قارون و فرعون کو ہلاک کیا۔ شریف انسان علم پڑھ کر مزید متواضع اور عاجز ہو جاتا ہے۔",
      ro: "Ilm ke sabab kisi insan ne khudai ka dawa nahi kiya, jabkeh maal ke ghuroor ne Qaroon o Firaun ko halak kiya. Shareef insan ilm parh kar mazeed mutawaze aur aajiz ho jata hai.",
      en: "Knowledge nurtures humility in a noble soul, whereas obsession with wealth breeds arrogance. Continuous learning keeps the human heart spiritually awake."
    },
    tags: [
      { ur: "علم", ro: "Ilm", en: "Knowledge" },
      { ur: "تواضع", ro: "Tawazu", en: "Humility" }
    ]
  },
  {
    id: "ma-037",
    slug: "sawal-se-pehle-dena-aur-achi-suhbat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "سوال سے پہلے عطا کرنا اور نیک صحبت کی فضیلت",
      ro: "Sawal Se Pehle Ata Karna Aur Nek Suhbat Ki Fazeelat",
      en: "Giving Before Being Asked and the Virtue of Good Company"
    },
    quote: {
      ur: "بروں کی ہم نشینی سے تنہائی بدرجہا بہتر ہے اور تنہائی سے صلحاء کی صحبت بدرجہا بہتر ہے۔ بخشش سوال کرنے سے پہلے بجا لا، کیونکہ سوال پر دیا تو جتنا دیا اس سے دگنی آبرو اس کی تو نے لے لی۔",
      ro: "Buron ki ham-nashini se tanhai badarjaha behtar hai aur tanhai se sulaha ki suhbat badarjaha behtar hai. Bakhshish sawal karne se pehle baja la, kyunkeh sawal par diya to jitna diya us se dugni aabroo us ki tu ne le li.",
      en: "Solitude is far better than bad company, and the company of the righteous is far better than solitude. Give charity before a needy person has to beg, for making them ask costs them twice as much in self-respect."
    },
    tashreeh: {
      ur: "حقیقی سخاوت یہ ہے کہ ضرورت مند کے ہاتھ پھیلانے سے پہلے ہی اس کی مدد کر دی جائے تاکہ اس کی عزتِ نفس مجروح نہ ہو، اور اپنی اصلاح کے لیے ہمیشہ نیک اور باعمل لوگوں کی صحبت اختیار کی جائے۔",
      ro: "Haqeeqi sakhawat yeh hai ke zaroorat-mand ke hath phailane se pehle hi us ki madad kar di jaye taake us ki izzat-e-nafs majrooh na ho, aur apni islah ke liye hamesha nek aur ba-amal logon ki suhbat ikhtiyar ki jaye.",
      en: "True generosity preserves the dignity of the needy by helping them before they are forced to ask, and personal character flourishes in the company of righteous people."
    },
    tags: [
      { ur: "سخاوت", ro: "Sakhawat", en: "Generosity" },
      { ur: "صحبت", ro: "Suhbat", en: "Company" }
    ]
  },
  {
    id: "ma-038",
    slug: "aaj-ka-kaam-kal-par-na-chhorna-hazrat-umar",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 73",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "عمل کی قوت اور رازداری کی سلامتی",
      ro: "Amal Ki Quwwat Aur Raazdari Ki Salamti",
      en: "Strength in Action and Safety in Discretion"
    },
    quote: {
      ur: "قوت فی العمل یہ ہے کہ آج کے کام کل پر نہ اٹھا رکھے جائیں، اور جو شخص اپنا راز پوشیدہ رکھتا ہے وہ گویا اپنی سلامتی کو اپنے قبضے میں رکھتا ہے۔",
      ro: "Quwwat fil-amal yeh hai ke aaj ke kaam kal par na utha rakhe jayein, aur jo shakhs apna raaz posheeda rakhta hai woh goya apni salamti ko apne qabze mein rakhta hai.",
      en: "True strength in action is never delaying today's work until tomorrow; and whoever guards their own secret holds their safety firmly in their own hands."
    },
    tashreeh: {
      ur: "کامیاب زندگی کا راز وقت کی قدر اور محنت میں پوشیدہ ہے۔ کاموں کو کل پر ٹالنے سے مواقع ضائع ہو جاتے ہیں، اور اپنے ذاتی معاملات و راز ہر ایک پر ظاہر نہ کرنا انسان کو خطرات سے محفوظ رکھتا ہے۔",
      ro: "Kamyab zindagi ka raaz waqt ki qadr aur mehnat mein posheeda hai. Kaamon ko kal par talne se mawaqe zaya ho jate hain, aur apne zaati معاملات o raaz har aik par zahir na karna insan ko khatrat se mehfooz rakhta hai.",
      en: "Productivity depends on acting promptly without procrastination, while guarding personal confidences shields a person from unnecessary vulnerability."
    },
    tags: [
      { ur: "وقت کی قدر", ro: "Waqt Ki Qadr", en: "Time Management" },
      { ur: "رازداری", ro: "Raazdari", en: "Privacy" }
    ]
  },
  {
    id: "ma-039",
    slug: "mohabbat-barhane-wali-teen-baatein",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 73",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "محبت بڑھانے کے تین سنہرے اصول",
      ro: "Mohabbat Barhane Ke Teen Sunehray Usool",
      en: "Three Golden Ways to Increase Mutual Love"
    },
    quote: {
      ur: "تین چیزیں محبت بڑھانے کا ذریعہ ہیں: سلام کرنا، دوسروں کے لیے مجلس میں جگہ خالی کرنا، اور مخاطب کو بہترین نام سے پکارنا۔",
      ro: "Teen cheezein mohabbat barhane ka zariya hain: salam karna, doosron ke liye majlis mein jagah khali karna, aur mukhatib ko behtareen naam se pukarna.",
      en: "Three habits foster mutual affection: initiating the greeting of peace, making room for others in a gathering, and addressing people by the names they love best."
    },
    tashreeh: {
      ur: "معاشرتی زندگی میں دل جیتنے کے لیے بڑے خرچ کی نہیں بلکہ احترام دینے کی ضرورت ہوتی ہے۔ سلام میں پہل کرنا، محفل میں عزت سے بٹھانا اور اچھے القاب سے بلانا دلوں کی کدورت مٹا دیتا ہے۔",
      ro: "Muasharti zindagi mein dil jeetne ke liye bade kharch ki nahi balkay ehtiram dene ki zaroorat hoti hai. Salam mein pehal karna, mehfil mein izzat se bithana aur achay alqab se bulana dilon ki kudoorat mita deta hai.",
      en: "Winning hearts in society requires respect rather than wealth. Warm greetings, welcoming gestures in gatherings, and respectful titles build lasting bonds."
    },
    tags: [
      { ur: "آدابِ معاشرت", ro: "Aadab-e-Muasharat", en: "Social Etiquette" },
      { ur: "محبت", ro: "Mohabbat", en: "Affection" }
    ]
  },
  {
    id: "ma-040",
    slug: "nek-khulq-aadhi-aqal-aur-husn-e-tadbeer",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 74 & 79",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "نیک اخلاق، حسنِ تدبیر اور انسان کی اصل پرکھ",
      ro: "Nek Akhlaq, Husn-e-Tadbeer Aur Insan Ki Asal Parakh",
      en: "Good Manners, Wise Planning, and True Character"
    },
    quote: {
      ur: "لوگوں کے ساتھ نیک خلق آدھی عقل ہے، حسنِ سوال نصف علم ہے، اور حسنِ تدبیر نصف معیشت ہے۔ آدمی کا صرف نماز روزہ نہیں بلکہ اس کی خوش معاملگی، ہمدردی اور راست بازی کو دیکھنا چاہیے۔",
      ro: "Logon ke sath nek khulq aadhi aqal hai, husn-e-sawal nisf ilm hai, aur husn-e-tadbeer nisf maeeshat hai. Aadmi ka sirf namaz roza nahi balkay us ki khush-muamalgi, hamdardi aur rast-bazi ko dekhna chahiye.",
      en: "Good manners with people is half of wisdom, asking the right question is half of knowledge, and sound planning is half of livelihood. Judge a person not merely by outward rituals, but by their fair dealings, empathy, and honesty."
    },
    tashreeh: {
      ur: "انسان کی دانائی اس کے اچھے برتاؤ اور منظم معاشی منصوبہ بندی سے ظاہر ہوتی ہے۔ کسی شخص کی دینداری کا اصل معیار یہ ہے کہ وہ لین دین، سفر اور کاروبار میں کتنا کھرا اور دیانت دار ہے۔",
      ro: "Insan ki danai us ke achay bartao aur munazzam maashi mansooba-bandi se zahir hoti hai. Kisi shakhs ki deendari ka asal miyar yeh hai ke woh lain dain, safar aur karobar mein kitna khara aur diyanat-dar hai.",
      en: "True wisdom reflects in polite conduct and disciplined financial management, while genuine piety is proven through honesty in business and daily transactions."
    },
    tags: [
      { ur: "خوش معاملگی", ro: "Khush Muamalgi", en: "Fair Dealing" },
      { ur: "تدبیر", ro: "Tadbeer", en: "Planning" }
    ]
  },
  {
    id: "ma-041",
    slug: "zaban-ki-laghzish-aur-gusse-ka-ilaj-khamoshi",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 84",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "زبان کی لغزش اور غصے کا بہترین علاج",
      ro: "Zaban Ki Laghzish Aur Gusse Ka Behtareen Ilaj",
      en: "The Slip of the Tongue and the Cure for Anger"
    },
    quote: {
      ur: "زبان کی لغزش پاؤں کی لغزش سے بہت زیادہ خطرناک ہے، اور خاموشی غصے کا بہترین علاج ہے۔ تلوار کا زخم جسم پر ہوتا ہے اور بری گفتار کا روح پر۔",
      ro: "Zaban ki laghzish paon ki laghzish se bohot zyada khatarnaak hai, aur khamoshi gusse ka behtareen ilaj hai. Talwar ka zakhm jism par hota hai aur buri guftar ka rooh par.",
      en: "A slip of the tongue is far more dangerous than a slip of the foot, and silence is the finest remedy for anger. The wound of a sword strikes the body, but harsh speech wounds the soul."
    },
    tashreeh: {
      ur: "جسمانی چوٹ وقت کے ساتھ مندمل ہو جاتی ہے لیکن کڑوے الفاظ کا زخم روح اور دل پر گہرا نشان چھوڑ جاتا ہے۔ اس لیے غصے کے وقت خاموش ہو جانا بڑی ندامت سے بچا لیتا ہے۔",
      ro: "Jismani chot waqt ke sath mundamil ho jati hai lekin karway alfaz ka zakhm rooh aur dil par gehra nishan chhor jata hai. Is liye gusse ke waqt khamosh ho jana badi nadamat se bacha leta hai.",
      en: "Physical injuries heal with time, but hurtful words leave deep scars on the heart. Choosing silence in moments of anger prevents lifelong regret."
    },
    tags: [
      { ur: "خاموشی", ro: "Khamoshi", en: "Silence" },
      { ur: "زبان", ro: "Zaban", en: "Speech" }
    ]
  },
  {
    id: "ma-042",
    slug: "maal-ilm-aur-ikhlas-ka-phal",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 85",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "مال، علم اور اخلاص کا حقیقی پھل",
      ro: "Maal, Ilm Aur Ikhlas Ka Haqeeqi Phal",
      en: "The True Fruit of Wealth, Knowledge, and Sincerity"
    },
    quote: {
      ur: "سخاوت پھل ہے مال کا، اعمال پھل ہیں علم کا، اور خوشنودیِ الٰہی پھل ہے اخلاص کا۔ اس نے اللہ تعالیٰ کا حق نہیں جانا جس نے لوگوں کا حق نہیں پہچانا۔",
      ro: "Sakhawat phal hai maal ka, aamaal phal hain ilm ka, aur khushnoodi-e-Ilahi phal hai ikhlas ka. Us ne Allah Ta'ala ka haq nahi jana jis ne logon ka haq nahi pehchana.",
      en: "Generosity is the fruit of wealth, righteous action is the fruit of knowledge, and Divine pleasure is the fruit of sincerity. One who fails to recognize the rights of people has not truly recognized the right of God."
    },
    tashreeh: {
      ur: "مال کی خوبصورتی اس سے مخلوق کی مدد کرنے میں ہے اور علم کا فائدہ اس پر عمل کرنے میں ہے۔ جو شخص بندوں کے حقوق تلف کرتا ہے وہ عبادت کا حقیقی مقصد نہیں پا سکتا۔",
      ro: "Maal ki khoobsurti us se makhlooq ki madad karne mein hai aur ilm ka faida us par amal karne mein hai. Jo shakhs bandon ke huqooq talaf karta hai woh ibadat ka haqeeqi maqsad nahi pa sakta.",
      en: "Wealth finds meaning when shared generously, and knowledge bears fruit only when practiced. Fulfilling the rights of fellow humans is inseparable from honoring God."
    },
    tags: [
      { ur: "اخلاص", ro: "Ikhlas", en: "Sincerity" },
      { ur: "عمل", ro: "Amal", en: "Action" }
    ]
  },
  {
    id: "ma-043",
    slug: "khanda-roi-pehli-neki-aur-maafi-behtareen-intiqam",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 88-89",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "خندہ روئی، توبہ اور معافی کی عظمت",
      ro: "Khanda-Roi, Tauba Aur Maafi Ki Azmat",
      en: "Cheerfulness, Repentance, and the Nobility of Forgiveness"
    },
    quote: {
      ur: "خندہ روئی سے پیش آنا سب سے پہلی نیکی ہے، گناہوں پر نادم ہونا ان کو مٹا دیتا ہے اور نیکیوں پر مغرور ہونا ان کو برباد کر دیتا ہے۔ جلدی سے معاف کرنا انتہائے شرافت ہے اور معافی نہایت اچھا انتقام ہے۔",
      ro: "Khanda-roi se pesh aana sab se pehli neki hai, gunahon par nadim hona un ko mita deta hai aur nekiyon par maghroor hona un ko barbad kar deta hai. Jaldi se maaf karna intiha-e-sharafat hai aur maafi nihayat acha intiqam hai.",
      en: "Meeting people with a cheerful face is the very first virtue; remorse over sins erases them, while pride over good deeds destroys them. Quick forgiveness is the pinnacle of nobility and the finest form of victory."
    },
    tashreeh: {
      ur: "نیکی کر کے تکبر میں مبتلا ہونا سارے عمل کو ضائع کر دیتا ہے، جبکہ غلطی پر شرمندہ ہونا بخشش کا دروازہ کھولتا ہے۔ طاقت ہوتے ہوئے درگزر کر دینا انسان کے اعلیٰ ظرف کا ثبوت ہے۔",
      ro: "Neki kar ke takabbur mein mubtala hona saray amal ko zaya kar deta hai, jabkeh ghalti par sharminda hona bakhshish ka darwaza kholta hai. Taqat hote huye darguzar kar dena insan ke aala zarf ka suboot hai.",
      en: "Arrogance ruins righteous deeds while sincere remorse washes away faults. Forgiving others from a position of strength is the ultimate sign of a noble character."
    },
    tags: [
      { ur: "عفو و درگزر", ro: "Afw-o-Darguzar", en: "Forgiveness" },
      { ur: "شرافت", ro: "Sharafat", en: "Nobility" }
    ]
  },
  {
    id: "ma-044",
    slug: "baat-ka-malik-aur-ehsan-chhupane-ka-usool",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 89-90",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "الفاظ پر قابو اور احسان کرنے کا ادب",
      ro: "Alfaz Par Qaboo Aur Ehsan Karne Ka Adab",
      en: "Mastery Over Words and the Etiquette of Kindness"
    },
    quote: {
      ur: "جب تک کوئی بات تیرے منہ میں بند ہے تب تک تو اس کا مالک ہے، جب زبان سے نکال چکے تو وہ تیری مالک ہے۔ اگر تو کسی کے ساتھ احسان کرے تو اس کو مخفی رکھ، اور جب تیرے ساتھ کوئی احسان کرے تو اس کو ظاہر کر۔",
      ro: "Jab tak koi baat tere munh mein band hai tab tak tu us ka malik hai, jab zaban se nikal chuke to woh teri malik hai. Agar tu kisi ke sath ehsan kare to us ko makhfi rakh, aur jab tere sath koi ehsan kare to us ko zahir kar.",
      en: "As long as a word remains unspoken, you are its master; once uttered, it becomes your master. When you do a favor to someone, conceal it; and when someone does a favor to you, acknowledge it openly."
    },
    tashreeh: {
      ur: "کمان سے نکلا تیر اور زبان سے نکلی بات واپس نہیں آتے، اس لیے گفتگو میں احتیاط لازم ہے۔ اسی طرح اپنی نیکی کو بھول جانا اور دوسروں کے احسان کی قدر کرنا اعلیٰ اخلاق کی نشانی ہے۔",
      ro: "Kaman se nikla teer aur zaban se nikli baat wapis nahi aate, is liye guftugu mein ehtiyat lazim hai. Isi tarah apni neki ko bhool jana aur doosron ke ehsan ki qadr karna aala akhlaq ki nishani hai.",
      en: "Spoken words cannot be taken back, demanding mindfulness before speech. Likewise, forgetting one's own favors while cherishing the kindness of others defines true gratitude."
    },
    tags: [
      { ur: "گفتگو", ro: "Guftugu", en: "Speech" },
      { ur: "احسان", ro: "Ehsan", en: "Gratitude" }
    ]
  },
  {
    id: "ma-045",
    slug: "aqal-ki-zakat-aur-la-aalam-kehna-nisf-ilm",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 93",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "عقل کی زکوٰۃ اور لاعلمی کے اعتراف کی دانائی",
      ro: "Aqal Ki Zakat Aur La-Ilmi Ke Aitraf Ki Danai",
      en: "The Charity of Intellect and the Wisdom of Admitting Ignorance"
    },
    quote: {
      ur: "ہر ایک چیز کے لیے زکوٰۃ ہے اور عقل کی زکوٰۃ نادانوں کی باتوں پر تحمل کرنا ہے۔ اگر کسی سوال کا جواب معلوم نہ ہو تو 'لا اعلم' (میں نہیں جانتا) کہنا نصف علم ہے۔",
      ro: "Har aik cheez ke liye zakat hai aur aqal ki zakat nadanon ki baaton par tahammul karna hai. Agar kisi sawal ka jawab maloom na ho to 'La A'lam' (main nahi janta) kehna nisf ilm hai.",
      en: "Everything has a due charity, and the charity of intellect is bearing patiently with the ignorant. When you do not know the answer to a question, saying 'I do not know' is half of knowledge."
    },
    tashreeh: {
      ur: "عاقل انسان نادانوں سے الجھنے کے بجائے بردباری سے کام لیتا ہے، اور جس بات کا علم نہ ہو اس میں غلط رائے دینے کے بجائے صاف گوئی سے لاعلمی کا اقرار کرنا علم کے احترام کی دلیل ہے۔",
      ro: "Aaqil insan nadanon se ulajhne ke bajaye burdbari se kaam leta hai, aur jis baat ka ilm na ho us mein ghalat raaye dene ke bajaye saaf-goi se la-ilmi ka iqrar karna ilm ke ehtiram ki daleel hai.",
      en: "A wise person exercises patience when dealing with foolishness, and openly admitting when one does not know protects both oneself and others from error."
    },
    tags: [
      { ur: "تحمل", ro: "Tahammul", en: "Patience" },
      { ur: "علم و دانش", ro: "Ilm-o-Danish", en: "Wisdom" }
    ]
  }
];

export const batch4Quotes: QuoteItem[] = [
  {
    id: "ma-046",
    slug: "insan-ghare-khasar-mein-hai-siwaye-eman-aur-sabr-walo-ke",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Asr (103:1-3) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "زمانے کی قسم: انسان خسارے میں ہے سوائے اہل ِایمان اور عملِ صالح کے",
      ro: "Zamanay Ki Qasam: Insan Khasaray Mein Hai Siwaye Ahl-e-Eman Aur Amal-e-Saleh Ke",
      en: "By Time, Mankind is in Loss Except the Righteous"
    },
    quote: {
      ur: "زمانے کی قسم! بے شک انسان سراسر خسارے میں ہے، سوائے ان لوگوں کے جو ایمان لائے اور انہوں نے نیک اعمال کیے اور آپس میں حق کی وصیت کی اور ایک دوسرے کو صبر کی تلقین کی۔",
      ro: "Zamanay ki qasam! Be-shak insan sarasar khasaray mein hai, siwaye un logon ke jo eman laye aur unhon ne nek aamal kiye aur aapas mein haq ki wasiyat ki aur aik doosre ko sabr ki talqeen ki.",
      en: "By time, indeed, mankind is in loss, Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: وقت تیزی سے گزر رہا ہے اور انسان کی زندگی گھٹ رہی ہے۔ حقیقی کامیابی صرف چار چیزوں میں ہے: پکا ایمان، اچھے اعمال، حق بات پر ڈٹ جانا اور مشکلات میں صبر کی تلقین کرنا۔ آج کا عملی سبق یہ ہے کہ اپنے وقت کو ضائع ہونے سے بچائیں اور نیکی و حق کی دعوت عام کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Waqt tezi se guzar raha hai aur insan ki zindagi ghat rahi hai. Haqeeqi kamyabi sirf chaar cheezon mein hai: pakka eman, achay aamal, haq baat par dat jana aur mushkilat mein sabr ki talqeen karna. Aaj ka amli sabaq yeh hai ke apne waqt ko zaya hone se bachayein aur neki o haq ki dawat aam karein.",
      en: "Context & Practical Lesson: Time slips away quickly; true success belongs exclusively to those anchored in faith, good deeds, mutual truth, and perseverance."
    },
    tags: [
      { ur: "قدرِ وقت", ro: "Qadr-e-Waqt", en: "Value of Time" },
      { ur: "حق و صبر", ro: "Haq o Sabr", en: "Truth & Patience" }
    ]
  },
  {
    id: "ma-047",
    slug: "adal-ihsan-aur-bad-behavi-ki-mumanat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nahl (16:90) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "عدل، احسان اور قریبی رشتہ داروں کی مدد کا جامع حکم",
      ro: "Adal, Ihsan Aur Qareebi Rishtedaron Ki Madad Ka Jame Hukm",
      en: "Comprehensive Command for Justice, Benevolence, and Helping Kin"
    },
    quote: {
      ur: "بے شک اللہ عدل کا، احسان کا اور قرابت داروں کو (ان کا حق) دینے کا حکم دیتا ہے، اور بے حیائی، برے کاموں اور سرکشی سے منع کرتا ہے؛ وہ تمہیں نصیحت کرتا ہے تاکہ تم دھیان رکھو۔",
      ro: "Be-shak Allah adal ka, ihsan ka aur qarabat-daron ko (un ka haq) dene ka hukm deta hai, aur be-hayaai, buray kaamon aur sarkashi se mana karta hai; woh tumhein nasihat karta hai taake tum dhyan rakhein.",
      en: "Indeed, Allah orders justice and good conduct and giving to relatives and forbids immorality and bad conduct and oppression. He admonishes you that perhaps you will be reminded."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن مجید کی یہ جامع ترین آیت ہے جسے خطبات جمعہ میں تلاوت کیا جاتا ہے۔ اس میں معاشرے کی بقا کے تمام اخلاقی اصول (عدل، احسان، صلہ رحمی) اور برائیوں کی سختی سے ممانعت موجود ہے۔ آج کا عملی سبق یہ ہے کہ اپنے روزمرہ معاملات میں ان اصولوں کو نافذ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran Majeed ki yeh jame-tareen aayat hai jisay khutbat-e-jumuma mein tilawat kiya jata hai. Is mein muashray ki baqa ke tamam akhlaqi usool (adal, ihsan, sila-rehmi) aur buraiyon ki sakhti se mumaniat mojood hai. Aaj ka amli sabaq yeh hai ke apne rozmarra muamlat mein in usoolon ko naafiz karein.",
      en: "Context & Practical Lesson: This verse serves as a master blueprint for human society, summarizing the highest ethical standards of justice, kindness, and moral purity."
    },
    tags: [
      { ur: "عدل و احسان", ro: "Adal o Ihsan", en: "Justice & Kindness" },
      { ur: "اخلاقی ضابطہ", ro: "Akhlaqi Zabita", en: "Ethical Code" }
    ]
  },
  {
    id: "ma-048",
    slug: "zikr-e-ilahi-se-dilon-ka-sukoon",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ar-Ra'd (13:28) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "دلوں کا حقیقی سکون صرف اللہ کی یاد اور ذکر میں ہے",
      ro: "Dilon Ka Haqeeqi Sukoon Sirf Allah Ki Yaad Aur Zikr Mein Hai",
      en: "True Tranquility of the Heart is Found in the Remembrance of God"
    },
    quote: {
      ur: "جو لوگ ایمان لائے اور ان کے دلوں کو اللہ کے ذکر سے اطمینان نصیب ہوتا ہے؛ یاد رکھو کہ اللہ ہی کے ذکر سے دلوں کو سکون ملتا ہے۔",
      ro: "Jo log eman laye aur un ke dilon ko Allah ke zikr se itminan naseeb hota hai; yaad rakho ke Allah hi ke zikr se dilon ko sukoon milta hai.",
      en: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان دولت، شہرت اور مادی وسائل کے پیچھے بھاگتا ہے تاکہ اسے ذہنی سکون مل سکے، مگر حقیقی اور پائیدار سکون صرف اور صرف اللہ کی یاد اور اس کے ذکر سے ہی حاصل ہوتا ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ تلاوت اور اذکار کے لیے وقت نکالیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan daulat, shohrat aur maadi wasail ke peechay bhagta hai taake usay zehni sukoon mil sake, magar haqeeqi aur paidar sukoon sirf aur sirf Allah ki yaad aur us ke zikr se hi hasil hota hai. Aaj ka amli sabaq yeh hai ke rozana tilawat aur azkar ke liye waqt nikalein.",
      en: "Context & Practical Lesson: While worldly success offers temporary comfort, enduring inner peace is exclusively attained through spiritual connection and remembrance of God."
    },
    tags: [
      { ur: "ذکرِ الٰہی", ro: "Zikr-e-Ilahi", en: "Remembrance of God" },
      { ur: "قلبی سکون", ro: "Qalbi Sukoon", en: "Inner Peace" }
    ]
  },
  {
    id: "ma-049",
    slug: "ilm-o-akhlaq-ki-bulandi",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 426",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "علم اور اخلاق کا باہمی رشتہ",
      ro: "Ilm Aur Akhlaq Ka Bahami Rishta",
      en: "The Interconnection Between Knowledge and Morality"
    },
    quote: {
      ur: "علم بغیر عمل کے ایسا ہے جیسے پھل کے بغیر درخت، اور اخلاق کے بغیر علم انسان کو تکبر کے اندھیرے میں دھکیل دیتا ہے۔",
      ro: "Ilm baghair amal ke aisa hai jaise phal ke baghair darakht, aur akhlaq ke baghair ilm insan ko takabbur ke andheray mein dhakel deta hai.",
      en: "Knowledge without action is like a tree without fruit, and knowledge without good character pushes a person into the darkness of arrogance."
    },
    tashreeh: {
      ur: "علم کی اصل معراج اس پر عمل کرنا اور اچھے اخلاق سے آراستہ ہونا ہے۔ جب تک علم انسان کو عاجز نہ بنائے، وہ بوجھ بن جاتا ہے۔",
      ro: "Ilm ki asal meraj us par amal karna aur achay akhlaq se aarasta hona hai. Jab tak ilm insan ko aajiz na banaye, woh bojh ban jata hai.",
      en: "The true height of knowledge is practiced virtue and refined character. Until knowledge breeds humility, it remains a burden."
    },
    tags: [
      { ur: "علم", ro: "Ilm", en: "Knowledge" },
      { ur: "عمل", ro: "Amal", en: "Practice" }
    ]
  },
  {
    id: "ma-050",
    slug: "qadr-o-qeemat-waqt-ki",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 532",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "وقت کی قدر اور قیمتی لمحات",
      ro: "Waqt Ki Qadr Aur Qeemati Lamhat",
      en: "Valuing Time and Precious Moments"
    },
    quote: {
      ur: "وقت تلوار کی مانند ہے، اگر تم اسے نہیں کاٹو گے تو وہ تمہیں کاٹ ڈالے گا۔ گزرا ہوا وقت دنیا کا سارا خزانہ دے کر بھی واپس نہیں خریدا جا سکتا۔",
      ro: "Waqt talwar ki maanind hai, agar tum usay nahi kato ge to woh tumhein kaat daale ga. Guzra huwa waqt duniya ka sara khazana de kar bhi wapis nahi khareeda ja sakta.",
      en: "Time is like a sword; if you do not cut with it, it will cut you. Past time can never be bought back, even with all the treasures of the world."
    },
    tashreeh: {
      ur: "زندگی کا ہر لمحہ انمول سرمایا ہے۔ جو لوگ اپنے وقت کو ضائع کرتے ہیں وہ حقیقت میں اپنی زندگی کو برباد کر رہے ہوتے ہیں۔",
      ro: "Zindagi ka har lamha anmol sarmaya hai. Jo log apne waqt ko zaya karte hain woh haqeeqat mein apni zindagi ko barbad kar rahe hote hain.",
      en: "Every moment of life is priceless capital. Those who waste their time are essentially squandering their very existence."
    },
    tags: [
      { ur: "وقت", ro: "Waqt", en: "Time Management" },
      { ur: "زندگی", ro: "Zindagi", en: "Life" }
    ]
  },
  {
    id: "ma-051",
    slug: "iyadat-ke-adab-aur-mareez-ki-diljoi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sunan Ibn Majah (1441) & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "عیادت کے آداب: مریض کے پاس مختصر قیام اور دعا کی درخواست",
      ro: "Iyadat Ke Adab: Mareez Ke Paas Mukhtasar Qiyam Aur Dua Ki Darkhwast",
      en: "Etiquette of Visiting the Sick: Brevity, Comfort, and Seeking Prayers"
    },
    quote: {
      ur: "جب تم کسی بیمار کی عیادت کے لیے جاؤ تو اس کے پاس بیٹھنے میں اختصار کرو تاکہ اسے تکلیف نہ ہو، اس کی دلجوئی اور حوصلہ افزائی کرو، اور اس سے اپنے لیے دعا کی درخواست کرو کیونکہ بیمار کی دعا فرشتوں کی دعا کی طرح مقبول ہوتی ہے۔",
      ro: "Jab tum kisi bimar ki iyadat ke liye jao to us ke paas baithne mein ikhtisar karo taake usay takleef na ho, us ki diljoi aur hosla-afzai karo, aur us se apne liye dua ki darkhwast karo kyunkeh bimar ki dua farishton ki dua ki tarah maqbool hoti hai.",
      en: "When you visit a sick person, keep your stay brief so as not to burden them, comfort and encourage their heart, and ask them to pray for you, for the supplication of a patient is answered like that of the angels."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بیمار پرسی کا مقصد مریض کا دل بہلانا اور بوجھ ہلکا کرنا ہوتا ہے، نہ کہ گھنٹوں بیٹھ کر یا خوفناک بیماریوں کے قصے سنا کر اسے مزید تھکا دینا۔ سنتِ نبوی ﷺ ہمیں بتاتی ہے کہ بیمار کے قریب جا کر محبت سے حال پوچھیں اور امید دلائیں۔ آج کا عملی سبق یہ ہے کہ ہسپتال یا گھر میں کسی بیمار کی عیادت کریں تو صرف چند منٹ رک کر محبت اور دعا کے ساتھ اجازت لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bimar-pursi ka maqsad mareez ka dil behlana aur bojh halka karna hota hai, na ke ghanton baith kar ya khaufnak bimariyon ke qissay suna kar usay mazeed thaka dena. Sunnat-e-Nabawi ﷺ hamein batati hai ke bimar ke qareeb ja kar muhabbat se haal poochein aur umeed dilayein. Aaj ka amli sabaq yeh hai ke hospital ya ghar mein kisi bimar ki iyadat karein to sirf chand minute ruk kar muhabbat aur dua ke sath ijazat lein.",
      en: "Context & Practical Lesson: Visiting the sick is meant to uplift their spirit, not exhaust them with lengthy stays or grim anecdotes. Keep hospital and home visits brief, gentle, and reassuring."
    },
    tags: [
      { ur: "عیادت کے آداب", ro: "Iyadat Ke Adab", en: "Visiting the Sick" },
      { ur: "ہمدردی", ro: "Hamdardi", en: "Compassion" }
    ]
  },
  {
    id: "ma-052",
    slug: "halal-aur-pakeeza-nawalay-ki-taseer-aur-amal-e-salih",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Mu'minun (23:51) & Sahih Muslim",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "حلال نوالے کی تاثیر: پاکیزہ رزق اور نیک اعمال کا گہرا رشتہ",
      ro: "Halal Nawalay Ki Taseer: Pakeeza Rizq Aur Nek Aamaal Ka Gehra Rishta",
      en: "The Power of a Lawful Morsel: Pure Sustenance and Righteous Action"
    },
    quote: {
      ur: "اے پیغمبرو! پاکیزہ اور حلال چیزیں کھاؤ اور نیک عمل کرو؛ بے شک میں ان تمام کاموں سے خوب واقف ہوں جو تم کرتے ہو۔",
      ro: "Aye Paighambaro! Pakeeza aur halal cheezein khao aur nek amal karo; be-shak Main un tamam kaamon se khoob waqif hoon jo tum karte ho.",
      en: "O Messengers, eat from the good and lawful foods and work righteousness. Indeed, I am fully Knowing of what you do."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اللہ تعالیٰ نے اس آیت میں حلال رزق کو نیک عمل سے پہلے ذکر فرمایا ہے، کیونکہ حلال نوالہ دل میں نور، عبادت میں لذت اور دعاؤں میں قبولیت کی تاثیر پیدا کرتا ہے؛ جبکہ حرام کمائی دل کو سخت اور دعا کو مردود بنا دیتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دسترخوان پر آنے والے ہر لقمے کی تحقیق کریں کہ آیا وہ دیانت داری اور حلال کمائی سے آیا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Allah Ta'ala ne is ayat mein halal rizq ko nek amal se pehle zikr farmaya hai, kyunkeh halal nawala dil mein noor, ibadat mein lazzat aur duaon mein qubooliyat ki taseer paida karta hai; jabkeh haram kamai dil ko sakht aur dua ko mardood bana deti hai. Aaj ka amli sabaq yeh hai ke apne dastarkhwan par aane wale har luqmay ki tehqeeq karein ke aaya woh diyanat-dari aur halal kamai se aaya hai.",
      en: "Context & Practical Lesson: Placing lawful nourishment before righteous deeds shows that pure income fuels spiritual vitality and answered prayers, whereas unlawful earnings harden the heart."
    },
    tags: [
      { ur: "حلال رزق", ro: "Halal Rizq", en: "Lawful Sustenance" },
      { ur: "قبولیتِ دعا", ro: "Qubooliyat-e-Dua", en: "Accepted Prayer" }
    ]
  },
  {
    id: "ma-053",
    slug: "haq-goi-aur-behtareen-jihad",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ظالم حاکم کے سامنے حق بات کہنا",
      ro: "Zalim Hakim Ke Samne Haq Baat Kehna",
      en: "Speaking Truth Before an Oppressive Ruler"
    },
    quote: {
      ur: "بہت بڑا جہاد یہ ہے کہ انصاف کی بات ظالم حاکم یا جبار کے روبرو کہی جائے۔",
      ro: "Bohot bada jihad yeh hai ke insaf ki baat zalim hakim ya jabbar ke ro-baru kahi jaye.",
      en: "The greatest form of struggle is speaking a word of justice in the presence of an oppressive ruler."
    },
    tashreeh: {
      ur: "خوف یا مصلحت کی وجہ سے سچ چھپا دینا معاشرے کو تباہ کر دیتا ہے۔ ظلم کے سامنے ڈٹ کر حق بیان کرنا بلند ترین جرات کا کام ہے۔",
      ro: "Khouf ya maslehat ki wajah se sach chhupa dena muashray ko tabaah kar deta hai. Zulm ke samne dat kar haq bayan karna buland-tareen jurrat ka kaam hai.",
      en: "Hiding the truth out of fear or convenience destroys society. Standing firm against injustice to speak the truth requires the highest courage."
    },
    tags: [
      { ur: "حق گوئی", ro: "Haq-Goi", en: "Speaking Truth" },
      { ur: "عدل", ro: "Adal", en: "Justice" }
    ]
  },
  {
    id: "ma-054",
    slug: "tauba-gunahon-ka-kafara",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 8",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سچی توبہ اور رحمتِ الٰہی",
      ro: "Sachi Tauba Aur Rehmat-e-Ilahi",
      en: "Sincere Repentance and Divine Mercy"
    },
    quote: {
      ur: "اللہ تعالیٰ توبہ قبول کرتا ہے مگر انہی لوگوں کی جو نادانی سے کوئی بری حرکت کر بیٹھتے ہیں اور جلدی سے توبہ کر لیتے ہیں۔",
      ro: "Allah Ta'ala tauba qubool karta hai magar unhi logon ki jo nadani se koi buri harkat kar baithte hain aur jaldi se tauba kar lete hain.",
      en: "Allah accepts repentance only from those who commit evil out of ignorance and then repent shortly afterward."
    },
    tashreeh: {
      ur: "انسان خطا کا پتلا ہے۔ اگر نادانی میں کوئی گناہ سرزد ہو جائے تو فوراً ندامت کے ساتھ پلٹ آنا ہی سچے مومن کی شان ہے۔",
      ro: "Insan khata ka putla hai. Agar nadani mein koi gunah sarzad ho jaye to foran nadamat ke sath palat aana hi sache momin ki shaan hai.",
      en: "To err is human. When a mistake is made out of weakness, rushing back to God with sincere remorse is the hallmark of a true believer."
    },
    tags: [
      { ur: "توبہ", ro: "Tauba", en: "Repentance" },
      { ur: "مغفرت", ro: "Maghfirat", en: "Forgiveness" }
    ]
  },
  {
    id: "ma-055",
    slug: "ma-ki-qadra-o-khidmat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 28",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ماں کے قدموں تلے جنت",
      ro: "Maa Ke Qadmon Talay Jannat",
      en: "Paradise Lies Beneath the Feet of Mothers"
    },
    quote: {
      ur: "ماں کی خدمت اور فرماں برداری کرو کیونکہ جنت اسی کے قدموں کے نیچے ہے۔",
      ro: "Maa ki khidmat aur farman-bardari karo kyunkeh Jannat usi ke qadmon ke neechay hai.",
      en: "Serve and obey your mother, for Paradise lies right beneath her feet."
    },
    tashreeh: {
      ur: "اولاد کی پرورش میں ماں جو تکالیف اٹھاتی ہے اس کا بدلہ کوئی نہیں چکاسکتا۔ ماں کی خدمت اور اس کی رضا جوئی دنیا و آخرت میں کامیابی کی ضمانت ہے۔",
      ro: "Aulad ki parwarish mein maa jo takaleef uthati hai us ka badla koi nahi chuka sakta. Maa ki khidmat aur us ki raza-jooi duniya-o-akhirat mein kamiyabi ki zamanat hai.",
      en: "The immense sacrifices a mother makes can never be fully repaid. Serving her with devotion guarantees success in both worlds."
    },
    tags: [
      { ur: "ماں", ro: "Maa", en: "Mother" },
      { ur: "خدمت", ro: "Khidmat", en: "Service" }
    ]
  },
  {
    id: "ma-056",
    slug: "rizq-ki-talash-aur-tawakkul",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 119",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حلال رزق کے لیے محنت اور توکل",
      ro: "Halal Rizq Ke Liye Mehnat Aur Tawakkul",
      en: "Labor for Lawful Sustenance and Trust in God"
    },
    quote: {
      ur: "اپنے ہاتھوں کی کمائی سے کھانا کسی بھی دوسری خیرات اور مانگنے سے ہزار درجہ بہتر ہے۔ ہاتھ کی محنت اللہ کی محبوب ترین عبادت ہے۔",
      ro: "Apne hathon ki kamai se khana kisi bhi doosri khairat aur mangne se hazar darja behtar hai. Hath ki mehnat Allah ki mehboob tareen ibadat hai.",
      en: "Eating from the earnings of your own hands is a thousand times better than begging or charity. Physical labor is among the most beloved forms of worship to Allah."
    },
    tashreeh: {
      ur: "اسلام نے ہاتھ کی محنت اور مزدوری کو عظمت بخشی ہے۔ پرسکون اور باوقار زندگی کا راز حلال محنت میں پوشیدہ ہے۔",
      ro: "Islam ne hath ki mehnat aur mazdoori ko azmat bakshi hai. Pur-sukoon aur ba-waqar zindagi ka raaz halal mehnat mein posheeda hai.",
      en: "Islam honors physical labor and honest work. A dignified and peaceful life is built upon the foundation of lawful toil."
    },
    tags: [
      { ur: "محنت", ro: "Mehnat", en: "Labor" },
      { ur: "رزقِ حلال", ro: "Rizq-e-Halal", en: "Lawful Sustenance" }
    ]
  },
  {
    id: "ma-057",
    slug: "safar-ke-adab-aur-ahle-khana-ki-taraf-jald-wapsi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari (1804) & Sunan Tirmidhi (3443)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "سفر کے آداب: دعا، رفقاء کا خیال اور اہلِ خانہ کی طرف جلد واپسی",
      ro: "Safar Ke Adab: Dua, Rufaqa Ka Khayal Aur Ahl-e-Khana Ki Taraf Jald Wapsi",
      en: "Etiquette of Travel: Farewell Prayers, Care for Companions, and Swift Return"
    },
    quote: {
      ur: "سفر مشقت اور عذاب کا ایک ٹکڑا ہے جو انسان کو کھانے، پینے اور آرام سے روک دیتا ہے؛ لہٰذا جب تم میں سے کوئی اپنے سفر کی حاجت اور کام پورا کر لے تو فوراً اپنے اہلِ خانہ کے پاس لوٹ آئے اور راستے میں اپنے ہم سفروں کے ساتھ نرمی اور خیر خواہی سے پیش آئے۔",
      ro: "Safar mashaqqat aur azaab ka aik tukra hai jo insan ko khane, peene aur aaram se rok deta hai; lehaza jab tum mein se koi apne safar ki hajat aur kaam poora kar le to foran apne ahl-e-khana ke paas laut aaye aur rastay mein apne hum-safaron ke sath narmi aur khair-khwahi se pesh aaye.",
      en: "Travel is a piece of hardship that deprives one of normal food, drink, and rest; therefore, once you finish the purpose of your journey, hasten back to your family and always treat your fellow travelers with kindness and forbearance."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سفر انسان کے اصل مزاج اور اخلاق کا امتحان ہوتا ہے۔ اسلامی آدابِ سفر میں بزرگوں اور گھر والوں سے دعا لے کر نکلنا، سواری اور ساتھیوں کا خیال رکھنا، اور کام نمٹا کر بلاوجہ آوارہ گردی کے بجائے گھر لوٹ آنا شامل ہے۔ آج کا عملی سبق یہ ہے کہ سفر پر نکلتے وقت دعا پڑھ کر جائیں اور راستے میں دوسروں کے لیے آسانی پیدا کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Safar insan ke asal mizaj aur akhlaq ka imtihan hota hai. Islami adab-e-safar mein buzurgan aur ghar walon se dua le kar nikalna, sawari aur sathiyon ka khayal rakhna, aur kaam nimta kar bila-wajah waqt zaya karne ke bajaye ghar laut aana shamil hai. Aaj ka amli sabaq yeh hai ke safar par nikalte waqt dua parh kar jayein aur rastay mein doosron ke liye asani paida karein.",
      en: "Context & Practical Lesson: Travel reveals true character. Islamic etiquette teaches bidding farewell with prayers, showing patience toward fellow travelers, and returning to family responsibly once business concludes."
    },
    tags: [
      { ur: "سفر کے آداب", ro: "Safar Ke Adab", en: "Travel Etiquette" },
      { ur: "رفقائے سفر", ro: "Rufaqa-e-Safar", en: "Companionship" }
    ]
  },
  {
    id: "ma-058",
    slug: "bakhil-aur-sakhi-ka-farq",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "سخی اور بخیل کا مقام",
      ro: "Sakhi Aur Bakhil Ka Maqam",
      en: "The Status of the Generous and the Miser"
    },
    quote: {
      ur: "سخی انسان اللہ کے قریب، جنت کے قریب اور لوگوں کے قریب ہوتا ہے، جبکہ بخیل انسان اللہ سے دور، جنت سے دور اور دوزخ کے نزدیک ہوتا ہے۔",
      ro: "Sakhi insan Allah ke qareeb, Jannat ke qareeb aur logon ke qareeb hota hai, jabkeh bakhil insan Allah se door, Jannat se door aur dozakh ke nazdeek hota hai.",
      en: "The generous person is close to Allah, close to Paradise, and close to people; whereas the miser is far from Allah, far from Paradise, and close to Hell."
    },
    tashreeh: {
      ur: "مال و دولت خرچ کرنے سے گھٹتی نہیں بلکہ اللہ اس میں برکت دیتا ہے۔ سخی دل انسان معاشرے میں ہر دلعزیز بن جاتا ہے۔",
      ro: "Maal-o-daulat kharch karne se ghatti nahi balkay Allah us mein barkat deta hai. Sakhi dil insan muashray mein har-dil-aziz ban jata hai.",
      en: "Charity does not diminish wealth; rather, Allah blesses it. A generous heart earns love and respect throughout society."
    },
    tags: [
      { ur: "سخاوت", ro: "Sakhawat", en: "Generosity" },
      { ur: "بخیل", ro: "Bukhz", en: "Miserliness" }
    ]
  },
  {
    id: "ma-059",
    slug: "sharm-aur-haya-iman-ka-hissa",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حیا اور ایمان کا گہرا رشتہ",
      ro: "Haya Aur Eman Ka Gehra Rishta",
      en: "The Deep Connection Between Modesty and Faith"
    },
    quote: {
      ur: "حیا اور ایمان دونوں ساتھ ساتھ ہیں، جب ان میں سے ایک اٹھا لیا جائے تو دوسرا بھی اٹھ جاتا ہے۔ حیا سراسر نیکی ہے۔",
      ro: "Haya aur eman dono sath sath hain, jab un mein se aik utha liya jaye to doosra bhi utha jata hai. Haya sarasar neki hai.",
      en: "Modesty and faith are companions together; when one is lifted, the other follows it. Modesty is entirely goodness."
    },
    tashreeh: {
      ur: "حیا انسان کو برائیوں اور بے حیائی سے روکنے والی سب سے بڑی اندرونی ڈھال ہے۔ جس انسان میں حیا ختم ہو جائے وہ ہر گناہ بے باکی سے کرنے لگتا ہے۔",
      ro: "Haya insan ko buraiyon aur be-hayai se roknay wali sab se badi androoni dhal hai. Jis insan mein haya khatam ho jaye woh har gunah be-baki se karne lagta hai.",
      en: "Modesty is the strongest inner shield protecting a person from indecency and sin. When modesty departs, shamelessness takes over."
    },
    tags: [
      { ur: "حیا", ro: "Haya", en: "Modesty" },
      { ur: "ایمان", ro: "Eman", en: "Faith" }
    ]
  },
  {
    id: "ma-060",
    slug: "musibat-mein-sabar-aur-ajr",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مصیبت پر صبر کرنے والوں کے لیے بشارت",
      ro: "Musibat Par Sabr Karne Walon Ke Liye Basharat",
      en: "Glad Tidings for Those Who Endure Hardship with Patience"
    },
    quote: {
      ur: "اور صبر کرنے والوں کو خوشخبری دے، ان لوگوں کو کہ جب ان کو مصیبت پہنچتی ہے کہتے ہیں: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ'۔",
      ro: "Aur sabr karne walon ko khushkhabri de, un logon ko ke jab un ko musibat pohanchti hai kehte hain: 'Inna lillahi wa inna ilaihi raji'oon'.",
      en: "And give glad tidings to the patient, who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.'"
    },
    tashreeh: {
      ur: "زندگی کے کسی بھی موڑ پر جب کوئی صدمہ یا نقصان پہنچے تو انا للہ پڑھ کر صبر کا دامن تھام لینا انسان کو اندرونی سکون عطا کرتا ہے اور بے پناہ اجر کا مستحق بناتا ہے۔",
      ro: "Zindagi ke kisi bhi mor par jab koi sadma ya nuqsan pohanche to Inna lillahi parh kar sabr ka daman tham lena insan ko androoni sukoon ata karta hai aur be-panah ajr ka mustahiq banata hai.",
      en: "Reciting the verse of return during times of trial brings profound inner peace and guarantees immense divine rewards."
    },
    tags: [
      { ur: "صبر", ro: "Sabr", en: "Patience" },
      { ur: "أجر", ro: "Ajr", en: "Divine Reward" }
    ]
  }
];

export const batch5Quotes: QuoteItem[] = [
  {
    id: "ma-061",
    slug: "allah-ki-raah-mein-kharch-karna-aur-ihsan",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:195) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اللہ کی راہ میں مال خرچ کرنا اور احسان کا اسوہ",
      ro: "Allah Ki Raah Mein Maal Kharch Karna Aur Ihsan Ka Uswah",
      en: "Spending in the Way of Allah and Practicing Excellence"
    },
    quote: {
      ur: "اور اللہ کی راہ میں خرچ کرو، اور اپنے آپ کو ہلاکت میں نہ ڈالو، اور احسان کرو؛ بے شک اللہ احسان کرنے والوں کو پسند کرتا ہے۔",
      ro: "Aur Allah ki raah mein kharch karo, aur apne aap ko halakat mein na dalo, aur ihsan karo; be-shak Allah ihsan karne walon ko pasand karta hai.",
      en: "And spend in the way of Allah and do not throw yourselves with your own hands into destruction. And do good; indeed, Allah loves the doers of good."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مال کو صرف اپنے ذات تک محدود رکھنا یا راہِ خدا میں خرچ کرنے سے ہاتھ کھینچ لینا درحقیقت خود کو مالی اور اخلاقی تباہی میں دھکیلنا ہے۔ نیکی اور احسان کا جذبہ معاشرے میں توازن پیدا کرتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنی استطاعت کے مطابق فلاحی کاموں اور امداد میں بڑھ چڑھ کر حصہ لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Maal ko sirf apni zaat tak mehdood rakhna ya raah-e-khuda mein kharch karne se hath khinch lena dar-haqeeqat khud ko maali aur akhlaqi tabahi mein dhakelna hai. Neki aur ihsan ka jazba muashray mein tawazun paida karta hai. Aaj ka amli sabaq yeh hai ke apni istitaat ke mutabiq falahi kaamon aur madad mein barh charh kar hissa lein.",
      en: "Context & Practical Lesson: Withholding charity and hoarding wealth leads to societal and spiritual ruin; true security comes from generous giving and excellence in character."
    },
    tags: [
      { ur: "انفاق فی سبیل اللہ", ro: "Infaq Fi Sabilillah", en: "Charity" },
      { ur: "احسان", ro: "Ihsan", en: "Excellence" }
    ]
  },
  {
    id: "ma-062",
    slug: "hajj-ke-safar-mein-behtareen-tosha-taqwa-hai",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:197) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سفرِ آخرت اور دنیا کا سب سے بہترین توشہ پرہیزگاری ہے",
      ro: "Safar-e-Akhirat Aur Duniya Ka Sab Se Behtareen Tosha Parhezgari Hai",
      en: "The Best Provision for Every Journey is Taqwa"
    },
    quote: {
      ur: "اور زادِ راہ (سفر کا توشہ) ساتھ لے لیا کرو، کیونکہ سب سے بہترین توشہ تقویٰ اور پرہیزگاری ہے؛ اور اے عقل والو! مجھ سے ڈرتے رہو۔",
      ro: "Aur zad-e-raah (safar ka tosha) sath le liya karo, kyunkeh sab se behtareen tosha taqwa aur parhezgari hai; aur aye aqal walo! Mujh se darte raho.",
      en: "And take provisions, but indeed, the best provision is fear of Allah [Taqwa]. And fear Me, O you of understanding."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ظاہری سفر کے لیے وسائل کا انتظام کرنا جتنا ضروری ہے، اس سے کہیں زیادہ لازمی آخرت کے طویل سفر کے لیے نیکی اور تقویٰ کا توشہ اکٹھا کرنا ہے۔ آج کا عملی سبق یہ ہے کہ دنیاوی وسائل کے ساتھ اپنے اخلاق اور اعمال کو بہتر بنانے کی مستقل فکر رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Zahiri safar ke liye wasail ka intezam karna jitna zaroori hai, us se kahin zyada lazmi akhirat ke taweel safar ke liye neki aur taqwa ka tosha ikattha karna hai. Aaj ka amli sabaq yeh hai ke dunyawi wasail ke sath apne akhlaq aur aamaal ko behtar banane ki mustaqil fikr rakhein.",
      en: "Context & Practical Lesson: While material provisions are needed for worldly travel, spiritual preparedness and moral piety remain the ultimate provisions for eternity."
    },
    tags: [
      { ur: "تقویٰ", ro: "Taqwa", en: "Piety" },
      { ur: "توشۂ آخرت", ro: "Tosha-e-Akhirat", en: "Provision for Hereafter" }
    ]
  },
  {
    id: "ma-063",
    slug: "jo-kuch-zarat-se-bach-jaye-woh-allah-ki-rah-mein-do",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:219) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ضرورت سے زائد مال (العفو) راہِ خدا میں خرچ کرنے کا حکم",
      ro: "Zaroorat Se Zaid Maal (Al-Afw) Raah-e-Khuda Mein Kharch Karne Ka Hukm",
      en: "Spending Surplus Wealth in the Way of Allah"
    },
    quote: {
      ur: "اور وہ آپ سے پوچھتے ہیں کہ کیا خرچ کریں؟ آپ کہہ دیجیے کہ جو کچھ ضرورت سے زائد ہو (وہ راہِ خدا میں دو)۔",
      ro: "Aur woh aap se poochte hain ke kya kharch karein? Aap keh dijiye ke jo kuch zaroorat se zaid ho (woh raah-e-khuda mein do).",
      en: "And they ask you what they should spend. Say, 'The excess [beyond needs].'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام اپنے ماننے والوں کو کنجوسی سے بچنے اور ضرورت سے بچ جانے والا مال غریبوں، یتیموں اور محتاجوں میں بانٹنے کی ترغیب دیتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنی ضرورت پوری کرنے کے بعد فاضل رقم کو فلاحی کاموں اور ضرورت مندوں کی مدد میں صرف کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam apne manne walon ko kanjoosi se bachne aur zaroorat se bach jane wala maal ghareebon, yateemon aur mohtajon mein bantne ki targheeb deta hai. Aaj ka amli sabaq yeh hai ke apni zaroorat poori karne ke baad fazil raqam ko falahi kaamon aur zaroorat-mandon ki madad mein sarf karein.",
      en: "Context & Practical Lesson: True generosity means sharing whatever surplus wealth remains after fulfilling one's honest, modest needs with those who are less fortunate."
    },
    tags: [
      { ur: "سخاوت", ro: "Sakhawat", en: "Generosity" },
      { ur: "انفاق", ro: "Infaq", en: "Charitable Spending" }
    ]
  },
  {
    id: "ma-064",
    slug: "ilm-baghair-amal-ke-balah",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "علم بغیر عمل کے وبال ہے",
      ro: "Ilm Baghair Amal Ke Wabaal Hai",
      en: "Knowledge Without Action is a Burden"
    },
    quote: {
      ur: "علم بغیر عمل وبال ہے اور عمل بغیر علم گمراہی ہے۔ نیکی کا بتانے والا مثل اس کے کرنے والے کے ہے۔",
      ro: "Ilm baghair amal wabaal hai aur amal baghair ilm gumrahi hai. Neki ka batane wala misl us ke karne wale ke hai.",
      en: "Knowledge without action is a burden, and action without knowledge is misguidance. The one who guides to virtue is like the one who performs it."
    },
    tashreeh: {
      ur: "پتہ ہونے کے باوجود عمل نہ کرنا انسان کے لیے حجت اور عذاب بن جاتا ہے، اور بغیر علم کے نیکی کرنا انسان کو گمراہی میں ڈال سکتا ہے۔",
      ro: "Pata hone ke bawajood amal na karna insan ke liye hujjat aur azaab ban jata hai, aur baghair ilm ke neki karna insan ko gumrahi mein daal sakta hai.",
      en: "Possessing knowledge without putting it into practice becomes a liability, just as acting blindly without correct understanding leads astray."
    },
    tags: [
      { ur: "علم و عمل", ro: "Ilm o Amal", en: "Knowledge and Action" },
      { ur: "عمل", ro: "Amal", en: "Action" }
    ]
  },
  {
    id: "ma-065",
    slug: "duniya-ki-mohabbat-sab-gunahon-ki-jar",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دنیا کی محبت تمام گناہوں کی جڑ ہے",
      ro: "Duniya Ki Mohabbat Tamam Gunahon Ki Jar Hai",
      en: "Love of the World is the Root of All Sins"
    },
    quote: {
      ur: "دنیا کی محبت سب گناہوں کی جڑ ہے، اور کسی چیز کی محبت انسان کو اندھا اور بہرا کر دیتی ہے۔",
      ro: "Duniya ki mohabbat sab gunahon ki jar hai, aur kisi cheez ki mohabbat insan ko andha aur behra kar deti hai.",
      en: "The love of this worldly life is the root of all sins, and excessive attachment to anything makes a person blind and deaf [to truth]."
    },
    tashreeh: {
      ur: "جب دل میں دنیا کی ہوس اور مال کی محبت گھر کر لے تو انسان حق اور باطل میں فرق کرنا بھول جاتا ہے۔",
      ro: "Jab dil mein duniya ki hawas aur maal ki mohabbat ghar kar le to insan haq aur baatil mein farq karna bhool jata hai.",
      en: "When greed and worldly attachment dominate the heart, a person loses the ability to distinguish between right and wrong."
    },
    tags: [
      { ur: "دنیا کی محبت", ro: "Duniya Ki Mohabbat", en: "Worldliness" },
      { ur: "صراطِ مستقیم", ro: "Sirat-e-Mustaqeem", en: "Right Path" }
    ]
  },
  {
    id: "ma-066",
    slug: "tahajjud-aur-raat-ki-ibadat",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 33",
    author: {
      ur: "خصائلِ نبوی ﷺ",
      ro: "Khasail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "تہجد گزاری اور رات کی تنہائی",
      ro: "Tahajjud-Guzari Aur Raat Ki Tanhai",
      en: "Night Vigil and Solitary Devotion"
    },
    quote: {
      ur: "رات کی تنہائی میں کی گئی عبادت دل کا نور ہے، اور سحر کے وقت استغفار کرنا گناہوں کو دھو دیتا ہے۔",
      ro: "Raat ki tanhai mein ki gayi ibadat dil ka noor hai, aur sahar ke waqt istighfar karna gunahon ko dho deta hai.",
      en: "Worship performed in the stillness of the night illuminates the heart, and seeking forgiveness at dawn washes away sins."
    },
    tashreeh: {
      ur: "دن کی مصروفیات سے ہٹ کر رات کے پچھلے پہر رب کے حضور گریہ و زاری کرنا انسان کے باطن کو پاک صاف کر دیتا ہے۔",
      ro: "Din ki masroofiyat se hat kar raat ke pichle pehar Rab ke huzoor gariyah-o-zari karna insan ke batin ko paak saaf kar deta hai.",
      en: "Stepping away from daytime distractions to connect with the Creator in the quiet night purifies the inner soul."
    },
    tags: [
      { ur: "تہجد", ro: "Tahajjud", en: "Night Prayer" },
      { ur: "استغفار", ro: "Istighfar", en: "Seeking Forgiveness" }
    ]
  },
  {
    id: "ma-067",
    slug: "be-faida-batoin-se-parhez",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "فضول باتوں کو چھوڑنا حسنِ اسلام ہے",
      ro: "Fuzool Baaton Ko Chhorna Husn-e-Islam Hai",
      en: "Abandoning Idle Talk is the Beauty of Islam"
    },
    quote: {
      ur: "آدمی کے اسلام کی خوبی یہ ہے کہ وہ بے فائدہ اور فضول باتوں کو ترک کر دے۔",
      ro: "Aadmi ke Islam ki khoobi yeh hai ke woh be-faida aur fuzool baaton ko tark kar de.",
      en: "An indicator of the excellence of a person's Islam is their abandonment of that which does not concern them."
    },
    tashreeh: {
      ur: "ایک سچا مسلمان اپنی صلاحیتوں اور وقت کو لغویات اور بے مقصد بحثوں میں ضائع نہیں کرتا بلکہ مفید کاموں میں لگاتا ہے۔",
      ro: "Sacha Musalman apni salahiyaton aur waqt ko lagwiyat aur be-maqsad behasron mein zaya nahi karta balkay mufeed kaamon mein lagata hai.",
      en: "A true believer does not waste time and abilities on idle gossip or meaningless debates, focusing instead on purposeful actions."
    },
    tags: [
      { ur: "وقت کی حفاظت", ro: "Waqt Ki Hifazat", en: "Time Protection" },
      { ur: "فزول گوئی", ro: "Fuzool Goi", en: "Idle Talk" }
    ]
  },
  {
    id: "ma-068",
    slug: "bimar-pursi-ki-masnoon-dua-aur-shifa-ki-umeed",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari (5656) & Sunan Abi Dawud (3106)",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail o Shamail-e-Nabawi ﷺ",
      en: "Prophetic Character & Manners ﷺ"
    },
    title: {
      ur: "بیمار پرسی کی دعا: تسلی، ہمدردی اور شفا کی التجا",
      ro: "Bimar-Pursi Ki Dua: Tasalli, Hamdardi Aur Shifa Ki Iltija",
      en: "Prayer When Visiting the Sick: Comfort, Empathy, and Supplication for Recovery"
    },
    quote: {
      ur: "جب نبی کریم ﷺ کسی مریض کی عیادت کے لیے تشریف لے جاتے تو شفقت سے اس کی پیشانی پر ہاتھ رکھ کر فرماتے: کوئی گھبرانے کی بات نہیں، ان شاء اللہ یہ بیماری گناہوں سے پاکیزگی اور طہارت کا ذریعہ ہے؛ اور فرماتے کہ سات مرتبہ عظیم عرش کے رب اللہ سے اس کی شفا کی دعا مانگو۔",
      ro: "Jab Nabi Kareem ﷺ kisi mareez ki iyadat ke liye tashreef le jatay to shafqat se us ki peshani par hath rakh kar farmate: koi ghabrane ki baat nahi, In sha Allah yeh bimari gunahon se pakeezgi aur taharat ka zariya hai; aur farmate ke saat martaba Azeem Arsh ke Rab Allah se us ki shifa ki dua mango.",
      en: "Whenever the Prophet ﷺ visited a patient, he would gently place his hand upon them and offer the comforting prayer: 'No harm; it will be a purification from sins, if Allah wills,' and he taught praying seven times to the Lord of the Mighty Throne for the patient's complete healing."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بیمار پرسی محض ایک رسمی حاضری نہیں بلکہ ٹوٹے ہوئے دل کو حوصلہ دینے اور رب کے حضور شفا کی صدقِ دل سے التجا کرنے کا نام ہے۔ نبی کریم ﷺ کی دعا مریض کو یہ یقین دلاتی تھی کہ تکلیف بھی مومن کے لیے درجات کی بلندی اور کفارۂ گناہ بن جاتی ہے۔ آج کا عملی سبق یہ ہے کہ کسی بیمار سے ملیں تو مایوسی پھیلانے کے بجائے مسنون دعا پڑھیں اور اسے شفا کی یقینی امید دلائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bimar-pursi mehez aik rasmi haazri nahi balkay tootay huye dil ko hosla dene aur Rab ke huzoor shifa ki sidq-e-dil se iltija karne ka naam hai. Nabi Kareem ﷺ ki dua mareez ko yeh yaqeen dilati thi ke takleef bhi momin ke liye darajaat ki bulandi aur kaffara-e-gunah ban jati hai. Aaj ka amli sabaq yeh hai ke kisi bimar se milein to mayousi phailane ke bajaye masnoon dua parhein aur usay shifa ki yaqeeni umeed dilayein.",
      en: "Context & Practical Lesson: Visiting the sick is a spiritual service of reassurance and heartfelt prayer, reminding the patient that endurance elevates rank and wipes away faults. Always speak hope and pray sincerely at a bedside."
    },
    tags: [
      { ur: "بیمار پرسی کی دعا", ro: "Bimar-Pursi Ki Dua", en: "Healing Prayer" },
      { ur: "سنتِ عیادت", ro: "Sunnat-e-Iyadat", en: "Sunnah of Visiting" }
    ]
  },
  {
    id: "ma-069",
    slug: "aulad-ke-darmiyan-insaf-aur-barabari-ka-hukm",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari (2587) & Sahih Muslim (1623)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اولاد کے درمیان انصاف: محبت، عطیات اور برتاؤ میں برابری",
      ro: "Aulad Ke Darmiyan Insaf: Muhabbat, Atiyyat Aur Bartao Mein Barabari",
      en: "Justice Among Children: Fairness in Gifts, Love, and Treatment"
    },
    quote: {
      ur: "اللہ تعالیٰ سے ڈرو اور اپنی تمام اولاد کے درمیان عدل و انصاف اور برابری کا سلوک کرو؛ جس طرح تم یہ پسند کرتے ہو کہ تمہارے تمام بچے تمہارے ساتھ حسنِ سلوک اور فرمانبرداری میں برابر رہیں، اسی طرح تم بھی ان سب کے ساتھ برابر رہو۔",
      ro: "Allah Ta'ala se daro aur apni tamam aulad ke darmiyan adal o insaf aur barabari ka sulook karo; jis tarah tum yeh pasand karte ho ke tumhare tamam bachay tumhare sath husn-e-sulook aur farman-bardari mein barabar rahein, isi tarah tum bhi un sab ke sath barabar raho.",
      en: "Fear Allah and treat all of your children with equal justice and fairness; just as you wish for all of them to honor and care for you equally, show impartiality among them."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جب حضرت بشیرؓ نے اپنے ایک بیٹے کو خاص عطیہ دے کر حضور اکرم ﷺ کو گواہ بنانا چاہا تو آپ ﷺ نے یہ کہہ کر گواہ بننے سے انکار فرما دیا کہ میں ظلم پر گواہ نہیں بنتا۔ بیٹے اور بیٹیوں میں تفریق یا ایک بچے کو بے جا نوازنا بہن بھائیوں میں زندگی بھر کے حسد اور نفرت کا بیج بو دیتا ہے۔ آج کا عملی سبق یہ ہے کہ تحفے تحائف، توجہ اور وراثت کے معاملات میں اپنی اولاد کے درمیان مکمل انصاف قائم رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jab Hazrat Basheer (R.A) ne apne aik betay ko khaas atiya de kar Huzoor Akram ﷺ ko gawah banana chaha to Aap ﷺ ne yeh keh kar gawah ban'ne se inkar farma diya ke main zulm par gawah nahi banta. Betay aur betiyon mein tafreeq ya aik bachay ko be-ja nawazna behan bhaiyon mein zindagi bhar ke hasad aur nafrat ka beej bo deta hai. Aaj ka amli sabaq yeh hai ke tohfay tahaif, tawajjo aur wirasat ke muamlat mein apni aulad ke darmiyan mukammal insaf qayam rakhein.",
      en: "Context & Practical Lesson: Favoritism among children—whether between sons and daughters or siblings—plants lifelong resentment within families. Maintain strict fairness in gifts, attention, and kindness."
    },
    tags: [
      { ur: "اولاد میں انصاف", ro: "Aulad Mein Insaf", en: "Family Justice" },
      { ur: "تربیتِ اولاد", ro: "Tarbiyat-e-Aulad", en: "Parenting Ethics" }
    ]
  },
  {
    id: "ma-070",
    slug: "zalim-ki-madad-aur-anjam",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ظالم کی حمایت کا انجام",
      ro: "Zalim Ki Himayat Ka Anjam",
      en: "The Consequence of Supporting an Oppressor"
    },
    quote: {
      ur: "جس کسی نے ظالم کی مدد کی، اس نے گویا غضبِ الٰہی خود اپنے سر لے لیا۔ مظلوم کی مدد کرو خواہ وہ ظالم ہی کیوں نہ ہو (یعنی ظلم سے باز رکھ کر)۔",
      ro: "Jis kisi ne zalim ki madad ki, us ne goya ghazab-e-Ilahi khud apne sar le liya. Mazloom ki madad karo khwah woh zalim hi kyon na ho.",
      en: "Whoever assists an oppressor invites divine wrath upon themselves. Help your brother whether he is an oppressor (by stopping him) or oppressed."
    },
    tashreeh: {
      ur: "ظلم کی تائید کرنا یا خاموش تماشائی بنے رہنا معاشرے میں بگاڑ پیدا کرتا ہے۔ ظالم کو ظلم سے روکنا ہی اس کی اصل مدد ہے۔",
      ro: "Zulm ki taayeed karna ya khamosh tamashayi bane rehna muashray mein bigaar paida karta hai. Zalim ko zulm se rokna hi us ki asal madad hai.",
      en: "Supporting oppression or remaining a silent spectator ruins society. Stopping an oppressor from wrong is true assistance to them."
    },
    tags: [
      { ur: "عدل", ro: "Adal", en: "Justice" },
      { ur: "ظلم", ro: "Zulm", en: "Oppression" }
    ]
  },
  {
    id: "ma-071",
    slug: "ustad-ka-ihtiram-aur-ibn-abbas-ka-adab",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Al-Mustadrak al-Hakim (5812) & Makhzan-e-Akhlaq",
    author: {
      ur: "حضرت عبداللہ بن عباس رضی اللہ عنہ",
      ro: "Hazrat Abdullah bin Abbas (R.A)",
      en: "Hazrat Abdullah bin Abbas (R.A)"
    },
    title: {
      ur: "استاد کا احترام: علم والوں کی تعظیم اور عاجزی کا سنہرا اصول",
      ro: "Ustad Ka Ihtiram: Ilm Walon Ki Tazeem Aur Aajizi Ka Sunehra Usool",
      en: "Honoring Teachers: Humility Before Scholars and Bearers of Knowledge"
    },
    quote: {
      ur: "جب حضرت عبداللہ بن عباس رضی اللہ عنہ نے اپنے استاد حضرت زید بن ثابت رضی اللہ عنہ کی سواری کی لگام تھام لی اور انہوں نے فرمایا کہ اے رسول اللہ ﷺ کے چچا زاد بھائی ایسا نہ کیجیے، تو ابنِ عباسؓ نے جواب دیا: ہمیں حکم دیا گیا ہے کہ ہم اپنے اساتذہ اور اہلِ علم کے ساتھ اسی طرح ادب و احترام کا برتاؤ کریں۔",
      ro: "Jab Hazrat Abdullah bin Abbas (R.A) ne apne ustad Hazrat Zaid bin Thabit (R.A) ki sawari ki lagam tham li aur unhon ne farmaya ke aye Rasool Allah ﷺ ke chacha-zad bhai aisa na kijiye, to Ibn-e-Abbas (R.A) ne jawab diya: hamein hukm diya gaya hai ke hum apne asatiza aur ahl-e-ilm ke sath isi tarah adab o ehtiram ka bartao karein.",
      en: "When Hazrat Abdullah ibn Abbas (R.A) held the reins of his teacher Zaid bin Thabit's mount and Zaid protested, 'O cousin of the Messenger of Allah ﷺ, please do not do this,' Ibn Abbas (R.A) replied: 'This is how we have been commanded to honor our teachers and scholars.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضرت عبداللہ بن عباسؓ خاندانِ نبوت کے چشم و چراغ اور 'حبر الامۃ' (امت کے بہت بڑے عالم) ہونے کے باوجود اپنے استاد کی سواری کی رکاب تھام کر یہ پیغام دے گئے کہ علم حسب نسب سے نہیں بلکہ استاد کے ادب سے ملتا ہے؛ جواباً حضرت زید بن ثابتؓ نے بھی ان کے ہاتھ چوم کر اہلِ بیت کی تعظیم کی۔ آج کا عملی سبق یہ ہے کہ اپنے اساتذہ کا احترام دل سے کریں اور ان کے سامنے تکبر یا بحث سے گریز کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hazrat Abdullah bin Abbas (R.A) khandan-e-nubuwat ke chashm-o-chiragh aur 'Habr-ul-Ummah' hone ke bawajood apne ustad ki sawari ki rikab tham kar yeh paigham de gaye ke ilm hasab-nasab se nahi balkay ustad ke adab se milta hai; jawab-an Hazrat Zaid bin Thabit (R.A) ne bhi un ke hath choom kar ahl-e-bait ki tazeem ki. Aaj ka amli sabaq yeh hai ke apne asatiza ka ehtiram dil se karein aur un ke samne takabbur ya behas se gurez karein.",
      en: "Context & Practical Lesson: True scholarship begins with humility. Holding a teacher's stirrup demonstrates that blessed knowledge is earned through reverence, sincere service, and deep gratitude toward one's mentors."
    },
    tags: [
      { ur: "استاد کا احترام", ro: "Ustad Ka Ihtiram", en: "Respecting Teachers" },
      { ur: "ادب و علم", ro: "Adab o Ilm", en: "Academic Humility" }
    ]
  },
  {
    id: "ma-072",
    slug: "amanat-ki-wapsi-aur-khayanat-ka-badla-khayanat-se-na-dena",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Abi Dawud (3534) & Sunan al-Tirmidhi (1264)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "امانت کی واپسی: خائن کے ساتھ بھی خیانت نہ کرنے کا حکم",
      ro: "Amanat Ki Wapsi: Khain Ke Sath Bhi Khayanat Na Karne Ka Hukm",
      en: "Returning Trusts: Never Betray Even the One Who Betrayed You"
    },
    quote: {
      ur: "اس شخص کو بھی اس کی امانت پوری واپس لوٹاؤ جس نے تم پر بھروسہ کر کے تمہیں امین بنایا، اور اس شخص کے ساتھ بھی خیانت مت کرو جس نے تمہارے ساتھ خیانت کی ہو۔",
      ro: "Us shakhs ko bhi us ki amanat poori wapis lautao jis ne tum par bharosa kar ke tumhein ameen banaya, aur us shakhs ke sath bhi khayanat mat karo jis ne tumhare sath khayanat ki ho.",
      en: "Return the trust faithfully to the one who entrusted it to you, and do not betray even the one who has betrayed you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عام دنیاوی اصول 'اینٹ کا جواب پتھر سے' ہوتا ہے، مگر اسلامی اخلاقیات ہمیں سکھاتی ہیں کہ کسی دوسرے کی بددیانتی ہمیں بے ایمان بننے کا جواز نہیں دیتی۔ امانت خواہ پیسوں کی ہو، کسی کے راز کی یا ذمہ داری کی، اسے بغیر کمی بیشی کے لوٹانا ایمان کی علامت ہے۔ آج کا عملی سبق یہ ہے کہ اگر کسی نے آپ کا حق مارا بھی ہو تو آپ کے پاس اس کی رکھی امانت یا حق کو ہرگز مت روکیں بلکہ اصول پر قائم رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aam duniyawi usool 'eent ka jawab patthar se' hota hai, magar islami akhlaqiyat hamein sikhati hain ke kisi doosre ki bad-diyanati hamein be-iman ban'ne ka jawaz nahi deti. Amanat khwah paison ki ho, kisi ke raaz ki ya zimmedari ki, usay baghair kami-beshi ke lautana eman ki alamat hai. Aaj ka amli sabaq yeh hai ke agar kisi ne aap ka haq mara bhi ho to aap ke paas us ki rakhi amanat ya haq ko hargiz mat rokein balkay usool par qayam rahein.",
      en: "Context & Practical Lesson: Islamic integrity rises above retaliation. Another person's dishonesty never justifies compromising your own trustworthiness—always fulfill deposits, secrets, and responsibilities in full."
    },
    tags: [
      { ur: "امانت کی واپسی", ro: "Amanat Ki Wapsi", en: "Returning Trusts" },
      { ur: "دیانت داری", ro: "Diyanat-dari", en: "Integrity" }
    ]
  },
  {
    id: "ma-073",
    slug: "kirdar-ki-bulandi-aur-sachai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 140",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "سچائی اور بلند کردار کی طاقت",
      ro: "Sachai Aur Buland Kirdar Ki Taqat",
      en: "The Power of Truthfulness and Noble Character"
    },
    quote: {
      ur: "سچ بولنے والے کو کبھی گواہ کی ضرورت نہیں پڑتی، اور اس کا ضمیر ہمیشہ مطمئن رہتا ہے۔",
      ro: "Sach bolne wale ko kabhi gawah ki zaroorat nahi parti, aur uska zameer hamesha mutmain rehta hai.",
      en: "The one who speaks the truth never needs a witness, and their conscience remains ever at peace."
    },
    tashreeh: {
      ur: "سچائی انسان کو تمام ڈر اور خوف سے آزاد کر دیتی ہے۔ جھوٹ بولنے والے کو اپنے جھوٹ کو چھپانے کے لیے سو جھوٹ اور بولنے پڑتے ہیں۔",
      ro: "Sachai insan ko tamam dar aur khouf se azad kar deti hai. Jhoot bolne wale ko apne jhoot ko chhupane ke liye so jhoot aur bolne parte hain.",
      en: "Truthfulness frees a person from fear, whereas a liar must constantly invent falsehoods to cover a single lie."
    },
    tags: [
      { ur: "سچائی", ro: "Sachai", en: "Truth" },
      { ur: "ضمیر", ro: "Zameer", en: "Conscience" }
    ]
  },
  {
    id: "ma-074",
    slug: "waqt-ki-pabandi-aur-har-guzartay-din-ka-muhasaba",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Hilyat al-Awliya (Ibn Mas'ud) & Makhzan-e-Akhlaq",
    author: {
      ur: "حضرت عبداللہ بن مسعود رضی اللہ عنہ",
      ro: "Hazrat Abdullah bin Mas'ud (R.A)",
      en: "Hazrat Abdullah bin Mas'ud (R.A)"
    },
    title: {
      ur: "وقت کی پابندی اور ہر ڈوبتے سورج پر اعمال کا محاسبہ",
      ro: "Waqt Ki Pabandi Aur Har Doobtay Sooraj Par Aamaal Ka Muhasaba",
      en: "Valuing Every Passing Day: Accounting for Time Before Sunset"
    },
    quote: {
      ur: "مجھے کبھی کسی چیز پر اتنا پچھتاوا نہیں ہوا جتنا اس دن پر جس کا سورج ڈوب گیا اور میری مقررہ عمر کا ایک دن کم ہو گیا، مگر اس دن میرے نیک اعمال میں کوئی اضافہ نہ ہو سکا۔",
      ro: "Mujhe kabhi kisi cheez par itna pachtawa nahi huwa jitna us din par jis ka sooraj doob gaya aur meri muqarrara umar ka aik din kam ho gaya, magar us din mere nek aamaal mein koi izafa na ho saka.",
      en: "I have never regretted anything as deeply as a day whose sun has set, shortening my appointed lifespan while my store of good deeds did not grow."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جلیل القدر صحابی حضرت عبداللہ بن مسعودؓ وقت کی پابندی اور قدر کا ایسا معیار بیان فرماتے ہیں جو انسان کو غفلت سے جگا دیتا ہے؛ ہر گزرتا دن دراصل ہماری زندگی کے کھاتے سے ایک ورق کم کرتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دن کا آغاز واضح منصوبہ بندی سے کریں اور سورج غروب ہونے سے پہلے کم از کم ایک مستقل نیکی یا مفید علمی کام ضرور مکمل کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jaleel-ul-Qadr sahabi Hazrat Abdullah bin Mas'ud (R.A) waqt ki pabandi aur qadr ka aisa mayar bayan farmate hain jo insan ko ghaflat se jaga deta hai; har guzarta din dar-asal hamari zindagi ke khatay se aik waraq kam karta hai. Aaj ka amli sabaq yeh hai ke apne din ka aaghaz wazeh mansooba-bandi se karein aur sooraj ghuroob hone se pehle kam az kam aik mustaqil neki ya mufeed ilmi kaam zaroor mukammal karein.",
      en: "Context & Practical Lesson: Every sunset marks one fewer day in our earthly life. Live intentionally by planning your daily hours carefully and ensuring each day adds lasting spiritual or productive value."
    },
    tags: [
      { ur: "وقت کی پابندی", ro: "Waqt Ki Pabandi", en: "Punctuality" },
      { ur: "محاسبۂ نفس", ro: "Muhasaba-e-Nafs", en: "Self-Accounting" }
    ]
  },
  {
    id: "ma-075",
    slug: "ilm-ka-fahv-aur-amal",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 145",
    author: {
      ur: "اقوالِ بزرگانِ دین",
      ro: "Aqwal-e-Buzurgan-e-Deen",
      en: "Sayings of Pious Sages"
    },
    title: {
      ur: "علم کی اصل روح عمل ہے",
      ro: "Ilm Ki Asal Rooh Amal Hai",
      en: "The True Spirit of Knowledge is Action"
    },
    quote: {
      ur: "علم اس وقت تک درخت کی طرح بے پھل ہے جب تک اس پر عمل کا پھل نہ لگ جائے۔",
      ro: "Ilm us waqt tak darakht ki tarah be-phal hai jab tak us par amal ka phal na lag jaye.",
      en: "Knowledge remains fruitless like a barren tree until it bears the fruit of righteous action."
    },
    tashreeh: {
      ur: "کتابیں پڑھ لینا یا معلومات حاصل کر لینا کافی نہیں، جب تک اس علم کے مطابق زندگی نہ گزاری جائے وہ کسی نفع کا نہیں۔",
      ro: "Kitabein parh lena ya maloomat hasil kar lena kafi nahi, jab tak us ilm ke mutabiq zindagi na guzari jaye woh kisi nafa ka nahi.",
      en: "Merely acquiring information is insufficient; knowledge only holds value when it transforms one's daily life and character."
    },
    tags: [
      { ur: "علم", ro: "Ilm", en: "Knowledge" },
      { ur: "عمل", ro: "Amal", en: "Action" }
    ]
  }
];

export const batch6Quotes: QuoteItem[] = [
  {
    id: "ma-076",
    slug: "us-din-se-daroo-jis-din-koi-kharid-o-frocht-nahi-hogi",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:254) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "قیامت کے دن سے پہلے راہِ خدا میں مال خرچ کرنے کی ترغیب",
      ro: "Qayamat Ke Din Se Pehle Raah-e-Khuda Mein Maal Kharch Karne Ki Targheeb",
      en: "Spending in Charity Before the Day of Reckoning Arrives"
    },
    quote: {
      ur: "اے ایمان والو! اس دن کے آنے سے پہلے پہلے اس رزق میں سے خرچ کر لو جو ہم نے تمہیں دیا ہے جس میں نہ کوئی خرید و فروخت ہوگی، اور نہ کوئی دوستی کام آئے گی اور نہ سفارش۔",
      ro: "Aye eman walo! Us din ke aane se pehle pehle us rizq mein se kharch kar lo jo hum ne tumhein diya hai jis mein na koi khareed-o-frocht hogi, aur na koi dosti kaam aayegi aur na sifarish.",
      en: "O you who have believed, spend from that which We have provided for you before there comes a Day in which there is no exchange and no friendship and no intercession."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان دنیا کی دولت کو جمع کرنے میں لگا رہتا ہے، لیکن موت کے بعد یہ مال کسی کام نہیں آتا جب تک کہ اسے نیک کاموں میں نہ لگایا گیا ہو۔ آج کا عملی سبق یہ ہے کہ زندگی کے اس قیمتی موقع کو غنیمت جانیں اور آخرت کے لیے صدقاتِ جاریہ کا بندوبست کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan duniya ki daulat ko jama karne mein laga rehta hai, lekin maut ke baad yeh maal kisi kaam nahi aata jab tak ke usay nek kaamon mein na lagaya gaya ho. Aaj ka amli sabaq yeh hai ke zindagi ke is qeemati mauqay ko ghaneemat janein aur akhirat ke liye sadqat-e-jariya ka bandobast karein.",
      en: "Context & Practical Lesson: Wealth holds no value in the Hereafter unless invested in charity and good deeds while living in this world."
    },
    tags: [
      { ur: "صدقہ جاریه", ro: "Sadqa-e-Jariya", en: "Ongoing Charity" },
      { ur: "فکرِ آخرت", ro: "Fikr-e-Akhirat", en: "Hereafter Awareness" }
    ]
  },
  {
    id: "ma-077",
    slug: "allah-ki-rah-mein-kharch-ka-asil-700-guna-ajr",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:261) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "راہِ خدا میں خرچ کرنے کی مثال: ایک دانے سے سات سو دانے",
      ro: "Raah-e-Khuda Mein Kharch Karne Ki Misaal: Aik Danay Se Saat Sau Danay",
      en: "The Parable of Spending in God's Path: One Grain Yields Seven Hundred"
    },
    quote: {
      ur: "جو لوگ اپنے مال اللہ کی راہ میں خرچ کرتے ہیں ان کی مثال اس دانے جیسی ہے جس نے سات بالیں اگائیں، ہر بال میں سو دانے ہوں؛ اور اللہ جس کے لیے چاہتا ہے کئی گناہ بڑھا دیتا ہے۔",
      ro: "Jo log apne maal Allah ki raah mein kharch karte hain un ki misal us danay jaisi hai jis ne saat baalein ugayin, har baal mein sau danay hon؛ aur Allah jis ke liye chahta hai kai guna barha deta hai.",
      en: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سخی انسان کا مال کبھی کم نہیں ہوتا بلکہ اللہ اس میں کئی گناہ برکت عطا فرماتا ہے۔ ایک دانے سے سات سو دانے نکلنے کا یہ انوکھا تمثیل بیان کرتا ہے کہ اخلاص سے دیا گیا تھوڑا سا صدقہ بھی آخرت میں پہاڑ جتنا اجر بن جاتا ہے۔ آج کا عملی سبق یہ ہے کہ راہِ خدا میں دینے سے کبھی ہاتھ نہ کھینچیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sakhi insan ka maal kabhi kam nahi hota balkay Allah us mein kai guna barkat ata farmata hai. Aik danay se saat sau danay nikalne ka yeh anokha tamseel bayan karta hai ke ikhlas se diya gaya thora sa sadqa bhi akhirat mein pahad jitna ajr ban jata hai. Aaj ka amli sabaq yeh hai ke raah-e-khuda mein dene se kabhi hath na khinchein.",
      en: "Context & Practical Lesson: Charity never depletes wealth; rather, sincere giving multiplies exponentially in spiritual blessings and rewards."
    },
    tags: [
      { ur: "برکتِ انفاق", ro: "Barkat-e-Infaq", en: "Blessing of Charity" },
      { ur: "کثیر اجر", ro: "Kaseer Ajr", en: "Multiplied Reward" }
    ]
  },
  {
    id: "ma-078",
    slug: "ehsan-jata-kar-aur-tazheek-kar-ke-sadqa-zaya-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:264) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "احسان جتلا کر اور طعنہ دے کر صدقے کو خاک میں ملانا",
      ro: "Ehsan Jata Kar Aur Taana De Kar Sadqay Ko Khak Mein Milana",
      en: "Destroying Charity Through Reminders of Generosity and Insult"
    },
    quote: {
      ur: "اے ایمان والو! اپنے صدقات کو احسان جتا کر اور تکلیف دے کر اس شخص کی طرح ضائع مت کرو جو اپنا مال لوگوں کو دکھانے کے لیے خرچ کرتا ہے اور نہ اللہ پر ایمان رکھتا ہے اور نہ یومِ آخرت پر۔",
      ro: "Aye eman walo! Apne sadqat ko ehsan jata kar aur takleef de kar us shakhs ki tarah zaya mat karo jo apna maal logon ko dikhane ke liye kharch karta hai aur na Allah par eman rakhta hai aur na yaum-e-akhirat par.",
      en: "O you who have believed, do not invalidate your charities with reminders [of it] or injury as does one who spends his wealth [only] to be seen by the people and does not believe in Allah and the Last Day."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: نیکی کر کے جتلا دینا یا غریب کی عزتِ نفس مجروح کرنا اس صدقے کی ساری کمائی کو ضائع کر دیتا ہے۔ یہ اس چکنے پتھر کی طرح ہے جس پر مٹی جمی ہو اور زور دار بارش اسے صاف کر کے بالکل ننگا پتھر چھوڑ جائے۔ آج کا عملی سبق یہ ہے کہ نیکی کو ہمیشہ صیغۂ راز میں رکھیں اور دکھاوے سے بچیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Neki kar ke jatla dena ya ghareeb ki izzat-e-nafs majrooh karna us sadqay ki sari kamai ko zaya kar deta hai. Yeh us chikne patthar ki tarah hai jis par mitti jami ho aur zor daar barish usay saaf kar ke bilkul nanga patthar chor jaye. Aaj ka amli sabaq yeh hai ke neki ko hamesha sigha-e-raaz mein rakhein aur dikhave se bachein.",
      en: "Context & Practical Lesson: Reminding recipients of your favors or humiliating them completely erases the spiritual merit of charity, much like rain washing soil off a bare rock."
    },
    tags: [
      { ur: "آدابِ صدقہ", ro: "Aadab-e-Sadqa", en: "Etiquette of Charity" },
      { ur: "ریاکاری سے پرہیز", ro: "Riyakari Se Parhez", en: "Avoiding Ostentation" }
    ]
  },
  {
    id: "ma-079",
    slug: "insaaf-aur-bad-tareen-zulm",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 74",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "عدل کی اہمیت اور انصاف کا قیام",
      ro: "Adal Ki Ahmiyat Aur Insaf Ka Qiyam",
      en: "The Importance of Justice and Equity"
    },
    quote: {
      ur: "ایک گھڑی کا عدل و انصاف ساٹھ سال کی نوافل عبادت سے بہتر ہے۔ انصاف حکومت کی بنیاد ہے۔",
      ro: "Aik ghari ka adal o insaf sath saal ki nawafil ibadat se behtar hai. Insaf hukumat ki bunyad hai.",
      en: "A single moment of true justice is better than sixty years of voluntary worship. Justice is the foundation of governance."
    },
    tashreeh: {
      ur: "معاشرے میں امن اور سکون صرف اور صرف عدل و انصاف کی فراہمی سے قائم ہو سکتا ہے۔ کمزور کو اس کا حق دلانا حکمران اور ذمہ دار کا سب سے بڑا فرض ہے۔",
      ro: "Muashray mein aman aur sukoon sirf aur sirf adal o insaf ki farahmi se qayam ho sakta hai. Kamzor ko us ka haq dilana hukmran aur zimmedar ka sab se bada farz hai.",
      en: "Peace and harmony in society are established solely through the delivery of justice. Ensuring rights for the weak is the primary duty of leaders."
    },
    tags: [
      { ur: "عدل", ro: "Adal", en: "Justice" },
      { ur: "انصاف", ro: "Insaf", en: "Equity" }
    ]
  },
  {
    id: "ma-080",
    slug: "neki-ki-taraf-sabat-qadmi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تھوڑے لیکن پائیدار اعمال",
      ro: "Thoray Lekin Paidar Aamaal",
      en: "Consistent and Enduring Deeds"
    },
    quote: {
      ur: "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جو اگرچہ چھوٹا ہو لیکن ہمیشہ اور پابندی کے ساتھ کیا جائے۔",
      ro: "Allah ke nazdeek sab se pasandeeda amal woh hai jo agarchay chota ho lekin hamesha aur pabandi ke sath kiya jaye.",
      en: "The most beloved deeds to Allah are those performed consistently, even if they are small."
    },
    tashreeh: {
      ur: "بڑے بڑے کام ایک دن میں نہیں ہوتے۔ نیکی کے راستے پر مستقل مزاجی اور مداومت ہی انسان کو منزل تک پہنچاتی ہے۔",
      ro: "Bade bade kaam aik din mein nahi hote. Neki ke rastay par mustaqil-mazaji aur mudawamat hi insan ko manzil tak pohanchati hai.",
      en: "Great achievements don't happen overnight. Steadiness and persistence along the path of virtue are what lead to success."
    },
    tags: [
      { ur: "استقامت", ro: "Istaqamat", en: "Steadfastness" },
      { ur: "عمل", ro: "Amal", en: "Action" }
    ]
  },
  {
    id: "ma-081",
    slug: "zaban-ki-hifazat-aur-salamti",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 84",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "زبان کی حفاظت اور سلامتی کا راز",
      ro: "Zaban Ki Hifazat Aur Salamti Ka Raaz",
      en: "Guarding the Tongue and the Secret of Safety"
    },
    quote: {
      ur: "جو شخص اپنی زبان پر قابو پا لیتا ہے، وہ اپنی آدھی مصیبتیں خود ہی ختم کر لیتا ہے۔",
      ro: "Jo shakhs apni zaban par qaboo pa leta hai, woh apni aadhi museebatein khud hi khatam kar leta hai.",
      en: "Whoever manages to control their tongue eliminates half of their troubles on their own."
    },
    tashreeh: {
      ur: "بے سوچے سمجھے بولنا انسان کو فتنوں میں مبتلا کر دیتا ہے۔ خاموشی اور احتیاط سے بات کرنا عقلمندی کی علامت ہے۔",
      ro: "Be-soche samjhe bolna insan ko fitnon mein mubtala kar deta hai. Khamoshi aur ehtiyat se baat karna aqalmandi ki alamat hai.",
      en: "Speaking without thought plunges a person into turmoil. Communicating with caution and silence is a hallmark of wisdom."
    },
    tags: [
      { ur: "زبان", ro: "Zaban", en: "Tongue" },
      { ur: "سلامتی", ro: "Salamti", en: "Safety" }
    ]
  },
  {
    id: "ma-082",
    slug: "sharm-aur-haya-aur-iman",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حیا اور ایمان کا باہمی تعلق",
      ro: "Haya Aur Eman Ka Bahami Talluq",
      en: "The Mutual Bond Between Modesty and Faith"
    },
    quote: {
      ur: "حیا ایمان کا حصہ ہے اور ایمان جنت میں لے جاتا ہے، جبکہ بے حیائی سختی اور بدخوئی کا نام ہے جو دوزخ میں لے جاتی ہے۔",
      ro: "Haya eman ka hissa hai aur eman Jannat mein le jata hai, jabkeh be-hayai sakhti aur bad-khoyi ka naam hai jo dozakh mein le jati hai.",
      en: "Modesty is a branch of faith, and faith leads to Paradise; whereas shamelessness is harshness and bad character, which leads to Hell."
    },
    tashreeh: {
      ur: "شرم و حیا انسان کو ہر قبیح اور برے فعل سے روکتی ہے، جو بالآخر اسے اخلاقی اور روحانی بلندی عطا کرتی ہے۔",
      ro: "Sharm o haya insan ko har qabeeh aur buray fe'l se rokti hai, jo bilakhir usay akhlaqi aur roohani bulandi ata karti hai.",
      en: "Modesty restrains a person from shameful and wicked deeds, ultimately granting moral and spiritual elevation."
    },
    tags: [
      { ur: "حیا", ro: "Haya", en: "Modesty" },
      { ur: "ایمان", ro: "Eman", en: "Faith" }
    ]
  },
  {
    id: "ma-083",
    slug: "aqalmand-aur-jahl-ki-pehchan",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "عقل مند اور جاہل میں فرق",
      ro: "Aqal-mand Aur Jahil Mein Farq",
      en: "The Difference Between the Wise and the Ignorant"
    },
    quote: {
      ur: "عقل مند کی بات اس کے دل سے نکلتی ہے اور پھر زبان پر آتی ہے، جبکہ بیوقوف کی بات صرف اس کی زبان پر ہوتی ہے اور دل سے اس کا کوئی تعلق نہیں۔",
      ro: "Aqal-mand ki baat us ke dil se nikalti hai aur phir zaban par aati hai, jabkeh bewakoof ki baat sirf us ki zaban par hoti hai aur dil se us ka koi talluq nahi.",
      en: "A wise person's words emerge from their heart before reaching their tongue, whereas a foolish person's words sit only on their tongue without touching their heart."
    },
    tashreeh: {
      ur: "دانش مند انسان گہرائی سے سوچ کر بات کرتا ہے جبکہ نادان بغیر سوچے سمجھے فضول گفتگو کرتا ہے۔",
      ro: "Danish-mand insan gehrai se soch kar baat karta hai jabkeh nadan baghair soche samjhe fuzool guftugu karta hai.",
      en: "A thoughtful person speaks with deep reflection, whereas a foolish person speaks idly without genuine comprehension."
    },
    tags: [
      { ur: "عقل", ro: "Aqal", en: "Intellect" },
      { ur: "گفتگو", ro: "Guftugu", en: "Speech" }
    ]
  },
  {
    id: "ma-084",
    slug: "duniya-ka-dhoka-aur-asal-ghar",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 355",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "دنیا ایک فریب ہے",
      ro: "Duniya Aik Fareeb Hai",
      en: "The World is an Illusion"
    },
    quote: {
      ur: "دنیا پانی کے بلبلے کی طرح ہے، اس کی رونق پر فریب ہے اور اس کی لذتیں فانی ہیں۔ اصل اور دائمی گھر صرف آخرت کا ہے۔",
      ro: "Duniya pani ke bulbulay ki tarah hai, is ki raunaq pur-fareeb hai aur is ki lazzatein fani hain. Asal aur daimi ghar sirf akhirat ka hai.",
      en: "The world is like a bubble on water; its splendor is an illusion and its pleasures are fleeting. The only true and permanent home is the hereafter."
    },
    tashreeh: {
      ur: "دنیا کی ظاہری چمک دمک میں آ کر آخرت کو بھول جانا انسان کی سب سے بڑی حماقت ہے۔",
      ro: "Duniya ki zahiri chamak-damak mein aa kar akhirat ko bhool jana insan ki sab se badi humaqat hai.",
      en: "Getting blinded by worldly glitz and forgetting the eternal life of the hereafter is the greatest human folly."
    },
    tags: [
      { ur: "دنیا", ro: "Duniya", en: "Worldly Life" },
      { ur: "آخرت", ro: "Akhirat", en: "Hereafter" }
    ]
  },
  {
    id: "ma-085",
    slug: "qarz-jald-ada-karne-ki-fazilat-aur-tal-matol-ki-muzammatt",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari (2305, 2387) & Sunan Ibn Majah (2413)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "قرض جلد ادا کرنے کی فضیلت اور سچی نیت میں غیبی مدد",
      ro: "Qarz Jald Ada Karne Ki Fazilat Aur Sachi Niyat Mein Ghaibi Madad",
      en: "Virtue of Prompt Debt Repayment and Unseen Aid for Sincere Borrowers"
    },
    quote: {
      ur: "تم میں سے سب سے بہترین لوگ وہ ہیں جو قرض کی ادائیگی میں سب سے اچھے اور وقت کے پابند ہیں؛ اور جو شخص لوگوں کا مال ادا کرنے کی سچی نیت سے قرض لیتا ہے اللہ اس کی طرف سے ادائیگی کے اسباب پیدا فرما دیتا ہے، جبکہ استطاعت کے باوجود ادائیگی میں ٹال مٹول کرنا ظلم ہے۔",
      ro: "Tum mein se sab se behtareen log woh hain jo qarz ki adaigi mein sab se achay aur waqt ke paband hain; aur jo shakhs logon ka maal ada karne ki sachi niyat se qarz leta hai Allah us ki taraf se adaigi ke asbab paida farma deta hai, jabkeh istita'at ke bawajood adaigi mein taal-matol karna zulm hai.",
      en: "The best among you are those finest and promptest in repaying their debts; whoever borrows with the sincere resolve to pay back, Allah opens pathways for their repayment, whereas delaying payment despite having means is injustice."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرض ایک ایسی ذمہ داری ہے جس کی معافی اللہ کے نزدیک بھی صاحبِ حق کی ادائیگی یا معافی سے مشروط ہے۔ جو شخص ادھار لیتے وقت واپسی کا پختہ ارادہ رکھے اللہ اس کے رزق میں برکت ڈالتا ہے، مگر پیسے ہونے کے باوجود قرض خواہ کو چکر لگوانا کبیرہ ظلم اور بے برکتی کی جڑ ہے۔ آج کا عملی سبق یہ ہے کہ جب بھی ہاتھ میں رقم آئے، اپنے شوق اور فضول خرچی سے پہلے دوسروں کا قرض فوری ادا کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Qarz aik aisi zimmedari hai jis ki maafi Allah ke nazdeek bhi sahib-e-haq ki adaigi ya maafi se mashroot hai. Jo shakhs udhar lete waqt wapsi ka pukhta irada rakhay Allah us ke rizq mein barkat dalta hai, magar paisay hone ke bawajood qarz-khwah ko chakkar lagwana kabeera zulm aur be-barkati ki jarr hai. Aaj ka amli sabaq yeh hai ke jab bhi hath mein raqam aaye, apne shouq aur fuzool-kharchi se pehle doosron ka qarz fori ada karein.",
      en: "Context & Practical Lesson: Sincere intent to repay invites divine assistance, whereas deliberately delaying repayment despite having the ability destroys trust and constitutes oppression. Always prioritize settling debts over personal luxuries."
    },
    tags: [
      { ur: "قرض کی ادائیگی", ro: "Qarz Ki Adaigi", en: "Debt Repayment" },
      { ur: "معاشی دیانت", ro: "Maashi Diyanat", en: "Financial Ethics" }
    ]
  },
  {
    id: "ma-086",
    slug: "gusse-par-qaboo-aur-burd-bari",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 241",
    author: {
      ur: "حکیم سقراط",
      ro: "Hakeem Suqrat",
      en: "Socrates"
    },
    title: {
      ur: "غصے کے وقت بردباری کا مظاہرہ",
      ro: "Gusse Ke Waqt Burd-bari Ka Muzahira",
      en: "Demonstrating Forbearance in Anger"
    },
    quote: {
      ur: "غصہ عقل کا دشمن ہے، جب غصہ آتا ہے تو عقل رخصت ہو جاتی ہے اور انسان ہوش کھو بیٹھتا ہے۔",
      ro: "Ghussa aqal ka dushman hai, jab ghussa aata hai to aqal rukhsat ho jati hai aur insan hosh kho baithta hai.",
      en: "Anger is the enemy of intellect; when anger enters, reason departs and a person loses good judgment."
    },
    tashreeh: {
      ur: "غصے کے عالم میں لیے گئے فیصلے اور کہے گئے الفاظ ہمیشہ ندامت کا باعث بنتے ہیں۔ اس لیے غصے پر قابو پانا ضروری ہے۔",
      ro: "Gusse ke aalam mein liye gaye faisle aur kahe gaye alfaz hamesha nadamat ka baas bante hain. Is liye gusse par qaboo pana zaroori hai.",
      en: "Decisions made and words uttered in the heat of anger invariably lead to regret, making emotional self-control vital."
    },
    tags: [
      { ur: "غصہ", ro: "Ghussa", en: "Anger" },
      { ur: "بردباری", ro: "Burd-bari", en: "Forbearance" }
    ]
  },
  {
    id: "ma-087",
    slug: "rizq-ki-tqseem-aur-raza",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اللہ کی تقسیم پر راضی رہنا",
      ro: "Allah Ki Taqseem Par Raazi Rehna",
      en: "Being Content with Divine Allocation"
    },
    quote: {
      ur: "جو کچھ اللہ نے تمہیں عطا کیا ہے اس پر قناعت کرو، تم سب سے زیادہ غنی ہو جاؤ گے۔",
      ro: "Jo kuch Allah ne tumhein ata kiya hai us par qana'at karo, tum sab se zyada ghani ho jao ge.",
      en: "Be content with what Allah has apportioned for you, and you will be the richest of people."
    },
    tashreeh: {
      ur: "دوسروں کے مال پر نظر رکھنے کے بجائے اپنے پاس موجود رزق پر شکر کرنے والا انسان ہمیشہ دل کا بادشاہ رہتا ہے۔",
      ro: "Doosron ke maal par nazar rakhne ke bajaye apne paas maujood rizq par shukr karne wala insan hamesha dil ka badshah rehta hai.",
      en: "Instead of eyeing what others possess, one who appreciates their own provision lives like a king in heart."
    },
    tags: [
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" },
      { ur: "شکر", ro: "Shukr", en: "Gratitude" }
    ]
  },
  {
    id: "ma-088",
    slug: "sulah-karane-ki-fazilat-nafli-roze-aur-namaz-se-afzal",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Abi Dawud (4919) & Sunan al-Tirmidhi (2509)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "صلح کرانے کی فضیلت: آپس کی رنجشیں مٹانا عظیم عبادت ہے",
      ro: "Sulah Karane Ki Fazilat: Aapas Ki Ranjishein Mitana Azeem Ibadat Hai",
      en: "Virtue of Reconciliation: Mending Broken Hearts Surpasses Voluntary Worship"
    },
    quote: {
      ur: "کیا میں تمہیں نفلی روزے، نفلی نماز اور صدقے کے درجے سے بھی افضل عمل نہ بتاؤں؟ وہ لوگوں کے درمیان بگڑے ہوئے تعلقات درست کر کے صلح کرانا ہے، کیونکہ آپس کی پھوٹ اور فساد دین کی جڑ کو مونڈ کر رکھ دیتا ہے۔",
      ro: "Kya main tumhein nafli roze, nafli namaz aur sadqay ke darjay se bhi afzal amal na bataoon? Woh logon ke darmiyan bigray huye talluqat durust kar ke sulah karana hai, kyunkeh aapas ki phoot aur fasad deen ki jarr ko moond kar rakh deta hai.",
      en: "Shall I not tell you of a deed higher in rank than voluntary fasting, prayer, and charity? It is reconciling people and mending strained relationships, for mutual discord shaves away the very roots of faith."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جب دو بھائیوں، دوستوں یا رشتہ داروں میں ناراضگی پیدا ہوتی ہے تو شیطان سب سے زیادہ خوش ہوتا ہے اور نیکیوں کی رونق ختم ہو جاتی ہے۔ حضور اکرم ﷺ نے دو روٹھے ہوئے دلوں کو جوڑنے کا اجر نفلی عبادات سے بھی بڑھا کر بیان فرمایا۔ آج کا عملی سبق یہ ہے کہ اپنے خاندان یا حلقۂ احباب میں غلط فہمی کی آگ بھڑکانے کے بجائے محبت اور حکمت سے صلح کا پل بنیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jab do bhaiyon, doston ya rishtedaron mein narazgi paida hoti hai to shaitan sab se zyada khush hota hai aur nekiyon ki raunaq khatam ho jati hai. Huzoor Akram ﷺ ne do roothay huye dilon ko jorne ka ajr nafli ibadat se bhi barha kar bayan farmaya. Aaj ka amli sabaq yeh hai ke apne khandan ya halqa-e-ahbab mein ghalat-fahmi ki aag bharkane ke bajaye muhabbat aur hikmat se sulah ka pul banein.",
      en: "Context & Practical Lesson: Fractured relationships drain spiritual life from a community. Becoming a bridge-builder who heals misunderstandings through empathy and discretion earns reward beyond voluntary devotions."
    },
    tags: [
      { ur: "صلح کرانا", ro: "Sulah Karana", en: "Peacemaking" },
      { ur: "اتحاد و اخوت", ro: "Ittihad o Ukhuwat", en: "Unity" }
    ]
  },
  {
    id: "ma-089",
    slug: "ilm-ka-asil-maqsad-amal",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 92",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "علم عمل کی دعوت دیتا ہے",
      ro: "Ilm Amal Ki Dawat Deta Hai",
      en: "Knowledge Calls Out for Action"
    },
    quote: {
      ur: "علم عمل کو پکارتا ہے، اگر وہ جواب دے دے تو وہیں ٹھہرتا ہے ورنہ کوچ کر جاتا ہے۔",
      ro: "Ilm amal ko pukarta hai, agar woh jawab de de to wahin theharta hai warna koch kar jata hai.",
      en: "Knowledge calls out for action; if action responds, knowledge stays; otherwise, it departs."
    },
    tashreeh: {
      ur: "اگر انسان حاصل کردہ علم کے مطابق زندگی نہ گزارے تو وہ علم آہستہ آہستہ ذہن سے محو ہو جاتا ہے۔ علم کا فائدہ صرف عمل سے ہے۔",
      ro: "Insan agar hasil karda ilm ke mutabiq zindagi na guzare to woh ilm ahista ahista zehen se mahw ho jata hai. Ilm ka faida sirf amal se hai.",
      en: "If knowledge is not put into practice, it gradually fades away. The true benefit of knowledge lies entirely in application."
    },
    tags: [
      { ur: "علم و عمل", ro: "Ilm o Amal", en: "Knowledge and Action" },
      { ur: "عمل", ro: "Amal", en: "Action" }
    ]
  },
  {
    id: "ma-090",
    slug: "aakhirat-ki-tayari-aur-ghaflat",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 356",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "غفلت کی نیند سے بیداری",
      ro: "Ghaflat Ki Neend Se Bedari",
      en: "Awakening from the Sleep of Heedlessness"
    },
    quote: {
      ur: "خوش قسمت ہے وہ انسان جو موت سے پہلے موت کی تیاری کر لے اور غفلت کی نیند سے بیدار ہو جائے۔",
      ro: "Khush-qismat hai woh insan jo maut se pehle maut ki tayari kar le aur ghaflat ki neend se bedar ho jaye.",
      en: "Fortunate is the person who prepares for death before it arrives and awakens from the sleep of heedlessness."
    },
    tashreeh: {
      ur: "زندگی کا یہ وقت دوبارہ نہیں ملے گا۔ عارضی دنیا میں دل لگانے کے بجائے دائمی آخرت کے لیے نیک اعمال کا توشہ جمع کرنا ہی عقلمندی ہے۔",
      ro: "Zindagi ka yeh waqt dobara nahi milega. Aarzi duniya mein dil lagane ke bajaye daimi akhirat ke liye nek aamaal ka tosha jama karna hi aqalmandi hai.",
      en: "This life will not come again. Rather than attaching oneself to the temporary world, gathering provisions of good deeds for eternity is true wisdom."
    },
    tags: [
      { ur: "آخرت", ro: "Akhirat", en: "Hereafter" },
      { ur: "بیداری", ro: "Bedari", en: "Awakening" }
    ]
  }
];

export const batch7Quotes: QuoteItem[] = [
  {
    id: "ma-091",
    slug: "sabr-aur-namaz-se-madad-hasil-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:45) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مشکلات میں صبر اور نماز کے ذریعے مدد طلب کرنا",
      ro: "Mushkilat Mein Sabr Aur Namaz Ke Zariye Madad Talab Karna",
      en: "Seeking Help Through Patience and Prayer"
    },
    quote: {
      ur: "اور صبر اور نماز کے ساتھ (اللہ کی) مدد حاصل کرو؛ اور بے شک یہ (نماز) بہت بھاری ہے مگر ان لوگوں پر جو (خدا سے) ڈرنے والے ہیں۔",
      ro: "Aur sabr aur namaz ke sath (Allah ki) madad hasil karo; aur be-shak yeh (namaz) bohot bhari hai magar un logon par jo (Khuda se) darne wale hain.",
      en: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah]."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: زندگی میں جب بھی کوئی مصیبت یا بحران آئے تو انسان کو گھبرانے کے بجائے صبر اور نماز کا سہارا لینا چاہیے۔ نماز انسان کو رب سے جوڑتی ہے اور صبر اسے مضبوطی دیتا ہے۔ آج کا عملی سبق یہ ہے کہ پریشانی کے عالم میں دو نفل ادا کر کے اپنے دل کا بوجھ ہلکا کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Zindagi mein jab bhi koi museebat ya buhran aaye to insan ko ghabrane ke bajaye sabr aur namaz ka sahara lena chahiye. Namaz insan ko Rab se jorti hai aur sabr usay mazbooti deta hai. Aaj ka amli sabaq yeh hai ke pareshani ke aalam mein do nafal ada kar ke apne dil ka bojh halka karein.",
      en: "Context & Practical Lesson: Whenever trials strike, turning to patience and prayer reconnects the heart with divine strength and relief."
    },
    tags: [
      { ur: "صبر و نماز", ro: "Sabr o Namaz", en: "Patience & Prayer" },
      { ur: "توکل", ro: "Tawakkul", en: "Reliance" }
    ]
  },
  {
    id: "ma-092",
    slug: "haq-ko-batil-ke-sath-mix-mat-karo",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:42) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "حق اور باطل کو خلط ملط نہ کرنا اور سچائی کو نہ چھپانا",
      ro: "Haq Aur Batil Ko Khalt-Malt Na Karna Aur Sachai Ko Na Chhupana",
      en: "Not Mixing Truth with Falsehood or Concealing the Truth"
    },
    quote: {
      ur: "اور حق کو باطل کے ساتھ خلط ملط نہ کرو، اور نہ ہی جانتے بوجھتے سچائی کو چھپاؤ۔",
      ro: "Aur haq ko batil ke sath khalt-malt na karo, aur na hi jaante boojhte sachai ko chhupao.",
      en: "And do not mix the truth with falsehood or conceal the truth while you know [it]."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سچ اور جھوٹ کو ملا کر پیش کرنا یا مفاد کی خاطر حق بات کو دبا دینا معاشرتی بگاڑ کی بڑی وجہ ہے۔ مومن کا شیوہ یہ ہے کہ وہ دوٹوک انداز میں سچ کا ساتھ دے اور فریب سے بچے جو کہ باطل کی علامات ہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sach aur jhoot ko mila kar pesh karna ya mufad ki khatir haq baat ko daba dena maasharati bigaar ki badi wajah hai. Momin ka shewa yeh hai ke woh do-took andaz mein sach ka sath de aur fareeb se bache jo ke batil ki alamaat hain.",
      en: "Context & Practical Lesson: Integrity requires presenting the truth clearly without adulterating it with deceit or convenient silence."
    },
    tags: [
      { ur: "سچائی", ro: "Sachai", en: "Truthfulness" },
      { ur: "شفافیت", ro: "Shafafiyat", en: "Transparency" }
    ]
  },
  {
    id: "ma-093",
    slug: "kisiko-zabardasti-deen-mein-dakhil-mat-karo",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:256) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "دین کے معاملے میں کوئی زبردستی یا جبر نہیں ہے",
      ro: "Deen Ke Mamlay Mein Koi Zabardasti Ya Jabr Nahi Hai",
      en: "No Compulsion in Religion"
    },
    quote: {
      ur: "دین میں کوئی زبردستی نہیں ہے؛ ہدایت گمراہی سے بالکل واضح ہو چکی ہے، لہٰذا جو شخص طاغوت کا انکار کرے اور اللہ پر ایمان لے آئے تو اس نے ایسا مضبوط دستہ تھام لیا جو کبھی ٹوٹنے والا نہیں۔",
      ro: "Deen mein koi zabardasti nahi hai; hidayat gumrahi se bilkul wazeh ho chuki hai, lehaza jo shakhs taghoot ka inkar kare aur Allah par eman le aaye to us ne aisa mazboot dasta tham liya jo kabhi tootne wala nahi.",
      en: "There is no compulsion in religion. Right is clear from wrong. So whoever disbelieves in false deities and believes in Allah has grasped the most trustworthy handhold with no break in it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام اخلاقی اقدار اور دعوت کا دین ہے جو دلیل اور اچھے اخلاق کے ذریعے دلوں میں اترتا ہے، نہ کہ زبردستی سے۔ آج کا عملی سبق یہ ہے کہ دوسروں کو اپنی بات منوانے کے لیے مجبور کرنے کے بجائے اچھے کردار سے ان کی رہنمائی کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam akhlaqi aqdar aur dawat ka deen hai jo daleel aur achay akhlaq ke zariye dilon mein utarta hai, na ke zabardasti se. Aaj ka amli sabaq yeh hai ke doosron ko apni baat manwane ke liye majboor karne ke bajaye achay kirdar se un ki rehnumai karein.",
      en: "Context & Practical Lesson: Faith is a matter of conviction and heart, not coercion; true guidance is communicated through beautiful character and wisdom."
    },
    tags: [
      { ur: "رواداری", ro: "Rawadari", en: "Tolerance" },
      { ur: "آزادیٔ ضمیر", ro: "Aazadi-e-Zameer", en: "Freedom of Conscience" }
    ]
  },
  {
    id: "ma-094",
    slug: "hamsaye-ki-amanat-izzat-o-maal-ki-hifazat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan al-Tirmidhi (1944) & Sahih Muslim (46)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ہمسائے کی امانت: پڑوسی کی عزت، گھر اور راز کی حفاظت",
      ro: "Hamsaye Ki Amanat: Padosi Ki Izzat, Ghar Aur Raaz Ki Hifazat",
      en: "Neighborly Trust: Guarding Your Neighbor's Honor, Home, and Secrets"
    },
    quote: {
      ur: "اللہ تعالیٰ کے نزدیک سب سے بہترین ساتھی وہ ہے جو اپنے ساتھی کے لیے خیر خواہ ہو، اور اللہ کے نزدیک سب سے بہترین ہمسایہ وہ ہے جو اپنے ہمسائے کے لیے سب سے زیادہ امانت دار اور بہتر ہو؛ اور سچا مومن وہ ہے جس کی ہمسائیگی میں لوگ اپنی جان، مال اور عزت کو محفوظ سمجھیں۔",
      ro: "Allah Ta'ala ke nazdeek sab se behtareen sathi woh hai jo apne sathi ke liye khair-khwah ho, aur Allah ke nazdeek sab se behtareen hamsaya woh hai jo apne hamsaye ke liye sab se zyada amanat-dar aur behtar ho; aur sacha momin woh hai jis ki hamsaigi mein log apni jaan, maal aur izzat ko mehfooz samjhein.",
      en: "The best companion in the sight of Allah is the one best to their companion, and the best neighbor in the sight of Allah is the one most trustworthy and caring toward their neighbor; true faith shines when neighbors feel completely safe in their lives, property, and honor beside you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ہمسایہ صرف دیوار کے اس پار رہنے والا اجنبی نہیں بلکہ اس کے گھر کا پردہ، اس کی عدم موجودگی میں اس کے بچوں اور سامان کی حفاظت، اور اس کے گھریلو معاملات کی رازداری ہمارے اوپر ایک بھاری امانت ہے۔ پڑوسی کے گھر کی ٹوہ میں رہنا یا اس کی غیبت کرنا اس امانت میں بدترین خیانت ہے۔ آج کا عملی سبق یہ ہے کہ اپنے پڑوسی کی غیر حاضری میں بھی اس کے گھر اور عزت کے خاموش محافظ بنیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hamsaya sirf deewar ke us paar rehne wala ajnabi nahi balkay us ke ghar ka parda, us ki adam-maujoodgi mein us ke bachon aur saman ki hifazat, aur us ke gharelu muamlat ki raaz-dari hamare oopar aik bhari amanat hai. Padosi ke ghar ki toh mein rehna ya us ki gheebat karna is amanat mein bad-tareen khayanat hai. Aaj ka amli sabaq yeh hai ke apne padosi ki ghair-haazri mein bhi us ke ghar aur izzat ke khamosh muhafiz banein.",
      en: "Context & Practical Lesson: A neighbor's privacy, family security in their absence, and dignity are sacred trusts upon those living next door. Guard their honor silently and never pry or gossip about their household."
    },
    tags: [
      { ur: "ہمسائے کی امانت", ro: "Hamsaye Ki Amanat", en: "Neighborly Trust" },
      { ur: "پردہ پوشی", ro: "Parda-Poshi", en: "Protecting Privacy" }
    ]
  },
  {
    id: "ma-095",
    slug: "buzurgon-ka-ikram-aur-burhapay-mein-izzt-ka-wada",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan al-Tirmidhi (2022) & Makhzan-e-Akhlaq",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بزرگوں کا اکرام: بڑی عمر والوں کی عزت پر رب کا انعام",
      ro: "Buzurgon Ka Ikram: Bari Umar Walon Ki Izzat Par Rab Ka Inam",
      en: "Honoring the Elderly: A Divine Promise for Respecting Seniors"
    },
    quote: {
      ur: "جو نوجوان کسی بزرگ کی بڑی عمر کے احترام میں اس کی عزت و تکریم کرتا ہے، اللہ تعالیٰ اس کے بڑھاپے کے وقت ایسے لوگ مقرر فرما دیتا ہے جو اس کی عزت و خدمت کریں۔",
      ro: "Jo naujawan kisi buzurg ki bari umar ke ehtiram mein us ki izzat o takreem karta hai, Allah Ta'ala us ke burhapay ke waqt aisay log muqarrar farma deta hai jo us ki izzat o khidmat karein.",
      en: "Whenever a young person honors an elderly person out of respect for their age, Allah appoints people to honor and care for them when they reach old age."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جوانی کا غرور بعض اوقات انسان کو بوڑھے والدین، ضعیف رشتہ داروں اور بڑی عمر کے لوگوں سے بیزار کر دیتا ہے، حالانکہ ہر جوان کو کل اسی کمزوری کے دور سے گزرنا ہے۔ یہ حدیث ایک الٰہی قانونِ مکافات بیان کرتی ہے کہ آج ہم بزرگوں کے لیے جگہ خالی کریں گے اور ان کی بات محبت سے سنیں گے تو کل ہمارا بڑھاپا بھی باعزت گزرے گا۔ آج کا عملی سبق یہ ہے کہ محفل، سفر یا قطار میں ہر ضعیف بزرگ کو آگے بڑھ کر عزت و ترجیح دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jawani ka ghuroor baaz auqat insan ko boorhay walideen, zaeef rishtedaron aur bari umar ke logon se bezar kar deta hai, halankeh har jawan ko kal isi kamzori ke dor se guzarna hai. Yeh hadith aik Ilahi qanoon-e-mukafaat bayan karti hai ke aaj hum buzurgon ke liye jagah khali karein ge aur un ki baat muhabbat se sunein ge to kal hamara burhapa bhi ba-izzat guzray ga. Aaj ka amli sabaq yeh hai ke mehfil, safar ya qatar mein har zaeef buzurg ko aagay barh kar izzat o tarjeeh dein.",
      en: "Context & Practical Lesson: Respecting senior citizens is both a moral duty and an investment in your own future. Yielding your seat, listening patiently, and greeting elders warmly ensures dignity returns to you in old age."
    },
    tags: [
      { ur: "بزرگوں کا اکرام", ro: "Buzurgon Ka Ikram", en: "Honoring Elders" },
      { ur: "معاشرتی ادب", ro: "Muasharti Adab", en: "Social Respect" }
    ]
  },
  {
    id: "ma-096",
    slug: "tamam-aza-ki-zaban-se-darkhwast",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "انسانی اعضاء کی زبان سے التجا",
      ro: "Insani Aza Ki Zaban Se Iltija",
      en: "The Plea of the Body's Limbs to the Tongue"
    },
    quote: {
      ur: "سب اعضاء زبان سے درخواست کرتے ہیں کہ ہمارا خیال کر کے اللہ تعالیٰ سے ڈرنا؛ اگر تو سیدھی رہی تو ہم بھی سیدھے رہیں گے، اور اگر تو ٹیڑھی ہو گئی تو ہم بھی ٹیڑھے ہو جائیں گے۔",
      ro: "Sab aza zaban se darkhwast karte hain ke hamara khayal kar ke Allah Ta'ala se darna; agar tu seedhi rahi to hum bhi seedhe rahenge, aur agar tu terhi ho gayi to hum bhi terhe ho jayenge.",
      en: "All limbs of the body appeal to the tongue, saying: Fear Allah concerning us; for if you remain upright, we too will remain upright, and if you go crooked, we too will go astray."
    },
    tashreeh: {
      ur: "انسان کے پورے جسم اور کردار کا دارومدار اس کی زبان پر ہے۔ اگر زبان سچائی اور پاکیزگی پر قائم رہے تو سارے اعمال درست رہتے ہیں، اور زبان بگڑ جائے تو پورا وجود گناہ میں پڑ جاتا ہے۔",
      ro: "Insan ke poore jism aur kirdar ka daromadar us ki zaban par hai. Agar zaban sachai aur pakeezgi par qayam rahe to saray aamaal durust rehte hain, aur zaban bigar jaye to poora wujood gunah mein par jata hai.",
      en: "The moral uprightness of the entire body depends upon the tongue. When speech is pure and truthful, actions follow suit; when speech is corrupt, the whole character suffers."
    },
    tags: [
      { ur: "زبان", ro: "Zaban", en: "Speech" },
      { ur: "استقامت", ro: "Istaqamat", en: "Rectitude" }
    ]
  },
  {
    id: "ma-097",
    slug: "sulah-karana-aur-rasta-saaf-karna-sadqa",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "روزمرہ کی نیکیاں جو بہترین صدقہ ہیں",
      ro: "Rozmarra Ki Nekiyan Jo Behtareen Sadqa Hain",
      en: "Everyday Acts of Kindness That Count as Charity"
    },
    quote: {
      ur: "دو شخصوں کے درمیان صلح کرا دینا صدقہ ہے، کسی کو سہارا دے کر اس کا بوجھ لدوا دینا بھی صدقہ ہے، اچھا قول بھی صدقہ ہے، اور راستے سے اذیت دینے والی چیز ہٹا دینا بھی صدقہ ہے۔",
      ro: "Do shakhson ke darmiyan sulah kara dena sadqa hai, kisi ko sahara de kar us ka bojh ladwa dena bhi sadqa hai, acha qoul bhi sadqa hai, aur rastay se aziyat dene wali cheez hata dena bhi sadqa hai.",
      en: "Reconciling two people is charity, helping someone load their mount is charity, a kind word is charity, and removing a harmful object from the road is charity."
    },
    tashreeh: {
      ur: "اسلام نے صدقے کو صرف مالداروں تک محدود نہیں رکھا۔ غریب سے غریب انسان بھی روٹھے ہوؤں کو منا کر، میٹھا بول بول کر یا راستے کا پتھر ہٹا کر صدقے کا پورا ثواب کما سکتا ہے۔",
      ro: "Islam ne sadqay ko sirf maaldaron tak mehdood nahi rakha. Ghareeb se ghareeb insan bhi roothay huwon ko mana kar, meetha bol bol kar ya rastay ka pathar hata kar sadqay ka poora sawab kama sakta hai.",
      en: "Charity in Islam is not restricted to wealth. Every person can earn the reward of charity by making peace, offering a kind word, or clearing obstacles from people's paths."
    },
    tags: [
      { ur: "صدقہ", ro: "Sadqa", en: "Charity" },
      { ur: "معاشرتی خدمت", ro: "Muasharti Khidmat", en: "Civic Duty" }
    ]
  },
  {
    id: "ma-098",
    slug: "salan-mein-pani-barha-kar-hamsaye-ka-hissa",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "کھانے میں اپنے ہمسائے کو یاد رکھنا",
      ro: "Khane Mein Apne Hamsaye Ko Yaad Rakhna",
      en: "Sharing Your Meal with Your Neighbor"
    },
    quote: {
      ur: "حسنِ خلق کو حقیر مت سمجھو خواہ وہ اسی قدر ہو کہ تم اپنے بھائی سے بکشادہ پیشانی ملو؛ اور جب سالن پکاؤ تو اس میں پانی ذرا زیادہ ڈال لیا کرو اور اپنے ہمسائے کو اس میں سے دے ڈالو۔",
      ro: "Husn-e-khulq ko haqeer mat samjho khwah woh isi qadar ho ke tum apne bhai se ba-kushada peshani milo; aur jab salan pakao to us mein pani zara zyada daal liya karo aur apne hamsaye ko us mein se de dalo.",
      en: "Never belittle any act of kindness, even meeting your brother with a cheerful face; and when you cook broth, add a little extra water and share a portion with your neighbor."
    },
    tashreeh: {
      ur: "محبت اور ہمدردی کے لیے بڑے تکلف کی ضرورت نہیں ہوتی۔ اپنے گھر کے معمولی کھانے میں شوربہ بڑھا کر پڑوسی کے گھر بھیج دینا دلوں میں بے پناہ اپنائیت پیدا کرتا ہے۔",
      ro: "Mohabbat aur hamdardi ke liye bade takalluf ki zaroorat nahi hoti. Apne ghar ke mamooli khane mein shorba barha kar parosi ke ghar bhej dena dilon mein be-panah apnaiyat paida karta hai.",
      en: "Kindness does not require extravagance. Simply increasing the broth in a humble meal to share with a neighbor nurtures deep warmth and community spirit."
    },
    tags: [
      { ur: "ہمسایہ", ro: "Hamsaya", en: "Neighbors" },
      { ur: "سخاوت", ro: "Sakhawat", en: "Hospitality" }
    ]
  },
  {
    id: "ma-099",
    slug: "nemat-ki-hifazat-logon-ki-hajat-rawai-mein",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 23",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "نعمتوں کی بقا کا راز لوگوں کے کام آنے میں ہے",
      ro: "Nematon Ki Baqa Ka Raaz Logon Ke Kaam Aane Mein Hai",
      en: "Preserving Blessings by Serving People's Needs"
    },
    quote: {
      ur: "جب کسی بندے پر اللہ تعالیٰ کی نعمت زیادہ ہوتی ہے تو اس کی طرف لوگوں کی حاجتیں بھی زیادہ ہوتی ہیں؛ اگر وہ ان سے سستی برتتا ہے تو اس نعمت کے کھونے کے درپے ہوتا ہے۔",
      ro: "Jab kisi banday par Allah Ta'ala ki nemat zyada hoti hai to us ki taraf logon ki hajatein bhi zyada hoti hain; agar woh un se susti baratta hai to us nemat ke khone ke darpay hota hai.",
      en: "When Allah bestows abundant blessings upon a servant, He also directs people's needs toward them; if they grow neglectful in helping, they expose those blessings to decline."
    },
    tashreeh: {
      ur: "مال، عہدہ اور اختیار اللہ کی امانت ہیں۔ اگر آپ کے دروازے پر حاجت مند آتے ہیں تو یہ اللہ کا کرم ہے؛ ان کی مدد سے منہ موڑنا نعمت کے چھن جانے کا سبب بن سکتا ہے۔",
      ro: "Maal, ohda aur ikhtiyar Allah ki amanat hain. Agar aap ke darwazay par hajat-mand aate hain to yeh Allah ka karam hai; un ki madad se munh morna nemat ke chhin jane ka sabab ban sakta hai.",
      en: "Wealth and influence are divine trusts. Having people turn to you for help is a privilege; neglecting their needs risks losing the very blessings you enjoy."
    },
    tags: [
      { ur: "نعمت", ro: "Nemat", en: "Blessings" },
      { ur: "حاجت روائی", ro: "Hajat-Rawai", en: "Helping Others" }
    ]
  },
  {
    id: "ma-100",
    slug: "khauf-e-khuda-ke-sath-thora-rizq-aur-danishmand-biwi",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 61",
    author: {
      ur: "حضرت سلیمان علیہ السلام",
      ro: "Hazrat Suleman (A.S)",
      en: "Prophet Solomon (A.S)"
    },
    title: {
      ur: "پاکیزہ رزق اور دانشمند شریکِ حیات کی قدر",
      ro: "Pakeeza Rizq Aur Danishmand Shareek-e-Hayat Ki Qadr",
      en: "Pure Sustenance and the Blessing of a Wise Spouse"
    },
    quote: {
      ur: "تھوڑا جو اللہ کے خوف کے ساتھ ہو اس بڑے گنج سے جو رنج کے ساتھ ہو بہتر ہے۔ گھر اور مال وہ میراث ہے جو باپ سے حاصل ہوتی ہے، لیکن دانشمند بیوی نعمتِ الٰہی ہے۔",
      ro: "Thora jo Allah ke khauf ke sath ho us bade ganj se jo ranj ke sath ho behtar hai. Ghar aur maal woh miras hai jo baap se hasil hoti hai, lekin danishmand biwi nemat-e-Ilahi hai.",
      en: "A little earned with the fear of God is better than a great treasure accompanied by turmoil. Houses and wealth are inherited from fathers, but a wise wife is a direct gift from God."
    },
    tashreeh: {
      ur: "حلال اور باوقار طریقے سے کمایا گیا تھوڑا رزق حرام کے بڑے خزانوں سے کہیں زیادہ سکون دیتا ہے، اور گھر کا حقیقی سکون نیک و سمجھدار شریکِ حیات سے وابستہ ہے۔",
      ro: "Halal aur ba-waqar tareeqay se kamaya gaya thora rizq haram ke bade khazanon se kahin zyada sukoon deta hai, aur ghar ka haqeeqi sukoon nek o samajhdar shareek-e-hayat se wabasta hai.",
      en: "Modest provision accompanied by piety brings far greater peace than troubled riches, and a wise, righteous spouse is the true crown of a peaceful home."
    },
    tags: [
      { ur: "سکون", ro: "Sukoon", en: "Peace" },
      { ur: "خاندان", ro: "Khandan", en: "Family" }
    ]
  },
  {
    id: "ma-101",
    slug: "aib-joi-se-parhez-aur-narmi-se-islah",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 64",
    author: {
      ur: "حضرت عیسیٰ علیہ السلام",
      ro: "Hazrat Isa (A.S)",
      en: "Prophet Jesus (A.S)"
    },
    title: {
      ur: "عیب جوئی سے پرہیز اور نرمی سے اصلاح",
      ro: "Aib-Joi Se Parhez Aur Narmi Se Islah",
      en: "Refraining from Fault-Finding and Correcting Gently"
    },
    quote: {
      ur: "کسی کی عیب جوئی نہ کرو کہ تمہاری عیب جوئی نہ ہو، تمہارے ہی پیمانے سے تمہارے واسطے ناپا جائے گا۔ اگر تیرا بھائی گناہ کرے تو ملائمت اور نرمی سے اسے ملامت کر، اور اگر توبہ کرے تو اسے معاف کر۔",
      ro: "Kisi ki aib-joi na karo ke tumhari aib-joi na ho, tumhare hi paimanay se tumhare wastay napa jayega. Agar tera bhai gunah kare to mulaimat aur narmi se usay malamat kar, aur agar tauba kare to usay maaf kar.",
      en: "Do not judge others lest you be judged, for with the measure you use, it will be measured back to you. If your brother errs, counsel him with gentleness, and if he repents, forgive him."
    },
    tashreeh: {
      ur: "جو انسان دوسروں کے عیب ٹٹولتا ہے، مکافاتِ عمل کے طور پر خود اس کے عیب کھل جاتے ہیں۔ اصلاح کا طریقہ رسوا کرنا نہیں بلکہ محبت اور نرمی سے سمجھانا ہے۔",
      ro: "Jo insan doosron ke aib tatolta hai, mukafat-e-amal ke taur par khud us ke aib khul jate hain. Islah ka tareeqa ruswa karna nahi balkay mohabbat aur narmi se samjhana hai.",
      en: "Those who hunt for faults in others invite scrutiny upon themselves. True reform comes through gentle counsel and ready forgiveness, never public humiliation."
    },
    tags: [
      { ur: "اصلاح", ro: "Islah", en: "Reform" },
      { ur: "درگزر", ro: "Darguzar", en: "Pardon" }
    ]
  },
  {
    id: "ma-102",
    slug: "guftugu-mein-ikhtisar-aur-izzat-ka-usool",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 67",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "مختصر گفتگو اور سچی عزت کا راز",
      ro: "Mukhtasar Guftugu Aur Sachi Izzat Ka Raaz",
      en: "Concise Speech and the Secret of True Honor"
    },
    quote: {
      ur: "گفتگو میں اختصار کر، کلام مفید وہ ہے جو آسانی سے سنا جائے کیونکہ طول کلامی کا کچھ حصہ ذہنوں سے ضائع ہوتا ہے۔ جاہ و عزت سے بھاگو تو عزت تمہارے پیچھے پھرے گی۔",
      ro: "Guftugu mein ikhtisar kar, kalam-e-mufeed woh hai jo asani se suna jaye kyunkeh tool-kalami ka kuch hissa zehnon se zaya hota hai. Jah-o-izzat se bhago to izzat tumhare peechay phiregi.",
      en: "Be concise in speech, for beneficial words are those easily retained, whereas lengthy talk is partly forgotten. Flee from worldly fame and status, and true honor will follow you."
    },
    tashreeh: {
      ur: "جامع اور مختصر بات دل پر گہرا اثر چھوڑتی ہے جبکہ لمبی تقاریر سے سننے والے اکتا جاتے ہیں۔ اسی طرح جو شخص شہرت کی ہوس چھوڑ کر اخلاص اپناتا ہے، اللہ اسے حقیقی عزت عطا فرماتا ہے۔",
      ro: "Jame aur mukhtasar baat dil par gehra asar chhorti hai jabkeh lambi taqareer se sunne wale ukta jate hain. Isi tarah jo shakhs shohrat ki hawas chhor kar ikhlas apnata hai, Allah usay haqeeqi izzat ata farmata hai.",
      en: "Brief, meaningful words leave a lasting impact, while excessive talk loses the listener's focus. Likewise, humility and sincerity attract genuine honor without chasing fame."
    },
    tags: [
      { ur: "اختصار", ro: "Ikhtisar", en: "Brevity" },
      { ur: "عزت", ro: "Izzat", en: "Honor" }
    ]
  },
  {
    id: "ma-103",
    slug: "kam-bolna-hikmat-aur-jawani-ki-qadr",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 74",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "صحت، عبادت اور جوانی کو غنیمت جاننا",
      ro: "Sehat, Ibadat Aur Jawani Ko Ghaneemat Janna",
      en: "Wisdom, Health, and Cherishing Youth Before Old Age"
    },
    quote: {
      ur: "کم بولنا حکمت ہے، کم کھانا صحت، کم سونا عبادت اور عوام سے کم ملنا عافیت ہے۔ بڑھاپے سے پہلے جوانی، موت سے پہلے بڑھاپا اور مشغولی سے پہلے فراغت کو غنیمت جان۔",
      ro: "Kam bolna hikmat hai, kam khana sehat, kam sona ibadat aur awaam se کم milna aafiyat hai. Burhapay se pehle jawani, maut se pehle burhapa aur mashghooli se pehle faraghat ko ghaneemat jaan.",
      en: "Speaking less is wisdom, eating less is health, sleeping less is devotion, and avoiding needless crowds is peace. Seize your youth before old age, your life before death, and your free time before busyness."
    },
    tashreeh: {
      ur: "جسمانی اور روحانی توازن کے لیے زبان، خوراک اور نیند میں اعتدال ضروری ہے۔ انسان کو اپنی جوانی کی طاقت اور فارغ اوقات کو ضائع ہونے سے پہلے نیک مقاصد میں لگا دینا چاہیے۔",
      ro: "Jismani aur roohani tawazun ke liye zaban, khorak aur neend mein aitdaal zaroori hai. Insan ko apni jawani ki taqat aur farigh auqat ko zaya hone se pehle nek maqasid mein laga dena chahiye.",
      en: "Moderation in speech, diet, and sleep maintains spiritual and physical vitality. Making the most of youth and free time before they slip away is the essence of a purposeful life."
    },
    tags: [
      { ur: "جوانی", ro: "Jawani", en: "Youth" },
      { ur: "توازن", ro: "Tawazun", en: "Balance" }
    ]
  },
  {
    id: "ma-104",
    slug: "badgo-teen-aadmiyon-ko-majrooh-karta-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 85",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "بدگوئی کا نقصان اور قضا پر رضا کی جنت",
      ro: "Badgoi Ka Nuqsan Aur Qaza Par Raza Ki Jannat",
      en: "The Harm of Backbiting and the Paradise of Contentment"
    },
    quote: {
      ur: "بدگو تین آدمیوں کو مجروح کرتا ہے: اول اپنے آپ کو، دوم جس کی برائی کرتا ہے، سوم جو اس کی برائی سنتا ہے۔ قضا پر رضا دنیا کی جنت ہے، اور حیا کے ساتھ تمام نیکیاں وابستہ ہیں۔",
      ro: "Bad-go teen aadmiyon ko majrooh karta hai: awwal apne aap ko, doem jis ki burai karta hai, soem jo us ki burai sunta hai. Qaza par raza duniya ki Jannat hai, aur haya ke sath tamam nekiyan wabasta hain.",
      en: "A backbiter harms three people: first themselves, second the one they slander, and third the listener. Contentment with divine decree is paradise on earth, and all virtues are tied to modesty."
    },
    tashreeh: {
      ur: "غیبت اور چغلی کرنے والا سب سے پہلے اپنی نیکیاں برباد کرتا ہے اور سننے والے کے دل کو بھی آلودہ کرتا ہے۔ اس دنیا میں حقیقی جنت اور اطمینان اللہ کے فیصلوں پر راضی رہنے میں ہے۔",
      ro: "Gheebat aur chughli karne wala sab se pehle apni nekiyan barbad karta hai aur sunne wale ke dil ko bhi aalooda karta hai. Is duniya mein haqeeqi Jannat aur itminan Allah ke faislon par raazi rehne mein hai.",
      en: "Slander corrupts the speaker, the subject, and the listener alike. True tranquility in this world is found by embracing God's decree with a modest and grateful heart."
    },
    tags: [
      { ur: "رضا بالقضا", ro: "Raza Bil-Qaza", en: "Contentment" },
      { ur: "غیبت سے پرہیز", ro: "Gheebat Se Parhez", en: "Avoiding Backbiting" }
    ]
  },
  {
    id: "ma-105",
    slug: "tajurbat-mein-taraqqi-aur-ilm-sikhana",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 89-90",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "تجربات سے ترقی، صبر اور علم پھیلانا",
      ro: "Tajurbat Se Taraqqi, Sabr Aur Ilm Phailana",
      en: "Growth Through Experience, Composure, and Sharing Knowledge"
    },
    quote: {
      ur: "تجربے کبھی ختم نہیں ہوتے اور عقلمند ان میں ترقی کرتا ہے۔ مصیبت میں گھبرانا کمال درجہ کی مصیبت ہے۔ جو لوگ تجھ سے زیادہ علم رکھتے ہیں ان سے علم حاصل کر اور جو نادان ہیں ان کو اپنا علم سکھا۔",
      ro: "Tajurbay kabhi khatam nahi hote aur aqalmand un mein taraqqi karta hai. Musibat mein ghabrana kamal darjay ki musibat hai. Jo log tujh se zyada ilm rakhte hain un se ilm hasil kar aur jo nadan hain un ko apna ilm sikha.",
      en: "Experiences never end, and the wise continually grow through them. Panicking in calamity is the greatest calamity itself. Learn from those who know more than you, and teach what you know to those who know less."
    },
    tashreeh: {
      ur: "زندگی بھر سیکھتے رہنا اور اپنے علم کو دوسروں تک پہنچانا انسان کو کامل بناتا ہے۔ مشکل وقت میں حواس باختہ ہونے سے مصیبت دوگنی ہو جاتی ہے، اس لیے حوصلہ اور تدبیر لازم ہے۔",
      ro: "Zindagi bhar seekhte rehna aur apne ilm ko doosron tak pohanchana insan ko kamil banata hai. Mushkil waqt mein hawas-bakhta hone se musibat dugni ho jati hai, is liye hausla aur tadbeer lazim hai.",
      en: "Lifelong learning and teaching elevate human character, while maintaining composure during trials prevents a hardship from turning into a defeat."
    },
    tags: [
      { ur: "علم", ro: "Ilm", en: "Knowledge" },
      { ur: "حوصلہ", ro: "Hausla", en: "Fortitude" }
    ]
  }
];

export const batch8Quotes: QuoteItem[] = [
  {
    id: "ma-106",
    slug: "wada-wafa-karna-aur-ahed-ka-pas-rakhna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:177) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نیکی کی حقیقت اور اپنے وعدوں و عہود کو پورا کرنا",
      ro: "Neki Ki Haqeeqat Aur Apne Wadon o Ahood Ko Poora Karna",
      en: "The Reality of Righteousness and Fulfilling Pledges"
    },
    quote: {
      ur: "اور جب وہ کوئی وعدہ کریں تو اسے پورا کرنے والے ہوں، اور تنگی، مصیبت اور جنگ کے وقت میں صبر کرنے والے ہوں؛ یہی لوگ ہیں جو سچے ہیں اور یہی متقی ہیں۔",
      ro: "Aur jab woh koi wada karein to usay poora karne wale hon, aur tangi, museebat aur jang ke waqt mein sabr karne wale hon; yehi log hain jo sache hain aur yehi muttaqi hain.",
      en: "And those who fulfill their promise when they promise and those who are patient in poverty and hardship and during battle. Those are the ones who have been true, and it is those who are the righteous."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: صرف ظاہری عبادات ہی نیکی نہیں ہے، بلکہ اپنے ہر وعدے اور معاہدے کو سختی سے نبھانا اور مشکل حالات میں استقامت دکھانا ہی سچے ایمان اور تقویٰ کی اصل علامت ہے۔ آج کا عملی سبق یہ ہے کہ دی گئی زبان کے پکے رہیں چاہے حالات کتنے ہی سخت کیوں نہ ہوں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sirf zahiri ibadatein hi neki nahi hai, balkay apne har waday aur muahiday ko sakhti se nibhana aur mushkil halaat mein istaqamat dikhana hi sache eman aur taqwa ki asal alamat hai. Aaj ka amli sabaq yeh hai ke di gayi zaban ke pakke rahein chahe halaat kitne hi sakht kyon na hon.",
      en: "Context & Practical Lesson: True righteousness goes beyond rituals; honoring promises and staying steadfast through hardships define a person of integrity."
    },
    tags: [
      { ur: "وفائے عہد", ro: "Wafa-e-Ahad", en: "Fulfilling Pledges" },
      { ur: "سچائی", ro: "Sachai", en: "Truthfulness" }
    ]
  },
  {
    id: "ma-107",
    slug: "roza-farz-kiya-gaya-taake-taqwa-mile",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:183) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "روزے کی فرضیت کا مقصد اور خدا ترسی کا حصول",
      ro: "Rozay Ki Farziyat Ka Maqsad Aur Khuda-Tarsi Ka Husool",
      en: "The Purpose of Fasting: Achieving God-Consciousness"
    },
    quote: {
      ur: "اے ایمان والو! تم پر روزے فرض کیے گئے جیسے تم سے پہلے لوگوں پر فرض کیے گئے تھے تاکہ تم تقویٰ اختیار کرو۔",
      ro: "Aye eman walo! Tum par rozay farz kiye gaye jaise tum se pehle logon par farz kiye gaye thay taake tum taqwa ikhtiyar karo.",
      en: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: روزے کا مقصد صرف بھوکا پیاسا رہنا نہیں ہے، بلکہ اس کا بنیادی ہدف انسان کے اندر خدا ترسی (تقویٰ) پیدا کرنا ہے تاکہ وہ پوشیدہ اور ظاہر ہر حال میں گناہوں سے بچ سکے۔ آج کا عملی سبق یہ ہے کہ عبادات کی روح کو سمجھیں اور ان کے ذریعے اپنے اخلاق کو سنواریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Rozay ka maqsad sirf bhooka pyasa rehna nahi hai, balkay is ka bunyadi hadaf insan ke andar khuda-tarsi (taqwa) paida karna hai taake woh posheeda aur zahir har haal mein gunahon se bach sake. Aaj ka amli sabaq yeh hai ke ibadaton ki rooh ko samjhein aur un ke zariye apne akhlaq ko sanwarein.",
      en: "Context & Practical Lesson: Fasting is designed to cultivate inner restraint and God-consciousness, inspiring moral discipline in both public and private life."
    },
    tags: [
      { ur: "فلسفۂ روزہ", ro: "Falsafa-e-Roza", en: "Philosophy of Fasting" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Righteousness" }
    ]
  },
  {
    id: "ma-108",
    slug: "qarz-ka-len-den-aur-likh-lena",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:282) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "معاشی معاملات میں شفافیت: قرض کا لین دین لکھ لینا",
      ro: "Maashi Muamlat Mein Shafafiyat: Qarz Ka Lain-Dain Likh Lena",
      en: "Financial Transparency: Documenting Debts and Transactions"
    },
    quote: {
      ur: "اے ایمان والو! جب تم ایک مقررہ مدت تک آپس میں قرض کا لین دین کرو تو اسے لکھ لیا کرو؛ اور لکھنے والے کو چاہیے کہ وہ انصاف کے ساتھ لکھے۔",
      ro: "Aye eman walo! Jab tum aik muqarrara muddat tak aapas mein qarz ka lain-dain karo to usay likh liya karo; aur likhne wale ko chahiye ke woh insaf ke sath likhe.",
      en: "O you who have believed, when you contract a debt for a specified term, write it down. And let a scribe write [it] between you in justice."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن کریم نے مالی معاملات کو انتہائی شفاف رکھنے کی ہدایت دی ہے تاکہ بعد میں کسی غلط فہمی یا جھگڑے کی گنجائش نہ رہے۔ آج کا عملی سبق یہ ہے کہ کاروبار اور ادھار کے معاملات میں لکھ پڑھ اور حساب کتاب کا پکا نظام رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran-e-Kareem ne maashi muamlat ko intehai shafaf rakhne ki hidayat di hai taake baad mein kisi ghalat-fahmi ya jhagray ki gunjaish na rahe. Aaj ka amli sabaq yeh hai ke karobar aur udhar ke muamlat mein likh-parh aur hisab-kitab ka pakka nizam rakhein.",
      en: "Context & Practical Lesson: Maintaining transparent written records for financial debts prevents disputes and preserves mutual trust in business."
    },
    tags: [
      { ur: "شفافیت", ro: "Shafafiyat", en: "Transparency" },
      { ur: "مالی آداب", ro: "Maali Aadab", en: "Financial Ethics" }
    ]
  },
  {
    id: "ma-109",
    slug: "sachi-gawahi-aur-neki-ki-sifarish",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 11",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سچی گواہی دینا اور نیک کام کی سفارش کرنا",
      ro: "Sachi Gawahi Dena Aur Nek Kaam Ki Sifarish Karna",
      en: "Upholding True Testimony and Interceding for Good"
    },
    quote: {
      ur: "کتمانِ شہادت سے بچو، سچی شہادت بے روک ٹوک دو خواہ اپنے باپ اور بھائی کے خلاف کیوں نہ دینی پڑے۔ جو شخص نیک بات کی سفارش کرے قیامت کے دن اس نیک کام کے اجر میں سے اس کو بھی حصہ ملے گا۔",
      ro: "Kitman-e-shahadat se bacho, sachi shahadat be-rok-tok do khwah apne baap aur bhai ke khilaf kyon na deni paray. Jo shakhs nek baat ki sifarish kare qayamat ke din us nek kaam ke ajr mein se us ko bhi hissa milega.",
      en: "Never conceal testimony; give true witness without hesitation even if it is against your own father or brother. Whoever intercedes for a righteous cause will receive a share of its reward, and whoever promotes evil will share its burden."
    },
    tashreeh: {
      ur: "انصاف کا تقاضا یہ ہے کہ سچ بولتے وقت رشتہ داری یا ذاتی مفاد کو آڑے نہ آنے دیا جائے۔ اسی طرح اپنے اثر و رسوخ کو کسی مظلوم یا حاجت مند کے جائز کام کی سفارش کے لیے استعمال کرنا عظیم عبادت ہے۔",
      ro: "Insaf ka taqaza yeh hai ke sach bolte waqt rishtedari ya zaati mafad ko aaray na aane diya jaye. Isi tarah apne asar-o-rusookh ko kisi mazloom ya hajat-mand ke jaiz kaam ki sifarish ke liye istemal karna azeem ibadat hai.",
      en: "True justice requires speaking the truth above family bias or personal interest, and using one's influence to advocate for a rightful cause earns a lasting spiritual reward."
    },
    tags: [
      { ur: "شہادتِ حق", ro: "Shahadat-e-Haq", en: "True Testimony" },
      { ur: "سفارشِ خیر", ro: "Sifarish-e-Khair", en: "Good Intercession" }
    ]
  },
  {
    id: "ma-110",
    slug: "momin-aik-soorakh-se-do-dafa-nahi-dasa-jata",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مومن کی ہوشیاری اور تجربے سے حکمت",
      ro: "Momin Ki Hoshiyari Aur Tajurbay Se Hikmat",
      en: "The Believer's Vigilance and Wisdom Through Experience"
    },
    quote: {
      ur: "مومن ایک سوراخ سے دو دفعہ نہیں ڈسا جاتا۔ بغیر سختی اٹھانے کے حلیم اور بغیر تجربہ کے حکیم نہیں ہو سکتا۔",
      ro: "Momin aik soorakh se do dafa nahi dasa jata. Baghair sakhti uthane ke haleem aur baghair tajurba ke hakeem nahi ho sakta.",
      en: "A believer is not stung twice from the same hole. No one becomes truly forbearing without enduring hardship, nor truly wise without experience."
    },
    tashreeh: {
      ur: "شریف اور باایمان ہونے کا مطلب سادہ لوح یا غافل ہونا نہیں ہے۔ مومن دھوکہ کھانے کے بعد چوکنا رہتا ہے، اور زندگی کی سختیاں ہی انسان کے اندر بردباری اور پختہ حکمت پیدا کرتی ہیں۔",
      ro: "Shareef aur ba-eman hone ka matlab sada-loh ya ghafil hona nahi hai. Momin dhoka khane ke baad chaukanna rehta hai, aur zindagi ki sakhtiyan hi insan ke andar burdbari aur pukhta hikmat paida karti hain.",
      en: "Kindness does not mean naivety; a believer learns from past betrayals and stays vigilant. Enduring life's trials is what refines patience and mature wisdom."
    },
    tags: [
      { ur: "فراست", ro: "Farasat", en: "Discernment" },
      { ur: "تجربہ", ro: "Tajurba", en: "Experience" }
    ]
  },
  {
    id: "ma-111",
    slug: "maqam-e-ehsan-aur-allah-ke-ayal-ki-khidmat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مقامِ احسان اور مخلوقِ خدا کی خدمت",
      ro: "Maqam-e-Ehsan Aur Makhlooq-e-Khuda Ki Khidmat",
      en: "Spiritual Excellence and Serving the Family of God"
    },
    quote: {
      ur: "اللہ کی عبادت اس طرح سے کر کہ گویا تو اس کو دیکھتا ہے، اور اگر تو اسے نہیں دیکھ سکتا تو وہ تجھے دیکھتا ہے۔ لوگ اللہ کے عیال ہیں، اور اللہ کے نزدیک زیادہ پیارا اس کے عیال کو زیادہ فائدہ پہنچانے والا ہے۔",
      ro: "Allah ki ibadat is tarah se kar ke goya tu us ko dekhta hai, aur agar tu usay nahi dekh sakta to woh tujhe dekhta hai. Log Allah ke ayal hain, aur Allah ke nazdeek zyada pyara us ke ayal ko zyada faida pohanchane wala hai.",
      en: "Worship Allah as though you see Him; and if you cannot see Him, know that He sees you. All people are the dependents of Allah, and the most beloved to Him is the one who brings the greatest benefit to His dependents."
    },
    tashreeh: {
      ur: "جب انسان کو یہ احساس ہو جائے کہ اس کا خالق ہر لمحہ اسے دیکھ رہا ہے تو اس کی عبادت اور معاملات میں کھوٹ باقی نہیں رہتا، اور وہ مخلوقِ خدا کی خدمت کو ہی رب کے قرب کا ذریعہ بنا لیتا ہے۔",
      ro: "Jab insan ko yeh ehsas ho jaye ke us ka Khaliq har lamha usay dekh raha hai to us ki ibadat aur muamlat mein khot baqi nahi rehta, aur woh makhlooq-e-Khuda ki khidmat ko hi Rab ke qurb ka zariya bana leta hai.",
      en: "Living with the constant awareness of God's presence purifies every action and inspires a person to serve humanity with selfless devotion."
    },
    tags: [
      { ur: "احسان", ro: "Ehsan", en: "Spiritual Excellence" },
      { ur: "خدمتِ خلق", ro: "Khidmat-e-Khalq", en: "Serving Humanity" }
    ]
  },
  {
    id: "ma-112",
    slug: "tohfa-dil-ki-kudoorat-door-karta-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 23",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تحفہ دینے کی برکت اور کسی کی تکلیف پر خوش نہ ہونا",
      ro: "Tohfa Dene Ki Barkat Aur Kisi Ki Takleef Par Khush Na Hona",
      en: "Exchanging Gifts and Never Rejoicing at Another's Misfortune"
    },
    quote: {
      ur: "آپس میں تحفہ بھیجا کرو کہ تحفہ دل کی کدورت دور کر دیتا ہے۔ اپنے بھائی کی تکلیف پر خوشی ظاہر نہ کرو کہ اللہ تعالیٰ اسے آرام دے گا اور تجھے دکھ میں مبتلا کرے گا۔",
      ro: "Aapas mein tohfa bheja karo ke tohfa dil ki kudoorat door kar deta hai. Apne bhai ki takleef par khushi zahir na karo ke Allah Ta'ala usay aram dega aur tujhe dukh mein mubtala karega.",
      en: "Exchange gifts with one another, for gifts remove rancor from the heart; and never rejoice over your brother's misfortune, lest Allah grant him relief and test you with the same trial."
    },
    tashreeh: {
      ur: "خلوص سے دیا گیا چھوٹا سا تحفہ بھی دلوں کے میل اور رنجشوں کو دھو دیتا ہے۔ اس کے برعکس کسی انسان کی پریشانی پر طنز کرنا یا خوش ہونا اللہ کی ناراضگی اور گردشِ زمانہ کو دعوت دیتا ہے۔",
      ro: "Khuloos se diya gaya chota sa tohfa bhi dilon ke mail aur ranjishon ko dho deta hai. Is ke bar-aks kisi insan ki pareshani par tanz karna ya khush hona Allah ki narazgi aur gardish-e-zamana ko dawat deta hai.",
      en: "Sincere gifts dissolve resentment and strengthen bonds, whereas gloating over someone else's hardship invites divine displeasure and reversal of fortune."
    },
    tags: [
      { ur: "تحفہ", ro: "Tohfa", en: "Gifts" },
      { ur: "ہمدردی", ro: "Hamdardi", en: "Empathy" }
    ]
  },
  {
    id: "ma-113",
    slug: "jism-ki-islah-dil-ki-durusti-par-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دل کی پاکیزگی ہی پورے وجود کی اصلاح ہے",
      ro: "Dil Ki Pakeezgi Hi Poore Wujood Ki Islah Hai",
      en: "The Purity of the Heart Determines the Whole Character"
    },
    quote: {
      ur: "تمہارے جسم میں ایک گوشت کا ٹکڑا ہے، جب وہ درست ہو تو سارا جسم درست ہوتا ہے اور جب وہ بگڑ جائے تو سارا جسم بگڑ جاتا ہے؛ معلوم رہے کہ وہ دل ہے۔",
      ro: "Tumhare jism mein aik gosht ka tukra hai, jab woh durust ho to sara jism durust hota hai aur jab woh bigar jaye to sara jism bigar jata hai; maloom rahe ke woh dil hai.",
      en: "Within the body lies a piece of flesh: when it is sound, the entire body is sound, and when it is corrupted, the entire body is corrupted. Truly, that is the heart."
    },
    tashreeh: {
      ur: "انسان کے تمام اعمال کا سرچشمہ اس کا دل ہے۔ اگر دل کو حسد، تکبر، کینہ اور لالچ سے پاک کر لیا جائے تو انسان کی آنکھ، زبان اور ہاتھ خود بخود نیکی کے راستے پر چل پڑتے ہیں۔",
      ro: "Insan ke tamam aamaal ka sarchashma us ka dil hai. Agar dil ko hasad, takabbur, keena aur lalach se paak kar liya jaye to insan ki ankh, zaban aur hath khud-ba-khud neki ke rastay par chal parte hain.",
      en: "The heart is the command center of human conduct. Purifying the heart from envy, pride, and malice naturally aligns all outward actions with virtue."
    },
    tags: [
      { ur: "اصلاحِ قلب", ro: "Islah-e-Qalb", en: "Heart Purification" },
      { ur: "کردار", ro: "Kirdar", en: "Character" }
    ]
  },
  {
    id: "ma-114",
    slug: "uswah-e-hasanah-ke-zarrin-usool",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 57",
    author: {
      ur: "خصائلِ نبوی ﷺ (اسوۂ حسنہ)",
      ro: "Khasail-e-Nabawi ﷺ (Uswah-e-Hasanah)",
      en: "Prophetic Biography ﷺ (The Noble Example)"
    },
    title: {
      ur: "اسوۂ حسنہ ﷺ کے سنہرے ستون",
      ro: "Uswah-e-Hasanah ﷺ Ke Sunehray Sutoon",
      en: "The Golden Pillars of the Prophetic Example ﷺ"
    },
    quote: {
      ur: "معرفتِ الٰہی میرا راس المال ہے، عقل میرے دین کی اصل ہے، محبت میری زندگی کی بنیاد ہے، علم میرا ہتھیار ہے، صبر میری چادر ہے، عاجزی میرا فخر ہے اور سچائی میرا شفیع ہے۔",
      ro: "Ma'rifat-e-Ilahi mera raas-ul-maal hai, aqal mere deen ki asal hai, mohabbat meri zindagi ki bunyad hai, ilm mera hathyar hai, sabr meri chadar hai, aajizi mera fakhr hai aur sachai mera shafee hai.",
      en: "Knowledge of God is my capital, reason is the root of my faith, love is the foundation of my life, knowledge is my weapon, patience is my cloak, humility is my pride, and truth is my intercessor."
    },
    tashreeh: {
      ur: "حضرت علیؓ کے سوال پر بیان کردہ یہ جامع کلمات سیرتِ نبوی ﷺ کا نچوڑ ہیں کہ ایک کامل انسان کی زندگی عقل، محبت، علم، صبر، عاجزی اور سچائی کے ستونوں پر استوار ہوتی ہے۔",
      ro: "Hazrat Ali (R.A) ke sawal par bayan karda yeh jame kalmaat Seerat-e-Nabawi ﷺ ka nichor hain ke aik kamil insan ki zindagi aqal, mohabbat, ilm, sabr, aajizi aur sachai ke sutoonon par ustuwar hoti hai.",
      en: "Shared in response to Hazrat Ali (R.A), these profound words summarize the Prophetic way of life, blending spiritual devotion with reason, love, humility, and truth."
    },
    tags: [
      { ur: "اسوۂ حسنہ", ro: "Uswah-e-Hasanah", en: "Prophetic Way" },
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" }
    ]
  },
  {
    id: "ma-115",
    slug: "doosron-se-nasihat-pakarna-aur-apni-qadr-pehchanna",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 59 (Chahal Hadith #18, #22, #27)",
    author: {
      ur: "چہل احادیث (ارشادِ نبوی ﷺ)",
      ro: "Chahal Hadith (Irshad-e-Nabawi ﷺ)",
      en: "40 Hadith (Prophetic Tradition ﷺ)"
    },
    title: {
      ur: "دوسروں سے عبرت حاصل کرنا اور اپنی قدر پہچاننا",
      ro: "Doosron Se Ibrat Hasil Karna Aur Apni Qadr Pehchanna",
      en: "Learning from Others and Knowing One's Own Worth"
    },
    quote: {
      ur: "نیک بخت وہ ہے جو دوسرے کو دیکھ کر نصیحت پکڑے، اور وہ شخص ہلاک نہیں ہو گا جس نے اپنی قدر و حیثیت پہچانی۔ دلوں کو اس بنا پر پیدا کیا گیا ہے کہ جو ان سے نیکی کرے اس سے یہ محبت کرتے ہیں۔",
      ro: "Nek-bakht woh hai jo doosre ko dekh kar nasihat pakray, aur woh shakhs halak nahi hoga jis ne apni qadr-o-haisiyat pehchani. Dilon ko is bina par paida kiya gaya hai ke jo un se neki kare us se yeh mohabbat karte hain.",
      en: "Fortunate is the one who takes a lesson from the mistakes of others, and a person who knows their own limits will never perish. Hearts are naturally inclined to love those who treat them with kindness."
    },
    tashreeh: {
      ur: "عقلمند انسان خود ٹھوکر کھانے کا انتظار نہیں کرتا بلکہ دوسروں کے انجام سے سبق سیکھ لیتا ہے، اپنی حدود میں رہتا ہے اور حسنِ سلوک سے لوگوں کے دل جیت لیتا ہے۔",
      ro: "Aqalmand insan khud thokar khane ka intizar nahi karta balkay doosron ke anjam se sabaq seekh leta hai, apni hudood mein rehta hai aur husn-e-sulook se logon ke dil jeet leta hai.",
      en: "A wise person learns by observing the consequences of others' actions, stays grounded in self-awareness, and wins hearts through genuine kindness."
    },
    tags: [
      { ur: "عبرت", ro: "Ibrat", en: "Lesson" },
      { ur: "خود شناسی", ro: "Khud-Shanasi", en: "Self-Awareness" }
    ]
  },
  {
    id: "ma-116",
    slug: "mauqa-ki-baat-sonay-ke-sebon-ki-manind",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 61-62",
    author: {
      ur: "حضرت سلیمان علیہ السلام",
      ro: "Hazrat Suleman (A.S)",
      en: "Prophet Solomon (A.S)"
    },
    title: {
      ur: "پیش بینی کی دانائی اور موقع کی گفتگو کی قیمت",
      ro: "Pesh-Beeni Ki Danai Aur Mauqa Ki Guftugu Ki Qeemat",
      en: "The Wisdom of Foresight and Timely Words"
    },
    quote: {
      ur: "عالم کم گو، سرد مزاج اور خردمند ہوتا ہے؛ ہوشیار انسان بلا کو پیش بینی سے دیکھتا اور اپنے آپ کو بچاتا ہے، اور سخن جو موقع سے کی جائے سونے کے سیبوں کی مانند ہے جو روپہلی ٹوکریوں میں ہوں۔",
      ro: "Aalim kam-go, sard-mizaj aur khiradmand hota hai; hoshiyar insan bala ko pesh-beeni se dekhta aur apne aap ko bachata hai, aur sukhan jo mauqa se ki jaye sonay ke sebon ki manind hai jo ropahli tokriyon mein hon.",
      en: "A person of knowledge speaks sparingly and maintains a calm spirit; a prudent person foresees danger and takes precautions, and a word spoken at the right moment is like apples of gold in settings of silver."
    },
    tashreeh: {
      ur: "ٹھنڈے مزاج سے سوچنا اور آنے والے خطرات کا پہلے سے تدارک کرنا دانشمندی ہے۔ اچھی بات بھی اسی وقت اثر دکھاتی ہے جب اسے صحیح وقت اور مناسب موقع پر ادا کیا جائے۔",
      ro: "Thanday mizaj se sochna aur aane wale khatrat ka pehle se tadaruk karna danishmandi hai. Achi baat bhi usi waqt asar dikhati hai jab usay sahi waqt aur munasib mauqa par ada kiya jaye.",
      en: "Calm reflection and proactive foresight protect a person from harm, while speaking the right words at the right time multiplies their beauty and impact."
    },
    tags: [
      { ur: "پیش بینی", ro: "Pesh-Beeni", en: "Foresight" },
      { ur: "موقع شناسی", ro: "Mauqa-Shanasi", en: "Timely Speech" }
    ]
  },
  {
    id: "ma-117",
    slug: "khauf-e-ilahi-baqadr-e-ilm-aur-haqeeqi-sakhawat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 67",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "گزرے دن کا محاسبہ، خوفِ الٰہی اور حقیقی سخاوت",
      ro: "Guzray Din Ka Muhasba, Khauf-e-Ilahi Aur Haqeeqi Sakhawat",
      en: "Valuing Each Day, Reverence Through Knowledge, and True Generosity"
    },
    quote: {
      ur: "اس دن پر رو جو تیری عمر کا گزر گیا اور اس میں نیکی نہیں کی۔ خوفِ الٰہی بقدرِ علم ہوتا ہے اور اللہ تعالیٰ سے بے خوفی بقدرِ جہالت۔ خلقت سے تکلیف دور کر کے خود اٹھا لینا حقیقی سخاوت ہے۔",
      ro: "Us din par ro jo teri umar ka guzar gaya aur us mein neki nahi ki. Khauf-e-Ilahi ba-qadr-e-ilm hota hai aur Allah Ta'ala se be-khaufi ba-qadr-e-jahalat. Khilqat se takleef door kar ke khud utha lena haqeeqi sakhawat hai.",
      en: "Weep over a day of your life that passed without a single good deed. Reverence of God is proportional to one's knowledge, while heedlessness stems from ignorance. Relieving others of hardship by bearing it yourself is the highest generosity."
    },
    tashreeh: {
      ur: "زندگی کا جو دن خیر اور بھلائی کے بغیر گزر جائے وہ اصل خسارہ ہے۔ حقیقی علم انسان کے دل میں رب کی خشیت اور مخلوق کے لیے ایثار کا جذبہ پیدا کرتا ہے۔",
      ro: "Zindagi ka jo din khair aur bhalai ke baghair guzar jaye woh asal khasara hai. Haqeeqi ilm insan ke dil mein Rab ki khashiyat aur makhlooq ke liye eesar ka jazba paida karta hai.",
      en: "A day spent without doing good is a true loss. Authentic knowledge deepens reverence for the Creator and inspires selfless sacrifice for humanity."
    },
    tags: [
      { ur: "ایثار", ro: "Eesar", en: "Selflessness" },
      { ur: "خشیتِ الٰہی", ro: "Khashiyat-e-Ilahi", en: "God-Consciousness" }
    ]
  },
  {
    id: "ma-118",
    slug: "aib-batane-wala-sacha-dost-aur-be-gharzi",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 74",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "سچے دوست کی پہچان، بے غرضی اور احسان کا مفہوم",
      ro: "Sachay Dost Ki Pehchan, Be-Gharzi Aur Ehsan Ka Mafhoom",
      en: "True Friendship, Contentment, and Repaying Evil with Good"
    },
    quote: {
      ur: "جو عیب سے واقف کرے وہ دوست ہے اور منہ پر تعریف کرنا گویا ذبح کرنا ہے۔ طمع کرنا مفلسی، بے غرض ہونا امیری اور بدلہ نہ چاہنا صبر ہے۔ نیکی کے عوض نیکی حق ادائیگی ہے اور بدی کے عوض نیکی احسان ہے۔",
      ro: "Jo aib se waqif kare woh dost hai aur munh par tareef karna goya zabah karna hai. Tama' karna muflisi, be-gharz hona ameeri aur badla na chahna sabr hai. Neki ke iwaz neki haq-adaigi hai aur badi ke iwaz neki ehsan hai.",
      en: "The one who sincerely points out your faults is your true friend, whereas flattering someone to their face is akin to ruining them. Greed is poverty, detachment is wealth, and repaying wrongdoing with kindness is true benevolence."
    },
    tashreeh: {
      ur: "خوشامدی انسان آپ کو غرور میں مبتلا کر کے نقصان پہنچاتا ہے جبکہ مخلص دوست تنہائی میں آپ کی اصلاح کرتا ہے۔ اسی طرح لوگوں سے طمع ختم کر لینا سب سے بڑی بے نیازی ہے۔",
      ro: "Khushamadi insan aap ko ghuroor mein mubtala kar ke nuqsan pohanchata hai jabkeh mukhlis dost tanhai mein aap ki islah karta hai. Isi tarah logon se tama' khatam kar lena sab se badi be-niyazi hai.",
      en: "Flattery breeds arrogance, while honest feedback from a sincere friend enables self-improvement. Freeing the heart from greed grants true independence."
    },
    tags: [
      { ur: "بے نیازی", ro: "Be-Niyazi", en: "Self-Sufficiency" },
      { ur: "اصلاح", ro: "Islah", en: "Constructive Advice" }
    ]
  },
  {
    id: "ma-119",
    slug: "zaya-hone-wali-cheezein-aur-zaban-ki-islah",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 83 & 85",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "ضائع ہونے والی نعمتیں اور زبان سے دل کی اصلاح",
      ro: "Zaya Hone Wali Nematein Aur Zaban Se Dil Ki Islah",
      en: "Wasted Blessings and Reforming the Heart Through Speech"
    },
    quote: {
      ur: "ضائع ہے وہ عالم جس سے علم کی بات نہ پوچھیں، وہ مال جو کارِ خیر میں خرچ نہ کیا جائے، وہ علم جس پر عمل نہ کیا جائے اور وہ اچھی رائے جس کو قبول نہ کیا جائے۔ جب زبان اصلاح پذیر ہوتی ہے تو قلب صالح ہو جاتا ہے۔",
      ro: "Zaya hai woh aalim jis se ilm ki baat na poochein, woh maal jo kar-e-khair mein kharch na kiya jaye, woh ilm jis par amal na kiya jaye aur woh achi raaye jis ko qubool na kiya jaye. Jab zaban islah-pazeer hoti hai to qalb saleh ho jata hai.",
      en: "Wasted is the scholar whose knowledge is not sought, the wealth not spent in charity, the knowledge not practiced, and the sound counsel not accepted. When the tongue is reformed, the heart becomes righteous."
    },
    tashreeh: {
      ur: "علم، مال اور نیک مشورے کی قدر تبھی ہے جب انہیں عملی زندگی میں استعمال کیا جائے۔ جو شخص اپنی زبان کو جھوٹ اور غیبت سے پاک کر لیتا ہے، اللہ اس کے دل کو بھی نورِ صلاح سے بھر دیتا ہے۔",
      ro: "Ilm, maal aur nek mashwaray ki qadr tabhi hai jab unhein amli zindagi mein istemal kiya jaye. Jo shakhs apni zaban ko jhoot aur gheebat se paak kar leta hai, Allah us ke dil ko bhi noor-e-salah se bhar deta hai.",
      en: "Knowledge, wealth, and wise counsel fulfill their purpose only when put to righteous use; and disciplining one's speech directly purifies the heart."
    },
    tags: [
      { ur: "تزکیۂ قلب", ro: "Tazkiya-e-Qalb", en: "Spiritual Purity" },
      { ur: "قدر دانی", ro: "Qadr-Dani", en: "Appreciation" }
    ]
  },
  {
    id: "ma-120",
    slug: "sharafat-aqal-o-adab-se-hai-maal-o-nasab-se-nahi",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 89 & 91",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "حقیقی شرافت کا معیار اور علم کی بے نیازی",
      ro: "Haqeeqi Sharafat Ka Miyar Aur Ilm Ki Be-Niyazi",
      en: "True Nobility Lies in Intellect and Manners, Not Lineage"
    },
    quote: {
      ur: "شرافت عقل و ادب سے ہے نہ کہ مال و نسب سے، اور حرص سے روزی نہیں بڑھتی مگر آدمی کی قدر گھٹ جاتی ہے۔ جس شخص کو علم غنی اور بے پروا نہیں کرتا وہ مال سے کبھی مستغنی نہیں ہو سکتا۔",
      ro: "Sharafat aqal o adab se hai na ke maal o nasab se, aur hirs se rozi nahi barhti magar aadmi ki qadr ghat jati hai. Jis shakhs ko ilm ghani aur be-parwa nahi karta woh maal se kabhi mustaghni nahi ho sakta.",
      en: "True nobility comes from intellect and good manners, not from wealth or lineage. Greed never increases one's destined provision, yet it diminishes one's dignity; and whoever is not enriched by knowledge will never be satisfied by wealth."
    },
    tashreeh: {
      ur: "انسان کی عزت اس کے خاندان یا دولت سے نہیں بلکہ اس کے ادب، اخلاق اور فہم و فراست سے قائم ہوتی ہے۔ لالچ مقدر سے زیادہ نہیں دلا سکتا البتہ انسان کا وقار ضرور مجروح کر دیتا ہے۔",
      ro: "Insan ki izzat us ke khandan ya daulat se nahi balkay us ke adab, akhlaq aur fehm-o-farasat se qayam hoti hai. Lalach muqaddar se zyada nahi dila sakta albatta insan ka waqar zaroor majrooh kar deta hai.",
      en: "A person's true standing is defined by refined manners and wisdom rather than ancestry or riches. Greed cannot add to destined provision, but it certainly erodes self-respect."
    },
    tags: [
      { ur: "شرافت", ro: "Sharafat", en: "Nobility" },
      { ur: "ادب", ro: "Adab", en: "Etiquette" }
    ]
  }
];

export const batch9Quotes: QuoteItem[] = [
  {
    id: "ma-121",
    slug: "walideen-ke-sath-husn-e-sulook-aur-taqdeer-e-ehram",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:23) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "والدین کے ساتھ حسنِ سلوک اور بڑھاپے میں ان کی خدمت کا حکم",
      ro: "Walideen Ke Sath Husn-e-Sulook Aur Burhapay Mein Un Ki Khidmat Ka Hukm",
      en: "Good Treatment of Parents and Caring for Them in Old Age"
    },
    quote: {
      ur: "اور تیرے پروردگار نے فیصلہ کر دیا ہے کہ تم اس کے سوا کسی کی عبادت نہ کرو اور ماں باپ کے ساتھ اچھا سلوک کرو؛ اگر تیرے پاس ان میں سے ایک یا دونوں بڑھاپے کو پہنچ جائیں تو انہیں 'ہف' تک نہ کہو اور نہ انہیں جھڑکو، بلکہ ان کے ساتھ نرمی اور احترام سے بات کرو۔",
      ro: "Aur tere Parwardigar ne faisla kar diya hai ke tum Us ke siwa kisi ki ibadat na karo aur maa-baap ke sath acha salook karo; agar tere paas un mein se aik ya dono burhapay ko pohanch jayein to unhein 'uff' tak na kaho aur na unhein jhirko, balkay un ke sath narmi aur ehtiram se baat karo.",
      en: "And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age [while] with you, say not to them [even] 'uff' and do not repel them, but speak to them a noble word."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: توحید کے فوراً بعد والدین کے ساتھ حسنِ سلوک کا حکم اس بات کی دلیل ہے کہ اسلام میں ماں باپ کی خدمت کا درجہ کتنا بلند ہے۔ بڑھاپے میں جب وہ کمزور ہو جائیں تو ان کی کسی بات پر اکتاہٹ کا اظہار کرنا ('ف' کہنا) بھی سخت گناہ ہے۔ آج کا عملی سبق یہ ہے کہ والدین کی خدمت کو اپنی زندگی کی سب سے بڑی سعادت سمجھیں اور ان کے سامنے ہمیشہ جھکے رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Tauheed ke foran baad walideen ke sath husn-e-sulook ka hukm is baat ki daleel hai ke Islam mein maa-baap ki khidmat ka darja kitna buland hai. Burhapay mein jab woh kamzor ho jayein to un ki kisi baat par ukhtahat ka izhar karna ('uff' kehna) bhi sakht gunah hai. Aaj ka amli sabaq yeh hai ke walideen ki khidmat ko apni zindagi ki sab se badi saadat samjhein aur un ke samne hamesha jhuke rahein.",
      en: "Context & Practical Lesson: Placing the command to honor parents directly after the command to worship God highlights their supreme status; expressing even minor annoyance ('uff') in their old age is strictly forbidden."
    },
    tags: [
      { ur: "خدمتِ والدین", ro: "Khidmat-e-Walideen", en: "Filial Piety" },
      { ur: "احترام", ro: "Ehtiram", en: "Respect" }
    ]
  },
  {
    id: "ma-122",
    slug: "walideen-ke-liye-ajzi-aur-reham-ki-dua",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:24) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "والدین کے آگے عاجزی کا بازو جھکانا اور ان کے لیے دعائے مغفرت",
      ro: "Walideen Ke Aage Aajizi Ka Bazu Jhukana Aur Un Ke Liye Dua-e-Maghfirat",
      en: "Lowering the Wing of Humility for Parents and Praying for Them"
    },
    quote: {
      ur: "اور ان کے سامنے شفقت اور عاجزی سے انکساری کا بازو جھکا کر رکھو، اور دعا کرو کہ اے میرے رب! ان پر رحم فرما جیسا کہ انہوں نے بچپن میں مجھے پالا اور پرورش کیا۔",
      ro: "Aur un ke samne shafqat aur aajizi se inkisari ka bazu jhuka kar rakho, aur dua karo ke aye mere Rab! Un par reham farma jaisa ke unhon ne bachpan mein mujhe pala aur parwarish kiya.",
      en: "And lower to them the wing of humility out of mercy and say, 'My Lord, have mercy upon them as they brought me up [when I was] small.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بچپن میں جب ہم بے بس اور کمزور تھے تو ماں باپ نے اپنی راحتیں قربان کر کے ہمیں پالا۔ اب جب وہ ضعیف ہو جائیں تو اولاد کا فرض ہے کہ وہ عاجزی، محبت اور دعاؤں کے ذریعے ان کی شفقت کا بدلہ چکائے۔ آج کا عملی سبق یہ ہے کہ روزانہ اپنے والدین کی زندگی اور آخرت کے لیے دعاؤں کا اہتمام کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bachpan mein jab hum be-bas aur kamzor thay to maa-baap ne apni rahaten qurbani kar ke hamein pala. Ab jab woh zaeef ho jayein to aulaad ka farz hai ke woh aajizi, mohabbat aur duaoon ke zariye un ki shafqat ka badla chukayein. Aaj ka amli sabaq yeh hai ke rozana apne walideen ki zindagi aur akhirat ke liye duaoon ka ehtimam karein.",
      en: "Context & Practical Lesson: Just as parents protected us in childhood, we must shelter them in old age with tenderness, humility, and constant heartfelt prayers."
    },
    tags: [
      { ur: "انکساری", ro: "Inkisari", en: "Humility" },
      { ur: "دعائے والدین", ro: "Dua-e-Walideen", en: "Praying for Parents" }
    ]
  },
  {
    id: "ma-123",
    slug: "tabzeer-aur-fuzool-kharchi-shaitan-ka-bhai-hai",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:26-27) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مال کو بے جا اڑانے اور فضول خرچی سے گریز کا حکم",
      ro: "Maal Ko Be-Ja Urane Aur Fuzool-Kharchi Se Gurez Ka Hukm",
      en: "Avoiding Wastefulness and Extravagance"
    },
    quote: {
      ur: "اور رشتے دار کو اس کا حق دو اور مسکین اور مسافر کو بھی، اور اپنے مال کو بے جا فضول خرچی میں مت اڑاؤ؛ بے شک فضول خرچی کرنے والے شیاطین کے بھائی ہیں، اور شیطان اپنے رب کا بڑا ناشکرا ہے۔",
      ro: "Aur rishtedar ko us ka haq do aur miskeen aur musafir ko bhi, aur apne maal ko be-ja fuzool-kharchi mein mat urao; be-shak fuzool-kharchi karne wale shiateen ke bhai hain, aur shaitan apne Rab ka bada nashukra hai.",
      en: "And give the relative his right, and [also] the poor and the traveler, and do not spend wastefully. Indeed, the wasteful are brothers of the devils, and ever has Satan been to his Lord ungrateful."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام مال کو اللہ کی امانت سمجھتا ہے۔ اسے نمود و نمائش، فضول پارٹیوں یا بے مقصد اشیاء پر اڑا دینا شیطانی روش ہے۔ آج کا عملی سبق یہ ہے کہ اپنی کمائی میں رشتہ داروں اور غریبوں کا حق نکالیں اور ذاتی زندگی میں سادگی اپنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam maal ko Allah ki amanat samajhta hai. Usay numood-o-numaish, fuzool partiyon ya be-maqsad ashya par ura dena shaitani rawish hai. Aaj ka amli sabaq yeh hai ke apni kamai mein rishtedaron aur ghareebon ka haq nikalein aur zaati zindagi mein sadgi apnayein.",
      en: "Context & Practical Lesson: Wealth is a divine trust; squandering it on vanity or excess mirrors the ungrateful and rebellious path of Shaytan."
    },
    tags: [
      { ur: "کفایت شعاری", ro: "Kifayat-Shiari", en: "Frugality" },
      { ur: "حقوقِ قرابت", ro: "Huqooq-e-Qarabat", en: "Rights of Kin" }
    ]
  },
  {
    id: "ma-124",
    slug: "beganon-se-neki-aur-zabani-sadqa",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 16",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بیگانوں سے نیکی اور بہترین زبانی صدقہ",
      ro: "Beganon Se Neki Aur Behtareen Zabani Sadqa",
      en: "Kindness to Strangers and the Best Verbal Charity"
    },
    quote: {
      ur: "بیگانوں سے نیکی کرنا عمر دراز اور رزق فراخ کرتا ہے۔ کوئی صدقہ زبانی صدقہ سے بہتر نہیں؛ زبانی صدقہ یہ ہے کہ تو کسی کی نیک سفارش کر دے یا اذیت ہٹا دے یا جان بچائے۔",
      ro: "Beganon se neki karna umar daraz aur rizq farakh karta hai. Koi sadqa zabani sadqa se behtar nahi; zabani sadqa yeh hai ke tu kisi ki nek sifarish kar de ya aziyat hata de ya jaan bachaye.",
      en: "Doing good to strangers lengthens one's life and expands sustenance. No charity is finer than verbal charity: speaking up to intercede for someone, averting harm, or saving a life."
    },
    tashreeh: {
      ur: "صرف اپنے جاننے والوں کے کام آنا کافی نہیں بلکہ اجنبی اور بے سہارا لوگوں کے ساتھ بھلائی کرنا رزق میں برکت لاتا ہے، اور اپنی زبان سے کسی مظلوم کو مشکل سے بچا لینا سب سے افضل صدقہ ہے۔",
      ro: "Sirf apne janne walon ke kaam aana kafi nahi balkay ajnabi aur be-sahara logon ke sath bhalai karna rizq mein barkat lata hai, aur apni zaban se kisi mazloom ko mushkil se bacha lena sab se afzal sadqa hai.",
      en: "Helping strangers without expecting anything in return brings immense blessings, and using one's voice to protect the vulnerable is the highest form of charity."
    },
    tags: [
      { ur: "زبانی صدقہ", ro: "Zabani Sadqa", en: "Verbal Charity" },
      { ur: "بھلائی", ro: "Bhalai", en: "Benevolence" }
    ]
  },
  {
    id: "ma-125",
    slug: "tarazu-mein-sab-se-wazni-amal-khush-khulqi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "میزانِ اعمال میں سب سے وزنی نیکی",
      ro: "Meezan-e-Aamaal Mein Sab Se Wazni Neki",
      en: "The Heaviest Virtue on the Scale of Deeds"
    },
    quote: {
      ur: "قیامت کے دن مومن کے اعمال کے ترازو میں کوئی چیز خوش خلقی سے زیادہ وزنی نہ ہوگی، اور اللہ تعالیٰ بدگو بدزبان کو بہت برا سمجھتا ہے۔",
      ro: "Qayamat ke din momin ke aamaal ke tarazu mein koi cheez khush-khulqi se zyada wazni na hogi, aur Allah Ta'ala bad-go bad-zaban ko bohot bura samajhta hai.",
      en: "Nothing will weigh heavier on the scale of a believer's deeds on the Day of Judgment than good character; and indeed, Allah detests the foul-mouthed and abusive person."
    },
    tashreeh: {
      ur: "اعلیٰ اخلاق، نرم گفتاری اور عفو و درگزر وہ عظیم صفات ہیں جو روزِ محشر انسان کے نامۂ اعمال کو سب سے زیادہ بھاری کر دیں گی، جبکہ بدزبانی عبادات کا نور چھین لیتی ہے۔",
      ro: "Aala akhlaq, naram-guftari aur afw-o-darguzar woh azeem sifat hain jo roz-e-mehshar insan ke nama-e-aamaal ko sab se zyada bhari kar dengi, jabkeh bad-zabani ibadat ka noor chheen leti hai.",
      en: "Noble manners, gentle speech, and gracious conduct outweigh all else on the Day of Reckoning, whereas foul language ruins spiritual standing."
    },
    tags: [
      { ur: "حسنِ خلق", ro: "Husn-e-Khulq", en: "Good Character" },
      { ur: "میزانِ عمل", ro: "Meezan-e-Amal", en: "Scale of Deeds" }
    ]
  },
  {
    id: "ma-126",
    slug: "bad-zanni-hasad-aur-keena-se-parhez",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بدگمانی اور حسد سے پاک بھائی چارہ",
      ro: "Bad-Gumani Aur Hasad Se Paak Bhai-Chara",
      en: "Brotherhood Free from Suspicion and Envy"
    },
    quote: {
      ur: "بدظنی سے پرہیز کرو کیونکہ ظن سب سے زیادہ جھوٹی بات ہے؛ عیب جوئی مت کرو، چھپ کر باتیں نہ سنو، فخر نہ کرو، حسد اور کینہ نہ رکھو، منہ نہ موڑو، اللہ کے بندو! بھائی بھائی بنے رہو۔",
      ro: "Bad-zanni se parhez karo kyunkeh zan sab se zyada jhooti baat hai; aib-joi mat karo, chhup kar baatein na suno, fakhr na karo, hasad aur keena na rakho, munh na moro, Allah ke bando! Bhai bhai bane raho.",
      en: "Beware of suspicion, for suspicion is the most untruthful of speech; do not spy on one another, do not hunt for faults, do not harbor envy or malice, and do not turn your backs on each other. O servants of Allah, be brothers!"
    },
    tashreeh: {
      ur: "معاشرے میں نفرت اور پھوٹ ہمیشہ بدگمانی، ٹوہ لگانے اور حسد سے شروع ہوتی ہے۔ اگر انسان اپنے دل کو ان بیماریوں سے پاک کر لے تو پورا معاشرہ امن اور اخوت کا گہوارہ بن جائے۔",
      ro: "Muashray mein nafrat aur phoot hamesha bad-gumani, toh lagane aur hasad se shuru hoti hai. Agar insan apne dil ko in bimariyon se paak kar le to poora muashra aman aur ukhuwwat ka gehwara ban jaye.",
      en: "Social division begins with baseless suspicion, spying, and jealousy. Cleansing the heart of these ills transforms society into a haven of brotherhood."
    },
    tags: [
      { ur: "اخوت", ro: "Ukhuwwat", en: "Brotherhood" },
      { ur: "بدگمانی سے پرہیز", ro: "Bad-Gumani Se Parhez", en: "Avoiding Suspicion" }
    ]
  },
  {
    id: "ma-127",
    slug: "hamsaye-ki-madad-ayadat-aur-hamdardi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ہمسائے کے حقوق کا جامع دستور",
      ro: "Hamsaye Ke Huqooq Ka Jame Dastoor",
      en: "A Complete Charter of Neighborly Rights"
    },
    quote: {
      ur: "تمہارا ہمسایہ اگر تم سے مدد چاہے تو اس کی مدد کرو، اگر قرض مانگے تو قرض دو، بیمار ہو تو عیادت کرو، اس کو بہتری حاصل ہو تو مبارک باد کہو اور مصیبت پڑے تو تعزیت کرو۔",
      ro: "Tumhara hamsaya agar tum se madad chahe to us ki madad karo, agar qarz mangay to qarz do, bimar ho to ayadat karo, us ko behtari hasil ho to mubarak-bad kaho aur musibat paray to taziyat karo.",
      en: "If your neighbor seeks your help, assist them; if they ask for a loan, lend to them; if they fall ill, visit them; if good fortune reaches them, congratulate them; and if calamity strikes them, console them."
    },
    tashreeh: {
      ur: "پڑوسی کے ساتھ حسنِ سلوک میں صرف دکھ نہ دینا ہی شامل نہیں بلکہ ہر مشکل، بیماری، خوشی اور غمی میں اس کے شانہ بشانہ کھڑا ہونا اور اس کی عزت و آرام کا خیال رکھنا لازم ہے۔",
      ro: "Parosi ke sath husn-e-sulook mein sirf dukh na dena hi shamil nahi balkay har mushkil, bimari, khushi aur ghami mein us ke shana-ba-shana khara hona aur us ki izzat o aram ka khayal rakhna lazim hai.",
      en: "True neighborliness goes beyond avoiding harm; it means actively standing by your neighbor in sickness, need, joy, and sorrow."
    },
    tags: [
      { ur: "حقوقِ ہمسایہ", ro: "Huqooq-e-Hamsaya", en: "Neighbor Rights" },
      { ur: "ہمدردی", ro: "Hamdardi", en: "Empathy" }
    ]
  },
  {
    id: "ma-128",
    slug: "dair-mein-khafa-aur-jald-man-jane-wala",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بہترین اور بدترین مزاج کی پہچان",
      ro: "Behtareen Aur Bad-Tareen Mizaj Ki Pehchan",
      en: "Recognizing the Best and Worst of Temperaments"
    },
    quote: {
      ur: "بہتر وہ ہے کہ دیر میں خفا ہو اور جلد مان جائے، اور بدتر وہ ہے کہ جلد غصہ ہو اور دیر میں راضی ہو۔ لوگوں میں سے برا وہ ہے جس کی تعظیم اس کے شر کے خوف سے کی جائے۔",
      ro: "Behtar woh hai ke dair mein khafa ho aur jald maan jaye, aur bad-tar woh hai ke jald ghussa ho aur dair mein raazi ho. Logon mein se bura woh hai jis ki tazeem us ke shar ke khauf se ki jaye.",
      en: "The best among people is one who is slow to anger and quick to forgive, while the worst is quick to anger and slow to forgive. Evil is the person whom people respect only out of fear of their harm."
    },
    tashreeh: {
      ur: "اعلیٰ ظرف انسان چھوٹی باتوں پر برہم نہیں ہوتا اور معذرت قبول کرنے میں پہل کرتا ہے۔ اگر لوگ کسی کی عزت محبت کے بجائے اس کی بدزبانی یا شر کے ڈر سے کریں تو یہ عزت نہیں بلکہ بدترین محرومی ہے۔",
      ro: "Aala zarf insan choti baaton par barham nahi hota aur maazrat qubool karne mein pehal karta hai. Agar log kisi ki izzat mohabbat ke bajaye us ki bad-zabani ya shar ke dar se karein to yeh izzat nahi balkay bad-tareen mehroomi hai.",
      en: "A noble soul is patient with provocations and quick to reconcile. Being feared for one's harshness is never a sign of respect, but a mark of moral failure."
    },
    tags: [
      { ur: "بردباری", ro: "Burdbari", en: "Forbearance" },
      { ur: "اخلاق", ro: "Akhlaq", en: "Temperament" }
    ]
  },
  {
    id: "ma-129",
    slug: "wada-milawat-aur-majlis-ki-amanat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 59-60 (Chahal Hadith #9, #12, #31, #39)",
    author: {
      ur: "چہل احادیث (ارشادِ نبوی ﷺ)",
      ro: "Chahal Hadith (Irshad-e-Nabawi ﷺ)",
      en: "40 Hadith (Prophetic Tradition ﷺ)"
    },
    title: {
      ur: "عہد کی پابندی، ملاوٹ سے پرہیز اور مجلس کی امانت",
      ro: "Ahad Ki Pabandi, Milawat Se Parhez Aur Majlis Ki Amanat",
      en: "Keeping Promises, Avoiding Adulteration, and Confidentiality"
    },
    quote: {
      ur: "مومن کا وعدہ ایسا ہے جیسا ہاتھ میں پکڑ لینا۔ جو شخص اشیاء میں ملاوٹ کرے وہ ہم میں سے نہیں ہے۔ جھوٹی قسم ملک کو برباد کر دیتی ہے، اور مجلسیں امانت کے ساتھ وابستہ ہیں۔",
      ro: "Momin ka wada aisa hai jaisa hath mein pakar lena. Jo shakhs ashya mein milawat kare woh hum mein se nahi hai. Jhooti qasam mulk ko barbad kar deti hai, aur majlisein amanat ke sath wabasta hain.",
      en: "A believer's promise is as firm as a pledge in hand. Whoever adulterates goods and cheats is not one of us. False oaths lay lands to waste, and private gatherings are bound by trust."
    },
    tashreeh: {
      ur: "یہ چار مختصر فرامین اسلامی دیانت کا ستون ہیں: زبان کا وعدہ پتھر کی لکیر ہو، کاروبار دھوکے اور ملاوٹ سے پاک ہو، جھوٹی قسم سے بچا جائے اور کسی محفل کی ذاتی بات باہر جا کر افشا نہ کی جائے۔",
      ro: "Yeh char mukhtasar farameen Islami diyanat ka sutoon hain: zaban ka wada pathar ki lakeer ho, karobar dhokay aur milawat se paak ho, jhooti qasam se bacha jaye aur kisi mehfil ki zaati baat bahar ja kar ifsha na ki jaye.",
      en: "These four principles form the bedrock of integrity: honoring promises, trading without deceit, shunning false oaths, and keeping private conversations confidential."
    },
    tags: [
      { ur: "وعدہ وفائی", ro: "Wada-Wafai", en: "Keeping Promises" },
      { ur: "دیانت", ro: "Diyanat", en: "Integrity" }
    ]
  },
  {
    id: "ma-130",
    slug: "sadiq-aadmi-gir-kar-uthta-hai-aur-zaban-ka-zabt",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 60 & 62",
    author: {
      ur: "حضرت سلیمان علیہ السلام",
      ro: "Hazrat Suleman (A.S)",
      en: "Prophet Solomon (A.S)"
    },
    title: {
      ur: "صادق انسان کی استقامت اور لبوں کی حفاظت",
      ro: "Sadiq Insan Ki Istaqamat Aur Labon Ki Hifazat",
      en: "The Resilience of the Righteous and Restraining Speech"
    },
    quote: {
      ur: "صادق آدمی سات بار گرتا ہے اور پھر اٹھتا ہے، مگر شریر بلا میں گر کے پڑا رہتا ہے۔ کلام کی کثرت میں کچھ نہ کچھ گناہ ہوگا، مگر وہ جو اپنے لبوں کو روکے رہتا ہے بڑا دانا ہے۔",
      ro: "Sadiq aadmi saat bar girta hai aur phir uthta hai, magar shareer bala mein gir ke para rehta hai. Kalam ki kasrat mein kuch na kuch gunah hoga, magar woh jo apne labon ko rokay rehta hai bada dana hai.",
      en: "Though a righteous person may stumble seven times, they rise again, whereas the wicked are overthrown by calamity. In an abundance of words there is bound to be error, but whoever restrains their lips is truly wise."
    },
    tashreeh: {
      ur: "سچا اور باہمت انسان مشکلات یا ٹھوکروں سے ہار نہیں مانتا بلکہ ہر بار سنبھل کر دوبارہ کھڑا ہو جاتا ہے۔ اسی طرح بے جا بحث سے زبان کو روک لینا بڑی دانائی ہے۔",
      ro: "Sacha aur ba-himmat insan mushkilat ya thokaron se haar nahi manta balkay har bar sambhal kar dobara khara ho jata hai. Isi tarah be-ja behas se zaban ko rok lena badi danai hai.",
      en: "A person of truth and faith rises stronger after every setback, and exercising restraint in speech guards one against unnecessary pitfalls."
    },
    tags: [
      { ur: "اولوالعزمی", ro: "Ulul-Azmi", en: "Perseverance" },
      { ur: "دانائی", ro: "Danai", en: "Wisdom" }
    ]
  },
  {
    id: "ma-131",
    slug: "sukhan-e-dilpazeer-aur-aalim-e-be-amal-ki-misal",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 62 & 65",
    author: {
      ur: "حضرت عیسیٰ علیہ السلام",
      ro: "Hazrat Isa (A.S)",
      en: "Prophet Jesus (A.S)"
    },
    title: {
      ur: "دلپذیر بات، اثر پذیر دل اور بے عمل عالم کی مثال",
      ro: "Dilpazeer Baat, Asar-Pazeer Dil Aur Be-Amal Aalim Ki Misal",
      en: "Pleasant Words, Receptive Hearts, and the Unpracticing Scholar"
    },
    quote: {
      ur: "دنیا میں دو چیزیں پسندیدہ ہیں: سخنِ دلپذیر اور دلِ سخن پذیر۔ عالمِ بے عمل کی مثال اندھے کے چراغ کی سی ہے جس سے لوگ روشنی حاصل کرتے ہیں اور وہ خود اندھیرے میں ہے۔",
      ro: "Duniya mein do cheezein pasandeeda hain: sukhan-e-dilpazeer aur dil-e-sukhan-pazeer. Aalim-e-be-amal ki misal andhe ke charagh ki si hai jis se log roshni hasil karte hain aur woh khud andheray mein hai.",
      en: "Two things are most cherished in this world: pleasant, wise speech and a heart receptive to wisdom. A scholar who does not practice their knowledge is like a blind person holding a lamp—others see by its light while they remain in darkness."
    },
    tashreeh: {
      ur: "اچھی نصیحت کرنا اور کھلے دل سے نصیحت کو قبول کرنا دونوں بڑی نعمتیں ہیں۔ لیکن جو شخص دوسروں کو تو نصیحت کرے اور خود اپنے علم پر عمل نہ کرے وہ چراغ ہاتھ میں لے کر بھی اندھیرے میں بھٹکتا رہتا ہے۔",
      ro: "Achi nasihat karna aur khulay dil se nasihat ko qubool karna dono badi nematein hain. Lekin jo shakhs doosron ko to nasihat kare aur khud apne ilm par amal na kare woh charagh hath mein le kar bhi andheray mein bhatakta rehta hai.",
      en: "Speaking wisdom and humbly accepting good counsel are priceless virtues, yet knowledge only illuminates the bearer when translated into personal action."
    },
    tags: [
      { ur: "علم و عمل", ro: "Ilm o Amal", en: "Knowledge and Action" },
      { ur: "نصیحت", ro: "Nasihat", en: "Good Counsel" }
    ]
  },
  {
    id: "ma-132",
    slug: "gunah-se-bachna-ameer-ki-tawazu-aur-allah-ka-kaam",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 66 & 68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "گناہ سے پرہیز، امیروں کی عاجزی اور نصرتِ الٰہی",
      ro: "Gunah Se Parhez, Ameeron Ki Aajizi Aur Nusrat-e-Ilahi",
      en: "Avoiding Sin, Humility of the Wealthy, and Divine Help"
    },
    quote: {
      ur: "گناہ سے توبہ کرنا واجب ہے مگر گناہ سے بچنا واجب تر ہے؛ تواضع غریبوں سے خوب ہے لیکن امیروں سے خوب تر ہے۔ پرانے گناہوں کو نئی نیکیوں سے مٹاؤ، اور جو اللہ تعالیٰ کے کاموں میں لگ جاتا ہے اللہ تعالیٰ اس کے کاموں میں لگ جاتا ہے۔",
      ro: "Gunah se tauba karna wajib hai magar gunah se bachna wajib-tar hai; tawazu ghareebon se khoob hai lekin ameeron se khoob-tar hai. Purane gunahon ko nayi nekiyon se mitao, aur jo Allah Ta'ala ke kaamon mein lag jata hai Allah Ta'ala us ke kaamon mein lag jata hai.",
      en: "Repenting from sin is obligatory, yet avoiding sin altogether is even greater; humility is beautiful in the poor, yet far more beautiful in the rich. Erase past faults with fresh good deeds, and whoever devotes themselves to Allah's cause, Allah takes care of all their affairs."
    },
    tashreeh: {
      ur: "طاقت اور دولت کے باوجود عاجزی اختیار کرنا اعلیٰ ترین اخلاق ہے۔ جب بندہ اپنے رب کی اطاعت اور مخلوق کی بھلائی کو اپنا مشغلہ بنا لیتا ہے تو اللہ اس کے دنیاوی معاملات خود سنوار دیتا ہے۔",
      ro: "Taqat aur daulat ke bawajood aajizi ikhtiyar karna aala-tareen akhlaq hai. Jab banda apne Rab ki ita'at aur makhlooq ki bhalai ko apna mashghala bana leta hai to Allah us ke dunyawi muamlat khud sanwar deta hai.",
      en: "Humility practiced from a position of wealth and authority is extraordinarily noble, and dedicating oneself to righteous service invites divine care into all personal affairs."
    },
    tags: [
      { ur: "تواضع", ro: "Tawazu", en: "Humility" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Piety" }
    ]
  },
  {
    id: "ma-133",
    slug: "sardari-se-pehle-ilm-aur-zalim-ko-maaf-karna-zulm",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 73-74",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "بزرگی سے پہلے علم اور مظلوم کے حق کی حفاظت",
      ro: "Buzurgi Se Pehle Ilm Aur Mazloom Ke Haq Ki Hifazat",
      en: "Seeking Knowledge Before Leadership and Protecting the Oppressed"
    },
    quote: {
      ur: "قبل اس کے کہ بزرگ اور سردار بنو، علم حاصل کرو۔ جب عالم کو لغزش ہوتی ہے تو اس سے ایک عالَم لغزش میں پڑ جاتا ہے، اور ظالموں کو معاف کرنا مظلوموں پر ظلم ہے۔",
      ro: "Qabl is ke ke buzurg aur sardar bano, ilm hasil karo. Jab aalim ko laghzish hoti hai to us se aik aalam laghzish mein par jata hai, aur zalimon ko maaf karna mazloomon par zulm hai.",
      en: "Acquire deep knowledge before assuming a position of leadership. When a scholar slips, an entire world slips with them; and pardoning oppressors at the expense of justice is oppression against the wronged."
    },
    tashreeh: {
      ur: "منصب ملنے کے بعد سیکھنے کا وقت کم ملتا ہے، اس لیے قیادت سے پہلے پختہ علم ضروری ہے۔ اسی طرح ذاتی قصور معاف کرنا نیکی ہے لیکن جو ظالم معاشرے کے کمزوروں کا حق مارے اسے کھلی چھوٹ دینا مظلوموں کے ساتھ ناانصافی ہے۔",
      ro: "Mansab milne ke baad seekhne ka waqt kam milta hai, is liye qiyadat se pehle pukhta ilm zaroori hai. Isi tarah zaati qusoor maaf karna neki hai lekin jo zalim muashray ke kamzoron ka haq maaray usay khuli chhoot dena mazloomon ke sath na-insafi hai.",
      en: "Sound knowledge must precede authority, for the mistakes of leaders mislead many; and true justice never excuses public tyranny at the cost of the innocent."
    },
    tags: [
      { ur: "عدل و انصاف", ro: "Adal o Insaf", en: "Justice" },
      { ur: "قیادت", ro: "Qiyadat", en: "Leadership" }
    ]
  },
  {
    id: "ma-134",
    slug: "apna-bojh-kisi-par-na-rakh-aur-mehnat-ki-izzat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 84-85",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "خودداری اور ہاتھ پھیلانے سے پرہیز",
      ro: "Khuddari Aur Hath Phailane Se Parhez",
      en: "Self-Reliance and the Dignity of Honest Work"
    },
    quote: {
      ur: "اپنا بوجھ خلقت میں سے کسی پر نہ رکھ خواہ کم ہو یا زیادہ، اور حقیر سے حقیر پیشہ اختیار کرنا ہاتھ پھیلانے سے بدرجہا بہتر ہے۔ جو اپنی جوتی آپ گانٹھ لیتا ہے اور اپنے کپڑے دھو لیتا ہے وہ غرور اور تکبر سے پاک ہے۔",
      ro: "Apna bojh khilqat mein se kisi par na rakh khwah kam ho ya zyada, aur haqeer se haqeer pesha ikhtiyar karna hath phailane se badarjaha behtar hai. Jo apni jooti aap gaanth leta hai aur apne kapray dho leta hai woh ghuroor aur takabbur se paak hai.",
      en: "Never place your burden upon anyone in creation, whether small or large; taking up the humblest lawful trade is far nobler than begging. Whoever mends their own shoes and washes their own clothes is free from arrogance."
    },
    tashreeh: {
      ur: "اپنا کام اپنے ہاتھ سے کرنا اور چھوٹا موٹا حلال روزگار کر کے خود کفیل رہنا انسان کی خودداری اور عاجزی کی علامت ہے، جبکہ دوسروں پر بوجھ بننا عزتِ نفس کو ختم کر دیتا ہے۔",
      ro: "Apna kaam apne hath se karna aur chota mota halal rozgar kar ke khud-kafeel rehna insan ki khuddari aur aajizi ki alamat hai, jabkeh doosron par bojh banna izzat-e-nafs ko khatam kar deta hai.",
      en: "Doing one's own chores and earning through humble labor preserves self-respect and cures pride, whereas dependency erodes human dignity."
    },
    tags: [
      { ur: "خودداری", ro: "Khuddari", en: "Self-Respect" },
      { ur: "محنت", ro: "Mehnat", en: "Dignity of Labor" }
    ]
  },
  {
    id: "ma-135",
    slug: "apni-qadr-aap-karna-shukriya-aur-sachai-ka-martaba",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91-92",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "خود شناسی، احسان مندی اور سچائی کی بلندی",
      ro: "Khud-Shanasi, Ehsan-Mandi Aur Sachai Ki Bulandi",
      en: "Self-Respect, Gratitude, and the Elevation of Truth"
    },
    quote: {
      ur: "جو شخص اپنی قدر آپ نہیں کرتا کوئی دوسرا شخص بھی اس کی قدر نہیں پہچانتا۔ جو شخص کسی کے احسان کا شکر گزار نہیں ہے وہ آئندہ ضرور اس سے محروم ہو جاتا ہے، اور سچا آدمی سچائی کی بدولت اس مرتبے کو پہنچ جاتا ہے جسے جھوٹا آدمی مکر و حیلہ سے نہیں پا سکتا۔",
      ro: "Jo shakhs apni qadr aap nahi karta koi doosra shakhs bhi us ki qadr nahi pehchanta. Jo shakhs kisi ke ehsan ka shukr-guzar nahi hai woh ainda zaroor us se mehroom ho jata hai, aur sacha aadmi sachai ki badolat us martabay ko pohanch jata hai jisay jhoota aadmi makr-o-heela se nahi pa sakta.",
      en: "Whoever does not value their own dignity will not be valued by others. One who fails to appreciate a favor invites deprivation, and a truthful person reaches through honesty a noble station that a deceitful person can never attain through trickery."
    },
    tashreeh: {
      ur: "اپنے کردار کو گرانے والا انسان دنیا سے عزت کی توقع نہیں رکھ سکتا۔ محسن کی قدردانی نعمت کو بڑھاتی ہے، اور کھری سچائی انسان کو وہ پائیدار مقام دیتی ہے جہاں فریب اور چالاکی کبھی نہیں پہنچ سکتی۔",
      ro: "Apne kirdar ko girane wala insan duniya se izzat ki tawaqqa nahi rakh sakta. Mohsin ki qadr-dani nemat ko barhati hai, aur khari sachai insan ko woh paidar maqam deti hai jahan fareeb aur chalaki kabhi nahi pohanch sakti.",
      en: "Guarding one's moral integrity commands respect, gratitude sustains goodwill, and pure honesty achieves lasting heights that cunning and deceit can never reach."
    },
    tags: [
      { ur: "خود توقیری", ro: "Khud-Tauqeeri", en: "Self-Dignity" },
      { ur: "سچائی", ro: "Sachai", en: "Honesty" }
    ]
  }
];

export const batch10Quotes: QuoteItem[] = [
  {
    id: "ma-136",
    slug: "sabr-o-istikamat-aur-allahi-sahara",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nahl (16:127) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ہر حال میں صبر کرنا اور اللہ کی مدد پر بھروسہ رکھنا",
      ro: "Har Haal Mein Sabr Karna Aur Allah Ki Madad Par Bharosa Rakhna",
      en: "Exercising Patience Under All Circumstances and Trusting God"
    },
    quote: {
      ur: "اور آپ صبر کیجیے، اور آپ کا صبر اللہ ہی کی توفیق سے ہے، اور لوگوں کے رویے پر غم نہ کیجیے اور ان کی مکروہ چالوں سے تنگ دل نہ ہوں۔",
      ro: "Aur aap sabr kijiye, aur aap ka sabr Allah hi ki taufeeq se hai, aur logon ke rawaiye par gham na kijiye aur un ki makrooh chaalon se tang dil na hon.",
      en: "And be patient, [O Muhammad], and your patience is not but through Allah. Do not grieve over them and do not be in distress from what they conspire."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: زندگی میں مخالفین کی تنقید اور رکاوٹیں انسان کو مایوس کرتی ہیں۔ قرآن تسلی دیتا ہے کہ اصل صبر انسانی قوت سے نہیں بلکہ اللہ کی توفیق سے ملتا ہے۔ آج کا عملی سبق یہ ہے کہ منفی رویوں پر دل چھوٹا نہ کریں اور اپنا معاملہ اللہ کے سپرد کر کے ثابت قدم رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Zindagi mein mukhalifein ki tanqeed aur rukawatein insan ko mayous karti hain. Quran tasalli deta hai ke asal sabr insani quwwat se nahi balkay Allah ki taufeeq se milta hai. Aaj ka amli sabaq yeh hai ke manfi rawaiyon par dil chota na karein aur apna muamla Allah ke supurd kar ke sabit-qadam rahein.",
      en: "Context & Practical Lesson: True patience is a divine gift rather than mere willpower; staying resilient against opposition requires anchoring our hope entirely in God."
    },
    tags: [
      { ur: "صبر و استقامت", ro: "Sabr o Istaqamat", en: "Patience & Perseverance" },
      { ur: "توکل", ro: "Tawakkul", en: "Reliance on God" }
    ]
  },
  {
    id: "ma-137",
    slug: "ehsan-aur-taqwa-walo-ke-sath-allah-ki-maiyat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nahl (16:128) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تقویٰ اور احسان کرنے والوں کے ساتھ الٰہی معیت و نصرت",
      ro: "Taqwa Aur Ehsan Karne Walon Ke Sath Ilahi Maiyat o Nusrat",
      en: "Divine Company and Support for the Pious and Benevolent"
    },
    quote: {
      ur: "بے شک اللہ ان لوگوں کے ساتھ ہے جو تقویٰ اختیار کرتے ہیں اور جو احسان کرنے والے ہیں۔",
      ro: "Be-shak Allah un logon ke sath hai jo taqwa ikhtiyar karte hain aur jo ehsan karne wale hain.",
      en: "Indeed, Allah is with those who fear Him and those who are doers of good."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اس سے بڑی سعادت اور کیا ہو گی کہ کائنات کا خالق پرہیزگار اور نیکوکار بندوں کے ساتھ ہو۔ تقویٰ گناہوں سے بچاتا ہے اور احسان نیکی کی معراج ہے۔ آج کا عملی سبق یہ ہے کہ اپنے ہر عمل میں خدا ترسی اور اعلیٰ اخلاق کا مظاہرہ کریں تاکہ رب کی خاص نصرت حاصل ہو۔",
      ro: "Pas-e-Manzar o Tashreeh: Is se badi saadat aur kya hogi ke kainat ka khaliq parhezgar aur neko-kar bandon ke sath ho. Taqwa gunahon se bachata hai aur ehsan neki ki meraj hai. Aaj ka amli sabaq yeh hai ke apne har amal mein khuda-tarsi aur aala akhlaq ka muzahira karein taake Rab ki khas nusrat hasil ho.",
      en: "Context & Practical Lesson: Having the Creator's special backing through piety ('Taqwa') and benevolence ('Ihsan') guarantees inner strength and ultimate success."
    },
    tags: [
      { ur: "معیتِ الٰہی", ro: "Maiyat-e-Ilahi", en: "Divine Company" },
      { ur: "احسان", ro: "Ihsan", en: "Excellence in Character" }
    ]
  },
  {
    id: "ma-138",
    slug: "apne-ghar-walo-ko-namaz-ka-hukm-aur-sabr",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Taha (20:132) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اپنے اہل و عیال کو نماز کی تاکید اور خود بھی اس پر قائم رہنا",
      ro: "Apne Ahl-o-Ayal Ko Namaz Ki Taakid Aur Khud Bhi Us Par Qayam Rehna",
      en: "Commanding Family to Pray and Steadfastness in Worship"
    },
    quote: {
      ur: "اور اپنے گھر والوں کو نماز کا حکم دیجیے اور خود بھی اس پر پابند رہیے؛ ہم آپ سے کوئی روزی نہیں مانگتے، روزی تو ہم ہی آپ کو دیں گے، اور بہترین انجام تقویٰ کا ہے۔",
      ro: "Aur apne ghar walon ko namaz ka hukm kijiye aur khud bhi us par paband rahiye; hum aap se koi rozi nahi mangte, rozi to hum hi aap ko denge, aur behtareen anjam taqwa ka hai.",
      en: "And enjoin prayer upon your family [and people] and be steadfast therein. We ask you not for provision; We provide for you, and the [best] outcome is for [those of] righteousness."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مومن کی یہ ذمہ داری ہے کہ وہ صرف اپنی ذات تک محدود نہ رہے بلکہ اپنے گھر کے بچوں اور افراد کو بھی دین اور نماز کی پابندی کی تلقین کرے۔ رزق کی فکر رب پر چھوڑ کر عبادات پر توجہ دینا ہی اصل بندگی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے گھر میں نماز کا ماحول بنائیں اور رزق کے معاملے میں پختہ یقین رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Momin ki yeh zimmedari hai ke woh sirf apni zaat tak mehdood na rahe balkay apne ghar ke bachon aur afrad ko bhi deen aur namaz ki pabandi ki talqeen kare. Rizq ki fikr Rab par chor kar ibadaton par tawajjo dena hi asal bandagi hai. Aaj ka amli sabaq yeh hai ke apne ghar mein namaz ka mahool banayein aur rizq ke mamle mein pukhta yaqeen rakhein.",
      en: "Context & Practical Lesson: Guiding our family toward prayer and trusting God completely for sustenance brings peace and righteousness into our homes."
    },
    tags: [
      { ur: "اقامتِ صلوٰة", ro: "Iqamat-e-Salah", en: "Establishing Prayer" },
      { ur: "تربیتِ اولاد", ro: "Tarbiyat-e-Aulad", en: "Family Guidance" }
    ]
  },
  {
    id: "ma-139",
    slug: "pakiza-kamai-mein-se-umda-cheez-kharch-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 11",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "راہِ خدا میں پاکیزہ اور عمدہ مال خرچ کرنا",
      ro: "Raah-e-Khuda Mein Pakeeza Aur Umda Maal Kharch Karna",
      en: "Spending the Finest of Lawful Earnings in Charity"
    },
    quote: {
      ur: "مسلمانو! اللہ کی راہ میں عمدہ چیزوں میں سے خرچ کرو جو تم نے تجارت وغیرہ سے آپ کمائی ہوں، اور ناکارہ چیز کے دینے کا ارادہ تک بھی نہ کرنا کہ وہی چیز اگر کوئی تم کو دینا چاہے تو تم اس کو کبھی خوش دلی سے نہ لو۔",
      ro: "Musalmano! Allah ki raah mein umda cheezon mein se kharch karo jo tum ne tijarat waghaira se aap kamai hon, aur nakara cheez ke dene ka irada tak bhi na karna ke wahi cheez agar koi tum ko dena chahe to tum us ko kabhi khush-dili se na lo.",
      en: "O believers! Spend in charity from the finest things you have lawfully earned, and do not aim to give away what is defective or worthless—things you yourselves would never accept with open eyes."
    },
    tashreeh: {
      ur: "صدقہ اور خیرات دیتے وقت انسان کو اپنا ضمیر ٹٹولنا چاہیے کہ جو چیز وہ خود استعمال کرنا پسند نہیں کرتا، اسے اللہ کے نام پر کسی غریب کو دینا اخلاص کے منافی ہے۔",
      ro: "Sadqa aur khairat dete waqt insan ko apna zameer tatolna chahiye ke jo cheez woh khud istemal karna pasand nahi karta, usay Allah ke naam par kisi ghareeb ko dena ikhlas ke munafi hai.",
      en: "True generosity means giving to the needy with dignity—offering clean, valuable goods rather than discarding worn-out items one would never accept oneself."
    },
    tags: [
      { ur: "حلال کمائی", ro: "Halal Kamai", en: "Lawful Earning" },
      { ur: "انفاق", ro: "Infaq", en: "Generous Giving" }
    ]
  },
  {
    id: "ma-140",
    slug: "nahaq-maal-khana-aur-rishwat-ki-mazammat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ناحق مال خوری اور رشوت ستانی کی ممانعت",
      ro: "Nahaq Maal-Khori Aur Rishwat-Satani Ki Mumaniat",
      en: "Prohibition of Unlawful Wealth and Bribery"
    },
    quote: {
      ur: "آپس میں ایک دوسرے کے مال کو ناحق ناروا خورد برد نہ کرو، اور نہ مال کو حاکموں کے پاس رسائی پیدا کرنے کا ذریعہ گردانو کہ لوگوں کے مال سے جو کچھ ہاتھ لگے اس کو جان بوجھ کر ناحق ہضم کر جاؤ۔",
      ro: "Aapas mein aik doosre ke maal ko nahaq narawa khurd-burd na karo, aur na maal ko hakimon ke paas rasai paida karne ka zariya gardano ke logon ke maal se jo kuch hath lagay us ko jaan boojh kar nahaq hazam kar jao.",
      en: "Do not consume one another's wealth unjustly, nor use wealth as a bribe to influence rulers and judges so that you may knowingly devour a portion of other people's property in sin."
    },
    tashreeh: {
      ur: "دوسروں کا حق مارنا اور اپنے پیسے یا اثر و رسوخ کے زور پر فیصلے اپنے حق میں کروا کر لوگوں کی جائیداد ہڑپ کرنا دنیا اور آخرت دونوں کی تباہی ہے۔",
      ro: "Doosron ka haq marna aur apne paisay ya asar-o-rusookh ke zor par faisle apne haq mein karwa kar logon ki jaidad harap karna duniya aur akhirat dono ki tabahi hai.",
      en: "Usurping the property of others through fraud, bribery, or corrupt influence destroys social trust and invites severe accountability."
    },
    tags: [
      { ur: "دیانت داری", ro: "Diyanat-Dari", en: "Financial Integrity" },
      { ur: "انسدادِ رشوت", ro: "Insidad-e-Rishwat", en: "Anti-Corruption" }
    ]
  },
  {
    id: "ma-141",
    slug: "musafaha-ki-sattar-rehmatein-aur-chalees-ghar-hamsaya",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مصافحہ کی برکت اور چالیس گھروں تک ہمسائیگی کا حق",
      ro: "Musafaha Ki Barkat Aur Chalees Gharon Tak Hamsaigi Ka Haq",
      en: "Blessings of Shaking Hands and the Forty-House Neighborhood Right"
    },
    quote: {
      ur: "جب دو بھائی مصافحہ کرتے ہیں تو ان میں ستر رحمتیں تقسیم کی جاتی ہیں؛ انہتر رحمتیں اس کو ملتی ہیں جو ان دونوں میں زیادہ خندہ رو اور کشادہ پیشانی ہوتا ہے۔ حقِ ہمسائیگی درجہ وار چاروں طرف چالیس چالیس گھروں تک ہے۔",
      ro: "Jab do bhai musafaha karte hain to un mein sattar rehmatein taqseem ki jati hain; unhattar rehmatein us ko milti hain jo un dono mein zyada khanda-ro aur kushada-peshani hota hai. Haq-e-hamsaigi darja-war charon taraf chalees chalees gharon tak hai.",
      en: "When two brothers shake hands, seventy mercies are distributed between them, sixty-nine of which go to the one with the more cheerful face; and the rights of neighborhood extend to forty houses in all four directions."
    },
    tashreeh: {
      ur: "ملاقات کے وقت گرمجوشی اور مسکراہٹ کے ساتھ ہاتھ ملانا رحمتِ الٰہی کے نزول کا سبب ہے، اور اسلام نے محلے داری کے دائرے کو چاروں طرف چالیس گھروں تک پھیلا کر پورے معاشرے کو ایک خاندان بنا دیا ہے۔",
      ro: "Mulaqat ke waqt garm-joshi aur muskurahat ke sath hath milana rehmat-e-Ilahi ke nuzool ka sabab hai, aur Islam ne mohallay-dari ke dairay ko charon taraf chalees gharon tak phaila kar poore muashray ko aik khandan bana diya hai.",
      en: "Greeting others with a warm handshake and cheerful smile draws immense divine mercy, while recognizing forty surrounding homes as neighbors builds a deeply caring community."
    },
    tags: [
      { ur: "مصافحہ", ro: "Musafaha", en: "Warm Greeting" },
      { ur: "ہمسائیگی", ro: "Hamsaigi", en: "Neighborhood" }
    ]
  },
  {
    id: "ma-142",
    slug: "behtar-woh-hai-jis-se-neki-ki-tawaqqa-ho",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بہترین اور بدترین انسان کی پہچان",
      ro: "Behtareen Aur Bad-Tareen Insan Ki Pehchan",
      en: "The True Measure of the Best and Worst of People"
    },
    quote: {
      ur: "تم میں سے بہتر وہ شخص ہے جس سے نیکی کی توقع ہو اور بدی کی نسبت اطمینان ہو کہ وہ نہیں کرے گا؛ اور بدتر شخص وہ ہے جس سے نہ نیکی کی توقع ہو نہ ہی بدی نہ کرنے کی نسبت اطمینان ہو۔",
      ro: "Tum mein se behtar woh shakhs hai jis se neki ki tawaqqa ho aur badi ki nisbat itminan ho ke woh nahi karega; aur bad-tar shakhs woh hai jis se na neki ki tawaqqa ho na hi badi na karne ki nisbat itminan ho.",
      en: "The best among you is the one from whom goodness is expected and from whose harm people feel safe; and the worst among you is the one from whom no good is expected and from whose harm people are not safe."
    },
    tashreeh: {
      ur: "ہر انسان کو اپنا جائزہ لینا چاہیے کہ لوگ اس کے آنے سے خیر اور راحت کی امید باندھتے ہیں یا اس کے شر سے خوفزدہ رہتے ہیں۔ لوگوں کے لیے باعثِ اطمینان ہونا ہی سچی نیکی ہے۔",
      ro: "Har insan ko apna jaiza lena chahiye ke log us ke aane se khair aur rahat ki umeed bandhte hain ya us ke shar se khaufzada rehte hain. Logon ke liye baas-e-itminan hona hi sachi neki hai.",
      en: "Every individual should reflect on whether their presence inspires hope of kindness and security among people, or anxiety and distrust."
    },
    tags: [
      { ur: "کردار", ro: "Kirdar", en: "Character" },
      { ur: "خیر خواہی", ro: "Khair-Khwahi", en: "Goodwill" }
    ]
  },
  {
    id: "ma-143",
    slug: "maal-o-martaba-ki-hirs-aur-mazloom-ki-dua",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مال و جاہ کی حرص کا فساد اور مظلوم کی دعا",
      ro: "Maal-o-Jah Ki Hirs Ka Fasad Aur Mazloom Ki Dua",
      en: "The Corruption of Greed for Status and the Plea of the Wronged"
    },
    quote: {
      ur: "دو بھوکے بھیڑیئے جو بکریوں میں چھوڑ دیے جائیں، وہ اس قدر فساد برپا نہیں کرتے جس قدر انسان کی دولت اور مرتبہ کی حرص اس کے دین میں فساد ڈالتے ہیں۔ مظلوم کی دعا سے ڈر کیونکہ اس کے اور اللہ تعالیٰ کے درمیان کوئی پردہ نہیں۔",
      ro: "Do bhookay bheriye jo bakriyon mein chhor diye jayein, woh is qadar fasad barpa nahi karte jis qadar insan ki daulat aur martaba ki hirs us ke deen mein fasad dalte hain. Mazloom ki dua se dar kyunkeh us ke aur Allah Ta'ala ke darmiyan koi parda nahi.",
      en: "Two hungry wolves let loose among a flock of sheep do not cause as much havoc as a person's greed for wealth and status causes to their faith. Beware the supplication of the oppressed, for there is no veil between it and Allah."
    },
    tashreeh: {
      ur: "عہدے اور دولت کی اندھی ہوس انسان کے اخلاق اور ایمان کو چیر پھاڑ دیتی ہے اور اسے دوسروں پر ظلم کرنے پر آمادہ کرتی ہے، حالانکہ مظلوم کی آہ براہِ راست عرشِ الٰہی تک پہنچتی ہے۔",
      ro: "Ohday aur daulat ki andhi hawas insan ke akhlaq aur eman ko cheer phaar deti hai aur usay doosron par zulm karne par aamada karti hai, halankeh mazloom ki aah barah-e-raast Arsh-e-Ilahi tak pohanchti hai.",
      en: "Unchecked ambition for wealth and power ravages moral integrity and leads to injustice, whereas the cry of the wronged ascends directly to the Divine Court."
    },
    tags: [
      { ur: "حرص کی مذمت", ro: "Hirs Ki Mazammat", en: "Avoiding Greed" },
      { ur: "مظلوم کی آہ", ro: "Mazloom Ki Aah", en: "Justice" }
    ]
  },
  {
    id: "ma-144",
    slug: "cheez-ka-nuqs-bata-kar-bechna-aur-insan-ka-asal-maal",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تجارت میں عیب ظاہر کرنا اور انسان کا حقیقی مال",
      ro: "Tijarat Mein Aib Zahir Karna Aur Insan Ka Haqeeqi Maal",
      en: "Disclosing Defects in Trade and the True Meaning of One's Wealth"
    },
    quote: {
      ur: "کسی مسلمان کے لیے جائز نہیں کہ وہ کوئی ایسی چیز بیچے جس میں کسی نقص کے ہونے کا اس کو علم ہو، البتہ اگر خریدار کو اس نقص سے مطلع کر دے تو مضائقہ نہیں۔ اے بنی آدم! تیرا کوئی مال نہیں سوائے اس کے جو تو نے کھایا، پہن کر گھسایا یا کارِ خیر پر صرف کر کے جاری رکھا۔",
      ro: "Kisi Musalman ke liye jaiz nahi ke woh koi aisi cheez bechay jis mein kisi nuqs ke hone ka us ko ilm ho, albatta agar kharidar ko us nuqs se muttala kar de to muzaiqa nahi. Aye Bani Aadam! Tera koi maal nahi siwaye us ke jo tu ne khaya, pehan kar ghisaya ya kar-e-khair par sarf kar ke jari rakha.",
      en: "It is not permissible for a believer to sell an item knowing it has a defect without clearly informing the buyer. O child of Adam! Nothing of your wealth truly belongs to you except what you eat and consume, what you wear out, or what you spend in charity to endure forever."
    },
    tashreeh: {
      ur: "کاروبار میں برکت کا راز یہ ہے کہ مال کا نقص گاہک سے ہرگز نہ چھپایا جائے۔ اور حقیقت میں انسان کا اپنا مال صرف وہی ہے جسے وہ راہِ خیر میں خرچ کر کے آخرت کے لیے محفوظ کر لے۔",
      ro: "Karobar mein barkat ka raaz yeh hai ke maal ka nuqs gahak se hargiz na chhupaya jaye. Aur haqeeqat mein insan ka apna maal sirf wahi hai jisay woh raah-e-khair mein kharch kar ke akhirat ke liye mehfooz kar le.",
      en: "Blessings in commerce come from complete transparency with buyers, and the only wealth we truly keep is what we invest in lasting charity."
    },
    tags: [
      { ur: "تجارتی اخلاقیات", ro: "Tijarati Akhlaqiyat", en: "Business Ethics" },
      { ur: "صدقہ جاریہ", ro: "Sadqa-e-Jariya", en: "Lasting Charity" }
    ]
  },
  {
    id: "ma-145",
    slug: "logon-se-milna-sabr-karna-aur-qarabati-ko-sadqa",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "معاشرے میں رہ کر صبر کرنا اور رشتہ دار پر صدقہ",
      ro: "Muashray Mein Reh Kar Sabr Karna Aur Rishtedar Par Sadqa",
      en: "Living Patiently Among People and Charity to Relatives"
    },
    quote: {
      ur: "وہ مسلمان جو لوگوں سے ملتا جلتا ہے اور ان سے اذیت پہنچنے پر صبر کرتا ہے، اس سے اچھا ہے جو نہ لوگوں سے ملتا ہے اور نہ ان سے اذیت پہنچنے پر صبر کرتا ہے۔ مسکین کو صدقہ دینا ایک صدقہ اور قرابتی کو صدقہ دینا دو صدقے ہیں: ایک اصل صدقہ، دوسرے رشتے کی نگہداشت کا۔",
      ro: "Woh Musalman jo logon se milta julta hai aur un se aziyat pohanchne par sabr karta hai, us se acha hai jo na logon se milta hai aur na un se aziyat pohanchne par sabr karta hai. Miskeen ko sadqa dena aik sadqa aur qarabati ko sadqa dena do sadqay hain: aik asal sadqa, doosre rishtay ki nigahdasht ka.",
      en: "The believer who mixes with people and patiently endures their annoyances is better than one who withdraws from people and cannot bear their friction. Charity to the poor carries one reward, while charity to a needy relative carries two: the reward of charity and the reward of upholding kinship."
    },
    tashreeh: {
      ur: "دنیا سے کٹ کر رہنے کے بجائے انسانوں کے درمیان رہنا، ان کی تلخیوں کو برداشت کرنا اور سب سے پہلے اپنے غریب رشتہ داروں کی خبرگیری کرنا اسلام کا پسندیدہ طرزِ زندگی ہے۔",
      ro: "Duniya se kat kar rehne ke bajaye insanon ke darmiyan rehna, un ki talkhiyon ko bardasht karna aur sab se pehle apne ghareeb rishtedaron ki khabargeeri karna Islam ka pasandeeda tarz-e-zindagi hai.",
      en: "Engaging constructively with society while showing patience, and prioritizing needy family members in charity, represents the highest social ethic."
    },
    tags: [
      { ur: "صلہ رحمی", ro: "Sila-Rehmi", en: "Kinship" },
      { ur: "تحمل", ro: "Tahammul", en: "Social Patience" }
    ]
  },
  {
    id: "ma-146",
    slug: "aadmi-ke-teen-dost-aur-qabar-tak-ka-sathi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22-23",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "انسان کے تین دوست اور قیامت تک کا سچا ساتھی",
      ro: "Insan Ke Teen Dost Aur Qayamat Tak Ka Sacha Sathi",
      en: "A Person's Three Companions and the One That Stays Forever"
    },
    quote: {
      ur: "آدمی کے دوست تین ہیں: قبضِ روح تک کا ساتھی تو مال ہے، قبر تک کے ساتھی اس کے گھر والے، اور قیامت تک کے ساتھی اس کے اعمال۔ جو دنیاوی حیثیت میں تجھ سے زیادہ ہے اس کو مت دیکھ کہ ناشکری پیدا ہوگی۔",
      ro: "Aadmi ke dost teen hain: qabz-e-rooh tak ka sathi to maal hai, qabar tak ke sathi us ke ghar wale, aur qayamat tak ke sathi us ke aamaal. Jo dunyawi haisiyat mein tujh se zyada hai us ko mat dekh ke nashukri paida hogi.",
      en: "A person has three companions: wealth stays only until the soul departs, family accompanies them to the grave, and only their deeds remain with them until the Day of Resurrection. Do not look with envy at those wealthier than you, lest it breed ingratitude."
    },
    tashreeh: {
      ur: "انسان جس مال کے لیے عمر کھپا دیتا ہے وہ موت کے وقت ہی ساتھ چھوڑ دیتا ہے، جبکہ نیک اعمال قبر سے حشر تک وفا کرتے ہیں۔ دنیا میں اپنے سے کم وسائل والوں کو دیکھنے سے شکر نصیب ہوتا ہے۔",
      ro: "Insan jis maal ke liye umar khapa deta hai woh maut ke waqt hi sath chhor deta hai, jabkeh nek aamaal qabar se hashr tak wafa karte hain. Duniya mein apne se kam wasail walon ko dekhne se shukr naseeb hota hai.",
      en: "Material possessions part at death and loved ones turn back at the grave; only righteous deeds remain faithful companions into eternity."
    },
    tags: [
      { ur: "اعمال", ro: "Aamaal", en: "Good Deeds" },
      { ur: "فکرِ آخرت", ro: "Fikr-e-Akhirat", en: "Eternal Perspective" }
    ]
  },
  {
    id: "ma-147",
    slug: "dushman-ko-dost-banana-aur-miskeen-ki-faryad",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 61",
    author: {
      ur: "حضرت سلیمان علیہ السلام",
      ro: "Hazrat Suleman (A.S)",
      en: "Prophet Solomon (A.S)"
    },
    title: {
      ur: "دشمن کو دوست بنانے کا راز اور مسکین کی داد رسی",
      ro: "Dushman Ko Dost Banane Ka Raaz Aur Miskeen Ki Daad-Rasi",
      en: "Turning Enemies into Friends and Heeding the Cry of the Poor"
    },
    quote: {
      ur: "جب انسان کی روش اللہ کی مرضی کے مطابق ہوتی ہے تو وہ دشمنوں کو بھی دوست بنا لیتا ہے۔ جو مسکین پر ہنسا اس نے بنانے والے کی حقارت کی، اور جو مسکین کا نالہ سن کر اپنے کان بند کر لیتا ہے وہ آپ بھی نالہ کرے گا اور اس کی سنی نہ جائے گی۔",
      ro: "Jab insan ki rawish Allah ki marzi ke mutabiq hoti hai to woh dushmanon ko bhi dost bana leta hai. Jo miskeen par hansa us ne Banane Wale ki haqarat ki, aur jo miskeen ka nala sun kar apne kaan band kar leta hai woh aap bhi nala karega aur us ki suni na jayegi.",
      en: "When a person's ways are pleasing to God, He causes even their enemies to be at peace with them. Whoever mocks the poor insults their Maker, and whoever shuts their ears to the cry of the needy will one day cry out without being heard."
    },
    tashreeh: {
      ur: "سچائی اور تقویٰ میں ایسی کشش ہے کہ مخالفین کے دل بھی نرم پڑ جاتے ہیں۔ کسی غریب کا مذاق اڑانا دراصل خالق کی توہین ہے، اور بے بسوں کی فریاد نہ سننے والا خود رحمت سے محروم ہو جاتا ہے۔",
      ro: "Sachai aur taqwa mein aisi kashish hai ke mukhalifeen ke dil bhi naram par jate hain. Kisi ghareeb ka mazaq urana dar-asal Khaliq ki tauheen hai, aur be-bason ki faryad na sunne wala khud rehmat se mehroom ho jata hai.",
      en: "Righteous conduct softens even hostile hearts, while mocking or ignoring the plight of the poor invites divine displeasure."
    },
    tags: [
      { ur: "غریب پروری", ro: "Ghareeb-Parwari", en: "Caring for the Poor" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Righteousness" }
    ]
  },
  {
    id: "ma-148",
    slug: "duniya-o-akhirat-ke-do-safar-aur-asmani-khazana",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 62 & 64",
    author: {
      ur: "حضرت عیسیٰ علیہ السلام",
      ro: "Hazrat Isa (A.S)",
      en: "Prophet Jesus (A.S)"
    },
    title: {
      ur: "دو سفروں کا توشہ اور آسمان کا لازوال خزانہ",
      ro: "Do Safaron Ka Tosha Aur Asman Ka La-Zawal Khazana",
      en: "Provisions for Two Journeys and Treasure in Heaven"
    },
    quote: {
      ur: "سفر دو قسم کا ہے: دنیا اور آخرت کا۔ دنیا کے سفر میں توشہ ہمراہ رکھنا چاہیے اور سفرِ آخرت میں روانگی سے پہلے بھیج دینا چاہیے۔ اپنے واسطے زمین پر مال جمع نہ کر جہاں کیڑا اور زنگ خراب کرتا ہے، بلکہ آسمان پر مال جمع کر کیونکہ جہاں تیرا مال ہے وہیں تیرا دل بھی لگا رہے گا۔",
      ro: "Safar do qism ka hai: duniya aur akhirat ka. Duniya ke safar mein tosha hamrah rakhna chahiye aur safar-e-akhirat mein rawangi se pehle bhej dena chahiye. Apne wastay zameen par maal jama na kar jahan keera aur zang kharab karta hai, balkay asman par maal jama kar kyunkeh jahan tera maal hai wahin tera dil bhi laga rahega.",
      en: "There are two journeys: that of this world and that of the Hereafter. For a worldly journey you carry provisions with you, but for the eternal journey you must send your provisions ahead. Store up treasures in heaven where neither moth nor rust destroys, for where your treasure is, there your heart will be also."
    },
    tashreeh: {
      ur: "آخرت کے سفر میں انسان اپنے ہاتھ میں کچھ لے کر نہیں جا سکتا، صرف وہی نیکی کام آتی ہے جو زندگی میں آگے بھیج دی جائے۔ جب انسان اپنا مال خیر کے کاموں میں لگاتا ہے تو اس کا دل بھی آخرت سے جڑ جاتا ہے۔",
      ro: "Akhirat ke safar mein insan apne hath mein kuch le kar nahi ja sakta, sirf wahi neki kaam aati hai jo zindagi mein aagay bhej di jaye. Jab insan apna maal khair ke kaamon mein lagata hai to us ka dil bhi akhirat se jur jata hai.",
      en: "Only the charity and good deeds sent ahead before death serve as provisions for eternity, anchoring the human heart in lasting spiritual values."
    },
    tags: [
      { ur: "توشۂ آخرت", ro: "Tosha-e-Akhirat", en: "Eternal Provision" },
      { ur: "زہد", ro: "Zuhd", en: "Detachment" }
    ]
  },
  {
    id: "ma-149",
    slug: "sabr-ka-be-andaza-sawab-aur-us-ki-hifazat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 66-67",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "صبر کے بے اندازہ ثواب کی حفاظت",
      ro: "Sabr Ke Be-Andaza Sawab Ki Hifazat",
      en: "Preserving the Boundless Reward of Patience"
    },
    quote: {
      ur: "عدل و انصاف ہر ایک سے خوب ہے۔ مصیبت میں صبر کرنا سخت ہے، مگر صبر کے ثواب کو ضائع نہ ہونے دینا سخت تر ہے؛ اور ہر چیز کے ثواب کا ایک اندازہ ہے سوائے ثوابِ صبر کے کہ وہ بے اندازہ ہے۔",
      ro: "Adal o insaf har aik se khoob hai. Musibat mein sabr karna sakht hai, magar sabr ke sawab ko zaya na hone dena sakht-tar hai; aur har cheez ke sawab ka aik andaza hai siwaye sawab-e-sabr ke ke woh be-andaza hai.",
      en: "Justice is beautiful from everyone. Enduring calamity with patience is hard, yet guarding the reward of patience from being ruined by complaints is even harder; every virtue has a measured reward except patience, whose reward is boundless."
    },
    tashreeh: {
      ur: "بہت سے لوگ مصیبت کے وقت تو رک جاتے ہیں لیکن بعد میں جگہ جگہ شکوہ و شکایت کر کے اپنے صبر کا اجر ضائع کر بیٹھتے ہیں۔ زبان کو شکوے سے روک کر صبر کی حفاظت کرنا بے حساب انعام دلاتا ہے۔",
      ro: "Bohot se log musibat ke waqt to ruk jate hain lekin baad mein jagah jagah shikwa o shikayat kar ke apne sabr ka ajr zaya kar baithte hain. Zaban ko shikway se rok kar sabr ki hifazat karna be-hisab inam dilata hai.",
      en: "True patience means not only enduring the initial hardship, but refraining from later complaints that erode its immeasurable spiritual reward."
    },
    tags: [
      { ur: "ثوابِ صبر", ro: "Sawab-e-Sabr", en: "Reward of Patience" },
      { ur: "استقامت", ro: "Istaqamat", en: "Perseverance" }
    ]
  },
  {
    id: "ma-150",
    slug: "qabiliyat-zaban-ke-neechay-aur-apne-aap-se-haya",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 88-90",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "شکرِ نعمت، زبان کے نیچے قابلیت اور حیا کی غایت",
      ro: "Shukr-e-Nemat, Zaban Ke Neechay Qabiliyat Aur Haya Ki Ghayat",
      en: "Gratitude, Hidden Worth Under the Tongue, and the Pinnacle of Modesty"
    },
    quote: {
      ur: "شکرِ نعمت حصولِ نعمت کا باعث ہے اور ناشکری زوالِ نعمت کا۔ آدمی کی قابلیت زبان کے نیچے پوشیدہ ہے، اور حیا کی غایت یہ ہے کہ آدمی اپنے آپ سے حیا کرے۔",
      ro: "Shukr-e-nemat husool-e-nemat ka baas hai aur nashukri zawal-e-nemat ka. Aadmi ki qabiliyat zaban ke neechay posheeda hai, aur haya ki ghayat yeh hai ke aadmi apne aap se haya kare.",
      en: "Gratitude attracts further blessings while ingratitude drives them away. A person's true worth lies hidden beneath their tongue, and the highest degree of modesty is for a person to feel modest before their own conscience."
    },
    tashreeh: {
      ur: "انسان جب تک خاموش رہتا ہے اس کا علم و فہم چھپا رہتا ہے اور بولتے ہی اس کی قابلیت ظاہر ہو جاتی ہے۔ اور سب سے اعلیٰ حیا یہ ہے کہ انسان تنہائی میں بھی اپنے ضمیر کے سامنے برا کام کرنے سے شرمائے۔",
      ro: "Insan jab tak khamosh rehta hai us ka ilm o fehm chhupa rehta hai aur bolte hi us ki qabiliyat zahir ho jati hai. Aur sab se aala haya yeh hai ke insan tanhai mein bhi apne zameer ke samne bura kaam karne se sharmaye.",
      en: "Speech reveals the depth of a person's intellect, and the noblest form of modesty is refraining from wrong in private out of respect for one's own soul."
    },
    tags: [
      { ur: "قابلیت", ro: "Qabiliyat", en: "Merit" },
      { ur: "حیائے نفس", ro: "Haya-e-Nafs", en: "Self-Modesty" }
    ]
  }
];

export const batch11Quotes: QuoteItem[] = [
  {
    id: "ma-151",
    slug: "zina-ke-asbab-se-door-raho-aur-haya-ikhtiyar-karo",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Furqan (25:68) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "شرک، ناحق قتل اور بدکاری سے مکمل اجتناب",
      ro: "Shirk, Nahaq Qatal Aur Bad-Kaari Se Mukammal Ijtinab",
      en: "Complete Avoidance of Shirk, Unjust Murder, and Immorality"
    },
    quote: {
      ur: "اور جو لوگ اللہ کے ساتھ کسی دوسرے معبود کو نہیں پکارتے، اور اس جان کو قتل نہیں کرتے جسے اللہ نے حرام کیا ہے مگر حق کے ساتھ، اور نہ ہی زنا کرتے ہیں؛ اور جو شخص یہ کام کرے گا وہ اپنے گناہ کی سزا بھگتے گا۔",
      ro: "Aur jo log Allah ke sath kisi doosre mabood ko nahi pukarte, aur us jaan ko qatal nahi karte jisay Allah ne haram kiya hai magar haq ke sath, aur na hi zina karte hain; aur jo shakhs yeh kaam karega woh apne gunah ki saza bhagatega.",
      en: "And those who do not invoke with Allah another deity or kill the soul which Allah has forbidden, except by right, and do not commit unlawful sexual intercourse. And whoever should do that will meet a penalty."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الفرقان میں رحمان کے سچے بندوں کے بنیادی اوصاف میں توحید کے بعد انسانی جان کی حرمت اور عفت و پاکدامنی کو رکھا گیا ہے۔ یہ تین بڑے گناہ معاشرے کی جڑیں ہلا دیتے ہیں۔ آج کا عملی سبق یہ ہے کہ اپنے عقیدے کو خالص رکھیں، ہر قسم کے ظلم سے بچیں اور اپنی اخلاقی حدود کی سختی سے پاسداری کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Furqan mein Rehman ke sachay bandon ke bunyadi ausaf mein tauheed ke baad insani jaan ki hurmat aur iffat o pakdamani ko rakha gaya hai. Yeh teen bade gunah muashray ki jarrein hila dete hain. Aaj ka amli sabaq yeh hai ke apne aqeeday ko khalis rakhein, har qisam ke zulm se bachein aur apni akhlaqi hudood ki sakhti se pasdari karein.",
      en: "Context & Practical Lesson: True servants of the Merciful protect their faith from idolatry, respect human life, and guard their chastity as the core pillars of a righteous life."
    },
    tags: [
      { ur: "عقیدہ و اخلاق", ro: "Aqeedah o Akhlaq", en: "Faith & Morals" },
      { ur: "پاکیزگی", ro: "Pakeezgi", en: "Purity" }
    ]
  },
  {
    id: "ma-152",
    slug: "tauba-iman-aur-nek-amal-se-gunah-badiyon-ki-tabdeeli",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Furqan (25:70) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سچی توبہ اور ایمان کے ذریعے برائیوں کا نیکیوں میں بدل جانا",
      ro: "Sachi Tauba Aur Eman ke Zariye Buraiyon Ka Nekiyon Mein Badal Jana",
      en: "Sincere Repentance Transforms Evil Deeds into Virtues"
    },
    quote: {
      ur: "مگر جو شخص توبہ کر لے اور ایمان لے آئے اور صالح عمل کرے، تو اللہ ایسے لوگوں کی برائیوں کو نیکیوں میں بدل دیتا ہے؛ اور اللہ بہت بخشنے والا بڑا مہربان ہے۔",
      ro: "Magar jo shakhs tauba kar le aur eman le aaye aur saleh amal kare, to Allah aise logon ki buraiyon ko nekiyon mein badal deta hai; aur Allah bohot bakhshne wala bada meharban hai.",
      en: "Except for those who repent, believe and do righteous work. For them Allah will replace their evil deeds with good. And ever is Allah Forgiving and Merciful."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اللہ تعالیٰ کی رحمت اتنی وسیع ہے کہ اگر کوئی بندہ سچے دل سے ماضی کی خطاؤں پر نادم ہو کر توبہ کر لے اور اچھے اعمال شروع کر دے، تو رب نہ صرف گناہ معاف فرماتا ہے بلکہ نامۂ اعمال میں ان برائیوں کی جگہ نیکیوں کا ثواب لکھ دیتا ہے۔ آج کا عملی سبق یہ ہے کہ مایوس نہ ہوں، ماضی کی غلطیوں سے سیکھ کر آج سے ہی نیک اعمال کی راہ اختیار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Allah Ta'ala ki rehmat itni wasi' hai ke agar koi banda sache dil se mazi ki khataon par nadim ho kar tauba kar le aur achay aamaal shuru kar de, to Rab na sirf gunah maaf farmata hai balkay nama-e-aamaal mein un buraiyon ki jagah nekiyon ka sawab likh deta hai. Aaj ka amli sabaq yeh hai ke mayous na hon, mazi ki ghaltiyon se seekh kar aaj se hi nek aamaal ki raah ikhtiyar karein.",
      en: "Context & Practical Lesson: Divine mercy is boundless; sincere repentance wipes the slate clean and transforms past regrets into a future filled with righteous potential."
    },
    tags: [
      { ur: "توبہ کی طاقت", ro: "Tauba Ki Taqat", en: "Power of Repentance" },
      { ur: "رحمتِ الٰہی", ro: "Rehmat-e-Ilahi", en: "Divine Mercy" }
    ]
  },
  {
    id: "ma-153",
    slug: "jhootay-aur-batil-gawahon-se-bchna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Furqan (25:72) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "باطل مجالس، جھوٹی گواہی اور لغویات سے کنارہ کشی",
      ro: "Batil Majalis, Jhooti Gawahi Aur Laghviyat Se Kinara-Kashi",
      en: "Staying Away from Falsehood, False Testimony, and Vain Talk"
    },
    quote: {
      ur: "اور جو لوگ جھوٹی گواہی نہیں دیتے، اور جب کسی لغو یا بیہودہ بات پر ان کا گزر ہو جائے تو وہ وقار کے ساتھ بزرگانہ انداز میں آگے نکل جاتے ہیں۔",
      ro: "Aur jo log jhooti gawahi nahi dete, aur jab kisi laghwo ya behooda baat par un ka guzar ho jaye to woh waqar ke sath buzurgana andaz mein aagay nikal jate hain.",
      en: "And those who do not testify to falsehood, and when they pass near ill speech, they pass by with dignity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مومن کی شان یہ ہے کہ وہ جھوٹے پروپیگنڈے، باطل محفلوں اور بے مقصد گپ شپ یا غیبت میں خود کو شامل نہیں کرتا۔ اگر کہیں ناپسندیدہ ماحول بن جائے تو وہ وقار کے ساتھ وہاں سے کنارہ کش ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنی زبان اور محفلوں کو جھوٹ اور لغویات سے پاک رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Momin ki shaan yeh hai ke woh jhoote propaganda, batil mehfilon aur be-maqsad gap-shap ya gheebat mein khud ko shamil nahi karta. Agar kahin napasandeeda mahool ban jaye to woh waqar ke sath wahan se kinara-kash ho jata hai. Aaj ka amli sabaq yeh hai ke apni zaban aur mehfilon ko jhoot aur laghviyat se paak rakhein.",
      en: "Context & Practical Lesson: A person of dignity avoids false testimonies and toxic gatherings, gracefully walking away from idle and harmful speech."
    },
    tags: [
      { ur: "وقار و متانت", ro: "Waqar o Matanat", en: "Dignity" },
      { ur: "لغویات سے پرہیز", ro: "Laghviyat Se Parhez", en: "Avoiding Vain Talk" }
    ]
  },
{
    id: "ma-154",
    slug: "tohmat-ki-jagah-se-bachna-aur-sadgi-eman-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 16",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تہمت کے مقامات سے پرہیز، سادگی اور سفارشِ خیر",
      ro: "Tohmat Ke Maqamat Se Parhez, Sadgi Aur Sifarish-e-Khair",
      en: "Avoiding Suspicion, Embracing Simplicity, and Helping Others"
    },
    quote: {
      ur: "تہمت کی جگہ سے دور رہ، کسی کو اپنی نسبت بدگمانی میں نہ ڈال۔ سادگی ایمان کی علامت ہے، اور اگر تو صاحبِ منزلت ہے تو کسی کے لیے سعی کرنے میں دریغ نہ کر۔",
      ro: "Tohmat ki jagah se door reh, kisi ko apni nisbat bad-gumani mein na daal. Sadgi eman ki alamat hai, aur agar tu sahib-e-manzilat hai to kisi ke liye sa'ee karne mein daregh na kar.",
      en: "Stay away from places of suspicion so you do not give people cause to misjudge you. Simplicity is a sign of faith, and if you hold a position of respect, never hesitate to intercede and strive on behalf of those in need."
    },
    tashreeh: {
      ur: "مومن کو نہ صرف برائی سے بچنا چاہیے بلکہ ایسی مشکوک محفلوں سے بھی دور رہنا چاہیے جہاں اس کی عزت پر حرف آئے۔ رہن سہن میں سادگی اپنانا اور اپنے اثر و رسوخ سے بے بسوں کا کام نکلوانا ایمان کا تقاضا ہے۔",
      ro: "Momin ko na sirf burai se bachna chahiye balkay aisi mashkook mehfilon se bhi door rehna chahiye jahan us ki izzat par harf aaye. Rehan-sehan mein sadgi apnana aur apne asar-o-rusookh se be-bason ka kaam nikalwana eman ka taqaza hai.",
      en: "Protecting one's reputation by avoiding questionable situations, living simply, and using one's influence to help the needy are hallmarks of true faith."
    },
    tags: [
      { ur: "سادگی", ro: "Sadgi", en: "Simplicity" },
      { ur: "عزتِ نفس", ro: "Izzat-e-Nafs", en: "Honor" }
    ]
  },
  {
    id: "ma-155",
    slug: "fuzool-kharchi-ke-baghair-khana-pehanna-aur-najat-ka-rasta",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اسراف و تکبر کے بغیر زندگی اور نجات کے تین اصول",
      ro: "Israf o Takabbur Ke Baghair Zindagi Aur Najat Ke Teen Usool",
      en: "Living Without Extravagance and the Three Keys to Salvation"
    },
    quote: {
      ur: "کھاؤ، خیرات کرو اور پہنو اس حد تک کہ فضول خرچی اور تکبر نہ کرو۔ نجات کیا ہے؟ اپنی زبان کو بند رکھنا، اپنے گھر میں قیام رکھنا اور گناہوں پر نادم ہونا۔",
      ro: "Khao, khairat karo aur pehno is had tak ke fuzool-kharchi aur takabbur na karo. Najat kya hai? Apni zaban ko band rakhna, apne ghar mein qiyam rakhna aur gunahon par nadim hona.",
      en: "Eat, give in charity, and dress well without extravagance or arrogance. What is salvation? Guarding your tongue, finding contentment within your home, and feeling sincere remorse over your sins."
    },
    tashreeh: {
      ur: "اسلام جائز نعمتوں کے استعمال سے نہیں روکتا بشرطیکہ اس میں اسراف اور غرور شامل نہ ہو۔ فتنوں کے دور میں اپنی زبان قابو میں رکھنا، بلاضرورت آوارہ گردی سے بچنا اور اپنی خطاؤں پر توبہ کرنا نجات کی ضمانت ہے۔",
      ro: "Islam jaiz nematon ke istemal se nahi rokta bashart-e-ke us mein israf aur ghuroor shamil na ho. Fitnon ke daur mein apni zaban qaboo mein rakhna, bila-zaroorat aawara-gardi se bachna aur apni khataon par tauba karna najat ki zamanat hai.",
      en: "Enjoying lawful blessings without waste or pride, restraining the tongue, cherishing peaceful family life, and repenting sincerely lead to ultimate salvation."
    },
    tags: [
      { ur: "اعتدال", ro: "Aitdaal", en: "Moderation" },
      { ur: "نجات", ro: "Najat", en: "Salvation" }
    ]
  },
  {
    id: "ma-156",
    slug: "hukumat-talab-na-karna-aur-chaar-cheezon-se-panah",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "منصب کی ہوس سے پرہیز اور بے نفع علم سے پناہ",
      ro: "Mansab Ki Hawas Se Parhez Aur Be-Nafa Ilm Se Panah",
      en: "Not Craving Authority and Seeking Refuge from Useless Knowledge"
    },
    quote: {
      ur: "حکومت طلب مت کر؛ کیونکہ وہ اگر تجھے مانگنے سے ملی تو اس کا سب بوجھ تجھ پر پڑ جائے گا، اور اگر بن مانگے ملی تو تیری ہر طرح سے امداد ہوگی۔ اللہ کی پناہ مانگو ایسے دل سے جس میں عاجزی نہ ہو، ایسے نفس سے جو سیر نہ ہو اور ایسے علم سے جس سے نفع نہ ہو۔",
      ro: "Hukumat talab mat kar; kyunkeh woh agar tujhe mangne se mili to us ka sab bojh tujh par par jayega, aur agar bin mangay mili to teri har tarah se imdad hogi. Allah ki panah mango aise dil se jis mein aajizi na ho, aise nafs se jo sair na ho aur aise ilm se jis se nafa na ho.",
      en: "Do not crave authority, for if it is given to you because you asked for it, you will be left alone to bear its burden; but if it comes to you without asking, you will be divinely assisted. Seek refuge in Allah from a heart lacking humility, a soul never satisfied, and knowledge that brings no benefit."
    },
    tashreeh: {
      ur: "عہدہ اور سرداری بڑا بھاری بوجھ ہے؛ جو اس کے پیچھے بھاگتا ہے وہ تنہا رہ جاتا ہے اور جسے اہلیت کی بنا پر ذمہ داری ملے اللہ اس کی مدد فرماتا ہے۔ نفع بخش علم اور عاجز دل ہی انسان کا اصل سرمایہ ہیں۔",
      ro: "Ohda aur sardari bada bhari bojh hai; jo us ke peechay bhagta hai woh tanha reh jata hai aur jisay ahliyat ki bina par zimmedari milay Allah us ki madad farmata hai. Nafa-bakhsh ilm aur aajiz dil hi insan ka asal sarmaya hain.",
      en: "Chasing power leaves a person burdened without divine aid, while beneficial knowledge and a humble, contented heart are the greatest spiritual treasures."
    },
    tags: [
      { ur: "علمِ نافع", ro: "Ilm-e-Nafe", en: "Beneficial Knowledge" },
      { ur: "ذمہ داری", ro: "Zimmedari", en: "Responsibility" }
    ]
  },
  {
    id: "ma-157",
    slug: "raston-mein-baithne-ke-huqooq-aur-aadab",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "گزرگاہوں اور راستوں کے سات اخلاقی حقوق",
      ro: "Guzargahon Aur Raston Ke Saat Akhlaqi Huqooq",
      en: "Seven Moral Duties of Public Pathways"
    },
    quote: {
      ur: "راستوں میں بیٹھنے سے پرہیز کرو؛ اگر بیٹھنا ہی ہے تو اس کا حق ادا کرو: نظر نیچے رکھنا، ایذا پہنچانے سے باز رہنا، سلام کا جواب دینا، نیکی کا حکم دینا، برائی سے منع کرنا، مصیبت زدہ کی فریاد رسی کرنا اور بھولے ہوئے کو رستہ بتانا۔",
      ro: "Raston mein baithne se parhez karo; agar baithna hi hai to us ka haq ada karo: nazar neechay rakhna, eiza pohanchane se baaz rehna, salam ka jawab dena, neki ka hukm dena, burai se mana karna, musibat-zada ki faryad-rasi karna aur bhoolay huye ko rasta batana.",
      en: "Avoid sitting idly along public pathways; if you must sit there, fulfill the right of the road: lower your gaze, refrain from harming passersby, return greetings, encourage good, forbid wrong, aid the distressed, and guide the lost."
    },
    tashreeh: {
      ur: "یہ فرمان عوامی مقامات کے بہترین آداب سکھاتا ہے کہ گلی کوچوں اور چوراہوں پر بیٹھ کر گزرنے والوں کو تاکنے یا تنگ کرنے کے بجائے نگاہوں کی حفاظت کی جائے اور مسافروں و پریشان حال لوگوں کی مدد کی جائے۔",
      ro: "Yeh farman awami maqamat ke behtareen aadab sikhata hai ke gali koochon aur chaurahon par baith kar guzarne walon ko takne ya tang karne ke bajaye nigahon ki hifazat ki jaye aur musafiron o pareshan-haal logon ki madad ki jaye.",
      en: "This prophetic charter of public etiquette transforms streets into spaces of safety, modesty, helpfulness, and civic responsibility."
    },
    tags: [
      { ur: "آدابِ معاشرت", ro: "Aadab-e-Muasharat", en: "Public Etiquette" },
      { ur: "فریاد رسی", ro: "Faryad-Rasi", en: "Helping the Distressed" }
    ]
  },
  {
    id: "ma-158",
    slug: "hasab-nasab-ke-bajaye-aamaal-aur-momin-ka-aaina",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "نسب کے بجائے اعمال کی اہمیت اور بھائی کا آئینہ ہونا",
      ro: "Nasab Ke Bajaye Aamaal Ki Ahmiyat Aur Bhai Ka Aaina Hona",
      en: "Bringing Deeds Instead of Lineage and Being a Mirror to Your Brother"
    },
    quote: {
      ur: "تم میرے پاس حسب نسب لے کر نہ آؤ بلکہ اعمال لے کر آؤ۔ تم میں سے ہر ایک اپنے بھائی کا آئینہ ہے؛ اگر کوئی کسی میں برائی دیکھے تو چاہیے کہ اسے ہٹا دے یا بتا دے۔",
      ro: "Tum mere paas hasab-nasab le kar na aao balkay aamaal le kar aao. Tum mein se har aik apne bhai ka aaina hai; agar koi kisi mein burai dekhe to chahiye ke usay hata de ya bata de.",
      en: "Do not come to me boasting of your lineage; rather, come with your righteous deeds. Each of you is a mirror to your brother: if you see a flaw in him, gently help remove it."
    },
    tashreeh: {
      ur: "آخرت میں خاندانی شجرے نہیں بلکہ انسان کے اپنے اعمال تولے جائیں گے۔ اور جس طرح آئینہ خاموشی سے چہرے کا داغ دکھا دیتا ہے لیکن تماشا نہیں بناتا، اسی طرح سچا بھائی رازداری سے اپنے بھائی کی اصلاح کرتا ہے۔",
      ro: "Akhirat mein khandani shajray nahi balkay insan ke apne aamaal tolay jayenge. Aur jis tarah aaina khamoshi se chehray ka daagh dikha deta hai lekin tamasha nahi banata, isi tarah sacha bhai raazdari se apne bhai ki islah karta hai.",
      en: "Personal deeds alone matter over ancestry, and just as a mirror privately reveals a blemish without exposing it to the world, a true friend corrects faults with dignity."
    },
    tags: [
      { ur: "اعمال", ro: "Aamaal", en: "Righteous Deeds" },
      { ur: "اصلاح", ro: "Islah", en: "Sincere Correction" }
    ]
  },
  {
    id: "ma-159",
    slug: "panch-aamaal-ke-sath-panch-ilahi-inamat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 27",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "پانچ اعمال کے ساتھ پانچ الٰہی انعامات کا وعدہ",
      ro: "Panch Aamaal Ke Sath Panch Ilahi Inamat Ka Wada",
      en: "Five Divine Gifts Promised with Five Virtues"
    },
    quote: {
      ur: "اللہ تعالیٰ پانچ چیزوں کے ساتھ پانچ چیزیں عنایت کرتا ہے: شکر کے ساتھ مال کی زیادتی، دعا کے ساتھ اجابت، استغفار کے ساتھ بخشش، صدقہ کے ساتھ قبولیت اور رحم کے ساتھ رحمت۔",
      ro: "Allah Ta'ala panch cheezon ke sath panch cheezein inayat karta hai: shukr ke sath maal ki ziyadati, dua ke sath ijabat, istighfar ke sath bakhshish, sadqa ke sath qubooliyat aur reham ke sath rehmat.",
      en: "Allah grants five blessings alongside five actions: increase in provision with gratitude, acceptance with supplication, forgiveness with repentance, favor with charity, and divine mercy with compassion."
    },
    tashreeh: {
      ur: "یہ پانچ روحانی کنجیاں ہر انسان کے ہاتھ میں ہیں: رزق میں برکت کے لیے شکر، مشکلات کے حل کے لیے دعا، گناہوں کی دھلائی کے لیے استغفار، بلاؤں کے ٹلنے کے لیے صدقہ اور رب کی رحمت پانے کے لیے مخلوق پر رحم۔",
      ro: "Yeh panch roohani kunjiyan har insan ke hath mein hain: rizq mein barkat ke liye shukr, mushkilat ke hal ke liye dua, gunahon ki dhulai ke liye istighfar, balaon ke talne ke liye sadqa aur Rab ki rehmat pane ke liye makhlooq par reham.",
      en: "These five spiritual keys unlock divine grace: gratitude multiplies blessings, prayer brings answers, repentance secures pardon, charity earns acceptance, and mercy attracts mercy."
    },
    tags: [
      { ur: "رحمتِ الٰہی", ro: "Rehmat-e-Ilahi", en: "Divine Mercy" },
      { ur: "برکت", ro: "Barkat", en: "Blessings" }
    ]
  },
  {
    id: "ma-160",
    slug: "khajoor-ke-tukray-se-khairat-aur-tauba-ki-pakeezgi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 59 (Chahal Hadith #7, #15, #28, #30)",
    author: {
      ur: "چہل احادیث (ارشادِ نبوی ﷺ)",
      ro: "Chahal Hadith (Irshad-e-Nabawi ﷺ)",
      en: "40 Hadith (Prophetic Tradition ﷺ)"
    },
    title: {
      ur: "معمولی خیرات کی طاقت، توبہ اور بزرگوں کا اکرام",
      ro: "Mamooli Khairat Ki Taqat, Tauba Aur Buzurgon Ka Ikram",
      en: "Small Charity, Pure Repentance, and Honoring Elders"
    },
    quote: {
      ur: "آگ سے بچو خواہ کھجور کا ایک ٹکڑا خیرات کر کے سہی۔ بلا بولنے پر مسلط ہے۔ گناہ سے توبہ کرنے والا بے گناہ کی مانند ہوتا ہے، اور جب کسی قوم کا بزرگ تمہارے پاس آئے تو اس کی عزت کرو۔",
      ro: "Aag se bacho khwah khajoor ka aik tukra khairat kar ke sahi. Bala bolne par musallat hai. Gunah se tauba karne wala be-gunah ki manind hota hai, aur jab kisi qoum ka buzurg tumhare paas aaye to us ki izzat karo.",
      en: "Protect yourselves from the Fire even by giving half a date in charity. Calamity is often tied to careless speech. One who sincerely repents from sin is like one who never sinned, and when an honorable elder of a people visits you, show them due respect."
    },
    tashreeh: {
      ur: "نیکی کو کبھی چھوٹا نہیں سمجھنا چاہیے کیونکہ خلوص سے دیا گیا آدھا کھجور بھی عذاب سے ڈھال بن جاتا ہے۔ سچی توبہ ماضی کے داغ مٹا دیتی ہے اور ہر قوم کے معزز و بزرگ افراد کا احترام کرنا اعلیٰ ظرفی ہے۔",
      ro: "Neki ko kabhi chota nahi samajhna chahiye kyunkeh khuloos se diya gaya aadha khajoor bhi azaab se dhal ban jata hai. Sachi tauba maazi ke daagh mita deti hai aur har qoum ke muazziz o buzurg afrad ka ehtiram karna aala-zarfi hai.",
      en: "Even the smallest sincere charity shields the soul, true repentance restores spiritual purity, and honoring respected elders reflects noble character."
    },
    tags: [
      { ur: "توبہ", ro: "Tauba", en: "Repentance" },
      { ur: "اکرام", ro: "Ikram", en: "Respect" }
    ]
  },
  {
    id: "ma-161",
    slug: "chhah-buri-khaslatein-jinhein-allah-napasand-karta-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 60",
    author: {
      ur: "حضرت سلیمان علیہ السلام",
      ro: "Hazrat Suleman (A.S)",
      en: "Prophet Solomon (A.S)"
    },
    title: {
      ur: "چھ بری خصلتیں جنہیں اللہ تعالیٰ ناپسند کرتا ہے",
      ro: "Chhah Buri Khaslatein Jinhein Allah Ta'ala Napasand Karta Hai",
      en: "Six Destructive Traits Disliked by the Almighty"
    },
    quote: {
      ur: "اللہ تعالیٰ ان چھ چیزوں کو ناپسند کرتا ہے: اونچی (متکبر) آنکھیں، جھوٹی زبان، وہ ہاتھ جو بے گناہ کو آزار پہنچائے، وہ دل جو برے منصوبے باندھتا ہے، وہ پاؤں جو جلد برائی کی طرف دوڑتے ہیں، اور وہ گواہ جو جھوٹ بولتا ہے اور بھائیوں کے درمیان جھگڑے برپا کرتا ہے۔",
      ro: "Allah Ta'ala in chhah cheezon ko napasand karta hai: oonchi (mutakabbir) ankhein, jhooti zaban, woh hath jo be-gunah ko aazar pohanchaye, woh dil jo buray mansoobay bandhta hai, woh paon jo jald burai ki taraf daurte hain, aur woh gawah jo jhoot bolta hai aur bhaiyon ke darmiyan jhagray barpa karta hai.",
      en: "Six things the Almighty detests: haughty eyes, a lying tongue, hands that harm the innocent, a heart that devises wicked schemes, feet that rush into evil, and a false witness who sows discord among brothers."
    },
    tashreeh: {
      ur: "یہ فرمان انسانی اخلاق کی مکمل نگہبانی سکھاتا ہے کہ آنکھ کو غرور سے، زبان کو جھوٹ سے، ہاتھ کو ظلم سے، دل کو بدنیتی سے اور معاشرے کو تفرقہ و فتنہ پروری سے پاک رکھا جائے۔",
      ro: "Yeh farman insani akhlaq ki mukammal nigahbani sikhata hai ke ankh ko ghuroor se, zaban ko jhoot se, hath ko zulm se, dil ko bad-niyati se aur muashray ko tafriqa o fitna-parwari se paak rakha jaye.",
      en: "This timeless teaching guards every human faculty—warning against pride, deceit, violence, malice, and sowing division within the community."
    },
    tags: [
      { ur: "تزکیۂ نفس", ro: "Tazkiya-e-Nafs", en: "Moral Purity" },
      { ur: "اتحاد", ro: "Ittihad", en: "Unity" }
    ]
  },
  {
    id: "ma-162",
    slug: "kanon-ko-chhalni-na-banana-aur-dil-ki-pakeezgi",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 65-66",
    author: {
      ur: "حضرت عیسیٰ علیہ السلام",
      ro: "Hazrat Isa (A.S)",
      en: "Prophet Jesus (A.S)"
    },
    title: {
      ur: "کانوں کو چھلنی نہ بنانا اور باطن کی طہارت",
      ro: "Kanon Ko Chhalni Na Banana Aur Batin Ki Taharat",
      en: "Retaining Wisdom and Purifying the Inner Heart"
    },
    quote: {
      ur: "اگر تم دانا عالم ہو تو اپنے کانوں کو چھلنیاں نہ بنا لو کہ بھوسی رکھ لیتی ہے اور آٹا گرا دیتی ہے۔ آدمی کو وہی چیز ناپاک کرتی ہے جو اس کے دل کے اندر سے نکلتی ہے، جیسے برے خیال، لالچ، مکر، بدگوئی، شیخی اور بیوقوفی۔",
      ro: "Agar tum dana aalim ho to apne kanon ko chhalniyan na bana lo ke bhoosi rakh leti hai aur aata gira deti hai. Aadmi ko wahi cheez napaak karti hai jo us ke dil ke andar se nikalti hai, jaise buray khayal, lalach, makr, bad-goi, shekhi aur bewakoofi.",
      en: "If you are truly wise, do not let your ears act like a sieve that discards the fine flour and keeps the chaff. What truly defiles a person is what emerges from within the heart: evil thoughts, greed, deceit, slander, and arrogance."
    },
    tashreeh: {
      ur: "کم فہم انسان نصیحت کی قیمتی باتیں بھلا دیتا ہے اور لغو و فضول باتیں یاد رکھتا ہے۔ حقیقی پاکیزگی صرف ظاہری صفائی کا نام نہیں بلکہ دل کو لالچ، فریب اور بدخیالی سے پاک کرنا ہے۔",
      ro: "Kam-fehm insan nasihat ki qeemati baatein bhula deta hai aur laghw o fuzool baatein yaad rakhta hai. Haqeeqi pakeezgi sirf zahiri safai ka naam nahi balkay dil ko lalach, fareeb aur bad-khayali se paak karna hai.",
      en: "A wise mind retains beneficial truth while discarding idle gossip, recognizing that true purity begins by cleansing the heart of greed, malice, and pride."
    },
    tags: [
      { ur: "طہارتِ قلب", ro: "Taharat-e-Qalb", en: "Inner Purity" },
      { ur: "دانش", ro: "Danish", en: "Wisdom" }
    ]
  },
  {
    id: "ma-163",
    slug: "adab-se-sadqa-dena-ikhlas-aur-jariya-gunah-se-bachna",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 66-68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "ادب سے صدقہ، بے غرض اخلاص اور برے رواج سے پرہیز",
      ro: "Adab Se Sadqa, Be-Gharz Ikhlas Aur Buray Riwaj Se Parhez",
      en: "Humble Charity, Pure Sincerity, and Avoiding Lasting Harm"
    },
    quote: {
      ur: "صدقہ فقیر کے سامنے عاجزی سے باادب پیش کر کیونکہ خوشدلی سے صدقہ دینا قبولیت کا نشان ہے۔ اخلاص یہ ہے کہ اعمال کا عوض نہ چاہے، اور بدبخت ہے وہ شخص جو خود تو مر جائے مگر اس کا گناہ نہ مرے۔",
      ro: "Sadqa faqeer ke samne aajizi se ba-adab pesh kar kyunkeh khush-dili se sadqa dena qubooliyat ki nishani hai. Ikhlas yeh hai ke aamaal ka iwaz na chahe, aur bad-bakht hai woh shakhs jo khud to mar jaye magar us ka gunah na maray.",
      en: "Present charity to the needy with humility and respect, for cheerful giving is the sign of acceptance. True sincerity seeks no worldly return for good deeds; and wretched is the one who dies while the sin they initiated continues to live on."
    },
    tashreeh: {
      ur: "مدد کرتے وقت حاجت مند کا احترام کرنا قبولیت کی دلیل ہے۔ اور سب سے بڑی محرومی یہ ہے کہ انسان دنیا میں کوئی ایسا غلط کام، فتنہ یا برا رواج چھوڑ جائے جس کا گناہ اس کے مرنے کے بعد بھی نامۂ اعمال میں لکھا جاتا رہے۔",
      ro: "Madad karte waqt hajat-mand ka ehtiram karna qubooliyat ki daleel hai. Aur sab se badi mehroomi yeh hai ke insan duniya mein koi aisa ghalat kaam, fitna ya bura riwaj chhor jaye jis ka gunah us ke marne ke baad bhi nama-e-aamaal mein likha jata rahe.",
      en: "Honoring the dignity of the poor when giving charity ensures its spiritual acceptance, while leaving behind a harmful legacy that misleads others after one's death is the gravest loss."
    },
    tags: [
      { ur: "آدابِ صدقہ", ro: "Aadab-e-Sadqa", en: "Etiquette of Charity" },
      { ur: "اخلاص", ro: "Ikhlas", en: "Sincerity" }
    ]
  },
  {
    id: "ma-164",
    slug: "asman-se-sona-chandi-nahi-barasta-aur-insan-ki-parakh",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 73 & 79",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "تلاشِ رزق میں جدوجہد اور انسان کو پرکھنے کی کسوٹی",
      ro: "Talash-e-Rizq Mein Jidd-o-Jehad Aur Insan Ko Parakhne Ki Kasauti",
      en: "Striving for Livelihood and the True Test of Character"
    },
    quote: {
      ur: "کسی مسلمان کے لیے یہ زیبا نہیں کہ تلاشِ رزق سے بیٹھ جائے اور دعا کرے کہ اے اللہ مجھ کو رزق دے، کیونکہ تم کو معلوم ہے کہ آسمان سے چاندی اور سونا نہیں برستا۔ کسی کی تعریف پر اعتماد نہ کرو تاوقتیکہ اس کے ساتھ کوئی معاملہ نہ پڑے یا اتفاقِ سفر نہ ہو۔",
      ro: "Kisi Musalman ke liye yeh zeba nahi ke talash-e-rizq se baith jaye aur dua kare ke aye Allah mujh ko rizq de, kyunkeh tum ko maloom hai ke asman se chandi aur sona nahi barasta. Kisi ki tareef par itmad na karo ta-waqtekeh us ke sath koi muamla na paray ya ittifaq-e-safar na ho.",
      en: "None of you should sit idle from seeking a livelihood while merely praying, 'O God, provide for me,' for you know well that the sky does not rain gold and silver. Do not vouch for anyone's character until you have either conducted financial dealings with them or traveled alongside them."
    },
    tashreeh: {
      ur: "توکل کا مطلب ہاتھ پاؤں توڑ کر بیٹھ جانا نہیں بلکہ محنت و اسباب اختیار کر کے اللہ سے برکت مانگنا ہے۔ اسی طرح انسان کے اصل اخلاق کا امتحان روپے پیسے کے لین دین اور سفر کی رفاقت میں ہوتا ہے۔",
      ro: "Tawakkul ka matlab hath paon tor kar baith jana nahi balkay mehnat o asbab ikhtiyar kar ke Allah se barkat mangna hai. Isi tarah insan ke asal akhlaq ka imtihan rupay paisay ke lain dain aur safar ki rafaqat mein hota hai.",
      en: "True reliance on God requires active effort rather than idleness, and a person's real integrity is revealed not by appearances, but through financial transactions and travel."
    },
    tags: [
      { ur: "کسبِ حلال", ro: "Kasb-e-Halal", en: "Honest Effort" },
      { ur: "پرکھ", ro: "Parakh", en: "Discernment" }
    ]
  },
  {
    id: "ma-165",
    slug: "ilm-ki-khoobi-amal-ehsan-na-jatlana-aur-sabr-o-shukr",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91-92",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "علم و احسان کی خوبی، صلہ رحمی اور صبر و شکر کی ڈھال",
      ro: "Ilm o Ehsan Ki Khoobi, Sila-Rehmi Aur Sabr o Shukr Ki Dhal",
      en: "The Beauty of Knowledge, Unspoken Kindness, and Kinship"
    },
    quote: {
      ur: "علم کی خوبی اس پر عمل کرنے میں اور احسان کی خوبی اس کے نہ جتلانے پر منحصر ہے۔ تنگ دست آدمی جو رشتہ داروں سے میل ملاپ رکھے اس مالدار سے اچھا ہے جو ان سے قطع تعلق کرے۔ مصائب کا مقابلہ صبر سے اور نعمتوں کی حفاظت شکر سے کرو۔",
      ro: "Ilm ki khoobi us par amal karne mein aur ehsan ki khoobi us ke na jatlane par munhasir hai. Tang-dast aadmi jo rishtedaron se mail-milap rakhe us maaldar se acha hai jo un se qata-ta'alluq kare. Masaib ka muqabla sabr se aur nematon ki hifazat shukr se karo.",
      en: "The beauty of knowledge lies in practicing it, and the beauty of a favor lies in never reminding others of it. A person of modest means who maintains family ties is far nobler than a wealthy person who severs them. Confront hardships with patience and guard your blessings through gratitude."
    },
    tashreeh: {
      ur: "یہ جامع نصیحت زندگی کے چار سنہرے اصول سکھاتی ہے: علم کو عمل سے سجانا، نیکی کر کے بھول جانا، غریبی کے باوجود رشتے جوڑے رکھنا، اور ہر مشکل کا علاج صبر اور ہر نعمت کی حفاظت شکر سے کرنا۔",
      ro: "Yeh jame nasihat zindagi ke char sunehray usool sikhati hai: ilm ko amal se sajana, neki kar ke bhool jana, ghareebi ke bawajood rishtay joray rakhna, aur har mushkil ka ilaj sabr aur har nemat ki hifazat shukr se karna.",
      en: "Four timeless pillars of wisdom: adorn knowledge with action, keep favors unmentioned, cherish family bonds regardless of wealth, and meet every trial with patience and every blessing with gratitude."
    },
    tags: [
      { ur: "صبر و شکر", ro: "Sabr o Shukr", en: "Patience & Gratitude" },
      { ur: "صلہ رحمی", ro: "Sila-Rehmi", en: "Family Bonds" }
    ]
  }
];

export const batch12Quotes: QuoteItem[] = [
  {
    id: "ma-166",
    slug: "rizq-ki-talaash-mein-zamin-par-phail-jana",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Jumu'ah (62:10) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نماز کے بعد رزقِ حلال کی تلاش اور اللہ کا کثرت سے ذکر",
      ro: "Namaz Ke Baad Rizq-e-Halal Ki Talash Aur Allah Ka Kasrat Se Zikr",
      en: "Seeking Lawful Provision After Prayer and Remembering God Frequently"
    },
    quote: {
      ur: "پھر جب نماز پوری ہو چکی تو زمین میں پھیل جاؤ اور اللہ کا فضل (رزق) تلاش کرو، اور اللہ کو کثرت سے یاد کرو تاکہ تم فلاح پا سکو۔",
      ro: "Phir jab namaz poori ho chuki to zameen mein phail jao aur Allah ka fazl (rizq) talash karo, aur Allah ko kasrat se yaad karo taake tum falah pa sako.",
      en: "And when the prayer has been concluded, disperse within the land and seek from the bounty of Allah, and remember Allah much that you may succeed."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام کا نظامِ حیات عبادت اور دنیاوی محنت میں کامل توازن سکھاتا ہے۔ جمعہ یا فرض نماز ادا کرنے کے بعد ہاتھ پر ہاتھ دھر کر بیٹھ رہنے کی اجازت نہیں، بلکہ حلال روزی کمانے کے لیے محنت کرنا بھی عبادت کا حصہ ہے۔ آج کا عملی سبق یہ ہے کہ عبادت کے بعد بھرپور محنت سے رزقِ حلال کمائیں اور دل کو ہر وقت رب کی یاد سے آباد رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam ka nizam-e-hayat ibadat aur dunyawi mehnat mein kamil tawazun sikhata hai. Jumuma ya farz namaz ada karne ke baad hath par hath dhar kar baith rehne ki ijazat nahi, balkay halal rozi kamane ke liye mehnat karna bhi ibadat ka hissa hai. Aaj ka amli sabaq yeh hai ke ibadat ke baad bharpoor mehnat se rizq-e-halal kamayein aur dil ko har waqt Rab ki yaad se aabad rakhein.",
      en: "Context & Practical Lesson: Islam balances spiritual devotion with diligent labor; after fulfilling religious duties, stepping out to earn an honest living through hard work is itself an act of worship."
    },
    tags: [
      { ur: "کسبِ حلال", ro: "Kasb-e-Halal", en: "Lawful Provision" },
      { ur: "توازنِ حیات", ro: "Tawazun-e-Hayat", en: "Balanced Life" }
    ]
  },
  {
    id: "ma-167",
    slug: "zabt-e-nafs-aur-shukr-nemat-kamyabi-ki-kunji",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Luqman (31:17) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "صبر، استقامت اور عاجزی کے ساتھ زندگی بسر کرنا",
      ro: "Sabr, Istaqamat Aur Aajizi Ke Sath Zindagi Basar Karna",
      en: "Living Life with Patience, Steadfastness, and Humility"
    },
    quote: {
      ur: "اور لوگوں سے اپنے گال پھلا کر بات نہ کر (تکبر نہ کر) اور زمین پر اکڑ کر نہ چل، بے شک اللہ کسی اترانے والے اور فخر کرنے والے کو پسند نہیں کرتا۔",
      ro: "Aur logon se apne gaal phula kar baat na kar (takabbur na kar) aur zameen par akar kar na chal, be-shak Allah kisi utrane wale aur fakhar karne wale ko pasand nahi karta.",
      en: "And do not turn your cheek in contempt toward people [due to pride] nor walk through the earth exultantly. Indeed, Allah does not like everyone self-deluded and boastful."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضرت لقمان علیہ السلام نے اپنے بیٹے کو جو بنیادی نصیحتیں فرمائیں ان میں تکبر اور غرور سے بچنے کی سخت تاکید شامل ہے۔ مال، حسن یا طاقت مل جانے کے بعد انسان کا اکڑ کر چلنا یا دوسروں کو حقیر سمجھنا اخلاقی پستی کی علامت ہے۔ آج کا عملی سبق یہ ہے کہ کامیابی کے باوجود ہمیشہ عاجزی کو اپنا شیوہ بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hazrat Luqman (A.S) ne apne betay ko jo bunyadi naseeatein farmayin un mein takabbur aur ghuroor se bachne ki sakht taakid shamil hai. Maal, husn ya taqat mil jane ke baad insan ka akar kar chalna ya doosron ko haqeer samajhna akhlaqi pasti ki alamat hai. Aaj ka amli sabaq yeh hai ke kamyabi ke bawajood hamesha aajizi ko apna shewa banayein.",
      en: "Context & Practical Lesson: Arrogance and boastful walking reflect an insecure ego; true greatness is always clothed in modesty and genuine humility toward others."
    },
    tags: [
      { ur: "عاجزی و انکساری", ro: "Aajizi o Inkisari", en: "Modesty & Humility" },
      { ur: "تکبر کی ممانعت", ro: "Takabbur Ki Mumaniat", en: "Avoiding Arrogance" }
    ]
  },
  {
    id: "ma-168",
    slug: "apni-chaal-mein-miyana-rawi-aur-aawaz-ki-pasti",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Luqman (31:19) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "چلنے میں اعتدال اور گفتگو میں متوازن آواز کا اصول",
      ro: "Chalne Mein Aitdaal Aur Guftugu Mein Mutawazin Aawaz Ka Usool",
      en: "Moderation in Walking and Balanced Tone in Speech"
    },
    quote: {
      ur: "اور اپنی چال میں میانہ روی اختیار کرو، اور اپنی آواز کو پست رکھو؛ بے شک تمام آوازوں میں سب سے بری آواز گدھے کی آواز ہے۔",
      ro: "Aur apni chaal mein miyana-rawi ikhtiyar karo, aur apni aawaz ko past rakho; be-shak tamam aawazon mein sab se buri aawaz gadhe ki aawaz hai.",
      en: "And be moderate in your pace and lower your voice; indeed, the most disagreeable of sounds is the voice of donkeys."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام نے مسلمانوں کو زندگی کے ہر شعبے میں وقار اور سلیقہ سکھایا ہے۔ نہ تو تکبر سے اکڑ کر چلنا پسندیدہ ہے اور نہ ہی بے ڈھنگی رفتار۔ اسی طرح بلا ضرورت اونچی آواز میں بولنا یا دوسروں پر دھونس جمانا اخلاقی کمزوری ہے۔ آج کا عملی سبق یہ ہے کہ اپنے چال ڈھال اور بات چیت کے انداز میں متوازن اور باوقار رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam ne musalmanon ko zindagi ke har shobay mein waqar aur saleeqa sikhaya hai. Na to takabbur se akar kar chalna pasandeeda hai aur na hi be-dhangi raftar. Isi tarah bila zaroorat oonchi aawaz mein bolna ya doosron par dhoons jamana akhlaqi kamzori hai. Aaj ka amli sabaq yeh hai ke apne chaal-dhal aur baat-cheet ke andaz mein mutawazin aur ba-waqar rahein.",
      en: "Context & Practical Lesson: Graceful posture, moderate walking pace, and speaking in a calm, measured tone reflect personal refinement and emotional maturity."
    },
    tags: [
      { ur: "شائستگی", ro: "Shaistagi", en: "Refinement" },
      { ur: "میانہ روی", ro: "Miyana-Rawi", en: "Balanced Manners" }
    ]
  },
{
    id: "ma-169",
    slug: "bhai-ki-hajat-rawai-aur-zalim-ko-zulm-se-rokna",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "بھائی کی حاجت روائی اور ظالم و مظلوم کی مدد کا مفہوم",
      ro: "Bhai Ki Hajat-Rawai Aur Zalim o Mazloom Ki Madad Ka Mafhoom",
      en: "Fulfilling Needs and the True Meaning of Helping All"
    },
    quote: {
      ur: "کسی ضرورت مند بھائی کی حاجت پوری کرنے نکلنا عمر بھر کی عبادت جیسا درجہ رکھتا ہے۔ مظلوم کی مدد اسے ظلم سے نجات دلانا ہے، اور ظالم کی حقیقی مدد اس کا ہاتھ پکڑ کر اسے ظلم سے باز رکھنا ہے۔",
      ro: "Kisi zaroorat-mand bhai ki hajat poori karne nikalna umar bhar ki ibadat jaisa darja rakhta hai. Mazloom ki madad usay zulm se najat dilana hai, aur zalim ki haqeeqi madad us ka hath pakar kar usay zulm se baaz rakhna hai.",
      en: "Striving to fulfill a brother's need carries the reward of lifelong devotion; helping the oppressed means rescuing them, while helping the wrongdoer means stopping them from injustice."
    },
    tashreeh: {
      ur: "اسلام نے دوستی اور بھائی چارے کا معیار ہی بدل دیا کہ اپنے ساتھی کی بے جا طرفداری کرنے کے بجائے اسے زیادتی سے روکا جائے، اور مصیبت زدہ کے کام آنے کو عبادت سمجھا جائے۔",
      ro: "Islam ne dosti aur bhai-charay ka miyar hi badal diya ke apne sathi ki be-ja tarafdari karne ke bajaye usay ziyadati se roka jaye, aur musibat-zada ke kaam aane ko ibadat samjha jaye.",
      en: "True brotherhood never supports wrongdoing out of bias; instead, it protects the weak and restrains the strong from committing injustice."
    },
    tags: [
      { ur: "حاجت روائی", ro: "Hajat-Rawai", en: "Helping Others" },
      { ur: "عدل", ro: "Adal", en: "Justice" }
    ]
  },
  {
    id: "ma-170",
    slug: "baron-ki-tazeem-choton-par-shafqat-aur-sulah-mein-pehal",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 16",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "بڑوں کا ادب، چھوٹوں پر شفقت اور صلح میں پہل",
      ro: "Baron Ka Adab, Choton Par Shafqat Aur Sulah Mein Pehal",
      en: "Respecting Elders, Kindness to the Young, and Initiating Peace"
    },
    quote: {
      ur: "ہماری سنت یہ ہے کہ بڑوں کی تعظیم کی جائے اور چھوٹوں پر شفقت رکھی جائے۔ کسی واقف کار سے تین دن سے زیادہ بول چال بند نہ رکھو، اور ناراضگی میں سب سے بہتر وہ ہے جو سلام اور صلح میں پہل کرے۔",
      ro: "Hamari sunnat yeh hai ke baron ki tazeem ki jaye aur choton par shafqat rakhi jaye. Kisi waqif-kar se teen din se zyada bol-chal band na rakho, aur narazgi mein sab se behtar woh hai jo salam aur sulah mein pehal kare.",
      en: "Our way is to honor the elderly and show compassion to the young. Do not sever speaking terms beyond three days, for the noblest of two estranged people is the one who greets first to restore peace."
    },
    tashreeh: {
      ur: "خاندان اور معاشرے کی خوبصورتی بزرگوں کے احترام اور بچوں سے پیار میں ہے۔ اور اگر کبھی آپس میں رنجش ہو جائے تو انا کو چھوڑ کر سلام میں پہل کرنے والا اللہ کے نزدیک افضل ترین درجہ پاتا ہے۔",
      ro: "Khandan aur muashray ki khoobsurti buzurgon ke ehtiram aur bachon se pyar mein hai. Aur agar kabhi aapas mein ranjish ho jaye to ana ko chhor kar salam mein pehal karne wala Allah ke nazdeek afzal-tareen darja pata hai.",
      en: "Social harmony thrives on respect for elders and warmth toward youth, while overcoming ego to initiate reconciliation is a mark of spiritual greatness."
    },
    tags: [
      { ur: "صلح", ro: "Sulah", en: "Reconciliation" },
      { ur: "شفقت", ro: "Shafqat", en: "Compassion" }
    ]
  },
  {
    id: "ma-171",
    slug: "safar-ka-nazm-o-zabt-aur-be-ja-ziyadati-se-ijtinab",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "اجتماعی نظم و ضبط اور بے جا تشدد سے پرہیز",
      ro: "Ijtimai Nazm-o-Zabt Aur Be-Ja Tashaddud Se Parhez",
      en: "Collective Discipline and Avoiding Needless Dispute"
    },
    quote: {
      ur: "جب تین افراد مل کر سفر پر نکلیں تو نظم و ضبط کے لیے اپنے میں سے ایک کو امیر مقرر کر لیں۔ اللہ کے نزدیک سب سے ناپسندیدہ وہ شخص ہے جو بلاوجہ جھگڑالو اور ہٹ دھرم ہو۔",
      ro: "Jab teen afrad mil kar safar par niklein to nazm-o-zabt ke liye apne mein se aik ko ameer muqarrar kar lein. Allah ke nazdeek sab se napasandeeda woh shakhs hai jo bila-wajah jhagralu aur hat-dharam ho.",
      en: "Even when three people set out on a journey together, they should appoint one as their leader to maintain order; and most disliked to God is the quarrelsome person who stubbornly clings to disputes."
    },
    tashreeh: {
      ur: "چھوٹے سے چھوٹے اجتماعی کام یا سفر میں بھی مشاورت اور نظم کا ہونا انتشار سے بچاتا ہے۔ اس کے برعکس ہر بات میں ضد اور بحث و تکرار کرنے کی عادت دلوں میں کینہ پیدا کرتی ہے۔",
      ro: "Chote se chote ijtimai kaam ya safar mein bhi mushawarat aur nazm ka hona intishar se bachata hai. Is ke bar-aks har baat mein zid aur behas-o-takrar karne ki aadat dilon mein keena paida karti hai.",
      en: "Organization and mutual agreement prevent chaos in any group endeavor, whereas stubbornness and constant arguing breed resentment."
    },
    tags: [
      { ur: "نظم و ضبط", ro: "Nazm-o-Zabt", en: "Discipline" },
      { ur: "اتفاق", ro: "Ittifaq", en: "Harmony" }
    ]
  },
  {
    id: "ma-172",
    slug: "har-choti-badi-hajat-rab-se-mangna-aur-ulad-ke-haq-mein-dua",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "ہر حاجت رب سے مانگنا اور غصے میں بددعا سے بچنا",
      ro: "Har Hajat Rab Se Mangna Aur Gusse Mein Bad-Dua Se Bachna",
      en: "Asking God for Every Need and Never Cursing in Anger"
    },
    quote: {
      ur: "اپنی ہر چھوٹی بڑی ضرورت اپنے رب ہی سے مانگو، یہاں تک کہ جوتے کا تسمہ بھی ٹوٹ جائے تو اسی سے التجا کرو۔ خبردار! غصے میں کبھی اپنی جان، اپنی اولاد یا اپنے مال کے حق میں بددعا نہ نکلنے دو۔",
      ro: "Apni har choti badi zaroorat apne Rab hi se mango, yahan tak ke jootay ka tasma bhi toot jaye to Usi se iltija karo. Khabardar! Gusse mein kabhi apni jaan, apni aulad ya apne maal ke haq mein bad-dua na nikalne do.",
      en: "Ask your Lord for all your needs, even if it is as small as a broken shoelace; and never utter curses against yourselves, your children, or your livelihood in moments of anger."
    },
    tashreeh: {
      ur: "اللہ تعالیٰ کو اپنے بندے کا مانگنا بے حد پسند ہے اور کشادگی کا انتظار کرنا بھی عبادت ہے۔ والدین کو خاص طور پر احتیاط کرنی چاہیے کہ غصے میں بچوں کے لیے زبان سے ہمیشہ خیر ہی کا کلمہ نکلے۔",
      ro: "Allah Ta'ala ko apne banday ka mangna be-had pasand hai aur kushadgi ka intizar karna bhi ibadat hai. Walideen ko khaas taur par ehtiyat karni chahiye ke gusse mein bachon ke لیے zaban se hamesha khair hi ka kalma nikle.",
      en: "Turning to the Creator for even the smallest daily matter strengthens spiritual connection, while guarding the tongue from cursing loved ones in anger prevents deep regret."
    },
    tags: [
      { ur: "دعا", ro: "Dua", en: "Supplication" },
      { ur: "تربیتِ اولاد", ro: "Tarbiyat-e-Aulad", en: "Parenting" }
    ]
  },
  {
    id: "ma-173",
    slug: "huqooq-mein-tawazun-aur-burai-ko-rokne-ke-darjat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "زندگی کے حقوق میں توازن اور برائی کی روک تھام",
      ro: "Zindagi Ke Huqooq Mein Tawazun Aur Burai Ki Rok-Tham",
      en: "Balancing Life's Responsibilities and Standing Against Wrong"
    },
    quote: {
      ur: "تمہارے اہل و عیال کا بھی تم پر حق ہے، مہمان کا بھی حق ہے اور تمہارے اپنے جسم کا بھی تم پر حق ہے؛ لہٰذا عبادت کے ساتھ آرام اور حقوق کی ادائیگی میں اعتدال رکھو، اور جہاں برائی دیکھو اسے اپنی استطاعت کے مطابق اصلاح سے روکو۔",
      ro: "Tumhare ahl-o-ayal ka bhi tum par haq hai, mehman ka bhi haq hai aur tumhare apne jism ka bhi tum par haq hai; lehaza ibadat ke sath aram aur huqooq ki adaigi mein aitdaal rakho, aur jahan burai dekho usay apni istita'at ke mutabiq islah se roko.",
      en: "Your family has a right over you, your guest has a right over you, and your own body has a right over you; maintain balance between devotion and daily duties, and strive to correct wrongdoing according to your capacity."
    },
    tashreeh: {
      ur: "اسلام رہبانیت یا جسم کو بے جا مشقت میں ڈالنے کا دین نہیں بلکہ عبادت، صحت اور خاندان کے حقوق میں توازن سکھاتا ہے۔ اسی طرح معاشرے کو برائی سے بچانا ہر فرد کی اخلاقی ذمہ داری ہے۔",
      ro: "Islam rahbaniyat ya jism ko be-ja mushaqqat mein dalne ka deen nahi balkay ibadat, sehat aur khandan ke huqooq mein tawazun sikhata hai. Isi tarah muashray ko burai se bachana har fard ki akhlaqi zimmedari hai.",
      en: "A balanced life honors spiritual worship alongside physical health, family care, and active civic responsibility."
    },
    tags: [
      { ur: "توازن", ro: "Tawazun", en: "Life Balance" },
      { ur: "حقوق", ro: "Huqooq", en: "Responsibilities" }
    ]
  },
  {
    id: "ma-174",
    slug: "sadqa-ki-ibtidai-tartib-aur-majlis-mein-sargoshi-ki-mumaniat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20-21",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "انفاق کی ترتیب اور محفل میں دل شکنی سے پرہیز",
      ro: "Infaq Ki Tarteeb Aur Mehfil Mein Dil-Shikni Se Parhez",
      en: "Charity Begins at Home and Etiquette in Gatherings"
    },
    quote: {
      ur: "بہترین خرچ وہ ہے جو اپنی ذات، اپنی اولاد، اپنے اہلِ خانہ اور زیرِ دست خادموں کی کفالت سے شروع کیا جائے۔ اور جب کسی مجلس میں تین افراد بیٹھے ہوں تو تیسرے کو چھوڑ کر دو آپس میں سرگوشی نہ کریں کہ اس سے وہ رنجیدہ ہو جائے گا۔",
      ro: "Behtareen kharch woh hai jo apni zaat, apni aulad, apne ahl-e-khana aur zer-e-dast khadimon ki kafalat se shuru kiya jaye. Aur jab kisi majlis mein teen afrad baithe hon to teesre ko chhor kar do aapas mein sargoshi na karein ke is se woh ranjeeda ho jayega.",
      en: "The finest charity begins with providing for yourself, your children, your spouse, and those under your care; and when three people are seated together, two must not whisper privately, lest it sadden the third."
    },
    tashreeh: {
      ur: "اپنے گھر والوں کو محروم رکھ کر باہر سخاوت کی نمائش کرنا درست نہیں؛ پہلے اپنے زیرِ کفالت افراد کا حق ہے۔ اور محفل کے آداب کا یہ عالم ہے کہ کسی ایک فرد کو تنہا یا کمتر محسوس ہونے سے بچانا بھی لازم قرار دیا گیا۔",
      ro: "Apne ghar walon ko mehroom rakh kar bahar sakhawat ki numaish karna durust nahi; pehle apne zer-e-kafalat afrad ka haq hai. Aur mehfil ke aadab ka yeh aalam hai ke kisi aik fard ko tanha ya kamtar mehsoos hone se bachana bhi lazim qarar diya gaya.",
      en: "Caring for one's own household is the primary duty of charity, and refined social etiquette protects every companion from feeling excluded."
    },
    tags: [
      { ur: "آدابِ مجلس", ro: "Aadab-e-Majlis", en: "Social Sensitivity" },
      { ur: "کفالت", ro: "Kafalat", en: "Family Care" }
    ]
  },
  {
    id: "ma-175",
    slug: "gheebat-ki-halakat-aur-takalluf-se-pak-zindagi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "بناوٹ سے دوری اور غیبت سے نیکیوں کی حفاظت",
      ro: "Banawat Se Doori Aur Gheebat Se Nekiyon Ki Hifazat",
      en: "Freedom from Pretension and Guarding Deeds from Backbiting"
    },
    quote: {
      ur: "پرہیزگار انسان تصنع اور بے جا تکلف سے بری ہوتے ہیں، اور سخی کا کھانا شفا ہے جبکہ بخیل کا کھانا روگ۔ غیبت سے بچو کیونکہ آگ خشک لکڑی کو اتنی جلدی نہیں جلاتی جتنی جلدی غیبت انسان کی نیکیوں کو خاکستر کر دیتی ہے۔",
      ro: "Parhezgar insan tasannu aur be-ja takalluf se bari hote hain, aur sakhi ka khana shifa hai jabkeh bakhil ka khana rog. Gheebat se bacho kyunkeh aag khushk lakri ko itni jaldi nahi jalati jitni jaldi gheebat insan ki nekiyon ko khakistar kar deti hai.",
      en: "The righteous are free from artificiality and pretension; the meal of a generous host brings healing, while backbiting consumes a person's good deeds faster than fire burns dry wood."
    },
    tashreeh: {
      ur: "زندگی میں دکھاوا اور جھوٹا تکلف انسان کو بے سکون رکھتا ہے، جبکہ کھلے دل سے مہمان نوازی برکت لاتی ہے۔ اپنی محنت سے کمائی ہوئی نیکیوں کو بچانے کے لیے پیٹھ پیچھے کسی کی برائی کرنے سے مکمل پرہیز ضروری ہے۔",
      ro: "Zindagi mein dikhawa aur jhoota takalluf insan ko be-sukoon rakhta hai, jabkeh khulay dil se mehman-nawazi barkat lati hai. Apni mehnat se kamai hui nekiyon ko bachane ke liye peeth peechay kisi ki burai karne se mukammal parhez zaroori hai.",
      en: "Living simply without false pretension brings peace, and guarding one's tongue from slander preserves a lifetime of good deeds."
    },
    tags: [
      { ur: "بے تکلفی", ro: "Be-Takallufi", en: "Authenticity" },
      { ur: "حفاظتِ اعمال", ro: "Hifazat-e-Aamaal", en: "Preserving Deeds" }
    ]
  },
  {
    id: "ma-176",
    slug: "sakht-mizaj-logon-se-bhi-kushada-peshani-se-milna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 25",
    author: {
      ur: "اسوۂ نبوی ﷺ (خلاصہ)",
      ro: "Uswah-e-Nabawi ﷺ (Khulasa)",
      en: "Prophetic Example ﷺ (Summary)"
    },
    title: {
      ur: "مخالف یا سخت مزاج شخص سے بھی نرمی سے پیش آنا",
      ro: "Mukhalif Ya Sakht-Mizaj Shakhs Se Bhi Narmi Se Pesh Aana",
      en: "Treating Even Harsh People with Warmth and Grace"
    },
    quote: {
      ur: "اعلیٰ اخلاق کی تکمیل یہ ہے کہ اگر کوئی ایسا شخص بھی ملاقات کے لیے آئے جس کا طرزِ عمل اچھا نہ رہا ہو، تب بھی اس کے سامنے ترش روئی کے بجائے کشادہ پیشانی اور نرم کلامی سے پیش آیا جائے۔",
      ro: "Aala akhlaq ki takmeel yeh hai ke agar koi aisa shakhs bhi mulaqat ke liye aaye jis ka tarz-e-amal acha na raha ho, tab bhi us ke samne tursh-roi ke bajaye kushada-peshani aur naram-kalami se pesh aaya jaye.",
      en: "The perfection of noble character is to greet even a harsh or ill-mannered visitor with a composed face and gentle speech, winning hearts through grace."
    },
    tashreeh: {
      ur: "حضرت عائشہ صدیقہؓ کی روایت کردہ اس سیرت سے معلوم ہوتا ہے کہ برائی کو برا جاننا الگ بات ہے، لیکن جب کوئی سامنے آئے تو اخلاقی وقار اور نرمی کا دامن ہاتھ سے نہ چھوڑا جائے؛ اسی حسنِ اخلاق نے دلوں کو فتح کیا۔",
      ro: "Hazrat Aisha Siddiqa (R.A) ki riwayat karda is seerat se maloom hota hai ke burai ko bura janna alag baat hai, lekin jab koi samne aaye to akhlaqi waqar aur narmi ka daman hath se na chhora jaye; isi husn-e-akhlaq ne dilon ko fatah kiya.",
      en: "Disapproving of someone's wrong conduct never justifies personal rudeness; maintaining dignity and kindness in every interaction transforms even hardened hearts."
    },
    tags: [
      { ur: "خلقِ عظیم", ro: "Khulq-e-Azeem", en: "Supreme Character" },
      { ur: "نرم کلامی", ro: "Naram-Kalami", en: "Gentle Speech" }
    ]
  },
  {
    id: "ma-177",
    slug: "khadim-ko-sattar-bar-maaf-karna-aur-mehmandari-ka-usool",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 27",
    author: {
      ur: "اسوۂ نبوی ﷺ (خلاصہ)",
      ro: "Uswah-e-Nabawi ﷺ (Khulasa)",
      en: "Prophetic Example ﷺ (Summary)"
    },
    title: {
      ur: "ماتحتوں کو بار بار معاف کرنا اور بے غرض مہمان نوازی",
      ro: "Matehton Ko Bar Bar Maaf Karna Aur Be-Gharz Mehman-Nawazi",
      en: "Repeatedly Forgiving Subordinates and Selfless Hospitality"
    },
    quote: {
      ur: "اپنے ماتحت اور خادم کی خطا کو دن میں ستر بار بھی معاف کرنا پڑے تو درگزر کرو؛ اور اگر کسی نے تمہارے جانے پر تمہاری ضیافت نہ کی ہو، تب بھی جب وہ تمہارے دروازے پر آئے تو اس کی پوری مہمان نوازی کرو۔",
      ro: "Apne matehat aur khadim ki khata ko din mein sattar bar bhi maaf karna paray to darguzar karo; aur agar kisi ne tumhare jane par tumhari ziyafat na ki ho, tab bhi jab woh tumhare darwazay par aaye to us ki poori mehman-nawazi karo.",
      en: "Pardon the mistakes of your servants and subordinates even seventy times a day; and honor your guest generously even if they once failed to host you."
    },
    tashreeh: {
      ur: "ملازمین اور کمزوروں کی بھول چوک پر درگزر کرنا گھر اور کاروبار میں رحمت لاتا ہے۔ اسی طرح اپنے اخلاق کو دوسروں کے رویے کا محتاج نہ بناؤ بلکہ کم ظرفی کا جواب بھی اعلیٰ ظرفی سے دو۔",
      ro: "Mulazimeen aur kamzoron ki bhool-chook par darguzar karna ghar aur karobar mein rehmat lata hai. Isi tarah apne akhlaq ko doosron ke rawaiye ka mohtaj na banao balkay kam-zarfi ka jawab bhi aala-zarfi se do.",
      en: "Showing patience toward employees and responding to past neglect with generous hospitality demonstrate true magnanimity of spirit."
    },
    tags: [
      { ur: "مہمان نوازی", ro: "Mehman-Nawazi", en: "Hospitality" },
      { ur: "درگزر", ro: "Darguzar", en: "Magnanimity" }
    ]
  },
  {
    id: "ma-178",
    slug: "munsif-banne-ka-usool-aur-taharat-se-rizq-mein-barkat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 29",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Summary)"
    },
    title: {
      ur: "عادل و منصف بننے اور رزق میں برکت پانے کے اصول",
      ro: "Aadil o Munsif Banne Aur Rizq Mein Barkat Pane Ke Usool",
      en: "Principles of True Justice and Blessings in Sustenance"
    },
    quote: {
      ur: "اگر عادل و منصف بننا چاہتے ہو تو دوسروں کے لیے بھی وہی پسند کرو جو اپنے لیے پسند کرتے ہو؛ اگر رزق میں برکت چاہتے ہو تو ہمیشہ پاک و طاہر رہو؛ اور اگر سب سے بزرگ بننا چاہتے ہو تو مصیبت میں رب کی شکایت نہ کرو۔",
      ro: "Agar aadil o munsif banna chahte ho to doosron ke liye bhi wahi pasand karo jo apne liye pasand karte ho; agar rizq mein barkat chahte ho to hamesha paak o tahir raho; aur agar sab se buzurg banna chahte ho to musibat mein Rab ki shikayat na karo.",
      en: "To be truly just, desire for others what you desire for yourself; to invite blessings into your sustenance, maintain purity; and to attain spiritual dignity, refrain from complaining during trials."
    },
    tashreeh: {
      ur: "انصاف کی سب سے سادہ تعریف یہ ہے کہ انسان خود کو دوسرے کی جگہ رکھ کر دیکھے۔ ظاہری و باطنی پاکیزگی روزی میں کشادگی لاتی ہے اور بے صبری و شکوے سے بچنا انسان کا وقار بلند رکھتا ہے۔",
      ro: "Insaf ki sab se sada tareef yeh hai ke insan khud ko doosre ki jagah rakh kar dekhe. Zahiri o batini pakeezgi rozi mein kushadgi lati hai aur be-sabri o shikway se bachna insan ka waqar buland rakhta hai.",
      en: "Fairness begins with empathy, purity of body and soul attracts abundance, and quiet dignity in adversity elevates human character."
    },
    tags: [
      { ur: "پاکیزگی", ro: "Pakeezgi", en: "Purity" },
      { ur: "انصاف", ro: "Insaf", en: "Fairness" }
    ]
  },
  {
    id: "ma-179",
    slug: "apni-danai-par-ghuroor-na-karna-aur-tarbiyat-ki-ahmiyat",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 60-61",
    author: {
      ur: "حکمتِ سلیمانی علیہ السلام (خلاصہ)",
      ro: "Hikmat-e-Sulemani A.S (Khulasa)",
      en: "Solomonic Wisdom (Summary)"
    },
    title: {
      ur: "اپنی عقل پر گھمنڈ نہ کرنا اور اولاد کی بروقت تادیب",
      ro: "Apni Aqal Par Ghamand Na Karna Aur Aulad Ki Bar-Waqt Tadeeb",
      en: "Humility in Intellect and Timely Moral Upbringing"
    },
    quote: {
      ur: "اپنی ہی نگاہ میں خود کو دانشمند مت سمجھ، بلکہ رب سے ڈر اور بدی سے کنارہ کش رہ۔ بچپن کی نادانی اولاد کے دل سے جڑی ہوتی ہے، جسے بروقت اور مناسب تربیت ہی سنوار کر ہلاکت سے بچاتی ہے۔",
      ro: "Apni hi nigah mein khud ko danishmand mat samajh, balkay Rab se dar aur badi se kinara-kash reh. Bachpan ki nadani aulad ke dil se juri hoti hai, jisay bar-waqt aur munasib tarbiyat hi sanwar kar halakat se bachati hai.",
      en: "Never become conceited in your own wisdom; instead, revere God and shun evil. Youthful folly is corrected through loving, timely discipline that safeguards a child's future."
    },
    tashreeh: {
      ur: "جو شخص خود کو عقلِ کل سمجھ بیٹھتا ہے وہ سیکھنے اور اصلاح سے محروم ہو جاتا ہے۔ اسی طرح بچوں کی غلط عادتوں کو لاڈ پیار میں نظرانداز کرنے کے بجائے بروقت ان کی اخلاقی تربیت کرنا والدین کا فرض ہے۔",
      ro: "Jo shakhs khud ko aqal-e-kul samajh baithta hai woh seekhne aur islah se mehroom ho jata hai. Isi tarah bachon ki ghalat aadaton ko laad-pyar mein nazar-andaz karne ke bajaye bar-waqt un ki akhlaqi tarbiyat karna walideen ka farz hai.",
      en: "Intellectual humility keeps the mind open to truth, while structured, caring guidance in childhood builds a strong moral foundation for life."
    },
    tags: [
      { ur: "تربیت", ro: "Tarbiyat", en: "Upbringing" },
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" }
    ]
  },
  {
    id: "ma-180",
    slug: "jawani-sehat-aur-subah-khezi-ki-qadr",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 66-67",
    author: {
      ur: "اقوالِ صدیقِ اکبرؓ (خلاصہ)",
      ro: "Aqwal-e-Siddiq-e-Akbar R.A (Khulasa)",
      en: "Wisdom of Abu Bakr Siddiq R.A (Summary)"
    },
    title: {
      ur: "محنت سے کامیابی، صبح خیزی اور زبان کی نگہبانی",
      ro: "Mehnat Se Kamyabi, Subah-Khezi Aur Zaban Ki Nigahbani",
      en: "Action Over Wishful Thinking and the Virtue of Early Rising"
    },
    quote: {
      ur: "دولت محض آرزوؤں سے، جوانی خضاب لگانے سے اور تندرستی محض دواؤں کے سہارے حاصل نہیں ہوتی۔ صبح سویرے بیدار ہونے میں پرندوں کا تجھ سے سبقت لے جانا تیرے لیے باعثِ ندامت ہے، اور زبان کی بے احتیاطی ہی اکثر مصیبتوں کی جڑ ہے۔",
      ro: "Daulat mehaz aarzuon se, jawani khizab lagane se aur tandrusti mehaz dawaon ke saharay hasil nahi hoti. Subah sawere bedar hone mein parindon ka tujh se sabqat le jana tere liye baas-e-nadamat hai, aur zaban ki be-ehtiyati hi aksar museebaton ki jar hai.",
      en: "Prosperity is not won by mere wishes, nor youth by dye; wake early with purpose before the birds of dawn outpace you, and guard your speech, for careless words are the root of most troubles."
    },
    tashreeh: {
      ur: "خالی خواب دیکھنے سے کچھ ہاتھ نہیں آتا جب تک عملی محنت اور نظم و ضبط نہ ہو۔ صبح کی برکت والے وقت کو غفلت کی نیند میں گزار دینا اور بے سوچے سمجھے بولنا انسان کو پیچھے دھکیل دیتا ہے۔",
      ro: "Khali khwab dekhne se kuch hath nahi aata jab tak amli mehnat aur nazm-o-zabt na ho. Subah ki barkat wale waqt ko ghaflat ki neend mein guzar dena aur be-soche samjhe bolna insan ko peechay dhakel deta hai.",
      en: "Real achievement demands disciplined effort, rising early to embrace the blessings of the morning, and exercising mindfulness in speech."
    },
    tags: [
      { ur: "صبح خیزی", ro: "Subah-Khezi", en: "Early Rising" },
      { ur: "عملی جدوجہد", ro: "Amli Jidd-o-Jehad", en: "Active Effort" }
    ]
  }
];


export const batch13Quotes: QuoteItem[] = [
  {
    id: "ma-181",
    slug: "zina-ke-qareeb-bhi-mat-jao-yeh-be-hayaai-hai",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:32) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بے حیائی اور فحاشی کے اسباب اور قریب جانے کی ممانعت",
      ro: "Be-Hyaai Aur Fahashi Ke Asbab Aur Qareeb Jane Ki Mumaniat",
      en: "Prohibition of Approaching Indecency and Immorality"
    },
    quote: {
      ur: "اور بدکاری (زنا) کے قریب بھی مت جاؤ، بے شک وہ بڑی بے حیائی اور بہت ہی برا راستہ ہے۔",
      ro: "Aur bad-kaari (zina) ke qareeb bhi mat jao, be-shak woh badi be-hayaai aur bohot hi bura rasta hai.",
      en: "And do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن کریم نے یہ نہیں کہا کہ زنا نہ کرو، بلکہ فرمایا کہ 'اس کے قریب بھی مت جاؤ'۔ اس کا مطلب یہ ہے کہ فحاشی تک پہنچانے والے ہر راستے (جیسے بری نگاہ، تنہائی میں غلط فتنہ انگیز محافل، اور بے پردگی) سے بچا جائے۔ آج کا عملی سبق یہ ہے کہ گناہ سے بچنے کے لیے اس کے ابتدائی اسباب اور محرکات سے بھی دوری اختیار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran-e-Kareem ne yeh nahi kaha ke zina na karo, balkay farmaya ke 'us ke qareeb bhi mat jao'. Is ka matlab yeh hai ke fahashi tak pohanchane wale har rastay (jaise buri nigah, tanhai mein ghalat fitna-angez mahafil, aur be-pardgi) se bacha jaye. Aaj ka amli sabaq yeh hai ke gunah se bachne ke liye us ke ibtidai asbab aur muharriqat se bhi doori ikhtiyar karein.",
      en: "Context & Practical Lesson: The Quran commands us not to even *approach* indecency, meaning we must guard against the stepping stones and triggers that lead to moral failure."
    },
    tags: [
      { ur: "عفت و پاکدامنی", ro: "Iffat o Pakdamani", en: "Chastity" },
      { ur: "تہدیدِ گناہ", ro: "Tahdeed-e-Gunah", en: "Guarding Morality" }
    ]
  },
  {
    id: "ma-182",
    slug: "kisika-khoon-nahaq-mat-karo-aur-mazloom-ki-nusrat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:33) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "جان کا احترام اور ناحق خون بہانے کی سخت ممانعت",
      ro: "Jaan Ka Ehtiram Aur Nahaq Khoon Bahane Ki Sakht Mumaniat",
      en: "Sanctity of Life and Prohibition of Unjust Killing"
    },
    quote: {
      ur: "اور اس جان کو قتل نہ کرو جسے اللہ نے حرام ٹھہرایا ہے مگر حق کے ساتھ؛ اور جو شخص ناحق قتل کیا جائے تو ہم نے اس کے ولی کو غلبہ (قصاص کا حق) دیا ہے، پس وہ قتل میں حد سے تجاوز نہ کرے۔",
      ro: "Aur us jaan ko qatal na karo jisay Allah ne haram thehraya hai magar haq ke sath; aur jo shakhs nahaq qatal kiya jaye to hum ne us ke wali ko ghalba (qisas ka haq) diya hai, pas woh qatal mein had se tajawuz na kare.",
      en: "And do not kill the soul which Allah has forbidden, except by legal right. And whoever is killed unjustly - We have given his heir authority, but let him not exceed limits in [the matter of] taking life."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی جان کی حرمت اسلام میں اتنی بلند ہے کہ ایک بے گناہ کا قتل پوری انسانیت کا قتل قرار دیا گیا ہے۔ معاشرتی امن کے لیے ضروری ہے کہ قانون اپنے ہاتھ میں نہ لیا جائے اور مظلوم کو انصاف فراہم کیا جائے۔ آج کا عملی سبق یہ ہے کہ کسی کی جان، مال یا عزت کو نقصان پہنچانے سے سختی سے پرہیز کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani jaan ki hurmat Islam mein itni buland hai ke aik be-gunah ka qatal poori insaniyat ka qatal qarar diya gaya hai. Maasharati aman ke liye zaroori hai ke qanoon apne hath mein na liya jaye aur mazloom ko insaf faraham kiya jaye. Aaj ka amli sabaq yeh hai ke kisi ki jaan, maal ya izzat ko nuqsan pohanchane se sakhti se parhez karein.",
      en: "Context & Practical Lesson: Preserving human life and maintaining justice without taking the law into one's own hands is essential for a peaceful and secure society."
    },
    tags: [
      { ur: "حرمتِ جان", ro: "Hurmat-e-Jaan", en: "Sanctity of Life" },
      { ur: "عدل", ro: "Adal", en: "Justice" }
    ]
  },
  {
    id: "ma-183",
    slug: "yateem-ke-maal-ke-qarib-mat-jao-jab-tak-woh-jawan-ho",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:34) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "یتیم کے مال کی حفاظت کرنا اور وعدہ پورا کرنا",
      ro: "Yateem Ke Maal Ki Hifazat Karna Aur Wada Poora Karna",
      en: "Protecting the Orphan's Wealth and Fulfilling Pledges"
    },
    quote: {
      ur: "اور یتیم کے مال کے قریب بھی نہ جاؤ مگر ایسے طریقے سے جو بہترین ہو یہاں تک کہ وہ جوانی کو پہنچ جائے؛ اور وعدہ پورا کرو، بے شک وعدے کے بارے میں (قیامت کے دن) بازپرس ہونے والی ہے۔",
      ro: "Aur yateem ke maal ke qareeb bhi na jao magar aise tareeqay se jo behtareen ho yahan tak ke woh jawani ko pohanch jaye; aur wada poora karo, be-shak waday ke baray mein (qayamat ke din) baaz-purs hone wali hai.",
      en: "And do not approach the property of an orphan except in a way that is best until he reaches maturity. And fulfill [every] commitment. Indeed, the commitment is ever [that about which one will be] questioned."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بے سہارا یتیموں کے حقوق کی پامالی معاشرے کی تباہی کا سبب بنتی ہے۔ ان کے مال کی حفاظت صرف بہترین طریقے (اس کی نشوونما اور نفع) کے ساتھ کی جائے گی۔ اسی طرح ہر وعدہ ایک امانت ہے جس کا حساب دینا ہوگا۔ آج کا عملی سبق یہ ہے کہ کمزوروں کے حقوق کا خیال رکھیں اور اپنے ہر قول و اقرار کے پابند رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Be-sahara yateemon ke huqooq ki pamali muashray ki tabahi ka sabab banti hai. Un ke maal ki hifazat sirf behtareen tareeqay (us ki nashonuma aur nafa) ke sath ki jayegi. Isi tarah har wada aik amanat hai jis ka hisab dena hoga. Aaj ka amli sabaq yeh hai ke kamzoron ke huqooq ka khayal rakhein aur apne har qoul-o-iqrar ke paband rahein.",
      en: "Context & Practical Lesson: Safeguarding the property of orphans and keeping every solemn promise are sacred duties that carry direct accountability before God."
    },
    tags: [
      { ur: "حقوقِ یتیم", ro: "Huqooq-e-Yateem", en: "Orphan Rights" },
      { ur: "وفائے عہد", ro: "Wafa-e-Ahad", en: "Fulfilling Pledges" }
    ]
  },
{
    id: "ma-184",
    slug: "salam-mein-pehal-ki-nawwe-nekiyan-aur-musalman-ka-gham",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "سلام میں سبقت کی فضیلت اور دوسرے کے غم کا احساس",
      ro: "Salam Mein Sabqat Ki Fazeelat Aur Doosre Ke Gham Ka Ehsas",
      en: "The Excellence of Greeting First and Feeling Others' Pain"
    },
    quote: {
      ur: "سلام میں سبقت کرنے والے کو نوے (90) اور جواب دینے والے کو دس (10) نیکیاں ملتی ہیں؛ اور جس کو اپنے مسلمان بھائی کا غم اور درد محسوس نہ ہو وہ میری امت کے طریقے پر نہیں۔",
      ro: "Salam mein sabqat karne wale ko nawwe (90) aur jawab dene wale ko das (10) nekiyan milti hain; aur jis ko apne Musalman bhai ka gham aur dard mehsoos na ho woh meri ummat ke tareeqay par nahi.",
      en: "The one who initiates the greeting of peace receives ninety shares of mercy, while the one who replies receives ten; and whoever feels no concern for the suffering of fellow believers does not follow my way."
    },
    tashreeh: {
      ur: "سلام میں پہل کرنا تکبر کو توڑتا ہے اور نو گنا زیادہ ثواب دلاتا ہے۔ اسی طرح خود غرضی چھوڑ کر دوسرے انسانوں کے دکھ درد میں شریک ہونا ایمان کی زندہ علامت ہے۔",
      ro: "Salam mein pehal karna takabbur ko torta hai aur nau guna zyada sawab dilata hai. Isi tarah khud-gharzi chhor kar doosre insanon ke dukh dard mein shareek hona eman ki zinda alamat hai.",
      en: "Greeting others first breaks down pride and multiplies spiritual reward, while genuine empathy for the struggles of others is the heartbeat of faith."
    },
    tags: [
      { ur: "سلام", ro: "Salam", en: "Peaceful Greeting" },
      { ur: "ہمدردی", ro: "Hamdardi", en: "Empathy" }
    ]
  },
  {
    id: "ma-185",
    slug: "hamsaye-ke-teen-darjay-aur-janaza-mein-fikr-e-akhirat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 16",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بلاتفریقِ مذہب ہمسائے کے حقوق اور فکرِ آخرت",
      ro: "Bila-Tafreeq-e-Mazhab Hamsaye Ke Huqooq Aur Fikr-e-Akhirat",
      en: "Universal Neighborly Rights and Reflecting on Mortality"
    },
    quote: {
      ur: "غیر مسلم ہمسایہ کا ایک حصہ حق ہے، مسلمان ہمسایہ کا دو چند اور رشتہ دار ہمسایہ کا سہ چند؛ جس کے شر سے اس کا پڑوسی بے خوف نہ ہو وہ مومن نہیں خواہ وہ پڑوسی غیر مسلم ہی ہو۔ اور جب جنازے کے ہمراہ جاؤ تو اپنی عاقبت اور خاتمے کی فکر کرو۔",
      ro: "Ghair-Muslim hamsaya ka aik hissa haq hai, Musalman hamsaya ka do-chand aur rishtedar hamsaya ka seh-chand; jis ke shar se us ka parosi be-khauf na ho woh momin nahi khwah woh parosi ghair-Muslim hi ho. Aur jab janazay ke hamrah jao to apni aaqibat aur khatmay ki fikr karo.",
      en: "A non-Muslim neighbor has one right, a Muslim neighbor has two rights, and a neighbor who is also a relative has three rights; no one is a true believer unless their neighbor—regardless of faith—is safe from their harm."
    },
    tashreeh: {
      ur: "اسلام کی رواداری کا یہ عالم ہے کہ غیر مسلم پڑوسی کے حقوق اور تحفظ کو بھی ایمان کا حصہ قرار دیا گیا۔ اور جنازے میں شرکت کا مقصد محض رسم نبھانا نہیں بلکہ اپنی موت اور حساب کو یاد کر کے اعمال درست کرنا ہے۔",
      ro: "Islam ki rawadari ka yeh aalam hai ke ghair-Muslim parosi ke huqooq aur tahaffuz ko bhi eman ka hissa qarar diya gaya. Aur janazay mein shirkat ka maqsad mehaz rasm nibhana nahi balkay apni maut aur hisab ko yaad kar ke aamaal durust karna hai.",
      en: "Islamic ethics guarantee the safety and dignity of every neighbor regardless of religion, and attending a funeral serves as a powerful reminder to reform one's own life."
    },
    tags: [
      { ur: "رواداری", ro: "Rawadari", en: "Tolerance" },
      { ur: "حقوقِ ہمسایہ", ro: "Huqooq-e-Hamsaya", en: "Neighbor Rights" }
    ]
  },
  {
    id: "ma-186",
    slug: "taqat-se-bada-bojh-na-uthana-aur-eman-o-hasad",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "خود کو ذلت سے بچانا اور دل کو حسد سے پاک رکھنا",
      ro: "Khud Ko Zillat Se Bachana Aur Dil Ko Hasad Se Paak Rakhna",
      en: "Protecting One's Dignity and Cleansing the Heart of Envy"
    },
    quote: {
      ur: "ایماندار آدمی کو شایان نہیں کہ خود کو ذلیل کرے، یعنی ایسی بلا میں ہاتھ ڈالے جس کے مقابلے کی اس میں طاقت نہ ہو۔ کسی انسان کے دل میں ایمان اور حسد اکٹھے نہیں رہ سکتے؛ آپس میں سلام کا عام رواج کرو، محبت بڑھے گی۔",
      ro: "Emandar aadmi ko shayan nahi ke khud ko zaleel kare, yani aisi bala mein hath dalay jis ke muqable ki us mein taqat na ho. Kisi insan ke dil mein eman aur hasad ikatthay nahi reh sakte; aapas mein salam ka aam riwaj karo, mohabbat barhegi.",
      en: "It does not befit a believer to humiliate themselves by taking on a trial beyond their strength to bear. True faith and envy can never coexist in a single heart; spread the greeting of peace openly to increase mutual love."
    },
    tashreeh: {
      ur: "جذبات یا دکھاوے میں آ کر اپنی استطاعت سے بڑا قرض یا بوجھ سر پر لے لینا انسان کو رسوا کر دیتا ہے۔ اسی طرح حسد ایمان کی جڑیں کاٹ دیتا ہے جبکہ سلام کو عام کرنا دلوں کو جوڑتا ہے۔",
      ro: "Jazbat ya dikhaway mein aa kar apni istita'at se bada qarz ya bojh sar par le lena insan ko ruswa kar deta hai. Isi tarah hasad eman ki jarein kaat deta hai jabkeh salam ko aam karna dilon ko jorta hai.",
      en: "Wisdom lies in knowing one's practical limits to preserve self-respect, banishing jealousy from the heart, and cultivating warmth through greetings of peace."
    },
    tags: [
      { ur: "خودداری", ro: "Khuddari", en: "Self-Respect" },
      { ur: "محبت", ro: "Mohabbat", en: "Mutual Love" }
    ]
  },
  {
    id: "ma-187",
    slug: "kham-khayali-se-bachna-aur-momin-ki-farasat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "خام خیالی سے پرہیز اور مومن کی بصیرت",
      ro: "Kham-Khayali Se Parhez Aur Momin Ki Baseerat",
      en: "Avoiding Idle Wishful Thinking and the Believer's Insight"
    },
    quote: {
      ur: "اپنے آپ کو جھوٹی تمناؤں (خام خیالی) سے بچا کہ وہ بیوقوفوں کی وادی ہے؛ اور مومن کی فراست سے ڈرتے رہو کہ یقیناً وہ اللہ کے نور سے دیکھتا ہے۔",
      ro: "Apne aap ko jhooti tamannaon (kham-khayali) se bacha ke woh bewakoofon ki wadi hai; aur momin ki farasat se darte raho ke yaqeenan woh Allah ke noor se dekhta hai.",
      en: "Guard yourself against idle wishful thinking, for it is the valley of fools; and be mindful of the keen discernment of a true believer, for they see by the light of God."
    },
    tashreeh: {
      ur: "عملی محنت کے بغیر صرف خیالی پلاؤ پکاتے رہنا نادانوں کا کام ہے جو وقت ضائع کرتا ہے۔ اس کے برعکس پاکیزہ دل اور تقویٰ رکھنے والے انسان کو اللہ تعالیٰ ایسی بصیرت اور دور اندیشی عطا فرماتا ہے جو حقیقت کو پہچان لیتی ہے۔",
      ro: "Amli mehnat ke baghair sirf khayali pulao pakate rehna nadanon ka kaam hai jo waqt zaya karta hai. Is ke bar-aks pakeeza dil aur taqwa rakhne wale insan ko Allah Ta'ala aisi baseerat aur door-andeshi ata farmata hai jo haqeeqat ko pehchan leti hai.",
      en: "Daydreaming without effort wastes life away, whereas a pure, God-conscious heart is blessed with sharp intuition and wisdom."
    },
    tags: [
      { ur: "فراست", ro: "Farasat", en: "Insight" },
      { ur: "عمل", ro: "Amal", en: "Action" }
    ]
  },
  {
    id: "ma-188",
    slug: "neki-ki-targheeb-ka-ajr-aur-maazoori-mein-sawab",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 25",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "خیر کی ترغیب کا ثواب اور بیماری یا سفر میں کامل اجر",
      ro: "Khair Ki Targheeb Ka Sawab Aur Bimari Ya Safar Mein Kamil Ajr",
      en: "Reward for Inspiring Good and Full Credit During Illness"
    },
    quote: {
      ur: "جو شخص کسی نیک کام کے واسطے ترغیب دیتا ہے تو اسے اسی قدر ثواب ملتا ہے جس قدر عمل کرنے والے کو اور ان کے ثواب میں کوئی کمی نہیں ہوتی؛ اور اگر کوئی نیک کام کرنے والا بیماری یا سفر کی وجہ سے رک جائے تو اللہ اس کا عمل ویسا ہی شمار فرماتا ہے جیسا وہ تندرستی میں کرتا تھا۔",
      ro: "Jo shakhs kisi nek kaam ke wastay targheeb deta hai to usay usi qadar sawab milta hai jis qadar amal karne wale ko aur un ke sawab mein koi kami nahi hoti; aur agar koi nek kaam karne wala bimari ya safar ki wajah se ruk jaye to Allah us ka amal waisa hi shumar farmata hai jaisa woh tandrusti mein karta tha.",
      en: "Whoever inspires someone toward a good deed receives the same reward as the doer without diminishing their share; and when a regular doer of good is held back by illness or travel, God records for them the full reward of what they used to perform in health."
    },
    tashreeh: {
      ur: "یہ رحمتِ الٰہی کی وسعت ہے کہ نیکی پھیلانے والا بھی عمل کرنے والے کے برابر شریک ہو جاتا ہے، اور جو انسان صحت کے زمانے میں نیکی کا عادی ہو اسے بیماری اور مجبوری کے دنوں میں بھی پورا اجر ملتا رہتا ہے۔",
      ro: "Yeh rehmat-e-Ilahi ki wus'at hai ke neki phailane wala bhi amal karne wale ke barabar shareek ho jata hai, aur jo insan sehat ke zamane mein neki ka aadi ho usay bimari aur majboori ke dinon mein bhi poora ajr milta rehta hai.",
      en: "Encouraging virtue multiplies one's spiritual harvest, and building consistent good habits in health ensures unbroken reward even when illness intervenes."
    },
    tags: [
      { ur: "ترغیبِ خیر", ro: "Targheeb-e-Khair", en: "Inspiring Good" },
      { ur: "رحمتِ الٰہی", ro: "Rehmat-e-Ilahi", en: "Divine Grace" }
    ]
  },
  {
    id: "ma-189",
    slug: "khauf-e-khuda-se-ilm-ke-darwazay-aur-hakim-ka-adal",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 29-30",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "علم و حکمت کی کنجی اور عدل کی اجتماعی برکت",
      ro: "Ilm o Hikmat Ki Kunji Aur Adal Ki Ijtimai Barkat",
      en: "The Key to Wisdom and the Universal Blessing of Justice"
    },
    quote: {
      ur: "اللہ کا خوف اور اس کے احکام پر عمل کرنے سے انسان پر علم و حکمت کے دروازے کھل جاتے ہیں، اور اپنے اخلاق و عادات سنوار لینے سے ایمان مکمل ہو جاتا ہے۔ بادشاہ کا ایک گھڑی کا عدل ساٹھ سال کی عبادت سے زیادہ ہے کیونکہ عبادت کا فائدہ صرف عابد کو پہنچتا ہے اور عدل کا فائدہ خاص و عام سب کو ملتا ہے۔",
      ro: "Allah ka khauf aur us ke ahkam par amal karne se insan par ilm o hikmat ke darwazay khul jate hain, aur apne akhlaq o aadat sanwar lene se eman mukammal ho jata hai. Badshah ka aik ghari ka adal sath saal ki ibadat se zyada hai kyunkeh ibadat ka faida sirf aabid ko pohanchta hai aur adal ka faida khaas o aam sab ko milta hai.",
      en: "Reverence for God and acting upon His commands unlock the doors of true wisdom, and refining one's manners perfects faith. An hour of justice by a leader surpasses sixty years of private worship, for private devotion benefits the individual alone while justice benefits all of society."
    },
    tashreeh: {
      ur: "حقیقی دانائی تقویٰ سے پھوٹتی ہے اور ایمان کی تکمیل اچھے اخلاق سے ہوتی ہے۔ اسلام میں اس نیکی کا درجہ سب سے بلند ہے جس کا فیض ذات تک محدود نہ رہے بلکہ پورے معاشرے کو امن اور انصاف دے۔",
      ro: "Haqeeqi danai taqwa se phootti hai aur eman ki takmeel achay akhlaq se hoti hai. Islam mein us neki ka darja sab se buland hai jis ka faiz zaat tak mehdood na rahe balkay poore muashray ko aman aur insaf de.",
      en: "Piety illuminates the intellect, noble manners complete faith, and public justice ranks supreme because its blessings uplift every member of society."
    },
    tags: [
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" },
      { ur: "عدلِ اجتماعی", ro: "Adal-e-Ijtimai", en: "Social Justice" }
    ]
  },
  {
    id: "ma-190",
    slug: "naam-liye-baghair-islah-karna-uswah-e-nabawi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 33",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "عزتِ نفس مجروح کیے بغیر اصلاح کرنے کا نبوی طریق",
      ro: "Izzat-e-Nafs Majrooh Kiye Baghair Islah Karne Ka Nabawi Tareeq",
      en: "The Prophetic Way of Correcting Faults Without Public Shaming"
    },
    quote: {
      ur: "حضور اکرم ﷺ کو اگر کسی کی کوئی بات ناگوار معلوم ہوتی تو مجلس میں نام لے کر اس کا ذکر نہ فرماتے، بلکہ عمومی الفاظ میں فرماتے کہ 'لوگ ایسا کیوں کرتے ہیں یا بعض لوگوں کی یہ عادت ہے'، تاکہ خاص شخص کی ذلت نہ ہو اور اس کے احساسِ عزت میں کمی نہ آئے۔",
      ro: "Huzoor Akram ﷺ ko agar kisi ki koi baat nagawar maloom hoti to majlis mein naam le kar us ka zikr na farmate, balkay umoomi alfaz mein farmate ke 'log aisa kyon karte hain ya baaz logon ki yeh aadat hai', taake khaas shakhs ki zillat na ho aur us ke ehsas-e-izzat mein kami na aaye.",
      en: "Whenever the Prophet ﷺ noticed a fault in someone, he never named or shamed the individual in a gathering; instead, he would say generally, 'Why do some people do such-and-such?'—correcting the error while preserving the person's dignity."
    },
    tashreeh: {
      ur: "والدین، اساتذہ اور ذمہ داران کے لیے یہ سب سے سنہرا اصول ہے کہ بھری محفل میں کسی کا نام لے کر ٹوکنے سے ضد پیدا ہوتی ہے، جبکہ پردہ رکھ کر عمومی نصیحت کرنے سے عزت بھی بچتی ہے اور اصلاح بھی ہو جاتی ہے۔",
      ro: "Walideen, asatiza aur zimmedaran ke liye yeh sab se sunehra usool hai ke bhari mehfil mein kisi ka naam le kar tokne se zid paida hoti hai, jabkeh parda rakh kar umoomi nasihat karne se izzat bhi bachti hai aur islah bhi ho jati hai.",
      en: "Publicly humiliating someone breeds defensiveness, whereas addressing the mistake generally allows the individual to reflect and reform with their self-respect intact."
    },
    tags: [
      { ur: "عزتِ نفس", ro: "Izzat-e-Nafs", en: "Preserving Dignity" },
      { ur: "اندازِ تربیت", ro: "Andaz-e-Tarbiyat", en: "Wise Mentorship" }
    ]
  },
  {
    id: "ma-191",
    slug: "duniya-ke-buray-rawaiye-mein-bhi-akhlaq-na-chhorna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 43-44",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "مخالف ماحول میں بھی اخلاقِ حسنہ، وقار اور آدابِ گفتگو",
      ro: "Mukhalif Mahol Mein Bhi Akhlaq-e-Hasana, Waqar Aur Aadab-e-Guftugu",
      en: "Upholding Good Character, Calmness, and Listening Etiquette"
    },
    quote: {
      ur: "آپ ﷺ فرماتے کہ اگر دنیا خراب اخلاق کا نمونہ پیش کرے تو بھی انسان کو اپنے اخلاقِ حسنہ نہ چھوڑنے چاہئیں۔ آپ ﷺ لوگوں کو جلد بازی سے ہمیشہ بچنے اور وقار اختیار کرنے کی تاکید فرماتے، اور گفتگو میں کبھی کسی کی بات کو بیچ میں قطع نہ فرماتے۔",
      ro: "Aap ﷺ farmate ke agar duniya kharab akhlaq ka namoona pesh kare to bhi insan ko apne akhlaq-e-hasana na chhorne chahiyein. Aap ﷺ logon ko jald-bazi se hamesha bachne aur waqar ikhtiyar karne ki takeed farmate, aur guftugu mein kabhi kisi ki baat ko beech mein qata na farmate.",
      en: "The Prophet ﷺ taught that even if the world around you displays poor manners, you must never abandon your own noble character. He urged people to avoid haste, act with calm dignity, and never interrupt someone while they are speaking."
    },
    tashreeh: {
      ur: "سچا اخلاق وہی ہے جو دوسروں کی بدتمیزی کے جواب میں بھی برقرار رہے۔ کاموں میں جلد بازی کے بجائے ٹھہراؤ رکھنا اور سامنے والے کی پوری بات توجہ سے سننا اعلیٰ شخصیت کی پہچان ہے۔",
      ro: "Sacha akhlaq wahi hai jo doosron ki bad-tameezi ke jawab mein bhi barqarar rahe. Kaamon mein jald-bazi ke bajaye thehrao rakhna aur samne wale ki poori baat tawajjo se sunna aala shakhsiyat ki pehchan hai.",
      en: "True character does not mirror the rudeness of others; it remains steady, patient, and respectful, giving every speaker full attention without interruption."
    },
    tags: [
      { ur: "وقار", ro: "Waqar", en: "Composure" },
      { ur: "آدابِ گفتگو", ro: "Aadab-e-Guftugu", en: "Listening Etiquette" }
    ]
  },
  {
    id: "ma-192",
    slug: "jang-ke-akhlaqi-usool-aur-darakhton-o-janwaron-ki-hifazat",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 45-46",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "رحمتِ عالم ﷺ کے جنگی اخلاقیات اور ماحول و بے زبانوں پر شفقت",
      ro: "Rehmat-e-Aalam ﷺ Ke Jangi Akhlaqiyat Aur Mahol o Be-Zabanon Par Shafqat",
      en: "Humanitarian Rules of Conduct and Mercy Toward Nature and Animals"
    },
    quote: {
      ur: "آپ ﷺ نے لشکر کو وصیت فرمائی: جو لوگ عبادت گاہوں میں مصروف ہوں ان سے تعرض نہ کرنا، کسی عورت، بچے اور بوڑھے پر ہرگز ہاتھ نہ اٹھانا، سرسبز و شاداب درختوں کو نہ کاٹنا؛ اور بے زبان جانوروں پر ایسی شفقت سکھائی کہ منزل پر اترتے تو پہلے جانوروں کو چارہ ڈالتے پھر نماز پڑھتے۔",
      ro: "Aap ﷺ ne lashkar ko wasiyat farmai: jo log ibadat-gahon mein masroof hon un se ta'arruz na karna, kisi aurat, bachay aur burhay par hargiz hath na uthana, sarsabz-o-shadab darakhton ko na katna; aur be-zaban janwaron par aisi shafqat sikhai ke manzil par utarte to pehle janwaron ko chara dalte phir namaz parhte.",
      en: "Even in times of conflict, the Prophet ﷺ strictly forbade harming worshippers in sanctuaries, women, children, and the elderly, or cutting down green, fruit-bearing trees; and his mercy toward animals inspired companions to feed their mounts before standing for prayer."
    },
    tashreeh: {
      ur: "انسانی تاریخ میں رحم دلی اور ماحول کے تحفظ کی ایسی مثال نہیں ملتی کہ جنگ کی حالت میں بھی غیر جانب دار شہریوں، عبادت گاہوں اور ہرے بھرے درختوں کی حفاظت کو فرض قرار دیا گیا اور بے زبان جانوروں کی بھوک کا خیال رکھا گیا۔",
      ro: "Insani tareekh mein reham-dili aur mahol ke tahaffuz ki aisi misal nahi milti ke jang ki halat mein bhi ghair-janibdar shehriyon, ibadat-gahon aur haray bharay darakhton ki hifazat ko farz qarar diya gaya aur be-zaban janwaron ki bhook ka khayal rakha gaya.",
      en: "Fourteen centuries ago, Prophetic teachings established universal human rights, environmental conservation, and animal welfare even under the hardest conditions."
    },
    tags: [
      { ur: "رحمۃ للعالمین", ro: "Rehmatul-lil-Aalameen", en: "Universal Mercy" },
      { ur: "انسانی حقوق", ro: "Insani Huqooq", en: "Humanitarian Ethics" }
    ]
  },
  {
    id: "ma-193",
    slug: "kamzor-ko-haq-dilana-aur-sidq-amanat-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 69",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "کمزور کی حق رسی اور سچائی کی امانت (پہلا خطبۂ خلافت)",
      ro: "Kamzor Ki Haq-Rasi Aur Sachai Ki Amanat (Pehla Khutba-e-Khilafat)",
      en: "Empowering the Weak and Upholding Truth in Governance"
    },
    quote: {
      ur: "بلاشبہ صدق امانت اور کذب خیانت ہے؛ تم میں سے جو ضعیف (کمزور) ہے وہ میری نظروں میں قوی ہے یہاں تک کہ میں اس کو اس کا حق دلا دوں، اور جو قوی ہے وہ میری نظروں میں ضعیف ہے یہاں تک کہ میں اس سے مظلوم کا حق وصول کر لوں۔",
      ro: "Bila-shuba sidq amanat aur kizb khyanat hai; tum mein se jo zaeef (kamzor) hai woh meri nazron mein qawi hai yahan tak ke main us ko us ka haq dila doon, aur jo qawi hai woh meri nazron mein zaeef hai yahan tak ke main us se mazloom ka haq wasool kar loon.",
      en: "Truthfulness is a sacred trust and falsehood is betrayal; the weakest among you is strong in my sight until I restore their rightful due, and the most powerful among you is weak in my sight until I take back from them the right of the oppressed."
    },
    tashreeh: {
      ur: "سیدنا صدیقِ اکبرؓ کے پہلے خطبۂ خلافت کے یہ تاریخی الفاظ عادلانہ نظام کا منشور ہیں کہ ریاست اور ذمہ دار کا کام طاقتور کے رعب میں آنا نہیں بلکہ بے بس کو طاقتور کے مقابلے میں انصاف دلانا ہے۔",
      ro: "Sayyiduna Siddiq-e-Akbar (R.A) ke pehle khutba-e-khilafat ke yeh tareekhi alfaz aadilana nizam ka manshoor hain ke riyasat aur zimmedar ka kaam taqatwar ke roab mein aana nahi balkay be-bas ko taqatwar ke muqable mein insaf dilana hai.",
      en: "Delivered in his inaugural address, these timeless words define just leadership: standing firmly with the powerless until every usurped right is restored."
    },
    tags: [
      { ur: "عدلِ صدیقی", ro: "Adal-e-Siddiqi", en: "Just Leadership" },
      { ur: "حق رسی", ro: "Haq-Rasi", en: "Restoring Rights" }
    ]
  },
  {
    id: "ma-194",
    slug: "mashwara-karne-ke-aitbar-se-insanon-ki-teen-aqsam",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 73-74",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "مشاورت اور فہم کے لحاظ سے انسانوں کے تین درجے",
      ro: "Mushawarat Aur Fehm Ke Lehaz Se Insanon Ke Teen Darjay",
      en: "Three Types of People Regarding Consultation and Judgment"
    },
    quote: {
      ur: "آدمی تین قسم کے ہوتے ہیں: کامل وہ ہے جو لوگوں سے مشورہ کر کے اس پر غور کرے؛ نیم کامل وہ ہے جو صرف اپنی رائے پر چلے اور کسی سے مشورہ نہ کرے؛ اور لاشے (ناکارہ) وہ ہے کہ نہ خود صاحبِ رائے ہو اور نہ دوسرے سے مشورہ کرے۔",
      ro: "Aadmi teen qism ke hote hain: kamil woh hai jo logon se mashwara kar ke us par ghaur kare; neem-kamil woh hai jo sirf apni raaye par chalay aur kisi se mashwara na kare; aur la-shay (nakara) woh hai ke na khud sahib-e-raaye ho aur na doosre se mashwara kare.",
      en: "People are of three kinds: the complete person who consults wise minds and reflects deeply; the half-complete person who relies solely on their own opinion without consulting others; and thehelpless one who neither possesses sound judgment nor seeks counsel."
    },
    tashreeh: {
      ur: "انسان خواہ کتنا ہی ذہین کیوں نہ ہو، خود رائی اکثر نقصان پہنچاتی ہے۔ اپنے سے تجربہ کار اور مخلص لوگوں سے مشورہ کرنا اور پھر غور و فکر کر کے قدم اٹھانا کامل عقل کی نشانی ہے۔",
      ro: "Insan khwah kitna hi zaheen kyon na ho, khud-raai aksar nuqsan pohanchati hai. Apne se tajurba-kar aur mukhlis logon se mashwara karna aur phir ghaur-o-fikr kar ke qadam uthana kamil aqal ki nishani hai.",
      en: "No matter how intelligent one may be, consulting experienced minds guards against blind spots and elevates decision-making to perfection."
    },
    tags: [
      { ur: "مشاورت", ro: "Mushawarat", en: "Consultation" },
      { ur: "تدبر", ro: "Tadabbur", en: "Sound Judgment" }
    ]
  },
  {
    id: "ma-195",
    slug: "apne-nafs-ki-islah-khalwat-ki-pakeezgi-aur-aalim-ki-izzat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91-92",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "پہلے اپنی اصلاح، تنہائی کی پاکیزگی اور اہلِ علم کی قدر",
      ro: "Pehle Apni Islah, Tanhai Ki Pakeezgi Aur Ahl-e-Ilm Ki Qadr",
      en: "Self-Reform First, Integrity in Private, and Honoring Scholars"
    },
    quote: {
      ur: "جو شخص خود اپنے نفس کی اصلاح نہیں کرتا وہ دوسروں کے حق میں کبھی مصلح نہیں بن سکتا۔ جو کام لوگوں کے سامنے کرنا مناسب نہیں، مناسب ہے کہ اس کو چھپ کر بھی نہ کیا جائے۔ صاحبِ علم اگرچہ غریب حالت میں ہو اسے حقیر نہ سمجھ، اور بیوقوف اگر بڑے رتبے پر ہو اسے بڑا مت خیال کر۔",
      ro: "Jo shakhs khud apne nafs ki islah nahi karta woh doosron ke haq mein kabhi musleh nahi ban sakta. Jo kaam logon ke samne karna munasib nahi, munasib hai ke us ko chhup kar bhi na kiya jaye. Sahib-e-ilm agarchay ghareeb halat mein ho usay haqeer na samajh, aur bewakoof agar bade rutbay par ho usay bada mat khayal kar.",
      en: "Whoever does not reform their own self can never truly reform others. Whatever is shameful to do in front of people should never be done in secret either. Never look down upon a person of knowledge even if they are poor, and never revere a fool merely because they hold high worldly status."
    },
    tashreeh: {
      ur: "سچا کردار وہی ہے جس کا ظاہر اور باطن ایک ہو؛ جو کام انسان سب کے سامنے کرنے سے شرماتا ہے اسے تنہائی میں بھی چھوڑ دے۔ اور انسانوں کی قدر ان کے کپڑوں یا عہدوں سے نہیں بلکہ علم و دانائی سے کرنی چاہیے۔",
      ro: "Sacha kirdar wahi hai jis ka zahir aur batin aik ho; jo kaam insan sab ke samne karne se sharmata hai usay tanhai mein bhi chhor de. Aur insanon ki qadr un ke kapron ya ohdon se nahi balkay ilm o danai se karni chahiye.",
      en: "Authentic integrity means acting in private with the same honor one shows in public, and valuing people by their wisdom rather than their worldly trappings."
    },
    tags: [
      { ur: "اصلاحِ ذات", ro: "Islah-e-Zaat", en: "Self-Reform" },
      { ur: "قدرِ علم", ro: "Qadr-e-Ilm", en: "Valuing Knowledge" }
    ]
  }
];

export const batch14Quotes: QuoteItem[] = [
  {
    id: "ma-196",
    slug: "zalimon-ki-taraf-jhukne-se-parhez-aur-taqwa",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Hud (11:113) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ظالموں کی طرف مائل نہ ہونا ورنہ جہنم کی آگ چھو لے گی",
      ro: "Zalimon Ki Taraf Jhukne Se Parhez Aur Taqwa",
      en: "Do Not Lean Toward the Wrongdoers Lest Hellfire Touches You"
    },
    quote: {
      ur: "اور ظالموں کی طرف ذرا مت جھکو ورنہ تمہیں بھی آگ (جہنم) چھو لے گی، اور اللہ کے سوا تمہارا کوئی مددگار نہیں پھر تمہیں کہیں سے مدد نہیں ملے گی۔",
      ro: "Aur zalimon ki taraf zara mat jhuko warna tumhein bhi aag (Jahannam) chhoo legi, aur Allah ke siwa tumhara koi madadgar nahi phir tumhein kahin se madad nahi milegi.",
      en: "And do not incline toward those who do wrong, lest you be touched by the Fire, and you would have not other than Allah any protectors, then you would not be helped."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ناانصافی اور ظلم کرنے والوں کی حمایت کرنا یا ان کے ساتھ مفاداتی قربت رکھنا انسان کو اخلاقی اور روحانی طور پر تباہ کر دیتا ہے۔ آج کا عملی سبق یہ ہے کہ ظالموں اور بدعنوانوں سے فاصلہ رکھیں اور ہمیشہ حق اور مظلومین کا ساتھ دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Na-insafi aur zulm karne walon ki himayat karna ya un ke sath mufadati qurbat rakhna insan ko akhlaqi aur roohani taur par tabaah kar deta hai. Aaj ka amli sabaq yeh hai ke zalimon aur bad-unwanon se fasla rakhein aur hamesha haq aur mazlomeen ka sath dein.",
      en: "Context & Practical Lesson: Associating with or condoning oppressors corrupts character; true piety requires standing firmly against injustice."
    },
    tags: [
      { ur: "ظلم سے بیزاری", ro: "Zulm Se Bezari", en: "Opposing Injustice" },
      { ur: "اصول پرستی", ro: "Oosol-Parasti", en: "Principled Life" }
    ]
  },
  {
    id: "ma-197",
    slug: "namaz-qayam-rakho-din-aur-raat-ke-auroaf-mein",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Hud (11:114) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "دن اور رات کے اوقات میں نماز قائم کرنا اور نیکیوں کا اثر",
      ro: "Namaz Qayam Rakho Din Aur Raat Ke Auqat Mein Aur Nekiyon Ka Asar",
      en: "Establishing Prayer at Day and Night and the Effect of Good Deeds"
    },
    quote: {
      ur: "اور دن کے دونوں سروں پر اور رات کے کچھ حصوں میں نماز قائم کرو؛ بے شک نیکیاں برائیوں کو مٹا دیتی ہیں، یہ نصیحت حاصل کرنے والوں کے لیے ایک یاد دہانی ہے۔",
      ro: "Aur din ke dono saron par aur raat ke kuch hisson mein namaz qayam karo; be-shak nekiyan buraiyon ko mita deti hain, yeh nasihat hasil karne walon ke liye aik yaad-dehani hai.",
      en: "And establish prayer at the two ends of the day and at the approach of the night. Indeed, good deeds do away with misdeeds. That is a reminder for those who remember."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: نماز وقت کی پابندی اور رب کے حضور بندگی کا بہترین ذریعہ ہے۔ اس آیت میں یہ نوید بھی دی گئی ہے کہ اچھے اعمال (خصوصاً توبہ اور نماز) پچھلے گناہوں کے اثرات کو زائل کر دیتے ہیں۔ آج کا عملی سبق یہ ہے کہ اپنی نمازوں کی پابندی کو معمول بنائیں اور ہر گناہ کے بعد فوراً توبہ اور نیکی کی طرف لوٹیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Namaz waqt ki pabandi aur Rab ke huzoor bandagi ka behtareen zariya hai. Is aayat mein yeh naweed bhi di gayi hai ke achay aamaal (khusoosan tauba aur namaz) pichle gunahon ke asraat ko zail kar dete hain. Aaj ka amli sabaq yeh hai ke apni namazon ki pabandi ko mamool banayein aur har gunah ke baad foran tauba aur neki ki taraf laut aayein.",
      en: "Context & Practical Lesson: Regular prayers anchor our daily routine, while righteous deeds wash away spiritual blemishes, offering a fresh start with every sincere effort."
    },
    tags: [
      { ur: "قامتِ صلوٰة", ro: "Qamat-e-Salah", en: "Establishing Prayer" },
      { ur: "توبہ و استغفار", ro: "Tauba o Istighfar", en: "Repentance" }
    ]
  },
  {
    id: "ma-198",
    slug: "sabr-aur-mustaqilli-ka-phal-nek-karon-ka-ajr",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Hud (11:115) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مشکلات میں صبر کرنا اور نیکی کرنے والوں کا اجر ضائع نہیں ہوتا",
      ro: "Mushkilat Mein Sabr Karna Aur Neki Karne Walon Ka Ajr Zaya Nahi Hota",
      en: "Patience in Adversity and the Guaranteed Reward for the Righteous"
    },
    quote: {
      ur: "اور صبر کرو، بے شک اللہ نیکی کرنے والوں کا اجر ضائع نہیں کرتا۔",
      ro: "Aur sabr karo, be-shak Allah neki karne walon ka ajr zaya nahi karta.",
      en: "And be patient, for indeed, Allah does not allow to be lost the reward of those who do good."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مصیبتوں اور آزمائشوں کے وقت مستقل مزاجی اور صبر کا دامن تھامے رکھنا مومن کا شیوہ ہے۔ رب کا وعدہ ہے کہ دنیا میں کی گئی کسی بھی نیکی یا صبر کی محنت کو رائیگاں نہیں جانے دیا جائے گا۔ آج کا عملی سبق یہ ہے کہ مشکلات میں گھبرا کر ہمت نہ ہاریں بلکہ صبر کے ساتھ اچھے اعمال جاری رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Museebaton aur aazmaishon ke waqt mustaqil-mizaji aur sabr ka daman thame rakhna momin ka shewa hai. Rab ka wada hai ke duniya mein ki gayi kisi bhi neki ya sabr ki mehnat ko raigan nahi jane diya jayega. Aaj ka amli sabaq yeh hai ke mushkilat mein ghabra kar himmat na harein balkay sabr ke sath achay aamaal jari rakhein.",
      en: "Context & Practical Lesson: Steadfastness during trials is a believer's greatest asset; God guarantees that no sincere effort or patience goes unrewarded."
    },
    tags: [
      { ur: "صبر و استقامت", ro: "Sabr o Istaqamat", en: "Patience & Perseverance" },
      { ur: "اجرِ الٰہی", ro: "Ajr-e-Ilahi", en: "Divine Reward" }
    ]
  },
{
    id: "ma-199",
    slug: "mazdoor-ki-mazdoori-pasina-khushk-hone-se-pehle",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مزدور کا حق اور بروقت اجرت کی ادائیگی",
      ro: "Mazdoor Ka Haq Aur Bar-Waqt Ujrat Ki Adaigi",
      en: "The Worker's Right and Prompt Payment of Wages"
    },
    quote: {
      ur: "مزدور کو اس کی مزدوری اس کا پسینہ خشک ہونے سے پہلے ادا کر دو؛ اور قیامت کے دن میں خود اس شخص کے خلاف مدعی بنوں گا جو کسی مزدور سے پورا کام لے اور پھر اس کی اجرت نہ دے۔",
      ro: "Mazdoor ko us ki mazdoori us ka pasina khushk hone se pehle ada kar do; aur qayamat ke din main khud us shakhs ke khilaf muddai banoonga jo kisi mazdoor se poora kaam le aur phir us ki ujrat na de.",
      en: "Pay the worker their wages before their sweat dries; on the Day of Judgment, I myself will stand as a plaintiff against the one who takes full work from a laborer andwithholds their rightful pay."
    },
    tashreeh: {
      ur: "محنت کش اپنے بچوں کی روزی کے لیے خون پسینہ ایک کرتا ہے۔ اس کا حق روکنا یا ٹال مٹول سے اسے پریشان کرنا اتنا بڑا جرم ہے کہ رحمتِ عالم ﷺ نے روزِ حشر ایسے ظالم کے خلاف خود مقدمہ لڑنے کی وعید سنائی۔",
      ro: "Mehnat-kash apne bachon ki rozi ke liye khoon-pasina aik karta hai. Us ka haq rokna ya taal-matol se usay pareshan karna itna bada jurm hai ke Rehmat-e-Aalam ﷺ ne roz-e-hashr aise zalim ke khilaf khud muqaddama larne ki waeed sunai.",
      en: "Delaying or denying the wages of a hardworking laborer is a grave injustice; honoring workers with prompt and fair compensation is a cornerstone of Islamic ethics."
    },
    tags: [
      { ur: "حقوقِ مزدور", ro: "Huqooq-e-Mazdoor", en: "Labor Rights" },
      { ur: "انصاف", ro: "Insaf", en: "Fairness" }
    ]
  },
  {
    id: "ma-200",
    slug: "yateem-ki-kafalat-aur-dil-ki-narmi-ka-nuskha",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "یتیم پر شفقت اور دل کی سختی کا روحانی علاج",
      ro: "Yateem Par Shafqat Aur Dil Ki Sakhti Ka Roohani Ilaj",
      en: "Caring for Orphans and Softening a Hardened Heart"
    },
    quote: {
      ur: "بہترین گھر وہ ہے جس میں کسی یتیم کے ساتھ اچھا سلوک کیا جائے۔ اگر تو چاہتا ہے کہ تیرے دل کی سختی دور ہو کر نرمی پیدا ہو تو مسکین کو کھانا کھلا اور یتیم کے سر پر شفقت سے ہاتھ پھیر۔",
      ro: "Behtareen ghar woh hai jis mein kisi yateem ke sath acha sulook kiya jaye. Agar tu chahta hai ke tere dil ki sakhti door ho kar narmi paida ho to miskeen ko khana khila aur yateem ke sar par shafqat se hath pher.",
      en: "The best home is one in which an orphan is treated with kindness. If you wish to soften your heart, feed the needy and gently pass your hand in affection over the head of an orphan."
    },
    tashreeh: {
      ur: "جب انسان دنیا کی دوڑ میں مصروف ہو کر بے حس ہونے لگے تو اس کا علاج بے سہارا یتیموں کی سرپرستی اور بھوکوں کو کھانا کھلانا ہے۔ یتیم کے چہرے کی مسکراہٹ گھر میں رحمتوں کے دروازے کھول دیتی ہے۔",
      ro: "Jab insan duniya ki daur mein masroof ho kar be-his hone lagay to us ka ilaj be-sahara yateemon ki sarparasti aur bhookon ko khana khilana hai. Yateem ke chehray ki muskurahat ghar mein rehmaton ke darwazay khol deti hai.",
      en: "Compassionate care for orphans and feeding the hungry melt away spiritual hardness and fill a household with divine blessings."
    },
    tags: [
      { ur: "یتیم پروری", ro: "Yateem-Parwari", en: "Orphan Care" },
      { ur: "رحمدلی", ro: "Reham-Dili", en: "Compassion" }
    ]
  },
  {
    id: "ma-201",
    slug: "amanat-dari-aur-ahad-wafai-eman-ki-pehchan",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "امانت داری اور عہد کی پاسداری ایمان کی بنیاد ہے",
      ro: "Amanat-Dari Aur Ahad Ki Pasdari Eman Ki Bunyad Hai",
      en: "Trustworthiness and Keeping Pledges Define True Faith"
    },
    quote: {
      ur: "اس شخص کا ایمان کامل نہیں جس میں امانت داری نہیں، اور اس شخص کا دین کامل نہیں جس میں عہد و پیمان کی پابندی نہیں۔ جس نے تیرے پاس امانت رکھی اس کی امانت ادا کر اور جس نے تیری خیانت کی تو اس کی خیانت مت کر۔",
      ro: "Us shakhs ka eman kamil nahi jis mein amanat-dari nahi, aur us shakhs ka deen kamil nahi jis mein ahad-o-paiman ki pabandi nahi. Jis ne tere paas amanat rakhi us ki amanat ada kar aur jis ne teri khyanat ki tu us ki khyanat mat kar.",
      en: "There is no complete faith for one who lacks trustworthiness, and no complete religion for one who fails to honor their word. Return the trust to the one who entrusted you, and never betray even the one who betrayed you."
    },
    tashreeh: {
      ur: "مومن اپنے کردار کا پابند ہوتا ہے، دوسروں کے رویے کا نہیں۔ اگر کوئی شخص آپ کے ساتھ بددیانتی بھی کرے تو بدلے میں آپ کو خائن بننے کی اجازت نہیں بلکہ ہر حال میں امانت و سچائی پر قائم رہنا لازم ہے۔",
      ro: "Momin apne kirdar ka paband hota hai, doosron ke rawaiye ka nahi. Agar koi shakhs aap ke sath bad-diyanati bhi kare to badlay mein aap ko khain banne ki ijazat nahi balkay har haal mein amanat o sachai par qayam rehna lazim hai.",
      en: "A person of integrity upholds honesty as an absolute principle—never using someone else's betrayal as an excuse to stoop to dishonesty."
    },
    tags: [
      { ur: "امانت داری", ro: "Amanat-Dari", en: "Trustworthiness" },
      { ur: "کردار", ro: "Kirdar", en: "Integrity" }
    ]
  },
  {
    id: "ma-202",
    slug: "bhai-ke-samne-muskurana-aur-nek-baat-sadqa-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مسکراہٹ کا صدقہ اور دلوں کو جیتنے کا راز",
      ro: "Muskurahat Ka Sadqa Aur Dilon Ko Jeetne Ka Raaz",
      en: "The Charity of a Smile and Winning Hearts"
    },
    quote: {
      ur: "اپنے بھائی کے سامنے تیرا مسکرا کر دیکھنا بھی تیرے لیے صدقہ ہے؛ تم اپنے مال سے سب لوگوں کو خوش نہیں کر سکتے، لیکن تمہاری کشادہ پیشانی اور خوش اخلاقی سب کو خوش اور راضی رکھ سکتی ہے۔",
      ro: "Apne bhai ke samne tera muskura kar dekhna bhi tere liye sadqa hai; tum apne maal se sab logon ko khush nahi kar sakte, lekin tumhari kushada-peshani aur khush-akhlaqi sab ko khush aur raazi rakh sakti hai.",
      en: "Smiling in the face of your brother is an act of charity for you; you cannot satisfy everyone with your wealth, so let your cheerful face and noble manners embrace them all."
    },
    tashreeh: {
      ur: "دولت محدود ہوتی ہے لیکن اخلاق اور مسکراہٹ کا خزانہ کبھی ختم نہیں ہوتا۔ تھکے ہوئے اور پریشان حال انسان سے خلوص اور مسکراہٹ سے ملنا اس کے دل کا بوجھ ہلکا کر دیتا ہے۔",
      ro: "Daulat mehdood hoti hai lekin akhlaq aur muskurahat ka khazana kabhi khatam nahi hota. Thakay huye aur pareshan-haal insan se khuloos aur muskurahat se milna us ke dil ka bojh halka kar deta hai.",
      en: "While financial resources are limited, warmth and kindness are inexhaustible; a sincere smile uplifts weary spirits and costs nothing."
    },
    tags: [
      { ur: "مسکراہٹ", ro: "Muskurahat", en: "Cheerfulness" },
      { ur: "خوش اخلاقی", ro: "Khush-Akhlaqi", en: "Kind Manners" }
    ]
  },
  {
    id: "ma-203",
    slug: "huzoor-ki-guftugu-ka-waqar-aur-saaf-kalami",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 36",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "گفتگو میں ٹھہراؤ، وضاحت اور شیرینی کا نبوی انداز",
      ro: "Guftugu Mein Thehrao, Wazahat Aur Shireeni Ka Nabawi Andaz",
      en: "The Prophetic Manner of Clear, Measured, and Dignified Speech"
    },
    quote: {
      ur: "حضور اکرم ﷺ کا کلام ایسا صاف اور ٹھہر ٹھہر کر ہوتا تھا کہ ہر لفظ الگ الگ چمکتا ہوا معلوم ہوتا، اور سننے والا اگر آپ کے الفاظ گننا یا یاد رکھنا چاہتا تو باآسانی یاد کر لیتا؛ آپ بلا ضرورت گفتگو نہ فرماتے اور جب بولتے تو جامع بات فرماتے۔",
      ro: "Huzoor Akram ﷺ ka kalam aisa saaf aur thehar thehar kar hota tha ke har lafz alag alag chamakta huwa maloom hota, aur sunne wala agar Aap ke alfaz ginna ya yaad rakhna chahta to ba-asani yaad kar leta; Aap bila-zaroorat guftugu na farmate aur jab bolte to jame baat farmate.",
      en: "The speech of the Prophet ﷺ was so clear, unhurried, and distinct that anyone listening could easily count and memorize his words; he never spoke unnecessarily, and when he spoke, his words were concise and full of wisdom."
    },
    tashreeh: {
      ur: "تیز تیز اور مبہم بولنے سے بات کا اثر ختم ہو جاتا ہے۔ گفتگو کا بہترین ادب یہ ہے کہ الفاظ واضح ہوں، لہجے میں ٹھہراؤ ہو اور کم لفظوں میں بامقصد بات کہی جائے تاکہ سننے والے کے دل میں اتر جائے۔",
      ro: "Tez tez aur mubham bolne se baat ka asar khatam ho jata hai. Guftugu ka behtareen adab yeh hai ke alfaz wazeh hon, lehjay mein thehrao ho aur kam lafzon mein ba-maqsad baat kahi jaye taake sunne wale ke dil mein utar jaye.",
      en: "Speaking with calm clarity and purposeful brevity ensures that one's message is understood, respected, and remembered."
    },
    tags: [
      { ur: "شمائلِ نبوی ﷺ", ro: "Shamail-e-Nabawi ﷺ", en: "Prophetic Grace" },
      { ur: "فصاحت", ro: "Fasahat", en: "Eloquent Speech" }
    ]
  },
  {
    id: "ma-204",
    slug: "zaati-intiqam-na-lena-aur-ghar-ke-kaam-khud-karna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 35",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "اپنی ذات کے لیے انتقام نہ لینا اور گھر کے کاموں میں شرکت",
      ro: "Apni Zaat Ke Liye Intiqam Na Lena Aur Ghar Ke Kaamon Mein Shirkat",
      en: "Never Seeking Personal Revenge and Helping in Household Chores"
    },
    quote: {
      ur: "حضور اکرم ﷺ نے اپنی ذاتی تکلیف کے لیے کبھی کسی سے انتقام نہیں لیا؛ اور گھر میں آپ ﷺ کا حال ایک عام انسان کی طرح سادہ ہوتا کہ اپنے کپڑے خود صاف کر لیتے، بکری کا دودھ دوہ لیتے، اپنا جوتا خود گانٹھ لیتے اور گھر کے کام کاج میں ہاتھ بٹاتے۔",
      ro: "Huzoor Akram ﷺ ne apni zaati takleef ke liye kabhi kisi se intiqam nahi liya; aur ghar mein Aap ﷺ ka haal aik aam insan ki tarah sada hota ke apne kapray khud saaf kar lete, bakri ka doodh doh lete, apna joota khud gaanth lete aur ghar ke kaam-kaaj mein hath batate.",
      en: "The Prophet ﷺ never sought personal revenge for any wrong done to him; at home, he lived with utter humility—mending his own sandals, tending to his clothes, and actively assisting his family with daily household chores."
    },
    tashreeh: {
      ur: "دو جہاں کے سردار ﷺ کی گھریلو زندگی ہر انسان کے لیے مشعلِ راہ ہے کہ گھر کے اندر افسر بن کر حکم چلانے کے بجائے اپنے کام خود کرنا اور اہلِ خانہ کا ہاتھ بٹانا ہی سچی سنت اور عظمت ہے۔",
      ro: "Do jahan ke Sardar ﷺ ki ghareloo zindagi har insan ke liye mash'al-e-raah hai ke ghar ke andar afsar ban kar hukm chalane ke bajaye apne kaam khud karna aur ahl-e-khana ka hath batana hi sachi sunnat aur azmat hai.",
      en: "True greatness shines inside the home: forgiving personal slights and humbly sharing in everyday household chores alongside one's family."
    },
    tags: [
      { ur: "سنتِ نبوی ﷺ", ro: "Sunnat-e-Nabawi ﷺ", en: "Prophetic Sunnah" },
      { ur: "خاندانی زندگی", ro: "Khandani Zindagi", en: "Family Life" }
    ]
  },
  {
    id: "ma-205",
    slug: "chaar-sifat-jo-insan-ko-bulandi-ata-karti-hain",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "چار صفات جو انسان کو دنیا و آخرت میں سرخرو کرتی ہیں",
      ro: "Chaar Sifat Jo Insan Ko Duniya o Akhirat Mein Surkhru Karti Hain",
      en: "Four Qualities That Elevate a Person in Both Worlds"
    },
    quote: {
      ur: "چار چیزیں جس کو مل گئیں اسے دنیا اور آخرت کی بھلائی مل گئی: سچ بولنے والی زبان، شکر کرنے والا دل، بلاؤں پر صبر کرنے والا بدن، اور نیک و باوقار شریکِ حیات۔",
      ro: "Chaar cheezein jis ko mil gayein usay duniya aur akhirat ki bhalai mil gayi: sach bolne wali zaban, shukr karne wala dil, balaon par sabr karne wala badan, aur nek o ba-waqar shareek-e-hayat.",
      en: "Whoever is blessed with four things has been granted the best of this world and the Hereafter: a truthful tongue, a grateful heart, a body patient in hardship, and a righteous, supportive spouse."
    },
    tashreeh: {
      ur: "پرسکون اور کامیاب زندگی کے لیے کروڑوں کے خزانوں کی نہیں بلکہ ان چار نعمتوں کی ضرورت ہوتی ہے: زبان کی سچائی، دل کی شکر گزاری، مشکل وقت کی بردباری اور گھر کا نیک ماحول۔",
      ro: "Pur-sukoon aur kamyab zindagi ke liye karoron ke khazanon ki nahi balkay in chaar nematon ki zaroorat hoti hai: zaban ki sachai, dil ki shukr-guzari, mushkil waqt ki burdbari aur ghar ka nek mahol.",
      en: "Lasting happiness depends not on material riches, but on truthfulness, gratitude, resilience in adversity, and peace within one's home."
    },
    tags: [
      { ur: "کامیابی", ro: "Kamyabi", en: "True Success" },
      { ur: "شکر و صبر", ro: "Shukr o Sabr", en: "Gratitude & Patience" }
    ]
  },
  {
    id: "ma-206",
    slug: "khatakar-ko-taana-na-dena-aur-apni-islah-ki-fikr",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 76",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "خطا کار کو طعنہ نہ دینا اور اس کی اصلاح میں مدد کرنا",
      ro: "Khatakar Ko Taana Na Dena Aur Us Ki Islah Mein Madad Karna",
      en: "Never Taunting the Sinner and Helping Them Reform"
    },
    quote: {
      ur: "اگر اپنے کسی بھائی کو لغزش یا گناہ میں مبتلا دیکھو تو اسے طعنہ دے کر شیطان کی مدد نہ کرو، بلکہ اللہ سے اس کی ہدایت و مغفرت کی دعا کرو اور شکر ادا کرو کہ اللہ نے تمہیں اس ابتلا سے محفوظ رکھا۔",
      ro: "Agar apne kisi bhai ko laghzish ya gunah mein mubtala dekho to usay taana de kar shaitan ki madad na karo, balkay Allah se us ki hidayat o maghfirat ki dua karo aur shukr ada karo ke Allah ne tumhein us ibtila se mehfooz rakha.",
      en: "When you see your brother slip into a mistake, do not aid Satan against him by taunting and shaming him; rather, pray for his guidance and forgiveness, and thank God for protecting you from that trial."
    },
    tashreeh: {
      ur: "کسی گرے ہوئے انسان کو طعنے دے کر مزید مایوسی اور بغاوت میں دھکیل دینا نادانی ہے۔ سچا مومن گناہ سے نفرت کرتا ہے مگر گناہگار کے ساتھ ہمدردی رکھ کر اسے واپسی کا راستہ دکھاتا ہے۔",
      ro: "Kisi giray huye insan ko taanay de kar mazeed mayousi aur baghawat mein dhakel dena nadani hai. Sacha momin gunah se nafrat karta hai magar gunahgar ke sath hamdardi rakh kar usay wapsi ka rasta dikhata hai.",
      en: "Shaming someone who has stumbled only pushes them further into despair; compassionate counsel and prayer open the door for sincere recovery."
    },
    tags: [
      { ur: "اصلاح", ro: "Islah", en: "Compassionate Reform" },
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" }
    ]
  },
  {
    id: "ma-207",
    slug: "dil-ka-noor-aur-tareeki-ke-asbab",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 85",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "دل کے نور اور تاریکی کے اسباب",
      ro: "Dil Ke Noor Aur Tareeki Ke Asbab",
      en: "What Illuminates the Heart and What Darkens It"
    },
    quote: {
      ur: "تمہارے دل کا بہترین علاج قرآن اور ذکرِ الٰہی ہے؛ لالچ اور حسد دل کو تاریک کر دیتے ہیں، جبکہ تقویٰ، قناعت اور یقین دل کو نور اور سکون سے بھر دیتے ہیں۔ ہر چیز کی ایک کھیتی ہوتی ہے اور دلوں کی کھیتی حکمت و نصیحت ہے۔",
      ro: "Tumhare dil ka behtareen ilaj Quran aur zikr-e-Ilahi hai; lalach aur hasad dil ko tareek kar dete hain, jabkeh taqwa, qana'at aur yaqeen dil ko noor aur sukoon se bhar dete hain. Har cheez ki aik kheti hoti hai aur dilon ki kheti hikmat o nasihat hai.",
      en: "The finest remedy for the heart is divine remembrance; greed and envy darken the soul, whereas piety, contentment, and firm faith fill the heart with light and tranquility."
    },
    tashreeh: {
      ur: "جس طرح زمین بارش سے سرسبز ہوتی ہے، اسی طرح انسانی دل حکمت، قناعت اور یادِ الٰہی سے زندہ رہتا ہے۔ حسد اور حرص کی آگ دل کی بینائی اور سکون کو جلا کر راکھ کر دیتی ہے۔",
      ro: "Jis tarah zameen barish se sarsabz hoti hai, isi tarah insani dil hikmat, qana'at aur yaad-e-Ilahi se zinda rehta hai. Hasad aur hirs ki aag dil ki beenai aur sukoon ko jala kar raakh kar deti hai.",
      en: "Just as rain revives barren earth, wisdom and contentment nourish the human spirit, while greed and jealousy rob the heart of peace."
    },
    tags: [
      { ur: "نورِ قلب", ro: "Noor-e-Qalb", en: "Spiritual Light" },
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" }
    ]
  },
  {
    id: "ma-208",
    slug: "tangdasti-mein-sakhawat-aur-gusse-mein-sach-bolna",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "تنگدستی میں سخاوت، غصے میں سچ اور طاقت میں معافی",
      ro: "Tangdasti Mein Sakhawat, Gusse Mein Sach Aur Taqat Mein Maafi",
      en: "Generosity in Scarcity, Truth in Anger, and Pardon in Power"
    },
    quote: {
      ur: "سب سے افضل اعمال تین ہیں: تنگدستی کے باوجود سخاوت کرنا، غصے اور رضا دونوں حالتوں میں حق اور سچ بات کہنا، اور بدلہ لینے کی پوری طاقت رکھتے ہوئے معاف کر دینا۔",
      ro: "Sab se afzal aamaal teen hain: tangdasti ke bawajood sakhawat karna, gusse aur raza dono halaton mein haq aur sach baat kehna, aur badla lene ki poori taqat rakhte huye maaf kar dena.",
      en: "The three noblest deeds are: practicing generosity even in times of scarcity, speaking the truth both in anger and in pleasure, and forgiving when one has full power to take revenge."
    },
    tashreeh: {
      ur: "فراخی میں دینا، خوشی میں اچھا بولنا اور کمزوری میں خاموش رہنا آسان ہے؛ لیکن انسان کے کردار کا اصل کمال تب ظاہر ہوتا ہے جب وہ کم وسائل میں بھی بانٹے، غصے میں بھی انصاف نہ چھوڑے اور اختیار ہوتے ہوئے درگزر کرے۔",
      ro: "Farakhi mein dena, khushi mein acha bolna aur kamzori mein khamosh rehna asan hai; lekin insan ke kirdar ka asal kamal tab zahir hota hai jab woh kam wasail mein bhi bantay, gusse mein bhi insaf na chhoray aur ikhtiyar hote huye darguzar kare.",
      en: "True character is tested under pressure: sharing when resources are tight, remaining fair when provoked, and pardoning when holding the upper hand."
    },
    tags: [
      { ur: "اعلیٰ ظرفی", ro: "Aala-Zarfi", en: "Magnanimity" },
      { ur: "حق گوئی", ro: "Haq-Goi", en: "Fairness" }
    ]
  },
  {
    id: "ma-209",
    slug: "teen-sifat-ki-pehchan-teen-mauqon-par-hoti-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 96",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "بردباری، بہادری اور سچی دوستی کی اصل کسوٹی",
      ro: "Burdbari, Bahaduri Aur Sachi Dosti Ki Asal Kasauti",
      en: "The True Test of Forbearance, Courage, and Friendship"
    },
    quote: {
      ur: "تین چیزیں تین موقعوں کے بغیر نہیں پہچانی جاتیں: حلم اور بردباری غصے کے وقت، شجاعت اور بہادری معرکے کے وقت، اور بھائی چارہ و سچی دوستی ضرورت اور حاجت مندی کے وقت۔",
      ro: "Teen cheezein teen mauqon ke baghair nahi pehchani jatein: hilm aur burdbari gusse ke waqt, shuja'at aur bahaduri ma'rakay ke waqt, aur bhai-chara o sachi dosti zaroorat aur hajat-mandi ke waqt.",
      en: "Three qualities are proven only on three occasions: forbearance in the heat of anger, courage in the face of adversity, and true friendship in the hour of need."
    },
    tashreeh: {
      ur: "عام حالات میں ہر کوئی خود کو صابر، بہادر اور مخلص دوست ظاہر کر سکتا ہے، لیکن وقت کی کسوٹی کھرے اور کھوٹے کو الگ کر دیتی ہے۔ سچا دوست وہی ہے جو کڑے وقت میں کام آئے۔",
      ro: "Aam halat mein har koi khud ko sabir, bahadur aur mukhlis dost zahir kar sakta hai, لیکن waqt ki kasauti kharay aur khotay ko alag kar deti hai. Sacha dost wahi hai jo karay waqt mein kaam aaye.",
      en: "Calm days conceal true mettle; real patience is revealed during provocation, real bravery in crisis, and real loyalty when a friend is in distress."
    },
    tags: [
      { ur: "حکمتِ لقمان", ro: "Hikmat-e-Luqman", en: "Luqman's Wisdom" },
      { ur: "سچی دوستی", ro: "Sachi Dosti", en: "True Friendship" }
    ]
  },
  {
    id: "ma-210",
    slug: "do-baatein-yaad-rakhna-aur-do-baatein-bhool-jana",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 97",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "دو باتیں ہمیشہ یاد رکھو اور دو باتیں بھول جاؤ",
      ro: "Do Baatein Hamesha Yaad Rakho Aur Do Baatein Bhool Jao",
      en: "Two Things to Always Remember and Two to Always Forget"
    },
    quote: {
      ur: "اے بیٹے! زندگی میں دو باتیں ہمیشہ یاد رکھنا اور دو باتیں بالکل بھول جانا؛ جو یاد رکھنے کی ہیں وہ اللہ تعالیٰ کی عظمت اور موت کی حاضری ہیں، اور جو بھول جانے کی ہیں وہ تیرا کسی کے ساتھ نیکی کرنا اور کسی کا تیرے ساتھ برائی کرنا ہے۔",
      ro: "Aye betay! Zindagi mein do baatein hamesha yaad rakhna aur do baatein bilkul bhool jana; jo yaad rakhne ki hain woh Allah Ta'ala ki azmat aur maut ki haziri hain, aur jo bhool jane ki hain woh tera kisi ke sath neki karna aur kisi ka tere sath burai karna hai.",
      en: "O my son! Always remember two things and completely forget two things: remember the Majesty of God and the certainty of death; and forget the good you have done to others and the wrong others have done to you."
    },
    tashreeh: {
      ur: "یہ مختصر وصیت تمام اخلاقی کتابوں کا خلاصہ ہے: اللہ اور موت کو یاد رکھنے سے انسان گناہ سے بچتا ہے، اپنی نیکی بھول جانے سے اخلاص بچتا ہے، اور دوسروں کی زیادتی بھلا دینے سے دل کو لازوال سکون مل جاتا ہے۔",
      ro: "Yeh mukhtasar wasiyat tamam akhlaqi kitabon ka khulasa hai: Allah aur maut ko yaad rakhne se insan gunah se bachta hai, apni neki bhool jane se ikhlas bachta hai, aur doosron ki ziyadati bhula dene se dil ko la-zawal sukoon mil jata hai.",
      en: "This timeless counsel distills all moral philosophy: remembering God and mortality keeps us righteous, forgetting our favors preserves sincerity, and letting go of grievances grants inner peace."
    },
    tags: [
      { ur: "نصیحت", ro: "Nasihat", en: "Timeless Advice" },
      { ur: "سکونِ قلب", ro: "Sukoon-e-Qalb", en: "Inner Peace" }
    ]
  }
];

export const batch15Quotes: QuoteItem[] = [
  {
    id: "ma-211",
    slug: "bila-tahqeeq-khabar-phailane-se-parhez",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hujurat (49:6) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بغیر تحقیق کے سنی سنائی خبر پھیلانے سے پرہیز کا حکم",
      ro: "Baghair Tahqeeq Ke Suni Sunai Khabar Phailane Se Parhez Ka Hukm",
      en: "Verifying News Before Acting or Spreading It"
    },
    quote: {
      ur: "اے ایمان والو! اگر کوئی غیر معتبر شخص تمہارے پاس کوئی خبر لے کر آئے تو اس کی خوب تحقیق کر لیا کرو، کہیں ایسا نہ ہو کہ تم نادانی میں کسی قوم کو نقصان پہنچا بیٹھو اور پھر اپنے کیے پر پشیمان ہوتے رہو۔",
      ro: "Aye eman walo! Agar koi ghair-mo'tabar shakhs tumhare paas koi khabar le kar aaye to us ki khoob tahqeeq kar liya karo, kahin aisa na ho ke tum nadani mein kisi qoum ko nuqsan pohancha baitho aur phir apne kiye par pasheman hote raho.",
      en: "O believers! If an unreliable person brings you any news, verify it thoroughly, lest you harm people out of ignorance and then become regretful for what you have done."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الحجرات کا یہ زریں اصول آج کے سوشل میڈیا اور تیز رفتار معلومات کے دور میں سب سے زیادہ اہمیت رکھتا ہے۔ سنی سنائی بات پر یقین کر کے کسی کے خلاف رائے قائم کر لینا یا افواہ آگے پھیلا دینا، بے گناہ انسانوں کی عزت اور تعلقات کو تباہ کر دیتا ہے۔ آج کا عملی سبق یہ ہے کہ جب تک کسی بات کی سچائی کی مکمل تصدیق نہ ہو جائے، اسے ہرگز آگے بیان نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Hujurat ka yeh zareen usool aaj ke social media aur tez-raftar maloomat ke daur mein sab se zyada ahmiyat rakhta hai. Suni sunai baat par yaqeen kar ke kisi ke khilaf raaye qayam kar lena ya afwah aagay phaila dena, be-gunah insanon ki izzat aur talluqat ko tabah kar deta hai. Aaj ka amli sabaq yeh hai ke jab tak kisi baat ki sachai ki mukammal tasdeeq na ho jaye, usay hargiz aagay bayan na karein.",
      en: "Context & Practical Lesson: In an era of instant messaging and rumors, Surah Al-Hujurat establishes the golden rule of information ethics: never forward or act upon unverified claims lest you destroy innocent reputations."
    },
    tags: [
      { ur: "تحقیق و تصدیق", ro: "Tahqeeq o Tasdeeq", en: "Verification" },
      { ur: "ذمہ داری", ro: "Zimmedari", en: "Responsibility" }
    ]
  },
  {
    id: "ma-212",
    slug: "bad-gumani-tajassus-aur-gheebat-ki-mumaniat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hujurat (49:12) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بہت زیادہ گمان کرنے، ٹوہ لگانے اور غیبت سے اجتناب",
      ro: "Bohot Zyada Guman Karne, Toh Lagane Aur Gheebat Se Ijtinab",
      en: "Avoiding Suspicion, Spying, and Backbiting"
    },
    quote: {
      ur: "اے ایمان والو! بہت سے گمانوں سے بچا کرو کیونکہ بعض گمان صریح گناہ ہوتے ہیں، اور کسی کے پوشیدہ عیبوں کی ٹوہ نہ لگایا کرو، اور نہ تم میں سے کوئی کسی کی پیٹھ پیچھے برائی (غیبت) کرے۔",
      ro: "Aye eman walo! Bohot se gumanon se bacha karo kyunkeh baaz guman sareeh gunah hote hain, aur kisi ke posheeda aibon ki toh na lagaya karo, aur na tum mein se koi kisi ki peeth peechay burai (gheebat) kare.",
      en: "O believers! Avoid much negative assumption, for indeed some assumption is a sin; and do not spy on one another, nor backbite one another behind their backs."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: معاشرتی بگاڑ کی جڑ تین بیماریاں ہیں: پہلے دل میں کسی کے بارے میں بدگمانی پیدا ہوتی ہے، پھر انسان اس کی جاسوسی اور ٹوہ (تجسس) میں لگتا ہے، اور آخر میں محفلوں میں اس کی غیبت شروع کر دیتا ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کی بات کا اچھا پہلو نکالیں، لوگوں کی ذاتی زندگی میں جھانکنا چھوڑ دیں اور اپنی زبان کو پیٹھ پیچھے برائی کرنے سے محفوظ رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Maasharati bigaar ki jarr teen bimariyan hain: pehle dil mein kisi ke baray mein bad-gumani paida hoti hai, phir insan us ki jasoosi aur toh (tajassus) mein lagta hai, aur aakhir mein mehfilon mein us ki gheebat shuru kar deta hai. Aaj ka amli sabaq yeh hai ke doosron ki baat ka acha pehlu nikalein, logon ki zaati zindagi mein jhankna chhor dein aur apni zaban ko peeth peechay burai karne se mehfooz rakhein.",
      en: "Context & Practical Lesson: Suspicion breeds spying, and spying leads to backbiting. Protecting your heart from negative assumptions and respecting others' privacy keeps both soul and society at peace."
    },
    tags: [
      { ur: "حسنِ ظن", ro: "Husn-e-Zan", en: "Good Assumption" },
      { ur: "ترکِ غیبت", ro: "Tark-e-Gheebat", en: "Avoiding Backbiting" }
    ]
  },
  {
    id: "ma-213",
    slug: "insani-barabari-aur-izzat-ka-miyar-sirf-taqwa",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hujurat (49:13) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نسل و قبیلے کے بجائے عزت کا حقیقی معیار صرف تقویٰ ہے",
      ro: "Nasal o Qabeelay Ke Bajaye Izzat Ka Haqeeqi Miyar Sirf Taqwa Hai",
      en: "True Honor in the Sight of God Rests Solely on Piety"
    },
    quote: {
      ur: "اے لوگو! ہم نے تم سب کو ایک مرد اور ایک عورت سے پیدا کیا ہے اور تمہاری قومیں اور قبیلے اس لیے بنائے ہیں تاکہ تم ایک دوسرے کو پہچان سکو؛ بے شک اللہ کے نزدیک تم میں سب سے زیادہ عزت والا وہ ہے جو تم میں سب سے زیادہ پرہیزگار (متقی) ہے۔",
      ro: "Aye logo! Hum ne tum sab ko aik mard aur aik aurat se paida kiya hai aur tumhari qoumein aur qabeelay is liye banaye hain taake tum aik doosre ko pehchan sako; be-shak Allah ke nazdeek tum mein sab se zyada izzat wala woh hai jo tum mein sab se zyada parhezgar (muttaqi) hai.",
      en: "O mankind! Indeed, We created you from a single male and female, and made you into nations and tribes so that you may know one another; surely the most noble of you in the sight of Allah is the most righteous of you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ذات پات، رنگ، زبان اور قبیلے صرف باہمی تعارف اور پہچان کے لیے ہیں، ان کی بنیاد پر فخر کرنا یا کسی کو کم تر سمجھنا جہالت ہے۔ رب کی بارگاہ میں انسان کی قیمت اس کے خاندان یا دولت سے نہیں بلکہ اس کے پاکیزہ کردار اور تقویٰ سے لگتی ہے۔ آج کا عملی سبق یہ ہے کہ ہر انسان کے ساتھ برابری اور احترام کا برتاؤ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Zaat-paat, rang, zaban aur qabeelay sirf bahami taaruf aur pehchan ke liye hain, un ki bunyad par fakhar karna ya kisi ko kam-tar samajhna jahalat hai. Rab ki bargah mein insan ki qeemat us ke khandan ya daulat se nahi balkay us ke pakeeza kirdar aur taqwa se lagti hai. Aaj ka amli sabaq yeh hai ke har insan ke sath barabari aur ehtiram ka bartao karein.",
      en: "Context & Practical Lesson: Lineage, wealth, and ethnicity exist only for mutual recognition, never for superiority. Moral character and God-consciousness are the sole measures of human worth."
    },
    tags: [
      { ur: "مساواتِ انسانی", ro: "Masawat-e-Insani", en: "Human Equality" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Righteousness" }
    ]
  },
  {
    id: "ma-214",
    slug: "bhookay-ko-khana-khilana-aur-mareez-ki-ayadat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بھوکے کو کھلانا، مریض کی عیادت اور مظلوم کی رہائی",
      ro: "Bhookay Ko Khilana, Mareez Ki Ayadat Aur Mazloom Ki Rihai",
      en: "Feeding the Hungry, Visiting the Sick, and Freeing the Captive"
    },
    quote: {
      ur: "بھوکے کو کھانا کھلاؤ، بیمار کی عیادت اور مزاج پرسی کرو، اور مصیبت میں گرفتار قیدی کو خلاصی دلاؤ؛ جو شخص کسی مریض کی عیادت کو جاتا ہے وہ واپسی تک جنت کے باغوں میں چلتا رہتا ہے۔",
      ro: "Bhookay ko khana khilao, bimar ki ayadat aur mizaj-pursi karo, aur musibat mein giriftar qaidi ko khalasi dilao; jo shakhs kisi mareez ki ayadat ko jata hai woh wapsi tak Jannat ke baghon mein chalta rehta hai.",
      en: "Feed the hungry, visit the sick, and free the captive in distress; whoever goes to visit an ailing person walks amidst the gardens of Paradise until they return."
    },
    tashreeh: {
      ur: "انسانیت کی خدمت ہی رب کے قرب کا سب سے سیدھا راستہ ہے۔ کسی بھوکے کے پیٹ کی آگ بجھانا اور بیماری میں پڑے شخص کے پاس جا کر اسے تسلی دینا زمین پر جنت کمانے کے مترادف ہے۔",
      ro: "Insaniyat ki khidmat hi Rab ke qurb ka sab se seedha rasta hai. Kisi bhookay ke pait ki aag bujhana aur bimari mein paray shakhs ke paas ja kar usay tasalli dena zameen par Jannat kamane ke mutradif hai.",
      en: "Serving suffering humanity is the most direct path to divine grace; comforting the sick and feeding the hungry surround a believer with heavenly mercy."
    },
    tags: [
      { ur: "عیادت", ro: "Ayadat", en: "Visiting the Sick" },
      { ur: "خدمتِ خلق", ro: "Khidmat-e-Khalq", en: "Humanitarian Service" }
    ]
  },
  {
    id: "ma-215",
    slug: "qarz-se-bachna-raat-ka-gham-aur-din-ki-zillat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 26",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "قرض کے بوجھ سے پرہیز اور سادہ معیشت کا سکون",
      ro: "Qarz Ke Bojh Se Parhez Aur Sada Maeeshat Ka Sukoon",
      en: "Avoiding Debt and the Peace of Living Within One's Means"
    },
    quote: {
      ur: "جہاں تک ممکن ہو خود کو قرض کے بوجھ سے محفوظ رکھو، کیونکہ قرض رات کا غم اور دن کی ذلت ہے؛ اور جب انسان مقروض ہو جاتا ہے تو بات کرتا ہے تو جھوٹ بولنے لگتا ہے اور وعدہ کرتا ہے تو خلاف ورزی کر بیٹھتا ہے۔",
      ro: "Jahan tak mumkin ho khud ko qarz ke bojh se mehfooz rakho, kyunkeh qarz raat ka gham aur din ki zillat hai; aur jab insan maqrooz ho jata hai to baat karta hai to jhoot bolne lagta hai aur wada karta hai to khilaf-warzi kar baithta hai.",
      en: "Guard yourselves as much as possible against falling into debt, for debt is anxiety by night and humiliation by day; when a person is burdened by debt, they are tempted to make excuses and break promises."
    },
    tashreeh: {
      ur: "دکھاوے اور فضول خرچی کے لیے لیا گیا قرض انسان کی راتوں کی نیند اڑا دیتا ہے اور دن میں قرض خواہوں کے سامنے شرمندہ کرتا ہے۔ اپنی چادر دیکھ کر پاؤں پھیلانا عزت اور اخلاق دونوں کی حفاظت کرتا ہے۔",
      ro: "Dikhaway aur fuzool-kharchi ke liye liya gaya qarz insan ki raaton ki neend ura deta hai aur din mein qarz-khwahon ke samne sharminda karta hai. Apni chadar dekh kar paon phailana izzat aur akhlaq dono ki hifazat karta hai.",
      en: "Unnecessary debt robs a person of sleep and erodes moral character; living modestly within one's means preserves both peace of mind and personal honor."
    },
    tags: [
      { ur: "سادہ زندگی", ro: "Sada Zindagi", en: "Simple Living" },
      { ur: "قناعت", ro: "Qana'at", en: "Financial Prudence" }
    ]
  },
  {
    id: "ma-216",
    slug: "bhai-ki-peeth-peechay-izzat-ka-difa-karna",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 28",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "پیٹھ پیچھے اپنے بھائی کی عزت و آبرو کی حفاظت",
      ro: "Peeth Peechay Apne Bhai Ki Izzat-o-Aabroo Ki Hifazat",
      en: "Defending a Brother's Honor in His Absence"
    },
    quote: {
      ur: "جو شخص اپنے بھائی کی غیر حاضری میں اس کی عزت و آبرو سے تہمت اور برائی کو ہٹاتا ہے، اللہ تعالیٰ پر حق ہے کہ قیامت کے دن اس کو دوزخ کی آگ سے محفوظ رکھے۔",
      ro: "Jo shakhs apne bhai ki ghair-haziri mein us ki izzat-o-aabroo se tohmat aur burai ko hatata hai, Allah Ta'ala par haq hai ke qayamat ke din us ko dozakh ki aag se mehfooz rakhe.",
      en: "Whoever defends the honor and reputation of their brother in his absence, Allah takes it upon Himself to shield their face from the Fire on the Day of Resurrection."
    },
    tashreeh: {
      ur: "سچی دوستی اور ایمانداری کا تقاضا یہ ہے کہ اگر کسی محفل میں آپ کے غیر موجود ساتھی کی غیبت یا تہمت لگائی جا رہی ہو تو خاموش تماشائی بننے کے بجائے اس کا دفاع کیا جائے۔",
      ro: "Sachi dosti aur emandari ka taqaza yeh hai ke agar kisi mehfil mein aap ke ghair-maujood sathi ki gheebat ya tohmat lagai ja rahi ho to khamosh tamashayi banne ke bajaye us ka difa kiya jaye.",
      en: "True loyalty shines when someone is not in the room: speaking up to silence slander against an absent friend earns divine protection."
    },
    tags: [
      { ur: "حفاظتِ آبرو", ro: "Hifazat-e-Aabroo", en: "Defending Honor" },
      { ur: "وفاداری", ro: "Wafadari", en: "Loyalty" }
    ]
  },
  {
    id: "ma-217",
    slug: "bachon-par-shafqat-aur-unhein-salam-karna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 38",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "بچوں پر شفقت اور انہیں سلام میں پہل کرنے کا نبوی اسوہ",
      ro: "Bachon Par Shafqat Aur Unhein Salam Mein Pehal Karne Ka Nabawi Uswah",
      en: "Prophetic Affection for Children and Greeting Them First"
    },
    quote: {
      ur: "حضور اکرم ﷺ بچوں کے پاس سے گزرتے تو ان پر شفقت فرماتے اور خود انہیں سلام میں پہل فرماتے؛ کسی بچے کو روتا دیکھتے تو رک کر اس کی دلجوئی فرماتے، اور نماز میں کسی بچے کے رونے کی آواز آتی تو ماں کی تکلیف کے خیال سے نماز مختصر فرما دیتے۔",
      ro: "Huzoor Akram ﷺ bachon ke paas se guzarte to un par shafqat farmate aur khud unhein salam mein pehal farmate; kisi bachay ko rota dekhte to ruk kar us ki dil-joi farmate, aur namaz mein kisi bachay ke rone ki aawaz aati to maa ki takleef ke khayal se namaz mukhtasar farma dete.",
      en: "Whenever the Prophet ﷺ passed by children, he would smile and greet them first with peace; he comforted crying children with tender affection, and even shortened congregational prayers upon hearing a child weep so the mother would not feel distressed."
    },
    tashreeh: {
      ur: "بچوں کو سلام کرنا اور ان کے سر پر پیار سے ہاتھ پھیرنا ان کے اندر خود اعتمادی اور ادب پیدا کرتا ہے۔ بڑوں کا کام بچوں پر رعب جمانا نہیں بلکہ محبت سے ان کی شخصیت نکھارنا ہے۔",
      ro: "Bachon ko salam karna aur un ke sar par pyar se hath pherna un ke andar khud-itmadi aur adab paida karta hai. Baron ka kaam bachon par roab jamana nahi balkay mohabbat se un ki shakhsiyat nikharna hai.",
      en: "Greeting children with respect and treating them with warmth nurtures their self-esteem and teaches them refined manners by example."
    },
    tags: [
      { ur: "شفقتِ اطفال", ro: "Shafqat-e-Atfal", en: "Kindness to Children" },
      { ur: "تواضع", ro: "Tawazu", en: "Humility" }
    ]
  },
  {
    id: "ma-218",
    slug: "majlis-mein-imtiyaz-na-rakhna-aur-ghareebon-ki-diljoi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 41",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "مجلس میں مساوات اور غرباء و مساکین کی دلجوئی",
      ro: "Majlis Mein Masawat Aur Ghuraba o Masakeen Ki Dil-Joi",
      en: "Equality in Gatherings and Honouring the Poor"
    },
    quote: {
      ur: "آپ ﷺ صحابہ کرامؓ میں بغیر کسی امتیازی نشان کے بیٹھتے اور مجلس میں جہاں جگہ خالی پاتے وہیں تشریف فرما ہو جاتے؛ آپ ﷺ مسکینوں کے ساتھ اٹھتے بیٹھتے، غریبوں کی عیادت کو تشریف لے جاتے اور کسی فقیر کو اس کے افلاس کے سبب حقیر نہ جانتے۔",
      ro: "Aap ﷺ Sahaba Kiram (R.A) mein baghair kisi imtiyazi nishan ke baithte aur majlis mein jahan jagah khali pate wahin tashreef-farma ho jate; Aap ﷺ miskeenon ke sath uthte baithte, ghareebon ki ayadat ko tashreef le jate aur kisi faqeer ko us ke iflas ke sabab haqeer na jante.",
      en: "The Prophet ﷺ sat among his companions without any special throne or distinction, taking whatever seat was available at the edge of a gathering; he kept company with the poor, visited the sick among the humble, and never looked down upon anyone for their poverty."
    },
    tashreeh: {
      ur: "سچی عظمت وی آئی پی کلچر اور نمایاں کرسیوں کی محتاج نہیں ہوتی۔ غریب اور کمزور انسان کے پاس بیٹھ کر اس کو عزت کا احساس دلانا سب سے بلند اخلاقی درجہ ہے۔",
      ro: "Sachi azmat VIP culture aur numayan kursiyon ki mohtaj nahi hoti. Ghareeb aur kamzor insan ke paas baith kar us ko izzat ka ehsas dilana sab se buland akhlaqi darja hai.",
      en: "True leadership rejects elitism and special privilege, finding honor in sitting beside the humble and treating every human being with equal dignity."
    },
    tags: [
      { ur: "مساوات", ro: "Masawat", en: "Social Equality" },
      { ur: "غریب نوازی", ro: "Ghareeb-Nawazi", en: "Honoring the Poor" }
    ]
  },
  {
    id: "ma-219",
    slug: "panch-andheray-aur-un-ke-panch-roshan-charagh",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "زندگی کے پانچ اندھیرے اور ان کے پانچ روشن چراغ",
      ro: "Zindagi Ke Panch Andheray Aur Un Ke Panch Roshan Charagh",
      en: "Five Spiritual Darknesses and Their Five Guiding Lamps"
    },
    quote: {
      ur: "اندھیرے پانچ ہیں اور ان کے چراغ بھی پانچ ہیں: دنیا کی محبت اندھیرا ہے اور اس کا چراغ پرہیزگاری ہے؛ گناہ اندھیرا ہے اور اس کا چراغ توبہ ہے؛ قبر اندھیرا ہے اور اس کا چراغ کلمۂ طیبہ ہے؛ آخرت اندھیرا ہے اور اس کا چراغ نیک عمل ہے؛ اور پل صراط اندھیرا ہے اور اس کا چراغ یقین ہے۔",
      ro: "Andheray panch hain aur un ke charagh bhi panch hain: duniya ki mohabbat andhera hai aur us ka charagh parhezgari hai; gunah andhera hai aur us ka charagh tauba hai; qabar andhera hai aur us ka charagh Kalma-e-Tayyiba hai; akhirat andhera hai aur us ka charagh nek amal hai; aur Pul-Sirat andhera hai aur us ka charagh yaqeen hai.",
      en: "There are five darknesses and five lamps to illuminate them: love of the world is darkness and its lamp is piety; sin is darkness and its lamp is repentance; the grave is darkness and its lamp is faith; the Hereafter is darkness and its lamp is righteous action; and the final bridge is darkness and its lamp is certainty."
    },
    tashreeh: {
      ur: "یہ حکیمانہ قول انسان کے پورے سفرِ حیات کا نقشہ کھینچ دیتا ہے کہ دنیا کی غفلت سے نکلنے کے لیے تقویٰ، گناہ کے داغ دھونے کے لیے توبہ، اور آخرت کی منزل آسان کرنے کے لیے عملِ صالح اور کامل یقین ہی اصل روشنی ہیں۔",
      ro: "Yeh hakeemana qoul insan ke poore safar-e-hayat ka naqsha kheench deta hai ke duniya ki ghaflat se nikalne ke liye taqwa, gunah ke daagh dhone ke liye tauba, aur akhirat ki manzil asan karne ke liye amal-e-saleh aur kamil yaqeen hi asal roshni hain.",
      en: "Every stage of human existence faces a spiritual shadow that can only be dispelled by its corresponding light: piety, repentance, faith, good deeds, and unwavering certainty."
    },
    tags: [
      { ur: "نورِ ہدایت", ro: "Noor-e-Hidayat", en: "Spiritual Light" },
      { ur: "یقین", ro: "Yaqeen", en: "Certainty" }
    ]
  },
  {
    id: "ma-220",
    slug: "tawazu-ikhtiyar-karna-aur-ghuraba-ki-suhbat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 76",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "عاجزی سے رفعت اور مساکین کی مجلس کی برکت",
      ro: "Aajizi Se Rif'at Aur Masakeen Ki Majlis Ki Barkat",
      en: "Elevation Through Humility and Sitting with the Poor"
    },
    quote: {
      ur: "جو شخص حق کے لیے عاجزی اور تواضع اختیار کرتا ہے، اللہ تعالیٰ اس کی حکمت اور مرتبے کو بلند فرما دیتا ہے؛ مسکینوں اور غریبوں کے پاس بیٹھا کرو کہ اس سے دل میں نرمی اور شکر کا جذبہ پیدا ہوتا ہے۔",
      ro: "Jo shakhs haq ke liye aajizi aur tawazu ikhtiyar karta hai, Allah Ta'ala us ki hikmat aur martabay ko buland farma deta hai; miskeenon aur ghareebon ke paas baitha karo ke is se dil mein narmi aur shukr ka jazba paida hota hai.",
      en: "Whoever humbles themselves for the sake of truth, God elevates their wisdom and station; sit often with the poor and humble, for their company softens the heart and awakens gratitude."
    },
    tashreeh: {
      ur: "صرف امیروں اور صاحبِ اقتدار لوگوں کی محفلوں میں بیٹھنے سے انسان میں حرص اور تکبر پیدا ہوتا ہے، جبکہ سادہ اور غریب لوگوں کے درمیان بیٹھنے سے عاجزی اور اپنی نعمتوں کی قدر نصیب ہوتی ہے۔",
      ro: "Sirf ameeron aur sahib-e-iqtidar logon ki mehfilon mein baithne se insan mein hirs aur takabbur paida hota hai, jabkeh sada aur ghareeb logon ke darmiyan baithne se aajizi aur apni nematon ki qadr naseeb hoti hai.",
      en: "Chasing elite circles breeds worldly greed, whereas spending time with humble people keeps a person grounded, empathetic, and thankful."
    },
    tags: [
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" },
      { ur: "رقتِ قلب", ro: "Riqqat-e-Qalb", en: "Softness of Heart" }
    ]
  },
  {
    id: "ma-221",
    slug: "duniya-ka-gham-tareeki-aur-akhirat-ka-gham-noor",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 86",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "دنیا کے غم اور آخرت کی فکر کا دل پر اثر",
      ro: "Duniya Ke Gham Aur Akhirat Ki Fikr Ka Dil Par Asar",
      en: "Worldly Anxiety Versus Concern for the Hereafter"
    },
    quote: {
      ur: "دنیا کا غم دل میں تاریکی پیدا کرتا ہے اور آخرت کا غم دل میں نور پیدا کرتا ہے؛ جو شخص دنیا کی قید سے نکل کر تقویٰ اختیار کر لیتا ہے، اللہ تعالیٰ اسے مخلوق کی محتاجی سے بے نیاز کر دیتا ہے۔",
      ro: "Duniya ka gham dil mein tareeki paida karta hai aur akhirat ka gham dil mein noor paida karta hai; jo shakhs duniya ki qaid se nikal kar taqwa ikhtiyar kar leta hai, Allah Ta'ala usay makhlooq ki mohtaji se be-niyaz kar deta hai.",
      en: "Grieving over worldly losses darkens the heart, whereas concern for the Hereafter fills the heart with light; whoever frees themselves from worldly obsession through piety is granted independence from people."
    },
    tashreeh: {
      ur: "جب انسان ہر وقت صرف دنیاوی نفع نقصان کے غم میں ڈوبا رہتا ہے تو اس کا دل تنگ اور بے سکون ہو جاتا ہے، لیکن جب اس کا اصل مقصد اپنی عاقبت سنوارنا بن جائے تو دنیا کی مشکلات اس کی نظر میں ہلکی ہو جاتی ہیں۔",
      ro: "Jab insan har waqt sirf dunyawi nafa-nuqsan ke gham mein dooba rehta hai to us ka dil tang aur be-sukoon ho jata hai, lekin jab us ka asal maqsad apni aaqibat sanwarna ban jaye to duniya ki mushkilat us ki nazar mein halki ho jati hain.",
      en: "Obsessing over material setbacks drains the spirit, while focusing on eternal accountability brings clarity, resilience, and inner freedom."
    },
    tags: [
      { ur: "فکرِ آخرت", ro: "Fikr-e-Akhirat", en: "Eternal Focus" },
      { ur: "بے نیازی", ro: "Be-Niyazi", en: "Spiritual Freedom" }
    ]
  },
  {
    id: "ma-222",
    slug: "fursat-ka-mauqa-badal-ki-tarah-guzar-jata-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 93",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "فرصت کے لمحات اور نیکی کے مواقع کو غنیمت جاننا",
      ro: "Fursat Ke Lamhat Aur Neki Ke Mawaqe Ko Ghaneemat Janna",
      en: "Seizing Fleeting Opportunities for Good"
    },
    quote: {
      ur: "فرصت کا موقع بادل کی طرح تیزی سے گزر جاتا ہے، اس لیے جب بھلائی اور نیکی کے مواقع میسر آئیں تو انہیں غنیمت جان کر فوراً حاصل کر لو؛ اور سستی و کاہلی سے بچو کیونکہ سست انسان اپنا حق بھی کھو بیٹھتا ہے۔",
      ro: "Fursat ka mauqa badal ki tarah tezi se guzar jata hai, is liye jab bhalai aur neki ke mawaqe muyassar aayein to unhein ghaneemat jaan kar foran hasil kar lo; aur susti o kahili se bacho kyunkeh sust insan apna haq bhi kho baithta hai.",
      en: "Opportunity passes as swiftly as a cloud in the sky, so seize every chance to do good as soon as it appears; and beware of laziness, for the sluggish person forfeits even their own rightful share."
    },
    tashreeh: {
      ur: "زندگی میں کسی کی مدد کرنے، علم سیکھنے یا کوئی نیک کام کر گزرنے کا موقع ہمیشہ برقرار نہیں رہتا۔ جو انسان سستی میں وقت گنوا دیتا ہے اس کے ہاتھ صرف پچھتاوا رہ جاتا ہے۔",
      ro: "Zindagi mein kisi ki madad karne, ilm seekhne ya koi nek kaam kar guzarne ka mauqa hamesha barqarar nahi rehta. Jo insan susti mein waqt ganwa deta hai us ke hath sirf pachtawa reh jata hai.",
      en: "Moments of capability and opportunity are transient; acting promptly when a door of goodness opens separates the wise from the regretful."
    },
    tags: [
      { ur: "غنیمتِ وقت", ro: "Ghaneemat-e-Waqt", en: "Seizing Opportunity" },
      { ur: "مستعدی", ro: "Mustaidi", en: "Proactiveness" }
    ]
  },
  {
    id: "ma-223",
    slug: "agar-kalam-chandi-hai-to-khamoshi-sona-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 98",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "خاموشی کا سونا اور علماء و حکماء کی صحبت",
      ro: "Khamoshi Ka Sona Aur Ulama o Hukama Ki Suhbat",
      en: "Silence as Gold and the Company of the Wise"
    },
    quote: {
      ur: "اے بیٹے! میں نے بولنے پر بارہا ندامت اٹھائی ہے لیکن خاموش رہنے پر کبھی پشیمان نہیں ہوا؛ اگر کلام چاندی ہے تو موقع کی خاموشی سونا ہے۔ علماء کی صحبت میں زانوئے ادب تہہ کر، کیونکہ اللہ حکمت کے نور سے مردہ دلوں کو زندہ کرتا ہے۔",
      ro: "Aye betay! Main ne bolne par barha nadamat uthai hai lekin khamosh rehne par kabhi pasheman nahi huwa; agar kalam chandi hai to mauqa ki khamoshi sona hai. Ulama ki suhbat mein zanoo-e-adab teh kar, kyunkeh Allah hikmat ke noor se murda dilon ko zinda karta hai.",
      en: "O my son! I have often regretted speaking, yet I have never regretted remaining silent; if speech is silver, timely silence is gold. Sit humbly in the company of wise scholars, for God revives hearts with the light of wisdom just as He revives the earth with rain."
    },
    tashreeh: {
      ur: "بے محل بولنے سے خاموش رہنا ہزار درجہ بہتر ہے کیونکہ خاموشی انسان کے وقار کی حفاظت کرتی ہے، اور اہلِ علم کی صحبت انسان کی فکر کو جلا بخشتی ہے۔",
      ro: "Be-mahal bolne se khamosh rehna hazar darja behtar hai kyunkeh khamoshi insan ke waqar ki hifazat karti hai, aur ahl-e-ilm ki suhbat insan ki fikr ko jila bakhshti hai.",
      en: "Restraining the tongue prevents countless regrets, and sitting with people of deep knowledge nourishes the mind and awakens the soul."
    },
    tags: [
      { ur: "حکمتِ لقمان", ro: "Hikmat-e-Luqman", en: "Luqman's Wisdom" },
      { ur: "صحبتِ علماء", ro: "Suhbat-e-Ulama", en: "Company of Scholars" }
    ]
  },
  {
    id: "ma-224",
    slug: "aafiyat-chhupi-badshahat-aur-qanaat-lazawal-khazana",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 104",
    author: {
      ur: "اقوالِ انبیاء و حکماء",
      ro: "Aqwal-e-Ambiya o Hukama",
      en: "Sayings of Prophets & Sages"
    },
    title: {
      ur: "تندرستی کی بادشاہت اور قناعت کا لازوال خزانہ",
      ro: "Tandrusti Ki Badshahat Aur Qana'at Ka La-Zawal Khazana",
      en: "Health as a Hidden Kingdom and Contentment as Treasure"
    },
    quote: {
      ur: "تندرستی اور عافیت ایک چھپی ہوئی بادشاہت ہے جس کی قدر بیمار ہی جانتا ہے، اور قناعت ایک ایسا خزانہ ہے جو کبھی ختم نہیں ہوتا؛ جو شخص تھوڑے رزق پر راضی نہ ہوا وہ بہت سے مال سے بھی سیر نہیں ہو سکتا۔",
      ro: "Tandrusti aur aafiyat aik chhupi hui badshahat hai jis ki qadr bimar hi janta hai, aur qana'at aik aisa khazana hai jo kabhi khatam nahi hota; jo shakhs thoray rizq par raazi na huwa woh bohot se maal se bhi sair nahi ho sakta.",
      en: "Good health and safety are an invisible crown whose true worth only the sick understand, and contentment is a treasure that never runs dry; whoever is not satisfied with modest provision will never be satisfied with abundance."
    },
    tashreeh: {
      ur: "انسان اکثر صحت اور امن کی نعمت کو معمولی سمجھ کر ناشکری کرتا ہے، حالانکہ جس کو تندرستی اور دل کی قناعت مل گئی اسے دنیا کی سب سے بڑی سلطنت مل گئی۔",
      ro: "Insan aksar sehat aur aman ki nemat ko mamooli samajh kar nashukri karta hai, halankeh jis ko tandrusti aur dil ki qana'at mil gayi usay duniya ki sab se badi saltanat mil gayi.",
      en: "Physical well-being and a grateful, contented heart surpass all material empires in value, bringing peace that no amount of gold can buy."
    },
    tags: [
      { ur: "تندرستی", ro: "Tandrusti", en: "Good Health" },
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" }
    ]
  },
  {
    id: "ma-225",
    slug: "sacha-dost-aib-dhanpta-hai-aur-neki-par-ubharta-hai",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 112",
    author: {
      ur: "اقوالِ بزرگان و حکماء",
      ro: "Aqwal-e-Buzurgan o Hukama",
      en: "Wisdom of the Righteous"
    },
    title: {
      ur: "مخلص اور باوفا دوست کی اصل علامات",
      ro: "Mukhlis Aur Ba-Wafa Dost Ki Asal Alamaat",
      en: "The True Signs of a Sincere and Loyal Friend"
    },
    quote: {
      ur: "سچا دوست وہ ہے جو تیری موجودگی میں تجھے نیکی کی یاد دہانی کرائے، تیری غیر حاضری میں تیرے عیب ڈھانپے، تیری خطا کو بھول جائے اور جب تجھ پر زمانے کی تنگی آئے تو اپنا مال اور جان تیرے لیے حاضر کر دے۔",
      ro: "Sacha dost woh hai jo teri maujoodgi mein tujhe neki ki yaad-dihani karaye, teri ghair-haziri mein tere aib dhanpay, teri khata ko bhool jaye aur jab tujh par zamane ki tangi aaye to apna maal aur jaan tere liye hazir kar de.",
      en: "A true friend is one who reminds you of goodness when you are together, conceals your faults when you are absent, overlooks your slips, and stands by you wholeheartedly when times grow hard."
    },
    tashreeh: {
      ur: "مطلب کے ساتھی خوشحالی میں گرد جمع ہوتے ہیں اور مصیبت میں کنارہ کر جاتے ہیں، جبکہ مخلص دوست آپ کے کردار کا محافظ ہوتا ہے اور تنگی و فراخی میں یکساں وفا نبھاتا ہے۔",
      ro: "Matlab ke sathi khushhali mein gird jama hote hain aur musibat mein kinara kar jate hain, jabkeh mukhlis dost aap ke kirdar ka mohafiz hota hai aur tangi o farakhi mein yaksan wafa nibhata hai.",
      en: "Fair-weather companions vanish in adversity, whereas a sincere friend guards your dignity in private and stands firm beside you in hardship."
    },
    tags: [
      { ur: "اخلاصِ دوستی", ro: "Ikhlas-e-Dosti", en: "Sincere Friendship" },
      { ur: "وفا", ro: "Wafa", en: "Loyalty" }
    ]
  }
];

export const batch16Quotes: QuoteItem[] = [
  {
    id: "ma-226",
    slug: "qarabatiyon-aur-masakeen-ki-khata-par-madad-band-na-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nur (24:22) & Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "رنجش کے باوجود حاجت مند رشتہ داروں کی مدد جاری رکھنا",
      ro: "Ranjish Ke Bawajood Hajat-Mand Rishtedaron Ki Madad Jari Rakhna",
      en: "Continuing Charity to Relatives Even After a Grievance"
    },
    quote: {
      ur: "اور تم میں سے جو لوگ صاحبِ فضیلت اور وسعت والے ہیں وہ اس بات کی قسم نہ کھائیں کہ رشتہ داروں، مسکینوں اور مہاجرین کو کچھ نہیں دیں گے، بلکہ انہیں معاف کر دینا چاہیے اور درگزر کرنا چاہیے؛ کیا تم یہ پسند نہیں کرتے کہ اللہ تمہیں معاف کر دے؟",
      ro: "Aur tum mein se jo log sahib-e-fazeelat aur wus'at wale hain woh is baat ki qasam na khayein ke rishtedaron, miskeenon aur muhajirin ko kuch nahi denge, balkay unhein maaf kar dena chahiye aur darguzar karna chahiye; kya tum yeh pasand nahi karte ke Allah tumhein maaf kar de?",
      en: "And let not those of virtue and wealth among you swear to discontinue helping relatives and the needy due to their mistakes; rather, pardon and overlook—do you not wish that Allah should forgive you?"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اکثر لوگ کسی غریب رشتہ دار کی غلطی یا ناشکری پر ناراض ہو کر اس کی مالی مدد بند کر دیتے ہیں۔ اعلیٰ ظرفی کا تقاضا یہ ہے کہ رب کی مغفرت کی امید میں ان کی خطا معاف کر کے احسان کا سلسلہ جاری رکھا جائے۔ آج کا عملی سبق یہ ہے کہ رشتوں کی خفگی کو صدقہ و خیرات بند کرنے کی وجہ نہ بنائیں، بلکہ معاف کر کے اللہ کی رحمت کے امیدوار بنیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aksar log kisi ghareeb rishtedar ki ghalti ya nashukri par naraz ho kar us ki maali madad band kar dete hain. Aala-zarfi ka taqaza yeh hai ke Rab ki maghfirat ki umeed mein un ki khata maaf kar ke ehsan ka silsila jari rakha jaye. Aaj ka amli sabaq yeh hai ke rishton ki khafgi ko sadqa o khairat band karne ki wajah na banayein, balkay maaf kar ke Allah ki rehmat ke umedwar banein.",
      en: "Context & Practical Lesson: True magnanimity means continuing to support needy relatives even when they have erred, seeking divine forgiveness through our own willingness to forgive."
    },
    tags: [
      { ur: "عفو و درگزر", ro: "Afw-o-Darguzar", en: "Forgiveness" },
      { ur: "صلہ رحمی", ro: "Sila-Rehmi", en: "Family Support" }
    ]
  },
  {
    id: "ma-227",
    slug: "kisi-ke-ghar-mein-ijazat-aur-salam-ke-sath-dakhil-hona",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nur (24:27-28) & Makhzan-e-Akhlaq - Page 14",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "دوسروں کے گھروں میں اجازت اور سلام سے داخل ہونے کے آداب",
      ro: "Doosron Ke Gharon Mein Ijazat Aur Salam Se Dakhil Hone Ke Aadab",
      en: "Seeking Permission and Greeting Before Entering Homes"
    },
    quote: {
      ur: "اے ایمان والو! اپنے گھروں کے سوا دوسرے لوگوں کے گھروں میں اس وقت تک داخل نہ ہو جب تک اجازت نہ لے لو اور وہاں کے رہنے والوں کو سلام نہ کر لو؛ اور اگر تم سے کہا جائے کہ واپس چلے جاؤ تو خوش دلی سے واپس لوٹ جاؤ۔",
      ro: "Aye eman walo! Apne gharon ke siwa doosre logon ke gharon mein us waqt tak dakhil na ho jab tak ijazat na le lo aur wahan ke rehne walon ko salam na kar lo; aur agar tum se kaha jaye ke wapis chalay jao to khush-dili se wapis laut jao.",
      en: "O believers! Do not enter houses other than your own until you have politely sought permission and greeted their inhabitants with peace; and if you are asked to return, go back cheerfully without taking offense."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کسی کی ذاتی خلوت اور گھر کے پردے کا احترام کرنا شائستہ معاشرت کا بنیادی اصول ہے۔ بغیر اطلاع داخل ہونا یا مصروفیت کی وجہ سے معذرت کرنے پر برا مان جانا اخلاقی آداب کے خلاف ہے۔ آج کا عملی سبق یہ ہے کہ کسی کے ہاں جانے سے پہلے اطلاع یا اجازت کا اہتمام کریں اور اگر میزبان معذرت کرے تو خندہ پیشانی سے لوٹ آئیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Kisi ki zaati khalwat aur ghar ke parday ka ehtiram karna shaista muasharat ka bunyadi usool hai. Baghair ittila dakhil hona ya masroofiyat ki wajah se maazrat karne par bura maan jana akhlaqi aadab ke khilaf hai. Aaj ka amli sabaq yeh hai ke kisi ke haan jane se pehle ittila ya ijazat ka ehtimam karein aur agar mezban maazrat kare to khanda-peshani se laut aayein.",
      en: "Context & Practical Lesson: Respecting personal privacy by asking permission before entering—and graciously accepting if the host is unavailable—is a hallmark of civilized etiquette."
    },
    tags: [
      { ur: "آدابِ ملاقات", ro: "Aadab-e-Mulaqat", en: "Visiting Etiquette" },
      { ur: "احترامِ خلوت", ro: "Ehtiram-e-Khalwat", en: "Privacy" }
    ]
  },
  {
    id: "ma-228",
    slug: "tamsukhur-buray-alqab-aur-gheebat-ki-mumaniat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hujurat (49:11-12) & Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تمسخر اڑانے، برے نام رکھنے اور عیب لگانے کی ممانعت",
      ro: "Tamsukhur Urane, Buray Naam Rakhne Aur Aib Lagane Ki Mumaniat",
      en: "Prohibition of Mockery, Offensive Nicknames, and Defamation"
    },
    quote: {
      ur: "نہ مرد دوسرے مردوں کا مذاق اڑائیں، ممکن ہے کہ وہ ان سے بہتر ہوں، اور نہ عورتیں دوسری عورتوں کا مذاق اڑائیں؛ نہ آپس میں ایک دوسرے پر عیب لگاؤ اور نہ ایک دوسرے کو برے القاب سے پکارو۔",
      ro: "Na mard doosre mardon ka mazaq urayein, mumkin hai ke woh un se behtar hon, aur na aurtein doosri aurton ka mazaq urayein; na aapas mein aik doosre par aib lagao aur na aik doosre ko buray alqab se pukaro.",
      en: "Let no group of men mock another group, for they may be better than them in the sight of God, nor let women mock other women; do not defame one another, nor call each other by offensive nicknames."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الحجرات کی یہ تعلیمات باہمی احترام کی روح ہیں۔ کسی انسان کی ظاہری شکل، غربت یا سادگی کا مذاق اڑانا تکبر کی علامت ہے کیونکہ ہو سکتا ہے وہ دل کی پاکیزگی میں ہم سے کہیں افضل ہو۔ آج کا عملی سبق یہ ہے کہ اپنی زبان کو طعنے، تضحیک اور برے ناموں سے محفوظ رکھیں اور ہر انسان کو اس کے باعزت نام سے پکاریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Hujurat ki yeh taleemat bahami ehtiram ki rooh hain. Kisi insan ki zahiri shakal, ghareebi ya sadgi ka mazaq urana takabbur ki alamat hai kyunkeh ho sakta hai woh dil ki pakeezgi mein hum se kahin afzal ho. Aaj ka amli sabaq yeh hai ke apni zaban ko taanay, tazheek aur buray naamon se mehfooz rakhein aur har insan ko us ke ba-izzat naam se pukarein.",
      en: "Context & Practical Lesson: Ridiculing others or using demeaning nicknames stems from arrogance; true faith honors the dignity of every person without exception."
    },
    tags: [
      { ur: "تکریمِ انسانیت", ro: "Takreem-e-Insaniyat", en: "Human Dignity" },
      { ur: "آدابِ گفتگو", ro: "Aadab-e-Guftugu", en: "Respectful Speech" }
    ]
  },
{
    id: "ma-229",
    slug: "raza-e-ilahi-ke-liye-mareez-ki-ayadat-aur-mulaqat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "خالص اللہ کے لیے ملاقات اور عیادت کرنے کی بشارت",
      ro: "Khalis Allah Ke Liye Mulaqat Aur Ayadat Karne Ki Basharat",
      en: "Glad Tidings for Visiting the Sick and Friends Purely for God"
    },
    quote: {
      ur: "جو شخص کسی مریض کی عیادت کرے یا اپنے کسی دینی بھائی سے محض اللہ کی رضا کے لیے ملاقات کو جائے، تو آسمان سے ایک منادی پکارتا ہے کہ تو بھی اچھا رہا اور تیرا چلنا بھی بابرکت ہوا، اور تو نے جنت میں اپنا ایک ٹھکانا بنا لیا۔",
      ro: "Jo shakhs kisi mareez ki ayadat kare ya apne kisi deeni bhai se mehaz Allah ki raza ke liye mulaqat ko jaye, to asman se aik munadi pukarta hai ke tu bhi acha raha aur tera chalna bhi ba-barkat huwa, aur tu ne Jannat mein apna aik thikana bana liya.",
      en: "Whoever visits a sick person or sets out to meet a brother purely for the sake of God, a heavenly caller proclaims: Blessed are you, blessed are your footsteps, and you have prepared a noble dwelling in Paradise."
    },
    tashreeh: {
      ur: "جب انسان بغیر کسی دنیاوی غرض یا لالچ کے صرف محبت اور ہمدردی کی خاطر کسی بیمار یا دوست کا حال پوچھنے جاتا ہے تو اس کا ہر اٹھنے والا قدم فرشتوں کی دعاؤں کے سائے میں ہوتا ہے۔",
      ro: "Jab insan baghair kisi dunyawi gharz ya lalach ke sirf mohabbat aur hamdardi ki khatir kisi bimar ya dost ka haal poochne jata hai to us ka har uthne wala qadam farishton ki duaon ke saaye mein hota hai.",
      en: "Visiting others purely out of sincere affection and empathy—free of worldly motives—transforms ordinary footsteps into an act of worship."
    },
    tags: [
      { ur: "بے غرض محبت", ro: "Be-Gharz Mohabbat", en: "Selfless Love" },
      { ur: "عیادت", ro: "Ayadat", en: "Visiting the Sick" }
    ]
  },
  {
    id: "ma-230",
    slug: "najat-dilane-wali-teen-sifat-aur-halakat-ki-teen-baatein",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 26",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "نجات دلانے والی تین صفات اور ہلاک کرنے والی تین خصلتیں",
      ro: "Najat Dilane Wali Teen Sifat Aur Halak Karne Wali Teen Khaslatein",
      en: "Three Qualities That Save and Three That Destroy"
    },
    quote: {
      ur: "تین چیزیں نجات دینے والی ہیں: خلوت اور جلوت دونوں میں اللہ سے ڈرنا، فقر اور امیری دونوں حالتوں میں میانہ روی اختیار کرنا، اور غصے اور خوشی دونوں میں انصاف کی بات کہنا۔ اور تین چیزیں ہلاک کرنے والی ہیں: شدید بخل، نفس کی خواہشات کی پیروی، اور انسان کا اپنی رائے پر مغرور ہونا۔",
      ro: "Teen cheezein najat dene wali hain: khalwat aur jalwat dono mein Allah se darna, faqr aur ameeri dono halaton mein miyana-rawi ikhtiyar karna, aur gusse aur khushi dono mein insaf ki baat kehna. Aur teen cheezein halak karne wali hain: shadeed bukhl, nafs ki khuwaishat ki pairwi, aur insan ka apni raaye par maghroor hona.",
      en: "Three qualities lead to salvation: reverence for God in private and public, moderation in poverty and wealth, and fairness in both anger and pleasure; and three traits lead to ruin: extreme greed, following base desires, and self-conceit."
    },
    tashreeh: {
      ur: "یہ حدیثِ مبارکہ اخلاقی توازن کا مکمل دستور ہے کہ تنہائی میں بھی تقویٰ رہے، پیسے کے آنے جانے سے اللے تللے نہ ہوں اور جذبات میں انصاف کا دامن نہ چھوٹے، جبکہ خود پسندی اور لالچ انسان کو لے ڈوبتے ہیں۔",
      ro: "Yeh hadith-e-mubaraka akhlaqi tawazun ka mukammal dastoor hai ke tanhai mein bhi taqwa rahe, paisay ke aane jane se allay-tallay na hon aur jazbat mein insaf ka daman na chhootay, jabkeh khud-pasandi aur lalach insan ko le doobte hain.",
      en: "Spiritual balance requires integrity in private, financial moderation, and emotional fairness, while guarding the soul against greed, impulsiveness, and vanity."
    },
    tags: [
      { ur: "توازنِ حیات", ro: "Tawazun-e-Hayat", en: "Moral Balance" },
      { ur: "خود احتسابی", ro: "Khud-Ehtisabi", en: "Self-Reflection" }
    ]
  },
  {
    id: "ma-231",
    slug: "musibat-door-karna-aur-parda-poshi-ka-ajr",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 23",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "پریشانی دور کرنے، آسانی بانٹنے اور پردہ پوشی کا انعام",
      ro: "Pareshani Door Karne, Asani Bantne Aur Parda-Poshi Ka Inam",
      en: "Relieving Distress, Easing Hardship, and Concealing Faults"
    },
    quote: {
      ur: "جو شخص کسی مومن سے دنیا کی کوئی مصیبت دور کرے گا اللہ اس سے قیامت کی مصیبتیں دور فرمائے گا؛ جو کسی تنگدست کے ساتھ آسانی کا معاملہ کرے گا اللہ دنیا و آخرت میں اس پر آسانی فرمائے گا؛ اور جو کسی مسلمان کی پردہ پوشی کرے گا اللہ دنیا و آخرت میں اس کا پردہ رکھے گا۔",
      ro: "Jo shakhs kisi momin se duniya ki koi musibat door karega Allah us se qayamat ki museebatein door farmayega; jo kisi tangdast ke sath asani ka muamla karega Allah duniya o akhirat mein us par asani farmayega; aur jo kisi Musalman ki parda-poshi karega Allah duniya o akhirat mein us ka parda rakhega.",
      en: "Whoever relieves a believer of a worldly distress, Allah will relieve them of the distresses of the Day of Judgment; whoever makes things easy for one in difficulty, Allah will make things easy for them; and whoever conceals another's fault, Allah will conceal their faults in both worlds."
    },
    tashreeh: {
      ur: "اللہ تعالیٰ کا اپنے بندے کے ساتھ وہی معاملہ ہوتا ہے جو بندہ اللہ کی مخلوق کے ساتھ رکھتا ہے۔ جب تک انسان اپنے بھائی کی مدد میں لگا رہتا ہے، اللہ کی غیبی مدد اس کے شاملِ حال رہتی ہے۔",
      ro: "Allah Ta'ala ka apne banday ke sath wahi muamla hota hai jo banda Allah ki makhlooq ke sath rakhta hai. Jab tak insan apne bhai ki madad mein laga rehta hai, Allah ki ghaibi madad us ke shamil-e-haal rehti hai.",
      en: "Divine grace mirrors human compassion: easing the burdens of others and protecting their dignity guarantees divine relief and protection for oneself."
    },
    tags: [
      { ur: "پردہ پوشی", ro: "Parda-Poshi", en: "Concealing Faults" },
      { ur: "آسانی", ro: "Asani", en: "Easing Hardship" }
    ]
  },
  {
    id: "ma-232",
    slug: "huzoor-ki-be-misal-sakhawat-aur-sail-ko-na-kehna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 37",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "نبوی سخاوت کی وسعت اور سائل کو کبھی ’نہیں‘ نہ کہنا",
      ro: "Nabawi Sakhawat Ki Wus'at Aur Sail Ko Kabhi 'Nahi' Na Kehna",
      en: "Boundless Prophetic Generosity and Never Saying 'No'"
    },
    quote: {
      ur: "حضور اکرم ﷺ بھلائی اور سخاوت میں تیز چلنے والی رحمت کی ہوا سے بھی زیادہ فیاض تھے؛ آپ ﷺ سے جب کبھی کوئی چیز مانگی گئی تو آپ نے کبھی 'نہیں' کا لفظ زبان پر نہ لایا، اور آپ کو فقر و تنگدستی کا اندیشہ کبھی سخاوت سے نہ روک سکا۔",
      ro: "Huzoor Akram ﷺ bhalai aur sakhawat mein tez chalne wali rehmat ki hawa se bhi zyada fayyaz thay; Aap ﷺ se jab kabhi koi cheez mangi gayi to Aap ne kabhi 'nahi' ka lafz zaban par na laya, aur Aap ko faqr o tangdasti ka andesha kabhi sakhawat se na rok saka.",
      en: "The Prophet ﷺ was more generous in doing good than the swift, rain-bearing wind; never once was he asked for anything to which he said 'No,' Giving with the fearlessness of one who never dreads poverty."
    },
    tashreeh: {
      ur: "آپ ﷺ کی جود و سخا کا یہ عالم تھا کہ اپنے گھر میں فاقہ ہونے کے باوجود جو کچھ آتا شام ہونے سے پہلے محتاجوں میں تقسیم فرما دیتے، اور اگر پاس کچھ نہ ہوتا تو وعدہ یا میٹھے بول سے سائل کا دل خوش فرما دیتے۔",
      ro: "Aap ﷺ ki jood-o-sakha ka yeh aalam tha ke apne ghar mein faqa hone ke bawajood jo kuch aata sham hone se pehle mohtajon mein taqseem farma dete, aur agar paas kuch na hota to wada ya meethay bol se sail ka dil khush farma dete.",
      en: "Prophetic generosity flowed without hesitation, prioritizing the needs of the poor over personal comfort and treating every petitioner with honor."
    },
    tags: [
      { ur: "جود و سخا", ro: "Jood-o-Sakha", en: "Generosity" },
      { ur: "فیاضی", ro: "Fayyazi", en: "Benevolence" }
    ]
  },
  {
    id: "ma-233",
    slug: "sakht-kalami-par-hilm-aur-hidayat-ki-dua",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 40",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "نادان کی سختی کے جواب میں حلم، مسکراہٹ اور دعا",
      ro: "Nadan Ki Sakhti Ke Jawab Mein Hilm, Muskurahat Aur Dua",
      en: "Responding to Rudeness with Forbearance, Smiles, and Prayer"
    },
    quote: {
      ur: "کسی کی جہالت اور سخت روئی سے آپ ﷺ کے حلم اور صبر ہی میں اضافہ ہوتا؛ جب کسی دیہاتی نے چادر مبارک کھینچ کر سخت کلامی کی تو آپ ﷺ نے مسکرا کر اسے عطا فرمانے کا حکم دیا، اور طائف کے زخم کھا کر بھی بددعا کے بجائے ان کی نسلوں کی ہدایت کی دعا فرمائی۔",
      ro: "Kisi ki jahalat aur sakht-roi se Aap ﷺ ke hilm aur sabr hi mein izafa hota; jab kisi dehati ne chadar mubarak kheench kar sakht-kalami ki to Aap ﷺ ne muskura kar usay ata farmane ka hukm diya, aur Taif ke zakhm kha kar bhi bad-dua ke bajaye un ki naslon ki hidayat ki dua farmai.",
      en: "Harshness from the ignorant only increased the Prophet's ﷺ forbearance; when a desert dweller roughly pulled his cloak, he smiled and ordered a gift for him, and even when wounded at Ta'if, he prayed for the guidance of their future generations."
    },
    tashreeh: {
      ur: "اینٹ کا جواب پتھر سے دینا عام دنیا کا دستور ہے، لیکن کانٹوں کے بدلے پھول اور گالیوں کے بدلے دعا دینا نبوی اخلاق ہے جس نے جانی دشمنوں کو بھی جاں نثار بنا دیا۔",
      ro: "Eent ka jawab pathar se dena aam duniya ka dastoor hai, lekin kanton ke badlay phool aur galiyon ke badlay dua dena Nabawi akhlaq hai jis ne jaani dushmanon ko bhi jaan-nisar bana diya.",
      en: "Retaliating against rudeness is easy, but meeting harshness with a gentle smile and heartfelt prayer for guidance is the supreme moral force that transforms enemies into friends."
    },
    tags: [
      { ur: "حلم و بردباری", ro: "Hilm o Burdbari", en: "Forbearance" },
      { ur: "رحمت", ro: "Rehmat", en: "Mercy" }
    ]
  },
  {
    id: "ma-234",
    slug: "aath-cheezein-aath-cheezon-ki-zeenat-hain",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 69",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "آٹھ چیزیں جو آٹھ حالتوں کا زیور اور زینت ہیں",
      ro: "Aath Cheezein Jo Aath Halaton Ka Zewar Aur Zeenat Hain",
      en: "Eight Virtues That Adorn Eight States of Life"
    },
    quote: {
      ur: "آٹھ چیزیں آٹھ چیزوں کی زینت ہیں: تنگدستی میں سوال سے بچنا، نعمت کے وقت شکر ادا کرنا، مصیبت میں صبر کرنا، علم کے ساتھ بردباری رکھنا، طالبِ علم کا عاجزی اختیار کرنا، خوفِ الٰہی سے رونا، احسان کر کے نہ جتلانا، اور نماز میں خشوع و عاجزی رکھنا۔",
      ro: "Aath cheezein aath cheezon ki zeenat hain: tangdasti mein sawal se bachna, nemat ke waqt shukr ada karna, musibat mein sabr karna, ilm ke sath burdbari rakhna, talib-e-ilm ka aajizi ikhtiyar karna, khauf-e-Ilahi se rona, ehsan kar ke na jatlana, aur namaz mein khushoo o aajizi rakhna.",
      en: "Eight qualities are the adornment of eight states: dignity in poverty, gratitude in prosperity, patience in calamity, forbearance in scholarship, humility in a seeker of knowledge, tears out of reverence for God, never reminding others of favors, and devotion in prayer."
    },
    tashreeh: {
      ur: "ہر حال کی ایک خاص خوبصورتی ہے: غریبی کی خوبصورتی خودداری میں، امیری کی شکر میں، علم کی حلم و عاجزی میں اور نیکی کی خوبصورتی احسان نہ جتانے میں پوشیدہ ہے۔",
      ro: "Har haal ki aik khaas khoobsurti hai: ghareebi ki khoobsurti khuddari mein, ameeri ki shukr mein, ilm ki hilm o aajizi mein aur neki ki khoobsurti ehsan na jatane mein posheeda hai.",
      en: "Every station in life is beautified by its matching virtue: self-respect adorns scarcity, gratitude adorns wealth, and humility adorns knowledge."
    },
    tags: [
      { ur: "زینتِ اخلاق", ro: "Zeenat-e-Akhlaq", en: "Adornment of Character" },
      { ur: "خودداری", ro: "Khuddari", en: "Dignity" }
    ]
  },
  {
    id: "ma-235",
    slug: "tauba-karne-walon-ki-suhbat-aur-mazloom-ka-khauf",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 77",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "توبہ کرنے والوں کے نرم دل اور بے بس مظلوم کا خوف",
      ro: "Tauba Karne Walon Ke Naram Dil Aur Be-Bas Mazloom Ka Khauf",
      en: "The Soft Hearts of the Repentant and Fearing the Helpless"
    },
    quote: {
      ur: "توبہ کرنے والوں (توابین) کے پاس بیٹھا کرو کیونکہ ان کے دل سب سے زیادہ نرم اور پاکیزہ ہوتے ہیں؛ اور اس شخص سے ڈرو جس کے ساتھ تم نے برائی کی ہو اور اللہ کے سوا اس کا کوئی مددگار نہ ہو۔",
      ro: "Tauba karne walon (tawwabeen) ke paas baitha karo kyunkeh un ke dil sab se zyada naram aur pakeeza hote hain; aur us shakhs se daro jis ke sath tum ne burai ki ho aur Allah ke siwa us ka koi madadgar na ho.",
      en: "Keep company with those who sincerely repent, for their hearts are the softest and most compassionate; and fear the one whom you have wronged when they have no helper besides God."
    },
    tashreeh: {
      ur: "جو انسان اپنی خطا پر شرمندہ ہو کر رب کی طرف پلٹتا ہے اس کے اندر سے تکبر ختم ہو جاتا ہے اور دل موم ہو جاتا ہے۔ اور سب سے خطرناک ظلم وہ ہے جو ایسے کمزور پر کیا جائے جس کی سفارش کرنے والا زمین پر کوئی نہ ہو کیونکہ اس کا وکیل خود خدا بن جاتا ہے۔",
      ro: "Jo insan apni khata par sharminda ho kar Rab ki taraf palatta hai us ke andar se takabbur khatam ho jata hai aur dil mom ho jata hai. Aur sab se khatarnaak zulm woh hai jo aise kamzor par kiya jaye jis ki sifarish karne wala zameen par koi na ho kyunkeh us ka wakeel khud Khuda ban jata hai.",
      en: "Sincere remorse melts away pride and makes the heart gentle, while wronging a defenseless person is perilous because the Almighty Himself champions their cause."
    },
    tags: [
      { ur: "رقتِ قلب", ro: "Riqqat-e-Qalb", en: "Gentle Heart" },
      { ur: "عدل", ro: "Adal", en: "Justice" }
    ]
  },
  {
    id: "ma-236",
    slug: "zahir-ki-khoobi-aur-batin-ki-haqeeqi-fazilat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 86",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "ظاہری نیکی اور باطنی عمل کا حقیقی فرق",
      ro: "Zahiri Neki Aur Batini Amal Ka Haqeeqi Farq",
      en: "Outward Appearances Versus True Inner Virtue"
    },
    quote: {
      ur: "چار چیزیں بظاہر اچھی ہیں مگر چار چیزیں حقیقت میں افضل ہیں: لوگوں سے ملنا جلنا اچھا ہے مگر سنت کی پیروی افضل ہے؛ قرآن پڑھنا اچھا ہے مگر اس پر عمل کرنا افضل ہے؛ قبر کی زیارت اچھی ہے مگر موت کی تیاری افضل ہے؛ اور بیمار کی عیادت اچھی ہے مگر صحت کی حالت میں نیکی کر لینا افضل ہے۔",
      ro: "Chaar cheezein ba-zahir achi hain magar chaar cheezein haqeeqat mein afzal hain: logon se milna julna acha hai magar sunnat ki pairwi afzal hai; Quran parhna acha hai magar us par amal karna afzal hai; qabar ki ziyarat achi hai magar maut ki tayari afzal hai; aur bimar ki ayadat achi hai magar sehat ki halat mein neki kar lena afzal hai.",
      en: "Four practices are good on the surface, yet four are far greater in reality: socializing is good, but following the Prophetic way is greater; reciting Scripture is good, but acting upon it is greater; visiting graves is good, but preparing for eternity is greater; and visiting the sick is good, but doing good while healthy is greater."
    },
    tashreeh: {
      ur: "صرف رسوم اور ظاہری اعمال پر اکتفا کرنے کے بجائے ان کے اصل مقصد تک پہنچنا ضروری ہے: تلاوت کا مقصد عمل ہے، قبرستان جانے کا مقصد اپنی اصلاح ہے اور بیماری سے پہلے صحت کی قدر کرنا اصل دانائی ہے۔",
      ro: "Sirf rusoom aur zahiri aamaal par iktifa karne ke bajaye un ke asal maqsad tak pohanchna zaroori hai: tilawat ka maqsad amal hai, qabristan jane ka maqsad apni islah hai aur bimari se pehle sehat ki qadr karna asal danai hai.",
      en: "Rituals find their true meaning when they transform behavior: reading wisdom must lead to practice, and witnessing mortality must inspire timely good deeds."
    },
    tags: [
      { ur: "حقیقتِ عمل", ro: "Haqeeqat-e-Amal", en: "True Practice" },
      { ur: "بصیرت", ro: "Baseerat", en: "Deep Insight" }
    ]
  },
  {
    id: "ma-237",
    slug: "insan-ki-qeemat-us-ka-hunar-aur-sabr-ki-do-qismein",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 93",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "انسان کی اصل قیمت اس کا ہنر اور صبر کی دو قسمیں",
      ro: "Insan Ki Asal Qeemat Us Ka Hunar Aur Sabr Ki Do Qismein",
      en: "A Person's Worth Lies in Their Excellence and the Two Kinds of Patience"
    },
    quote: {
      ur: "ہر انسان کی قیمت وہی ہنر اور بھلائی ہے جسے وہ بہترین طریقے سے انجام دینا جانتا ہو۔ اور صبر دو قسم کا ہے: ایک اس ناگوار بات پر صبر کرنا جو تجھے تکلیف دے، اور دوسرا اس مرغوب چیز سے باز رہنا جس سے نفس لالچ کرے۔",
      ro: "Har insan ki qeemat wahi hunar aur bhalai hai jisay woh behtareen tareeqay se anjam dena janta ho. Aur sabr do qism ka hai: aik us nagawar baat par sabr karna jo tujhe takleef de, aur doosra us marghoob cheez se baaz rehna jis se nafs lalach kare.",
      en: "The true worth of every person lies in the good skill they master and perform with excellence. And patience is of two kinds: enduring what you dislike during hardship, and restraining yourself from what you crave when it is unlawful."
    },
    tashreeh: {
      ur: "معاشرے میں انسان کا مقام اس کے لباس یا دعووں سے نہیں بلکہ اس کے کام کی پختگی اور مہارت سے طے ہوتا ہے۔ اسی طرح صبر صرف دکھ سہنے کا نام نہیں بلکہ حرام کی کشش کے سامنے اپنے نفس کو روک لینا بھی بڑا صبر ہے۔",
      ro: "Muashray mein insan ka maqam us ke libas ya dawon se nahi balkay us ke kaam ki pukhtagi aur maharat se tay hota hai. Isi tarah sabr sirf dukh sehne ka naam nahi balkay haram ki kashish ke samne apne nafs ko rok lena bhi bada sabr hai.",
      en: "Human value is defined by competence and moral excellence, while complete patience requires both resilience in pain and self-control against temptation."
    },
    tags: [
      { ur: "ہنر و کمال", ro: "Hunar o Kamal", en: "Excellence" },
      { ur: "ضبطِ نفس", ro: "Zabt-e-Nafs", en: "Self-Restraint" }
    ]
  },
  {
    id: "ma-238",
    slug: "chaar-maqamat-par-chaar-cheezon-ki-hifazat",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 99",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "نماز میں دل اور دسترخوان و محفل میں نفس کی حفاظت",
      ro: "Namaz Mein Dil Aur Dastarkhwan o Mehfil Mein Nafs Ki Hifazat",
      en: "Guarding the Heart, Eyes, Tongue, and Appetite in Four Places"
    },
    quote: {
      ur: "بھاری پتھر ڈھونا بدکردار اور نادان کی ہم نشینی سے کہیں ہلکا ہے۔ چار جگہ چار چیزوں کی حفاظت کر: نماز میں اپنے دل کی، لوگوں کی محفل میں اپنی زبان کی، کسی کے گھر جاؤ تو اپنی آنکھ کی، اور دسترخوان پر اپنے پیٹ کی۔",
      ro: "Bhari pathar dhona bad-kirdar aur nadan ki ham-nashini se kahin halka hai. Chaar jagah chaar cheezon ki hifazat kar: namaz mein apne dil ki, logon ki mehfil mein apni zaban ki, kisi ke ghar jao to apni ankh ki, aur dastarkhwan par apne pait ki.",
      en: "Carrying heavy boulders is lighter than enduring the company of the wicked. Guard four things in four places: your heart during prayer, your tongue in gatherings, your eyes when visiting someone's home, and your appetite at the dining table."
    },
    tashreeh: {
      ur: "یہ چار عملی اصول عبادت سے لے کر معاشرت تک انسان کو کامل بناتے ہیں: عبادت یکسوئی چاہتی ہے، محفل زبان کا ادب مانگتی ہے، میزبان کا گھر نگاہ کی حیا مانگتا ہے اور کھانا اعتدال مانگتا ہے۔",
      ro: "Yeh chaar amli usool ibadat se le kar muasharat tak insan ko kamil banate hain: ibadat yaksoi chahti hai, mehfil zaban ka adab mangti hai, mezban ka ghar nigah ki haya mangta hai aur khana aitdaal mangta hai.",
      en: "Four rules of refined living: mindfulness in worship, restraint in conversation, modesty of gaze in others' homes, and moderation at meals."
    },
    tags: [
      { ur: "آدابِ زندگی", ro: "Aadab-e-Zindagi", en: "Life Etiquette" },
      { ur: "نگہبانی", ro: "Nigahbani", en: "Mindfulness" }
    ]
  },
  {
    id: "ma-239",
    slug: "hasad-chhorna-jism-ki-rahat-aur-qanaat-dil-ka-sukoon",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 244",
    author: {
      ur: "اقوالِ حکماء (ارسطو و بزرگان)",
      ro: "Aqwal-e-Hukama (Arastu o Buzurgan)",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "حسد کا ترک کرنا بدن کی تندرستی اور روح کا آرام ہے",
      ro: "Hasad Ka Tark Karna Badan Ki Tandrusti Aur Rooh Ka Aram Hai",
      en: "Letting Go of Envy Brings Physical Health and Mental Peace"
    },
    quote: {
      ur: "سب سے کم چین اور راحت اس شخص کو نصیب ہوتی ہے جس کے دل میں حسد کا روگ ہو؛ جو انسان حسد چھوڑ دیتا ہے اس کا بدن تندرست ہو جاتا ہے، اور جو فضول جھگڑوں سے کنارہ کر لیتا ہے اس کی عزت سلامت رہتی ہے۔",
      ro: "Sab se kam chain aur rahat us shakhs ko naseeb hoti hai jis ke dil mein hasad ka rog ho; jo insan hasad chhor deta hai us ka badan tandrust ho jata hai, aur jo fuzool jhagron se kinara kar leta hai us ki izzat salamat rehti hai.",
      en: "The least peaceful person on earth is the one afflicted with envy; abandoning jealousy restores health to the body, and stepping away from pointless arguments preserves one's honor."
    },
    tashreeh: {
      ur: "حسد ایک ایسی اندرونی بیماری ہے جو حاسد کے اپنے خون اور اعصاب کو جلاتی رہتی ہے۔ دوسروں کی خوشی میں خوش ہونا سیکھ لینا ذہنی سکون اور جسمانی صحت کا سب سے بڑا راز ہے۔",
      ro: "Hasad aik aisi androoni bimari hai jo hasid ke apne khoon aur aasab ko jalati rehti hai. Doosron ki khushi mein khush hona seekh lena zehni sukoon aur jismani sehat ka sab se bada raaz hai.",
      en: "Envy silently erodes the envier's own health and peace of mind; celebrating the blessings of others liberates the heart from constant torment."
    },
    tags: [
      { ur: "ذہنی سکون", ro: "Zehni Sukoon", en: "Peace of Mind" },
      { ur: "تندرستی", ro: "Tandrusti", en: "Well-Being" }
    ]
  },
  {
    id: "ma-240",
    slug: "khushhali-mein-apna-mazi-na-bhoolna-aur-shukr-baja-lana",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 312",
    author: {
      ur: "سبق آموز حکایات و نصائح",
      ro: "Sabaq-Aamoz Hikayat o Nasaih",
      en: "Moral Parables & Wisdom"
    },
    title: {
      ur: "عروج اور خوشحالی میں اپنے ماضی کو یاد رکھنا",
      ro: "Urooj Aur Khushhali Mein Apne Maazi Ko Yaad Rakhna",
      en: "Remembering Humble Beginnings in Times of Prosperity"
    },
    quote: {
      ur: "جب زمانہ تجھے تنگدستی سے نکال کر خوشحالی اور عزت کے مقام پر بٹھائے تو اپنے گزرے ہوئے کل کو کبھی فراموش نہ کر؛ اپنے دروازے کو محتاجوں کے لیے کھلا رکھ، کیونکہ نعمت کا شکر یہی ہے کہ اس کا فیض بندگانِ خدا تک پہنچے۔",
      ro: "Jab zamana tujhe tangdasti se nikal kar khushhali aur izzat ke maqam par bithaye to apne guzray huye kal ko kabhi faramosh na kar; apne darwazay ko mohtajon ke liye khula rakh, kyunkeh nemat ka shukr yehi hai ke us ka faiz bandagan-e-Khuda tak pohanche.",
      en: "When fortune lifts you from hardship to prosperity and honor, never forget your humble beginnings; keep your door open to those in need, for true gratitude for a blessing is sharing its benefit with God's creation."
    },
    tashreeh: {
      ur: "نعمت ملنے کے بعد گردن میں اکڑ آ جانا اور پرانے دوستوں یا غریبوں سے آنکھیں پھیر لینا زوال کی پہلی سیڑھی ہے۔ جو انسان عروج میں بھی عاجز رہے اور اپنا دسترخوان کشادہ رکھے، اللہ اس کی عزت کو دوام بخشتا ہے۔",
      ro: "Nemat milne ke baad gardan mein akar aa jana aur purane doston ya ghareebon se ankhein pher lena zawal ki pehli seerhi hai. Jo insan urooj mein bhi aajiz rahe aur apna dastarkhwan kushada rakhe, Allah us ki izzat ko dawam bakhshta hai.",
      en: "Forgetting one's roots after achieving success breeds arrogance; staying humble in prosperity and lifting others up secures lasting honor."
    },
    tags: [
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" },
      { ur: "شکرِ نعمت", ro: "Shukr-e-Nemat", en: "Gratitude" }
    ]
  }
];

export const batch17Quotes: QuoteItem[] = [
  {
    id: "ma-241",
    slug: "ehsan-jatla-kar-sadqat-zaya-na-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:262-263) & Makhzan-e-Akhlaq - Page 11-12",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "احسان جتلا کر اور دل دکھا کر صدقہ ضائع نہ کرنا",
      ro: "Ehsan Jatla Kar Aur Dil Dukha Kar Sadqa Zaya Na Karna",
      en: "Do Not Nullify Charity with Reminders of Favors or Hurt"
    },
    quote: {
      ur: "اے ایمان والو! اپنے صدقات و خیرات کو احسان جتلا کر اور ایذا پہنچا کر برباد نہ کرو؛ میٹھی زبان سے بات کر لینا اور درگزر کرنا اس خیرات سے کہیں بہتر ہے جس کے پیچھے حاجت مند کی دل آزاری ہو۔",
      ro: "Aye eman walo! Apne sadqat o khairat ko ehsan jatla kar aur eiza pohancha kar barbad na karo; meethi zaban se baat kar lena aur darguzar karna us khairat se kahin behtar hai jis ke peechay hajat-mand ki dil-aazari ho.",
      en: "O believers! Do not render your charities worthless by reminders of your generosity or by injury; a kind word and forgiveness are far better than charity followed by hurt."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کسی غریب کی مدد کرنے کے بعد بار بار اس کا ذکر کرنا یا اس سے ذلت آمیز رویہ رکھنا ساری نیکی کو خاک میں ملا دیتا ہے۔ اگر انسان کچھ نہ دے سکے تو کم از کم نرم لفظ بول کر سائل کی عزتِ نفس محفوظ رکھے۔ آج کا عملی سبق یہ ہے کہ خیرات دینے کے بعد اسے طعنہ بننے نہ دیں اور ہمیشہ عاجزی اختیار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Kisi ghareeb ki madad karne ke baad bar bar us ka zikr karna ya us se zillat-aamez rawaiya rakhna sari neki ko khak mein mila deta hai. Agar insan kuch na de sake to kam az kam naram lafz bol kar sail ki izzat-e-nafs mehfooz rakhe. Aaj ka amli sabaq yeh hai ke khairat dene ke baad usay taana banne na dein aur hamesha aajizi ikhtiyar karein.",
      en: "Context & Practical Lesson: Boasting about a favor or humiliating a recipient destroys the spiritual value of charity; preserving human dignity with a gentle word outweighs any material gift."
    },
    tags: [
      { ur: "آدابِ انفاق", ro: "Aadab-e-Infaq", en: "Dignified Charity" },
      { ur: "نرم کلامی", ro: "Naram-Kalami", en: "Kind Speech" }
    ]
  },
  {
    id: "ma-242",
    slug: "momin-bhaiyon-ke-darmiyan-insaf-se-sulah-karana",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hujurat (49:9-10) & Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اہلِ ایمان کا رشتۂ اخوت اور عدل کے ساتھ صلح کرانا",
      ro: "Ahl-e-Eman Ka Rishta-e-Ukhuwwat Aur Adal Ke Sath Sulah Karana",
      en: "The Brotherhood of Faith and Making Peace with Justice"
    },
    quote: {
      ur: "تمام مومن آپس میں بھائی بھائی ہیں، پس اپنے دو بھائیوں کے درمیان رنجش ہو جائے تو انصاف اور عدل کے ساتھ صلح کرا دیا کرو؛ اور اللہ سے ڈرو تاکہ تم پر رحم کیا جائے۔",
      ro: "Tamam momin aapas mein bhai bhai hain, pas apne do bhaiyon ke darmiyan ranjish ho jaye to insaf aur adal ke sath sulah kara diya karo; aur Allah se daro taake tum par reham kiya jaye.",
      en: "The believers are but brothers, so make peace between your brothers with fairness and justice; and revere Allah so that you may be shown mercy."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الحجرات کا یہ اصول معاشرے کی بقا کے لیے ضامن ہے۔ جب دو افراد یا خاندانوں میں اختلاف پیدا ہو تو تیسرے فرد کا کام آگ بھڑکانا نہیں بلکہ غیر جانبداری اور انصاف کے ساتھ دونوں کے دلوں کو جوڑنا ہے۔ آج کا عملی سبق یہ ہے کہ لڑائی جھگڑے بڑھانے کے بجائے ہمیشہ صلح اور امن کی کوشش کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Hujurat ka yeh usool muashray ki baqa ke liye zaman hai. Jab do afrad ya khandanon mein ikhtilaf paida ho to teesre fard ka kaam aag bharkana nahi balkay ghair-janibdari aur insaf ke sath dono ke dilon ko jorna hai. Aaj ka amli sabaq yeh hai ke larai-jhagray barhane ke bajaye hamesha sulah aur aman ki koshish karein.",
      en: "Context & Practical Lesson: When disputes arise between people, true brotherhood calls for impartial mediation and peacemaking rather than taking sides or fueling division."
    },
    tags: [
      { ur: "اصلاحِ ذات البین", ro: "Islah-e-Zatul-Bain", en: "Peacemaking" },
      { ur: "اخوت", ro: "Ukhuwwat", en: "Brotherhood" }
    ]
  },
  {
    id: "ma-243",
    slug: "burai-ko-behtareen-bhalai-se-door-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Fussilat (41:34) & Makhzan-e-Akhlaq - Page 14",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "برائی کو احسن طریقے سے ٹالنا اور دشمن کو دوست بنانا",
      ro: "Burai Ko Ahsan Tareeqay Se Talna Aur Dushman Ko Dost Banana",
      en: "Repelling Evil with What is Better to Win Over Enemies"
    },
    quote: {
      ur: "نیکی اور بدی برابر نہیں ہو سکتیں؛ تم برائی کو اس طریقے سے دفع کرو جو سب سے احسن ہو، پھر تم دیکھو گے کہ جس کے اور تمہارے درمیان دشمنی تھی وہ ایسا ہو جائے گا جیسے جگری دوست ہو۔ اور یہ دولت صرف صبر کرنے والوں کو ملتی ہے۔",
      ro: "Neki aur badi barabar nahi ho saktein; tum burai ko us tareeqay se dafa karo jo sab se ahsan ho, phir tum dekho ge ke jis ke aur tumhare darmiyan dushmani thi woh aisa ho jayega jaise jigri dost ho. Aur yeh daulat sirf sabr karne walon ko milti hai.",
      en: "Good and evil are never equal; repel evil with that which is finest, and thereupon the one between whom and you there was enmity will become as though he were a devoted friend—and none is granted this character except the patient."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: نفرت کو نفرت سے ختم نہیں کیا جا سکتا۔ جب انسان صبر کا گھونٹ پی کر زیادتی کے جواب میں حسنِ سلوک کرتا ہے تو مخالف کا ضمیر جاگ اٹھتا ہے اور پرانی عداوت گہری دوستی میں بدل جاتی ہے۔ آج کا عملی سبق یہ ہے کہ تلخی کا جواب نرمی سے دے کر دشمنیوں کو مٹانے کی عادت ڈالیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Nafrat ko nafrat se khatam nahi kiya ja sakta. Jab insan sabr ka ghoont pee kar ziyadati ke jawab mein husn-e-sulook karta hai to mukhalif ka zameer jaag uthta hai aur purani adawat gehri dosti mein badal jati hai. Aaj ka amli sabaq yeh hai ke talkhi ka jawab narmi se de kar dushmaniyon ko mitane ki aadat dalein.",
      en: "Context & Practical Lesson: Responding to hostility with unexpected grace and patience disarms the opponent and turns animosity into lasting respect."
    },
    tags: [
      { ur: "دفعِ شر", ro: "Dafa-e-Shar", en: "Overcoming Evil" },
      { ur: "اعلیٰ اخلاق", ro: "Aala Akhlaq", en: "Noble Conduct" }
    ]
  },
{
    id: "ma-244",
    slug: "bewa-aur-miskeen-ki-kafalat-mujahid-ki-manind",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بیوہ اور مسکین کے لیے دوڑ دھوپ کرنے کا عظیم درجہ",
      ro: "Bewa Aur Miskeen Ke Liye Daur-Dhoop Karne Ka Azeem Darja",
      en: "Striving for Widows and the Poor Equals Lifelong Worship"
    },
    quote: {
      ur: "بیوہ عورت اور مسکین کی خبرگیری اور ان کے کام کے لیے دوڑ دھوپ کرنے والا اللہ کی راہ میں جہاد کرنے والے کی مانند ہے، یا اس شخص کی طرح ہے جو رات بھر عبادت میں کھڑا رہے اور کبھی نہ تھکے اور دن کو ہمیشہ روزہ رکھے۔",
      ro: "Bewa aurat aur miskeen ki khabargeeri aur un ke kaam ke liye daur-dhoop karne wala Allah ki raah mein jihad karne wale ki manind hai, ya us shakhs ki tarah hai jo raat bhar ibadat mein khara rahe aur kabhi na thakay aur din ko hamesha roza rakhe.",
      en: "The one who strives to look after a widow and a poor person is like a warrior striving in the cause of God, or like one who stands in prayer all night without tiring and fasts continuously by day."
    },
    tashreeh: {
      ur: "بے سہارا بیواؤں اور نادار خاندانوں کی کفالت اور ان کے مسائل حل کرنے کے لیے وقت اور محنت لگانا اسلام میں نفلی عبادات کے بلند ترین درجے کے برابر ثواب رکھتا ہے۔",
      ro: "Be-sahara bewaon aur nadar khandanon ki kafalat aur un ke masail hal karne ke liye waqt aur mehnat lagana Islam mein nafli ibadat ke buland-tareen darjay ke barabar sawab rakhta hai.",
      en: "Actively supporting vulnerable widows and the impoverished carries the spiritual weight of continuous night vigils and fasting."
    },
    tags: [
      { ur: "کفالتِ مساکین", ro: "Kafalat-e-Masakeen", en: "Supporting the Needy" },
      { ur: "خدمتِ خلق", ro: "Khidmat-e-Khalq", en: "Social Welfare" }
    ]
  },
  {
    id: "ma-245",
    slug: "nisf-maeeshat-nisf-aqal-aur-nisf-ilm",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "نصف معیشت، نصف عقل اور نصف علم کے تین ستون",
      ro: "Nisf Maeeshat, Nisf Aqal Aur Nisf Ilm Ke Teen Sutoon",
      en: "Half of Livelihood, Half of Wisdom, and Half of Knowledge"
    },
    quote: {
      ur: "خرچ میں میانہ روی اختیار کرنا آدھی معیشت ہے، لوگوں کے ساتھ محبت اور خوش خلقی سے پیش آنا آدھی عقل ہے، اور سلیقے سے اچھا سوال کرنا آدھا علم ہے۔",
      ro: "Kharch mein miyana-rawi ikhtiyar karna aadhi maeeshat hai, logon ke sath mohabbat aur khush-khulqi se pesh aana aadhi aqal hai, aur saleeqay se acha sawal karna aadha ilm hai.",
      en: "Moderation in spending is half of livelihood, showing affection and courtesy to people is half of wisdom, and asking a thoughtful question is half of knowledge."
    },
    tashreeh: {
      ur: "یہ تین مختصر اصول معاشی، سماجی اور علمی کامیابی کی کنجی ہیں: آمدنی کے اندر رہ کر خرچ کرنا تنگدستی سے بچاتا ہے، ملنساری دشمنیاں ختم کرتی ہے اور بامقصد سوال علم کے دروازے کھولتا ہے۔",
      ro: "Yeh teen mukhtasar usool maashi, samaji aur ilmi kamyabi ki kunji hain: aamdani ke andar reh kar kharch karna tangdasti se bachata hai, milansari dushmaniyan khatam karti hai aur ba-maqsad sawal ilm ke darwazay kholta hai.",
      en: "Financial discipline secures stability, warm social manners reflect true intelligence, and curious, respectful inquiry unlocks deep learning."
    },
    tags: [
      { ur: "کفایت شعاری", ro: "Kifayat-Shiari", en: "Financial Wisdom" },
      { ur: "خوش خلقی", ro: "Khush-Khulqi", en: "Courtesy" }
    ]
  },
  {
    id: "ma-246",
    slug: "narmi-har-cheez-ko-zeenat-deti-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 25",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "نرمی اور ملائمت ہر کام کو زینت بخشتی ہے",
      ro: "Narmi Aur Mulaimat Har Kaam Ko Zeenat Bakhshti Hai",
      en: "Gentleness Beautifies Everything It Touches"
    },
    quote: {
      ur: "نرمی (رفق) جس چیز میں بھی ہوتی ہے اسے آراستہ اور خوبصورت بنا دیتی ہے، اور جس چیز سے نرمی نکال لی جاتی ہے وہ عیب دار ہو جاتی ہے؛ اور جو شخص نرمی کے وصف سے محروم رہا وہ ساری بھلائی سے محروم رہا۔",
      ro: "Narmi (rifq) jis cheez mein bhi hoti hai usay aarasta aur khoobsurat bana deti hai, aur jis cheez se narmi nikal li jati hai woh aib-dar ho jati hai; aur jo shakhs narmi ke wasf se mehroom raha woh sari bhalai se mehroom raha.",
      en: "Gentleness never enters into anything without beautifying it, and is never removed from anything without marring it; whoever is deprived of gentleness is deprived of all good."
    },
    tashreeh: {
      ur: "سخت مزاجی اور درشتی بنے بنائے کام بگاڑ دیتی ہے جبکہ نرمی اور عفو و درگزر سے بگڑے ہوئے معاملات بھی سنور جاتے ہیں۔ گھر، دفتر اور معاشرے کی خوبصورتی نرمی ہی سے قائم ہے۔",
      ro: "Sakht-mizaji aur durushti banay-banaye kaam bigar deti hai jabkeh narmi aur afw-o-darguzar se bigray huye muamlat bhi sanwar jate hain. Ghar, daftar aur muashray ki khoobsurti narmi hi se qayam hai.",
      en: "Harshness ruins even righteous efforts, whereas gentleness and patience resolve complex knots and bring grace to every human interaction."
    },
    tags: [
      { ur: "نرمی", ro: "Narmi", en: "Gentleness" },
      { ur: "حسنِ عمل", ro: "Husn-e-Amal", en: "Graceful Conduct" }
    ]
  },
  {
    id: "ma-247",
    slug: "khane-mein-kabhi-aib-na-nikalna-nabawi-sunnat",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 38",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "کھانے میں کبھی عیب نہ نکالنا اور قناعت کا اسوہ",
      ro: "Khane Mein Kabhi Aib Na Nikalna Aur Qana'at Ka Uswah",
      en: "Never Criticizing Food and Practicing Gratitude at Meals"
    },
    quote: {
      ur: "حضور اکرم ﷺ نے کبھی کسی کھانے میں عیب نہیں نکالا؛ اگر رغبت ہوتی تو تناول فرما لیتے اور اگر طبیعت نہ چاہتی تو بغیر کوئی نقص بیان کیے خاموشی سے چھوڑ دیتے، اور جو کچھ حاضر ہوتا اس پر شکر ادا فرماتے۔",
      ro: "Huzoor Akram ﷺ ne kabhi kisi khane mein aib nahi nikala; agar raghbat hoti to tanawul farma lete aur agar tabiyat na chahti to baghair koi nuqs bayan kiye khamoshi se chhor dete, aur jo kuch hazir hota us par shukr ada farmate.",
      en: "The Prophet ﷺ never criticized any food presented to him; if he desired it, he ate of it, and if he did not, he simply left it in silence without finding fault—always praising God for whatever was available."
    },
    tashreeh: {
      ur: "کھانے میں نقص نکالنا جہاں رزق کی ناشکری ہے وہیں کھانا پکانے والے کی محنت اور دل کو ٹھیس پہنچانے کا باعث بنتا ہے۔ دسترخوان پر شکر گزاری اور خوش دلی سے کھانا سنتِ نبوی ﷺ ہے۔",
      ro: "Khane mein nuqs nikalna jahan rizq ki nashukri hai wahin khana pakane wale ki mehnat aur dil ko thees pohanchane ka baas banta hai. Dastarkhwan par shukr-guzari aur khush-dili se khana Sunnat-e-Nabawi ﷺ hai.",
      en: "Complaining about a meal shows ingratitude for God's provision and hurts the feelings of the one who prepared it; true refinement honors every meal with thankfulness."
    },
    tags: [
      { ur: "آدابِ طعام", ro: "Aadab-e-Ta'am", en: "Dining Etiquette" },
      { ur: "شکرِ نعمت", ro: "Shukr-e-Nemat", en: "Gratitude" }
    ]
  },
  {
    id: "ma-248",
    slug: "ghareeb-ki-dawat-qubool-karna-aur-zameen-par-baithna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 42",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "غریب کی دعوت قبول کرنا اور عاجزی سے زمین پر بیٹھنا",
      ro: "Ghareeb Ki Dawat Qubool Karna Aur Aajizi Se Zameen Par Baithna",
      en: "Accepting the Humble Invitation and Sitting on the Ground"
    },
    quote: {
      ur: "آپ ﷺ غلام اور مسکین کی دعوت بھی بخوشی قبول فرما لیتے، معمولی جو کی روٹی پر بھی تشریف لے جاتے، فرشِ زمین پر بیٹھ کر کھانا تناول فرماتے اور فرماتے کہ میں تو اللہ کا ایک بندہ ہوں، بندوں کی طرح بیٹھتا اور کھاتا ہوں۔",
      ro: "Aap ﷺ ghulam aur miskeen ki dawat bhi ba-khushi qubool farma lete, mamooli jau ki roti par bhi tashreef le jate, farsh-e-zameen par baith kar khana tanawul farmate aur farmate ke main to Allah ka aik banda hoon, bandon ki tarah baithta aur khata hoon.",
      en: "The Prophet ﷺ gladly accepted the invitations of servants and the poor even for simple barley bread; he sat humbly on the ground to eat, saying, 'I am but a servant of God—I sit as a servant sits and eat as a servant eats.'"
    },
    tashreeh: {
      ur: "امیروں کی پرتکلف دعوتوں میں تو ہر کوئی جاتا ہے، لیکن کسی غریب کے سادہ بلاوے پر خوشی سے جانا اور اس کا مان رکھنا نبوی اخلاق اور حقیقی تواضع ہے۔",
      ro: "Ameeron ki pur-takalluf dawaton mein to har koi jata hai, lekin kisi ghareeb ke sada bulaway par khushi se jana aur us ka maan rakhna Nabawi akhlaq aur haqeeqi tawazu hai.",
      en: "True humility is proven by honoring the simple invitation of a poor person with the same warmth and joy shown to the wealthy."
    },
    tags: [
      { ur: "خاکساری", ro: "Khaksari", en: "Humility" },
      { ur: "تالیفِ قلب", ro: "Taleef-e-Qalb", en: "Winning Hearts" }
    ]
  },
  {
    id: "ma-249",
    slug: "sabr-nisf-eman-aur-yaqeen-kamil-eman-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "صبر آدھا ایمان ہے اور یقین کامل ایمان ہے",
      ro: "Sabr Aadha Eman Hai Aur Yaqeen Kamil Eman Hai",
      en: "Patience is Half of Faith and Certainty is Complete Faith"
    },
    quote: {
      ur: "صبر نصف ایمان ہے اور یقین کامل ایمان ہے؛ اللہ تعالیٰ سے اس قدر ڈرو جس قدر تمہیں اس کی ضرورت ہے، اور اگر تم جاننا چاہتے ہو کہ اللہ کے ہاں تمہارا کیا مقام ہے تو یہ دیکھو کہ اس نے تمہیں کن کاموں میں مشغول رکھا ہے۔",
      ro: "Sabr nisf eman hai aur yaqeen kamil eman hai; Allah Ta'ala se us qadar daro jis qadar tumhein Us ki zaroorat hai, aur agar tum janna chahte ho ke Allah ke haan tumhara kya maqam hai to yeh dekho ke Us ne tumhein kin kaamon mein mashghool rakha hai.",
      en: "Patience is half of faith and unwavering certainty is the whole of faith; revere God in proportion to your need of Him, and if you wish to know your standing with God, look at the deeds in which He has engaged your time."
    },
    tashreeh: {
      ur: "انسان کے مقام کی پہچان اس کے دعووں سے نہیں بلکہ اس کی روزمرہ مصروفیات سے ہوتی ہے؛ اگر اس کا وقت خیر، خدمت اور حلال محنت میں گزر رہا ہے تو یہ رب کی توفیق اور قبولیت کی علامت ہے۔",
      ro: "Insan ke maqam ki pehchan us ke dawon se nahi balkay us ki rozmarra masroofiyat se hoti hai; agar us ka waqt khair, khidmat aur halal mehnat mein guzar raha hai to yeh Rab ki taufeeq aur qubooliyat ki alamat hai.",
      en: "A person's spiritual rank is reflected in how they spend their daily hours: being occupied in service, honesty, and goodness is the clearest sign of divine favor."
    },
    tags: [
      { ur: "صبر و یقین", ro: "Sabr o Yaqeen", en: "Patience & Certainty" },
      { ur: "توفیقِ خیر", ro: "Taufeeq-e-Khair", en: "Righteous Engagement" }
    ]
  },
  {
    id: "ma-250",
    slug: "insan-ki-parakh-sachai-amanat-aur-taqwa-se-karo",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 79",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "انسان کو پرکھنے کے تین عملی پیمانے",
      ro: "Insan Ko Parakhne Ke Teen Amli Paimanay",
      en: "Three Practical Standards for Judging Character"
    },
    quote: {
      ur: "کسی شخص کی محض ظاہری کثرتِ نماز و روزہ کو دیکھ کر دھوکہ نہ کھاؤ، بلکہ یہ دیکھو کہ جب وہ بولتا ہے تو کتنا سچ بولتا ہے، جب اس کے پاس امانت رکھی جائے تو کتنی دیانت دکھاتا ہے، اور جب حلال و حرام کا موقع آئے تو کتنا تقویٰ اختیار کرتا ہے۔",
      ro: "Kisi shakhs ki mehaz zahiri kasrat-e-namaz o roza ko dekh kar dhoka na khao, balkay yeh dekho ke jab woh bolta hai to kitna sach bolta hai, jab us ke paas amanat rakhi jaye to kitni diyanat dikhata hai, aur jab halal o haram ka mauqa aaye to kitna taqwa ikhtiyar karta hai.",
      en: "Do not be misled merely by a person's outward display of prayer and fasting; rather, observe their truthfulness when they speak, their integrity when entrusted with property, and their restraint when tempted by unlawful gain."
    },
    tashreeh: {
      ur: "عبادت کا اصل ثمرہ کردار کی پاکیزگی ہے۔ اگر کوئی شخص ظاہری عبادت گزار ہو لیکن گفتگو میں جھوٹا اور لین دین میں خائن ہو تو اس نے دین کی روح کو نہیں سمجھا۔",
      ro: "Ibadat ka asal samra kirdar ki pakeezgi hai. Agar koi shakhs zahiri ibadat-guzar ho lekin guftugu mein jhoota aur lain dain mein khain ho to us ne deen ki rooh ko nahi samjha.",
      en: "True devotion bears fruit in daily integrity: honest speech, financial trustworthiness, and moral restraint when facing temptation."
    },
    tags: [
      { ur: "معیارِ کردار", ro: "Miyar-e-Kirdar", en: "True Character" },
      { ur: "امانت و صداقت", ro: "Amanat o Sadaqat", en: "Honesty & Trust" }
    ]
  },
  {
    id: "ma-251",
    slug: "ibadat-ki-halawat-chaar-cheezon-mein-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 85",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "عبادت اور بندگی کی حلاوت پانے کے چار اصول",
      ro: "Ibadat Aur Bandagi Ki Halawat Pane Ke Chaar Usool",
      en: "Four Keys to Experiencing the Sweetness of Worship"
    },
    quote: {
      ur: "میں نے عبادت کی حلاوت اور مٹھاس چار چیزوں میں پائی: اول فرائضِ الٰہی کی ادائیگی میں، دوم اللہ کی حرام کردہ چیزوں سے بچنے میں، سوم ثواب کی امید پر بھلائی کا حکم دینے میں، اور چہارم غضبِ الٰہی کے خوف سے برائی سے روکنے میں۔",
      ro: "Main ne ibadat ki halawat aur mithas chaar cheezon mein payi: awwal faraiz-e-Ilahi ki adaigi mein, doem Allah ki haram karda cheezon se bachne mein, soem sawab ki umeed par bhalai ka hukm dene mein, aur chaharum ghazab-e-Ilahi ke khauf se burai se rokne mein.",
      en: "I found the sweetness of devotion in four things: fulfilling divine obligations with joy, abstaining from what God has forbidden, encouraging goodness out of hope for His reward, and preventing wrong out of reverence for Him."
    },
    tashreeh: {
      ur: "عبادت میں لذت تب نصیب ہوتی ہے جب انسان فرائض کی پابندی کے ساتھ ساتھ اپنی زندگی کو حرام سے پاک کرے اور معاشرے میں خیر پھیلانے کا درد اپنے دل میں رکھے۔",
      ro: "Ibadat mein lazzat tab naseeb hoti hai jab insan faraiz ki pabandi ke sath sath apni zindagi ko haram se paak kare aur muashray mein khair phailane ka dard apne dil mein rakhe.",
      en: "Spiritual joy blossoms when personal devotion is paired with ethical purity and a sincere commitment to uplifting society."
    },
    tags: [
      { ur: "حلاوتِ ایمان", ro: "Halawat-e-Eman", en: "Sweetness of Faith" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Piety" }
    ]
  },
  {
    id: "ma-252",
    slug: "dirham-khone-ka-gham-aur-umar-zaya-hone-ki-be-fikri",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91-93",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "مال کے نقصان کا غم اور قیمتی عمر کے ضیاع کی غفلت",
      ro: "Maal Ke Nuqsan Ka Gham Aur Qeemati Umar Ke Ziya Ki Ghaflat",
      en: "Grieving Over Lost Coins While Ignoring Lost Days of Life"
    },
    quote: {
      ur: "تعجب ہے اس شخص پر کہ اس کا ایک درہم کھو جائے تو غمگین ہو جاتا ہے، لیکن اس کی عمر کا ایک پورا دن بغیر نیکی کے گھٹ جائے تو کچھ رنج نہیں کرتا؛ سب سے بڑی دولتمندی جھوٹی آرزوؤں کو چھوڑ دینا ہے، اور لوگوں کے ساتھ خوش اخلاقی سے گزر بسر کرنا عقل کا تاج ہے۔",
      ro: "Ta'ajjub hai us shakhs par ke us ka aik dirham kho jaye to ghamgeen ho jata hai, lekin us ki umar ka aik poora din baghair neki ke ghat jaye to kuch ranj nahi karta; sab se badi daulatmandi jhooti aarzuon ko chhor dena hai, aur logon ke sath khush-akhlaqi se guzar-basar karna aqal ka taaj hai.",
      en: "How strange is the one who grieves over losing a single coin, yet feels no sorrow when a whole day of their life slips away without doing good! The greatest wealth is freeing oneself from vain desires, and treating people with graciousness is the crown of wisdom."
    },
    tashreeh: {
      ur: "کھویا ہوا روپیہ دوبارہ کمایا جا سکتا ہے مگر زندگی کا جو دن گزر گیا وہ قیامت تک واپس نہیں آ سکتا۔ عقلمند وہ ہے جو پیسے سے زیادہ اپنے وقت اور اخلاق کی حفاظت کرے۔",
      ro: "Khoya huwa rupiya dobara kamaya ja sakta hai magar zindagi ka jo din guzar gaya woh qayamat tak wapis nahi aa sakta. Aqalmand woh hai jo paisay se zyada apne waqt aur akhlaq ki hifazat kare.",
      en: "Lost money can be earned back, but a wasted day of life is gone forever; true wisdom values time and character above material coin."
    },
    tags: [
      { ur: "قدرِ وقت", ro: "Qadr-e-Waqt", en: "Valuing Time" },
      { ur: "دانائی", ro: "Danai", en: "Wisdom" }
    ]
  },
  {
    id: "ma-253",
    slug: "duniya-ko-akhirat-ke-badlay-becho-dono-mil-jayengi",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 98",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "دنیا اور آخرت کی تجارت کا سنہرا اصول",
      ro: "Duniya Aur Akhirat Ki Tijarat Ka Sunehra Usool",
      en: "The Golden Principle of Trading This World for the Hereafter"
    },
    quote: {
      ur: "اے بیٹے! اپنی دنیا کو اپنی آخرت کے عوض بیچ دے تو تجھے دنیا اور آخرت دونوں کا نفع حاصل ہوگا؛ اور اپنی آخرت کو دنیا کی خاطر ہرگز مت بیچنا ورنہ دنیا اور آخرت دونوں ہاتھ سے کھو بیٹھے گا۔",
      ro: "Aye betay! Apni duniya ko apni akhirat ke iwaz bech de to tujhe duniya aur akhirat dono ka nafa hasil hoga; aur apni akhirat ko duniya ki khatir hargiz mat bechna warna duniya aur akhirat dono hath se kho baithega.",
      en: "O my son! Trade your worldly desires for the Hereafter and you will win the best of both worlds; never trade away your Hereafter for worldly gain, lest you lose both."
    },
    tashreeh: {
      ur: "جو انسان اصول، ایمان اور آخرت کو مقدم رکھتا ہے، اللہ اس کی دنیا کو بھی باعزت اور پرسکون بنا دیتا ہے؛ لیکن جو شخص تھوڑے سے دنیاوی مفاد کے لیے اپنا ضمیر بیچ دے وہ کہیں کا نہیں رہتا۔",
      ro: "Jo insan usool, eman aur akhirat ko muqaddam rakhta hai, Allah us ki duniya ko bhi ba-izzat aur pur-sukoon bana deta hai; lekin jo shakhs thoray se dunyawi mafad ke liye apna zameer bech de woh kahin ka nahi rehta.",
      en: "Prioritizing eternal principles brings peace and honor in this life as well, whereas sacrificing moral integrity for temporary gain leads to ruin in both."
    },
    tags: [
      { ur: "حکمتِ لقمان", ro: "Hikmat-e-Luqman", en: "Luqman's Wisdom" },
      { ur: "کامیابی", ro: "Kamyabi", en: "True Success" }
    ]
  },
  {
    id: "ma-254",
    slug: "aik-baat-bardasht-na-karne-wala-kai-baatein-sunta-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 248",
    author: {
      ur: "اقوالِ حکماء و بزرگان",
      ro: "Aqwal-e-Hukama o Buzurgan",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "ایک تلخ بات کو نظرانداز کرنے کی حکمت اور مکافاتِ عمل",
      ro: "Aik Talkh Baat Ko Nazar-Andaz Karne Ki Hikmat Aur Mukafat-e-Amal",
      en: "The Wisdom of Overlooking a Single Harsh Word"
    },
    quote: {
      ur: "جو شخص کسی کی ایک ناگوار بات برداشت نہیں کرتا اسے بہت سی ناگوار باتیں سننی پڑتی ہیں؛ اور جو انسان کانٹے بوتا ہے وہ کبھی انگور کی فصل نہیں کاٹ سکتا۔",
      ro: "Jo shakhs kisi ki aik nagawar baat bardasht nahi karta usay bohot si nagawar baatein sunni parti hain; aur jo insan kantay bota hai woh kabhi angoor ki fasal nahi kaat sakta.",
      en: "Whoever cannot patiently overlook a single harsh word ends up hearing many more; and one who plants thorns can never expect to harvest grapes."
    },
    tashreeh: {
      ur: "چھوٹی سی بات کو انا کا مسئلہ بنا کر پلٹ کر جواب دینے سے جھگڑا طول پکڑتا ہے اور انسان کو مزید تلخ باتیں سننی پڑتی ہیں۔ چشم پوشی کر لینا فتنہ کو پہلی ہی چنگاری پر بجھا دیتا ہے۔",
      ro: "Choti si baat ko ana ka masla bana kar palat kar jawab dene se jhagra tool pakarta hai aur insan ko mazeed talkh baatein sunni parti hain. Chashm-poshi kar lena fitna ko pehli hi chingari par bujha deta hai.",
      en: "Escalating a minor slight invites a storm of insults, while letting a small provocation pass in silence extinguishes conflict before it begins."
    },
    tags: [
      { ur: "تحمل", ro: "Tahammul", en: "Tolerance" },
      { ur: "مکافاتِ عمل", ro: "Mukafat-e-Amal", en: "Consequences" }
    ]
  },
  {
    id: "ma-255",
    slug: "ustad-aur-mohsin-ka-adab-ilm-ki-barkat-ka-raaz",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 320",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "استاد اور محسن کا ادب علم کی برکت کی کنجی ہے",
      ro: "Ustad Aur Mohsin Ka Adab Ilm Ki Barkat Ki Kunji Hai",
      en: "Respecting Teachers and Benefactors Unlocks the Blessing of Knowledge"
    },
    quote: {
      ur: "علم کی برکت اور نفع صرف ذہانت سے حاصل نہیں ہوتا بلکہ استاد، والدین اور محسن کے ادب سے ملتا ہے؛ جس طالبِ علم نے اپنے سکھانے والے کی تعظیم کھو دی وہ علم کی کتابیں یاد کر کے بھی اس کے نور سے محروم رہا۔",
      ro: "Ilm ki barkat aur nafa sirf zahanat se hasil nahi hota balkay ustad, walideen aur mohsin ke adab se milta hai; jis talib-e-ilm ne apne sikhane wale ki tazeem kho di woh ilm ki kitabein yaad kar ke bhi us ke noor se mehroom raha.",
      en: "The true blessing of knowledge is won not by intellect alone, but through deep respect for teachers, parents, and benefactors; one who lacks reverence may memorize books yet remain deprived of their light."
    },
    tashreeh: {
      ur: "تاریخِ اسلام کے تمام بڑے علماء و حکماء کا متفقہ تجربہ ہے کہ بے ادبی انسان کو علم و ہنر کے فیض سے محروم کر دیتی ہے، جبکہ استاد اور بزرگوں کا احترام معمولی صلاحیت کو بھی اوجِ کمال تک پہنچا دیتا ہے۔",
      ro: "Tareekh-e-Islam ke tamam bade ulama o hukama ka muttafiqa tajurba hai ke be-adabi insan ko ilm o hunar ke faiz se mehroom kar deti hai, jabkeh ustad aur buzurgon ka ehtiram mamooli salahiyat ko bhi auj-e-kamal tak pohancha deta hai.",
      en: "Humility and gratitude toward those who teach and guide us transform raw information into blessed, life-changing wisdom."
    },
    tags: [
      { ur: "ادبِ استاد", ro: "Adab-e-Ustad", en: "Respecting Teachers" },
      { ur: "برکتِ علم", ro: "Barkat-e-Ilm", en: "Blessed Knowledge" }
    ]
  }
];


export const batch18Quotes: QuoteItem[] = [
  {
    id: "ma-256",
    slug: "kharch-mein-bukhl-aur-israf-ke-darmiyan-aitdaal",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Furqan (25:67) & Makhzan-e-Akhlaq - Page 10-11",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "خرچ کرنے میں بخل اور اسراف کے درمیان اعتدال",
      ro: "Kharch Karne Mein Bukhl Aur Israf Ke Darmiyan Aitdaal",
      en: "The Middle Path Between Miserliness and Extravagance"
    },
    quote: {
      ur: "اپنا ہاتھ اپنی گردن سے بندھا ہوا نہ رکھ کہ بالکل بخیل بن جائے، اور نہ اس کو بالکل ہی کھول دے کہ سب کچھ لٹا کر ملامت زدہ اور تہی دست ہو کر بیٹھ رہے؛ رحمان کے سچے بندے وہ ہیں جو خرچ کرتے وقت نہ اسراف کرتے ہیں اور نہ تنگی، بلکہ ان کا طریق ان دونوں کے درمیان اعتدال پر ہوتا ہے۔",
      ro: "Apna hath apni gardan se bandha huwa na rakh ke bilkul bakhil ban jaye, aur na us ko bilkul hi khol de ke sab kuch luta kar malamat-zada aur tahi-dast ho kar baith rahe; Rehman ke sachay banday woh hain jo kharch karte waqt na israf karte hain aur na tangi, balkay un ka tareeq in dono ke darmiyan aitdaal par hota hai.",
      en: "Do not keep your hand chained to your neck in miserliness, nor extend it completely in wastefulness lest you sit back blameworthy and destitute; the true servants of the Most Merciful are those who, when they spend, are neither extravagant nor tight-fisted, maintaining a balanced middle path."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلامی معاشیات کا سنہرا اصول توازن ہے۔ نہ تو مال سمیٹ کر رکھنے کی اجازت ہے کہ اپنے اہلِ خانہ اور محتاجوں کا حق مارا جائے، اور نہ ہی نمود و نمائش میں اس طرح اڑانے کی اجازت ہے کہ کل کو انسان خود دوسروں کے آگے ہاتھ پھیلانے پر مجبور ہو جائے۔ آج کا عملی سبق یہ ہے کہ اپنی آمدنی کے اندر رہتے ہوئے میانہ روی کو اپنا معمول بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islami maashiyat ka sunehra usool tawazun hai. Na to maal sameet kar rakhne ki ijazat hai ke apne ahl-e-khana aur mohtajon ka haq mara jaye, aur na hi numood-o-numaish mein is tarah urane ki ijazat hai ke kal ko insan khud doosron ke aagay hath phailane par majboor ho jaye. Aaj ka amli sabaq yeh hai ke apni aamdani ke andar rehte hue miyana-rawi ko apna mamool banayein.",
      en: "Context & Practical Lesson: Financial wisdom lies in balance: avoiding stinginess that deprives one's family and the poor, while shunning reckless spending that leads to ruin."
    },
    tags: [
      { ur: "میانہ روی", ro: "Miyana-Rawi", en: "Moderation" },
      { ur: "توازنِ معیشت", ro: "Tawazun-e-Maeeshat", en: "Financial Balance" }
    ]
  },
  {
    id: "ma-257",
    slug: "qarabati-miskeen-aur-musafir-ka-haq-aur-fuzool-kharchi",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:26-27) & Makhzan-e-Akhlaq - Page 12",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "رشتہ دار، مسکین و مسافر کا حق اور فضول خرچی کی مذمت",
      ro: "Rishtedar, Miskeen o Musafir Ka Haq Aur Fuzool-Kharchi Ki Mazammat",
      en: "Fulfilling the Rights of Kin and the Needy Without Waste"
    },
    quote: {
      ur: "قرابت دار کو اس کا حق دو اور مسکین اور مسافر کو بھی ان کا حق ادا کرو، اور اپنا مال بے جا فضول خرچی میں مت اڑاؤ؛ بے شک فضول خرچی کرنے والے شیطان کے بھائی ہیں اور شیطان اپنے پروردگار کا بڑا ناشکرا ہے۔",
      ro: "Qarabati ko us ka haq do aur miskeen aur musafir ko bhi un ka haq ada karo, aur apna maal be-ja fuzool-kharchi mein mat urao; be-shak fuzool-kharchi karne wale shaitan ke bhai hain aur shaitan apne Parwardigar ka bada nashukra hai.",
      en: "Give the relative their rightful due, as well as the needy and the stranded traveler, and do not squander your wealth wastefully; indeed, the wasteful are brothers to Satan, and Satan is ever ungrateful to his Lord."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن نے رشتہ داروں اور ناداروں کی مدد کو محض احسان نہیں بلکہ ان کا ’حق‘ قرار دیا ہے۔ جو مال غریبوں کی ضرورت پوری کرنے کے بجائے جھوٹی شان و شوکت اور اسراف میں اڑایا جاتا ہے وہ درحقیقت نعمتِ الٰہی کی ناشکری ہے۔ آج کا عملی سبق یہ ہے کہ مال کو ضرورت مندوں کی فلاح پر خرچ کریں اور نمائش سے پرہیز کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran ne rishtedaron aur nadaron ki madad ko mehaz ehsan nahi balkay un ka 'haq' qarar diya hai. Jo maal ghareebon ki zaroorat poori karne ke bajaye jhooti shaan-o-shaukat aur israf mein uraya jata hai woh dar-haqeeqat nemat-e-Ilahi ki nashukri hai. Aaj ka amli sabaq yeh hai ke maal ko zaroorat-mandon ki falah par kharch karein aur numaish se parhez karein.",
      en: "Context & Practical Lesson: Supporting relatives and the needy is a moral obligation, whereas squandering wealth on vanity and excess is a form of ingratitude for divine blessings."
    },
    tags: [
      { ur: "حقوق العباد", ro: "Huqooq-ul-Ibad", en: "Social Rights" },
      { ur: "اسراف سے پرہیز", ro: "Israf Se Parhez", en: "Avoiding Waste" }
    ]
  },
  {
    id: "ma-258",
    slug: "qoul-e-sadeed-seedhi-baat-aur-aamaal-ki-islah",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Ahzab (33:70-71) & Makhzan-e-Akhlaq - Page 14-15",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ہمیشہ سیدھی اور سچی بات کہنے سے اعمال کی درستی",
      ro: "Hamesha Seedhi Aur Sachi Baat Kehne Se Aamaal Ki Durusti",
      en: "Speaking Straight and Truthful Words Reforms All Deeds"
    },
    quote: {
      ur: "اے ایمان والو! اللہ سے ڈرو اور ہمیشہ سیدھی، کھری اور سچی بات (قولِ سدید) کہا کرو؛ اس کے نتیجے میں اللہ تمہارے اعمال کو تمہارے لیے سنوار دے گا اور تمہارے گناہ معاف فرما دے گا۔",
      ro: "Aye eman walo! Allah se daro aur hamesha seedhi, khari aur sachi baat (qoul-e-sadeed) kaha karo; is ke nateejay mein Allah tumhare aamaal ko tumhare liye sanwar dega aur tumhare gunah maaf farma dega.",
      en: "O believers! Be mindful of Allah and always speak straightforward, truthful words; He will then set your deeds right for you and forgive your sins."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جب انسان ہیر پھیر، مصلحت پرستی اور جھوٹ چھوڑ کر صاف اور سچی بات کہنے کی عادت بنا لیتا ہے تو اس کے معاملات کی الجھنیں خود بخود سلجھ جاتی ہیں اور اس کا پورا کردار سنور جاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنی گفتگو میں ہمیشہ صداقت اور واضح پن کو ترجیح دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jab insan her-pher, maslehat-parasti aur jhoot chhor kar saaf aur sachi baat kehne ki aadat bana leta hai to us ke muamlat ki uljhanein khud-ba-khud sulajh jati hain aur us ka poora kirdar sanwar jata hai. Aaj ka amli sabaq yeh hai ke apni guftugu mein hamesha sadaqat aur wazeh-pan ko tarjeeh dein.",
      en: "Context & Practical Lesson: Adopting complete honesty and clarity in speech untangles life's complications and brings divine blessing to all of one's actions."
    },
    tags: [
      { ur: "قولِ سدید", ro: "Qoul-e-Sadeed", en: "Straight Speech" },
      { ur: "اصلاحِ اعمال", ro: "Islah-e-Aamaal", en: "Rectifying Deeds" }
    ]
  },
{
    id: "ma-259",
    slug: "deen-sarasar-khair-khwahi-ka-naam-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دین سراسر خیر خواہی اور بھلائی چاہنے کا نام ہے",
      ro: "Deen Sarasar Khair-Khwahi Aur Bhalai Chahne Ka Naam Hai",
      en: "Religion is Entirely Sincere Goodwill Toward All"
    },
    quote: {
      ur: "دین سراسر خیر خواہی اور نصیحت کا نام ہے: اللہ کے لیے، اس کی کتاب کے لیے، اس کے رسول ﷺ کے لیے، اور تمام مسلمانوں کے ذمہ داروں اور عام انسانوں کے لیے؛ جس کے دل میں مخلوق کی خیر خواہی نہیں وہ ایمان کی لذت نہیں پا سکتا۔",
      ro: "Deen sarasar khair-khwahi aur nasihat ka naam hai: Allah ke liye, Us ki Kitab ke liye, Us ke Rasool ﷺ ke liye, aur tamam Musalmanon ke zimmedaron aur aam insanon ke liye; jis ke dil mein makhlooq ki khair-khwahi nahi woh eman ki lazzat nahi pa sakta.",
      en: "Religion is entirely sincere goodwill: devotion to Allah, His Book, and His Messenger ﷺ, and sincere counsel and goodwill toward leaders and the common people alike."
    },
    tashreeh: {
      ur: "خیر خواہی کا مطلب یہ ہے کہ انسان دل سے ہر شخص کی بھلائی چاہے، کسی کو غلط مشورہ نہ دے، کسی کے ساتھ دھوکہ نہ کرے اور اپنے علم و ہنر سے ہر ایک کا بھلا سوچے۔",
      ro: "Khair-khwahi ka matlab yeh hai ke insan dil se har shakhs ki bhalai chahe, kisi ko ghalat mashwara na de, kisi ke sath dhoka na kare aur apne ilm o hunar se har aik ka bhala soche.",
      en: "True religiosity manifests as genuine goodwill: offering honest advice, wishing well for every neighbour, and never deceiving anyone."
    },
    tags: [
      { ur: "خیر خواہی", ro: "Khair-Khwahi", en: "Sincere Goodwill" },
      { ur: "روحِ دین", ro: "Rooh-e-Deen", en: "Essence of Faith" }
    ]
  },
  {
    id: "ma-260",
    slug: "safaid-resh-buzurg-aur-ahl-e-ilm-o-adal-ki-tazeem",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 23-24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بزرگوں، اہلِ علم اور عادل ذمہ دار کا احترام",
      ro: "Buzurgon, Ahl-e-Ilm Aur Aadil Zimmedar Ka Ehtiram",
      en: "Honoring the Elderly, Scholars, and Just Leaders"
    },
    quote: {
      ur: "اللہ تعالیٰ کی تعظیم و اجلال میں سے یہ ہے کہ سفید ریش بوڑھے مسلمان کا احترام کیا جائے، اس صاحبِ علم و قرآن کی عزت کی جائے جو اس میں غلو اور بے عملی نہ کرے، اور انصاف کرنے والے حاکم کا اکرام کیا جائے۔",
      ro: "Allah Ta'ala ki tazeem o ijlal mein se yeh hai ke safaid-resh burhay Musalman ka ehtiram kiya jaye, us sahib-e-ilm o Quran ki izzat ki jaye jo us mein ghuloo aur be-amali na kare, aur insaf karne wale hakim ka ikram kiya jaye.",
      en: "Part of glorifying and revering Allah is to show honor to a gray-haired elder, to respect a bearer of sacred knowledge who practices it with balance, and to honor a just leader."
    },
    tashreeh: {
      ur: "معاشرے کا وقار تب قائم رہتا ہے جب عمر رسیدہ بزرگوں کو ان کی سادگی کے باوجود عزت دی جائے، باعمل علماء کی قدر کی جائے اور انصاف قائم کرنے والوں کا ہاتھ مضبوط کیا جائے۔",
      ro: "Muashray ka waqar tab qayam rehta hai jab umar-raseeda buzurgon ko un ki sadgi ke bawajood izzat di jaye, ba-amal ulama ki qadr ki jaye aur insaf qayam karne walon ka hath mazboot kiya jaye.",
      en: "A noble society reveres the wisdom of age, honors upright scholarship, and respects just governance as an expression of reverence for the Creator."
    },
    tags: [
      { ur: "تکریمِ بزرگاں", ro: "Takreem-e-Buzurgan", en: "Respecting Elders" },
      { ur: "ادب", ro: "Adab", en: "Reverence" }
    ]
  },
  {
    id: "ma-261",
    slug: "panch-nematon-ko-panch-halaton-se-pehle-ghaneemat-jano",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 27-28",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "پانچ نعمتوں کو پانچ حالتوں سے پہلے غنیمت جانو",
      ro: "Panch Nematon Ko Panch Halaton Se Pehle Ghaneemat Jano",
      en: "Seize Five Blessings Before Five States Arrive"
    },
    quote: {
      ur: "پانچ چیزوں کو پانچ چیزوں سے پہلے غنیمت جانو: اپنی جوانی کو بڑھاپے سے پہلے، اپنی صحت و تندرستی کو بیماری سے پہلے، اپنی خوشحالی کو تنگدستی سے پہلے، اپنی فراغت کو مشغولی سے پہلے، اور اپنی زندگی کو موت سے پہلے۔",
      ro: "Panch cheezon ko panch cheezon se pehle ghaneemat jano: apni jawani ko burhapay se pehle, apni sehat o tandrusti ko bimari se pehle, apni khushhali ko tangdasti se pehle, apni faraghat ko mashghooli se pehle, aur apni zindagi ko maut se pehle.",
      en: "Take advantage of five blessings before five states overtake you: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busyness, and your life before your death."
    },
    tashreeh: {
      ur: "انسان کو اکثر نعمت کی قدر اس کے چھن جانے کے بعد ہوتی ہے۔ جوانی کی طاقت، تندرستی، فارغ اوقات اور مالی وسعت کو بروقت نیک اور تعمیری کاموں میں لگا دینا ہی اصل ہوشیاری ہے۔",
      ro: "Insan ko aksar nemat ki qadr us ke chhin jane ke baad hoti hai. Jawani ki taqat, tandrusti, farigh auqat aur maali wus'at ko bar-waqt nek aur tameeri kaamon mein laga dena hi asal hoshiyari hai.",
      en: "We rarely appreciate youth, health, wealth, free time, and life itself until they slip away; investing them in purposeful deeds today prevents tomorrow's regret."
    },
    tags: [
      { ur: "غنیمتِ وقت", ro: "Ghaneemat-e-Waqt", en: "Valuing Blessings" },
      { ur: "جوانی و صحت", ro: "Jawani o Sehat", en: "Youth & Health" }
    ]
  },
  {
    id: "ma-262",
    slug: "bewa-aur-miskeen-ke-kaam-ke-liye-sath-chalna-nabawi-tawazu",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 36-37",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "بیوہ اور مسکین کی حاجت پوری کرنے کے لیے ان کے ساتھ چلنا",
      ro: "Bewa Aur Miskeen Ki Hajat Poori Karne Ke Liye Un Ke Sath Chalna",
      en: "Walking Alongside Widows and the Poor to Fulfill Their Needs"
    },
    quote: {
      ur: "حضور اکرم ﷺ بیوہ عورت، مسکین اور غلام کے ساتھ ان کا کام کرانے کے لیے چلنے میں کبھی عار یا تکبر محسوس نہ فرماتے؛ مدینہ کی کوئی کنیز یا کمزور شخص بھی آپ ﷺ کو اپنی حاجت کے لیے بلاتا تو آپ ﷺ اس کا کام پورا ہونے تک اس کے ساتھ کھڑے رہتے۔",
      ro: "Huzoor Akram ﷺ bewa aurat, miskeen aur ghulam ke sath un ka kaam karane ke liye chalne mein kabhi aar ya takabbur mehsoos na farmate; Madinah ki koi kaneez ya kamzor shakhs bhi Aap ﷺ ko apni hajat ke liye bulata to Aap ﷺ us ka kaam poora hone tak us ke sath kharay rehte.",
      en: "The Prophet ﷺ never felt too proud to walk alongside a widow, an indigent person, or a servant until he had fulfilled their need; if the humblest person in Madinah asked for his help, he stood by them patiently until their matter was resolved."
    },
    tashreeh: {
      ur: "بڑے منصب پر فائز ہونے کے باوجود کسی بے بس یا غریب انسان کی بات کھڑے ہو کر سننا اور خود چل کر اس کا مسئلہ حل کرانا نبوی اخلاق کی وہ بلندی ہے جو دنیا کے جھوٹے پروٹوکول کو خاک میں ملا دیتی ہے۔",
      ro: "Bade mansab par faiz hone ke bawajood kisi be-bas ya ghareeb insan ki baat kharay ho kar sunna aur khud chal kar us ka masla hal karana Nabawi akhlaq ki woh bulandi hai jo duniya ke jhootay protocol ko khak mein mila deti hai.",
      en: "True greatness requires no barrier of status; personally walking with the vulnerable to solve their problems is the highest model of servant leadership."
    },
    tags: [
      { ur: "تواضعِ نبوی ﷺ", ro: "Tawazu-e-Nabawi ﷺ", en: "Prophetic Humility" },
      { ur: "حاجت روائی", ro: "Hajat-Rawai", en: "Serving the Weak" }
    ]
  },
  {
    id: "ma-263",
    slug: "daimi-tabassum-pakeeza-zaban-aur-majlis-ka-waqar",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 41-43",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "دائمی تبسم، پاکیزہ زبان اور نبوی مجلس کا باوقار سکون",
      ro: "Daimi Tabassum, Pakeeza Zaban Aur Nabawi Majlis Ka Ba-Waqar Sukoon",
      en: "Constant Cheerfulness, Pure Speech, and Dignified Gatherings"
    },
    quote: {
      ur: "آپ ﷺ سب لوگوں سے زیادہ متبسم اور خندہ پیشانی والے تھے؛ آپ ﷺ نہ فحش گو تھے، نہ لعن طعن کرنے والے اور نہ بازاروں میں شور مچانے والے۔ آپ ﷺ کی مجلس حلم، حیا، صبر اور امانت کی مجلس ہوتی جس میں آوازیں بلند نہ کی جاتیں۔",
      ro: "Aap ﷺ sab logon se zyada mutabassim aur khanda-peshani wale thay; Aap ﷺ na fahash-go thay, na la'n-ta'n karne wale aur na bazaron mein shor machane wale. Aap ﷺ ki majlis hilm, haya, sabr aur amanat ki majlis hoti jis mein aawazein buland na ki jatein.",
      en: "The Prophet ﷺ was the most cheerful and smiling of people; he never uttered vulgarity, never cursed anyone, and never raised his voice in the marketplaces. His gathering was a sanctuary of forbearance, modesty, patience, and trust."
    },
    tashreeh: {
      ur: "سنجیدگی کا مطلب چہرے پر غصہ طاری رکھنا نہیں ہے بلکہ لبوں پر نرم مسکراہٹ، زبان پر پاکیزہ الفاظ اور محفل میں حیا و وقار کا ہونا ہی کامل شخصیت کی علامت ہے۔",
      ro: "Sanjeedgi ka matlab chehray par ghussa tari rakhna nahi hai balkay labon par naram muskurahat, zaban par pakeeza alfaz aur mehfil mein haya o waqar ka hona hi kamil shakhsiyat ki alamat hai.",
      en: "Dignity is not sternness; it shines through a warm smile, pure language free of harshness, and gatherings filled with calm respect."
    },
    tags: [
      { ur: "شمائلِ نبوی ﷺ", ro: "Shamail-e-Nabawi ﷺ", en: "Prophetic Grace" },
      { ur: "پاکیزہ کلام", ro: "Pakeeza Kalam", en: "Pure Speech" }
    ]
  },
  {
    id: "ma-264",
    slug: "zulm-ahad-shikni-aur-makr-ka-wabaal-khud-insan-par",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 67-68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "ظلم، عہد شکنی اور فریب کا وبال کرنے والے ہی پر پڑتا ہے",
      ro: "Zulm, Ahad-Shikni Aur Fareeb Ka Wabaal Karne Wale Hi Par Parta Hai",
      en: "Injustice, Betrayal, and Deceit Backfire Upon the Doer"
    },
    quote: {
      ur: "تین خصلتیں جس شخص میں ہوں ان کا وبال خود اسی کی ذات پر پلٹ آتا ہے: کسی پر ناحق ظلم و زیادتی کرنا، عہد و پیمان توڑنا، اور کسی کے خلاف مکر و فریب کا جال بچھانا؛ کیونکہ برا مکر اپنے چلنے والے ہی کو گھیر لیتا ہے۔",
      ro: "Teen khaslatein jis shakhs mein hon un ka wabaal khud usi ki zaat par palat aata hai: kisi par nahaq zulm-o-ziyadati karna, ahad-o-paiman torna, aur kisi ke khilaf makr-o-fareeb ka jaal bichhana; kyunkeh bura makr apne chalne wale hi ko gher leta hai.",
      en: "Three traits inevitably recoil upon the very person who practices them: committing unjust aggression, breaking solemn promises, and plotting deceit against others—for an evil scheme traps none but its own maker."
    },
    tashreeh: {
      ur: "چالاک اور ظالم انسان سمجھتا ہے کہ اس نے فریب دے کر دوسرے کو نقصان پہنچا دیا، حالانکہ قدرت کا قانون ہے کہ جو شخص دوسرے کے لیے گڑھا کھودتا ہے وہ بالآخر خود اسی میں گرتا ہے۔",
      ro: "Chalak aur zalim insan samajhta hai ke us ne fareeb de kar doosre ko nuqsan pohancha diya, halankeh qudrat ka qanoon hai ke jo shakhs doosre ke liye garha khodta hai woh bilakhir khud usi mein girta hai.",
      en: "Those who rely on treachery, broken promises, and oppression only dig a pit for themselves, as moral law ensures deceit rebounds upon its author."
    },
    tags: [
      { ur: "مکافاتِ عمل", ro: "Mukafat-e-Amal", en: "Moral Consequence" },
      { ur: "وفائے عہد", ro: "Wafa-e-Ahad", en: "Faithfulness" }
    ]
  },
  {
    id: "ma-265",
    slug: "izzat-sirf-haq-aur-sachai-ke-daman-mein-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 75-78",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "حقیقی عزت کا سرچشمہ اور سچے دوستوں کی صحبت",
      ro: "Haqeeqi Izzat Ka Sarchashma Aur Sachay Doston Ki Suhbat",
      en: "The Source of True Honor and Keeping Company with the Truthful"
    },
    quote: {
      ur: "ہم وہ لوگ ہیں جنہیں اللہ نے اسلام اور حق کی بدولت عزت عطا فرمائی، پس جب بھی ہم اس کے سوا کسی اور راستے میں عزت تلاش کریں گے تو رسوا ہوں گے۔ سچے بھائیوں کی صحبت اختیار کرو کہ وہ خوشحالی میں زینت اور مصیبت میں مضبوط سہارا ہوتے ہیں۔",
      ro: "Hum woh log hain jinhein Allah ne Islam aur haq ki badolat izzat ata farmai, pas jab bhi hum is ke siwa kisi aur rastay mein izzat talash karenge to ruswa honge. Sachay bhaiyon ki suhbat ikhtiyar karo ke woh khushhali mein zeenat aur musibat mein mazboot sahara hote hain.",
      en: "We are a people whom God honored through Islam and moral truth; whenever we seek honor through anything else, we invite humiliation. Keep the company of truthful brothers, for they are an adornment in prosperity and a shield in adversity."
    },
    tashreeh: {
      ur: "اپنے ایمان، اصول اور اخلاقی اقدار کو چھوڑ کر جھوٹی نمود و نمائش میں عزت ڈھونڈنے والا کبھی باوقار نہیں ہو سکتا۔ سچے اور باوفا دوست زندگی کا سب سے قیمتی اثاثہ ہیں۔",
      ro: "Apne eman, usool aur akhlaqi aqdar ko chhor kar jhooti numood-o-numaish mein izzat dhoondne wala kabhi ba-waqar nahi ho sakta. Sachay aur ba-wafa dost zindagi ka sab se qeemati asasa hain.",
      en: "Lasting dignity comes from standing firm on moral principles rather than chasing superficial trends, and surrounding oneself with honest companions."
    },
    tags: [
      { ur: "عزت و وقار", ro: "Izzat o Waqar", en: "True Honor" },
      { ur: "صحبتِ صالحین", ro: "Suhbat-e-Saliheen", en: "Righteous Company" }
    ]
  },
  {
    id: "ma-266",
    slug: "haqeeqi-muttaqi-aur-sab-se-bada-dana-kaun-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 85-86",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "حقیقی متقی اور سب سے بڑے دانا انسان کی پہچان",
      ro: "Haqeeqi Muttaqi Aur Sab Se Bade Dana Insan Ki Pehchan",
      en: "Recognizing the Truly Pious and the Wisest of People"
    },
    quote: {
      ur: "سب سے بڑا دانا اور ہوشیار وہ ہے جو اپنے نفس کو قابو میں رکھے اور موت کے بعد کے لیے عمل کرے؛ اور سب سے بڑا نادان وہ ہے جو نفسانی خواہشات کے پیچھے چلے اور پھر اللہ سے جھوٹی امیدیں باندھے۔",
      ro: "Sab se bada dana aur hoshiyar woh hai jo apne nafs ko qaboo mein rakhe aur maut ke baad ke liye amal kare; aur sab se bada nadan woh hai jo nafsani khuwaishat ke peechay chalay aur phir Allah se jhooti umeedein bandhe.",
      en: "The wisest person is one who disciplines their own soul and works for what comes after death; and the most foolish is one who blindly follows base desires while clinging to wishful thinking."
    },
    tashreeh: {
      ur: "رحمتِ الٰہی سے امید رکھنا ایمان کا حصہ ہے لیکن عمل کو بالکل چھوڑ کر صرف خواہشات کا غلام بن جانا خود فریبی ہے۔ دانائی اپنے نفس کا محاسبہ کرنے اور مستقبل کی تیاری میں ہے۔",
      ro: "Rehmat-e-Ilahi se umeed rakhna eman ka hissa hai lekin amal ko bilkul chhor kar sirf khuwaishat ka ghulam ban jana khud-fareebi hai. Danai apne nafs ka muhasba karne aur mustaqbil ki tayari mein hai.",
      en: "Authentic hope in God is always accompanied by self-discipline and righteous effort, whereas wishful thinking without action is self-deception."
    },
    tags: [
      { ur: "محاسبۂ نفس", ro: "Muhasba-e-Nafs", en: "Self-Discipline" },
      { ur: "دانائی", ro: "Danai", en: "Wisdom" }
    ]
  },
  {
    id: "ma-267",
    slug: "apne-aib-par-nazar-rakhna-doosron-ki-aib-joi-se-rokta-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91-94",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "اپنے عیب پر نظر رکھنا اور تنگدستی و تونگری کا اخلاق",
      ro: "Apne Aib Par Nazar Rakhna Aur Tangdasti o Tawangari Ka Akhlaq",
      en: "Focusing on One's Own Flaws and Grace in Poverty and Wealth"
    },
    quote: {
      ur: "سب سے بڑی دانائی یہ ہے کہ انسان اپنے عیب کو پہچانے؛ کیونکہ جو شخص اپنے عیبوں کو دیکھ لیتا ہے اسے دوسروں کے عیب ڈھونڈنے کی فرصت ہی نہیں ملتی۔ تنگدستی میں صبر و خودداری اور مالداری میں عاجزی و سخاوت بہترین اخلاق ہے۔",
      ro: "Sab se badi danai yeh hai ke insan apne aib ko pehchane; kyunkeh jo shakhs apne aibon ko dekh leta hai usay doosron ke aib dhoondne ki fursat hi nahi milti. Tangdasti mein sabr o khuddari aur maaldari mein aajizi o sakhawat behtareen akhlaq hai.",
      en: "Blessed is the one whose focus on their own faults keeps them too occupied to hunt for the faults of others; patience and dignity in scarcity, paired with humility and generosity in wealth, represent the pinnacle of character."
    },
    tashreeh: {
      ur: "دوسروں پر تنقید کرنا بہت آسان ہے لیکن اپنے گریبان میں جھانکنا مشکل ہے۔ جس دن انسان اپنی خامیوں کو سدھارنے میں لگ جائے، اس کی زبان سے دوسروں کے شکوے اور غیبت خود بخود ختم ہو جاتے ہیں۔",
      ro: "Doosron par tanqeed karna bohot asan hai lekin apne gireban mein jhankna mushkil hai. Jis din insan apni khamiyon ko sudharne mein lag jaye, us ki zaban se doosron ke shikway aur gheebat khud-ba-khud khatam ho jate hain.",
      en: "Self-reflection cures the habit of criticizing others; when we busily mend our own shortcomings, we grow humble, forgiving, and gracious."
    },
    tags: [
      { ur: "خود نگری", ro: "Khud-Nagri", en: "Self-Introspection" },
      { ur: "اعلیٰ اخلاق", ro: "Aala Akhlaq", en: "Noble Character" }
    ]
  },
  {
    id: "ma-268",
    slug: "meethi-zaban-aur-khanda-peshani-dilon-ki-kunji",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 99-100",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "میٹھی زبان اور کشادہ پیشانی دلوں کو جیتنے کی کنجی ہے",
      ro: "Meethi Zaban Aur Kushada-Peshani Dilon Ko Jeetne Ki Kunji Hai",
      en: "Sweet Speech and a Warm Countenance Unlock Every Heart"
    },
    quote: {
      ur: "اے بیٹے! لوگوں کے ساتھ اچھی بات کہنے اور مسکرا کر ملنے کی عادت ڈال، کہ اس سے تو لوگوں کی نگاہوں میں معزز اور دلوں میں محبوب ہو جائے گا؛ اپنے کلام کو نمک کی طرح باذائقہ رکھ اور تکبر کی کڑواہٹ سے اپنی زبان کو آلودہ نہ کر۔",
      ro: "Aye betay! Logon ke sath achi baat kehne aur muskura kar milne ki aadat daal, ke is se tu logon ki nigahon mein muazziz aur dilon mein mehboob ho jayega; apne kalam ko namak ki tarah ba-zaiqa rakh aur takabbur ki karwahat se apni zaban ko aalooda na kar.",
      en: "O my son! Accustom yourself to speaking kindly and greeting people with a warm face, so you may be honored in their eyes and beloved in their hearts; never taint your speech with the bitterness of pride."
    },
    tashreeh: {
      ur: "انسان کی زبان ہی اسے دوست بھی بنا کر دیتی ہے اور دشمن بھی۔ شیریں کلامی اور خلوص ایسے ہتھیار ہیں جن پر ایک پیسہ خرچ نہیں ہوتا مگر پوری دنیا کے دل جیتے جا سکتے ہیں۔",
      ro: "Insan ki zaban hi usay dost bhi bana kar deti hai aur dushman bhi. Shireen-kalami aur khuloos aise hathyar hain jin par aik paisa kharch nahi hota magar poori duniya ke dil jeetay ja sakte hain.",
      en: "Gracious words and a welcoming demeanor cost nothing, yet they build bridges of affection and respect that wealth alone can never buy."
    },
    tags: [
      { ur: "شیریں کلامی", ro: "Shireen-Kalami", en: "Sweet Speech" },
      { ur: "محبت", ro: "Mohabbat", en: "Affection" }
    ]
  },
  {
    id: "ma-269",
    slug: "ilm-aur-maal-ka-farq-ilm-insan-ki-hifazat-karta-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 251",
    author: {
      ur: "اقوالِ حکماء و بزرگان",
      ro: "Aqwal-e-Hukama o Buzurgan",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "علم اور مال کا فرق: علم بانٹنے سے بڑھتا ہے",
      ro: "Ilm Aur Maal Ka Farq: Ilm Bantne Se Barhta Hai",
      en: "Knowledge Versus Wealth: Knowledge Grows When Shared"
    },
    quote: {
      ur: "علم مال سے ہر درجہ بہتر ہے، کیونکہ مال کی تجھے حفاظت کرنی پڑتی ہے جبکہ علم تیری حفاظت کرتا ہے؛ مال خرچ کرنے سے کم ہوتا ہے جبکہ علم بانٹنے اور سکھانے سے بڑھتا ہے، اور مالداروں کا نام مال ختم ہوتے ہی مٹ جاتا ہے جبکہ اہلِ علم کا فیض صدیوں زندہ رہتا ہے۔",
      ro: "Ilm maal se har darja behtar hai, kyunkeh maal ki tujhe hifazat karni parti hai jabkeh ilm teri hifazat karta hai; maal kharch karne se kam hota hai jabkeh ilm bantne aur sikhane se barhta hai, aur maaldaron ka naam maal khatam hote hi mit jata hai jabkeh ahl-e-ilm ka faiz sadiyon zinda rehta hai.",
      en: "Knowledge surpasses wealth in every way: you must guard your wealth, whereas knowledge guards you; wealth diminishes when spent, whereas knowledge multiplies when shared; and the legacy of scholars endures long after fortunes fade."
    },
    tashreeh: {
      ur: "دولت انسان کو چوروں اور زوال کے خوف میں مبتلا رکھتی ہے، جبکہ علم انسان کو صحیح اور غلط کی تمیز دے کر ہر خطرے سے بچاتا ہے اور جتنا دوسروں کو سکھایا جائے اتنا ہی پختہ اور روشن ہوتا جاتا ہے۔",
      ro: "Daulat insan ko choron aur zawal ke khauf mein mubtala rakhti hai, jabkeh ilm insan ko sahi aur ghalat ki tameez de kar har khatray se bachata hai aur jitna doosron ko sikhaya jaye utna hi pukhta aur roshan hota jata hai.",
      en: "Material possessions require constant protection, whereas wisdom protects its bearer from error and expands the more generously it is taught to others."
    },
    tags: [
      { ur: "فضیلتِ علم", ro: "Fazeelat-e-Ilm", en: "Excellence of Knowledge" },
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" }
    ]
  },
  {
    id: "ma-270",
    slug: "khalis-neki-aur-khidmat-ki-taufeeq-ko-rab-ka-ehsan-samajhna",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 329",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "خالص نیکی کا راز اور خدمت کی توفیق کو رب کا احسان سمجھنا",
      ro: "Khalis Neki Ka Raaz Aur Khidmat Ki Taufeeq Ko Rab Ka Ehsan Samajhna",
      en: "The Secret of Pure Kindness and Viewing Service as a Divine Favor"
    },
    quote: {
      ur: "سب سے خالص اور مقبول نیکی وہ ہے جس میں مدد لینے والے کا سر شرمندگی سے نہ جھکے؛ اور جب اللہ تعالیٰ تجھے کسی دکھی انسان کے کام آنے کے لیے چن لے تو اسے اپنا احسان نہ جان، بلکہ رب کا شکر ادا کر کہ اس نے اپنے بندے کی حاجت تیرے ہاتھ سے پوری کرائی۔",
      ro: "Sab se khalis aur maqbool neki woh hai jis mein madad lene wale ka sar sharmindagi se na jhukay; aur jab Allah Ta'ala tujhe kisi dukhi insan ke kaam aane ke liye chun le to usay apna ehsan na jaan, balkay Rab ka shukr ada kar ke Us ne apne banday ki hajat tere hath se poori karai.",
      en: "The purest kindness is one that never causes the recipient to bow their head in shame; whenever God chooses you to relieve someone's distress, do not view it as your favor upon them, but thank God for honoring your hands with service."
    },
    tashreeh: {
      ur: "بزرگانِ دین کا طریقہ یہ تھا کہ جب کوئی حاجت مند ان سے مدد لیتا تو وہ اس کے ممنون ہوتے کہ اس نے انہیں آخرت کا ثواب کمانے کا موقع دیا۔ اس سوچ سے انسان کے اندر کبھی نیکی کا غرور پیدا نہیں ہوتا۔",
      ro: "Buzurgan-e-Deen ka tareeqa yeh tha ke jab koi hajat-mand un se madad leta to woh us ke mamnoon hote ke us ne unhein akhirat ka sawab kamane ka mauqa diya. Is soch se insan ke andar kabhi neki ka ghuroor paida nahi hota.",
      en: "Viewing the opportunity to help others as a privilege granted by God—rather than a reason for pride—keeps charity pure, humble, and deeply dignified."
    },
    tags: [
      { ur: "اخلاصِ عمل", ro: "Ikhlas-e-Amal", en: "Pure Sincerity" },
      { ur: "توفیقِ خدمت", ro: "Taufeeq-e-Khidmat", en: "Privilege of Service" }
    ]
  }
];


export const batch19Quotes: QuoteItem[] = [
  {
    id: "ma-271",
    slug: "nafs-ke-bukhl-aur-lalach-se-bachna-falah-ki-zamanat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hashr (59:9) & Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نفس کی حرص و بخل سے نجات ہی حقیقی کامیابی ہے",
      ro: "Nafs Ki Hirs o Bukhl Se Najat Hi Haqeeqi Kamyabi Hai",
      en: "Freedom from the Greed of the Soul is True Success"
    },
    quote: {
      ur: "اور جو لوگ اپنے نفس کے بخل اور تنگ دلی سے بچا لیے گئے، وہی حقیقت میں فلاح پانے والے ہیں؛ اور جو کچھ بھلائی تم اپنے نفس کے لیے آگے بھیجو گے اسے اللہ کے ہاں بہتر اور اجر میں بہت بڑا پاؤ گے۔",
      ro: "Aur jo log apne nafs ke bukhl aur tang-dili se bacha liye gaye, wahi haqeeqat mein falah pane wale hain; aur jo kuch bhalai tum apne nafs ke liye aagay bhejo ge usay Allah ke haan behtar aur ajr mein bohot bada pao ge.",
      en: "And whoever is protected from the stinginess and greed of their own soul—it is they who are truly successful; and whatever good you send ahead for yourselves, you will find it with Allah far better and greater in reward."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن کریم میں نفس کے بخل سے مراد وہ شدید حرص ہے جو انسان کو اپنے حقوق تک محدود رکھے اور دوسروں پر خرچ کرنے سے روکے۔ آج کا عملی سبق یہ ہے کہ جب انسان اپنے دل کو خود غرضی سے آزاد کر کے مخلوقِ خدا پر خرچ کرنا سیکھ لیتا ہے، تو وہ دنیا کی بے چینی سے نجات پا کر آخرت کا لازوال ذخیرہ بنا لیتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran-e-Kareem mein nafs ke bukhl se murad woh shadeed hirs hai jo insan ko apne huqooq tak mehdood rakhay aur doosron par kharch karne se roke. Aaj ka amli sabaq yeh hai ke jab insan apne dil ko khud-gharzi se aazad kar ke makhlooq-e-Khuda par kharch karna seekh leta hai, to woh duniya ki be-chaini se najat pa kar akhirat ka la-zawal zakhira bana leta hai.",
      en: "Context & Practical Lesson: Overcoming internal selfishness and stinginess is a personal victory, freeing the heart from anxiety and unlocking eternal spiritual reward."
    },
    tags: [
      { ur: "فیاضی", ro: "Fayyazi", en: "Generosity" },
      { ur: "فلاح", ro: "Falah", en: "True Success" }
    ]
  },
  {
    id: "ma-272",
    slug: "muamlat-mein-mashwara-aur-pukhta-azm-ke-baad-tawakkul",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Aal-e-Imran (3:159) & Makhzan-e-Akhlaq - Page 12-13",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اہم معاملات میں مشاورت اور پختہ عزم کے بعد توکل",
      ro: "Ahem Muamlat Mein Mushawarat Aur Pukhta Azm Ke Baad Tawakkul",
      en: "Consultation in Affairs and Trust in God After Firm Resolve"
    },
    quote: {
      ur: "پس ان کے قصور معاف کر دو، ان کے لیے مغفرت مانگو اور اہم کاموں میں ان سے مشورہ لیا کرو؛ پھر جب تم رائے پختہ کر کے کسی کام کا عزم کر لو تو اللہ پر بھروسہ رکھو، بے شک اللہ توکل کرنے والوں کو دوست رکھتا ہے۔",
      ro: "Pas un ke qusoor maaf kar do, un ke liye maghfirat mango aur ahem kaamon mein un se mashwara liya karo; phir jab tum raaye pukhta kar ke kisi kaam ka azm kar lo to Allah par bharosa rakho, be-shak Allah tawakkul karne walon ko dost rakhta hai.",
      en: "So pardon them, pray for their forgiveness, and consult them in matters of importance; then, once you have taken a firm decision, place your trust in Allah—indeed, Allah loves those who rely upon Him."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ آلِ عمران کی یہ آیتِ کریمہ کامیاب قیادت اور گھریلو نظام کے چار ستون متعین فرماتی ہے: ماتحتوں کی خطا سے درگزر، ان کے حق میں دعائے خیر، فیصلوں میں ان سے مشاورت، اور تدبیر مکمل ہونے کے بعد اللہ پر کامل توکل۔ آج کا عملی سبق یہ ہے کہ اپنے گھر اور کاروبار میں تنہا فیصلے مسلط کرنے کے بجائے مخلص ساتھیوں سے مشورہ کریں اور پھر یکسو ہو کر قدم بڑھائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Aal-e-Imran ki yeh aayat-e-kareema kamyab qiyadat aur ghareloo nizam ke chaar sutoon mutayyan farmati hai: matehton ki khata se darguzar, un ke haq mein dua-e-khair, faislon mein un se mushawarat, aur tadbeer mukammal hone ke baad Allah par kamil tawakkul. Aaj ka amli sabaq yeh hai ke apne ghar aur karobar mein tanha faisle musallat karne ke bajaye mukhlis sathiyon se mashwara karein aur phir yaksoo ho kar qadam barhayein.",
      en: "Context & Practical Lesson: This verse outlines the four pillars of wise leadership: forgiveness, prayer, consultation ('Shura'), and decisive action backed by trust in God."
    },
    tags: [
      { ur: "مشاورت", ro: "Mushawarat", en: "Consultation" },
      { ur: "توکل", ro: "Tawakkul", en: "Trust in God" }
    ]
  },
  {
    id: "ma-273",
    slug: "salam-ka-behtar-jawab-aur-logon-se-bhali-baat-kehna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nisa (4:86) & Makhzan-e-Akhlaq - Page 14-15",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سلام کا بہترین جواب دینا اور ہر انسان سے اچھی بات کہنا",
      ro: "Salam Ka Behtareen Jawab Dena Aur Har Insan Se Achi Baat Kehna",
      en: "Returning Greetings Graciously and Speaking Kindly to All"
    },
    quote: {
      ur: "جب کوئی تمہیں سلام یا اخلاق کا کلمہ کہے تو تم اس سے بہتر کلمے کے ساتھ اس کا جواب دو یا کم از کم ویسا ہی لوٹا دو؛ اور تمام لوگوں سے بھلی اور شائستہ بات کہا کرو۔",
      ro: "Jab koi tumhein salam ya akhlaq ka kalma kahe to tum us se behtar kalmay ke sath us ka jawab do ya kam az kam waisa hi lauta do; aur tamam logon se bhali aur shaista baat kaha karo.",
      en: "And when you are greeted with a courteous greeting, respond with one even more gracious, or at least return it equally; and speak kindly and politely to all people."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن مجید نے تمام انسانوں کے ساتھ شائستہ، نرم اور خیر خواہانہ گفتگو کرنے کا حکم دیا ہے۔ اسی طرح کسی کے سلام یا تحفے کا جواب اس سے بڑھ کر گرمجوشی سے دینا اسلامی تہذیب کا خاصہ ہے۔ آج کا عملی سبق یہ ہے کہ ہر ملنے والے کو مسکرا کر پورا سلام و جواب دیں اور کبھی کسی کی دل شکنی نہ ہونے دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran Majeed ne tamam insanon ke sath shaista, naram aur khair-khwahana guftugu karne ka hukm diya hai. Isi tarah kisi ke salam ya tohfay ka jawab us se barh kar garm-joshi se dena Islami tehzeeb ka khassa hai. Aaj ka amli sabaq yeh hai ke har milne wale ko muskura kar poora salam o جواب dein aur kabhi kisi ki dil-shikni na hone dein.",
      en: "Context & Practical Lesson: Reciprocating courtesy with even greater warmth and speaking respectfully to every human being creates a culture of mutual dignity and peace."
    },
    tags: [
      { ur: "حسنِ خطاب", ro: "Husn-e-Khitab", en: "Courteous Speech" },
      { ur: "شائستگی", ro: "Shaistagi", en: "Graciousness" }
    ]
  },
  {
    id: "ma-274",
    slug: "momin-momin-ke-liye-imarat-ki-eenton-ki-manind",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ایک مومن دوسرے مومن کے لیے مضبوط عمارت کی مانند ہے",
      ro: "Aik Momin Doosre Momin Ke Liye Mazboot Imarat Ki Manind Hai",
      en: "Believers Reinforce One Another Like Bricks of a Building"
    },
    quote: {
      ur: "ایک مومن دوسرے مومن کے لیے ایک مضبوط عمارت کی طرح ہے جس کا ایک حصہ دوسرے حصے کو قوت اور سہارا دیتا ہے؛ اور اہلِ ایمان آپس کی محبت، رحمدلی اور ہمدردی میں ایک جسم کی مانند ہیں۔",
      ro: "Aik momin doosre momin ke liye aik mazboot imarat ki tarah hai jis ka aik hissa doosre hissay ko quwwat aur sahara deta hai; aur ahl-e-eman aapas ki mohabbat, reham-dili aur hamdardi mein aik jism ki manind hain.",
      en: "A believer to another believer is like a solid building whose parts reinforce and support one another; in their mutual love, mercy, and empathy, the believers are like a single body."
    },
    tashreeh: {
      ur: "جس طرح دیوار کی اینٹیں ایک دوسرے کو تھام کر طوفان کا مقابلہ کرتی ہیں، اسی طرح معاشرے کے افراد جب ایک دوسرے کی کمزوریوں کو ڈھانپ کر سہارا بنتے ہیں تو پورا معاشرہ ناقابلِ تسخیر بن جاتا ہے۔",
      ro: "Jis tarah deewar ki eentein aik doosre ko tham kar toofan ka muqabla karti hain, isi tarah muashray ke afrad jab aik doosre ki kamzoriyon ko dhanp kar sahara bante hain to poora muashra na-qabil-e-taskheer ban jata hai.",
      en: "Just as interlocked bricks give strength to an entire structure, individuals who stand by one another in empathy and support build a resilient community."
    },
    tags: [
      { ur: "یکجہتی", ro: "Yakjehti", en: "Solidarity" },
      { ur: "اخوت", ro: "Ukhuwwat", en: "Brotherhood" }
    ]
  },
  {
    id: "ma-275",
    slug: "asani-paida-karo-tangi-na-karo-aur-khushkhabri-do",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "لوگوں کے لیے آسانی پیدا کرو اور نفرت نہ پھیلاؤ",
      ro: "Logon Ke Liye Asani Paida Karo Aur Nafrat Na Phailao",
      en: "Make Things Easy for People and Do Not Drive Them Away"
    },
    quote: {
      ur: "لوگوں کے لیے آسانی پیدا کرو اور سختی و تنگی نہ پھیلاؤ، لوگوں کو خوشخبری اور امید دلاؤ اور انہیں متنفر نہ کرو؛ کیونکہ تمہیں آسانی بانٹنے کے لیے بھیجا گیا ہے، تنگ کرنے کے لیے نہیں۔",
      ro: "Logon ke liye asani paida karo aur sakhti o tangi na phailao, logon ko khushkhabri aur umeed dilao aur unhein mutanaffir na karo; kyunkeh tumhein asani bantne ke liye bheja gaya hai, tang karne ke liye nahi.",
      en: "Facilitate matters for people and do not make things difficult for them; give glad tidings of hope and do not drive people away, for you have been sent to bring ease, not hardship."
    },
    tashreeh: {
      ur: "دین کی دعوت ہو یا دنیا کے معاملات، بے جا سختی اور مایوس کن باتیں لوگوں کو دور بھگا دیتی ہیں۔ دانا انسان ہمیشہ نرمی، سہولت اور امید افزا رویے سے دلوں کو قریب لاتا ہے۔",
      ro: "Deen ki dawat ho ya duniya ke muamlat, be-ja sakhti aur mayous-kun baatein logon ko door bhaga deti hain. Dana insan hamesha narmi, sahulat aur umeed-afza rawaiye se dilon ko qareeb lata hai.",
      en: "Harshness and pessimism alienate hearts, whereas offering practical ease, gentle encouragement, and hope inspires lasting positive change."
    },
    tags: [
      { ur: "تيسير و آسانی", ro: "Taiseer o Asani", en: "Facilitation" },
      { ur: "امید افزائی", ro: "Umeed-Afzai", en: "Encouragement" }
    ]
  },
  {
    id: "ma-276",
    slug: "ghar-walon-mein-narmi-allah-ki-bhalai-ki-nishani",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 27",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "گھرانے کی بھلائی کی علامت باہمی نرمی اور محبت ہے",
      ro: "Gharanay Ki Bhalai Ki Alamat Bahami Narmi Aur Mohabbat Hai",
      en: "Gentleness Within the Family is a Sign of Divine Blessing"
    },
    quote: {
      ur: "جب اللہ تعالیٰ کسی گھرانے کے ساتھ بھلائی اور خیر کا ارادہ فرماتا ہے تو ان کے مزاجوں میں آپس کی نرمی اور ملائمت پیدا فرما دیتا ہے؛ اور تم میں سب سے بہتر وہ ہے جو اپنے گھر والوں کے حق میں سب سے اچھا ہے۔",
      ro: "Jab Allah Ta'ala kisi gharanay ke sath bhalai aur khair ka irada farmata hai to un ke mizajon mein aapas ki narmi aur mulaimat paida farma deta hai; aur tum mein sab se behtar woh hai jo apne ghar walon ke haq mein sab se acha hai.",
      en: "When Allah wills goodness and blessing for a household, He instills gentleness and kindness among its members; and the best among you is the one who is best in conduct toward their own family."
    },
    tashreeh: {
      ur: "باہر کی دنیا میں خوش اخلاق بننا آسان ہے، لیکن انسان کے کردار کا اصل امتحان اپنے گھر کی چار دیواری کے اندر ہوتا ہے۔ جس گھر میں ضد اور تلخی کے بجائے نرمی اور درگزر ہو وہ گھر دنیا کی جنت بن جاتا ہے۔",
      ro: "Bahar ki duniya mein khush-akhlaq banna asan hai, lekin insan ke kirdar ka asal imtihan apne ghar ki chaar-deewari ke andar hota hai. Jis ghar mein zid aur talkhi ke bajaye narmi aur darguzar ho woh ghar duniya ki Jannat ban jata hai.",
      en: "A person's true character is measured by how kindly they treat their own family at home; mutual gentleness turns a house into a sanctuary of peace."
    },
    tags: [
      { ur: "خاندانی سکون", ro: "Khandani Sukoon", en: "Family Harmony" },
      { ur: "نرم مزاجی", ro: "Naram-Mizaji", en: "Gentleness" }
    ]
  },
  {
    id: "ma-277",
    slug: "purane-talluqat-nibhana-aur-wafadari-eman-ka-hissa",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 35-36",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "پرانے تعلقات کا پاس اور وفاداری ایمان کا حصہ ہے",
      ro: "Purane Talluqat Ka Paas Aur Wafadari Eman Ka Hissa Hai",
      en: "Honoring Old Ties and Loyalty is a Branch of Faith"
    },
    quote: {
      ur: "حضور اکرم ﷺ پرانے تعلقات اور محبتوں کا عمر بھر پاس فرماتے؛ حضرت خدیجہؓ کی وفات کے برسوں بعد بھی ان کی سہیلیوں کے گھر ہدیہ بھیجتے اور فرماتے کہ پرانے عہد اور تعلق کو خوبصورتی سے نبھانا ایمان کا حصہ ہے۔",
      ro: "Huzoor Akram ﷺ purane talluqat aur mohabbaton ka umar bhar paas farmate; Hazrat Khadijah (R.A) ki wafat ke barson baad bhi un ki saheliyon ke ghar hadiya bhejte aur farmate ke purane ahad aur talluq ko khoobsurti se nibhana eman ka hissa hai.",
      en: "The Prophet ﷺ cherished old friendships throughout his life; years after the passing of Hazrat Khadijah (R.A), he continued sending gifts to her friends and honored them deeply, saying, 'Faithfulness to old ties is a part of faith.'"
    },
    tashreeh: {
      ur: "نئے دوست اور نئی رونقیں ملنے کے بعد پرانے محسنوں، بزرگوں کے دوستوں اور بچھڑ جانے والے پیاروں کے متعلقین کو یاد رکھنا اور ان کی عزت کرنا اعلیٰ درجے کی وفاداری ہے۔",
      ro: "Naye dost aur nayi raunaqein milne ke baad purane mohsinon, buzurgon ke doston aur bichhar jane wale pyaron ke muta'alliqeen ko yaad rakhna aur un ki izzat karna aala darjay ki wafadari hai.",
      en: "Remembering past benefactors and honoring the friends of departed loved ones is the truest mark of a loyal and noble heart."
    },
    tags: [
      { ur: "وفاداری", ro: "Wafadari", en: "Loyalty" },
      { ur: "حسنِ عہد", ro: "Husn-e-Ahad", en: "Honoring Ties" }
    ]
  },
  {
    id: "ma-278",
    slug: "duniya-mein-musafir-ki-tarah-sada-zindagi-guzarna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 43-44",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "دنیا کی مثال سائے تلے سستانے والے مسافر کی سی ہے",
      ro: "Duniya Ki Misal Saaye Talay Sustane Wale Musafir Ki Si Hai",
      en: "Living Simply in the World Like a Traveler Under a Tree's Shade"
    },
    quote: {
      ur: "کھردری چٹائی پر سونے سے آپ ﷺ کے پہلو مبارک پر نشان پڑ گئے، صحابہؓ نے نرم بستر بچھانے کی عرض کی تو آپ ﷺ نے فرمایا: میرا دنیا کی عیش سے کیا واسطہ؟ میری اور دنیا کی مثال تو اس سوار کی سی ہے جو گرمی کے سفر میں کسی درخت کے سائے تلے گھڑی بھر سستا کر آگے روانہ ہو جائے۔",
      ro: "Khurdari chatai par sonay se Aap ﷺ ke pehlu mubarak par nishan par gaye, Sahaba (R.A) ne naram bistar bichhane ki arz ki to Aap ﷺ ne farmaya: Mera duniya ki aish se kya wasta? Meri aur duniya ki misal to us sawar ki si hai jo garmi ke safar mein kisi darakht ke saaye talay ghari bhar susta kar aagay rawana ho jaye.",
      en: "When sleeping on a rough palm-fiber mat left marks on the Prophet's ﷺ side and companions offered to spread a soft bedding, he replied: 'What have I to do with worldly luxury? My example in this world is merely that of a traveler who rests for an hour beneath the shade of a tree, then leaves it and moves on.'"
    },
    tashreeh: {
      ur: "ففتوحات اور خزانوں کی فراوانی کے باوجود آپ ﷺ نے اختیاری فقر اور سادگی کو پسند فرمایا تاکہ امت کو سبق ملے کہ انسان کی عظمت محلات اور مخملی بستروں میں نہیں بلکہ مقصدِ حیات کی بلندی میں ہے۔",
      ro: "Futuhat aur khazanon ki farawani ke bawajood Aap ﷺ ne ikhtiyari faqr aur sadgi ko pasand farmaya taake ummat ko sabaq milay ke insan ki azmat mahallat aur makhmali bistaron mein nahi balkay maqsad-e-hayat ki bulandi mein hai.",
      en: "Choosing simplicity despite having access to treasures teaches us that human greatness lies in spiritual purpose rather than material luxury."
    },
    tags: [
      { ur: "زہد و سادگی", ro: "Zuhd o Sadgi", en: "Simplicity" },
      { ur: "مسافرِ حیات", ro: "Musafir-e-Hayat", en: "Purposeful Life" }
    ]
  },
  {
    id: "ma-279",
    slug: "masheer-se-sach-bolna-aur-taqwa-sab-se-badi-aqal",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 68-69",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "مشورہ لیتے وقت سچ بولنا اور سب سے بڑی دانائی",
      ro: "Mashwara Lete Waqt Sach Bolna Aur Sab Se Badi Danai",
      en: "Honesty When Seeking Counsel and Piety as Supreme Wisdom"
    },
    quote: {
      ur: "جب کسی سے مشورہ مانگو تو اس سے پورا حال سچ سچ بیان کرو ورنہ اپنے ہی نفس کو دھوکہ دو گے؛ جان لو کہ تقویٰ اور پرہیزگاری سے بڑھ کر کوئی عقلمندی نہیں، اور گناہ سے بڑھ کر کوئی نادانی نہیں۔",
      ro: "Jab kisi se mashwara mango to us se poora haal sach sach bayan karo warna apne hi nafs ko dhoka do ge; jaan lo ke taqwa aur parhezgari se barh kar koi aqalmandi nahi, aur gunah se barh kar koi nadani nahi.",
      en: "When you seek counsel from an advisor, tell them the complete truth without hiding the facts, lest you deceive only yourself; know that there is no intelligence greater than piety, and no foolishness greater than sin."
    },
    tashreeh: {
      ur: "جس طرح مریض اگر طبیب سے اپنا مرض چھپائے تو صحیح علاج نہیں ہو سکتا، اسی طرح مشورہ لیتے وقت اپنی غلطی چھپانے والا غلط رائے لے کر اپنا ہی نقصان کرتا ہے۔",
      ro: "Jis tarah mareez agar tabeeb se apna marz chhupaye to sahi ilaj nahi ho sakta, isi tarah mashwara lete waqt apni ghalti chhupane wala ghalat raaye le kar apna hi nuqsan karta hai.",
      en: "Just as concealing symptoms from a physician ruins the cure, hiding facts from an advisor leads to flawed advice and self-harm."
    },
    tags: [
      { ur: "صداقت", ro: "Sadaqat", en: "Candor" },
      { ur: "عقل و تقویٰ", ro: "Aqal o Taqwa", en: "Wisdom & Piety" }
    ]
  },
  {
    id: "ma-280",
    slug: "ilm-ke-sath-waqar-aur-ustad-o-shagird-se-tawazu",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 75",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "علم کے ساتھ سکون و وقار اور سیکھنے سکھانے میں عاجزی",
      ro: "Ilm Ke Sath Sukoon o Waqar Aur Seekhne Sikhane Mein Aajizi",
      en: "Acquiring Tranquility with Knowledge and Humility in Learning"
    },
    quote: {
      ur: "علم حاصل کرو اور علم کے ساتھ سکون، بردباری اور وقار بھی سیکھو؛ جن سے علم سیکھتے ہو ان کے سامنے بھی عاجزی اختیار کرو اور جن کو علم سکھاتے ہو ان کے ساتھ بھی نرمی اور تواضع سے پیش آؤ، اور متکبر علماء مت بنو۔",
      ro: "Ilm hasil karo aur ilm ke sath sukoon, burdbari aur waqar bhi seekho; jin se ilm seekhte ho un ke samne bhi aajizi ikhtiyar karo aur jin ko ilm sikhate ho un ke sath bhi narmi aur tawazu se pesh aao, aur mutakabbir ulama mat bano.",
      en: "Acquire knowledge, and alongside knowledge acquire calmness, forbearance, and dignity; be humble toward those who teach you and gentle toward those whom you teach, and never become arrogant scholars."
    },
    tashreeh: {
      ur: "سچا علم انسان کے مزاج میں ٹھہراؤ اور حلم پیدا کرتا ہے۔ استاد کا احترام کرنا طالبِ علم کا زیور ہے اور شاگردوں کے ساتھ شفقت و عاجزی سے پیش آنا استاد کی عظمت کی دلیل ہے۔",
      ro: "Sacha ilm insan ke mizaj mein thehrao aur hilm paida karta hai. Ustad ka ehtiram karna talib-e-ilm ka zewar hai aur shagirdon ke sath shafqat o aajizi se pesh aana ustad ki azmat ki daleel hai.",
      en: "True scholarship is marked by serenity and mutual humility: honoring one's mentors while treating students with patience and respect."
    },
    tags: [
      { ur: "وقارِ علم", ro: "Waqar-e-Ilm", en: "Dignity of Knowledge" },
      { ur: "تواضع", ro: "Tawazu", en: "Humility" }
    ]
  },
  {
    id: "ma-281",
    slug: "pakiza-dil-kalam-e-ilahi-se-kabhi-sair-nahi-hote",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 84-86",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "پاکیزہ دل کلامِ الٰہی سے کبھی سیر نہیں ہوتے",
      ro: "Pakeeza Dil Kalam-e-Ilahi Se Kabhi Sair Nahi Hote",
      en: "Pure Hearts Never Tire of Divine Wisdom"
    },
    quote: {
      ur: "اگر تمہارے دلوں میں کامل پاکیزگی اور صفائی آ جائے تو وہ اپنے پروردگار کے کلام سے کبھی سیر نہ ہوں؛ جو شخص دنیا کے لالچ کو چھوڑ دیتا ہے وہ اللہ کا محبوب بن جاتا ہے، اور جو گناہوں کو چھوڑ دیتا ہے فرشتے اس سے محبت کرتے ہیں۔",
      ro: "Agar tumhare dilon mein kamil pakeezgi aur safai aa jaye to woh apne Parwardigar ke kalam se kabhi sair na hon; jo shakhs duniya ke lalach ko chhor deta hai woh Allah ka mehboob ban jata hai, aur jo gunahon ko chhor deta hai farishtay us se mohabbat karte hain.",
      en: "If your hearts were truly pure, they would never have their fill of the words of your Lord; whoever renounces worldly greed becomes beloved to Allah, and whoever abandons sin becomes beloved to the angels."
    },
    tashreeh: {
      ur: "جس طرح بیمار جسم کو عمدہ غذا بے مزہ لگتی ہے، اسی طرح گناہوں سے آلودہ دل کو ذکر اور نصیحت میں لذت نہیں ملتی۔ دل جتنا صاف ہوگا، حق کی باتوں سے اس کا شوق اتنا ہی بڑھتا جائے گا۔",
      ro: "Jis tarah bimar jism ko umda ghiza be-maza lagti hai, isi tarah gunahon se aalooda dil ko zikr aur nasihat mein lazzat nahi milti. Dil jitna saaf hoga, haq ki baaton se us ka shauq utna hi barhta jayega.",
      en: "Just as a healthy body relishes wholesome food, a heart cleansed of greed and sin finds endless joy in divine wisdom."
    },
    tags: [
      { ur: "طہارتِ قلب", ro: "Taharat-e-Qalb", en: "Purity of Heart" },
      { ur: "محبتِ الٰہی", ro: "Mohabbat-e-Ilahi", en: "Divine Love" }
    ]
  },
  {
    id: "ma-282",
    slug: "dushman-par-qaboo-pane-ka-shukrana-usay-maaf-karna",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 90-92",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "مخالف پر قدرت پانے کا شکرانہ اسے معاف کر دینا ہے",
      ro: "Mukhalif Par Qudrat Pane Ka Shukrana Usay Maaf Kar Dena Hai",
      en: "Pardoning an Opponent is the Gratitude for Victory"
    },
    quote: {
      ur: "جب اپنے دشمن یا مخالف پر تجھے قدرت اور غلبہ حاصل ہو جائے تو اس کو معاف کر دینے کو اس کامیابی کا شکرانہ بنا لے؛ اور یاد رکھ کہ ایمان میں صبر کا وہی مقام ہے جو جسم میں سر کا ہے، جس کے پاس صبر نہیں اس کا عمل کامل نہیں۔",
      ro: "Jab apne dushman ya mukhalif par tujhe qudrat aur ghalba hasil ho jaye to us ko maaf kar dene ko us kamyabi ka shukrana bana le; aur yaad rakh ke eman mein sabr ka wahi maqam hai jo jism mein sar ka hai, jis ke paas sabr nahi us ka amal kamil nahi.",
      en: "When you gain power and victory over your adversary, make your pardon of them the expression of gratitude for that power; and know that patience is to faith what the head is to the body."
    },
    tashreeh: {
      ur: "کامیابی اور طاقت ملنے پر انتقام کی آگ بجھانا کم ظرفوں کا طریقہ ہے، جبکہ اللہ کی دی ہوئی فتح کا بہترین شکر یہ ہے کہ ہارے ہوئے مخالف کے ساتھ عفو و کرم کا معاملہ کیا جائے۔",
      ro: "Kamyabi aur taqat milne par intiqam ki aag bujhana kam-zarfon ka tareeqa hai, jabkeh Allah ki di hui fatah ka behtareen shukr yeh hai ke haaray huye mukhalif ke sath afw-o-karam ka muamla kiya jaye.",
      en: "The noblest way to thank God for granting you the upper hand over an opponent is to crown your victory with forgiveness."
    },
    tags: [
      { ur: "عفو و کرم", ro: "Afw-o-Karam", en: "Magnanimous Pardon" },
      { ur: "صبر", ro: "Sabr", en: "Patience" }
    ]
  },
  {
    id: "ma-283",
    slug: "tauba-mein-takheer-na-karo-aur-waqt-e-sahar-ki-bedari",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 98-99",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "توبہ میں تاخیر نہ کرنا اور وقتِ سحر کی بیداری",
      ro: "Tauba Mein Takheer Na Karna Aur Waqt-e-Sahar Ki Bedari",
      en: "Never Delaying Repentance and Awakening at Dawn"
    },
    quote: {
      ur: "اے بیٹے! توبہ اور اصلاح کو کل پر مت ٹال، کیونکہ موت بغیر اطلاع کے اچانک آ پہنچتی ہے؛ اور اتنا غافل مت بن کہ مرغ تجھ سے زیادہ ہوشیار نکلے جو سحر کے وقت بیدار ہو کر اپنے رب کو پکارتا ہے اور تو پڑا سوتا رہے۔",
      ro: "Aye betay! Tauba aur islah ko kal par mat taal, kyunkeh maut baghair ittila ke achanak aa pohanchti hai; aur itna ghafil mat ban ke murgh tujh se zyada hoshiyar nikle jo sahar ke waqt bedar ho kar apne Rab ko pukarta hai aur tu para sota rahe.",
      en: "O my son! Do not postpone repentance until tomorrow, for death arrives suddenly without warning; and do not let the rooster be wiser than you, calling out at the break of dawn while you lie fast asleep in heedlessness."
    },
    tashreeh: {
      ur: "زندگی کی سانسوں کا کوئی بھروسہ نہیں، اس لیے کسی کا حق ادا کرنا ہو یا رب سے معافی مانگنی ہو تو آج ہی کر لینا چاہیے، اور صبح کی برکت والے وقت کو سستی کی نذر نہیں کرنا چاہیے۔",
      ro: "Zindagi ki sanson ka koi bharosa nahi, is liye kisi ka haq ada karna ho ya Rab se maafi mangni ho to aaj hi kar lena chahiye, aur subah ki barkat wale waqt ko susti ki nazar nahi karna chahiye.",
      en: "Because tomorrow is never guaranteed, mending our ways and fulfilling obligations must happen today, beginning with discipline at dawn."
    },
    tags: [
      { ur: "فوری اصلاح", ro: "Fori Islah", en: "Timely Repentance" },
      { ur: "بیداری", ro: "Bedari", en: "Vigilance" }
    ]
  },
  {
    id: "ma-284",
    slug: "chaar-cheezein-kabhi-wapis-nahi-laut-saktein",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 254",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "چار چیزیں جو ہاتھ سے نکل کر کبھی واپس نہیں آتیں",
      ro: "Chaar Cheezein Jo Hath Se Nikal Kar Kabhi Wapis Nahi Aatein",
      en: "Four Things That Can Never Be Recovered Once Gone"
    },
    quote: {
      ur: "چار چیزیں نکل جانے کے بعد کبھی واپس نہیں لوٹائی جا سکتیں: منہ سے نکلی ہوئی بات، کمان سے چھٹا ہوا تیر، گزرا ہوا زمانہ، اور ہاتھ سے کھویا ہوا موقع؛ پس بولنے سے پہلے سوچو اور وقت گزرنے سے پہلے عمل کر لو۔",
      ro: "Chaar cheezein nikal jane ke baad kabhi wapis nahi lautai ja saktein: munh se nikli hui baat, kaman se chhuta huwa teer, guzra huwa zamana, aur hath se khoya huwa mauqa; pas bolne se pehle socho aur waqt guzarne se pehle amal kar lo.",
      en: "Four things can never be recalled once released: a spoken word, an arrow shot from the bow, time that has passed, and a neglected opportunity; therefore, think before you speak and act before the moment fades."
    },
    tashreeh: {
      ur: "انسان کی کامیابی کا دارومدار اپنی زبان اور اپنے وقت کے درست استعمال پر ہے۔ جو شخص الفاظ ادا کرنے میں احتیاط اور مواقع سے فائدہ اٹھانے میں چستی دکھاتا ہے وہ پچھتاوے سے محفوظ رہتا ہے۔",
      ro: "Insan ki kamyabi ka daromadar apni zaban aur apne waqt ke durust istemal par hai. Jo shakhs alfaz ada karne mein ehtiyat aur mawaqe se faida uthane mein chusti dikhata hai woh pachtaway se mehfooz rehta hai.",
      en: "Mindfulness over one's words and prompt action when opportunities arise protect a person from lifelong regret."
    },
    tags: [
      { ur: "احتیاطِ گفتار", ro: "Ehtiyat-e-Guftar", en: "Mindful Speech" },
      { ur: "قدرِ وقت", ro: "Qadr-e-Waqt", en: "Seizing Time" }
    ]
  },
  {
    id: "ma-285",
    slug: "ankh-kaan-aur-hath-ka-haqeeqi-shukr-kya-hai",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 335",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "آنکھ، کان اور ہاتھ کا حقیقی شکر کیا ہے؟",
      ro: "Ankh, Kaan Aur Hath Ka Haqeeqi Shukr Kya Hai?",
      en: "The True Gratitude of the Eyes, Ears, and Hands"
    },
    quote: {
      ur: "کسی بزرگ سے پوچھا گیا کہ اعضاء کا شکر کیا ہے؟ فرمایا: آنکھوں کا شکر یہ ہے کہ ان سے کسی کی خوبی دیکھو تو ظاہر کرو اور عیب دیکھو تو چھپا لو؛ کانوں کا شکر یہ ہے کہ ان سے خیر کی بات سنو اور غیبت سے بند رکھو؛ اور ہاتھوں کا شکر یہ ہے کہ ان سے بے بسوں کو سہارا دو۔",
      ro: "Kisi buzurg se poocha gaya ke aza ka shukr kya hai? Farmaya: ankhon ka shukr yeh hai ke un se kisi ki khoobi dekho to zahir karo aur aib dekho to chhupa lo; kanon ka shukr yeh hai ke un se khair ki baat suno aur gheebat se band rakho; aur hathon ka shukr yeh hai ke un se be-bason ko sahara do.",
      en: "A sage was asked: 'What is the true gratitude of our limbs?' He replied: 'The gratitude of the eyes is to notice virtue in others and conceal their faults; the gratitude of the ears is to absorb wisdom and shut out slander; and the gratitude of the hands is to lift up the weak.'"
    },
    tashreeh: {
      ur: "شکر صرف زبان سے ’الحمد للہ‘ کہنے کا نام نہیں ہے بلکہ اللہ کی دی ہوئی ہر نعمت کو اس کے درست اور پاکیزہ مقصد میں استعمال کرنا ہی اس نعمت کا عملی شکر ہے۔",
      ro: "Shukr sirf zaban se 'Alhamdulillah' kehne ka naam nahi hai balkay Allah ki di hui har nemat ko us ke durust aur pakeeza maqsad mein istemal karna hi us nemat ka amli shukr hai.",
      en: "True gratitude goes beyond spoken words: it means dedicating every faculty God has given us—sight, hearing, and strength—to goodness and service."
    },
    tags: [
      { ur: "عملی شکر", ro: "Amli Shukr", en: "Practical Gratitude" },
      { ur: "عیب پوشی", ro: "Aib-Poshi", en: "Overlooking Faults" }
    ]
  }
];

export const batch20Quotes: QuoteItem[] = [
  {
    id: "ma-286",
    slug: "amanatein-haqdaron-ko-pohanchana-aur-adal-se-faisla",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nisa (4:58) & Makhzan-e-Akhlaq - Page 11",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "امانتیں حقداروں کو سونپنا اور عدل کے ساتھ فیصلہ کرنا",
      ro: "Amanatein Haqdaron Ko Sonpna Aur Adal Ke Sath Faisla Karna",
      en: "Restoring Trusts to Their Owners and Judging with Justice"
    },
    quote: {
      ur: "بے شک اللہ تمہیں حکم دیتا ہے کہ امانتیں ان کے اہل اور حقداروں کے سپرد کرو؛ اور جب لوگوں کے درمیان فیصلہ کرنے لگو تو عدل اور انصاف کے ساتھ فیصلہ کرو، بے شک اللہ تمہیں بہت عمدہ نصیحت فرماتا ہے۔",
      ro: "Be-shak Allah tumhein hukm deta hai ke amanatein un ke ahl aur haqdaron ke supurd karo; aur jab logon ke darmiyan faisla karne lago to adal aur insaf ke sath faisla karo, be-shak Allah tumhein bohot umda nasihat farmata hai.",
      en: "Indeed, Allah commands you to render trusts to whom they are due, and when you judge between people, to judge with fairness and justice; how excellent is the instruction Allah gives you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ النساء کی یہ عظیم آیت اسلامی نظامِ عدل کی اساس ہے۔ امانت صرف نقد رقم تک محدود نہیں بلکہ عہدہ، ملازمت کا وقت، راز اور مشورہ سب امانت ہیں، اور انہیں ان کے اہل حقداروں تک پہنچانا فرض ہے۔ آج کا عملی سبق یہ ہے کہ اپنے سپرد کیے گئے ہر کام اور ذمہ داری کو امانت سمجھ کر نبھائیں اور گھریلو یا کاروباری فیصلوں میں کبھی طرفداری نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah An-Nisa ki yeh azeem aayat Islami nizam-e-adal ki asas hai. Amanat sirf naqd raqam tak mehdood nahi balkay ohda, mulazmat ka waqt, raaz aur mashwara sab amanat hain, aur unhein un ke ahl haqdaron tak pohanchana farz hai. Aaj ka amli sabaq yeh hai ke apne supurd kiye gaye har kaam aur zimmedari ko amanat samajh kar nibhayein aur ghareloo ya karobari faislon mein kabhi tarafdari na karein.",
      en: "Context & Practical Lesson: Surah An-Nisa establishes that trust encompasses wealth, professional duties, confidential advice, and fair judgment—forming the bedrock of a just society."
    },
    tags: [
      { ur: "ادائے امانت", ro: "Ada-e-Amanat", en: "Fulfilling Trusts" },
      { ur: "عدل و انصاف", ro: "Adal o Insaf", en: "Justice" }
    ]
  },
  {
    id: "ma-287",
    slug: "dushmani-mein-bhi-insaf-ka-daman-na-chhorna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Ma'idah (5:8) & Makhzan-e-Akhlaq - Page 12-13",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مخالف کی دشمنی میں بھی انصاف کا دامن نہ چھوڑنا",
      ro: "Mukhalif Ki Dushmani Mein Bhi Insaf Ka Daman Na Chhorna",
      en: "Never Letting Enmity Cause You to Swerve from Justice"
    },
    quote: {
      ur: "اے ایمان والو! اللہ کے واسطے حق پر قائم رہنے والے اور انصاف کی گواہی دینے والے بنو؛ اور کسی قوم کی عداوت اور دشمنی تمہیں اس بات پر آمادہ نہ کرے کہ تم بے انصافی کر بیٹھو؛ عدل کیا کرو کہ وہی پرہیزگاری کے سب سے زیادہ قریب ہے۔",
      ro: "Aye eman walo! Allah ke wastay haq par qayam rehne wale aur insaf ki gawahi dene wale bano; aur kisi qoum ki adawat aur dushmani tumhein is baat par aamada na kare ke tum be-insafi kar baitho; adal kiya karo ke wahi parhezgari ke sab se zyada qareeb hai.",
      en: "O believers! Stand firmly for Allah as witnesses to fair dealing, and do not let the hatred or enmity of any people lead you to deviate from justice; be just—that is closest to true piety."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اپنے دوستوں اور پسندیدہ لوگوں کے ساتھ انصاف کرنا آسان ہے، لیکن سورۃ المائدہ کی یہ آیت کردار کا اصل امتحان وہاں بتاتی ہے جہاں مقابلے پر کوئی مخالف کھڑا ہو۔ آج کا عملی سبق یہ ہے کہ ذاتی رنجش یا اختلاف کو کبھی حق گوئی کے آڑے نہ آنے دیں؛ مخالف کی خوبی کا اعتراف کرنا اور اس کے حق میں سچی گواہی دینا ہی تقویٰ کی معراج ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Apne doston aur pasandeeda logon ke sath insaf karna asan hai, لیکن Surah Al-Ma'idah ki yeh aayat kirdar ka asal imtihan wahan batati hai jahan muqable par koi mukhalif khara ho. Aaj ka amli sabaq yeh hai ke zaati ranjish ya ikhtilaf ko kabhi haq-goi ke aaray na aane dein; mukhalif ki khoobi ka aitraf karna aur us ke haq mein sachi gawahi dena hi taqwa ki meraj hai.",
      en: "Context & Practical Lesson: True morality is tested when dealing with opponents; refusing to let personal dislike cloud fair judgment is the highest expression of God-consciousness."
    },
    tags: [
      { ur: "حق پرستی", ro: "Haq-Parasti", en: "Impartiality" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Piety" }
    ]
  },
  {
    id: "ma-288",
    slug: "tangdasti-ke-bawajood-doosron-ko-apne-oopar-tarjeeh-dena",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hashr (59:9) & Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مقامِ ایثار: اپنی ضرورت پر دوسرے بھائی کو ترجیح دینا",
      ro: "Maqam-e-Eesar: Apni Zaroorat Par Doosre Bhai Ko Tarjeeh Dena",
      en: "Altruism: Preferring Others Over Oneself Even in Need"
    },
    quote: {
      ur: "اور وہ اپنے دلوں میں اس چیز کی کوئی جلن یا کھٹک محسوس نہیں کرتے جو ان کے بھائیوں کو دی جائے، اور خود اپنی ذات پر دوسروں کو ترجیح دیتے ہیں خواہ ان کو خود بھی سخت حاجت اور تنگدستی درپیش ہو۔",
      ro: "Aur woh apne dilon mein us cheez ki koi jalan ya khatak mehsoos nahi karte jo un ke bhaiyon ko di jaye, aur khud apni zaat par doosron ko tarjeeh dete hain khwah un ko khud bhi sakht hajat aur tangdasti darpesh ho.",
      en: "They find no envy in their hearts for what has been given to their brothers, and they give preference to others over themselves, even though they themselves are in pressing need."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الحشر کی یہ آیت انصارِ مدینہ کے اس بے مثال ایثار کی یادگار ہے جنہوں نے اپنی ضرورت کے باوجود دوسرے کو مقدم رکھا۔ مشکل الفاظ میں 'خصاصۃ' کا معنی شدید فاقہ اور حاجت ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کی ترقی دیکھ کر دل کو حسد سے پاک رکھیں اور کم وسائل میں بھی کسی مجبور کا سہارا بننے کا جذبہ زندہ رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Hashr ki yeh aayat Ansar-e-Madinah ke us be-misal eesar ki yaadgar hai jinhon ne apni zaroorat ke bawajood doosre ko muqaddam rakha. Mushkil alfaz mein 'khasasah' ka ma'ni shadeed faqa aur hajat hai. Aaj ka amli sabaq yeh hai ke doosron ki taraqqi dekh kar dil ko hasad se paak rakhein aur kam wasail mein bhi kisi majboor ka sahara banne ka jazba zinda rakhein.",
      en: "Context & Practical Lesson: Giving from surplus is generosity, but sacrificing one's own pressing need ('khasasah') to comfort someone else is altruism—the loftiest peak of human nobility."
    },
    tags: [
      { ur: "ایثار", ro: "Eesar", en: "Altruism" },
      { ur: "فراخ دلی", ro: "Farakh-Dili", en: "Magnanimity" }
    ]
  },
  {
    id: "ma-289",
    slug: "allah-sooraton-aur-maal-ko-nahi-balkay-dilon-aur-aamaal-ko-dekhta-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اللہ تمہاری صورتوں کو نہیں بلکہ دلوں اور اعمال کو دیکھتا ہے",
      ro: "Allah Tumhari Sooraton Ko Nahi Balkay Dilon Aur Aamaal Ko Dekhta Hai",
      en: "God Looks Not at Outward Forms, But at Hearts and Deeds"
    },
    quote: {
      ur: "بے شک اللہ تعالیٰ تمہاری ظاہری صورتوں اور تمہارے مال و دولت کی طرف نہیں دیکھتا، بلکہ وہ تمہارے دلوں کے اخلاص اور تمہارے اعمال کی طرف دیکھتا ہے۔",
      ro: "Be-shak Allah Ta'ala tumhari zahiri sooraton aur tumhare maal-o-daulat ki taraf nahi dekhta, balkay Woh tumhare dilon ke ikhlas aur tumhare aamaal ki taraf dekhta hai.",
      en: "Indeed, Allah does not look at your outward appearances or your wealth; rather, He looks at the sincerity of your hearts and the quality of your deeds."
    },
    tashreeh: {
      ur: "دنیا کے لوگ کپڑوں، گاڑیوں اور چہروں سے مرعوب ہوتے ہیں، لیکن خالقِ کائنات کے ہاں قبولیت کا پیمانہ صرف دل کی نیت کی صفائی اور عمل کی سچائی ہے۔ اس لیے اپنے ظاہر کے ساتھ باطن کو سنوارنا اصل کام ہے۔",
      ro: "Duniya ke log kapron, gariyon aur chehron se mar'oob hote hain, lekin Khaliq-e-Kainat ke haan qubooliyat ka paimana sirf dil ki niyat ki safai aur amal ki sachai hai. Is liye apne zahir ke sath batin ko sanwarna asal kaam hai.",
      en: "While society judges by appearances and bank accounts, divine evaluation rests entirely on the purity of intention and the uprightness of action."
    },
    tags: [
      { ur: "خلوصِ نیت", ro: "Khuloos-e-Niyat", en: "Sincerity" },
      { ur: "باطنی حسن", ro: "Batini Husn", en: "Inner Beauty" }
    ]
  },
  {
    id: "ma-290",
    slug: "shak-wali-cheez-chhor-kar-be-shak-cheez-ikhtiyar-karna",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "شک والی چیز چھوڑ دینا اور سچائی کا اطمینانِ قلب",
      ro: "Shak Wali Cheez Chhor Dena Aur Sachai Ka Itminan-e-Qalb",
      en: "Leaving What Causes Doubt for What Brings Peace of Mind"
    },
    quote: {
      ur: "جو چیز تجھے شک اور کھٹک میں ڈالے اسے چھوڑ دے اور اس چیز کو اختیار کر جس میں تجھے کوئی شک نہ ہو؛ کیونکہ سچائی دل کا چین اور اطمینان ہے اور جھوٹ بے چینی اور تردد ہے۔",
      ro: "Jo cheez tujhe shak aur khatak mein dalay usay chhor de aur us cheez ko ikhtiyar kar jis mein tujhe koi shak na ho; kyunkeh sachai dil ka chain aur itminan hai aur jhoot be-chaini aur taraddud hai.",
      en: "Leave that which makes you doubt for that which does not make you doubt; for indeed, truth brings tranquility to the heart, whereas falsehood breeds anxiety and hesitation."
    },
    tashreeh: {
      ur: "جب کسی کمائی یا کام کے بارے میں ضمیر میں کھٹک پیدا ہو اور انسان نہ چاہے کہ لوگوں کو اس کی خبر ہو، تو سمجھ لینا چاہیے کہ اس میں کچھ گڑبڑ ہے۔ مشکوک راستے چھوڑ کر صاف اور بے داغ راستہ چننا دل کو سکون دیتا ہے۔",
      ro: "Jab kisi kamai ya kaam ke baray mein zameer mein khatak paida ho aur insan na chahe ke logon ko us ki khabar ho, to samajh lena chahiye ke us mein kuch garbar hai. Mashkook rastay chhor kar saaf aur be-daagh rasta chunna dil ko sukoon deta hai.",
      en: "A healthy conscience feels uneasy around questionable dealings; stepping away from doubtful matters preserves spiritual clarity and inner peace."
    },
    tags: [
      { ur: "احتیاط و تقویٰ", ro: "Ehtiyat o Taqwa", en: "Scrupulousness" },
      { ur: "اطمینانِ قلب", ro: "Itminan-e-Qalb", en: "Peace of Mind" }
    ]
  },
  {
    id: "ma-291",
    slug: "oopar-wala-hath-neechay-wale-hath-se-behtar-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 26",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دینے والا ہاتھ لینے والے ہاتھ سے بہتر ہے اور استغنا کی برکت",
      ro: "Dene Wala Hath Lene Wale Hath Se Behtar Hai Aur Istighna Ki Barkat",
      en: "The Giving Hand is Better Than the Receiving Hand"
    },
    quote: {
      ur: "اوپر والا ہاتھ نیچے والے ہاتھ سے بہتر ہے؛ اوپر والا ہاتھ خرچ اور عطا کرنے والا ہے اور نیچے والا ہاتھ مانگنے والا ہے۔ جو شخص سوال سے بچنا چاہتا ہے اللہ اسے پاک دامن رکھتا ہے، اور جو بے نیازی چاہتا ہے اللہ اسے غنی کر دیتا ہے۔",
      ro: "Oopar wala hath neechay wale hath se behtar hai; oopar wala hath kharch aur ata karne wala hai aur neechay wala hath mangne wala hai. Jo shakhs sawal se bachna chahta hai Allah usay paak-daman rakhta hai, aur jo be-niyazi chahta hai Allah usay ghani kar deta hai.",
      en: "The upper hand is better than the lower hand—the upper hand is the one that gives, and the lower hand is the one that begs. Whoever strives to abstain from asking others, Allah grants them dignity, and whoever seeks self-sufficiency, Allah enriches them."
    },
    tashreeh: {
      ur: "یہ فرمان ہر نوجوان اور محنت کش میں خودداری کی روح پھونکتا ہے کہ انسان محنت کر کے اس مقام پر آئے کہ دوسروں کو دینے والا بنے۔ جو شخص اپنا عزتِ نفس بچا کر محنت کرتا ہے اللہ اس کے لیے غنا کے دروازے کھول دیتا ہے۔",
      ro: "Yeh farman har naujawan aur mehnat-kash mein khuddari ki rooh phoonkta hai ke insan mehnat kar ke us maqam par aaye ke doosron ko dene wala banay. Jo shakhs apna izzat-e-nafs bacha kar mehnat karta hai Allah us ke liye ghina ke darwazay khol deta hai.",
      en: "Striving through hard work to become a giver rather than a taker builds self-respect and invites divine abundance."
    },
    tags: [
      { ur: "استغنا", ro: "Istighna", en: "Self-Sufficiency" },
      { ur: "سخاوت", ro: "Sakhawat", en: "Generosity" }
    ]
  },
  {
    id: "ma-292",
    slug: "huzoor-ki-kamil-haya-aur-nagawar-baat-par-sukoot",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 35-36",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "حضور اکرم ﷺ کی کامل حیا اور ناگواری کے وقت باوقار سکوت",
      ro: "Huzoor Akram ﷺ Ki Kamil Haya Aur Nagawari Ke Waqt Ba-Waqar Sukoot",
      en: "The Prophet's ﷺ Profound Modesty and Dignified Silence"
    },
    quote: {
      ur: "حضور اکرم ﷺ پردہ نشین کنواری دوشیزہ سے بھی زیادہ باحیا تھے؛ جب آپ ﷺ کو کوئی بات ناگوار گزرتی تو زبان مبارک سے سخت کلمہ نہ فرماتے، بلکہ آپ ﷺ کے چہرۂ انور کے آثار سے صحابہؓ جان لیتے کہ یہ بات آپ کو پسند نہیں آئی۔",
      ro: "Huzoor Akram ﷺ parda-nasheen kunwari dosheeza se bhi zyada ba-haya thay; jab Aap ﷺ ko koi baat nagawar guzarti to zaban mubarak se sakht kalma na farmate, balkay Aap ﷺ ke chehra-e-anwar ke aasar se Sahaba (R.A) jaan lete ke yeh baat Aap ko pasand nahi aayi.",
      en: "The Prophet ﷺ possessed deeper modesty than a veiled maiden; whenever something displeased him, he never uttered a harsh word, and his companions would recognize his disapproval simply from the expression on his noble face."
    },
    tashreeh: {
      ur: "شرم و حیا اور ضبطِ نفس کی یہ اعلیٰ ترین مثال ہے کہ ناپسندیدگی کے باوجود زبان بے قابو نہ ہو۔ باوقار انسان کی خاموشی اور سنجیدگی ہی سامنے والے کو اپنی غلطی کا احساس دلانے کے لیے کافی ہوتی ہے۔",
      ro: "Sharm-o-haya aur zabt-e-nafs ki yeh aala-tareen misal hai ke napasandeedgi ke bawajood zaban be-qaboo na ho. Ba-waqar insan ki khamoshi aur sanjeedgi hi samne wale ko apni ghalti ka ehsas dilane ke liye kafi hoti hai.",
      en: "True refinement expresses disapproval through composed dignity rather than angry outbursts, inspiring respect and immediate self-correction."
    },
    tags: [
      { ur: "حیائے نبوی ﷺ", ro: "Haya-e-Nabawi ﷺ", en: "Prophetic Modesty" },
      { ur: "وقار", ro: "Waqar", en: "Composure" }
    ]
  },
  {
    id: "ma-293",
    slug: "majlis-mein-har-sharik-ko-poori-tawajjo-dena",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 41-42",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "مجلس کے ہر شریک کو پوری توجہ اور عزت بخشنے کا نبوی انداز",
      ro: "Majlis Ke Har Sharik Ko Poori Tawajjo Aur Izzat Bakhshne Ka Nabawi Andaz",
      en: "Giving Every Companion Full Attention in a Gathering"
    },
    quote: {
      ur: "آپ ﷺ اپنی مجلس میں بیٹھے ہوئے تمام شرکاء پر یکساں توجہ اور التفات کی نظر فرماتے، اور جب کسی سے گفتگو فرماتے تو پورا رخِ انور اس کی طرف پھیر لیتے؛ یہاں تک کہ ہر بیٹھنے والا یہی سمجھتا کہ حضور ﷺ کے نزدیک سب سے زیادہ عزت والا وہی ہے۔",
      ro: "Aap ﷺ apni majlis mein baithe huye tamam shuraka par yaksan tawajjo aur iltifat ki nazar farmate, aur jab kisi se guftugu farmate to poora rukh-e-anwar us ki taraf pher lete; yahan tak ke har baithne wala yehi samajhta ke Huzoor ﷺ ke nazdeek sab se zyada izzat wala wahi hai.",
      en: "The Prophet ﷺ distributed his attention equally among everyone in his gathering, turning his whole body toward whoever spoke to him, so that every single person felt they were the most honored individual in his sight."
    },
    tashreeh: {
      ur: "محفل میں کسی ایک خاص شخص سے باتیں کرنا اور باقی لوگوں کو نظرانداز کر دینا آدابِ معاشرت کے خلاف ہے۔ ہر ملنے والے کو پوری توجہ سے سننا اور اہمیت دینا دلوں کو ہمیشہ کے لیے جیت لیتا ہے۔",
      ro: "Mehfil mein kisi aik khaas shakhs se baatein karna aur baqi logon ko nazar-andaz kar dena aadab-e-muasharat ke khilaf hai. Har milne wale ko poori tawajjo se sunna aur ahmiyat dena dilon ko hamesha ke liye jeet leta hai.",
      en: "Making every person in a room feel seen, heard, and valued equally is the hallmark of supreme emotional intelligence and prophetic grace."
    },
    tags: [
      { ur: "آدابِ مجلس", ro: "Aadab-e-Majlis", en: "Gathering Etiquette" },
      { ur: "تالیفِ قلب", ro: "Taleef-e-Qalb", en: "Winning Hearts" }
    ]
  },
  {
    id: "ma-294",
    slug: "kalam-maal-aur-hilm-ki-haqeeqi-bhalai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 68",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "کلام، مال اور بردباری کی حقیقی قدر و قیمت",
      ro: "Kalam, Maal Aur Burdbari Ki Haqeeqi Qadr-o-Qeemat",
      en: "The True Worth of Speech, Wealth, and Forbearance"
    },
    quote: {
      ur: "اس قول اور کلام میں کوئی بھلائی نہیں جس سے رضائے الٰہی مقصود نہ ہو؛ اس مال میں کوئی خیر نہیں جو راہِ حق میں خرچ نہ ہو؛ اور اس شخص میں کوئی خوبی نہیں جس کی جہالت اور غصہ اس کے حلم اور بردباری پر غالب آ جائے۔",
      ro: "Us qoul aur kalam mein koi bhalai nahi jis se raza-e-Ilahi maqsood na ho; us maal mein koi khair nahi jo raah-e-haq mein kharch na ho; aur us shakhs mein koi khoobi nahi jis ki jahalat aur ghussa us ke hilm aur burdbari par ghalib aa jaye.",
      en: "There is no good in speech that does not seek the pleasure of God, no blessing in wealth that is not spent in the path of truth, and no virtue in a person whose anger overpowers their forbearance."
    },
    tashreeh: {
      ur: "انسان کی گفتگو کی قیمت اس کی نیت سے ہے، مال کی قیمت اس کے صحیح مصرف سے ہے، اور شخصیت کی پختگی اس بات میں ہے کہ غصے کے وقت اس کا حلم اس کی نادانی پر حاوی رہے۔",
      ro: "Insan ki guftugu ki qeemat us ki niyat se hai, maal ki qeemat us ke sahi masraf se hai, aur shakhsiyat ki pukhtagi is baat mein hai ke gusse ke waqt us ka hilm us ki nadani par hawi rahe.",
      en: "Speech is measured by sincerity, wealth by generosity, and character by whether patience triumphs over anger in moments of provocation."
    },
    tags: [
      { ur: "حلم و بردباری", ro: "Hilm o Burdbari", en: "Forbearance" },
      { ur: "خیر و برکت", ro: "Khair o Barkat", en: "True Virtue" }
    ]
  },
  {
    id: "ma-295",
    slug: "bhai-ki-baat-ka-behtareen-matlab-nikalna-husn-e-zan",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 75-77",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "اپنے بھائی کے کلام کا اچھا مطلب نکالنا اور حسنِ ظن",
      ro: "Apne Bhai Ke Kalam Ka Acha Matlab Nikalna Aur Husn-e-Zan",
      en: "Giving Your Brother the Benefit of the Doubt"
    },
    quote: {
      ur: "اپنے مومن بھائی کے منہ سے نکلنے والے کسی کلمے کے بارے میں اس وقت تک بدگمانی نہ کرو جب تک تمہارے پاس اس کا کوئی نہ کوئی اچھا اور نیک مطلب نکالنے کی گنجائش موجود ہو۔",
      ro: "Apne momin bhai ke munh se nikalne wale kisi kalmay ke baray mein us waqt tak bad-gumani na karo jab tak tumhare paas us ka koi na koi acha aur nek matlab nikalne ki gunjaish maujood ho.",
      en: "Never think ill of a word uttered by your brother as long as you can find even a single good and honorable interpretation for it."
    },
    tashreeh: {
      ur: "آج کے دور میں تعلقات ٹوٹنے کی سب سے بڑی وجہ یہ ہے کہ ہم سامنے والے کی بات کا بدترین مطلب نکال لیتے ہیں۔ اگر انسان اپنے دوست کی بات کو اچھے معنی پہنانے کی عادت ڈال لے تو نوے فیصد رنجشیں پیدا ہی نہ ہوں۔",
      ro: "Aaj ke daur mein talluqat tootne ki sab se badi wajah yeh hai ke hum samne wale ki baat ka bad-tareen matlab nikal lete hain. Agar insan apne dost ki baat ko achay ma'ni pehnane ki aadat daal le to nawwe feesad ranjishein paida hi na hon.",
      en: "Most misunderstandings vanish when we choose to interpret the words of others charitably rather than jumping to the worst conclusion."
    },
    tags: [
      { ur: "حسنِ ظن", ro: "Husn-e-Zan", en: "Goodwill" },
      { ur: "بھائی چارہ", ro: "Bhai-Chara", en: "Brotherhood" }
    ]
  },
  {
    id: "ma-296",
    slug: "allah-ke-dekhne-ka-yaqeen-gunah-se-rokne-ke-liye-kafi",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 85-86",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "اللہ کے دیکھنے کا یقین گناہ سے رکنے کے لیے کافی ہے",
      ro: "Allah Ke Dekhne Ka Yaqeen Gunah Se Rukne Ke Liye Kafi Hai",
      en: "Knowing That God Sees You is Enough as a Deterrent"
    },
    quote: {
      ur: "انسان کو برائی سے روکنے اور نصیحت پکڑنے کے لیے یہی یقین کافی ہے کہ اللہ تعالیٰ ہر لمحہ اس کو دیکھ رہا ہے؛ کوئی شخص جو عمل بھی چھپ کر کرتا ہے، اللہ تعالیٰ اس کا اثر اس کے چہرے اور زبان سے ظاہر فرما دیتا ہے۔",
      ro: "Insan ko burai se rokne aur nasihat pakarne ke liye yehi yaqeen kafi hai ke Allah Ta'ala har lamha us ko dekh raha hai; koi shakhs jo amal bhi chhup kar karta hai, Allah Ta'ala us ka asar us ke chehray aur zaban se zahir farma deta hai.",
      en: "It suffices as a moral deterrent for a person to know with certainty that God is watching them at every moment; whatever a person conceals in their inner life, God eventually clothes them with its garment in public."
    },
    tashreeh: {
      ur: "انسان دنیا کی نظروں سے تو چھپ سکتا ہے لیکن اپنے خالق کی نظر سے نہیں۔ جو شخص اپنے باطن میں نیکی چھپاتا ہے اس کے چہرے پر نور آ جاتا ہے، اور جو کھوٹ چھپاتا ہے اس کی زبان اور عمل سے وہ کھوٹ بے نقاب ہو کر رہتا ہے۔",
      ro: "Insan duniya ki nazron se to chhup sakta hai lekin apne Khaliq ki nazar se nahi. Jo shakhs apne batin mein neki chhupata hai us ke chehray par noor aa jata hai, aur jo khot chhupata hai us ki zaban aur amal se woh khot be-naqab ho kar rehta hai.",
      en: "Inner character cannot remain hidden forever: private righteousness radiates as dignity on the face, while hidden malice eventually betrays itself."
    },
    tags: [
      { ur: "احساسِ حاضری", ro: "Ehsas-e-Haziri", en: "God-Consciousness" },
      { ur: "پاکیزگی", ro: "Pakeezgi", en: "Integrity" }
    ]
  },
  {
    id: "ma-297",
    slug: "aqal-kamil-ho-jaye-to-guftugu-mukhtasar-ho-jati-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 90-93",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "جب عقل کامل ہو جاتی ہے تو گفتگو کم ہو جاتی ہے",
      ro: "Jab Aqal Kamil Ho Jati Hai To Guftugu Kam Ho Jati Hai",
      en: "When Reason Becomes Complete, Speech Decreases"
    },
    quote: {
      ur: "جب انسان کی عقل کامل اور پختہ ہو جاتی ہے تو اس کی گفتگو مختصر ہو جاتی ہے؛ مصیبت میں صبر کرنا خزانہ ہے، قناعت نہ ختم ہونے والی جاگیر ہے، اور سب سے بہترین رفیق اچھے اخلاق ہیں۔",
      ro: "Jab insan ki aqal kamil aur pukhta ho jati hai to us ki guftugu mukhtasar ho jati hai; musibat mein sabr karna khazana hai, qana'at na khatam hone wali jageer hai, aur sab se behtareen rafeeq achay akhlaq hain.",
      en: "When a person's intellect reaches maturity, their words become few; patience in hardship is a treasure, contentment is an inexhaustible estate, and the finest companion in life is noble character."
    },
    tashreeh: {
      ur: "خالی برتن زیادہ شور مچاتا ہے جبکہ بھرا ہوا برتن خاموش رہتا ہے۔ جیسے جیسے انسان کا علم اور تجربہ گہرا ہوتا ہے، وہ بے مقصد بحث چھوڑ کر صرف کام اور حکمت کی بات کرتا ہے۔",
      ro: "Khali bartan zyada shor machata hai jabkeh bhara huwa bartan khamosh rehta hai. Jaise jaise insan ka ilm aur tajurba gehra hota hai, woh be-maqsad behas chhor kar sirf kaam aur hikmat ki baat karta hai.",
      en: "Just as a full vessel makes no noise, a mature mind speaks only when words add value, finding true wealth in patience and good manners."
    },
    tags: [
      { ur: "پختگیٔ عقل", ro: "Pukhtagi-e-Aqal", en: "Mature Wisdom" },
      { ur: "کم گوئی", ro: "Kam-Goi", en: "Concise Speech" }
    ]
  },
  {
    id: "ma-298",
    slug: "taqwa-ko-tijarat-banao-baghair-sarmaye-ke-nafa-milega",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 98-100",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "تقویٰ کو اپنی تجارت بناؤ، بغیر مال کے نفع ملے گا",
      ro: "Taqwa Ko Apni Tijarat Banao, Baghair Maal Ke Nafa Milega",
      en: "Make Piety Your Trade and Profit Will Come Without Capital"
    },
    quote: {
      ur: "اے بیٹے! تقویٰ اور پرہیزگاری کو اپنی تجارت بنا لے، تیرے پاس بغیر کسی دنیاوی مال و اسباب کے نفع آتا رہے گا؛ اور جب دیکھے کہ کسی مجلس میں اللہ کا ذکر اور خیر کی بات ہو رہی ہے تو ان لوگوں کے ساتھ بیٹھ جا، کیونکہ اگر تو عالم ہے تو تیرا علم کام آئے گا اور اگر نادان ہے تو وہ تجھے سکھا دیں گے۔",
      ro: "Aye betay! Taqwa aur parhezgari ko apni tijarat bana le, tere paas baghair kisi dunyawi maal-o-asbab ke nafa aata rahega; aur jab dekhe ke kisi majlis mein Allah ka zikr aur khair ki baat ho rahi hai to un logon ke sath baith ja, kyunkeh agar tu aalim hai to tera ilm kaam aayega aur agar nadan hai to woh tujhe sikha denge.",
      en: "O my son! Make piety your commerce and profit will come to you without worldly merchandise; and whenever you find a gathering where God is remembered and wisdom is shared, sit with them—for if you are knowledgeable, your knowledge will benefit you, and if you are unaware, they will teach you."
    },
    tashreeh: {
      ur: "تقویٰ اور ایمانداری ایسی پونجی ہے جس میں کبھی گھاٹا نہیں پڑتا۔ نیک اور صاحبِ علم لوگوں کی محفل میں بیٹھنا ہر حال میں نفع بخش ہے کیونکہ وہاں سے انسان علم، دعا اور برکت لے کر اٹھتا ہے۔",
      ro: "Taqwa aur emandari aisi poonji hai jis mein kabhi ghata nahi parta. Nek aur sahib-e-ilm logon ki mehfil mein baithna har haal mein nafa-bakhsh hai kyunkeh wahan se insan ilm, dua aur barkat le kar uthta hai.",
      en: "Integrity is a capital that never suffers loss, and keeping company with the wise enriches both the scholar and the seeker."
    },
    tags: [
      { ur: "حکمتِ لقمان", ro: "Hikmat-e-Luqman", en: "Luqman's Wisdom" },
      { ur: "صحبتِ خیر", ro: "Suhbat-e-Khair", en: "Blessed Company" }
    ]
  },
  {
    id: "ma-299",
    slug: "dil-aaine-ki-manind-hai-usay-keena-ke-zang-se-bachao",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 258",
    author: {
      ur: "اقوالِ حکماء و بزرگان",
      ro: "Aqwal-e-Hukama o Buzurgan",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "دل آئینے کی مانند ہے، اسے کینے کے زنگ سے صاف رکھو",
      ro: "Dil Aaine Ki Manind Hai, Usay Keenay Ke Zang Se Saaf Rakho",
      en: "The Heart is Like a Mirror: Keep It Free from the Rust of Malice"
    },
    quote: {
      ur: "انسان کا دل لوہے کے آئینے کی مانند ہے؛ کینہ، حسد اور بدخواہی اس آئینے کو زنگ لگا دیتے ہیں جس سے حق کا عکس نظر آنا بند ہو جاتا ہے، جبکہ معاف کر دینا، شکر ادا کرنا اور مخلوق کی خیر چاہنا اس آئینے کو صیقل کر کے چمکا دیتے ہیں۔",
      ro: "Insan ka dil lohay ke aaine ki manind hai; keena, hasad aur bad-khwahi us aaine ko zang laga dete hain jis se haq ka aks nazar aana band ho jata hai, jabkeh maaf kar dena, shukr ada karna aur makhlooq ki khair chahna us aaine ko saiqal kar ke chamka dete hain.",
      en: "The human heart is like a polished mirror: malice, envy, and ill-will cover it with rust until it can no longer reflect the truth, whereas forgiveness, gratitude, and goodwill polish it bright."
    },
    tashreeh: {
      ur: "جب انسان دل میں لوگوں کے خلاف بغض اور نفرت پالتا ہے تو اس کی اپنی سوچ دھندلا جاتی ہے۔ رات کو سونے سے پہلے سب کو معاف کر کے اپنے دل کا آئینہ صاف کر لینا روحانی سکون کا سب سے بڑا راز ہے۔",
      ro: "Jab insan dil mein logon ke khilaf bughz aur nafrat palta hai to us ki apni soch dhundla jati hai. Raat ko sonay se pehle sab ko maaf kar ke apne dil ka aaina saaf kar lena roohani sukoon ka sab se bada raaz hai.",
      en: "Holding onto grudges clouds one's own judgment and peace; cleansing the heart through forgiveness restores clarity and spiritual joy."
    },
    tags: [
      { ur: "صفائے قلب", ro: "Safa-e-Qalb", en: "Pure Heart" },
      { ur: "بے کینگی", ro: "Be-Keenagi", en: "Freedom from Malice" }
    ]
  },
  {
    id: "ma-300",
    slug: "insan-ki-haqeeqi-miras-tootay-dilon-ko-jorna-hai",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 340",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "انسان کی لازوال میراث ٹوٹے ہوئے دلوں کو جوڑنا ہے",
      ro: "Insan Ki La-Zawal Miras Tootay Huye Dilon Ko Jorna Hai",
      en: "A Person's Eternal Legacy is Mending Broken Hearts"
    },
    quote: {
      ur: "پتھر اور اینٹ کے بنے ہوئے محلات وقت کے ساتھ کھنڈر بن جاتے ہیں، لیکن کسی ٹوٹے ہوئے دل کو تسلی دے کر اور کسی بے سہارا کے آنسو پونچھ کر جو محبت کا گھر تعمیر کیا جاتا ہے، اس کی بنیادیں زمین سے لے کر آسمان تک ہمیشہ سلامت رہتی ہیں۔",
      ro: "Pathar aur eent ke banay huye mahallat waqt ke sath khandar ban jate hain, lekin kisi tootay huye dil ko tasalli de kar aur kisi be-sahara ke aansoo ponchh kar jo mohabbat ka ghar tameer kiya jata hai, us ki bunyadein zameen se le kar asman tak hamesha salamat rehti hain.",
      en: "Palaces built of stone and brick eventually crumble into ruins, but the sanctuary built by comforting a broken heart and wiping away the tears of the helpless stands eternal from earth to heaven."
    },
    tashreeh: {
      ur: "تین سو اقوال کے اس سفر کا نچوڑ یہی ہے کہ انسان دنیا سے رخصت ہوتے وقت اپنی عمارتیں اور خزانے یہیں چھوڑ جاتا ہے، اور اس کا نام صرف ان دلوں کی دعاؤں میں زندہ رہتا ہے جنہیں اس نے اپنی زندگی میں سہارا دیا ہو۔",
      ro: "Teen so aqwal ke is safar ka nichor yehi hai ke insan duniya se rukhsat hote waqt apni imaratein aur khazanay yahin chhor jata hai, aur us ka naam sirf un dilon ki duaon mein zinda rehta hai jinhein us ne apni zindagi mein sahara diya ho.",
      en: "The ultimate lesson of moral wisdom is that material monuments fade, while every act of kindness that uplifts a human soul echoes forever in eternity."
    },
    tags: [
      { ur: "دلجوئی", ro: "Dil-Joi", en: "Comforting Hearts" },
      { ur: "باقیاتِ صالحات", ro: "Baqiyat-e-Salihat", en: "Eternal Legacy" }
    ]
  }
];

export const batch21Quotes: QuoteItem[] = [
  {
    id: "ma-301",
    slug: "thori-dunyawi-qeemat-par-usool-aur-ahad-na-bechna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah An-Nahl (16:95) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "معمولی دنیاوی مفاد کے بدلے اپنے عہد اور ضمیر کا سودا نہ کرنا",
      ro: "Mamooli Dunyawi Mafad Ke Badlay Apne Ahad Aur Zameer Ka Sauda Na Karna",
      en: "Never Trading Moral Principles for Fleeting Worldly Gain"
    },
    quote: {
      ur: "اور اللہ کے عہد کو تھوڑی سی دنیاوی قیمت کے بدلے فروخت نہ کرو؛ بے شک جو ثواب اور انعام اللہ کے پاس ہے وہی تمہارے لیے بہتر ہے اگر تم علم رکھتے ہو۔",
      ro: "Aur Allah ke ahad ko thori si dunyawi qeemat ke badlay farokht na karo; be-shak jo sawab aur inam Allah ke paas hai wahi tumhare liye behtar hai agar tum ilm rakhte ho.",
      en: "And do not barter the covenant of Allah for a small worldly price; indeed, what is with Allah is far better for you, if only you knew."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ النحل کی اس آیت میں دنیا کی پوری دولت کو بھی آخرت کے مقابلے میں 'ثمن قلیل' (تھوڑی قیمت) قرار دیا گیا ہے۔ زندگی میں بارہا ایسے مواقع آتے ہیں جہاں جھوٹی قسم یا وعدہ خلافی سے فوری مالی فائدہ نظر آتا ہے۔ آج کا عملی سبق یہ ہے کہ وقتی لالچ کو ٹھکرا کر اپنے ایمان اور وعدے کی لاج رکھیں کیونکہ حلال اور سچائی کی برکت ہمیشہ باقی رہتی ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah An-Nahl ki is aayat mein duniya ki poori daulat ko bhi akhirat ke muqable mein 'samanan qaleela' (thori qeemat) qarar diya gaya hai. Zindagi mein barha aise mawaqe aate hain jahan jhooti qasam ya wada-khilafi se fori maali faida nazar aata hai. Aaj ka amli sabaq yeh hai ke waqti lalach ko thukra kar apne eman aur waday ki laaj rakhein kyunkeh halal aur sachai ki barkat hamesha baqi rehti hai.",
      en: "Context & Practical Lesson: Surah An-Nahl reminds us that all worldly gain is a 'small price' compared to eternal integrity. Choosing honesty over quick, unethical profit preserves lasting blessing."
    },
    tags: [
      { ur: "استقامت", ro: "Istaqamat", en: "Integrity" },
      { ur: "پاسِ عہد", ro: "Paas-e-Ahad", en: "Honoring Pledges" }
    ]
  },
  {
    id: "ma-302",
    slug: "sail-aur-zaroorat-mand-ko-jhirakne-se-parhez",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ad-Duha (93:9-11) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "یتیم پر سختی نہ کرنا، سائل کو نہ جھڑکنا اور شکرِ نعمت",
      ro: "Yateem Par Sakhti Na Karna, Sail Na Jhirakna Aur Shukr-e-Nemat",
      en: "Honoring the Orphan, Never Scolding the Petitioner, and Gratitude"
    },
    quote: {
      ur: "پس آپ یتیم پر ہرگز سختی نہ کریں، اور مانگنے والے (سائل) کو مت جھڑکیں، اور اپنے پروردگار کی نعمت کا خوب تذکرہ اور شکر کیا کریں۔",
      ro: "Pas aap yateem par hargiz sakhti na karein, aur mangne wale (sail) ko mat jhirkein, aur apne Parwardigar ki nemat ka khoob tazkira aur shukr kiya karein.",
      en: "So as for the orphan, do not oppress them; and as for the petitioner, do not repulse or scold them; and as for the favor of your Lord, proclaim it with gratitude."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الضحیٰ کی یہ آیات شکرِ نعمت کے عملی طریقے سکھاتی ہیں: بے سہارا یتیم کے مال اور عزت کی حفاظت کرنا، اور دروازے پر آنے والے حاجت مند یا علم پوچھنے والے طالبِ علم کو کبھی نہ ڈانٹنا۔ آج کا عملی سبق یہ ہے کہ اگر آپ کسی سائل کی مالی مدد نہ بھی کر سکیں تو کم از کم مسکرا کر اور عزت سے معذرت کریں تاکہ کسی کا دل نہ ٹوٹے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ad-Duha ki yeh aayatein shukr-e-nemat ke amli tareeqay sikhati hain: be-sahara yateem ke maal aur izzat ki hifazat karna, aur darwazay par aane wale hajat-mand ya ilm poochne wale talib-e-ilm ko kabhi na dantna. Aaj ka amli sabaq yeh hai ke agar aap kisi sail ki maali madad na bhi kar sakein to kam az kam muskura kar aur izzat se maazrat karein taake kisi ka dil na tootay.",
      en: "Context & Practical Lesson: Surah Ad-Duha teaches that gratitude for God's favors is expressed by protecting orphans and treating every petitioner or seeker of knowledge with gentle dignity."
    },
    tags: [
      { ur: "شفقت", ro: "Shafqat", en: "Compassion" },
      { ur: "تحدیثِ نعمت", ro: "Tahdees-e-Nemat", en: "Gratitude" }
    ]
  },
  {
    id: "ma-303",
    slug: "tazkiya-e-nafs-hi-haqeeqi-kamyabi-ka-miyar-hai",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ash-Shams (91:8-10) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اپنے نفس کو پاکیزہ بنانے والا ہی حقیقی کامیاب ہے",
      ro: "Apne Nafs Ko Pakeeza Banane Wala Hi Haqeeqi Kamyab Hai",
      en: "True Success Belongs to the One Who Purifies the Soul"
    },
    quote: {
      ur: "پس اللہ نے انسانی نفس کو اس کی بدکاری اور پرہیزگاری کی سمجھ الہام فرما دی؛ بے شک وہ شخص فلاح پا گیا جس نے اپنے نفس کو پاک اور آراستہ کر لیا، اور وہ نامراد ہوا جس نے اسے گناہوں میں دبا دیا۔",
      ro: "Pas Allah ne insani nafs ko us ki bad-kari aur parhezgari ki samajh ilham farma di; be-shak woh shakhs falah pa gaya jis ne apne nafs ko paak aur aarasta kar liya, aur woh namurad huwa jis ne usay gunahon mein daba diya.",
      en: "And He inspired the soul with discernment of its wickedness and its righteousness: truly successful is the one who purifies it, and truly lost is the one who corrupts and buries it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الشمس میں اللہ تعالیٰ نے انسانی کامیابی کا یہ اٹل قانون بیان فرمایا ہے کہ فلاح کا دارومدار تزکیۂ نفس (اپنے اندر کو حسد، تکبر اور خیانت سے پاک کرنے) پر ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کی خامیوں کا حساب رکھنے کے بجائے روزانہ اپنے دل کی زمین سے ایک برائی نکال کر اخلاص کا پودا لگائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ash-Shams mein Allah Ta'ala ne insani kamyabi ka yeh atal qanoon bayan farmaya hai ke فلاح کا دارومدار تزکیۂ نفس (اپنے اندر کو حسد، تکبر اور خیانت سے پاک کرنے) پر ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کی خامیوں کا حساب رکھنے کے بجائے روزانہ اپنے دل کی زمین سے ایک برائی نکال کر اخلاص کا پودا لگائیں۔",
      en: "Context & Practical Lesson: Surah Ash-Shams declares that human success rests on inner purification ('Tazkiyah')—weeding out malice and pride so sincerity can flourish."
    },
    tags: [
      { ur: "تزکیۂ نفس", ro: "Tazkiya-e-Nafs", en: "Self-Purification" },
      { ur: "فلاح", ro: "Falah", en: "Salvation" }
    ]
  },
  {
    id: "ma-304",
    slug: "kafaf-ki-rozi-aur-qanaat-ki-khush-bakhti",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Hadith Section)",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Paraphrased Summary)"
    },
    title: {
      ur: "بقدرِ ضرورت حلال روزی اور قناعت کی خوش بختی",
      ro: "Ba-Qadr-e-Zaroorat Halal Rozi Aur Qana'at Ki Khush-Bakhti",
      en: "The Blessedness of Sufficient Provision and a Contented Heart"
    },
    quote: {
      ur: "کامیاب اور خوش نصیب ہے وہ انسان جسے ہدایت کی دولت ملی، بقدرِ ضرورت حلال رزق عطا ہوا، اور اللہ تعالیٰ نے جو کچھ اسے دیا اس پر اس کے دل کو قانع اور مطمئن کر دیا۔",
      ro: "Kamyab aur khush-naseeb hai woh insan jisay hidayat ki daulat mili, ba-qadr-e-zaroorat halal rizq ata huwa, aur Allah Ta'ala ne jo kuch usay diya us par us ke dil ko qane' aur mutmain kar diya.",
      en: "Truly fortunate is the person who is guided to upright faith, granted sufficient lawful provision for their needs, and blessed by God with deep contentment in what they have."
    },
    tashreeh: {
      ur: "ڈھیروں مال کے ساتھ اگر دل بے چین ہو تو وہ مال عذاب ہے، اور اگر حلال آمدنی ضرورت کے مطابق ہو مگر دل میں شکر اور قناعت کا نور ہو تو وہی زندگی کی سب سے بڑی راحت ہے۔",
      ro: "Dheron maal ke sath agar dil be-chain ho to woh maal azaab hai, aur agar halal aamdani zaroorat ke mutabiq ho magar dil mein shukr aur qana'at ka noor ho to wahi zindagi ki sab se badi rahat hai.",
      en: "Vast wealth accompanied by anxiety is a burden, whereas modest, lawful earnings paired with a tranquil and grateful heart represent the height of earthly happiness."
    },
    tags: [
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" },
      { ur: "رزقِ کفاف", ro: "Rizq-e-Kafaf", en: "Sufficient Provision" }
    ]
  },
  {
    id: "ma-305",
    slug: "makhlooq-ke-rastay-se-takleef-hatana-maghfirat-ka-sabab",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Hadith Section)",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Paraphrased Summary)"
    },
    title: {
      ur: "مسلمانوں کے راستے سے کانٹا ہٹانا بھی مغفرت کا سبب ہے",
      ro: "Musalmanon Ke Rastay Se Kanta Hatana Bhi Maghfirat Ka Sabab Hai",
      en: "Removing Harm from Public Paths Earns Divine Forgiveness"
    },
    quote: {
      ur: "ایک شخص نے گزرگاہ میں کانٹے دار ٹہنی دیکھی تو یہ سوچ کر اسے ہٹا دیا کہ اس سے گزرنے والے انسانوں کو تکلیف نہ پہنچے؛ اللہ تعالیٰ کو اس کا یہ جذبۂ خیر خواہی اس قدر پسند آیا کہ اس کی بخشش فرما دی۔",
      ro: "Aik shakhs ne guzargah mein kantay-dar tehni dekhi to yeh soch kar usay hata diya ke is se guzarne wale insanon ko takleef na pohanche; Allah Ta'ala ko us ka yeh jazba-e-khair-khwahi is qadar pasand aaya ke us ki bakhshish farma di.",
      en: "A traveler noticed a thorny branch obstructing a public road and removed it so passersby would not be harmed; God appreciated this simple act of civic care so deeply that He forgave their sins."
    },
    tashreeh: {
      ur: "اگر راستے سے ایک کانٹا ہٹانے پر جنت مل سکتی ہے تو جو لوگ گلی محلوں میں کوڑا پھینک کر، ناجائز تجاوزات بنا کر یا دوسروں کے کاموں میں روڑے اٹکا کر تکلیف دیتے ہیں انہیں اپنے انجام سے ڈرنا چاہیے۔",
      ro: "Agar rastay se aik kanta hatane par Jannat mil sakti hai to jo log gali-mohallon mein koora phaink kar, najaiz tajawuzat bana kar ya doosron ke kaamon mein roray atka kar takleef dete hain unhein apne anjam se darna chahiye.",
      en: "If clearing a small obstacle from a street unlocks divine mercy, then keeping public spaces clean, safe, and accessible is a profound spiritual duty."
    },
    tags: [
      { ur: "شہری ذمہ داری", ro: "Shehri Zimmedari", en: "Civic Care" },
      { ur: "راحت رسانی", ro: "Rahat-Rasani", en: "Removing Harm" }
    ]
  },
  {
    id: "ma-306",
    slug: "mareez-ke-paas-baith-kar-umeed-aur-dua-dena",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Hadith Section)",
    author: {
      ur: "نبوی تعلیمات ﷺ (خلاصہ)",
      ro: "Nabawi Taleemat ﷺ (Khulasa)",
      en: "Prophetic Teachings ﷺ (Paraphrased Summary)"
    },
    title: {
      ur: "مریض کی عیادت میں امید افزا کلمات اور شفا کی دعا",
      ro: "Mareez Ki Ayadat Mein Umeed-Afza Kalmaat Aur Shifa Ki Dua",
      en: "Bringing Hope and Comfort When Visiting the Sick"
    },
    quote: {
      ur: "جب کسی بیمار کی عیادت کے لیے جاؤ تو اس کے پاس مایوسی کی بات نہ کرو، بلکہ تسلی اور حوصلے کی بات کہہ کر اس کی ہمت بڑھاؤ؛ کیونکہ تمہارے اچھے بول تقدیر تو نہیں بدلتے لیکن مریض کے دل کو راحت اور سکون ضرور پہنچاتے ہیں۔",
      ro: "Jab kisi bimar ki ayadat ke liye jao to us ke paas mayousi ki baat na karo, balkay tasalli aur hauslay ki baat keh kar us ki himmat barhao; kyunkeh tumhare achay bol taqdeer to nahi badalte lekin mareez ke dil ko rahat aur sukoon zaroor pohanchate hain.",
      en: "When you visit an ailing person, speak words of hope, comfort, and encouragement regarding their recovery; for gentle words uplift the patient's spirit and soothe their anxious heart."
    },
    tashreeh: {
      ur: "عیادت کا مقصد مریض کو ڈرانا یا اس کے پاس زیادہ دیر بیٹھ کر اسے تھکانا نہیں ہے، بلکہ مختصر وقت میں مسکرا کر اس کا حوصلہ بڑھانا اور صحت کی دعا دے کر رخصت ہونا ہے۔",
      ro: "Ayadat ka maqsad mareez ko darana ya us ke paas zyada dair baith kar usay thakana nahi hai, balkay mukhtasar waqt mein muskura kar us ka hausla barhana aur sehat ki dua de kar rukhsat hona hai.",
      en: "Proper etiquette when visiting the sick means keeping the visit brief, radiating optimism, and offering heartfelt prayers that strengthen their morale."
    },
    tags: [
      { ur: "آدابِ عیادت", ro: "Aadab-e-Ayadat", en: "Etiquette of Visiting" },
      { ur: "حوصلہ افزائی", ro: "Hausla-Afzai", en: "Encouragement" }
    ]
  },
  {
    id: "ma-307",
    slug: "sathiyon-se-mashwara-aur-un-ki-raaye-ka-ehtiram",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Seerah Section)",
    author: {
      ur: "اسوۂ نبوی ﷺ (خلاصہ)",
      ro: "Uswah-e-Nabawi ﷺ (Khulasa)",
      en: "Prophetic Example ﷺ (Paraphrased Summary)"
    },
    title: {
      ur: "ساتھیوں سے کثرتِ مشاورت اور ان کی رائے کا احترام",
      ro: "Sathiyon Se Kasrat-e-Mushawarat Aur Un Ki Raaye Ka Ehtiram",
      en: "Frequently Consulting Companions and Honoring Their Counsel"
    },
    quote: {
      ur: "حضور اکرم ﷺ کمالِ دانش اور وحی کی تائید کے باوجود دنیاوی اور اجتماعی امور میں اپنے صحابہ کرامؓ سے کثرت کے ساتھ مشورہ فرماتے، اور جب کوئی ساتھی بہتر تدبیر پیش کرتا تو کھلے دل سے اپنی رائے چھوڑ کر اس کے مشورے کو قبول فرما لیتے۔",
      ro: "Huzoor Akram ﷺ kamal-e-danish aur wahi ki taayeed ke bawajood dunyawi aur ijtimai umoor mein apne Sahaba Kiram (R.A) se kasrat ke sath mashwara farmate, aur jab koi sathi behtar tadbeer pesh karta to khulay dil se apni raaye chhor kar us ke mashwaray ko qubool farma lete.",
      en: "Despite possessing supreme wisdom, the Prophet ﷺ regularly consulted his companions in community affairs and gladly adopted their practical suggestions whenever they offered sound counsel."
    },
    tashreeh: {
      ur: "بڑا انسان وہی ہے جو اپنی رائے پر اڑنے کو عزت کا مسئلہ نہ بنائے۔ ماتحتوں اور ساتھیوں سے مشورہ لینے سے ان میں ذمہ داری کا احساس پیدا ہوتا ہے اور اجتماعی کاموں میں برکت آتی ہے۔",
      ro: "Bada insan wahi hai jo apni raaye par arne ko izzat ka masla na banaye. Matehton aur sathiyon se mashwara lene se un mein zimmedari ka ehsas paida hota hai aur ijtimai kaamon mein barkat aati hai.",
      en: "True leadership welcomes good ideas from anyone regardless of rank, empowering team members and fostering collective wisdom."
    },
    tags: [
      { ur: "مشاورتِ نبوی ﷺ", ro: "Mushawarat-e-Nabawi ﷺ", en: "Collaborative Leadership" },
      { ur: "وسعتِ ظرف", ro: "Wus'at-e-Zarf", en: "Open-Mindedness" }
    ]
  },
  {
    id: "ma-308",
    slug: "auqat-ki-munazzam-taqseem-ibadat-khandan-aur-khidmat",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Seerah Section)",
    author: {
      ur: "اسوۂ نبوی ﷺ (خلاصہ)",
      ro: "Uswah-e-Nabawi ﷺ (Khulasa)",
      en: "Prophetic Example ﷺ (Paraphrased Summary)"
    },
    title: {
      ur: "اوقات کی منظم تقسیم: عبادت، اہلِ خانہ اور خدمتِ خلق",
      ro: "Auqat Ki Munazzam Taqseem: Ibadat, Ahl-e-Khana Aur Khidmat-e-Khalq",
      en: "Disciplined Time Management Between God, Family, and Humanity"
    },
    quote: {
      ur: "آپ ﷺ اپنے شب و روز کے اوقات کو بے حد نظم اور سلیقے سے تین حصوں میں تقسیم فرماتے: ایک حصہ اللہ کی عبادت کے لیے، ایک حصہ اپنے اہلِ خانہ کے حقوق اور خبرگیری کے لیے، اور ایک حصہ عام لوگوں سے ملاقات اور ان کے مسائل حل کرنے کے لیے۔",
      ro: "Aap ﷺ apne shab-o-roz ke auqat ko be-had nazm aur saleeqay se teen hisson mein taqseem farmate: aik hissa Allah ki ibadat ke liye, aik hissa apne ahl-e-khana ke huqooq aur khabargeeri ke liye, aur aik hissa aam logon se mulaqat aur un ke masail hal karne ke liye.",
      en: "The Prophet ﷺ structured his daily hours into three balanced parts: one portion devoted to the worship of God, one portion dedicated to his family's care, and one portion open to serving the public and addressing their needs."
    },
    tashreeh: {
      ur: "کامیاب زندگی بے ہنگم مصروفیت کا نام نہیں بلکہ ہر حق کو اس کے مقررہ وقت پر ادا کرنے کا نام ہے۔ کام کے چکر میں اپنے گھر والوں کو نظرانداز کر دینا یا روحانی تعلق بھلا دینا توازن کو بگاڑ دیتا ہے۔",
      ro: "Kamyab zindagi be-hangam masroofiyat ka naam nahi balkay har haq ko us ke muqarrara waqt par ada karne ka naam hai. Kaam ke chakkar mein apne ghar walon ko nazar-andaz kar dena ya roohani talluq bhula dena tawazun ko bigar deta hai.",
      en: "A fulfilling life requires intentional time management—never letting professional duties crowd out spiritual devotion or quality time with family."
    },
    tags: [
      { ur: "نظمِ اوقات", ro: "Nazm-e-Auqat", en: "Time Management" },
      { ur: "متوازن زندگی", ro: "Mutawazin Zindagi", en: "Work-Life Balance" }
    ]
  },
  {
    id: "ma-309",
    slug: "neki-kar-ke-ajizi-aur-gunah-ke-baad-nadamat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Sahaba Section)",
    author: {
      ur: "اقوالِ صدیقِ اکبرؓ (خلاصہ)",
      ro: "Aqwal-e-Siddiq-e-Akbar R.A (Khulasa)",
      en: "Wisdom of Abu Bakr Siddiq R.A (Summary)"
    },
    title: {
      ur: "نیکی کے بعد عاجزی اور قبولیت کی فکر",
      ro: "Neki Ke Baad Aajizi Aur Qubooliyat Ki Fikr",
      en: "Humility After Doing Good and Concern for Sincerity"
    },
    quote: {
      ur: "جب کوئی نیکی کرنے کی توفیق ملے تو اس پر فخر کرنے کے بجائے اس بات کی فکر رکھو کہ وہ قبول بھی ہوئی یا نہیں؛ کیونکہ وہ لغزش جو انسان کو عاجز اور منکسر بنا دے اس عبادت سے بہتر ہے جو دل میں تکبر پیدا کر دے۔",
      ro: "Jab koi neki karne ki taufeeq milay to us par fakhr karne ke bajaye is baat ki fikr rakho ke woh qubool bhi hui ya nahi; kyunkeh woh laghzish jo insan ko aajiz aur munkasir bana de us ibadat se behtar hai jo dil mein takabbur paida kar de.",
      en: "Whenever you are blessed to perform a good deed, focus on whether it is accepted rather than feeling proud of it; for a slip that leaves you humble and contrite is safer than a virtue that breeds arrogance in the heart."
    },
    tashreeh: {
      ur: "نیکی کرنے سے زیادہ مشکل کام نیکی کو غرور سے بچانا ہے۔ عارفین کا طریقہ یہ ہے کہ وہ بڑے سے بڑا خیر کا کام کر کے بھی خود کو مقصر سمجھتے ہیں اور دوسروں کو کبھی حقیر نہیں جانتے۔",
      ro: "Neki karne se zyada mushkil kaam neki ko ghuroor se bachana hai. Aarifeen ka tareeqa yeh hai ke woh bade se bada khair ka kaam kar ke bhi khud ko muqassir samajhte hain aur doosron ko kabhi haqeer nahi jante.",
      en: "Spiritual pride can quietly ruin a lifetime of good works; true righteousness is always accompanied by deep humility and compassion toward others."
    },
    tags: [
      { ur: "انکساری", ro: "Inkisari", en: "Humility" },
      { ur: "اخلاص", ro: "Ikhlas", en: "Sincerity" }
    ]
  },
  {
    id: "ma-310",
    slug: "sachay-aur-mukhlis-logon-ko-apna-hum-nasheen-banao",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Sahaba Section)",
    author: {
      ur: "اقوالِ فاروقِ اعظمؓ (خلاصہ)",
      ro: "Aqwal-e-Farooq-e-Azam R.A (Khulasa)",
      en: "Wisdom of Umar Farooq R.A (Summary)"
    },
    title: {
      ur: "سچے اور باعمل لوگوں کی ہم نشینی اختیار کرنا",
      ro: "Sachay Aur Ba-Amal Logon Ki Ham-Nashini Ikhtiyar Karna",
      en: "Choosing Companions Who Inspire Truth and Integrity"
    },
    quote: {
      ur: "ایسے لوگوں کو اپنا ہم نشین بناؤ جنہیں دیکھ کر تمہیں حق اور فرض یاد آئے، جن کی گفتگو تمہارے علم میں اضافہ کرے، اور جن کا عمل تمہیں سستی چھوڑ کر محنت اور آخرت کی رغبت دلائے۔",
      ro: "Aise logon ko apna ham-nasheen banao jinhein dekh kar tumhein haq aur farz yaad aaye, jin ki guftugu tumhare ilm mein izafa kare, aur jin ka amal tumhein susti chhor kar mehnat aur akhirat ki raghbat dilaye.",
      en: "Choose companions whose presence reminds you of moral duty, whose conversation increases your wisdom, and whose conduct inspires you to abandon laziness and strive for eternal good."
    },
    tashreeh: {
      ur: "دوستوں کا حلقہ انسان کے مستقبل کا فیصلہ کرتا ہے۔ اگر آپ کے اردگرد باہمت، دیانت دار اور علم دوست لوگ ہوں گے تو آپ کا معیارِ فکر اور عمل خود بخود بلند ہوتا چلا جائے گا۔",
      ro: "Doston ka halqa insan ke mustaqbil ka faisla karta hai. Agar aap ke ird-gird ba-himmat, diyanat-dar aur ilm-dost log honge to aap ka miyar-e-fikr aur amal khud-ba-khud buland hota chala jayega.",
      en: "Our circle of friends shapes our destiny: surrounding ourselves with honest, hardworking, and wise individuals naturally elevates our own standards."
    },
    tags: [
      { ur: "نیک صحبت", ro: "Nek Suhbat", en: "Good Company" },
      { ur: "ترغیبِ عمل", ro: "Targheeb-e-Amal", en: "Inspiration" }
    ]
  },
  {
    id: "ma-311",
    slug: "har-naye-din-ki-pukar-aur-amal-ki-kheti",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Sahaba Section)",
    author: {
      ur: "اقوالِ عثمانِ غنیؓ (خلاصہ)",
      ro: "Aqwal-e-Usman-e-Ghani R.A (Khulasa)",
      en: "Wisdom of Usman Ghani R.A (Summary)"
    },
    title: {
      ur: "ہر طلوع ہونے والے دن کا پیغام اور عمل کی کھیتی",
      ro: "Har Tuloo Hone Wale Din Ka Paigham Aur Amal Ki Kheti",
      en: "The Daily Call of Every New Dawn and the Harvest of Deeds"
    },
    quote: {
      ur: "ہر نیا طلوع ہونے والا دن انسان کو پکار کر کہتا ہے کہ میں ایک نیا موقع اور تیرے عمل پر گواہ ہوں، پس مجھ میں بھلائی کا بیج بو لے کیونکہ جب میں گزر جاؤں گا تو قیامت تک دوبارہ لوٹ کر نہیں آؤں گا۔",
      ro: "Har naya tuloo hone wala din insan ko pukar kar kehta hai ke main aik naya mauqa aur tere amal par gawah hoon, pas mujh mein bhalai ka beej bo le kyunkeh jab main guzar jaoonga to qayamat tak dobara laut kar nahi aaoonga.",
      en: "Every new dawn calls out to humanity: 'I am a fresh opportunity and a witness over your actions; sow seeds of goodness within me today, for once I set, I shall never return until the Day of Reckoning.'"
    },
    tashreeh: {
      ur: "زندگی درحقیقت چند گنے چنے دنوں کا مجموعہ ہے۔ ہر صبح اس عزم کے ساتھ اٹھنا کہ آج کسی کا دل نہیں دکھانا اور کوئی نہ کوئی نفع بخش کام ضرور کرنا ہے، زندگی کو بامقصد بنا دیتا ہے۔",
      ro: "Zindagi dar-haqeeqat chand ginay-chunay dinon ka majmooa hai. Har subah is azm ke sath uthna ke aaj kisi ka dil nahi dukhana aur koi na koi nafa-bakhsh kaam zaroor karna hai, zindagi ko ba-maqsad bana deta hai.",
      en: "Treating each morning as an irreplaceable gift—dedicated to honest work and kindness—turns an ordinary lifespan into a lasting legacy."
    },
    tags: [
      { ur: "احساسِ وقت", ro: "Ehsas-e-Waqt", en: "Value of Time" },
      { ur: "نیکی کی کھیتی", ro: "Neki Ki Kheti", en: "Sowing Goodness" }
    ]
  },
  {
    id: "ma-312",
    slug: "sabr-musibat-ki-dhal-aur-qanaat-izzat-ki-chadar",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Sahaba Section)",
    author: {
      ur: "اقوالِ علی المرتضیٰؓ (خلاصہ)",
      ro: "Aqwal-e-Ali Al-Murtaza R.A (Khulasa)",
      en: "Wisdom of Hazrat Ali R.A (Summary)"
    },
    title: {
      ur: "صبر مصیبت کی ڈھال ہے اور قناعت عزت کی چادر",
      ro: "Sabr Musibat Ki Dhal Hai Aur Qana'at Izzat Ki Chadar",
      en: "Patience is a Shield in Hardship and Contentment is a Cloak of Honor"
    },
    quote: {
      ur: "صبر کو اپنی مصیبتوں کے آگے ڈھال بنا لو، کیونکہ جو شخص صبر کا دامن تھامے رکھتا ہے وہ کبھی فتح اور کشادگی سے محروم نہیں رہتا؛ اور قناعت کو اپنی چادر بنا لو کہ اس سے بڑی کوئی بے نیازی نہیں۔",
      ro: "Sabr ko apni museebaton ke aagay dhal bana lo, kyunkeh jo shakhs sabr ka daman thamay rakhta hai woh kabhi fatah aur kushadgi se mehroom nahi rehta; aur qana'at ko apni chadar bana lo ke is se badi koi be-niyazi nahi.",
      en: "Make patience your shield against life's trials, for the one who perseveres is never deprived of eventual victory—even if it takes time; and wrap yourself in the cloak of contentment to preserve your honor."
    },
    tashreeh: {
      ur: "مشکل وقت کتنا ہی لمبا کیوں نہ ہو، صبر اور محنت کے سامنے آخرکار ہار مان لیتا ہے۔ جو انسان جلد بازی میں ہمت نہیں ہارتا اور اپنی عزتِ نفس کی حفاظت کرتا ہے، کامیابی اس کے قدم چومتی ہے۔",
      ro: "Mushkil waqt kitna hi lamba kyon na ho, sabr aur mehnat ke samne aakhir-kar haar maan leta hai. Jo insan jald-bazi mein himmat nahi harta aur apni izzat-e-nafs ki hifazat karta hai, kamyabi us ke qadam choomti hai.",
      en: "No storm lasts forever; combining steady perseverance with self-respect carries a person through the hardest seasons into triumph."
    },
    tags: [
      { ur: "ثابت قدمی", ro: "Sabit-Qadmi", en: "Perseverance" },
      { ur: "عزتِ نفس", ro: "Izzat-e-Nafs", en: "Self-Respect" }
    ]
  },
  {
    id: "ma-313",
    slug: "be-faida-jidal-aur-behas-se-kinara-kashi-hikmat-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Luqman Section)",
    author: {
      ur: "حکمتِ لقمان علیہ السلام (خلاصہ)",
      ro: "Hikmat-e-Luqman A.S (Khulasa)",
      en: "Wisdom of Luqman (Paraphrased Summary)"
    },
    title: {
      ur: "بے جا کج بحثی اور جھگڑے سے کنارہ کشی ہی دانائی ہے",
      ro: "Be-Ja Kaj-Behasi Aur Jhagray Se Kinara-Kashi Hi Danai Hai",
      en: "Stepping Away from Pointless Arguments is True Wisdom"
    },
    quote: {
      ur: "اے بیٹے! علماء سے ضد اور مقابلے کے لیے بحث نہ کر کہ وہ تجھ سے ناراض ہو جائیں گے، اور نادانوں سے الجھ کر اپنا وقار مت گنوا؛ کیونکہ بے جا کج بحثی دوستی کو دشمنی میں بدل دیتی ہے اور علم کا نور بجھا دیتی ہے۔",
      ro: "Aye betay! Ulama se zid aur muqable ke liye behas na kar ke woh tujh se naraz ho jayenge, aur nadanon se ulajh kar apna waqar mat ganwa; kyunkeh be-ja kaj-behasi dosti ko dushmani mein badal deti hai aur ilm ka noor bujha deti hai.",
      en: "O my son! Do not argue with scholars out of pride to show off, nor quarrel with the foolish lest they demean your dignity; for pointless contention turns friends into foes and extinguishes the light of wisdom."
    },
    tashreeh: {
      ur: "سوال سیکھنے کے لیے کیا جائے تو علم بڑھتا ہے، لیکن اگر مقصد صرف دوسرے کو نیچا دکھانا اور اپنی جیت منوانا ہو تو ایسی بحث سے دل سخت ہو جاتے ہیں اور باہمی احترام ختم ہو جاتا ہے۔",
      ro: "Sawal seekhne ke liye kiya jaye to ilm barhta hai, lekin agar maqsad sirf doosre ko neecha dikhana aur apni jeet manwana ho to aisi behas se dil sakht ho jate hain aur bahami ehtiram khatam ho jata hai.",
      en: "Asking questions to learn enriches the mind, whereas arguing merely to win an ego battle hardens hearts and ruins relationships."
    },
    tags: [
      { ur: "آدابِ علم", ro: "Aadab-e-Ilm", en: "Etiquette of Learning" },
      { ur: "ترکِ جدال", ro: "Tark-e-Jidal", en: "Avoiding Strife" }
    ]
  },
  {
    id: "ma-314",
    slug: "doosron-par-hukm-chalane-se-pehle-apne-nafs-par-hukmran-bano",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Hukama Section)",
    author: {
      ur: "اقوالِ حکماء (ماخوذ خلاصہ)",
      ro: "Aqwal-e-Hukama (Makhooz Khulasa)",
      en: "Wisdom of Sages (Paraphrased Summary)"
    },
    title: {
      ur: "سب سے بڑی حکمرانی اپنے نفس اور خواہشات پر قابو پانا ہے",
      ro: "Sab Se Badi Hukmrani Apne Nafs Aur Khuwaishat Par Qaboo Pana Hai",
      en: "The Greatest Sovereignty is Mastering One's Own Desires"
    },
    quote: {
      ur: "جو شخص اپنے ایک نفس اور اپنی بے جا خواہشات پر قابو نہیں پا سکتا، وہ دوسرے انسانوں کی اصلاح اور رہنمائی کیسے کر سکتا ہے؟ حقیقی آزاد اور بادشاہ وہ ہے جس کی عقل اس کے غصے اور ہوس پر حکمران ہو۔",
      ro: "Jo shakhs apne aik nafs aur apni be-ja khuwaishat par qaboo nahi pa sakta, woh doosre insanon ki islah aur rehnumai kaise kar sakta hai? Haqeeqi aazad aur badshah woh hai jis ki aqal us ke gusse aur hawas par hukmran ho.",
      en: "How can one who cannot govern their own impulses hope to guide others? The truly free and noble ruler is the person whose reason governs their anger and desires."
    },
    tashreeh: {
      ur: "انسان بظاہر آزاد نظر آتا ہے لیکن اگر وہ اپنے غصے، لالچ اور بری عادتوں کے ہاتھوں مجبور ہو تو وہ اندر سے قیدی ہے۔ اپنے من کو جیت لینا دنیا فتح کرنے سے بڑی کامیابی ہے۔",
      ro: "Insan ba-zahir aazad nazar aata hai lekin agar woh apne gusse, lalach aur buri aadaton ke hathon majboor ho to woh andar se qaidi hai. Apne man ko jeet lena duniya fatah karne se badi kamyabi hai.",
      en: "Outward authority means little if a person is enslaved by their own temper and greed; self-mastery is the foundation of all true leadership."
    },
    tags: [
      { ur: "خود ضابطگی", ro: "Khud-Zabitagi", en: "Self-Mastery" },
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" }
    ]
  },
  {
    id: "ma-315",
    slug: "choti-amanaton-ki-hifazat-bade-aitmad-ki-bunyad-hai",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Moral Summary (Hikayat Section)",
    author: {
      ur: "اخلاقی جواہر و حکایات (خلاصہ)",
      ro: "Akhlaqi Jawahir o Hikayat (Khulasa)",
      en: "Moral Gems & Parables (Summary)"
    },
    title: {
      ur: "چھوٹی امانتوں کی پاسداری بڑے اعتماد کی بنیاد بنتی ہے",
      ro: "Choti Amanaton Ki Pasdari Bade Aitmad Ki Bunyad Banti Hai",
      en: "Honoring Small Trusts Builds a Lifetime of Credibility"
    },
    quote: {
      ur: "انسان کی ساکھ اور اعتبار کسی ایک بڑے کارنامے سے نہیں بلکہ روزمرہ کے چھوٹے معاملات میں سچ بولنے، وقت کی پابندی کرنے اور معمولی رقم کا حساب صاف رکھنے سے قائم ہوتا ہے؛ جو چھوٹی بات میں کھرا نہیں وہ بڑے امتحان میں بھی کامیاب نہیں ہوتا۔",
      ro: "Insan ki saakh aur aitbar kisi aik bade karnamay se nahi balkay rozmarra ke chote muamlat mein sach bolne, waqt ki pabandi karne aur mamooli raqam ka hisab saaf rakhne se qayam hota hai; jo choti baat mein khara nahi woh bade imtihan mein bhi kamyab nahi hota.",
      en: "A person's lifelong reputation is built not by a single grand gesture, but by everyday honesty—keeping small promises, respecting time, and accounting fairly for every coin; whoever is faithful in little will be trusted with much."
    },
    tashreeh: {
      ur: "کاروبار ہو یا ملازمت، لوگ سب سے پہلے چھوٹے معاملات میں آپ کی دیانت کو پرکھتے ہیں۔ ایک پیسے کی امانت اور ایک منٹ کے وعدے کا پاس رکھنے والا شخص پورے معاشرے کی آنکھوں کا تارا بن جاتا ہے۔",
      ro: "Karobar ho ya mulazmat, log sab se pehle chote muamlat mein aap ki diyanat ko parakhte hain. Aik paisay ki amanat aur aik minute ke waday ka paas rakhne wala shakhs poore muashray ki ankhon ka tara ban jata hai.",
      en: "In business and personal life alike, consistent honesty in the smallest details earns unshakable trust and opens the doors to greater responsibility."
    },
    tags: [
      { ur: "اعتبار و ساکھ", ro: "Aitbar o Saakh", en: "Credibility" },
      { ur: "دیانت داری", ro: "Diyanat-Dari", en: "Honesty" }
    ]
  }
];

export const batch22Quotes: QuoteItem[] = [
  {
    id: "ma-316",
    slug: "be-gharz-ehsan-aur-dunyawi-badlay-ki-tawaqqa-na-rakhna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Insan (76:8-9) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "صرف رضائے الٰہی کے لیے کھانا کھلانا اور بدلے کی توقع نہ رکھنا",
      ro: "Sirf Raza-e-Ilahi Ke Liye Khana Khilana Aur Badlay Ki Tawaqqa Na Rakhna",
      en: "Feeding Others Purely for God's Pleasure Without Expecting Return"
    },
    quote: {
      ur: "اور وہ اللہ کی محبت میں مسکین، یتیم اور قیدی کو کھانا کھلاتے ہیں (اور کہتے ہیں کہ) ہم تمہیں صرف اللہ کی رضا کے لیے کھلاتے ہیں، ہم تم سے نہ کوئی بدلہ چاہتے ہیں اور نہ شکر گزاری۔",
      ro: "Aur woh Allah ki mohabbat mein miskeen, yateem aur qaidi ko khana khilate hain (aur kehte hain ke) hum tumhein sirf Allah ki raza ke liye khilate hain, hum tum se na koi badla chahte hain aur na shukr-guzari.",
      en: "And they give food, in spite of their love for it, to the needy, the orphan, and the captive, saying: 'We feed you only for the countenance of Allah; we wish not from you any reward or gratitude.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الدہر کی یہ آیات نیک بندوں کے اس بلند ترین اخلاق کو بیان کرتی ہیں کہ وہ خود رغبت ہونے کے باوجود مسکین، یتیم اور بے بس کو کھانا کھلاتے ہیں اور دل میں ذرا بھی یہ طمع نہیں رکھتے کہ سامنے والا ان کا احسان مانے گا۔ آج کا عملی سبق یہ ہے کہ اپنی ہر نیکی کا کھاتہ براہِ راست اللہ کے ساتھ رکھیں؛ جب آپ لوگوں سے تعریف اور شکریے کی امید ختم کر دیتے ہیں تو نہ کبھی آپ کا دل ٹوٹتا ہے اور نہ ہی آپ کے عمل کا اجر ضائع ہوتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ad-Dahr ki yeh aayatein nek bandon ke us buland-tareen akhlaq ko bayan karti hain ke woh khud raghbat hone ke bawajood miskeen, yateem aur be-bas ko khana khilate hain aur dil mein zara bhi yeh tama nahi rakhte ke samne wala un ka ehsan manega. Aaj ka amli sabaq yeh hai ke apni har neki ka khata barah-e-raast Allah ke sath rakhein; jab aap logon se tareef aur shukriye ki umeed khatam kar dete hain to na kabhi aap ka dil tootta hai aur na hi aap کے amal ka ajr zaya hota hai.",
      en: "Context & Practical Lesson: These verses of Surah Al-Insan honor the righteous who share their cherished food with the needy without seeking applause or repayment. Anchor every act of kindness directly with the Creator so your peace of mind and eternal reward remain intact."
    },
    tags: [
      { ur: "اخلاص", ro: "Ikhlas", en: "Pure Sincerity" },
      { ur: "ایثار", ro: "Eesar", en: "Selfless Service" }
    ]
  },
  {
    id: "ma-317",
    slug: "bheer-ki-pairwi-ke-bajaye-haq-aur-daleel-ka-sath-dena",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-An'am (6:116) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اکثریت کی اندھی تقلید سے بچ کر حق اور دلیل کا ساتھ دینا",
      ro: "Aksariyat Ki Andhi Taqleed Se Bach Kar Haq Aur Daleel Ka Sath Dena",
      en: "Standing by Truth Instead of Blindly Following the Crowd"
    },
    quote: {
      ur: "اور اگر تو زمین پر بسنے والے اکثر لوگوں کے کہنے پر چلے گا تو وہ تجھے اللہ کی راہ سے بھٹکا دیں گے؛ وہ تو محض گمان کے پیچھے چلتے ہیں اور صرف قیاس آرائیاں کرتے ہیں۔",
      ro: "Aur agar tu zameen par basne wale aksar logon ke kehne par chalega to woh tujhe Allah ki raah se bhatka denge; woh to mehaz guman ke peechay chalte hain aur sirf qiyas-aaraiyan karte hain.",
      en: "And if you obey most of those upon the earth, they will mislead you from the way of Allah. They follow nothing but assumption, and they do nothing but falsify."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الانعام کی یہ آیت واضح فرماتی ہے کہ حق اور باطل کا معیار لوگوں کی بھیڑ نہیں ہے۔ معاشرے میں اکثر غلط رسم و رواج، کاروباری بددیانتی اور فضول خرچی صرف یہ کہہ کر اپنائی جاتی ہے کہ 'آج کل سب لوگ یہی کر رہے ہیں'۔ آج کا عملی سبق یہ ہے کہ کسی غلط کام کے عام ہو جانے سے وہ درست نہیں بن جاتا؛ باضمیر انسان دیکھا دیکھی چلنے کے بجائے علم، دلیل اور سچائی پر قائم رہتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-An'am ki yeh aayat wazeh farmati hai ke haq aur batil ka miyar logon ki bheer nahi hai. Muashray mein aksar ghalat rasm-o-riwaj, karobari bad-diyanati aur fuzool-kharchi sirf yeh keh kar apnai jati hai ke 'aaj kal sab log yehi kar rahe hain'. Aaj ka amli sabaq yeh hai ke kisi ghalat kaam ke aam ho jane se woh durust nahi ban jata; ba-zameer insan dekha-dekhi chalne ke bajaye ilm, daleel aur sachai par qayam rehta hai.",
      en: "Context & Practical Lesson: This verse of Surah Al-An'am warns that truth is never determined by majority vote or social trends. Popularity never turns a wrong into a right; a person of integrity evaluates choices by moral truth rather than crowd pressure."
    },
    tags: [
      { ur: "حق پرستی", ro: "Haq-Parasti", en: "Upholding Truth" },
      { ur: "بصیرت", ro: "Baseerat", en: "Discernment" }
    ]
  },
  {
    id: "ma-318",
    slug: "intiqam-ke-bajaye-sabr-aur-maafi-mein-azmat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ash-Shura (42:40) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بدلہ لینے پر قادر ہوتے ہوئے معاف کرنے اور صلح کی فضیلت",
      ro: "Badla Lene Par Qadir Hote Huye Maaf Karne Aur Sulah Ki Fazeelat",
      en: "The Greatness of Choosing Forgiveness and Reconciliation Over Revenge"
    },
    quote: {
      ur: "اور برائی کا بدلہ اسی کے مثل برائی ہے، پھر جو شخص معاف کر دے اور اصلاح کر لے تو اس کا اجر اللہ کے ذمے ہے؛ بے شک وہ ظالموں کو پسند نہیں کرتا۔",
      ro: "Aur burai ka badla usi ke misl burai hai, phir jo shakhs maaf kar de aur islah kar le to us ka ajr Allah ke zimmay hai; be-shak Woh zalimon ko pasand nahi karta.",
      en: "The recompense for an injury is an injury equal to it; but whoever pardons and makes reconciliation, their reward rests with Allah. Indeed, He does not love the wrongdoers."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الشوریٰ کی یہ آیت قانونِ عدل کے ساتھ قانونِ احسان سکھاتی ہے کہ مظلوم کو برابر کا حق لینے کی اجازت تو ہے، لیکن اگر وہ معاف کر کے معاملے کی اصلاح کر لے تو اس کا بے حساب اجر براہِ راست اللہ کے ذمے ہے۔ آج کا عملی سبق یہ ہے کہ جہاں معاف کرنے سے رشتے جڑتے ہوں اور فتنہ ختم ہوتا ہو، وہاں انتقام کے بجائے درگزر کا راستہ اختیار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ash-Shura ki yeh aayat qanoon-e-adal ke sath qanoon-e-ehsan sikhati hai ke mazloom ko barabar ka haq lene ki ijazat to hai, lekin agar woh maaf kar ke muamlay ki islah kar le to us ka be-hisab ajr barah-e-raast Allah ke zimmay hai. Aaj ka amli sabaq yeh hai ke jahan maaf karne se rishtay jurtay hon aur fitna khatam hota ho, wahan intiqam ke bajaye darguzar ka rasta ikhtiyar karein.",
      en: "Context & Practical Lesson: Surah Ash-Shura balances legal justice with spiritual nobility: while equal restitution is permitted, choosing forgiveness to mend a relationship secures an immeasurable reward directly from God."
    },
    tags: [
      { ur: "عفو و اصلاح", ro: "Afw o Islah", en: "Forgiveness & Reform" },
      { ur: "حلم", ro: "Hilm", en: "Forbearance" }
    ]
  },
  {
    id: "ma-319",
    slug: "ghussa-na-karo-aur-haqeeqi-pehlwan-zabt-e-nafs-wala",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19-20 (Sahih Bukhari)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "غصہ نہ کرنے کی جامع وصیت اور حقیقی بہادر کی پہچان",
      ro: "Ghussa Na Karne Ki Jame Wasiyat Aur Haqeeqi Bahadur Ki Pehchan",
      en: "The Prophetic Counsel Against Anger and the Definition of True Strength"
    },
    quote: {
      ur: "ایک شخص نے عرض کیا: یا رسول اللہ ﷺ! مجھے کوئی مختصر اور جامع نصیحت فرمائیے؛ آپ ﷺ نے فرمایا: غصہ مت کیا کر۔ اور فرمایا کہ پہلوان وہ نہیں جو کشتی میں لوگوں کو پچھاڑ دے، بلکہ حقیقی طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
      ro: "Aik shakhs ne arz kiya: Ya Rasool Allah ﷺ! Mujhe koi mukhtasar aur jame nasihat farmaiye; Aap ﷺ ne farmaya: Ghussa mat kiya kar. Aur farmaya ke pehlwan woh nahi jo kushti mein logon ko pachhar de, balkay haqeeqi taqatwar woh hai jo gusse ke waqt apne nafs par qaboo rakhe.",
      en: "A man asked the Prophet ﷺ for comprehensive life advice, and he replied simply: 'Do not become angry.' He further taught that the strong person is not the one who overpowers others in wrestling, but the one who controls themselves in a fit of anger."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی زندگی کے اکثر پچھتاوے، ٹوٹتے ہوئے گھر اور بگڑتے ہوئے کاروبار صرف چند منٹ کے بے قابو غصے کا نتیجہ ہوتے ہیں۔ آج کا عملی سبق یہ ہے کہ جب غصہ چڑھے تو فوراً خاموش ہو جائیں، کھڑے ہوں تو بیٹھ جائیں، ٹھنڈا پانی پیئیں یا وضو کر لیں؛ اس ایک لمحے کا ضبط آپ کو عمر بھر کی ندامت سے بچا لے گا۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani zindagi ke aksar pachtaway, toot-te huye ghar aur bigarte huye karobar sirf chand minute ke be-qaboo gusse ka nateeja hote hain. Aaj ka amli sabaq yeh hai ke jab ghussa charhe to foran khamosh ho jayein, kharay hon to baith jayein, thanda pani piyein ya wuzu kar lein; is aik lamhay ka zabt aap ko umar bhar ki nadamat se bacha lega.",
      en: "Context & Practical Lesson: Countless broken relationships and lifelong regrets stem from a few seconds of unchecked rage. Today's practical habit is to pause immediately when provoked—change your posture, sip water, and remain silent until reason regains control."
    },
    tags: [
      { ur: "ضبطِ غضب", ro: "Zabt-e-Ghazab", en: "Anger Management" },
      { ur: "قوتِ ارادی", ro: "Quwwat-e-Iradi", en: "Self-Control" }
    ]
  },
  {
    id: "ma-320",
    slug: "apne-hath-ki-halal-kamai-sab-se-pakeeza-rizq",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 22 (Sahih Bukhari)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اپنے ہاتھ کی محنت سے کمایا ہوا رزق سب سے پاکیزہ ہے",
      ro: "Apne Hath Ki Mehnat Se Kamaya Huwa Rizq Sab Se Pakeeza Hai",
      en: "The Purest Food is What One Earns Through Honest Labor"
    },
    quote: {
      ur: "کسی انسان نے اپنے ہاتھ کی حلال محنت کی کمائی سے بہتر کوئی کھانا کبھی نہیں کھایا؛ اور اللہ کے نبی حضرت داؤد علیہ السلام عظیم سلطنت کے باوجود اپنے ہاتھ کی محنت اور ہنر سے کما کر کھاتے تھے۔",
      ro: "Kisi insan ne apne hath ki halal mehnat ki kamai se behtar koi khana kabhi nahi khaya; aur Allah ke Nabi Hazrat Dawood (A.S) azeem saltanat ke bawajood apne hath ki mehnat aur hunar se kama kar khate thay.",
      en: "No one has ever eaten a meal purer or better than what they have earned through the labor of their own hands; indeed, the Prophet of God, David (A.S), ate solely from the earnings of his own craftsmanship despite his vast kingdom."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضرت داؤد علیہ السلام وقت کے عظیم بادشاہ اور پیغمبر تھے، مگر بیت المال سے ذاتی خرچ لینے کے بجائے اپنے ہاتھ سے لوہے کی زرہیں بنا کر فروخت کرتے اور اسی سے اپنے اہل و عیال کا پیٹ پالتے۔ آج کا عملی سبق یہ ہے کہ کسی بھی حلال ہنر، تجارت یا محنت مزدوری کو چھوٹا نہ سمجھیں؛ پسینے کی کمائی سے ملنے والی سادہ روٹی سب سے زیادہ بابرکت اور باوقار ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Hazrat Dawood (A.S) waqt ke azeem badshah aur Peghambar thay, magar Bait-ul-Maal se zaati kharch lene ke bajaye apne hath se lohay ki zirhein bana kar farokht karte aur usi se apne ahl-o-ayal ka pait palte. Aaj ka amli sabaq yeh hai ke kisi bhi halal hunar, tijarat ya mehnat-mazdoori ko chota na samjhein; pasinay ki kamai se milne wali sada roti sab se zyada ba-barkat aur ba-waqar hai.",
      en: "Context & Practical Lesson: Even while ruling an empire, Prophet Dawood (A.S) crafted armor with his own hands to earn his daily bread. Take pride in honest skill, trade, and hard work, knowing that lawful effort brings unmatched dignity."
    },
    tags: [
      { ur: "کسبِ حلال", ro: "Kasb-e-Halal", en: "Lawful Livelihood" },
      { ur: "عظمتِ محنت", ro: "Azmat-e-Mehnat", en: "Dignity of Labor" }
    ]
  },
  {
    id: "ma-321",
    slug: "jo-insanon-ka-shukr-ada-nahi-karta-woh-allah-ka-shukr-nahi-karta",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 24 (Sunan Tirmidhi)",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "انسانوں کا شکر گزار ہونا ہی رب کے شکر کی پہلی سیڑھی ہے",
      ro: "Insanon Ka Shukr-Guzar Hona Hi Rab Ke Shukr Ki Pehli Seerhi Hai",
      en: "Gratitude to People is Essential to Gratitude Toward God"
    },
    quote: {
      ur: "جو شخص انسانوں کے احسان کا شکر ادا نہیں کرتا وہ اللہ تعالیٰ کا شکر بھی ادا نہیں کرتا؛ اور جو تھوڑی نعمت پر شکر گزار نہیں ہوتا وہ زیادہ نعمت ملنے پر بھی شکر گزار نہیں بنتا۔ جس کے ساتھ کوئی بھلائی کی جائے اور وہ محسن کو 'جزاک اللہ خیراً' کہہ دے تو اس نے تعریف اور شکر کا حق ادا کر دیا۔",
      ro: "Jo shakhs insanon ke ehsan ka shukr ada nahi karta woh Allah Ta'ala ka shukr bhi ada nahi karta; aur jo thori nemat par shukr-guzar nahi hota woh zyada nemat milne par bhi shukr-guzar nahi banta. Jis ke sath koi bhalai ki jaye aur woh mohsin ko 'JazakAllahu Khairan' keh de to us ne tareef aur shukr ka haq ada kar diya.",
      en: "Whoever does not thank people for their kindness has not truly thanked Allah; and whoever is ungrateful for small blessings will remain ungrateful for great ones. Saying 'May Allah reward you with goodness' to a benefactor fulfills the highest praise and gratitude."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: محسن کی قدردانی درحقیقت خالق ہی کی قدردانی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے والدین، اساتذہ، شریکِ حیات، دوستوں اور ماتحتوں کے چھوٹے سے چھوٹے تعاون پر بھی کھلے دل سے شکریہ ادا کرنے اور ان کے لیے خیر کی دعا کرنے کی عادت بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Mohsin ki qadr-dani dar-haqeeqat Khaliq hi ki qadr-dani hai. Aaj ka amli sabaq yeh hai ke apne walideen, asatiza, shareek-e-hayat, doston aur matehton ke chote se chote taawun par bhi khulay dil se shukriya ada karne aur un ke liye khair ki dua karne ki aadat banayein.",
      en: "Context & Practical Lesson: Acknowledging the people whom God uses as instruments of help is a spiritual obligation. Make it a daily habit to express heartfelt appreciation to family, colleagues, and helpers."
    },
    tags: [
      { ur: "احسان مندی", ro: "Ehsan-Mandi", en: "Appreciation" },
      { ur: "شکر گزاری", ro: "Shukr-Guzari", en: "Gratitude" }
    ]
  },
  {
    id: "ma-322",
    slug: "nek-shugooni-acha-naam-aur-har-kaam-dayein-taraf-se",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 39-40",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "نیک فال، اچھے نام اور دائیں جانب سے آغاز کی سنت",
      ro: "Nek Faal, Achay Naam Aur Dayein Janib Se Aaghaz Ki Sunnat",
      en: "Loving Optimism, Noble Names, and Beginning from the Right"
    },
    quote: {
      ur: "حضور اکرم ﷺ بدشگونی اور توہم پرستی سے منع فرماتے اور نیک فال یعنی امید افزا اور اچھے کلمے کو پسند فرماتے؛ آپ ﷺ برے اور مایوس کن ناموں کو بدل کر اچھے بامعنی نام رکھ دیتے، اور ہر پاکیزہ اور خیر کے کام کا آغاز دائیں جانب سے فرمانا پسند کرتے۔",
      ro: "Huzoor Akram ﷺ bad-shugooni aur tawahhum-parasti se mana farmate aur nek faal yani umeed-afza aur achay kalmay ko pasand farmate; Aap ﷺ buray aur mayous-kun naamon ko badal kar achay ba-ma'ni naam rakh dete, aur har pakeeza aur khair ke kaam ka aaghaz dayein janib se farmana pasand karte.",
      en: "The Prophet ﷺ forbade superstitious omens and loved optimism—hearing a hopeful, positive word during a task; he replaced gloomy or harsh names with beautiful, meaningful ones, and loved beginning every noble action from the right side."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضور ﷺ نے زمانۂ جاہلیت کے توہمات کا خاتمہ کر کے 'تفاؤل' (مثبت سوچ اور نیک شگونی) کا کلچر عام فرمایا۔ آج کا عملی سبق یہ ہے کہ اپنے بچوں اور کاروبار کے بامقصد نام رکھیں، ہر کام بسم اللہ پڑھ کر دائیں ہاتھ سے شروع کریں اور مایوسی کے بجائے ہمیشہ خیر کی امید رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Huzoor ﷺ ne zamana-e-jahiliyat ke tawahhumat ka khatma kar ke 'tafa'ul' (musbat soch aur nek-shugooni) ka culture aam farmaya. Aaj ka amli sabaq yeh hai ke apne bachon aur karobar ke ba-maqsad naam rakhein, har kaam Bismillah parh kar dayein hath se shuru karein aur mayousi ke bajaye hamesha khair ki umeed rakhein.",
      en: "Context & Practical Lesson: The Prophet ﷺ replaced paralyzing superstitions with bright optimism. Cultivate positive speech, choose dignified names, and start noble daily habits with order and hope."
    },
    tags: [
      { ur: "مثبت فکر", ro: "Musbat Fikr", en: "Optimism" },
      { ur: "سنتِ نبوی ﷺ", ro: "Sunnat-e-Nabawi ﷺ", en: "Prophetic Sunnah" }
    ]
  },
  {
    id: "ma-323",
    slug: "mehman-ki-khud-khidmat-aur-sail-ki-diljoi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 41-42",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "مہمان کا اکرام اور حاجت مند کے ساتھ حسنِ سلوک کا اسوہ",
      ro: "Mehman Ka Ikram Aur Hajat-Mand Ke Sath Husn-e-Sulook Ka Uswah",
      en: "Personally Honoring Guests and Comforting Every Petitioner"
    },
    quote: {
      ur: "آپ ﷺ اپنے مہمان کا بے حد اکرام فرماتے، یہاں تک کہ اس کے بیٹھنے کے لیے اپنی چادر مبارک بچھا دیتے اور خود اپنے دستِ مبارک سے اس کی مہمان نوازی فرماتے؛ کوئی شخص ضرورت لے کر حاضر ہوتا تو اس کی پوری بات توجہ سے سنتے اور اس کی حاجت پوری کیے بغیر یا میٹھے بول سے راضی کیے بغیر واپس نہ بھیجتے۔",
      ro: "Aap ﷺ apne mehman ka be-had ikram farmate, yahan tak ke us ke baithne ke liye apni chadar mubarak bichha dete aur khud apne dast-e-mubarak se us ki mehman-nawazi farmate; koi shakhs zaroorat le kar hazir hota to us ki poori baat tawajjo se sunte aur us ki hajat poori kiye baghair ya meethay bol se raazi kiye baghair wapis na bhejte.",
      en: "The Prophet ﷺ honored his guests with such warmth that he would spread his own cloak for them to sit upon and personally serve them; whenever someone came with a need, he listened attentively and never sent them back without fulfilling their request or comforting them with gracious words."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مہمان نوازی میں اصل چیز مہنگے کھانے نہیں بلکہ میزبان کے چہرے کی خوشی اور ذاتی توجہ ہے۔ آج کا عملی سبق یہ ہے کہ گھر آنے والے مہمان کو بوجھ نہ سمجھیں بلکہ مسکرا کر استقبال کریں اور خود اس کی خدمت کو اپنے گھر کی برکت کا ذریعہ جانیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Mehman-nawazi mein asal cheez mehangay khane nahi balkay mezban ke chehray ki khushi aur zaati tawajjo hai. Aaj ka amli sabaq yeh hai ke ghar aane wale mehman ko bojh na samjhein balkay muskura kar istiqbal karein aur khud us ki khidmat ko apne ghar ki barkat ka zariya janein.",
      en: "Context & Practical Lesson: True hospitality lies not in lavish menus, but in the host's warmth, personal service, and genuine joy at receiving a guest."
    },
    tags: [
      { ur: "اکرامِ ضیف", ro: "Ikram-e-Zaif", en: "Honoring Guests" },
      { ur: "دلجوئی", ro: "Dil-Joi", en: "Warm Hospitality" }
    ]
  },
  {
    id: "ma-324",
    slug: "raaz-ki-hifazat-aur-tadbeer-mein-waqar",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 68-69",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "راز کی حفاظت، شریف انسان کا احترام اور فکرِ آخرت",
      ro: "Raaz Ki Hifazat, Shareef Insan Ka Ehtiram Aur Fikr-e-Akhirat",
      en: "Guarding Secrets, Respecting the Noble, and Preparing for Accountability"
    },
    quote: {
      ur: "اپنے راز کو پوشیدہ رکھ کر اپنے کاموں میں کامیابی حاصل کرو، کیونکہ ہر صاحبِ نعمت سے حسد کیا جاتا ہے؛ شریف انسان کا اکرام کرو تو وہ تمہارا گرویدہ ہو جائے گا، اور کم ظرف کے شر سے محتاط رہو۔ جو شخص قبر میں بغیر توشۂ عمل کے اترتا ہے وہ اس مسافر کی طرح ہے جو بغیر کشتی کے سمندر میں کود پڑے۔",
      ro: "Apne raaz ko posheeda rakh kar apne kaamon mein kamyabi hasil karo, kyunkeh har sahib-e-nemat se hasad kiya jata hai; shareef insan ka ikram karo to woh tumhara girweeda ho jayega, aur kam-zarf ke shar se mohtat raho. Jo shakhs qabar mein baghair tosha-e-amal ke utarta hai woh us musafir ki tarah hai jo baghair kashti ke samandar mein kood paray.",
      en: "Seek success in your plans by guarding your secrets discreetly, for every possessor of a blessing faces envy; honor the noble-hearted and remain cautious of the petty. Whoever enters the grave without provisions of good deeds is like one who sets out across the ocean without a ship."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سیدنا صدیقِ اکبرؓ کے اس فرمان میں دنیا اور آخرت دونوں کی کامیابی کے اصول جمع ہیں: اپنے منصوبے مکمل ہونے سے پہلے ہر ایک کے سامنے ظاہر نہ کریں، اعلیٰ ظرف لوگوں کی عزت کریں اور روزانہ کم از کم ایک ایسا نیک عمل ضرور کریں جو آخرت کا توشہ بنے۔",
      ro: "Pas-e-Manzar o Tashreeh: Sayyiduna Siddiq-e-Akbar (R.A) ke is farman mein duniya aur akhirat dono ki kamyabi ke usool jama hain: apne mansoobay mukammal hone se pehle har aik ke samne zahir na karein, aala-zarf logon ki izzat karein aur rozana kam az kam aik aisa nek amal zaroor karein jo akhirat ka tosha banay.",
      en: "Context & Practical Lesson: Discretion protects unfinished plans from envy, discernment guides our social dealings, and consistent good deeds build the vessel needed for our eternal journey."
    },
    tags: [
      { ur: "رازداری", ro: "Raazdari", en: "Discretion" },
      { ur: "توشۂ عمل", ro: "Tosha-e-Amal", en: "Spiritual Preparation" }
    ]
  },
  {
    id: "ma-325",
    slug: "hisab-liye-jane-se-pehle-apna-muhasba-khud-kar-lo",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 74-75",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "حساب لیے جانے سے پہلے خود اپنے نفس کا محاسبہ کر لو",
      ro: "Hisab Liye Jane Se Pehle Khud Apne Nafs Ka Muhasba Kar Lo",
      en: "Hold Yourselves Accountable Before You Are Held Accountable"
    },
    quote: {
      ur: "لوگو! اس سے پہلے کہ قیامت کے دن تم سے حساب لیا جائے، دنیا ہی میں خود اپنے نفس کا محاسبہ کر لو؛ اور اس سے پہلے کہ تمہارے اعمال تولے جائیں، خود اپنے اعمال کو حق کے ترازو میں تول لو، کیونکہ آج اپنا حساب کر لینا کل کے بڑے حساب کو آسان بنا دے گا۔",
      ro: "Logo! Is se pehle ke qayamat ke din tum se hisab liya jaye, duniya hi mein khud apne nafs ka muhasba kar lo; aur is se pehle ke tumhare aamaal tolay jayein, khud apne aamaal ko haq ke tarazu mein tol lo, kyunkeh aaj apna hisab kar lena kal ke bade hisab ko asan bana dega.",
      en: "Hold yourselves accountable today before you are called to account tomorrow, and weigh your deeds on the scale of truth before they are weighed for you; for examining yourself in this world makes the reckoning of the Hereafter infinitely easier."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جس طرح ایک کامیاب تاجر روزانہ رات کو اپنی دکان کا کھاتہ چیک کرتا ہے، اسی طرح مومن اپنے دن بھر کے اعمال کا جائزہ لیتا ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ سونے سے پہلے صرف پانچ منٹ تنہائی میں بیٹھ کر سوچیں کہ آج مجھ سے کسی کی حق تلفی تو نہیں ہوئی؟",
      ro: "Pas-e-Manzar o Tashreeh: Jis tarah aik kamyab tajir rozana raat ko apni dukan ka khata check karta hai, isi tarah momin apne din bhar ke aamaal ka jaiza leta hai. Aaj ka amli sabaq yeh hai ke rozana sonay se pehle sirf panch minute tanhai mein baith kar sochein ke aaj mujh se kisi ki haq-talfi to nahi hui?",
      en: "Context & Practical Lesson: Just as a wise merchant audits their ledger every evening, spending five quiet minutes before sleep to review the day's words and transactions allows us to mend mistakes promptly."
    },
    tags: [
      { ur: "محاسبۂ نفس", ro: "Muhasba-e-Nafs", en: "Self-Accountability" },
      { ur: "فکرِ فردا", ro: "Fikr-e-Farda", en: "Mindfulness" }
    ]
  },
  {
    id: "ma-326",
    slug: "zinda-dil-insan-ki-chaar-roshan-alamaat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 85-86",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "بیدار اور زندہ دل انسان کی چار روشن علامتیں",
      ro: "Bedar Aur Zinda-Dil Insan Ki Chaar Roshan Alamatein",
      en: "Four Clear Signs of an Awakened and Living Heart"
    },
    quote: {
      ur: "زندہ دل انسان کی پہچان یہ ہے کہ وہ نیک لوگوں کی محبت کو اپنا سرمایہ سمجھے، کمزوروں اور حاجت مندوں پر رحم کرے، اپنی زبان کو لوگوں کی غیبت سے روکے رکھے، اور دنیا کی عمارت کے ساتھ اپنی آخرت کے گھر کو ویران نہ ہونے دے۔",
      ro: "Zinda-dil insan ki pehchan yeh hai ke woh nek logon ki mohabbat ko apna sarmaya samjhe, kamzoron aur hajat-mandon par reham kare, apni zaban ko logon ki gheebat se rokay rakhe, aur duniya ki imarat ke sath apni akhirat ke ghar ko weeran na hone de.",
      en: "The signs of a living heart are cherishing the company of the righteous, showing mercy to the weak, guarding the tongue from backbiting, and never letting the pursuit of this world leave one's eternal home in ruins."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جسم کی زندگی سانس چلنے سے ہے، لیکن دل کی زندگی احساس، رحم اور پاکیزگی سے ہے۔ آج کا عملی سبق یہ ہے کہ اپنے کاروبار اور گھر کی تعمیر کے ساتھ ساتھ غریبوں کی مدد اور اپنی زبان کی حفاظت کے ذریعے اپنے باطن کو بھی آباد رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jism ki zindagi saans chalne se hai, lekin dil ki zindagi ehsas, reham aur pakeezgi se hai. Aaj ka amli sabaq yeh hai ke apne karobar aur ghar ki tameer ke sath sath ghareebon ki madad aur apni zaban ki hifazat ke zariye apne batin ko bhi aabad rakhein.",
      en: "Context & Practical Lesson: While breathing proves physical life, empathy for the poor and distaste for gossip prove spiritual vitality. Balance worldly progress with acts of mercy."
    },
    tags: [
      { ur: "حیاتِ قلب", ro: "Hayat-e-Qalb", en: "Spiritual Vitality" },
      { ur: "رحمدلی", ro: "Reham-Dili", en: "Compassion" }
    ]
  },
  {
    id: "ma-327",
    slug: "behtareen-libas-husn-e-akhlaq-aur-naram-guftari-ki-kashish",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91-94",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "سب سے خوبصورت لباس حسنِ اخلاق ہے اور نرم گفتاری کی کشش",
      ro: "Sab Se Khoobsurat Libas Husn-e-Akhlaq Hai Aur Naram-Guftari Ki Kashish",
      en: "Good Character is the Finest Garment and Gentle Speech Wins Love"
    },
    quote: {
      ur: "انسان کے لیے اچھے اخلاق اور ادب سے بڑھ کر کوئی نیا لباس نہیں؛ جس شخص کی گفتگو نرم اور لہجہ شائستہ ہو جاتا ہے، لوگوں کے دلوں میں اس کی محبت واجب ہو جاتی ہے، اور جو شخص اپنے غصے کو پی جاتا ہے اس کا وقار دوگنا ہو جاتا ہے۔",
      ro: "Insan ke liye achay akhlaq aur adab se barh kar koi naya libas nahi; jis shakhs ki guftugu naram aur lehja shaista ho jata hai, logon ke dilon mein us ki mohabbat wajib ho jati hai, aur jo shakhs apne gusse ko pee jata hai us ka waqar dugna ho jata hai.",
      en: "There is no finer adornment for a person than noble manners and refined etiquette; whoever softens their speech earns the natural affection of hearts, and whoever swallows their anger doubles their dignity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قیمتی سے قیمتی کپڑے بھی بدتمیزی اور غرور کے عیب کو نہیں چھپا سکتے، جبکہ سادہ لباس میں ملبوس باادب اور شیریں کلام انسان ہر محفل کی جان بن جاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے ظاہری لباس کی صفائی کے ساتھ اپنے لہجے کی مٹھاس پر توجہ دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Qeemati se qeemati kapray bhi bad-tameezi aur ghuroor ke aib ko nahi chhupa sakte, jabkeh sada libas mein malboos ba-adab aur shireen-kalam insan har mehfil ki jaan ban jata hai. Aaj ka amli sabaq yeh hai ke apne zahiri libas ki safai ke sath apne lehjay ki mithas par tawajjo dein.",
      en: "Context & Practical Lesson: Expensive clothing can never conceal rude behavior, whereas courteous manners make even the simplest attire shine."
    },
    tags: [
      { ur: "زینتِ کردار", ro: "Zeenat-e-Kirdar", en: "Graceful Character" },
      { ur: "نرم لہجہ", ro: "Naram Lehja", en: "Gentle Tone" }
    ]
  },
  {
    id: "ma-328",
    slug: "teen-tabqat-ke-sath-bartao-ka-hakeemana-usool",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 98-100",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "بڑوں، برابر والوں اور ماتحتوں کے ساتھ برتاؤ کا سنہرا اصول",
      ro: "Baron, Barabar Walon Aur Matehton Ke Sath Bartao Ka Sunehra Usool",
      en: "The Golden Rule for Dealing with Elders, Peers, and Subordinates"
    },
    quote: {
      ur: "اے بیٹے! معاشرے کے تین طبقوں کے ساتھ تین اصول ہمیشہ یاد رکھنا: جو عمر اور علم میں تجھ سے بڑے ہیں ان کے ساتھ ادب اور تواضع سے پیش آ، جو تیرے ہم مرتبہ اور ساتھی ہیں ان کے ساتھ انصاف اور مروت کا معاملہ رکھ، اور جو تیرے ماتحت اور کمزور ہیں ان پر شفقت اور درگزر کا سایہ رکھ۔",
      ro: "Aye betay! Muashray ke teen tabqon ke sath teen usool hamesha yaad rakhna: jo umar aur ilm mein tujh se bade hain un ke sath adab aur tawazu se pesh aa, jo tere ham-martaba aur sathi hain un ke sath insaf aur murawwat ka muamla rakh, aur jo tere matehat aur kamzor hain un par shafqat aur darguzar ka saya rakh.",
      en: "O my son! Uphold three principles with three groups of people: show reverence and humility toward your elders in age and knowledge, practice fairness and generosity with your peers, and extend kindness and patience to those under your care."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حکیم لقمان نے ایک ہی جملے میں پوری سماجی زندگی کا توازن سکھا دیا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے بزرگوں کی نصیحت کو ادب سے سنیں، کاروباری و دفتری ساتھیوں کے حقوق میں ڈنڈی نہ ماریں اور اپنے ملازمین سے نرمی کا برتاؤ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hakeem Luqman ne aik hi jumlay mein poori samaji zindagi ka tawazun sikha diya hai. Aaj ka amli sabaq yeh hai ke apne buzurgon ki nasihat ko adab se sunein, karobari o daftari sathiyon ke huqooq mein dandi na maarein aur apne mulazimeen se narmi ka bartao karein.",
      en: "Context & Practical Lesson: Practicing reverence upward, fairness sideways, and compassion downward creates harmony in every sphere of life."
    },
    tags: [
      { ur: "آدابِ معاشرت", ro: "Aadab-e-Muasharat", en: "Social Harmony" },
      { ur: "مروت", ro: "Murawwat", en: "Graciousness" }
    ]
  },
  {
    id: "ma-329",
    slug: "ghalti-man-lena-aur-maazrat-karna-azmat-ki-daleel",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 260 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "اپنی غلطی تسلیم کرنا اور معذرت کرنا بڑے ظرف کی نشانی ہے",
      ro: "Apni Ghalti Tasleem Karna Aur Maazrat Karna Bade Zarf Ki Nishani Hai",
      en: "Admitting a Mistake and Apologizing is the Mark of a Great Soul"
    },
    quote: {
      ur: "نادان انسان اپنی غلطی کو چھپانے کے لیے ضد اور بحث کا سہارا لیتا ہے جس سے ایک غلطی دو بن جاتی ہیں؛ جبکہ عقلمند اور عالی ظرف انسان اپنی لغزش کا احساس ہوتے ہی کھلے دل سے معذرت کر لیتا ہے، جس سے اس کی عزت گھٹتی نہیں بلکہ دلوں میں اور بڑھ جاتی ہے۔",
      ro: "Nadan insan apni ghalti ko chhupane ke liye zid aur behas ka sahara leta hai jis se aik ghalti do ban jati hain; jabkeh aqalmand aur aali-zarf insan apni laghzish ka ehsas hote hi khulay dil se maazrat kar leta hai, jis se us ki izzat ghatti nahi balkay dilon mein aur barh jati hai.",
      en: "A foolish person defends their mistake with stubbornness, turning one error into two; whereas a wise and noble soul readily apologizes upon realizing a slip, elevating their respect in every heart."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان خطا کا پتلا ہے، لیکن اصل عیب غلطی کرنا نہیں بلکہ انا کی خاطر غلطی پر اڑ جانا ہے۔ آج کا عملی سبق یہ ہے کہ اگر آپ سے اپنے شریکِ حیات، بچے، دوست یا گاہک کے ساتھ کوئی زیادتی ہو جائے تو جھوٹی شان کو ایک طرف رکھ کر سچے دل سے معذرت کر لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan khata ka putla hai, lekin asal aib ghalti karna nahi balkay ana ki khatir ghalti par ar jana hai. Aaj ka amli sabaq yeh hai ke agar aap se apne shareek-e-hayat, bachay, dost ya gahak ke sath koi ziyadati ho jaye to jhooti shaan ko aik taraf rakh kar sachay dil se maazrat kar lein.",
      en: "Context & Practical Lesson: Offering a sincere, timely apology to a family member, friend, or client immediately heals rifts and commands deep respect."
    },
    tags: [
      { ur: "وسعتِ قلبی", ro: "Wus'at-e-Qalbi", en: "Magnanimity" },
      { ur: "اعترافِ خطا", ro: "Aitraf-e-Khata", en: "Accountability" }
    ]
  },
  {
    id: "ma-330",
    slug: "aamaal-ki-bazgasht-jo-bantoge-wahi-laut-kar-aayega",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 345 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "اعمال کی بازگشت: جو تم مخلوق کو دو گے وہی تمہاری طرف لوٹے گا",
      ro: "Aamaal Ki Bazgasht: Jo Tum Makhlooq Ko Do Ge Wahi Tumhari Taraf Lautega",
      en: "The Echo of Actions: What You Give to the World Returns to You"
    },
    quote: {
      ur: "یہ دنیا پہاڑوں کی اس وادی کی مانند ہے جہاں انسان کی اپنی ہی آواز پلٹ کر واپس آتی ہے؛ اگر تو لوگوں میں آسانیاں، دعائیں اور عزت بانٹے گا تو زمانے کے ہاتھوں تجھے عزت اور سکون ہی ملے گا، اور اگر تو دل آزاری اور فریب بوئے گا تو وہی فصل تیرے اپنے آنگن میں اُگے گی۔",
      ro: "Yeh duniya paharon ki us wadi ki manind hai jahan insan ki apni hi aawaz palat kar wapis aati hai; agar tu logon mein asaniyan, duayein aur izzat bantega to zamane ke hathon tujhe izzat aur sukoon hi milega, aur agar tu dil-aazari aur fareeb boyega to wahi fasal tere apne aangan mein ugegi.",
      en: "This world is like a mountain valley that echoes back your own voice: if you send out ease, prayers, and respect to others, honor and peace will return to your doorstep; and if you sow hurt and deceit, that very harvest will grow in your own courtyard."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: والدین کے ساتھ کیا گیا حسنِ سلوک اپنی اولاد کی فرمانبرداری کی صورت میں لوٹتا ہے، اور کسی بے بس کی مدد اپنے آڑے وقت میں غیبی سہارے کی شکل میں سامنے آتی ہے۔ آج کا عملی سبق یہ ہے کہ آپ زندگی سے جو کچھ پانا چاہتے ہیں، آج سے وہی چیزیں اپنے اردگرد کے انسانوں کو دینا شروع کر دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Walideen ke sath kiya gaya husn-e-sulook apni aulad ki farmanbardari ki soorat mein lautta hai, aur kisi be-bas ki madad apne aaray waqt mein ghaibi saharay ki shakal mein samne aati hai. Aaj ka amli sabaq yeh hai ke aap zindagi se jo kuch pana chahte hain, aaj se wahi cheezein apne ird-gird ke insanon ko dena shuru kar dein.",
      en: "Context & Practical Lesson: Moral law ensures that how we treat parents, neighbors, and strangers eventually circles back into our own lives."
    },
    tags: [
      { ur: "مکافاتِ عمل", ro: "Mukafat-e-Amal", en: "Moral Echo" },
      { ur: "خیر خواہی", ro: "Khair-Khwahi", en: "Benevolence" }
    ]
  }
];

export const batch23Quotes: QuoteItem[] = [
  {
    id: "ma-331",
    slug: "sachi-koshish-karne-walon-ke-liye-allah-ke-rastay",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Ankabut (29:69) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "حق کی راہ میں محنت کرنے والوں کے لیے ہدایت کے راستے کھلنا",
      ro: "Haq Ki Raah Mein Mehnat Karne Walon Ke Liye Hidayat Ke Rastay Khulna",
      en: "Divine Guidance Opens for Those Who Strive Sincerely"
    },
    quote: {
      ur: "اور جو لوگ ہماری راہ میں پوری لگن اور محنت سے کوشش کرتے ہیں، ہم ضرور بالضرور انہیں اپنے راستے دکھا دیتے ہیں؛ اور بے شک اللہ نیکی کرنے والوں کے ساتھ ہے۔",
      ro: "Aur jo log hamari raah mein poori lagan aur mehnat se koshish karte hain, hum zaroor bil-zaroor unhein apne rastay dikha dete hain; aur be-shak Allah neki karne walon ke sath hai.",
      en: "And those who strive earnestly in Our cause—We will surely guide them to Our ways; and indeed, Allah is with the doers of good."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ العنکبوت کی یہ آیت مایوسی کا علاج ہے۔ جب انسان سچے دل سے اپنی اصلاح، حلال رزق یا کسی نیک مقصد کے لیے پہلا قدم اٹھاتا ہے تو اللہ تعالیٰ غیب سے اس کی رہنمائی کے دروازے کھول دیتا ہے۔ آج کا عملی سبق یہ ہے کہ وسائل کی کمی کا شکوہ کرنے کے بجائے خلوصِ نیت سے محنت کا آغاز کریں، راستے خود بخود بنتے چلے جائیں گے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Ankabut ki yeh aayat mayousi ka ilaj hai. Jab insan sache dil se apni islah, halal rizq ya kisi nek maqsad ke liye pehla qadam uthata hai to Allah Ta'ala ghaib se us ki rehnumai ke darwaze khol deta hai. Aaj ka amli sabaq yeh hai ke wasail ki kami ka shikwa karne ke bajaye khuloos-e-niyat se mehnat ka aaghaz karein, rastay khud-ba-khud bante chalay jayenge.",
      en: "Context & Practical Lesson: Surah Al-Ankabut assures us that sincere effort never goes unanswered; taking the first honest step toward self-improvement or lawful work unlocks divine guidance and unforeseen doors."
    },
    tags: [
      { ur: "جدوجہد", ro: "Jadd-o-Jehad", en: "Sincere Effort" },
      { ur: "ہدایتِ الٰہی", ro: "Hidayat-e-Ilahi", en: "Divine Guidance" }
    ]
  },
  {
    id: "ma-332",
    slug: "laghwiyat-se-kinara-kashi-aur-amanat-o-ahad-ki-pasdari",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Mu'minun (23:1-8) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "کامیاب مومنین کی پہچان: فضول باتوں سے اعراض اور امانت کی حفاظت",
      ro: "Kamyab Momineen Ki Pehchan: Fuzool Baaton Se A'raaz Aur Amanat Ki Hifazat",
      en: "Marks of the Successful: Shunning Vain Talk and Guarding Trusts"
    },
    quote: {
      ur: "یقیناً ایمان والے فلاح پا گئے؛ وہ جو اپنی نمازوں میں خشوع و عاجزی اختیار کرتے ہیں، جو بے مقصد اور لغو باتوں سے منہ موڑ لیتے ہیں، اور جو اپنی امانتوں اور اپنے وعدوں کی پوری نگہداشت کرتے ہیں۔",
      ro: "Yaqeenan eman wale falah pa gaye; woh jo apni namazon mein khushoo o aajizi ikhtiyar karte hain, jo be-maqsad aur laghw baaton se munh mor lete hain, aur jo apni amanaton aur apne wadon ki poori nigahdasht karte hain.",
      en: "Successful indeed are the believers: those who humble themselves in prayer, who turn away from vain and pointless talk, and who faithfully guard their trusts and covenants."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ المؤمنون کے آغاز میں حقیقی کامیابی کا نقشہ کھینچا گیا ہے جس میں عبادت کے ساتھ وقت کی حفاظت (لغویات سے بچنا) اور معاملات کی سچائی (امانت و عہد کی پاسداری) کو لازم قرار دیا گیا ہے۔ آج کا عملی سبق یہ ہے کہ اپنا قیمتی وقت بے فائدہ بحث اور سوشل میڈیا کی فضول گفتگو میں ضائع کرنے کے بجائے بامقصد کاموں اور وعدوں کی تکمیل میں لگائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Mu'minun ke aaghaz mein haqeeqi kamyabi ka naqsha khincha gaya hai jis mein ibadat ke sath waqt ki hifazat (laghviyat se bachna) aur muamlat ki sachai (amanat o ahad ki pasdari) ko lazim qarar diya gaya hai. Aaj ka amli sabaq yeh hai ke apna qeemati waqt be-faida behas aur social media ki fuzool guftugu mein zaya karne ke bajaye ba-maqsad kaamon aur wadon ki takmeel mein lagayein.",
      en: "Context & Practical Lesson: Surah Al-Mu'minun links spiritual devotion with practical discipline—avoiding time-wasting arguments and honoring every trust and promise."
    },
    tags: [
      { ur: "ترکِ لغویات", ro: "Tark-e-Laghviyat", en: "Avoiding Vain Talk" },
      { ur: "پاسِ امانت", ro: "Paas-e-Amanat", en: "Keeping Trusts" }
    ]
  },
  {
    id: "ma-333",
    slug: "sabr-rabt-aur-taqwa-kamyabi-ke-chaar-sutoon",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Aal-e-Imran (3:200) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "انفرادی و اجتماعی کامیابی کے چار الٰہی اصول",
      ro: "Infiradi o Ijtimai Kamyabi Ke Chaar Ilahi Usool",
      en: "Four Divine Principles for Personal and Collective Triumph"
    },
    quote: {
      ur: "اے ایمان والو! صبر اختیار کرو، مقابلے کے وقت ڈٹے رہو، حق کی حفاظت کے لیے کمر بستہ رہو، اور اللہ سے ڈرتے رہو تاکہ تم حقیقی کامیابی حاصل کر سکو۔",
      ro: "Aye eman walo! Sabr ikhtiyar karo, muqable ke waqt datay raho, haq ki hifazat ke liye kamar-basta raho, aur Allah se darte raho taake tum haqeeqi kamyabi hasil kar sako.",
      en: "O believers! Patiently endure, outlast all trials with steadfastness, stand firm in mutual readiness, and be mindful of Allah so that you may succeed."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ آلِ عمران کی اس آخری آیت میں کامیابی کے چار زینے بتائے گئے ہیں: ذاتی مشکلات میں صبر، چیلنجز کے مقابلے میں ہمت نہ ہارنا، اپنے فرائض پر چوکس رہنا اور ہر حال میں خدا ترسی اختیار کرنا۔ آج کا عملی سبق یہ ہے کہ اپنے کاروبار، تعلیم اور اخلاقی تربیت میں وقتی ناکامی سے گھبرانے کے بجائے مستقل مزاجی کو اپنا شعار بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Aal-e-Imran ki is aakhri aayat mein kamyabi ke chaar zeenay bataye gaye hain: zaati mushkilat mein sabr, challenges ke muqable mein himmat na harna, apne faraiz par chokas rehna aur har haal mein khuda-tarsi ikhtiyar karna. Aaj ka amli sabaq yeh hai ke apne karobar, taleem aur akhlaqi tarbiyat mein waqti nakami se ghabrane ke bajaye mustaqil-mizaji ko apna shiar banayein.",
      en: "Context & Practical Lesson: The closing verse of Surah Aal-e-Imran teaches that lasting success requires personal patience, resilience under pressure, vigilance in duty, and reverence for God."
    },
    tags: [
      { ur: "استقامت", ro: "Istaqamat", en: "Resilience" },
      { ur: "فلاح", ro: "Falah", en: "Ultimate Success" }
    ]
  },
  {
    id: "ma-334",
    slug: "be-maqsad-aur-ghair-mutalliq-kaamon-ko-chhor-dena",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Tirmidhi & Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حسنِ اسلام کی علامت: بے مقصد اور لایعنی باتوں کو چھوڑ دینا",
      ro: "Husn-e-Islam Ki Alamat: Be-Maqsad Aur La-Ya'ni Baaton Ko Chhor Dena",
      en: "The Beauty of One's Faith Lies in Leaving What Does Not Concern Them"
    },
    quote: {
      ur: "آدمی کے اسلام کی خوبی اور کمال یہ ہے کہ وہ ان تمام باتوں اور کاموں کو چھوڑ دے جن کا اس کی ذات، دین یا دنیا کے نفع سے کوئی تعلق نہیں۔",
      ro: "Aadmi ke Islam ki khoobi aur kamal yeh hai ke woh un tamam baaton aur kaamon ko chhor de jin ka us ki zaat, deen ya duniya ke nafa se koi talluq nahi.",
      en: "Part of the perfection and beauty of a person's faith is that they leave alone that which does not concern them."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: علمائے اخلاق نے اس مختصر حدیث کو آدھے اخلاق کا خلاصہ قرار دیا ہے۔ دوسروں کے ذاتی معاملات میں دخل اندازی کرنا اور ہر غیر متعلقہ خبر کے پیچھے بھاگنا انسان کا سکون اور وقت دونوں برباد کر دیتا ہے۔ آج کا عملی سبق یہ ہے کہ کوئی بھی بات بولنے یا پوچھنے سے پہلے سوچیں کہ کیا اس کا مجھ سے کوئی تعلق ہے؟ اگر نہیں، تو خاموشی اختیار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Ulama-e-akhlaq ne is mukhtasar hadees ko aadhay akhlaq ka khulasa qarar diya hai. Doosron ke zaati muamlat mein dakhal-andazi karna aur har ghair-mutalliq khabar ke peechay bhagna insan ka sukoon aur waqt dono barbad kar deta hai. Aaj ka amli sabaq yeh hai ke koi bhi baat bolne ya poochne se pehle sochein ke kya is ka mujh se koi talluq hai? Agar nahi, to khamoshi ikhtiyar karein.",
      en: "Context & Practical Lesson: Scholars regard this prophetic teaching as a cornerstone of ethics: minding one's own business and avoiding nosiness preserves time, dignity, and peace of mind."
    },
    tags: [
      { ur: "تزکیۂ وقت", ro: "Tazkiya-e-Waqt", en: "Mindful Focus" },
      { ur: "حسنِ کردار", ro: "Husn-e-Kirdar", en: "Refined Character" }
    ]
  },
  {
    id: "ma-335",
    slug: "mazdoor-ki-ujrat-pasina-khushk-hone-se-pehle-ada-karna",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Ibn Majah & Makhzan-e-Akhlaq - Page 23",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مزدور کا پسینہ خشک ہونے سے پہلے اس کی مزدوری ادا کرنا",
      ro: "Mazdoor Ka Pasina Khushk Hone Se Pehle Us Ki Mazdoori Ada Karna",
      en: "Paying the Worker Before Their Sweat Dries"
    },
    quote: {
      ur: "محنت کش اور مزدور کو اس کی مزدوری اس کا پسینہ خشک ہونے سے پہلے ادا کر دو، اور اللہ تعالیٰ قیامت کے دن اس شخص کے مقابل خود مدعی بنے گا جس نے کسی مزدور سے پورا کام لیا مگر اس کی اجرت ادا نہ کی۔",
      ro: "Mehnat-kash aur mazdoor ko us ki mazdoori us ka pasina khushk hone se pehle ada kar do, aur Allah Ta'ala qayamat ke din us shakhs ke muqabil khud muddai banega jis ne kisi mazdoor se poora kaam liya magar us ki ujrat ada na ki.",
      en: "Give the worker their wages before their sweat dries; for Allah Himself will be the adversary on the Day of Judgment against anyone who takes full work from a laborer and fails to pay their rightful due."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مزدور اپنے بچوں کی بھوک مٹانے کے لیے خون پسینہ ایک کرتا ہے؛ اس کا حق روکنا یا ٹال مٹول کرنا بدترین ظلم ہے۔ آج کا عملی سبق یہ ہے کہ اپنے ملازمین، کاریگروں اور محنت کشوں کی تنخواہ یا مزدوری کام مکمل ہوتے ہی عزت اور خوش دلی کے ساتھ فوراً ادا کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Mazdoor apne bachon ki bhook mitane ke liye khoon-pasina aik karta hai; us ka haq rokna ya taal-matol karna bad-tareen zulm hai. Aaj ka amli sabaq yeh hai ke apne mulazimeen, karigaron aur mehnat-kashon ki tankhwah ya mazdoori kaam mukammal hote hi izzat aur khush-dili ke sath foran ada karein.",
      en: "Context & Practical Lesson: Delaying or withholding a worker's hard-earned wages is a grave injustice. Promptly and respectfully compensating employees and laborers brings immense blessing to one's business."
    },
    tags: [
      { ur: "حقوقِ محنت کش", ro: "Huqooq-e-Mehnat-Kash", en: "Workers' Rights" },
      { ur: "عدل", ro: "Adal", en: "Fair Compensation" }
    ]
  },
  {
    id: "ma-336",
    slug: "mareez-ki-ayadat-aur-bhookay-ko-khana-khilana",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 25",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مریض کی عیادت کرنے اور بھوکے کو کھلانے کی عظیم فضیلت",
      ro: "Mareez Ki Ayadat Karne Aur Bhookay Ko Khilane Ki Azeem Fazeelat",
      en: "The Virtue of Visiting the Sick and Feeding the Hungry"
    },
    quote: {
      ur: "بھوکے کو کھانا کھلاؤ، بیمار کی مزاج پرسی (عیادت) کرو، اور مصیبت میں گھرے ہوئے قیدی یا مجبور کو چھڑاؤ؛ جو شخص کسی مریض کی عیادت کے لیے جاتا ہے وہ واپسی تک جنت کے باغوں میں چلتا رہتا ہے۔",
      ro: "Bhookay ko khana khilao, bimar ki mizaj-pursi (ayadat) karo, aur museebat mein ghiray huye qaidi ya majboor ko chhurao; jo shakhs kisi mareez ki ayadat ke liye jata hai woh wapsi tak Jannat ke baghon mein chalta rehta hai.",
      en: "Feed the hungry, visit the sick, and free the distressed captive; whoever visits an ill person walks among the gardens of Paradise until they return."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بیماری اور تنگدستی میں انسان سب سے زیادہ تنہائی اور کمزوری محسوس کرتا ہے۔ ایسے وقت میں کسی کے سرہانے جا کر حوصلہ افزا بات کہنا اور اس کے لیے صحت کی دعا کرنا بہترین عبادت ہے۔ آج کا عملی سبق یہ ہے کہ اپنے بیمار رشتہ دار یا ہمسائے کی مختصر عیادت ضرور کریں اور اسے امید دلائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bimari aur tangdasti mein insan sab se zyada tanhai aur kamzori mehsoos karta hai. Aise waqt mein kisi ke sirhanay ja kar hausla-afza baat kehna aur us ke liye sehat ki dua karna behtareen ibadat hai. Aaj ka amli sabaq yeh hai ke apne bimar rishtedar ya hamsaye ki mukhtasar ayadat zaroor karein aur usay umeed dilayein.",
      en: "Context & Practical Lesson: Visiting the sick to offer comfort, prayer, and encouragement alleviates loneliness and stands among the noblest acts of human empathy."
    },
    tags: [
      { ur: "عیادتِ مریض", ro: "Ayadat-e-Mareez", en: "Visiting the Sick" },
      { ur: "ہمدردی", ro: "Hamdardi", en: "Empathy" }
    ]
  },
  {
    id: "ma-337",
    slug: "majlis-mein-imtiyaz-na-rakhna-aur-masakeen-ke-sath-baithna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 42-43",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "مجلس میں کوئی امتیازی نشست نہ رکھنا اور غرباء کے ساتھ بیٹھنا",
      ro: "Majlis Mein Koi Imtiyazi Nashist Na Rakhna Aur Ghuraba Ke Sath Baithna",
      en: "Sitting Without Special Distinction Among Companions and the Poor"
    },
    quote: {
      ur: "حضور اکرم ﷺ صحابہ کرامؓ کی مجلس میں اس قدر سادگی اور برابری سے تشریف فرما ہوتے کہ باہر سے آنے والا اجنبی شخص دیکھ کر پہچان نہ پاتا کہ آپ ﷺ کون ہیں؛ آپ ﷺ جہاں جگہ ملتی وہیں بیٹھ جاتے اور غریبوں و خادموں کے ساتھ ایک ہی دسترخوان پر کھانا تناول فرماتے۔",
      ro: "Huzoor Akram ﷺ Sahaba-e-Kiram (R.A) ki majlis mein is qadar sadgi aur barabari se tashreef-farma hote ke bahar se aane wala ajnabi shakhs dekh kar pehchan na pata ke Aap ﷺ kaun hain; Aap ﷺ jahan jagah milti wahin baith jate aur ghareebon o khadimon ke sath aik hi dastarkhwan par khana tanawul farmate.",
      en: "The Prophet ﷺ sat among his companions with such humility and equality that an arriving stranger could not tell who the leader was without asking; he sat wherever space was available and gladly shared meals with the poor and servants."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: دنیا کے حکمران اپنے لیے اونچے تخت اور الگ پروٹوکول رکھتے ہیں، مگر سرورِ کائنات ﷺ نے عملی مساوات کی وہ مثال قائم فرمائی کہ مجلس کے آخر میں جہاں جگہ ملتی وہیں تشریف رکھ لیتے۔ آج کا عملی سبق یہ ہے کہ اپنے عہدے یا مال کی وجہ سے خصوصی برتاؤ کی توقع نہ رکھیں بلکہ سادگی اور مساوات کو اپنا وقار بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Duniya ke hukmaran apne liye oonchay takht aur alag protocol rakhte hain, magar Sarwar-e-Kainat ﷺ ne amli masawat ki woh misal qayam farmai ke majlis ke aakhir mein jahan jagah milti wahin tashreef rakh lete. Aaj ka amli sabaq yeh hai ke apne ohday ya maal ki wajah se khusoosi bartao ki tawaqqa na rakhein balkay sadgi aur masawat ko apna waqar banayein.",
      en: "Context & Practical Lesson: True leadership rejects pomp and privilege; treating every person as an equal at the table and in gatherings wins lasting reverence."
    },
    tags: [
      { ur: "تواضع و مساوات", ro: "Tawazu o Masawat", en: "Humility & Equality" },
      { ur: "سادگی", ro: "Sadgi", en: "Simplicity" }
    ]
  },
  {
    id: "ma-338",
    slug: "khane-mein-kabhi-aib-na-nikalna-uswah-e-nabawi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 44",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "کھانے میں کبھی عیب نہ نکالنے کی سنتِ مبارکہ",
      ro: "Khane Mein Kabhi Aib Na Nikalne Ki Sunnat-e-Mubaraka",
      en: "The Prophetic Habit of Never Criticizing Food"
    },
    quote: {
      ur: "رسول اللہ ﷺ نے پوری زندگی کسی کھانے میں کبھی کوئی عیب نہیں نکالا؛ اگر آپ ﷺ کو کھانا مرغوب ہوتا تو تناول فرما لیتے، اور اگر طبیعت کو پسند نہ آتا تو بغیر کوئی شکوہ کیے خاموشی سے چھوڑ دیتے۔",
      ro: "Rasool Allah ﷺ ne poori zindagi kisi khane mein kabhi koi aib nahi nikala; agar Aap ﷺ ko khana marghoob hota to tanawul farma lete, aur agar tabiyat ko pasand na aata to baghair koi shikwa kiye khamoshi se chhor dete.",
      en: "The Messenger of Allah ﷺ never criticized any food throughout his entire life: if he desired it, he ate it with gratitude, and if he did not, he simply left it without a single word of complaint."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کھانے میں نمک مرچ کی کمی بیشی پر غصہ کرنا جہاں رزقِ الٰہی کی ناشکری ہے، وہیں کھانا پکانے والے کی محنت اور دل کو ٹھیس پہنچانا بھی ہے۔ آج کا عملی سبق یہ ہے کہ دسترخوان پر جو حلال رزق سامنے آئے اس پر اللہ کا شکر ادا کریں اور گھر والوں کی محنت کی قدردانی کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Khane mein namak-mirch ki kami-beshi par ghussa karna jahan rizq-e-Ilahi ki nashukri hai, wahin khana pakane wale ki mehnat aur dil ko thees pohanchana bhi hai. Aaj ka amli sabaq yeh hai ke dastarkhwan par jo halal rizq samne aaye us par Allah ka shukr ada karein aur ghar walon ki mehnat ki qadr-dani karein.",
      en: "Context & Practical Lesson: Complaining about meals shows ingratitude for God's provision and hurts the feelings of the person who cooked it. Practice thankfulness at every table."
    },
    tags: [
      { ur: "آدابِ طعام", ro: "Aadab-e-Ta'am", en: "Dining Etiquette" },
      { ur: "شکرِ نعمت", ro: "Shukr-e-Nemat", en: "Gratitude" }
    ]
  },
  {
    id: "ma-339",
    slug: "sachai-amanat-hai-aur-sabr-mein-kamyabi",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 69-70",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "سچائی امانت ہے اور صبر میں کبھی کوئی نقصان نہیں",
      ro: "Sachai Amanat Hai Aur Sabr Mein Kabhi Koi Nuqsan Nahi",
      en: "Truth is a Sacred Trust and Patience Never Brings Loss"
    },
    quote: {
      ur: "سچائی سب سے بڑی امانت ہے اور جھوٹ سب سے بڑی خیانت؛ صبر میں کوئی نقصان نہیں اور بے صبری و جزع فزع میں کوئی فائدہ نہیں، اور تقویٰ سے بڑھ کر کوئی ہوشمندی نہیں۔",
      ro: "Sachai sab se badi amanat hai aur jhoot sab se badi khyanat; sabr mein koi nuqsan nahi aur be-sabri o jaza-faza mein koi faida nahi, aur taqwa se barh kar koi hoshmandi nahi.",
      en: "Truthfulness is a sacred trust and falsehood is treachery; there is no loss in patience and no benefit in anxious complaining, and there is no wisdom greater than piety."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سیدنا صدیقِ اکبرؓ نے زندگی کے تجربے کو تین جملوں میں سمو دیا ہے: سچ بولنے والا ہمیشہ معتبر رہتا ہے، مصیبت میں واویلا کرنے سے مصیبت کم نہیں ہوتی البتہ صبر سے اجر اور وقار بچ جاتا ہے۔ آج کا عملی سبق یہ ہے کہ ہر حال میں سچائی اور صبر کا دامن تھامے رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sayyiduna Siddiq-e-Akbar (R.A) ne zindagi ke tajurbay ko teen jumlon mein samo diya hai: sach bolne wala hamesha mo'tabar rehta hai, museebat mein wawaila karne se museebat kam nahi hoti albatta sabr se ajr aur waqar bach jata hai. Aaj ka amli sabaq yeh hai ke har haal mein sachai aur sabr ka daman thamay rakhein.",
      en: "Context & Practical Lesson: Panic and complaining never solve a crisis, whereas truthfulness and composed patience preserve both one's honor and spiritual reward."
    },
    tags: [
      { ur: "صداقت", ro: "Sadaqat", en: "Truthfulness" },
      { ur: "صبر و وقار", ro: "Sabr o Waqar", en: "Composed Patience" }
    ]
  },
  {
    id: "ma-340",
    slug: "hunar-seekho-aur-doosron-ke-mohtaj-na-bano",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 75-76",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "ہنر اور پیشہ سیکھ کر خود کفیل بننے کی تلقین",
      ro: "Hunar Aur Pesha Seekh Kar Khud-Kafeel Banne Ki Talqeen",
      en: "Learning a Skill and Profession to Remain Self-Reliant"
    },
    quote: {
      ur: "کوئی نہ کوئی ہنر اور پیشہ ضرور سیکھو کیونکہ کسی کو معلوم نہیں کہ اسے کب اپنے ہنر کی ضرورت پڑ جائے؛ مجھے وہ جوان سخت ناپسند ہے جو نہ دین کے علم میں لگا ہو اور نہ دنیا کے کسی حلال کام اور محنت میں مصروف ہو۔",
      ro: "Koi na koi hunar aur pesha zaroor seekho kyunkeh kisi ko maloom nahi ke usay kab apne hunar ki zaroorat par jaye; mujhe woh jawan sakht napasand hai jo na deen ke ilm mein laga ho aur na duniya ke kisi halal kaam aur mehnat mein masroof ho.",
      en: "Learn a trade and practical skill, for none of you knows when you may need it to sustain your dignity; truly, I dislike seeing a healthy person idle—engaged neither in the work of this world nor in preparation for the Hereafter."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضرت عمر فاروقؓ کسی تندرست انسان کو بیکار بیٹھا دیکھتے تو اس کی قدر آپؓ کی نظر میں گر جاتی۔ ہاتھ کا ہنر انسان کو زمانے کی محتاجی سے بچاتا ہے۔ آج کا عملی سبق یہ ہے کہ خود بھی جدید اور نفع بخش ہنر سیکھیں اور اپنی اولاد کو بھی باعزت روزگار کے قابل بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hazrat Umar Farooq (R.A) kisi tandurust insan ko bekar baitha dekhte to us ki qadr Aap (R.A) ki nazar mein gir jati. Hath ka hunar insan ko zamane ki mohtaji se bachata hai. Aaj ka amli sabaq yeh hai ke khud bhi jadeed aur nafa-bakhsh hunar seekhein aur apni aulad ko bhi ba-izzat rozgar ke qabil banayein.",
      en: "Context & Practical Lesson: Idleness erodes character, whereas mastering practical skills safeguards self-respect and financial independence in every season of life."
    },
    tags: [
      { ur: "ہنر مندی", ro: "Hunar-Mandi", en: "Skill & Craft" },
      { ur: "خود داری", ro: "Khud-Dari", en: "Self-Reliance" }
    ]
  },
  {
    id: "ma-341",
    slug: "dil-ki-safai-aur-ibadat-ki-halawat-pane-ka-raaz",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 86-87",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "عبادت کی حلاوت اور دل کا نور پانے کا راز",
      ro: "Ibadat Ki Halawat Aur Dil Ka Noor Pane Ka Raaz",
      en: "The Secret to Tasting the Sweetness of Worship and Inner Light"
    },
    quote: {
      ur: "اگر تمہارے دل گناہوں اور کینہ و حسد سے پاک ہو جائیں تو تمہارا جی اللہ کے کلام (قرآن) کی تلاوت سے کبھی سیر نہ ہو؛ جو شخص اپنی نگاہ اور زبان کی حفاظت کرتا ہے اللہ اس کے دل کو حکمت اور سکون سے بھر دیتا ہے۔",
      ro: "Agar tumhare dil gunahon aur keena o hasad se paak ho jayein to tumhara jee Allah ke kalam (Quran) ki tilawat se kabhi sair na ho; jo shakhs apni nigah aur zaban ki hifazat karta hai Allah us ke dil ko hikmat aur sukoon se bhar deta hai.",
      en: "If your hearts were purified from malice and sin, you would never tire of reciting the words of your Lord; whoever guards their gaze and their tongue, Allah fills their heart with wisdom and tranquility."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جس طرح بیمار انسان کو عمدہ کھانے کا ذائقہ محسوس نہیں ہوتا، اسی طرح حسد اور گناہوں سے آلودہ دل کو عبادت اور تلاوت میں لذت نہیں ملتی۔ آج کا عملی سبق یہ ہے کہ دل کی یکسوئی پانے کے لیے اپنی آنکھوں کو بے جا نظاروں اور زبان کو فضول باتوں سے بچائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jis tarah bimar insan ko umda khane ka zaiqa mehsoos nahi hota, isi tarah hasad aur gunahon se aalooda dil ko ibadat aur tilawat mein lazzat nahi milti. Aaj ka amli sabaq yeh hai ke dil ki yaksooi pane ke liye apni aankhon ko be-ja nazaron aur zaban ko fuzool baaton se bachayein.",
      en: "Context & Practical Lesson: Just as illness dulls the taste for fine food, envy and heedlessness dull spiritual joy. Guarding one's eyes and speech restores the heart's natural serenity."
    },
    tags: [
      { ur: "طہارتِ قلب", ro: "Taharat-e-Qalb", en: "Purity of Heart" },
      { ur: "حلاوتِ ایمان", ro: "Halawat-e-Eman", en: "Spiritual Sweetness" }
    ]
  },
  {
    id: "ma-342",
    slug: "zaban-darinday-ki-manind-hai-aur-achi-sohbat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 94-95",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "زبان کو قابو میں رکھنا اور مخلص دوست کی پہچان",
      ro: "Zaban Ko Qaboo Mein Rakhna Aur Mukhlis Dost Ki Pehchan",
      en: "Mastering the Tongue and Recognizing a True Friend"
    },
    quote: {
      ur: "انسان کی زبان ایک درندے کی مانند ہے، اگر اسے بے قابو چھوڑ دیا جائے تو وہ خود اپنے ہی مالک کو پھاڑ کھاتی ہے؛ اور تمہارا سچا دوست وہ ہے جو تمہاری موجودگی میں تمہاری اصلاح کرے اور تمہاری غیر موجودگی میں تمہاری عزت کی حفاظت کرے۔",
      ro: "Insan ki zaban aik darinday ki manind hai, agar usay be-qaboo chhor diya jaye to woh khud apne hi malik ko phar khati hai; aur tumhara sacha dost woh hai jo tumhari mojoodgi mein tumhari islah kare aur tumhari ghair-mojoodgi mein tumhari izzat ki hifazat kare.",
      en: "The tongue is like a wild beast: if left unrestrained, it turns upon its own master; and your truest friend is the one who advises you sincerely to your face and defends your honor behind your back."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کمان سے نکلا ہوا تیر اور منہ سے نکلا ہوا لفظ واپس نہیں آتا۔ بے قابو زبان انسان کی برسوں کی کمائی ہوئی عزت ایک لمحے میں خاک میں ملا دیتی ہے۔ آج کا عملی سبق یہ ہے کہ بولنے سے پہلے تولیں اور ایسے دوستوں کی قدر کریں جو تنہائی میں آپ کو آئینہ دکھائیں اور محفل میں آپ کا پردہ رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Kaman se nikla huwa teer aur munh se nikla huwa lafz wapis nahi aata. Be-qaboo zaban insan ki barson ki kamai hui izzat aik lamhay mein khak mein mila deti hai. Aaj ka amli sabaq yeh hai ke bolne se pehle tolein aur aise doston ki qadr karein jo tanhai mein aap ko aaina dikhayein aur mehfil mein aap کا parda rakhein.",
      en: "Context & Practical Lesson: Unchecked words destroy years of hard-earned respect, while a loyal friend corrects you privately and shields your reputation publicly."
    },
    tags: [
      { ur: "حفاظتِ زبان", ro: "Hifazat-e-Zaban", en: "Guarding the Tongue" },
      { ur: "مخلص دوستی", ro: "Mukhlis Dosti", en: "True Friendship" }
    ]
  },
  {
    id: "ma-343",
    slug: "agar-bolna-chandi-hai-to-khamoshi-sona-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 101-102",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "حکمت بھری خاموشی ہزار بے جا باتوں سے افضل ہے",
      ro: "Hikmat Bhari Khamoshi Hazar Be-Ja Baaton Se Afzal Hai",
      en: "Thoughtful Silence Outweighs a Thousand Careless Words"
    },
    quote: {
      ur: "اے بیٹے! میں اپنی خاموشی پر کبھی نادم نہیں ہوا، البتہ بولنے پر مجھے بارہا پچھتانا پڑا ہے؛ پس اگر بے وقت بولنا چاندی ہے تو موقع کی خاموشی خالص سونا ہے۔",
      ro: "Aye betay! Main apni khamoshi par kabhi nadim nahi huwa, albatta bolne par mujhe barha pachtana para hai; pas agar be-waqt bolna chandi hai to mauqay ki khamoshi khalis sona hai.",
      en: "O my son! I have never regretted remaining silent, whereas I have often regretted speaking; if speech is silver, then timely silence is pure gold."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جب تک انسان خاموش رہتا ہے بات اس کے قابو میں ہوتی ہے، اور جب وہ بول پڑتا ہے تو وہ اپنی بات کے نتائج کا قیدی بن جاتا ہے۔ آج کا عملی سبق یہ ہے کہ ہر بحث میں اپنی رائے دینا ضروری نہ سمجھیں؛ جہاں بولنے سے فائدہ نہ ہو وہاں باوقار خاموشی اختیار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jab tak insan khamosh rehta hai baat us ke qaboo mein hoti hai, aur jab woh bol parta hai to woh apni baat ke nataij ka qaidi ban jata hai. Aaj ka amli sabaq yeh hai ke har behas mein apni raaye dena zaroori na samjhein; jahan bolne se faida na ho wahan ba-waqar khamoshi ikhtiyar karein.",
      en: "Context & Practical Lesson: Before you speak, you own your words; once spoken, your words own you. Practicing strategic silence prevents needless disputes."
    },
    tags: [
      { ur: "حکمتِ خاموشی", ro: "Hikmat-e-Khamoshi", en: "Wisdom of Silence" },
      { ur: "تدبر", ro: "Tadabbur", en: "Prudence" }
    ]
  },
  {
    id: "ma-344",
    slug: "khushhali-mein-tawazu-aur-tangdasti-mein-khuddari",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 264 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "خوشحالی میں عاجزی اور تنگدستی میں خودداری کی عظمت",
      ro: "Khushhali Mein Aajizi Aur Tangdasti Mein Khuddari Ki Azmat",
      en: "Humility in Prosperity and Dignity in Hardship"
    },
    quote: {
      ur: "چار چیزیں انسان کے اعلیٰ ظرف ہونے کی گواہ ہیں: دولت اور اقتدار ملنے پر عاجزی اختیار کرنا، تنگدستی میں سفید پوشی اور خودداری نبھانا، غصے کی حالت میں انصاف نہ چھوڑنا، اور احسان کر کے بھول جانا۔",
      ro: "Chaar cheezein insan ke aala-zarf hone ki gawah hain: daulat aur iqtidar milne par aajizi ikhtiyar karna, tangdasti mein safaid-poshi aur khuddari nibhana, gusse ki halat mein insaf na chhorna, aur ehsan kar ke bhool jana.",
      en: "Four qualities prove a noble soul: remaining humble when blessed with wealth and authority, maintaining quiet dignity during hardship, staying fair when angry, and forgetting the favors one has done for others."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عام انسان دولت پا کر مغرور ہو جاتا ہے اور غربت میں گِڑگِڑانے لگتا ہے، جبکہ باوقار انسان ہر موسم میں اپنا توازن برقرار رکھتا ہے۔ آج کا عملی سبق یہ ہے کہ اچھے دنوں میں غریبوں کو نہ بھولیں اور مشکل دنوں میں اپنے وقار اور حلال محنت کا دامن نہ چھوڑیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aam insan daulat pa kar maghroor ho jata hai aur ghurbat mein girgirane lagta hai, jabkeh ba-waqar insan har mausam mein apna tawazun barqarar rakhta hai. Aaj ka amli sabaq yeh hai ke achay dinon mein ghareebon ko na bhoolein aur mushkil dinon mein apne waqar aur halal mehnat ka daman na chhorein.",
      en: "Context & Practical Lesson: Seasons of wealth and scarcity test inner character; staying grounded during success and dignified during trials marks true nobility."
    },
    tags: [
      { ur: "اعلیٰ ظرفی", ro: "Aala-Zarfi", en: "Noble Character" },
      { ur: "توازنِ کردار", ro: "Tawazun-e-Kirdar", en: "Poise" }
    ]
  },
  {
    id: "ma-345",
    slug: "maimar-ka-aakhri-makan-apne-kaam-mein-ikhlas",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 348 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "بوڑھے معمار کا آخری مکان: اپنے کام میں بددلی کا نتیجہ",
      ro: "Boorhay Maimar Ka Aakhri Makan: Apne Kaam Mein Bad-Dili Ka Nateeja",
      en: "The Carpenter's Final House: Your Work Builds Your Own Future"
    },
    quote: {
      ur: "ایک ماہر معمار نے ریٹائر ہونے سے پہلے مالک کی فرمائش پر آخری مکان بے دلی اور ناقص سامان سے تیار کر دیا، مگر جب مکان مکمل ہوا تو مالک نے چابی اسی معمار کے ہاتھ میں تھماتے ہوئے کہا: یہ مکان تمہاری عمر بھر کی خدمات کا تحفہ ہے؛ معمار پچھتایا کہ کاش میں جانتا کہ میں اپنا ہی گھر بنا رہا ہوں۔",
      ro: "Aik mahir maimar ne retire hone se pehle malik ki farmaish par aakhri makan be-dili aur naqis saman se tayyar kar diya, magar jab makan mukammal huwa to malik ne chabi usi maimar ke hath mein thamate huye kaha: Yeh makan tumhari umar bhar ki khidmat ka tohfa hai; maimar pachtaya ke kash main janta ke main apna hi ghar bana raha hoon.",
      en: "An aging master builder, asked by his employer to construct one final house before retiring, worked carelessly and used inferior materials; upon completion, the employer handed him the keys as a retirement gift—leaving the builder wishing he had known he was building his own home."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: یہ حکایت ہماری روزمرہ زندگی کی ہو بہو تصویر ہے۔ ہم جو نماز پڑھتے ہیں، جو کام اپنی دکان یا دفتر میں کرتے ہیں اور جو رویہ لوگوں کے ساتھ رکھتے ہیں، درحقیقت ہم اسی سے اپنے مستقبل اور آخرت کا گھر تعمیر کر رہے ہوتے ہیں۔ آج کا عملی سبق یہ ہے کہ اپنے ہر کام کو پوری دیانت اور عمدگی (اتقان) کے ساتھ انجام دیں کیونکہ اس کا پھل خود آپ ہی کو ملنا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Yeh hikayat hamari rozmarra zindagi ki hu-ba-hu tasveer hai. Hum jo namaz parhte hain, jo kaam apni dukan ya daftar mein karte hain aur jo rawaiya logon ke sath rakhte hain, dar-haqeeqat hum usi se apne mustaqbil aur akhirat ka ghar tameer kar rahe hote hain. Aaj ka amli sabaq yeh hai ke apne har kaam ko poori diyanat aur umdagi (itqan) ke sath anjam dein kyunkeh us ka phal khud aap hi ko milna hai.",
      en: "Context & Practical Lesson: Every daily deed, professional task, and moral choice is a brick in the house we ourselves will inhabit tomorrow. Perform every duty with excellence and sincerity."
    },
    tags: [
      { ur: "اتقانِ عمل", ro: "Itqan-e-Amal", en: "Excellence in Work" },
      { ur: "مکافات", ro: "Mukafat", en: "Self-Accountability" }
    ]
  }
];

export const batch24Quotes: QuoteItem[] = [
  {
    id: "ma-346",
    slug: "aapas-mein-aik-doosre-ka-maal-nahaq-na-khao",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:188) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ایک دوسرے کا مال ناحق کھانے اور رشوت سے بچنے کا حکم",
      ro: "Aik Doosre Ka Maal Nahaq Khane Aur Rishwat Se Bachne Ka Hukm",
      en: "Prohibition of Consuming Others' Wealth Unjustly or Through Bribery"
    },
    quote: {
      ur: "اور تم آپس میں ایک دوسرے کا مال باطل اور ناجائز طریقے سے مت کھاؤ، اور نہ ہی حاکموں تک رشوت پہنچاؤ تاکہ تم جانتے بوجھتے لوگوں کے مال کا کوئی حصہ گناہ کے ساتھ ہڑپ کر جاؤ۔",
      ro: "Aur tum aapas mein aik doosre ka maal batil aur najaiz tareeqay se mat khao, aur na hi hakimon tak rishwat pohanchao taake tum jaante boojhte logon ke maal ka koi hissa gunah ke sath harap kar jao.",
      en: "And do not consume one another's wealth unjustly, nor use bribery with authorities in order that you may knowingly devour a portion of the property of others sinfully."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ البقرہ کی یہ آیت ہر قسم کے مالی ظلم، دھوکہ دہی، قبضہ گیری اور رشوت کے دروازے بند کرتی ہے۔ کسی کا حق چالاکی یا اثر و رسوخ کے ذریعے اپنے نام کروا لینے سے وہ چیز اللہ کے نزدیک حلال نہیں ہو جاتی۔ آج کا عملی سبق یہ ہے کہ اپنے رزق اور کاروبار کو ہر مشکوک پیسے سے پاک رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Baqarah ki yeh aayat har qisam ke maali zulm, dhoka-dahi, qabza-geeri aur rishwat ke darwaze band karti hai. Kisi ka haq chalaki ya asar-o-rasookh ke zariye apne naam karwa lene se woh cheez Allah ke nazdeek halal nahi ho jati. Aaj ka amli sabaq yeh hai ke apne rizq aur karobar ko har mashkook paise se paak rakhein.",
      en: "Context & Practical Lesson: Surah Al-Baqarah strictly forbids fraud, usurpation, and bribery; manipulating legal or social power to seize someone's rightful property never makes it lawful before God."
    },
    tags: [
      { ur: "رزقِ حلال", ro: "Rizq-e-Halal", en: "Lawful Wealth" },
      { ur: "دیانت", ro: "Diyanat", en: "Financial Integrity" }
    ]
  },
  {
    id: "ma-347",
    slug: "pasandeeda-maal-kharch-kiye-baghair-kamil-neki-nahi-milti",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Aal-e-Imran (3:92) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "پسندیدہ چیز راہِ خدا میں خرچ کرنا ہی کامل نیکی ہے",
      ro: "Pasandeeda Cheez Raah-e-Khuda Mein Kharch Karna Hi Kamil Neki Hai",
      en: "True Righteousness Requires Giving from What You Cherish"
    },
    quote: {
      ur: "تم ہرگز کامل نیکی (بِرّ) کے درجے کو نہیں پہنچ سکتے جب تک کہ تم اس چیز میں سے (اللہ کی راہ میں) خرچ نہ کرو جو تمہیں خود عزیز اور محبوب ہو؛ اور تم جو کچھ بھی خرچ کرتے ہو بے شک اللہ اسے خوب جانتا ہے۔",
      ro: "Tum hargiz kamil neki (Birr) ke darjay ko nahi pohanch sakte jab tak ke tum us cheez mein se (Allah ki raah mein) kharch na karo jo tumhein khud azeez aur mehboob ho; aur tum jo kuch bhi kharch karte ho be-shak Allah usay khoob jaanta hai.",
      en: "Never will you attain the pinnacle of righteousness until you spend in charity from that which you yourselves love; and whatever you spend, indeed Allah is fully aware of it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جب یہ آیت نازل ہوئی تو حضرت ابوطلحہ انصاریؓ نے مدینہ منورہ میں اپنا سب سے قیمتی اور محبوب باغ 'بیرحاء' فوراً اللہ کی راہ میں وقف کر دیا۔ بیکار اور فالتو چیزیں دے کر انسان سخاوت کی روح کو نہیں پا سکتا۔ آج کا عملی سبق یہ ہے کہ جب کسی مسکین یا مہمان کو کھانا یا کپڑا دیں تو عمدہ اور پسندیدہ چیز پیش کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jab yeh aayat nazil hui to Hazrat Abu Talha Ansari (R.A) ne Madinah Munawwara mein apna sab se qeemati aur mehboob bagh 'Bairaha' foran Allah ki raah mein waqf kar diya. Bekar aur faltoo cheezein de kar insan sakhawat ki rooh ko nahi pa sakta. Aaj ka amli sabaq yeh hai ke jab kisi miskeen ya mehman ko khana ya kapra dein to umda aur pasandeeda cheez pesh karein.",
      en: "Context & Practical Lesson: Giving away worn-out, unwanted items is easy; true spiritual elevation comes when we share quality, cherished blessings with those in need."
    },
    tags: [
      { ur: "اعلیٰ سخاوت", ro: "Aala Sakhawat", en: "Noble Generosity" },
      { ur: "بِرّ و احسان", ro: "Birr o Ihsan", en: "True Righteousness" }
    ]
  },
  {
    id: "ma-348",
    slug: "allah-aur-walideen-ka-shukr-ada-karne-ki-wasiyat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Luqman (31:14) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ماں کی تکالیف کا احساس اور اللہ و والدین کا شکر ادا کرنا",
      ro: "Maa Ki Takaleef Ka Ehsas Aur Allah o Walideen Ka Shukr Ada Karna",
      en: "Honoring the Mother's Sacrifices and Thanking Both God and Parents"
    },
    quote: {
      ur: "اور ہم نے انسان کو اس کے ماں باپ کے بارے میں حسنِ سلوک کی تاکید فرمائی؛ اس کی ماں نے کمزوری پر کمزوری سہہ کر اسے پیٹ میں رکھا اور دو سال میں اس کا دودھ چھٹانا ہوا، کہ تو میرا شکر ادا کر اور اپنے والدین کا بھی شکر گزار رہ۔",
      ro: "Aur hum ne insan ko us ke maa-baap ke baray mein husn-e-sulook ki taakid farmai; us ki maa ne kamzori par kamzori seh kar usay pait mein rakha aur do saal mein us ka doodh chhutana huwa, ke tu Mera shukr ada kar aur apne walideen ka bhi shukr-guzar reh.",
      en: "And We have enjoined upon man care for his parents—his mother carried him in weakness upon weakness, and his weaning is in two years: 'Be grateful to Me and to your parents; to Me is the final destination.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ لقمان کی اس آیت میں اللہ تعالیٰ نے اپنا شکر اور والدین کا شکر ایک ہی جملے میں یکجا فرما کر بتا دیا کہ ماں باپ کا ناشکرا کبھی رب کا شکر گزار نہیں بن سکتا، اور بطورِ خاص ماں کی مشقتوں کو یاد دلایا گیا ہے۔ آج کا عملی سبق یہ ہے کہ والدین کے احسانات کو ہمیشہ یاد رکھیں اور ان کی خدمت کو اپنی جنت کا راستہ سمجھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Luqman ki is aayat mein Allah Ta'ala ne apna shukr aur walideen ka shukr aik hi jumlay mein yakja farma kar bata diya ke maa-baap ka nashukra kabhi Rab ka shukr-guzar nahi ban sakta, aur bataur-e-khas maa ki mushaqqaton ko yaad dilaya gaya hai. Aaj ka amli sabaq yeh hai ke walideen ke ehsanat ko hamesha yaad rakhein aur un ki khidmat ko apni Jannat ka rasta samjhein.",
      en: "Context & Practical Lesson: Linking gratitude to God directly with gratitude to parents underscores their sacred status, especially honoring the mother's immense physical and emotional sacrifices."
    },
    tags: [
      { ur: "عظمتِ والدین", ro: "Azmat-e-Walideen", en: "Honoring Parents" },
      { ur: "شکر گزاری", ro: "Shukr-Guzari", en: "Gratitude" }
    ]
  },
  {
    id: "ma-349",
    slug: "asli-ameeri-maal-ki-kasrat-nahi-balkay-dil-ka-ghina-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 23",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حقیقی تونگری مال کی کثرت نہیں بلکہ دل کی بے نیازی ہے",
      ro: "Haqeeqi Tawangari Maal Ki Kasrat Nahi Balkay Dil Ki Be-Niyazi Hai",
      en: "True Wealth is Not Abundance of Goods, But Richness of the Soul"
    },
    quote: {
      ur: "حقیقی امیری اور تونگری سامان اور مال و دولت کی کثرت کا نام نہیں ہے، بلکہ اصل تونگری تو دل کا غنی (بے نیاز اور قانع) ہو جانا ہے۔",
      ro: "Haqeeqi ameeri aur tawangari saman aur maal-o-daulat ki kasrat ka naam nahi hai, balkay asal tawangari to dil ka ghani (be-niyaz aur qani) ho jana hai.",
      en: "True wealth does not lie in the abundance of worldly possessions; rather, true wealth is the richness and contentment of the soul."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جس انسان کے دل میں حرص کی آگ لگی ہو وہ کروڑوں کما کر بھی اندر سے فقیر اور بے چین رہتا ہے، جبکہ قناعت پسند انسان کم وسائل میں بھی بادشاہوں جیسا سکون رکھتا ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کی دولت سے اپنا موازنہ کرنے کے بجائے اپنے دل میں شکر اور بے نیازی پیدا کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jis insan ke dil mein hirs ki aag lagi ho woh karoron kama kar bhi andar se faqeer aur be-chain rehta hai, jabkeh qana'at-pasand insan kam wasail mein bhi badshahon jaisa sukoon rakhta hai. Aaj ka amli sabaq yeh hai ke doosron ki daulat se apna muwazna karne ke bajaye apne dil mein shukr aur be-niyazi paida karein.",
      en: "Context & Practical Lesson: A greedy heart feels poor even among millions, whereas a content soul experiences royal peace with modest means."
    },
    tags: [
      { ur: "غنائے قلب", ro: "Ghina-e-Qalb", en: "Richness of Soul" },
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" }
    ]
  },
  {
    id: "ma-350",
    slug: "zaban-aur-iffat-ki-hifazat-par-jannat-ki-zamanat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "زبان اور پاکدامنی کی حفاظت پر جنت کی ضمانت",
      ro: "Zaban Aur Pakdamani Ki Hifazat Par Jannat Ki Zamanat",
      en: "Guarding the Tongue and Chastity Guarantees Paradise"
    },
    quote: {
      ur: "جو شخص مجھے اپنی زبان اور اپنی شرمگاہ (عفت و پاکدامنی) کی حفاظت کی ضمانت دے دے، میں اس کے لیے جنت کی ضمانت دیتا ہوں۔",
      ro: "Jo shakhs mujhe apni zaban aur apni sharmgah (iffat o pakdamani) ki hifazat ki zamanat de de, main us ke liye Jannat ki zamanat deta hoon.",
      en: "Whoever guarantees for me the protection of their tongue and their chastity, I guarantee Paradise for them."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی زندگی کے نوے فیصد گناہ اور فسادات دو ہی راستوں سے آتے ہیں: بے لگام زبان اور بے قابو خواہشات۔ جس نے ان دونوں پر تقویٰ کا پہرہ بٹھا لیا اس کی دنیا بھی باوقار ہو گئی اور آخرت بھی محفوظ ہو گئی۔ آج کا عملی سبق یہ ہے کہ اپنی گفتار اور کردار کی پاکیزگی پر کبھی آنچ نہ آنے دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani zindagi ke naway feesad gunah aur fasadat do hi raston se aate hain: be-lagam zaban aur be-qaboo khuwaishat. Jis ne in dono par taqwa ka pehra bitha liya us ki duniya bhi ba-waqar ho gayi aur akhirat bhi mehfooz ho gayi. Aaj ka amli sabaq yeh hai ke apni guftar aur kirdar ki pakeezgi par kabhi aanch na aane dein.",
      en: "Context & Practical Lesson: Most moral downfalls stem from careless speech or unchecked desires; mastering both secures honor in this life and salvation in the next."
    },
    tags: [
      { ur: "عفت و صداقت", ro: "Iffat o Sadaqat", en: "Purity & Truth" },
      { ur: "ضمانتِ جنت", ro: "Zamanat-e-Jannat", en: "Path to Paradise" }
    ]
  },
  {
    id: "ma-351",
    slug: "aapas-mein-tohfa-dene-se-mohabbat-barhti-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Al-Adab Al-Mufrad & Makhzan-e-Akhlaq - Page 26",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "آپس میں تحفہ دینے سے دلوں کا میل دھلتا اور محبت بڑھتی ہے",
      ro: "Aapas Mein Tohfa Dene Se Dilon Ka Mail Dhulta Aur Mohabbat Barhti Hai",
      en: "Exchanging Gifts Removes Rancor and Deepens Mutual Love"
    },
    quote: {
      ur: "آپس میں ایک دوسرے کو ہدیہ اور تحفہ دیا کرو، اس سے تمہارے درمیان محبت بڑھے گی اور دلوں کی کدورت اور رنجش دور ہو جائے گی۔",
      ro: "Aapas mein aik doosre ko hadiya aur tohfa diya karo, is se tumhare darmiyan mohabbat barhegi aur dilon ki kudoorat aur ranjish door ho jayegi.",
      en: "Exchange gifts with one another, for gifts foster mutual affection and wash away resentment from the hearts."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: تحفے کی اہمیت اس کی قیمت سے نہیں بلکہ اس کے پیچھے چھپے خلوص اور یاد آوری سے ہوتی ہے۔ ایک چھوٹا سا ہدیہ بھی برسوں کی جمی ہوئی برف پگھلا دیتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے اہلِ خانہ، والدین، بچوں اور دوستوں کو گاہے بگاہے کوئی چھوٹا سا تحفہ دے کر خوشی بانٹنے کی عادت بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Tohfay ki ahmiyat us ki qeemat se nahi balkay us ke peechay chhupay khuloos aur yaad-aawari se hoti hai. Aik chota sa hadiya bhi barson ki jami hui barf pighla deta hai. Aaj ka amli sabaq yeh hai ke apne ahl-e-khana, walideen, bachon aur doston ko gahay-bagahay koi chota sa tohfa de kar khushi bantne ki aadat banayein.",
      en: "Context & Practical Lesson: A thoughtful gift, however small, communicates care and appreciation, healing strained relationships and strengthening family bonds."
    },
    tags: [
      { ur: "ہدیہ و محبت", ro: "Hadiya o Mohabbat", en: "Gifting & Affection" },
      { ur: "تالیفِ قلب", ro: "Taleef-e-Qalb", en: "Uniting Hearts" }
    ]
  },
  {
    id: "ma-352",
    slug: "salam-mein-pehal-aur-musafaha-mein-garmjoshi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 45",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "سلام میں پہل کرنا، بچوں کو سلام کرنا اور گرمجوشی سے مصافحہ",
      ro: "Salam Mein Pehal Karna, Bachon Ko Salam Karna Aur Garmjoshi Se Musafaha",
      en: "Being First to Greet Everyone, Including Children, with Warmth"
    },
    quote: {
      ur: "حضور اکرم ﷺ ہر ملنے والے کو سلام کرنے میں ہمیشہ پہل فرماتے، اور گلی سے گزرتے ہوئے کھیلتے ہوئے معصوم بچوں کو بھی شفقت سے سلام فرماتے؛ جب کوئی شخص آپ ﷺ سے مصافحہ کرتا تو آپ ﷺ اپنا دستِ مبارک اس وقت تک نہ کھینچتے جب تک سامنے والا خود ہاتھ نہ چھوڑتا۔",
      ro: "Huzoor Akram ﷺ har milne wale ko salam karne mein hamesha pehal farmate, aur gali se guzarte huye khelte huye masoom bachon ko bhi shafqat se salam farmate; jab koi shakhs Aap ﷺ se musafaha karta to Aap ﷺ apna dast-e-mubarak us waqt tak na khinchte jab tak samne wala khud hath na chhorta.",
      en: "The Prophet ﷺ was always the first to greet whoever met him, even offering peace with a warm smile to small children playing in the street; when shaking hands, he never withdrew his hand until the other person let go first."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: چھوٹے بچوں کو سلام کرنا ان کے اندر خود اعتمادی اور آدابِ معاشرت پیدا کرتا ہے، اور مصافحے میں ہاتھ جلدی نہ کھینچنا سامنے والے کو اہمیت اور اپنائیت کا احساس دلاتا ہے۔ آج کا عملی سبق یہ ہے کہ بڑے چھوٹے کی تفریق کیے بغیر سلام میں پہل کریں اور پوری توجہ سے ملاقات کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Chote bachon ko salam karna un ke andar khud-aitmadi aur aadab-e-muasharat paida karta hai, aur musafahay mein hath jaldi na khinchna samne wale ko ahmiyat aur apnaiyat ka ehsas dilata hai. Aaj ka amli sabaq yeh hai ke bade chote ki tafreeq kiye baghair salam mein pehal karein aur poori tawajjo se mulaqat karein.",
      en: "Context & Practical Lesson: Greeting children builds their self-worth and manners, while giving undivided attention during a handshake makes every person feel valued."
    },
    tags: [
      { ur: "آدابِ سلام", ro: "Aadab-e-Salam", en: "Greeting Etiquette" },
      { ur: "شفقت", ro: "Shafqat", en: "Warmth & Care" }
    ]
  },
  {
    id: "ma-353",
    slug: "auqat-ki-munazzam-taqseem-ibadat-khandan-aur-makhlooq",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 46-47 (Shamail Tirmidhi)",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "نبوی شب و روز کی منظم تقسیم: عبادت، اہلِ خانہ اور خدمتِ خلق",
      ro: "Nabawi Shab-o-Roz Ki Munazzam Taqseem: Ibadat, Ahl-e-Khana Aur Khidmat-e-Khalq",
      en: "The Prophetic Balance of Time: Worship, Family, and Public Service"
    },
    quote: {
      ur: "رسول اللہ ﷺ نے اپنے روزمرہ اوقات کو نہایت نظم و ضبط کے ساتھ تین حصوں میں تقسیم فرما رکھا تھا: ایک حصہ اللہ تعالیٰ کی عبادت اور مناجات کے لیے، ایک حصہ اپنے اہلِ خانہ کے حقوق اور گھریلو کاموں کے لیے، اور ایک حصہ عام لوگوں کی حاجات سننے اور ان کی رہنمائی کے لیے۔",
      ro: "Rasool Allah ﷺ ne apne rozmarra auqat ko nihayat nazm-o-zabt ke sath teen hisson mein taqseem farma rakha tha: aik hissa Allah Ta'ala ki ibadat aur munajat ke liye, aik hissa apne ahl-e-khana ke huqooq aur ghareloo kaamon ke liye, aur aik hissa aam logon ki hajat sunne aur un ki rehnumai ke liye.",
      en: "The Messenger of Allah ﷺ organized his daily time into three balanced portions: one portion devoted to the worship of Allah, one portion dedicated to his family and household duties, and one portion reserved for serving and guiding the people."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اکثر لوگ کاروبار میں اس قدر ڈوب جاتے ہیں کہ بیوی بچوں اور نماز کا حق بھول جاتے ہیں، یا دنیا ہی سے کٹ جاتے ہیں۔ اسوۂ نبوی ﷺ ہمیں وقت کی بہترین تنظیم (Time Management) سکھاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دن کے چوبیس گھنٹوں میں رب کی عبادت، حلال روزگار اور اپنے گھر والوں کی توجہ کے لیے الگ الگ وقت مقرر کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aksar log karobar mein is qadar doob jate hain ke biwi-bachon aur namaz ka haq bhool jate hain, ya duniya hi se kat jate hain. Uswah-e-Nabawi ﷺ humein waqt ki behtareen tanzeem (Time Management) sikhata hai. Aaj ka amli sabaq yeh hai ke apne din ke chaubees ghanton mein Rab ki ibadat, halal rozgar aur apne ghar walon ki tawajjo ke liye alag alag waqt muqarrar karein.",
      en: "Context & Practical Lesson: True productivity balances spiritual devotion, professional work, and quality family time so no rightful duty is neglected."
    },
    tags: [
      { ur: "تنظیمِ اوقات", ro: "Tanzeem-e-Auqat", en: "Time Management" },
      { ur: "متوازن زندگی", ro: "Mutawazin Zindagi", en: "Balanced Living" }
    ]
  },
  {
    id: "ma-354",
    slug: "kisi-bhi-insan-ko-haqeer-na-samajhna",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 71",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "کسی مسلمان کو حقیر نہ جاننا اور چھوٹی نیکی کو معمولی نہ سمجھنا",
      ro: "Kisi Musalman Ko Haqeer Na Janna Aur Choti Neki Ko Mamooli Na Samajhna",
      en: "Never Looking Down Upon Anyone for God's Secret May Rest in the Humble"
    },
    quote: {
      ur: "کسی بھی مسلمان کو ہرگز حقیر اور کمتر مت سمجھو، کیونکہ جو شخص تمہاری نظر میں چھوٹا اور بے حیثیت ہے، عین ممکن ہے کہ وہ اپنے اخلاص کی بدولت اللہ کے نزدیک بہت بڑا مقام رکھتا ہو۔",
      ro: "Kisi bhi musalman ko hargiz haqeer aur kamtar mat samjho, kyunkeh jo shakhs tumhari nazar mein chota aur be-haisiyat hai, ain mumkin hai ke woh apne ikhlas ki badolat Allah ke nazdeek bohot bada maqam rakhta ho.",
      en: "Never look down upon any believer, for the person who appears humble and insignificant in the eyes of people may hold an exalted rank in the sight of Allah due to their hidden sincerity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان ظاہری لباس، گاڑی اور عہدے سے لوگوں کو تولتا ہے، جبکہ رب کی نظر انسان کے ٹوٹے ہوئے دل اور اخلاص پر ہوتی ہے۔ آج کا عملی سبق یہ ہے کہ کسی بھی مزدور، غریب یا سادہ انسان کو دیکھ کر دل میں برتری کا خیال نہ لائیں بلکہ ہر ایک سے ادب سے پیش آئیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan zahiri libas, gari aur ohday se logon ko tolta hai, jabkeh Rab ki nazar insan ke tootay huye dil aur ikhlas par hoti hai. Aaj ka amli sabaq yeh hai ke kisi bhi mazdoor, ghareeb ya sada insan ko dekh kar dil mein bartari ka khayal na layein balkay har aik se adab se pesh aayein.",
      en: "Context & Practical Lesson: Worldly eyes judge by status and attire, while God judges by sincerity of heart; treat the humblest person with deep respect."
    },
    tags: [
      { ur: "تکریمِ انسان", ro: "Takreem-e-Insan", en: "Respecting All" },
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" }
    ]
  },
  {
    id: "ma-355",
    slug: "hamare-aib-ki-islah-karne-wala-hamara-mohsin-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 77",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "ہماری خامیوں کی نشاندہی کرنے والا ہمارا سچا خیر خواہ ہے",
      ro: "Hamari Khamiyon Ki Nishandahi Karne Wala Hamara Sacha Khair-Khwah Hai",
      en: "May Allah Bless the Person Who Gifts Me Knowledge of My Faults"
    },
    quote: {
      ur: "اللہ تعالیٰ اس شخص پر رحم فرمائے جو میری خامیوں اور عیبوں کو تحفے کی طرح میرے سامنے پیش کرے تاکہ میں اپنی اصلاح کر سکوں؛ جھوٹی خوشامد کرنے والا درحقیقت انسان کو دھوکے میں رکھتا ہے۔",
      ro: "Allah Ta'ala us shakhs par reham farmaye jo meri khamiyon aur aibon ko tohfay ki tarah mere samne pesh kare taake main apni islah kar sakoon; jhooti khushamad karne wala dar-haqeeqat insan ko dhokay mein rakhta hai.",
      en: "May Allah have mercy upon the person who presents my faults to me as a gift so that I may correct myself; indeed, a flatterer only deceives you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عام طور پر کوئی ہماری غلطی بتائے تو ہم فوراً بپھر جاتے ہیں، جبکہ سیدنا عمر فاروقؓ تنہائی میں کی جانے والی مثبت تنقید کو ’ہدیہ اور تحفہ‘ سمجھتے تھے۔ آج کا عملی سبق یہ ہے کہ خوشامدی لوگوں سے محتاط رہیں اور اگر کوئی مخلص انسان آپ کی غلطی کی طرف متوجہ کرے تو اس کا شکریہ ادا کر کے اپنی اصلاح کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aam taur par koi hamari ghalti bataye to hum foran biphar jate hain, jabkeh Sayyiduna Umar Farooq (R.A) tanhai mein ki jane wali musbat tanqeed ko 'hadiya aur tohfa' samajhte thay. Aaj ka amli sabaq yeh hai ke khushamadi logon se mohtat rahein aur agar koi mukhlis insan aap ki ghalti ki taraf mutawajjah kare to us ka shukriya ada kar ke apni islah karein.",
      en: "Context & Practical Lesson: Welcoming constructive feedback without ego allows continuous personal growth, whereas surrounding oneself with flatterers leads to blind spots."
    },
    tags: [
      { ur: "خود احتسابی", ro: "Khud-Ehtisabi", en: "Self-Improvement" },
      { ur: "خیر خواہی", ro: "Khair-Khwahi", en: "Constructive Advice" }
    ]
  },
  {
    id: "ma-356",
    slug: "neki-ke-chaar-noorani-asraat-aur-gunah-ki-zulmat",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 87-88",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "نیکی اور اطاعت کے انسانی چہرے، رزق اور دلوں پر اثرات",
      ro: "Neki Aur Ita'at Ke Insani Chehray, Rizq Aur Dilon Par Asraat",
      en: "How Righteousness Illuminates the Face, Heart, and Provision"
    },
    quote: {
      ur: "نیکی اور تقویٰ اختیار کرنے سے چہرے پر نور آتا ہے، دل میں کشادگی پیدا ہوتی ہے، رزق میں برکت اترتی ہے اور مخلوق کے دلوں میں خود بخود محبت پیدا ہو جاتی ہے؛ جبکہ گناہ دل کو تنگ اور رزق کو بے برکت کر دیتا ہے۔",
      ro: "Neki aur taqwa ikhtiyar karne se chehray par noor aata hai, dil mein kushadgi paida hoti hai, rizq mein barkat utarti hai aur makhlooq ke dilon mein khud-ba-khud mohabbat paida ho jati hai; jabkeh gunah dil ko tang aur rizq ko be-barkat kar deta hai.",
      en: "Righteousness brings radiance to the face, expansion to the heart, blessing to one's provision, and natural affection in the hearts of people; whereas sin darkens the heart and drains blessing from wealth."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی اعمال کا اثر صرف آخرت تک محدود نہیں بلکہ دنیا ہی میں ظاہر ہو جاتا ہے۔ سچائی اور پاکیزگی انسان کے چہرے پر وقار اور اس کی کمائی میں عجیب اطمینان پیدا کر دیتی ہے۔ آج کا عملی سبق یہ ہے کہ جب زندگی میں بے برکتی یا بے چینی محسوس ہو تو فوراً استغفار اور صدقے کے ذریعے اپنے معاملات کو درست کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani aamaal ka asar sirf akhirat tak mehdood nahi balkay duniya hi mein zahir ho jata hai. Sachai aur pakeezgi insan ke chehray par waqar aur us ki kamai mein ajeeb itminan paida kar deti hai. Aaj ka amli sabaq yeh hai ke jab zindagi mein be-barkati ya be-chaini mehsoos ho to foran istighfar aur sadqay ke zariye apne muamlat ko durust karein.",
      en: "Context & Practical Lesson: Our moral choices leave immediate imprints on our inner peace, financial blessing, and social standing."
    },
    tags: [
      { ur: "برکتِ اعمال", ro: "Barkat-e-Aamaal", en: "Blessings of Virtue" },
      { ur: "نورِ تقویٰ", ro: "Noor-e-Taqwa", en: "Light of Piety" }
    ]
  },
  {
    id: "ma-357",
    slug: "sabr-ki-do-qismein-na-pasandeeda-par-sabr-aur-khuwahish-se-zabt",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 95",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "صبر کی دو قسمیں: تکلیف پر ہمت اور حرام خواہش سے پرہیز",
      ro: "Sabr Ki Do Qismein: Takleef Par Himmat Aur Haram Khuwahish Se Parhez",
      en: "The Two Forms of Patience: Enduring Pain and Resisting Temptation"
    },
    quote: {
      ur: "صبر کی دو قسمیں ہیں: ایک اس مصیبت اور تکلیف پر صبر کرنا جو تجھے ناگوار گزرے، اور دوسرا اس ناجائز چیز سے خود کو روکے رکھنا جس کی طرف تیرا نفس للچاتا ہو؛ اور جس نے ان دونوں میں صبر کر لیا وہ کامیابی کی چوٹی پر پہنچ گیا۔",
      ro: "Sabr ki do qismein hain: aik us museebat aur takleef par sabr karna jo tujhe nagawar guzray, aur doosra us najaiz cheez se khud ko rokay rakhna jis ki taraf tera nafs lalchata ho; aur jis ne in dono mein sabr kar liya woh kamyabi ki choti par pohanch gaya.",
      en: "Patience is of two kinds: enduring with fortitude that which pains you, and restraining yourself from that which unlawfully tempts you; whoever masters both attains the summit of character."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: لوگ عام طور پر صرف بیماری یا نقصان سہنے کو صبر سمجھتے ہیں، جبکہ حرام مال یا گناہ کا موقع ملنے پر اپنے نفس کو روک لینا اس سے بھی بڑا صبر ہے۔ آج کا عملی سبق یہ ہے کہ مشکلات میں حوصلہ رکھیں اور جہاں ناجائز فائدے کی کشش سامنے آئے وہاں تقویٰ کی طاقت سے اپنے قدم روک لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Log aam taur par sirf bimari ya nuqsan sehne ko sabr samajhte hain, jabkeh haram maal ya gunah ka mauqa milne par apne nafs ko rok lena us se bhi bada sabr hai. Aaj ka amli sabaq yeh hai ke mushkilat mein hausla rakhein aur jahan najaiz faiday ki kashish samne aaye wahan taqwa ki taqat se apne qadam rok lein.",
      en: "Context & Practical Lesson: True fortitude is tested not only when enduring hardship, but even more so when walking away from easy, unlawful temptation."
    },
    tags: [
      { ur: "حقیقتِ صبر", ro: "Haqeeqat-e-Sabr", en: "True Patience" },
      { ur: "ضبطِ نفس", ro: "Zabt-e-Nafs", en: "Self-Restraint" }
    ]
  },
  {
    id: "ma-358",
    slug: "hikmat-ki-kheti-naram-aur-aajiz-dilon-mein-ugti-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 105",
    author: {
      ur: "حکمتِ انبیاء علیہم السلام",
      ro: "Hikmat-e-Ambiya (A.S)",
      en: "Prophetic Wisdom"
    },
    title: {
      ur: "علم اور حکمت کی کھیتی ہمیشہ نرم اور عاجز دلوں میں اگتی ہے",
      ro: "Ilm Aur Hikmat Ki Kheti Hamesha Naram Aur Aajiz Dilon Mein Ugti Hai",
      en: "Seeds of Wisdom Grow Only in Humble, Receptive Hearts"
    },
    quote: {
      ur: "جس طرح بارش کا پانی اونچے اور سخت پتھریلے ٹیلوں پر نہیں ٹھہرتا بلکہ نشیبی اور نرم زمین ہی میں جذب ہو کر سبزہ اگاتا ہے، اسی طرح دانائی اور حکمت مغرور دلوں میں نہیں ٹھہرتی بلکہ عاجز اور متواضع سینوں کو آباد کرتی ہے۔",
      ro: "Jis tarah barish ka pani oonchay aur sakht pathreelay teelon par nahi theharta balkay nasheebi aur naram zameen hi mein jazb ho kar sabza ugata hai, isi tarah danai aur hikmat maghroor dilon mein nahi theharti balkay aajiz aur mutawaze seenon ko aabad karti hai.",
      en: "Just as rainwater slides off hard, rocky peaks and settles in soft, lowland soil to bring forth greenery, wisdom never takes root in arrogant hearts—it flourishes only in humble, receptive souls."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جو شخص یہ زعم پال لے کہ ’مجھے سب کچھ آتا ہے‘ اس کے سیکھنے کے دروازے بند ہو جاتے ہیں۔ عاجزی انسان کو عمر بھر طالبِ علم بنائے رکھتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دل کی زمین کو تکبر کی سختی سے پاک رکھیں تاکہ ہر اچھی بات اور نصیحت آپ کے کردار کو نکھار سکے۔",
      ro: "Pas-e-Manzar o Tashreeh: Jo shakhs yeh zo'm paal le ke 'mujhe sab kuch aata hai' us ke seekhne ke darwaze band ho jate hain. Aajizi insan ko umar bhar talib-e-ilm banaye rakhti hai. Aaj ka amli sabaq yeh hai ke apne dil ki zameen ko takabbur ki sakhti se paak rakhein taake har achi baat aur nasihat aap ke kirdar ko nikhar sake.",
      en: "Context & Practical Lesson: Pride closes the mind to learning, while humility keeps the heart fertile for lifelong wisdom and growth."
    },
    tags: [
      { ur: "نورِ حکمت", ro: "Noor-e-Hikmat", en: "Light of Wisdom" },
      { ur: "تواضع", ro: "Tawazu", en: "Humility" }
    ]
  },
  {
    id: "ma-359",
    slug: "insan-ki-asliyat-teen-mawaqe-par-pehchani-jati-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 268 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "انسان کے کردار کی سچی پرکھ کے تین مواقع: غصہ، لین دین اور سفر",
      ro: "Insan Ke Kirdar Ki Sachi Parakh Ke Teen Mawaqe: Ghussa, Lain-Dain Aur Safar",
      en: "Three True Tests of Character: Anger, Financial Dealings, and Travel"
    },
    quote: {
      ur: "کسی شخص کی محض ظاہری شیریں بیانی سے دھوکہ نہ کھاؤ جب تک کہ اسے تین مواقع پر آزما نہ لو: غصے کے وقت اس کے حلم کو، روپے پیسے کے لین دین میں اس کی امانت کو، اور سفر کی رفاقت میں اس کے اخلاق و ایثار کو۔",
      ro: "Kisi shakhs ki mehaz zahiri shireen-bayani se dhoka na khao jab tak ke usay teen mawaqe par aazma na lo: gusse ke waqt us ke hilm ko, rupay-paise ke lain-dain mein us ki amanat ko, aur safar ki rafaqat mein us ke akhlaq o eesar ko.",
      en: "Do not judge a person merely by their polite appearance until you have observed them in three situations: their restraint during anger, their honesty in financial dealings, and their consideration during travel."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عام ملاقات میں ہر انسان مسکرا کر مل سکتا ہے، لیکن جب مال کی تقسیم کا وقت آتا ہے، یا سفر کی مشقت پیش آتی ہے، یا غصہ چڑھتا ہے، تو بناوٹی نقاب اتر جاتے ہیں اور اندر کا انسان ظاہر ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کو پرکھنے کے ساتھ خود اپنے آپ کو بھی ان تینوں کسوٹیوں پر کھرا ثابت کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aam mulaqat mein har insan muskura kar mil sakta hai, lekin jab maal ki taqseem ka waqt aata hai, ya safar ki mushaqqat pesh aati hai, ya ghussa charhta hai, to banawati naqab utar jate hain aur andar ka insan zahir ho jata hai. Aaj ka amli sabaq yeh hai ke doosron ko parakhne ke sath khud apne aap ko bhi in teenon kasautiyon par khara sabit karein.",
      en: "Context & Practical Lesson: Anyone can appear courteous in brief social settings; true integrity is revealed when money, fatigue, or provocation enters the picture."
    },
    tags: [
      { ur: "پرکھ و بصیرت", ro: "Parakh o Baseerat", en: "Discernment" },
      { ur: "معاملات", ro: "Muamlat", en: "Fair Dealings" }
    ]
  },
  {
    id: "ma-360",
    slug: "posheeda-sadqa-aur-mazloom-ki-dua-balaon-ki-dhal",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 352 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "پوشیدہ صدقہ اور کسی مجبور کی دل سے نکلی ہوئی دعا بلاؤں کی ڈھال ہے",
      ro: "Posheeda Sadqa Aur Kisi Majboor Ki Dil Se Nikli Hui Dua Balaon Ki Dhal Hai",
      en: "Secret Charity and the Prayer of the Distressed Shield Against Calamity"
    },
    quote: {
      ur: "ایک مسافر نے رات کے اندھیرے میں خاموشی سے ایک بے بس بیوہ کے بچوں کے لیے راشن رکھ دیا؛ اگلے دن پہاڑی راستے میں چٹان گرنے سے قافلہ بال بال بچا تو ایک بزرگ نے فرمایا: تم میں سے کسی کے کل رات کے پوشیدہ صدقے اور کسی ٹوٹے ہوئے دل کی دعا نے آج پوری بلا ٹال دی ہے۔",
      ro: "Aik musafir ne raat ke andheray mein khamoshi se aik be-bas bewa ke bachon ke liye rashan rakh diya; aglay din pahari rastay mein chattan girne se qafila baal-baal bacha to aik buzurg ne farmaya: Tum mein se kisi ke kal raat ke posheeda sadqay aur kisi tootay huye dil ki dua ne aaj poori bala taal di hai.",
      en: "A traveler quietly left provisions at the door of a destitute widow in the dark of night; the next day, when his caravan narrowly escaped a deadly rockslide, a sage remarked: 'A secret charity given last night and the prayer of a broken heart have deflected today's calamity.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: احادیثِ مبارکہ میں بھی آتا ہے کہ پوشیدہ صدقہ رب کے غضب کو ٹھنڈا کرتا ہے اور بری موت و ناگہانی آفات کو ٹالتا ہے۔ جب کسی مجبور کے گھر کا چولہا جلتا ہے تو اس کے دل سے نکلنے والی دعا سیدھی عرش تک جاتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے اور اپنے بچوں کی حفاظت کے لیے کوئی نہ کوئی خفیہ نیکی اور صدقہ ضرور مقرر رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Ahadees-e-mubaraka mein bhi aata hai ke posheeda sadqa Rab ke ghazab ko thanda karta hai aur buri maut o nagahani aafat ko talta hai. Jab kisi majboor ke ghar ka choolha jalta hai to us ke dil se nikalne wali dua seedhi Arsh tak jati hai. Aaj ka amli sabaq yeh hai ke apne aur apne bachon ki hifazat ke liye koi na koi khufiya neki aur sadqa zaroor muqarrar rakhein.",
      en: "Context & Practical Lesson: Quiet acts of charity that nobody witnesses—except the Creator—serve as an unseen spiritual shield protecting one's family from sudden hardships."
    },
    tags: [
      { ur: "صدقۂ سرّ", ro: "Sadqa-e-Sirr", en: "Secret Charity" },
      { ur: "ردِّ بلا", ro: "Radd-e-Bala", en: "Divine Protection" }
    ]
  }
];

export const batch25Quotes: QuoteItem[] = [
  {
    id: "ma-361",
    slug: "namaz-be-hayaai-aur-buray-kaamon-se-rokti-hai",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Ankabut (29:45) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سچی نماز انسان کو بے حیائی اور برے کاموں سے روکتی ہے",
      ro: "Sachi Namaz Insan Ko Be-Hayaai Aur Buray Kaamon Se Rokti Hai",
      en: "True Prayer Restrains from Indecency and Wrongdoing"
    },
    quote: {
      ur: "اور نماز کو پابندی سے قائم کرو، بے شک نماز بے حیائی اور ہر برے کام سے روکتی ہے؛ اور اللہ کا ذکر سب سے بڑی چیز ہے، اور تم جو کچھ کرتے ہو اللہ اسے خوب جانتا ہے۔",
      ro: "Aur namaz ko pabandi se qayam karo, be-shak namaz be-hayaai aur har buray kaam se rokti hai; aur Allah ka zikr sab se badi cheez hai, aur tum jo kuch karte ho Allah usay khoob jaanta hai.",
      en: "And establish regular prayer: indeed, prayer restrains from shameful and unjust deeds; and the remembrance of Allah is the greatest of all things, and Allah knows all that you do."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ العنکبوت کی یہ آیت نماز کا عملی پیمانہ طے کرتی ہے۔ جو شخص دن میں پانچ بار اپنے رب کے حضور حاضر ہونے کا احساس رکھتا ہے، اس کا ضمیر اسے دھوکہ دہی، ظلم اور بے حیائی کی طرف بڑھنے نہیں دیتا۔ آج کا عملی سبق یہ ہے کہ اپنی نماز کو محض عادت کے بجائے حضورِ قلب سے ادا کریں تاکہ اس کی روحانی طاقت ہمارے روزمرہ اخلاق کو سنوار دے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Ankabut ki yeh aayat namaz ka amli paimana tay karti hai. Jo shakhs din mein paanch bar apne Rab ke huzoor hazir hone ka ehsas rakhta hai, us ka zameer usay dhoka-dahi, zulm aur be-hayaai ki taraf barhne nahi deta. Aaj ka amli sabaq yeh hai ke apni namaz ko mehaz aadat ke bajaye huzoor-e-qalb se ada karein taake us ki roohani taqat hamare rozmarra akhlaq ko sanwar de.",
      en: "Context & Practical Lesson: Surah Al-Ankabut reveals the true measure of prayer: standing consciously before the Creator five times a day awakens the conscience and shields character from dishonesty and vice."
    },
    tags: [
      { ur: "روحِ نماز", ro: "Rooh-e-Namaz", en: "Spirit of Prayer" },
      { ur: "پاکیزہ کردار", ro: "Pakeeza Kirdar", en: "Pure Conduct" }
    ]
  },
  {
    id: "ma-362",
    slug: "har-mushkil-ke-sath-asani-hai-aur-waqt-ki-qadr",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ash-Sharh (94:5-8) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ہر تنگی کے ساتھ آسانی کا وعدہ اور فراغت میں نیا نصب العین",
      ro: "Har Tangi Ke Sath Asani Ka Wada Aur Faraghat Mein Naya Nasb-ul-Ain",
      en: "With Every Hardship Comes Ease and Continuous Purposeful Effort"
    },
    quote: {
      ur: "پس یقیناً ہر مشکل کے ساتھ آسانی ہے، بے شک ہر تنگی کے ساتھ کشادگی ہے؛ لہٰذا جب تم ایک کام سے فارغ ہو جاؤ تو فوراً عبادت اور دوسرے نیک کام میں محنت سے لگ جاؤ، اور اپنے رب ہی کی طرف راغب رہو۔",
      ro: "Pas yaqeenan har mushkil ke sath asani hai, be-shak har tangi ke sath kushadgi hai; lehaza jab tum aik kaam se farigh ho jao to foran ibadat aur doosre nek kaam mein mehnat se lag jao, aur apne Rab hi ki taraf raghib raho.",
      en: "So truly, with hardship comes ease; indeed, with every hardship comes ease. Therefore, once you have completed one duty, strive earnestly in devotion and turn wholeheartedly toward your Lord."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الانشراح کی یہ آیات دو عظیم اصول سکھاتی ہیں: اول یہ کہ دنیا کی کوئی مصیبت دائمی نہیں بلکہ اسی کے اندر آسانی کا بیج چھپا ہے؛ دوم یہ کہ مومن کی زندگی میں بیکاری کی کوئی جگہ نہیں، ایک ذمہ داری پوری ہو تو فوراً عبادت یا اگلے مفید کام میں لگ جانا چاہیے۔ آج کا عملی سبق یہ ہے کہ مشکلات میں پرامید رہیں اور فراغت کے لمحات کو غفلت میں ضائع نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Inshirah ki yeh aayatein do azeem usool sikhati hain: awwal yeh ke duniya ki koi museebat daimi nahi balkay usi ke andar asani ka beej chhupa hai; doam yeh ke momin ki zindagi mein bekari ki koi jagah nahi, aik zimmedari poori ho to foran ibadat ya aglay mufeed kaam mein lag jana chahiye. Aaj ka amli sabaq yeh hai ke mushkilat mein pur-umeed rahein aur faraghat ke lamhat ko ghaflat mein zaya na karein.",
      en: "Context & Practical Lesson: Surah Ash-Sharh teaches unshakeable optimism—every trial carries relief within it—while reminding us never to slip into idleness once a task is finished."
    },
    tags: [
      { ur: "امید و کشادگی", ro: "Umeed o Kushadgi", en: "Hope & Relief" },
      { ur: "مسلسل جدوجہد", ro: "Musalsal Jadd-o-Jehad", en: "Continuous Effort" }
    ]
  },
  {
    id: "ma-363",
    slug: "afw-ikhtiyar-karo-neki-ka-hukm-do-aur-jahilon-se-ulajhna-chhoro",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-A'raf (7:199) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "درگزر اختیار کرنا، بھلائی کی تلقین اور جاہلوں سے کنارہ کشی",
      ro: "Darguzar Ikhtiyar Karna, Bhalai Ki Talqeen Aur Jahilon Se Kinara-Kashi",
      en: "Practicing Forgiveness, Enjoining Good, and Turning Away from the Ignorant"
    },
    quote: {
      ur: "معافی اور درگزر کا شیوہ اختیار کرو، بھلائی اور معروف بات کا حکم دیتے رہو، اور نادان و جاہل لوگوں سے الجھنے سے کنارہ کش رہو۔",
      ro: "Maafi aur darguzar ka shewa ikhtiyar karo, bhalai aur maroof baat ka hukm dete raho, aur nadan o jahil logon se ulajhne se kinara-kash raho.",
      en: "Hold to forgiveness, enjoin what is good and right, and turn away gracefully from the ignorant."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مفسرین کے نزدیک قرآن کریم کی اس ایک مختصر آیت میں حسنِ معاشرت کا پورا دستور جمع کر دیا گیا ہے۔ لوگوں کے ساتھ رہتے ہوئے ان کی کوتاہیوں کو معاف کرنا، اچھے اخلاق کی دعوت دینا اور جو شخص ضد و جہالت پر اتر آئے اس سے بحث میں وقت برباد نہ کرنا ہی دانائی ہے۔ آج کا عملی سبق یہ ہے کہ تلخ مزاج اور جھگڑالو لوگوں سے الجھ کر اپنا ذہنی سکون خراب نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Mufassireen ke nazdeek Quran-e-Kareem ki is aik mukhtasar aayat mein husn-e-muasharat ka poora dastoor jama kar diya gaya hai. Logon ke sath rehte huye un ki kotahiyon ko maaf karna, achay akhlaq ki dawat dena aur jo shakhs zid o jahalat par utar aaye us se behas mein waqt barbad na karna hi danai hai. Aaj ka amli sabaq yeh hai ke talkh-mizaj aur jhagraloo logon se ulajh kar apna zehni sukoon kharab na karein.",
      en: "Context & Practical Lesson: Classical scholars consider this single verse the ultimate summary of noble character: pardon shortcomings, promote goodness, and refuse to get dragged into petty arguments with foolish people."
    },
    tags: [
      { ur: "اعلیٰ اخلاق", ro: "Aala Akhlaq", en: "Supreme Manners" },
      { ur: "حلم و بردباری", ro: "Hilm o Burdbari", en: "Forbearance" }
    ]
  },
  {
    id: "ma-364",
    slug: "padosi-ke-huqooq-aur-achay-sulook-ki-taakid",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 24",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ہمسائے کے حقوق کی اہمیت اور اسے ایذا نہ پہنچانا",
      ro: "Hamsaye Ke Huqooq Ki Ahmiyat Aur Usay Eiza Na Pohanchana",
      en: "The Sacred Rights of Neighbors and Protecting Them from Harm"
    },
    quote: {
      ur: "جبرائیل علیہ السلام مجھے ہمسائے کے حقوق کے بارے میں اس قدر لگاتار وصیت کرتے رہے کہ مجھے گمان ہونے لگا کہ شاید پڑوسی کو وراثت میں بھی حصہ دار بنا دیا جائے گا؛ اور جو شخص اللہ اور آخرت پر ایمان رکھتا ہے وہ اپنے پڑوسی کو ہرگز تکلیف نہ پہنچائے۔",
      ro: "Jibrael (A.S) mujhe hamsaye ke huqooq ke baray mein is qadar lagatar wasiyat karte rahe ke mujhe guman hone laga ke shayad padosi ko wirasat mein bhi hissa-dar bana diya jayega; aur jo shakhs Allah aur akhirat par eman rakhta hai woh apne padosi ko hargiz takleef na pohanchaye.",
      en: "Jibril continued to advise me regarding kind treatment of the neighbor until I thought he would make the neighbor an heir to one's inheritance; whoever believes in Allah and the Last Day must never harm their neighbor."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ہمسایہ انسان کے دکھ سکھ کا سب سے پہلا گواہ ہوتا ہے۔ گلی میں راستہ روکنا، اونچی آواز سے شور کرنا یا پڑوسی کے گھر کی بے پردگی کرنا ایمان کے منافی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے ہمسایوں کی خبرگیری کریں، خوشی و غمی میں ان کا ساتھ دیں اور اپنی ذات سے انہیں مکمل امن فراہم کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hamsaya insan ke dukh-sukh ka sab se pehla gawah hota hai. Gali mein rasta rokna, oonchi aawaz se shor karna ya padosi ke ghar ki be-pardgi karna eman ke manafi hai. Aaj ka amli sabaq yeh hai ke apne hamsayon ki khabargeeri karein, khushi o ghami mein un ka sath dein aur apni zaat se unhein mukammal aman faraham karein.",
      en: "Context & Practical Lesson: Respecting neighbors—by avoiding noise, obstruction, or intrusion, and sharing in their joys and hardships—is a direct reflection of living faith."
    },
    tags: [
      { ur: "حقوقِ ہمسایہ", ro: "Huqooq-e-Hamsaya", en: "Neighbor's Rights" },
      { ur: "حسنِ معاشرت", ro: "Husn-e-Muasharat", en: "Social Harmony" }
    ]
  },
  {
    id: "ma-365",
    slug: "mehman-ki-izzat-aur-bhali-baat-bolna-ya-khamosh-rehna",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 25",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مہمان کا اکرام اور اچھی بات کہنا یا خاموش رہنا",
      ro: "Mehman Ka Ikram Aur Achi Baat Kehna Ya Khamosh Rehna",
      en: "Honoring the Guest and Speaking Good or Remaining Silent"
    },
    quote: {
      ur: "جو شخص اللہ اور قیامت کے دن پر ایمان رکھتا ہے اسے چاہیے کہ اپنے مہمان کا عزت و اکرام کرے، اور جو شخص اللہ اور یومِ آخرت پر ایمان رکھتا ہے وہ یا تو بھلائی اور خیر کی بات کہے ورنہ خاموش رہے۔",
      ro: "Jo shakhs Allah aur qayamat ke din par eman rakhta hai usay chahiye ke apne mehman ka izzat o ikram kare, aur jo shakhs Allah aur yaum-e-akhirat par eman rakhta hai woh ya to bhalai aur khair ki baat kahe warna khamosh rahe.",
      en: "Whoever believes in Allah and the Last Day should honor their guest generously; and whoever believes in Allah and the Last Day should either speak words of goodness or remain silent."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مہمان اپنے نصیب کا رزق لے کر آتا ہے اور میزبان کے گھر سے گناہوں کی بخشش کا سبب بن کر جاتا ہے؛ اس کا اصل اکرام پرتکلف کھانوں سے زیادہ خندہ پیشانی اور میٹھے بول ہیں۔ آج کا عملی سبق یہ ہے کہ مہمان کی آمد کو رحمت سمجھیں اور اپنی گفتگو کو ہمیشہ خیر اور مثبت باتوں تک محدود رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Mehman apne naseeb ka rizq le kar aata hai aur mezban ke ghar se gunahon ki bakhshish ka sabab ban kar jata hai; us ka asal ikram pur-takalluf khanon se zyada khanda-peshani aur meethay bol hain. Aaj ka amli sabaq yeh hai ke mehman ki aamad ko rehmat samjhein aur apni guftugu ko hamesha khair aur musbat baaton tak mehdood rakhein.",
      en: "Context & Practical Lesson: Welcoming guests with a cheerful face brings blessing to the home, and filtering every word through the test of 'is it beneficial?' protects the tongue from regret."
    },
    tags: [
      { ur: "مہمان نوازی", ro: "Mehman-Nawazi", en: "Hospitality" },
      { ur: "حفظِ لسان", ro: "Hifz-e-Lisan", en: "Mindful Speech" }
    ]
  },
  {
    id: "ma-366",
    slug: "dhoka-dene-aur-milawat-karne-wala-hum-mein-se-nahi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim & Makhzan-e-Akhlaq - Page 27",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "کاروبار اور معاملات میں دھوکہ دہی اور ملاوٹ کی سخت مذمت",
      ro: "Karobar Aur Muamlat Mein Dhoka-Dahi Aur Milawat Ki Sakht Mazammat",
      en: "Strict Prohibition of Deceit, Adulteration, and Fraud in Dealings"
    },
    quote: {
      ur: "جس شخص نے لوگوں کو دھوکہ دیا اور ملاوٹ یا فریب سے کام لیا وہ ہمارے طریقے پر نہیں ہے؛ خرید و فروخت کرنے والے اگر سچ بولیں اور چیز کا عیب واضح کر دیں تو ان کے سودے میں برکت ڈال دی جاتی ہے، اور اگر جھوٹ بولیں اور عیب چھپائیں تو برکت مٹا دی جاتی ہے۔",
      ro: "Jis shakhs ne logon ko dhoka diya aur milawat ya fareeb se kaam liya woh hamare tareeqay par nahi hai; khareed-o-farokht karne wale agar sach bolein aur cheez ka aib wazeh kar dein to un ke sauday mein barkat daal di jati hai, aur agar jhoot bolein aur aib chhupayein to barkat mita di jati hai.",
      en: "Whoever deceives or cheats people is not one of us; if both parties in a transaction speak the truth and disclose any defect, their trade is blessed, whereas if they lie and conceal defects, the blessing of their transaction is erased."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضور اکرم ﷺ نے بازار میں غلے کے ڈھیر کے نیچے بھیگا ہوا غلہ چھپانے والے کو تنبیہ کرتے ہوئے یہ تاریخی جملہ ارشاد فرمایا۔ عیب چھپا کر وقتی منافع تو کمایا جا sakta ہے مگر اس سے کاروبار کی برکت اٹھ جاتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے گاہک اور کلائنٹ کو چیز کی اصل حقیقت سچائی سے بتائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Huzoor Akram ﷺ ne bazar mein ghallay ke dher ke neechay bheega huwa ghalla chhupane wale ko tanbeeh karte huye yeh tareekhi jumla irshad farmaya. Aib chhupa kar waqti munafa to kamaya ja sakta hai magar us se karobar ki barkat uth jati hai. Aaj ka amli sabaq yeh hai ke apne gahak aur client ko cheez ki asal haqeeqat sachai se batayein.",
      en: "Context & Practical Lesson: Concealing product flaws or misleading clients may yield quick cash, but it destroys trust and spiritual blessing. Complete transparency is the secret to lasting business success."
    },
    tags: [
      { ur: "دیانتِ تجارت", ro: "Diyanat-e-Tijarat", en: "Honest Trade" },
      { ur: "برکتِ رزق", ro: "Barkat-e-Rizq", en: "Blessed Provision" }
    ]
  },
  {
    id: "ma-367",
    slug: "ghar-ke-kaam-kaaj-mein-ahl-e-khana-ka-hath-batana",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 47",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "اپنا کام اپنے ہاتھ سے کرنا اور گھر کے کام کاج میں ہاتھ بٹانا",
      ro: "Apna Kaam Apne Hath Se Karna Aur Ghar Ke Kaam-Kaaj Mein Hath Batana",
      en: "Doing One's Own Chores and Helping the Family at Home"
    },
    quote: {
      ur: "رسول اللہ ﷺ جب گھر میں تشریف فرما ہوتے تو اپنے گھر والوں کے کام کاج میں ان کا ہاتھ بٹاتے، اپنے کپڑوں میں خود پیوند لگا لیتے، اپنے جوتے مبارک خود گانٹھ لیتے اور اپنے ذاتی کام اپنے دستِ مبارک سے انجام دیتے۔",
      ro: "Rasool Allah ﷺ jab ghar mein tashreef-farma hote to apne ghar walon ke kaam-kaaj mein un ka hath batate, apne kapron mein khud paiwand laga lete, apne jootay mubarak khud ganth lete aur apne zaati kaam apne dast-e-mubarak se anjam dete.",
      en: "When at home, the Messenger of Allah ﷺ actively assisted his family with household chores, mended his own clothes, repaired his own sandals, and attended to personal tasks with his own hands."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سیدہ عائشہ صدیقہؓ کی یہ گواہی ان لوگوں کے لیے مشعلِ راہ ہے جو باہر تو خوش اخلاق بنتے ہیں مگر گھر آ کر افسر بن کر بیٹھ جاتے ہیں۔ اپنا کام خود کرنا اور گھر والوں کا بوجھ بانٹنا مرد کی شان گھٹاتا نہیں بلکہ بڑھاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے ذاتی کام خود کریں اور گھر میں اہلِ خانہ کے ساتھ تعاون اور محبت کا ماحول رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sayyidah Aisha Siddiqa (R.A) ki yeh gawahi un logon ke liye mash'al-e-raah hai jo bahar to khush-akhlaq bante hain magar ghar aa kar afsar ban kar baith jate hain. Apna kaam khud karna aur ghar walon ka bojh bantna mard ki shaan ghatata nahi balkay barhata hai. Aaj ka amli sabaq yeh hai ke apne zaati kaam khud karein aur ghar mein ahl-e-khana ke sath taawun aur mohabbat ka mahool rakhein.",
      en: "Context & Practical Lesson: True nobility begins at home: serving one's family and handling personal chores without arrogance builds deep domestic love and humility."
    },
    tags: [
      { ur: "خدمتِ اہلِ خانہ", ro: "Khidmat-e-Ahl-e-Khana", en: "Serving Family" },
      { ur: "خود انحصاری", ro: "Khud-Inhisari", en: "Self-Reliance" }
    ]
  },
  {
    id: "ma-368",
    slug: "har-mukhatib-ko-poori-tawajjo-dena-aur-baat-na-kaatna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Shamail Tirmidhi & Makhzan-e-Akhlaq - Page 48",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "مخاطب کو مکمل توجہ دینا اور کبھی کسی کی بات نہ کاٹنا",
      ro: "Mukhatib Ko Mukammal Tawajjo Dena Aur Kabhi Kisi Ki Baat Na Kaatna",
      en: "Giving Undivided Attention and Never Interrupting a Speaker"
    },
    quote: {
      ur: "حضور اکرم ﷺ جب کسی سے گفتگو فرماتے تو صرف گردن موڑ کر نہیں بلکہ پورے جسمِ اطہر کے ساتھ اس کی طرف متوجہ ہوتے، اور کسی شخص کی بات درمیان میں کبھی نہ کاٹتے یہاں تک کہ وہ خود اپنی بات مکمل کر کے خاموش ہو جاتا۔",
      ro: "Huzoor Akram ﷺ jab kisi se guftugu farmate to sirf gardan mor kar nahi balkay pooray jism-e-athar ke sath us ki taraf mutawajjah hote, aur kisi shakhs ki baat darmiyan mein kabhi na kaat'te yahan tak ke woh khud apni baat mukammal kar ke khamosh ho jata.",
      en: "Whenever the Prophet ﷺ spoke with someone, he turned toward them completely with his entire body rather than just a glance, and he never interrupted anyone mid-speech until they finished speaking on their own."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: آپ ﷺ ہر ملنے والے کو اتنی بھرپور توجہ دیتے تھے کہ ہر صحابی یہ سمجھتا تھا کہ حضور ﷺ سب سے زیادہ مجھ ہی سے محبت فرماتے ہیں۔ آج کے دور میں لوگ بات کرتے وقت موبائل سکرین میں گم رہتے ہیں یا دوسرے کی بات آدھی کاٹ دیتے ہیں۔ آج کا عملی سبق یہ ہے کہ جب کوئی آپ سے بات کرے تو موبائل ایک طرف رکھ کر پوری عزت اور توجہ سے اس کی بات سنیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aap ﷺ har milne wale ko itni bharpoor tawajjo dete thay ke har Sahabi yeh samajhta tha ke Huzoor ﷺ sab se zyada mujh hi se mohabbat farmate hain. Aaj ke daur mein log baat karte waqt mobile screen mein gum rehte hain ya doosre ki baat aadhi kaat dete hain. Aaj ka amli sabaq yeh hai ke jab koi aap se baat kare to mobile aik taraf rakh kar poori izzat aur tawajjo se us ki baat sunein.",
      en: "Context & Practical Lesson: Listening attentively without interrupting or glancing at distractions honors the speaker's dignity and builds profound human connection."
    },
    tags: [
      { ur: "آدابِ سماعت", ro: "Aadab-e-Sama'at", en: "Active Listening" },
      { ur: "اکرامِ مخاطب", ro: "Ikram-e-Mukhatib", en: "Respecting Others" }
    ]
  },
  {
    id: "ma-369",
    slug: "chaar-amalon-ke-badlay-chaar-inaam-zamanat-hain",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 72",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "چار اعمال کے ساتھ چار الٰہی انعامات کا اٹل وعدہ",
      ro: "Chaar Aamalon Ke Sath Chaar Ilahi Inaamat Ka Atal Wada",
      en: "Four Spiritual Practices Guaranteed to Unlock Four Divine Gifts"
    },
    quote: {
      ur: "جس شخص کو چار چیزوں کی توفیق مل گئی وہ چار انعامات سے کبھی محروم نہیں رہتا: جسے شکر کی توفیق ملی وہ نعمت کے اضافے سے محروم نہیں ہوتا، جسے توبہ نصیب ہوئی وہ قبولیت سے محروم نہیں ہوتا، جس نے استخارہ کیا وہ بھلائی سے، اور جس نے مشورہ کیا وہ درست فیصلے سے محروم نہیں ہوتا۔",
      ro: "Jis shakhs ko chaar cheezon ki taufeeq mil gayi woh chaar inaamat se kabhi mehroom nahi rehta: jisay shukr ki taufeeq mili woh nemat ke izafay se mehroom nahi hota, jisay tauba naseeb hui woh qabooliyat se mehroom nahi hota, jis ne istikhara kiya woh bhalai se, aur jis ne mashwara kiya woh durust faislay se mehroom nahi hota.",
      en: "Whoever is blessed with four practices is never deprived of four outcomes: one who gives thanks is never deprived of increase; one who repents is never denied acceptance; one who seeks Allah's guidance is never deprived of good; and one who consults the wise is never deprived of sound judgment."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سیدنا ابوبکر صدیقؓ نے قرآن و سنت کے وعدوں کا نچوڑ ان چار اصولوں میں بیان فرما دیا ہے۔ زندگی کی الجھنوں میں جب انسان شکر، توبہ، دعا اور مشورے کو اپنا معمول بنا لیتا ہے تو وہ ٹھوکر کھانے سے محفوظ رہتا ہے۔ آج کا عملی سبق یہ ہے کہ ہر اہم کام میں رب سے خیر مانگیں اور تجربہ کار مخلص لوگوں سے مشورہ ضرور لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sayyiduna Abu Bakr Siddiq (R.A) ne Quran o Sunnat ke wadon ka nichor in chaar usoolon mein bayan farma diya hai. Zindagi ki uljhanon mein jab insan shukr, tauba, dua aur mashwaray ko apna mamool bana leta hai to woh thokar khane se mehfooz rehta hai. Aaj ka amli sabaq yeh hai ke har ahem kaam mein Rab se khair mangein aur tajurba-kar mukhlis logon se mashwara zaroor lein.",
      en: "Context & Practical Lesson: Gratitude, repentance, prayerful guidance, and wise consultation form a fourfold shield against regret and poor decisions."
    },
    tags: [
      { ur: "شکر و مشاورت", ro: "Shukr o Mushawarat", en: "Gratitude & Counsel" },
      { ur: "بصیرت", ro: "Baseerat", en: "Sound Judgment" }
    ]
  },
  {
    id: "ma-370",
    slug: "thora-rizq-jo-kifayat-kare-ghafil-karne-wale-maal-se-behtar",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 78",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "کفایت کرنے والا تھوڑا رزق غافل کر دینے والی کثیر دولت سے بہتر ہے",
      ro: "Kifayat Karne Wala Thora Rizq Ghafil Kar Dene Wali Kaseer Daulat Se Behtar Hai",
      en: "Modest Provision That Suffices is Better Than Wealth That Distracts"
    },
    quote: {
      ur: "وہ تھوڑا سا حلال رزق جو انسان کی ضرورت کو کفایت کر جائے، اس بہت سارے مال و دولت سے کہیں بہتر ہے جو انسان کو اللہ کی یاد اور اس کے حقوق سے غافل کر دے؛ اور قرض کے بوجھ سے بچو کیونکہ اس کی ابتداء غم ہے اور اس کا انجام رسوائی۔",
      ro: "Woh thora sa halal rizq jo insan ki zaroorat ko kifayat kar jaye, us bohot saray maal-o-daulat se kahin behtar hai jo insan ko Allah ki yaad aur us ke huqooq se ghafil kar de; aur qarz ke bojh se bacho kyunkeh us ki ibtida gham hai aur us ka anjam ruswai.",
      en: "A modest lawful provision that suffices your needs is far better than abundant wealth that distracts you from obedience; and beware of unnecessary debt, for it begins as night-time anxiety and ends as daytime humiliation."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اکثر لوگ جھوٹا معیارِ زندگی برقرار رکھنے کے لیے قرض لیتے ہیں یا رات دن مال کی دوڑ میں اپنا چین اور عبادت گنوا بیٹھتے ہیں۔ آج کا عملی سبق یہ ہے کہ اپنی چادر دیکھ کر پاؤں پھیلائیں، بلا ضرورت قرض لینے سے بچیں اور باوقار سادگی میں اپنے دل کا سکون تلاش کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aksar log jhoota miyar-e-zindagi barqarar rakhne ke liye qarz lete hain ya raat-din maal ki daur mein apna chain aur ibadat ganwa baithte hain. Aaj ka amli sabaq yeh hai ke apni chadar dekh kar paon phailayein, bila zaroorat qarz lene se bachein aur ba-waqar sadgi mein apne dil ka sukoon talash karein.",
      en: "Context & Practical Lesson: Living within your means and avoiding needless debt preserves both spiritual focus and personal dignity."
    },
    tags: [
      { ur: "قناعت و سادگی", ro: "Qana'at o Sadgi", en: "Contentment" },
      { ur: "قرض سے احتیاط", ro: "Qarz Se Ehtiyat", en: "Avoiding Debt" }
    ]
  },
  {
    id: "ma-371",
    slug: "duniya-ka-gham-dil-ki-tariki-aur-akhirat-ki-fikr-noor-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 88",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "دنیا کا غم دل میں تاریکی اور آخرت کی فکر نور پیدا کرتی ہے",
      ro: "Duniya Ka Gham Dil Mein Tareeki Aur Akhirat Ki Fikr Noor Paida Karti Hai",
      en: "Worldly Anxiety Darkens the Heart While Concern for Eternity Illuminates It"
    },
    quote: {
      ur: "دنیا کے لالچ اور حسرت کا غم دل میں اندھیرا اور بے چینی پیدا کرتا ہے، جبکہ آخرت کی جواب دہی اور نیکی کی فکر انسان کے دل میں نور اور بصیرت جگا دیتی ہے۔",
      ro: "Duniya ke lalach aur hasrat ka gham dil mein andhera aur be-chaini paida karta hai, jabkeh akhirat ki jawab-dahi aur neki ki fikr insan ke dil mein noor aur baseerat jaga deti hai.",
      en: "Grieving over worldly cravings casts darkness and restlessness into the heart, whereas mindfulness of the Hereafter fills the soul with light and clarity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضرت عثمان غنیؓ خود مکہ و مدینہ کے کامیاب ترین تاجر تھے، مگر انہوں نے دنیا کو ہاتھ میں رکھا، دل میں نہیں بسایا۔ جب دنیا کا نقصان دل پر سوار ہو جائے تو انسان مایوسی کے اندھیرے میں ڈوب jata ہے، لیکن جب نظر ابدی منزل پر ہو تو دنیا کی مشکلات ہلکی لگتی ہیں۔ آج کا عملی سبق یہ ہے کہ دنیاوی محنت ضرور کریں مگر دل کا چین صرف رضائے الٰہی سے وابستہ رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hazrat Usman Ghani (R.A) khud Makkah o Madinah ke kamyab-tareen tajir thay, magar unhon ne duniya ko hath mein rakha, dil mein nahi basaya. Jab duniya ka nuqsan dil par sawar ho jaye to insan mayousi ke andheray mein doob jata hai, لیکن jab nazar abadi manzil par ho to duniya ki mushkilat halki lagti hain. Aaj ka amli sabaq yeh hai ke dunyawi mehnat zaroor karein magar dil ka chain sirf raza-e-Ilahi se wabasta rakhein.",
      en: "Context & Practical Lesson: Keep worldly business in your hands rather than your heart; anchoring your ultimate purpose in eternal values protects the mind from despair."
    },
    tags: [
      { ur: "بصیرتِ قلب", ro: "Baseerat-e-Qalb", en: "Inner Clarity" },
      { ur: "فکرِ آخرت", ro: "Fikr-e-Akhirat", en: "Eternal Perspective" }
    ]
  },
  {
    id: "ma-372",
    slug: "adab-behtareen-miras-hai-aur-husn-e-akhlaq-behtareen-rafeeq",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 96",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "ادب بہترین میراث ہے اور خوش اخلاقی سب سے اچھا ساتھی",
      ro: "Adab Behtareen Miras Hai Aur Khush-Akhlaqi Sab Se Acha Sathi",
      en: "Good Manners Are the Finest Inheritance and Best Companion"
    },
    quote: {
      ur: "شائستگی اور ادب جیسی کوئی میراث نہیں، عقل و تدبر جیسا کوئی مال نہیں، عاجزی جیسی کوئی عزت نہیں، اور حسنِ اخلاق جیسا کوئی بہترین رفیق اور ساتھی نہیں۔",
      ro: "Shaistagi aur adab jaisi koi miras nahi, aqal o tadabbur jaisa koi maal nahi, aajizi jaisi koi izzat nahi, aur husn-e-akhlaq jaisa koi behtareen rafeeq aur sathi nahi.",
      en: "There is no inheritance nobler than good manners, no wealth richer than wisdom, no honor higher than humility, and no companion truer than a gentle character."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: والدین اولاد کے لیے زمین و جائیداد چھوڑ جائیں اور ادب نہ سکھائیں تو بدتمیزی اس جائیداد کو بھی اجاڑ دیتی ہے؛ لیکن اگر اولاد کو ادب، عقل مندی اور خوش اخلاقی کی میراث دی جائے تو وہ خالی ہاتھ بھی زمانے میں عزت اور کامیابی کما لیتے ہیں۔ آج کا عملی سبق یہ ہے کہ اپنے بچوں کی اخلاقی تربیت اور ادب کو اپنی سب سے بڑی سرمایہ کاری بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Walideen aulad ke liye zameen o jaidad chhor jayein aur adab na sikhayein to bad-tameezi us jaidad ko bhi ujar deti hai; lekin agar aulad ko adab, aqal-mandi aur khush-akhlaqi ki miras di jaye to woh khali hath bhi zamane mein izzat aur kamyabi kama lete hain. Aaj ka amli sabaq yeh hai ke apne bachon ki akhlaqi tarbiyat aur adab ko apni sab se badi sarmaya-kari banayein.",
      en: "Context & Practical Lesson: Material inheritances can vanish overnight, but instilling manners, humility, and wisdom in one's children equips them for lifelong respect."
    },
    tags: [
      { ur: "ادب و تربیت", ro: "Adab o Tarbiyat", en: "Manners & Upbringing" },
      { ur: "حسنِ اخلاق", ro: "Husn-e-Akhlaq", en: "Good Character" }
    ]
  },
  {
    id: "ma-373",
    slug: "do-baatein-hamesha-yaad-rakho-aur-do-bhool-jao",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 103",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "زندگی کا سنہرا اصول: دو باتیں یاد رکھو اور دو باتیں بھول جاؤ",
      ro: "Zindagi Ka Sunehra Usool: Do Baatein Yaad Rakho Aur Do Baatein Bhool Jao",
      en: "Remember Two Things Always and Forget Two Things Forever"
    },
    quote: {
      ur: "اے میرے بیٹے! زندگی میں دو باتیں ہمیشہ یاد رکھنا اور دو باتیں ہمیشہ کے لیے بھول جانا؛ جن دو کو یاد رکھنا ہے وہ اللہ تعالیٰ کی عظمت اور موت کی حاضری ہے، اور جن دو کو بھول جانا ہے وہ تیرا کسی پر کیا ہوا احسان اور کسی کی تیرے ساتھ کی گئی زیادتی ہے۔",
      ro: "Aye mere betay! Zindagi mein do baatein hamesha yaad rakhna aur do baatein hamesha ke liye bhool jana; jin do ko yaad rakhna hai woh Allah Ta'ala ki azmat aur maut ki haziri hai, aur jin do ko bhool jana hai woh tera kisi par kiya huwa ehsan aur kisi ki tere sath ki gayi ziyadati hai.",
      en: "O my son! Keep two things ever in mind and erase two things from your memory: always remember the majesty of Allah and the certainty of death, and completely forget the favors you have done for others and the wrongs others have done to you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: المیہ یہ ہے کہ انسان اس نصیحت کا الٹ کرتا ہے: اللہ اور موت کو بھول جاتا ہے، اور اپنا احسان و دوسروں کی غلطیاں زندگی بھر گنتا رہتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنی نیکی کر کے دریا میں ڈال دیں اور لوگوں کی پرانی تلخیوں کو ذہن سے جھٹک کر دل کو ہلکا پھلکا کر لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Almiya yeh hai ke insan is nasihat ka ulat karta hai: Allah aur maut ko bhool jata hai, aur apna ehsan o doosron ki ghaltiyan zindagi bhar ginta rehta hai. Aaj ka amli sabaq yeh hai ke apni neki kar ke darya mein daal dein aur logon ki purani talkhiyon ko zehn se jhatak kar dil ko halka-phulka kar lein.",
      en: "Context & Practical Lesson: Holding onto past grievances and boasting of past favors burdens the soul; forgetting both while staying mindful of God liberates the heart."
    },
    tags: [
      { ur: "سکونِ قلب", ro: "Sukoon-e-Qalb", en: "Peace of Mind" },
      { ur: "حکمتِ لقمان", ro: "Hikmat-e-Luqman", en: "Luqman's Wisdom" }
    ]
  },
  {
    id: "ma-374",
    slug: "waqt-talwar-ki-manind-hai-ghafillat-se-bacho",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 270 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "وقت ایک تیز دھار تلوار ہے اور ٹال مٹول ناکامی کی جڑ",
      ro: "Waqt Aik Tez-Dhar Talwar Hai Aur Taal-Matol Nakami Ki Jarr",
      en: "Time is a Sharp Sword and Procrastination is the Root of Regret"
    },
    quote: {
      ur: "وقت ایک تیز دھار تلوار کی مانند ہے، اگر تم اسے بامقصد محنت اور خیر کے کاموں میں استعمال کر کے نہیں کاٹو گے تو وہ تمہاری عمر کو بے فائدہ کاٹ دے گا؛ اور آج کا کام کل پر ٹالنے والا شخص کبھی منزل تک نہیں پہنچتا۔",
      ro: "Waqt aik tez-dhar talwar ki manind hai, agar tum usay ba-maqsad mehnat aur khair ke kaamon mein istemal kar ke nahi kato ge to woh tumhari umar ko be-faida kaat dega; aur aaj ka kaam kal par talne wala shakhs kabhi manzil tak nahi pohanchta.",
      en: "Time is like a sharp double-edged sword: if you do not cut through it with purposeful work, it will cut away your life in vain; one who delays today's duty until tomorrow never reaches their destination."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: گیا ہوا مال محنت سے واپس آ سکتا ہے، کھوئی ہوئی صحت علاج سے بحال ہو سکتی ہے، مگر گزرا ہوا ایک لمحہ قیامت تک واپس نہیں آ سکتا۔ آج کا عملی سبق یہ ہے کہ ’کل سے شروع کروں گا‘ کا دھوکہ چھوڑیں اور اپنے آج کے فرض کو آج ہی مکمل کرنے کی عادت ڈالیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Gaya huwa maal mehnat se wapis aa sakta hai, khoi hui sehat ilaj se bahal ho sakti hai, magar guzra huwa aik lamha qayamat tak wapis nahi aa sakta. Aaj ka amli sabaq yeh hai ke 'kal se shuru karunga' ka dhoka chhorein aur apne aaj ke farz ko aaj hi mukammal karne ki aadat dalein.",
      en: "Context & Practical Lesson: Lost wealth can be earned back, but a wasted hour is gone forever. Overcome procrastination by acting on today's responsibilities immediately."
    },
    tags: [
      { ur: "قیمتی وقت", ro: "Qeemati Waqt", en: "Value of Time" },
      { ur: "عمل و مستعدی", ro: "Amal o Mustaidi", en: "Discipline" }
    ]
  },
  {
    id: "ma-375",
    slug: "sachai-ka-ahad-aur-dakuon-ke-qafilay-ki-tauba",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 356 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "ماں سے کیے گئے سچ کے عہد نے ڈاکوؤں کے پورے گروہ کی زندگی بدل دی",
      ro: "Maa Se Kiye Gaye Sach Ke Ahad Ne Dakuon Ke Pooray Giroh Ki Zindagi Badal Di",
      en: "How a Young Traveler's Pledge of Truthfulness Reformed a Band of Robbers"
    },
    quote: {
      ur: "طالبِ علم قافلے پر ڈاکوؤں نے حملہ کیا اور ایک نوجوان سے پوچھا کہ تمہارے پاس کیا ہے؟ نوجوان نے بے خوف ہو کر بتایا کہ میری گدڑی میں چالیس اشرفیاں سلی ہوئی ہیں؛ سردار نے حیران ہو کر پوچھا کہ چھپانے کے بجائے سچ کیوں بولا؟ نوجوان نے کہا: میں نے اپنی ماں سے سچ کا عہد کیا تھا؛ یہ سن کر سردار رو پڑا کہ تو ماں کا عہد نہیں توڑتا اور میں برسوں سے اپنے رب کا عہد توڑ رہا ہوں۔",
      ro: "Talib-e-ilm qafilay par dakuon ne hamla kiya aur aik naujawan se poocha ke tumhare paas kya hai? Naujawan ne be-khauf ho kar bataya ke meri gudri mein chalees ashrafiyan sili hui hain; sardar ne hairan ho kar poocha ke chhupane ke bajaye sach kyon bola? Naujawan ne kaha: Main ne apni maa se sach ka ahad kiya tha; yeh sun kar sardar ro para ke tu maa ka ahad nahi torta aur main barson se apne Rab ka ahad tor raha hoon.",
      en: "When highway robbers raided a caravan, a young student openly declared the forty gold coins sewn inside his coat; asked by the astonished chief why he revealed his hidden savings, the youth replied, 'I promised my mother I would never lie'—moving the chief to tears of repentance for breaking his covenant with God."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضرت شیخ عبدالقادر جیلانیؒ کے بچپن کا یہ مشہور واقعہ بتاتا ہے کہ سچائی میں اتنی زبردست روحانی طاقت ہوتی ہے کہ وہ پتھر دل انسانوں کو بھی موم کر دیتی ہے اور مال و جان کی حفاظت کا سبب بنتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے بچوں کو بچپن ہی سے سچ بولنے کی ایسی پختہ عادت ڈالیں کہ وہ کسی خوف یا لالچ میں کبھی جھوٹ کا سہارا نہ لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hazrat Sheikh Abdul Qadir Jilani (R.H) ke bachpan ka yeh mashhoor waqia batata hai ke sachai mein itni zabardast roohani taqat hoti hai ke woh patthar-dil insanon ko bhi mom kar deti hai aur maal o jaan ki hifazat ka sabab banti hai. Aaj ka amli sabaq yeh hai ke apne bachon ko bachpan hi se sach bolne ki aisi pukhta aadat dalein ke woh kisi khauf ya lalach mein kabhi jhoot ka sahara na lein.",
      en: "Context & Practical Lesson: Unwavering truthfulness even in moments of fear carries a moral force capable of awakening sleeping consciences and transforming lives."
    },
    tags: [
      { ur: "طاقتِ صداقت", ro: "Taqat-e-Sadaqat", en: "Power of Truth" },
      { ur: "پاسِ عہد", ro: "Paas-e-Ahad", en: "Keeping Promises" }
    ]
  }
];

export const batch26Quotes: QuoteItem[] = [
  {
    id: "ma-376",
    slug: "jis-baat-ka-ilm-na-ho-us-ke-peechay-na-paro-kaan-aankh-aur-dil-ki-pursish",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:36) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بے تحقیق بات کے پیچھے نہ پڑنا: کان، آنکھ اور دل سب کی بازپرس ہوگی",
      ro: "Be-Tahqeeq Baat Ke Peechay Na Parna: Kaan, Aankh Aur Dil Sab Ki Baaz-Purs Hogi",
      en: "Do Not Pursue What You Know Not: Ears, Eyes, and Hearts Are Accountable"
    },
    quote: {
      ur: "اور جس بات کا تمہیں یقینی علم نہ ہو اس کے پیچھے مت پڑو؛ بے شک کان اور آنکھ اور دل، ان سب ہی کے بارے میں قیامت کے دن بازپرس ہونے والی ہے۔",
      ro: "Aur jis baat ka tumhein yaqeeni ilm na ho us ke peechay mat paro; be-shak kaan aur aankh aur dil, in sab hi ke baray mein qayamat ke din baaz-purs hone wali hai.",
      en: "And do not pursue that of which you have no certain knowledge; indeed, the hearing, the sight, and the heart—about all of these you will be questioned."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ بنی اسرائیل کی یہ آیت انسان کو اپنے حواس کا ذمہ دار بناتی ہے۔ بغیر علم کے کسی پر تہمت لگانا، جھوٹی گواہی دینا، کانوں سے غیبت سننا اور آنکھوں کا غلط استعمال کرنا سب قابلِ گرفت ہیں۔ آج کا عملی سبق یہ ہے کہ کچھ بھی دیکھنے، سننے یا شیئر کرنے سے پہلے یاد رکھیں کہ ہمارے ہر عضو کو اللہ کے حضور جواب دینا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Bani Isra'il ki yeh aayat insan ko apne hawas ka zimmedar banati hai. Baghair ilm ke kisi par tohmat lagana, jhooti gawahi dena, kaanon se gheebat sunna aur aankhon ka ghalat istemal karna sab qabil-e-girift hain. Aaj ka amli sabaq yeh hai ke kuch bhi dekhne, sunne ya share karne se pehle yaad rakhein ke hamare har uzw ko Allah ke huzoor jawab dena hai.",
      en: "Context & Practical Lesson: Surah Al-Isra establishes direct accountability for our senses and thoughts: guard what your eyes watch, what your ears listen to, and what your mind assumes without proof."
    },
    tags: [
      { ur: "حسابِ حواس", ro: "Hisab-e-Hawas", en: "Accountability" },
      { ur: "احتیاطِ کلام", ro: "Ehtiyat-e-Kalam", en: "Mindful Conduct" }
    ]
  },
  {
    id: "ma-377",
    slug: "paimana-poora-bharo-aur-seedhi-tarazu-se-tolo",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Isra (17:35) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "پیمانہ پورا بھرنا اور سیدھی ترازو سے تولنا ہی بہترین انجام ہے",
      ro: "Paimana Poora Bharna Aur Seedhi Tarazu Se Tolna Hi Behtareen Anjam Hai",
      en: "Giving Full Measure and Weighing with a Straight Balance"
    },
    quote: {
      ur: "اور جب تم کسی کو ناپ کر دو تو پیمانہ پورا بھرا کرو، اور بالکل سیدھی اور کھری ترازو کے ساتھ وزن کیا کرو؛ یہی طریقہ دنیا میں بھی بہتر ہے اور انجام کے اعتبار سے بھی سب سے اچھا ہے۔",
      ro: "Aur jab tum kisi ko naap kar do to paimana poora bhara karo, aur bilkul seedhi aur khari tarazu ke sath wazan kiya karo; yehi tareeqa duniya mein bhi behtar hai aur anjam ke aitbar se bhi sab se acha hai.",
      en: "And give full measure when you measure, and weigh with an even, honest balance; that is fairest in practice and best in the final outcome."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن حکیم نے تجارت کی دیانت کو ’احسن تاویلا‘ (انجام کے اعتبار سے بہترین) قرار دیا ہے کیونکہ کھرا تاجر وقتی طور پر چند گرام زیادہ دے دیتا ہے مگر بدلے میں گاہک کا مستقل اعتماد اور اللہ کی برکت پا لیتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے کاروبار اور خدمات میں گاہک کو طے شدہ مقدار اور معیار سے بڑھ کر پورا حق ادا کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran-e-Hakeem ne tijarat ki diyanat ko 'ahsanu taweela' (anjam ke aitbar se behtareen) qarar diya hai kyunkeh khara tajir waqti taur par chand gram zyada de deta hai magar badlay mein gahak ka mustaqil aitmad aur Allah ki barkat pa leta hai. Aaj ka amli sabaq yeh hai ke apne karobar aur khidmat mein gahak ko tay-shuda miqdar aur miyar se barh kar poora haq ada karein.",
      en: "Context & Practical Lesson: Honest measurement in trade and professional services builds enduring customer trust in this world and secures a blessed outcome in the Hereafter."
    },
    tags: [
      { ur: "عدلِ تجارت", ro: "Adal-e-Tijarat", en: "Fair Trade" },
      { ur: "حسنِ انجام", ro: "Husn-e-Anjam", en: "Blessed Outcome" }
    ]
  },
  {
    id: "ma-378",
    slug: "tum-mujhe-yaad-rakho-main-tumhein-yaad-rakhunga",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:152) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تم مجھے یاد رکھو میں تمہیں یاد رکھوں گا، اور میرا شکر ادا کرو",
      ro: "Tum Mujhe Yaad Rakho Main Tumhein Yaad Rakhunga, Aur Mera Shukr Ada Karo",
      en: "Remember Me and I Will Remember You; Be Grateful and Never Ungrateful"
    },
    quote: {
      ur: "پس تم مجھے یاد رکھو میں تمہیں یاد رکھوں گا، اور میرا شکر ادا کرتے رہو اور میری ناشکری مت کرو۔",
      ro: "Pas tum Mujhe yaad rakho Main tumhein yaad rakhunga, aur Mera shukr ada karte raho aur Meri nashukri mat karo.",
      en: "So remember Me; I will remember you. And be grateful to Me and do not deny My favors."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ایک کمزور انسان کے لیے اس سے بڑا شرف کیا ہو سکتا ہے کہ جب وہ اپنے خالق کو عبادت اور اطاعت سے یاد کرے تو عرش کا مالک اس بندے کو اپنی رحمت اور حفاظت کے ساتھ یاد فرمائے۔ آج کا عملی سبق یہ ہے کہ خوشحالی اور مصروفیت کے دنوں میں اللہ کو یاد رکھیں تاکہ آزمائش کے وقت رب کی رحمت آپ کو تھام لے۔",
      ro: "Pas-e-Manzar o Tashreeh: Aik kamzor insan ke liye is se bada sharaf kya ho sakta hai ke jab woh apne Khaliq ko ibadat aur ita'at se yaad kare to Arsh ka Malik us banday ko apni rehmat aur hifazat ke sath yaad farmaye. Aaj ka amli sabaq yeh hai ke khushhali aur masroofiyat ke dinon mein Allah ko yaad rakhein taake aazmaish ke waqt Rab ki rehmat aap ko tham le.",
      en: "Context & Practical Lesson: No honor compares to being remembered by the Creator; remembering God through obedience during ease ensures His special care during hardship."
    },
    tags: [
      { ur: "ذکر و شکر", ro: "Zikr o Shukr", en: "Remembrance & Gratitude" },
      { ur: "عنایتِ الٰہی", ro: "Inayat-e-Ilahi", en: "Divine Grace" }
    ]
  },
  {
    id: "ma-379",
    slug: "dene-wala-hath-aur-ghar-walon-ki-kafalat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 26",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دینے والا ہاتھ مانگنے والے ہاتھ سے بہتر ہے اور سوال سے بچنا",
      ro: "Dene Wala Hath Mangne Wale Hath Se Behtar Hai Aur Sawal Se Bachna",
      en: "The Upper Hand That Gives is Better Than the Lower Hand That Takes"
    },
    quote: {
      ur: "اوپر والا ہاتھ (خرچ کرنے اور دینے والا) نیچے والے ہاتھ (مانگنے والے) سے بہتر ہے، اور خرچ کرنے کی ابتداء اپنے زیرِ کفالت گھر والوں سے کرو؛ اور جو شخص سوال سے بچنا چاہتا ہے اللہ اسے پاکدامن اور خوددار بنا دیتا ہے۔",
      ro: "Oopar wala hath (kharch karne aur dene wala) neechay wale hath (mangne wale) se behtar hai, aur kharch karne ki ibtida apne zer-e-kafalat ghar walon se karo; aur jo shakhs sawal se bachna chahta hai Allah usay pakdaman aur khuddar bana deta hai.",
      en: "The upper hand that gives is better than the lower hand that asks, and begin your charity with those under your care; whoever strives to abstain from begging, Allah grants them dignity and self-sufficiency."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام محنت کر کے کمانے، اپنے بال بچوں کی کفالت کرنے اور دوسروں کو دینے والا بننے کی تعلیم دیتا ہے۔ بلا ضرورت لوگوں کے آگے ہاتھ پھیلانا عزتِ نفس کو مجروح کرتا ہے۔ آج کا عملی سبق یہ ہے کہ حلال محنت سے خود کفیل بنیں اور پہلے اپنے گھر والوں کی ضروریات خوش دلی سے پوری کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam mehnat kar ke kamane, apne baal-bachon ki kafalat karne aur doosron ko dene wala banne ki taleem deta hai. Bila zaroorat logon ke aagay hath phailana izzat-e-nafs ko majrooh karta hai. Aaj ka amli sabaq yeh hai ke halal mehnat se khud-kafeel banein aur pehle apne ghar walon ki zarooriyat khush-dili se poori karein.",
      en: "Context & Practical Lesson: Earning an honest living to provide for one's family and help others is far nobler than dependency; striving for self-reliance attracts divine sufficiency."
    },
    tags: [
      { ur: "خودداری", ro: "Khuddari", en: "Self-Respect" },
      { ur: "کفالتِ عیال", ro: "Kafalat-e-Ayal", en: "Supporting Family" }
    ]
  },
  {
    id: "ma-380",
    slug: "zulm-qayamat-ke-din-andheron-ki-soorat-mein-hoga",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim & Makhzan-e-Akhlaq - Page 27",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ظلم سے بچو کیونکہ ظلم قیامت کے دن اندھیروں کا سبب ہوگا",
      ro: "Zulm Se Bacho Kyunkeh Zulm Qayamat Ke Din Andheron Ka Sabab Hoga",
      en: "Beware of Injustice, for Oppression Will Be Darkness on the Day of Judgment"
    },
    quote: {
      ur: "ظلم کرنے سے بچو کیونکہ ظلم قیامت کے دن گھٹا ٹوپ اندھیروں کی صورت میں سامنے آئے گا؛ اور حرص و بخل سے بچو کیونکہ اسی حرص نے تم سے پہلی امتوں کو ہلاک کیا اور انہیں اپنوں کا خون بہانے پر آمادہ کیا۔",
      ro: "Zulm karne se bacho kyunkeh zulm qayamat ke din ghata-top andheron ki soorat mein samne aayega; aur hirs o bukhl se bacho kyunkeh isi hirs ne tum se pehli ummaton ko halak kiya aur unhein apnon ka khoon bahane par aamada kiya.",
      en: "Beware of injustice and oppression, for oppression will turn into layers of darkness on the Day of Judgment; and beware of greed and stinginess, for greed destroyed the nations before you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کسی کمزور کا حق دبانا، وراثت میں بہنوں یا یتیموں کا حصہ نہ دینا یا اپنے عہدے کا ناجائز فائدہ اٹھانا وہ ظلم ہے جو انسان کے ایمان کا نور چھین لیتا ہے۔ آج کا عملی سبق یہ ہے کہ مال کی حرص میں کبھی کسی انسان کے ساتھ زیادتی نہ کریں اور اگر کسی کا حق ذمے ہو تو دنیا ہی میں ادا کر کے معافی مانگ لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Kisi kamzor ka haq dabana, wirasat mein behnon ya yateemon ka hissa na dena ya apne ohday ka najaiz faida uthana woh zulm hai jo insan ke eman ka noor chheen leta hai. Aaj ka amli sabaq yeh hai ke maal ki hirs mein kabhi kisi insan ke sath ziyadati na karein aur agar kisi ka haq zimmay ho to duniya hi mein ada kar ke maafi mang lein.",
      en: "Context & Practical Lesson: Usurping the rights of the weak or letting greed override fairness extinguishes spiritual light; settle every human right in this world before the Day of Reckoning."
    },
    tags: [
      { ur: "ترکِ ظلم", ro: "Tark-e-Zulm", en: "Avoiding Oppression" },
      { ur: "ادائے حقوق", ro: "Ada-e-Huqooq", en: "Fulfilling Rights" }
    ]
  },
  {
    id: "ma-381",
    slug: "har-haqdar-ko-us-ka-haq-do-jism-aur-ghar-walon-ka-haq",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 28",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اعتدال کی تعلیم: تمہاری صحت اور گھر والوں کا بھی تم پر حق ہے",
      ro: "Aitdaal Ki Taleem: Tumhari Sehat Aur Ghar Walon Ka Bhi Tum Par Haq Hai",
      en: "Give Every Rightful Claimant Their Due: Your Body and Family Have Rights"
    },
    quote: {
      ur: "بے شک تمہارے پروردگار کا تم پر حق ہے، تمہارے اپنے جسم اور صحت کا بھی تم پر حق ہے، اور تمہارے اہل و عیال کا بھی تم پر حق ہے؛ لہٰذا ہر حقدار کو اس کا پورا حق ادا کرو۔",
      ro: "Be-shak tumhare Parwardigar ka tum par haq hai, tumhare apne jism aur sehat ka bhi tum par haq hai, aur tumhare ahl-o-ayal ka bhi tum par haq hai; lehaza har haqdar ko us ka poora haq ada karo.",
      en: "Indeed, your Lord has a right over you, your own body has a right over you, and your family has a right over you; so give to each rightful claimant their proper due."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اسلام رہبانیت یا انتہا پسندی کا دین نہیں ہے؛ نہ رات بھر جاگ کر اپنی صحت تباہ کرنے کی اجازت ہے اور نہ کام کے جنون میں بیوی بچوں کو نظر انداز کرنے کی۔ آج کا عملی سبق یہ ہے کہ اپنی عبادت، نیند و صحت، کاروبار اور بیوی بچوں کے حقوق میں خوبصورت توازن قائم رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Islam rahbaniyat ya intiha-pasandi ka deen nahi hai; na raat bhar jaag kar apni sehat tabah karne ki ijazat hai aur na kaam ke junoon mein biwi-bachon ko nazar-andaz karne ki. Aaj ka amli sabaq yeh hai ke apni ibadat, neend o sehat, karobar aur biwi-bachon ke huqooq mein khoobsurat tawazun qayam rakhein.",
      en: "Context & Practical Lesson: Islam champions holistic balance: caring for one's physical health and spending meaningful time with family are sacred duties alongside worship and work."
    },
    tags: [
      { ur: "توازنِ حقوق", ro: "Tawazun-e-Huqooq", en: "Balanced Rights" },
      { ur: "اعتدال", ro: "Aitdaal", en: "Moderation" }
    ]
  },
  {
    id: "ma-382",
    slug: "das-saal-ki-khidmat-mein-khadim-ko-kabhi-na-dantna",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 49",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "دس سالہ خدمت میں خادم کو کبھی نہ ڈانٹنے کا بے مثال اخلاق",
      ro: "Das Sala Khidmat Mein Khadim Ko Kabhi Na Dantne Ka Be-Misal Akhlaq",
      en: "Ten Years of Service Without a Single Scolding or Harsh Word"
    },
    quote: {
      ur: "حضرت انس رضی اللہ عنہ فرماتے ہیں کہ میں نے دس سال تک رسول اللہ ﷺ کی خدمت کی، خدا کی قسم! آپ ﷺ نے مجھے کبھی ’اُف‘ تک نہیں کہا، اور نہ کبھی کسی کام پر یہ فرمایا کہ تو نے یہ کام کیوں کیا یا یہ کام کیوں نہیں کیا۔",
      ro: "Hazrat Anas (R.A) farmate hain ke main ne das saal tak Rasool Allah ﷺ ki khidmat ki, Khuda ki qasam! Aap ﷺ ne mujhe kabhi 'uff' tak nahi kaha, aur na kabhi kisi kaam par yeh farmaya ke tu ne yeh kaam kyon kiya ya yeh kaam kyon nahi kiya.",
      en: "Hazrat Anas (R.A) testified: 'I served the Messenger of Allah ﷺ for ten years; by Allah, he never once said even \"uff\" to me, nor did he ever scold me by asking why I did something or why I failed to do something.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: دس سال کی طویل مدت میں ایک کم عمر خادم سے سینکڑوں بھول چوک ہونا فطری بات ہے، مگر سرورِ کائنات ﷺ کے حلم اور عفو کا یہ عالم تھا کہ کبھی ماتھے پر شکن تک نہ لائے۔ آج کا عملی سبق یہ ہے کہ اپنے گھر کے افراد، شاگردوں اور ماتحت ملازمین کی نادانستہ غلطیوں پر چیخنے چلانے کے بجائے نرمی اور درگزر سے کام لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Das saal ki taweel muddat mein aik kam-umar khadim se sainkron bhool-chook hona fitri baat hai, magar Sarwar-e-Kainat ﷺ ke hilm aur afw ka yeh aalam tha ke kabhi mathay par shikan tak na laye. Aaj ka amli sabaq yeh hai ke apne ghar ke afrad, shagirdon aur matehat mulazimeen ki nadanista ghaltiyon par cheekhne-chillane ke bajaye narmi aur darguzar se kaam lein.",
      en: "Context & Practical Lesson: Overlooking honest mistakes made by young helpers, employees, or children without losing one's temper is the pinnacle of prophetic forbearance."
    },
    tags: [
      { ur: "حلمِ نبوی ﷺ", ro: "Hilm-e-Nabawi ﷺ", en: "Prophetic Forbearance" },
      { ur: "شفقت بر ماتحت", ro: "Shafqat Bar Matehat", en: "Kindness to Subordinates" }
    ]
  },
  {
    id: "ma-383",
    slug: "hamesha-muskurata-chehra-aur-zaati-zaat-ke-liye-badla-na-lena",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 50",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "ہمیشہ مسکراتا چہرہ اور ذاتی رنجش کا کبھی بدلہ نہ لینا",
      ro: "Hamesha Muskurata Chehra Aur Zaati Ranjish Ka Kabhi Badla Na Lena",
      en: "A Perpetually Smiling Countenance and Never Seeking Personal Revenge"
    },
    quote: {
      ur: "رسول اللہ ﷺ تمام لوگوں میں سب سے زیادہ کشادہ رو اور متبسم چہرے والے تھے، اور آپ ﷺ نے اپنی ذاتی ذات کے معاملے میں کبھی کسی سے انتقام نہیں لیا، البتہ جہاں اللہ کی حدود پامال ہوتیں وہاں حق قائم فرماتے۔",
      ro: "Rasool Allah ﷺ tamam logon mein sab se zyada kushada-roo aur mutabassim chehray wale thay, aur Aap ﷺ ne apni zaati zaat ke muamlay mein kabhi kisi se intiqam nahi liya, albatta jahan Allah ki hudood pamal hotein wahan haq qayam farmate.",
      en: "The Messenger of Allah ﷺ had the most cheerful, smiling countenance among all people, and he never once took personal revenge for any wrong done to himself—acting firmly only when the sacred bounds of Allah were violated."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عام طور پر ہم دین یا اصول کے ٹوٹنے پر خاموش رہتے ہیں اور اپنی ذاتی انا کو ذرا سی ٹھیس لگے تو برسوں کی دشمنی پال لیتے ہیں، جبکہ اسوۂ نبوی ﷺ اس کے بالکل برعکس تھا۔ آج کا عملی سبق یہ ہے کہ اپنے چہرے پر مسکراہٹ سجائے رکھیں اور ذاتی انا کے جھگڑوں کو دل سے معاف کر کے بڑا ظرف دکھائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aam taur par hum deen ya usool ke tootne par khamosh rehte hain aur apni zaati ana ko zara si thees lagay to barson ki dushmani paal lete hain, jabkeh Uswah-e-Nabawi ﷺ is ke bilkul bar-aks tha. Aaj ka amli sabaq yeh hai ke apne chehray par muskurahat sajaye rakhein aur zaati ana ke jhagron ko dil se maaf kar ke bada zarf dikhayein.",
      en: "Context & Practical Lesson: Letting go of personal ego and petty grudges while greeting the world with a warm, approachable smile reflects true spiritual maturity."
    },
    tags: [
      { ur: "خندہ پیشانی", ro: "Khanda-Peshani", en: "Cheerful Demeanor" },
      { ur: "وسعتِ ظرف", ro: "Wus'at-e-Zarf", en: "Magnanimity" }
    ]
  },
  {
    id: "ma-384",
    slug: "neki-mein-jald-bazi-karo-kyunkeh-maut-taak-mein-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 73",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "نیکی کے کاموں میں جلدی کرو اور تکبر سے بچو",
      ro: "Neki Ke Kaamon Mein Jaldi Karo Aur Takabbur Se Bacho",
      en: "Hasten Toward Good Deeds and Beware of Pride over Earthly Origins"
    },
    quote: {
      ur: "نیکی کے کاموں میں جلدی کرو کیونکہ تمہارے پیچھے موت کا بلاوا تیزی سے آ رہا ہے؛ اور کوئی انسان مٹی سے پیدا ہو کر اور مٹی میں مل جانے کا یقین رکھتے ہوئے آخر کس بات پر تکبر کر سکتا ہے؟",
      ro: "Neki ke kaamon mein jaldi karo kyunkeh tumhare peechay maut ka bulawa tezi se aa raha hai; aur koi insan mitti se paida ho kar aur mitti mein mil jane ka yaqeen rakhte huye aakhir kis baat par takabbur kar sakta hai?",
      en: "Hasten to perform good deeds while you have strength, for the appointed hour approaches swiftly behind you; and how can a human being—created from dust and destined to return to dust—ever walk in arrogance?"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جب دل میں کسی کی مدد کرنے، صدقہ دینے یا کسی سے معافی مانگنے کا خیال آئے تو شیطان اسے کل پر ٹالنے کا وسوسہ ڈالتا ہے۔ اسی طرح انسان کی اصل حقیقت مٹی ہے اور مٹی کو غرور زیب نہیں دیتا۔ آج کا عملی سبق یہ ہے کہ خیر کے کام میں لمحہ بھر تاخیر نہ کریں اور ہمیشہ عاجزی سے زمین پر چلیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jab dil mein kisi ki madad karne, sadqa dene ya kisi se maafi mangne ka khayal aaye to shaitan usay kal par talne ka waswasa dalta hai. Isi tarah insan ki asal haqeeqat mitti hai aur mitti ko ghuroor zaib nahi deta. Aaj ka amli sabaq yeh hai ke khair ke kaam mein lamha bhar takheer na karein aur hamesha aajizi se zameen par chalein.",
      en: "Context & Practical Lesson: Act immediately whenever inspired to do a good deed, and remember our humble earthly origin to keep pride away from the heart."
    },
    tags: [
      { ur: "مسابقت بالخیرات", ro: "Musabaqat Bil-Khairat", en: "Hastening in Good" },
      { ur: "انکساری", ro: "Inkisari", en: "Humility" }
    ]
  },
  {
    id: "ma-385",
    slug: "apna-muhasaba-khud-kar-lo-is-se-pehle-ke-tumhara-hisab-liya-jaye",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 79",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "حساب لیے جانے سے پہلے خود اپنا محاسبہ کر لو",
      ro: "Hisab Liye Jane Se Pehle Khud Apna Muhasaba Kar Lo",
      en: "Hold Yourselves Accountable Today Before You Are Called to Account"
    },
    quote: {
      ur: "اے لوگو! آج خود اپنے نفس کا محاسبہ کر لو اس سے پہلے کہ کل تمہارا حساب لیا جائے، اور آج خود اپنے اعمال کو تول لو اس سے پہلے کہ وہ میزانِ عدل میں تولے جائیں۔",
      ro: "Aye logo! Aaj khud apne nafs ka muhasaba kar lo is se pehle ke kal tumhara hisab liya jaye, aur aaj khud apne aamaal ko tol lo is se pehle ke woh Mizan-e-Adal mein tolay jayein.",
      en: "Hold yourselves to account today before you are called to account tomorrow, and weigh your deeds with honesty before they are weighed upon the final Scale."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جس طرح ایک سمجھدار تاجر روزانہ رات کو اپنی دکان کا کھاتہ اور نفع نقصان چیک کرتا ہے تاکہ دیوالیہ نہ ہو جائے، اسی طرح مومن سونے سے پہلے اپنے دن بھر کے بول اور اعمال کا جائزہ لیتا ہے۔ آج کا عملی سبق یہ ہے کہ ہر رات سونے سے پہلے پانچ منٹ تنہائی میں بیٹھ کر سوچیں کہ آج مجھ سے کون سی بھلائی ہوئی اور کس کوتاہی کی تلافی کرنی ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Jis tarah aik samajhdar tajir rozana raat ko apni dukan ka khata aur nafa-nuqsan check karta hai taake diwaliya na ho jaye, isi tarah momin sone se pehle apne din bhar ke bol aur aamaal ka jaiza leta hai. Aaj ka amli sabaq yeh hai ke har raat sone se pehle paanch minute tanhai mein baith kar sochein ke aaj mujh se kaun si bhalai hui aur kis kotahi ki talafi karni hai.",
      en: "Context & Practical Lesson: Just as a wise merchant audits daily accounts to prevent bankruptcy, spending five quiet minutes each night reviewing our words and deeds keeps our moral compass sharp."
    },
    tags: [
      { ur: "محاسبۂ نفس", ro: "Muhasaba-e-Nafs", en: "Self-Accountability" },
      { ur: "اصلاحِ کردار", ro: "Islah-e-Kirdar", en: "Character Reform" }
    ]
  },
  {
    id: "ma-386",
    slug: "ghusse-ka-ilaj-khamoshi-hai-aur-sabr-kamyabi-ki-kunji",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 89",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "غصے کا بہترین علاج خاموشی ہے اور حیا ایمان کی زینت",
      ro: "Ghusse Ka Behtareen Ilaj Khamoshi Hai Aur Haya Eman Ki Zeenat",
      en: "Silence is the Best Cure for Anger and Modesty Crowns Faith"
    },
    quote: {
      ur: "غصے کی آگ بجھانے کا سب سے کارگر علاج خاموشی ہے؛ جس نے غصے کے لمحے میں اپنی زبان روک لی اس نے شیطان کو شکست دے دی اور اپنے رشتوں کو ٹوٹنے سے بچا لیا۔",
      ro: "Ghusse ki aag bujhane ka sab se kargar ilaj khamoshi hai; jis ne ghusse ke lamhay mein apni zaban rok li us ne shaitan ko shikast de di aur apne rishton ko tootne se bacha liya.",
      en: "Silence is the most effective remedy for extinguishing the fire of anger; whoever restrains their tongue in a moment of rage defeats Satan and saves their relationships from ruin."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: غصے کی حالت میں انسان کی عقل پر پردہ پڑ جاتا ہے اور اس وقت بولا گیا ایک کڑوا جملہ برسوں کے بنے ہوئے رشتے توڑ دیتا ہے۔ آج کا عملی سبق یہ ہے کہ جب بھی شدید غصہ آئے تو کوئی فیصلہ کرنے یا جواب دینے کے بجائے چند منٹ کے لیے بالکل خاموش ہو جائیں اور اپنی جگہ بدل لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Ghusse ki halat mein insan ki aqal par parda par jata hai aur us waqt bola gaya aik karwa jumla barson ke banay huye rishtay tor deta hai. Aaj ka amli sabaq yeh hai ke jab bhi shadeed ghussa aaye to koi faisla karne ya jawab dene ke bajaye chand minute ke liye bilkul khamosh ho jayein aur apni jagah badal lein.",
      en: "Context & Practical Lesson: Decisions and words spoken in the heat of anger almost always end in regret. Pausing in complete silence until the storm passes protects both dignity and family bonds."
    },
    tags: [
      { ur: "علاجِ غضب", ro: "Ilaj-e-Ghazab", en: "Overcoming Anger" },
      { ur: "خاموشی و بردباری", ro: "Khamoshi o Burdbari", en: "Composed Silence" }
    ]
  },
  {
    id: "ma-387",
    slug: "ilm-maal-se-behtar-hai-kyunkeh-ilm-tumhari-hifazat-karta-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 97",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "علم مال سے افضل ہے کیونکہ علم تمہاری حفاظت کرتا ہے",
      ro: "Ilm Maal Se Afzal Hai Kyunkeh Ilm Tumhari Hifazat Karta Hai",
      en: "Knowledge Excels Wealth Because Knowledge Guards You"
    },
    quote: {
      ur: "علم مال و دولت سے کہیں بہتر ہے، کیونکہ مال کی تمہیں چوکیداری کرنی پڑتی ہے جبکہ علم تمہاری حفاظت کرتا ہے؛ مال خرچ کرنے سے گھٹتا ہے جبکہ علم بانٹنے اور خرچ کرنے سے بڑھتا ہی چلا جاتا ہے۔",
      ro: "Ilm maal-o-daulat se kahin behtar hai, kyunkeh maal ki tumhein chaukidari karni parti hai jabkeh ilm tumhari hifazat karta hai; maal kharch karne se ghat'ta hai jabkeh ilm bantne aur kharch karne se barhta hi chala jata hai.",
      en: "Knowledge is far superior to wealth: you must guard your wealth, whereas knowledge guards you; wealth diminishes when spent, whereas knowledge multiplies the more you share it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بابِ علم سیدنا علی المرتضیٰؓ کا یہ قول علم کی لازوال عظمت بیان کرتا ہے۔ مالدار انسان ہر وقت چوری اور نقصان کے خوف میں رہتا ہے، جبکہ صاحبِ علم و ہنر جہاں بھی جائے اس کا علم اس کا محافظ اور عزت کا ضامن بن جاتا ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ کچھ نیا سیکھنے اور اپنے علم و ہنر کو دوسروں تک فراخدلی سے پہنچانے کی عادت بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bab-e-Ilm Sayyiduna Ali Al-Murtaza (R.A) ka yeh qoul ilm ki la-zawal azmat bayan karta hai. Maaldar insan har waqt chori aur nuqsan ke khauf mein rehta hai, jabkeh sahib-e-ilm o hunar jahan bhi jaye us ka ilm us ka muhafiz aur izzat ka zamin ban jata hai. Aaj ka amli sabaq yeh hai ke rozana kuch naya seekhne aur apne ilm o hunar ko doosron tak farakh-dili se pohanchane ki aadat banayein.",
      en: "Context & Practical Lesson: Material wealth requires constant guarding and shrinks when spent, whereas knowledge and skill protect you from error and grow richer every time you teach others."
    },
    tags: [
      { ur: "فضیلتِ علم", ro: "Fazeelat-e-Ilm", en: "Excellence of Knowledge" },
      { ur: "نشرِ علم", ro: "Nashr-e-Ilm", en: "Sharing Wisdom" }
    ]
  },
  {
    id: "ma-388",
    slug: "naram-jawab-ghusse-ki-aag-bujha-deta-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 106",
    author: {
      ur: "حکمتِ انبیاء علیہم السلام",
      ro: "Hikmat-e-Ambiya (A.S)",
      en: "Prophetic Wisdom"
    },
    title: {
      ur: "نرم جواب غصے کی آگ کو بجھا دیتا ہے اور سخت لفظ بھڑکاتا ہے",
      ro: "Naram Jawab Ghusse Ki Aag Ko Bujha Deta Hai Aur Sakht Lafz Bharkata Hai",
      en: "A Gentle Answer Turns Away Wrath While Harsh Words Stir Up Conflict"
    },
    quote: {
      ur: "نرم اور شائستہ جواب سامنے والے کے غصے کو ٹھنڈا کر دیتا ہے، جبکہ کڑوا اور سخت جملہ سوئے ہوئے فتنے کو جگا دیتا ہے؛ دانا کی زبان اس کے دل کے پیچھے ہوتی ہے اور نادان کا دل اس کی زبان کی نوک پر ہوتا ہے۔",
      ro: "Naram aur shaista jawab samne wale ke ghusse ko thanda kar deta hai, jabkeh karwa aur sakht jumla soye huye fitnay ko jaga deta hai; dana ki zaban us ke dil ke peechay hoti hai aur nadan ka dil us ki zaban ki nok par hota hai.",
      en: "A gentle, courteous answer cools down rising anger, whereas a harsh word ignites dormant conflict; the tongue of the wise rests behind their heart, while the heart of the foolish sits on the tip of their tongue."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جب دو افراد آمنے سامنے تیز بولنے لگیں تو بات انا کا مسئلہ بن جاتی ہے، لیکن اگر ایک فریق نرمی اور مسکراہٹ سے دھیمی بات کہہ دے تو پورا تنازع وہیں ختم ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ گھریلو یا کاروباری بحث میں اپنے لہجے کو نرم رکھ کر ماحول کو پرسکون بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jab do afrad aamne-samne tez bolne lagein to baat ana ka masla ban jati hai, لیکن agar aik fareeq narmi aur muskurahat se dheemi baat keh de to poora tanaza wahin khatam ho jata hai. Aaj ka amli sabaq yeh hai ke ghareloo ya karobari behas mein apne lehjay ko naram rakh kar mahool ko pur-sukoon banayein.",
      en: "Context & Practical Lesson: Responding to tension with a calm, measured voice immediately defuses hostility and keeps reason in control."
    },
    tags: [
      { ur: "نرم گفتاری", ro: "Naram-Guftari", en: "Gentle Speech" },
      { ur: "تدبر", ro: "Tadabbur", en: "Thoughtfulness" }
    ]
  },
  {
    id: "ma-389",
    slug: "teen-cheezein-lauta-kar-wapis-nahi-aatin",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 272 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "تین چیزیں لوٹ کر واپس نہیں آتیں: لفظ، وقت اور ٹوٹا ہوا اعتماد",
      ro: "Teen Cheezein Laut Kar Wapis Nahi Aatin: Lafz, Waqt Aur Toota Huwa Aitmad",
      en: "Three Things Never Return: A Spoken Word, Passed Time, and Broken Trust"
    },
    quote: {
      ur: "تین چیزیں ایک بار ہاتھ سے نکل جائیں تو کبھی لوٹ کر واپس نہیں آتیں: منہ سے نکلا ہوا لفظ، گزر جانے والا وقت، اور ہاتھ سے گنوایا ہوا موقع؛ اور چوتھی چیز ٹوٹا ہوا بھروسہ ہے جو جڑ بھی جائے تو اس میں گرہ باقی رہتی ہے۔",
      ro: "Teen cheezein aik bar hath se nikal jayein to kabhi laut kar wapis nahi aatin: munh se nikla huwa lafz, guzar jane wala waqt, aur hath se ganwaya huwa mauqa; aur chauthi cheez toota huwa bharosa hai jo jur bhi jaye to us mein girah baqi rehti hai.",
      en: "Three things, once released, can never be recalled: a word spoken from the tongue, a moment of time that has passed, and an opportunity neglected; and broken trust, even when mended, always retains a knot."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ریشم کی ڈور اگر ٹوٹ جائے تو اسے دوبارہ باندھا تو جا سکتا ہے مگر اس کے بیچ گرہ ہمیشہ محسوس ہوتی ہے؛ بالکل یہی مثال انسانی اعتماد اور زبان کے زخم کی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے الفاظ، اپنے وقت اور لوگوں کے اعتماد کی پوری احتیاط سے حفاظت کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Resham ki dor agar toot jaye to usay dobara bandha to ja sakta hai magar us ke beech girah hamesha mehsoos hoti hai; bilkul yehi misal insani aitmad aur zaban ke zakhm ki hai. Aaj ka amli sabaq yeh hai ke apne alfaz, apne waqt aur logon ke aitmad ki poori ehtiyat se hifazat karein.",
      en: "Context & Practical Lesson: Like a snapped silk thread that leaves a knot even when tied back together, careless words and broken promises leave lasting scars—guard your speech, time, and credibility."
    },
    tags: [
      { ur: "پاسِ اعتماد", ro: "Paas-e-Aitmad", en: "Guarding Trust" },
      { ur: "احتیاط", ro: "Ehtiyat", en: "Mindfulness" }
    ]
  },
  {
    id: "ma-390",
    slug: "boorhay-baghban-ka-darakht-agli-naslon-ke-liye-khair-bo-jana",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 360 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "بوڑھے باغبان کا درخت: اگلی نسلوں کے لیے خیر کا پودا لگانا",
      ro: "Boorhay Baghban Ka Darakht: Agli Naslon Ke Liye Khair Ka Poda Lagana",
      en: "The Old Gardener's Tree: Planting Goodness for Future Generations"
    },
    quote: {
      ur: "ایک بادشاہ نے اسّی سالہ بوڑھے باغبان کو اخروٹ کا پودا لگاتے دیکھا تو پوچھا: بابا! اس درخت کو پھل آنے میں بیس سال لگیں گے، کیا تم اس کا پھل کھا سکو گے؟ بوڑھے نے مسکرا کر جواب دیا: ہمارے بزرگوں نے درخت لگائے تو ہم نے ان کا پھل کھایا، اب ہم درخت لگا رہے ہیں تاکہ ہمارے بعد آنے والی نسلیں اس کا پھل کھائیں۔",
      ro: "Aik badshah ne assi sala boorhay baghban ko akhrot ka poda lagate dekha to poocha: Baba! Is darakht ko phal aane mein bees saal lagenge, kya tum is ka phal kha sako ge? Boorhay ne muskura kar jawab diya: Hamare buzurgon ne darakht lagaye to hum ne un ka phal khaya, ab hum darakht laga rahe hain taake hamare baad aane wali naslein is ka phal khayein.",
      en: "A king saw an eighty-year-old gardener planting a slow-growing walnut sapling and asked if he expected to live to eat its fruit; the old man smiled and replied, 'Our ancestors planted trees whose fruit we enjoyed, so we plant today that those who come after us may eat in peace.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: نوشیرواں اور بوڑھے باغبان کی یہ مشہور حکایت خود غرضی سے بلند ہو کر جینے کا درس دیتی ہے۔ جو انسان صرف اپنے فوری فائدے کا سوچتا ہے اس کا نام اس کے ساتھ ہی مٹ جاتا ہے، اور جو آنے والی نسلوں کے لیے علم، صدقۂ جاریہ اور اخلاق کے پودے لگاتا ہے وہ مر کر بھی زندہ رہتا ہے۔ آج کا عملی سبق یہ ہے کہ کوئی ایسا صدقۂ جاریہ، مفید تحریر یا خیر کا کام ضرور چھوڑ کر جائیں جس سے آپ کے بعد بھی لوگوں کو نفع ملتا رہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Nausherwan aur boorhay baghban ki yeh mashhoor hikayat khud-gharzi se buland ho kar jeene ka dars deti hai. Jo insan sirf apne fori faiday ka sochta hai us ka naam us ke sath hi mit jata hai, aur jo aane wali naslon ke liye ilm, sadqa-e-jariya aur akhlaq ke poday lagata hai woh mar kar bhi zinda rehta hai. Aaj ka amli sabaq yeh hai ke koi aisa sadqa-e-jariya, mufeed tehreer ya khair ka kaam zaroor chhor kar jayein jis se aap ke baad bhi logon ko nafa milta rahe.",
      en: "Context & Practical Lesson: Selfish minds ask only 'What will I gain today?' while noble souls plant trees of knowledge, charity, and moral heritage that shade generations long after they depart."
    },
    tags: [
      { ur: "صدقۂ جاریہ", ro: "Sadqa-e-Jariya", en: "Lasting Legacy" },
      { ur: "فیضِ عام", ro: "Faiz-e-Aam", en: "Generational Good" }
    ]
  }
];


export const batch27Quotes: QuoteItem[] = [
  {
    id: "ma-391",
    slug: "allah-kisi-jaan-par-us-ki-taqat-se-zyada-bojh-nahi-dalta",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:286) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا",
      ro: "Allah Kisi Jaan Par Us Ki Taqat Se Zyada Bojh Nahi Dalta",
      en: "Allah Does Not Burden Any Soul Beyond Its Capacity"
    },
    quote: {
      ur: "اللہ کسی جان پر اس کی طاقت اور وسعت سے بڑھ کر بوجھ نہیں ڈالتا؛ اس نے جو نیکی کمائی اس کا فائدہ بھی اسی کے لیے ہے اور جو برائی کمائی اس کا وبال بھی اسی پر ہے؛ اے ہمارے رب! اگر ہم سے بھول چوک یا خطا ہو جائے تو ہماری گرفت نہ فرما۔",
      ro: "Allah kisi jaan par us ki taqat aur wus'at se barh kar bojh nahi dalta; us ne jo neki kamai us ka faida bhi usi ke liye hai aur jo burai kamai us ka wabal bhi usi par hai; aye hamare Rab! Agar hum se bhool-chook ya khata ho jaye to hamari girift na farma.",
      en: "Allah does not burden any soul beyond what it can bear: every good it earns is to its own credit, and every evil it incurs is to its own account. 'Our Lord, do not take us to task if we forget or make a mistake.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ البقرہ کی یہ آخری آیت انسانی دل کو بے پناہ حوصلہ دیتی ہے کہ شریعت کا کوئی حکم اور زندگی کی کوئی آزمائش انسان کی برداشت سے باہر نہیں ہوتی۔ اگر آپ پر کوئی مشکل وقت آیا ہے تو اس کا مطلب ہے کہ اللہ نے آپ کے اندر اس سے گزرنے کی ہمت بھی رکھی ہے۔ آج کا عملی سبق یہ ہے کہ مشکلات میں ہمت ہارنے کے بجائے اپنے رب سے عافیت اور استقامت کی دعا مانگیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Baqarah ki yeh aakhri aayat insani dil ko be-panah hausla deti hai ke shariyat ka koi hukm aur zindagi ki koi aazmaish insan ki bardasht se bahar nahi hoti. Agar aap par koi mushkil waqt aaya hai to is ka matlab hai ke Allah ne aap ke andar us se guzarne ki himmat bhi rakhi hai. Aaj ka amli sabaq yeh hai ke mushkilat mein himmat harne ke bajaye apne Rab se aafiyat aur istaqamat ki dua mangein.",
      en: "Context & Practical Lesson: The closing verse of Surah Al-Baqarah reassures the believer that neither divine commandments nor life's trials ever exceed our inner capacity to endure and overcome."
    },
    tags: [
      { ur: "رحمتِ الٰہی", ro: "Rehmat-e-Ilahi", en: "Divine Mercy" },
      { ur: "حوصلہ و دعا", ro: "Hausla o Dua", en: "Resilience & Prayer" }
    ]
  },
  {
    id: "ma-392",
    slug: "eman-walon-ke-sath-narmi-aur-aajizi-se-pesh-aana",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ash-Shu'ara (26:215) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اہلِ ایمان اور اپنے ساتھیوں کے لیے شفقت کا بازو جھکا کر رکھنا",
      ro: "Ahl-e-Eman Aur Apne Sathiyon Ke Liye Shafqat Ka Bazu Jhuka Kar Rakhna",
      en: "Lowering Your Wing of Humility and Kindness to the Believers"
    },
    quote: {
      ur: "اور اپنے رب ہی کو پکارو، اور جو اہلِ ایمان تمہاری پیروی اور رفاقت اختیار کریں ان کے لیے اپنا بازو نرمی اور شفقت سے جھکا کر رکھو۔",
      ro: "Aur apne Rab hi ko pukaro, aur jo ahl-e-eman tumhari pairwi aur rafaqat ikhtiyar karein un ke liye apna bazu narmi aur shafqat se jhuka kar rakho.",
      en: "And invoke none besides Allah, and lower your wing of tenderness and humility toward the believers who follow you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جس طرح پرندہ اپنے بچوں کو سردی یا خطرے سے بچانے کے لیے اپنے پر جھکا کر انہیں سمیٹ لیتا ہے، قرآن کریم نے اسی تشبیہ کے ذریعے حکم دیا ہے کہ اپنے مخلص ساتھیوں، ماتحتوں اور اہلِ ایمان کے ساتھ انتہائی نرمی اور شفقت کا برتاؤ کیا جائے۔ آج کا عملی سبق یہ ہے کہ اپنے سے وابستہ لوگوں کے لیے سخت گیر افسر نہیں بلکہ شفیق سایہ بنیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jis tarah parinda apne bachon ko sardi ya khatray se bachane ke liye apne par jhuka kar unhein sameet leta hai, Quran-e-Kareem ne isi tashbeeh ke zariye hukm diya hai ke apne mukhlis sathiyon, matehton aur ahl-e-eman ke sath intehai narmi aur shafqat ka bartao kiya jaye. Aaj ka amli sabaq yeh hai ke apne se wabasta logon ke liye sakht-geer afsar nahi balkay shafeeq saya banein.",
      en: "Context & Practical Lesson: Like a bird spreading its wing to shelter its young, true leadership protects, comforts, and treats companions and subordinates with gentle humility."
    },
    tags: [
      { ur: "شفقت و تواضع", ro: "Shafqat o Tawazu", en: "Tenderness & Humility" },
      { ur: "رفاقت", ro: "Rafaqat", en: "Kind Companionship" }
    ]
  },
  {
    id: "ma-393",
    slug: "zameen-mein-islah-ke-baad-fasad-na-phailao-khauf-o-umeed",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-A'raf (7:56) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "معاشرے میں فساد نہ پھیلانا اور خوف و امید کے ساتھ رب کو پکارنا",
      ro: "Muashray Mein Fasad Na Phailana Aur Khauf o Umeed Ke Sath Rab Ko Pukarna",
      en: "Do Not Cause Corruption on Earth: Call Upon God in Fear and Hope"
    },
    quote: {
      ur: "اور زمین میں اس کی اصلاح ہو جانے کے بعد بگاڑ اور فساد مت پھیلاؤ، اور اللہ کو خوف اور امید دونوں کے ساتھ پکارا کرو؛ بے شک اللہ کی رحمت نیکی کرنے والوں کے بہت قریب ہے۔",
      ro: "Aur zameen mein us ki islah ho jane ke baad bigaar aur fasad mat phailao, aur Allah ko khauf aur umeed dono ke sath pukara karo; be-shak Allah ki rehmat neki karne walon ke bohot qareeb hai.",
      en: "And do not cause corruption upon the earth after it has been set in order, and call upon Him in both reverence and hope; indeed, the mercy of Allah is ever near to the doers of good."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مومن کا کام دنیا میں امن، صفائی اور اصلاح کو فروغ دینا ہے، نہ کہ جھگڑے اور بدامنی پھیلانا۔ ساتھ ہی بندگی کا توازن یہ ہے کہ انسان نہ تو اپنے گناہوں سے بے خوف ہو اور نہ رب کی رحمت سے مایوس ہو۔ آج کا عملی سبق یہ ہے کہ اپنے ماحول اور معاشرے میں امن و اصلاح کا سبب بنیں اور ہمیشہ احسان کی روش اختیار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Momin ka kaam duniya mein aman, safai aur islah ko farogh dena hai, na ke jhagray aur bad-amni phailana. Sath hi bandagi ka tawazun yeh hai ke insan na to apne gunahon se be-khauf ho aur na Rab ki rehmat se mayous ho. Aaj ka amli sabaq yeh hai ke apne mahool aur muashray mein aman o islah ka sabab banein aur hamesha ihsan ki rawish ikhtiyar karein.",
      en: "Context & Practical Lesson: A righteous believer preserves social peace and environmental order while walking between reverent accountability and hopeful trust in God's mercy."
    },
    tags: [
      { ur: "اصلاحِ معاشرہ", ro: "Islah-e-Muashra", en: "Social Reform" },
      { ur: "خوف و رجاء", ro: "Khauf o Raja", en: "Reverence & Hope" }
    ]
  },
  {
    id: "ma-394",
    slug: "kisi-majboor-ki-tangdasti-door-karna-aur-parda-poshi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim & Makhzan-e-Akhlaq - Page 28",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مصیبت زدہ کی مشکل آسان کرنا اور مسلمان کی پردہ پوشی",
      ro: "Museebat-Zada Ki Mushkil Asan Karna Aur Musalman Ki Parda-Poshi",
      en: "Relieving the Distressed and Concealing the Faults of Others"
    },
    quote: {
      ur: "جو شخص کسی مومن سے دنیا کی بے چینیوں میں سے کوئی بے چینی دور کر دے، اللہ تعالیٰ اس سے قیامت کے دن کی سختیوں میں سے کوئی سختی دور فرمائے گا؛ اور جو کسی مسلمان کے عیب کی پردہ پوشی کرے گا، اللہ دنیا اور آخرت میں اس کا پردہ رکھے گا۔",
      ro: "Jo shakhs kisi momin se duniya ki be-chainiyon mein se koi be-chaini door kar de, Allah Ta'ala us se qayamat ke din ki sakhtiyon mein se koi sakhti door farmayega; aur jo kisi musalman ke aib ki parda-poshi karega, Allah duniya aur akhirat mein us ka parda rakhega.",
      en: "Whoever relieves a believer of a worldly distress, Allah will relieve them of a distress on the Day of Judgment; and whoever conceals the fault of another, Allah will conceal their faults in this world and the Hereafter."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اللہ تعالیٰ اس وقت تک بندے کی مدد میں رہتا ہے جب تک بندہ اپنے بھائی کی مدد میں لگا رہتا ہے۔ کسی نادان انسان کی غلطی کا ڈھنڈورا پیٹنے کے بجائے اس کی اصلاح کرنا اور پردہ رکھنا اللہ کی ستاری کو متوجہ کرتا ہے۔ آج کا عملی سبق یہ ہے کہ کسی کے راز یا کمزوری کو تماشا نہ بنائیں اور جہاں تک ممکن ہو پریشان حال لوگوں کا بوجھ بانٹیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Allah Ta'ala us waqt tak banday ki madad mein rehta hai jab tak banda apne bhai ki madad mein laga rehta hai. Kisi nadan insan ki ghalti ka dhandhora peetne ke bajaye us ki islah karna aur parda rakhna Allah ki Sattari ko mutawajjah karta hai. Aaj ka amli sabaq yeh hai ke kisi ke raaz ya kamzori ko tamasha na banayein aur jahan tak mumkin ho pareshan-haal logon ka bojh bantein.",
      en: "Context & Practical Lesson: Divine help flows continuously to those who ease the burdens of others and shield their private mistakes from public humiliation."
    },
    tags: [
      { ur: "پردہ پوشی", ro: "Parda-Poshi", en: "Concealing Faults" },
      { ur: "اعانتِ خلق", ro: "I'anat-e-Khalq", en: "Helping Others" }
    ]
  },
  {
    id: "ma-395",
    slug: "hasad-nekiyon-ko-is-tarah-khata-hai-jaise-aag-lakri-ko",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Abi Dawud & Makhzan-e-Akhlaq - Page 29",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حسد سے بچو کیونکہ حسد نیکیوں کو آگ کی طرح کھا جاتا ہے",
      ro: "Hasad Se Bacho Kyunkeh Hasad Nekiyon Ko Aag Ki Tarah Kha Jata Hai",
      en: "Beware of Envy, for It Consumes Good Deeds Like Fire Consumes Wood"
    },
    quote: {
      ur: "حسد اور جلن سے اپنے آپ کو بچاؤ، کیونکہ حسد انسان کی نیکیوں کو اس طرح کھا کر راکھ کر دیتا ہے جیسے آگ سوکھی لکڑیوں کو جلا کر خاکستر کر دیتی ہے۔",
      ro: "Hasad aur jalan se apne aap ko bachao, kyunkeh hasad insan ki nekiyon ko is tarah kha kar rakh kar deta hai jaise aag sookhi lakriyon ko jala kar khakistar kar deti hai.",
      en: "Beware of envy and jealousy, for indeed envy consumes good deeds just as fire consumes dry firewood."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کسی دوسرے کو ملنے والی نعمت دیکھ کر یہ چاہنا کہ وہ نعمت اس سے چھن جائے ’حسد‘ ہے، جو درحقیقت اللہ کی تقسیم پر اعتراض کرنے کے مترادف ہے۔ حاسد انسان دوسرے کا کچھ نہیں بگاڑ پاتا مگر اپنے ہی دل کا سکون اور اپنی نیکیاں جلا بیٹھتا ہے۔ آج کا عملی سبق یہ ہے کہ کسی کی خوشحالی دیکھیں تو فوراً ’ماشاء اللہ، اللہ اسے مزید برکت دے‘ کہنے کی عادت ڈالیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Kisi doosre ko milne wali nemat dekh kar yeh chahna ke woh nemat us se chhin jaye 'hasad' hai, jo dar-haqeeqat Allah ki taqseem par aitraz karne ke mutaradif hai. Hasid insan doosre ka kuch nahi bigar pata magar apne hi dil ka sukoon aur apni nekiyan jala baithta hai. Aaj ka amli sabaq yeh hai ke kisi ki khushhali dekhein to foran 'MashaAllah, Allah usay mazeed barkat de' kehne ki aadat dalein.",
      en: "Context & Practical Lesson: Envy never diminishes another person's blessing, but it destroys the envier's own inner peace and spiritual credit. Cure envy by praying for blessing whenever you see someone succeed."
    },
    tags: [
      { ur: "ردِّ حسد", ro: "Radd-e-Hasad", en: "Overcoming Envy" },
      { ur: "سلامتیٔ صدر", ro: "Salamati-e-Sadr", en: "Pure Heart" }
    ]
  },
  {
    id: "ma-396",
    slug: "teen-din-se-zyada-bol-chaal-band-rakhna-jaiz-nahi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 30",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تین دن سے زیادہ قطع تعلقی حرام ہے اور سلام میں پہل کرنے والا افضل",
      ro: "Teen Din Se Zyada Qata-Talluqi Haram Hai Aur Salam Mein Pehal Karne Wala Afzal",
      en: "Do Not Sever Ties Over Three Days: The Best is the First to Greet"
    },
    quote: {
      ur: "کسی مسلمان کے لیے یہ حلال نہیں کہ وہ اپنے بھائی سے تین دن سے زیادہ بول چال بند رکھے کہ دونوں آمنے سامنے آئیں تو یہ ادھر منہ پھیر لے اور وہ ادھر منہ پھیر لے؛ اور ان دونوں میں سب سے افضل اور بہترین وہ ہے جو سلام کرنے میں پہل کرے۔",
      ro: "Kisi musalman ke liye yeh halal nahi ke woh apne bhai se teen din se zyada bol-chaal band rakhe ke dono aamne-samne aayein to yeh idhar munh pher le aur woh udhar munh pher le; aur un dono mein sab se afzal aur behtareen woh hai jo salam karne mein pehal kare.",
      en: "It is not lawful for a believer to boycott their brother beyond three days, turning away whenever they meet; and the better of the two is the one who initiates the greeting of peace."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی طبیعت کے پیشِ نظر وقتی غصہ ٹھنڈا ہونے کے لیے شریعت نے تین دن کی مہلت رکھی ہے، لیکن اس کے بعد بھی انا کی خاطر بول چال بند رکھنا گناہ ہے۔ پہل کرنے والا چھوٹا نہیں ہوتا بلکہ اللہ کے نزدیک سب سے بڑا بن جاتا ہے۔ آج کا عملی سبق یہ ہے کہ اگر کسی رشتہ دار یا دوست سے ناراضگی چل رہی ہو تو آج ہی سلام میں پہل کر کے یہ گرہ کھول دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani tabiyat ke pesh-e-nazar waqti ghussa thanda hone ke liye shariyat ne teen din ki mohlat rakhi hai, lekin us ke baad bhi ana ki khatir bol-chaal band rakhna gunah hai. Pehal karne wala chota nahi hota balkay Allah ke nazdeek sab se bada ban jata hai. Aaj ka amli sabaq yeh hai ke agar kisi rishtedar ya dost se narazgi chal rahi ho to aaj hi salam mein pehal kar ke yeh girah khol dein.",
      en: "Context & Practical Lesson: Letting pride prolong a family or social feud beyond three days poisons the soul; taking the first step to say 'Assalamu Alaikum' elevates one's rank before God."
    },
    tags: [
      { ur: "صلہ رحمی", ro: "Sila-Rehmi", en: "Mending Ties" },
      { ur: "سبقتِ سلام", ro: "Sabqat-e-Salam", en: "Initiating Peace" }
    ]
  },
  {
    id: "ma-397",
    slug: "bachon-par-be-panah-shafqat-aur-namaz-mein-un-ka-khayal",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 51",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "بچوں پر بے پناہ شفقت اور بچے کے رونے پر نماز مختصر فرمانا",
      ro: "Bachon Par Be-Panah Shafqat Aur Bachay Ke Rone Par Namaz Mukhtasar Farmana",
      en: "Profound Tenderness Toward Children and Shortening Prayer at a Child's Cry"
    },
    quote: {
      ur: "رسول اللہ ﷺ بچوں سے بے حد شفقت فرماتے، انہیں گود میں اٹھاتے اور پیار فرماتے؛ آپ ﷺ نے فرمایا کہ میں طویل نماز پڑھانے کے ارادے سے کھڑا ہوتا ہوں، لیکن جب کسی بچے کے رونے کی آواز سنتا ہوں تو نماز مختصر کر دیتا ہوں تاکہ اس کی ماں کو مشقت اور بے چینی نہ ہو۔",
      ro: "Rasool Allah ﷺ bachon se be-had shafqat farmate, unhein god mein uthate aur pyar farmate; Aap ﷺ ne farmaya ke main taweel namaz parhane ke iraday se khara hota hoon, lekin jab kisi bachay ke rone ki aawaz sunta hoon to namaz mukhtasar kar deta hoon taake us ki maa ko mushaqqat aur be-chaini na ho.",
      en: "The Messenger of Allah ﷺ showed immense affection to children, holding and kissing them; he said: 'I stand in prayer intending to lengthen it, but when I hear a child crying, I shorten the prayer lest its mother be distressed.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قربان جائیے اس رحمت و شفقت پر کہ عین فرض نماز کی امامت میں بھی آپ ﷺ کو ایک ننھے بچے کی تکلیف اور اس کی ماں کے دل کی بے قراری کا احساس رہتا تھا۔ آج کا عملی سبق یہ ہے کہ اپنے بچوں کو ڈانٹ ڈپٹ اور خوف سے نہیں بلکہ پیار، گلے لگانے اور شفقت کے ساتھ تربیت دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Qurban jaiye us rehmat o shafqat par ke ain farz namaz ki imamat mein bhi Aap ﷺ ko aik nanhay bachay ki takleef aur us ki maa ke dil ki be-qarari ka ehsas rehta tha. Aaj ka amli sabaq yeh hai ke apne bachon ko dant-dapat aur khauf se nahi balkay pyar, galay lagane aur shafqat ke sath tarbiyat dein.",
      en: "Context & Practical Lesson: Caring for a child's comfort and a mother's peace of mind even during congregational prayer demonstrates that compassion lies at the very heart of worship."
    },
    tags: [
      { ur: "شفقتِ اطفال", ro: "Shafqat-e-Atfal", en: "Love for Children" },
      { ur: "رحمتِ نبوی ﷺ", ro: "Rehmat-e-Nabawi ﷺ", en: "Prophetic Mercy" }
    ]
  },
  {
    id: "ma-398",
    slug: "do-kaamon-mein-hamesha-asani-wale-pehlon-ka-intikhab",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 52",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "دو جائز راستوں میں ہمیشہ آسان ترین راستے کا انتخاب فرمانا",
      ro: "Do Jaiz Raston Mein Hamesha Asan-Tareen Rastay Ka Intikhab Farmana",
      en: "Always Choosing the Easier of Two Lawful Options"
    },
    quote: {
      ur: "ام المؤمنین حضرت عائشہ رضی اللہ عنہا فرماتی ہیں کہ رسول اللہ ﷺ کو جب بھی دو کاموں کے درمیان اختیار دیا گیا تو آپ ﷺ نے ہمیشہ اس کام کو منتخب فرمایا جو زیادہ آسان اور سہولت والا ہوتا، بشرطیکہ اس میں گناہ کا کوئی پہلو نہ ہو۔",
      ro: "Umm-ul-Momineen Hazrat Aisha (R.A) farmati hain ke Rasool Allah ﷺ ko jab bhi do kaamon ke darmiyan ikhtiyar diya gaya to Aap ﷺ ne hamesha us kaam ko muntakhib farmaya jo zyada asan aur sahulat wala hota, bashartekeh us mein gunah ka koi pehlu na ho.",
      en: "Hazrat Aisha (R.A) reported: 'Whenever the Messenger of Allah ﷺ was given a choice between two matters, he always chose the easier and more convenient of the two, so long as it involved no sin.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بعض لوگ سمجھتے ہیں کہ چیزوں کو جتنا مشکل اور پیچیدہ بنایا جائے اتنا ہی ثواب زیادہ ملتا ہے، جبکہ سنتِ نبوی ﷺ یہ ہے کہ جہاں جائز اور آسان راستہ موجود ہو وہاں خود کو اور گھر والوں کو بلاوجہ مشقت میں نہ ڈالا جائے۔ آج کا عملی سبق یہ ہے کہ اپنے گھریلو، سماجی اور کاروباری فیصلوں میں غیر ضروری پیچیدگی چھوڑ کر سہولت کا راستہ اپنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Baaz log samajhte hain ke cheezon ko jitna mushkil aur pecheeda banaya jaye utna hi sawab zyada milta hai, jabkeh Sunnat-e-Nabawi ﷺ yeh hai ke jahan jaiz aur asan rasta mojood ho wahan khud ko aur ghar walon ko bila-wajah mushaqqat mein na dala jaye. Aaj ka amli sabaq yeh hai ke apne ghareloo, samaji aur karobari faislon mein ghair-zaroori pecheedgi chhor kar sahulat ka rasta apnayein.",
      en: "Context & Practical Lesson: Making life needlessly complicated is not piety; choosing simplicity and ease in lawful matters is the authentic prophetic way."
    },
    tags: [
      { ur: "یسرو سہولت", ro: "Yusr o Sahulat", en: "Simplicity & Ease" },
      { ur: "سنتِ اعتدال", ro: "Sunnat-e-Aitdaal", en: "Balanced Sunnah" }
    ]
  },
  {
    id: "ma-399",
    slug: "tareef-par-maghroor-na-hona-aur-dua-e-siddiq",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 74",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "لوگوں کی تعریف پر پھولنے کے بجائے اپنے رب سے عاجزی کی دعا",
      ro: "Logon Ki Tareef Par Phoolne Ke Bajaye Apne Rab Se Aajizi Ki Dua",
      en: "Remaining Humble When Praised by People"
    },
    quote: {
      ur: "جب کوئی شخص سیدنا ابوبکر صدیق رضی اللہ عنہ کی تعریف کرتا تو آپؓ فوراً فرماتے: اے میرے اللہ! تو مجھے مجھ سے بھی زیادہ جانتا ہے اور میں اپنے نفس کو ان لوگوں سے زیادہ جانتا ہوں؛ اے اللہ! مجھے ویسا اور اس سے بہتر بنا دے جیسا یہ لوگ گمان کرتے ہیں، اور میری ان خامیوں کو معاف فرما دے جنہیں یہ نہیں جانتے۔",
      ro: "Jab koi shakhs Sayyiduna Abu Bakr Siddiq (R.A) ki tareef karta to Aap (R.A) foran farmate: Aye mere Allah! Tu mujhe mujh se bhi zyada jaanta hai aur main apne nafs ko in logon se zyada jaanta hoon; aye Allah! Mujhe waisa aur us se behtar bana de jaisa yeh log guman karte hain, aur meri un khamiyon ko maaf farma de jinhein yeh nahi jaante.",
      en: "Whenever praised by people, Hazrat Abu Bakr Siddiq (R.A) would pray: 'O Allah, You know me better than I know myself, and I know myself better than they know me; O Allah, make me better than what they assume of me, and forgive me for what they do not know of me.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: تعریف وہ میٹھا زہر ہے جو بڑے بڑے نیک لوگوں کو خود پسندی میں مبتلا کر دیتا ہے۔ صدیقِ اکبرؓ کی یہ دعا ہمیں سکھاتی ہے کہ لوگ ہمارے ظاہر کی تعریف کرتے ہیں کیونکہ اللہ نے ہمارے باطنی عیب ڈھانپ رکھے ہیں۔ آج کا عملی سبق یہ ہے کہ جب کوئی آپ کی تعریف کرے تو دل میں غرور لانے کے بجائے رب کا شکر اور استغفار کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Tareef woh meetha zehar hai jo bade bade nek logon ko khud-pasandi mein mubtala kar deta hai. Siddiq-e-Akbar (R.A) ki yeh dua humein sikhati hai ke log hamare zahir ki tareef karte hain kyunkeh Allah ne hamare batini aib dhanp rakhe hain. Aaj ka amli sabaq yeh hai ke jab koi aap ki tareef kare to dil mein ghuroor lane ke bajaye Rab ka shukr aur istighfar karein.",
      en: "Context & Practical Lesson: Public praise can easily inflate the ego; turning compliments into a quiet prayer for forgiveness and genuine betterment keeps the soul grounded."
    },
    tags: [
      { ur: "تواضع و اخلاص", ro: "Tawazu o Ikhlas", en: "Humility & Sincerity" },
      { ur: "خود آگاہی", ro: "Khud-Aagahi", en: "Self-Awareness" }
    ]
  },
  {
    id: "ma-400",
    slug: "zaban-ke-baghair-amal-se-sacha-dawa-karne-ki-talqeen",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 80",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "زبان کے دعوؤں کے بجائے خاموش عمل سے خیر کے داعی بنو",
      ro: "Zaban Ke Daawon Ke Bajaye Khamosh Amal Se Khair Ke Da'i Bano",
      en: "Call People to Goodness Through Your Actions Even Without Speaking"
    },
    quote: {
      ur: "لوگوں کو اپنی زبان سے وعظ سنانے کے بجائے اپنے سچے کردار اور خاموش عمل کے ذریعے خیر کی طرف بلاؤ؛ کیونکہ انسان کا کھرا عمل اس کی لچھے دار گفتگو سے کہیں زیادہ اثر رکھتا ہے۔",
      ro: "Logon ko apni zaban se wa'z sunane ke bajaye apne sachay kirdar aur khamosh amal ke zariye khair ki taraf bulao; kyunkeh insan ka khara amal us ki lachhay-dar guftugu se kahin zyada asar rakhta hai.",
      en: "Call people toward goodness through your conduct even without speaking with your tongue, for upright action speaks far louder and reaches deeper than eloquent words."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: آج کے دور میں نصیحت کرنے والے بہت ہیں مگر عمل کرنے والے کم، اسی لیے باتوں کا اثر ختم ہو گیا ہے۔ جب آپ کا بیٹا، شاگرد یا گاہک آپ کو عملاً سچ بولتے اور امانت نبھاتے دیکھتا ہے تو وہ بغیر کسی تقریر کے آپ سے متاثر ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ جو اچھائی آپ دوسروں میں دیکھنا چاہتے ہیں، پہلے خود اس کا عملی نمونہ بنیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aaj ke daur mein nasihat karne wale bohot hain magar amal karne wale kam, isi liye baaton ka asar khatam ho gaya hai. Jab aap ka beta, shagird ya gahak aap ko amalan sach bolte aur amanat nibhate dekhta hai to woh baghair kisi taqreer ke aap se mutasir ho jata hai. Aaj ka amli sabaq yeh hai ke jo achai aap doosron mein dekhna chahte hain, pehle khud us ka amli namoona banein.",
      en: "Context & Practical Lesson: Children, colleagues, and society learn far more from what we consistently practice than from what we preach. Let your integrity be your message."
    },
    tags: [
      { ur: "کردار کی طاقت", ro: "Kirdar Ki Taqat", en: "Power of Example" },
      { ur: "عملی نمونہ", ro: "Amli Namoona", en: "Leading by Action" }
    ]
  },
  {
    id: "ma-401",
    slug: "khalwat-ki-pakeezgi-aur-posheeda-amal-ka-zahir-hona",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 90",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "تنہائی کے عمل کا لباس انسان کے ظاہر پر ضرور نمایاں ہوتا ہے",
      ro: "Tanhai Ke Amal Ka Libas Insan Ke Zahir Par Zaroor Numayan Hota Hai",
      en: "What One Conceals in Secret Will Eventually Clothe Their Public Character"
    },
    quote: {
      ur: "کوئی انسان اپنے دل اور اپنی تنہائی میں جو بھی بھلائی یا برائی چھپاتا ہے، اللہ تعالیٰ اس کا چغہ (اثر اور پہچان) اس کے چہرے اور اس کی زبان پر ضرور ظاہر فرما دیتا ہے؛ پس اپنی تنہائی کو سنوار لو، اللہ تمہاری محفل کو سنوار دے گا۔",
      ro: "Koi insan apne dil aur apni tanhai mein jo bhi bhalai ya burai chhupata hai, Allah Ta'ala us ka chugha (asar aur pehchan) us ke chehray aur us ki zaban par zaroor zahir farma deta hai; pas apni tanhai ko sanwar lo, Allah tumhari mehfil ko sanwar dega.",
      en: "Whatever secret a person conceals in their heart and private hours, Allah eventually drapes its garment over their face and tongue—whether for good or ill; so purify your solitude, and Allah will beautify your public standing."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان دنیا کے سامنے تو مصنوعی نقاب پہن سکتا ہے، لیکن اس کی تنہائی کی پاکیزگی یا آلودگی آخرکار اس کے لہجے، نگاہ اور وقار سے جھلکنے لگتی ہے۔ آج کا عملی سبق یہ ہے کہ جب آپ اکیلے ہوں اور کوئی دیکھنے والا نہ ہو، اس وقت اپنے کردار اور موبائل کے استعمال کو اتنا ہی پاکیزہ رکھیں جتنا سب کے سامنے رکھتے ہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan duniya ke samne to masnooi naqab pehan sakta hai, lekin us ki tanhai ki pakeezgi ya aaloodgi aakhir-kar us ke lehjay, nigah aur waqar se jhalakne lagti hai. Aaj ka amli sabaq yeh hai ke jab aap akele hon aur koi dekhne wala na ho, us waqt apne kirdar aur mobile ke istemal ko utna hi pakeeza rakhein jitna sab ke samne rakhte hain.",
      en: "Context & Practical Lesson: Public reputation is ultimately a reflection of private integrity. Guarding your conduct when no one is watching builds unshakeable dignity."
    },
    tags: [
      { ur: "تقویٰ در خلوت", ro: "Taqwa Dar Khalwat", en: "Private Integrity" },
      { ur: "پاکیزگیٔ باطن", ro: "Pakeezgi-e-Batin", en: "Inner Purity" }
    ]
  },
  {
    id: "ma-402",
    slug: "qanaat-aisi-daulat-hai-jo-kabhi-khatam-nahi-hoti",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 98",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "قناعت وہ خزانہ ہے جو کبھی ختم نہیں ہوتا اور عیب پوشی کمالِ مروت ہے",
      ro: "Qana'at Woh Khazana Hai Jo Kabhi Khatam Nahi Hota Aur Aib-Poshi Kamal-e-Murawwat Hai",
      en: "Contentment is an Inexhaustible Treasure and Overlooking Faults is True Chivalry"
    },
    quote: {
      ur: "قناعت ایک ایسا لازوال خزانہ ہے جو کبھی ختم نہیں ہوتا، اور عقل مند انسان آدھا تغافل (دوسروں کی چھوٹی باتوں کو نظر انداز کرنا) اختیار کرتا ہے؛ کیونکہ جو شخص ہر چھوٹی بات کا حساب لینے بیٹھ جائے اس کا کوئی دوست باقی نہیں رہتا۔",
      ro: "Qana'at aik aisa la-zawal khazana hai jo kabhi khatam nahi hota, aur aqal-mand insan aadha taghaful (doosron ki choti baaton ko nazar-andaz karna) ikhtiyar karta hai; kyunkeh jo shakhs har choti baat ka hisab lene baith jaye us ka koi dost baqi nahi rehta.",
      en: "Contentment is a treasure that never runs dry, and half of wisdom lies in gracious overlooking ('taghaful'); for whoever scrutinizes every minor flaw will be left without a single friend."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: گھر اور دوستی کو چلانے کا سب سے بڑا ہنر ’تغافل‘ ہے، یعنی سب کچھ سمجھتے بوجھتے ہوئے دوسرے کی چھوٹی موٹی لغزش کو یوں نظر انداز کر دینا جیسے دیکھا ہی نہیں۔ آج کا عملی سبق یہ ہے کہ اپنے اہلِ خانہ اور دوستوں کی ہر بات کا پوسٹ مارٹم کرنے کے بجائے درگزر سے کام لیں تاکہ محبتیں سلامت رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Ghar aur dosti ko chalane ka sab se bada hunar 'taghaful' hai, ya'ni sab kuch samajhte boojhte huye doosre ki choti-moti laghzish ko yoon nazar-andaz kar dena jaise dekha hi nahi. Aaj ka amli sabaq yeh hai ke apne ahl-e-khana aur doston ki har baat ka post-mortem karne ke bajaye darguzar se kaam lein taake mohabbatein salamat rahein.",
      en: "Context & Practical Lesson: Healthy families and friendships thrive on the art of gracious overlooking—choosing not to nitpick every minor slip so affection can endure."
    },
    tags: [
      { ur: "چشم پوشی", ro: "Chashm-Poshi", en: "Gracious Overlooking" },
      { ur: "خزانۂ قناعت", ro: "Khazana-e-Qana'at", en: "Treasure of Contentment" }
    ]
  },
  {
    id: "ma-403",
    slug: "pathar-aur-chattan-se-bhi-zyada-bhaari-bojh-bohtan",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 104",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "لوہے اور پتھر سے بھی زیادہ بھاری بوجھ بے گناہ پر تہمت اور برا پڑوسی ہے",
      ro: "Lohay Aur Patthar Se Bhi Zyada Bhari Bojh Be-Gunah Par Tohmat Aur Bura Padosi Hai",
      en: "Heavier Than Iron and Stone is False Accusation Against the Innocent"
    },
    quote: {
      ur: "اے بیٹے! میں نے اپنی زندگی میں بھاری پتھر بھی اٹھائے ہیں اور لوہے کے بوجھ بھی ڈھوئے ہیں، لیکن مجھے بے گناہ انسان پر لگائے گئے بہتان اور برے ہمسائے سے زیادہ بھاری کوئی چیز محسوس نہیں ہوئی؛ اور میں نے ہر کڑواہٹ چکھی ہے مگر کسی کے آگے سوال کرنے سے زیادہ کڑوی کوئی چیز نہیں پائی۔",
      ro: "Aye betay! Main ne apni zindagi mein bhari patthar bhi uthaye hain aur lohay ke bojh bhi dhoye hain, lekin mujhe be-gunah insan par lagaye gaye bohtan aur buray hamsaye se zyada bhari koi cheez mehsoos nahi hui; aur main ne har karwahat chakhi hai magar kisi ke aagay sawal karne se zyada karwi koi cheez nahi payi.",
      en: "O my son! I have lifted heavy boulders and carried iron loads, yet I found nothing heavier than a false accusation against an innocent person and an ill-natured neighbor; and I have tasted every bitterness, yet found nothing more bitter than begging from people."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جسمانی بوجھ تو کندھوں سے اتر جاتا ہے، لیکن کسی بے قصور پر لگایا گیا جھوٹا الزام روح کو کچل دیتا ہے اور قیامت کے دن پہاڑ بن کر سامنے آتا ہے۔ آج کا عملی سبق یہ ہے کہ کبھی کسی پر سنی سنائی تہمت نہ لگائیں اور محنت کی روکھی سوکھی کھا لیں مگر کسی کے آگے دستِ سوال دراز نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jismani bojh to kandhon se utar jata hai, lekin kisi be-qusoor par lagaya gaya jhoota ilzam rooh ko kuchal deta hai aur qayamat ke din pahar ban kar samne aata hai. Aaj ka amli sabaq yeh hai ke kabhi kisi par suni-sunai tohmat na lagayein aur mehnat ki rookhi-sookhi kha lein magar kisi ke aagay dast-e-sawal daraz na karein.",
      en: "Context & Practical Lesson: Physical weights rest only on the shoulders, whereas slander crushes the innocent soul. Guard your tongue from false accusations and preserve your dignity through honest labor."
    },
    tags: [
      { ur: "ترکِ بہتان", ro: "Tark-e-Bohtan", en: "Avoiding Slander" },
      { ur: "عزتِ نفس", ro: "Izzat-e-Nafs", en: "Self-Dignity" }
    ]
  },
  {
    id: "ma-404",
    slug: "shajar-e-phal-dar-hamesha-jhuka-rehta-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 274 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "پھل دار شاخ ہمیشہ جھکی رہتی ہے اور پتھر کا جواب میوہ دے کر دیتی ہے",
      ro: "Phal-Dar Shakh Hamesha Jhuki Rehti Hai Aur Patthar Ka Jawab Mewa De Kar Deti Hai",
      en: "The Fruit-Bearing Branch Bows Low and Answers Stones with Sweet Fruit"
    },
    quote: {
      ur: "پھل دار درخت سے دو اخلاقی سبق سیکھو: پہلا یہ کہ جتنا اس پر پھل اور کمال بڑھتا ہے اس کی شاخیں اتنی ہی عاجزی سے جھک جاتی ہیں، اور دوسرا یہ کہ لوگ اسے نیچے سے پتھر مارتے ہیں مگر وہ بدلے میں انہیں میٹھا پھل عطا کرتا ہے۔",
      ro: "Phal-dar darakht se do akhlaqi sabaq seekho: pehla yeh ke jitna us par phal aur kamal barhta hai us ki shakhein utni hi aajizi se jhuk jati hain, aur doosra yeh ke log usay neechay se patthar marte hain magar woh badlay mein unhein meetha phal ata karta hai.",
      en: "Learn two lessons from the fruit-bearing tree: the more laden it becomes with fruit, the lower its branches bow in humility; and when people pelt it with stones, it answers by dropping sweet fruit in return."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بے ثمر اور سوکھے درخت ہمیشہ اکڑے کھڑے رہتے ہیں اور آندھی میں ٹوٹ جاتے ہیں، جبکہ پھلوں سے لدی شاخ جھک کر سلامت بھی رہتی ہے اور فیض بھی بانٹتی ہے۔ آج کا عملی سبق یہ ہے کہ علم، دولت یا ہنر بڑھنے کے ساتھ اپنے اندر نرمی بڑھائیں اور حاسدوں کے پتھروں کا جواب اپنی محنت کے میٹھے پھل سے دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Be-samar aur sookhay darakht hamesha akray kharay rehte hain aur aandhi mein toot jate hain, jabkeh phalon se ladi shakh jhuk kar salamat bhi rehti hai aur faiz bhi bant'ti hai. Aaj ka amli sabaq yeh hai ke ilm, daulat ya hunar barhne ke sath apne andar narmi barhayein aur hasidon ke pattharon ka jawab apni mehnat ke meethay phal se dein.",
      en: "Context & Practical Lesson: Barren branches stand stiffly and snap in the wind, while fruitful souls grow humbler with every achievement and respond to criticism with continued excellence."
    },
    tags: [
      { ur: "تواضعِ کمال", ro: "Tawazu-e-Kamal", en: "Humble Excellence" },
      { ur: "جوابِ احسان", ro: "Jawab-e-Ihsan", en: "Responding with Good" }
    ]
  },
  {
    id: "ma-405",
    slug: "raastay-ka-bhaari-pathar-aur-chhupa-huwa-inaam",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 364 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "راستے کا بھاری پتھر: خدمتِ خلق کے نیچے ہی تقدیر کا انعام چھپا ہوتا ہے",
      ro: "Rastay Ka Bhari Patthar: Khidmat-e-Khalq Ke Neechay Hi Taqdeer Ka Inaam Chhupa Hota Hai",
      en: "The Boulder on the Road: Opportunity Hides Beneath Every Obstacle"
    },
    quote: {
      ur: "ایک منصف بادشاہ نے شاہراہ کے بیچوں بیچ ایک بھاری پتھر رکھوا دیا؛ سارا دن امیر اور مسافر شکوہ کرتے ہوئے سائیڈ سے گزرتے رہے، شام کو ایک غریب کسان نے سوچا کہ رات کے اندھیرے میں کسی مسافر کو ٹھوکر نہ لگے اور اس نے پوری طاقت لگا کر پتھر ہٹایا تو نیچے اشرفیوں کی تھیلی اور خط ملا: یہ انعام اس کے لیے ہے جو صرف شکوہ نہیں کرتا بلکہ راستے کی تکلیف ہٹاتا ہے۔",
      ro: "Aik munsif badshah ne shahrah ke beechon-beech aik bhari patthar rakhwa diya; sara din ameer aur musafir shikwa karte huye side se guzarte rahe, sham ko aik ghareeb kisan ne socha ke raat ke andheray mein kisi musafir ko thokar na lagay aur us ne poori taqat laga kar patthar hataya to neechay ashrafiyon ki theli aur khat mila: Yeh inaam us ke liye hai jo sirf shikwa nahi karta balkay rastay ki takleef hatata hai.",
      en: "A wise king placed a boulder in the middle of the main road; all day travelers complained and walked around it until a humble farmer pushed the heavy stone aside so night travelers would not trip—discovering beneath it a pouch of gold and a royal note: 'For the one who removes obstacles instead of merely complaining.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حدیثِ نبوی ﷺ میں بھی راستے سے تکلیف دہ چیز ہٹانے کو ایمان کا شعبہ اور مغفرت کا سبب قرار دیا گیا ہے۔ دنیا میں اکثر لوگ حالات کا رونا روتے ہیں، مگر کامیاب وہ ہوتا ہے جو ذمہ داری اٹھا کر مسئلہ حل کرتا ہے۔ آج کا عملی سبق یہ ہے کہ شکایت کرنے والوں کی صف سے نکل کر مسائل حل کرنے والوں (Problem Solvers) میں شامل ہوں، کیونکہ ہر مشقت کے نیچے کامیابی کا خزانہ چھپا ہوتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Hadees-e-Nabawi ﷺ mein bhi rastay se takleef-deh cheez hatane ko eman ka shoba aur maghfirat ka sabab qarar diya gaya hai. Duniya mein aksar log halaat ka rona rote hain, magar kamyab woh hota hai jo zimmedari utha kar masla hal karta hai. Aaj ka amli sabaq yeh hai ke shikayat karne walon ki saff se nikal kar masail hal karne walon (Problem Solvers) mein shamil hon, kyunkeh har mushaqqat ke neechay kamyabi ka khazana chhupa hota hai.",
      en: "Context & Practical Lesson: Removing harm from the public path is a branch of faith, and in life, every heavy challenge conceals a hidden reward for those who take initiative rather than complain."
    },
    tags: [
      { ur: "خدمت و احساس", ro: "Khidmat o Ehsas", en: "Civic Responsibility" },
      { ur: "حلِ مسائل", ro: "Hall-e-Masail", en: "Initiative" }
    ]
  }
];

export const batch28Quotes: QuoteItem[] = [
  {
    id: "ma-406",
    slug: "noor-e-basirat-aur-sadiqeen-ki-sohbat-ikhtiyar-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah At-Tawbah (9:119) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تقویٰ اختیار کرنا اور ہمیشہ سچے لوگوں کی صحبت میں رہنا",
      ro: "Taqwa Ikhtiyar Karna Aur Hamesha Sachay Logon Ki Sohbat Mein Rehna",
      en: "Practicing Piety and Keeping Company with the Truthful"
    },
    quote: {
      ur: "اے ایمان والو! اللہ سے ڈرتے رہو اور ہمیشہ سچے اور کھرے لوگوں (صادقین) کا ساتھ اور صحبت اختیار کرو۔",
      ro: "Aye eman walo! Allah se darte raho aur hamesha sachay aur kharay logon (Sadiqeen) ka sath aur sohbat ikhtiyar karo.",
      en: "O believers! Be mindful of Allah and always keep company with the truthful."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ التوبہ کی یہ مختصر آیت انسانی کردار کی تعمیر کا سب سے بڑا راز بتاتی ہے کہ انسان اپنے ماحول اور دوستوں کے رنگ میں رنگا جاتا ہے۔ اگر آپ سچے، دیانت دار اور بااخلاق لوگوں کی صحبت میں بیٹھیں گے تو آپ کے اندر بھی خود بخود سچائی اور استقامت پیدا ہو جائے گی۔ آج کا عملی سبق یہ ہے کہ جھوٹے اور منفی سوچ رکھنے والے لوگوں کی محفل سے بچیں اور نیک و سچے انسانوں کو اپنا رفیق بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah At-Tawbah ki yeh mukhtasar aayat insani kirdar ki tameer ka sab se bada raaz batati hai ke insan apne mahool aur doston ke rang mein ranga jata hai. Agar aap sachay, diyanat-dar aur ba-akhlaq logon ki sohbat mein baithenge to aap ke andar bhi khud-ba-khud sachai aur istaqamat paida ho jayegi. Aaj ka amli sabaq yeh hai ke jhootay aur manfi soch rakhne wale logon ki mehfil se bachein aur nek o sachay insanon ko apna rafeeq banayein.",
      en: "Context & Practical Lesson: Surah At-Tawbah highlights the transformative power of environment: surrounding yourself with honest, principled companions naturally elevates your own integrity and resilience."
    },
    tags: [
      { ur: "صحبتِ صالحین", ro: "Sohbat-e-Saliheen", en: "Good Company" },
      { ur: "صداقت", ro: "Sadaqat", en: "Truthfulness" }
    ]
  },
  {
    id: "ma-407",
    slug: "qiyamat-ke-din-sirf-qalb-e-saleem-kaam-aayega",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ash-Shu'ara (26:88-89) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "یومِ حساب مال و اولاد کے بجائے صرف قلبِ سلیم کام آئے گا",
      ro: "Yaum-e-Hisab Maal o Aulad Ke Bajaye Sirf Qalb-e-Saleem Kaam Aayega",
      en: "On the Day of Judgment Only a Sound and Pure Heart Will Avail"
    },
    quote: {
      ur: "جس دن نہ مال کچھ کام آئے گا اور نہ اولاد ہی کوئی نفع دے سکے گی، سوائے اس شخص کے جو اللہ کے حضور ’قلبِ سلیم‘ (کفر، نفاق، کینہ اور حسد سے پاک دل) لے کر حاضر ہوا۔",
      ro: "Jis din na maal kuch kaam aayega aur na aulad hi koi nafa de sakegi, siwaye us shakhs ke jo Allah ke huzoor 'Qalb-e-Saleem' (kufr, nifaq, keena aur hasad se paak dil) le kar hazir huwa.",
      en: "The Day when neither wealth nor children will be of any benefit, except for one who comes to Allah with a sound, pure heart ('Qalb-e-Saleem')."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حضرت ابراہیم علیہ السلام کی اس دعا میں ’قلبِ سلیم‘ کو آخرت کی واحد پونجی قرار دیا گیا ہے۔ قلبِ سلیم وہ دل ہے جو شرک، تکبر، ریاکاری اور مخلوقِ خدا کے بغض و کینے سے بالکل صاف ہو۔ آج کا عملی سبق یہ ہے کہ اپنے لباس اور ظاہری شان و شوکت کو چمکانے کے ساتھ ساتھ روزانہ اپنے دل کو نفرت اور کھوٹ سے پاک کرنے کی محنت کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hazrat Ibrahim (A.S) ki is dua mein 'Qalb-e-Saleem' ko akhirat ki wahid poonji qarar diya gaya hai. Qalb-e-Saleem woh dil hai jo shirk, takabbur, riyakari aur makhlooq-e-Khuda ke bughz o keenay se bilkul saaf ho. Aaj ka amli sabaq yeh hai ke apne libas aur zahiri shaan-o-shaukat ko chamkane ke sath sath rozana apne dil ko nafrat aur khot se paak karne ki mehnat karein.",
      en: "Context & Practical Lesson: A 'sound heart' is one free from arrogance, hypocrisy, and malice toward others. Guarding the purity of your inner heart is the greatest investment for eternity."
    },
    tags: [
      { ur: "قلبِ سلیم", ro: "Qalb-e-Saleem", en: "Sound Heart" },
      { ur: "طہارتِ باطن", ro: "Taharat-e-Batin", en: "Inner Purity" }
    ]
  },
  {
    id: "ma-408",
    slug: "tangdast-qarzdar-ko-mohlat-dena-ya-maaf-kar-dena",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:280) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تنگدست قرض دار کو آسانی تک مہلت دینا یا قرض معاف کر دینا",
      ro: "Tangdast Qarzdar Ko Asani Tak Mohlat Dena Ya Qarz Maaf Kar Dena",
      en: "Granting Respite to a Struggling Debtor or Remitting the Debt as Charity"
    },
    quote: {
      ur: "اور اگر تمہارا قرض دار تنگدست اور مجبور ہو تو اسے خوشحالی اور آسانی آنے تک مہلت دو؛ اور اگر تم (اپنا حق چھوڑ کر) معاف ہی کر دو تو یہ تمہارے حق میں کہیں زیادہ بہتر ہے، اگر تم علم رکھتے ہو۔",
      ro: "Aur agar tumhara qarzdar tangdast aur majboor ho to usay khushhali aur asani aane tak mohlat do; aur agar tum (apna haq chhor kar) maaf hi kar do to yeh tumhare haq mein kahin zyada behtar hai, agar tum ilm rakhte ho.",
      en: "And if the debtor is in hardship, then grant them respite until a time of ease; and if you remit the debt as charity, it is far better for you, if only you knew."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جاہلیت کے دور میں مجبور قرض دار پر سود در سود لگا کر اس کا جینا حرام کر دیا جاتا تھا، جبکہ قرآن نے یہ رحیمانہ قانون دیا کہ اگر قرض دار واقعی تنگدست ہے تو اسے مہلت دی جائے یا کچھ حصہ معاف کر دیا جائے۔ آج کا عملی سبق یہ ہے کہ کاروباری لین دین اور اقساط کے معاملات میں حقیقی مجبور اور سفید پوش انسان کے ساتھ نرمی اور رعایت کا معاملہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jahiliyat ke daur mein majboor qarzdar par sood-dar-sood laga kar us ka jeena haram kar diya jata tha, jabkeh Quran ne yeh rahimana qanoon diya ke agar qarzdar waqai tangdast hai to usay mohlat di jaye ya kuch hissa maaf kar diya jaye. Aaj ka amli sabaq yeh hai ke karobari lain-dain aur iqsat ke muamlat mein haqeeqi majboor aur safaid-posh insan ke sath narmi aur riayat ka muamla karein.",
      en: "Context & Practical Lesson: Showing leniency, extending deadlines, or waiving part of a debt for a genuinely struggling person brings divine shade on the Day of Judgment and immense blessing to one's trade."
    },
    tags: [
      { ur: "مہلت و رعایت", ro: "Mohlat o Riayat", en: "Leniency in Debt" },
      { ur: "رحم دلی", ro: "Reham-Dili", en: "Compassion" }
    ]
  },
  {
    id: "ma-409",
    slug: "khareed-o-farokht-aur-taqazay-mein-narmi-par-dua-e-nabawi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 29",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "لین دین اور تقاضے میں نرمی کرنے والے کے لیے دعائے نبوی ﷺ",
      ro: "Lain-Dain Aur Taqazay Mein Narmi Karne Wale Ke Liye Dua-e-Nabawi ﷺ",
      en: "The Prophetic Prayer of Mercy for One Who is Gentle in Trade"
    },
    quote: {
      ur: "اللہ تعالیٰ اس بندے پر اپنی خاص رحمت نازل فرمائے جو بیچتے وقت بھی نرمی اور فیاضی اختیار کرے، خریدتے وقت بھی نرمی برتے، اور جب اپنے حق کا تقاضا کرے تو اس میں بھی شائستگی اور نرمی سے کام لے۔",
      ro: "Allah Ta'ala us banday par apni khas rehmat nazil farmaye jo bechte waqt bhi narmi aur fayyazi ikhtiyar kare, khareedte waqt bhi narmi bartay, aur jab apne haq ka taqaza kare to us mein bhi shaistagi aur narmi se kaam le.",
      en: "May Allah shower His mercy upon the person who is gentle and generous when selling, gentle when buying, and courteous when requesting payment of their due."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بازار اور دکان میں بحث و تکرار، سخت کلامی اور ایک ایک پائی پر اڑ جانا کاروبار کی رونق اور دل کا سکون ختم کر دیتا ہے۔ جس تاجر اور گاہک کے مزاج میں نرمی اور درگزر ہو، اس کے لیے خود سرورِ کائنات ﷺ نے رحمت کی دعا فرمائی ہے۔ آج کا عملی سبق یہ ہے کہ خرید و فروخت اور بلوں کی وصولی میں خوش اخلاقی اور نرمی کو اپنا شعار بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bazar aur dukan mein behas o takrar, sakht-kalami aur aik aik pai par arr jana karobar ki raunaq aur dil ka sukoon khatam kar deta hai. Jis tajir aur gahak ke mizaj mein narmi aur darguzar ho, us ke liye khud Sarwar-e-Kainat ﷺ ne rehmat ki dua farmai hai. Aaj ka amli sabaq yeh hai ke khareed-o-farokht aur billon ki wasooli mein khush-akhlaqi aur narmi ko apna shiar banayein.",
      en: "Context & Practical Lesson: Courtesy at the counter—whether selling, purchasing, or collecting payments—earns the special prayer of the Prophet ﷺ and builds lifelong goodwill."
    },
    tags: [
      { ur: "سماحتِ تجارت", ro: "Samahat-e-Tijarat", en: "Gracious Trade" },
      { ur: "خوش معاملگی", ro: "Khush-Muamalgi", en: "Fair Dealing" }
    ]
  },
  {
    id: "ma-410",
    slug: "allah-tumhari-sooraton-ko-nahi-balkay-dilon-aur-aamaal-ko-dekhta-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim & Makhzan-e-Akhlaq - Page 30",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اللہ تمہاری صورتوں اور مال کو نہیں بلکہ دلوں اور اعمال کو دیکھتا ہے",
      ro: "Allah Tumhari Sooraton Aur Maal Ko Nahi Balkay Dilon Aur Aamaal Ko Dekhta Hai",
      en: "Allah Looks Not at Your Outward Appearance or Wealth, But at Your Hearts and Deeds"
    },
    quote: {
      ur: "بے شک اللہ تعالیٰ تمہاری ظاہری شکل و صورت اور تمہارے مال و دولت کو نہیں دیکھتا، بلکہ وہ تو صرف تمہارے دلوں کے اخلاص اور تمہارے اعمال کو دیکھتا ہے۔",
      ro: "Be-shak Allah Ta'ala tumhari zahiri shakal-o-soorat aur tumhare maal-o-daulat ko nahi dekhta, balkay Woh to sirf tumhare dilon ke ikhlas aur tumhare aamaal ko dekhta hai.",
      en: "Indeed, Allah does not look at your outward figures or your possessions; rather, He looks at your hearts and your deeds."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: دنیا کا دستور ہے کہ وہ قیمتی لباس، خوبصورت چہرے اور بنگلے و گاڑی کو دیکھ کر عزت دیتی ہے، مگر خالقِ کائنات کے ہاں ان ظاہری چیزوں کا کوئی وزن نہیں۔ وہاں صرف یہ دیکھا جاتا ہے کہ دل کتنا سچا ہے اور عمل کتنا پاکیزہ ہے۔ آج کا عملی سبق یہ ہے کہ لوگوں کو دکھانے کی مصنوعی دوڑ سے نکل کر اپنے باطن اور کردار کو خوبصورت بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Duniya ka dastoor hai ke woh qeemati libas, khoobsurat chehray aur banglay o gari ko dekh kar izzat deti hai, magar Khaliq-e-Kainat ke haan in zahiri cheezon ka koi wazan nahi. Wahan sirf yeh dekha jata hai ke dil kitna sacha hai aur amal kitna pakeeza hai. Aaj ka amli sabaq yeh hai ke logon ko dikhane ki masnooi daur se nikal kar apne batin aur kirdar ko khoobsurat banayein.",
      en: "Context & Practical Lesson: Worldly society judges by clothing, appearance, and bank accounts, whereas the Creator evaluates solely the sincerity of the heart and the uprightness of actions."
    },
    tags: [
      { ur: "اخلاصِ نیت", ro: "Ikhlas-e-Niyat", en: "Sincerity of Heart" },
      { ur: "حسنِ عمل", ro: "Husn-e-Amal", en: "Righteous Deeds" }
    ]
  },
  {
    id: "ma-411",
    slug: "walideen-ki-raza-mein-allah-ki-raza-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Tirmidhi & Makhzan-e-Akhlaq - Page 31",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "رب کی رضا والد کی رضا میں ہے اور رب کی ناراضگی والد کی ناراضگی میں",
      ro: "Rab Ki Raza Walid Ki Raza Mein Hai Aur Rab Ki Narazgi Walid Ki Narazgi Mein",
      en: "The Pleasure of the Lord Lies in the Pleasure of the Parents"
    },
    quote: {
      ur: "پروردگار کی خوشنودی اور رضا والدین کی خوشنودی میں پوشیدہ ہے، اور پروردگار کی ناراضگی والدین کی ناراضگی میں ہے؛ اور والد جنت کے دروازوں میں سے سب سے درمیانی اور بہترین دروازہ ہے۔",
      ro: "Parwardigar ki khushnoodi aur raza walideen ki khushnoodi mein posheeda hai, aur Parwardigar ki narazgi walideen ki narazgi mein hai; aur walid Jannat ke darwazon mein se sab se darmiyani aur behtareen darwaza hai.",
      en: "The pleasure of the Lord lies in the pleasure of the parent, and the displeasure of the Lord lies in the displeasure of the parent; truly, a parent is the central gate of Paradise."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جس طرح ماں کے قدموں تلے جنت ہے، اسی طرح باپ کی تپتی دھوپ کی محنت اور شفقت کو جنت کا بہترین دروازہ قرار دیا گیا ہے۔ جو اولاد اپنے ماں باپ کا دل راضی رکھتی ہے اس کی دنیا کی راہیں بھی کھل جاتی ہیں۔ آج کا عملی سبق یہ ہے کہ اپنے والدین کے چہرے کو محبت سے دیکھیں، ان کی ضرورت بن مانگے پوری کریں اور ان کی دعاؤں کا خزانہ سمیٹیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jis tarah maa ke qadmon talay Jannat hai, isi tarah baap ki tapti dhoop ki mehnat aur shafqat ko Jannat ka behtareen darwaza qarar diya gaya hai. Jo aulad apne maa-baap ka dil razi rakhti hai us ki duniya ki rahein bhi khul jati hain. Aaj ka amli sabaq yeh hai ke apne walideen ke chehray ko mohabbat se dekhein, un ki zaroorat bin-mangay poori karein aur un ki duaon ka khazana sametein.",
      en: "Context & Practical Lesson: Just as Paradise lies beneath the mother's feet, the father's lifelong toil and care form the central gate to Heaven. Keeping parents happy unlocks divine favor."
    },
    tags: [
      { ur: "رضائے والدین", ro: "Raza-e-Walideen", en: "Pleasing Parents" },
      { ur: "برکتِ حیات", ro: "Barkat-e-Hayat", en: "Blessed Life" }
    ]
  },
  {
    id: "ma-412",
    slug: "waqar-aur-tahammul-se-guftugu-taake-har-lafz-samajh-aa-sake",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 53",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "ٹھہر ٹھہر کر صاف اور واضح گفتگو فرمانے کا نبوی انداز",
      ro: "Thehar-Thehar Kar Saaf Aur Wazeh Guftugu Farmane Ka Nabawi Andaz",
      en: "The Prophetic Manner of Speaking Clearly and Measuredly"
    },
    quote: {
      ur: "رسول اللہ ﷺ جلدی جلدی اور بے ربط گفتگو نہیں فرماتے تھے، بلکہ آپ ﷺ کا کلام اس قدر ٹھہرا ہوا، صاف اور واضح ہوتا تھا کہ اگر کوئی گننے والا آپ ﷺ کے الفاظ گننا چاہتا تو باآسانی گن سکتا تھا، اور اہم بات کو تین بار دہرا دیتے تاکہ سننے والا اچھی طرح سمجھ لے۔",
      ro: "Rasool Allah ﷺ jaldi-jaldi aur be-rabt guftugu nahi farmate thay, balkay Aap ﷺ ka kalam is qadar thehra huwa, saaf aur wazeh hota tha ke agar koi ginne wala Aap ﷺ ke alfaz ginna chahta to ba-asani gin sakta tha, aur ahem baat ko teen bar dohra dete taake sunne wala achi tarah samajh le.",
      en: "The Messenger of Allah ﷺ never spoke hastily or indistinctly; rather, his speech was so measured, clear, and articulate that anyone wishing to count his words could easily do so, and he would repeat important points three times so listeners understood completely."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بات چیت کا مقصد اپنی زبان دانی کا رعب جمانا نہیں بلکہ مخاطب کے دل تک بات پہنچانا ہوتا ہے۔ ٹھہر کر اور واضح الفاظ میں بولنے سے وقار بھی قائم رہتا ہے اور غلط فہمی کا امکان بھی ختم ہو جاتا ہے۔ آج کا عملی سبق یہ ہے کہ گفتگو کرتے وقت جلد بازی اور شور کے بجائے دھیمے، صاف اور باوقار لہجے میں بات کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Baat-cheet ka maqsad apni zaban-dani ka ro'b jamana nahi balkay mukhatib ke dil tak baat pohanchana hota hai. Thehar kar aur wazeh alfaz mein bolne se waqar bhi qayam rehta hai aur ghalat-fahmi ka imkan bhi khatam ho jata hai. Aaj ka amli sabaq yeh hai ke guftugu karte waqt jald-bazi aur shor ke bajaye dheemay, saaf aur ba-waqar lehjay mein baat karein.",
      en: "Context & Practical Lesson: True eloquence lies in clarity and composure rather than rapid, overwhelming speech; speaking calmly ensures mutual understanding and respect."
    },
    tags: [
      { ur: "آدابِ کلام", ro: "Aadab-e-Kalam", en: "Articulate Speech" },
      { ur: "وقارِ گفتگو", ro: "Waqar-e-Guftugu", en: "Composed Communication" }
    ]
  },
  {
    id: "ma-413",
    slug: "wada-wafa-karne-aur-amanat-lautane-ka-kamil-uswah",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sunan Abi Dawud & Makhzan-e-Akhlaq - Page 54",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "وعدے کی تکمیل کے لیے تین دن انتظار اور مخالفین کی امانتوں کی ادائیگی",
      ro: "Waday Ki Takmeel Ke Liye Teen Din Intizar Aur Mukhalifeen Ki Amanaton Ki Adaigi",
      en: "Unmatched Fidelity in Keeping Promises and Returning Trusts Even to Opponents"
    },
    quote: {
      ur: "حضور اکرم ﷺ اپنے وعدے کے اس قدر پابند تھے کہ ایک شخص سے کسی مقام پر ملنے کا وعدہ فرمایا تو اس کے بھول جانے کے باوجود تین دن تک وہیں اس کا انتظار فرماتے رہے؛ اور ہجرت کی شب شدید ترین دشمنی کے باوجود مکہ والوں کی تمام امانتیں لوٹانے کا انتظام فرما کر سفر اختیار کیا۔",
      ro: "Huzoor Akram ﷺ apne waday ke is qadar paband thay ke aik shakhs se kisi maqam par milne ka wada farmaya to us ke bhool jane ke bawajood teen din tak wahin us ka intizar farmate rahe; aur Hijrat ki shab shadeed-tareen dushmani ke bawajood Makkah walon ki tamam amanatein lautane ka intizam farma kar safar ikhtiyar kiya.",
      en: "The Prophet ﷺ honored his word with such fidelity that when a man forgot an appointment, he waited at the agreed spot for three days; and on the night of Migration, despite mortal hostility from the Quraish, he ensured every single trust deposited with him was returned to its owner."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جانی دشمن بھی آپ ﷺ کو ’الصادق الامین‘ مانتے تھے۔ یہ واقعہ بتاتا ہے کہ سچا انسان اپنے مخالف کے معاملے میں بھی کبھی امانت اور وعدے میں خیانت نہیں کرتا۔ آج کا عملی سبق یہ ہے کہ اپنے دیے ہوئے وقت (Time Commitment) اور وعدے کی پابندی کو اپنی شخصیت کی سب سے مضبوط پہچان بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jaani dushman bhi Aap ﷺ ko 'As-Sadiq Al-Ameen' mante thay. Yeh waqia batata hai ke sacha insan apne mukhalif ke muamlay mein bhi kabhi amanat aur waday mein khyanat nahi karta. Aaj ka amli sabaq yeh hai ke apne دیے ہوئے waqt (Time Commitment) aur waday ki pabandi ko apni shakhsiyat ki sab se mazboot pehchan banayein.",
      en: "Context & Practical Lesson: Even bitter opponents trusted the Prophet ﷺ with their valuables. Punctuality and unshakeable fidelity to one's word are the ultimate marks of noble character."
    },
    tags: [
      { ur: "صادق و امین", ro: "Sadiq o Ameen", en: "Trustworthiness" },
      { ur: "پابندیٔ عہد", ro: "Pabandi-e-Ahad", en: "Punctuality & Fidelity" }
    ]
  },
  {
    id: "ma-414",
    slug: "achay-kaam-ka-mashwara-dene-wala-amal-karne-wale-ki-tarah-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 74",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "نیکی کی راہ دکھانے والا اور اپنے بھائی کی اصلاح کرنے والا",
      ro: "Neki Ki Raah Dikhane Wala Aur Apne Bhai Ki Islah Karne Wala",
      en: "Guiding Someone to Good Earns the Reward of Doing It"
    },
    quote: {
      ur: "کوئی بھی شخص دوسرے انسان کی دیانت داری سے بڑھ کر کوئی اچھی عادت اختیار نہیں کر سکتا؛ اور جو شخص کسی بھٹکے ہوئے کو خیر کی راہ دکھاتا ہے وہ ثواب میں عمل کرنے والے کے برابر شریک ہو جاتا ہے۔",
      ro: "Koi bhi shakhs doosre insan ki diyanat-dari se barh kar koi achi aadat ikhtiyar nahi kar sakta; aur jo shakhs kisi bhatkay huye ko khair ki raah dikhata hai woh sawab mein amal karne wale ke barabar shareek ho jata hai.",
      en: "No habit adorns a person more than absolute honesty in dealings; and whoever guides another toward a good deed shares equally in its reward."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: کئی بار انسان کے پاس مال نہیں ہوتا کہ وہ کسی کی مالی مدد کرے، لیکن ایک مخلصانہ مشورہ، اچھی کتاب یا نافع ہنر کی طرف رہنمائی کر دینا کسی کی پوری زندگی سنوار دیتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے علم، تجربے اور اچھے مشورے میں کبھی کنجوسی نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Kai bar insan ke paas maal nahi hota ke woh kisi ki maali madad kare, lekin aik mukhlisana mashwara, achi kitab ya naafai hunar ki taraf rehnumai kar dena kisi ki poori zindagi sanwar deta hai. Aaj ka amli sabaq yeh hai ke apne ilm, tajurbay aur achay mashwaray mein kabhi kanjoosi na karein.",
      en: "Context & Practical Lesson: Even when lacking material wealth, offering sincere guidance, career mentorship, or moral encouragement can transform a life and earn continuous reward."
    },
    tags: [
      { ur: "رہنمائیِ خیر", ro: "Rehnumai-e-Khair", en: "Guiding to Good" },
      { ur: "خلوص", ro: "Khuloos", en: "Sincere Counsel" }
    ]
  },
  {
    id: "ma-415",
    slug: "zyada-bolne-wala-zyada-ghalti-karta-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 81",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "فضول گوئی کا انجام: جو زیادہ بولتا ہے اس کی لغزشیں بڑھ جاتی ہیں",
      ro: "Fuzool-Goi Ka Anjam: Jo Zyada Bolta Hai Us Ki Laghzishein Barh Jati Hain",
      en: "Excessive Speech Multiplies Errors and Erodes Modesty"
    },
    quote: {
      ur: "جو شخص بہت زیادہ بولنے کی عادت ڈال لیتا ہے اس کی غلطیاں اور لغزشیں بڑھ جاتی ہیں؛ جس کی غلطیاں بڑھ جائیں اس کی حیا کم ہو جاتی ہے، جس کی حیا کم ہو جائے اس کا تقویٰ رخصت ہو جاتا ہے، اور جس کا تقویٰ چلا جائے اس کا دل مردہ ہو جاتا ہے۔",
      ro: "Jo shakhs bohot zyada bolne ki aadat daal leta hai us ki ghaltiyan aur laghzishein barh jati hain; jis ki ghaltiyan barh jayein us ki haya kam ho jati hai, jis ki haya kam ho jaye us ka taqwa rukhsat ho jata hai, aur jis ka taqwa chala jaye us ka dil murda ho jata hai.",
      en: "Whoever speaks excessively commits frequent errors; one whose errors multiply loses modesty; one who loses modesty loses piety; and one whose piety departs suffers a deadened heart."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سیدنا عمر فاروقؓ نے اس حکیمانہ زنجیر میں بتا دیا ہے کہ دل کی بربادی کا آغاز ’فضول اور بے حساب بولنے‘ سے ہوتا ہے۔ کم بولنا عقل مندی اور روحانی زندگی کی علامت ہے۔ آج کا عملی سبق یہ ہے کہ اپنی گفتگو کو مختصر، بامقصد اور سچا رکھیں تاکہ آپ کا وقار اور دل کی زندگی محفوظ رہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Sayyiduna Umar Farooq (R.A) ne is hakimana zanjeer mein bata diya hai ke dil ki barbadi ka aaghaz 'fuzool aur be-hisab bolne' se hota hai. Kam bolna aqal-mandi aur roohani zindagi ki alamat hai. Aaj ka amli sabaq yeh hai ke apni guftugu ko mukhtasar, ba-maqsad aur sacha rakhein taake aap ka waqar aur dil ki zindagi mehfooz rahe.",
      en: "Context & Practical Lesson: Hazrat Umar (R.A) traces spiritual decline back to unchecked talkativeness. Practicing brevity and mindfulness in speech protects modesty, piety, and the vitality of the heart."
    },
    tags: [
      { ur: "کم گوئی", ro: "Kam-Goi", en: "Measured Speech" },
      { ur: "حیاتِ قلب", ro: "Hayat-e-Qalb", en: "Living Heart" }
    ]
  },
  {
    id: "ma-416",
    slug: "paanch-cheezein-paanch-jagah-par-milti-hain",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "کامیابی اور سکون کے پانچ خزانے پانچ اعمال میں پوشیدہ ہیں",
      ro: "Kamyabi Aur Sukoon Ke Paanch Khazanay Paanch Aamaal Mein Posheeda Hain",
      en: "Five Spiritual Treasures Found in Five Righteous Practices"
    },
    quote: {
      ur: "ہم نے بے نیازی اور تونگری کو قناعت میں پایا، راحت اور سکون کو دنیا کا لالچ کم کرنے میں پایا، عزت کو خالق و مخلوق کی خدمت میں پایا، اور برکت کو حلال کمائی اور فیاضی میں پایا۔",
      ro: "Hum ne be-niyazi aur tawangari ko qana'at mein paya, rahat aur sukoon ko duniya ka lalach kam karne mein paya, izzat ko Khaliq o makhlooq ki khidmat mein paya, aur barkat ko halal kamai aur fayyazi mein paya.",
      en: "We found true wealth in contentment, inner peace in letting go of worldly greed, lasting honor in humble service to the Creator and creation, and abundance in lawful earning paired with generosity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان عزت، سکون اور برکت تلاش تو کرتا ہے مگر غلط دروازوں پر دستک دیتا ہے؛ تکبر میں عزت ڈھونڈتا ہے اور حرص میں سکون تلاش کرتا ہے۔ سیدنا عثمان غنیؓ نے کامیابی کا درست پتہ بتا دیا ہے۔ آج کا عملی سبق یہ ہے کہ اگر زندگی میں عزت اور برکت چاہتے ہیں تو خدمتِ خلق، قناعت اور حلال روزی کو مضبوطی سے تھام لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan izzat, sukoon aur barkat talash to karta hai magar ghalat darwazon par dastak deta hai; takabbur mein izzat dhoondta hai aur hirs mein sukoon talash karta hai. Sayyiduna Usman Ghani (R.A) ne kamyabi ka durust pata bata diya hai. Aaj ka amli sabaq yeh hai ke agar zindagi mein izzat aur barkat chahte hain to khidmat-e-khalq, qana'at aur halal rozi ko mazbooti se tham lein.",
      en: "Context & Practical Lesson: People often search for peace and honor in the wrong places; true tranquility and respect are found only in contentment, honest work, and serving others."
    },
    tags: [
      { ur: "راحت و برکت", ro: "Rahat o Barkat", en: "Peace & Blessing" },
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" }
    ]
  },
  {
    id: "ma-417",
    slug: "insan-apni-zaban-ke-neechay-chhupa-huwa-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 99",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "انسان اپنی زبان کے نیچے چھپا ہے اور ہر برتن سے وہی چھلکتا ہے جو اس میں ہو",
      ro: "Insan Apni Zaban Ke Neechay Chhupa Hai Aur Har Bartan Se Wahi Chhalakta Hai Jo Us Mein Ho",
      en: "A Person is Hidden Beneath Their Tongue and Every Vessel Pours Forth What It Contains"
    },
    quote: {
      ur: "انسان اپنی زبان کے نیچے چھپا ہوا ہے، جب وہ بولتا ہے تو اس کی اصل قدر و قیمت ظاہر ہو جاتی ہے؛ اور ہر برتن سے وہی چیز باہر چھلکتی ہے جو اس کے اندر بھری ہوئی ہوتی ہے۔",
      ro: "Insan apni zaban ke neechay chhupa huwa hai, jab woh bolta hai to us ki asal qadr-o-qeemat zahir ho jati hai; aur har bartan se wahi cheez bahar chhalakti hai jo us ke andar bhari hui hoti hai.",
      en: "A person remains hidden beneath their tongue—as soon as they speak, their true worth and intellect are revealed; for every vessel pours forth only what is inside it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قیمتی لباس پہنے ہوئے دو انسان ظاہری طور پر ایک جیسے لگتے ہیں، لیکن جیسے ہی وہ منہ کھولتے ہیں تو ایک کے الفاظ سے علم و شائستگی کے پھول جھڑتے ہیں اور دوسرے کے لہجے سے جہالت ظاہر ہو جاتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دل کے برتن کو اچھی سوچ اور علم سے بھریں تاکہ مشکل وقت میں بھی آپ کی زبان سے شائستہ الفاظ ہی نکلیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Qeemati libas pehnay huye do insan zahiri taur par aik jaise lagte hain, lekin jaise hi woh munh kholte hain to aik ke alfaz se ilm o shaistagi ke phool jharte hain aur doosre ke lehjay se jahalat zahir ho jati hai. Aaj ka amli sabaq yeh hai ke apne dil ke bartan ko achi soch aur ilm se bharein taake mushkil waqt mein bhi aap ki zaban se shaista alfaz hi niklein.",
      en: "Context & Practical Lesson: Outward attire can disguise anyone, but speech immediately reveals one's inner upbringing and wisdom. Fill your heart with goodness so your words always reflect grace."
    },
    tags: [
      { ur: "پہچانِ کردار", ro: "Pehchan-e-Kirdar", en: "True Worth" },
      { ur: "شائستہ کلام", ro: "Shaista Kalam", en: "Refined Speech" }
    ]
  },
  {
    id: "ma-418",
    slug: "mehfil-ka-intikhab-ulama-ki-majlis-aur-zikr-ki-barkat",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 104",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "اہلِ علم و حکمت کی صحبت اختیار کرو کیونکہ اس سے مردہ دل زندہ ہوتے ہیں",
      ro: "Ahl-e-Ilm o Hikmat Ki Sohbat Ikhtiyar Karo Kyunkeh Is Se Murda Dil Zinda Hote Hain",
      en: "Sit with Scholars and the Wise, for Wisdom Revives Hearts Like Rain Revives Earth"
    },
    quote: {
      ur: "اے میرے بیٹے! علمائے حق اور دانا لوگوں کی مجلس میں بیٹھنے کو لازم پکڑو اور حکمت کی باتیں غور سے سنو؛ کیونکہ اللہ تعالیٰ نورِ حکمت کے ذریعے مردہ دلوں کو بالکل اسی طرح زندہ فرماتا ہے جس طرح تیز بارش سے بنجر زمین کو سرسبز و شاداب کر دیتا ہے۔",
      ro: "Aye mere betay! Ulama-e-haq aur dana logon ki majlis mein baithne ko lazim pakro aur hikmat ki baatein ghaur se suno; kyunkeh Allah Ta'ala noor-e-hikmat ke zariye murda dilon ko bilkul usi tarah zinda farmata hai jis tarah tez barish se banjar zameen ko sarsabz-o-shadab kar deta hai.",
      en: "O my son! Sit closely in the company of scholars and wise mentors, and listen attentively to words of wisdom; for indeed Allah revives weary hearts with the light of wisdom just as He revives barren earth with abundant rain."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مسلسل دنیاوی جھمیلوں میں رہنے سے انسان کا دل خشک اور بے حس ہونے لگتا ہے۔ اچھی کتابوں کا مطالعہ اور سمجھدار و باعمل لوگوں کی محفل دل پر بارش کی طرح اثر کرتی ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ کم از کم دس منٹ کسی اچھی اخلاقی تحریر کے مطالعے یا کسی دانا انسان کی گفتگو سننے کے لیے مختص کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Musalsal dunyawi jhamelon mein rehne se insan ka dil khushk aur be-his hone lagta hai. Achi kitabon ka mutalia aur samajhdar o ba-amal logon ki mehfil dil par barish ki tarah asar karti hai. Aaj ka amli sabaq yeh hai ke rozana kam az kam das minute kisi achi akhlaqi tehreer ke mutaliye ya kisi dana insan ki guftugu sunne ke liye mukhtas karein.",
      en: "Context & Practical Lesson: Daily worldly stress dries out the spirit; spending time reading moral literature and listening to wise mentors refreshes the heart like spring rain."
    },
    tags: [
      { ur: "مجلسِ علم", ro: "Majlis-e-Ilm", en: "Company of the Wise" },
      { ur: "احیائے قلب", ro: "Ihya-e-Qalb", en: "Reviving the Heart" }
    ]
  },
  {
    id: "ma-419",
    slug: "sachai-ka-rasta-aur-usool-par-qayam-rehna",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 276 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "جب تم اپنے کردار کو درست کر لو تو لوگوں کی تنقید کی پروا نہ کرو",
      ro: "Jab Tum Apne Kirdar Ko Durust Kar Lo To Logon Ki Tanqeed Ki Parwa Na Karo",
      en: "Keep Your Conscience Clear with God and Do Not Fear Unjust Criticism"
    },
    quote: {
      ur: "سب لوگوں کو بیک وقت خوش رکھنا ایک ایسا مقصد ہے جو کبھی حاصل نہیں ہو سکتا؛ لہٰذا تم وہ کام کرو جو تمہارے اور تمہارے رب کے درمیان درست اور حق ہو، پھر لوگوں کی بے جا ملامت کی پروا مت کرو۔",
      ro: "Sab logon ko ba-yak-waqt khush rakhna aik aisa maqsad hai jo kabhi hasil nahi ho sakta; lehaza tum woh kaam karo jo tumhare aur tumhare Rab ke darmiyan durust aur haq ho, phir logon ki be-ja malamat ki parwa mat karo.",
      en: "Trying to please every single person is an impossible goal; therefore, focus on what is right and sincere between you and your Creator, and do not be troubled by unjust criticism."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جو انسان ہر فیصلے میں یہ سوچتا رہے کہ ’لوگ کیا کہیں گے‘ وہ کبھی کوئی اصولی اور بڑا کام نہیں کر پاتا، کیونکہ دنیا نہ سخی کو بخشتی ہے نہ کفایت شعار کو۔ آج کا عملی سبق یہ ہے کہ اپنے ضمیر اور اللہ کی رضا کو معیار بنائیں؛ اگر آپ حق پر ہیں تو لوگوں کی باتوں سے دل چھوٹا نہ کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Jo insan har faislay mein yeh sochta rahe ke 'log kya kahenge' woh kabhi koi usooli aur bada kaam nahi kar pata, kyunkeh duniya na sakhi ko bakhshati hai na kifayat-shiar ko. Aaj ka amli sabaq yeh hai ke apne zameer aur Allah ki raza ko miyar banayein; agar aap haq par hain to logon ki baaton se dil chota na karein.",
      en: "Context & Practical Lesson: Living in fear of 'what people will say' paralyzes moral courage. Anchor your choices in truth and a clear conscience."
    },
    tags: [
      { ur: "ضمیر کی آواز", ro: "Zameer Ki Aawaz", en: "Clear Conscience" },
      { ur: "خود اعتمادی", ro: "Khud-Aitmadi", en: "Moral Courage" }
    ]
  },
  {
    id: "ma-420",
    slug: "pahari-wadi-ki-bazgasht-zindagi-tumhein-wahi-lautati-hai",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 368 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "پہاڑی وادی کی بازگشت: زندگی تمہیں وہی لوٹاتی ہے جو تم دیتے ہو",
      ro: "Pahari Wadi Ki Bazgasht: Zindagi Tumhein Wahi Lautati Hai Jo Tum Dete Ho",
      en: "The Mountain Echo: Life Always Returns the Voice You Send Out"
    },
    quote: {
      ur: "ایک بچہ اپنے والد کے ساتھ پہاڑی وادی میں گیا اور ٹھوکر لگنے پر چلایا: ’تم کون ہو؟‘ تو پہاڑوں سے وہی آواز واپس آئی؛ بچے نے غصے سے برا کہا تو وادی سے بھی وہی کڑوی آواز پلٹ آئی؛ تب والد نے مسکرا کر کہا: بیٹا! اب پکار کر کہو ’میں تمہاری عزت کرتا ہوں‘؛ جب میٹھی آواز واپس آئی تو باپ نے سمجھایا کہ لوگ اسے گونج کہتے ہیں مگر اصل میں یہی زندگی کا قانون ہے۔",
      ro: "Aik bacha apne walid ke sath pahari wadi mein gaya aur thokar lagne par chillaya: 'Tum kaun ho?' to paharon se wahi aawaz wapis aayi; bachay ne ghusse se bura kaha to wadi se bhi wahi karwi aawaz palat aayi; tab walid ne muskura kar kaha: Beta! Ab pukar kar kaho 'Main tumhari izzat karta hoon'; jab meethi aawaz wapis aayi to baap ne samjhaya ke log isay goonj kehte hain magar asal mein yehi zindagi ka qanoon hai.",
      en: "Walking through a mountain valley, a boy shouted in frustration and heard the cliffs shout back in the same harsh tone; his father then told him to call out, 'I respect you and wish you well!' When the valley echoed back with warmth, the father explained: 'People call this an echo, my son, but in truth, this is how life works—it always returns to you what you send out.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: یہ خوبصورت تمثیل مکافاتِ عمل اور انسانی رویوں کا آئینہ ہے۔ ہم دنیا کو جو لہجہ، جو نیت اور جو سلوک دیتے ہیں، دیر یا سویرے وہی گونج بن کر ہمارے اپنے دروازے پر واپس آتا ہے۔ آج کا عملی سبق یہ ہے کہ اگر آپ چاہتے ہیں کہ دنیا آپ سے محبت اور عزت کرے، تو پہلے خود اپنے الفاظ اور عمل سے خیر کی آواز بلند کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Yeh khoobsurat tamseel mukafat-e-amal aur insani rawaiyon ka aaina hai. Hum duniya ko jo lehja, jo niyat aur jo sulook dete hain, der ya saweray wahi goonj ban kar hamare apne darwazay par wapis aata hai. Aaj ka amli sabaq yeh hai ke agar aap chahte hain ke duniya aap se mohabbat aur izzat kare, to pehle khud apne alfaz aur amal se khair ki aawaz buland karein.",
      en: "Context & Practical Lesson: Our social world acts like a mountain valley: hostility echoes back as conflict, while kindness, respect, and honesty inevitably return to bless the giver."
    },
    tags: [
      { ur: "صدائے عمل", ro: "Sada-e-Amal", en: "Law of Reciprocity" },
      { ur: "مثبت رویہ", ro: "Musbat Rawaiya", en: "Positive Conduct" }
    ]
  }
];

export const batch29Quotes: QuoteItem[] = [
  {
    id: "ma-421",
    slug: "allah-ki-rehmat-se-kabhi-mayous-na-hona",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Az-Zumar (39:53) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "گناہ کتنے ہی بڑے ہوں، اللہ کی رحمت سے کبھی مایوس نہ ہونا",
      ro: "Gunah Kitne Hi Bade Hon, Allah Ki Rehmat Se Kabhi Mayous Na Hona",
      en: "Never Despair of the Mercy of Allah, for He Forgives All Sins"
    },
    quote: {
      ur: "آپ فرما دیجیے کہ اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی ہے! اللہ کی رحمت سے ہرگز ناامید مت ہو؛ بے شک اللہ تمام گناہوں کو بخش دیتا ہے، یقیناً وہی بہت بخشنے والا، نہایت مہربان ہے۔",
      ro: "Aap farma dijiye ke aye Mere bando jinhon ne apni jaanon par ziyadati ki hai! Allah ki rehmat se hargiz na-umeed mat ho; be-shak Allah tamam gunahon ko bakhsh deta hai, yaqeenan Wahi bohot bakhshne wala, nihayat meharban hai.",
      en: "Say: 'O My servants who have transgressed against themselves! Never despair of the mercy of Allah. Indeed, Allah forgives all sins; truly, He is the Most Forgiving, the Most Merciful.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مفسرین نے سورۃ الزمر کی اس آیت کو قرآن مجید کی سب سے زیادہ امید دلانے والی آیت قرار دیا ہے۔ انسان سے خطا ہو جانا فطری ہے، لیکن غلطی کے بعد مایوس ہو کر بیٹھ جانا شیطان کا پھندا ہے۔ آج کا عملی سبق یہ ہے کہ ماضی کی کسی بھی کوتاہی یا ناکامی سے دل برداشتہ نہ ہوں بلکہ سچے دل سے توبہ کر کے ایک نئی اور پاکیزہ زندگی کا آغاز کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Mufassireen ne Surah Az-Zumar ki is aayat ko Quran Majeed ki sab se zyada umeed dilane wali aayat qarar diya hai. Insan se khata ho jana fitri hai, lekin ghalti ke baad mayous ho kar baith jana shaitan ka phanda hai. Aaj ka amli sabaq yeh hai ke mazi ki kisi bhi kotahi ya nakami se dil-bardashta na hon balkay sache dil se tauba kar ke aik nayi aur pakeeza zindagi ka aaghaz karein.",
      en: "Context & Practical Lesson: Scholars regard this verse of Surah Az-Zumar as the most hopeful verse in the Quran: no matter how heavy one's past mistakes, sincere repentance immediately opens the door to complete divine forgiveness and a fresh start."
    },
    tags: [
      { ur: "رحمت و امید", ro: "Rehmat o Umeed", en: "Mercy & Hope" },
      { ur: "مغفرت", ro: "Maghfirat", en: "Forgiveness" }
    ]
  },
  {
    id: "ma-422",
    slug: "ehsan-ka-badla-ehsan-ke-siwa-kya-ho-sakta-hai",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Ar-Rahman (55:60) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "احسان اور بھلائی کا بدلہ احسان کے سوا کچھ نہیں ہے",
      ro: "Ehsan Aur Bhalai Ka Badla Ehsan Ke Siwa Kuch Nahi Hai",
      en: "Is the Reward for Goodness Anything Other Than Goodness?"
    },
    quote: {
      ur: "کیا احسان اور نیکی کا بدلہ احسان اور بھلائی کے سوا کچھ اور ہو سکتا ہے؟",
      ro: "Kya ehsan aur neki ka badla ehsan aur bhalai ke siwa kuch aur ho sakta hai?",
      en: "Is there any reward for goodness other than goodness?"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الرحمٰن کی یہ مختصر آیت خالق اور مخلوق دونوں کے ساتھ ہمارے تعلق کا بنیادی اصول ہے۔ جو بندہ دنیا میں اپنے کام، اخلاق اور عبادت میں احسان (عمدگی) اختیار کرتا ہے، اللہ تعالیٰ اسے دنیا و آخرت میں بہترین جزا عطا فرماتا ہے؛ اور اخلاقی طور پر جو انسان آپ کے ساتھ نیکی کرے اس کی قدردانی کرنا فرض ہے۔ آج کا عملی سبق یہ ہے کہ کبھی کسی محسن کے احسان کو فراموش نہ کریں اور بھلائی کا جواب اس سے بڑھ کر بھلائی سے دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ar-Rahman ki yeh mukhtasar aayat Khaliq aur makhlooq dono ke sath hamare talluq ka bunyadi usool hai. Jo banda duniya mein apne kaam, akhlaq aur ibadat mein ehsan (umdagi) ikhtiyar karta hai, Allah Ta'ala usay duniya o akhirat mein behtareen jaza ata farmata hai; aur akhlaqi taur par jo insan aap ke sath neki kare us ki qadr-dani karna farz hai. Aaj ka amli sabaq yeh hai ke kabhi kisi mohsin ke ehsan ko faramosh na karein aur bhalai ka jawab us se barh kar bhalai se dein.",
      en: "Context & Practical Lesson: Surah Ar-Rahman establishes the universal law of gratitude and excellence: goodness shown to creation is rewarded with multiplied grace by the Creator, and every human kindness deserves heartfelt appreciation."
    },
    tags: [
      { ur: "جزا و احسان", ro: "Jaza o Ehsan", en: "Reciprocal Goodness" },
      { ur: "قدردانی", ro: "Qadr-Dani", en: "Appreciation" }
    ]
  },
  {
    id: "ma-423",
    slug: "jo-tum-pasand-nahi-karte-ho-sakta-hai-us-mein-tumhari-bhalai-ho",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Baqarah (2:216) & Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اللہ کی حکمت پر بھروسہ: ناگوار حالات میں چھپی ہوئی بھلائی",
      ro: "Allah Ki Hikmat Par Bharosa: Nagawar Halaat Mein Chhupi Hui Bhalai",
      en: "Trusting Divine Wisdom: What You Dislike May Hold Your Greatest Good"
    },
    quote: {
      ur: "قریب ہے کہ تم کسی چیز کو ناپسند کرو حالانکہ وہ تمہارے حق میں بہتر ہو، اور ہو سکتا ہے کہ تم کسی چیز کو پسند کرو حالانکہ وہ تمہارے حق میں بری ہو؛ اور اللہ ہی حقیقت جانتا ہے اور تم نہیں جانتے۔",
      ro: "Qareeb hai ke tum kisi cheez ko napasand karo halankeh woh tumhare haq mein behtar ho, aur ho sakta hai ke tum kisi cheez ko pasand karo halankeh woh tumhare haq mein buri ho; aur Allah hi haqeeqat jaanta hai aur tum nahi jaante.",
      en: "Perhaps you dislike a thing while it is actually good for you, and perhaps you love a thing while it is actually harmful for you; and Allah knows, whereas you do not know."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان کی نظر صرف حال کے لمحے کو دیکھتی ہے جبکہ رب کی نگاہ آنے والے کل کے انجام کو بھی دیکھ رہی ہوتی ہے۔ کتنے ہی کاروباری یا ذاتی مواقع ہاتھ سے نکل جانے پر انسان وقتی طور پر افسردہ ہوتا ہے، مگر بعد میں کھلتا ہے کہ اللہ نے اسے بڑے نقصان سے بچا لیا تھا۔ آج کا عملی سبق یہ ہے کہ اپنی پوری تدبیر کرنے کے بعد نتیجہ اللہ کے حوالے کر دیں اور اس کے ہر فیصلے میں خیر تلاش کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan ki nazar sirf haal ke lamhay ko dekhti hai jabkeh Rab ki nigah aane wale kal ke anjam ko bhi dekh rahi hoti hai. Kitne hi karobari ya zaati mawaqe hath se nikal jane par insan waqti taur par afsurda hota hai, magar baad mein khulta hai ke Allah ne usay bade nuqsan se bacha liya tha. Aaj ka amli sabaq yeh hai ke apni poori tadbeer karne ke baad nateeja Allah ke hawalay kar dein aur Us ke har faislay mein khair talash karein.",
      en: "Context & Practical Lesson: Human sight sees only the immediate moment, whereas God sees the distant outcome. When a plan falls through despite honest effort, trust that divine wisdom is shielding you for something better."
    },
    tags: [
      { ur: "حکمتِ الٰہی", ro: "Hikmat-e-Ilahi", en: "Divine Wisdom" },
      { ur: "رضا بالقضاء", ro: "Raza Bil-Qaza", en: "Contentment with Decree" }
    ]
  },
  {
    id: "ma-424",
    slug: "jo-logon-ka-shukr-ada-nahi-karta-woh-allah-ka-shukr-nahi-karta",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Tirmidhi & Makhzan-e-Akhlaq - Page 31",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "جو انسانوں کا شکریہ ادا نہیں کرتا وہ اللہ کا بھی شکر گزار نہیں ہوتا",
      ro: "Jo Insanon Ka Shukriya Ada Nahi Karta Woh Allah Ka Bhi Shukr-Guzar Nahi Hota",
      en: "Whoever Does Not Thank People Does Not Truly Thank Allah"
    },
    quote: {
      ur: "جو شخص لوگوں کے احسان کا شکریہ ادا نہیں کرتا وہ اللہ تعالیٰ کا بھی شکر ادا نہیں کرتا؛ اور اگر کوئی تمہارے ساتھ بھلائی کرے تو اس کا بدلہ دو، اور اگر بدلہ دینے کی طاقت نہ ہو تو اس کے لیے اتنی دعا کرو کہ تمہیں یقین ہو جائے کہ تم نے اس کا حق ادا کر دیا۔",
      ro: "Jo shakhs logon ke ehsan ka shukriya ada nahi karta woh Allah Ta'ala ka bhi shukr ada nahi karta; aur agar koi tumhare sath bhalai kare to us ka badla do, aur agar badla dene ki taqat na ho to us ke liye itni dua karo ke tumhein yaqeen ho jaye ke tum ne us ka haq ada kar diya.",
      en: "Whoever is not grateful to people is not grateful to Allah; and whoever does you a favor, repay them—and if you find nothing to repay them with, pray for them until you know you have fulfilled their due."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اللہ تعالیٰ اپنی نعمتیں انسانوں ہی کے ہاتھوں انسانوں تک پہنچاتا ہے۔ جو شخص والدین، اساتذہ، رفقاء یا کسی مددگار کی چھوٹی سی خدمت پر بھی شکریہ ادا کرنے میں بخل کرتا ہے، اس کا دل شکر کی صفت سے خالی ہے۔ آج کا عملی سبق یہ ہے کہ گھر اور باہر ہر چھوٹی بڑی مدد پر مسکرا کر ’جزاک اللہ خیراً‘ اور شکریہ کہنے کو اپنی مستقل عادت بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Allah Ta'ala apni nematein insanon hi ke hathon insanon tak pohanchata hai. Jo shakhs walideen, asatiza, rufaqa ya kisi madadgar ki choti si khidmat par bhi shukriya ada karne mein bukhl karta hai, us ka dil shukr ki sifat se khali hai. Aaj ka amli sabaq yeh hai ke ghar aur bahar har choti-badi madad par muskura kar 'JazakAllahu Khairan' aur shukriya kehne ko apni mustaqil aadat banayein.",
      en: "Context & Practical Lesson: Expressing genuine thanks—and saying 'JazakAllahu Khairan' to family members, workers, and friends for their everyday kindness—is a core pillar of spiritual gratitude."
    },
    tags: [
      { ur: "شکرِ محسن", ro: "Shukr-e-Mohsin", en: "Thanking Benefactors" },
      { ur: "شائستگی", ro: "Shaistagi", en: "Courtesy" }
    ]
  },
  {
    id: "ma-425",
    slug: "momin-ki-shan-har-haal-mein-khair-shukr-aur-sabr",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim & Makhzan-e-Akhlaq - Page 32",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مومن کا معاملہ عجیب ہے: خوشحالی میں شکر اور تکلیف میں صبر",
      ro: "Momin Ka Muamla Ajeeb Hai: Khushhali Mein Shukr Aur Takleef Mein Sabr",
      en: "Wondrous is the Affair of the Believer: Gratitude in Ease and Patience in Trial"
    },
    quote: {
      ur: "مومن کا معاملہ بھی کتنا عجیب اور قابلِ رشک ہے کہ اس کے ہر حال میں اس کے لیے بھلائی ہی بھلائی ہے؛ اگر اسے خوشحالی اور راحت ملتی ہے تو وہ شکر کرتا ہے اور یہ اس کے لیے خیر بن جاتی ہے، اور اگر اسے کوئی تکلیف پہنچتی ہے تو وہ صبر کرتا ہے اور یہ بھی اس کے لیے خیر اور اجر بن جاتی ہے۔",
      ro: "Momin ka muamla bhi kitna ajeeb aur qabil-e-rashk hai ke us ke har haal mein us ke liye bhalai hi bhalai hai; agar usay khushhali aur rahat milti hai to woh shukr karta hai aur yeh us ke liye khair ban jati hai, aur agar usay koi takleef pohanchti hai to woh sabr karta hai aur yeh bhi us ke liye khair aur ajr ban jati hai.",
      en: "Wondrous is the affair of the believer, for there is good for them in every situation: if prosperity comes to them, they give thanks and it is good for them; and if adversity strikes them, they endure with patience and it too is good for them."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: یہ حدیثِ مبارکہ انسان کو ہر حال میں ’جیتنے والا‘ (Win-Win Mindset) بناتی ہے۔ ایمان والے کے دو ہی پر ہوتے ہیں: نعمت ملے تو شکر کے پر سے اڑتا ہے، اور آزمائش آئے تو صبر کے پر سے بلندی پاتا ہے۔ آج کا عملی سبق یہ ہے کہ زندگی کے اتار چڑھاؤ میں مایوس ہونے کے بجائے شکر اور صبر کے ذریعے ہر دن کو اپنی کامیابی بنا لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Yeh hadees-e-mubaraka insan ko har haal mein 'jeetne wala' (Win-Win Mindset) banati hai. Eman wale ke do hi par hote hain: nemat milay to shukr ke par se urta hai, aur aazmaish aaye to sabr ke par se bulandi pata hai. Aaj ka amli sabaq yeh hai ke zindagi ke utar-charhao mein mayous hone ke bajaye shukr aur sabr ke zariye har din ko apni kamyabi bana lein.",
      en: "Context & Practical Lesson: Faith equips the soul with two wings—gratitude in prosperity and patience in hardship—ensuring that no season of life is ever wasted."
    },
    tags: [
      { ur: "صبر و شکر", ro: "Sabr o Shukr", en: "Patience & Gratitude" },
      { ur: "مثبت زاویہ", ro: "Musbat Zawiya", en: "Resilient Mindset" }
    ]
  },
  {
    id: "ma-426",
    slug: "rizq-aur-umar-mein-barkat-sila-rehmi-mein-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 33",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "رزق کی کشادگی اور عمر کی برکت صلہ رحمی میں پوشیدہ ہے",
      ro: "Rizq Ki Kushadgi Aur Umar Ki Barkat Sila-Rehmi Mein Posheeda Hai",
      en: "Abundance in Provision and Blessing in Life Span Come Through Maintaining Family Ties"
    },
    quote: {
      ur: "جس شخص کو یہ پسند ہو کہ اس کے رزق میں کشادگی و برکت کر دی جائے اور اس کی عمر دراز کر دی جائے، تو اسے چاہیے کہ اپنے خون کے رشتوں کو جوڑے اور صلہ رحمی کرے؛ اور اصل صلہ رحمی کرنے والا وہ ہے کہ جب رشتہ دار اس سے تعلق توڑیں تب بھی وہ ان سے تعلق جوڑے۔",
      ro: "Jis shakhs ko yeh pasand ho ke us ke rizq mein kushadgi o barkat kar di jaye aur us ki umar daraz kar di jaye, to usay chahiye ke apne khoon ke rishton ko joray aur sila-rehmi kare; aur asal sila-rehmi karne wala woh hai ke jab rishtedar us se talluq torein tab bhi woh un se talluq joray.",
      en: "Whoever wishes to have their provision expanded and their life span blessed should uphold the ties of kinship; and the true upholder of kinship is not the one who merely reciprocates, but the one who reconnects even when relatives cut them off."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اچھے کے ساتھ اچھا سلوک کرنا تو محض بدلہ چکانا ہے؛ کمال یہ ہے کہ اگر کوئی بھائی، بہن یا قریبی رشتہ دار سرد مہری دکھائے تب بھی آپ اس کی خبرگیری اور عزت جاری رکھیں۔ آج کا عملی سبق یہ ہے کہ اپنے قریبی رشتہ داروں سے فون یا ملاقات کے ذریعے رابطہ رکھیں کیونکہ اس سے آپ کے اپنے رزق اور گھر میں برکت اترتی ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Achay ke sath acha sulook karna to mehaz badla chukana hai; kamal yeh hai ke agar koi bhai, behan ya qareebi rishtedar sard-mehri dikhaye tab bhi aap us ki khabargeeri aur izzat jari rakhein. Aaj ka amli sabaq yeh hai ke apne qareebi rishtedaron se phone ya mulaqat ke zariye rabta rakhein kyunkeh is se aap ke apne rizq aur ghar mein barkat utarti hai.",
      en: "Context & Practical Lesson: Treating kind relatives well is mere reciprocity; true nobility is reaching out to mend family bonds even when others grow distant—unlocking immense blessing in one's livelihood."
    },
    tags: [
      { ur: "صلہ رحمی", ro: "Sila-Rehmi", en: "Kinship Ties" },
      { ur: "وسعتِ رزق", ro: "Wus'at-e-Rizq", en: "Blessed Provision" }
    ]
  },
  {
    id: "ma-427",
    slug: "shujaat-o-bahaduri-aur-mushkil-waqt-mein-sabit-qadmi",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 55",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "خطرے اور خوف کے لمحات میں بے مثال شجاعت اور ثابت قدمی",
      ro: "Khatray Aur Khauf Ke Lamhat Mein Be-Misal Shujaat Aur Sabit-Qadmi",
      en: "Unmatched Courage and Calmness in Moments of Sudden Danger"
    },
    quote: {
      ur: "رسول اللہ ﷺ تمام انسانوں میں سب سے زیادہ حسین، سب سے زیادہ سخی اور سب سے زیادہ بہادر تھے؛ ایک رات مدینہ منورہ میں خوفناک آواز آئی تو لوگ ابھی گھروں سے نکل ہی رہے تھے کہ آپ ﷺ اکیلے ہی اس سمت کا جائزہ لے کر واپس تشریف لا رہے تھے اور لوگوں کو تسلی دیتے ہوئے فرما رہے تھے: گھبراؤ نہیں، سب خیر ہے!",
      ro: "Rasool Allah ﷺ tamam insanon mein sab se zyada haseen, sab se zyada sakhi aur sab se zyada bahadur thay; aik raat Madinah Munawwara mein khaufnak aawaz aayi to log abhi gharon se nikal hi rahe thay ke Aap ﷺ akele hi us simt ka jaiza le kar wapis tashreef la rahe thay aur logon ko tasalli dete huye farma rahe thay: Ghabrao nahi, sab khair hai!",
      en: "The Messenger of Allah ﷺ was the most generous and the bravest of all people: one night when a sudden, alarming sound startled Madinah, before people could even gather, he had already ridden out alone toward the danger and returned reassuring them: 'Do not be afraid, all is safe!'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حقیقی قائد وہ ہوتا ہے جو مشکل کے وقت دوسروں کو آگے کرنے کے بجائے خود سب سے آگے کھڑا ہو اور خوفزدہ دلوں کو سکون بخشے۔ آج کا عملی سبق یہ ہے کہ جب گھر یا کام کی جگہ پر کوئی اچانک پریشانی آ جائے تو گھبراہٹ پھیلانے کے بجائے حوصلے سے کام لیں اور اپنے ساتھیوں کی ڈھارس بندھائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Haqeeqi qaid woh hota hai jo mushkil ke waqt doosron ko aagay karne ke bajaye khud sab se aagay khara ho aur khaufzada dilon ko sukoon bakhshay. Aaj ka amli sabaq yeh hai ke jab ghar ya kaam ki jagah par koi achanak pareshani aa jaye to ghabrahat phailane ke bajaye hauslay se kaam lein aur apne sathiyon ki dharas bandhayein.",
      en: "Context & Practical Lesson: True leadership steps to the front line during a crisis, replacing panic with calm reassurance and decisive courage."
    },
    tags: [
      { ur: "شجاعتِ نبوی ﷺ", ro: "Shujaat-e-Nabawi ﷺ", en: "Prophetic Courage" },
      { ur: "ثابت قدمی", ro: "Sabit-Qadmi", en: "Composure in Crisis" }
    ]
  },
  {
    id: "ma-428",
    slug: "sakhawat-mein-tez-chalti-hawa-se-bhi-zyada-fayyaz",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 56",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "تیز چلتی ہوئی رحمت کی ہوا سے بھی زیادہ فیاضی اور سخاوت",
      ro: "Tez Chalti Hui Rehmat Ki Hawa Se Bhi Zyada Fayyazi Aur Sakhawat",
      en: "More Generous in Giving Than the Swift, Rain-Bearing Wind"
    },
    quote: {
      ur: "حضور اکرم ﷺ بھلائی اور سخاوت کرنے میں تیز چلتی ہوئی ہوا سے بھی زیادہ فیاض تھے؛ آپ ﷺ سے جب بھی اسلام کی خاطر کوئی چیز مانگی گئی تو آپ ﷺ نے کبھی ’نہیں‘ نہیں فرمایا، اور شام سے پہلے اپنے پاس موجود مال ضرورت مندوں میں تقسیم فرما دیتے۔",
      ro: "Huzoor Akram ﷺ bhalai aur sakhawat karne mein tez chalti hui hawa se bhi zyada fayyaz thay; Aap ﷺ se jab bhi Islam ki khatir koi cheez mangi gayi to Aap ﷺ ne kabhi 'nahi' nahi farmaya, aur sham se pehle apne paas mojood maal zaroorat-mandon mein taqseem farma dete.",
      en: "The Prophet ﷺ was more generous in doing good than the swift, rain-bearing wind; he never once said 'no' when asked for something in the cause of goodness, distributing whatever came to him among the needy before nightfall."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: جس طرح رحمت کی ہوا کسی خاص علاقے یا طبقے کی تفریق کیے بغیر ہر طرف ٹھنڈک اور بارش پہنچاتی ہے، بالکل اسی طرح آپ ﷺ کی سخاوت کا فیض ہر خاص و عام کے لیے کھلا رہتا تھا۔ آج کا عملی سبق یہ ہے کہ اپنے رزق اور علم میں سے دوسروں کو بانٹنے کا ذوق پیدا کریں کیونکہ دینے سے کبھی مال کم نہیں ہوتا۔",
      ro: "Pas-e-Manzar o Tashreeh: Jis tarah rehmat ki hawa kisi khas ilaqay ya tabqay ki tafreeq kiye baghair har taraf thandak aur barish pohanchati hai, bilkul isi tarah Aap ﷺ ki sakhawat ka faiz har khas-o-aam ke liye khula rehta tha. Aaj ka amli sabaq yeh hai ke apne rizq aur ilm mein se doosron ko bantne ka zauq paida karein kyunkeh dene se kabhi maal kam nahi hota.",
      en: "Context & Practical Lesson: Like a gentle breeze that refreshes every garden alike, prophetic generosity shares blessings freely without fear of scarcity."
    },
    tags: [
      { ur: "جود و سخا", ro: "Jood o Sakha", en: "Unbounded Generosity" },
      { ur: "فیضِ رحمت", ro: "Faiz-e-Rehmat", en: "Benevolence" }
    ]
  },
  {
    id: "ma-429",
    slug: "taqwa-se-barh-kar-koi-izzat-nahi-aur-gunah-chhorna-afzal-jihad",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 75",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "پرہیزگاری سے بڑھ کر کوئی شرافت نہیں اور سچائی بہترین سفارش ہے",
      ro: "Parhezgari Se Barh Kar Koi Sharafat Nahi Aur Sachai Behtareen Sifarish Hai",
      en: "No Nobility Exceeds Piety and No Intercessor Is Stronger Than Truth"
    },
    quote: {
      ur: "تقویٰ اور پرہیزگاری سے بڑھ کر کوئی خاندانی شرافت نہیں، نفس کی اصلاح سے بڑھ کر کوئی بزرگی نہیں، اور اپنے عیبوں پر نظر رکھنے سے بڑھ کر کوئی ہوشمندی نہیں۔",
      ro: "Taqwa aur parhezgari se barh kar koi khandani sharafat nahi, nafs ki islah se barh kar koi buzurgi nahi, aur apne aibon par nazar rakhne se barh kar koi hoshmandi nahi.",
      en: "There is no nobility higher than God-consciousness, no greatness finer than reforming one's own soul, and no intelligence sharper than recognizing one's own shortcomings."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان دنیا میں بڑے ناموں کی سفارش اور خاندانی نسبتوں پر تکیہ کرتا ہے، جبکہ اصل شرافت اور کامیابی انسان کے اپنے پاکیزہ کردار میں ہے۔ جو شخص دوسروں کی ٹوہ لگانے کے بجائے اپنی خامیوں کو درست کرنے میں لگ جائے، وہی سب سے بڑا عقلمند ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ اپنے ایک اخلاقی عیب کو دور کرنے کا عزم کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan duniya mein bade naamon ki sifarish aur khandani nisbaton par takiya karta hai, jabkeh asal sharafat aur kamyabi insan ke apne pakeeza kirdar mein hai. Jo shakhs doosron ki toh lagane ke bajaye apni khamiyon ko durust karne mein lag jaye, wahi sab se bada aqal-mand hai. Aaj ka amli sabaq yeh hai ke rozana apne aik akhlaqi aib ko door karne ka azm karein.",
      en: "Context & Practical Lesson: True nobility is earned through personal character rather than inherited titles; focusing on correcting our own flaws is the highest form of wisdom."
    },
    tags: [
      { ur: "شرافتِ کردار", ro: "Sharafat-e-Kirdar", en: "True Nobility" },
      { ur: "اصلاحِ ذات", ro: "Islah-e-Zaat", en: "Self-Reform" }
    ]
  },
  {
    id: "ma-430",
    slug: "hum-woh-qoum-hain-jinhein-allah-ne-islam-ke-zariye-izzat-di",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 82 (Mustadrak Hakim)",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "ہماری حقیقی عزت دین کے اخلاق، عدل اور سادگی میں ہے",
      ro: "Hamari Haqeeqi Izzat Deen Ke Akhlaq, Adal Aur Sadgi Mein Hai",
      en: "True Honor Lies in Moral Principles and Simplicity, Not Worldly Pomp"
    },
    quote: {
      ur: "ہم وہ لوگ ہیں جنہیں اللہ تعالیٰ نے اسلام کے اصولوں، عدل اور سچائی کے ذریعے عزت عطا فرمائی ہے؛ پس جب بھی ہم اللہ کے دیے ہوئے طریقے کو چھوڑ کر جھوٹی نمود و نمائش میں عزت تلاش کریں گے تو ہم ذلیل و خوار ہو جائیں گے۔",
      ro: "Hum woh log hain jinhein Allah Ta'ala ne Islam ke usoolon, adal aur sachai ke zariye izzat ata farmai hai; pas jab bhi hum Allah ke diye huye tareeqay ko chhor kar jhooti numood-o-numaish mein izzat talash karenge to hum zaleel-o-khwar ho jayenge.",
      en: "We are a people whom Allah honored through the moral truth and justice of Islam; whenever we seek honor in worldly pomp and artificial display instead of what Allah gave us, we will only lose our dignity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بیت المقدس کے سفر کے موقع پر سیدنا عمر فاروقؓ نے پیوند لگے سادہ لباس میں یہ تاریخی جملہ ارشاد فرمایا تھا۔ عزت قیمتی پوشاک اور دکھاوے کی تقریبات سے نہیں بلکہ سچائی، عدل اور باوقار سادگی سے ملتی ہے۔ آج کا عملی سبق یہ ہے کہ شادی بیاہ اور روزمرہ زندگی میں جھوٹی شان و شوکت کا بوجھ اتار کر سادگی اور سچائی کو اپنی پہچان بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bait-ul-Maqdis ke safar ke mauqay par Sayyiduna Umar Farooq (R.A) ne paiwand lagay sada libas mein yeh tareekhi jumla irshad farmaya tha. Izzat qeemati poshak aur dikhavay ki taqreebat se nahi balkay sachai, adal aur ba-waqar sadgi se milti hai. Aaj ka amli sabaq yeh hai ke shadi-byah aur rozmarra zindagi mein jhooti shaan-o-shaukat ka bojh utar kar sadgi aur sachai ko apni pehchan banayein.",
      en: "Context & Practical Lesson: Spoken by Hazrat Umar (R.A) upon entering Jerusalem in humble attire, this timeless statement reminds us that respect comes from justice, honesty, and simplicity—never from extravagant show."
    },
    tags: [
      { ur: "وقارِ سادگی", ro: "Waqar-e-Sadgi", en: "Dignified Simplicity" },
      { ur: "عزتِ حقیقی", ro: "Izzat-e-Haqeeqi", en: "True Honor" }
    ]
  },
  {
    id: "ma-431",
    slug: "zuban-ki-laghzish-qadam-ki-laghzish-se-zyada-khatarnak-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 91",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "زبان کی ٹھوکر پاؤں کی ٹھوکر سے کہیں زیادہ خطرناک ہوتی ہے",
      ro: "Zuban Ki Thokar Paon Ki Thokar Se Kahin Zyada Khatarnak Hoti Hai",
      en: "A Slip of the Tongue is Far More Dangerous Than a Slip of the Foot"
    },
    quote: {
      ur: "پاؤں پھسلنے سے لگنے والی چوٹ تو وقت کے ساتھ بھر جاتی ہے، لیکن زبان پھسلنے سے لگنے والا زخم کبھی نہیں بھرتا اور بسا اوقات انسان کی عزت و سلامتی کو لے ڈوبتا ہے۔",
      ro: "Paon phisalne se lagne wali chot to waqt ke sath bhar jati hai, lekin zuban phisalne se lagne wala zakhm kabhi nahi bharta aur basa-auqat insan ki izzat o salamati ko le doobta hai.",
      en: "The wound caused by a slip of the foot heals with time, whereas the wound inflicted by a slip of the tongue lingers in hearts and can ruin a lifetime of respect."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان چلتے ہوئے زمین پر تو دیکھ کر قدم رکھتا ہے کہ کہیں ٹھوکر نہ لگ جائے، مگر بولتے وقت یہ نہیں سوچتا کہ میرے اس طعنے یا مذاق سے سامنے والے کا دل کتنا چھلنی ہو گا۔ آج کا عملی سبق یہ ہے کہ غصے یا مذاق دونوں حالتوں میں کسی کی ذات پر طنز کرنے سے سختی سے پرہیز کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan chalte huye zameen par to dekh kar qadam rakhta hai ke kahin thokar na lag jaye, magar bolte waqt yeh nahi sochta ke mere is taanay ya mazaq se samne wale ka dil kitna chhalni hoga. Aaj ka amli sabaq yeh hai ke ghusse ya mazaq dono halaton mein kisi ki zaat par tanz karne se sakhti se parhez karein.",
      en: "Context & Practical Lesson: Physical bruises fade quickly, but sarcastic or demeaning words leave deep emotional scars. Step carefully with your words just as you do with your feet."
    },
    tags: [
      { ur: "زخمِ زبان", ro: "Zakhm-e-Zuban", en: "Guarding Speech" },
      { ur: "احترامِ دل", ro: "Ehtiram-e-Dil", en: "Protecting Hearts" }
    ]
  },
  {
    id: "ma-432",
    slug: "ikhtiyar-aur-taqat-milne-par-maaf-karna-shukr-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 100",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "مخالف پر قابو پا لینے کے بعد معاف کر دینا قدرت کا شکرانہ ہے",
      ro: "Mukhalif Par Qaboo Pa Lene Ke Baad Maaf Kar Dena Qudrat Ka Shukrana Hai",
      en: "Pardoning When Able to Punish is the True Gratitude for Power"
    },
    quote: {
      ur: "جب تمہیں اپنے مخالف پر پوری قدرت اور اختیار حاصل ہو جائے تو اسے معاف کر کے اس قدرت کا شکرانہ ادا کرو؛ اور کسی شریف انسان کو شرمندہ کرنے کے لیے اتنا ہی کافی ہے کہ اس سے درگزر کر لیا جائے۔",
      ro: "Jab tumhein apne mukhalif par poori qudrat aur ikhtiyar hasil ho jaye to usay maaf kar ke is qudrat ka shukrana ada karo; aur kisi shareef insan ko sharminda karne ke liye itna hi kafi hai ke us se darguzar kar liya jaye.",
      en: "When you gain full power over an adversary, make your pardon of them an expression of gratitude to Allah for granting you that power; for the noblest victory is forgiveness."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مجبوری میں چپ رہنا بے بسی کہلاتا ہے، لیکن جب آپ بدلہ لینے کی پوری طاقت رکھتے ہوں اور پھر اللہ کی رضا کے لیے معاف کر دیں، تو یہ مردانگی اور عالی ظرفی کی انتہا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے عہدے، طاقت یا برتری کو انتقام کے بجائے درگزر اور اصلاح کے لیے استعمال کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Majboori mein chup rehna be-basi kehlata hai, lekin jab aap badla lene ki poori taqat rakhte hon aur phir Allah ki raza ke liye maaf kar dein, to yeh mardangi aur aali-zarfi ki intiha hai. Aaj ka amli sabaq yeh hai ke apne ohday, taqat ya bartari ko intiqam ke bajaye darguzar aur islah ke liye istemal karein.",
      en: "Context & Practical Lesson: Holding back when helpless is mere necessity, but choosing mercy when you have the upper hand is the highest form of strength and gratitude to God."
    },
    tags: [
      { ur: "عفو عند القدرة", ro: "Afw Indal-Qudrah", en: "Mercy in Power" },
      { ur: "جوانمردی", ro: "Jawanmardi", en: "Magnanimity" }
    ]
  },
  {
    id: "ma-433",
    slug: "achay-akhlaq-se-ajnabi-bhi-apna-ban-jata-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 105",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "حسنِ اخلاق سے اجنبی بھی اپنا ہو جاتا ہے اور بدخلقی سے اپنے بھی پرائے",
      ro: "Husn-e-Akhlaq Se Ajnabi Bhi Apna Ho Jata Hai Aur Bad-Khulqi Se Apne Bhi Paraye",
      en: "Good Character Turns Strangers into Kin While Ill Temper Alienates Family"
    },
    quote: {
      ur: "اے بیٹے! اچھے اخلاق اور میٹھی زبان سے اجنبی انسان بھی سگے بھائی جیسا بن جاتا ہے، اور بدخلقی و ترش روئی سے اپنے سگے بھی کٹ کر پرائے ہو جاتے ہیں؛ پس لوگوں کے ساتھ اس طرح ملو کہ اگر تم نہ رہو تو وہ تمہارے لیے روئیں اور زندہ رہو تو تمہاری صحبت کے مشتاق رہیں۔",
      ro: "Aye betay! Achay akhlaq aur meethi zuban se ajnabi insan bhi sagay bhai jaisa ban jata hai, aur bad-khulqi o tursh-rooi se apne sagay bhi kat kar paraye ho jate hain; pas logon ke sath is tarah milo ke agar tum na raho to woh tumhare liye royein aur zinda raho to tumhari sohbat ke mushtaq rahein.",
      en: "O my son! Through gentle manners a stranger becomes as close as kin, and through harshness one's own kin become distant strangers; live among people in such a way that they long for your company while you live and pray for you when you depart."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی رشتے صرف خون سے نہیں چلتے بلکہ احساس، عزت اور شیریں کلامی سے زندہ رہتے ہیں۔ کڑوا مزاج انسان بھرے پرے خاندان میں بھی تنہا رہ جاتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے گھر والوں اور ملنے جلنے والوں کے لیے ٹھنڈی چھاؤں بنیں تاکہ آپ کی موجودگی باعثِ رحمت ہو۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani rishtay sirf khoon se nahi chalte balkay ehsas, izzat aur shireen-kalami se zinda rehte hain. Karwa mizaj insan bharay-puray khandan mein bhi tanha reh jata hai. Aaj ka amli sabaq yeh hai ke apne ghar walon aur milne-julne walon ke liye thandi chhaon banein taake aap ki mojoodgi bais-e-rehmat ho.",
      en: "Context & Practical Lesson: Blood ties alone cannot sustain relationships without warmth and respect; gentle character attracts hearts everywhere you go."
    },
    tags: [
      { ur: "شیریں کلامی", ro: "Shireen-Kalami", en: "Winning Hearts" },
      { ur: "محبت و الفت", ro: "Mohabbat o Ulfat", en: "Warmth & Affection" }
    ]
  },
  {
    id: "ma-434",
    slug: "qatra-qatra-mil-kar-darya-banta-hai-mustaqil-mizaji",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 278 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "قطرہ قطرہ مل کر دریا بنتا ہے: مستقل مزاجی سے چٹان بھی کٹ جاتی ہے",
      ro: "Qatra-Qatra Mil Kar Darya Banta Hai: Mustaqil-Mizaji Se Chattan Bhi Kat Jati Hai",
      en: "Drop by Drop a River Forms: Consistency Carves Through Solid Rock"
    },
    quote: {
      ur: "پانی کا نرم قطرہ جب مستقل مزاجی سے ایک ہی پتھر پر گرتا رہتا ہے تو طاقت سے نہیں بلکہ اپنے تسلسل سے سخت چٹان میں بھی سوراخ کر دیتا ہے؛ اسی طرح تھوڑا مگر لگاتار کیا جانے والا نیک عمل انسان کو منزل کے عروج تک پہنچا دیتا ہے۔",
      ro: "Pani ka naram qatra jab mustaqil-mizaji se aik hi patthar par girta rehta hai to taqat se nahi balkay apne tasalsul se sakht chattan mein bhi surakh kar deta hai; isi tarah thora magar lagatar kiya jane wala nek amal insan ko manzil ke urooj tak pohancha deta hai.",
      en: "A gentle drop of water hollows out solid stone not by force, but by steady persistence; likewise, small righteous efforts performed consistently every day elevate a person to the highest peaks."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: حدیثِ نبوی ﷺ میں بھی اللہ کے نزدیک سب سے محبوب عمل وہ قرار دیا گیا ہے جو مستقل ہو خواہ مقدار میں تھوڑا ہی کیوں نہ ہو۔ وقتی جوش سے دس دن بہت کام کرنا اور پھر چھوڑ دینا کامیابی نہیں دیتا۔ آج کا عملی سبق یہ ہے کہ روزانہ تلاوت، مطالعے، ہنر سیکھنے اور صدقے کی ایک چھوٹی سی مقدار مقرر کریں اور پھر اس میں کبھی ناغہ نہ آنے دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Hadees-e-Nabawi ﷺ mein bhi Allah ke nazdeek sab se mehboob amal woh qarar diya gaya hai jo mustaqil ho khwah miqdar mein thora hi kyon na ho. Waqti josh se das din bohot kaam karna aur phir chhor dena kamyabi nahi deta. Aaj ka amli sabaq yeh hai ke rozana tilawat, mutaliye, hunar seekhne aur sadqay ki aik choti si miqdar muqarrar karein aur phir us mein kabhi nagha na aane dein.",
      en: "Context & Practical Lesson: Both prophetic wisdom and human experience confirm that small, daily habits maintained without interruption achieve far more than short bursts of enthusiasm."
    },
    tags: [
      { ur: "مستقل مزاجی", ro: "Mustaqil-Mizaji", en: "Consistency" },
      { ur: "مداومتِ عمل", ro: "Mudawamat-e-Amal", en: "Steady Progress" }
    ]
  },
  {
    id: "ma-435",
    slug: "zameen-ke-khazane-ka-faisla-do-diyanatdar-buzurgon-ki-hikayat",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Sahih Bukhari & Makhzan-e-Akhlaq - Page 372 (Hikayat Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "خزانے سے بھرا مٹکا اور دو دیانت دار انسانوں کا بے مثال انصاف",
      ro: "Khazanay Se Bhara Matka Aur Do Diyanat-Dar Insanon Ka Be-Misal Insaf",
      en: "The Buried Jar of Gold: When Two Honest Men Refused What Was Not Theirs"
    },
    quote: {
      ur: "ایک شخص نے دوسرے سے زمین خریدی اور ہل چلاتے ہوئے اسے سونے سے بھرا مٹکا ملا، تو اس نے جا کر بیچنے والے سے کہا: اپنا سونا لے لو، میں نے تم سے صرف زمین خریدی تھی خزانہ نہیں؛ بیچنے والے نے کہا: میں نے زمین اس کے اندر کی ہر چیز سمیت بیچی ہے، یہ تمہارا حق ہے؛ قاضی نے دونوں کی امانت دیکھ کر ان کے بچوں کا رشتہ کرا دیا اور وہ مال دونوں کی فلاح پر خرچ ہوا۔",
      ro: "Aik shakhs ne doosre se zameen khareedi aur hal chalate huye usay sonay se bhara matka mila, to us ne ja kar bechne wale se kaha: Apna sona le lo, main ne tum se sirf zameen khareedi thi khazana nahi; bechne wale ne kaha: Main ne zameen us ke andar ki har cheez samait bechi hai, yeh tumhara haq hai; Qazi ne dono ki amanat dekh kar un ke bachon ka rishta kara diya aur woh maal dono ki falah par kharch huwa.",
      en: "A man bought a plot of land and unearthed a jar of gold while plowing; he took it to the seller, saying, 'Take your gold, for I bought only the land,' while the seller replied, 'Keep it, for I sold you the land and all within it.' Moved by their rare integrity, the judge united their families in marriage and blessed both households with the treasure."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: صحیح بخاری میں بیان کردہ اس نبوی حکایت پر غور کیجیے کہ جہاں آج دو انچ زمین کے لیے بھائی بھائی کا دشمن بن جاتا ہے، وہاں خوفِ خدا رکھنے والے دو نیک انسان سونے کا مٹکا ایک دوسرے کو لوٹانے پر اصرار کر رہے تھے اور نتیجے میں اللہ نے دونوں کی نسلوں کو مالدار اور باعزت بنا دیا۔ آج کا عملی سبق یہ ہے کہ جب لین دین میں فریقین ایمانداری اور ایثار دکھاتے ہیں تو جھگڑوں کے بجائے محبتیں اور برکتیں جنم لیتی ہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sahih Bukhari mein bayan karda is Nabawi hikayat par ghaur kijiye ke jahan aaj do inch zameen ke liye bhai bhai ka dushman ban jata hai, wahan khauf-e-Khuda rakhne wale do nek insan sonay ka matka aik doosre ko lautane par israr kar rahe thay aur nateejay mein Allah ne dono ki naslon ko maaldar aur ba-izzat bana diya. Aaj ka amli sabaq yeh hai ke jab lain-dain mein fariqain imandari aur eesar dikhate hain to jhagron ke bajaye mohabbatein aur barkatein janam leti hain.",
      en: "Context & Practical Lesson: Related in Sahih Bukhari, this timeless parable illustrates how society flourishes when people fear taking even a coin of doubtful wealth—turning a potential dispute into shared family blessing."
    },
    tags: [
      { ur: "کمالِ دیانت", ro: "Kamal-e-Diyanat", en: "Supreme Integrity" },
      { ur: "برکتِ انصاف", ro: "Barkat-e-Insaf", en: "Blessed Fairness" }
    ]
  }
];

export const batch30Quotes: QuoteItem[] = [
  {
    id: "ma-436",
    slug: "har-nafs-ne-kl-ke-liye-kya-aagay-bheja-muhasaba",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Al-Hashr (59:18) Summary | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "فکرِ فردا: ہر انسان دیکھے کہ اس نے کل کے لیے کیا آگے بھیجا ہے",
      ro: "Fikr-e-Farda: Har Insan Dekhe Ke Us Ne Kal Ke Liye Kya Aagay Bheja Hai",
      en: "Self-Reflection: Let Every Soul Consider What It Has Sent Ahead for Tomorrow"
    },
    quote: {
      ur: "اہلِ ایمان کو حکمِ الٰہی ہے کہ اللہ کا تقویٰ اختیار کریں اور ہر انسان غور کرے کہ اس نے اپنے آنے والے کل (آخرت) کے لیے کیا ذخیرہ آگے بھیجا ہے؛ اور یاد رکھے کہ اللہ اس کے تمام اعمال سے پوری طرح باخبر ہے۔",
      ro: "Ahl-e-eman ko hukm-e-Ilahi hai ke Allah ka taqwa ikhtiyar karein aur har insan ghaur kare ke us ne apne aane wale kal (akhirat) ke liye kya zakhira aagay bheja hai; aur yaad rakhe ke Allah us ke tamam aamaal se poori tarah ba-khabar hai.",
      en: "Believers are commanded to remain mindful of Allah and let every soul reflect deeply upon what good it has sent ahead for tomorrow—knowing that Allah is fully aware of all that they do."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الحشر میں قیامت کے طویل دن کو ’کل‘ (غد) کہہ کر پکارا گیا ہے تاکہ انسان سمجھ لے کہ آخرت کا دن بالکل قریب ہے۔ دنیا میں انسان اپنے بڑھاپے اور اولاد کے مستقبل کے لیے تو برسوں منصوبہ بندی کرتا ہے، لیکن ابدی زندگی کی تیاری کو بھلا دیتا ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ اپنے نامۂ اعمال میں کوئی ایسی کھری نیکی جمع کریں جو کل رب کے حضور کام آ سکے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Hashr mein qayamat ke taweel din ko 'kal' (ghad) keh kar pukara gaya hai taake insan samajh le ke akhirat ka din bilkul qareeb hai. Duniya mein insan apne burhapay aur aulad ke mustaqbil ke liye to barson mansooba-bandi karta hai, lekin abadi zindagi ki tayyari ko bhula deta hai. Aaj ka amli sabaq yeh hai ke rozana apne nama-e-aamaal mein koi aisi khari neki jama karein jo kal Rab ke huzoor kaam aa sake.",
      en: "Context & Practical Lesson: The Quran refers to the Hereafter simply as 'tomorrow' to awaken us to how swiftly time passes. Just as we plan carefully for worldly retirement, we must invest daily in deeds that endure forever."
    },
    tags: [
      { ur: "فکرِ آخرت", ro: "Fikr-e-Akhirat", en: "Preparing for Tomorrow" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Mindfulness of God" }
    ]
  },
  {
    id: "ma-437",
    slug: "zarra-barabar-neki-aur-zarra-barabar-burai-ka-hisab",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Az-Zalzalah (99:7-8) Summary | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ذرہ برابر نیکی اور ذرہ برابر برائی بھی سامنے آ کر رہے گی",
      ro: "Zarra Barabar Neki Aur Zarra Barabar Burai Bhi Samne Aa Kar Rahegi",
      en: "Even an Atom's Weight of Good or Evil Will Be Seen"
    },
    quote: {
      ur: "الٰہی قانونِ عدل کا اعلان ہے کہ جس شخص نے ایک ذرہ برابر بھی بھلائی اور نیکی کی ہوگی وہ قیامت کے دن اس کا پھل دیکھ لے گا، اور جس نے ایک ذرہ برابر بھی برائی کی ہوگی وہ اس کا انجام اپنے سامنے پا لے گا۔",
      ro: "Ilahi qanoon-e-adal ka elaan hai ke jis shakhs ne aik zarra barabar bhi bhalai aur neki ki hogi woh qayamat ke din us ka phal dekh lega, aur jis ne aik zarra barabar bhi burai ki hogi woh us ka anjam apne samne pa lega.",
      en: "Divine justice decrees that whoever does even an atom's weight of good shall see its reward, and whoever commits even an atom's weight of evil shall face its consequence."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الزلزلہ کا یہ اصول انسان کو دو بڑی غلط فہمیوں سے بچاتا ہے: نہ کسی چھوٹی سی نیکی (جیسے راستے سے کانٹا ہٹانے یا مسکرا کر ملنے) کو معمولی سمجھ کر چھوڑا جائے، اور نہ کسی چھوٹے گناہ کو ہلکا جان کر کیا جائے۔ آج کا عملی سبق یہ ہے کہ ہر چھوٹی بھلائی کو غنیمت جانیں اور ہر چھوٹی زیادتی سے خود کو محفوظ رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Az-Zalzalah ka yeh usool insan ko do badi ghalat-fahmiyon se bachata hai: na kisi choti si neki (jaise rastay se kanta hatane ya muskura kar milne) ko mamooli samajh kar chhora jaye, aur na kisi chote gunah ko halka jaan kar kiya jaye. Aaj ka amli sabaq yeh hai ke har choti bhalai ko ghaneemat janein aur har choti ziyadati se khud ko mehfooz rakhein.",
      en: "Context & Practical Lesson: No act of kindness is ever too small to matter, and no wrong is too minor to ignore. Every single choice is recorded with perfect precision."
    },
    tags: [
      { ur: "میزانِ عمل", ro: "Mizan-e-Amal", en: "Scale of Deeds" },
      { ur: "عدلِ الٰہی", ro: "Adal-e-Ilahi", en: "Divine Justice" }
    ]
  },
  {
    id: "ma-438",
    slug: "eman-aur-amal-e-saleh-walon-ke-liye-dilon-mein-mohabbat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Surah Maryam (19:96) Summary | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (قرآن و احکامِ الٰہی)",
      ro: "Ahkam-e-Khuda (Quran o Ahkam-e-Ilahi)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ایمان اور نیک عمل کرنے والوں کے لیے دلوں میں محبت ڈال دی جاتی ہے",
      ro: "Eman Aur Nek Amal Karne Walon Ke Liye Dilon Mein Mohabbat Daal Di Jati Hai",
      en: "The Most Merciful Places Genuine Love in Hearts for the Righteous"
    },
    quote: {
      ur: "قرآنی وعدہ ہے کہ جو لوگ سچے دل سے ایمان لاتے ہیں اور پاکیزہ و صالح اعمال اختیار کرتے ہیں، رحمٰن ان کے لیے مخلوق کے دلوں میں خود بخود سچی محبت، وقار اور مقبولیت پیدا فرما دیتا ہے۔",
      ro: "Qurani wada hai ke jo log sache dil se eman late hain aur pakeeza o saleh aamaal ikhtiyar karte hain, Rehman un ke liye makhlooq ke dilon mein khud-ba-khud sachi mohabbat, waqar aur maqbooliyat paida farma deta hai.",
      en: "It is a divine promise that for those who believe sincerely and perform righteous deeds, the Most Merciful places genuine love, respect, and acceptance in the hearts of creation."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان پیسے اور بناوٹی طریقوں سے لوگوں کے دل جیتنا چاہتا ہے مگر ناکام رہتا ہے، جبکہ جو بندہ خلوص کے ساتھ اپنا تعلق اللہ سے جوڑ لیتا ہے اور مخلوق کے ساتھ بھلائی کرتا ہے، اللہ تعالیٰ فرشتوں اور نیک انسانوں کے دلوں میں اس کی محبت بٹھا دیتا ہے۔ آج کا عملی سبق یہ ہے کہ سچی عزت اور محبت پانے کے لیے ریاکاری چھوڑ کر اخلاص اور عملِ صالح کا راستہ اپنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan paise aur banawati tareeqon se logon ke dil jeetna chahta hai magar nakam rehta hai, jabkeh jo banda khuloos ke sath apna talluq Allah se jor leta hai aur makhlooq ke sath bhalai karta hai, Allah Ta'ala farishton aur nek insanon ke dilon mein us ki mohabbat bitha deta hai. Aaj ka amli sabaq yeh hai ke sachi izzat aur mohabbat pane ke liye riyakari chhor kar ikhlas aur amal-e-saleh ka rasta apnayein.",
      en: "Context & Practical Lesson: True respect cannot be bought through self-promotion; when a person lives with sincerity toward God and kindness toward people, the Almighty naturally inclines hearts toward them."
    },
    tags: [
      { ur: "محبت و قبولیت", ro: "Mohabbat o Qabooliyat", en: "Beloved by Hearts" },
      { ur: "عملِ صالح", ro: "Amal-e-Saleh", en: "Righteous Conduct" }
    ]
  },
  {
    id: "ma-439",
    slug: "insan-ki-wafat-ke-baad-jaari-rehne-wale-teen-aamaal",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sahih Muslim Summary | Makhzan-e-Akhlaq - Page 34",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "موت کے بعد بھی ثواب پہنچانے والے تین لازوال صدقات",
      ro: "Maut Ke Baad Bhi Sawab Pohanchane Wale Teen La-Zawal Sadqat",
      en: "Three Deeds Whose Reward Continues Flowing After Death"
    },
    quote: {
      ur: "جب انسان اس دنیا سے رخصت ہوتا ہے تو اس کے تمام اعمال کا سلسلہ منقطع ہو جاتا ہے، سوائے تین کاموں کے جن کا اجر مسلسل جاری رہتا ہے: صدقۂ جاریہ، وہ نافع علم جس سے لوگ فائدہ اٹھاتے رہیں، اور نیک و صالح اولاد جو اس کے لیے دعائے مغفرت کرتی رہے۔",
      ro: "Jab insan is duniya se rukhsat hota hai to us ke tamam aamaal ka silsila munqata ho jata hai, siwaye teen kaamon ke jin ka ajr musalsal jari rehta hai: sadqa-e-jariya, woh naafai ilm jis se log faida uthate rahein, aur nek o saleh aulad jo us ke liye dua-e-maghfirat karti rahe.",
      en: "When a human being departs this world, their deeds come to an end except for three enduring legacies: ongoing charity ('Sadaqah Jariyah'), beneficial knowledge that continues to help people, and a righteous child who prays for them."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عقلمند انسان وہ ہے جو اپنی مختصر زندگی میں ایسے کام کر جائے جن کا میٹر اس کے دنیا سے جانے کے بعد بھی چلتا رہے۔ پانی کا انتظام کرنا، اخلاقی و علمی پیغام عام کرنا اور اپنے بچوں کی بہترین دینی و اخلاقی تربیت کرنا انسان کی سب سے بڑی کامیابی ہے۔ آج کا عملی سبق یہ ہے کہ ان تینوں شعبوں میں اپنا حصہ ضرور ڈالیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aqal-mand insan woh hai jo apni mukhtasar zindagi mein aise kaam kar jaye jin ka meter us ke duniya se jane ke baad bhi chalta rahe. Pani ka intizam karna, akhlaqi o ilmi paigham aam karna aur apne bachon ki behtareen deeni o akhlaqi tarbiyat karna insan ki sab se badi kamyabi hai. Aaj ka amli sabaq yeh hai ke in teenon shobon mein apna hissa zaroor dalein.",
      en: "Context & Practical Lesson: Building public welfare projects, spreading beneficial moral knowledge (like this platform), and raising upright children ensure your good deeds continue multiplying long after your lifetime."
    },
    tags: [
      { ur: "صدقۂ جاریہ", ro: "Sadqa-e-Jariya", en: "Enduring Charity" },
      { ur: "علمِ نافع", ro: "Ilm-e-Naafai", en: "Beneficial Knowledge" }
    ]
  },
  {
    id: "ma-440",
    slug: "mizan-e-amal-mein-sab-se-wazandar-cheez-husn-e-akhlaq-hai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Sunan Abi Dawud Summary | Makhzan-e-Akhlaq - Page 35",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "قیامت کے دن میزانِ عمل میں سب سے بھاری نیکی حسنِ اخلاق ہے",
      ro: "Qayamat Ke Din Mizan-e-Amal Mein Sab Se Bhari Neki Husn-e-Akhlaq Hai",
      en: "Nothing Weighs Heavier on the Scale of Deeds Than Noble Character"
    },
    quote: {
      ur: "قیامت کے دن مومن کے ترازوئے اعمال میں حسنِ اخلاق سے زیادہ بھاری اور وزنی کوئی چیز نہیں ہوگی؛ اور خوش اخلاق انسان اپنے میٹھے برتاؤ اور اعلیٰ کردار کی بدولت نفلی روزے رکھنے اور رات بھر عبادت کرنے والے کا درجہ پا لیتا ہے۔",
      ro: "Qayamat ke din momin ke tarazu-e-aamaal mein husn-e-akhlaq se zyada bhari aur wazni koi cheez nahi hogi; aur khush-akhlaq insan apne meethay bartao aur aala kirdar ki badolat nafli rozay rakhne aur raat bhar ibadat karne wale ka darja pa leta hai.",
      en: "Nothing placed on the Scale of Deeds on the Day of Judgment will be heavier than noble character; indeed, through gentle and upright manners, a believer attains the rank of one who fasts by day and stands in prayer by night."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: فرائض کی ادائیگی کے بعد جو چیز انسان کے درجات کو سب سے زیادہ بلند کرتی ہے وہ اس کا اپنے گھر والوں، ہمسایوں اور عام انسانوں کے ساتھ شائستہ برتاؤ ہے۔ بدتمیزی اور درشت مزاجی عبادات کے ثواب کو بھی کمزور کر دیتی ہے۔ آج کا عملی سبق یہ ہے کہ اپنے لہجے کی نرمی اور خوش اخلاقی کو اپنی سب سے بڑی عبادت سمجھ کر نبھائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Faraiz ki adaigi ke baad jo cheez insan ke darajat ko sab se zyada buland karti hai woh us ka apne ghar walon, hamsayon aur aam insanon ke sath shaista bartao hai. Bad-tameezi aur durusht-mizaji ibadaton ke sawab ko bhi kamzor kar deti hai. Aaj ka amli sabaq yeh hai ke apne lehjay ki narmi aur khush-akhlaqi ko apni sab se badi ibadat samajh kar nibhayein.",
      en: "Context & Practical Lesson: Beyond obligatory worship, treating family, customers, and strangers with kindness and patience is the heaviest virtue on the eternal scale."
    },
    tags: [
      { ur: "وزنِ اخلاق", ro: "Wazan-e-Akhlaq", en: "Weight of Character" },
      { ur: "کمالِ کردار", ro: "Kamal-e-Kirdar", en: "Moral Excellence" }
    ]
  },
  {
    id: "ma-441",
    slug: "paanch-nemato-ko-paanch-halato-se-pehle-ghaneemat-jano",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Mustadrak Hakim Summary | Makhzan-e-Akhlaq - Page 36",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "پانچ انمول نعمتوں کو پانچ حالات آنے سے پہلے غنیمت جانو",
      ro: "Paanch Anmol Nematon Ko Paanch Halaat Aane Se Pehle Ghaneemat Jano",
      en: "Treasure Five Priceless Blessings Before Five Conditions Overtake You"
    },
    quote: {
      ur: "پانچ نعمتوں کو پانچ چیزوں سے پہلے غنیمت سمجھ کر ان کی قدر کر لو: اپنی جوانی کو بڑھاپے سے پہلے، اپنی صحت کو بیماری سے پہلے، اپنی خوشحالی کو تنگدستی سے پہلے، اپنی فرصت کو مصروفیت سے پہلے، اور اپنی زندگی کو موت سے پہلے۔",
      ro: "Paanch nematon ko paanch cheezon se pehle ghaneemat samajh kar un ki qadr kar lo: apni jawani ko burhapay se pehle, apni sehat ko bimari se pehle, apni khushhali ko tangdasti se pehle, apni fursat ko masroofiyat se pehle, aur apni zindagi ko maut se pehle.",
      en: "Value five blessings before five states overtake you: your youth before old age, your health before illness, your prosperity before need, your free time before preoccupation, and your life before death."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسان کو ہر نعمت کی قدر اس کے چھن جانے کے بعد آتی ہے؛ جب صحت اور جوانی کی طاقت ہوتی ہے تو وہ غفلت میں گزار دیتا ہے اور جب بیماری یا بڑھاپا آتا ہے تو حسرت کرتا ہے۔ آج کا عملی سبق یہ ہے کہ آج آپ کے پاس جو صحت، توانائی اور وقت موجود ہے اسے اپنے رب کی رضا اور اپنے خاندان کی بہتری کے لیے بھرپور استعمال کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insan ko har nemat ki qadr us ke chhin jane ke baad aati hai; jab sehat aur jawani ki taqat hoti hai to woh ghaflat mein guzar deta hai aur jab bimari ya burhapa aata hai to hasrat karta hai. Aaj ka amli sabaq yeh hai ke aaj aap ke paas jo sehat, tawanai aur waqt mojood hai usay apne Rab ki raza aur apne khandan ki behtari ke liye bharpoor istemal karein.",
      en: "Context & Practical Lesson: Youth, health, and free hours are golden capital that never return once spent; invest your present energy wisely before limitations arrive."
    },
    tags: [
      { ur: "قدرِ نعمت", ro: "Qadr-e-Nemat", en: "Valuing Blessings" },
      { ur: "نظمِ حیات", ro: "Nazm-e-Hayat", en: "Purposeful Life" }
    ]
  },
  {
    id: "ma-442",
    slug: "fatah-e-makkah-ke-din-aam-maafi-aur-be-misal-rehmat",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Seerah & Makhzan-e-Akhlaq - Page 57",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "فتحِ مکہ کے دن کامل غلبے کے باوجود عام معافی کا بے مثال اعلان",
      ro: "Fatah-e-Makkah Ke Din Kamil Ghalbay Ke Bawajood Aam Maafi Ka Be-Misal Elaan",
      en: "Universal Amnesty at the Conquest of Makkah: The Pinnacle of Mercy"
    },
    quote: {
      ur: "فتحِ مکہ کے دن جب برسوں تک ایذائیں دینے والے مخالفین سر جھکائے سامنے کھڑے تھے، تو رحمتِ عالم ﷺ نے کامل طاقت کے باوجود انتقام لینے کے بجائے فرمایا: آج تم پر کوئی گرفت اور ملامت نہیں، جاؤ تم سب آزاد ہو!",
      ro: "Fatah-e-Makkah ke din jab barson tak eizayein dene wale mukhalifeen sar jhukaye samne kharay thay, to Rehmat-e-Aalam ﷺ ne kamil taqat ke bawajood intiqam lene ke bajaye farmaya: Aaj tum par koi girift aur malamat nahi, jao tum sab aazad ho!",
      en: "On the day of the Conquest of Makkah, when bitter opponents who had persecuted the believers for years stood humbled before him, the Prophet of Mercy ﷺ chose total forgiveness over vengeance, declaring: 'No blame shall rest upon you today—go, for you are all free!'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی تاریخ میں ایسی کوئی دوسری مثال نہیں ملتی کہ ایک فاتح دس ہزار کے لشکر کے ساتھ شہر میں داخل ہو تو اس کا سر فخر سے تننے کے بجائے عاجزی سے اونٹنی کے کجاوے کو چھو رہا ہو اور وہ اپنے بدترین دشمنوں کو ایک جملے میں معاف فرما دے۔ آج کا عملی سبق یہ ہے کہ جب اللہ آپ کو کامیابی اور برتری عطا فرمائے تو عاجزی اختیار کریں اور پرانی رنجشوں کو دفن کر کے دل جیت لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani tareekh mein aisi koi doosri misal nahi milti ke aik fatih das hazar ke lashkar ke sath shehar mein dakhil ho to us ka sar fakhar se tanne ke bajaye aajizi se oontni ke kajaway ko chhoo raha ho aur woh apne bad-tareen dushmanon ko aik jumlay mein maaf farma de. Aaj ka amli sabaq yeh hai ke jab Allah aap ko kamyabi aur bartari ata farmaye to aajizi ikhtiyar karein aur purani ranjishon ko dafan kar ke dil jeet lein.",
      en: "Context & Practical Lesson: Entering Makkah in complete victory with his head bowed in humility before God, the Prophet ﷺ conquered hearts forever through general amnesty. True triumph is crowned by humility and forgiveness."
    },
    tags: [
      { ur: "رحمۃ للعالمین ﷺ", ro: "Rahmatul-lil-Aalameen ﷺ", en: "Universal Mercy" },
      { ur: "عفوِ عام", ro: "Afw-e-Aam", en: "Grand Forgiveness" }
    ]
  },
  {
    id: "ma-443",
    slug: "har-insan-aur-jandar-ke-dard-ka-ehsas-uswah-e-kamil",
    categorySlug: "khasail-e-nabawi",
    bookRef: "Shamail & Makhzan-e-Akhlaq - Page 58",
    author: {
      ur: "خصائل و شمائلِ نبوی ﷺ",
      ro: "Khasail-o-Shamail-e-Nabawi ﷺ",
      en: "Prophetic Characteristics ﷺ"
    },
    title: {
      ur: "کمزور انسانوں سے لے کر بے زبان جانوروں تک ہر ذی روح پر شفقت",
      ro: "Kamzor Insanon Se Le Kar Be-Zuban Janwaron Tak Har Zi-Rooh Par Shafqat",
      en: "Compassion Extending to Every Living Creature and the Vulnerable"
    },
    quote: {
      ur: "رسول اللہ ﷺ کی رحمت اس قدر ہمہ گیر تھی کہ آپ ﷺ بیواؤں، یتیموں اور مسکینوں کے کام خود چل کر کر دیتے، اور بے زبان جانوروں اور پرندوں کو بھی بھوکا رکھنے یا ان پر طاقت سے زیادہ بوجھ لادنے سے سختی سے منع فرماتے۔",
      ro: "Rasool Allah ﷺ ki rehmat is qadar hama-geer thi ke Aap ﷺ bewaon, yateemon aur miskeenon ke kaam khud chal kar kar dete, aur be-zuban janwaron aur parindon ko bhi bhooka rakhne ya un par taqat se zyada bojh ladne se sakhti se mana farmate.",
      en: "The compassion of the Messenger of Allah ﷺ encompassed all creation: he walked alongside widows, orphans, and the destitute to fulfill their needs, and strictly forbade starving or overburdening even speechless animals and birds."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ایک بھوکے اونٹ کو دیکھ کر آپ ﷺ نے اس کے مالک کو تنبیہ فرمائی کہ ان بے زبان جانوروں کے معاملے میں اللہ سے ڈرو، اور ایک پیاسے جانور کو پانی پلانے پر مغفرت کی بشارت دی۔ آج کا عملی سبق یہ ہے کہ اپنے اردگرد موجود کمزور انسانوں کے ساتھ ساتھ بے زبان پرندوں اور جانوروں کے دانے پانی اور آرام کا بھی خیال رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aik bhookay oont ko dekh kar Aap ﷺ ne us ke malik ko tanbeeh farmai ke in be-zuban janwaron ke muamlay mein Allah se daro, aur aik pyasay janwar ko pani pilane par maghfirat ki basharat di. Aaj ka amli sabaq yeh hai ke apne ird-gird mojood kamzor insanon ke sath sath be-zuban parindon aur janwaron ke danay-pani aur aaram ka bhi khayal rakhein.",
      en: "Context & Practical Lesson: A heart touched by prophetic guidance shows kindness not only to needy humans, but also to birds, animals, and the natural world around us."
    },
    tags: [
      { ur: "ہمہ گیر رحمت", ro: "Hama-Geer Rehmat", en: "All-Encompassing Mercy" },
      { ur: "رحم بر مخلوق", ro: "Reham Bar Makhlooq", en: "Kindness to Creation" }
    ]
  },
  {
    id: "ma-444",
    slug: "kamil-aqalmandi-taqwa-hai-aur-sab-se-badi-nadani-gunah",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 76",
    author: {
      ur: "حضرت ابوبکر صدیق رضی اللہ عنہ",
      ro: "Hazrat Abu Bakr Siddiq (R.A)",
      en: "Hazrat Abu Bakr Siddiq (R.A)"
    },
    title: {
      ur: "سب سے بڑی عقلمندی تقویٰ ہے اور سب سے بڑی نادانی نافرمانی",
      ro: "Sab Se Badi Aqalmandi Taqwa Hai Aur Sab Se Badi Nadani Nafarman-Bani",
      en: "The Highest Intelligence is Piety and the Greatest Folly is Sin"
    },
    quote: {
      ur: "جان لو کہ سب سے بڑی دانائی اور عقلمندی پرہیزگاری ہے، سب سے بڑی حماقت اور نادانی اللہ کی نافرمانی ہے، سب سے بڑی سچائی امانت ادا کرنا ہے، اور سب سے بڑا جھوٹ خیانت کرنا ہے۔",
      ro: "Jaan lo ke sab se badi danai aur aqalmandi parhezgari hai, sab se badi hamaqat aur nadani Allah ki nafarman-bani hai, sab se badi sachai amanat ada karna hai, aur sab se bada jhoot khyanat karna hai.",
      en: "Know with certainty that the highest wisdom is God-consciousness, the greatest folly is disobedience, the truest honesty is fulfilling trusts, and the worst falsehood is betrayal."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سیدنا ابوبکر صدیقؓ نے خلافت کی ذمہ داری سنبھالتے ہی اپنے پہلے تاریخی خطبے میں یہ چار اصول بیان فرمائے۔ دنیا چالاکی اور فریب کو ہوشیاری سمجھتی ہے، مگر انجام کے لحاظ سے اصل ہوشیار وہ ہے جو اپنے رب کو راضی رکھے اور امانت میں کھرا رہے۔ آج کا عملی سبق یہ ہے کہ وقتی چالاکی کے بجائے دیانت اور تقویٰ کو اپنی زندگی کی پالیسی بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Sayyiduna Abu Bakr Siddiq (R.A) ne khilafat ki zimmedari sanbhalte hi apne pehle tareekhi khutbay mein yeh chaar usool bayan farmaye. Duniya chalaki aur fareeb ko hoshyari samajhti hai, magar anjam ke lihaz se asal hoshyar woh hai jo apne Rab ko razi rakhe aur amanat mein khara rahe. Aaj ka amli sabaq yeh hai ke waqti chalaki ke bajaye diyanat aur taqwa ko apni zindagi ki policy banayein.",
      en: "Context & Practical Lesson: Delivered in his inaugural address, Hazrat Abu Bakr Siddiq's (R.A) words redefine intelligence: cleverness without ethics is folly, while honesty and piety are supreme wisdom."
    },
    tags: [
      { ur: "حقیقی دانائی", ro: "Haqeeqi Danai", en: "True Wisdom" },
      { ur: "امانت و صداقت", ro: "Amanat o Sadaqat", en: "Trust & Integrity" }
    ]
  },
  {
    id: "ma-445",
    slug: "mazloom-ki-bad-dua-se-bacho-aur-haq-wale-ko-qawi-samjho",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 83",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "کمزور مظلوم کا حق دلانے تک وہ میرے نزدیک سب سے طاقتور ہے",
      ro: "Kamzor Mazloom Ka Haq Dilane Tak Woh Mere Nazdeek Sab Se Taqatwar Hai",
      en: "The Weakest Oppressed Person is Strongest Until Their Right is Restored"
    },
    quote: {
      ur: "تم میں سے سب سے کمزور اور بے سہارا شخص بھی میرے نزدیک اس وقت تک سب سے زیادہ طاقتور ہے جب تک میں اسے اس کا پورا حق نہ دلا دوں؛ اور تم میں سے سب سے طاقتور شخص میرے نزدیک اس وقت تک کمزور ہے جب تک میں اس سے مظلوم کا حق وصول نہ کر لوں۔",
      ro: "Tum mein se sab se kamzor aur be-sahara shakhs bhi mere nazdeek us waqt tak sab se zyada taqatwar hai jab tak main usay us ka poora haq na dila doon; aur tum mein se sab se taqatwar shakhs mere nazdeek us waqt tak kamzor hai jab tak main us se mazloom ka haq wasool na kar loon.",
      en: "The weakest among you is the strongest in my sight until I restore to them their full right; and the mightiest among you is the weakest in my sight until I take from them the right due to others."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: عدلِ فاروقی کا یہ سنہرا منشور ہر گھر کے سربراہ، کاروباری مالک اور ذمہ دار کے لیے مشعلِ راہ ہے۔ جس جگہ کمزور کی بات سنی جائے اور طاقتور کو بے جا رعایت نہ ملے، وہاں اللہ کی رحمت اور امن کا نزول ہوتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دائرۂ اختیار میں ہمیشہ بے سہارا اور حق دار کا ساتھ دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Adal-e-Farooqi ka yeh sunehra manshoor har ghar ke sarbarah, karobari malik aur zimmedar ke liye mash'al-e-raah hai. Jis jagah kamzor ki baat suni jaye aur taqatwar ko be-ja riayat na milay, wahan Allah ki rehmat aur aman ka nuzool hota hai. Aaj ka amli sabaq yeh hai ke apne daira-e-ikhtiyar mein hamesha be-sahara aur haqdar ka sath dein.",
      en: "Context & Practical Lesson: This cornerstone of Farooqi justice teaches every leader, employer, and head of household to stand firmly behind the vulnerable until fairness prevails."
    },
    tags: [
      { ur: "عدلِ فاروقی", ro: "Adal-e-Farooqi", en: "Uncompromising Justice" },
      { ur: "نصرتِ مظلوم", ro: "Nusrat-e-Mazloom", en: "Defending the Weak" }
    ]
  },
  {
    id: "ma-446",
    slug: "duniya-fani-sawar-gah-hai-aur-akhirat-daimi-manzil",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 92",
    author: {
      ur: "حضرت عثمان غنی رضی اللہ عنہ",
      ro: "Hazrat Usman Ghani (R.A)",
      en: "Hazrat Usman Ghani (R.A)"
    },
    title: {
      ur: "فانی دنیا سے دائمی منزل کے لیے بہترین توشہ جمع کر لو",
      ro: "Fani Duniya Se Daimi Manzil Ke Liye Behtareen Tosha Jama Kar Lo",
      en: "Gather the Best Provision from This Passing World for the Eternal Abode"
    },
    quote: {
      ur: "یہ دنیا محض گزرگاہ ہے، ٹھہرنے کا مستقل گھر نہیں؛ پس اس فانی پڑاؤ سے اپنے دائمی گھر کے لیے بہترین زادِ راہ (اخلاص، صدقہ اور حسنِ خلق) ساتھ لے لو اس سے پہلے کہ کوچ کی گھڑی آ پہنچے۔",
      ro: "Yeh duniya mehaz guzargah hai, theharne ka mustaqil ghar nahi; pas is fani parao se apne daimi ghar ke liye behtareen zad-e-raah (ikhlas, sadqa aur husn-e-khulq) sath le lo is se pehle ke kooch ki ghari aa pohanchay.",
      en: "This world is a passing bridge rather than a permanent residence; so gather the finest provisions—sincerity, charity, and noble character—from this temporary stop before the hour of departure arrives."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مسافر جب کسی سرائے یا اسٹیشن پر رکتا ہے تو وہاں سہولت تو لیتا ہے مگر اپنی ساری جمع پونجی اس سرائے کو سجانے میں خرچ نہیں کر دیتا بلکہ اصل گھر کی فکر رکھتا ہے۔ آج کا عملی سبق یہ ہے کہ دنیا کی نعمتوں کو شکر کے ساتھ استعمال کریں لیکن ان میں سے اپنے ابدی گھر کا حصہ ضرور آگے بھیجتے رہیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Musafir jab kisi saraye ya station par rukta hai to wahan sahulat to leta hai magar apni sari jama-poonji us saraye ko sajane mein kharch nahi kar deta balkay asal ghar ki fikr rakhta hai. Aaj ka amli sabaq yeh hai ke duniya ki nematon ko shukr ke sath istemal karein lekin un mein se apne abadi ghar ka hissa zaroor aagay bhejte rahein.",
      en: "Context & Practical Lesson: A wise traveler enjoys the rest stop gratefully without forgetting their true home; use worldly blessings to build an eternal legacy of good."
    },
    tags: [
      { ur: "زادِ آخرت", ro: "Zad-e-Akhirat", en: "Eternal Provision" },
      { ur: "حکمتِ سفر", ro: "Hikmat-e-Safar", en: "Traveler's Wisdom" }
    ]
  },
  {
    id: "ma-447",
    slug: "har-insan-ki-qeemat-woh-bhalai-hai-jo-woh-khoobsurti-se-karta-hai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 100",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "ہر انسان کی حقیقی قیمت وہ بھلائی ہے جسے وہ عمدگی سے انجام دیتا ہے",
      ro: "Har Insan Ki Haqeeqi Qeemat Woh Bhalai Hai Jisay Woh Umdagi Se Anjam Deta Hai",
      en: "The True Worth of Every Person Lies in the Good They Do with Excellence"
    },
    quote: {
      ur: "ہر انسان کی اصل قدر و قیمت وہ ہنر اور وہ بھلائی ہے جسے وہ بہترین طریقے سے انجام دیتا ہے؛ لہٰذا اپنی قیمت کم نہ سمجھو اور اپنے عمل کو اخلاص کے ساتھ بلند ترین معیار پر رکھو۔",
      ro: "Har insan ki asal qadr-o-qeemat woh hunar aur woh bhalai hai jisay woh behtareen tareeqay se anjam deta hai; lehaza apni qeemat kam na samjho aur apne amal ko ikhlas ke sath buland-tareen miyar par rakho.",
      en: "The true worth of every person is measured by the good and skillful work they perform with excellence; so never sell your soul short, and elevate your deeds with sincerity."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سیدنا علی المرتضیٰؓ کے اس سنہری قول پر علمائے ادب نے پوری کتابیں لکھی ہیں۔ انسان کی پہچان اس کے دعوؤں سے نہیں بلکہ اس کے کام کی عمدگی (Excellence) اور اس سے مخلوق کو پہنچنے والے نفع سے ہوتی ہے۔ آج کا عملی سبق یہ ہے کہ آپ جس بھی پیشے یا خدمت میں ہیں، اس میں اتنی مہارت اور دیانت پیدا کریں کہ آپ کا کام ہی آپ کا تعارف بن جائے۔",
      ro: "Pas-e-Manzar o Tashreeh: Sayyiduna Ali Al-Murtaza (R.A) ke is sunehri qoul par ulama-e-adab ne poori kitabein likhi hain. Insan ki pehchan us ke daawon se nahi balkay us ke kaam ki umdagi (Excellence) aur us se makhlooq ko pohanchne wale nafa se hoti hai. Aaj ka amli sabaq yeh hai ke aap jis bhi peshay ya khidmat mein hain, us mein itni maharat aur diyanat paida karein ke aap ka kaam hi aap ka taaruf ban jaye.",
      en: "Context & Practical Lesson: A person's value is defined not by titles, but by the mastery, integrity, and benefit they bring to their craft and community."
    },
    tags: [
      { ur: "قدرِ انسان", ro: "Qadr-e-Insan", en: "Human Worth" },
      { ur: "عمدگیٔ عمل", ro: "Umdagi-e-Amal", en: "Excellence in Craft" }
    ]
  },
  {
    id: "ma-448",
    slug: "char-usool-jo-Poori-akhlaqi-zindagi-ka-nichor-hain",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 106",
    author: {
      ur: "حکیم لقمان علیہ السلام",
      ro: "Hakeem Luqman (A.S)",
      en: "Luqman the Wise"
    },
    title: {
      ur: "حکیم لقمان کی جامع وصیت: چار مقامات پر چار چیزوں کی حفاظت",
      ro: "Hakeem Luqman Ki Jame Wasiyat: Chaar Maqamat Par Chaar Cheezon Ki Hifazat",
      en: "Luqman's Master Advice: Guard Four Things in Four Situations"
    },
    quote: {
      ur: "اے بیٹے! چار موقعوں پر چار چیزوں کی پوری حفاظت کرنا: نماز میں اپنے دل کی، لوگوں کی محفل میں اپنی زبان کی، دسترخوان پر اپنے پیٹ (حلال و اعتدال) کی، اور کسی کے گھر جاؤ تو اپنی نگاہ کی۔",
      ro: "Aye betay! Chaar mauqon par chaar cheezon ki poori hifazat karna: namaz mein apne dil ki, logon ki mehfil mein apni zuban ki, dastarkhwan par apne pait (halal o aitdaal) ki, aur kisi ke ghar jao to apni nigah ki.",
      en: "O my son! Guard four things vigilantly in four places: guard your heart during prayer, guard your tongue in gatherings, guard your appetite at the dining table, and guard your gaze when visiting another's home."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: یہ چار نکاتی ضابطہ پوری اسلامی اخلاقیات کا خلاصہ ہے: نماز کی روح دل کی حاضری ہے، مجلس کا وقار زبان کی حفاظت ہے، صحت و تقویٰ کی بنیاد حلال اور متوازن خوراک ہے، اور شرافت کی پہچان نگاہ کی حیا ہے۔ آج کا عملی سبق یہ ہے کہ ان چاروں پہروں کو اپنی روزمرہ عادت کا حصہ بنا لیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Yeh chaar-nukati zabita poori Islami akhlaqiyat ka khulasa hai: namaz ki rooh dil ki haziri hai, majlis ka waqar zuban ki hifazat hai, sehat o taqwa ki bunyad halal aur mutawazin khorak hai, aur sharafat ki pehchan nigah ki haya hai. Aaj ka amli sabaq yeh hai ke in chaaron pehron ko apni rozmarra aadat ka hissa bana lein.",
      en: "Context & Practical Lesson: Presence of heart in worship, restraint of tongue in company, moderation at meals, and modesty of gaze in others' homes form the complete blueprint of a refined life."
    },
    tags: [
      { ur: "جامع اخلاق", ro: "Jame Akhlaq", en: "Complete Ethics" },
      { ur: "نگہبانیٔ نفس", ro: "Nigahbani-e-Nafs", en: "Self-Discipline" }
    ]
  },
  {
    id: "ma-449",
    slug: "shama-ki-manind-bano-jo-khud-jal-kar-doosron-ko-roshni-deti-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 280 (Hukama Summary)",
    author: {
      ur: "اقوالِ حکماء و دانشوراں",
      ro: "Aqwal-e-Hukama o Danishwaran",
      en: "Wisdom of Sages"
    },
    title: {
      ur: "اندھیرے کا شکوہ کرنے کے بجائے اپنے حصے کا ایک چراغ جلا دو",
      ro: "Andheray Ka Shikwa Karne Ke Bajaye Apne Hissay Ka Aik Chiragh Jala Do",
      en: "Instead of Cursing the Darkness, Light a Single Lamp of Goodness"
    },
    quote: {
      ur: "معاشرے کے اندھیرے کو بیٹھ کر کوسنے سے کبھی اجالا نہیں ہوتا، البتہ اپنے حصے کا ایک چھوٹا سا چراغ جلا دینے سے تاریکی کا سینہ چیر کر روشنی کا سفر شروع ہو جاتا ہے؛ پس اپنے اخلاق اور علم سے وہ چراغ بنو جس سے بھٹکے ہوئے راہی راستہ پائیں۔",
      ro: "Muashray ke andheray ko baith kar kosne se kabhi ujala nahi hota, albatta apne hissay ka aik chota sa chiragh jala dene se tareeki ka seena cheer kar roshni ka safar shuru ho jata hai; pas apne akhlaq aur ilm se woh chiragh bano jis se bhatkay huye rahi rasta payein.",
      en: "Complaining about the darkness never brings the dawn, whereas lighting even a single small lamp pierces the night and starts a chain of light; become a beacon of character and wisdom by which others find their way."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ایک چھوٹا سا چراغ ہزاروں دوسرے بجھے ہوئے چراغوں کو روشن کر سکتا ہے اور اس کی اپنی روشنی میں ذرا بھی کمی نہیں آتی۔ یہی مثال اچھے اخلاق اور علم پھیلانے کی ہے۔ آج کا عملی سبق یہ ہے کہ زمانے کی خرابی کا شکوہ کرنے کے بجائے اپنے گھر، کاروبار اور حلقۂ احباب میں سچائی اور خیر کا چراغ روشن رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Aik chota sa chiragh hazaron doosre bujhay huye chiraghon ko roshan kar sakta hai aur us ki apni roshni mein zara bhi kami nahi aati. Yehi misal achay akhlaq aur ilm phailane ki hai. Aaj ka amli sabaq yeh hai ke zamane ki kharabi ka shikwa karne ke bajaye apne ghar, karobar aur halqa-e-ahbab mein sachai aur khair ka chiragh roshan rakhein.",
      en: "Context & Practical Lesson: A single candle can ignite a thousand lamps without losing any of its own flame. Lead by positive action in your home and community."
    },
    tags: [
      { ur: "چراغِ ہدایت", ro: "Chiragh-e-Hidayat", en: "Beacon of Light" },
      { ur: "مثبت کردار", ro: "Musbat Kirdar", en: "Positive Impact" }
    ]
  },
  {
    id: "ma-450",
    slug: "ikhtitami-jawahir-makhzan-e-akhlaq-ka-khulasa-aur-dua",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 380 (Final Conclusion Summary)",
    author: {
      ur: "اخلاقی جواہر و حکایات",
      ro: "Akhlaqi Jawahir o Hikayat",
      en: "Moral Gems & Parables"
    },
    title: {
      ur: "خاتمۃ الکتاب: علم کی معراج عمل ہے اور عمل کی روح اخلاص",
      ro: "Khatimat-ul-Kitab: Ilm Ki Meraj Amal Hai Aur Amal Ki Rooh Ikhlas",
      en: "The Crown of Knowledge is Action and the Soul of Action is Sincerity"
    },
    quote: {
      ur: "حکمت کے خزانے (مخزنِ اخلاق) کا آخری نچوڑ یہ ہے کہ علم اس وقت تک بے ثمر ہے جب تک وہ عمل نہ بنے، اور عمل اس وقت تک بے جان ہے جب تک اس میں اخلاص نہ ہو؛ کامیاب انسان وہ ہے جس کا دل خالق کے شکر سے آباد ہو اور جس کے ہاتھ مخلوق کی خدمت میں مصروف ہوں۔",
      ro: "Hikmat ke khazanay (Makhzan-e-Akhlaq) ka aakhri nichor yeh hai ke ilm us waqt tak be-samar hai jab tak woh amal na banay, aur amal us waqt tak be-jaan hai jab tak us mein ikhlas na ho; kamyab insan woh hai jis ka dil Khaliq ke shukr se aabad ho aur jis ke hath makhlooq ki khidmat mein masroof hon.",
      en: "The ultimate conclusion of the Treasury of Ethics ('Makhzan-e-Akhlaq') is this: knowledge remains fruitless until translated into action, and action remains lifeless until infused with sincerity; truly successful is the soul whose heart is filled with gratitude to the Creator and whose hands are busy serving creation."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اس 450ویں اخلاقی موتی کے ساتھ ’مخزنِ اخلاق‘ کے تمام ابواب (احکامِ خدا، ارشاداتِ نبوی ﷺ، خصائلِ نبوی ﷺ، اقوالِ صحابہؓ، حکمتِ انبیاء و حکماء اور سبق آموز واقعات) کا یہ سفر پایۂ تکمیل کو پہنچا۔ ان تمام تعلیمات کا خلاصہ دو ہی جملے ہیں: خالق کی تعظیم اور مخلوق پر شفقت۔ اللہ تعالیٰ اس علمی و اخلاقی کاوش کو پڑھنے، سمجھنے اور آگے پھیلانے والے ہر فرد کے لیے صدقۂ جاریہ اور دارین کی سعادت کا ذریعہ بنائے۔ آمین!",
      ro: "Pas-e-Manzar o Tashreeh: Is 450wein akhlaqi moti ke sath 'Makhzan-e-Akhlaq' ke tamam abwab (Ahkam-e-Khuda, Irshadat-e-Nabawi ﷺ, Khasail-e-Nabawi ﷺ, Aqwal-e-Sahaba R.A, Hikmat-e-Ambiya o Hukama aur Sabaq-Aamoz Waqiat) ka yeh safar paya-e-takmeel ko pohancha. In tamam taleemat ka khulasa do hi jumlay hain: Khaliq ki tazeem aur makhlooq par shafqat. Allah Ta'ala is ilmi o akhlaqi kawish ko parhne, samajhne aur aagay phailane wale har fard ke liye sadqa-e-jariya aur darain ki saadat ka zariya banaye. Aameen!",
      en: "Context & Practical Lesson: With this 450th moral gem, our complete trilingual anthology of 'Makhzan-e-Akhlaq' reaches fulfillment. The essence of all 450 lessons rests on two pillars: reverence for the Creator and compassion toward creation. May this platform serve as a perpetual charity ('Sadaqah Jariyah') for all who read, practice, and share its light."
    },
    tags: [
      { ur: "تکمیلِ مخزنِ اخلاق", ro: "Takmeel-e-Makhzan-e-Akhlaq", en: "Crown of Wisdom" },
      { ur: "علم و اخلاص", ro: "Ilm o Ikhlas", en: "Action & Sincerity" }
    ]
  }
];

export const batch31Quotes: QuoteItem[] = [
  {
    id: "ma-451",
    slug: "mustafa-jaan-e-rehmat-pe-lakhon-salam-naat-sharif",
    categorySlug: "naat-sharif",
    bookRef: "Hadaiq-e-Bakhshish (Imam Ahmad Raza Khan)",
    author: {
      ur: "امام احمد رضا خانؒ",
      ro: "Imam Ahmad Raza Khan (R.A)",
      en: "Imam Ahmad Raza Khan (R.A)"
    },
    title: {
      ur: "مصطفیٰ جانِ رحمت پہ لاکھوں سلام، شمعِ بزمِ ہدایت پہ لاکھوں سلام",
      ro: "Mustafa Jaan-e-Rehmat Pe Lakhon Salam, Shama-e-Bazm-e-Hidayat Pe Lakhon Salam",
      en: "Countless Salutations Upon Mustafa, the Essence of Mercy and Lamp of Guidance"
    },
    quote: {
      ur: "مصطفیٰ جانِ رحمت پہ لاکھوں سلام\nشمعِ بزمِ ہدایت پہ لاکھوں سلام",
      ro: "Mustafa jaan-e-rehmat pe lakhon salam\nShama-e-bazm-e-hidayat pe lakhon salam",
      en: "Millions of salutations upon al-Mustafa ﷺ, the very soul of mercy;\nMillions of salutations upon the shining lamp of the assembly of guidance."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: برصغیر و عالمِ اسلام کی معروف ترین سلامیہ نظم ’سلامِ رضا‘ کا یہ مطلع رسولِ اکرم ﷺ کی دو عظیم صفات یعنی ’رحمۃ للعالمین‘ اور ’ہادیِ برحق‘ کا حسین مرقع ہے۔ ’جانِ رحمت‘ اس حقیقت کی طرف اشارہ ہے کہ کائنات میں خدا کی تمام رحمتوں کا محور ذاتِ مصطفیٰ ﷺ ہے اور آپ ﷺ کی سیرت بھٹکی ہوئی انسانیت کے لیے شمعِ ہدایت ہے۔ آج کا عملی سبق یہ ہے کہ روزانہ کثرت سے درود و سلام پڑھیں اور مخلوقِ خدا کے ساتھ رحمت و خیر خواہی کا معاملہ اپنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Bar-e-Sagheer aur aalam-e-Islam ki mashhoor-tareen salam-o-naat ka yeh matla Rasool-e-Akram ﷺ ki do azeem sifat yaani Rehmat-ul-Lil-Alameen aur Haadi-e-Barhaq ko bayan karta hai. 'Jaan-e-Rehmat' se murad yeh hai ke Aap ﷺ poori kainat ke liye sarapa rehmat hain aur Aap ﷺ ki seerat insan ke liye hidayat ki shama hai. Aaj ka amli sabaq yeh hai ke rozana kasrat se Durood o Salam parhein aur logon ke sath narmi o shafqat ka rawaiyya ikhtiyar karein.",
      en: "Context & Practical Lesson: This iconic opening couplet from 'Hadaiq-e-Bakhshish' celebrates Prophet Muhammad ﷺ under two foundational Quranic dimensions: absolute mercy to all creation ('Rahmatan lil-'Alamin') and the luminous lamp of moral guidance ('Sirajan Munira'). Send abundant salutations (Durood) daily and reflect prophetic gentleness toward others."
    },
    tags: [
      { ur: "درود و سلام", ro: "Durood o Salam", en: "Salutations" },
      { ur: "نعتِ رسول ﷺ", ro: "Naat-e-Rasool ﷺ", en: "Prophetic Praise" },
      { ur: "رحمۃ للعالمین", ro: "Rehmat-ul-Lil-Alameen", en: "Universal Mercy" }
    ]
  },
  {
    id: "ma-452",
    slug: "ki-muhammad-se-wafa-tu-ne-to-hum-tere-hain-iqbal",
    categorySlug: "naat-sharif",
    bookRef: "Kulliyat-e-Iqbal (Jawab-e-Shikwa)",
    author: {
      ur: "علامہ محمد اقبالؒ",
      ro: "Allama Muhammad Iqbal (R.A)",
      en: "Allama Muhammad Iqbal (R.A)"
    },
    title: {
      ur: "کی محمد ﷺ سے وفا تُو نے تو ہم تیرے ہیں",
      ro: "Ki Muhammad ﷺ Se Wafa Tu Ne To Hum Tere Hain",
      en: "Stay Faithful to Muhammad ﷺ, and the Entire Universe Shall Be Yours"
    },
    quote: {
      ur: "کی محمد ﷺ سے وفا تُو نے تو ہم تیرے ہیں\nیہ جہاں چیز ہے کیا، لوح و قلم تیرے ہیں",
      ro: "Ki Muhammad ﷺ se wafa tu ne to hum tere hain\nYeh jahan cheez hai kya, lauh o qalam tere hain",
      en: "If you stay steadfast and faithful to Muhammad ﷺ, We are wholly yours;\nWhat is this fleeting world—even the Tablet and Pen of destiny belong to you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: شاعرِ مشرق علامہ اقبالؒ نے اپنی معروف نظم ’جوابِ شکوہ‘ کے اس اختتامی اور لازوال شعر میں امتِ مسلمہ کے عروج و زوال کا پورا فلسفہ سمیٹ دیا ہے۔ نبی کریم ﷺ سے سچی وفا کا مطلب محض زبانی دعویٰ نہیں بلکہ آپ ﷺ کی سنت، امانت، دیانت، عدل اور حسنِ اخلاق کو اپنی عملی زندگی میں نافذ کرنا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے تمام معاملات، عبادات اور اخلاق میں اسوۂ رسول ﷺ سے سچی وفاداری قائم کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Shair-e-Mashriq Allama Iqbal (R.A) ne 'Jawab-e-Shikwa' ke is aakhri shair mein ummat ke urooj ka raaz bayan farmaya hai. Nabi Kareem ﷺ se sachi wafa ka matlab sirf zubani dawa nahi balkeh Aap ﷺ ki sunnat, amanatdari, adal aur husn-e-akhlaq par amli amal hai. Aaj ka amli sabaq yeh hai ke apni zindagi ke har shobay mein Uswah-e-Rasool ﷺ ki sachai se pairwi karein.",
      en: "Context & Practical Lesson: In the crowning couplet of 'Jawab-e-Shikwa', Allama Iqbal reveals the secret of spiritual and worldly dignity: true fidelity to Prophet Muhammad ﷺ. Loyalty to the Prophet means embodying his integrity, justice, compassion, and Sunnah in daily life—unlocking divine support in every endeavor."
    },
    tags: [
      { ur: "عشقِ رسول ﷺ", ro: "Ishq-e-Rasool ﷺ", en: "Devotion" },
      { ur: "کلامِ اقبالؒ", ro: "Kalam-e-Iqbal", en: "Allama Iqbal" },
      { ur: "وفاداری و سنت", ro: "Wafadari o Sunnat", en: "Fidelity to Sunnah" }
    ]
  },
  {
    id: "ma-453",
    slug: "woh-nabiyon-mein-rehmat-laqab-panay-wala-hali",
    categorySlug: "naat-sharif",
    bookRef: "Musaddas-e-Hali (Maulana Altaf Hussain Hali)",
    author: {
      ur: "مولانا الطاف حسین حالیؒ",
      ro: "Maulana Altaf Hussain Hali (R.A)",
      en: "Maulana Altaf Hussain Hali (R.A)"
    },
    title: {
      ur: "وہ نبیوں میں رحمت لقب پانے والا، مرادیں غریبوں کی بر لانے والا",
      ro: "Woh Nabiyon Mein Rehmat Laqab Panay Wala, Muradein Ghareebon Ki Bar Lanay Wala",
      en: "He Who Earned the Title of Mercy Among Prophets and Lifted the Humble"
    },
    quote: {
      ur: "وہ نبیوں میں رحمت لقب پانے والا\nمرادیں غریبوں کی بر لانے والا\nمصیبت میں غیروں کے کام آنے والا\nوہ اپنے پرائے کا غم کھانے والا",
      ro: "Woh nabiyon mein rehmat laqab panay wala\nMuradein ghareebon ki bar lanay wala\nMuseebat mein ghairon ke kaam aanay wala\nWoh apne paraye ka gham khanay wala",
      en: "He who was titled 'Mercy' among all Prophets;\nHe who fulfilled the hopes of the destitute and poor;\nHe who rushed to aid even strangers in times of distress;\nAnd felt the sorrow of friend and stranger alike."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مولانا الطاف حسین حالیؒ کی تاریخی تصنیف ’مسدسِ حالی (مد و جزرِ اسلام)‘ کی یہ نعتیہ رباعی سیرتِ طیبہ کے سماجی اور انسانی پہلو کا حسین بیان ہے۔ حضور اکرم ﷺ کی شفقت صرف اپنوں تک محدود نہ تھی بلکہ غریبوں، یتیموں، مسکینوں اور یہاں تک کہ مخالفین کی تکلیف پر بھی آپ ﷺ کا دل تڑپ اٹھتا تھا۔ آج کا عملی سبق یہ ہے کہ ضرورت مندوں کی خاموشی سے مدد کریں اور رنگ و نسل یا تعلق سے بالاتر ہو کر انسانیت کے دکھ درد بانٹیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Maulana Altaf Hussain Hali (R.A) ki mashhoor kitaab 'Musaddas-e-Hali' ki yeh naatiya rubai Seerat-e-Tayyiba ke samaji aur insani pehlu ko ujaagar karti hai. Huzoor ﷺ ki shafqat sirf apnon tak mehdood na thi balkeh ghareebon, yateemon aur ajnabiyon ki takleef mein bhi Aap ﷺ sab se pehle madad ko aate thay. Aaj ka amli sabaq yeh hai ke kisi bhi be-kas aur zarooratmand ki madad mein pehal karein.",
      en: "Context & Practical Lesson: From the classic 'Musaddas-e-Hali', these beloved stanzas portray the universal humanitarian grace of Prophet Muhammad ﷺ. His compassion transcended tribal and personal boundaries, offering immediate relief to the marginalized and distressed. True emulation requires caring actively for widows, orphans, and struggling neighbors."
    },
    tags: [
      { ur: "مسدسِ حالیؒ", ro: "Musaddas-e-Hali", en: "Musaddas-e-Hali" },
      { ur: "غم خواریِ امت", ro: "Gham-Khwari", en: "Humanitarian Mercy" },
      { ur: "خدمتِ خلق", ro: "Khidmat-e-Khalq", en: "Serving the Poor" }
    ]
  },
  {
    id: "ma-454",
    slug: "nigah-e-ishq-o-masti-mein-wahi-awwal-wahi-aakhir-iqbal",
    categorySlug: "naat-sharif",
    bookRef: "Kulliyat-e-Iqbal (Bal-e-Jibril)",
    author: {
      ur: "علامہ محمد اقبالؒ",
      ro: "Allama Muhammad Iqbal (R.A)",
      en: "Allama Muhammad Iqbal (R.A)"
    },
    title: {
      ur: "نگاہِ عشق و مستی میں وہی اوّل، وہی آخر",
      ro: "Nigah-e-Ishq o Masti Mein Wohi Awwal, Wohi Aakhir",
      en: "In the Gaze of Spiritual Love, He is the Living Embodiment of Quranic Guidance"
    },
    quote: {
      ur: "نگاہِ عشق و مستی میں وہی اوّل، وہی آخر\nوہی قرآں، وہی فرقاں، وہی یٰسیں، وہی طٰہٰ",
      ro: "Nigah-e-ishq o masti mein wohi awwal, wohi aakhir\nWohi Quran, wohi Furqan, wohi Yaseen, wohi Taha",
      en: "In the vision of pure spiritual devotion, His example stands first and last;\nHis living character reflects the Quran, the Criterion of Truth, Yaseen, and Taha."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ’بالِ جبریل‘ کے اس معروف شعر میں علامہ اقبالؒ نے ام المؤمنین حضرت عائشہ صدیقہؓ کے اس مستند قول ’کان خلقہ القرآن‘ (آپ ﷺ کا اخلاق سراسر قرآن تھا) کو شاعرانہ پیرائے میں بیان کیا ہے۔ قرآنِ مجید میں حضور ﷺ کو یٰسیں اور طٰہٰ جیسے پرعظمت القاب سے پکارا گیا اور آپ ﷺ کی پوری حیاتِ طیبہ وحیِ الٰہی کی عملی تفسیر تھی۔ آج کا عملی سبق یہ ہے کہ قرآنِ کریم کو سمجھ کر پڑھیں اور سیرتِ نبوی ﷺ کے آئینے میں اپنی عادات سنواریں۔",
      ro: "Pas-e-Manzar o Tashreeh: 'Bal-e-Jibril' ke is shair mein Allama Iqbal (R.A) ne Hazrat Aisha Siddiqa (R.A) ki mashhoor riwayat 'Aap ﷺ ka akhlaq sarasar Quran tha' ko khoobsurat andaz mein bayan kiya hai. Quran mein Aap ﷺ ko Yaseen aur Taha jaise alqaab se mukhatib kiya gaya aur Aap ﷺ ki zindagi Quran ki amli tafseer thi. Aaj ka amli sabaq yeh hai ke Quran ko samajh kar parhein aur Seerat-e-Nabawi ﷺ ke mutabiq apna kirdar sanwarein.",
      en: "Context & Practical Lesson: Drawing inspiration from Hazrat Aisha's (R.A) famous testimony that the Prophet's character was the living Quran, Allama Iqbal illuminates how every Quranic virtue finds complete expression in Muhammad ﷺ. Read the Quran thoughtfully and shape your conduct by the Prophetic model."
    },
    tags: [
      { ur: "بالِ جبریل", ro: "Bal-e-Jibril", en: "Bal-e-Jibril" },
      { ur: "سیرت و قرآن", ro: "Seerat o Quran", en: "Living Quran" },
      { ur: "اسوۂ حسنہ ﷺ", ro: "Uswah-e-Hasanah", en: "Prophetic Character" }
    ]
  },
  {
    id: "ma-455",
    slug: "lauh-bhi-tu-qalam-bhi-tu-tera-wajood-al-kitab-iqbal",
    categorySlug: "naat-sharif",
    bookRef: "Kulliyat-e-Iqbal (Bal-e-Jibril)",
    author: {
      ur: "علامہ محمد اقبالؒ",
      ro: "Allama Muhammad Iqbal (R.A)",
      en: "Allama Muhammad Iqbal (R.A)"
    },
    title: {
      ur: "لوح بھی تُو، قلم بھی تُو، تیرا وجود الکتاب",
      ro: "Lauh Bhi Tu, Qalam Bhi Tu, Tera Wajood Al-Kitab",
      en: "Your Radiant Being Unlocks the Book of Divine Wisdom and Hope"
    },
    quote: {
      ur: "لوح بھی تُو، قلم بھی تُو، تیرا وجود الکتاب\nگنبدِ آبگینۂ رنگ تیرے محیط میں حباب",
      ro: "Lauh bhi tu, qalam bhi tu, tera wajood Al-Kitab\nGumbad-e-aabgeena-rang tere muheet mein hubab",
      en: "You are the keeper of the Sacred Message, your blessed life the living Book;\nBeneath the vast azure dome of heaven, all creation reflects the ocean of your mercy."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اس بلیغ نعتیہ شعر میں اقبالؒ بارگاہِ رسالت ﷺ میں عرض کرتے ہیں کہ حضور ﷺ کا وجودِ اقدس علم و ہدایت کی زندہ کتاب ہے، اور یہ وسیع نیلا آسمان اور پوری کائنات آپ ﷺ کی عطا کردہ روحانی وسعت اور رحمت کے سامنے ایک قطرہ یا بلبلے کی مانند ہے۔ دنیا کی تمام چمک دمک فانی ہے جبکہ نبوی پیغام ابدی ہے۔ آج کا عملی سبق یہ ہے کہ علم، حکمت اور عاجزی کے ذریعے اپنی روح کو فانی دنیا کی اسیری سے آزاد کریں۔",
      ro: "Pas-e-Manzar o Tashreeh: Is baligh shair mein Iqbal (R.A) bargah-e-risalat ﷺ mein arz karte hain ke Huzoor ﷺ ka wajood-e-aqdas ilm o hidayat ki zinda kitaab hai aur yeh wasee neela aasman Aap ﷺ ki roohani rehmat ke samandar mein aik qatray ki manind hai. Duniya ki chamak damak fani hai jabkeh nabawi paigham abadi hai. Aaj ka amli sabaq yeh hai ke ilm o hikmat aur aajzi se apne dil ko roshan karein.",
      en: "Context & Practical Lesson: With soaring poetic metaphor, Allama Iqbal contrasts the transient shimmer of the material cosmos against the timeless spiritual ocean of Prophetic guidance. True illumination lies not in chasing worldly pride, but in grounding our hearts in lasting wisdom and humility."
    },
    tags: [
      { ur: "حکمتِ نعت", ro: "Hikmat-e-Naat", en: "Spiritual Poetics" },
      { ur: "نعتِ اقبالؒ", ro: "Naat-e-Iqbal", en: "Iqbal Poetry" }
    ]
  },
  {
    id: "ma-456",
    slug: "sab-se-aula-o-aala-hamara-nabi-hadaiq-e-bakhshish",
    categorySlug: "naat-sharif",
    bookRef: "Hadaiq-e-Bakhshish (Imam Ahmad Raza Khan)",
    author: {
      ur: "امام احمد رضا خانؒ",
      ro: "Imam Ahmad Raza Khan (R.A)",
      en: "Imam Ahmad Raza Khan (R.A)"
    },
    title: {
      ur: "سب سے اولیٰ و اعلیٰ ہمارا نبی ﷺ، سب سے بالا و والا ہمارا نبی ﷺ",
      ro: "Sab Se Aula o Aala Hamara Nabi ﷺ, Sab Se Bala o Wala Hamara Nabi ﷺ",
      en: "Most Noble in Character, Most Exalted in Grace: Our Beloved Prophet ﷺ"
    },
    quote: {
      ur: "سب سے اولیٰ و اعلیٰ ہمارا نبی ﷺ\nسب سے بالا و والا ہمارا نبی ﷺ\nخلق سے اولیا، اولیا سے رسل\nاور رسولوں سے اعلیٰ ہمارا نبی ﷺ",
      ro: "Sab se aula o aala hamara Nabi ﷺ\nSab se bala o wala hamara Nabi ﷺ\nKhalq se awliya, awliya se rusul\nAur rasoolon se aala hamara Nabi ﷺ",
      en: "Supreme in nobility and virtue is our Prophet ﷺ;\nLofty in station and grace is our Prophet ﷺ;\nAbove all creation stand the righteous, above them the Messengers,\nAnd crowning all Messengers with final perfection is our Prophet ﷺ."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآنِ مجید میں اللہ تعالیٰ نے حضرت محمد ﷺ کو تمام انبیاء و رسل کا خاتم اور سب سے بلند اخلاق ’انک لعلیٰ خلق عظیم‘ کا مالک قرار دیا ہے۔ اس معروف نعتیہ کلام میں اسی قرآنی حقیقت و محبتِ رسول ﷺ کا والہانہ اور شائستہ اظہار کیا گیا ہے۔ آج کا عملی سبق یہ ہے کہ جس نبی ﷺ کا مقام تمام کائنات سے بلند ہے، ان کے نام پر ہم بھی اپنے اخلاق، معاملات اور گفتار کو اعلیٰ معیار کا بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran-e-Majeed mein Allah Ta'ala ne Hazrat Muhammad ﷺ ko Khatam-un-Nabiyyin aur azeem tareen akhlaq ka malik qarar diya hai. Is mashhoor naatiya kalam mein isi ilahi shaan aur mohabbat-e-Rasool ﷺ ka shaaista izhar kiya gaya hai. Aaj ka amli sabaq yeh hai ke itni azeem hasti ke ummati honay ke nate apne kirdar aur guftugu ko bhi aala meyar par rakhein.",
      en: "Context & Practical Lesson: Celebrating the Quranic declaration that Prophet Muhammad ﷺ is the Seal of the Prophets and holds an exalted standard of character, these classical verses inspire deep reverence. Honor that spiritual bond by upholding integrity, humility, and dignity in speech and action."
    },
    tags: [
      { ur: "شانِ رسالت ﷺ", ro: "Shan-e-Risalat ﷺ", en: "Prophetic Honor" },
      { ur: "حدائقِ بخشش", ro: "Hadaiq-e-Bakhshish", en: "Classical Naat" }
    ]
  },
  {
    id: "ma-457",
    slug: "kaabay-ke-badrud-duja-tum-pe-karoron-durood-raza",
    categorySlug: "naat-sharif",
    bookRef: "Hadaiq-e-Bakhshish (Imam Ahmad Raza Khan)",
    author: {
      ur: "امام احمد رضا خانؒ",
      ro: "Imam Ahmad Raza Khan (R.A)",
      en: "Imam Ahmad Raza Khan (R.A)"
    },
    title: {
      ur: "کعبے کے بدر الدجیٰ تم پہ کروڑوں درود، طیبہ کے شمس الضحیٰ تم پہ کروڑوں درود",
      ro: "Kaabay Ke Badrud-Duja Tum Pe Karoron Durood, Taiba Ke Shamsud-Duha Tum Pe Karoron Durood",
      en: "Resplendent Full Moon of Makkah, Radiant Morning Sun of Madinah: Millions of Blessings Upon You"
    },
    quote: {
      ur: "کعبے کے بدر الدجیٰ تم پہ کروڑوں درود\nطیبہ کے شمس الضحیٰ تم پہ کروڑوں درود\nشافعِ روزِ جزا تم پہ کروڑوں درود\nدافعِ جملہ بلا تم پہ کروڑوں درود",
      ro: "Kaabay ke badrud-duja tum pe karoron durood\nTaiba ke shamsud-duha tum pe karoron durood\nShafe-e-roz-e-jaza tum pe karoron durood\nDafe-e-jumla bala tum pe karoron durood",
      en: "O Radiant Full Moon illuminating the night around the Kaabah, millions of blessings upon you;\nO Bright Morning Sun shining over Madinah, millions of blessings upon you;\nIntercessor upon the Day of Judgment, and bringer of solace against sorrow—millions of blessings upon you."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: مکہ مکرمہ (کعبہ شریف) آپ ﷺ کی جائے ولادت و بعثت ہے جہاں جہالت کی اندھیری رات میں آپ ﷺ چودھویں کے چاند کی مانند طلوع ہوئے، اور مدینہ طیبہ آپ ﷺ کی ہجرت گاہ ہے جہاں اسلام کا آفتابِ ہدایت پوری آب و تاب سے چمکا۔ یہ اشعار صدیوں سے عاشقانِ رسول ﷺ کی زبانوں پر وردِ درود بن کر جاری ہیں۔ آج کا عملی سبق یہ ہے کہ پریشانی، خوشی اور دعا کے آغاز میں درود شریف کو لازمی اپنائیں کیونکہ درود دلوں کو سکون اور دعاؤں کو قبولیت عطا کرتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Makkah Mukarrama Aap ﷺ ki paidaish aur nabuwwat ki sarzameen hai jahan jahalat ke andheray mein Aap ﷺ chaudhwein ke chaand ki tarah roshan huye, aur Madina Tayyiba mein Islam ka aaftab chamka. Yeh ashaar sadiyon se Durood Shareef ke wazeefay ke taur par parhe jate hain. Aaj ka amli sabaq yeh hai ke har dua se pehle aur pareshani ke waqt Durood Shareef ko apna mamool banayein.",
      en: "Context & Practical Lesson: Pairing the sacred imagery of Makkah (where the Prophet emerged like a full moon piercing darkness) and Madinah (where guidance shone like the morning sun), this treasured hymn anchors the believer's heart in Durood. Beginning prayers with salutations upon the Prophet softens the heart and brings inner serenity."
    },
    tags: [
      { ur: "درودِ پاک", ro: "Durood-e-Pak", en: "Durood Sharif" },
      { ur: "مدینہ منورہ", ro: "Madinah Munawwarah", en: "Makkah & Madinah" }
    ]
  },
  {
    id: "ma-458",
    slug: "dil-jis-se-zinda-hai-woh-tamanna-tumhein-to-ho-zafar-ali-khan",
    categorySlug: "naat-sharif",
    bookRef: "Baharistan (Maulana Zafar Ali Khan)",
    author: {
      ur: "مولانا ظفر علی خانؒ",
      ro: "Maulana Zafar Ali Khan (R.A)",
      en: "Maulana Zafar Ali Khan (R.A)"
    },
    title: {
      ur: "دل جس سے زندہ ہے وہ تمنا تمہیں تو ہو",
      ro: "Dil Jis Se Zinda Hai Woh Tamanna Tumhein To Ho",
      en: "You Are the Sacred Aspiration by Which the Believer's Heart Lives"
    },
    quote: {
      ur: "دل جس سے زندہ ہے وہ تمنا تمہیں تو ہو\nہم جس میں بس رہے ہیں وہ دنیا تمہیں تو ہو\nپھوٹا جو سینۂ شبِ تارِ الست سے\nاس نورِ اوّلیں کا اجالا تمہیں تو ہو",
      ro: "Dil jis se zinda hai woh tamanna tumhein to ho\nHam jis mein bas rahe hain woh duniya tumhein to ho\nPhoota jo seena-e-shab-e-taar-e-alast se\nUs noor-e-awwalin ka ujala tumhein to ho",
      en: "You are the noble longing that keeps the spiritual heart alive;\nThe moral world of faith and meaning we inhabit is illuminated through you;\nThe first dawn that broke across the darkness of ignorance—its radiant brilliance is your light of guidance."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: بابائے صحافت مولانا ظفر علی خانؒ کی اس مشہور اور دلگداز نعت میں اس باطنی حقیقت کا اظہار ہے کہ ایک مومن کے دل کی اصل زندگی اور روحانی دنیا کی رونق حضور اکرم ﷺ کی محبت اور سنت سے وابستہ ہے۔ جب دل میں محبتِ رسول ﷺ زندہ ہو تو انسان مایوسی، حسد اور خود غرضی کی تاریکیوں سے نکل کر امید و حوصلے کی دنیا میں سانس لیتا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے دل کی دنیا کو سیرتِ طیبہ کے مطالعے اور عملی اطاعت سے آباد رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Maulana Zafar Ali Khan (R.A) ki is mashhoor naat mein is roohani haqeeqat ka izhar hai ke momin ke dil ki asal zindagi Huzoor ﷺ ki mohabbat aur sunnat se wabasta hai. Jab dil mein Nabi ﷺ ki muhabbat zinda ho to insan mayousi aur khud-gharzi se nikal kar umeed aur husn-e-akhlaq ki roshni pa leta hai. Aaj ka amli sabaq yeh hai ke Seerat-e-Tayyiba ke mutalay ko apni aadat banayein.",
      en: "Context & Practical Lesson: Penned by the revered poet-journalist Maulana Zafar Ali Khan (R.A), this deeply moving Naat celebrates how Prophetic love breathes moral vitality into the human soul. When your inner compass aligns with the Prophet's mercy and honesty, despair gives way to purpose and hope."
    },
    tags: [
      { ur: "کلامِ ظفر علی خانؒ", ro: "Kalam-e-Zafar Ali Khan", en: "Devotional Verse" },
      { ur: "زندگیِ قلب", ro: "Zindagi-e-Qalb", en: "Spiritual Revival" }
    ]
  },
  {
    id: "ma-459",
    slug: "woh-jo-na-thay-to-kuch-na-tha-noor-e-kainat-hadaiq-e-bakhshish",
    categorySlug: "naat-sharif",
    bookRef: "Hadaiq-e-Bakhshish (Imam Ahmad Raza Khan)",
    author: {
      ur: "امام احمد رضا خانؒ",
      ro: "Imam Ahmad Raza Khan (R.A)",
      en: "Imam Ahmad Raza Khan (R.A)"
    },
    title: {
      ur: "وہ جو نہ تھے تو کچھ نہ تھا، جان ہیں وہ جہان کی",
      ro: "Woh Jo Na Thay To Kuch Na Tha, Jaan Hain Woh Jahan Ki",
      en: "His Prophetic Mission is the Spiritual Lifeblood of Creation"
    },
    quote: {
      ur: "وہ جو نہ تھے تو کچھ نہ تھا، وہ جو نہ ہوں تو کچھ نہ ہو\nجان ہیں وہ جہان کی، جان ہے تو جہان ہے",
      ro: "Woh jo na thay to kuch na tha, woh jo na hon to kuch na ho\nJaan hain woh jahan ki, jaan hai to jahan hai",
      en: "Without his noble mission of mercy, human history had no moral anchor;\nHe is the spiritual heartbeat of the world—and with that heartbeat, life flourishes."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: انسانی تاریخ گواہ ہے کہ بعثتِ نبوی ﷺ سے قبل دنیا ظلم، جہالت، غلامی اور اخلاقی پستی کے گڑھے میں گری ہوئی تھی۔ آپ ﷺ کی تشریف آوری نے انسانیت کو توحید، مساوات، علم، حقوقِ نسواں اور رحم دلی کی نئی روح پھونکی۔ شاعر نے بڑی خوبصورتی سے سیرتِ مصطفیٰ ﷺ کو اس عالم کی روح قرار دیا ہے۔ آج کا عملی سبق یہ ہے کہ اپنے گھر اور معاشرے میں انصاف، علم اور محبتِ نبوی ﷺ کا پیغام عام کر کے دنیا کو بہتر بنائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Insani tareekh gawah hai ke Aap ﷺ ki aamad se pehle duniya zulm aur jahalat mein doobi huyi thi. Aap ﷺ ki taleemat ne insaniyat ko tauheed, barabari, ilm aur rahamdili ki nayi rooh ataa ki. Is shair mein Seerat-e-Mustafa ﷺ ko is duniya ki jaan aur rooh qarar diya gaya hai. Aaj ka amli sabaq yeh hai ke apne ghar aur muashray mein insaf, ilm aur khush-akhlaqi ko farogh dein.",
      en: "Context & Practical Lesson: Human civilization prior to Prophet Muhammad ﷺ was fractured by oppression and ignorance; his universal message revived dignity, equality, scholarship, and compassion. This couplet captures how Prophetic ethics act as the sustaining lifeblood of a just, humane society."
    },
    tags: [
      { ur: "انسانیت کی روح", ro: "Insaniyat Ki Rooh", en: "Moral Revival" },
      { ur: "اخلاقی انقلاب", ro: "Akhlaqi Inqilab", en: "Prophetic Transformation" }
    ]
  },
  {
    id: "ma-460",
    slug: "quwwat-e-ishq-se-har-past-ko-bala-kar-de-iqbal",
    categorySlug: "naat-sharif",
    bookRef: "Kulliyat-e-Iqbal (Bang-e-Dara)",
    author: {
      ur: "علامہ محمد اقبالؒ",
      ro: "Allama Muhammad Iqbal (R.A)",
      en: "Allama Muhammad Iqbal (R.A)"
    },
    title: {
      ur: "قوتِ عشق سے ہر پست کو بالا کر دے، دہر میں اسمِ محمد ﷺ سے اجالا کر دے",
      ro: "Quwwat-e-Ishq Se Har Past Ko Bala Kar De, Dehr Mein Ism-e-Muhammad ﷺ Se Ujala Kar De",
      en: "Uplift the Fallen Through Devotion, and Illuminate the Age With the Name of Muhammad ﷺ"
    },
    quote: {
      ur: "قوتِ عشق سے ہر پست کو بالا کر دے\nدہر میں اسمِ محمد ﷺ سے اجالا کر دے",
      ro: "Quwwat-e-ishq se har past ko bala kar de\nDehr mein ism-e-Muhammad ﷺ se ujala kar de",
      en: "Through the power of sincere devotion, elevate every fallen soul to nobility;\nFlood the entire world with radiant light through the blessed name and character of Muhammad ﷺ."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: ’بانگِ درا‘ کی معروف نظم ’طلوعِ اسلام‘ کا یہ پرسوز دعائیہ شعر بتاتا ہے کہ سچا عشقِ رسول ﷺ انسان کو پستیوں، مایوسیوں اور کم ہمتی سے نکال کر بلندیوں تک پہنچا دیتا ہے۔ اسمِ محمد ﷺ سے اجالا کرنے کا تقاضا یہ ہے کہ ہم اپنے کردار، ایمانداری، محنت اور خدمتِ خلق سے دنیا کے سامنے اسلام کی سچی اور روشن تصویر پیش کریں۔ آج کا عملی سبق یہ ہے کہ مایوسی چھوڑ کر مثبت عمل، اخلاقی بلندی اور حسنِ سلوک کے ساتھ خیر کا پیغام پھیلائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: 'Bang-e-Dara' ki nazm 'Tulu-e-Islam' ka yeh duaiya shair batata hai ke sacha ishq-e-Rasool ﷺ insan ko mayousi aur pasti se nikal kar bulandiyon par le jata hai. Ism-e-Muhammad ﷺ se duniya mein ujala karne ka matlab yeh hai ke hum apni emandari, mehnat aur khidmat-e-khalq se Islam ka roshan chehra dikhayein. Aaj ka amli sabaq yeh hai ke mayousi chhor kar achay akhlaq aur bhalai ke sath aagay barhein.",
      en: "Context & Practical Lesson: From Allama Iqbal's 'Tulu-e-Islam' in Bang-e-Dara, this inspiring prayer calls upon believers to overcome moral stagnation through heartfelt devotion and purposeful excellence. Shine the light of the Prophet's teachings through honest work, generosity, and noble character."
    },
    tags: [
      { ur: "بانگِ درا", ro: "Bang-e-Dara", en: "Bang-e-Dara" },
      { ur: "طلوعِ اسلام", ro: "Tulu-e-Islam", en: "Renewal & Light" },
      { ur: "عشق و عمل", ro: "Ishq o Amal", en: "Devotion in Action" }
    ]
  }
];

const batchMappedQuotes: Quote[] = [
  ...batch1Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 7)),
  ...batch2Quotes.map((q, idx) => quoteItemToQuote(q, idx === 9)), // ma-025 (Hujjat-ul-Wida) featured
  ...batch3Quotes.map((q, idx) => quoteItemToQuote(q, idx === 4 || idx === 12)), // ma-035 (Hazrat Abu Bakr), ma-043 (Hazrat Ali) featured
  ...batch4Quotes.map((q, idx) => quoteItemToQuote(q, idx === 6 || idx === 9)), // ma-052 (Halal Nawalay Ki Taseer), ma-055 (Mother) featured
  ...batch5Quotes.map((q, idx) => quoteItemToQuote(q, idx === 1 || idx === 7)), // ma-062 (Hazrat Umar muhasba), ma-068 (Bimar-pursi ki dua) featured
  ...batch6Quotes.map((q, idx) => quoteItemToQuote(q, idx === 2 || idx === 9)), // ma-078 (Ehsan jatana), ma-085 (Qarz ki adaigi) featured
  ...batch7Quotes.map((q, idx) => quoteItemToQuote(q, idx === 2 || idx === 4)), // ma-093 (No Compulsion), ma-095 (Buzurgon ka ikram) featured
  ...batch8Quotes.map((q, idx) => quoteItemToQuote(q, idx === 5 || idx === 8)), // ma-111 (Maqam-e-Ehsan), ma-114 (Uswah-e-Hasanah) featured
  ...batch9Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 4)), // ma-121 (Infaq & Mehboob cheez), ma-125 (Meezan-e-Amal & Husn-e-Khulq) featured
  ...batch10Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 10)), // ma-136 (Qaza par Raza & Zikr), ma-146 (3 companions) featured
  ...batch11Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 13)), // ma-151 (Koshish & Rizq), ma-164 (Hazrat Umar - Asman se sona nahi barasta) featured
  ...batch12Quotes.map((q, idx) => quoteItemToQuote(q, idx === 3 || idx === 14)), // ma-169 (Bhai ki hajat rawai), ma-180 (Hazrat Abu Bakr - Subah khezi & Mehnat) featured
  ...batch13Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 12)), // ma-181 (Uswah-e-Rasool), ma-193 (Hazrat Abu Bakr khutba) featured
  ...batch14Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 12 || idx === 14)), // ma-196 (Walideen), ma-208 (Hazrat Ali - Sakhawat o Maafi), ma-210 (Luqman - Do baatein) featured
  ...batch15Quotes.map((q, idx) => quoteItemToQuote(q, idx === 1 || idx === 8 || idx === 12)), // ma-212 (Neki o Taqwa), ma-219 (Hazrat Abu Bakr - 5 Andheray), ma-223 (Luqman - Khamoshi sona) featured
  ...batch16Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 4 || idx === 12)), // ma-226 (Qarabatiyon ki madad), ma-230 (Najat ki 3 sifat), ma-238 (Luqman - 4 jagah 4 cheezon ki hifazat) featured
  ...batch17Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 5 || idx === 12)), // ma-241 (Ehsan jatla kar sadqat zaya na karna), ma-246 (Narmi har cheez ko zeenat deti hai), ma-253 (Duniya ko akhirat ke badlay becho) featured
  ...batch18Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 5 || idx === 13)), // ma-256 (Kharch mein bukhl aur israf ke darmiyan aitdaal), ma-261 (Panch nematon ko panch halaton se pehle ghaneemat jano), ma-269 (Ilm aur maal ka farq) featured
  ...batch19Quotes.map((q, idx) => quoteItemToQuote(q, idx === 1 || idx === 4 || idx === 13)), // ma-272 (Muamlat mein mashwara), ma-275 (Asani paida karo tangi na karo), ma-284 (Chaar cheezein kabhi wapis nahi laut saktein) featured
  ...batch20Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 11 || idx === 14)), // ma-286 (Amanatein o Adal), ma-289 (Dilon o Aamaal), ma-297 (Hazrat Ali - Aqal kamil), ma-300 (Tootay dilon ko jorna) featured
  ...batch21Quotes.map((q, idx) => quoteItemToQuote(q, idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-304 (Qana'at), ma-308 (Nazm-e-Auqat), ma-312 (Hazrat Ali - Sabr dhal), ma-315 (Choti amanatein) featured
  ...batch22Quotes.map((q, idx) => quoteItemToQuote(q, idx === 3 || idx === 4 || idx === 11 || idx === 14)), // ma-319 (Ghussa na karo), ma-320 (Kasb-e-Halal), ma-327 (Husn-e-akhlaq), ma-330 (Aamaal ki bazgasht) featured

  ...batch23Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-331 (Sachi koshish), ma-334 (Be-maqsad kam), ma-338 (Khana aib), ma-342 (Zaban darinda), ma-345 (Maimar makan) featured

  ...batch24Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-346 (Maal nahaq), ma-349 (Asli ameeri), ma-353 (Auqat taqseem), ma-357 (Sabr qismein), ma-360 (Posheeda sadqa) featured

  ...batch25Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-361 (Namaz), ma-364 (Hamsaya huqooq), ma-368 (Mukhatib tawajjo), ma-372 (Adab miras), ma-375 (Sachai ahad) featured

  ...batch26Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-376 (Hawas pursish), ma-379 (Oopar hath), ma-383 (Muskurata chehra), ma-387 (Ilm maal), ma-390 (Boorha baghban) featured
  ...batch27Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-391 (Wus'at-e-Jaan), ma-394 (Museebat parda), ma-398 (Aasan rasta), ma-402 (Qana'at la-zawal), ma-405 (Rastay ka pathar) featured
  ...batch28Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-406 (Sohbat-e-Sadiqeen), ma-409 (Tijarat narmi), ma-413 (Wada amanat), ma-417 (Zaban insan), ma-420 (Pahari bazgasht) featured
  ...batch29Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-421 (Rehmat umeed), ma-424 (Shukr-e-Mohsin), ma-428 (Jood o Sakha), ma-432 (Afw Indal-Qudrah), ma-435 (Khazana matka insaf) featured
  ...batch30Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 3 || idx === 7 || idx === 11 || idx === 14)), // ma-436 (Fikr-e-Farda), ma-439 (Teen Sadqaat), ma-443 (Hama-geer rehmat), ma-447 (Qadr-e-Insan), ma-450 (Takmeel-e-Makhzan-e-Akhlaq) featured
  ...batch31Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 1)), // ma-451 (Mustafa Jaan-e-Rehmat), ma-452 (Ki Muhammad Se Wafa) featured
];

const URDU_BOOK_NAME_MAP: Array<[RegExp, string]> = [
  [/Sahih\s+Bukhari/gi, 'صحیح بخاری'],
  [/Sahih\s+Muslim/gi, 'صحیح مسلم'],
  [/Shamail\s+(?:al-)?Tirmidhi/gi, 'شمائلِ ترمذی'],
  [/Sunan\s+(?:al-)?Tirmidhi/gi, 'جامع ترمذی'],
  [/Sunan\s+Abi\s+Dawud/gi, 'سنن ابو داؤد'],
  [/Sunan\s+Ibn\s+Majah/gi, 'سنن ابن ماجہ'],
  [/Sunan\s+(?:an-)?Nasai/gi, 'سنن نسائی'],
  [/Al-Adab\s+Al-Mufrad/gi, 'الادب المفرد'],
  [/Al-Mu'?jam\s+Al-Awsat/gi, 'المعجم الاوسط'],
  [/(?:Al-)?Mustadrak\s+(?:al-)?Hakim/gi, 'مستدرک حاکم'],
  [/Hilyat\s+al-Awliya\s*\(Ibn\s+Mas'?ud\)/gi, 'حلیۃ الاولیاء (حضرت ابنِ مسعودؓ)'],
  [/Hilyat\s+al-Awliya/gi, 'حلیۃ الاولیاء'],
  [/Seerat-un-Nabi\s*ﷺ/gi, 'سیرت النبی ﷺ'],
  [/Chahal\s+Hadith/gi, 'چَہل حدیث'],
  [/Hadaiq-e-Bakhshish\s*\(Imam\s+Ahmad\s+Raza\s+Khan\)/gi, 'حدائقِ بخشش (امام احمد رضا خانؒ)'],
  [/Hadaiq-e-Bakhshish/gi, 'حدائقِ بخشش'],
  [/Kulliyat-e-Iqbal\s*\(Jawab-e-Shikwa\)/gi, 'کلیاتِ اقبالؒ (جوابِ شکوہ)'],
  [/Kulliyat-e-Iqbal\s*\(Bal-e-Jibril\)/gi, 'کلیاتِ اقبالؒ (بالِ جبریل)'],
  [/Kulliyat-e-Iqbal\s*\(Bang-e-Dara\)/gi, 'کلیاتِ اقبالؒ (بانگِ درا)'],
  [/Kulliyat-e-Iqbal/gi, 'کلیاتِ اقبالؒ'],
  [/Musaddas-e-Hali\s*\(Maulana\s+Altaf\s+Hussain\s+Hali\)/gi, 'مسدسِ حالیؒ (مولانا الطاف حسین حالیؒ)'],
  [/Baharistan\s*\(Maulana\s+Zafar\s+Ali\s+Khan\)/gi, 'بہارستان (مولانا ظفر علی خانؒ)'],
  [/Surah\s+Aal-e-Imran/gi, 'سورۃ آلِ عمران'],
  [/Surah\s+Ad-Duha/gi, 'سورۃ الضحیٰ'],
  [/Surah\s+Al-A'?raf/gi, 'سورۃ الاعراف'],
  [/Surah\s+Al-Ahzab/gi, 'سورۃ الاحزاب'],
  [/Surah\s+Al-An'?am/gi, 'سورۃ الانعام'],
  [/Surah\s+Al-Ankabut/gi, 'سورۃ العنکبوت'],
  [/Surah\s+Al-Asr/gi, 'سورۃ العصر'],
  [/Surah\s+Al-Baqarah/gi, 'سورۃ البقرہ'],
  [/Surah\s+Al-Furqan/gi, 'سورۃ الفرقان'],
  [/Surah\s+Al-Hashr/gi, 'سورۃ الحشر'],
  [/Surah\s+Al-Hujurat/gi, 'سورۃ الحجرات'],
  [/Surah\s+Al-Insan/gi, 'سورۃ الانسان'],
  [/Surah\s+Al-Isra/gi, 'سورۃ بنی اسرائیل'],
  [/Surah\s+Al-Jumu'?ah/gi, 'سورۃ الجمعہ'],
  [/Surah\s+Al-Ma'?idah/gi, 'سورۃ المائدہ'],
  [/Surah\s+Al-Mu'?minun/gi, 'سورۃ المؤمنون'],
  [/Surah\s+Al-Mutaffifin/gi, 'سورۃ المطففین'],
  [/Surah\s+An-Nahl/gi, 'سورۃ النحل'],
  [/Surah\s+An-Nisa/gi, 'سورۃ النساء'],
  [/Surah\s+An-Nur/gi, 'سورۃ النور'],
  [/Surah\s+Ar-Ra'?d/gi, 'سورۃ الرعد'],
  [/Surah\s+Ar-Rahman/gi, 'سورۃ الرحمن'],
  [/Surah\s+Ash-Shams/gi, 'سورۃ الشمس'],
  [/Surah\s+Ash-Sharh/gi, 'سورۃ الم نشرح'],
  [/Surah\s+Ash-Shu'?ara/gi, 'سورۃ الشعراء'],
  [/Surah\s+Ash-Shura/gi, 'سورۃ الشوریٰ'],
  [/Surah\s+At-Talaq/gi, 'سورۃ الطلاق'],
  [/Surah\s+At-Tawbah/gi, 'سورۃ التوبہ'],
  [/Surah\s+Az-Zalzalah/gi, 'سورۃ الزلزال'],
  [/Surah\s+Az-Zumar/gi, 'سورۃ الزمر'],
  [/Surah\s+Fussilat/gi, 'سورۃ حٰم السجدہ'],
  [/Surah\s+Hud/gi, 'سورۃ ہود'],
  [/Surah\s+Ibrahim/gi, 'سورۃ ابراہیم'],
  [/Surah\s+Luqman/gi, 'سورۃ لقمان'],
  [/Surah\s+Maryam/gi, 'سورۃ مریم'],
  [/Surah\s+Taha/gi, 'سورۃ طٰہٰ'],
];

function localizeBookRefToUrdu(text: string): string {
  let localized = text;
  for (const [pattern, urduName] of URDU_BOOK_NAME_MAP) {
    localized = localized.replace(pattern, urduName);
  }
  localized = localized
    .replace(/^Surah\s+/i, 'سورۃ ')
    .replace(/\s+&\s+/g, ' اور ');
  return localized;
}

export function formatBookRef(
  ref?: string,
  categorySlug?: string,
  lang: Language = 'en'
): string | null {
  if (!ref) return null;
  const trimmed = ref.trim();

  // If it's purely Makhzan-e-Akhlaq reference without a canonical source
  const isPureMakhzan = /^(?:Makhzan-e-Akhlaq|مخزنِ?\s*اخلاق)(?:\s*-\s*Page\s*[\d\s,&-]+)?(?:\s*\((?:Hukama|Hikayat|Sahaba|Luqman|Seerah|Hadith|Final Conclusion)?\s*Summary\))?(?:\s*-\s*Moral\s*Summary\s*\([^)]+\))?$/i.test(trimmed);
  if (isPureMakhzan) {
    return null;
  }

  // Check if reference contains a canonical parenthetical source like "Makhzan-e-Akhlaq - Page 19-20 (Sahih Bukhari)"
  const parenMatch = trimmed.match(/^(?:Makhzan-e-Akhlaq|مخزنِ?\s*اخلاق)[^()]*\((Sahih [^)]+|Sunan [^)]+|Shamail [^)]+|Mustadrak [^)]+|Al-[^)]+|Surah [^)]+)\)$/i);
  if (parenMatch) {
    const res = parenMatch[1].trim();
    return lang === 'ur' ? localizeBookRefToUrdu(res) : res;
  }

  // Handle patterns like "Surah Al-Hashr (59:18) Summary | Makhzan-e-Akhlaq" or "Mustadrak Hakim Summary | Makhzan-e-Akhlaq - Page 36"
  const cleaned = trimmed
    .replace(/\s*\|\s*(?:Makhzan-e-Akhlaq|مخزنِ?\s*اخلاق).*$/i, '')
    .replace(/\s*&\s*(?:Makhzan-e-Akhlaq|مخزنِ?\s*اخلاق).*$/i, '')
    .replace(/\s*\/\s*(?:Makhzan-e-Akhlaq|مخزنِ?\s*اخلاق).*$/i, '')
    .replace(/\s*\(Makhzan-e-Akhlaq.*?\)$/i, '')
    .replace(/\s+Summary$/i, '')
    .trim();

  // If it's Chahal Hadith, e.g., "Makhzan-e-Akhlaq - Page 59 (Chahal Hadith #17)"
  const chahalMatch = trimmed.match(/\((Chahal Hadith\s*#[\d,\s#]+)\)/i);
  if (chahalMatch) {
    const chahal = chahalMatch[1].trim();
    return lang === 'ur' ? localizeBookRefToUrdu(chahal) : chahal;
  }

  // Check again if cleaned is just Makhzan
  if (!cleaned || /^(?:Makhzan-e-Akhlaq|مخزنِ?\s*اخلاق)(?:\s*-\s*Page\s*[\d\s,&-]+)?$/i.test(cleaned)) {
    return null;
  }

  let normalized = cleaned;
  if (normalized.toLowerCase() === 'seerah') {
    normalized = 'Seerat-un-Nabi ﷺ';
  } else if (normalized.toLowerCase() === 'shamail') {
    normalized = 'Shamail Tirmidhi';
  }

  return lang === 'ur' ? localizeBookRefToUrdu(normalized) : normalized;
}

export const quotes: Quote[] = [
  ...batchMappedQuotes,
];

const slugAliases: Record<string, string> = {
  "majlis-mein-امتیاز-na-rakhna-aur-masakeen-ke-sath-baithna": "majlis-mein-imtiyaz-na-rakhna-aur-masakeen-ke-sath-baithna",
  "sachai-amanat-hai-aur-sabr-mein-kاميابی": "sachai-amanat-hai-aur-sabr-mein-kamyabi",
  "meعمار-ka-aakhri-makan-apne-kaam-mein-ikhlas": "maimar-ka-aakhri-makan-apne-kaam-mein-ikhlas",
};

export function getQuoteBySlug(slug: string): Quote | undefined {
  const normalized = slugAliases[slug] || slug;
  const decoded = decodeURIComponent(normalized);
  return quotes.find((q) => q.slug === normalized || q.slug === decoded);
}

export function getQuotesByCategory(categorySlug: string): Quote[] {
  return quotes.filter((q) => q.category === categorySlug);
}

export function getRelatedQuotes(currentSlug: string, category: string, limit = 3): Quote[] {
  return quotes
    .filter((q) => q.slug !== currentSlug && q.category === category)
    .slice(0, limit);
}

export function getQuoteText(quote: Quote, lang: Language): string {
  if (lang === 'ur') return quote.urdu;
  if (lang === 'en') return quote.english;
  return quote.roman;
}

export function getQuoteTitle(quote: Quote, lang: Language): string {
  if (quote.title) {
    if (lang === 'ur') return quote.title.ur;
    if (lang === 'en') return quote.title.en;
    return quote.title.ro;
  }
  return '';
}

export function getQuoteAuthor(quote: Quote, lang: Language): string {
  if (lang === 'ur') return quote.authorUrdu;
  if (lang === 'en') return quote.authorEnglish;
  return quote.author;
}

export function getQuoteTashreeh(quote: Quote, lang: Language): string {
  if (lang === 'ur') return quote.tashreeh;
  if (lang === 'en') return quote.tashreehEnglish;
  return quote.tashreehRoman;
}

export function getQuoteAmliSabaq(quote: Quote, lang: Language): string | undefined {
  if (lang === 'ur') return quote.amliSabaq;
  if (lang === 'en') return quote.amliSabaqEnglish;
  return quote.amliSabaqRoman;
}

export function getQuoteSource(quote: Quote, lang: Language): string {
  if (lang === 'ur') return quote.source;
  if (lang === 'en') return quote.sourceEnglish;
  return quote.sourceRoman;
}

export function getQuoteTags(quote: Quote, lang: Language): string[] {
  if (lang === 'ur' && quote.tagsUrdu) return quote.tagsUrdu;
  if (lang === 'en' && quote.tagsEnglish) return quote.tagsEnglish;
  return quote.tags;
}
