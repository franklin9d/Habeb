"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Header - Sticky navigation bar
 * Height: h-16 (64px) mobile, h-18 (72px) desktop
 * Behavior:
 *   - Transparent on top, glass effect on scroll
 *   - Hides top bar offset on scroll
 *   - Mobile: hamburger -> slide-in panel from right (RTL)
 *   - Thumb-friendly touch targets (min 44px)
 */
const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "خدماتنا", href: "#services" },
  { label: "منتجاتنا", href: "#products" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "فروعنا", href: "#branches" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-10 h-10 lg:w-11 lg:h-11 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="شركة حبيب الساعدي"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden xs:block">
                <h1 className="text-base lg:text-lg font-bold font-display leading-tight text-brand-white group-hover:text-brand-green transition-colors">
                  حبيب الساعدي
                </h1>
                <p className="text-[9px] lg:text-[10px] text-brand-gray-light tracking-wider">
                  للتجارة العامة
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-brand-gray-light hover:text-brand-green transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2.5">
              <a
                href="tel:6505"
                className="hidden md:inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-dark font-bold text-sm px-5 h-10 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                6505
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col items-center justify-center w-11 h-11 rounded-xl border border-white/10 hover:border-brand-green/30 transition-colors"
                aria-label="القائمة"
              >
                <span className={`block w-5 h-[2px] bg-brand-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block w-5 h-[2px] bg-brand-white mt-[4px] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-[2px] bg-brand-white mt-[4px] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-0 right-0 w-[280px] xs:w-[300px] h-full bg-brand-dark-2 border-l border-white/5 flex flex-col"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9">
                    <Image src="/images/logo.png" alt="حبيب الساعدي" fill className="object-contain" />
                  </div>
                  <span className="font-bold font-display text-brand-green text-sm">حبيب الساعدي</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-brand-gray-light hover:text-brand-white hover:bg-white/5 transition-all"
                  aria-label="إغلاق"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-brand-gray-light hover:text-brand-green hover:bg-brand-green/5 transition-all font-medium text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green/30" />
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Panel Footer CTA */}
              <div className="p-4 border-t border-white/5 space-y-3">
                <a
                  href="tel:6505"
                  className="flex items-center justify-center gap-2 bg-brand-green text-brand-dark font-bold h-12 rounded-xl hover:bg-brand-green-light transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل بنا: 6505
                </a>
                <a
                  href="https://wa.me/9647730331122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-brand-green/30 text-brand-green font-bold h-12 rounded-xl hover:bg-brand-green/5 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  واتساب
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
