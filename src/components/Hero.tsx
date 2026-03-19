"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const heroEl = heroRef.current;
    const orbitEl = orbitRef.current;
    if (!imageEl || !heroEl) return;

    let gsapInstance: any;
    let floatTween: any;
    let orbitTween: any;

    async function init() {
      const { gsap } = await import("gsap");
      gsapInstance = gsap;

      // Floating animation for main image
      floatTween = gsap.to(imageEl, {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Slow rotation for orbit element
      if (orbitEl) {
        orbitTween = gsap.to(orbitEl, {
          rotation: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }
    }

    init();

    // Parallax on hero — mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!gsapInstance || !imageEl) return;
      const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
      gsapInstance.to(imageEl, {
        x: xPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      floatTween?.kill();
      orbitTween?.kill();
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxe-black via-luxe-black/90 to-luxe-dark" />
        <div className="absolute inset-0 opacity-20" data-parallax="0.2">
          <Image
            src="/images/luxury-bg.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-black via-transparent to-transparent" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-1/4 right-0 w-px h-40 bg-gradient-to-b from-transparent via-luxe-gold/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-px h-40 bg-gradient-to-b from-transparent via-luxe-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-right"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxe-gold/20 bg-luxe-gold/5 text-luxe-gold text-xs font-display tracking-wider">
                <span className="w-1 h-1 rounded-full bg-luxe-gold" />
                مجموعة ٢٠٢٦ الحصرية
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6"
            >
              <span className="block text-luxe-white">عطرٌ يُروى</span>
              <span className="block text-gold-gradient mt-2">لا يُوصف</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-luxe-light max-w-lg mx-auto lg:mx-0 lg:mr-0 mb-10 leading-relaxed font-body"
            >
              تجربة حسّية استثنائية تمزج بين أندر المكونات الطبيعية وأرقى فنون صناعة العطور
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#collections"
                className="btn-premium group relative px-10 py-4 bg-luxe-gold text-luxe-black font-bold font-display text-base rounded-sm hover:bg-luxe-gold-light transition-all duration-500 flex items-center gap-3"
              >
                اكتشف المجموعة
                <svg
                  className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#story"
                className="group flex items-center gap-3 text-luxe-silver hover:text-luxe-white transition-colors duration-300 font-body"
              >
                <span className="w-12 h-12 rounded-full border border-luxe-muted/30 flex items-center justify-center group-hover:border-luxe-gold/50 transition-colors duration-300">
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </span>
                شاهد القصة
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 lg:mr-0"
            >
              {[
                { value: "١٢٠+", label: "عطر حصري" },
                { value: "٥٠K+", label: "عميل سعيد" },
                { value: "٨", label: "سنوات خبرة" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-right">
                  <div className="text-2xl lg:text-3xl font-display font-bold text-luxe-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-luxe-muted mt-1 font-body">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Orbit rings */}
              <div
                ref={orbitRef}
                className="absolute inset-0 rounded-full border border-luxe-gold/10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-luxe-gold/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-luxe-gold/20" />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-luxe-gold/5 blur-3xl scale-110" />

              {/* Main product image */}
              <div ref={imageRef} className="relative z-10 w-full h-full">
                <Image
                  src="/images/hero-product.webp"
                  alt="عطر ذهب الفاخر"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating particles */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-luxe-gold/30"
                  style={{
                    top: `${20 + i * 15}%`,
                    right: `${10 + i * 18}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-luxe-muted tracking-widest font-body">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-luxe-muted/30 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 rounded-full bg-luxe-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
