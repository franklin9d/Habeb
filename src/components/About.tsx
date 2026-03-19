"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnim = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(stModule.ScrollTrigger);

      if (!imageWrapRef.current || !sectionRef.current) return;

      gsap.fromTo(
        imageWrapRef.current,
        { y: 60, scale: 0.95, opacity: 0.5 },
        {
          y: 0, scale: 1, opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    };
    initAnim();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark-2 to-brand-dark" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div ref={imageWrapRef} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/banner.png"
                alt="شركة حبيب الساعدي للتجارة العامة - بانر الشركة"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-green/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-green/5 rounded-2xl -z-10" />

            {/* Year badge */}
            <div className="absolute -bottom-6 right-8 bg-brand-dark-2 border border-brand-green/20 rounded-xl px-6 py-4 glow-green-sm">
              <span className="block text-3xl font-black font-display text-brand-green">2017</span>
              <span className="text-xs text-brand-gray-light">سنة التأسيس</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-brand-green text-sm font-bold mb-4"
            >
              <span className="w-8 h-px bg-brand-green" />
              من نحن
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-display leading-tight mb-6"
            >
              شركة تأسست
              <span className="text-gradient-green"> لتسهيل حياتكم</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-gray-light text-lg leading-relaxed mb-6"
            >
              شركة حبيب الساعدي للتجارة العامة تأسست عام 2017 بالكتاب المرقم (000007685) من دائرة تسجيل الشركات. مهمتنا هي تسهيل حياتكم عن طريق توفير كل ما تحتاجونه من أجهزة كهربائية وإلكترونية وهواتف ذكية وأدوات منزلية بنظام الأقساط اليومية والشهرية الميسرة.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brand-gray leading-relaxed mb-8"
            >
              بحسب المصادر العامة، تخدم الشركة أكثر من 4,000 عميل عبر 7 فروع منتشرة في محافظات العراق، مع توفير خدمة القروض والبيع بالأقساط وتجهيز المشاريع بمرونة عالية تناسب جميع المواطنين.
            </motion.p>

            {/* Feature points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "مسجلة رسمياً" },
                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", text: "+4,000 عميل" },
                { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", text: "7 فروع" },
                { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", text: "تطبيق إلكتروني" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-brand-dark-3/50 rounded-lg px-4 py-3 border border-brand-dark-4 hover:border-brand-green/20 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-silver">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
