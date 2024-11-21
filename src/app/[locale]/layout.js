import { Montserrat } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Cyanidium Dev. Template",
  description: "NextJS NextUI template",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.className}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
