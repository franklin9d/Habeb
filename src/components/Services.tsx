"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Services - Categories grid
 *
 * Mobile (320-430px): Single column, compact cards (p-5)
 * Tablet (768px): 2 columns grid (gap-4)
 * Desktop (1280px): 3 columns grid (gap-6, p-8)
 */
const services = [
  {
    title: "البيع بالأقساط",
    description: "نظام تقسيط مرن يومي وشهري يناسب الجميع. أقساط تبدأ من 3,000 دينار عراقي فقط",
    icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
    color: "from-emerald-500/10 to-green-500/5",
  },
  {
    title: "الأجهزة الكهربائية",
    description: "سبلتات ومكيفات وأجهزة تبريد وتدفئة من أفضل الماركات العالمية مع ضمان وخدمة",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    color: "from-yellow-500/10 to-amber-500/5",
  },
  {
    title: "الهواتف الذكية",
    description: "أحدث الهواتف من جميع الماركات بضمان سنة ونصف وخدمة توصيل مجانية",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    color: "from-blue-500/10 to-cyan-500/5",
  },
  {
    title: "الأدوات المنزلية",
    description: "تشكيلة واسعة من الأجهزة المنزلية التي تلبي احتياجات كل بيت عراقي",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    color: "from-purple-500/10 to-violet-500/5",
  },
  {
    title: "تجهيز المشاريع",
    description: "نوفر كل الأجهزة لأصحاب المشاريع بالتقسيط المريح لتبدأ مشروعك بسهولة",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    color: "from-orange-500/10 to-red-500/5",
  },
  {
    title: "القروض والتمويل",
    description: "خدمات قروض ميسرة وتمويل مرن لمساعدتك في تحقيق أهدافك بخطوات بسيطة",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-teal-500/10 to-emerald-500/5",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="services" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-0 w-48 lg:w-72 h-48 lg:h-72 bg-brand-green/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-brand-green text-xs sm:text-sm font-bold mb-3"
          >
            <span className="w-6 sm:w-8 h-px bg-brand-green" />
            خدماتنا
            <span className="w-6 sm:w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-display"
          >
            كل ما تحتاجه <span className="text-gradient-green">بين يديك</span>
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group relative glass-card rounded-2xl p-5 md:p-6 lg:p-8 hover:border-brand-green/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative z-10 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-brand-green/10 border border-brand-green/15 flex items-center justify-center text-brand-green mb-4 md:mb-5 group-hover:bg-brand-green group-hover:text-brand-dark transition-all duration-500 group-hover:scale-110">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>

              <h4 className="relative z-10 text-base md:text-lg font-bold font-display mb-2 group-hover:text-brand-green transition-colors duration-300">
                {service.title}
              </h4>
              <p className="relative z-10 text-brand-gray text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-brand-green/5 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
