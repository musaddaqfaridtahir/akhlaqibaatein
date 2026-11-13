import { Language, Quote } from './types';
import { quotes } from './quotes';

export interface CollectionFaq {
  questionUrdu: string;
  questionRoman: string;
  questionEnglish: string;
  answerUrdu: string;
  answerRoman: string;
  answerEnglish: string;
}

export interface SeoCollection {
  slug: string;
  badgeUrdu: string;
  badgeRoman: string;
  badgeEnglish: string;
  titleUrdu: string;
  titleRoman: string;
  titleEnglish: string;
  metaTitle: string;
  metaDescription: string;
  introUrdu: string;
  introRoman: string;
  introEnglish: string;
  keywords: string[];
  matcher: (quote: Quote) => boolean;
  faqs: CollectionFaq[];
}

function buildHaystack(q: Quote): string {
  return [
    q.category,
    q.urdu,
    q.roman,
    q.english,
    q.tashreeh,
    q.tashreehRoman,
    q.tashreehEnglish,
    q.title?.ur || '',
    q.title?.ro || '',
    q.title?.en || '',
    q.tags.join(' '),
    (q.tagsUrdu || []).join(' '),
    (q.tagsEnglish || []).join(' '),
  ]
    .join(' ')
    .toLowerCase();
}

function matchesAny(haystack: string, terms: string[]): boolean {
  return terms.some((t) => haystack.includes(t.toLowerCase()));
}

