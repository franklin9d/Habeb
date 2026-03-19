"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "منتجاتنا", href: "#products" },
  { label: "فروعنا", href: "#branches" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-brand-dark/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-brand-green/10"
            : "bg-transparent"
        }`}
        style={{ top: scrolled ? 0 : undefined }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/logo.png"
                  alt="شركة حبيب الساعدي"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold font-display leading-tight text-brand-white group-hover:text-brand-green transition-colors">
                  حبيب الساعدي
                </h1>
                <p className="text-[10px] text-brand-gray-light tracking-wider">للتجارة العامة</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="relative px-4 py-2 text-sm font-medium text-brand-gray-light hover:text-brand-green transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="hidden md:inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-dark font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                اتصل بنا
              </motion.a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg border border-brand-dark-4 hover:border-brand-green/30 transition-colors"
              >
                <span className={`block w-5 h-0.5 bg-brand-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block w-5 h-0.5 bg-brand-white mt-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-brand-white mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute top-0 left-0 w-72 h-full bg-brand-dark border-l border-brand-green/10 p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src="/images/logo.png" alt="شركة حبيب الساعدي" fill className="object-contain" />
                  </div>
                  <span className="font-bold font-display text-brand-green">حبيب الساعدي</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-brand-gray-light hover:text-brand-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-brand-gray-light hover:text-brand-green hover:bg-brand-green/5 transition-all font-medium"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-brand-dark-4">
                <a
                  href="tel:6505"
                  className="flex items-center justify-center gap-2 bg-brand-green text-brand-dark font-bold py-3 rounded-lg hover:bg-brand-green-light transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل بنا: 6505
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
