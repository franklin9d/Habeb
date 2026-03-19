"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/**
 * Branches - Coverage map section
 *
 * Mobile: vertical list of branches
 * Tablet: 2-column list + image
 * Desktop: text+list left, image right (RTL)
 */
const branches = [
  { name: "بغداد - النهضة", type: "الفرع الرئيسي" },
  { name: "بغداد - شارع الضلال", type: "فرع" },
  { name: "بابل", type: "فرع" },
  { name: "كربلاء", type: "فرع" },
  { name: "النجف", type: "فرع" },
  { name: "ذي قار", type: "فرع" },
  { name: "ميسان", type: "فرع" },
];

export default function Branches() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="branches" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-brand-green text-xs sm:text-sm font-bold mb-3"
            >
              <span className="w-6 sm:w-8 h-px bg-brand-green" />
              فروعنا
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black font-display leading-tight mb-4"
            >
              نخدمكم في <span className="text-gradient-green">7 محافظات</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-gray-light text-sm sm:text-base leading-relaxed mb-6 lg:mb-8"
            >
              شبكة فروع منتشرة في أهم المحافظات العراقية لتقديم خدماتنا بشكل مباشر وقريب منكم
            </motion.p>

            {/* Branch list */}
            <div className="grid xs:grid-cols-2 gap-2.5 md:gap-3">
              {branches.map((branch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.04 }}
                  className="flex items-center gap-2.5 glass-card rounded-xl px-4 py-3 hover:border-brand-green/15 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-brand-silver group-hover:text-brand-white transition-colors block">
                      {branch.name}
                    </span>
                    {branch.type === "الفرع الرئيسي" && (
                      <span className="text-[10px] text-brand-green">{branch.type}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/cityscape.jpg"
                alt="فروع شركة حبيب الساعدي في العراق"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <div className="absolute inset-0 bg-brand-green/5" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-brand-green/10 rounded-2xl -z-10 hidden lg:block" />

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-4 sm:left-8 glass rounded-xl px-5 py-3 glow-green-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-green/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-base font-black text-brand-green">7 فروع</span>
                  <span className="text-[10px] text-brand-gray">في العراق</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