export const seoCollections: SeoCollection[] = [
  {
    slug: 'jumma-mubarak',
    badgeUrdu: 'خصوصی ہفتہ وار مجموعہ • جمعہ مبارک',
    badgeRoman: 'Khas Haftawar Collection • Jumma Mubarak',
    badgeEnglish: 'Weekly Spiritual Series • Blessed Friday',
    titleUrdu: 'جمعہ مبارک اقوال، دعائیں اور واٹس ایپ اسٹیٹس',
    titleRoman: 'Jumma Mubarak Aqwal, Duain aur WhatsApp Status',
    titleEnglish: 'Jumma Mubarak Quotes, Hadith & Blessed Friday Reflections',
    metaTitle: 'جمعہ مبارک اقوال و اسٹیٹس | Jumma Mubarak Quotes & Hadith',
    metaDescription:
      'Authentic Jumma Mubarak Islamic quotes, Friday Hadith reflections, Durood & dua status images in Urdu, Roman Urdu, and English from AkhlaqiBaatein.com.',
    introUrdu:
      'جمعہ کا مبارک دن ایمان کی تازگی، درودِ پاک کی کثرت، توبہ و استغفار اور دلوں کی صفائی کا بہترین موقع ہے۔ ذیل میں جمعہ، عبادت، دعا، درودِ پاک اور حسنِ اخلاق پر مشتمل مستند ارشاداتِ نبوی ﷺ، قرآنی آیات اور کلاسیکی اقوال پیش کیے جا رہے ہیں جنہیں آپ ایک کلک میں واٹس ایپ اسٹیٹس بنا سکتے ہیں۔',
    introRoman:
      'Jumma ka mubarak din iman ki tazgi, Durood Sharif ki kasrat, dua, aur dilon ki safai ka sab se behtareen mauqa hai. Is collection mein Jumma, namaz, dua, tawakkul aur husn-e-akhlaq par mabni mustanad ahadith aur aqwal shamil hain jinhein aap WhatsApp status ke taur par download aur share kar sakte hain.',
    introEnglish:
      'Friday (Al-Jumuah) is the crown of the week—a time for prayer, abundant salawat upon the Prophet ﷺ, sincere supplication, and renewing our character toward others. Explore authentic verses, prophetic traditions, and classic reflections curated for your Friday contemplation and status sharing.',
    keywords: [
      'Jumma Mubarak quotes Urdu',
      'Jumma Mubarak status',
      'Friday Islamic quotes',
      'جمعہ مبارک اسٹیٹس',
      'جمعہ مبارک اقوال',
      'Hadith about Friday',
    ],
    matcher: (q) =>
      matchesAny(buildHaystack(q), [
        'جمعہ',
        'jumma',
        'jumuah',
        'friday',
        'درود',
        'durood',
        'نعت',
        'naat',
        'دعا',
        'dua',
        'نماز',
        'prayer',
        'ذکر',
        'dhikr',
        'استغفار',
      ]),
    faqs: [
      {
        questionUrdu: 'جمعہ کے دن کن اعمال اور اخلاق پر خاص توجہ دینی چاہیے؟',
        questionRoman: 'Jumma ke din kin aamaal aur akhlaq par khas tawajjah deni chahiye?',
        questionEnglish: 'Which deeds and virtues are especially emphasized on Friday (Jumuah)?',
        answerUrdu:
          'جمعہ کے دن کثرتِ درودِ پاک، غسل و پاکیزگی، سورۃ الکہف کی تلاوت، قبولیتِ دعا کی گھڑی میں التجا، اور لوگوں سے درگزر و صلہ رحمی کی خاص تاکید کی گئی ہے۔',
        answerRoman:
          'Jumma ke din kasrat se Durood Sharif, ghusl o safai, Surah Al-Kahf ki tilawat, duaon ka ehtimam, aur logon se darguzar o husn-e-sulook ki khas takeed aayi hai.',
        answerEnglish:
          'Islamic tradition highlights sending abundant blessings upon the Prophet ﷺ, reciting Surah Al-Kahf, sincere supplication during the hour of acceptance, cleanliness, and repairing ties of kinship and goodwill.',
      },
      {
        questionUrdu: 'کیا جمعہ مبارک کے واٹس ایپ اسٹیٹس تصاویر مفت ڈاؤن لوڈ ہو سکتی ہیں؟',
        questionRoman: 'Kya Jumma Mubarak ke WhatsApp status images free download ho sakti hain?',
        questionEnglish: 'Can I download these Jumma Mubarak quote cards for WhatsApp Status?',
        answerUrdu:
          'جی ہاں! ہر قول پر موجود “اسٹیٹس تصویر ڈاؤن لوڈ کریں” بٹن کے ذریعے آپ اردو، رومن اردو یا انگلش میں ایچ ڈی کارڈ فوری حاصل کر سکتے ہیں۔',
        answerRoman:
          'Jee haan! Har qol par mojood Download Status Image button se aap Urdu, Roman Urdu ya English mein HD card foran download kar sakte hain.',
        answerEnglish:
          'Yes. Every quote card includes an instant Status Image Download button supporting Square (1080×1080), Social Post (4:5), and full WhatsApp Story (9:16) formats.',
      },
    ],
  },
  {
    slug: 'sabr-o-shukr',
    badgeUrdu: 'باطنی اطمینان و استقامت • صبر و شکر',
    badgeRoman: 'Roohani Sukoon o Sabat • Sabr o Shukr',
    badgeEnglish: 'Inner Peace & Resilience • Patience & Gratitude',
    titleUrdu: 'صبر، شکر اور ذہنی سکون کے سنہرے اسلامی اقوال',
    titleRoman: 'Sabr, Shukr aur Zehni Sukoon ke Sunehre Islami Aqwal',
    titleEnglish: 'Patience, Gratitude & Peace of Mind in Islam',
    metaTitle: 'صبر، شکر اور ذہنی سکون | Patience & Peace of Mind Quotes',
    metaDescription:
      'Healing Islamic quotes on Sabr (patience), Shukr (gratitude), Tawakkul, and emotional peace of mind in Urdu, Roman Urdu, and English with full explanation.',
    introUrdu:
      'مشکلات، آزمائشوں اور ذہنی دباؤ کے دور میں قرآن و سنت ہمیں صبر، شکر اور توکل کا مضبوط سہارا عطا کرتے ہیں۔ یہ خصوصی مجموعہ دل کو اطمینان بخشنے والے مستند فرمودات، قرآنی تسلیوں اور علمائے سلف کی حکمت بھری نصیحتوں پر مشتمل ہے۔',
    introRoman:
      'Mushkilat, aazmaishon aur zehni dabao ke waqt Quran o Sunnat hamein sabr, shukr aur Allah par bharosay ka mazboot sahara dete hain. Is khusoosi collection mein dil ko sukoon dene wale mustanad aqwal aur un ki mukammal tashreeh shaamil hai.',
    introEnglish:
      'In moments of hardship, uncertainty, and emotional stress, the Quran and Prophetic wisdom anchor the heart through patience (Sabr), gratitude (Shukr), and trust in Allah (Tawakkul). Discover verified quotes and actionable reflections designed to nurture inner calm and spiritual resilience.',
    keywords: [
      'Sabr quotes in Urdu',
      'Shukr Islamic quotes',
      'Patience and gratitude Islam',
      'ذہنی سکون اقوال',
      'صبر اور شکر احادیث',
      'Peace of mind in Islam',
    ],
    matcher: (q) =>
      matchesAny(buildHaystack(q), [
        'صبر',
        'شکر',
        'توکل',
        'سکون',
        'اطمینان',
        'sabr',
        'shukr',
        'tawakkul',
        'sukoon',
        'patience',
        'gratitude',
        'thankful',
        'peace',
        'contentment',
        'قناعت',
        'غم',
      ]),
    faqs: [
      {
        questionUrdu: 'اسلام میں حقیقی صبر اور شکر کی پہچان کیا ہے؟',
        questionRoman: 'Islam mein haqeeqi sabr aur shukr ki pehchan kya hai?',
        questionEnglish: 'How do patience (Sabr) and gratitude (Shukr) complement each other in Islam?',
        answerUrdu:
          'حقیقی صبر مصیبت کے پہلے جھٹکے پر زبان و دل کو قابو میں رکھ کر اللہ کی رضا پر راضی رہنے کا نام ہے، جبکہ شکر نعمتوں کو اللہ کی عطا مان کر انہیں نیکی میں خرچ کرنا ہے۔',
        answerRoman:
          'Haqeeqi sabr musibat ke waqt shikwa chhor kar Allah par bharosa rakhna hai, aur shukr nematon ki qadar kar ke unhein bhalai mein istemal karna hai.',
        answerEnglish:
          'True Sabr means steadying the heart at the first moment of trial without despair, while Shukr means recognizing every blessing as a gift from Allah and using it responsibly in goodness.',
      },
      {
        questionUrdu: 'ذہنی بے چینی اور مایوسی دور کرنے کے لیے قرآن و حدیث کیا رہنمائی دیتے ہیں؟',
        questionRoman: 'Zehni bechaini aur mayousi door karne ke liye Quran o Hadith kya kehte hain?',
        questionEnglish: 'How do Quranic teachings relieve anxiety and hopelessness?',
        answerUrdu:
          'ذکرِ الٰہی، ہر تنگی کے ساتھ آسانی کا قرآنی وعدہ، قناعت اور اللہ کی رحمت سے ناامید نہ ہونا دل کے سکون کی بنیاد قرار دیے گئے ہیں۔',
        answerRoman:
          'Zikr-e-Ilahi, har mushkil ke sath aasani ka Qurani waada, qanaat aur Allah ki rehmat par yaqeen dil ke sukoon ki buniyad hain.',
        answerEnglish:
          'The Quran promises ease alongside every hardship, teaches believers never to despair of Divine mercy, and connects lasting serenity of heart directly to remembrance of Allah and contentment.',
      },
    ],
  },
  {
    slug: 'rizq-aur-barkat',
    badgeUrdu: 'حلال روزی، انفاق اور خیر و برکت',
    badgeRoman: 'Halal Rozi, Infaq aur Barkat • Nabi Kareem ﷺ ke Nuskhe',
    badgeEnglish: 'Lawful Provision, Generosity & Barakah',
    titleUrdu: 'رزق میں برکت اور حلال کمائی کے نبوی نسخے',
    titleRoman: 'Rizq Mein Barkat aur Halal Kamai ke Nabawi Nuskhe',
    titleEnglish: 'Prophetic Secrets for Rizq, Lawful Sustenance & Barakah',
    metaTitle: 'رزق میں برکت کے نبوی نسخے | Hadith on Rizq & Barakah',
    metaDescription:
      'Authentic Hadith and Quranic guidance on Halal Rizq (lawful earnings), charity, honesty in trade, and keys to Barakah in Urdu, Roman Urdu, and English.',
    introUrdu:
      'رزق میں وسعت اور برکت کا تعلق صرف ظاہری اسباب سے نہیں بلکہ سچائی، امانت داری، حلال کمائی، صلہ رحمی اور اللہ کی راہ میں خرچ کرنے سے ہے۔ ذیل میں رزقِ حلال، محنت کی عظمت اور برکت کے نبوی اصولوں پر مبنی مستند احادیث و اقوال جمع کیے گئے ہیں۔',
    introRoman:
      'Rizq mein barkat aur wusat ka raaz sachai, amanat-dari, halal mehnat, sila-rehmi aur Allah ki raah mein kharch karne mein posheeda hai. Is collection mein halal kamai aur barkat ke nabawi usoolon par mabni mustanad ahadith aur aqwal parhein.',
    introEnglish:
      'True abundance (Barakah) in livelihood flows from integrity, honest labor, charity (Sadaqah), maintaining family ties, and trust in the Sustainer. Study these authenticated traditions on ethical business, lawful sustenance, and spiritual keys to lasting blessing.',
    keywords: [
      'Rizq mein barkat Hadith',
      'Halal earning Islam quotes',
      'Barakah in wealth',
      'رزق میں برکت احادیث',
      'حلال رزق اقوال',
      'Hadith on Rizq and charity',
    ],
    matcher: (q) =>
      matchesAny(buildHaystack(q), [
        'رزق',
        'حلال',
        'برکت',
        'صدقہ',
        'انفاق',
        'مزدور',
        'تجارت',
        'مال',
        'خرچ',
        'rizq',
        'barakah',
        'barkat',
        'halal',
        'charity',
        'sadaqah',
        'wealth',
        'earn',
        'provision',
        'trade',
      ]),
    faqs: [
      {
        questionUrdu: 'احادیثِ مبارکہ کے مطابق رزق میں برکت بڑھانے کے اہم اسباب کیا ہیں؟',
        questionRoman: 'Ahadith ke mutabiq rizq mein barkat badhane ke ahem asbab kya hain?',
        questionEnglish: 'According to Hadith, what actions increase Barakah (blessing) in livelihood?',
        answerUrdu:
          'خرید و فروخت میں سچائی اور عیب نہ چھپانا، اپنے ہاتھوں کی حلال کمائی پر قناعت، صلہ رحمی (رشتہ داروں سے اچھا سلوک)، مستحقین پر صدقہ و خیرات، اور شکر گزاری رزق میں برکت کے بڑے ذرائع ہیں۔',
        answerRoman:
          'Tijarat mein sachai aur amanat, apni mehnat ki halal kamai, sila-rehmi, mustahiq logon par sadqah, aur shukr guzari rizq mein barkat badhate hain.',
        answerEnglish:
          'Honesty and transparency in trade, earning through one’s own lawful effort, nurturing family bonds (silat-ur-rahim), charitable giving, and gratitude are repeatedly cited in prophetic traditions as keys to Barakah.',
      },
      {
        questionUrdu: 'کیا صدقہ دینے سے مال کم ہوتا ہے؟',
        questionRoman: 'Kya sadqah dene se maal kam hota hai?',
        questionEnglish: 'Does giving charity (Sadaqah) reduce a person’s wealth?',
        answerUrdu:
          'صحیح مسلم کی مستند حدیثِ مبارکہ کے مطابق صدقہ دینے سے مال ہرگز کم نہیں ہوتا بلکہ اللہ تعالیٰ اس میں برکت اور اخروی و دنیاوی وسعت عطا فرماتا ہے۔',
        answerRoman:
          'Sahih Muslim ki mustanad hadith ke mutabiq sadqah dene se maal kam nahi hota balkay Allah us mein barkat aur izzat ata farmata hai.',
        answerEnglish:
          'No. As narrated in Sahih Muslim, charity never diminishes wealth; rather, Allah replaces it with spiritual growth, protection, and unforeseen blessing.',
      },
    ],
  },
  {
    slug: 'walidain-ke-huqooq',
    badgeUrdu: 'خاندانی اقدار و احترام • والدین و اولاد',
    badgeRoman: 'Khandani Iqdar o Ehtiram • Walidain ke Huqooq',
    badgeEnglish: 'Family Ethics & Compassion • Parents & Children',
    titleUrdu: 'والدین، اولاد اور خاندانی رشتوں کے حقوق',
    titleRoman: 'Walidain, Aulad aur Khandani Rishton ke Huqooq',
    titleEnglish: 'Rights of Parents & Children in Islamic Ethics',
    metaTitle: 'والدین اور اولاد کے حقوق | Rights of Parents in Islam',
    metaDescription:
      'Quranic commands and Prophetic Hadith on honoring parents, serving mother and father, raising righteous children, and family compassion in Urdu, Roman Urdu, and English.',
    introUrdu:
      'توحید کے بعد قرآنِ کریم نے سب سے زیادہ تاکید والدین کے ساتھ حسنِ سلوک اور نرمی کی فرمائی ہے، اور اسی کے ساتھ اولاد کی بہترین اخلاقی تربیت کو بھی والدین کی ذمہ داری قرار دیا ہے۔ اس صفحے پر والدین کی خدمت، ان کے احترام اور خاندانی محبت کے سنہرے اصول ملاحظہ کریں۔',
    introRoman:
      'Tauheed ke baad Quran-e-Kareem ne sab se zyada takeed walidain ke sath husn-e-sulook aur narmi ki farmai hai, aur aulad ki behtareen tarbiyat ko bhi ahem farz bataya hai. Is collection mein walidain ke huqooq aur khandani mohabbat par mustanad ayaat o ahadith shaamil hain.',
    introEnglish:
      'Immediately after devotion to the Creator, the Quran commands utmost kindness, humility, and care toward one’s parents—especially in their old age—while guiding parents to raise their children with compassion and ethical wisdom. Explore verified verses and traditions on family reverence.',
    keywords: [
      'Walidain ke huqooq Urdu',
      'Rights of parents in Islam',
      'Ma baap ki khidmat Hadith',
      'والدین کے حقوق قرآن و حدیث',
      'اولاد کی تربیت اقوال',
      'Honoring parents Islamic quotes',
    ],
    matcher: (q) =>
      matchesAny(buildHaystack(q), [
        'والدین',
        'ماں',
        'باپ',
        'اولاد',
        'بچوں',
        'رشت',
        'صلہ رحمی',
        'خاندان',
        'بیٹی',
        'walidain',
        'parent',
        'mother',
        'father',
        'child',
        'son',
        'daughter',
        'kinship',
        'family',
        'upbringing',
      ]),
    faqs: [
      {
        questionUrdu: 'قرآنِ کریم میں والدین سے گفتگو اور برتاؤ کا کیا ادب سکھایا گیا ہے؟',
        questionRoman: 'Quran mein walidain se guftugu aur bartao ka kya adab sikhaya gaya hai?',
        questionEnglish: 'What etiquette does the Quran teach regarding speaking to parents?',
        answerUrdu:
          'سورۃ بنی اسرائیل میں حکم دیا گیا ہے کہ والدین کے آگے “اُف” تک نہ کہو، انہیں نہ جھڑکو، ان سے ادب و احترام کے ساتھ نرم بات کرو اور ان کے لیے رحمت کی دعا کرتے رہو۔',
        answerRoman:
          'Surah Al-Isra mein hukm hai ke walidain ko uff tak na kaho, unhein na jhirko, un se adab aur narmi se baat karo aur un ke liye rehmat ki dua karo.',
        answerEnglish:
          'Surah Al-Isra prohibits even a word of exasperation ("uff"), commands speaking to parents with noble gentleness and humility, and instructs children to pray continually for mercy upon them.',
      },
      {
        questionUrdu: 'اولاد کے لیے والدین کا سب سے قیمتی تحفہ کیا ہے؟',
        questionRoman: 'Aulad ke liye walidain ka sab se qeemti tohfa kya hai?',
        questionEnglish: 'What is the finest legacy parents can give their children according to Hadith?',
        answerUrdu:
          'جامع ترمذی کی روایت کے مطابق کسی باپ کا اپنی اولاد کو اس سے بہتر کوئی عطیہ نہیں کہ وہ اسے عمدہ اخلاق اور بہترین ادب و تربیت سکھائے۔',
        answerRoman:
          'Jame Tirmidhi ki riwayat ke mutabiq kisi baap ka apni aulad ko is se behtar koi tohfa nahi ke woh unhein umdah adab aur behtareen akhlaq sikhaye.',
        answerEnglish:
          'As recorded in Jami at-Tirmidhi, no parent can give their child a finer gift than upright character and sound ethical upbringing.',
      },
    ],
  },
];

