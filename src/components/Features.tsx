"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "مكونات نادرة",
    description: "نختار أجود المكونات الطبيعية من أبعد أركان العالم لنصنع تجربة عطرية لا تُضاهى.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "صناعة يدوية",
    description: "كل زجاجة تُصنع يدويًا بعناية فائقة على يد خبراء متخصصين في فن العطور الراقية.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "ثبات طويل",
    description: "تقنيات حصرية تمنح عطورنا ثباتًا استثنائيًا يدوم أكثر من ٤٨ ساعة بكل ثقة.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "تصميم فاخر",
    description: "تصاميم حصرية تجمع بين الأصالة العربية والأناقة العصرية في كل تفصيلة.",
  },
];

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const triggers: any[] = [];

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const cards = el!.querySelectorAll(".feature-card");
      cards.forEach((card, i) => {
        const tween = gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotateX: 5 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });
    }

    init();

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-luxe-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-luxe-gold/10 to-transparent" data-line-reveal />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-luxe-gold text-sm font-display tracking-wider mb-4 block"
          >
            لماذا نحن مختلفون
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-luxe-white mb-6"
          >
            صُنع بإتقان <span className="text-gold-gradient">لا يُقلَّد</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-20 h-px bg-luxe-gold/40 mx-auto"
          />
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card group relative p-8 lg:p-10 bg-gradient-to-b from-luxe-charcoal/50 to-luxe-black border border-white/[0.04] rounded-sm hover:border-luxe-gold/20 transition-all duration-700"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-luxe-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm" />

              <div className="relative z-10">
                <div className="text-luxe-gold mb-6 group-hover:scale-110 transition-transform duration-500 origin-right">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-luxe-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-luxe-light text-sm leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-luxe-gold/0 group-hover:border-luxe-gold/20 transition-all duration-500 rounded-tl-sm" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-luxe-gold/0 group-hover:border-luxe-gold/20 transition-all duration-500 rounded-br-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
