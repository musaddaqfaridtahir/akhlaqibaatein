import { Language } from '@/data/types';

/**
 * Formats a Date into localized Day, Hijri (Umm al-Qura), and Gregorian strings
 * across Urdu ('ur'), Roman Urdu ('ro'), and English ('en').
 */
export function computeFormattedDate(
  date: Date,
  language: Language,
  adjustmentDays = -1
): string {
  const adjustedDate = new Date(date);
  adjustedDate.setDate(adjustedDate.getDate() + adjustmentDays);

  let hMonthNum = 5;
  let hDay = '24';
  let hYear = '1448';

  try {
    const hijriFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const parts = hijriFormatter.formatToParts(adjustedDate);
    hMonthNum = parseInt(parts.find((p) => p.type === 'month')?.value || '1', 10);
    hDay = parts.find((p) => p.type === 'day')?.value || '1';
    hYear = parts.find((p) => p.type === 'year')?.value || '1448';
  } catch {
    // Graceful fallback if Intl Islamic calendar is unavailable
  }

  const dayOfWeek = date.getDay();
  const gregDay = date.getDate();
  const gregMonthNum = date.getMonth();
  const gregYear = date.getFullYear();

  if (language === 'ur') {
    const daysUr = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
    const monthsUr = [
      'جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون',
      'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر',
    ];
    const islamicMonthsUr = [
      'محرم الحرام', 'صفر المظفر', 'ربیع الاول', 'ربیع الثانی',
      'جمادی الاول', 'جمادی الثانی', 'رجب المرجب', 'شعبان المعظم',
      'رمضان المبارک', 'شوال المکرم', 'ذی القعدہ', 'ذی الحجہ',
    ];
    return `${daysUr[dayOfWeek]}، ${hDay} ${islamicMonthsUr[hMonthNum - 1] || 'جمادی الاول'} ${hYear}ھ، ${gregDay} ${monthsUr[gregMonthNum]}، ${gregYear}ء`;
  }

  if (language === 'ro') {
    const daysRo = ['Itwar', 'Peer', 'Mangal', 'Budh', 'Jumerat', 'Jummah', 'Hafta'];
    const monthsRo = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const islamicMonthsRo = [
      'Muharram', 'Safar', 'Rabi-ul-Awwal', 'Rabi-us-Sani',
      'Jumada-al-Awwal', 'Jumada-us-Sani', 'Rajab', 'Shaban',
      'Ramadan', 'Shawwal', 'Zilqad', 'Zilhajj',
    ];
    return `${daysRo[dayOfWeek]}, ${hDay} ${islamicMonthsRo[hMonthNum - 1] || 'Jumada-al-Awwal'} ${hYear} AH, ${gregDay} ${monthsRo[gregMonthNum]}, ${gregYear}`;
  }

  // English
  const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const islamicMonthsEn = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
    'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah',
  ];
  return `${daysEn[dayOfWeek]}, ${hDay} ${islamicMonthsEn[hMonthNum - 1] || 'Jumada al-Awwal'} ${hYear} AH, ${monthsEn[gregMonthNum]} ${gregDay}, ${gregYear}`;
}