export type SerializableSeoCollection = Omit<SeoCollection, 'matcher'>;

export function getCollectionBySlug(slug: string): SeoCollection | undefined {
  return seoCollections.find((c) => c.slug === slug);
}

export function toSerializableCollection(col: SeoCollection): SerializableSeoCollection {
  return {
    slug: col.slug,
    badgeUrdu: col.badgeUrdu,
    badgeRoman: col.badgeRoman,
    badgeEnglish: col.badgeEnglish,
    titleUrdu: col.titleUrdu,
    titleRoman: col.titleRoman,
    titleEnglish: col.titleEnglish,
    metaTitle: col.metaTitle,
    metaDescription: col.metaDescription,
    introUrdu: col.introUrdu,
    introRoman: col.introRoman,
    introEnglish: col.introEnglish,
    keywords: col.keywords,
    faqs: col.faqs,
  };
}

export function getQuotesForCollection(collection: SeoCollection): Quote[] {
  return quotes.filter(collection.matcher);
}

export function getCollectionTitle(col: SerializableSeoCollection, lang: Language): string {
  if (lang === 'ur') return col.titleUrdu;
  if (lang === 'en') return col.titleEnglish;
  return col.titleRoman;
}

export function getCollectionBadge(col: SerializableSeoCollection, lang: Language): string {
  if (lang === 'ur') return col.badgeUrdu;
  if (lang === 'en') return col.badgeEnglish;
  return col.badgeRoman;
}

export function getCollectionIntro(col: SerializableSeoCollection, lang: Language): string {
  if (lang === 'ur') return col.introUrdu;
  if (lang === 'en') return col.introEnglish;
  return col.introRoman;
}
