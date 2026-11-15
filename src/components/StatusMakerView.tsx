'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Camera,
  Download,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Share2,
  RefreshCw,
  User,
  Heart,
  BookOpen,
  Check,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { computeFormattedDate } from '@/lib/dateUtils';

interface StatusTemplate {
  id: string;
  category: 'jumma' | 'subah' | 'durood' | 'aqwal';
  titleUr: string;
  titleRo: string;
  titleEn: string;
  arabic?: string;
  urdu: string;
  subtext?: string;
}

const TEMPLATES: StatusTemplate[] = [
  // 1. Jumma Mubarak (8 Templates)
  {
    id: 'jumma-1',
    category: 'jumma',
    titleUr: 'جمعہ مبارک',
    titleRo: 'Jumma Mubarak',
    titleEn: 'Jumma Mubarak',
    arabic: 'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا',
    urdu: 'جمعہ کا مبارک دن سب کو مبارک ہو! آج کے دن کثرت کے ساتھ درودِ پاک پڑھیں اور دعاؤں میں یاد رکھیں۔',
    subtext: 'فرمانِ نبوی ﷺ: جمعہ کا دن تمام دنوں کا سردار ہے۔',
  },
  {
    id: 'jumma-2',
    category: 'jumma',
    titleUr: 'برکتوں بھرا جمعہ',
    titleRo: 'Barkaton Bhara Jumma',
    titleEn: 'Blessed Friday',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
    urdu: 'یا رب! اس مبارک جمعہ کے صدقے ہمارے تمام گناہ معاف فرما، گھروں میں برکت اور رزق میں کشادگی عطا فرما۔',
    subtext: 'جمعہ مبارک • دعاؤں کا طلبگار',
  },
  {
    id: 'jumma-3',
    category: 'jumma',
    titleUr: 'نورِ جمعہ (سورۃ الکہف)',
    titleRo: 'Noor-e-Jumma (Surah Kahf)',
    titleEn: 'Friday Light (Surah Kahf)',
    arabic: 'مَنْ قَرَأَ سُورَةَ الْكَهْفِ فِي يَوْمِ الْجُمُعَةِ أَضَاءَ لَهُ مِنَ النُّورِ مَا بَيْنَ الْجُمُعَتَيْنِ',
    urdu: 'جو شخص جمعہ کے دن سورۃ الکہف پڑھتا ہے، اس کے لیے دو جمعوں کے درمیان نور روشن کر دیا جاتا ہے۔',
    subtext: 'سنن دارمی • سورۃ الکہف کی فضیلت',
  },
  {
    id: 'jumma-4',
    category: 'jumma',
    titleUr: 'دعائے جمعہ',
    titleRo: 'Dua-e-Jumma',
    titleEn: 'Friday Supplication',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    urdu: 'اے پروردگار! اس جمعہ کی ساعتِ قبولیت میں ہمارے تمام دلی مقاصد، جائز دعائیں اور حاجات قبول فرما۔',
    subtext: 'جمعہ مبارک • التماسِ دعا',
  },
  {
    id: 'jumma-5',
    category: 'jumma',
    titleUr: 'جمعۃ المبارک',
    titleRo: 'Jumat-ul-Mubarak',
    titleEn: 'Jumatul Mubarak',
    arabic: 'اللَّهُمَّ اغْفِرْ لِلْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
    urdu: 'یا اللہ! جمعہ کی برکت سے امتِ مسلمہ پر رحم فرما، بیماروں کو شفا اور پریشان حالوں کو سکون عطا فرما۔',
    subtext: 'جمعہ مبارک سب اہل ایمان کو',
  },
  {
    id: 'jumma-6',
    category: 'jumma',
    titleUr: 'فیضانِ درود شریف',
    titleRo: 'Faizan-e-Durood Sharif',
    titleEn: 'Blessings of Durood',
    arabic: 'أَكْثِرُوا عَلَيَّ مِنَ الصَّلَاةِ فِي كُلِّ يَوْمِ جُمُعَةٍ',
    urdu: 'ارشادِ نبوی ﷺ: جمعہ کے دن مجھ پر کثرت سے درود بھیجا کرو، کیونکہ تمہارا درود مجھ پر پیش کیا جاتا ہے۔',
    subtext: 'سنن ابی داؤد • فضیلتِ درود شریف',
  },
  {
    id: 'jumma-7',
    category: 'jumma',
    titleUr: 'ساعتِ قبولیت',
    titleRo: 'Sa’at-e-Qubooliyat',
    titleEn: 'Hour of Acceptance',
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنَّا',
    urdu: 'جمعہ کے دن ایک گھڑی ایسی ہوتی ہے جس میں بندہ جو دعا مانگے اللہ تعالیٰ قبول فرماتا ہے۔',
    subtext: 'صحیح بخاری • دعا کا خاص وقت',
  },
  {
    id: 'jumma-8',
    category: 'jumma',
    titleUr: 'مبارک جمعہ و سلامتی',
    titleRo: 'Mubarak Jumma & Salamati',
    titleEn: 'Peace & Blessings Friday',
    arabic: 'سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ',
    urdu: 'اللہ کرے یہ جمعہ آپ کی زندگی میں صحت، خوشحالی، ایمان اور سلامتی کا پیامبر ثابت ہو۔ آمین!',
    subtext: 'جمعہ مبارک • اللہ نگہبان',
  },

  // 2. Subah Bakhair & Morning Duas (8 Templates)
  {
    id: 'subah-1',
    category: 'subah',
    titleUr: 'صبح بخیر و دعائے نور',
    titleRo: 'Subah Bakhair & Dua-e-Noor',
    titleEn: 'Good Morning & Dua of Light',
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
    urdu: 'صبح بخیر! اللہ تعالیٰ آپ کے دن کو خیر، عافیت، سلامتی اور مسکراہٹوں سے بھر دے۔ آمین!',
    subtext: 'ہر صبح ایک نئی نعمت ہے، اپنے رب کا شکر ادا کریں۔',
  },
  {
    id: 'subah-2',
    category: 'subah',
    titleUr: 'صبحِ نو اور توکل',
    titleRo: 'Subh-e-Nau & Tawakkul',
    titleEn: 'Morning & Trust in Allah',
    arabic: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
    urdu: 'جس کا بھروسہ اللہ پر ہو، وہ کبھی مایوس نہیں ہوتا۔ اللہ پاک آپ کے تمام بگڑے کام سنوار دے۔',
    subtext: 'صبح بخیر زندگی • توکل علیٰ اللہ',
  },
  {
    id: 'subah-3',
    category: 'subah',
    titleUr: 'صبح بخیر و شکرگزاری',
    titleRo: 'Subah Bakhair & Shukar',
    titleEn: 'Good Morning & Gratitude',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    urdu: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں زندگی عطا فرمائی۔ نئی صبح کا آغاز شکر اور نیکی سے کریں۔',
    subtext: 'صحیح بخاری • دعائے بیداری',
  },
  {
    id: 'subah-4',
    category: 'subah',
    titleUr: 'دعائے عافیت و حفاظت',
    titleRo: 'Dua-e-Afiyat & Hifazat',
    titleEn: 'Prayer for Well-being',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
    urdu: 'اے اللہ! اس صبح ہم تجھ سے دنیا و آخرت میں معافی، کامل عافیت اور سلامتی کا سوال کرتے ہیں۔',
    subtext: 'صبح بخیر • مسنون دعائے حفاظت',
  },
  {
    id: 'subah-5',
    category: 'subah',
    titleUr: 'برکت والی صبح',
    titleRo: 'Barkat Wali Subah',
    titleEn: 'Blessed Morning',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
    urdu: 'اے اللہ! ہمیں نفع بخش علم، حلال اور پاکیزہ رزق اور بارگاہ میں قبول ہونے والے اعمال نصیب فرما۔',
    subtext: 'صبح بخیر • دعائے نبوی ﷺ',
  },
  {
    id: 'subah-6',
    category: 'subah',
    titleUr: 'صبح کی سلامتی کا حصار',
    titleRo: 'Subah Ki Salamati Ka Hisar',
    titleEn: 'Morning Shield of Protection',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    urdu: 'جو شخص صبح کے وقت یہ کلمات پڑھ لے اسے شام تک کوئی چیز نقصان نہیں پہنچا سکتی۔',
    subtext: 'سنن ترمذی • حفاظت کی مسنون دعا',
  },
  {
    id: 'subah-7',
    category: 'subah',
    titleUr: 'صبح بخیر زندگی',
    titleRo: 'Subah Bakhair Zindagi',
    titleEn: 'Good Morning Life',
    arabic: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ',
    urdu: 'اے ہمیشہ زندہ رہنے والے! اپنی رحمت سے میرے تمام معاملات درست فرما اور پلک جھپکنے برابر بھی تنہا نہ چھوڑ۔',
    subtext: 'صبح بخیر • التماسِ رحمت',
  },
  {
    id: 'subah-8',
    category: 'subah',
    titleUr: 'روشنی بھری صبح',
    titleRo: 'Roshni Bhari Subah',
    titleEn: 'Radiant Morning',
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    urdu: 'ہم نے صبح کی اور اللہ کے تمام جہان نے صبح کی جو سارے جہانوں کا پالنے والا ہے۔ خوش رہیں اور سلامت رہیں!',
    subtext: 'صبح بخیر • دعائے روزمرہ',
  },

  // 3. Durood o Salam (8 Templates)
  {
    id: 'durood-1',
    category: 'durood',
    titleUr: 'درودِ ابراہیمی',
    titleRo: 'Durood-e-Ibrahimi',
    titleEn: 'Salawat Ibrahimiya',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    urdu: 'جس نے مجھ پر ایک بار درود بھیجا، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے۔ (صحیح مسلم)',
    subtext: 'افضل ترین مسنون درود شریف',
  },
  {
    id: 'durood-2',
    category: 'durood',
    titleUr: 'صلوٰۃ التنجینا',
    titleRo: 'Salat-al-Tanjina',
    titleEn: 'Salawat Tanjina',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنَجِّينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ',
    urdu: 'اے اللہ! ہمارے آقا محمد ﷺ پر ایسی رحمت نازل فرما جس کے ذریعے تو ہمیں تمام خوف اور آفات سے نجات بخشے۔',
    subtext: 'درودِ تنجینا • مصیبتوں سے نجات کا حصار',
  },
  {
    id: 'durood-3',
    category: 'durood',
    titleUr: 'درودِ ماہی',
    titleRo: 'Durood-e-Mahi',
    titleEn: 'Durood-e-Mahi',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ بِعَدَدِ كُلِّ مَعْلُومٍ لَّكَ',
    urdu: 'اے اللہ! حضرت محمد ﷺ اور آپ کی آل پر تیرے تمام معلوم ذرات اور مخلوقات کی تعداد کے برابر درود بھیج۔',
    subtext: 'درودِ پاک • بے انتہا برکات کا ذریعہ',
  },
  {
    id: 'durood-4',
    category: 'durood',
    titleUr: 'درودِ تاج',
    titleRo: 'Durood-e-Taj',
    titleEn: 'Durood-e-Taj',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَاحِبِ التَّاجِ وَالْمِعْرَاجِ وَالْبُرَاقِ وَالْعَلَمِ',
    urdu: 'اے اللہ! ہمارے آقا و مولا محمد ﷺ پر درود بھیج جو تاج، معراج، براق اور علم کے صاحب ہیں۔',
    subtext: 'درودِ تاج • روحانی تسکین و برکت',
  },
  {
    id: 'durood-5',
    category: 'durood',
    titleUr: 'درودِ شفا (طب القلوب)',
    titleRo: 'Durood-e-Shifa (Tibb-ul-Quloob)',
    titleEn: 'Salawat of Healing',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوبِ وَدَوَائِهَا وَعَافِيَةِ الْأَبْدَانِ وَشِفَائِهَا',
    urdu: 'اے اللہ! درود نازل فرما ہمارے آقا محمد ﷺ پر جو دلوں کی دوا اور شفا ہیں، اور بدنوں کی عافیت اور صحت ہیں۔',
    subtext: 'درودِ طب القلوب • شفا و عافیت',
  },
  {
    id: 'durood-6',
    category: 'durood',
    titleUr: 'درودِ ناریہ',
    titleRo: 'Salat-al-Nariya',
    titleEn: 'Salawat Nariya',
    arabic: 'اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ',
    urdu: 'اے اللہ! ہمارے آقا محمد ﷺ پر کامل درود اور مکمل سلامتی نازل فرما جس کے وسیلے سے مشکل گرہیں کھل جاتی ہیں۔',
    subtext: 'صلوٰۃ الناریہ • کشائشِ کار کا وظیفہ',
  },
  {
    id: 'durood-7',
    category: 'durood',
    titleUr: 'درودِ غوثیہ',
    titleRo: 'Durood-e-Ghausia',
    titleEn: 'Durood-e-Ghausia',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَآلِهِ وَسَلِّمْ',
    urdu: 'جو شخص جمعہ کے دن عصر کے بعد 80 مرتبہ درود پڑھے، اللہ اس کے 80 سال کے گناہ معاف فرما دیتا ہے۔',
    subtext: 'مسند احمد • مغفرتِ ذنوب',
  },
  {
    id: 'durood-8',
    category: 'durood',
    titleUr: 'درود و سلامِ مصطفیٰ ﷺ',
    titleRo: 'Durood o Salam-e-Mustafa ﷺ',
    titleEn: 'Salutations upon the Prophet ﷺ',
    arabic: 'الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ، الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حَبِيبَ اللَّهِ',
    urdu: 'یا رسول اللہ ﷺ! آپ پر درود و سلام ہو، یا حبیب اللہ! آپ کی ذاتِ اقدس تمام عالم کے لیے رحمت ہے۔',
    subtext: 'صلی اللہ علیہ وآلہ وسلم',
  },

  // 4. Zareen Aqwal (8 Templates)
  {
    id: 'aqwal-1',
    category: 'aqwal',
    titleUr: 'قولِ امیر المومنین علیؓ',
    titleRo: 'Qol-e-Ali (RA)',
    titleEn: 'Saying of Ali (RA)',
    urdu: 'انسان کا سب سے بڑا دشمن اس کی اپنی انا اور تکبر ہے، اور سب سے بہترین دوست حسنِ اخلاق ہے۔',
    subtext: 'حضرت علی ابن ابی طالب رضی اللہ عنہ',
  },
  {
    id: 'aqwal-2',
    category: 'aqwal',
    titleUr: 'ارشادِ فاروقِ اعظمؓ',
    titleRo: 'Irshad-e-Umar Farooq (RA)',
    titleEn: 'Saying of Umar (RA)',
    urdu: 'دوسروں کے عیب تلاش کرنے سے پہلے اپنے نفس کا احتساب کرو، اس سے پہلے کہ تمہارا حساب لیا جائے۔',
    subtext: 'حضرت عمر فاروق رضی اللہ عنہ',
  },
  {
    id: 'aqwal-3',
    category: 'aqwal',
    titleUr: 'فرمانِ صدیقِ اکبرؓ',
    titleRo: 'Farman-e-Abu Bakr (RA)',
    titleEn: 'Saying of Abu Bakr (RA)',
    urdu: 'سچائی سب سے بڑی امانت ہے اور جھوٹ سب سے بڑی خیانت ہے۔ حق بات کہنے سے کبھی پیچھے نہ ہٹو۔',
    subtext: 'حضرت ابوبکر صدیق رضی اللہ عنہ',
  },
  {
    id: 'aqwal-4',
    category: 'aqwal',
    titleUr: 'قولِ عثمانِ غنیؓ',
    titleRo: 'Qol-e-Usman Ghani (RA)',
    titleEn: 'Saying of Uthman (RA)',
    urdu: 'اگر ہمارے دل گناہوں سے پاک ہو جائیں تو ہم کبھی بھی قرآنِ پاک کی تلاوت سے سیر نہ ہوں۔',
    subtext: 'حضرت عثمان غنی رضی اللہ عنہ',
  },
  {
    id: 'aqwal-5',
    category: 'aqwal',
    titleUr: 'حکمتِ حسن بصریؒ',
    titleRo: 'Hikmat-e-Hasan Basri (RA)',
    titleEn: 'Wisdom of Hasan al-Basri',
    urdu: 'دنیا ایک پل کی مانند ہے، اس پر سے گزر جاؤ مگر اسے اپنا مستقل ٹھکانہ بنانے کی فکر میں نہ پڑو۔',
    subtext: 'حضرت حسن بصری رحمۃ اللہ علیہ',
  },
  {
    id: 'aqwal-6',
    category: 'aqwal',
    titleUr: 'حکمتِ امام شافعیؒ',
    titleRo: 'Hikmat-e-Imam Shafi’i (RA)',
    titleEn: 'Wisdom of Imam Shafi’i',
    urdu: 'وقت ایک تیز دھار تلوار کی مانند ہے، اگر تم اسے نیکی میں نہیں کاٹو گے تو وہ تمہیں غفلت میں کاٹ دے گا۔',
    subtext: 'امام محمد بن ادریس شافعی رحمۃ اللہ علیہ',
  },
  {
    id: 'aqwal-7',
    category: 'aqwal',
    titleUr: 'فرمانِ امام غزالیؒ',
    titleRo: 'Farman-e-Imam Ghazali (RA)',
    titleEn: 'Wisdom of Imam Ghazali',
    urdu: 'علم کا مقصد دل کو روشن کرنا اور اخلاق کو سنوارنا ہے، محض بحث و تکرار میں وقت ضائع کرنا نہیں۔',
    subtext: 'حجۃ الاسلام امام غزالی رحمۃ اللہ علیہ',
  },
  {
    id: 'aqwal-8',
    category: 'aqwal',
    titleUr: 'حکمتِ شیخ سعدیؒ',
    titleRo: 'Hikmat-e-Sheikh Saadi (RA)',
    titleEn: 'Wisdom of Sheikh Saadi',
    urdu: 'جس انسان کے بولنے میں مٹھاس اور کردار میں دیانت ہو، زمانے کے لوگ اس کی عزت دل کی گہرائیوں سے کرتے ہیں۔',
    subtext: 'شیخ سعدی شیرازی رحمۃ اللہ علیہ',
  },
];

