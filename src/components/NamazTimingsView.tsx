'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Clock,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Sun,
  Sunrise,
  Sunset,
  Moon,
  Compass,
  AlertTriangle,
  Info,
  Navigation,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getKarachiNow } from '@/lib/dateUtils';

interface CityPreset {
  id: string;
  nameUr: string;
  nameRo: string;
  nameEn: string;
  lat: number;
  lng: number;
  tz: number;
  country: string;
}

const CITY_PRESETS: CityPreset[] = [
  // Pakistan Major Cities
  { id: 'lahore', nameUr: 'لاہور', nameRo: 'Lahore', nameEn: 'Lahore', lat: 31.5204, lng: 74.3587, tz: 5, country: 'PK' },
  { id: 'karachi', nameUr: 'کراچی', nameRo: 'Karachi', nameEn: 'Karachi', lat: 24.8607, lng: 67.0011, tz: 5, country: 'PK' },
  { id: 'islamabad', nameUr: 'اسلام آباد', nameRo: 'Islamabad', nameEn: 'Islamabad', lat: 33.6844, lng: 73.0479, tz: 5, country: 'PK' },
  { id: 'rawalpindi', nameUr: 'راولپنڈی', nameRo: 'Rawalpindi', nameEn: 'Rawalpindi', lat: 33.5651, lng: 73.0169, tz: 5, country: 'PK' },
  { id: 'faisalabad', nameUr: 'فیصل آباد', nameRo: 'Faisalabad', nameEn: 'Faisalabad', lat: 31.4504, lng: 73.135, tz: 5, country: 'PK' },
  { id: 'multan', nameUr: 'ملتان', nameRo: 'Multan', nameEn: 'Multan', lat: 30.1575, lng: 71.5249, tz: 5, country: 'PK' },
  { id: 'peshawar', nameUr: 'پشاور', nameRo: 'Peshawar', nameEn: 'Peshawar', lat: 34.0151, lng: 71.5249, tz: 5, country: 'PK' },
  { id: 'quetta', nameUr: 'کوئٹہ', nameRo: 'Quetta', nameEn: 'Quetta', lat: 30.1798, lng: 66.975, tz: 5, country: 'PK' },
  { id: 'sialkot', nameUr: 'سیالکوٹ', nameRo: 'Sialkot', nameEn: 'Sialkot', lat: 32.4945, lng: 74.5229, tz: 5, country: 'PK' },
  { id: 'gujranwala', nameUr: 'گوجرانوالہ', nameRo: 'Gujranwala', nameEn: 'Gujranwala', lat: 32.1877, lng: 74.1945, tz: 5, country: 'PK' },
  { id: 'sahiwal', nameUr: 'ساہیوال', nameRo: 'Sahiwal', nameEn: 'Sahiwal', lat: 30.6682, lng: 73.1114, tz: 5, country: 'PK' },
  { id: 'pakpattan', nameUr: 'پاکپتن شریف', nameRo: 'Pakpattan', nameEn: 'Pakpattan', lat: 30.341, lng: 73.3866, tz: 5, country: 'PK' },

  // Global Diaspora Cities
  { id: 'london', nameUr: 'لندن (برطانیہ)', nameRo: 'London (UK)', nameEn: 'London (UK)', lat: 51.5074, lng: -0.1278, tz: 0, country: 'UK' },
  { id: 'birmingham', nameUr: 'برمنگھم (برطانیہ)', nameRo: 'Birmingham (UK)', nameEn: 'Birmingham (UK)', lat: 52.4862, lng: -1.8904, tz: 0, country: 'UK' },
  { id: 'newyork', nameUr: 'نیویارک (امریکہ)', nameRo: 'New York (USA)', nameEn: 'New York (USA)', lat: 40.7128, lng: -74.006, tz: -5, country: 'US' },
  { id: 'toronto', nameUr: 'ٹورنٹو (کینیڈا)', nameRo: 'Toronto (Canada)', nameEn: 'Toronto (Canada)', lat: 43.6532, lng: -79.3832, tz: -5, country: 'CA' },
  { id: 'dubai', nameUr: 'دبئی (متحدہ عرب امارات)', nameRo: 'Dubai (UAE)', nameEn: 'Dubai (UAE)', lat: 25.2048, lng: 55.2708, tz: 4, country: 'AE' },
  { id: 'riyadh', nameUr: 'ریاض (سعودی عرب)', nameRo: 'Riyadh (KSA)', nameEn: 'Riyadh (KSA)', lat: 24.7136, lng: 46.6753, tz: 3, country: 'SA' },
  { id: 'makkah', nameUr: 'مکہ مکرمہ', nameRo: 'Makkah', nameEn: 'Makkah', lat: 21.3891, lng: 39.8579, tz: 3, country: 'SA' },
  { id: 'madinah', nameUr: 'مدینہ منورہ', nameRo: 'Madinah', nameEn: 'Madinah', lat: 24.5247, lng: 39.5692, tz: 3, country: 'SA' },
];

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function radToDeg(rad: number) {
  return (rad * 180) / Math.PI;
}

