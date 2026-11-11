import { Language } from '@/data/types';
import { computeFormattedDate } from './dateUtils';

export type PostFormat = '4:5' | '9:16';

export interface CanvasData {
  text: string;
  explanation?: string;
  author: string;
  category: string;
  slug: string;
  lang: Language;
  title?: string;
  bookRef?: string;
  format?: PostFormat;
  showDate?: boolean;
}

const HONORIFIC_REGEX = /(\uFDFA|\uFDFB|ﷺ)/g;
const HONORIFIC_TEST_REGEX = /^(\uFDFA|\uFDFB|ﷺ)$/;
const HONORIFIC_PADDING_X = 6;

interface FontSpec {
  primaryFont: string;
  honorificFont: string;
  isRtl: boolean;
}

function makeFontSpec(
  size: number,
  isUrdu: boolean,
  options: { bold?: boolean; italic?: boolean } = {}
): FontSpec {
  const { bold = false, italic = false } = options;
  if (isUrdu) {
    return {
      primaryFont: `${bold ? 'bold ' : ''}${size}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif`,
      // Amiri renders the Sallallahu Alayhi Wasallam ligature compactly inline without vertical collision
      honorificFont: `${Math.round(size * 0.9)}px "Amiri", "Traditional Arabic", "Noto Sans Arabic", serif`,
      isRtl: true,
    };
  }
  return {
    primaryFont: `${italic ? 'italic ' : ''}${bold ? 'bold ' : '600 '}${size}px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif`,
    honorificFont: `${Math.round(size * 0.92)}px "Amiri", "Traditional Arabic", serif`,
    isRtl: false,
  };
}

function measureFormattedWidth(
  ctx: CanvasRenderingContext2D,
  text: string,
  spec: FontSpec
): number {
  const parts = text.split(HONORIFIC_REGEX).filter(Boolean);
  let total = 0;
  ctx.save();
  for (const part of parts) {
    if (HONORIFIC_TEST_REGEX.test(part)) {
      ctx.font = spec.honorificFont;
      total += ctx.measureText(part).width + HONORIFIC_PADDING_X * 2;
    } else {
      ctx.font = spec.primaryFont;
      total += ctx.measureText(part).width;
    }
  }
  ctx.restore();
  return total;
}

function drawFormattedLine(
  ctx: CanvasRenderingContext2D,
  text: string,
  centerX: number,
  y: number,
  spec: FontSpec
) {
  const parts = text.split(HONORIFIC_REGEX).filter(Boolean);
  if (parts.length === 0) return;

  const widths = parts.map((part) => {
    ctx.font = HONORIFIC_TEST_REGEX.test(part) ? spec.honorificFont : spec.primaryFont;
    const baseW = ctx.measureText(part).width;
    return HONORIFIC_TEST_REGEX.test(part) ? baseW + HONORIFIC_PADDING_X * 2 : baseW;
  });

  const totalWidth = widths.reduce((sum, w) => sum + w, 0);

  ctx.save();
  ctx.textBaseline = 'middle';

  if (spec.isRtl) {
    let cursorX = centerX + totalWidth / 2;
    ctx.textAlign = 'right';
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isHon = HONORIFIC_TEST_REGEX.test(part);
      ctx.font = isHon ? spec.honorificFont : spec.primaryFont;
      ctx.direction = isHon ? 'ltr' : 'rtl';
      if (isHon) {
        ctx.fillText(part, cursorX - HONORIFIC_PADDING_X, y);
      } else {
        ctx.fillText(part, cursorX, y);
      }
      cursorX -= widths[i];
    }
  } else {
    let cursorX = centerX - totalWidth / 2;
    ctx.textAlign = 'left';
    ctx.direction = 'ltr';
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isHon = HONORIFIC_TEST_REGEX.test(part);
      ctx.font = isHon ? spec.honorificFont : spec.primaryFont;
      if (isHon) {
        ctx.fillText(part, cursorX + HONORIFIC_PADDING_X, y);
      } else {
        ctx.fillText(part, cursorX, y);
      }
      cursorX += widths[i];
    }
  }

  ctx.restore();
}

function wrapFormattedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  spec: FontSpec
): string[] {
  const paragraphs = text.split('\n');
  const lines: string[] = [];

  for (const rawParagraph of paragraphs) {
    const trimmed = rawParagraph.trim();
    if (!trimmed) continue;

    const words = trimmed.split(/\s+/);
    let currentLine = words[0] || '';

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const candidate = `${currentLine} ${word}`;
      if (measureFormattedWidth(ctx, candidate, spec) <= maxWidth) {
        currentLine = candidate;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  }
  return lines;
}

function normalizeForCompare(str: string): string {
  return str
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\uFDFA\uFDFBﷺؓؒ]/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildDeduplicatedBadge(author: string, category: string): string {
  const cleanAuthor = author.trim();
  const cleanCategory = category.trim();
  if (!cleanCategory) return cleanAuthor;
  if (!cleanAuthor) return cleanCategory;

  const normAuthor = normalizeForCompare(cleanAuthor);
  const normCategory = normalizeForCompare(cleanCategory);

  if (
    !normAuthor ||
    normAuthor === normCategory ||
    normCategory.includes(normAuthor) ||
    normAuthor.includes(normCategory)
  ) {
    return cleanCategory.length <= cleanAuthor.length || normAuthor.includes('ارشاد') || normAuthor.includes('احکام')
      ? cleanAuthor
      : cleanCategory;
  }

  // Check overlapping significant words (>=3 chars, covering e.g. نبوی / نبی / صحابہ / قران / hadith)
  const authorWords = normAuthor.split(' ').filter((w) => w.length >= 3);
  const catWords = normCategory.split(' ').filter((w) => w.length >= 3);
  const hasSharedRoot = authorWords.some((aw) =>
    catWords.some((cw) => cw.includes(aw.slice(0, 3)) || aw.includes(cw.slice(0, 3)))
  );

  if (hasSharedRoot) {
    // Prefer specific figure/author title if concise; otherwise concise category
    return cleanAuthor.length <= 28 ? cleanAuthor : cleanCategory;
  }

  return `${cleanAuthor}  •  ${cleanCategory}`;
}

function shouldShowTitle(title: string | undefined, text: string): boolean {
  if (!title) return false;
  const cleanT = normalizeForCompare(title);
  const cleanQ = normalizeForCompare(text);
  if (!cleanT || cleanT.length < 4) return false;
  if (cleanQ.startsWith(cleanT.slice(0, Math.min(20, cleanT.length)))) return false;
  return true;
}

function sanitizeExplanation(raw: string | undefined): string {
  if (!raw) return '';
  return raw
    .replace(/^(?:پسِ منظر و تشریح|Pas-e-Manzar o Tashreeh|Context\s*&\s*Practical Lesson|Amli Sabaq|عملی سبق|Practical Lesson)\s*:\s*/i, '')
    .trim();
}

export async function generateStatusImage(data: CanvasData): Promise<string> {
  if (typeof document !== 'undefined' && document.fonts) {
    try {
      await document.fonts.ready;
      await Promise.allSettled([
        document.fonts.load('bold 40px "Noto Nastaliq Urdu"'),
        document.fonts.load('32px "Amiri"'),
        document.fonts.load('bold 24px "Plus Jakarta Sans"'),
      ]);
    } catch {
      // Ignore font loading timeout
    }
  }

  const format: PostFormat = data.format || '4:5';
  const showDate = data.showDate !== false;
  const width = 1080;
  const height = format === '9:16' ? 1920 : 1350;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) return '';

  const isUrdu = data.lang === 'ur';

  // 1. Luxury Deep Royal Emerald Full Canvas Background
  const bgGradient = ctx.createLinearGradient(0, 0, width, height);
  bgGradient.addColorStop(0, '#064e3b');
  bgGradient.addColorStop(0.4, '#032f23');
  bgGradient.addColorStop(0.75, '#021e16');
  bgGradient.addColorStop(1, '#01120c');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // 2. Subtle Islamic Geometric Diamond Lattice
  ctx.save();
  ctx.strokeStyle = 'rgba(217, 119, 6, 0.055)';
  ctx.lineWidth = 1.5;
  for (let i = -height; i < width + height; i += 84) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + height * 0.6, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(i, height);
    ctx.lineTo(i + height * 0.6, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Outer perimeter subtle framing line
  ctx.save();
  ctx.strokeStyle = 'rgba(217, 119, 6, 0.25)';
  ctx.lineWidth = 2;
  ctx.strokeRect(24, 24, width - 48, height - 48);
  ctx.restore();

  // 3. Measure Inner Compact Ornamental Card Layout
  const cardX = 60;
  const cardW = width - 120; // 960px
  const contentMaxW = cardW - 104; // 856px inner text zone
  const quoteBoxMaxW = cardW - 144; // 816px inside bordered quote card

  const cleanQuote = data.text.trim();
  const cleanExp = sanitizeExplanation(data.explanation);
  const cleanBookRef = (data.bookRef || '').trim();
  const formattedBookRef = cleanBookRef
    ? isUrdu
      ? `حوالہ: ${cleanBookRef}`
      : data.lang === 'ro'
      ? `Hawala: ${cleanBookRef}`
      : `Source: ${cleanBookRef}`
    : '';
  const badgeText = buildDeduplicatedBadge(data.author, data.category);
  const formattedDate = showDate ? computeFormattedDate(new Date(), data.lang) : '';
  const hasTitle = shouldShowTitle(data.title, cleanQuote);
  const cleanTitle = (data.title || '').trim();

  // Adaptive typography pass: steps down smoothly so complete quotes, book references,
  // and full explanation sentences (never clipped mid-sentence) fit cleanly inside the frame
  const maxCardHeight = height - 80; // Leaves comfortable vertical breathing room
  const scaleSteps = [1.0, 0.94, 0.88, 0.82, 0.76];
  const expShrinkSteps = [0, 2, 3];

  const splitCompleteSentences = (text: string): string[] =>
    text
      .split(/(?<=[۔.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

  interface CardLayoutPlan {
    quoteSpec: FontSpec;
    quoteLines: string[];
    quoteLH: number;
    refSpec: FontSpec;
    refLines: string[];
    refLH: number;
    expSpec: FontSpec;
    expLines: string[];
    expLH: number;
    titleSpec: FontSpec;
    titleLines: string[];
    titleLH: number;
    badgeSpec: FontSpec;
    badgeW: number;
    badgeH: number;
    dateSpec: FontSpec;
    dateW: number;
    dateH: number;
    includeExp: boolean;
    totalCardH: number;
    heights: {
      topPad: number;
      bismillahH: number;
      dateBlockH: number;
      badgeBlockH: number;
      titleBlockH: number;
      quotePadTop: number;
      quoteBoxH: number;
      expBlockH: number;
      footerH: number;
      gap: number;
    };
  }

  const measureLayout = (
    scale: number,
    expShrink: number,
    expTextCandidate: string
  ): CardLayoutPlan => {
    const charCount = cleanQuote.length;
    let baseQuoteSize: number;
    if (isUrdu) {
      baseQuoteSize = charCount < 110 ? 48 : charCount <= 220 ? 39 : charCount <= 340 ? 33 : 28;
    } else {
      baseQuoteSize = charCount < 110 ? 38 : charCount <= 220 ? 31 : charCount <= 340 ? 26 : 22;
    }
    const qSize = Math.round(baseQuoteSize * scale);
    const quoteLH = isUrdu ? Math.round(qSize * 2.12) : Math.round(qSize * 1.58);
    const quoteSpec = makeFontSpec(qSize, isUrdu, { bold: isUrdu, italic: !isUrdu });
    const quoteLines = wrapFormattedText(ctx, cleanQuote, quoteBoxMaxW, quoteSpec);

    const refSize = Math.max(isUrdu ? 16 : 13, Math.round((isUrdu ? 19 : 16) * scale));
    const refLH = isUrdu ? Math.round(refSize * 1.9) : Math.round(refSize * 1.42);
    const refSpec = makeFontSpec(refSize, isUrdu, { bold: true });
    const refLines = formattedBookRef
      ? wrapFormattedText(ctx, formattedBookRef, quoteBoxMaxW, refSpec)
      : [];

    const tSize = Math.round((isUrdu ? 27 : 22) * scale);
    const titleLH = isUrdu ? Math.round(tSize * 1.92) : Math.round(tSize * 1.38);
    const titleSpec = makeFontSpec(tSize, isUrdu, { bold: true });
    const titleLines = hasTitle
      ? wrapFormattedText(ctx, cleanTitle, contentMaxW, titleSpec).slice(0, 2)
      : [];

    const bSize = Math.round((isUrdu ? 23 : 19) * scale);
    const badgeSpec = makeFontSpec(bSize, isUrdu, { bold: true });
    const badgeTextW = measureFormattedWidth(ctx, badgeText, badgeSpec);
    const badgeW = Math.min(contentMaxW, Math.max(badgeTextW + 76, 260));
    const badgeH = isUrdu ? 66 : 52;

    const dSize = isUrdu ? 19 : 16;
    const dateSpec = makeFontSpec(dSize, isUrdu);
    const dateW = showDate
      ? Math.min(contentMaxW, measureFormattedWidth(ctx, formattedDate, dateSpec) + 56)
      : 0;
    const dateH = showDate ? (isUrdu ? 44 : 38) : 0;

    // Dynamically reduce explanation font size when > 160 chars so full sentences (up to 4-5+ lines)
    // render completely ending with '۔' / '.' without ever slicing mid-sentence
    const trimmedExp = expTextCandidate.trim();
    let baseExpSize: number;
    if (trimmedExp.length > 270) {
      baseExpSize = isUrdu ? 17 : 15;
    } else if (trimmedExp.length > 160) {
      baseExpSize = isUrdu ? 19 : 16;
    } else {
      baseExpSize = isUrdu ? 22 : 18;
    }
    const minExpSize = isUrdu ? 15 : 13;
    const expSize = Math.max(minExpSize, Math.round(baseExpSize * scale) - expShrink);
    const expLH = isUrdu
      ? Math.round(expSize * (expSize <= 18 ? 1.85 : 1.94))
      : Math.round(expSize * 1.44);
    const expSpec = makeFontSpec(expSize, isUrdu);
    const expLines = trimmedExp ? wrapFormattedText(ctx, trimmedExp, contentMaxW, expSpec) : [];
    const includeExp = expLines.length > 0;

    const gap = Math.round(22 * Math.max(0.82, scale));
    const topPad = 40;
    const bismillahH = isUrdu ? 52 : 38;
    const dateBlockH = showDate ? dateH + 16 : 0;
    const badgeBlockH = badgeH + Math.round(gap * 0.9);
    const titleBlockH = titleLines.length > 0 ? titleLines.length * titleLH + 14 : 0;

    // Generous top padding below the decorative opening quote mark so Urdu diacritics/ؒ never touch it
    const quotePadTop = isUrdu ? 74 : 58;
    const refBlockH = refLines.length > 0 ? 28 + refLines.length * refLH : 0;
    const quotePadBottom = refLines.length > 0 ? 20 : 26;
    const quoteBoxH = quotePadTop + quoteLines.length * quoteLH + refBlockH + quotePadBottom;

    const expDividerH = 38;
    const expBlockH = includeExp ? expDividerH + expLines.length * expLH + 20 : 0;
    const footerH = 72;

    const totalCardH =
      topPad +
      bismillahH +
      dateBlockH +
      badgeBlockH +
      titleBlockH +
      quoteBoxH +
      (includeExp ? gap + expBlockH : gap) +
      footerH +
      16;

    return {
      quoteSpec,
      quoteLines,
      quoteLH,
      refSpec,
      refLines,
      refLH,
      expSpec,
      expLines,
      expLH,
      titleSpec,
      titleLines,
      titleLH,
      badgeSpec,
      badgeW,
      badgeH,
      dateSpec,
      dateW,
      dateH,
      includeExp,
      totalCardH,
      heights: {
        topPad,
        bismillahH,
        dateBlockH,
        badgeBlockH,
        titleBlockH,
        quotePadTop,
        quoteBoxH,
        expBlockH,
        footerH,
        gap,
      },
    };
  };

  let chosenLayout: CardLayoutPlan | null = null;

  // Pass 1: Fit FULL explanation text cleanly without dropping a single character
  for (const scale of scaleSteps) {
    for (const shrink of expShrinkSteps) {
      const candidate = measureLayout(scale, shrink, cleanExp);
      chosenLayout = candidate;
      if (candidate.totalCardH <= maxCardHeight) {
        break;
      }
      if (!cleanExp) break;
    }
    if (chosenLayout && chosenLayout.totalCardH <= maxCardHeight) {
      break;
    }
  }

  // Pass 2 (extreme outliers only): fit complete sentences ending cleanly in '۔'/'.' — never mid-sentence
  if (chosenLayout && chosenLayout.totalCardH > maxCardHeight && cleanExp) {
    const sentences = splitCompleteSentences(cleanExp);
    let fitted = false;
    for (let count = sentences.length - 1; count >= 1; count--) {
      const sentenceSubset = sentences.slice(0, count).join(' ');
      const candidate = measureLayout(scaleSteps[scaleSteps.length - 1], 3, sentenceSubset);
      if (candidate.totalCardH <= maxCardHeight) {
        chosenLayout = candidate;
        fitted = true;
        break;
      }
    }
    if (!fitted) {
      chosenLayout = measureLayout(scaleSteps[scaleSteps.length - 1], 0, '');
    }
  }

  if (!chosenLayout) return '';

  // Center the Compact Auto-Fitted Ornamental Card vertically on the Canvas!
  const cardH = Math.min(chosenLayout.totalCardH, maxCardHeight);
  const cardY = Math.round((height - cardH) / 2);
  const centerX = width / 2;

  // For 9:16 Story Format: Subtle Top & Bottom Islamic Story Crest accents outside the centered card
  if (format === '9:16') {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(253, 230, 138, 0.32)';
    ctx.font = '24px serif';
    ctx.fillText('❖  ─────  ✦  ─────  ❖', centerX, Math.max(96, cardY - 46));
    ctx.fillText('❖  ─────  ✦  ─────  ❖', centerX, Math.min(height - 96, cardY + cardH + 46));
    ctx.restore();
  }

  // 4. Draw Compact Framed Ornamental Card Container
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
  ctx.shadowBlur = 45;
  ctx.shadowOffsetY = 18;
  const cardGrad = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardH);
  cardGrad.addColorStop(0, '#074f3b');
  cardGrad.addColorStop(0.55, '#033023');
  cardGrad.addColorStop(1, '#011c14');
  ctx.fillStyle = cardGrad;
  roundRect(ctx, cardX, cardY, cardW, cardH, 34);
  ctx.fill();
  ctx.restore();

  // Royal Double Gold Border on Inner Card
  ctx.save();
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 4.5;
  roundRect(ctx, cardX, cardY, cardW, cardH, 34);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(251, 191, 36, 0.38)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, cardX + 12, cardY + 12, cardW - 24, cardH - 24, 24);
  ctx.stroke();

  // 4 Corner Gold Medallions inside Card
  const cornerPoints = [
    [cardX + 26, cardY + 26],
    [cardX + cardW - 26, cardY + 26],
    [cardX + 26, cardY + cardH - 26],
    [cardX + cardW - 26, cardY + cardH - 26],
  ];
  ctx.fillStyle = '#f59e0b';
  for (const [cx, cy] of cornerPoints) {
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // 5. Render Inner Content Top-to-Bottom with Balanced Compact Spacing (24-32px)
  let cursorY = cardY + chosenLayout.heights.topPad;

  // 5A. Bismillah Header
  ctx.save();
  ctx.fillStyle = '#fde68a';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (isUrdu) {
    ctx.font = '34px "Amiri", "Traditional Arabic", serif';
    ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', centerX, cursorY + 16);
  } else if (data.lang === 'ro') {
    ctx.font = 'bold 20px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('✦ BISMILLAH-IR-RAHMAN-IR-RAHEEM ✦', centerX, cursorY + 14);
  } else {
    ctx.font = 'bold 19px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('✦ IN THE NAME OF ALLAH, THE MOST MERCIFUL ✦', centerX, cursorY + 14);
  }
  ctx.restore();
  cursorY += chosenLayout.heights.bismillahH;

  // 5B. Optional Hijri + Gregorian Date Pill
  if (showDate && formattedDate) {
    const dX = centerX - chosenLayout.dateW / 2;
    ctx.save();
    ctx.fillStyle = 'rgba(2, 44, 34, 0.72)';
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
    ctx.lineWidth = 1.25;
    roundRect(ctx, dX, cursorY, chosenLayout.dateW, chosenLayout.dateH, chosenLayout.dateH / 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fef3c7';
    drawFormattedLine(ctx, formattedDate, centerX, cursorY + chosenLayout.dateH / 2 + 1, chosenLayout.dateSpec);
    ctx.restore();
    cursorY += chosenLayout.heights.dateBlockH;
  }

  // 5C. Generously Padded, Deduplicated Category/Author Pill Badge
  ctx.save();
  const badgeX = centerX - chosenLayout.badgeW / 2;
  ctx.fillStyle = 'rgba(217, 119, 6, 0.20)';
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  roundRect(ctx, badgeX, cursorY, chosenLayout.badgeW, chosenLayout.badgeH, chosenLayout.badgeH / 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#fcd34d';
  drawFormattedLine(
    ctx,
    badgeText,
    centerX,
    cursorY + chosenLayout.badgeH / 2 + (isUrdu ? 2 : 0),
    chosenLayout.badgeSpec
  );
  ctx.restore();
  cursorY += chosenLayout.heights.badgeBlockH;

  // 5D. Optional Quote Heading
  if (chosenLayout.titleLines.length > 0) {
    ctx.save();
    ctx.fillStyle = '#fbbf24';
    let titleY = cursorY + chosenLayout.titleLH * 0.52;
    for (const tLine of chosenLayout.titleLines) {
      drawFormattedLine(ctx, tLine, centerX, titleY, chosenLayout.titleSpec);
      titleY += chosenLayout.titleLH;
    }
    ctx.restore();
    cursorY += chosenLayout.heights.titleBlockH;
  }

  // 5E. Elevated Quote Centerpiece Box
  const qBoxX = cardX + 42;
  const qBoxW = cardW - 84;
  const qBoxY = cursorY;
  const qBoxH = chosenLayout.heights.quoteBoxH;

  ctx.save();
  ctx.fillStyle = 'rgba(1, 20, 14, 0.45)';
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.28)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, qBoxX, qBoxY, qBoxW, qBoxH, 24);
  ctx.fill();
  ctx.stroke();

  // Golden Opening Quote Mark with Generous Clearance Above Urdu Diacritics
  ctx.fillStyle = 'rgba(251, 191, 36, 0.52)';
  ctx.font = 'bold 36px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('“', centerX, qBoxY + 24);

  // Main Quote Lines with Honorific-Safe Spacing
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 3;

  let qLineY = qBoxY + chosenLayout.heights.quotePadTop + chosenLayout.quoteLH * 0.5;
  for (const line of chosenLayout.quoteLines) {
    drawFormattedLine(ctx, line, centerX, qLineY, chosenLayout.quoteSpec);
    qLineY += chosenLayout.quoteLH;
  }

  // Authentic Book / Source Reference Inside Bottom of Quote Box
  if (chosenLayout.refLines.length > 0) {
    const refDividerY = qLineY - chosenLayout.quoteLH * 0.5 + 14;
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.30)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX - 80, refDividerY);
    ctx.lineTo(centerX + 80, refDividerY);
    ctx.stroke();

    ctx.fillStyle = 'rgba(252, 211, 77, 0.90)';
    let refLineY = refDividerY + 14 + chosenLayout.refLH * 0.5;
    for (const rLine of chosenLayout.refLines) {
      drawFormattedLine(ctx, rLine, centerX, refLineY, chosenLayout.refSpec);
      refLineY += chosenLayout.refLH;
    }
  }
  ctx.restore();

  cursorY += qBoxH + chosenLayout.heights.gap;

  // 5F. Optional Moral Lesson / Explanation Strip
  if (chosenLayout.includeExp && chosenLayout.expLines.length > 0) {
    ctx.save();
    const divY = cursorY + 12;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
    ctx.lineWidth = 1.25;
    ctx.beginPath();
    ctx.moveTo(cardX + 90, divY);
    ctx.lineTo(centerX - 150, divY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + 150, divY);
    ctx.lineTo(cardX + cardW - 90, divY);
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = isUrdu
      ? 'bold 21px "Noto Nastaliq Urdu", serif'
      : 'bold 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(isUrdu ? '✦ اخلاقی درس و حکمت ✦' : '✦ MORAL LESSON & WISDOM ✦', centerX, divY);

    ctx.fillStyle = '#fef3c7';
    let eLineY = cursorY + 38 + chosenLayout.expLH * 0.5;
    for (const line of chosenLayout.expLines) {
      drawFormattedLine(ctx, line, centerX, eLineY, chosenLayout.expSpec);
      eLineY += chosenLayout.expLH;
    }
    ctx.restore();
  }

  // 6. Crisp Brand Watermark Bar Anchored to Bottom of Ornamental Card
  const footerBarH = 62;
  const footerBarY = cardY + cardH - footerBarH - 14;
  ctx.save();
  ctx.fillStyle = 'rgba(1, 18, 12, 0.88)';
  roundRect(ctx, cardX + 20, footerBarY, cardW - 40, footerBarH, 18);
  ctx.fill();

  ctx.strokeStyle = 'rgba(217, 119, 6, 0.40)';
  ctx.lineWidth = 1.25;
  roundRect(ctx, cardX + 20, footerBarY, cardW - 40, footerBarH, 18);
  ctx.stroke();

  ctx.fillStyle = '#f8fafc';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (isUrdu) {
    ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Amiri", serif';
    ctx.fillText('اخلاقی باتیں   •   AkhlaqiBaatein.com   •   مستند اسلامی اخلاقیات', centerX, footerBarY + footerBarH / 2 + 2);
  } else if (data.lang === 'ro') {
    ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('AkhlaqiBaatein.com   •   Mustanad Islami Akhlaqiat o Hikmat', centerX, footerBarY + footerBarH / 2);
  } else {
    ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('AkhlaqiBaatein.com   •   Authentic Islamic Ethics & Wisdom', centerX, footerBarY + footerBarH / 2);
  }
  ctx.restore();

  return canvas.toDataURL('image/png');
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function downloadImage(dataUrl: string, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
