import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0B",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "شركة حبيب الساعدي للتجارة العامة | أجهزة كهربائية وإلكترونية بالأقساط",
  description:
    "شركة حبيب الساعدي للتجارة العامة - تأسست عام 2017 في العراق. نوفر الأجهزة الكهربائية والإلكترونية والهواتف الذكية والأدوات المنزلية بنظام الأقساط اليومية والشهرية الميسرة. أكثر من 4000 عميل و7 فروع في العراق. اتصل بنا: 6505",
  keywords:
    "حبيب الساعدي, تجارة عامة, أقساط, أجهزة كهربائية, هواتف ذكية, سبلتات, العراق, بغداد, تقسيط يومي, تقسيط شهري",
  openGraph: {
    title: "شركة حبيب الساعدي للتجارة العامة",
    description:
      "أجهزة كهربائية وإلكترونية وهواتف ذكية بنظام الأقساط الميسرة - أكثر من 4,000 عميل و7 فروع",
    type: "website",
    locale: "ar_IQ",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-body antialiased bg-brand-dark text-brand-white tap-highlight-none">
        {children}
      </body>
    </html>
  );
}
