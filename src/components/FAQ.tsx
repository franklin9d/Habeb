"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "ما هي طريقة البيع بالأقساط؟",
    a: "نوفر نظام أقساط مرن يومي وشهري يناسب الجميع. الأقساط اليومية تبدأ من 3,000 دينار عراقي فقط، مع إمكانية اختيار المدة المناسبة لك. كل ما عليك التواصل معنا عبر الرقم 6505 أو زيارة أقرب فرع.",
  },
  {
    q: "ما هي المنتجات المتوفرة لديكم؟",
    a: "نوفر تشكيلة واسعة تشمل: السبلتات والمكيفات، الهواتف الذكية بجميع أنواعها، الأجهزة الإلكترونية (لابتوبات وشاشات)، الأجهزة المنزلية (غسالات وثلاجات)، والأدوات المنزلية المتنوعة.",
  },
  {
    q: "هل يوجد ضمان على المنتجات؟",
    a: "نعم، نوفر ضمان يصل إلى سنة ونصف على جميع الأجهزة مع خدمة ما بعد البيع والصيانة. ضماننا يشمل الأعطال المصنعية ونلتزم بتوفير قطع الغيار الأصلية.",
  },
  {
    q: "هل خدمة التوصيل مجانية؟",
    a: "نعم، نوفر خدمة توصيل مجانية لباب بيتك مع خدمة تركيب وتشغيل الأجهزة الكبيرة مثل السبلتات والغسالات من قبل فريقنا المتخصص.",
  },
  {
    q: "كيف أتقدم للحصول على قرض؟",
    a: "يمكنك التقدم للحصول على القروض عبر زيارة أقرب فرع لنا أو التواصل عبر رقم خدمة العملاء 6505 أو من خلال تطبيق حبيب الساعدي المتوفر على App Store و Google Play.",
  },
  {
    q: "أين تقع فروعكم؟",
    a: "نمتلك 7 فروع منتشرة في عدة محافظات عراقية تشمل بغداد (النهضة وشارع الضلال) وبابل وكربلاء والنجف وذي قار وميسان. يمكنك زيارة أقرب فرع لك في أي وقت.",
  },
  {
    q: "هل يمكن تجهيز مشروعي بالكامل من عندكم؟",
    a: "بالتأكيد! نوفر خدمة تجهيز المشاريع بالكامل بنظام التقسيط المريح. نوفر لك كل الأجهزة والمواد الأولية التي تحتاجها لبدء مشروعك بدون الحاجة لرأس مال كبير.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={sectionRef} id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark-2 to-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-brand-green text-sm font-bold mb-4"
          >
            <span className="w-8 h-px bg-brand-green" />
            أسئلة شائعة
            <span className="w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display"
          >
            كل ما تريد <span className="text-gradient-green">معرفته</span>
          </motion.h3>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-brand-dark-2/50 rounded-xl border border-brand-dark-4 hover:border-brand-green/10 transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
              >
                <span className="font-bold font-display text-brand-silver group-hover:text-brand-white transition-colors">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === i ? "bg-brand-green/20 rotate-180" : ""}`}>
                  <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <div className="w-full h-px bg-brand-dark-4 mb-4" />
                      <p className="text-brand-gray leading-relaxed">{faq.a}</p>
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
