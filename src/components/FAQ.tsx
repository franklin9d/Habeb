"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "ما الذي يميّز عطور ذهب عن غيرها؟",
    a: "نستخدم مكونات طبيعية نادرة من مصادر حصرية حول العالم، مع تقنيات تصنيع يدوية تضمن أعلى مستويات الجودة. كل عطر يمر بأكثر من ٣٦ شهرًا من التطوير والاختبار.",
  },
  {
    q: "كم يدوم ثبات العطر؟",
    a: "تتميز عطورنا بثبات استثنائي يتجاوز ٤٨ ساعة بفضل تقنيتنا الحصرية في تركيز المكونات. يتطور العطر على ثلاث مراحل ليمنحك تجربة متجددة طوال اليوم.",
  },
  {
    q: "هل تقدمون خدمة تغليف هدايا؟",
    a: "نعم، نقدم خدمة تغليف فاخرة مجانية مع كل طلب. يأتي العطر في صندوق حصري مع بطاقة إهداء شخصية وشريط حريري مميز.",
  },
  {
    q: "ما سياسة الإرجاع والاستبدال؟",
    a: "نقدم ضمان الرضا الكامل. يمكنك إرجاع أو استبدال المنتج خلال ٣٠ يومًا من الشراء دون أي شروط. رضاك هو أولويتنا القصوى.",
  },
  {
    q: "هل الشحن مجاني؟",
    a: "نعم، نقدم شحنًا مجانيًا على جميع الطلبات التي تتجاوز قيمتها ٥٠٠ ريال سعودي داخل المملكة، مع توصيل سريع خلال ٢-٣ أيام عمل.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-luxe-black overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-luxe-gold/10 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-luxe-gold text-sm font-display tracking-wider mb-4 block"
          >
            أسئلة شائعة
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-luxe-white mb-6"
          >
            كل ما تود <span className="text-gold-gradient">معرفته</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-20 h-px bg-luxe-gold/40 mx-auto"
          />
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="border border-white/[0.04] rounded-sm overflow-hidden hover:border-luxe-gold/10 transition-colors duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-right group"
              >
                <span className="font-display text-base lg:text-lg text-luxe-white group-hover:text-luxe-gold transition-colors duration-300">
                  {faq.q}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-luxe-gold shrink-0 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-luxe-light text-sm leading-relaxed font-body">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
