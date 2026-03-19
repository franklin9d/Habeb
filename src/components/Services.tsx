"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "البيع بالأقساط",
    description: "نظام تقسيط مرن يومي وشهري يناسب جميع المواطنين، بأقساط تبدأ من 3,000 دينار عراقي فقط",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "الأجهزة الكهربائية",
    description: "سبلتات ومكيفات وأجهزة تبريد وتدفئة من أفضل الماركات العالمية بضمان وخدمة ما بعد البيع",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "الهواتف الذكية",
    description: "أحدث الهواتف الذكية من جميع الماركات بضمان سنة ونصف وخدمة توصيل مجانية",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "الأدوات المنزلية",
    description: "تشكيلة واسعة من الأدوات والأجهزة المنزلية التي تلبي احتياجات كل بيت عراقي",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "تجهيز المشاريع",
    description: "نوفر كل الأجهزة والمواد الأولية لأصحاب المشاريع بالتقسيط المريح لتبدأ مشروعك بسهولة",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "القروض والتمويل",
    description: "خدمات القروض الميسرة والتمويل المرن لمساعدتك في تحقيق أهدافك بخطوات بسيطة",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-green/3 rounded-full blur-3xl" />

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
            خدماتنا
            <span className="w-8 h-px bg-brand-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display"
          >
            كل ما تحتاجه <span className="text-gradient-green">بين يديك</span>
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative bg-brand-dark-2 rounded-2xl p-8 border border-brand-dark-4 hover:border-brand-green/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-dark transition-all duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              <h4 className="relative z-10 text-xl font-bold font-display mb-3 group-hover:text-brand-green transition-colors duration-300">
                {service.title}
              </h4>
              <p className="relative z-10 text-brand-gray leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-brand-green/5 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
