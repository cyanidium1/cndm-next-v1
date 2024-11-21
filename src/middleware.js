import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ua"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap).*)"],
};
