# 📜 Antigravity Project Guide: AkhlaqiBaatein.com (اخلاقی باتیں)

> **Note for Antigravity AI:** This file contains the complete architectural blueprint, design philosophy, conversation history, data schemas, and strict rules for **AkhlaqiBaatein.com**. Read this file first when opening this project on any system.

---

## 1. Project Overview & Vision
- **Site Name:** AkhlaqiBaatein.com (اخلاقی باتیں)
- **Domain:** Islamic & Moral Wisdom Web Portal.
- **Goal:** Digitize authentic classical moral literature—specifically ***Makhzan-e-Akhlaq* (مخزنِ اخلاق)** and authentic Hadith/Aphorisms—for modern readers with high-quality SEO, Google AdSense readiness, and viral social sharing features.
- **Current Status:** Production-ready Next.js application with 150 authentic quotes from *Makhzan-e-Akhlaq* across 10 batches, plus 12 classic quotes (total 162 quotes), 185 statically generated SSG pages, and 0 TypeScript errors.

---

## 2. Tech Stack & Dependencies
- **Framework:** Next.js (App Router inside `src/app/`, React 19).
- **Language:** TypeScript 5.
- **Styling:** Tailwind CSS v4 with custom utilities.
  - Emerald Green palette (`#065f46`, `#064e3b`, `#022016`)
  - Warm Gold accents (`#d97706`, `#f59e0b`, `#fbbf24`)
  - Full Dark Mode and Light Mode support.
- **Typography:**
  - Urdu Nastaleeq: `font-urdu` utility with `'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif`, `line-height: 2.2 - 2.5`, `direction: rtl`.
  - Roman Urdu & English: `Plus Jakarta Sans`, `Inter`, system-ui.
- **Icons:** `lucide-react`.
- **Database/Backend Ready:** `supabase/schema.sql` is provided for future PostgreSQL migration, but currently powered by a lightning-fast modular TypeScript data layer in `src/data/`.

---

## 3. STRICT 3-Language Isolation Mode (CRITICAL RULE)
The website enforces strict language isolation via `LanguageContext` (`src/context/LanguageContext.tsx`):
There are 3 supported language modes:
1. `'ur'` (Pure Urdu Nastaleeq)
2. `'ro'` (Pure Roman Urdu)
3. `'en'` (Pure English)

### ⚠️ Strict Rules for Agents:
- **When user selects `'ur'`:**
  - Layout direction is `dir="rtl"`.
  - Font is Nastaleeq.
  - Header, menus, search placeholder, buttons, quote title, main quote text, author name, book reference, and commentary (Tashreeh) **MUST be 100% in Urdu script**.
  - **No English or Roman Urdu words must leak** onto the screen.
- **When user selects `'ro'`:**
  - Layout direction is `dir="ltr"`.
  - Everything (UI, buttons, titles, quotes, authors, Tashreeh) **MUST be 100% in Roman Urdu**.
- **When user selects `'en'`:**
  - Layout direction is `dir="ltr"`.
  - Everything **MUST be 100% in English**.
- All UI labels are centralized in `src/data/uiTranslations.ts`.

---

## 4. Data Layer Architecture & Batch Progress

### Schema (`src/data/types.ts`)
```ts
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
```

### Completed Batches from *Makhzan-e-Akhlaq* (`src/data/quotes.ts`):
1. **Batch #1 (`batch1Quotes`):** IDs `ma-001` to `ma-015`
   - *Pages 7 to 19:* Divine laws, character, humility, charity without reminders, trust in God, greetings, mercy to beggars, pleasing believers, honoring elders, cheerfulness, health & time.
2. **Batch #2 (`batch2Quotes`):** IDs `ma-016` to `ma-030`
   - *Pages 20 to 60:* 5 rights of a believer, moderation in friendship, continuous growth, halal earning, guarding speech, Farewell Sermon (equality), servant leadership, 40 Hadith selections.
