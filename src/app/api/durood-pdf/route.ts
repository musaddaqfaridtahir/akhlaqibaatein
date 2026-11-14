import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

// Map of slug to authentic imported file names
const SLUG_TO_FILE: Record<string, string> = {
  'durood-e-ibrahimi': 'DUROOD-E-IBRAHIMI.pdf',
  'salat-al-tanjina': 'Durood-e-Tanjeena_akhlaqibaatein.pdf',
  'salat-al-nariya': 'durood-nariya.pdf',
  'durood-e-khizri': 'durood-khizri.pdf',
  'durood-e-shifa': 'salat-al-tibiyya.pdf',
  'durood-e-rizq-o-barkat': 'Durood-Sharif-for-Attaining-Virtues-Equal-to-all-Creation.pdf',
  'durood-e-jumma-khas': 'Salat-al-Nabi-al-Ummi-Salawat.com_.pdf',
  'durood-e-ghausia-tajdar': 'darood-ghousia-pdf.pdf',
  'durood-taj': 'Durood-e-Taj_akhlaqibaatein.pdf',
  'durood-lakhi': 'Durood-Lakhi.pdf',
  'durood-mahi': 'Darood-Mahi.pdf',
  'durood-akbar': 'Durood-Akbar-PDF.pdf',
  'durood-muqaddas': 'Durood-e-Muqaddas.pdf',
  'durood-hazari': 'durood-e-hazari-pdf.pdf',
  'salatul-fatih': 'salatul-fatih.pdf',
  'salatul-mashishiyya': 'salatul-mashishiyya.pdf',
  'salat-al-yaqutiyya': 'salat-al-yaqutiyya.pdf',
  'salat-al-badriyya': 'Salat-al-Badriyya.pdf',
  'salat-al-kubra': 'Salat-al-Kubra-Salawat.com_.pdf',
  'salat-al-nur-al-dhati': 'Salat-al-Nur-al-Dhati-Salawat.com_.pdf',
  'salat-imam-nawawi': 'Salat-al-Imam-al-Nawawi-Salawat.com_.pdf',
  'salat-ahmad-badawi': 'Salat-al-Shaykh-Ahmad-al-Badawi-Salawat.com_.pdf',
  'salat-ali-al-qadr': 'Salat-al-Ali-al-Qadr-Salawat.com_.pdf',
  'salat-al-ruh': 'Salat-al-Ruh-wal-Jasad-Salawat.com_.pdf',
  'salat-al-azimiyya': 'Azeemiyya.pdf',
  'bashair-al-khayrat': 'Bashair-al-Khayrat-Salawat.com_.pdf',
  'jawharat-al-kamal': 'jawharat-al-kamal.pdf',
  'salawat-habib-mashhur': 'Salawat-Habib-Ahmad-Mashhur-al-Haddad.pdf',
  'salawat-imam-haddad': 'Salawat-Imam-Abdullah-al-Haddad-Salawat.com_.pdf',
  'salli-ya-salam': 'Salli-ya-Salam.pdf',
  'short-durood-collection': 'Short-Durood-Salawat.com_.pdf',
  'salat-saqqafiyyah': 'Al-Salah-al-Saqqafiyyah-Salawat.com_.pdf',
  'salat-ala-al-habib': 'al-Salawat-ala-al-Habib-Salawat.com_.pdf',
  'salat-abi-al-mawahib': 'Salat-Abi-al-Mawahib-al-Shadhili-Salawat.com_.pdf',
  'fadail-al-salawat': 'Salat-Fadail-al-Salawat.pdf',
  'hizb-al-bahr': 'HizbulBahr.pdf',
  'hizb-al-nasr-shadhili': 'Hizb-al-Nasr-Imam-Shadhili-Salawat.com_.pdf',
  'hizb-al-nasr-haddad': 'Hizb-al-Nasr-Imam-Haddad-Salawat.com_.pdf',
  'dua-al-nasiri': 'Dua_Nasiri.pdf',
  'ratib-al-haddad': 'Ratib-al-Haddad.pdf',
  'ratib-al-attas': 'Ratib-al-Attas.pdf',
  'wird-al-latif': 'Wird-al-Latif-Salawat.pdf',
  'wird-al-sakran': 'Wird-as-Sakran-Salawat.com_.pdf',
  'al-kibrit-al-ahmar': 'Kibrit-al-Ahmar-Salawat.com_.pdf',
  'qasida-burda': 'Qasida-Burda.pdf',
  'qasida-mudariyya': 'Qasida-Mudariyya.pdf',
  'qasida-muhammadiyya': 'Qasida-Muhamadiyya-PDF.pdf',
  'dalail-al-khayrat': 'Jazuli_Dailail-alKhayrat_arabic-urdu.pdf',
  'tala-al-badru-alayna': 'Tala-al-badru-alayna.pdf',
  'qamarun-sidna-nabi': 'qamarun-sidna-nabi.pdf',
  'ya-hanana': 'Ya-Hanana.pdf',
  'ahmad-ya-habibi': 'Ahmad-ya-habibi.pdf',
  'ya-imam-al-rusli': 'Ya-Imam-al-Rusli-Salawat.com_.pdf',
  'mawlid-al-barzanji': 'Mawlid-al-Barzanji.pdf',
  'mawlid-ad-dibai': 'Mawlid-ad-Dibai-Salawat.com_.pdf',
  'the-shimmering-light-mawlid': 'The-Shimmering-Light-Mawlid.pdf',
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const requestedFile = searchParams.get('file');
    const slug = searchParams.get('slug');

    let filename = requestedFile;
    if (!filename && slug && SLUG_TO_FILE[slug]) {
      filename = SLUG_TO_FILE[slug];
    }

    if (!filename) {
      filename = 'DUROOD-E-IBRAHIMI.pdf';
    }

    // Sanitize filename to prevent path traversal
    const safeFilename = path.basename(filename);
    const libraryDir = path.join(process.cwd(), 'public', 'durood-library');
    const filePath = path.join(libraryDir, safeFilename);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'PDF file not found in library', file: safeFilename },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(fileBuffer);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Embed Brand Emblem Logo
    let logoImage = null;
    const logoPath = path.join(process.cwd(), 'public', 'logo.png');
    if (fs.existsSync(logoPath)) {
      try {
        const logoBytes = fs.readFileSync(logoPath);
        logoImage = await pdfDoc.embedPng(logoBytes);
      } catch (err) {
        console.warn('Failed to embed PNG logo in PDF:', err);
      }
    }

    const pages = pdfDoc.getPages();
    const goldColor = rgb(0.83, 0.68, 0.21); // #d4af37
    const emeraldDark = rgb(0.04, 0.08, 0.07); // #0a1411
    const whiteColor = rgb(0.98, 0.98, 0.98);

    // Apply clean, prominent header, footer, and centered logo watermark on every single page
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { width, height } = page.getSize();

      // 1. Subtle Center Emblem Watermark
      if (logoImage) {
        const watermarkSize = Math.min(width * 0.45, height * 0.45, 260);
        page.drawImage(logoImage, {
          x: (width - watermarkSize) / 2,
          y: (height - watermarkSize) / 2,
          width: watermarkSize,
          height: watermarkSize,
          opacity: 0.065,
        });
      }

      // 2. Top Header Watermark Bar
      page.drawRectangle({
        x: 0,
        y: height - 28,
        width: width,
        height: 28,
        color: emeraldDark,
      });

      page.drawLine({
        start: { x: 0, y: height - 28 },
        end: { x: width, y: height - 28 },
        thickness: 1.5,
        color: goldColor,
      });

      if (logoImage) {
        page.drawImage(logoImage, {
          x: 12,
          y: height - 24,
          width: 20,
          height: 20,
        });
      }

      const headerText = 'AkhlaqiBaatein.com  •  Authentic Islamic Wisdom & Durood Hub';
      const headerTextWidth = fontBold.widthOfTextAtSize(headerText, 9);
      page.drawText(headerText, {
        x: Math.max(38, (width - headerTextWidth) / 2),
        y: height - 18,
        size: 9,
        font: fontBold,
        color: goldColor,
      });

      // 3. Bottom Footer Watermark Bar
      page.drawRectangle({
        x: 0,
        y: 0,
        width: width,
        height: 26,
        color: emeraldDark,
      });

      page.drawLine({
        start: { x: 0, y: 26 },
        end: { x: width, y: 26 },
        thickness: 1.2,
        color: goldColor,
      });

      if (logoImage) {
        page.drawImage(logoImage, {
          x: 12,
          y: 3,
          width: 20,
          height: 20,
        });
      }

      const footerText = 'AkhlaqiBaatein.com  —  Makhzan-e-Akhlaq, Durood o Salam & Wazaif Library';
      const footerTextWidth = fontRegular.widthOfTextAtSize(footerText, 8.5);
      page.drawText(footerText, {
        x: Math.max(38, (width - footerTextWidth) / 2),
        y: 9,
        size: 8.5,
        font: fontRegular,
        color: whiteColor,
      });
    }

    const modifiedPdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(modifiedPdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="AkhlaqiBaatein-${safeFilename}"`,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (error) {
    console.error('PDF watermarking failed:', error);
    return NextResponse.json(
      { error: 'Failed to watermark PDF' },
      { status: 500 }
    );
  }
}