export default function StatusMakerView() {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [activeCategory, setActiveCategory] = useState<'jumma' | 'subah' | 'durood' | 'aqwal'>('jumma');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('jumma-1');
  const [userName, setUserName] = useState<string>('');
  const [customBadge, setCustomBadge] = useState<string>('');
  const [customText, setCustomText] = useState<string>('');
  const [downloading, setDownloading] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentTemplate = TEMPLATES.find((t) => t.id === selectedTemplateId) || TEMPLATES[0];

  const categoryTabs = [
    { id: 'jumma', ur: 'جمعہ مبارک', ro: 'Jumma Mubarak', en: 'Jumma Mubarak' },
    { id: 'subah', ur: 'صبح بخیر دعائیں', ro: 'Subah Bakhair', en: 'Morning Duas' },
    { id: 'durood', ur: 'درود و سلام', ro: 'Durood o Salam', en: 'Salawat' },
    { id: 'aqwal', ur: 'زریں اقوال', ro: 'Zareen Aqwal', en: 'Golden Quotes' },
  ];

  const filteredTemplates = TEMPLATES.filter((t) => t.category === activeCategory);

  // Re-draw canvas whenever template, userName, customBadge, or customText changes
  useEffect(() => {
    drawCanvas();
  }, [selectedTemplateId, userName, customBadge, customText, language]);

  const drawCanvas = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    } catch {}

    const WIDTH = 1080;
    const HEIGHT = 1920;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // 1. Background Gradient (Luxury Emerald Night to Deep Jade)
    const bg = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    bg.addColorStop(0, '#040b08');
    bg.addColorStop(0.25, '#0a1d16');
    bg.addColorStop(0.7, '#071510');
    bg.addColorStop(1, '#020504');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Subtle Radial Gold Ambient Glow
    const glow = ctx.createRadialGradient(WIDTH / 2, 450, 40, WIDTH / 2, 450, 600);
    glow.addColorStop(0, 'rgba(212, 175, 55, 0.16)');
    glow.addColorStop(1, 'rgba(212, 175, 55, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // 2. Double Ornamental Border
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, WIDTH - 80, HEIGHT - 80);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(52, 52, WIDTH - 104, HEIGHT - 104);

    // Corner Diamonds
    const drawDiamond = (cx: number, cy: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((45 * Math.PI) / 180);
      ctx.fillStyle = '#d4af37';
      ctx.fillRect(-8, -8, 16, 16);
      ctx.restore();
    };
    drawDiamond(52, 52);
    drawDiamond(WIDTH - 52, 52);
    drawDiamond(52, HEIGHT - 52);
    drawDiamond(WIDTH - 52, HEIGHT - 52);

    // 3. Top Header: Branding + Tagline
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 36px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('AkhlaqiBaatein.com', WIDTH / 2, 130);

    ctx.fillStyle = '#a7f3d0';
    ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    ctx.fillText('اخلاقی باتیں • اسلامی حکمت و مستند اقوال', WIDTH / 2, 175);

    // Dual Date
    const dateStr = computeFormattedDate(new Date(), 'ur');
    ctx.fillStyle = 'rgba(254, 243, 199, 0.7)';
    ctx.font = '19px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(dateStr, WIDTH / 2, 215);

    // Golden Divider Line
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2 - 200, 245);
    ctx.lineTo(WIDTH / 2 + 200, 245);
    ctx.stroke();
    ctx.restore();

    // 4. Category Title Badge
    ctx.save();
    ctx.textAlign = 'center';
    const rawBadge = customBadge.trim() || currentTemplate.titleUr;
    const badgeText = rawBadge.replace(/ﷺ/g, ' ﷺ ');
    ctx.font = 'bold 28px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    const badgeW = Math.max(260, ctx.measureText(badgeText).width + 60);
    const badgeY = 285;

    // Rounded Pill
    ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
    ctx.beginPath();
    ctx.roundRect(WIDTH / 2 - badgeW / 2, badgeY, badgeW, 56, 28);
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#d4af37';
    ctx.fillText(badgeText, WIDTH / 2, badgeY + 38);
    ctx.restore();

    // 5. Central Hero Plaque (Contains Arabic & Urdu Text)
    const plaqueX = 70;
    const plaqueY = 380;
    const plaqueW = WIDTH - 140;
    const plaqueH = 1120;

    ctx.save();
    ctx.fillStyle = 'rgba(10, 20, 17, 0.9)';
    ctx.beginPath();
    ctx.roundRect(plaqueX, plaqueY, plaqueW, plaqueH, 32);
    ctx.fill();

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner subtle border
    ctx.beginPath();
    ctx.roundRect(plaqueX + 10, plaqueY + 10, plaqueW - 20, plaqueH - 20, 24);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    // Content Rendering inside Plaque
    let contentY = plaqueY + 130;
    ctx.save();
    ctx.textAlign = 'center';

    // Optional Bismillah
    ctx.fillStyle = '#d4af37';
    ctx.font = '24px "Amiri", "Scheherazade New", serif';
    ctx.fillText('بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', WIDTH / 2, contentY);
    contentY += 85;

    // Optional Arabic Text
    if (currentTemplate.arabic) {
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px "Amiri", "Scheherazade New", serif';
      ctx.direction = 'rtl';
      const arabicLines = wrapCanvasText(ctx, currentTemplate.arabic, plaqueW - 80);
      for (const line of arabicLines) {
        ctx.fillText(line, WIDTH / 2, contentY);
        contentY += 72;
      }
      contentY += 35;

      // Small gold divider
      ctx.fillStyle = '#d4af37';
      ctx.font = '20px serif';
      ctx.fillText('◈  ◈  ◈', WIDTH / 2, contentY);
      contentY += 65;
    }

    // Main Urdu Statement (Custom or Template) with Auto-scaling Font Size
    const rawMainText = (customText.trim() || currentTemplate.urdu).replace(/ﷺ/g, ' ﷺ ');
    let mainFontSize = 38;
    let mainLineHeight = 85;
    if (rawMainText.length > 280) {
      mainFontSize = 24;
      mainLineHeight = 54;
    } else if (rawMainText.length > 200) {
      mainFontSize = 28;
      mainLineHeight = 62;
    } else if (rawMainText.length > 130) {
      mainFontSize = 32;
      mainLineHeight = 72;
    }

    ctx.fillStyle = '#fef3c7';
    ctx.font = `bold ${mainFontSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif`;
    ctx.direction = 'rtl';
    const urduLines = wrapCanvasText(ctx, rawMainText, plaqueW - 80);
    for (const line of urduLines) {
      ctx.fillText(line, WIDTH / 2, contentY);
      contentY += mainLineHeight;
    }

    // Optional Subtext
    if (currentTemplate.subtext) {
      contentY += 25;
      ctx.fillStyle = '#a7f3d0';
      ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
      ctx.fillText(currentTemplate.subtext.replace(/ﷺ/g, ' ﷺ '), WIDTH / 2, contentY);
    }
    ctx.restore();

    // 6. User Name Personalization Badge (Bottom of Plaque)
    const finalUserName = userName.trim()
      ? `منجانب: ${userName.trim()}`
      : 'منجانب: اخلاقی باتیں ڈاٹ کام';
    const nameY = plaqueY + plaqueH - 120;

    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = 'bold 28px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    const nameWidth = Math.max(340, ctx.measureText(finalUserName).width + 80);

    // Luxury Name Pill
    ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.beginPath();
    ctx.roundRect(WIDTH / 2 - nameWidth / 2, nameY, nameWidth, 64, 32);
    ctx.fill();

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#fef3c7';
    ctx.fillText(finalUserName, WIDTH / 2, nameY + 44);
    ctx.restore();

    // 7. Bottom Signature Watermark
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('AkhlaqiBaatein.com', WIDTH / 2, 1720);

    ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
    ctx.font = 'bold 18px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    ctx.fillText('مستند اسلامی اذکار، اقوالِ زریں و مسنون دعائیں', WIDTH / 2, 1760);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.font = '15px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('9:16 Full HD Status • For WhatsApp, Instagram & Facebook', WIDTH / 2, 1800);
    ctx.restore();
  };

  function wrapCanvasText(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] {
    const safeText = text.replace(/ﷺ/g, ' ﷺ ');
    const paragraphs = safeText.split('\n');
    const lines: string[] = [];

    for (const para of paragraphs) {
      const words = para.trim().split(/\s+/);
      let currentLine = '';

      for (const word of words) {
        if (!word) continue;
        const candidate = currentLine ? `${currentLine} ${word}` : word;
        if (ctx.measureText(candidate).width <= maxWidth) {
          currentLine = candidate;
        } else {
          if (currentLine) lines.push(currentLine);
          currentLine = word;
        }
      }
      if (currentLine) lines.push(currentLine);
    }
    return lines;
  }

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    if (!canvas || downloading) return;
    setDownloading(true);

    try {
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((b) => resolve(b), 'image/png')
      );
      if (!blob) throw new Error('Blob generation failed');

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const cleanName = userName.trim() ? userName.trim().replace(/\s+/g, '-') : 'status';
      link.download = `akhlaqibaatein-${activeCategory}-${cleanName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      showToast(isUrdu ? 'کارڈ کامیابی سے ڈاؤن لوڈ ہو گیا' : 'Status Card downloaded successfully');
    } catch {
      showToast(isUrdu ? 'تصویر محفوظ کرنے میں خرابی ہوئی' : 'Download failed, please retry');
    } finally {
      setDownloading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `*${customBadge.trim() || currentTemplate.titleUr}*\n\n${customText.trim() || currentTemplate.urdu}\n\nاپنے نام کے ساتھ 9:16 ایچ ڈی واٹس ایپ اسٹیٹس کارڈ بنائیں:\nhttps://akhlaqibaatein.com/status-maker`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-8 max-w-6xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
          isUrdu ? 'font-urdu' : 'font-sans'
        }`}
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'سرورق' : 'Home'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <Link href="/tools" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'اسلامی ٹولز' : 'Tools'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <span className="text-slate-900 dark:text-white font-bold">
          {isUrdu ? 'اسٹیٹس میکر' : 'Status Maker'}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-[#d4af37] border border-[#d4af37]/40 text-xs sm:text-sm font-bold shadow-xs">
          <Camera className="w-4 h-4 text-[#d4af37]" />
          <span>
            {isUrdu
              ? '9:16 فل ایچ ڈی واٹس ایپ اسٹیٹس میکر'
              : isRoman
              ? '9:16 Full HD Status Maker'
              : 'Personalized 9:16 Islamic Status Generator'}
          </span>
        </div>
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#fef3c7] ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans tracking-tight'
          }`}
        >
          {isUrdu
            ? 'جمعہ مبارک و روزانہ اسٹیٹس میکر'
            : isRoman
            ? 'Jumma Mubarak aur Daily Status Maker'
            : 'Personalized Islamic Status Maker'}
        </h1>
        <p
          className={`text-xs sm:text-sm md:text-base text-slate-600 dark:text-emerald-100/80 max-w-2xl mx-auto ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans'
          }`}
        >
          {isUrdu
            ? 'کارڈ پر اپنا نام لکھیں اور 1-کلک میں 9:16 فل ایچ ڈی برانڈڈ اسٹیٹس کارڈ محفوظ کریں تاکہ آپ کے دوست اور رشتہ دار خوش ہوں۔'
            : isRoman
            ? 'Card par apna naam likhein aur 1-click mein 9:16 Full HD branded status card download karein.'
            : 'Enter your name, pick an authentic Jumma or daily morning dua, and download a stunning 1080x1920 vertical HD card with your name.'}
        </p>
      </header>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveCategory(tab.id as any);
              const first = TEMPLATES.find((t) => t.category === tab.id);
              if (first) {
                setSelectedTemplateId(first.id);
                setCustomBadge('');
              }
            }}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-emerald-800 text-white shadow-md scale-105'
                : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-emerald-200 border border-stone-200 dark:border-emerald-800/60 hover:border-[#d4af37]'
            } ${isUrdu ? 'font-urdu text-sm sm:text-base' : 'font-sans'}`}
          >
            {tab[language] || tab.ur}
          </button>
        ))}
      </div>

      {/* Editor & Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-[#d4af37]/40 shadow-lg space-y-6">
          {/* User Name Input */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] flex items-center gap-2">
              <User className="w-4 h-4 text-[#d4af37]" />
              <span>
                {isUrdu
                  ? 'کارڈ پر اپنا نام لکھیں (مثلاً: مصدق فرید):'
                  : isRoman
                  ? 'Card par apna naam likhein (Misal: Musaddaq):'
                  : 'Write Your Name on Card (e.g. Musaddaq):'}
              </span>
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={
                isUrdu
                  ? 'اپنا نام درج کریں (مثلاً: مصدق فرید)'
                  : isRoman
                  ? 'Apna naam darj karein'
                  : 'Enter your name'
              }
              className={`w-full px-4 py-3 rounded-2xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden ${
                isUrdu ? 'font-urdu text-base' : 'font-sans'
              }`}
            />
            <span className="text-[11px] text-slate-500 dark:text-emerald-300/70">
              {isUrdu
                ? 'کارڈ کے نچلے حصے پر "منجانب: [آپ کا نام]" خوبصورت گولڈن فریم میں پرنٹ ہوگا۔'
                : isRoman
                ? 'Card ke neechay "Minjanib: [Aap Ka Naam]" golden frame mein print hoga.'
                : 'Your name will appear proudly in an ornamental golden badge at the bottom of the card.'}
            </span>
          </div>

          {/* Custom Badge Input */}
          <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-emerald-800/40">
            <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>
                {isUrdu
                  ? 'کارڈ کا عنوان / بیج (اختیاری):'
                  : isRoman
                  ? 'Card ka Title / Badge (Optional):'
                  : 'Card Title / Badge (Optional):'}
              </span>
            </label>
            <input
              type="text"
              value={customBadge}
              onChange={(e) => setCustomBadge(e.target.value)}
              placeholder={
                isUrdu
                  ? `مثلاً: ${currentTemplate.titleUr} یا اپنی مرضی کا عنوان`
                  : `e.g. ${currentTemplate.titleRo || 'Jumma Mubarak'}`
              }
              className={`w-full px-4 py-2.5 rounded-2xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden ${
                isUrdu ? 'font-urdu text-sm' : 'font-sans text-xs'
              }`}
            />
          </div>

          {/* Template Selection */}
          <div className="space-y-3 pt-2 border-t border-stone-200 dark:border-emerald-800/40">
            <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] block">
              {isUrdu
                ? 'منتخب مستند متن کا انتخاب کریں:'
                : isRoman
                ? 'Mustanad paigham ka intekhab karein:'
                : 'Select Authentic Message:'}
            </label>
            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {filteredTemplates.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedTemplateId(item.id);
                    setCustomBadge('');
                  }}
                  className={`w-full p-4 rounded-2xl text-right transition border cursor-pointer flex flex-col gap-1.5 ${
                    selectedTemplateId === item.id
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-[#d4af37] shadow-sm'
                      : 'bg-stone-50/60 dark:bg-[#07130f] border-stone-200 dark:border-emerald-800/50 hover:border-[#d4af37]/60'
                  }`}
                >
                  <span className="font-bold text-xs sm:text-sm text-[#d4af37] font-urdu">
                    {item.titleUr}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-emerald-100 font-urdu leading-[1.8] line-clamp-2">
                    {item.urdu}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Custom Multi-line Text */}
          <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-emerald-800/40">
            <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] block">
              {isUrdu
                ? 'یا اپنی مرضی کا کوئی پیغام لکھیں (اختیاری ملٹی لائن):'
                : isRoman
                ? 'Ya apni marzi ka paigham likhein (Optional):'
                : 'Or Write Custom Message (Optional):'}
            </label>
            <textarea
              rows={4}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder={
                isUrdu
                  ? 'یہاں اپنی مرضی کی دعا یا پیغام لکھیں (فونٹ خودکار طریقے سے فریم کے مطابق ایڈجسٹ ہوگا)...'
                  : isRoman
                  ? 'Yahan apni marzi ki dua ya paigham likhein...'
                  : 'Write custom text (font auto-scales to fit the card)...'
              }
              className={`w-full px-4 py-2.5 rounded-2xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white focus:ring-2 focus:ring-[#d4af37] outline-hidden ${
                isUrdu ? 'font-urdu text-sm leading-[1.8]' : 'font-sans text-xs'
              }`}
            />
          </div>

          {/* Actions Bar */}
          <div className="pt-4 border-t border-stone-200 dark:border-emerald-800/40 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="flex-1 min-h-[48px] px-5 py-3 rounded-2xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#d4af37] hover:brightness-105 text-[#0a1411] font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition active:scale-95 disabled:opacity-60"
            >
              <Download className="w-4 h-4 shrink-0 stroke-[2.2]" />
              <span className={isUrdu ? 'font-urdu text-sm sm:text-base' : 'font-sans'}>
                {downloading
                  ? isUrdu
                    ? 'کارڈ تیار ہو رہا ہے...'
                    : isRoman
                    ? 'Card tayyar ho raha hai...'
                    : 'Generating HD Card...'
                  : isUrdu
                  ? '9:16 ایچ ڈی اسٹیٹس ڈاؤن لوڈ کریں'
                  : isRoman
                  ? '9:16 HD Status Download Karein'
                  : 'Download 9:16 HD Card'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppShare}
              className="px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-[#07130f] dark:hover:bg-emerald-900 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{isUrdu ? 'واٹس ایپ شیئر' : isRoman ? 'WhatsApp Share' : 'WhatsApp'}</span>
            </button>
          </div>
        </div>

        {/* Live Preview Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          <div className="w-full text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-emerald-300/80">
              {isUrdu
                ? 'لائیو 9:16 پیش منظر (Live Preview)'
                : isRoman
                ? 'Live 9:16 Preview'
                : 'Live 9:16 Preview'}
            </span>
          </div>

          {/* Phone Frame Mockup for Canvas */}
          <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-800 dark:border-emerald-900 bg-black flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
            {isUrdu
              ? 'ڈاؤن لوڈ شدہ کارڈ 1080x1920 ریزولوشن کے ساتھ واٹس ایپ، انسٹاگرام اور فیس بک اسٹوریز کے لیے 100% پرفیکٹ ہے۔'
              : isRoman
              ? 'Downloaded card 1080x1920 HD resolution ke sath WhatsApp aur Insta stories ke liye tayyar hai.'
              : 'Exported image is 1080x1920 HD PNG, perfectly tailored for WhatsApp, Instagram & Facebook stories.'}
          </p>
        </div>
      </div>
    </div>
  );
}
