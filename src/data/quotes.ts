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
    slug: "qoum-ki-halat-ki-tabdeeli",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 7",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "قوم کی حالت بدلنے کا الٰہی قانون",
      ro: "Qoum Ki Halat Badalne Ka Ilahi Qanoon",
      en: "The Divine Law of Changing a Nation's Condition"
    },
    quote: {
      ur: "اللہ تعالیٰ کسی قوم کی حالت نہیں بدلتا جب تک وہ خود اپنی حالت نہ بدلے۔",
      ro: "Allah Ta'ala kisi qoum ki halat nahi badalta jab tak woh khud apni halat na badle.",
      en: "Allah Almighty does not change the condition of a people until they change what is within themselves."
    },
    tashreeh: {
      ur: "یہ اصول واضح کرتا ہے کہ ترقی اور خوشحالی صرف تمناؤں سے حاصل نہیں ہوتی۔ جب تک انسان اپنے اخلاق، اعمال اور سوچ کو درست نہیں کرتا، اس وقت تک اس کے ظاہری حالات میں بہتری نہیں آتی۔",
      ro: "Yeh usool wazeh karta hai ke taraqqi aur khushhali sirf tamannaon se hasil nahi hoti. Jab tak insan apne akhlaq, aamaal aur soch ko durust nahi karta, us waqt tak us ke zahiri halat mein behtari nahi aati.",
      en: "This principle clarifies that progress and prosperity are not achieved through mere wishes. Until individuals reform their character, actions, and mindset, their external circumstances will not improve."
    },
    tags: [
      { ur: "اصلاح", ro: "Islah", en: "Self-Reform" },
      { ur: "محنت", ro: "Mehnat", en: "Hard Work" }
    ]
  },
  {
    id: "ma-002",
    slug: "zameen-par-itra-kar-na-chal",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 7",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تکبر اور شیخی خوری کی مذمت",
      ro: "Takabbur Aur Shekhi Khori Ki Mazammat",
      en: "Condemnation of Arrogance and Boasting"
    },
    quote: {
      ur: "لوگوں سے بے رخی نہ کر اور زمین پر اترا کر نہ چل، کیونکہ اللہ تعالیٰ کسی اترانے والے شیخی خور کو پسند نہیں کرتا۔",
      ro: "Logon se be-rukhi na kar aur zameen par itra kar na chal, kyunkeh Allah Ta'ala kisi itrane wale shekhi khor ko pasand nahi karta.",
      en: "Do not turn your face away from people in contempt, nor walk arrogantly upon the earth; indeed, Allah does not like any arrogant boaster."
    },
    tashreeh: {
      ur: "عاجزی اور انکساری مومن کی پہچان ہے۔ مال یا عہدے کی وجہ سے دوسروں کو حقیر سمجھنا اور اکڑ کر چلنا اللہ کی ناراضگی کا سبب بنتا ہے، جبکہ نرم مزاجی انسان کی عزت بڑھاتی ہے۔",
      ro: "Aajizi aur inkisari momin ki pehchan hai. Maal ya ohday ki wajah se doosron ko haqeer samajhna aur akar kar chalna Allah ki narazgi ka sabab banta hai, jabkeh naram mizaji insan ki izzat barhati hai.",
      en: "Humility is the hallmark of a believer. Looking down upon others due to wealth or status invites divine displeasure, whereas gentleness elevates a person's honor."
    },
    tags: [
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" },
      { ur: "اخلاق", ro: "Akhlaq", en: "Manners" }
    ]
  },
  {
    id: "ma-003",
    slug: "qoul-aur-amal-mein-tazaad",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 7",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "قول اور عمل میں یکسانیت",
      ro: "Qoul Aur Amal Mein Yaksaniyat",
      en: "Consistency Between Words and Deeds"
    },
    quote: {
      ur: "بہت بڑا گناہ یہ ہے کہ تم وہ بات کہو جو تم خود نہیں کرتے۔",
      ro: "Bohot bada gunah yeh hai ke tum woh baat kaho jo tum khud nahi karte.",
      en: "It is a grave sin in the sight of Allah that you say what you do not practice yourselves."
    },
    tashreeh: {
      ur: "دوسروں کو نصیحت کرنے سے پہلے انسان کا خود اس پر عمل پیرا ہونا ضروری ہے۔ جب انسان کے قول اور فعل میں تضاد ہوتا ہے تو اس کی بات سے تاثیر ختم ہو جاتی ہے۔",
      ro: "Doosron ko nasihat karne se pehle insan ka khud us par amal-paira hona zaroori hai. Jab insan ke qoul aur fe'l mein tazaad hota hai to us ki baat se taseer khatam ho jati hai.",
      en: "Before advising others, one must practice those virtues oneself. When there is a contradiction between a person's words and actions, their speech loses all impact and credibility."
    },
    tags: [
      { ur: "کردار", ro: "Kirdar", en: "Character" },
      { ur: "سچائی", ro: "Sachai", en: "Integrity" }
    ]
  },
  {
    id: "ma-004",
    slug: "neki-kar-ke-ehsan-na-jatao",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 8",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "احسان جتا کر نیکی ضائع نہ کرو",
      ro: "Ehsan Jata Kar Neki Zaya Na Karo",
      en: "Do Not Ruin Charity by Reminders of Generosity"
    },
    quote: {
      ur: "خبردار! نیک کام میں خرچ کیے ہوئے روپے کو احسان جتا جتا کر دکھ دینے والے کلمات کہہ کر ضائع نہ کرو۔",
      ro: "Khabardar! Nek kaam mein kharch kiye huye rupay ko ehsan jata jata kar dukh dene wale kalmaat keh kar zaya na karo.",
      en: "Beware! Do not nullify your charity by reminders of your generosity and by hurtful words."
    },
    tashreeh: {
      ur: "صدقہ اور خیرات کا مقصد اللہ کی رضا اور غریب کی عزتِ نفس کی حفاظت ہے۔ اگر مدد کرنے کے بعد بار بار جتایا جائے یا تکلیف دہ بات کہی جائے تو سارا ثواب ضائع ہو جاتا ہے۔",
      ro: "Sadqa aur khairat ka maqsad Allah ki raza aur ghareeb ki izzat-e-nafs ki hifazat hai. Agar madad karne ke baad bar bar jataya jaye ya takleef-deh baat kahi jaye to sara sawab zaya ho jata hai.",
      en: "The purpose of charity is to seek Allah's pleasure while preserving the dignity of the needy. Reminding someone of a favor or hurting their feelings erases the spiritual reward of giving."
    },
    tags: [
      { ur: "صدقہ", ro: "Sadqa", en: "Charity" },
      { ur: "اخلاص", ro: "Ikhlas", en: "Sincerity" }
    ]
  },
  {
    id: "ma-005",
    slug: "taqwa-aur-tawakkul-ki-barkat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 8",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تقویٰ اور اللہ پر بھروسے کا پھل",
      ro: "Taqwa Aur Allah Par Bharosay Ka Phal",
      en: "The Reward of Piety and Trust in Allah"
    },
    quote: {
      ur: "جو اللہ تعالیٰ سے ڈرتا رہے گا اللہ تعالیٰ اس کے سب کام آسان کر دے گا، اور جو اللہ پر بھروسہ رکھے اللہ تعالیٰ اس کے لیے کافی ہے۔",
      ro: "Jo Allah Ta'ala se darta rahega Allah Ta'ala us ke sab kaam asan kar dega, aur jo Allah par bharosa rakhe Allah Ta'ala us ke liye kafi hai.",
      en: "Whoever fears Allah, He will make a way of ease for him in all his affairs; and whoever puts his trust in Allah, He is sufficient for him."
    },
    tashreeh: {
      ur: "مشکلات اور پریشانیوں سے نکلنے کا سب سے مضبوط راستہ تقویٰ اختیار کرنا ہے۔ جب بندہ حرام سے بچتا ہے اور اپنے رب پر کامل یقین رکھتا ہے تو غیب سے اس کے لیے آسانیاں پیدا ہو جاتی ہیں۔",
      ro: "Mushkilat aur pareshaniyon se nikalne ka sab se mazboot rasta taqwa ikhtiyar karna hai. Jab banda haram se bachta hai aur apne Rab par kamil yaqeen rakhta hai to ghaib se us ke liye asaniyan paida ho jati hain.",
      en: "The surest way out of hardships is righteousness. When a person avoids wrongdoing and places complete trust in the Creator, unforeseen doors of ease and sustenance open up."
    },
    tags: [
      { ur: "توکل", ro: "Tawakkul", en: "Trust in God" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Piety" }
    ]
  },
  {
    id: "ma-006",
    slug: "salam-ka-behtar-jawab-dena",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 9",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سلام اور دعا کا بہترین جواب",
      ro: "Salam Aur Dua Ka Behtareen Jawab",
      en: "Responding to Greetings with Greater Kindness"
    },
    quote: {
      ur: "جب تمہیں سلام کے ذریعے سے دعا دی جائے تو تم اس کے جواب میں بہتر دعا دو یا وہی کلمہ جواب میں کہہ دو۔",
      ro: "Jab tumhein salam ke zariye se dua di jaye to tum us ke jawab mein behtar dua do ya wahi kalma jawab mein keh do.",
      en: "When you are greeted with a prayer of peace, respond with a better greeting or at least return the same."
    },
    tashreeh: {
      ur: "سلامتی کی دعا معاشرے میں محبت اور امن پھیلانے کا ذریعہ ہے۔ اگر کوئی آپ کے لیے خیر کا کلمہ کہے تو اخلاقی فرض ہے کہ اس سے بڑھ کر محبت اور خوش اخلاقی سے جواب دیا جائے۔",
      ro: "Salamti ki dua muashray mein mohabbat aur aman phailane ka zariya hai. Agar koi aap ke liye khair ka kalma kahe to akhlaqi farz hai ke us se barh kar mohabbat aur khush-akhlaqi se jawab diya jaye.",
      en: "Exchanging greetings of peace spreads harmony in society. When someone wishes well for you, moral excellence demands responding with even greater warmth and goodwill."
    },
    tags: [
      { ur: "سلام", ro: "Salam", en: "Greetings" },
      { ur: "معاشرت", ro: "Muasharat", en: "Social Etiquette" }
    ]
  },
  {
    id: "ma-007",
    slug: "sail-se-narmi-ka-bartao",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 11",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سائل کے ساتھ نرمی اور درگزر",
      ro: "Sail Ke Sath Narmi Aur Darguzar",
      en: "Kind Words and Forgiveness Toward the Needy"
    },
    quote: {
      ur: "سائل کو نرمی سے جواب دے دینا اور سائل کے اصرار سے درگزر کرنا اس خیرات سے بہت بہتر ہے جس کے پیچھے سائل کو کسی طرح کی ایذا ہو۔",
      ro: "Sail ko narmi se jawab de dena aur sail ke israr se darguzar karna us khairat se bohot behtar hai jis ke peechay sail ko kisi tarah ki eiza ho.",
      en: "A kind word and forgiveness toward a persistent beggar are far better than charity followed by hurt and humiliation."
    },
    tashreeh: {
      ur: "اگر کسی وقت مالی مدد کرنے کی طاقت نہ ہو تو مانگنے والے کو ڈانٹنے کے بجائے میٹھے بول سے معذرت کر لینی چاہیے، کیونکہ میٹھا بول دل دکھانے والی خیرات سے افضل ہے۔",
      ro: "Agar kisi waqt maali madad karne ki taqat na ho to mangne wale ko dantne ke bajaye meethay bol se maazrat kar leni chahiye, kyunkeh meetha bol dil dukhane wali khairat se afzal hai.",
      en: "If one is unable to help financially, apologizing politely to a person in need is far nobler than giving money while insulting their dignity."
    },
    tags: [
      { ur: "نرمی", ro: "Narmi", en: "Kindness" },
      { ur: "ہمدردی", ro: "Hamdardi", en: "Compassion" }
    ]
  },
  {
    id: "ma-008",
    slug: "musalman-bhai-ka-dil-khush-karna",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "کسی کا دل خوش کرنا عظیم عبادت ہے",
      ro: "Kisi Ka Dil Khush Karna Azeem Ibadat Hai",
      en: "Bringing Joy to a Heart is Supreme Worship"
    },
    quote: {
      ur: "اللہ تعالیٰ کے نزدیک اس سے زیادہ کوئی عبادت نہیں کہ تو کسی مسلمان بھائی کا دل خوش کر دے۔",
      ro: "Allah Ta'ala ke nazdeek is se zyada koi ibadat nahi ke tu kisi Musalman bhai ka dil khush kar de.",
      en: "There is no act of worship dearer to Allah Almighty than bringing happiness to the heart of a fellow believer."
    },
    tashreeh: {
      ur: "دکھی انسانوں کے کام آنا، کسی پریشان حال کی مدد کرنا اور اپنے رویے سے دوسروں کو مسرت پہنچانا اللہ کے ہاں سب سے محبوب عمل ہے۔",
      ro: "Dukhi insanon ke kaam aana, kisi pareshan-haal ki madad karna aur apne rawaiye se doosron ko masarrat pohanchana Allah ke haan sab se mehboob amal hai.",
      en: "Helping those in distress, easing someone's burden, and spreading joy through kind behavior are among the most beloved deeds to the Creator."
    },
    tags: [
      { ur: "خدمتِ خلق", ro: "Khidmat-e-Khalq", en: "Humanity" },
      { ur: "عبادت", ro: "Ibadat", en: "Worship" }
    ]
  },
  {
    id: "ma-009",
    slug: "makhlooq-ko-aram-pohanchana-afzal-neki",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مخلوق کو آرام پہنچانا افضل نیکی ہے",
      ro: "Makhlooq Ko Aram Pohanchana Afzal Neki Hai",
      en: "Bringing Comfort to Creation is the Best Virtue"
    },
    quote: {
      ur: "شرک کے بعد بدترین گناہ ایذا رسانیِ خلق ہے۔ ایمان کے بعد افضل نیکی خلق کو آرام دینا ہے۔",
      ro: "Shirk ke baad bad-tareen gunah eiza-rasani-e-khalq hai. Eman ke baad afzal neki khalq ko aram dena hai.",
      en: "After polytheism, the worst sin is harming people; and after faith, the noblest virtue is bringing comfort to creation."
    },
    tashreeh: {
      ur: "یہ فرمان دین کا پورا خلاصہ بیان کرتا ہے کہ سچا مومن وہی ہے جس کی ذات سے لوگوں کو راحت پہنچے اور کسی بھی جاندار کو تکلیف نہ ملے۔",
      ro: "Yeh farman deen ka poora khulasa bayan karta hai ke sacha momin wahi hai jis ki zaat se logon ko rahat pohanche aur kisi bhi jandar ko takleef na mile.",
      en: "This saying summarizes the essence of faith: a true believer is a source of peace and relief for others and never causes harm to any living being."
    },
    tags: [
      { ur: "حقوق العباد", ro: "Huqooq-ul-Ibaad", en: "Human Rights" },
      { ur: "نیکی", ro: "Neki", en: "Virtue" }
    ]
  },
  {
    id: "ma-010",
    slug: "burhon-ki-tazeem-ka-badla",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 16",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "بزرگوں کی تعظیم کا دنیاوی و اخروی صلہ",
      ro: "Buzurgon Ki Tazeem Ka Dunyawi O Ukhrawi Sila",
      en: "The Reward of Honoring the Elderly"
    },
    quote: {
      ur: "تو بوڑھوں کی تعظیم کر، اللہ تعالیٰ نوجوانوں کو توفیق دے گا کہ تیری تعظیم کریں جبکہ تو بوڑھا ہو گا۔",
      ro: "Tu burhon ki tazeem kar, Allah Ta'ala naujawanon ko taufiq dega ke teri tazeem karein jabkeh tu burha hoga.",
      en: "Honor the elderly in your youth, and Allah will appoint young people to honor you when you reach old age."
    },
    tashreeh: {
      ur: "جوانی میں بزرگوں کا ادب اور خدمت کرنے والا انسان جب خود بڑھاپے کی دہلیز پر پہنچتا ہے تو قدرت اس کے لیے عزت اور خدمت کرنے والے ہاتھ مہیا فرما دیتی ہے۔",
      ro: "Jawani mein buzurgon ka adab aur khidmat karne wala insan jab khud burhapay ki dehleez par pohanchta hai to qudrat us ke liye izzat aur khidmat karne wale hath muhayya farma deti hai.",
      en: "Life returns what we give. A youth who respects and serves elders will be blessed with respect and care when they grow old themselves."
    },
    tags: [
      { ur: "ادب", ro: "Adab", en: "Respect" },
      { ur: "بزرگ", ro: "Buzurg", en: "Elders" }
    ]
  },
  {
    id: "ma-011",
    slug: "kushada-roi-aur-shireen-zabani",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 16",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مغفرت کا سب سے بڑا سبب",
      ro: "Maghfirat Ka Sab Se Bada Sabab",
      en: "The Greatest Cause of Forgiveness"
    },
    quote: {
      ur: "جو کام سب سے زیادہ سببِ مغفرت ہو گا وہ کشادہ روئی اور شیریں زبانی ہے۔",
      ro: "Jo kaam sab se zyada sabab-e-maghfirat hoga woh kushada-roi aur shireen-zabani hai.",
      en: "The qualities most likely to earn forgiveness are a cheerful countenance and sweet, gentle speech."
    },
    tashreeh: {
      ur: "لوگوں سے مسکرا کر ملنا اور میٹھے الفاظ میں گفتگو کرنا بظاہر چھوٹا عمل لگتا ہے، لیکن یہ دلوں کو جوڑتا ہے اور روزِ قیامت بخشش کا بڑا ذریعہ بنتا ہے۔",
      ro: "Logon se muskura kar milna aur meethay alfaz mein guftugu karna bazahir chota amal lagta hai, lekin yeh dilon ko jorta hai aur roz-e-qayamat bakhshish ka bada zariya banta hai.",
      en: "Meeting people with a warm smile and speaking gently may seem small, yet it unites hearts and serves as a major means of divine forgiveness."
    },
    tags: [
      { ur: "خوش اخلاقی", ro: "Khush Akhlaqi", en: "Good Character" },
      { ur: "گفتگو", ro: "Guftugu", en: "Speech" }
    ]
  },
  {
    id: "ma-012",
    slug: "teen-baaton-mein-dair-na-kar",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "تین کاموں میں کبھی تاخیر نہ کرو",
      ro: "Teen Kaamon Mein Kabhi Takheer Na Karo",
      en: "Never Delay These Three Matters"
    },
    quote: {
      ur: "تین باتوں میں دیر نہ کر: نماز جب وقت ہو جائے، جنازہ جب تیار ہو، اور بیوہ کا نکاح جب اس کا جوڑ مل جائے۔",
      ro: "Teen baaton mein dair na kar: Namaz jab waqt ho jaye, Janaza jab tayyar ho, aur Bewa ka nikah jab us ka jor mil jaye.",
      en: "Do not delay three things: prayer when its time arrives, the funeral when it is ready, and marriage when a suitable match is found."
    },
    tashreeh: {
      ur: "ان تینوں امور میں تاخیر کرنے سے دینی اور سماجی نقصان پیدا ہوتا ہے۔ عبادت اور معاشرتی ذمہ داریوں کو ان کے مقررہ وقت پر فوراً ادا کرنا کامیابی کی علامت ہے۔",
      ro: "In teenon umoor mein takheer karne se deeni aur samaji nuqsan paida hota hai. Ibadat aur muasharti zimmedariyon ko un ke muqarrara waqt par foran ada karna kamiyabi ki alamat hai.",
      en: "Delaying these three responsibilities leads to spiritual and social harm. Fulfilling worship and family duties promptly brings peace and order to society."
    },
    tags: [
      { ur: "وقت کی پابندی", ro: "Waqt Ki Pabandi", en: "Punctuality" },
      { ur: "ذمہ داری", ro: "Zimmedari", en: "Responsibility" }
    ]
  },
  {
    id: "ma-013",
    slug: "do-nematein-tandrusti-aur-faraghat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "صحت اور فرصت کی قدر",
      ro: "Sehat Aur Fursat Ki Qadr",
      en: "Valuing Good Health and Free Time"
    },
    quote: {
      ur: "دو نعمتیں ہیں کہ ان میں اکثر لوگ نقصان اٹھاتے ہیں: ایک تندرستی، دوسرے کاروبار میں فراغت۔",
      ro: "Do nematein hain ke un mein aksar log nuqsan uthate hain: aik tandrusti, doosre karobar mein faraghat.",
      en: "There are two blessings in which many people suffer loss through neglect: good health and free time."
    },
    tashreeh: {
      ur: "انسان کو جب صحت اور فارغ وقت ملتا ہے تو وہ اکثر غفلت میں پڑ کر انہیں ضائع کر دیتا ہے، اور جب بیماری یا مصروفیت آ گھیرتی ہے تب اسے ان کی قیمت یاد آتی ہے۔",
      ro: "Insan ko jab sehat aur farigh waqt milta hai to woh aksar ghaflat mein par kar unhein zaya kar deta hai, aur jab bimari ya masroofiyat aa gherti hai tab usay un ki qeemat yaad aati hai.",
      en: "People often waste their health and leisure in heedlessness, realizing their true value only after illness or busyness overtakes them."
    },
    tags: [
      { ur: "صحت", ro: "Sehat", en: "Health" },
      { ur: "وقت", ro: "Waqt", en: "Time Management" }
    ]
  },
  {
    id: "ma-014",
    slug: "aulad-ke-liye-behtareen-tohfa-taleem",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "اولاد کے لیے باپ کا بہترین عطیہ",
      ro: "Aulad Ke Liye Baap Ka Behtareen Atiya",
      en: "A Father's Greatest Gift to His Child"
    },
    quote: {
      ur: "باپ کا کوئی عطیہ بیٹے کے لیے اس سے بڑھ کر نہیں کہ اس کی تعلیم و تربیت اچھی کرے۔",
      ro: "Baap ka koi atiya betay ke liye is se barh kar nahi ke us ki taleem-o-tarbiyat achi kare.",
      en: "No father can give his child a gift more valuable than good education and noble moral upbringing."
    },
    tashreeh: {
      ur: "اولاد کے لیے صرف پیسہ اور جائیداد چھوڑ جانا کافی نہیں۔ اگر بچوں کو اچھا علم اور اعلیٰ اخلاق سکھا دیے جائیں تو وہ دنیا و آخرت دونوں میں سرخرو رہتے ہیں۔",
      ro: "Aulad ke liye sirf paisa aur jaidad chhor jana kafi nahi. Agar bachon ko acha ilm aur aala akhlaq sikha diye jayein to woh duniya-o-akhirat dono mein surkhuru rehte hain.",
      en: "Leaving behind wealth alone is never enough. Instilling sound knowledge and strong moral character equips children to succeed in both worlds."
    },
    tags: [
      { ur: "تربیت", ro: "Tarbiyat", en: "Upbringing" },
      { ur: "تعلیم", ro: "Taleem", en: "Education" }
    ]
  },
  {
    id: "ma-015",
    slug: "kharid-o-farokht-mein-narmi",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "کاروبار اور لین دین میں نرمی کی برکت",
      ro: "Karobar Aur Lain Dain Mein Narmi Ki Barkat",
      en: "Blessings of Gentleness in Business Transactions"
    },
    quote: {
      ur: "اللہ اس شخص پر مہربانی کرتا ہے جو خرید و فروخت اور قیمت وصول کرنے کے تقاضے میں نرمی اختیار کرے۔",
      ro: "Allah us shakhs par mehrbani karta hai jo kharid-o-farokht aur qeemat wasool karne ke taqazay mein narmi ikhtiyar kare.",
      en: "May Allah show mercy to a person who is gentle and fair when selling, when buying, and when asking for payment of dues."
    },
    tashreeh: {
      ur: "اسلامی تجارت کا سنہرا اصول یہ ہے کہ بیچتے وقت، خریدتے وقت اور قرض یا رقم کا تقاضا کرتے وقت سختی کے بجائے نرمی اور عفو و درگزر سے کام لیا جائے۔",
      ro: "Islami tijarat ka sunehra usool yeh hai ke bechte waqt, kharidte waqt aur qarz ya raqam ka taqaza karte waqt sakhti ke bajaye narmi aur afw-o-darguzar se kaam liya jaye.",
      en: "The golden rule of ethical commerce is practicing fairness, patience, and kindness when buying, selling, or collecting payments."
    },
    tags: [
      { ur: "تجارت", ro: "Tijarat", en: "Business Ethics" },
      { ur: "رحمت", ro: "Rehmat", en: "Mercy" }
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
    slug: "musalman-ke-musalman-par-panch-huqooq",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ایک مسلمان کے دوسرے مسلمان پر پانچ حقوق",
      ro: "Aik Musalman Ke Doosre Musalman Par Panch Huqooq",
      en: "Five Mutual Rights of a Believer"
    },
    quote: {
      ur: "ایک مسلمان کے دوسرے مسلمان پر پانچ حق ہیں: سلام کا جواب دینا، بیمار پرسی کرنا، جنازہ کے ساتھ جانا، بلاوے کو قبول کرنا اور چھینک کا جواب دینا۔",
      ro: "Aik Musalman ke doosre Musalman par panch haq hain: salam ka jawab dena, bimar-pursi karna, janaza ke sath jana, bulaway ko qubool karna aur chheenk ka jawab dena.",
      en: "A believer owes five duties to another believer: returning greetings, visiting the sick, attending funerals, accepting invitations, and praying for one who sneezes."
    },
    tashreeh: {
      ur: "یہ پانچ اصول معاشرے میں باہمی محبت، ہمدردی اور بھائی چارے کی مضبوط بنیاد رکھتے ہیں۔ خوشی اور غمی میں ایک دوسرے کا ساتھ دینا ہی سچی معاشرتی زندگی ہے۔",
      ro: "Yeh panch usool muashray mein bahami mohabbat, hamdardi aur bhai-charay ki mazboot bunyad rakhte hain. Khushi aur ghami mein aik doosre ka sath dena hi sachi muasharti zindagi hai.",
      en: "These five social duties build a strong foundation of mutual love, empathy, and brotherhood, uniting the community in times of both joy and sorrow."
    },
    tags: [
      { ur: "حقوق", ro: "Huqooq", en: "Social Rights" },
      { ur: "بھائی چارہ", ro: "Bhai Chara", en: "Brotherhood" }
    ]
  },
  {
    id: "ma-017",
    slug: "dosti-aur-dushmani-mein-aitdaal",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "دوستی اور دشمنی میں اعتدال کا اصول",
      ro: "Dosti Aur Dushmani Mein Aitdaal Ka Usool",
      en: "Moderation in Friendship and Enmity"
    },
    quote: {
      ur: "دوست کے ساتھ محبت اعتدال کے ساتھ رکھو کیونکہ ممکن ہے کبھی بگاڑ ہو جائے، اسی طرح دشمن کے ساتھ دشمنی حد سے زیادہ نہ کرو کیونکہ ممکن ہے کبھی تمہاری محبت ہو جائے۔",
      ro: "Dost ke sath mohabbat aitdaal ke sath rakho kyunkeh mumkin hai kabhi bigaar ho jaye, isi tarah dushman ke sath dushmani had se zyada na karo kyunkeh mumkin hai kabhi tumhari mohabbat ho jaye.",
      en: "Be moderate in your love for a friend, as misunderstandings may arise one day; and be moderate in your dislike of an opponent, as they may become your friend one day."
    },
    tashreeh: {
      ur: "تعلقات میں توازن رکھنا اعلیٰ دانائی کی علامت ہے۔ جذبات میں آ کر کبھی ایسی حد پار نہیں کرنی چاہیے کہ کل کو صلح یا واپسی کا راستہ ہی باقی نہ رہے۔",
      ro: "Ta'alluqat mein tawazun rakhna aala danai ki alamat hai. Jazbat mein aa kar kabhi aisi had paar nahi karni chahiye ke kal ko sulah ya wapsi ka rasta hi baqi na rahe.",
      en: "Maintaining balance in human relationships is a sign of deep wisdom. Never cross boundaries in emotion that leave no room for future reconciliation."
    },
    tags: [
      { ur: "اعتدال", ro: "Aitdaal", en: "Moderation" },
      { ur: "تعلقات", ro: "Ta'alluqat", en: "Relationships" }
    ]
  },
  {
    id: "ma-018",
    slug: "aaj-aur-kal-barabar-hone-ka-nuqsan",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 21",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ہر آنے والے دن کو پچھلے دن سے بہتر بنانا",
      ro: "Har Aane Wale Din Ko Pichle Din Se Behtar Banana",
      en: "Making Every New Day Better Than Yesterday"
    },
    quote: {
      ur: "جس شخص کے دونوں دن یعنی آج اور کل گزشتہ برابر ہو جائیں وہ نقصان زدہ ہے، اور جس شخص کا گزشتہ کل آج سے اچھا تھا وہ محروم ہے۔",
      ro: "Jis shakhs ke dono din yani aaj aur kal-guzashta barabar ho jayein woh nuqsan-zada hai, aur jis shakhs ka guzashta kal aaj se acha tha woh mehroom hai.",
      en: "Whoever's two days—today and yesterday—are equal in growth has suffered a loss; and whoever's yesterday was better than today is truly deprived."
    },
    tashreeh: {
      ur: "انسان کی زندگی کا مقصد مسلسل علمی اور اخلاقی ترقی ہے۔ ہر نئے سورج کے ساتھ انسان کے علم، عمل اور کردار میں پچھلے دن کے مقابلے میں بہتری آنی چاہیے۔",
      ro: "Insan ki zindagi ka maqsad musalsal ilmi aur akhlaqi taraqqi hai. Har naye sooraj ke sath insan ke ilm, amal aur kirdar mein pichle din ke muqable mein behtari aani chahiye.",
      en: "The purpose of life is continuous moral and intellectual growth. Every new day should bring improvement in one's knowledge, character, and good deeds."
    },
    tags: [
      { ur: "وقت", ro: "Waqt", en: "Time" },
      { ur: "ترقی", ro: "Taraqqi", en: "Self-Growth" }
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
    slug: "mulaim-jawab-gusse-ko-khatam-karta-hai",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 60-61",
    author: {
      ur: "حضرت سلیمان علیہ السلام",
      ro: "Hazrat Suleman (A.S)",
      en: "Prophet Solomon (A.S)"
    },
    title: {
      ur: "نرم جواب اور جھگڑے سے پرہیز کی عزت",
      ro: "Naram Jawab Aur Jhagray Se Parhez Ki Izzat",
      en: "Gentle Words and the Honor of Avoiding Strife"
    },
    quote: {
      ur: "ملائم جواب غصہ کو کھو دیتا ہے مگر کرخت باتیں غضب انگیز ہیں، اور آدمی کی عزت اسی میں ہے کہ جھگڑے سے باز رہے۔",
      ro: "Mulaim jawab gusse ko kho deta hai magar karakht baatein ghazab-angez hain, aur aadmi ki izzat isi mein hai ke jhagray se baaz rahe.",
      en: "A gentle answer turns away wrath, while harsh words stir up anger; a person's honor lies in staying away from quarrels."
    },
    tashreeh: {
      ur: "غصے کی آگ کو سخت کلامی سے نہیں بلکہ نرم اور شیریں الفاظ سے بجھایا جا سکتا ہے۔ عقلمند انسان جھگڑا تیز ہونے سے پہلے ہی اسے چھوڑ کر اپنی عزت اور سکون محفوظ کر لیتا ہے۔",
      ro: "Gusse ki aag ko sakht kalami se nahi balkay naram aur shireen alfaz se bujhaya ja sakta hai. Aqalmand insan jhagra tez hone se pehle hi usay chhor kar apni izzat aur sukoon mehfooz kar leta hai.",
      en: "The fire of anger is extinguished not by harshness, but by soft and calm speech. A wise person preserves their dignity and peace by stepping back before a dispute escalates."
    },
    tags: [
      { ur: "نرمی", ro: "Narmi", en: "Gentleness" },
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" }
    ]
  },
  {
    id: "ma-032",
    slug: "cheenti-ki-mehnat-aur-daulat-ka-usool",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 60",
    author: {
      ur: "حضرت سلیمان علیہ السلام",
      ro: "Hazrat Suleman (A.S)",
      en: "Prophet Solomon (A.S)"
    },
    title: {
      ur: "محنت کی برکت اور پیش بینی کا سبق",
      ro: "Mehnat Ki Barkat Aur Pesh-Beeni Ka Sabaq",
      en: "The Blessing of Hard Work and Foresight"
    },
    quote: {
      ur: "ہوشیار آدمی کا ہاتھ حکمران ہو گا اور سست آدمی خراج گزار ہو گا۔ وہ دولت جو بطالت سے حاصل کی جاتی ہے گھٹ جاتی ہے اور محنت سے فراہم کردہ بڑھے گی۔",
      ro: "Hoshiyar aadmi ka hath hukmran hoga aur sust aadmi khiraj-guzar hoga. Woh daulat jo bitalat se hasil ki jati hai ghat jati hai aur mehnat se faraham karda barhegi.",
      en: "The hand of the diligent will rule, while the slothful will be put to forced labor. Wealth gained hastily without effort dwindles, but whoever gathers it through hard work will see it grow."
    },
    tashreeh: {
      ur: "جس طرح چیونٹی گرمی کے موسم میں محنت کر کے سردی کے لیے خوراک جمع کرتی ہے، اسی طرح محنتی اور بیدار مغز انسان خود کفیل رہتا ہے جبکہ کاہلی انسان کو دوسروں کا محتاج بنا دیتی ہے۔",
      ro: "Jis tarah cheenti garmi ke mausam mein mehnat kar ke sardi ke liye khorak jama karti hai, isi tarah mehnati aur bedar-maghz insan khud-kafeel rehta hai jabkeh kahili insan ko doosron ka mohtaj bana deti hai.",
      en: "Just as the ant works tirelessly in summer to store provisions for winter, a hardworking and proactive person achieves independence, whereas laziness leads to dependency."
    },
    tags: [
      { ur: "محنت", ro: "Mehnat", en: "Hard Work" },
      { ur: "کامیابی", ro: "Kamyabi", en: "Success" }
    ]
  },
  {
    id: "ma-033",
    slug: "makhlooq-ki-mohabbat-hi-khaliq-ki-mohabbat",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 62",
    author: {
      ur: "حضرت عیسیٰ علیہ السلام",
      ro: "Hazrat Isa (A.S)",
      en: "Prophet Jesus (A.S)"
    },
    title: {
      ur: "مخلوق کی محبت ہی خالق کی محبت ہے",
      ro: "Makhlooq Ki Mohabbat Hi Khaliq Ki Mohabbat Hai",
      en: "Love for Creation is Love for the Creator"
    },
    quote: {
      ur: "اگر کوئی شخص کہتا ہے کہ میں اللہ تعالیٰ سے محبت کرتا ہوں اور اپنے بھائی سے نفرت کرتا ہے تو وہ جھوٹا ہے؛ اصل میں مخلوق کی محبت ہی خالق کی محبت ہے۔",
      ro: "Agar koi shakhs kehta hai ke main Allah Ta'ala se mohabbat karta hoon aur apne bhai se nafrat karta hai to woh jhoota hai; asal mein makhlooq ki mohabbat hi Khaliq ki mohabbat hai.",
      en: "If someone claims to love God yet hates their fellow brother, they are untruthful; in reality, loving creation is the true expression of loving the Creator."
    },
    tashreeh: {
      ur: "جو انسان اپنے سامنے نظر آنے والے انسانوں کے ساتھ اچھا سلوک نہیں کرتا اور دل میں بغض رکھتا ہے، اس کا عشقِ الٰہی کا دعویٰ بے بنیاد ہے۔ رب تک پہنچنے کا راستہ انسانوں سے ہمدردی سے ہو کر گزرتا ہے۔",
      ro: "Jo insan apne samne nazar aane wale insanon ke sath acha sulook nahi karta aur dil mein bughz rakhta hai, us ka ishq-e-Ilahi ka dawa be-bunyad hai. Rab tak pohanchne ka rasta insanon se hamdardi se ho kar guzarta hai.",
      en: "One who mistreats fellow human beings whom they can see cannot truly love the Unseen Creator. Compassion toward humanity is the truest proof of devotion to God."
    },
    tags: [
      { ur: "محبت", ro: "Mohabbat", en: "Love" },
      { ur: "انسانیت", ro: "Insaniyat", en: "Humanity" }
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
    slug: "sukoot-aur-kam-goi-hikmat-ki-alamat",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 240",
    author: {
      ur: "حکیم سقراط",
      ro: "Hakeem Suqrat",
      en: "Socrates"
    },
    title: {
      ur: "خاموشی اور کم گوئی کی حکمت",
      ro: "Khamoshi Aur Kam-Goi Ki Hikmat",
      en: "The Wisdom of Silence and Few Words"
    },
    quote: {
      ur: "عقل مند انسان کی خاموشی اس کا محافظ ہے اور کم گو ہونا حکمت کی سب سے بڑی علامت ہے۔",
      ro: "Aqal-mand insan ki khamoshi us ka mohafiz hai aur kam-go hona hikmat ki sab se badi alamat hai.",
      en: "A wise person's silence is their shield, and speaking sparingly is the greatest sign of wisdom."
    },
    tashreeh: {
      ur: "زیادہ بولنے سے غلطیوں کے امکانات بڑھ جاتے ہیں، جبکہ سوچ سمجھ کر اور ضرورت کے مطابق بولنے والا انسان حماقتوں اور ندامت سے محفوظ رہتا ہے۔",
      ro: "Zyada bolne se ghaltiyon ke imkanaat barh jaate hain, jabkeh soch samajh kar aur zaroorat ke mutabiq bolne wala insan humaqton aur nadamat se mehfooz rehta hai.",
      en: "Talking excessively increases the likelihood of mistakes, whereas speaking thoughtfully and only when necessary protects a person from folly and regret."
    },
    tags: [
      { ur: "خاموشی", ro: "Khamoshi", en: "Silence" },
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" }
    ]
  },
  {
    id: "ma-047",
    slug: "duniya-ki-be-sbaati-aur-asal-tosha",
    categorySlug: "sabaq-aamoz-waqiat",
    bookRef: "Makhzan-e-Akhlaq - Page 353",
    author: {
      ur: "حقیقتِ دنیا",
      ro: "Haqeeqat-e-Duniya",
      en: "Reality of the World"
    },
    title: {
      ur: "دنیا کی عارضی حقیقت اور آخرت کی تیاری",
      ro: "Duniya Ki Aarzi Haqeeqat Aur Akhirat Ki Tayari",
      en: "The Transient Reality of the World and Preparation for the Hereafter"
    },
    quote: {
      ur: "دنیا ایک مسافر خانہ ہے جو آخرت کے مسافروں کے لیے وقف ہے، اپنا تو شہ لے لو اور جو کچھ اس سرائے میں ہے اس کا لالچ نہ کرو۔",
      ro: "Duniya aik musafir-khana hai jo akhirat ke musafiron ke liye waqf hai, apna tosha le lo aur jo kuch is saraye mein hai us ka lalach na karo.",
      en: "The world is a waystation dedicated to travelers of the hereafter; take your provisions and do not greedily cling to what belongs to this temporary inn."
    },
    tashreeh: {
      ur: "انسان اس دنیا میں ہمیشہ رہنے کے لیے نہیں آیا بلکہ عارضی مسافر ہے۔ اصل کامیابی اس مال و دولت میں نہیں جو یہاں چھوڑ جانا ہے، بلکہ اس نیکی میں ہے جو آخرت کے لیے ساتھ جانی ہے۔",
      ro: "Insan is duniya mein hamesha rehne ke liye nahi aaya balkay aarzi musafir hai. Asal kamiyabi us maal-o-daulat mein nahi jo yahan chhor jana hai, balkay us neki mein hai jo akhirat ke liye sath jani hai.",
      en: "Humanity is merely passing through this world as travelers. True success lies not in accumulated wealth left behind, but in righteousness carried forward."
    },
    tags: [
      { ur: "آخرت", ro: "Akhirat", en: "Hereafter" },
      { ur: "قناعت", ro: "Qana'at", en: "Contentment" }
    ]
  },
  {
    id: "ma-048",
    slug: "sila-rehmi-aur-rishton-ki-baqa",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 381",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "صلہ رحمی اور رشتہ داروں کے ساتھ حسنِ سلوک",
      ro: "Sila-Rehmi Aur Rishtedaron Ke Sath Husn-e-Sulook",
      en: "Maintaining Family Ties and Kindness to Relatives"
    },
    quote: {
      ur: "صلہ رحمی عمر اور رزق میں فراخی پیدا کرتی ہے، اور رشتہ داروں سے تعلق توڑنا گھرانوں کو ویران کر دیتا ہے۔",
      ro: "Sila-rehmi umar aur rizq mein farakhi paida karti hai, aur rishtedaron se talluq torna gharanon ko weeran kar deta hai.",
      en: "Maintaining kinship ties expands lifespan and provision, while severing family ties destroys households."
    },
    tashreeh: {
      ur: "اپنے خون کے رشتوں کو جوڑے رکھنا، ان کی تکلیف میں کام آنا اور قطع تعلق سے بچنا اللہ کی رحمت اور برکت کو کھینچتا ہے۔",
      ro: "Apne khoon ke rishton ko joray rakhna, un ki takleef mein kaam aana aur qat-e-talluq se bachna Allah ki rehmat aur barkat ko kheenchta hai.",
      en: "Cherishing family bloodlines, helping them in hardship, and avoiding alienation draw divine mercy and abundant blessings."
    },
    tags: [
      { ur: "صلہ رحمی", ro: "Sila-Rehmi", en: "Kinship" },
      { ur: "برکت", ro: "Barkat", en: "Blessings" }
    ]
  },
  {
    id: "ma-049",
    slug: "ilm-o-akhlaq-ki-bulandi",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 426",
    author: {
      ur: "علم و اخلاق",
      ro: "Ilm o Akhlaq",
      en: "Knowledge and Morality"
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
      ur: "قدر و قیمتِ وقت",
      ro: "Qadr o Qeemat-e-Waqt",
      en: "The Value of Time"
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
    slug: "ghussa-aur-bardasht-ki-taqat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 304",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "غصے پر قابو پانے کی عظمت",
      ro: "Gusse Par Qaboo Pane Ki Azmat",
      en: "The Greatness of Controlling Anger"
    },
    quote: {
      ur: "طاقتور وہ نہیں جو کشتی میں حریف کو پچھاڑ دے، بلکہ اصل طاقتور وہ ہے جو غصے کے وقت اپنے آپ پر قابو رکھے۔",
      ro: "Taqatwar woh nahi jo kushti mein hareef ko pachhaar de, balkay asal taqatwar woh hai jo gusse ke waqt apne aap par qaboo rakhe.",
      en: "The strong person is not the one who overpowers others in physical wrestling, but the one who controls themselves when angry."
    },
    tashreeh: {
      ur: "جسمانی طاقت عارضی ہے، لیکن غصے کے تیز طوفان میں اپنی زبان اور ہاتھ کو روک لینا سب سے بڑی داخلی فتح اور شجاعت ہے۔",
      ro: "Jismani taqat aarzi hai, lekin gusse ke tez toofan mein apni zaban aur hath ko rok lena sab se badi dakhli fateh aur shuja'at hai.",
      en: "Physical strength is fleeting, but restraining one's impulses during a storm of anger is the highest form of inner courage and conquest."
    },
    tags: [
      { ur: "غصہ", ro: "Ghussa", en: "Anger Management" },
      { ur: "صبر", ro: "Sabr", en: "Self-Control" }
    ]
  },
  {
    id: "ma-052",
    slug: "shukar-aur-nematon-ki-ziyadati",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 28",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "شکر گزاری سے نعمتوں کا دوام",
      ro: "Shukr-Guzari Se Nematon Ka Dawam",
      en: "Perpetuating Blessings Through Gratitude"
    },
    quote: {
      ur: "اگر تم شکر ادا کرو گے تو میں تمہیں اور زیادہ دوں گا، اور اگر ناشکری کرو گے تو میرا عذاب بھی بہت سخت ہے۔",
      ro: "Agar tum shukr ada karo ge to main tumhein aur zyada doonga, aur agar nash-kari karo ge to mera azaab bhi bohat sakht hai.",
      en: "If you are grateful, I will surely increase you [in blessing]; but if you deny, indeed, My punishment is severe."
    },
    tashreeh: {
      ur: "اللہ کی دی ہوئی چھوٹی یا بڑی نعمت پر دل اور زبان سے شکر ادا کرنا اس نعمت میں برکت اور اضافے کا سب سے بڑا ذریعہ ہے۔",
      ro: "Allah ki di hui choti ya badi nemat par dil aur zaban se shukr ada karna us nemat mein barkat aur izafay ka sab se bada zariya hai.",
      en: "Expressing gratitude to God for every blessing, big or small, is the surest way to secure abundance and sustained favor."
    },
    tags: [
      { ur: "شکر", ro: "Shukr", en: "Gratitude" },
      { ur: "نعمت", ro: "Nemat", en: "Blessings" }
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
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 119",
    author: {
      ur: "دنیائے مزدور",
      ro: "Duniya-e-Mazdoor",
      en: "The World of Labor"
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
    slug: "amna-o-amaan-aur-sachi-dosti",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حقیقی مومن اور امن کی علامت",
      ro: "Haqeeqi Momin Aur Aman Ki Alamat",
      en: "The True Believer as a Symbol of Safety"
    },
    quote: {
      ur: "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں، اور سچا مہاجر وہ ہے جو گناہوں کو چھوڑ دے۔",
      ro: "Haqeeqi Musalman woh hai jis ki zaban aur hath se doosre Musalman mehfooz rahein, aur sacha muhajir woh hai jo gunahon ko chhor de.",
      en: "A true Muslim is one from whose tongue and hands other people are safe, and a true emigrant is one who abandons what Allah has forbidden."
    },
    tashreeh: {
      ur: "اسلام امن اور سلامتی کا دین ہے۔ جس انسان کے رویے سے معاشرے کے لوگ خوفزدہ ہوں، اس کا ایمان ناقص ہے۔",
      ro: "Islam aman aur salamti ka deen hai. Jis insan ke rawaiye se muashray ke log khaufzada hon, us ka eman naqis hai.",
      en: "Islam is a religion of peace. Anyone whose behavior causes fear or harm to others falls short of complete faith."
    },
    tags: [
      { ur: "امن", ro: "Aman", en: "Peace" },
      { ur: "مومن", ro: "Momin", en: "Believer" }
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
    slug: "harkat-aur-barkat-ka-usool",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 119",
    author: {
      ur: "دنیائے مزدور",
      ro: "Duniya-e-Mazdoor",
      en: "The World of Labor"
    },
    title: {
      ur: "محنت میں عظمت اور روزی کی برکت",
      ro: "Mehnat Mein Azmat Aur Rozi Ki Barkat",
      en: "Greatness in Labor and Blessings in Sustenance"
    },
    quote: {
      ur: "جو شخص اپنے ہاتھ کی محنت سے روٹی کماتا ہے، وہ خدا کا دوست ہے۔ ہاتھ کی کمائی رزق میں وسعت پیدا کرتی ہے۔",
      ro: "Jo shakhs apne hath ki mehnat se roti kamata hai, woh Khuda ka dost hai. Hath ki kamai rizq mein wus'at paida karti hai.",
      en: "The person who earns their bread through the labor of their hands is a friend of God. Earnings from one's own labor expand sustenance."
    },
    tashreeh: {
      ur: "کاہلی چھوڑ کر محنت اور حلال مزدوری کرنا انسان کو خودمختار بناتا ہے اور معاشرے میں اسے عزت و وقار عطا کرتا ہے۔",
      ro: "Kahili chhor kar mehnat aur halal mazdoori karna insan ko khud-mukhtar banata hai aur muashray mein usay izzat o waqar ata karta hai.",
      en: "Abandoning laziness to pursue honest labor grants independence and earns dignity and respect in society."
    },
    tags: [
      { ur: "محنت", ro: "Mehnat", en: "Labor" },
      { ur: "عظمت", ro: "Azmat", en: "Dignity" }
    ]
  },
  {
    id: "ma-062",
    slug: "apne-nafs-ka-muhasba",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 73",
    author: {
      ur: "حضرت عمر فاروق رضی اللہ عنہ",
      ro: "Hazrat Umar Farooq (R.A)",
      en: "Hazrat Umar Farooq (R.A)"
    },
    title: {
      ur: "اپنے احتساب کا حکم",
      ro: "Apne Ehtisab Ka Hukm",
      en: "The Command of Self-Accountability"
    },
    quote: {
      ur: "اپنا حساب خود لینے سے پہلے کہ تمہارا حساب لیا جائے، اپنے اعمال کا محاسبہ کرو اور اپنی تول خود کرو قبل اس کے کہ تمہاری تول کی جائے۔",
      ro: "Apna hisab khud lene se pehle ke tumhara hisab liya jaye, apne aamaal ka muhasba karo aur apni tol khud karo qabl is ke ke tumhari tol ki jaye.",
      en: "Call yourselves to account before you are called to account, and weigh your deeds before they are weighed for you."
    },
    tashreeh: {
      ur: "دنیا میں رہتے ہوئے انسان کو روزانہ اپنے اچھے اور برے اعمال کا جائزہ لینا چاہیے تاکہ آخرت کی پیشی آسان ہو سکے۔",
      ro: "Duniya mein rehte huye insan ko rozana apne achay aur buray aamaal ka jaiza lena chahiye taake akhirat ki peshi asan ho sake.",
      en: "While living in this world, a person should daily evaluate their good and bad deeds to make the final reckoning in the hereafter easy."
    },
    tags: [
      { ur: "محاسبہ", ro: "Muhasba", en: "Self-Accountability" },
      { ur: "آخرت", ro: "Akhirat", en: "Hereafter" }
    ]
  },
  {
    id: "ma-063",
    slug: "burai-ka-badla-bhalai",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 16",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "برائی کا جواب نیکی سے دینا",
      ro: "Burai Ka Jawab Neki Se Dena",
      en: "Responding to Evil with Goodness"
    },
    quote: {
      ur: "ہر نیک و بد کے ساتھ نیکی کر۔ اگر وہ نیکی کرنے کے قابل نہیں تو تو اس لائق ہے۔",
      ro: "Har nek o bad ke sath neki kar. Agar woh neki karne ke qabil nahi to tu us layeq hai.",
      en: "Treat everyone—righteous or wicked—with goodness. If they are not worthy of goodness, you certainly are worthy of upholding it."
    },
    tashreeh: {
      ur: "اعلیٰ اخلاق یہ نہیں کہ صرف اچھے لوگوں سے اچھا سلوک کیا جائے، بلکہ اصل کمال یہ ہے کہ برے رویے کے باوجود اپنا اعلیٰ ظرف نہ چھوڑا جائے۔",
      ro: "Aala akhlaq yeh nahi ke sirf achay logon se acha sulook kiya jaye, balkay asal kamal yehi hai ke buray rawaiye ke bawajood apna aala zarf na chhora jaye.",
      en: "True nobility is not merely treating good people well, but maintaining your high character even when facing poor behavior."
    },
    tags: [
      { ur: "حسنِ سلوک", ro: "Husn-e-Sulook", en: "Good Conduct" },
      { ur: "اخلاق", ro: "Akhlaq", en: "Character" }
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
    slug: "shukar-aur-sabir-banda",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 18",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "مومن کا ہر حال میں خیر پر ہونا",
      ro: "Momin Ka Har Haal Mein Khair Par Hona",
      en: "The Believer is Always in a State of Good"
    },
    quote: {
      ur: "مومن کا معاملہ بھی عجیب ہے، اس کے لیے ہر حال میں بھلائی ہے۔ خوشی ملے تو شکر کرتا ہے (جو اس کے لیے بہتر ہے) اور تکلیف پہنچے تو صبر کرتا ہے (جو بھی اس کے لیے بہتر ہے)۔",
      ro: "Momin ka mamla bhi ajeeb hai, us ke liye har haal mein bhalai hai. Khushi milay to shukr karta hai aur takleef pohanche to sabr karta hai.",
      en: "Wondrous is the affair of a believer; there is good for him in every matter. If joy comes, he is grateful; if adversity strikes, he is patient."
    },
    tashreeh: {
      ur: "مومن زندگی کے نشیب و فراز میں گھبراتا نہیں بلکہ ہر حالت کو الٰہی آزمائش سمجھ کر مثبت رویہ اپناتا ہے۔",
      ro: "Momin zindagi ke nasheb o faraz mein ghabrata nahi balkay har halat ko ilahi aazmaish samajh kar musbat rawaiya apnata hai.",
      en: "A believer does not despair amid life's ups and downs, viewing every situation through the lens of gratitude or patience."
    },
    tags: [
      { ur: "شکر و صبر", ro: "Shukr o Sabr", en: "Gratitude and Patience" },
      { ur: "مومن", ro: "Momin", en: "Believer" }
    ]
  },
  {
    id: "ma-069",
    slug: "tehfooz-e-sharmgah-o-zaban",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 17",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "زبان اور شرمگاہ کی حفاظت کی ضمانت",
      ro: "Zaban Aur Sharmgah Ki Hifazat Ki Zamanat",
      en: "Guarantee of Paradise Through Guarding Speech and Chastity"
    },
    quote: {
      ur: "جس شخص نے اپنی زبان اور شرمگاہ کی حفاظت کی ذمہ داری لی، میں اس کے لیے جنت کا ضامن بنتا ہوں۔",
      ro: "Jis shakhs ne apni zaban aur sharmgah ki hifazat ki zimmedari li, main us ke liye Jannat ka zamin banta hoon.",
      en: "Whoever guarantees for me what is between their jaws [tongue] and what is between their legs [chastity], I guarantee Paradise for them."
    },
    tashreeh: {
      ur: "انسان کی تباہی کا بیشتر حصہ ان دو اعضاء کے غلط استعمال سے ہوتا ہے۔ ان پر قابو پانا دین کا نصف حصہ ہے۔",
      ro: "Insan ki tabaahi ka beshtar hissa in do azaa ke ghalat istemal se hota hai. In par qaboo pana deen ka nisf hissa hai.",
      en: "Most human destruction stems from the misuse of these two faculties; mastering them secures spiritual salvation."
    },
    tags: [
      { ur: "حفاظت", ro: "Hifazat", en: "Protection" },
      { ur: "جنت", ro: "Jannat", en: "Paradise" }
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
    slug: "tijarat-aur-diyaanat-dari",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 138",
    author: {
      ur: "اقوالِ حکماء",
      ro: "Aqwal-e-Hukama",
      en: "Sayings of Sages"
    },
    title: {
      ur: "تجارتی دیانت اور سچا تاجر",
      ro: "Tijarati Diyanat Aur Sacha Tajir",
      en: "Commercial Honesty and the Truthful Merchant"
    },
    quote: {
      ur: "سچا اور دیانت دار تاجر قیامت کے دن انبیاء اور شہداء کے ساتھ ہو گا، کیونکہ تجارت میں سچائی بہت بڑا جہاد ہے۔",
      ro: "Sacha aur diyanat-dar tajir qayamat ke din Ambiya aur Shohada ke sath hoga, kyunkeh tijarat mein sachai bohat bada jihad hai.",
      en: "The truthful, honest merchant will be with the Prophets and martyrs on the Day of Judgment, for business integrity is a great struggle."
    },
    tashreeh: {
      ur: "مال بیچتے وقت عیب چھپانا اور جھوٹی قسمیں کھانا دنیا کی عارضی کمائی تو دے سکتا ہے لیکن آخرت برباد کر دیتا ہے۔",
      ro: "Maal bechte waqt aib chhupana aur jhooti qasmein khana duniya ki aarzi kamai to de sakta hai lekin akhirat barbad kar deta hai.",
      en: "Hiding defects or swearing false oaths in business may bring temporary worldly profit, but it ruins the hereafter."
    },
    tags: [
      { ur: "تجارت", ro: "Tijarat", en: "Commerce" },
      { ur: "دیانت", ro: "Diyanat", en: "Honesty" }
    ]
  },
  {
    id: "ma-072",
    slug: "hasad-aag-ki-tarah",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 20",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "حسد نیکیوں کو اس طرح کھاتا ہے جیسے آگ لکڑی کو",
      ro: "Hasad Nekiyon Ko Is Tarah Khata Hai Jaise Aag Lakri Ko",
      en: "Envy Consumes Good Deeds Just as Fire Consumes Wood"
    },
    quote: {
      ur: "حسد سے بچو کیونکہ حسد نیکیوں کو اس طرح کھا جاتا ہے جیسے آگ خشک لکڑی کو جلا دیتی ہے۔",
      ro: "Hasad se bacho kyunkeh hasad nekiyon ko is tarah kha jata hai jaise aag khushk lakri ko jala deti hai.",
      en: "Beware of envy, for envy consumes good deeds just as fire consumes dry wood."
    },
    tashreeh: {
      ur: "دوسروں کی نعمتوں پر جلنا اور ان کے زوال کی تمنا کرنا انسان کے اپنے اعمالِ صالحہ کو نیست و نابود کر دیتا ہے۔",
      ro: "Doosron ki nematon par jalna aur un ke zawal ki tamna karna insan ke apne aamaal-e-saliha ko nest-o-nabood kar deta hai.",
      en: "Resenting the blessings of others and wishing for their demise destroys a person's own spiritual achievements."
    },
    tags: [
      { ur: "حسد", ro: "Hasad", en: "Envy" },
      { ur: "نیکیاں", ro: "Nekiyan", en: "Good Deeds" }
    ]
  },
  {
    id: "ma-073",
    slug: "kirdar-ki-bulandi-aur-sachai",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 140",
    author: {
      ur: "اقوالِ حکماء",
      ro: "Aqwal-e-Hukama",
      en: "Wisdom of Philosophers"
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
    slug: "musibat-mein-sabar-aur-dua",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مشکلات میں دعا اور صبر کا سہارا",
      ro: "Mushkilat Mein Dua Aur Sabr Ka Sahara",
      en: "The Support of Prayer and Patience in Hardship"
    },
    quote: {
      ur: "مصیبت اور پریشانی کے وقت صبر اور نماز کے ذریعے اللہ سے مدد طلب کرو، بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",
      ro: "Musibat aur pareshani ke waqt sabr aur namaz ke zariye Allah se madad talab karo, be-shakh Allah sabr karne wale ke sath hai.",
      en: "Seek help through patience and prayer during hardships; indeed, Allah is with those who patiently persevere."
    },
    tashreeh: {
      ur: "انسان جب تمام زمینی اسباب سے مایوس ہو جاتا ہے تب نماز اور صبر کا رابطہ اسے آسمانی سکون اور غیبی مدد عطا کرتا ہے۔",
      ro: "Insan jab tamam zamini asbab se mayous ho jata hai tab namaz aur sabr ka rabta usay asmani sukoon aur ghaibi madad ata karta hai.",
      en: "When all earthly means fail, the spiritual connection of patience and prayer brings heavenly tranquility and unseen divine aid."
    },
    tags: [
      { ur: "دعا", ro: "Dua", en: "Prayer" },
      { ur: "صبر", ro: "Sabr", en: "Patience" }
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
    slug: "tajurba-aur-aqalmand-insan",
    categorySlug: "ambiya-o-hukama",
    bookRef: "Makhzan-e-Akhlaq - Page 236",
    author: {
      ur: "حکیم افلاطون",
      ro: "Hakeem Aflatoon",
      en: "Plato"
    },
    title: {
      ur: "تجربہ عقل مند کا سب سے بڑا استاد ہے",
      ro: "Tajurba Aqal-mand Ka Sab Se Bada Ustad Hai",
      en: "Experience is the Greatest Teacher of the Wise"
    },
    quote: {
      ur: "عقل مند انسان اپنے تجربات سے سیکھتا ہے، اور نادان انسان صرف اپنی غلطیوں سے ٹھوکر کھا کر سمجھتا ہے۔",
      ro: "Aqal-mand insan apne tajurbat se seekhta hai, aur nadan insan sirf apni ghaltiyon se thokar kha kar samajhta hai.",
      en: "A wise person learns from experiences, while a foolish person understands only after stumbling through their own mistakes."
    },
    tashreeh: {
      ur: "حالات اور ماضی کے واقعات سے سبق حاصل کرنا انسان کو دوبارہ نقصان اٹھانے سے بچاتا ہے۔",
      ro: "Halaat aur maazi ke waqiyat se sabq hasil karna insan ko dobara nuqsan uthane se bachata hai.",
      en: "Drawing lessons from past events and circumstances prevents a person from repeating the same errors."
    },
    tags: [
      { ur: "تجربہ", ro: "Tajurba", en: "Experience" },
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" }
    ]
  },
  {
    id: "ma-077",
    slug: "bura-dost-aur-sachi-dosti",
    categorySlug: "aqwal-e-sahaba",
    bookRef: "Makhzan-e-Akhlaq - Page 90",
    author: {
      ur: "حضرت علی المرتضیٰ رضی اللہ عنہ",
      ro: "Hazrat Ali (R.A)",
      en: "Hazrat Ali (R.A)"
    },
    title: {
      ur: "برے دوست کی صحبت سے پرہیز",
      ro: "Bure Dost Ki Suhbat Se Parhez",
      en: "Avoiding the Company of Bad Friends"
    },
    quote: {
      ur: "برے دوست سے بچو کیونکہ وہ لوہار کی بھٹی کی طرح ہے، اگر تجھے جلائے نہیں تو اس کی سیاہی تجھے ضرور لگ جائے گی۔",
      ro: "Bure dost se bacho kyunkeh woh lohar ki bhatti ki tarah hai, agar tujhe jalaye nahi to us ki siyahi tujhe zaroor lag jayegi.",
      en: "Beware of a bad friend, for he is like a blacksmith's furnace; even if his sparks do not burn you, his soot will surely stain you."
    },
    tashreeh: {
      ur: "انسان کی طبیعت اور اخلاق پر اس کے دوستوں کا گہرا اثر پڑتا ہے۔ اس لیے ہمیشہ اچھے اور باوقار لوگوں کی صحبت اختیار کرنی چاہیے۔",
      ro: "Insan ki tabiyat aur akhlaq par us ke doston ka gehra asar parta hai. Is liye hamesha achay aur ba-waqar logon ki suhbat ikhtiyar karni chahiye.",
      en: "Friends profoundly influence one's character and habits, which is why keeping righteous and noble company is essential."
    },
    tags: [
      { ur: "دوستی", ro: "Dosti", en: "Friendship" },
      { ur: "صحبت", ro: "Suhbat", en: "Company" }
    ]
  },
  {
    id: "ma-078",
    slug: "sabar-aur-mushkilat-ka-hal",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 11",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مشکلات میں صبر کا دامن",
      ro: "Mushkilat Mein Sabr Ka Daman",
      en: "Holding Onto Patience in Hardships"
    },
    quote: {
      ur: "بے شک مشکل کے ساتھ آسانی ہے، ہاں ہر مشکل کے ساتھ آسانی وابستہ ہے۔",
      ro: "Be-shakh mushkil ke sath asani hai, haan har mushkil ke sath asani wabasta hai.",
      en: "Indeed, with hardship comes ease; indeed, with hardship comes ease."
    },
    tashreeh: {
      ur: "زندگی کا ہر طوفان عارضی ہے۔ مصیبت کے بعد رحمت کے دن ضرور آتے ہیں، بشرطیکہ انسان ہمت نہ ہارے۔",
      ro: "Zindagi ka har toofan aarzi hai. Musibat ke baad rehmat ke din zaroor aate hain, bashart-e-ke insan himmat na haare.",
      en: "Every storm in life is temporary. Days of relief always follow hardship, provided one does not lose heart."
    },
    tags: [
      { ur: "آسانی", ro: "Asani", en: "Ease" },
      { ur: "امید", ro: "Umeed", en: "Hope" }
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
      ur: "حقیقتِ دنیا",
      ro: "Haqeeqat-e-Duniya",
      en: "Reality of the World"
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
    slug: "maano-ki-qadr-o-manzilat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 28",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "ماں باپ کے حقوق اور فرماں برداری",
      ro: "Maa Baap Ke Huqooq Aur Farman-bardari",
      en: "Rights and Obedience to Parents"
    },
    quote: {
      ur: "والدین کی رضا میں رب کی رضا ہے اور ان کی ناراضگی میں رب کی ناراضگی ہے۔",
      ro: "Walideen ki raza mein Rab ki raza hai aur un ki narazgi mein Rab ki narazgi hai.",
      en: "The pleasure of God lies in the pleasure of parents, and the displeasure of God lies in the displeasure of parents."
    },
    tashreeh: {
      ur: "ماں باپ کی خدمت اور ان کا دل خوش کرنا اللہ کی خوشنودی حاصل کرنے کا سب سے آسان اور بڑا ذریعہ ہے۔",
      ro: "Maa baap ki khidmat aur un ka dil khush karna Allah ki khushnoodi hasil karne ka sab se asan aur bada zariya hai.",
      en: "Serving parents and bringing joy to their hearts is the easiest and greatest path to winning divine pleasure."
    },
    tags: [
      { ur: "والدین", ro: "Walideen", en: "Parents" },
      { ur: "فرماں برداری", ro: "Farman-bardari", en: "Filial Piety" }
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
    slug: "shukriya-aur-insani-talluqat",
    categorySlug: "irshadat-e-nabawi",
    bookRef: "Makhzan-e-Akhlaq - Page 19",
    author: {
      ur: "ارشادِ نبوی ﷺ",
      ro: "Irshad-e-Nabawi ﷺ",
      en: "Prophetic Tradition ﷺ"
    },
    title: {
      ur: "لوگوں کا شکریہ ادا کرنا",
      ro: "Logon Ka Shukriya Ada Karna",
      en: "Expressing Gratitude to People"
    },
    quote: {
      ur: "جو شخص لوگوں کا شکریہ ادا نہیں کرتا، وہ اللہ کا بھی شکر ادا نہیں کرتا۔",
      ro: "Jo shakhs logon ka shukriya ada nahi karta, woh Allah ka bhi shukr ada nahi karta.",
      en: "Whoever does not thank people has not thanked Allah."
    },
    tashreeh: {
      ur: "کسی کی نیکی یا احسان کا اعتراف کرنا اور اس کا شکریہ ادا کرنا اچھے اخلاق اور شکر گزار طبیعت کی علامت ہے۔",
      ro: "Kisi ki neki ya ehsan ka aitraf karna aur us ka shukriya ada karna achay akhlaq aur shukr-guzar tabiyat ki alamat hai.",
      en: "Acknowledging kindness and expressing appreciation to others reflects a noble character and a grateful disposition."
    },
    tags: [
      { ur: "شکریہ", ro: "Shukriya", en: "Gratitude" },
      { ur: "اخلاق", ro: "Akhlaq", en: "Character" }
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
      ur: "حقیقتِ دنیا",
      ro: "Haqeeqat-e-Duniya",
      en: "Reality of the World"
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
    slug: "udhar-ka-lain-dain-likhna-aur-haq-baat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 11-12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ادھار کا لین دین لکھنا اور حق کو نہ چھپانا",
      ro: "Udhar Ka Lain Dain Likhna Aur Haq Ko Na Chhupana",
      en: "Recording Financial Debts and Upholding the Truth"
    },
    quote: {
      ur: "جب تم ایک میعاد مقرر تک کے لیے ادھار کا لین دین کرو تو اس کو انصاف کے ساتھ لکھ لیا کرو، اور سچ کو جھوٹ کے ساتھ مخلوط نہ کرو اور جان بوجھ کر حق بات کو نہ چھپاؤ۔",
      ro: "Jab tum aik miyad-e-muqarrar tak ke liye udhar ka lain dain karo to us ko insaf ke sath likh liya karo, aur sach ko jhoot ke sath makhloot na karo aur jaan boojh kar haq baat ko na chhupao.",
      en: "When you contract a debt for a specified term, write it down with fairness; and do not mix truth with falsehood or knowingly conceal the truth."
    },
    tashreeh: {
      ur: "کاروباری اور مالی معاملات میں تحریری معاہدہ کر لینا مستقبل کے جھگڑوں اور بدگمانیوں کا دروازہ بند کر دیتا ہے۔ اسی طرح گواہی اور معاملات میں سچ کو جھوٹ سے پاک رکھنا عدل کی بنیاد ہے۔",
      ro: "Karobari aur maali muamlat mein tehreeri muahida kar lena mustaqbil ke jhagron aur bad-gumaniyon ka darwaza band kar deta hai. Isi tarah gawahi aur muamlat mein sach ko jhoot se paak rakhna adal ki bunyad hai.",
      en: "Documenting financial transactions prevents future disputes and misunderstandings, while keeping testimony and dealings free from falsehood upholds social justice."
    },
    tags: [
      { ur: "معاملات", ro: "Muamlat", en: "Financial Ethics" },
      { ur: "سچائی", ro: "Sachai", en: "Truthfulness" }
    ]
  },
  {
    id: "ma-092",
    slug: "gusse-ke-waqt-intiqam-se-pehle-insaf",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "غصے کے وقت بدلہ لینے سے پہلے کا سنہرا اصول",
      ro: "Gusse Ke Waqt Badla Lene Se Pehle Ka Sunehra Usool",
      en: "The Golden Rule Before Seeking Retaliation in Anger"
    },
    quote: {
      ur: "غصہ کے وقت اپنے قصور وار سے بدلہ لینے سے اول یہ ضرور خیال کر لیا کر کہ تو اپنے رب کا اس کی نسبت زیادہ قصور وار ہے یا کم؛ پھر جو معاملہ اپنے رب کی طرف سے اپنے لیے پسند آئے وہی فیصلہ اس کے لیے تجویز کر۔",
      ro: "Gusse ke waqt apne qusoor-war se badla lene se awwal yeh zaroor khayal kar liya kar ke tu apne Rab ka us ki nisbat zyada qusoor-war hai ya kam; phir jo muamla apne Rab ki taraf se apne liye pasand aaye wahi faisla us ke liye tajweez kar.",
      en: "Before punishing someone who wronged you in anger, reflect on how much more you have erred before your Lord; then choose for them the same treatment—forgiveness or justice—that you wish from God for yourself."
    },
    tashreeh: {
      ur: "جب انسان کسی کی غلطی پر غضب ناک ہو تو اسے اپنی خطائیں یاد کرنی چاہئیں جن پر اللہ تعالیٰ پردہ ڈالتا ہے۔ جو شخص اپنے لیے رب کی معافی چاہتا ہے اسے مخلوق کو بھی معاف کرنا چاہیے۔",
      ro: "Jab insan kisi ki ghalti par ghazab-naak ho to usay apni khatayein yaad karni chahiyein jin par Allah Ta'ala parda dalta hai. Jo shakhs apne liye Rab ki maafi chahta hai usay makhlooq ko bhi maaf karna chahiye.",
      en: "Remembering one's own shortcomings before the Creator softens the heart toward others. One who hopes for divine pardon should readily pardon fellow human beings."
    },
    tags: [
      { ur: "عفو و درگزر", ro: "Afw-o-Darguzar", en: "Forgiveness" },
      { ur: "انصاف", ro: "Insaf", en: "Fairness" }
    ]
  },
  {
    id: "ma-093",
    slug: "insani-barabari-aur-sharafat-ka-miyar-taqwa",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ذات برادری کی حقیقت اور شرافت کا اصل معیار",
      ro: "Zaat Biradari Ki Haqeeqat Aur Sharafat Ka Asal Miyar",
      en: "The Purpose of Tribes and the True Measure of Nobility"
    },
    quote: {
      ur: "لوگو! ہم نے تم سب کو ایک مرد (آدم) اور ایک عورت (حوا) سے پیدا کیا ہے اور پھر تمہاری ذاتیں اور برادریاں ٹھہرائیں تاکہ ایک دوسرے کو شناخت کر سکو، ورنہ اللہ کے نزدیک تم میں شریف وہی ہے جو زیادہ پرہیزگار ہے۔",
      ro: "Logo! Hum ne tum sab ko aik mard (Aadam) aur aik aurat (Hawwa) se paida kiya hai aur phir tumhari zaatein aur biradariyan thehrayein taake aik doosre ko shanakht kar sako, warna Allah ke nazdeek tum mein shareef wahi hai jo zyada parhezgar hai.",
      en: "O mankind! We created you from a single male and female and made you into peoples and tribes so that you may know one another; indeed, the most noble of you in the sight of Allah is the most righteous."
    },
    tashreeh: {
      ur: "خاندان، قبیلے اور ذات پات صرف باہمی تعارف اور پہچان کے لیے ہیں، فخر و غرور کے لیے نہیں۔ اللہ کی بارگاہ میں عزت اور شرافت کا معیار صرف تقویٰ اور پاکیزہ کردار ہے۔",
      ro: "Khandan, qabeelay aur zaat-paat sirf bahami taaruf aur pehchan ke liye hain, fakhr-o-ghuroor ke liye nahi. Allah ki bargah mein izzat aur sharafat ka miyar sirf taqwa aur pakeeza kirdar hai.",
      en: "Lineage and tribes exist solely for mutual recognition, never for arrogance. True nobility before the Creator is determined exclusively by piety and moral conduct."
    },
    tags: [
      { ur: "مساوات", ro: "Masawat", en: "Equality" },
      { ur: "تقویٰ", ro: "Taqwa", en: "Piety" }
    ]
  },
  {
    id: "ma-094",
    slug: "tangdast-maqrooz-ko-mohlat-dena",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 14",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تنگدست مقروض کو مہلت دینا اور قرض بخشنا",
      ro: "Tangdast Maqrooz Ko Mohlat Dena Aur Qarz Bakhshna",
      en: "Granting Respite or Forgiving a Debtor in Hardship"
    },
    quote: {
      ur: "اگر کوئی تنگدست تمہارا مقروض ہو تو اس کو فراخی تک مہلت دو، اور اگر تم سمجھو تو تمہارے حق میں یہ زیادہ بہتر ہے کہ اس کو اصل قرضہ ہی بخش دو۔",
      ro: "Agar koi tangdast tumhara maqrooz ho to us ko farakhi tak mohlat do, aur agar tum samjho to tumhare haq mein yeh zyada behtar hai ke us ko asal qarza hi bakhsh do.",
      en: "If a debtor is in financial distress, grant them respite until a time of ease; and if you remit the debt as charity, it is far better for you, if you only knew."
    },
    tashreeh: {
      ur: "مجبور اور پریشان حال قرض دار پر سختی کرنے کے بجائے اسے آسانی ہونے تک وقت دینا، یا استطاعت ہو تو قرض معاف کر دینا دنیا و آخرت میں عظیم اجر اور برکت کا باعث ہے۔",
      ro: "Majboor aur pareshan-haal qarz-dar par sakhti karne ke bajaye usay asani hone tak waqt dena, ya istita'at ho to qarz maaf kar dena duniya-o-akhirat mein azeem ajr aur barkat ka baas hai.",
      en: "Showing leniency to a struggling debtor by extending their time—or waiving the debt altogether—brings immense spiritual reward and blessings in both worlds."
    },
    tags: [
      { ur: "رحمدلی", ro: "Reham-dili", en: "Compassion" },
      { ur: "قرض", ro: "Qarz", en: "Debt Relief" }
    ]
  },
  {
    id: "ma-095",
    slug: "muttaqeen-ki-sifat-ghussa-peena-aur-darguzar",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "متقین کی پہچان: سخاوت، ضبطِ غضب اور درگزر",
      ro: "Muttaqeen Ki Pehchan: Sakhawat, Zabt-e-Ghazab Aur Darguzar",
      en: "Traits of the Pious: Generosity, Restraining Anger, and Pardon"
    },
    quote: {
      ur: "متقی وہ لوگ ہیں جو خوشحالی اور تنگدستی دونوں حالتوں میں اللہ کی راہ میں خرچ کرتے ہیں، غصے کو روکتے ہیں اور لوگوں کے قصوروں سے درگزر کرتے ہیں، اور اللہ نیکی کرنے والوں کو دوست رکھتا ہے۔",
      ro: "Muttaqi woh log hain jo khushhali aur tangdasti dono halaton mein Allah ki raah mein kharch karte hain, gusse ko rokte hain aur logon ke qusooron se darguzar karte hain, aur Allah neki karne walon ko dost rakhta hai.",
      en: "The righteous are those who spend in charity during both prosperity and adversity, who restrain their anger, and who pardon people; indeed, Allah loves the doers of good."
    },
    tashreeh: {
      ur: "حقیقی پرہیزگاری صرف عبادت گاہ تک محدود نہیں بلکہ ہر حال میں سخاوت کرنے، غصے کا گھونٹ پی جانے اور لوگوں کی غلطیوں کو معاف کر کے ان کے ساتھ احسان کرنے کا نام ہے۔",
      ro: "Haqeeqi parhezgari sirf ibadat-gah tak mehdood nahi balkay har haal mein sakhawat karne, gusse ka ghoont pee jane aur logon ki ghaltiyon ko maaf kar ke un ke sath ehsan karne ka naam hai.",
      en: "True piety extends beyond ritual worship into generosity in all circumstances, swallowing one's anger, and graciously forgiving the faults of others."
    },
    tags: [
      { ur: "متقین", ro: "Muttaqeen", en: "The Righteous" },
      { ur: "احسان", ro: "Ehsan", en: "Benevolence" }
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
    slug: "allah-ki-maslehat-aur-dil-ki-baseerat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 7",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "تقدیر کی مصلحت اور دل کی حقیقی بصیرت",
      ro: "Taqdeer Ki Maslehat Aur Dil Ki Haqeeqi Baseerat",
      en: "Divine Wisdom and the True Insight of the Heart"
    },
    quote: {
      ur: "شاید کہ تم برا مانو کسی شے کو حالانکہ وہ تمہارے لیے اچھی ہو، اور شاید کہ تم محبت کرو کسی چیز سے حالانکہ وہ تمہارے لیے مضر ہو؛ اور اللہ تعالیٰ جانتا ہے اور تم نہیں جانتے۔ تحقیق وہ آنکھیں اندھی نہیں، بلکہ وہ دل جو سینے میں ہیں اندھے ہیں۔",
      ro: "Shayad ke tum bura mano kisi shay ko halankeh woh tumhare liye achi ho, aur shayad ke tum mohabbat karo kisi cheez se halankeh woh tumhare liye muzir ho; aur Allah Ta'ala janta hai aur tum nahi jante. Tehqeeq woh ankhein andhi nahi, balkay woh dil jo seenay mein hain andhe hain.",
      en: "Perhaps you dislike something which is actually good for you, and perhaps you love something which is harmful for you; Allah knows, while you do not know. Indeed, it is not the eyes that grow blind, but the hearts within the chests."
    },
    tashreeh: {
      ur: "انسان کی نظر صرف ظاہر کو دیکھتی ہے جبکہ رب کائنات انجام اور مستقبل کے بھیدوں سے واقف ہے۔ جب کوئی خواہش پوری نہ ہو تو مایوس ہونے کے بجائے اللہ کی حکمت پر بھروسہ رکھنا ہی دل کی بینائی ہے۔",
      ro: "Insan ki nazar sirf zahir ko dekhti hai jabkeh Rab-e-Kainat anjam aur mustaqbil ke bhedon se waqif hai. Jab koi khuwaish poori na ho to mayous hone ke bajaye Allah ki hikmat par bharosa rakhna hi dil ki beenai hai.",
      en: "Human perception is limited to the surface, whereas the Creator knows the ultimate outcome of every affair. Trusting divine wisdom when plans change is the true vision of an awakened heart."
    },
    tags: [
      { ur: "بصیرت", ro: "Baseerat", en: "Insight" },
      { ur: "حکمتِ الٰہی", ro: "Hikmat-e-Ilahi", en: "Divine Wisdom" }
    ]
  },
  {
    id: "ma-107",
    slug: "taqat-ke-mutabiq-bojh-aur-apne-bhale-ki-mehnat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 9",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "طاقت کے مطابق آزمائش اور اپنی بھلائی کی محنت",
      ro: "Taqat Ke Mutabiq Aazmaish Aur Apni Bhalai Ki Mehnat",
      en: "No Burden Beyond Capacity and Striving for One's Own Good"
    },
    quote: {
      ur: "ہم کسی شخص کی طاقت سے زیادہ اس پر بوجھ نہیں ڈالتے؛ اگر تم اللہ تعالیٰ پر ایمان رکھتے ہو تو شرطِ فرمانبرداری یہ ہے کہ اس پر بھروسہ رکھو۔ جو شخص اللہ کے لیے محنت اٹھاتا ہے اپنے ہی بھلے کے لیے اٹھاتا ہے۔",
      ro: "Hum kisi shakhs ki taqat se zyada us par bojh nahi dalte; agar tum Allah Ta'ala par eman rakhte ho to shart-e-farmanbardari yeh hai ke us par bharosa rakho. Jo shakhs Allah ke liye mehnat uthata hai apne hi bhalay ke liye uthata hai.",
      en: "We never place a burden on any soul beyond its capacity; if you truly believe in Allah, then place your trust in Him. Whoever strives in the path of righteousness strives only for the benefit of their own soul."
    },
    tashreeh: {
      ur: "یہ الٰہی وعدہ انسان کو ہر مشکل میں حوصلہ دیتا ہے کہ کوئی بھی پریشانی اس کی برداشت سے باہر نہیں ہوتی۔ نیکی اور محنت کا فائدہ لوٹ کر خود انسان ہی کی ذات کو ملتا ہے۔",
      ro: "Yeh ilahi wada insan ko har mushkil mein hausla deta hai ke koi bhi pareshani us ki bardasht se bahar nahi hoti. Neki aur mehnat ka faida laut kar khud insan hi ki zaat ko milta hai.",
      en: "This divine assurance gives strength during every trial: no hardship exceeds our ability to endure it, and every righteous effort ultimately enriches our own soul."
    },
    tags: [
      { ur: "توکل", ro: "Tawakkul", en: "Trust in God" },
      { ur: "حوصلہ", ro: "Hausla", en: "Resilience" }
    ]
  },
  {
    id: "ma-108",
    slug: "maal-o-mata-ki-misal-barish-ki-manind",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (القرآن و حکمت)",
      ro: "Ahkam-e-Khuda (Al-Quran o Hikmat)",
      en: "Divine Injunctions & Wisdom"
    },
    title: {
      ur: "مال و دولت کی مثال بارش کے پانی جیسی ہے",
      ro: "Maal-o-Daulat Ki Misal Barish Ke Pani Jaisi Hai",
      en: "Wealth is Like Rainwater: Beneficial in Moderation"
    },
    quote: {
      ur: "انسان کا مال و متاع مثل آبِ باراں کے ہے؛ یعنی بارش ضرورت کے موافق برسے تو نافع ہے اور اگر زیادہ برسے تو باعثِ بربادی۔ اسی طرح مال بقدرِ ضرورت فائدہ مند ہے اور زائد از ضرورت باعثِ گرفتاریِ معصیت ہے۔",
      ro: "Insan ka maal-o-mata misl aab-e-baran ke hai; yani barish zaroorat ke muwafiq barsay to nafe hai aur agar zyada barsay to baas-e-barbadi. Isi tarah maal ba-qadr-e-zaroorat faida-mand hai aur zaid az zaroorat baas-e-giriftari-e-ma'siyat hai.",
      en: "Worldly wealth is like rainwater: when it falls according to need, it nourishes life, but when it floods excessively, it brings ruin. Likewise, wealth in moderation is a blessing, whereas unrestrained excess leads to spiritual destruction."
    },
    tashreeh: {
      ur: "دولت بذاتِ خود بری نہیں بشرطیکہ وہ انسان کی ضرورت پوری کرے اور خیر کے کاموں میں خرچ ہو، لیکن جب مال جمع کرنے کی ہوس حد سے بڑھ جائے تو وہ طغیانی بن کر اخلاق و ایمان کو بہا لے جاتی ہے۔",
      ro: "Daulat bazat-e-khud buri nahi bashart-e-ke woh insan ki zaroorat poori kare aur khair ke kaamon mein kharch ho, lekin jab maal jama karne ki hawas had se barh jaye to woh tughyani ban kar akhlaq o eman ko baha le jati hai.",
      en: "Wealth serves well when kept within ethical bounds and shared generously, but when hoarding turns into an obsession, it floods the heart with heedlessness."
    },
    tags: [
      { ur: "اعتدال", ro: "Aitdaal", en: "Moderation" },
      { ur: "مال و دولت", ro: "Maal-o-Daulat", en: "Wealth" }
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
    slug: "mehboob-cheez-kharch-karna-aur-neki-ka-darja",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 8",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "حقیقی نیکی کا درجہ پانے کا راز",
      ro: "Haqeeqi Neki Ka Darja Pane Ka Raaz",
      en: "The Secret to Attaining True Righteousness"
    },
    quote: {
      ur: "لوگو! جب تک اللہ تعالیٰ کی راہ میں وہ چیزیں خرچ نہیں کرو گے جو تم کو عزیز اور پیاری ہیں، نیکی کے درجے کو ہرگز نہیں پہنچو گے؛ اور کوئی سی چیز بھی خرچ کرو اللہ اس کو جانتا ہے۔",
      ro: "Logo! Jab tak Allah Ta'ala ki raah mein woh cheezein kharch nahi karo ge jo tum ko aziz aur pyari hain, neki ke darjay ko hargiz nahi pohancho ge; aur koi si cheez bhi kharch karo Allah us ko janta hai.",
      en: "You will never attain the pinnacle of righteousness until you spend in the way of Allah from that which you love most; and whatever you spend, Allah is fully aware of it."
    },
    tashreeh: {
      ur: "بیکار یا فالتو چیزیں دے دینا کمال نہیں ہے، بلکہ اپنے دل کی محبوب اور قیمتی چیز کو رضائے الٰہی کے لیے قربان کرنا ہی انسان کو کامل نیکی اور ایثار کے درجے پر فائز کرتا ہے۔",
      ro: "Bekar ya faltoo cheezein de dena kamal nahi hai, balkay apne dil ki mehboob aur qeemati cheez ko raza-e-Ilahi ke liye qurban karna hi insan ko kamil neki aur eesar ke darjay par faiz karta hai.",
      en: "Giving away what is unwanted requires little sacrifice; true spiritual elevation comes from sharing what one cherishes most for the sake of God."
    },
    tags: [
      { ur: "ایثار", ro: "Eesar", en: "Sacrifice" },
      { ur: "انفاق", ro: "Infaq", en: "Charity" }
    ]
  },
  {
    id: "ma-122",
    slug: "maal-o-aulad-aur-baqi-rehne-wale-nek-aamaal",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 9",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "دنیا کی زینت اور باقی رہنے والے نیک اعمال",
      ro: "Duniya Ki Zeenat Aur Baqi Rehne Wale Nek Aamaal",
      en: "Worldly Adornments Versus Enduring Good Deeds"
    },
    quote: {
      ur: "مال اور اولاد دنیا کی چند روزہ زندگی کے بناؤ سنگار ہیں، اور اعمالِ نیک جن کا اثر دیر تک باقی رہنے والا ہے، تمہارے پروردگار کے نزدیک ثواب اور توقعاتِ آئندہ کے اعتبار سے کہیں بہتر ہیں۔",
      ro: "Maal aur aulad duniya ki chand roza zindagi ke banao-singhar hain, aur aamaal-e-nek jin ka asar dair tak baqi rehne wala hai, tumhare Parwardigar ke nazdeek sawab aur tawaqqaat-e-ainda ke aitbar se kahin behtar hain.",
      en: "Wealth and children are the adornments of this brief worldly life, but enduring righteous deeds are far better with your Lord in reward and far better as a foundation for hope."
    },
    tashreeh: {
      ur: "دولت اور اولاد دنیا کی رونق ضرور ہیں لیکن یہ سب یہیں رہ جاتے ہیں؛ انسان کے ساتھ قبر اور حشر تک جانے والا اصل سرمایہ اس کے وہ نیک اعمال اور صدقہ جاریہ ہیں جن کا اثر باقی رہتا ہے۔",
      ro: "Daulat aur aulad duniya ki raunaq zaroor hain lekin yeh sab yahin reh jate hain; insan ke sath qabar aur hashr tak jane wala asal sarmaya us ke woh nek aamaal aur sadqa-e-jariya hain jin ka asar baqi rehta hai.",
      en: "While wealth and family beautify earthly life, only lasting acts of goodness and charity accompany the soul into eternity."
    },
    tags: [
      { ur: "اعمالِ صالحہ", ro: "Aamaal-e-Saliha", en: "Righteous Deeds" },
      { ur: "آخرت", ro: "Akhirat", en: "Hereafter" }
    ]
  },
  {
    id: "ma-123",
    slug: "nek-amal-aur-pakeeza-zindagi-ka-wada",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نیک عمل پر پاکیزہ زندگی کا الٰہی وعدہ",
      ro: "Nek Amal Par Pakeeza Zindagi Ka Ilahi Wada",
      en: "The Divine Promise of a Pure Life for Righteous Action"
    },
    quote: {
      ur: "جو شخص نیک عمل کرے گا، مرد ہو یا عورت، اور وہ ایمان بھی رکھتا ہو تو ہم اس دنیا میں بھی اس کی زندگی اچھی طرح بسر کرائیں گے اور آخرت میں بھی ان بہترین اعمال کا صلہ ضرور عطا فرمائیں گے۔",
      ro: "Jo shakhs nek amal karega, mard ho ya aurat, aur woh eman bhi rakhta ho to hum is duniya mein bhi us ki zindagi achi tarah basar karayenge aur akhirat mein bhi un behtareen aamaal ka sila zaroor ata farmayenge.",
      en: "Whoever does righteous deeds—whether male or female—while being a believer, We will surely grant them a pure and peaceful life in this world, and reward them in the Hereafter according to the best of their actions."
    },
    tashreeh: {
      ur: "ایمان اور عملِ صالح کے بدلے میں اللہ تعالیٰ دنیا ہی میں قلبی سکون، قناعت اور پاکیزہ حیات عطا فرماتا ہے جس میں مرد اور عورت کے اجر میں کوئی تفریق نہیں۔",
      ro: "Eman aur amal-e-saleh ke badlay mein Allah Ta'ala duniya hi mein qalbi sukoon, qana'at aur pakeeza hayat ata farmata hai jis mein mard aur aurat ke ajr mein koi tafreeq nahi.",
      en: "Faith combined with virtuous action brings inner peace and a dignified life in this world for both men and women equally, alongside eternal reward."
    },
    tags: [
      { ur: "حیاتِ طیبہ", ro: "Hayat-e-Tayyiba", en: "Pure Life" },
      { ur: "ایمان و عمل", ro: "Eman o Amal", en: "Faith and Action" }
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
    slug: "qaza-par-raza-aur-zikr-e-ilahi-ki-barkat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 7",
    author: {
      ur: "احکامِ خدا (حدیثِ قدسی و الٰہی فرمان)",
      ro: "Ahkam-e-Khuda (Ilahi Farman)",
      en: "Divine Injunctions"
    },
    title: {
      ur: "قضا پر تسلیم، بلا پر صبر اور ذکرِ الٰہی کا انعام",
      ro: "Qaza Par Tasleem, Bala Par Sabr Aur Zikr-e-Ilahi Ka Inam",
      en: "Acceptance of Decree, Patience in Trial, and the Reward of Remembrance"
    },
    quote: {
      ur: "جس نے میری قضا کو تسلیم کیا اور میری بلا پر صبر کیا اور میری نعمتوں پر شکر ادا کیا، میں اس کو اپنے پاس صدیق لکھتا ہوں؛ اور جس شخص کو میرا ذکر سوال کرنے سے روک لے، میں اس کو سوال کرنے والوں سے زیادہ دیتا ہوں۔",
      ro: "Jis ne meri qaza ko tasleem kiya aur meri bala par sabr kiya aur meri nematon par shukr ada kiya, main us ko apne paas siddiq likhta hoon; aur jis shakhs ko mera zikr sawal karne se rok le, main us ko sawal karne walon se zyada deta hoon.",
      en: "Whoever accepts My decree, endures My trials with patience, and gives thanks for My blessings, I record them with Me among the truthful; and whoever is so absorbed in My remembrance that they refrain from asking, I grant them more than I give to those who ask."
    },
    tashreeh: {
      ur: "صدیق کا بلند درجہ پانے کی کنجی یہ ہے کہ انسان تقدیر کے فیصلوں پر راضی رہے، مصیبت میں صبر کرے اور نعمت پر شکر گزار رہے۔ رب کی یاد میں مگن رہنے والے کو اللہ بن مانگے بہترین عطا فرماتا ہے۔",
      ro: "Siddiq ka buland darja pane ki kunji yeh hai ke insan taqdeer ke faislon par raazi rahe, musibat mein sabr kare aur nemat par shukr-guzar rahe. Rab ki yaad mein magan rehne wale ko Allah bin mangay behtareen ata farmata hai.",
      en: "Attaining the rank of the truthful requires embracing divine decree, staying patient in adversity, and remaining grateful in prosperity."
    },
    tags: [
      { ur: "صدیقیت", ro: "Siddiqiyat", en: "Truthfulness" },
      { ur: "ذکر و شکر", ro: "Zikr o Shukr", en: "Remembrance & Gratitude" }
    ]
  },
  {
    id: "ma-137",
    slug: "hikmat-aur-umda-tadbeer-se-dawat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 8",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "حکمت، نصیحت اور عمدہ اخلاق سے گفتگو",
      ro: "Hikmat, Nasihat Aur Umda Akhlaq Se Guftugu",
      en: "Calling to the Truth with Wisdom and Gracious Dialogue"
    },
    quote: {
      ur: "تو اپنے رب کی راہ کی طرف بلا ساتھ حکمت اور موعظت کے، اور ان سے ایسی تدبیر کے ساتھ مباحثہ کر جو خوبی سے بھری ہوئی ہو؛ اور جب گواہ ادائے شہادت کے لیے بلائے جائیں تو حاضر ہونے سے انکار نہ کریں۔",
      ro: "Tu apne Rab ki raah ki taraf bula sath hikmat aur mau'izat ke, aur un se aisi tadbeer ke sath mubahisa kar jo khoobi se bhari hui ho; aur jab gawah ada-e-shahadat ke liye bulaye jayein to hazir hone se inkar na karein.",
      en: "Invite to the way of your Lord with wisdom and gentle instruction, and reason with them in the most gracious manner; and when witnesses are called upon to give testimony, they must not refuse."
    },
    tashreeh: {
      ur: "دین اور خیر کی بات منوانے کا طریقہ سختی یا تلخ بحث نہیں بلکہ دانائی، دل نشین نصیحت اور خوبصورت طرزِ استدلال ہے۔ اسی طرح حق کی گواہی کے لیے بلائے جانے پر پیچھے نہ ہٹنا اخلاقی فرض ہے۔",
      ro: "Deen aur khair ki baat manwane ka tareeqa sakhti ya talkh behas nahi balkay danai, dil-nasheen nasihat aur khoobsurat tarz-e-istidlal hai. Isi tarah haq ki gawahi ke liye bulaye jane par peechay na hatna akhlaqi farz hai.",
      en: "Winning hearts to truth requires wisdom, empathy, and dignified dialogue rather than harsh debate, alongside fulfilling one's civic duty to testify truthfully."
    },
    tags: [
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" },
      { ur: "طرزِ گفتگو", ro: "Tarz-e-Guftugu", en: "Gracious Dialogue" }
    ]
  },
  {
    id: "ma-138",
    slug: "har-insan-apne-amal-ka-khud-zimmedar",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 9",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "انفرادی ذمہ داری اور اعمال کی جزا و سزا",
      ro: "Infiradi Zimmedari Aur Aamaal Ki Jaza o Saza",
      en: "Individual Accountability for Every Action"
    },
    quote: {
      ur: "جو شخص سیدھے راستے پر چلا وہ اپنے ہی ذاتی فائدے کے لیے چلا، اور جو بھٹکا تو اس کے بھٹکنے کا خمیازہ بھی اس کو بھگتنا پڑے گا؛ اور کوئی متنفس کسی دوسرے متنفس کے بارِ گناہ کو اپنے اوپر نہیں لے گا۔",
      ro: "Jo shakhs seedhe rastay par chala woh apne hi zaati faiday ke liye chala, aur jo bhatka to us ke bhatakne ka khamyaza bhi us ko bhugtna parega; aur koi mutanaffis kisi doosre mutanaffis ke bar-e-gunah ko apne oopar nahi lega.",
      en: "Whoever follows the right path does so for the benefit of their own soul, and whoever strays bears the loss thereof; no bearer of burdens shall bear the burden of another."
    },
    tashreeh: {
      ur: "عدالتِ الٰہی کا اٹل اصول ہے کہ ہر انسان اپنے اچھے یا برے عمل کا خود جواب دہ ہے۔ نہ کسی کی نیکی سے اللہ کو کوئی ذاتی فائدہ ہے اور نہ کسی کا گناہ کوئی دوسرا اپنے سر لے سکے گا۔",
      ro: "Adalat-e-Ilahi ka atal usool hai ke har insan apne achay ya buray amal ka khud jawab-deh hai. Na kisi ki neki se Allah ko koi zaati faida hai aur na kisi ka gunah koi doosra apne sar le sakega.",
      en: "Divine justice rests on personal accountability: every individual reaps the fruit of their own guidance or bears the consequence of their own choices."
    },
    tags: [
      { ur: "ذمہ داری", ro: "Zimmedari", en: "Accountability" },
      { ur: "ہدایت", ro: "Hidayat", en: "Guidance" }
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
    slug: "raah-e-khuda-mein-koshish-aur-ghaib-se-rizq",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 7",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "راہِ حق میں کوشش اور گمان سے باہر رزق کا وعدہ",
      ro: "Raah-e-Haq Mein Koshish Aur Guman Se Bahar Rizq Ka Wada",
      en: "Striving in the Path of Truth and Provision Beyond Imagination"
    },
    quote: {
      ur: "جنہوں نے ہماری راہ میں کوشش کی، ہم ان کو اپنا راستہ بتائیں گے؛ اور جو اللہ تعالیٰ سے ڈرتا ہے، اللہ اس کے لیے نکلنے کی راہ بنا دیتا ہے اور اسے ایسی جگہ سے رزق پہنچاتا ہے جو اس کے خواب و خیال میں بھی نہ تھی۔",
      ro: "Jinhon ne hamari raah mein koshish ki, hum un ko apna rasta batayenge; aur jo Allah Ta'ala se darta hai, Allah us ke liye nikalne ki raah bana deta hai aur usay aisi jagah se rizq pohanchata hai jo us ke khwab-o-khayal mein bhi na thi.",
      en: "Those who strive sincerely in Our cause, We will surely guide them to Our paths; and whoever fears Allah, He creates a way out for them from every hardship and provides for them from sources they could never imagine."
    },
    tashreeh: {
      ur: "ہدایت اور کامیابی کی شرط سچی تڑپ اور مسلسل جدوجہد ہے۔ جب انسان تقویٰ اختیار کر کے قدم بڑھاتا ہے تو بند دروازے کھل جاتے ہیں اور غیب سے روزی کے اسباب پیدا ہو جاتے ہیں۔",
      ro: "Hidayat aur kamyabi ki shart sachi tarap aur musalsal jidd-o-jehad hai. Jab insan taqwa ikhtiyar kar ke qadam barhata hai to band darwazay khul jate hain aur ghaib se rozi ke asbab paida ho jate hain.",
      en: "Sincere effort unlocks divine guidance, and steadfast piety opens unforeseen doors of relief and sustenance during the darkest trials."
    },
    tags: [
      { ur: "جدوجہد", ro: "Jidd-o-Jehad", en: "Striving" },
      { ur: "رزق", ro: "Rizq", en: "Sustenance" }
    ]
  },
  {
    id: "ma-152",
    slug: "apni-pakeezgi-na-jatana-aur-neki-ka-badla-neki",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اپنی پاکیزگی کا دعویٰ نہ کرنا اور احسان کا بدلہ",
      ro: "Apni Pakeezgi Ka Dawa Na Karna Aur Ehsan Ka Badla",
      en: "Avoiding Self-Righteousness and the Reward of Goodness"
    },
    quote: {
      ur: "لوگو! اپنی بہت پاکیزگی نہ جتایا کرو، پرہیزگاروں کو وہی خوب جانتا ہے؛ اور کیا نیکی کا بدلہ نیکی کے سوا کچھ اور بھی ہو سکتا ہے؟",
      ro: "Logo! Apni bohot pakeezgi na jataya karo, parhezgaron ko Wahi khoob janta hai; aur kya neki ka badla neki ke siwa kuch aur bhi ho sakta hai?",
      en: "Do not boast of your own purity, for He knows best who is truly righteous; and can the reward of goodness be anything other than goodness?"
    },
    tashreeh: {
      ur: "اپنی نیکی اور پارسائی کا ڈھنڈورا پیٹنا اخلاص کو ختم کر دیتا ہے کیونکہ دلوں کا حال صرف اللہ جانتا ہے۔ کائنات کا اصول ہے کہ جو شخص مخلوق کے ساتھ بھلائی کرتا ہے، اسے بدلے میں بھلائی ہی ملتی ہے۔",
      ro: "Apni neki aur parsai ka dhandora peetna ikhlas ko khatam kar deta hai kyunkeh dilon ka haal sirf Allah janta hai. Kainat ka usool hai ke jo shakhs makhlooq ke sath bhalai karta hai, usay badlay mein bhalai hi milti hai.",
      en: "Boasting of personal piety undermines sincerity, as God alone knows the heart; and every act of kindness inevitably returns as kindness."
    },
    tags: [
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" },
      { ur: "احسان", ro: "Ehsan", en: "Goodness" }
    ]
  },
  {
    id: "ma-153",
    slug: "hajat-se-zaid-kharch-karna-aur-raat-din-ki-ibrat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 14",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "حاجت سے زائد مال خرچ کرنا اور گردشِ لیل و نہار",
      ro: "Hajat Se Zaid Maal Kharch Karna Aur Gardish-e-Lail-o-Nahar",
      en: "Spending Beyond One's Needs and the Lesson of Night and Day"
    },
    quote: {
      ur: "اے نبی ﷺ! تم سے دریافت کرتے ہیں اللہ تعالیٰ کی راہ میں کس قدر خرچ کریں؟ تم ان کو سمجھا دو کہ جتنا تمہاری حاجت سے زائد ہو خرچ کر دو۔ رات دن کے رد و بدل میں سمجھ والوں کے لیے بڑی عبرت ہے۔",
      ro: "Aye Nabi ﷺ! Tum se daryaft karte hain Allah Ta'ala ki raah mein kis qadar kharch karein? Tum un ko samjha do ke jitna tumhari hajat se zaid ho kharch kar do. Raat din ke radd-o-badal mein samajh walon ke liye badi ibrat hai.",
      en: "They ask you how much they should spend in the way of Allah. Say: Whatever is beyond your lawful needs. Indeed, in the alternation of night and day there are profound lessons for people of understanding."
    },
    tashreeh: {
      ur: "ضرورت سے زیادہ مال کو سینت کر رکھنے کے بجائے معاشرے کی فلاح میں لگانا اعلیٰ انفاق ہے، اور رات دن کا مسلسل بدلنا انسان کو یاد دلاتا ہے کہ وقت اور حالات کبھی ایک سے نہیں رہتے۔",
      ro: "Zaroorat se zyada maal ko seent kar rakhne ke bajaye muashray ki falah mein lagana aala infaq hai, aur raat din ka musalsal badalna insan ko yaad dilata hai ke waqt aur halat kabhi aik se nahi rehte.",
      en: "Sharing surplus wealth uplifts society, while the constant cycle of night and day reminds the wise of the fleeting nature of worldly time."
    },
    tags: [
      { ur: "انفاق", ro: "Infaq", en: "Charitable Spending" },
      { ur: "بصیرت", ro: "Baseerat", en: "Reflection" }
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
    slug: "allah-ke-ehsanat-ki-yaad-aur-nafarmani-se-parhez",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 7",
    author: {
      ur: "احکامِ خدا (ماخوذ خلاصہ)",
      ro: "Ahkam-e-Khuda (Makhooz Khulasa)",
      en: "Divine Teachings (Summary)"
    },
    title: {
      ur: "نعمتِ ہدایت کی قدر اور تقویٰ کی اہمیت",
      ro: "Nemat-e-Hidayat Ki Qadr Aur Taqwa Ki Ahmiyat",
      en: "Valuing Divine Guidance and Practicing Piety"
    },
    quote: {
      ur: "رب کے احکام کو معمولی نہ سمجھو اور اس کے اس عظیم احسان کو یاد رکھو کہ اس نے تمہاری رہنمائی کے لیے کتاب اور حکمت کی باتیں عطا فرمائیں؛ پس ہر حال میں اللہ کی نافرمانی سے بچتے رہو۔",
      ro: "Rab ke ahkam ko mamooli na samjho aur us ke is azeem ehsan ko yaad rakho ke us ne tumhari rehnumai ke liye kitab aur hikmat ki baatein ata farmayein; pas har haal mein Allah ki nafarmani se bachte raho.",
      en: "Never take divine injunctions lightly, and remember the immense favor of the Scripture and wisdom granted for your guidance; remain ever mindful of God."
    },
    tashreeh: {
      ur: "انسان پر سب سے بڑا انعام یہ ہے کہ اسے اچھے اور برے کی تمیز کے لیے آسمانی ہدایت اور عقل دی گئی۔ اس نعمت کا تقاضا ہے کہ زندگی کے ہر معاملے میں سنجیدگی اور فرمانبرداری اختیار کی جائے۔",
      ro: "Insan par sab se bada inam yeh hai ke usay achay aur buray ki tameez ke liye asmani hidayat aur aqal di gayi. Is nemat ka taqaza hai ke zindagi ke har muamlay mein sanjeedgi aur farmanbardari ikhtiyar ki jaye.",
      en: "The greatest gift to humanity is moral guidance and intellect; honoring this gift requires living with mindfulness and obedience."
    },
    tags: [
      { ur: "شکر گزاری", ro: "Shukr-Guzari", en: "Gratitude" },
      { ur: "حکمت", ro: "Hikmat", en: "Wisdom" }
    ]
  },
  {
    id: "ma-167",
    slug: "nadani-ki-khata-par-fori-tauba-ki-qubooliyat",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 8",
    author: {
      ur: "احکامِ خدا (ماخوذ خلاصہ)",
      ro: "Ahkam-e-Khuda (Makhooz Khulasa)",
      en: "Divine Teachings (Summary)"
    },
    title: {
      ur: "سچی توبہ کا وقت اور اصلاح کی جلدی",
      ro: "Sachi Tauba Ka Waqt Aur Islah Ki Jaldi",
      en: "Timely Repentance and Sincere Reform"
    },
    quote: {
      ur: "رحمتِ الٰہی ان لوگوں کی توبہ قبول فرماتی ہے جو نادانی میں کوئی لغزش کر بیٹھنے کے بعد فوراً سنبھل جاتے ہیں اور اپنی اصلاح کر لیتے ہیں، نہ کہ ان کی جو عمر بھر گناہوں میں ڈوبے رہیں اور موت سامنے دیکھ کر توبہ کا نام لیں۔",
      ro: "Rehmat-e-Ilahi un logon ki tauba qubool farmati hai jo nadani mein koi laghzish kar baithne ke baad foran sambhal jate hain aur apni islah kar lete hain, na ke un ki jo umar bhar gunahon mein doobay rahein aur maut samne dekh kar tauba ka naam lein.",
      en: "Divine mercy embraces those who quickly repent and mend their ways after a slip made in ignorance, rather than delaying remorse until the final breath."
    },
    tashreeh: {
      ur: "توبہ کا دروازہ کھلا ہے مگر عقلمندی یہ ہے کہ غلطی کا احساس ہوتے ہی انسان پلٹ آئے۔ اصلاح کو بڑھاپے یا آخری وقت پر ٹالتے رہنا خود کو دھوکے میں رکھنے کے مترادف ہے۔",
      ro: "Tauba ka darwaza khula hai magar aqalmandi yeh hai ke ghalti ka ehsas hote hi insan palat aaye. Islah ko burhapay ya aakhri waqt par taltay rehna khud ko dhokay mein rakhne ke mutradif hai.",
      en: "True repentance means turning back immediately upon realizing a mistake, rather than postponing self-reform until time runs out."
    },
    tags: [
      { ur: "توبہ", ro: "Tauba", en: "Repentance" },
      { ur: "اصلاح", ro: "Islah", en: "Self-Reform" }
    ]
  },
  {
    id: "ma-168",
    slug: "zindagi-ki-aazmaish-aur-sabr-o-namaz-ka-sahara",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (ماخوذ خلاصہ)",
      ro: "Ahkam-e-Khuda (Makhooz Khulasa)",
      en: "Divine Teachings (Summary)"
    },
    title: {
      ur: "آزمائش کے لمحات میں صبر اور نماز کی قوت",
      ro: "Aazmaish Ke Lamhat Mein Sabr Aur Namaz Ki Quwwat",
      en: "Strength Through Patience and Prayer During Trials"
    },
    quote: {
      ur: "انسان کو دنیا میں خوف، تنگدستی اور مال و اسباب کی کمی سے ضرور آزمایا جاتا ہے؛ ایسے کٹھن اوقات میں ثابت قدم رہنے کے لیے صبر اور نماز کو اپنا سہارا بناؤ جو عاجزی رکھنے والوں کے لیے بے حد آسان ہے۔",
      ro: "Insan ko duniya mein khauf, tangdasti aur maal-o-asbab ki kami se zaroor aazmaya jata hai; aise kathin auqat mein sabit-qadam rehne ke liye sabr aur namaz ko apna sahara banao jo aajizi rakhne walon ke liye be-had asan hai.",
      en: "Humanity is inevitably tested through moments of fear, scarcity, and loss; find resilience in patience and prayer, which bring comfort to humble hearts."
    },
    tashreeh: {
      ur: "زندگی کے اتار چڑھاؤ ایمان کی پختگی جانچنے کے لیے آتے ہیں۔ جو انسان اپنے رب سے ملاقات کا یقین رکھتا ہے، اسے نماز اور صبر سے وہ قلبی طاقت ملتی ہے جو بڑے سے بڑا طوفان سہہ لیتی ہے۔",
      ro: "Zindagi ke utar-charhao eman ki pukhtagi janchne ke liye aate hain. Jo insan apne Rab se mulaqat ka yaqeen rakhta hai, usay namaz aur sabr se woh qalbi taqat milti hai jo bade se bada toofan seh leti hai.",
      en: "Life's trials test the depth of our character; connecting with the Creator through prayer and patience grants unshakable inner peace."
    },
    tags: [
      { ur: "صبر", ro: "Sabr", en: "Patience" },
      { ur: "نماز", ro: "Namaz", en: "Prayer" }
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
    slug: "uswah-e-rasool-aur-rehmat-e-ilahi-se-umeed",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 8",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بہترین نمونۂ حیات اور رحمتِ الٰہی سے امید",
      ro: "Behtareen Namoona-e-Hayat Aur Rehmat-e-Ilahi Se Umeed",
      en: "The Finest Role Model and Never Despairing of Divine Mercy"
    },
    quote: {
      ur: "تمہارے لیے اللہ کے پیغمبر ﷺ کی زندگی عمدہ نمونہ ہے؛ اور گمراہوں کے سوا کون ہے جو اپنے پروردگار کی رحمت سے ناامید ہو؟ جس چیز کی حقیقتِ حال تم کو معلوم نہ ہو اس کے پیچھے نادانوں کی سی باتیں مت کرو۔",
      ro: "Tumhare liye Allah ke Peghambar ﷺ ki zindagi umda namoona hai; aur gumrahon ke siwa kaun hai jo apne Parwardigar ki rehmat se na-umeed ho? Jis cheez ki haqeeqat-e-haal tum ko maloom na ho us ke peechay nadanon ki si baatein mat karo.",
      en: "Indeed, in the Messenger of Allah ﷺ you have an excellent model to follow; and who despairs of the mercy of his Lord except those who have gone astray? Do not pursue or demand that of which you have no true knowledge."
    },
    tashreeh: {
      ur: "کامیاب زندگی کے لیے سیرتِ نبوی ﷺ سب سے کامل معیار ہے۔ انسان کو سخت ترین حالات میں بھی رب کی رحمت سے مایوس نہیں ہونا چاہیے اور بغیر علم و تحقیق کے کسی معاملے میں رائے زنی سے بچنا چاہیے۔",
      ro: "Kamyab zindagi ke liye Seerat-e-Nabawi ﷺ sab se kamil miyar hai. Insan ko sakht-tareen halat mein bhi Rab ki rehmat se mayous nahi hona chahiye aur baghair ilm o tehqeeq ke kisi muamlay mein raaye-zani se bachna chahiye.",
      en: "The Prophetic biography offers the ultimate standard for human conduct; a believer never loses hope in God's mercy and refrains from speaking without sound knowledge."
    },
    tags: [
      { ur: "اسوۂ حسنہ", ro: "Uswah-e-Hasanah", en: "Role Model" },
      { ur: "امید", ro: "Umeed", en: "Hope" }
    ]
  },
  {
    id: "ma-182",
    slug: "logon-ki-razamandi-ke-liye-rab-ko-naraz-na-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 9",
    author: {
      ur: "احکامِ خدا (القرآن و حدیثِ قدسی)",
      ro: "Ahkam-e-Khuda (Al-Quran o Hadith-e-Qudsi)",
      en: "Divine Injunctions"
    },
    title: {
      ur: "رضائے الٰہی کو لوگوں کی خوشنودی پر مقدم رکھنا",
      ro: "Raza-e-Ilahi Ko Logon Ki Khushnoodi Par Muqaddam Rakhna",
      en: "Prioritizing God's Pleasure Over People-Pleasing"
    },
    quote: {
      ur: "جو شخص ہماری ناراضگی لوگوں کی رضامندی کے مقابلے میں خریدتا ہے ہم اس کو انہیں کے حوالے کر دیتے ہیں۔ مسلمانو! جو مال ہم نے تم کو دے رکھا ہے اس میں سے موت کا وقت آنے سے پہلے پہلے راہِ الٰہی میں خرچ کرتے رہا کرو۔",
      ro: "Jo shakhs hamari narazgi logon ki razamandi ke muqable mein khareedta hai hum us ko unhein ke hawalay kar dete hain. Musalmano! Jo maal hum ne tum ko de rakha hai us mein se maut ka waqt aane se pehle pehle raah-e-Ilahi mein kharch karte raha karo.",
      en: "Whoever seeks the approval of people at the cost of Our displeasure, We leave them to the mercy of those very people. Spend in charity from the provision We have granted you before death arrives and leaves you with regret."
    },
    tashreeh: {
      ur: "لوگوں کی واہ واہ یا خوف کی خاطر حق اور سچائی کو چھوڑ دینا انسان کو بے یار و مددگار کر دیتا ہے۔ اسی طرح زندگی کی مہلت ختم ہونے سے پہلے اپنے مال کو نیکی کے کاموں میں لگانا ہی اصل ہوشیاری ہے۔",
      ro: "Logon ki wah-wah ya khauf ki khatir haq aur sachai ko chhor dena insan ko be-yar-o-madadgar kar deta hai. Isi tarah zindagi ki mohlat khatam hone se pehle apne maal ko neki ke kaamon mein lagana hi asal hoshiyari hai.",
      en: "Compromising moral truth just to please people strips a person of divine support, and the wisest use of wealth is giving in charity before life's opportunity expires."
    },
    tags: [
      { ur: "رضائے الٰہی", ro: "Raza-e-Ilahi", en: "Divine Pleasure" },
      { ur: "انفاق", ro: "Infaq", en: "Timely Charity" }
    ]
  },
  {
    id: "ma-183",
    slug: "neki-ki-nasihat-himmat-aur-nemat-ki-aazmaish",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "امر بالمعروف، مشکلات میں ہمت اور نعمت کی آزمائش",
      ro: "Amr Bil-Ma'roof, Mushkilat Mein Himmat Aur Nemat Ki Aazmaish",
      en: "Enjoining Good, Perseverance, and the Test of Blessings"
    },
    quote: {
      ur: "نماز پڑھا کر، لوگوں کو اچھے کاموں کے کرنے کی نصیحت کیا کر، برے کاموں سے منع کیا کر اور تجھ پر جو مصیبت پڑے اس کو صبر سے جھیل؛ بے شک یہ بڑی ہمت کے کام ہیں۔ یاد رکھو کہ نعمت کا ملنا بھی ایک آزمائش ہے کہ تم شکر کرتے ہو یا ناشکری۔",
      ro: "Namaz parha kar, logon ko achay kaamon ke karne ki nasihat kiya kar, buray kaamon se mana kiya kar aur tujh par jo musibat paray us ko sabr se jheel; be-shak yeh badi himmat ke kaam hain. Yaad rakho ke nemat ka milna bhi aik aazmaish hai ke tum shukr karte ho ya nashukri.",
      en: "Establish prayer, encourage what is good, forbid what is wrong, and endure patiently whatever hardship befalls you—indeed, these require great resolve. Know that every blessing is a test of whether you remain grateful or become ungrateful."
    },
    tashreeh: {
      ur: "صرف مصیبت ہی امتحان نہیں ہوتی بلکہ خوشحالی، صحت اور دولت بھی اس بات کا امتحان ہیں کہ انسان عاجزی سے شکر ادا کرتا ہے یا غرور میں مبتلا ہوتا ہے۔ خیر پھیلانا اور تلخیاں سہنا اولوالعزم لوگوں کا شیوہ ہے۔",
      ro: "Sirf musibat hi imtihan nahi hoti balkay khushhali, sehat aur daulat bhi is baat ka imtihan hain ke insan aajizi se shukr ada karta hai ya ghuroor mein mubtala hota hai. Khair phailana aur talkhiyan sehna ulul-azm logon ka shewa hai.",
      en: "Prosperity is just as much a test of character as adversity; true resolve shines in promoting virtue, enduring trials patiently, and staying humble in success."
    },
    tags: [
      { ur: "اولوالعزمی", ro: "Ulul-Azmi", en: "Firm Resolve" },
      { ur: "شکر گزاری", ro: "Shukr-Guzari", en: "Gratitude" }
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
    slug: "walideen-ke-sath-ehsan-aur-adab-ki-guftugu",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 13-14",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بڑھاپے میں والدین کا ادب اور نرم گفتاری",
      ro: "Burhapay Mein Walideen Ka Adab Aur Naram-Guftari",
      en: "Honoring Parents in Old Age and Speaking Gently"
    },
    quote: {
      ur: "ماں باپ کے ساتھ نیک سلوک کرو؛ اگر ان میں سے ایک یا دونوں تمہارے سامنے بڑھاپے کو پہنچ جائیں تو ان کو 'اُف' تک نہ کہو اور نہ انہیں جھڑک کر جواب دو، بلکہ ان سے ادب اور تعظیم کے ساتھ نرم بات کہو اور عاجزی سے ان کے لیے رحم کی دعا کرو۔",
      ro: "Maa baap ke sath nek sulook karo; agar un mein se aik ya dono tumhare samne burhapay ko pohanch jayein to un ko 'uff' tak na kaho aur na unhein jhirak kar jawab do, balkay un se adab aur tazeem ke sath naram baat kaho aur aajizi se un ke liye reham ki dua karo.",
      en: "Show utmost kindness to your parents; if one or both of them reach old age in your care, never say to them even a word of annoyance nor scold them, rather speak to them with noble respect and lower to them the wing of humility."
    },
    tashreeh: {
      ur: "بڑھاپے میں انسان کے مزاج میں کمزوری اور چڑچڑا پن آ جاتا ہے۔ ایسے وقت میں والدین کی کسی بات پر ماتھے پر شکن لانا بھی منع ہے، بلکہ ان کے بچپن کے احسانات یاد کر کے محبت اور تعظیم سے پیش آنا فرض ہے۔",
      ro: "Burhapay mein insan ke mizaj mein kamzori aur chirchira-pan aa jata hai. Aise waqt mein walideen ki kisi baat par mathay par shikan lana bhi mana hai, balkay un ke bachpan ke ehsanat yaad kar ke mohabbat aur tazeem se pesh aana farz hai.",
      en: "Old age brings physical frailty and vulnerability; honoring parents with patience, gentle words, and heartfelt prayers repays a fraction of the care they gave us in childhood."
    },
    tags: [
      { ur: "حقوقِ والدین", ro: "Huqooq-e-Walideen", en: "Parents' Rights" },
      { ur: "ادب", ro: "Adab", en: "Reverence" }
    ]
  },
  {
    id: "ma-197",
    slug: "ahad-o-paiman-ki-pabandi-aur-bazpurs",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 11",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "عہد و پیمان کی پابندی اور قیامت کی بازپرس",
      ro: "Ahad-o-Paiman Ki Pabandi Aur Qayamat Ki Bazpurs",
      en: "Fulfilling Covenants and Accountability for Promises"
    },
    quote: {
      ur: "اپنے عہد کو پورا کرو، کیونکہ قیامت کے دن ہر عہد کے بارے میں ضرور پوچھا جائے گا؛ اور جب آپس میں قول و قرار کرو تو اللہ کے عہد کو پورا کیا کرو اور پختہ قسموں کے بعد انہیں مت توڑو۔",
      ro: "Apne ahad ko poora karo, kyunkeh qayamat ke din har ahad ke baray mein zaroor poocha jayega; aur jab aapas mein qoul-o-qarar karo to Allah ke ahad ko poora kiya karo aur pukhta qasmon ke baad unhein mat toro.",
      en: "Fulfill every covenant, for indeed every pledge will be questioned on the Day of Reckoning; honor your agreements once made and never break solemn oaths."
    },
    tashreeh: {
      ur: "وعدہ اور معاہدہ صرف کاغذ کی تحریر نہیں بلکہ اخلاقی اور شرعی ذمہ داری ہے۔ جو قوم یا فرد اپنے قول و قرار کا پاس نہیں رکھتا وہ دنیا میں اعتبار اور آخرت میں نجات کھو بیٹھتا ہے۔",
      ro: "Wada aur muahida sirf kaghaz ki tehreer nahi balkay akhlaqi aur shar'i zimmedari hai. Jo qoum ya fard apne qoul-o-qarar ka paas nahi rakhta woh duniya mein aitbar aur akhirat mein najat kho baithta hai.",
      en: "A promise is a sacred moral contract; honoring commitments builds social trust in this world and secures salvation on the Day of Judgment."
    },
    tags: [
      { ur: "ایفائے عہد", ro: "Eefa-e-Ahad", en: "Keeping Promises" },
      { ur: "ذمہ داری", ro: "Zimmedari", en: "Accountability" }
    ]
  },
  {
    id: "ma-198",
    slug: "zameen-par-akar-kar-na-chalna-aur-aawaz-past-rakhna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 12-13",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "چال میں میانہ روی اور گفتگو میں پست آوازی",
      ro: "Chaal Mein Miyana-Rawi Aur Guftugu Mein Past-Aawazi",
      en: "Modesty in Walking and Lowering One's Voice"
    },
    quote: {
      ur: "لوگوں سے غرور کے ساتھ اپنا رخ نہ پھیر اور زمین پر اتراتا ہوا مت چل، کیونکہ اللہ کسی متکبر اور شیخی خورے کو پسند نہیں کرتا؛ اپنی چال میں اعتدال رکھ اور اپنی آواز کو پست رکھ۔",
      ro: "Logon se ghuroor ke sath apna rukh na pher aur zameen par itrata huwa mat chal, kyunkeh Allah kisi mutakabbir aur shekhi-khoray ko pasand nahi karta; apni chaal mein aitdaal rakh aur apni aawaz ko past rakh.",
      en: "Do not turn your face away from people in arrogance, nor walk insolently upon the earth, for Allah dislikes every conceited boaster; be moderate in your pace and lower your voice."
    },
    tashreeh: {
      ur: "انسان کی چال ڈھال اور اس کے بولنے کا لہجہ اس کے باطن کا آئینہ ہوتا ہے۔ چیخ چلا کر بات کرنا رعب کی علامت نہیں بلکہ بدسلیقگی ہے، جبکہ دھیما لہجہ اور متواضع چال شرافت کی نشانی ہے۔",
      ro: "Insan ki chaal-dhaal aur us ke bolne ka lehja us ke batin ka aaina hota hai. Cheekh chilla kar baat karna roab ki alamat nahi balkay bad-saleeqgi hai, jabkeh dheema lehja aur mutawaze chaal sharafat ki nishani hai.",
      en: "True dignity is reflected in a humble walk and a calm, measured voice; shouting never commands respect, whereas gentleness wins every heart."
    },
    tags: [
      { ur: "عاجزی", ro: "Aajizi", en: "Humility" },
      { ur: "شائستگی", ro: "Shaistagi", en: "Refined Manners" }
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
    slug: "naap-tol-mein-insaf-aur-kami-se-parhez",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 11-12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "ناپ تول میں انصاف اور ڈنڈی مارنے کی مذمت",
      ro: "Naap-Tol Mein Insaf Aur Dandi Marne Ki Mazammat",
      en: "Honesty in Weights and Measures"
    },
    quote: {
      ur: "جب ناپنے لگو تو پورا پورا ناپو اور سیدھی ترازو سے تولا کرو؛ خرابی ہے کم تولنے والوں کے لیے کہ جب لوگوں سے ناپ کر لیتے ہیں تو پورا لیتے ہیں اور جب ان کو ناپ یا تول کر دیتے ہیں تو گھٹا کر دیتے ہیں۔",
      ro: "Jab naapne lago to poora poora naapo aur seedhi tarazu se tola karo; kharabi hai kam tolne walon ke liye ke jab logon se naap kar lete hain to poora lete hain aur jab un ko naap ya tol kar dete hain to ghata kar dete hain.",
      en: "Give full measure when you measure, and weigh with an even, honest balance; woe to those who give less in measure—who demand full measure when receiving from people, yet give less when measuring or weighing for them."
    },
    tashreeh: {
      ur: "صرف ترازو ہی نہیں بلکہ ہر کاروبار، ملازمت اور معاملے میں اپنا حق پورا وصول کرنا اور دوسرے کا حق دیتے وقت کمی کر دینا بدترین خیانت ہے جو رزق کی برکت ختم کر دیتی ہے۔",
      ro: "Sirf tarazu hi nahi balkay har karobar, mulazmat aur muamlay mein apna haq poora wasool karna aur doosre ka haq dete waqt kami kar dena bad-tareen khyanat hai jo rizq ki barkat khatam kar deti hai.",
      en: "Fairness extends beyond physical scales to every service and contract: demanding one's full right while shortchanging others destroys commercial blessing and social trust."
    },
    tags: [
      { ur: "تجارتی دیانت", ro: "Tijarati Diyanat", en: "Fair Trade" },
      { ur: "انصاف", ro: "Insaf", en: "Justice" }
    ]
  },
  {
    id: "ma-212",
    slug: "neki-aur-taqwa-mein-taawun-gunah-mein-nahi",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نیکی اور تقویٰ میں تعاون کا عالمگیر اصول",
      ro: "Neki Aur Taqwa Mein Taawun Ka Aalamgeer Usool",
      en: "Cooperating in Goodness and Piety, Not in Sin"
    },
    quote: {
      ur: "نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کی مدد کیا کرو، اور گناہ اور ظلم و زیادتی کے کاموں میں کسی کا ساتھ مت دو؛ اور اللہ سے ڈرتے رہو۔",
      ro: "Neki aur parhezgari ke kaamon mein aik doosre ki madad kiya karo, aur gunah aur zulm-o-ziyadati ke kaamon mein kisi ka sath mat do; aur Allah se darte raho.",
      en: "Cooperate with one another in goodness and righteousness, and do not cooperate in sin and aggression; and remain ever mindful of Allah."
    },
    tashreeh: {
      ur: "یہ حکم اسلامی معاشرت کی بنیاد ہے کہ دوستی، رشتہ داری یا برادری کی خاطر کبھی کسی ظلم اور ناجائز کام میں مددگار نہ بنو، بلکہ ہر اس کام میں ہاتھ بٹاؤ جس سے مخلوق کو بھلائی پہنچے۔",
      ro: "Yeh hukm Islami muasharat ki bunyad hai ke dosti, rishtedari ya biradari ki khatir kabhi kisi zulm aur najaiz kaam mein madadgar na bano, balkay har us kaam mein hath batao jis se makhlooq ko bhalai pohanche.",
      en: "True loyalty is anchored in moral truth: support every initiative that promotes welfare and righteousness, and refuse to aid injustice regardless of personal ties."
    },
    tags: [
      { ur: "تعاون", ro: "Taawun", en: "Cooperation" },
      { ur: "پرہیزگاری", ro: "Parhezgari", en: "Righteousness" }
    ]
  },
  {
    id: "ma-213",
    slug: "suni-sunai-khabar-ki-tehqeeq-karna",
    categorySlug: "ahkam-e-khuda",
    bookRef: "Makhzan-e-Akhlaq - Page 14-15",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سنی سنائی خبر کی تحقیق اور نادانی سے بچاؤ",
      ro: "Suni-Sunai Khabar Ki Tehqeeq Aur Nadani Se Bachao",
      en: "Verifying News Before Acting to Prevent Regret"
    },
    quote: {
      ur: "اے ایمان والو! اگر کوئی غیر معتبر شخص تمہارے پاس کوئی خبر لے کر آئے تو خوب تحقیق کر لیا کرو، کہیں ایسا نہ ہو کہ تم نادانی میں کسی قوم کو نقصان پہنچا بیٹھو اور پھر اپنے کیے پر پشیمان ہو۔",
      ro: "Aye eman walo! Agar koi ghair-mo'tabar shakhs tumhare paas koi khabar le kar aaye to khoob tehqeeq kar liya karo, kahin aisa na ho ke tum nadani mein kisi qoum ko nuqsan pohancha baitho aur phir apne kiye par pasheman ho.",
      en: "O believers! If an unreliable person brings you any news, verify it thoroughly, lest you harm people out of ignorance and then become regretful over what you have done."
    },
    tashreeh: {
      ur: "افواہوں اور کچی خبروں پر یقین کر کے فوری ردِعمل دینا خاندانوں اور معاشروں کو تباہ کر دیتا ہے۔ عقلمندی کا تقاضا ہے کہ کسی کے خلاف رائے قائم کرنے سے پہلے سچائی کی پوری تصدیق کی جائے۔",
      ro: "Afwahon aur kachi khabron par yaqeen kar ke fori radd-e-amal dena khandanon aur muashron ko tabah kar deta hai. Aqalmandi ka taqaza hai ke kisi ke khilaf raaye qayam karne se pehle sachai ki poori tasdeeq ki jaye.",
      en: "Acting upon unverified rumors ruins relationships and causes grave injustice; verifying facts before passing judgment protects everyone from lasting regret."
    },
    tags: [
      { ur: "تحقیق", ro: "Tehqeeq", en: "Verification" },
      { ur: "احتیاط", ro: "Ehtiyat", en: "Caution" }
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
    bookRef: "Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "رنجش کے باوجود حاجت مندوں کی مدد جاری رکھنا",
      ro: "Ranjish Ke Bawajood Hajat-Mandon Ki Madad Jari Rakhna",
      en: "Continuing Charity to Relatives Even After a Grievance"
    },
    quote: {
      ur: "تم میں سے جو لوگ صاحبِ فضیلت اور صاحبِ وسعت ہیں وہ قرابت داروں، مسکینوں اور مہاجروں کو کچھ نہ دینے کی قسم نہ کھائیں، بلکہ معاف کر دیں اور درگزر کریں؛ کیا تم نہیں چاہتے کہ اللہ تعالیٰ تمہارے قصور معاف فرما دے؟",
      ro: "Tum mein se jo log sahib-e-fazeelat aur sahib-e-wus'at hain woh qarabatiyon, miskeenon aur muhajiron ko kuch na dene ki qasam na khayein, balkay maaf kar dein aur darguzar karein; kya tum nahi chahte ke Allah Ta'ala tumhare qusoor maaf farma de?",
      en: "Let not those of virtue and wealth among you swear to discontinue helping relatives and the needy due to their mistakes; rather, pardon and overlook—do you not wish that Allah should forgive you?"
    },
    tashreeh: {
      ur: "اکثر لوگ کسی غریب رشتہ دار کی غلطی یا ناشکری پر ناراض ہو کر اس کی مالی مدد بند کر دیتے ہیں۔ اعلیٰ ظرفی کا تقاضا یہ ہے کہ رب کی مغفرت کی امید میں ان کی خطا معاف کر کے احسان کا سلسلہ جاری رکھا جائے۔",
      ro: "Aksar log kisi ghareeb rishtedar ki ghalti ya nashukri par naraz ho kar us ki maali madad band kar dete hain. Aala-zarfi ka taqaza yeh hai ke Rab ki maghfirat ki umeed mein un ki khata maaf kar ke ehsan ka silsila jari rakha jaye.",
      en: "True magnanimity means continuing to support needy relatives even when they have erred against us, seeking divine forgiveness through our own willingness to forgive."
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
    bookRef: "Makhzan-e-Akhlaq - Page 14",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "کسی کی ذاتی خلوت اور گھر کے پردے کا احترام کرنا شائستہ معاشرت کا بنیادی اصول ہے۔ بغیر اطلاع داخل ہونا یا مصروفیت کی وجہ سے معذرت کرنے پر برا مان جانا اخلاقی آداب کے خلاف ہے۔",
      ro: "Kisi ki zaati khalwat aur ghar ke parday ka ehtiram karna shaista muasharat ka bunyadi usool hai. Baghair ittila dakhil hona ya masroofiyat ki wajah se maazrat karne par bura maan jana akhlaqi aadab ke khilaf hai.",
      en: "Respecting personal privacy by asking permission before entering—and graciously accepting if the host is unavailable—is a hallmark of civilized etiquette."
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
    bookRef: "Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "کسی انسان کی ظاہری شکل، غربت یا سادگی کا مذاق اڑانا تکبر کی علامت ہے کیونکہ ہو سکتا ہے وہ دل کی پاکیزگی میں ہم سے کہیں افضل ہو۔ ہر انسان کو اس کے باعزت نام سے پکارنا ایمان کی شان ہے۔",
      ro: "Kisi insan ki zahiri shakal, ghareebi ya sadgi ka mazaq urana takabbur ki alamat hai kyunkeh ho sakta hai woh dil ki pakeezgi mein hum se kahin afzal ho. Har insan ko us ke ba-izzat naam se pukarna eman ki shaan hai.",
      en: "Ridiculing others or using demeaning nicknames stems from arrogance; true faith honors the dignity of every person without exception."
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
    bookRef: "Makhzan-e-Akhlaq - Page 11-12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "کسی غریب کی مدد کرنے کے بعد بار بار اس کا ذکر کرنا یا اس سے ذلت آمیز رویہ رکھنا ساری نیکی کو خاک میں ملا دیتا ہے۔ اگر انسان کچھ نہ دے سکے تو کم از کم نرم لفظ بول کر سائل کی عزتِ نفس محفوظ رکھے۔",
      ro: "Kisi ghareeb ki madad karne ke baad bar bar us ka zikr karna ya us se zillat-aamez rawaiya rakhna sari neki ko khak mein mila deta hai. Agar insan kuch na de sake to kam az kam naram lafz bol kar sail ki izzat-e-nafs mehfooz rakhe.",
      en: "Boasting about a favor or humiliating a recipient destroys the spiritual value of charity; preserving human dignity with a gentle word outweighs any material gift."
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
    bookRef: "Makhzan-e-Akhlaq - Page 13",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "جب دو افراد یا خاندانوں میں اختلاف پیدا ہو تو تیسرے فرد کا کام آگ بھڑکانا نہیں بلکہ غیر جانبداری اور انصاف کے ساتھ دونوں کے دلوں کو جوڑنا ہے۔ صلح کرانے سے معاشرے پر اللہ کی رحمت نازل ہوتی ہے۔",
      ro: "Jab do afrad ya khandanon mein ikhtilaf paida ho to teesre fard ka kaam aag bharkana nahi balkay ghair-janibdari aur insaf ke sath dono ke dilon ko jorna hai. Sulah karane se muashray par Allah ki rehmat nazil hoti hai.",
      en: "When disputes arise between people, true brotherhood calls for impartial mediation and peacemaking rather than taking sides or fueling division."
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
    bookRef: "Makhzan-e-Akhlaq - Page 14",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "نفرت کو نفرت سے ختم نہیں کیا جا سکتا۔ جب انسان صبر کا گھونٹ پی کر زیادتی کے جواب میں حسنِ سلوک کرتا ہے تو مخالف کا ضمیر جاگ اٹھتا ہے اور پرانی عداوت گہری دوستی میں بدل جاتی ہے۔",
      ro: "Nafrat ko nafrat se khatam nahi kiya ja sakta. Jab insan sabr ka ghoont pee kar ziyadati ke jawab mein husn-e-sulook karta hai to mukhalif ka zameer jaag uthta hai aur purani adawat gehri dosti mein badal jati hai.",
      en: "Hatred cannot extinguish hatred; responding to hostility with unexpected grace and patience disarms the opponent and turns animosity into lasting respect."
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
    bookRef: "Makhzan-e-Akhlaq - Page 10-11",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "اسلامی معاشیات کا سنہرا اصول توازن ہے۔ نہ تو مال سمیٹ کر رکھنے کی اجازت ہے کہ اپنے اہلِ خانہ اور محتاجوں کا حق مارا جائے، اور نہ ہی نمود و نمائش میں اس طرح اڑانے کی اجازت ہے کہ کل کو انسان خود دوسروں کے آگے ہاتھ پھیلانے پر مجبور ہو جائے۔",
      ro: "Islami maashiyat ka sunehra usool tawazun hai. Na to maal sameet kar rakhne ki ijazat hai ke apne ahl-e-khana aur mohtajon ka haq mara jaye, aur na hi numood-o-numaish mein is tarah urane ki ijazat hai ke kal ko insan khud doosron ke aagay hath phailane par majboor ho jaye.",
      en: "Financial wisdom lies in balance: avoiding stinginess that deprives one's family and the poor, while shunning reckless spending that leads to ruin."
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
    bookRef: "Makhzan-e-Akhlaq - Page 12",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "قرآن نے رشتہ داروں اور ناداروں کی مدد کو محض احسان نہیں بلکہ ان کا ’حق‘ قرار دیا ہے۔ جو مال غریبوں کی ضرورت پوری کرنے کے بجائے جھوٹی شان و شوکت اور اسراف میں اڑایا جاتا ہے وہ درحقیقت نعمتِ الٰہی کی ناشکری ہے۔",
      ro: "Quran ne rishtedaron aur nadaron ki madad ko mehaz ehsan nahi balkay un ka 'haq' qarar diya hai. Jo maal ghareebon ki zaroorat poori karne ke bajaye jhooti shaan-o-shaukat aur israf mein uraya jata hai woh dar-haqeeqat nemat-e-Ilahi ki nashukri hai.",
      en: "Supporting relatives and the needy is a moral obligation, whereas squandering wealth on vanity and excess is a form of ingratitude for divine blessings."
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
    bookRef: "Makhzan-e-Akhlaq - Page 14-15",
    author: {
      ur: "احکامِ خدا (القرآن)",
      ro: "Ahkam-e-Khuda (Al-Quran)",
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
      ur: "جب انسان ہیر پھیر، مصلحت پرستی اور جھوٹ چھوڑ کر صاف اور سچی بات کہنے کی عادت بنا لیتا ہے تو اس کے معاملات کی الجھنیں خود بخود سلجھ جاتی ہیں اور اس کا پورا کردار سنور جاتا ہے۔",
      ro: "Jab insan her-pher, maslehat-parasti aur jhoot chhor kar saaf aur sachi baat kehne ki aadat bana leta hai to us ke muamlat ki uljhanein khud-ba-khud sulajh jati hain aur us ka poora kirdar sanwar jata hai.",
      en: "Adopting complete honesty and clarity in speech untangles life's complications and brings divine blessing to all of one's actions."
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
    bookRef: "Surah Al-Hashr (59:9) & Surah Al-Muzzammil (73:20) | Makhzan-e-Akhlaq - Page 10",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "نفس کی حرص و بخل سے نجات ہی حقیقی کامیابی ہے",
      ro: "Nafs Ki Hirs o Bukhl Se Najat Hi Haqeeqi Kamyabi Hai",
      en: "Freedom from the Greed of the Soul is True Success"
    },
    quote: {
      ur: "وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ  وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا\n\nترجمہ: اور جو لوگ اپنے نفس کے بخل اور تنگ دلی سے بچا لیے گئے، وہی حقیقت میں فلاح پانے والے ہیں؛ اور جو کچھ بھلائی تم اپنے نفس کے لیے آگے بھیجو گے اسے اللہ کے ہاں بہتر اور اجر میں بہت بڑا پاؤ گے۔",
      ro: "وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ  وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا\n\nTarjuma: Aur jo log apne nafs ke bukhl aur tang-dili se bacha liye gaye, wahi haqeeqat mein falah pane wale hain; aur jo kuch bhalai tum apne nafs ke liye aagay bhejo ge usay Allah ke haan behtar aur ajr mein bohot bada pao ge.",
      en: "وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ  وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا\n\nTranslation: And whoever is protected from the stinginess and greed of their own soul—it is they who are truly successful; and whatever good you send ahead for yourselves, you will find it with Allah far better and greater in reward."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن کریم میں 'شُحّ' سے مراد صرف کنجوسی نہیں بلکہ نفس کی وہ شدید حرص ہے جو انسان کو اپنا حق دبانے اور دوسروں کے حق پر للچانے پر ابھارتی ہے۔ آج کا عملی سبق یہ ہے کہ جب انسان اپنے دل کو خود غرضی اور تنگ دلی سے آزاد کر کے مخلوقِ خدا پر خرچ کرنا سیکھ لیتا ہے، تو وہ دنیا کی بے چینی سے بھی نجات پا لیتا ہے اور آخرت کا لازوال ذخیرہ بھی بنا لیتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran-e-Kareem mein 'shuhh' se murad sirf kanjoosi nahi balkay nafs ki woh shadeed hirs hai jo insan ko apna haq dabane aur doosron ke haq par lalchane par ubharti hai. Aaj ka amli sabaq yeh hai ke jab insan apne dil ko khud-gharzi aur tang-dili se aazad kar ke makhlooq-e-Khuda par kharch karna seekh leta hai, to woh duniya ki be-chaini se bhi najat pa leta hai aur akhirat ka la-zawal zakhira bhi bana leta hai.",
      en: "Context & Practical Lesson: Overcoming internal selfishness and stinginess ('shuhh') is the greatest personal victory, freeing the heart from anxiety and unlocking eternal spiritual reward."
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
    bookRef: "Surah Aal-e-Imran (3:159) | Makhzan-e-Akhlaq - Page 12-13",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اہم معاملات میں مشاورت اور پختہ عزم کے بعد توکل",
      ro: "Ahem Muamlat Mein Mushawarat Aur Pukhta Azm Ke Baad Tawakkul",
      en: "Consultation in Affairs and Trust in God After Firm Resolve"
    },
    quote: {
      ur: "فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ\n\nترجمہ: پس ان کے قصور معاف کر دو، ان کے لیے مغفرت مانگو اور اہم کاموں میں ان سے مشورہ لیا کرو؛ پھر جب تم رائے پختہ کر کے کسی کام کا عزم کر لو تو اللہ پر بھروسہ رکھو، بے شک اللہ توکل کرنے والوں کو دوست رکھتا ہے۔",
      ro: "فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ\n\nTarjuma: Pas un ke qusoor maaf kar do, un ke liye maghfirat mango aur ahem kaamon mein un se mashwara liya karo; phir jab tum raaye pukhta kar ke kisi kaam ka azm kar lo to Allah par bharosa rakho, be-shak Allah tawakkul karne walon ko dost rakhta hai.",
      en: "فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ\n\nTranslation: So pardon them, pray for their forgiveness, and consult them in matters of importance; then, once you have taken a firm decision, place your trust in Allah—indeed, Allah loves those who rely upon Him."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ آلِ عمران کی یہ آیتِ کریمہ کامیاب قیادت اور گھریلو نظام کے چار ستون متعین فرماتی ہے: ماتحتوں کی خطا سے درگزر، ان کے حق میں دعائے خیر، فیصلوں میں ان سے مشاورت، اور تدبیر مکمل ہونے کے بعد اللہ پر کامل توکل۔ آج کا عملی سبق یہ ہے کہ اپنے گھر اور کاروبار میں تنہا فیصلے مسلط کرنے کے بجائے مخلص ساتھیوں سے مشورہ کریں اور پھر یکسو ہو کر قدم بڑھائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Aal-e-Imran ki yeh aayat-e-kareema kamyab qiyadat aur ghareloo nizam ke chaar sutoon mutayyan farmati hai: matehton ki khata se darguzar, un ke haq mein dua-e-khair, faislon mein un se mushawarat, aur tadbeer mukammal hone ke baad Allah par kamil tawakkul. Aaj ka amli sabaq yeh hai ke apne ghar aur karobar mein tanha faisle musallat karne ke bajaye mukhlis sathiyon se mashwara karein aur phir yaksoo ho kar qadam barhayein.",
      en: "Context & Practical Lesson: This verse of Surah Aal-e-Imran outlines the four pillars of wise leadership: forgiveness, prayer, consultation ('Shura'), and decisive action backed by trust in God."
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
    bookRef: "Surah An-Nisa (4:86) & Surah Al-Baqarah (2:83) | Makhzan-e-Akhlaq - Page 14-15",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "سلام کا بہترین جواب دینا اور ہر انسان سے اچھی بات کہنا",
      ro: "Salam Ka Behtareen Jawab Dena Aur Har Insan Se Achi Baat Kehna",
      en: "Returning Greetings Graciously and Speaking Kindly to All"
    },
    quote: {
      ur: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ وَقُولُوا لِلنَّاسِ حُسْنًا\n\nترجمہ: اور جب کوئی تمہیں سلام یا اخلاق کا کلمہ کہے تو تم اس سے بہتر کلمے کے ساتھ اس کا جواب دو یا کم از کم ویسا ہی لوٹا دو؛ اور تمام لوگوں سے بھلی اور شائستہ بات کہا کرو۔",
      ro: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ وَقُولُوا لِلنَّاسِ حُسْنًا\n\nTarjuma: Aur jab koi tumhein salam ya akhlaq ka kalma kahe to tum us se behtar kalmay ke sath us ka jawab do ya kam az kam waisa hi lauta do; aur tamam logon se bhali aur shaista baat kaha karo.",
      en: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ وَقُولُوا لِلنَّاسِ حُسْنًا\n\nTranslation: And when you are greeted with a courteous greeting, respond with one even more gracious, or at least return it equally; and speak kindly and politely to all people."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: قرآن مجید نے یہاں 'قولوا للناس حسنا' فرما کر تمام انسانوں کے ساتھ شائستہ، نرم اور خیر خواہانہ گفتگو کرنے کا عالمگیر حکم دیا ہے۔ اسی طرح کسی کے سلام یا تحفے کا جواب اس سے بڑھ کر گرمجوشی سے دینا اسلامی تہذیب کا خاصہ ہے۔ آج کا عملی سبق یہ ہے کہ ہر ملنے والے کو مسکرا کر پورا سلام و جواب دیں اور اپنی زبان سے کبھی کسی انسان کی دل شکنی نہ ہونے دیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Quran Majeed ne yahan 'Qooloo lin-naasi husna' farma kar tamam انسانوں ke sath shaista, naram aur khair-khwahana guftugu karne ka aalamgeer hukm diya hai. Isi tarah kisi ke salam ya tohfay ka jawab us se barh kar garm-joshi se dena Islami tehzeeb ka khassa hai. Aaj ka amli sabaq yeh hai ke har milne wale ko muskura kar poora salam o jawab dein aur apni zaban se kabhi kisi insan ki dil-shikni na hone dein.",
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
    bookRef: "Surah An-Nisa (4:58) | Makhzan-e-Akhlaq - Page 11",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "امانتیں حقداروں کو سونپنا اور عدل کے ساتھ فیصلہ کرنا",
      ro: "Amanatein Haqdaron Ko Sonpna Aur Adal Ke Sath Faisla Karna",
      en: "Restoring Trusts to Their Owners and Judging with Justice"
    },
    quote: {
      ur: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ ۚ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُم بِهِ\n\nترجمہ: بے شک اللہ تمہیں حکم دیتا ہے کہ امانتیں ان کے اہل اور حقداروں کے سپرد کرو؛ اور جب لوگوں کے درمیان فیصلہ کرنے لگو تو عدل اور انصاف کے ساتھ فیصلہ کرو، بے شک اللہ تمہیں بہت عمدہ نصیحت فرماتا ہے۔",
      ro: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ ۚ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُم بِهِ\n\nTarjuma: Be-shak Allah tumhein hukm deta hai ke amanatein un ke ahl aur haqdaron ke supurd karo; aur jab logon ke darmiyan faisla karne lago to adal aur insaf ke sath faisla karo, be-shak Allah tumhein bohot umda nasihat farmata hai.",
      en: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ ۚ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُم بِهِ\n\nTranslation: Indeed, Allah commands you to render trusts to whom they are due, and when you judge between people, to judge with fairness and justice; how excellent is the instruction Allah gives you."
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
    bookRef: "Surah Al-Ma'idah (5:8) | Makhzan-e-Akhlaq - Page 12-13",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مخالف کی دشمنی میں بھی انصاف کا دامن نہ چھوڑنا",
      ro: "Mukhalif Ki Dushmani Mein Bhi Insaf Ka Daman Na Chhorna",
      en: "Never Letting Enmity Cause You to Swerve from Justice"
    },
    quote: {
      ur: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ\n\nترجمہ: اے ایمان والو! اللہ کے واسطے حق پر قائم رہنے والے اور انصاف کی گواہی دینے والے بنو؛ اور کسی قوم کی عداوت اور دشمنی تمہیں اس بات پر آمادہ نہ کرے کہ تم بے انصافی کر بیٹھو؛ عدل کیا کرو کہ وہی پرہیزگاری کے سب سے زیادہ قریب ہے۔",
      ro: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ\n\nTarjuma: Aye eman walo! Allah ke wastay haq par qayam rehne wale aur insaf ki gawahi dene wale bano; aur kisi qoum ki adawat aur dushmani tumhein is baat par aamada na kare ke tum be-insafi kar baitho; adal kiya karo ke wahi parhezgari ke sab se zyada qareeb hai.",
      en: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ\n\nTranslation: O believers! Stand firmly for Allah as witnesses to fair dealing, and do not let the hatred or enmity of any people lead you to deviate from justice; be just—that is closest to true piety."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: اپنے دوستوں اور پسندیدہ لوگوں کے ساتھ انصاف کرنا آسان ہے، لیکن سورۃ المائدہ کی یہ آیت کردار کا اصل امتحان وہاں بتاتی ہے جہاں مقابلے پر کوئی مخالف کھڑا ہو۔ آج کا عملی سبق یہ ہے کہ ذاتی رنجش یا اختلاف کو کبھی حق گوئی کے آڑے نہ آنے دیں؛ مخالف کی خوبی کا اعتراف کرنا اور اس کے حق میں سچی گواہی دینا ہی تقویٰ کی معراج ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Apne doston aur pasandeeda logon ke sath insaf karna asan hai, lekin Surah Al-Ma'idah ki yeh aayat kirdar ka asal imtihan wahan batati hai jahan muqable par koi mukhalif khara ho. Aaj ka amli sabaq yeh hai ke zaati ranjish ya ikhtilaf ko kabhi haq-goi ke aaray na aane dein; mukhalif ki khoobi ka aitraf karna aur us ke haq mein sachi gawahi dena hi taqwa ki meraj hai.",
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
    bookRef: "Surah Al-Hashr (59:9) | Makhzan-e-Akhlaq - Page 15",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "مقامِ ایثار: اپنی ضرورت پر دوسرے بھائی کو ترجیح دینا",
      ro: "Maqam-e-Eesar: Apni Zaroorat Par Doosre Bhai Ko Tarjeeh Dena",
      en: "Altruism: Preferring Others Over Oneself Even in Need"
    },
    quote: {
      ur: "وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ\n\nترجمہ: اور وہ اپنے دلوں میں اس چیز کی کوئی جلن یا کھٹک محسوس نہیں کرتے جو ان کے بھائیوں کو دی جائے، اور خود اپنی ذات پر دوسروں کو ترجیح دیتے ہیں خواہ ان کو خود بھی سخت حاجت اور تنگدستی درپیش ہو۔",
      ro: "وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ\n\nTarjuma: Aur woh apne dilon mein us cheez ki koi jalan ya khatak mehsoos nahi karte jo un ke bhaiyon ko di jaye, aur khud apni zaat par doosron ko tarjeeh dete hain khwah un ko khud bhi sakht hajat aur tangdasti darpesh ho.",
      en: "وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ\n\nTranslation: And they find no envy in their hearts for what has been given to their brothers, and they give preference to others over themselves, even though they themselves are in pressing need."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الحشر کی یہ آیت انصارِ مدینہ کے اس بے مثال ایثار کی یادگار ہے جنہوں نے اپنے گھر کے بچوں کو سلا کر بھوکے مہمان کو کھانا کھلایا۔ مشکل الفاظ میں 'خصاصۃ' کا معنی شدید فاقہ اور حاجت ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کی ترقی دیکھ کر دل کو حسد سے پاک رکھیں اور کم وسائل میں بھی کسی مجبور کا سہارا بننے کا جذبہ زندہ رکھیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-Hashr ki yeh aayat Ansar-e-Madinah ke us be-misal eesar ki yaadgar hai jinhon ne apne ghar ke bachon ko sula kar bhookay mehman ko khana khilaya. Mushkil alfaz mein 'khasasah' ka ma'ni shadeed faqa aur hajat hai. Aaj ka amli sabaq yeh hai ke doosron ki taraqqi dekh kar dil ko hasad se paak rakhein aur kam wasail mein bhi kisi majboor ka sahara banne ka jazba zinda rakhein.",
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
    bookRef: "Surah An-Nahl (16:95) | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "معمولی دنیاوی مفاد کے بدلے اپنے عہد اور ضمیر کا سودا نہ کرنا",
      ro: "Mamooli Dunyawi Mafad Ke Badlay Apne Ahad Aur Zameer Ka Sauda Na Karna",
      en: "Never Trading Moral Principles for Fleeting Worldly Gain"
    },
    quote: {
      ur: "وَلَا تَشْتَرُوا بِعَهْدِ اللَّهِ ثَمَنًا قَلِيلًا ۚ إِنَّمَا عِندَ اللَّهِ هُوَ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ\n\nترجمہ: اور اللہ کے عہد کو تھوڑی سی دنیاوی قیمت کے بدلے فروخت نہ کرو؛ بے شک جو ثواب اور انعام اللہ کے پاس ہے وہی تمہارے لیے بہتر ہے اگر تم علم رکھتے ہو۔",
      ro: "وَلَا تَشْتَرُوا بِعَهْدِ اللَّهِ ثَمَنًا قَلِيلًا ۚ إِنَّمَا عِندَ اللَّهِ هُوَ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ\n\nTarjuma: Aur Allah ke ahad ko thori si dunyawi qeemat ke badlay farokht na karo; be-shak jo sawab aur inam Allah ke paas hai wahi tumhare liye behtar hai agar tum ilm rakhte ho.",
      en: "وَلَا تَشْتَرُوا بِعَهْدِ اللَّهِ ثَمَنًا قَلِيلًا ۚ إِنَّمَا عِندَ اللَّهِ هُوَ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ\n\nTranslation: And do not barter the covenant of Allah for a small worldly price; indeed, what is with Allah is far better for you, if only you knew."
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
    bookRef: "Surah Ad-Duha (93:9-11) | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "یتیم پر سختی نہ کرنا، سائل کو نہ جھڑکنا اور شکرِ نعمت",
      ro: "Yateem Par Sakhti Na Karna, Sail Ko Na Jhirakna Aur Shukr-e-Nemat",
      en: "Honoring the Orphan, Never Scolding the Petitioner, and Gratitude"
    },
    quote: {
      ur: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ  وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ  وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ\n\nترجمہ: پس آپ یتیم پر ہرگز سختی نہ کریں، اور مانگنے والے (سائل) کو مت جھڑکیں، اور اپنے پروردگار کی نعمت کا خوب تذکرہ اور شکر کیا کریں۔",
      ro: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ  وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ  وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ\n\nTarjuma: Pas aap yateem par hargiz sakhti na karein, aur mangne wale (sail) ko mat jhirkein, aur apne Parwardigar ki nemat ka khoob tazkira aur shukr kiya karein.",
      en: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ  وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ  وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ\n\nTranslation: So as for the orphan, do not oppress them; and as for the petitioner, do not repulse or scold them; and as for the favor of your Lord, proclaim it with gratitude."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الضحیٰ کی یہ تین مختصر آیات شکرِ نعمت کے عملی طریقے سکھاتی ہیں: بے سہارا یتیم کے مال اور عزت کی حفاظت کرنا، اور دروازے پر آنے والے حاجت مند یا علم پوچھنے والے طالبِ علم کو کبھی نہ ڈانٹنا۔ آج کا عملی سبق یہ ہے کہ اگر آپ کسی سائل کی مالی مدد نہ بھی کر سکیں تو کم از کم مسکرا کر اور عزت سے معذرت کریں تاکہ کسی کا دل نہ ٹوٹے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ad-Duha ki yeh teen mukhtasar aayatein shukr-e-nemat ke amli tareeqay sikhati hain: be-sahara yateem ke maal aur izzat ki hifazat karna, aur darwazay par aane wale hajat-mand ya ilm poochne wale talib-e-ilm ko kabhi na dantna. Aaj ka amli sabaq yeh hai ke agar aap kisi sail ki maali madad na bhi kar sakein to kam az kam muskura kar aur izzat se maazrat karein taake kisi ka dil na tootay.",
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
    bookRef: "Surah Ash-Shams (91:8-10) | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اپنے نفس کو پاکیزہ بنانے والا ہی حقیقی کامیاب ہے",
      ro: "Apne Nafs Ko Pakeeza Banane Wala Hi Haqeeqi Kamyab Hai",
      en: "True Success Belongs to the One Who Purifies the Soul"
    },
    quote: {
      ur: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا  قَدْ أَفْلَحَ مَن زَكَّاهَا  وَقَدْ خَابَ مَن دَسَّاهَا\n\nترجمہ: پس اللہ نے انسانی نفس کو اس کی بدکاری اور پرہیزگاری کی سمجھ الہام فرما دی؛ بے شک وہ شخص فلاح پا گیا جس نے اپنے نفس کو پاک اور آراستہ کر لیا، اور وہ نامراد ہوا جس نے اسے گناہوں میں دبا دیا۔",
      ro: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا  قَدْ أَفْلَحَ مَن زَكَّاهَا  وَقَدْ خَابَ مَن دَسَّاهَا\n\nTarjuma: Pas Allah ne insani nafs ko us ki bad-kari aur parhezgari ki samajh ilham farma di; be-shak woh shakhs falah pa gaya jis ne apne nafs ko paak aur aarasta kar liya, aur woh namurad huwa jis ne usay gunahon mein daba diya.",
      en: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا  قَدْ أَفْلَحَ مَن زَكَّاهَا  وَقَدْ خَابَ مَن دَسَّاهَا\n\nTranslation: And He inspired the soul with discernment of its wickedness and its righteousness: truly successful is the one who purifies it, and truly lost is the one who corrupts and buries it."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الشمس میں اللہ تعالیٰ نے گیارہ قسمیں کھانے کے بعد انسانی کامیابی کا یہ اٹل قانون بیان فرمایا ہے کہ فلاح کا دارومدار تزکیۂ نفس (اپنے اندر کو حسد، تکبر اور خیانت سے پاک کرنے) پر ہے۔ آج کا عملی سبق یہ ہے کہ دوسروں کی خامیوں کا حساب رکھنے کے بجائے روزانہ اپنے دل کی زمین سے ایک برائی نکال کر اخلاص کا پودا لگائیں۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ash-Shams mein Allah Ta'ala ne gyarah qasmein khane ke baad insani kamyabi ka yeh atal qanoon bayan farmaya hai ke falah ka daromadar tazkiya-e-nafs (apne andar ko hasad, takabbur aur khyanat se paak karne) par hai. Aaj ka amli sabaq yeh hai ke doosron ki khamiyon ka hisab rakhne ke bajaye rozana apne dil ki zameen se aik burai nikal kar ikhlas ka poda lagayein.",
      en: "Context & Practical Lesson: Surah Ash-Shams declares after eleven cosmic oaths that human success rests on inner purification ('Tazkiyah')—weeding out malice and pride so sincerity can flourish."
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
    bookRef: "Surah Al-Insan (76:8-9) | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "صرف رضائے الٰہی کے لیے کھانا کھلانا اور بدلے کی توقع نہ رکھنا",
      ro: "Sirf Raza-e-Ilahi Ke Liye Khana Khilana Aur Badlay Ki Tawaqqa Na Rakhna",
      en: "Feeding Others Purely for God's Pleasure Without Expecting Return"
    },
    quote: {
      ur: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا  إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا\n\nترجمہ: اور وہ اللہ کی محبت میں مسکین، یتیم اور قیدی کو کھانا کھلاتے ہیں (اور کہتے ہیں کہ) ہم تمہیں صرف اللہ کی رضا کے لیے کھلاتے ہیں، ہم تم سے نہ کوئی بدلہ چاہتے ہیں اور نہ شکر گزاری۔",
      ro: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا  إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا\n\nTarjuma: Aur woh Allah ki mohabbat mein miskeen, yateem aur qaidi ko khana khilate hain (aur kehte hain ke) hum tumhein sirf Allah ki raza ke liye khilate hain, hum tum se na koi badla chahte hain aur na shukr-guzari.",
      en: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا  إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا\n\nTranslation: And they give food, in spite of their love for it, to the needy, the orphan, and the captive, [saying], 'We feed you only for the countenance of Allah; we wish not from you any reward or gratitude.'"
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الدہر (الانسان) کی یہ آیات نیک بندوں کے اس بلند ترین اخلاق کو بیان کرتی ہیں کہ وہ خود ضرورت اور رغبت ہونے کے باوجود مسکین، یتیم اور بے بس کو کھانا کھلاتے ہیں اور دل میں ذرا بھی یہ طمع نہیں رکھتے کہ سامنے والا ان کا احسان مانے گا۔ آج کا عملی سبق یہ ہے کہ اپنی ہر نیکی کا کھاتہ براہِ راست اللہ کے ساتھ رکھیں؛ جب آپ لوگوں سے تعریف اور شکریے کی امید ختم کر دیتے ہیں تو نہ کبھی آپ کا دل ٹوٹتا ہے اور نہ ہی آپ کے عمل کا اجر ضائع ہوتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Ad-Dahr (Al-Insan) ki yeh aayatein nek bandon ke us buland-tareen akhlaq ko bayan karti hain ke woh khud zaroorat aur raghbat hone ke bawajood miskeen, yateem aur be-bas ko khana khilate hain aur dil mein zara bhi yeh tama nahi rakhte ke samne wala un ka ehsan manega. Aaj ka amli sabaq yeh hai ke apni har neki ka khata barah-e-raast Allah ke sath rakhein; jab aap logon se tareef aur shukriye ki umeed khatam kar dete hain to na kabhi aap ka dil tootta hai aur na hi aap ke amal ka ajr zaya hota hai.",
      en: "Context & Practical Lesson: These verses of Surah Al-Insan honor the righteous who share their cherished food with the needy, orphans, and captives without seeking applause or repayment. Today's moral lesson is to anchor every act of kindness directly with the Creator so your peace of mind and eternal reward remain intact."
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
    bookRef: "Surah Al-An'am (6:116) | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "اکثریت کی اندھی تقلید سے بچ کر حق اور دلیل کا ساتھ دینا",
      ro: "Aksariyat Ki Andhi Taqleed Se Bach Kar Haq Aur Daleel Ka Sath Dena",
      en: "Standing by Truth Instead of Blindly Following the Crowd"
    },
    quote: {
      ur: "وَإِن تُطِعْ أَكْثَرَ مَن فِي الْأَرْضِ يُضِلُّوكَ عَن سَبِيلِ اللَّهِ ۚ إِن يَتَّبِعُونَ إِلَّا الظَّنَّ وَإِنْ هُمْ إِلَّا يَخْرُصُونَ\n\nترجمہ: اور اگر تو زمین پر بسنے والے اکثر لوگوں کے کہنے پر چلے گا تو وہ تجھے اللہ کی راہ سے بھٹکا دیں گے؛ وہ تو محض گمان کے پیچھے چلتے ہیں اور صرف قیاس آرائیاں کرتے ہیں۔",
      ro: "وَإِن تُطِعْ أَكْثَرَ مَن فِي الْأَرْضِ يُضِلُّوكَ عَن سَبِيلِ اللَّهِ ۚ إِن يَتَّبِعُونَ إِلَّا الظَّنَّ وَإِنْ هُمْ إِلَّا يَخْرُصُونَ\n\nTarjuma: Aur agar tu zameen par basne wale aksar logon ke kehne par chalega to woh tujhe Allah ki raah se bhatka denge; woh to mehaz guman ke peechay chalte hain aur sirf qiyas-aaraiyan karte hain.",
      en: "وَإِن تُطِعْ أَكْثَرَ مَن فِي الْأَرْضِ يُضِلُّوكَ عَن سَبِيلِ اللَّهِ ۚ إِن يَتَّبِعُونَ إِلَّا الظَّنَّ وَإِنْ هُمْ إِلَّا يَخْرُصُونَ\n\nTranslation: And if you obey most of those upon the earth, they will mislead you from the way of Allah. They follow nothing but assumption, and they do nothing but falsify."
    },
    tashreeh: {
      ur: "پسِ منظر و تشریح: سورۃ الانعام کی یہ آیت واضح فرماتی ہے کہ حق اور باطل کا معیار لوگوں کی بھیڑ نہیں ہے۔ معاشرے میں اکثر غلط رسم و رواج، کاروباری بددیانتی اور فضول خرچی صرف یہ کہہ کر اپنائی جاتی ہے کہ 'آج کل سب لوگ یہی کر رہے ہیں'۔ آج کا عملی سبق یہ ہے کہ کسی غلط کام کے عام ہو جانے سے وہ درست نہیں بن جاتا؛ باضمیر انسان دیکھا دیکھی چلنے کے بجائے علم، دلیل اور سچائی پر قائم رہتا ہے۔",
      ro: "Pas-e-Manzar o Tashreeh: Surah Al-An'am ki yeh aayat wazeh farmati hai ke haq aur batil ka miyar logon ki bheer nahi hai. Muashray mein aksar ghalat rasm-o-riwaj, karobari bad-diyanati aur fuzool-kharchi sirf yeh keh kar apnai jati hai ke 'aaj kal sab log yehi kar rahe hain'. Aaj ka amli sabaq yeh hai ke kisi ghalat kaam ke aam ho jane se woh durust nahi ban jata; ba-zameer insan dekha-dekhi chalne ke bajaye ilm, daleel aur sachai par qayam rehta hai.",
      en: "Context & Practical Lesson: This verse of Surah Al-An'am warns that truth is never determined by majority vote or social trends. Today's takeaway is that popularity never turns a wrong into a right; a person of integrity evaluates choices by moral truth rather than crowd pressure."
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
    bookRef: "Surah Ash-Shura (42:40) | Makhzan-e-Akhlaq",
    author: {
      ur: "احکامِ خدا (القرآن الحکیم)",
      ro: "Ahkam-e-Khuda (Al-Quran Al-Hakeem)",
      en: "Divine Injunctions (Al-Quran)"
    },
    title: {
      ur: "بدلہ لینے پر قادر ہوتے ہوئے معاف کرنے اور صلح کی فضیلت",
      ro: "Badla Lene Par Qadir Hote Huye Maaf Karne Aur Sulah Ki Fazeelat",
      en: "The Greatness of Choosing Forgiveness and Reconciliation Over Revenge"
    },
    quote: {
      ur: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا ۖ فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ ۚ إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ\n\nترجمہ: اور برائی کا بدلہ اسی کے مثل برائی ہے، پھر جو شخص معاف کر دے اور اصلاح کر لے تو اس کا اجر اللہ کے ذمے ہے؛ بے شک وہ ظالموں کو پسند نہیں کرتا۔",
      ro: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا ۖ فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ ۚ إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ\n\nTarjuma: Aur burai ka badla usi ke misl burai hai, phir jo shakhs maaf kar de aur islah kar le to us ka ajr Allah ke zimmay hai; be-shak Woh zalimon ko pasand nahi karta.",
      en: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا ۖ فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ ۚ إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ\n\nTranslation: The recompense for an injury is an injury equal to it; but whoever pardons and makes reconciliation, their reward rests with Allah. Indeed, He does not love the wrongdoers."
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


const batchMappedQuotes: Quote[] = [
  ...batch1Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 7)),
  ...batch2Quotes.map((q, idx) => quoteItemToQuote(q, idx === 9)), // ma-025 (Hujjat-ul-Wida) featured
  ...batch3Quotes.map((q, idx) => quoteItemToQuote(q, idx === 4 || idx === 12)), // ma-035 (Hazrat Abu Bakr), ma-043 (Hazrat Ali) featured
  ...batch4Quotes.map((q, idx) => quoteItemToQuote(q, idx === 6 || idx === 9)), // ma-052 (Surah Ibrahim), ma-055 (Mother) featured
  ...batch5Quotes.map((q, idx) => quoteItemToQuote(q, idx === 1 || idx === 7)), // ma-062 (Hazrat Umar muhasba), ma-068 (Momin affair) featured
  ...batch6Quotes.map((q, idx) => quoteItemToQuote(q, idx === 2 || idx === 9)), // ma-078 (Inna Ma'al Usri Yusra), ma-085 (Walideen) featured
  ...batch7Quotes.map((q, idx) => quoteItemToQuote(q, idx === 2 || idx === 4)), // ma-093 (Taqwa & Humanity), ma-095 (Muttaqeen & Forgiveness) featured
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
];

const classicAdditionalQuotes: Quote[] = [
{
    id: 'q3',
    slug: 'parosi-ke-huqooq-aur-eman',
    category: 'irshadat-e-nabawi',
    author: 'Irshad-e-Nabawi ﷺ',
    authorUrdu: 'ارشاداتِ نبوی ﷺ',
    authorEnglish: 'Prophetic Wisdom ﷺ',
    authorEra: 'Hadith Sharif',
    authorEraUrdu: 'حدیث شریف',
    authorEraEnglish: 'Prophetic Tradition',
    urdu: 'پڑوسی کو ستانے والا دوزخی ہے اگرچہ تمام رات عبادت کرے اور تمام دن روزہ دار رہے۔',
    roman: 'Parosi ko satane wala dozakhi hai agarchay tamam raat ibadat kare aur tamam din rozay daar rahe.',
    english: 'Whoever torments their neighbor is destined for the Fire, even if they pray throughout the entire night and fast every single day.',
    tashreeh: 'یہ فرمانِ نبوی واضح کرتا ہے کہ محض ظاہری عبادات اس وقت تک بارگاہِ الٰہی میں ثمر آور نہیں ہوتیں جب تک انسان کے ہاتھ اور زبان سے اس کے ہمسائے اور قریبی لوگ محفوظ نہ ہوں۔ اسلام معاشرتی امن کا ضامن ہے، اس لیے جس شخص کا ہمسایہ اس کے شر، غیبت اور تنگ کرنے سے محفوظ نہ ہو اس کا ایمان خطرے میں پڑ جاتا ہے۔ پڑوسی کا حق صرف ایذا رسانی سے بچنا ہی نہیں بلکہ ضرورت کے وقت احسان کرنا بھی ہے۔',
    tashreehRoman: 'Yeh hadith wazeh karti hai ke zahiri ibadat us waqt tak faida nahi deti jab tak insan ke hath aur zabaan se us ke hamsaye mehfooz na hon. Hamsaye ka haq sirf yeh nahi ke usay takleef na di jaye, balkay zaroorat ke waqt us ke sath ehsan aur bhalai karna bhi lazmi hai.',
    tashreehEnglish: 'This prophetic teaching highlights that ritual worship holds little spiritual weight if a person\'s neighbor is subjected to distress, verbal hurt, or arrogance. Social safety and tranquility are core tenets of faith. Protecting neighbors and assisting them in times of vulnerability is a paramount moral obligation.',
    amliSabaq: 'اپنے پڑوسی کے آرام، صفائی اور احترام کا خیال رکھیں اور کبھی کبھی ان کے گھر تحفہ یا کھانا بھیجیں۔',
    amliSabaqRoman: 'Apne hamsaye ke aaram aur safai ka khayal rakhein aur kabhi kabhar khana ya tohfa bhejein.',
    amliSabaqEnglish: 'Be mindful of your neighbor\'s tranquility and privacy, and periodically share food or a kind gift with their household.',
    source: 'مسند احمد و شعب الایمان للبیہقی / مخزنِ اخلاق باب حقوق الجوار',
    sourceRoman: 'Musnad Ahmad & Shu\'ab al-Iman / Makhzan-e-Akhlaq Baab Huqooq-ul-Jiwar',
    sourceEnglish: 'Musnad Ahmad & Shu\'ab al-Iman by Al-Bayhaqi / Makhzan-e-Akhlaq',
    tags: ['Hamsaya', 'Huqooq', 'Ibadat'],
    tagsUrdu: ['ہمسایہ', 'حقوق', 'عبادت'],
    tagsEnglish: ['Neighbors', 'Social Rights', 'Worship'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: true,
  },
  {
    id: 'q4',
    slug: 'sabr-aur-shukr-eman-ke-do-hissay',
    category: 'irshadat-e-nabawi',
    author: 'Irshad-e-Nabawi ﷺ',
    authorUrdu: 'ارشاداتِ نبوی ﷺ',
    authorEnglish: 'Prophetic Wisdom ﷺ',
    authorEra: 'Hadith Sharif',
    authorEraUrdu: 'حدیث شریف',
    authorEraEnglish: 'Prophetic Tradition',
    urdu: 'ایمان دو نصف ہیں: نصف صبر اور نصف شکر۔ صبر ایمان سے ایسا ملا ہوا ہے جیسے سر جسم سے۔',
    roman: 'Eman do nisf (aadhe hissay) hain: nisf sabr aur nisf shukr. Sabr eman se aisa mila hua hai jaise sar jism se.',
    english: 'Faith consists of two equal halves: one half is patience (Sabr) and the other half is gratitude (Shukr). Patience is to faith what the head is to the body.',
    tashreeh: 'انسان کی کل کائنات اور اس کی روزمرہ زندگی دو ہی حالتوں میں گردش کرتی ہے: یا تو نعمت و خوشحالی کا دور ہوتا ہے یا تکلیف و آزمائش کا سامنا۔ جب نعمت ملے تو خود کو تکبر سے بچا کر شکر گزاری کا پیکر بننا اور جب مصیبت آئے تو بے صبری اور شکوہ کرنے کے بجائے اللہ کی رضا پر راضی رہنا ہی مکمل مؤمن کا طرۂ امتیاز ہے۔ جس طرح سر کے بغیر جسم بے کار ہے اسی طرح صبر کے بغیر ایمان قائم نہیں رہ سکتا۔',
    tashreehRoman: 'Insan ki zindagi do halaton ke darmiyan guzarti hai: ya to usay nemat milti hai ya aazmaish aati hai. Nemat par shukr ada karna aur musibat par sabr se kaam lena hi mukammal eman ki pehchan hai.',
    tashreehEnglish: 'Human life continually oscillates between two distinct conditions: seasons of ease and blessings, and seasons of adversity and trial. True faith is perfected when one responds to prosperity with humble gratitude, and confronts difficulty with patient resilience.',
    amliSabaq: 'مشکل گھڑی میں منہ سے شکوہ مت نکالیں اور ہر حال میں الحمدللہ کہنے کی عادت ڈالیں۔',
    amliSabaqRoman: 'Mushkil waqt mein shikwa na karein aur har haal mein Alhamdulillah kahein.',
    amliSabaqEnglish: 'Restrain your tongue from complaint during hardships and cultivate the consistent habit of saying Alhamdulillah in every circumstance.',
    source: 'شعب الایمان للبیہقی / مخزنِ اخلاق باب صبر و شکر',
    sourceRoman: 'Shu\'ab al-Iman / Makhzan-e-Akhlaq Baab Sabr o Shukr',
    sourceEnglish: 'Shu\'ab al-Iman by Al-Bayhaqi / Makhzan-e-Akhlaq Chapter on Patience',
    tags: ['Sabr', 'Shukr', 'Eman'],
    tagsUrdu: ['صبر', 'شکر', 'ایمان'],
    tagsEnglish: ['Patience', 'Gratitude', 'Faith'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: true,
  },
  {
    id: 'q5',
    slug: 'ilm-peghambaron-ki-miras-hai',
    category: 'aqwal-e-sahaba',
    author: 'Hazrat Abu Bakr Siddiq (R.A)',
    authorUrdu: 'سیدنا حضرت ابوبکر صدیقؓ',
    authorEnglish: 'Hazrat Abu Bakr Siddiq (R.A)',
    authorEra: 'Khalifa-e-Awwal',
    authorEraUrdu: 'خلیفۂ اولؓ',
    authorEraEnglish: 'The First Caliph',
    urdu: 'علم پیغمبروں کی میراث ہے اور مال کفار (فرعون و قارون وغیرہ) کی۔ دل مردہ ہے اور اس کی زندگی علم ہے۔',
    roman: 'Ilm Peghambaron ki miras hai aur maal kuffar (Firaun o Qaroon waghaira) ki. Dil murda hai aur is ki zindagi ilm hai.',
    english: 'Knowledge is the sacred legacy of the Prophets, while wealth is the legacy of worldly tyrants like Pharaoh and Korah. The heart is dead, and its very life is knowledge.',
    tashreeh: 'سیدنا حضرت ابوبکر صدیق رضی اللہ عنہ اس بصیرت افروز قول میں حقیقی دولت یعنی نافع علم کی برتری اجاگر فرما رہے ہیں۔ دنیا کی مال و دولت فانی ہے اور انسان کے مرتے ہی چھٹ جاتی ہے، جبکہ انبیاء کرام کی دی ہوئی تعلیمات روح کو پاکیزگی بخشتی ہیں اور دل کو زندہ رکھتی ہیں۔ اگر علم نہ ہو تو انسان حیوانی سطح پر زندگی گزارتا ہے۔',
    tashreehRoman: 'Hazrat Abu Bakr Siddiq (R.A) is qol mein ilm ki fazeelat bayan farma rahe hain. Maal-o-daulat duniya mein hi reh jati hai aur aksar ghaflat ka sabab banti hai, jabkeh nafa dene wala ilm insan ke dil ko zinda rakhta hai aur duniya-o-akhirat mein kamiyabi dilata hai.',
    tashreehEnglish: 'In this profound saying, the first Caliph contrasts ephemeral material riches with enduring beneficial knowledge. Material wealth remains behind upon death and often breeds heedlessness, whereas prophetic knowledge illuminates the intellect and brings everlasting vitality to the human spirit.',
    amliSabaq: 'روزانہ دینی اور اخلاقی علم حاصل کرنے کے لیے کچھ وقت مخصوص کریں اور کتاب بینی کو رواج دیں۔',
    amliSabaqRoman: 'Rozana deeni aur akhlaqi ilm hasil karne ke liye waqt nikalein aur kitabein parhein.',
    amliSabaqEnglish: 'Dedicate time every day to acquiring ethical knowledge and fostering a habit of reflective reading.',
    source: 'طبقات ابن سعد / کنز العمال / مخزنِ اخلاق فضیلتِ علم',
    sourceRoman: 'Tabaqat Ibn Sa\'d / Kanz al-Ummal / Makhzan-e-Akhlaq',
    sourceEnglish: 'Tabaqat Ibn Sa\'d / Kanz al-Ummal / Makhzan-e-Akhlaq',
    tags: ['Ilm', 'Dil', 'Hazrat Abu Bakr'],
    tagsUrdu: ['علم', 'دل', 'حضرت ابوبکرؓ'],
    tagsEnglish: ['Knowledge', 'Soul', 'Hazrat Abu Bakr'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: false,
  },
  {
    id: 'q6',
    slug: 'aaj-ka-kaam-kal-par-na-chhoro',
    category: 'aqwal-e-sahaba',
    author: 'Hazrat Umar Farooq (R.A)',
    authorUrdu: 'سیدنا حضرت عمر فاروقؓ',
    authorEnglish: 'Hazrat Umar Farooq (R.A)',
    authorEra: 'Ameer-ul-Momineen',
    authorEraUrdu: 'امیر المومنینؓ',
    authorEraEnglish: 'Commander of the Faithful',
    urdu: 'قوت فی العمل یہ ہے کہ آج کے کام کل پر نہ اٹھا رکھے جائیں، اور جو شخص اپنا راز پوشیدہ رکھتا ہے وہ اپنی سلامتی کو اپنے قبضے میں رکھتا ہے۔',
    roman: 'Quwwat fil-amal yeh hai ke aaj ke kaam kal par na utha rakhe jayein, aur jo shakhs apna raaz posheeda rakhta hai woh apni salamti ko apne qabze mein rakhta hai.',
    english: 'True strength in execution lies in never postponing today\'s duty until tomorrow; and whoever keeps their counsel preserves their own safety.',
    tashreeh: 'فاروقِ اعظم رضی اللہ عنہ نے اس قول میں انتظامی اور ذاتی کامیابی کا بنیادی فلسفہ سمو دیا ہے۔ وقت کی قدر شناسی اور سستی کا خاتمہ ہی ہر عظیم تحریک اور انسان کا شیوہ ہوتا ہے۔ کل کس نے دیکھا ہے؟ جو کام آج کا ہے اسے آج ہی سرانجام دینا چاہیے تاکہ فرائض کا انبار نہ لگے، نیز اپنے منصوبوں اور رازوں کی حفاظت دانائی کی نشانی ہے۔',
    tashreehRoman: 'Kamiyab zindagi aur behtareen intizam ka usool yehi hai ke waqt ko zaya na kiya jaye. Susti aur taal-matol insan ko peechay dhakel deti hai, jabkeh waqt par faisla aur raazdaari insan ko nuqsan se mehfooz rakhti hai.',
    tashreehEnglish: 'Hazrat Umar (R.A) captures the core discipline of personal and administrative mastery. Procrastination diminishes resolve and burdens the future. Acting decisively in the present and guarding one\'s confidential matters ensures security and sustainable success.',
    amliSabaq: 'اپنے التواء میں پڑے ہوئے اہم کاموں کو ترجیحی بنیاد پر آج ہی نمٹائیں اور زبان کو فضول گوئی سے بچائیں۔',
    amliSabaqRoman: 'Aaj ke zaroori kaam aaj hi mukammal karein aur fazool baaton se bachein.',
    amliSabaqEnglish: 'Tackle your pending essential tasks today and maintain thoughtful discretion in what you disclose.',
    source: 'الطبقات الکبریٰ / تاریخ الخلفاء للسیوطی / مخزنِ اخلاق',
    sourceRoman: 'Al-Tabaqat al-Kubra / Tarikh al-Khulafa / Makhzan-e-Akhlaq',
    sourceEnglish: 'Al-Tabaqat al-Kubra / Tarikh al-Khulafa by Al-Suyuti / Makhzan-e-Akhlaq',
    tags: ['Waqt', 'Mehnat', 'Hazrat Umar'],
    tagsUrdu: ['وقت', 'محنت', 'حضرت عمرؓ'],
    tagsEnglish: ['Time', 'Diligence', 'Hazrat Umar'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: false,
  },
  {
    id: 'q7',
    slug: 'zaban-ki-laghzish-aur-khamoshi',
    category: 'aqwal-e-sahaba',
    author: 'Hazrat Usman Ghani (R.A)',
    authorUrdu: 'سیدنا حضرت عثمان غنیؓ',
    authorEnglish: 'Hazrat Usman Ghani (R.A)',
    authorEra: 'Jame-ul-Quran',
    authorEraUrdu: 'جامع القرآنؓ',
    authorEraEnglish: 'The Third Caliph',
    urdu: 'زبان کی لغزش پاؤں کی لغزش سے بہت زیادہ خطرناک ہے، اور خاموشی غصے کا بہترین علاج ہے۔',
    roman: 'Zaban ki laghzish paon ki laghzish se bohot zyada khatarnaak hai, aur khamoshi gusse ka behtareen ilaj hai.',
    english: 'A slip of the tongue is far more dangerous than a stumble of the foot, and dignified silence is the ultimate antidote to anger.',
    tashreeh: 'حضرت عثمان غنی رضی اللہ عنہ کی حیا اور سنجیدگی اس قول سے عیاں ہے۔ پاؤں پھسلنے سے اگر چوٹ لگ جائے تو دوا اور وقت کے ساتھ مندمل ہو جاتی ہے، مگر زبان سے نکلا ہوا زہریلا تیر کسی کے دل کو ہمیشہ کے لیے زخمی کر دیتا ہے اور بسا اوقات خاندانی و سماجی تباہی کا سبب بنتا ہے۔ غصے کے عالم میں خاموشی اختیار کرنا دانائی کا سب سے مضبوط قلعہ ہے۔',
    tashreehRoman: 'Paon phisalne se jism ko chot lagti hai jo waqt ke sath bhar jati hai, magar zaban se nikla hua kadwa lafz dilon aur rishton ko hamesha ke liye zakhmi kar deta hai. Jab gussa aaye to khamosh ho jana sab se badi aqalmandi hai.',
    tashreehEnglish: 'Physical injuries from a bodily stumble heal with time, but caustic words uttered in anger inflict wounds upon souls and fracture relationships permanently. Practicing measured silence in moments of provocation is a noble sanctuary of wisdom and modesty.',
    amliSabaq: 'جب طیش یا غصہ آئے تو فوراً پانی پی کر خاموش ہو جائیں، جواب دینے میں جلد بازی نہ کریں۔',
    amliSabaqRoman: 'Gusse ke waqt khamosh ho jayein aur fori jawab dene se bachein.',
    amliSabaqEnglish: 'When anger surges, remain quiet, take a deep breath or drink water, and refrain from reacting hastily.',
    source: 'حلیۃ الاولیاء لابی نعیم / مخزنِ اخلاق باب حیا و ضبطِ نفس',
    sourceRoman: 'Hilyat al-Awliya / Makhzan-e-Akhlaq Baab Haya',
    sourceEnglish: 'Hilyat al-Awliya by Abu Nu\'aym / Makhzan-e-Akhlaq',
    tags: ['Zaban', 'Gussa', 'Hazrat Usman'],
    tagsUrdu: ['زبان', 'غصہ', 'حضرت عثمانؓ'],
    tagsEnglish: ['Tongue', 'Anger Control', 'Hazrat Usman'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: false,
  },
  {
    id: 'q8',
    slug: 'ilm-maal-se-behtar-hai-hazrat-ali',
    category: 'aqwal-e-sahaba',
    author: 'Hazrat Ali (R.A)',
    authorUrdu: 'باب العلم سیدنا حضرت علی مرتضیٰؓ',
    authorEnglish: 'Hazrat Ali ibn Abi Talib (R.A)',
    authorEra: 'Ameer-ul-Momineen',
    authorEraUrdu: 'امیر المومنینؓ',
    authorEraEnglish: 'The Gate of Knowledge',
    urdu: 'علم مال سے بہتر ہے، کیونکہ علم تمہاری حفاظت کرتا ہے اور تم مال کی حفاظت کرتے ہو۔',
    roman: 'Ilm maal se behtar hai, kyunkeh ilm tumhari hifazat karta hai aur tum maal ki hifazat karte ho.',
    english: 'Knowledge is far superior to wealth: knowledge safeguards you, whereas you must constantly guard your wealth.',
    tashreeh: 'مولائے کائنات سیدنا علی مرتضیٰ کرم اللہ وجہہ الکریم نے کمیل بن زیاد کو وصیت فرماتے ہوئے یہ لازوال موازنہ کیا۔ مال چوری ہونے کا خطرہ رہتا ہے اور خرچ کرنے سے گھٹتا ہے، جبکہ نفع بخش علم انسان کو ہر مرحلے پر برائی، دھوکے اور گمراہی سے بچاتا ہے اور تقسیم کرنے سے مزید نکھرتا اور بڑھتا ہے۔ مالدار مرنے کے بعد مٹ جاتے ہیں مگر اہلِ علم دنیا کے دلوں میں ہمیشہ زندہ رہتے ہیں۔',
    tashreehRoman: 'Hazrat Ali (R.A) ka yeh mashhoor farman wazeh karta hai ke daulat chori hone ka darr rehta hai aur kharch karne se ghat\'ti hai, jabkeh ilm insan ko har burai aur dhoke se bachata hai aur baantne se mazeed barhta hai.',
    tashreehEnglish: 'In this renowned testament, Hazrat Ali (R.A) illustrates that material wealth diminishes with expenditure and requires perpetual vigilance against loss. Conversely, true knowledge shields its possessor from folly and deceit, expanding and flourishing whenever it is imparted.',
    amliSabaq: 'اپنی دولت کا کچھ حصہ نافع کتب خریدنے اور بچوں کو بہترین تعلیم دلانے میں خرچ کریں۔',
    amliSabaqRoman: 'Apni daulat se taleem aur achi kitabon par sarmayakari karein.',
    amliSabaqEnglish: 'Invest a portion of your resources into beneficial literature and character-building education for the next generation.',
    source: 'نہج البلاغۃ - حکمت نمبر 147 / مخزنِ اخلاق باب تفضیلِ علم',
    sourceRoman: 'Nahj al-Balagha - Wisdom 147 / Makhzan-e-Akhlaq',
    sourceEnglish: 'Nahj al-Balagha - Maxim 147 / Makhzan-e-Akhlaq',
    tags: ['Ilm', 'Hikmat', 'Hazrat Ali'],
    tagsUrdu: ['علم', 'حکمت', 'حضرت علیؓ'],
    tagsEnglish: ['Knowledge', 'Wisdom', 'Hazrat Ali'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: true,
  },
  {
    id: 'q9',
    slug: 'aqalmand-ki-zaban-aqal-ke-peechay',
    category: 'aqwal-e-sahaba',
    author: 'Hazrat Ali (R.A)',
    authorUrdu: 'سیدنا حضرت علی مرتضیٰؓ',
    authorEnglish: 'Hazrat Ali ibn Abi Talib (R.A)',
    authorEra: 'Nahj al-Balagha',
    authorEraUrdu: 'نہج البلاغہ',
    authorEraEnglish: 'Nahj al-Balagha',
    urdu: 'احمق کی عقل اس کی زبان کے پیچھے اور عقلمند کی زبان اس کی عقل کے پیچھے ہوتی ہے۔',
    roman: 'Ahmaq ki aqal us ki zaban ke peechay aur aqalmand ki zaban us ki aqal ke peechay hoti hai.',
    english: 'The tongue of the wise person lies behind their intellect, whereas the intellect of the foolish person is placed behind their tongue.',
    tashreeh: 'عقلمند انسان بولنے سے پہلے سوچتا ہے کہ اس کے کہے ہوئے الفاظ کا کیا نتیجہ نکلے گا، آیا وہ حق ہے یا باطل، کسی کے لیے مفید ہے یا نقصان دہ۔ اس کے برعکس بے وقوف شخص بغیر سوچے سمجھے بول پڑتا ہے اور بعد میں ندامت اٹھاتا پھرتا ہے۔ جب تک بات آپ کے منہ میں ہے آپ اس کے مالک ہیں، اور جب وہ نکل جائے تو وہ آپ کی مالک بن جاتی ہے۔',
    tashreehRoman: 'Dana insan bolne se pehle sochta hai ke us ki baat ka kya asar hoga, jabkeh nadan insan baghair soche bol deta hai aur baad mein sharmindagi uthata hai. Jab tak baat munh mein hai aap us ke malik hain, jab nikal jaye to woh aap ki malik ban jati hai.',
    tashreehEnglish: 'A wise person weighs the consequences, truthfulness, and benefit of their words before speaking. An undisciplined mind blurts out speech impulsively only to suffer regret later. As the proverb holds: while a word remains unspoken, you are its master; once uttered, it masters you.',
    amliSabaq: 'گفتگو سے پہلے دو سیکنڈ رک کر اپنے جملے کی افادیت کا جائزہ لیں۔',
    amliSabaqRoman: 'Bolne se pehle do second ruk kar sochiye ke baat faydemand hai ya nahi.',
    amliSabaqEnglish: 'Pause for two seconds before speaking to verify that your statement is constructive and beneficial.',
    source: 'نہج البلاغۃ - حکمت نمبر 40 / مخزنِ اخلاق باب عقل و شعور',
    sourceRoman: 'Nahj al-Balagha - Wisdom 40 / Makhzan-e-Akhlaq',
    sourceEnglish: 'Nahj al-Balagha - Maxim 40 / Makhzan-e-Akhlaq',
    tags: ['Aqal', 'Guftugu', 'Hazrat Ali'],
    tagsUrdu: ['عقل', 'گفتگو', 'حضرت علیؓ'],
    tagsEnglish: ['Intellect', 'Speech', 'Hazrat Ali'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: false,
  },
  {
    id: 'q10',
    slug: 'naram-jawab-gusse-ko-khatam-karta-hai',
    category: 'ambiya-o-hukama',
    author: 'Hazrat Suleman (A.S)',
    authorUrdu: 'حضرت سلیمان علیہ السلام',
    authorEnglish: 'Prophet Solomon (A.S)',
    authorEra: 'Nabi o Badshah',
    authorEraUrdu: 'نبی و بادشاہ',
    authorEraEnglish: 'Prophet and King',
    urdu: 'ملائم جواب غصہ کو کھو دیتا ہے، مگر کرخت باتیں غضب انگیز ہیں۔ آدمی کی عزت اسی میں ہے کہ جھگڑے سے باز رہے۔',
    roman: 'Mulaim jawab gusse ko kho deta hai, magar karakht baatein ghazab-angez hain. Aadmi ki izzat isi mein hai ke jhagray se baaz rahe.',
    english: 'A gentle answer turns away wrath, but harsh words stir up strife. True nobility belongs to the one who walks away from quarrel.',
    tashreeh: 'آگ کو آگ سے کبھی نہیں بجھایا جا سکتا بلکہ اسے ٹھنڈا کرنے کے لیے پانی کی ضرورت ہوتی ہے۔ جب سامنے والا انسان غصے اور جارحیت کا مظاہرہ کر رہا ہو تو نرم، شائستہ اور باوقار لہجہ اس کے غصے کی تپش کو سیکنڈوں میں ختم کر دیتا ہے۔ بحث و تکرار جیتنا کمال نہیں بلکہ تعلقات کو بچا کر لڑائی ختم کر دینا اصل دانشمندی اور عزت ہے۔',
    tashreehRoman: 'Aag ko aag se nahi balkay pani se bujhaya jata hai. Jab samne wala gusse mein ho to naram lehja ikhtiyar karne se bada se bada jhagra khatam ho jata hai aur insan ka waqar buland rehta hai.',
    tashreehEnglish: 'Fire cannot be extinguished with fire; only cool water dispels flames. When met with hostility, adopting a calm and dignified tone defuses explosive contention. Conquering an argument is cheap, but preserving relationship through gentle restraint reflects genuine honor.',
    amliSabaq: 'کسی کی کڑوی بات پر پلٹ کر کڑوا جواب نہ دیں، مسکرا کر یا خاموش رہ کر ماحول کو خوشگوار بنائیں۔',
    amliSabaqRoman: 'Karakht baat ka jawab narmi se dein aur larai barhane se bachein.',
    amliSabaqEnglish: 'Do not retaliate against bitter remarks with bitterness; respond with grace or dignified silence to restore peace.',
    source: 'امثالِ سلیمان / مخزنِ اخلاق باب حکمت و مدارات',
    sourceRoman: 'Proverbs of Solomon / Makhzan-e-Akhlaq Baab Hikmat',
    sourceEnglish: 'Proverbs of Solomon / Makhzan-e-Akhlaq Chapter on Wisdom',
    tags: ['Narmi', 'Sulook', 'Hazrat Suleman'],
    tagsUrdu: ['نرمی', 'سلوک', 'حضرت سلیمانؑ'],
    tagsEnglish: ['Gentleness', 'Conflict Resolution', 'Solomon'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: false,
  },
  {
    id: 'q11',
    slug: 'luqman-ki-nasihat-takabbur-se-bacho',
    category: 'ambiya-o-hukama',
    author: 'Hakeem Luqman',
    authorUrdu: 'حکیم لقمان (دانا)',
    authorEnglish: 'Luqman the Wise',
    authorEra: 'Ancient Sage',
    authorEraUrdu: 'حکیمِ دوران',
    authorEraEnglish: 'Sage of the Ages',
    urdu: 'لوگوں کے سامنے اپنے رخسار مت پھلا اور زمین پر اتراتے ہوئے مت چل، کیونکہ اللہ کسی اترانے والے اور شیخی خورے کو پسند نہیں کرتا۔',
    roman: 'Logon ke samne apne rukhsaar mat phula aur zameen par itratay hue mat chal, kyunkeh Allah kisi itranay walay aur shekhi-khoray ko pasand nahi karta.',
    english: 'And do not turn your cheek away from people in arrogance, nor walk haughtily upon the earth. Indeed, Allah does not love the self-deluded and boastful.',
    tashreeh: 'حکیم لقمان کی اپنے بیٹے کو نصیحتیں قرآن مجید نے ابد تک کے لیے محفوظ کر دی ہیں۔ تکبر اور گھمنڈ انسان کو حقیر بنا دیتے ہیں۔ جو شخص زمین پر عاجزی و انکساری سے چلتا ہے اور بندگانِ خدا کو عزت دیتا ہے، اللہ تعالیٰ دونوں جہانوں میں اس کے وقار کو بلندی عطا فرماتا ہے۔ عاجزی ہی تمام اخلاقی فضائل کا سنگِ بنیاد ہے۔',
    tashreehRoman: 'Hakeem Luqman ne apne betay ko takabbur se bachne aur tawazoh ikhtiyar karne ki hidayat di. Jo shakhs makhlooq-e-khuda ke sath narmi aur aajzi se paish aata hai, Allah us ki izzat ko buland karta hai.',
    tashreehEnglish: 'The timeless counsel of Luqman preserved in the Quran establishes humility as the cornerstone of character. Arrogance and self-importance demean the human spirit, whereas those who tread the earth with gentleness and treat every soul with respect are elevated by the Creator.',
    amliSabaq: 'ہر کسی کے ساتھ شائستگی اور خاکساری سے پیش آئیں، اپنی دولت یا رتبے پر کبھی فخر نہ کریں۔',
    amliSabaqRoman: 'Har shakhs ke sath aajzi aur shaiyastagi se pesh aayein.',
    amliSabaqEnglish: 'Interact with every individual with unfeigned modesty and never let worldly wealth or status induce vanity.',
    source: 'سورۃ لقمان، آیت 18 / مخزنِ اخلاق باب تواضع و کسرِ نفسی',
    sourceRoman: 'Surah Luqman (31:18) / Makhzan-e-Akhlaq Baab Tawazoh',
    sourceEnglish: 'Surah Luqman (31:18) / Makhzan-e-Akhlaq Chapter on Humility',
    tags: ['Tawazoh', 'Takabbur', 'Hakeem Luqman'],
    tagsUrdu: ['تواضع', 'تکبر', 'حکیم لقمان'],
    tagsEnglish: ['Humility', 'Modesty', 'Luqman'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: true,
  },
  {
    id: 'q12',
    slug: 'behtareen-insan-woh-hai-jo-akhlaq-mein-acha-ho',
    category: 'khasail-e-nabawi',
    author: 'Irshad-e-Nabawi ﷺ',
    authorUrdu: 'رسولِ اکرم حضرت محمد ﷺ',
    authorEnglish: 'Prophet Muhammad ﷺ',
    authorEra: 'Khatam-un-Nabiyyin',
    authorEraUrdu: 'خاتم النبیین ﷺ',
    authorEraEnglish: 'Seal of the Prophets',
    urdu: 'تم میں سے بہترین شخص وہ ہے جس کے اخلاق سب سے اچھے ہوں۔',
    roman: 'Tum mein se behtareen shakhs woh hai jis ke akhlaq sab se achay hon.',
    english: 'The most excellent among you are those who possess the finest and most noble character.',
    tashreeh: 'رسول اللہ ﷺ کی بعثت کا اصل مقصد ہی مکارمِ اخلاق کی تکمیل تھا۔ اسلام محض رسومات کا نام نہیں بلکہ یہ کردار کی پاکیزگی اور انسانیت کے ساتھ اچھے برتاؤ کا نظام ہے۔ جس کا اخلاق جتنا شاندار ہوگا وہ بارگاہِ نبوی میں اتنا ہی محبوب اور قیامت کے دن سب سے قریب مقام پائے گا۔',
    tashreehRoman: 'Rasool Allah ﷺ ne farmaya ke asal fazeelat aur kamiyabi achay akhlaq mein hai. Jis ka kirdar aur guftugu achi hogi wohi Allah aur us ke Rasool ke nazdeek sab se pyara hai.',
    tashreehEnglish: 'The mission of the Prophet Muhammad ﷺ was to perfect noble moral qualities. Faith is not merely passive ritualism, but an active manifestation of pure conduct, generosity, and compassion toward all living beings.',
    amliSabaq: 'اپنے گھر والوں، ماتحتوں اور چھوٹوں کے ساتھ سب سے زیادہ نرمی اور اخلاق کا برتاؤ کریں۔',
    amliSabaqRoman: 'Apne ghar walon aur ma-tehton ke sath khush-ikhlaqi se pesh aayein.',
    amliSabaqEnglish: 'Demonstrate your highest standards of patience and benevolence at home with family and subordinates.',
    source: 'صحیح البخاری، حدیث 3559 / صحیح مسلم / مخزنِ اخلاق باب مکارمِ اخلاق',
    sourceRoman: 'Sahih al-Bukhari (3559) / Sahih Muslim / Makhzan-e-Akhlaq',
    sourceEnglish: 'Sahih al-Bukhari (3559) / Sahih Muslim / Makhzan-e-Akhlaq',
    tags: ['Akhlaq', 'Seerat', 'Behtareen'],
    tagsUrdu: ['اخلاق', 'سیرت', 'بہترین'],
    tagsEnglish: ['Moral Character', 'Seerat', 'Excellence'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: true,
  },
  {
    id: 'q13',
    slug: 'rizq-aur-hasad-ki-aag',
    category: 'sabaq-aamoz-waqiat',
    author: 'Hazrat Hasan Basri (R.A)',
    authorUrdu: 'امام حسن بصری رحمۃ اللہ علیہ',
    authorEnglish: 'Imam Hasan al-Basri',
    authorEra: 'Tabi-e-Kabeer',
    authorEraUrdu: 'تابعی کبیرؒ',
    authorEraEnglish: 'Eminent Early Scholar',
    urdu: 'حسد سے بچو! کیونکہ حسد نیکیوں کو اس طرح کھا جاتا ہے جیسے آگ سوکھی لکڑیوں کو نگل جاتی ہے۔',
    roman: 'Hasad se bacho! Kyunkeh hasad nekiyon ko is tarah khaa jata hai jaise aag sookhi lakriyon ko nigal jati hai.',
    english: 'Beware of jealousy and envy! For envy devours good deeds just as consuming fire devours dry wood.',
    tashreeh: 'حسد ایک ایسا باطنی روگ ہے جو انسان کی روحانی زندگی کو جلا کر راکھ کر دیتا ہے۔ حاسد درحقیقت اللہ کی تقسیم پر اعتراض کرتا ہے کہ فلاں کو یہ نعمت کیوں دی گئی۔ اس باطنی جلن کی وجہ سے انسان کی برسوں کی کی گئی نیکیاں اور عبادات برباد ہو جاتی ہیں اور وہ دنیا میں بھی ہمیشہ بے چین رہتا ہے۔',
    tashreehRoman: 'Hasad dil ki aisi jalan hai jo nekiyon ko barbaad kar deti hai. Dosron ki taraqqi par khush hona aur Allah se barkat ki dua mangna hi qalb ko sukoon deta hai.',
    tashreehEnglish: 'Envy is an internal poison that burns up spiritual peace. The envious person inwardly protests the Creator\'s distribution of provisions. This malice consumes years of good actions and keeps the heart perpetually agitated.',
    amliSabaq: 'جب کسی کو کامیابی یا نعمت ملے تو دل سے "ماشاءاللہ تبارک اللہ" کہیں اور ان کے لیے برکت کی دعا مانگیں۔',
    amliSabaqRoman: 'Jab kisi ko nemat mile to Mashallah kahein aur barkat ki dua karein.',
    amliSabaqEnglish: 'When you witness someone blessed with fortune or success, recite "Masha\'Allah" and pray sincerely for their continued increase.',
    source: 'سنن ابی داؤد / احیاء علوم الدین للغزالی / مخزنِ اخلاق',
    sourceRoman: 'Sunan Abi Dawud / Ihya Ulum al-Din / Makhzan-e-Akhlaq',
    sourceEnglish: 'Sunan Abi Dawud / Ihya Ulum al-Din by Al-Ghazali / Makhzan-e-Akhlaq',
    tags: ['Hasad', 'Neki', 'Hasan Basri'],
    tagsUrdu: ['حسد', 'نیکی', 'حسن بصریؒ'],
    tagsEnglish: ['Envy', 'Spiritual Purity', 'Hasan al-Basri'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: false,
  },
  {
    id: 'q14',
    slug: 'sachai-aur-jhoot-ki-tabahkari',
    category: 'ahkam-e-khuda',
    author: 'Ahkam-e-Khuda (Al-Quran)',
    authorUrdu: 'احکامِ خدا (القرآن الکریم)',
    authorEnglish: 'Divine Commandment (The Holy Quran)',
    authorEra: 'Surah At-Tawbah (9:119)',
    authorEraUrdu: 'سورۃ التوبہ (۹:۱۱۹)',
    authorEraEnglish: 'Surah At-Tawbah (9:119)',
    urdu: 'اے ایمان والو! اللہ سے ڈرو اور سچے لوگوں کے ساتھی بن جاؤ۔',
    roman: 'Aye eman walo! Allah se daro aur sachay logon ke saathi ban jao.',
    english: 'O you who have attained faith! Be conscious of Allah and remain firmly among those who are truthful.',
    tashreeh: 'سچائی انسان کو نجات دلاتی ہے جبکہ جھوٹ وقتی فائدے کے بعد ذلت و ہلاکت کا گڑھا کھود دیتا ہے۔ اللہ تعالیٰ نے مؤمنین کو نہ صرف خود سچا رہنے کا حکم دیا بلکہ سچے اور راست باز لوگوں کی صحبت اختیار کرنے کی تلقین فرمائی، کیونکہ صحبت کا اثر انسان کی سوچ اور کردار پر گہرا پڑتا ہے۔',
    tashreehRoman: 'Sachai insan ko kamiyabi aur izzat deti hai jabkeh jhoot zillat ka sabab banta hai. Allah ne hukam diya ke sachai par qayam raho aur sachay logon ke sath raho.',
    tashreehEnglish: 'Truthfulness delivers lasting peace and honor, while falsehood breeds deceit and ruin. The divine injunction not only commands honesty in one\'s own speech, but instructs believers to keep fellowship with truthful companions.',
    amliSabaq: 'چاہے کتنا ہی نقصان کا اندیشہ کیوں نہ ہو، کبھی جھوٹ کا سہارا نہ لیں اور ہمیشہ باکردار لوگوں کے ساتھ اٹھیں بیٹھیں۔',
    amliSabaqRoman: 'Chahay kitna hi darr ho, kabhi jhoot na bolein aur sachay logon ka sath dein.',
    amliSabaqEnglish: 'Never resort to deceit even when facing perceived loss; cling to truth and seek the company of upright souls.',
    source: 'القرآن الکریم - سورۃ التوبہ، آیت 119 / مخزنِ اخلاق',
    sourceRoman: 'Al-Quran - Surah At-Tawbah (9:119) / Makhzan-e-Akhlaq',
    sourceEnglish: 'The Holy Quran - Surah At-Tawbah (9:119) / Makhzan-e-Akhlaq',
    tags: ['Sach', 'Taqwa', 'Diyanat'],
    tagsUrdu: ['سچ', 'تقویٰ', 'دیانت'],
    tagsEnglish: ['Truthfulness', 'Integrity', 'Piety'],
    bookSlug: 'makhzan-e-akhlaq',
    featured: false,
  }

];

export const quotes: Quote[] = [
  ...batchMappedQuotes,
  ...classicAdditionalQuotes.filter(
    (cq) => !batchMappedQuotes.some((bq) => bq.slug === cq.slug)
  ),
];

export function getQuoteBySlug(slug: string): Quote | undefined {
  return quotes.find((q) => q.slug === slug);
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
