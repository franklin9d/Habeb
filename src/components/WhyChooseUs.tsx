"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const reasons = [
  { number: "٠١", title: "مكونات من مصادر أخلاقية", desc: "نحرص على اختيار كل مكوّن من مصادر مستدامة وأخلاقية تحترم البيئة والإنسان." },
  { number: "٠٢", title: "تركيبات حصرية", desc: "كل عطر يُصاغ بتركيبة فريدة لا تتكرر، مما يجعل كل قطعة أصيلة ومميزة." },
  { number: "٠٣", title: "إرث عربي أصيل", desc: "نستلهم من التراث العربي العريق لنبتكر عطورًا تجمع بين الماضي والمستقبل." },
  { number: "٠٤", title: "ضمان مدى الحياة", desc: "نثق بجودة منتجاتنا لدرجة أننا نقدم ضمانًا مدى الحياة على كل زجاجة." },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const imageEl = imageRef.current;
    const sectionEl = sectionRef.current;
    if (!imageEl || !sectionEl) return;

    let trigger: any;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const tween = gsap.fromTo(
        imageEl!,
        { y: 50, scale: 1.1 },
        {
          y: -50,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionEl!,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      trigger = tween.scrollTrigger;
    }

    init();

    return () => {
      trigger?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="story" className="relative py-32 lg:py-40 bg-luxe-dark overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-luxe-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <div ref={imageRef}>
                <Image
                  src="/images/collection-wide.webp"
                  alt="مجموعة عطور ذهب"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-luxe-charcoal border border-luxe-gold/20 p-6 rounded-sm"
            >
              <div className="text-3xl font-display font-bold text-luxe-gold">٨+</div>
              <div className="text-xs text-luxe-light font-body mt-1">سنوات من الإبداع</div>
            </motion.div>

            {/* Decorative line */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-luxe-gold/15" />
          </div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-luxe-gold text-sm font-display tracking-wider mb-4 block"
            >
              لماذا تختارنا
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-luxe-white mb-8 leading-tight"
            >
              لأن التميّز <br />
              <span className="text-gold-gradient">ليس خيارًا</span>
            </motion.h2>

            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group flex gap-5 p-4 rounded-sm hover:bg-luxe-charcoal/30 transition-colors duration-500"
                >
                  <span className="text-luxe-gold/40 font-display text-lg font-light shrink-0 group-hover:text-luxe-gold transition-colors duration-500">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-luxe-white mb-1 group-hover:text-luxe-gold transition-colors duration-500">
                      {reason.title}
                    </h3>
                    <p className="text-luxe-light text-sm leading-relaxed font-body">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
