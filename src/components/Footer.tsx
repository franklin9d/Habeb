"use client";

import Image from "next/image";

/**
 * Footer - Premium footer
 *
 * Mobile: stacked single column
 * Tablet: 2 columns
 * Desktop: 4 columns
 *
 * Includes: brand, quick links, services, contact info
 * Bottom bar with copyright and registration
 * Extra bottom padding for mobile sticky bar clearance
 */
export default function Footer() {
  return (
    <footer className="relative bg-brand-dark-2 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-28 md:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.png" alt="حبيب الساعدي" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold font-display text-brand-white text-base">حبيب الساعدي</h4>
                <p className="text-[10px] text-brand-gray">للتجارة العامة</p>
              </div>
            </div>
            <p className="text-xs text-brand-gray leading-relaxed mb-4 max-w-xs">
              شركة عراقية تأسست عام 2017 لتسهيل حياتكم بتوفير الأجهزة الكهربائية والإلكترونية بنظام الأقساط الميسرة.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: "https://www.facebook.com/habeebalsaede", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { href: "https://www.instagram.com/habeeb_alsaedi", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { href: "https://www.youtube.com/channel/UCKgqKQ1ep2d1wscOc2byZew", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-brand-gray hover:text-brand-green hover:border-brand-green/15 transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold font-display text-brand-white text-sm mb-3">روابط سريعة</h5>
            <ul className="space-y-2">
              {[
                { label: "الرئيسية", href: "#hero" },
                { label: "خدماتنا", href: "#services" },
                { label: "منتجاتنا", href: "#products" },
                { label: "فروعنا", href: "#branches" },
                { label: "الأسئلة الشائعة", href: "#faq" },
                { label: "تواصل معنا", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs text-brand-gray hover:text-brand-green transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold font-display text-brand-white text-sm mb-3">خدماتنا</h5>
            <ul className="space-y-2">
              {[
                "البيع بالأقساط",
                "الأجهزة الكهربائية",
                "الهواتف الذكية",
                "الأدوات المنزلية",
                "تجهيز المشاريع",
                "القروض والتمويل",
              ].map((s, i) => (
                <li key={i}>
                  <span className="text-xs text-brand-gray">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold font-display text-brand-white text-sm mb-3">تواصل معنا</h5>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-xs text-brand-gray">
                <svg className="w-3.5 h-3.5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:6505" className="hover:text-brand-green transition-colors">خدمة العملاء: 6505</a>
              </li>
              <li className="flex items-center gap-2 text-xs text-brand-gray">
                <svg className="w-3.5 h-3.5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9647730331122" className="hover:text-brand-green transition-colors" dir="ltr">+964 773 033 1122</a>
              </li>
              <li className="flex items-start gap-2 text-xs text-brand-gray">
                <svg className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                بغداد - النهضة - شارع الضلال
              </li>
            </ul>
            {/* App */}
            <div className="mt-4">
              <p className="text-[10px] text-brand-gray mb-1.5">حمّل التطبيق</p>
              <div className="flex gap-2">
                <a href="#" className="px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/5 text-[10px] text-brand-gray hover:text-brand-green hover:border-brand-green/15 transition-all">
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.creativeprojects.habeeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/5 text-[10px] text-brand-gray hover:text-brand-green hover:border-brand-green/15 transition-all"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] sm:text-xs text-brand-gray">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} شركة حبيب الساعدي للتجارة العامة
          </p>
          <p className="text-[10px] sm:text-xs text-brand-gray/60">
            الكتاب المرقم 000007685 - دائرة تسجيل الشركات
          </p>
        </div>
      </div>
    </footer>
  );
}
