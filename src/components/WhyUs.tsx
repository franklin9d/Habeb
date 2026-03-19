"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "أقساط ميسرة",
    description: "نظام أقساط يومية تبدأ من 3,000 دينار عراقي وأقساط شهرية مرنة تناسب الجميع بدون تعقيدات",
  },
  {
    number: "02",
    title: "ضمان حقيقي",
    description: "ضمان يصل إلى سنة ونصف على جميع الأجهزة مع خدمة ما بعد البيع والصيانة",
  },
  {
    number: "03",
    title: "توصيل مجاني",
    description: "خدمة توصيل مجانية لباب بيتك مع تركيب وتشغيل الأجهزة من فريقنا المتخصص",
  },
  {
    number: "04",
    title: "تنوع المنتجات",
    description: "تشكيلة واسعة من الأجهزة الكهربائية والإلكترونية والهواتف الذكية والأدوات المنزلية",
  },
  {
    number: "05",
    title: "انتشار واسع",
    description: "7 فروع منتشرة في المحافظات العراقية لخدمتكم أينما كنتم مع فريق عمل محترف",
  },
  {
    number: "06",
    title: "تطبيق إلكتروني",
    description: "تطبيق حبيب الساعدي متوفر على App Store و Google Play للتسوق بسهولة من أي مكان",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark-2 to-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-green/2 rounded-full blur-3xl" />

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
            لماذا نحن
            <span className="w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display"
          >
            مميزات <span className="text-gradient-green">تجعلنا خيارك الأول</span>
          </motion.h3>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative p-8 rounded-2xl border border-brand-dark-4 hover:border-brand-green/20 transition-all duration-500 bg-brand-dark/50 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 left-4 text-6xl font-black font-display text-brand-dark-3 group-hover:text-brand-green/10 transition-colors duration-500">
                {reason.number}
              </span>

              {/* Content */}
              <div className="relative z-10 pt-10">
                <h4 className="text-xl font-bold font-display mb-3 group-hover:text-brand-green transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
