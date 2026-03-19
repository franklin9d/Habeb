"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "أبو حسين",
    role: "عميل منذ 2019",
    text: "تعاملي مع شركة حبيب الساعدي كان من أفضل القرارات. الأقساط مريحة والتوصيل سريع والضمان محترم. أنصح الجميع بالتعامل معهم.",
    rating: 5,
  },
  {
    name: "أم محمد",
    role: "عميلة من بغداد",
    text: "جهزت بيتي بالكامل من عندهم بالتقسيط. سبلتات وغسالة وثلاجة وكلشي وصل للبيت بدون أي مشاكل. خدمة ممتازة والموظفين محترمين.",
    rating: 5,
  },
  {
    name: "أحمد الكربلائي",
    role: "صاحب مشروع",
    text: "جهزوا لي محلي التجاري بالكامل بالأقساط. الأجهزة ممتازة والأسعار منافسة والأقساط الشهرية مريحة ما أثرت على المشروع.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-brand-green text-sm font-bold mb-4"
          >
            <span className="w-8 h-px bg-brand-green" />
            آراء عملائنا
            <span className="w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display"
          >
            ثقة <span className="text-gradient-green">عملائنا فخرنا</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-gray mt-4 max-w-md mx-auto"
          >
            نماذج من تجارب عملائنا الكرام مع خدماتنا
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-brand-dark-2 rounded-2xl p-8 sm:p-10 border border-brand-dark-4 relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-brand-green/10 text-8xl font-serif leading-none">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-lg sm:text-xl text-brand-silver leading-relaxed mb-8 relative z-10 font-medium">
                {testimonials[active].text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                  <span className="text-brand-green font-bold text-lg">{testimonials[active].name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-brand-white">{testimonials[active].name}</p>
                  <p className="text-sm text-brand-gray">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active ? "bg-brand-green w-8" : "bg-brand-dark-4 hover:bg-brand-gray"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
