"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const branches = [
  "بغداد - النهضة",
  "بغداد - شارع الضلال",
  "بابل",
  "كربلاء",
  "النجف",
  "ذي قار",
  "ميسان",
];

export default function Branches() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="branches" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-brand-green text-sm font-bold mb-4"
            >
              <span className="w-8 h-px bg-brand-green" />
              فروعنا
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-display leading-tight mb-6"
            >
              نخدمكم في <span className="text-gradient-green">7 محافظات</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-gray-light text-lg leading-relaxed mb-8"
            >
              بحسب المعلومات المتاحة، تمتلك شركة حبيب الساعدي 7 فروع منتشرة في العراق لتقديم خدماتها بشكل مباشر وقريب من العملاء في مختلف المحافظات.
            </motion.p>

            {/* Branches list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {branches.map((branch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 bg-brand-dark-2 rounded-xl px-5 py-4 border border-brand-dark-4 hover:border-brand-green/20 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-silver group-hover:text-brand-white transition-colors">{branch}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
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

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-8 bg-brand-dark-2 border border-brand-green/20 rounded-xl px-6 py-4 glow-green-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-black text-brand-green">7 فروع</span>
                  <span className="text-xs text-brand-gray">في العراق</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
