"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Hero Section - Premium, conversion-focused
 *
 * Layout:
 *   Mobile (320-640px):  Single column, text stacked, phone mockup below
 *   Tablet (768-1024px): Text takes ~60%, visual ~40%
 *   Desktop (1280+):     50/50 grid, large visual
 *
 * Elements:
 *   - Badge "منذ 2017 نخدم العراق"
 *   - Strong headline
 *   - Subheadline
 *   - Primary CTA (Browse Products)
 *   - Secondary CTA (Call 6505)
 *   - Trust indicators bar
 *   - Phone mockup with product visual
 *   - Parallax background + floating orbs
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnim = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(stModule.ScrollTrigger);

      if (!sectionRef.current) return;

      // Parallax on background
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Fade content on scroll
      gsap.to(".hero-content", {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% top",
          end: "80% top",
          scrub: 1,
        },
      });
    };
    initAnim();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-18"
    >
      {/* Background with parallax */}
      <div ref={imageRef} className="absolute inset-0 -top-24 -bottom-24">
        <Image
          src="/images/hero-showroom.jpg"
          alt="معرض حبيب الساعدي"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/95 via-brand-dark/85 to-brand-dark/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-brand-dark/50" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Green accent lines */}
      <div className="absolute top-1/4 right-0 w-64 lg:w-96 h-px bg-gradient-to-l from-brand-green/30 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-48 lg:w-80 h-px bg-gradient-to-r from-brand-green/20 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-48 lg:w-72 h-48 lg:h-72 bg-brand-green/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-32 right-5 w-64 lg:w-96 h-64 lg:h-96 bg-brand-green/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-3.5 py-1.5 mb-5"
            >
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              <span className="text-brand-green text-xs sm:text-sm font-medium">منذ 2017 نخدم العراق</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-display leading-[1.15] mb-4 lg:mb-5"
            >
              <span className="block text-brand-white">كل ما تحتاجه</span>
              <span className="block text-gradient-green">بالتقسيط المريح</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm sm:text-base lg:text-lg text-brand-gray-light leading-relaxed mb-6 lg:mb-8 max-w-lg"
            >
              أجهزة كهربائية وإلكترونية وهواتف ذكية بنظام أقساط يومية وشهرية ميسرة.
              توصيل مجاني وضمان حقيقي في 7 محافظات عراقية.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col xs:flex-row gap-3"
            >
              {/* Primary CTA */}
              <a
                href="#products"
                className="group relative inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-dark font-bold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/25 overflow-hidden"
              >
                <span className="relative z-10">تصفّح المنتجات</span>
                <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>

              {/* Secondary CTA */}
              <a
                href="tel:6505"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-green/30 hover:border-brand-green text-brand-white hover:text-brand-green font-bold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                اتصل الآن: 6505
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-5 xs:gap-8 mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-white/10"
            >
              {[
                { value: "+4,000", label: "عميل" },
                { value: "7", label: "فروع" },
                { value: "2017", label: "التأسيس" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <span className="block text-xl sm:text-2xl font-black font-display text-brand-green">{item.value}</span>
                  <span className="text-[10px] sm:text-xs text-brand-gray">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual - Phone Mockup */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-brand-green/8 blur-3xl rounded-full scale-150 animate-pulse-glow" />

              {/* Phone mockup */}
              <div className="phone-mockup animate-float relative">
                <Image
                  src="/images/hero-product.webp"
                  alt="تطبيق حبيب الساعدي"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 xs:-right-6 top-1/4 glass rounded-xl px-3 py-2 text-[10px] xs:text-xs font-bold text-brand-green shadow-xl"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-brand-green/15 flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  بالتقسيط المريح
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-2 xs:-left-6 bottom-1/4 glass rounded-xl px-3 py-2 text-[10px] xs:text-xs font-bold text-brand-green shadow-xl"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-brand-green/15 flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  توصيل مجاني
                </span>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
      >
        <span className="text-[10px] text-brand-gray">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-brand-green/25 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1 bg-brand-green rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
