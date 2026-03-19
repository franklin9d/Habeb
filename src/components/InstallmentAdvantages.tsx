"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * InstallmentAdvantages - "Why installments with us" section
 *
 * Mobile: single column numbered list
 * Tablet: 2 columns
 * Desktop: 3 columns with numbered watermarks
 */
const reasons = [
  {
    number: "01",
    title: "أقساط يومية من 3,000 دينار",
    description: "نظام أقساط يومية مرنة تبدأ من 3,000 دينار عراقي فقط. ادفع يوميا بدون ضغط مالي",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  },
  {
    number: "02",
    title: "ضمان حقيقي 18 شهر",
    description: "ضمان يصل إلى سنة ونصف على جميع الأجهزة مع خدمة ما بعد البيع والصيانة الشاملة",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    number: "03",
    title: "توصيل وتركيب مجاني",
    description: "نوصل لباب بيتك مجانا مع فريق تركيب وتشغيل متخصص للأجهزة الكبيرة",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    number: "04",
    title: "بدون كفيل أو تعقيدات",
    description: "إجراءات بسيطة وسريعة بدون تعقيدات بيروقراطية. هويتك فقط تكفي للبدء",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    number: "05",
    title: "7 فروع تخدمك",
    description: "7 فروع منتشرة في المحافظات العراقية قريبة منك أينما كنت",
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36a1.11 1.11 0 01-1.11-1.11v-6.69a1.11 1.11 0 01.35-.82l8.75-7.87a1.11 1.11 0 011.47 0l8.75 7.87a1.11 1.11 0 01.35.82v6.69a1.11 1.11 0 01-1.11 1.11H13.5",
  },
  {
    number: "06",
    title: "تطبيق إلكتروني",
    description: "تسوّق من بيتك عبر التطبيق المتوفر على App Store وGoogle Play",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
];

export default function InstallmentAdvantages() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="why-us" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark-2 to-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-brand-green/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-brand-green text-xs sm:text-sm font-bold mb-3"
          >
            <span className="w-6 sm:w-8 h-px bg-brand-green" />
            لماذا نحن
            <span className="w-6 sm:w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-display"
          >
            مميزات <span className="text-gradient-green">تجعلنا خيارك الأول</span>
          </motion.h3>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group relative p-5 md:p-6 lg:p-8 rounded-2xl border border-white/[0.04] hover:border-brand-green/15 transition-all duration-500 bg-brand-dark-3/40 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-3 left-3 text-5xl lg:text-6xl font-black font-display text-white/[0.03] group-hover:text-brand-green/8 transition-colors duration-500 select-none">
                {reason.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/15 flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green/20 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon} />
                </svg>
              </div>

              <h4 className="relative z-10 text-sm sm:text-base font-bold font-display mb-2 group-hover:text-brand-green transition-colors duration-300">
                {reason.title}
              </h4>
              <p className="relative z-10 text-brand-gray text-xs sm:text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
