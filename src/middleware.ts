import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Cleanly redirect /ur or /ur/... to canonical / or /...
  if (pathname === '/ur') {
    return NextResponse.redirect(new URL('/', request.url), 308);
  }
  if (pathname.startsWith('/ur/')) {
    const cleanPath = pathname.replace(/^\/ur/, '') || '/';
    return NextResponse.redirect(new URL(cleanPath, request.url), 308);
  }

  // 2. Exact /en and /roman pass through to their dedicated home pages
  if (pathname === '/en' || pathname === '/en/') {
    return NextResponse.next();
  }
  if (pathname === '/roman' || pathname === '/roman/') {
    return NextResponse.next();
  }

  // 3. Intercept any path starting with /en/
  if (pathname.startsWith('/en/')) {
    const cleanPath = pathname.replace(/^\/en/, '') || '/';
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    url.searchParams.set('lang', 'en');
    const response = NextResponse.rewrite(url);
    response.headers.set('x-language', 'en');
    return response;
  }

  // 4. Intercept any path starting with /roman/
  if (pathname.startsWith('/roman/')) {
    const cleanPath = pathname.replace(/^\/roman/, '') || '/';
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    url.searchParams.set('lang', 'ro');
    const response = NextResponse.rewrite(url);
    response.headers.set('x-language', 'ro');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|txt|xml|ico)).*)',
  ],
};
