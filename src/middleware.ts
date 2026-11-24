import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SHOW_SUPPORT_SECTION } from '@/config/features';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Determine country via Vercel geo header or dev override
  let country = request.headers.get('x-vercel-ip-country') || 'INTL';
  if (process.env.NODE_ENV === 'development') {
    const geoOverride = request.nextUrl.searchParams.get('geo');
    if (geoOverride) {
      country = geoOverride.toUpperCase();
    } else {
      const existingCookie = request.cookies.get('akhlaqi_geo_pk');
      if (existingCookie) {
        country = existingCookie.value === '1' ? 'PK' : 'INTL';
      }
    }
  }

  const isPk = country === 'PK';
  const isPkValue = isPk ? '1' : '0';

  // Temporary 302 Redirect for /support when SHOW_SUPPORT_SECTION is disabled
  if (!SHOW_SUPPORT_SECTION) {
    if (
      pathname === '/support' ||
      pathname === '/en/support' ||
      pathname === '/roman/support' ||
      pathname === '/ur/support'
    ) {
      const res = NextResponse.redirect(new URL('/', 'https://www.akhlaqibaatein.com'), 302);
      res.cookies.set('akhlaqi_geo_pk', isPkValue, { path: '/', httpOnly: false, sameSite: 'lax' });
      return res;
    }
  }

  // 1. If someone accesses legacy /ur or /ur/..., cleanly redirect to canonical https://www.akhlaqibaatein.com
  if (pathname === '/ur') {
    const res = NextResponse.redirect(new URL('/', 'https://www.akhlaqibaatein.com'), 301);
    res.cookies.set('akhlaqi_geo_pk', isPkValue, { path: '/', httpOnly: false, sameSite: 'lax' });
    return res;
  }
  if (pathname.startsWith('/ur/')) {
    const cleanPath = pathname.replace(/^\/ur/, '') || '/';
    const res = NextResponse.redirect(new URL(cleanPath, 'https://www.akhlaqibaatein.com'), 301);
    res.cookies.set('akhlaqi_geo_pk', isPkValue, { path: '/', httpOnly: false, sameSite: 'lax' });
    return res;
  }

  // 2. All primary URLs (Urdu base, English, Roman Urdu, and detail pages) return direct 200 OK
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-is-pk', isPkValue);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set('akhlaqi_geo_pk', isPkValue, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|txt|xml|ico|webmanifest|json)).*)',
  ],
};
