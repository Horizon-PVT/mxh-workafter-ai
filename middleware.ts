import createMiddleware from "next-intl/middleware";
import {NextRequest, NextResponse} from "next/server";

import {routing} from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);
const legacyRoutes = new Set([
  "/onboarding",
  "/scanner",
  "/rebuild-plan",
  "/dashboard",
]);

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (legacyRoutes.has(pathname)) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