3. **Batch #3 (`batch3Quotes`):** IDs `ma-031` to `ma-045`
   - *Pages 60 to 93:* Wisdom of Prophet Solomon (soft answer), Prophet Jesus (secret charity), Hazrat Abu Bakr (worship as trade, legacy of knowledge, giving before asked), Hazrat Umar (prompt action, fostering affection, planning), Hazrat Usman (slip of tongue, fruit of knowledge), Hazrat Ali (cheerfulness, forgiveness, words as master, charity of intellect).
4. **Batch #4 (`batch4Quotes`):** IDs `ma-046` to `ma-060`
   - *Pages 8 to 532:* Socrates (silence), worldly waystation, kinship, knowledge & practice, value of time, anger control, gratitude (Surah Ibrahim), speaking truth to oppressors, repentance, mother's status, dignity of labor, true peace, generosity vs miserliness, modesty, patience in trial (Inna Lillahi).
5. **Batch #5 (`batch5Quotes`):** IDs `ma-061` to `ma-075`
   - *Pages 12 to 145:* Dignity of labor (friend of God), Hazrat Umar's self-accountability (muhasba), repaying evil with good, knowledge without practice is burden, love of the world is root of sins, Tahajjud vigil, avoiding idle talk, the believer's wondrous state in joy and adversity, guarding tongue and chastity, helping the oppressed/oppressor, honest merchant with prophets, envy like fire, truthfulness without witness, patience and prayer, knowledge bearing the fruit of action.
6. **Batch #6 (`batch6Quotes`):** IDs `ma-076` to `ma-090`
   - *Pages 10 to 356:* Plato (experience as teacher), Hazrat Ali (bad friends like blacksmith furnace, advice in public vs private, knowledge calling to action), Surah Ash-Sharh (ease with hardship), Hazrat Umar (moment of justice vs 60 years worship), consistent deeds in Hadith, Hazrat Usman (guarding tongue prevents half of troubles), Socrates (know thyself), Prophet Jesus (loving enemies & praying for persecutors), kindness to parents (Surah Al-Isra), gentle speech (Surah Al-Baqarah), contentment with divine allocation (Qana'at), gratitude to people (Hadith), preparing for the hereafter before death.
7. **Batch #7 (`batch7Quotes`):** IDs `ma-091` to `ma-105`
   - *Pages 11 to 90:* Recording debts & truthfulness, reflecting on God's forgiveness before retaliating in anger, purpose of tribes and piety as true nobility (Surah Al-Hujurat 49:13), respite to indebted debtors in hardship, traits of muttaqeen (restraining anger and pardon), plea of limbs to the tongue, everyday charity (reconciliation, lifting loads, kind speech, clearing harm), sharing broth with neighbors, blessings preserved by serving people's needs, pure modest sustenance & wise spouse (Prophet Solomon), avoiding fault-finding & gentle correction (Prophet Jesus), concise speech & true honor without status (Hazrat Abu Bakr), moderation in speech/food/sleep & youth before old age (Hazrat Umar), three victims of backbiting & contentment as earthly paradise (Hazrat Usman), learning through experience & teaching others (Hazrat Ali).
8. **Batch #8 (`batch8Quotes`):** IDs `ma-106` to `ma-120`
   - *Pages 7 to 91:* Divine wisdom behind disliked outcomes & insight of hearts, no burden beyond capacity & striving for one's own good, wealth like rainwater (moderation vs destruction), true testimony & interceding for good, believer not stung twice & wisdom through trials, Maqam-e-Ehsan & serving God's family, gifts dissolving rancor & not rejoicing in others' pain, heart purity as reform of the whole body, golden pillars of Uswah-e-Hasanah, learning from others' mistakes & self-awareness, timely speech like apples of gold (Prophet Solomon), weeping over a day without good & true generosity (Hazrat Abu Bakr), true friend points out faults & greed is poverty (Hazrat Umar), wasted blessings & speech reforming the heart (Hazrat Usman), true nobility in intellect & manners not lineage (Hazrat Ali).
9. **Batch #9 (`batch9Quotes`):** IDs `ma-121` to `ma-135`
   - *Pages 8 to 92:* Spending what is loved most to attain true righteousness (Surah Ali 'Imran 3:92), worldly adornments vs enduring good deeds (Surah Al-Kahf 18:46), pure life promised for faith and good deeds (Surah An-Nahl 16:97), kindness to strangers & verbal charity, good character as the heaviest deed on the scale, brotherhood without suspicion or envy, charter of neighborly rights (consoling, lending, visiting), slow to anger and quick to forgive as best temperament, keeping promises & cheating/false oaths/privacy, righteous rising after stumbling & restraining speech (Prophet Solomon), pleasant words & unpracticing scholar as blind with lamp (Prophet Jesus), avoiding sin & humility of the rich (Hazrat Abu Bakr), seeking knowledge before leadership & protecting the oppressed (Hazrat Umar), self-reliance & mending own shoes against pride (Hazrat Usman), self-respect, gratitude, and heights of truthfulness (Hazrat Ali).
10. **Batch #10 (`batch10Quotes`):** IDs `ma-136` to `ma-150`
   - *Pages 7 to 90:* Siddiq rank through acceptance of decree & patience in trials, calling to God with wisdom and gentle dialogue, individual accountability for every deed, spending finest lawful earnings rather than useless goods, prohibition of consuming wealth unjustly and bribery, seventy mercies in handshake & forty houses neighborhood right, best people inspire good and make others feel safe, greed for status like hungry wolves & plea of the oppressed, disclosing defects in trade & true lasting wealth, patience among people and double reward for kinship charity, three companions (wealth, family, deeds), turning enemies into friends & hearing the cry of the poor (Prophet Solomon), provisions for two journeys and treasure in heaven (Prophet Jesus), boundless reward of patience & guarding against complaints (Hazrat Abu Bakr), true worth hidden under tongue & highest modesty before conscience (Hazrat Ali).

### How to Add Future Batches (e.g., `batch11Quotes`):
1. Define `export const batch11Quotes: QuoteItem[] = [ ... ];` in `src/data/quotes.ts`.
2. In `batchMappedQuotes`, spread the new batch:
   ```ts
   const batchMappedQuotes: Quote[] = [
     ...batch1Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 7)),
     ...batch2Quotes.map((q, idx) => quoteItemToQuote(q, idx === 9)),
     ...batch3Quotes.map((q, idx) => quoteItemToQuote(q, idx === 4 || idx === 12)),
     ...batch4Quotes.map((q, idx) => quoteItemToQuote(q, idx === 6 || idx === 9)),
     ...batch5Quotes.map((q, idx) => quoteItemToQuote(q, idx === 1 || idx === 7)),
     ...batch6Quotes.map((q, idx) => quoteItemToQuote(q, idx === 2 || idx === 9)),
     ...batch7Quotes.map((q, idx) => quoteItemToQuote(q, idx === 2 || idx === 4)),
     ...batch8Quotes.map((q, idx) => quoteItemToQuote(q, idx === 5 || idx === 8)),
     ...batch9Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 4)),
     ...batch10Quotes.map((q, idx) => quoteItemToQuote(q, idx === 0 || idx === 10)),
     ...batch11Quotes.map((q, idx) => quoteItemToQuote(q)),
   ];
   ```
3. Test with `npm run build` to ensure static page count increments with 0 errors.

---

## 5. Key Interactive Features

### A. Viral Status Image Generator (HTML5 Canvas)
- Located in `src/lib/canvasGenerator.ts` and `src/components/StatusImageModal.tsx`.
- Generates a royal 1080x1080px JPEG/PNG card with:
  - Deep royal emerald gradient background
  - Subtle gold geometric line pattern
  - Double gold border with corner ornaments
  - Header: Inscription in active language (Bismillah in Arabic/Roman/English)
  - Centered quote text with wrapped typography
  - Tashreeh / Moral lesson in active language
  - Footer watermark: **`AkhlaqiBaatein.com | اخلاقی باتیں`**
- **Strictly adapts to the currently active language** (`ur`, `ro`, or `en`).

### B. Interactive 40 Hadith Tracker
- Located in `src/app/chahal-hadith/page.tsx` and `src/components/ChahalHadithTracker.tsx`.
- Displays classic 40 Hadith with Arabic, Urdu, Roman Urdu, and English.
- Interactive checkboxes saved in `localStorage` with a dynamic progress bar (*"X / 40 Ahadith Memorized"*).

### C. Search & Filter Feed
- Located in `src/components/SearchAndQuoteFeed.tsx`.
- Searches across text, titles, authors, tashreeh, and tags in all 3 languages simultaneously.

### D. SEO & AdSense Infrastructure
- Dynamic metadata (`generateMetadata`) on every quote, article, and category route.
- JSON-LD Structured Data (`Quotation` & `Article` schema) in `src/components/JsonLd.tsx`.
- Sitemap: `src/app/sitemap.ts` (dynamic for all quotes, categories, and articles).
- Robots: `src/app/robots.ts`.
- AdSlots: `src/components/AdSlot.tsx` (CLS-safe AdSense slots).
- Compliance Pages: `/about`, `/contact`, `/privacy-policy`, `/terms`, `/disclaimer`.

---

## 6. Directory Structure
```
akhlaqi-baatein/
├── public/                 # Static assets & SVG icons
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.tsx        # Home Page (Hero + Search Feed)
│   │   ├── layout.tsx      # Root Layout with Font & Meta
│   │   ├── quote/[slug]/   # Dynamic Quote Detail SSG page
│   │   ├── category/[slug]/# Category feed SSG page
│   │   ├── chahal-hadith/  # 40 Hadith Tracker
│   │   ├── articles/       # In-depth moral articles
│   │   ├── books/          # Classic books overview (Makhzan-e-Akhlaq)
│   │   ├── sitemap.ts      # Dynamic XML sitemap
│   │   ├── robots.ts       # Robots.txt configuration
│   │   └── (legal)/        # /about, /contact, /privacy-policy, /terms, /disclaimer
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Language selector & Navigation
│   │   ├── Footer.tsx      # Footer with links and branding
│   │   ├── QuoteCard.tsx   # Quote card with copy, share, download modal
│   │   ├── QuoteDetailView.tsx # Full page quote view
│   │   ├── SearchAndQuoteFeed.tsx # Interactive search & filter
│   │   ├── StatusImageModal.tsx   # Canvas modal
│   │   └── AdSlot.tsx      # AdSense slot placeholder
│   ├── context/
│   │   └── LanguageContext.tsx # Global Strict 3-Language State
│   ├── data/
│   │   ├── types.ts        # TypeScript schemas (QuoteItem, Quote, Category, etc.)
│   │   ├── quotes.ts       # All batches (batch1-10) & helper getters
│   │   ├── categories.ts   # Category definitions
│   │   ├── chahalHadith.ts # 40 Ahadith dataset
│   │   ├── articles.ts     # In-depth research articles
│   │   ├── books.ts        # Book directory
│   │   └── uiTranslations.ts # 3-Language UI strings dictionary
│   └── lib/
│       └── canvasGenerator.ts # HTML5 Canvas 1080x1080px engine
├── supabase/
│   └── schema.sql          # PostgreSQL schema for future database switch
├── INSTALL_AND_START.bat   # 1-Click launcher for Windows
├── BUILD_CHECK.bat         # 1-Click production build test
├── HOW_TO_RUN_ON_NEW_COMPUTER.txt # Plain text setup guide
├── ANTIGRAVITY.md          # THIS FILE - Antigravity Agent Manual
├── AGENTS.md               # Universal Agent instructions
├── package.json            # Project manifest
└── tsconfig.json           # TypeScript configuration
```

---

## 7. Developer Commands
```bash
# 1. Install dependencies
npm install

# 2. Start development server (runs on http://localhost:3000)
npm run dev

# 3. Build & verify production static pages (must be 0 errors)
npm run build

# 4. Start production server
npm start
```

---
*Created for seamless handover across development environments and automated agent continuity.*
