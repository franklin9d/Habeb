"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * HowItWorks - Step-by-step process
 *
 * Mobile: vertical stepper with connecting line
 * Tablet+: horizontal 4-step layout
 */
const steps = [
  {
    step: "01",
    title: "اختر المنتج",
    description: "تصفّح منتجاتنا عبر التطبيق أو قم بزيارة أقرب فرع لاختيار ما تحتاجه",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    step: "02",
    title: "قدّم طلبك",
    description: "أحضر هويتك فقط واملأ نموذج التقسيط البسيط بدون تعقيدات أو كفيل",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    step: "03",
    title: "استلم بضاعتك",
    description: "نوصل لباب بيتك مجانا مع تركيب وتشغيل الأجهزة الكبيرة من فريقنا المتخصص",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    step: "04",
    title: "ادفع بالأقساط",
    description: "ادفع أقساطك اليومية أو الشهرية بمرونة تامة وبدون أي ضغط مالي",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark-2" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

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
            كيف يعمل
            <span className="w-6 sm:w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-display"
          >
            4 خطوات <span className="text-gradient-green">بسيطة فقط</span>
          </motion.h3>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group relative text-center p-5 md:p-6 rounded-2xl border border-white/[0.04] hover:border-brand-green/15 bg-brand-dark/60 transition-all duration-500"
            >
              {/* Step number */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mx-auto mb-4 text-brand-green group-hover:bg-brand-green group-hover:text-brand-dark transition-all duration-500">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
              </div>

              <span className="inline-block text-[10px] font-bold text-brand-green/50 mb-2">الخطوة {step.step}</span>
              <h4 className="text-sm sm:text-base font-bold font-display mb-2 group-hover:text-brand-green transition-colors">
                {step.title}
              </h4>
              <p className="text-brand-gray text-xs leading-relaxed">{step.description}</p>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-px bg-gradient-to-l from-brand-green/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
