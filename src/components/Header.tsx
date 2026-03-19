"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "المجموعات", href: "#collections" },
  { label: "العطور", href: "#products" },
  { label: "قصتنا", href: "#story" },
  { label: "المتجر", href: "#shop" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-luxe-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 border border-luxe-gold/60 rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
                <div className="absolute inset-0 w-10 h-10 border border-luxe-gold/30 rotate-45 scale-75" />
              </div>
              <span className="font-display text-2xl font-bold text-gold-gradient tracking-tight">
                ذهب
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm text-luxe-silver hover:text-luxe-white transition-colors duration-300 font-body group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-px bg-luxe-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-sm text-luxe-silver hover:text-luxe-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              <button className="text-sm text-luxe-silver hover:text-luxe-white transition-colors relative">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="absolute -top-1 -left-1 w-4 h-4 bg-luxe-gold rounded-full text-[10px] text-luxe-black font-bold flex items-center justify-center">
                  ٢
                </span>
              </button>
              <a
                href="#shop"
                className="btn-premium px-6 py-2.5 bg-luxe-gold text-luxe-black text-sm font-bold font-display rounded-sm hover:bg-luxe-gold-light transition-colors"
              >
                اكتشف المجموعة
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-luxe-white origin-center transition-colors"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-6 h-px bg-luxe-white transition-colors"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-luxe-white origin-center transition-colors"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-luxe-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-display text-luxe-white hover:text-luxe-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="mt-4 btn-premium px-10 py-3 bg-luxe-gold text-luxe-black font-bold font-display text-lg rounded-sm"
            >
              تسوّق الآن
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
