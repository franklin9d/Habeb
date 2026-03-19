"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/**
 * AppDownloadCTA - App download section with phone mockup
 *
 * Premium section encouraging app download
 * Phone mockup with app screenshots + Store badges
 */
export default function AppDownloadCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark-2" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 lg:w-72 h-48 lg:h-72 bg-brand-green/3 rounded-full blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-brand-green text-xs sm:text-sm font-bold mb-3"
            >
              <span className="w-6 sm:w-8 h-px bg-brand-green" />
              التطبيق
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black font-display leading-tight mb-4"
            >
              تسوّق من بيتك
              <br />
              <span className="text-gradient-green">عبر التطبيق</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-gray-light text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0"
            >
              حمّل تطبيق حبيب الساعدي وتصفّح المنتجات واطلب بالتقسيط من أي مكان.
              تابع أقساطك وحالة طلباتك بسهولة تامة.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {["تصفّح المنتجات", "اطلب بالتقسيط", "تابع أقساطك", "دعم مباشر"].map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-brand-green/8 border border-brand-green/10 text-brand-green text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* Store badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.creativeprojects.habeeb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-brand-green/30 rounded-xl px-5 h-14 transition-all duration-300"
              >
                <svg className="w-7 h-7 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-right">
                  <span className="block text-[9px] text-brand-gray-light leading-none">متوفر على</span>
                  <span className="block text-sm font-bold text-brand-white group-hover:text-brand-green transition-colors">Google Play</span>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-brand-green/30 rounded-xl px-5 h-14 transition-all duration-300"
              >
                <svg className="w-7 h-7 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-right">
                  <span className="block text-[9px] text-brand-gray-light leading-none">حمّل من</span>
                  <span className="block text-sm font-bold text-brand-white group-hover:text-brand-green transition-colors">App Store</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green/8 blur-3xl rounded-full scale-125 animate-pulse-glow" />
              <div className="phone-mockup animate-float relative">
                <Image
                  src="/images/hero-product.webp"
                  alt="تطبيق حبيب الساعدي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
