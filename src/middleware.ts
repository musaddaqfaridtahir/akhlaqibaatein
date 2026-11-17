import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. If someone accesses legacy /ur or /ur/..., cleanly redirect to canonical https://www.akhlaqibaatein.com
  if (pathname === '/ur') {
    return NextResponse.redirect(new URL('/', 'https://www.akhlaqibaatein.com'), 301);
  }
  if (pathname.startsWith('/ur/')) {
    const cleanPath = pathname.replace(/^\/ur/, '') || '/';
    return NextResponse.redirect(new URL(cleanPath, 'https://www.akhlaqibaatein.com'), 301);
  }

  // 2. All primary URLs (Urdu base, English, Roman Urdu, and detail pages) return direct 200 OK
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|txt|xml|ico)).*)',
  ],
};