interface CalculatedTime {
  nameKey: string;
  titleUr: string;
  titleRo: string;
  titleEn: string;
  formatted12: string;
  formatted24: string;
  decimalHours: number;
  isPassed: boolean;
  isNext: boolean;
}

export default function NamazTimingsView() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [selectedCityId, setSelectedCityId] = useState<string>('lahore');
  const [customCoords, setCustomCoords] = useState<{ lat: number; lng: number; tz: number; label: string } | null>(null);
  const [asrJuristic, setAsrJuristic] = useState<'Hanafi' | 'Shafii'>('Hanafi');
  const [calcMethod, setCalcMethod] = useState<'Karachi' | 'MWL' | 'ISNA'>('Karachi');
  const [nowTime, setNowTime] = useState<Date>(getKarachiNow());

  // Live timer tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(getKarachiNow());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeLocation = useMemo(() => {
    if (customCoords) {
      return {
        nameUr: customCoords.label,
        nameRo: customCoords.label,
        nameEn: customCoords.label,
        lat: customCoords.lat,
        lng: customCoords.lng,
        tz: customCoords.tz,
      };
    }
    const city = CITY_PRESETS.find((c) => c.id === selectedCityId) || CITY_PRESETS[0];
    return {
      nameUr: city.nameUr,
      nameRo: city.nameRo,
      nameEn: city.nameEn,
      lat: city.lat,
      lng: city.lng,
      tz: city.tz,
    };
  }, [selectedCityId, customCoords]);

  // Astronomical calculation
  const timingsData = useMemo(() => {
    const date = nowTime;
    const { lat, lng, tz } = activeLocation;

    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / 86400000) + 1;

    // Fractional year in radians
    const gamma = ((2 * Math.PI) / 365) * (dayOfYear - 1);

    // Equation of time in minutes
    const eqtime =
      229.18 *
      (0.000075 +
        0.001868 * Math.cos(gamma) -
        0.032077 * Math.sin(gamma) -
        0.014615 * Math.cos(2 * gamma) -
        0.040849 * Math.sin(2 * gamma));

    // Solar declination in radians
    const decl =
      0.006918 -
      0.399912 * Math.cos(gamma) +
      0.070257 * Math.sin(gamma) -
      0.006758 * Math.cos(2 * gamma) +
      0.000907 * Math.sin(2 * gamma) -
      0.002697 * Math.cos(3 * gamma) +
      0.00148 * Math.sin(3 * gamma);

    const phi = degToRad(lat);

    // True Solar Noon
    const noon = 12 + tz - lng / 15 - eqtime / 60;

    // Helper for hour angle
    const getHourAngle = (alphaDeg: number) => {
      const alpha = degToRad(alphaDeg);
      const cosH = (Math.sin(alpha) - Math.sin(phi) * Math.sin(decl)) / (Math.cos(phi) * Math.cos(decl));
      if (cosH > 1) return 0;
      if (cosH < -1) return Math.PI;
      return Math.acos(cosH);
    };

    // Calculation Method Angles
    let fajrAngle = 18;
    let ishaAngle = 18;
    if (calcMethod === 'ISNA') {
      fajrAngle = 15;
      ishaAngle = 15;
    } else if (calcMethod === 'MWL') {
      fajrAngle = 18;
      ishaAngle = 17;
    }

    const hSunrise = radToDeg(getHourAngle(-0.833)) / 15;
    const sunrise = noon - hSunrise;
    const sunset = noon + hSunrise;

    const hFajr = radToDeg(getHourAngle(-fajrAngle)) / 15;
    const fajr = noon - hFajr;

    const hIsha = radToDeg(getHourAngle(-ishaAngle)) / 15;
    const isha = noon + hIsha;

    const asrFactor = asrJuristic === 'Hanafi' ? 2 : 1;
    const noonZenith = Math.abs(phi - decl);
    const asrAltRad = Math.atan(1 / (asrFactor + Math.tan(noonZenith)));
    const hAsr = radToDeg(getHourAngle(radToDeg(asrAltRad))) / 15;
    const asr = noon + hAsr;

    const zuhr = noon + 2 / 60; // 2 minutes past solar noon
    const maghrib = sunset + 2 / 60; // 2 minutes past sunset
    const ishraq = sunrise + 15 / 60; // 15 mins post sunrise

    const toFormat = (decimal: number) => {
      let hours = Math.floor(decimal);
      const minutes = Math.floor((decimal - hours) * 60);
      hours = (hours + 24) % 24;
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return {
        formatted12: `${hours12}:${String(minutes).padStart(2, '0')} ${period}`,
        formatted24: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
        decimalHours: decimal,
      };
    };

    const currentDecimalHours = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;

    const prayers = [
      { key: 'fajr', ur: 'فجر', ro: 'Fajr', en: 'Fajr', dec: fajr },
      { key: 'sunrise', ur: 'طلوعِ آفتاب', ro: 'Tulu-e-Aftab', en: 'Sunrise', dec: sunrise },
      { key: 'ishraq', ur: 'اشراق', ro: 'Ishraq', en: 'Ishraq', dec: ishraq },
      { key: 'zuhr', ur: 'ظہر', ro: 'Zuhr', en: 'Zuhr', dec: zuhr },
      { key: 'asr', ur: 'عصر', ro: 'Asr', en: 'Asr', dec: asr },
      { key: 'maghrib', ur: 'مغرب', ro: 'Maghrib', en: 'Maghrib', dec: maghrib },
      { key: 'isha', ur: 'عشاء', ro: 'Isha', en: 'Isha', dec: isha },
    ];

    // Find the next upcoming standard prayer
    const mainPrayerKeys = ['fajr', 'zuhr', 'asr', 'maghrib', 'isha'];
    const mainPrayers = prayers.filter((p) => mainPrayerKeys.includes(p.key));

    let nextPrayer = mainPrayers.find((p) => p.dec > currentDecimalHours);
    let isTomorrow = false;
    if (!nextPrayer) {
      // After Isha, next is tomorrow Fajr
      nextPrayer = mainPrayers[0];
      isTomorrow = true;
    }

    // Remaining seconds to next prayer
    let remainingSeconds = 0;
    if (nextPrayer) {
      let diffHours = nextPrayer.dec - currentDecimalHours;
      if (isTomorrow) diffHours += 24;
      remainingSeconds = Math.max(0, Math.floor(diffHours * 3600));
    }

    const rHours = Math.floor(remainingSeconds / 3600);
    const rMinutes = Math.floor((remainingSeconds % 3600) / 60);
    const rSeconds = remainingSeconds % 60;
    const formattedCountdown = `${String(rHours).padStart(2, '0')}:${String(rMinutes).padStart(2, '0')}:${String(rSeconds).padStart(2, '0')}`;

    const prayerTimesList: CalculatedTime[] = prayers.map((p) => {
      const formatted = toFormat(p.dec);
      const isNext = nextPrayer?.key === p.key;
      const isPassed = !isTomorrow && p.dec < currentDecimalHours;
      return {
        nameKey: p.key,
        titleUr: p.ur,
        titleRo: p.ro,
        titleEn: p.en,
        formatted12: formatted.formatted12,
        formatted24: formatted.formatted24,
        decimalHours: p.dec,
        isPassed,
        isNext,
      };
    });

    return {
      prayerTimesList,
      nextPrayer,
      formattedCountdown,
      isTomorrow,
    };
  }, [nowTime, activeLocation, asrJuristic, calcMethod]);

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const tzOffsetHours = -new Date().getTimezoneOffset() / 60;
        setCustomCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          tz: tzOffsetHours,
          label: isUrdu ? 'میری موجودہ لوکیشن (GPS)' : 'Current Location (GPS)',
        });
      },
      () => {
        alert('Could not retrieve GPS coordinates. Please select a city preset.');
      }
    );
  };

  const getPrayerIcon = (key: string) => {
    switch (key) {
      case 'fajr':
        return <Sunrise className="w-5 h-5 text-amber-300" />;
      case 'sunrise':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'ishraq':
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 'zuhr':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'asr':
        return <Sunset className="w-5 h-5 text-orange-400" />;
      case 'maghrib':
        return <Sunset className="w-5 h-5 text-amber-500" />;
      case 'isha':
        return <Moon className="w-5 h-5 text-indigo-300" />;
      default:
        return <Clock className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-10 max-w-5xl mx-auto">
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
          {isUrdu ? 'نماز کے اوقات و کاؤنٹ ڈاؤن' : isRoman ? 'Namaz Timings' : 'Namaz Timings & Countdown'}
        </span>
      </nav>

      {/* Hero Card: Next Prayer Live Countdown */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07130f] via-[#0d221a] to-[#11221c] border-2 border-[#d4af37]/60 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-right rtl:md:text-right ltr:md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-amber-300 text-xs font-bold">
              <Clock className="w-4 h-4 text-[#d4af37] animate-pulse" />
              <span>
                {isUrdu
                  ? `${timingsData.nextPrayer ? (isUrdu ? timingsData.nextPrayer.ur : timingsData.nextPrayer.en) : 'نماز'} میں باقی وقت`
                  : `Next Prayer: ${timingsData.nextPrayer?.en || 'Prayer'}`}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#fef3c7] font-mono tracking-wider">
              {timingsData.formattedCountdown}
            </h1>

            <p className={`text-xs sm:text-sm text-emerald-200/90 flex items-center justify-center md:justify-start gap-1.5 ${isUrdu ? 'font-urdu' : ''}`}>
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>
                {isUrdu ? activeLocation.nameUr : isRoman ? activeLocation.nameRo : activeLocation.nameEn} &bull;{' '}
                {asrJuristic === 'Hanafi' ? (isUrdu ? 'حنفی (مثلیْن)' : 'Hanafi') : (isUrdu ? 'شافعی (مثلِ اول)' : 'Shafi’i')}
              </span>
            </p>
          </div>

          {/* Quick Location & Calculation Controls */}
          <div className="bg-[#07100d] border border-[#d4af37]/40 rounded-2xl p-4 space-y-3 shrink-0 w-full md:w-auto">
            <div className="space-y-1.5">
              <label className={`block text-xs font-bold text-amber-300 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'شہر منتخب کریں:' : 'Select City Preset:'}
              </label>
              <div className="flex items-center gap-1.5">
                <select
                  value={customCoords ? '' : selectedCityId}
                  onChange={(e) => {
                    setSelectedCityId(e.target.value);
                    setCustomCoords(null);
                  }}
                  className="w-full sm:w-56 p-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs sm:text-sm focus:ring-1 focus:ring-[#d4af37] focus:outline-none"
                >
                  <optgroup label={isUrdu ? 'پاکستان' : 'Pakistan'}>
                    {CITY_PRESETS.filter((c) => c.country === 'PK').map((c) => (
                      <option key={c.id} value={c.id}>
                        {isUrdu ? c.nameUr : isRoman ? c.nameRo : c.nameEn}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label={isUrdu ? 'دیارِ غیر / انٹرنیشنل' : 'International'}>
                    {CITY_PRESETS.filter((c) => c.country !== 'PK').map((c) => (
                      <option key={c.id} value={c.id}>
                        {isUrdu ? c.nameUr : isRoman ? c.nameRo : c.nameEn}
                      </option>
                    ))}
                  </optgroup>
                </select>
                <button
                  onClick={handleGeolocation}
                  title={isUrdu ? 'موجودہ لوکیشن حاصل کریں' : 'Detect GPS Location'}
                  className="p-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white border border-[#d4af37]/40 text-xs font-bold transition shrink-0 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>

            {/* Asr Juristic Toggle */}
            <div className="space-y-1.5">
              <label className={`block text-xs font-bold text-amber-300 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'عصر کا مسلک (حنفی / شافعی):' : 'Asr Juristic Method:'}
              </label>
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-900 rounded-xl border border-stone-800 text-xs">
                <button
                  onClick={() => setAsrJuristic('Hanafi')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition cursor-pointer text-center ${
                    asrJuristic === 'Hanafi' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {isUrdu ? 'حنفی (ڈیفالٹ)' : 'Hanafi'}
                </button>
                <button
                  onClick={() => setAsrJuristic('Shafii')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition cursor-pointer text-center ${
                    asrJuristic === 'Shafii' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {isUrdu ? 'شافعی / مالکی' : 'Shafi’i'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Prayers Timetable Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'آج کے اوقاتِ نماز' : 'Today’s Prayer Timings'}
          </h2>
          <span className="text-xs text-slate-500 dark:text-emerald-300/80">
            {nowTime.toLocaleDateString(language === 'ur' ? 'ur-PK' : 'en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {timingsData.prayerTimesList.map((p) => {
            const isHighlight = p.isNext;
            return (
              <div
                key={p.nameKey}
                className={`rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between space-y-2 border ${
                  isHighlight
                    ? 'bg-gradient-to-b from-amber-500/20 via-[#11221c] to-[#07130f] border-[#d4af37] ring-2 ring-[#d4af37]/40 shadow-xl scale-[1.02]'
                    : p.isPassed
                    ? 'bg-stone-100/70 dark:bg-[#0b1612]/60 border-stone-200 dark:border-stone-800 text-slate-500 dark:text-slate-400'
                    : 'bg-white dark:bg-[#11221c] border-stone-200 dark:border-emerald-800/60 text-slate-900 dark:text-white shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800">
                    {getPrayerIcon(p.nameKey)}
                  </span>
                  {isHighlight && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase">
                      {isUrdu ? 'اگلی' : 'Next'}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${isUrdu ? 'font-urdu leading-normal' : ''}`}>
                    {isUrdu ? p.titleUr : isRoman ? p.titleRo : p.titleEn}
                  </h3>
                  <p className="text-base sm:text-lg font-black text-emerald-800 dark:text-[#fef3c7] font-mono">
                    {p.formatted12}
                  </p>
                </div>

                <div className="text-[10px] text-stone-500 dark:text-stone-400 pt-1 border-t border-stone-200 dark:border-stone-800">
                  {p.nameKey === 'sunrise' || p.nameKey === 'ishraq'
                    ? isUrdu ? 'نفل / مکروہ حد' : 'Sunnah/Nafl'
                    : isUrdu ? 'فرض نماز' : 'Obligatory'}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Makruh Times Warning Box */}
      <section className="rounded-2xl p-5 bg-gradient-to-r from-red-950/40 via-amber-950/30 to-[#07130f] border border-amber-600/50 text-[#fef3c7] space-y-3 shadow-md">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <h3 className={isUrdu ? 'font-urdu text-base' : ''}>
            {isUrdu ? 'اوقاتِ مکروہہ کی شرعی تنبیہ (جن میں نماز ممنوع ہے)' : 'Prohibited (Makruh) Prayer Times Guide'}
          </h3>
        </div>
        <p className={`text-xs sm:text-sm text-amber-100/90 leading-relaxed ${isUrdu ? 'font-urdu leading-[1.85]' : ''}`}>
          {isUrdu
            ? 'احادیثِ صحیحہ (مسلم: 831) کے مطابق دن میں تین اوقات ایسے ہیں جن میں رسول اللہ ﷺ نے نماز پڑھنے یا اپنے مردوں کو دفنانے سے منع فرمایا: (۱) طلوعِ آفتاب کے وقت جب تک سورج ایک نیزہ بلند نہ ہو جائے (طلوع کے بعد تقریباً ۱۵ تا ۲۰ منٹ)۔ (۲) نصف النہار یعنی عین دوپہر زوال کا وقت جب تک سورج ڈھل نہ جائے۔ (۳) غروبِ آفتاب کے وقت جب تک سورج پوری طرح ڈوب نہ جائے۔ ان اوقات میں کوئی فرض، قضا یا نفل نماز پڑھنا یا سجدہ تلاوت کرنا جائز نہیں۔'
            : 'According to Sahih Muslim (831), prayer and burying the deceased are strictly prohibited during three distinct periods: (1) During Sunrise until the sun has risen above the horizon by a spear’s height (approx. 15-20 mins). (2) At Zenith (midday solar noon) until the sun begins to decline. (3) During Sunset until the solar disk has fully disappeared. No obligatory, missed (qaza), or voluntary (nafl) prayers may be performed in these windows.'}
        </p>
      </section>

      {/* Scholarly Guide on Prayer Timings */}
      <section className="bg-stone-50 dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-[#d4af37]" />
          <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'نماز کے اوقات کی شرعی حدود اور فقہی تفاصیل' : 'Fiqhi Principles of Islamic Prayer Times'}
          </h3>
        </div>

        <div className={`text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90 leading-relaxed space-y-3 ${isUrdu ? 'font-urdu text-sm sm:text-base leading-[2.0]' : ''}`}>
          <p>
            {isUrdu ? (
              <>
                قرآنِ کریم میں اللہ سبحانہ و تعالیٰ کا ارشاد ہے: <em>&quot;بے شک نماز کا مومنوں پر مقررہ اوقات میں ادا کرنا فرض ہے&quot;</em> (سورۃ النساء: ۱۰۳)۔ حضرت جبرائیل علیہ السلام نے دو مرتبہ حضور نبی کریم ﷺ کی امامت فرما کر نماز کے اول اور آخر وقت کی عملی تعلیم دی (ترمذی: ۱۴۹)۔ فجر کا وقت صبحِ صادق (افق پر سفیدی پھیلنے) سے طلوعِ آفتاب تک رہتا ہے۔ ظہر کا وقت زوالِ آفتاب کے فوراً بعد سے ہر چیز کا سایہ زوال کے سایہ کے علاوہ اس کے مثل یا مثلین ہونے تک رہتا ہے۔
              </>
            ) : isRoman ? (
              <>
                Quran-e-Kareem mein irshad hai: <em>&quot;Beshaq namaz momino par muqarrara auqat mein farz hai&quot;</em> (Surah An-Nisa: 103). Hazrat Jibreel (A.S) ne Huzoor ﷺ ki imamat farma kar auqat ki taleem di. Fajr ka waqt subah sadiq se tulu-e-aftab tak rehta hai, aur Zuhr ka waqt zawal ke foran baad shuru hota hai.
              </>
            ) : (
              <>
                The Holy Quran proclaims: <em>&quot;Indeed, prayer has been decreed upon the believers a decree of specified times&quot;</em> (Surah An-Nisa: 103). The Angel Gabriel (A.S) personally demonstrated the exact opening and concluding boundaries of each prayer to Prophet Muhammad ﷺ over two days (Jami` at-Tirmidhi: 149).
              </>
            )}
          </p>
          <p>
            {isUrdu ? (
              <>
                عصر کے وقت میں فقہائے احناف کے نزدیک وقت اس وقت شروع ہوتا ہے جب ہر چیز کا سایہ زوال کے علاوہ اس سے دو گنا ہو جائے (عصرِ ثانی)، جبکہ جمہور ائمہ (امام شافعی، امام مالک، امام احمد) کے نزدیک ایک مثل ہونے پر شروع ہو جاتا ہے (عصرِ اول)۔ مغرب کا وقت سورج ڈوبتے ہی شروع ہوتا ہے اور افق پر سرخی و سفیدی غائب ہونے تک رہتا ہے، جس کے بعد عشاء کا وقت طلوعِ فجر صادق تک جاری رہتا ہے۔
              </>
            ) : isRoman ? (
              <>
                Asr ke waqt mein Hanafi fiqh ke mutabiq saya do-guna hone par waqt hota hai (Asr-e-Sani), jabkay Shafii, Maliki aur Hanbali aaimah ke nazdeek saya aik guna hone par waqt shuru ho jata hai. Maghrib suraj doobte hi shuru hoti hai aur Isha subah sadiq tak rehti hai.
              </>
            ) : (
              <>
                Regarding Asr, the Hanafi school holds that Asr begins when an object’s shadow becomes twice its height plus its noon shadow (factor 2), whereas the Shafi’i, Maliki, and Hanbali schools hold it commences when the shadow equals its single height (factor 1). Maghrib begins instantaneously at sunset, followed by Isha once the twilight disappears until Fajr.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-4">
        <h3 className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-[#fef3c7] ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'عام پوچھے جانے والے سوالات (FAQs)' : 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-3">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'نماز کے مستحب اوقات سے کیا مراد ہے؟'
                : 'What are the preferred (Mustahab) times for prayers?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'فجر کو اسفار (کچھ روشنی پھیلنے) میں، گرمیوں میں ظہر کو قدرے ٹھنڈا کر کے، عصر کو دھوپ کی تیزی زائل ہونے تک تاخیر کے بغیر، مغرب کو فوراً اول وقت میں، اور عشاء کو رات کی پہلی تہائی تک مؤخر کرنا مستحب ہے۔'
                : 'Fajr is preferred when the sky begins to lighten (Isfar); Zuhr is slightly delayed in extreme summer heat; Asr is offered before the sun begins to yellow; Maghrib is expedited immediately after sunset; and Isha is preferred within the first third of the night.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'اشراق اور چاشت (ضحیٰ) کی نماز کا صحیح وقت کیا ہے؟'
                : 'What is the correct time for Ishraq and Chasht (Duha) prayers?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'طلوعِ آفتاب کے تقریباً ۱۵ تا ۲۰ منٹ بعد جب سورج نیزہ بھر بلند ہو جائے تو اشراق کا وقت شروع ہو جاتا ہے۔ جبکہ دن کا چوتھائی حصہ گزر جانے کے بعد نصف النہار سے پہلے تک کا وقت چاشت (صلاۃ الضحیٰ) کا بہترین وقت ہے۔'
                : 'Ishraq commences approximately 15-20 minutes after sunrise when the sun has risen above the horizon. Chasht (Salat al-Duha) is ideally performed later in the morning when the sun’s warmth increases until shortly before zenith.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'کیا سفر میں دورانِ پرواز یا ٹرین نماز کے اوقات تبدیل ہوتے ہیں؟'
                : 'Do prayer times change while traveling by flight or train?'}
            </h4>
            <p className={`text-xs sm:text-sm text-slate-600 dark:text-emerald-200/90 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu
                ? 'جی ہاں! نماز کے اوقات کا دارومدار مسافر کی اس وقت کی زمینی و فضائی پوزیشن اور سورج کی روشنی پر ہوتا ہے۔ اگر جہاز مشرق کی طرف پرواز کر رہا ہو تو اوقات تیزی سے بدلتے ہیں اور مغرب و فجر جلد ہو جاتی ہے۔'
                : 'Yes! Prayer times correspond to the traveler’s instantaneous geographic position and solar elevation. In flight, sunset occurs slightly later at high altitudes, and eastward journeys shorten intervals between prayers.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
