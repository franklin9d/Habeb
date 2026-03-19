import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شركة حبيب الساعدي للتجارة العامة | أجهزة كهربائية وإلكترونية بالأقساط",
  description:
    "شركة حبيب الساعدي للتجارة العامة - تأسست عام 2017 في العراق. نوفر الأجهزة الكهربائية والإلكترونية والهواتف الذكية والأدوات المنزلية بنظام الأقساط اليومية والشهرية الميسرة. أكثر من 4000 عميل و7 فروع في العراق. اتصل بنا: 6505",
  keywords: "حبيب الساعدي, تجارة عامة, أقساط, أجهزة كهربائية, هواتف ذكية, سبلتات, العراق, بغداد, تقسيط يومي, تقسيط شهري",
  openGraph: {
    title: "شركة حبيب الساعدي للتجارة العامة",
    description: "أجهزة كهربائية وإلكترونية وهواتف ذكية بنظام الأقساط الميسرة - أكثر من 4000 عميل و7 فروع",
    type: "website",
    locale: "ar_IQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="font-body antialiased bg-brand-dark text-brand-white">
        {children}
      </body>
    </html>
  );
}
