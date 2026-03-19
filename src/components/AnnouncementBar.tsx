"use client";

import { motion } from "framer-motion";

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative z-50 bg-luxe-charcoal border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-luxe-gold animate-pulse" />
        <p className="text-[13px] text-luxe-silver tracking-wide font-body">
          شحن مجاني على جميع الطلبات فوق ٥٠٠ ر.س
          <span className="text-luxe-gold mr-2 font-medium cursor-pointer hover:text-luxe-gold-light transition-colors">
            تسوّق الآن
          </span>
        </p>
      </div>
    </motion.div>
  );
}
