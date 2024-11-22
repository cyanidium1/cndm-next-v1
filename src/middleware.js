import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uk"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap).*)"],
};
