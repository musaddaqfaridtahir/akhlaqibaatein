import { Language } from './types';

export interface TranslationDictionary {
  siteName: string;
  tagline: string;
  home: string;
  categories: string;
  chahalHadith: string;
  articles: string;
  books: string;
  about: string;
  searchPlaceholder: string;
  copyBtn: string;
  copiedBtn: string;
  downloadBtn: string;
  shareBtn: string;
  tashreehHeading: string;
  amliSabaqHeading: string;
  sourceHeading: string;
  readMore: string;
  showLess: string;
  fullPage: string;
  quoteOfTheDay: string;
  selectedQuote: string;
  availableQuotes: string;
  itemsFound: string;
  resetFilters: string;
  noResultsTitle: string;
  noResultsDesc: string;
  topicsHeading: string;
  allPill: string;
  memorized: string;
  markMemorized: string;
  memorizationProgress: string;
  arbaeenTitle: string;
  arbaeenSubtitle: string;
  searchHadithPlaceholder: string;
  featuredArticles: string;
  featuredArticlesDesc: string;
  allArticlesLink: string;
  readArticle: string;
  bookShowcase: string;
  bookShowcaseTag: string;
  viewAllChapters: string;
  relatedQuotes: string;
  faqHeading: string;
  faqMeaningQuestion: string;
  faqMeaningAnswer: string;
  faqSourceQuestion: string;
  faqSourceAnswer: string;
  footerMission: string;
  footerAbout: string;
  portalsHeading: string;
  legalHeading: string;
  privacyPolicy: string;
  terms: string;
  disclaimer: string;
  contact: string;
  rightsReserved: string;
  footerQuote: string;
  tableOfContents: string;
  keyTakeaways: string;
  publishedOn: string;
  backToHome: string;
  statusCardHeader: string;
  statusCardResolution: string;
  statusCardDownloading: string;
}

export const uiTranslations: Record<Language, TranslationDictionary> = {
  ur: {
    siteName: 'اخلاقی باتیں',
    tagline: 'اسلامی حکمت، اقوالِ زریں و احادیث',
    home: 'سرورق',
    categories: 'مضامین',
    chahalHadith: 'چہل احادیث',
    articles: 'تحقیقی مضامین',
    books: 'کتب خانہ',
    about: 'ہمارا مشن',
    searchPlaceholder: 'اقوال، احادیث یا موضوع تلاش کریں...',
    copyBtn: 'تحریر کاپی کریں',
    copiedBtn: 'کاپی ہو گیا',
    downloadBtn: 'اسٹیٹس تصویر ڈاؤن لوڈ کریں',
    shareBtn: 'واٹس ایپ پر شیئر کریں',
    tashreehHeading: 'تشریح اور عملی سبق:',
    amliSabaqHeading: 'عملی سبق:',
    sourceHeading: 'مستند حوالہ:',
    readMore: 'تفصیل پڑھیں',
    showLess: 'مختصر دیکھیں',
    fullPage: 'مکمل صفحہ',
    quoteOfTheDay: 'آج کی نصیحت',
    selectedQuote: 'منتخب قول',
    availableQuotes: 'دستیاب اقوال و ارشادات:',
    itemsFound: 'اقوال دستیاب ہیں',
    resetFilters: 'تمام فلٹرز ختم کریں',
    noResultsTitle: 'کوئی قول یا ارشاد نہیں ملا',
    noResultsDesc: 'آپ کے تلاش کردہ الفاظ سے ملتا جلتا کوئی ریکارڈ نہیں ملا۔ برائے مہربانی دیگر الفاظ منتخب کریں۔',
    topicsHeading: 'موضوعات:',
    allPill: 'تمام اقوال',
    memorized: 'حفظ مکمل',
    markMemorized: 'حفظ نشان زد کریں',
    memorizationProgress: 'آپ کی حفظ کی پیش رفت:',
    arbaeenTitle: 'چَہل حدیث: چالیس سنہری احادیثِ مبارکہ',
    arbaeenSubtitle: 'مختصر، جامع اور مستند نبوی ارشادات جو ہر مسلمان کے لیے حفظ کرنا اور اپنانا آسان ہے۔',
    searchHadithPlaceholder: 'احادیث تلاش کریں...',
    featuredArticles: 'سبق آموز مضامین و سیرت کے واقعات',
    featuredArticlesDesc: 'تفصیلی، مستند اور اخلاقی فہم پیدا کرنے والے روح پرور مضامین',
    allArticlesLink: 'تمام مضامین دیکھیں',
    readArticle: 'مکمل مضمون پڑھیں',
    bookShowcase: 'کتاب: مخزنِ اخلاق',
    bookShowcaseTag: 'کلاسیک اخلاقی ذخیرہ',
    viewAllChapters: 'کتب خانہ کے تمام ابواب دیکھیں',
    relatedQuotes: 'اسی موضوع کے دیگر اقوال',
    faqHeading: 'عام سوالات و اخلاقی فہم',
    faqMeaningQuestion: 'اس قول کا بنیادی اخلاقی سبق کیا ہے؟',
    faqMeaningAnswer: 'اس مبارک فرمان کا اصل پیغام یہ ہے کہ انسان کو اپنی نیت، اخلاق اور کردار کو شفاف رکھنا چاہیے اور حقوق اللہ کے ساتھ حقوق العباد کو زندگی کا فریضہ بنانا چاہیے۔',
    faqSourceQuestion: 'کیا اس کا حوالہ مستند کتابوں میں موجود ہے؟',
    faqSourceAnswer: 'جی ہاں! ادارہ اخلاقی باتیں کی تحقیق کے مطابق یہ قول مستند مراجع میں درج ہے اور کلاسیکی کتب میں اس کی اسناد محفوظ ہیں۔',
    footerMission: 'اخلاقی باتیں — اسلامی اخلاقیات، اقوالِ زریں، احادیثِ مبارکہ اور کلاسیکی کتب کو جدید تقاضوں کے مطابق محفوظ کرنے کا ڈیجیٹل پلیٹ فارم۔',
    footerAbout: 'علمی و اخلاقی مقاصد کے لیے وقف ڈیجیٹل ذخیرہ۔',
    portalsHeading: 'خصوصی گوشے',
    legalHeading: 'قانونی و پالیسی',
    privacyPolicy: 'پرائیویسی پالیسی',
    terms: 'شرائط و ضوابط',
    disclaimer: 'علمی وضاحت و اعلان',
    contact: 'رابطہ و تصحیح',
    rightsReserved: 'جملہ حقوق بحق ادارہ اخلاقی باتیں محفوظ ہیں۔',
    footerQuote: 'علم پھیلانا اور دلوں کو جوڑنا ہمارا مشن ہے۔',
    tableOfContents: 'فہرستِ عناوین',
    keyTakeaways: 'اہم اخلاقی و عملی اسباق',
    publishedOn: 'شائع ہوا:',
    backToHome: 'سرورق پر واپس جائیں',
    statusCardHeader: 'واٹس ایپ اور سوشل اسٹیٹس کارڈ',
    statusCardResolution: 'ایچ ڈی 1080x1080 ریزولوشن • واٹس ایپ اسٹیٹس کے لیے موزوں',
    statusCardDownloading: 'خوبصورت کارڈ تیار ہو رہا ہے...',
  },
  ro: {
    siteName: 'Akhlaqi Baatein',
    tagline: 'Islami Hikmat, Aqwal-e-Zareen aur Ahadith',
    home: 'Home',
    categories: 'Categories',
    chahalHadith: '40 Ahadith',
    articles: 'Mazameen',
    books: 'Kutub Khana',
    about: 'Hamara Mission',
    searchPlaceholder: 'Aqwal, Ahadith ya topic talash karein...',
    copyBtn: 'Text Copy Karein',
    copiedBtn: 'Copy Ho Gaya',
    downloadBtn: 'Status Image Download Karein',
    shareBtn: 'WhatsApp Par Share Karein',
    tashreehHeading: 'Tashreeh aur Amli Sabaq:',
    amliSabaqHeading: 'Amli Sabaq:',
    sourceHeading: 'Hawala (Source):',
    readMore: 'Mazeed Parhein',
    showLess: 'Mukhtasar Dekhein',
    fullPage: 'Mukammal Safha',
    quoteOfTheDay: 'Aaj Ki Nasihat',
    selectedQuote: 'Muntakhab Qol',
    availableQuotes: 'Dastyab Aqwal o Irshadat:',
    itemsFound: 'records miley',
    resetFilters: 'Filters Khatam Karein',
    noResultsTitle: 'Koi qol ya irshad nahi mila',
    noResultsDesc: 'Aap ke talash kardah alfaz se milta julta koi record nahi mila. Baraye meherbani doosre alfaz try karein.',
    topicsHeading: 'Topics:',
    allPill: 'Tamam Aqwal',
    memorized: 'Hifz Mukammal',
    markMemorized: 'Hifz Nishan Zada Karein',
    memorizationProgress: 'Aap Ki Hifz Ki Progress:',
    arbaeenTitle: 'Chahal Hadith: 40 Sunehri Ahadith-e-Mubarakah',
    arbaeenSubtitle: 'Mukhtasar, jame aur mustanad nabawi irshadat jo har Musalman ke liye yaad karna aasan hain.',
    searchHadithPlaceholder: 'Hadith talash karein...',
    featuredArticles: 'Sabaq Aamoz Mazameen aur Seerat ke Waqiat',
    featuredArticlesDesc: 'Tafseeli, mustanad aur akhlaqi baseerat paida karne wale mazameen',
    allArticlesLink: 'Tamam Mazameen Dekhein',
    readArticle: 'Mukammal Mazmoon Parhein',
    bookShowcase: 'Kitaab: Makhzan-e-Akhlaq',
    bookShowcaseTag: 'Classic Moral Treasury',
    viewAllChapters: 'Kutub Khana ke tamam abwab dekhein',
    relatedQuotes: 'Isi mauzoo ke deegar aqwal',
    faqHeading: 'Aam Sawalat aur Akhlaqi Fehm',
    faqMeaningQuestion: 'Is qol ka bunyadi akhlaqi sabaq kya hai?',
    faqMeaningAnswer: 'Is mubarak farman ka asal paigham yeh hai ke insan apni niyat, akhlaq aur kirdar ko saaf rakhay aur huqooq-ul-ibad ko zaroor pura karey.',
    faqSourceQuestion: 'Kya is ka hawala mustanad kitabon mein mojood hai?',
    faqSourceAnswer: 'Jee haan! Idara Akhlaqi Baatein ki tehqeeq ke mutabiq yeh qol mustanad kitabon mein darj hai.',
    footerMission: 'Akhlaqi Baatein — Islami akhlaqiat, aqwal-e-zareen, ahadith aur classic kitabon ko digital dor mein mehfooz karne ka platform.',
    footerAbout: 'Ilmi aur akhlaqi maqasid ke liye waqf digital zakheera.',
    portalsHeading: 'Khaas Goshe',
    legalHeading: 'Legal & Policy',
    privacyPolicy: 'Privacy Policy',
    terms: 'Sharait o Zawabit',
    disclaimer: 'Disclaimer (Ilmi Wazahat)',
    contact: 'Rabta o Tasheeh',
    rightsReserved: 'Tamam huqooq AkhlaqiBaatein.com ke paas mehfooz hain.',
    footerQuote: 'Ilm phelana aur dilon ko jorna hamara mission hai.',
    tableOfContents: 'Fehrist-e-Unwanat (TOC)',
    keyTakeaways: 'Ahem Akhlaqi o Amli Asbaaq',
    publishedOn: 'Shaya Hua:',
    backToHome: 'Home par wapas jayein',
    statusCardHeader: 'WhatsApp & Social Status Card',
    statusCardResolution: 'HD 1080x1080 Resolution • WhatsApp Status ke liye tayyar',
    statusCardDownloading: 'Card ban raha hai...',
  },
  en: {
    siteName: 'Akhlaqi Baatein',
    tagline: 'Timeless Islamic Wisdom, Prophetic Ethics & Moral Sayings',
    home: 'Home',
    categories: 'Categories',
    chahalHadith: '40 Hadith',
    articles: 'Articles',
    books: 'Books Library',
    about: 'Our Mission',
    searchPlaceholder: 'Search quotes, hadith, or topics...',
    copyBtn: 'Copy Quote',
    copiedBtn: 'Copied',
    downloadBtn: 'Download Status Image',
    shareBtn: 'Share on WhatsApp',
    tashreehHeading: 'Explanation & Moral Lesson:',
    amliSabaqHeading: 'Practical Lesson:',
    sourceHeading: 'Authentic Reference:',
    readMore: 'Read Explanation',
    showLess: 'Show Less',
    fullPage: 'Full Page',
    quoteOfTheDay: 'Quote of the Day',
    selectedQuote: 'Featured Wisdom',
    availableQuotes: 'Available Sayings & Traditions:',
    itemsFound: 'items found',
    resetFilters: 'Reset Filters',
    noResultsTitle: 'No Quotes Found',
    noResultsDesc: 'No records matched your search query. Please try different keywords or category filters.',
    topicsHeading: 'Topics:',
    allPill: 'All Sayings',
    memorized: 'Memorized',
    markMemorized: 'Mark as Memorized',
    memorizationProgress: 'Your Memorization Progress:',
    arbaeenTitle: 'Chahal Hadith: 40 Golden Prophetic Traditions',
    arbaeenSubtitle: 'Concise, profound, and authentic prophetic aphorisms easy to memorize and embody in daily life.',
    searchHadithPlaceholder: 'Search hadith...',
    featuredArticles: 'Inspiring Seerat & Ethical Essays',
    featuredArticlesDesc: 'Deep, research-grounded essays illuminating classical Islamic justice and character.',
    allArticlesLink: 'View All Articles',
    readArticle: 'Read Full Article',
    bookShowcase: 'Book: Makhzan-e-Akhlaq',
    bookShowcaseTag: 'Classical Moral Heritage',
    viewAllChapters: 'Explore All Library Chapters',
    relatedQuotes: 'Related Sayings in this Category',
    faqHeading: 'Frequently Asked Questions & Moral Insights',
    faqMeaningQuestion: 'What is the primary moral takeaway of this wisdom?',
    faqMeaningAnswer: 'The core lesson is that internal purification and character refinement must accompany outward deeds, prioritizing the rights of fellow human beings.',
    faqSourceQuestion: 'Is this saying authentically referenced in classical literature?',
    faqSourceAnswer: 'Yes, our research team verifies and cross-references all sayings against verified classical collections and manuscript sources.',
    footerMission: 'Akhlaqi Baatein is an independent educational platform preserving classical Islamic moral heritage and authentic ethics for the modern digital generation.',
    footerAbout: 'Dedicated to ethical literature and character building.',
    portalsHeading: 'Featured Portals',
    legalHeading: 'Legal & Policies',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer: 'Scholarly Disclaimer',
    contact: 'Contact & Corrections',
    rightsReserved: 'All Rights Reserved. AkhlaqiBaatein.com',
    footerQuote: 'Spreading timeless wisdom and uplifting human hearts.',
    tableOfContents: 'Table of Contents',
    keyTakeaways: 'Key Moral & Practical Takeaways',
    publishedOn: 'Published:',
    backToHome: 'Back to Home',
    statusCardHeader: 'WhatsApp & Social Status Card',
    statusCardResolution: 'HD 1080x1080 Square • Perfect for WhatsApp, Instagram & Facebook',
    statusCardDownloading: 'Generating Royal Card...',
  },
};
