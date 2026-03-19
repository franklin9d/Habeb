"use client";

import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-green text-brand-dark py-2 relative z-50 overflow-hidden"
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
      
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm font-medium relative z-10">
        <div className="flex items-center gap-6">
          <a href="tel:6505" className="flex items-center gap-2 hover:text-brand-dark/80 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>خدمة العملاء: 6505</span>
          </a>
          <a href="tel:+9647730331122" className="hidden sm:flex items-center gap-2 hover:text-brand-dark/80 transition-colors">
            <span>+964 773 033 1122</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline">حمّل التطبيق الآن</span>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:opacity-80 transition-opacity bg-brand-dark/10 rounded px-2 py-0.5 text-xs font-bold">
              App Store
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity bg-brand-dark/10 rounded px-2 py-0.5 text-xs font-bold">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
