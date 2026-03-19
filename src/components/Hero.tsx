"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initScrollAnimation = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      // Parallax on hero image
      gsap.to(imageRef.current, {
        yPercent: 25,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out content on scroll
      gsap.to(".hero-content", {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "70% top",
          scrub: 1,
        },
      });
    };
    initScrollAnimation();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <div ref={imageRef} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src="/images/hero-showroom.jpg"
          alt="معرض حبيب الساعدي للأجهزة الكهربائية"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/95 via-brand-dark/80 to-brand-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated Green Accent Lines */}
      <div className="absolute top-1/4 right-0 w-96 h-px bg-gradient-to-l from-brand-green/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-64 h-px bg-gradient-to-l from-brand-green/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-80 h-px bg-gradient-to-r from-brand-green/30 to-transparent" />

      {/* Floating Green Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-brand-green text-sm font-medium">منذ 2017 نخدم العراق</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display leading-[1.1] mb-6"
            >
              <span className="block text-brand-white">شركة حبيب</span>
              <span className="block text-gradient-green">الساعدي</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-gray-light mt-2">للتجارة العامة</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-brand-gray-light leading-relaxed mb-8 max-w-lg"
            >
              نسهّل حياتك بتوفير أحدث الأجهزة الكهربائية والإلكترونية
              والهواتف الذكية بنظام أقساط يومية وشهرية ميسرة لجميع المواطنين
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#products"
                className="group relative inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-dark font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/20 overflow-hidden"
              >
                <span className="relative z-10">تصفّح المنتجات</span>
                <svg className="relative z-10 w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
              <a
                href="tel:6505"
                className="inline-flex items-center gap-2 border-2 border-brand-green/30 hover:border-brand-green text-brand-white hover:text-brand-green font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                اتصل الآن: 6505
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-8 mt-10 pt-8 border-t border-brand-dark-4"
            >
              <div className="text-center">
                <span className="block text-2xl font-black font-display text-brand-green">+4000</span>
                <span className="text-xs text-brand-gray">عميل</span>
              </div>
              <div className="w-px h-10 bg-brand-dark-4" />
              <div className="text-center">
                <span className="block text-2xl font-black font-display text-brand-green">7</span>
                <span className="text-xs text-brand-gray">فروع</span>
              </div>
              <div className="w-px h-10 bg-brand-dark-4" />
              <div className="text-center">
                <span className="block text-2xl font-black font-display text-brand-green">2017</span>
                <span className="text-xs text-brand-gray">سنة التأسيس</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual - Logo/Banner Showcase */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-brand-green/10 blur-3xl rounded-full scale-150 animate-pulse-glow" />
              
              {/* Logo display */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
                <Image
                  src="/images/logo.png"
                  alt="شعار شركة حبيب الساعدي"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(74,222,64,0.3)]"
                  priority
                />
              </div>

              {/* Orbiting elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-brand-green/20 rounded-full animate-spin-slow" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-brand-green/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              
              {/* Small floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 glass rounded-lg px-3 py-2 text-xs font-bold text-brand-green"
              >
                بالتقسيط المريح
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-1/4 glass rounded-lg px-3 py-2 text-xs font-bold text-brand-green"
              >
                توصيل مجاني
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-gray">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-brand-green/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
