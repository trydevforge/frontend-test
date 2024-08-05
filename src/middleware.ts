import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // TODO: Implement private routes (/products, /products/[id]) - Navigate to /login if user is not logged in
  // ...

  // TODO: Implement Guest only routes (/login) - Navigate to /products if user is already logged in and tries to access /login
  // ...

  
  const response = NextResponse.next();
  return response
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }