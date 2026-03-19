"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/**
 * Testimonials - Client reviews carousel
 *
 * Mobile: full-width card, swipe dots
 * Tablet+: centered card with navigation
 * Auto-advances every 5s
 */
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
  {
    name: "حيدر العلي",
    role: "عميل من كربلاء",
    text: "خذيت سبلت من عندهم والتركيب كان مجاني. الجهاز أصلي والضمان حقيقي. أفضل شركة تقسيط بالعراق بدون مبالغة.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-1/3 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-brand-green/3 rounded-full blur-3xl" />

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
            آراء عملائنا
            <span className="w-6 sm:w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-display"
          >
            ثقة <span className="text-gradient-green">عملائنا فخرنا</span>
          </motion.h3>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
            >
              {/* Quote */}
              <div className="absolute top-4 right-5 text-brand-green/8 text-7xl sm:text-8xl font-serif leading-none select-none">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-base sm:text-lg text-brand-silver leading-relaxed mb-6 relative z-10 font-medium">
                {testimonials[active].text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-green/10 border border-brand-green/15 flex items-center justify-center">
                  <span className="text-brand-green font-bold text-sm sm:text-base">{testimonials[active].name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-brand-white text-sm">{testimonials[active].name}</p>
                  <p className="text-xs text-brand-gray">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-brand-green w-7" : "bg-white/10 w-2 hover:bg-white/20"
                }`}
                aria-label={`شهادة ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
