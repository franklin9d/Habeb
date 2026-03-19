"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const sections = [
  {
    image: "/images/product-side.webp",
    label: "الابتكار",
    title: "حيث يلتقي العلم بالفن",
    description:
      "نمزج بين أحدث تقنيات استخلاص العطور وبين الذوق الفني الرفيع لنبتكر روائح لم يختبرها العالم من قبل. كل عطر هو رحلة حسّية فريدة.",
    stats: [
      { value: "١٢٠+", label: "مكوّن طبيعي" },
      { value: "٣٦", label: "شهر تطوير" },
    ],
    reverse: false,
  },
  {
    image: "/images/product-top.webp",
    label: "الاستدامة",
    title: "فخامة بضمير",
    description:
      "نؤمن بأن الجمال الحقيقي لا يأتي على حساب كوكبنا. كل خطوة في سلسلة إنتاجنا مصمّمة لتكون صديقة للبيئة دون المساومة على الجودة.",
    stats: [
      { value: "١٠٠%", label: "مصادر أخلاقية" },
      { value: "صفر", label: "اختبار حيواني" },
    ],
    reverse: true,
  },
];

export function ImageTextSections() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const triggers: any[] = [];

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const imageWrappers = el!.querySelectorAll(".parallax-image-wrapper");
      imageWrappers.forEach((wrapper) => {
        const img = wrapper.querySelector("img");
        if (!img) return;
        const tween = gsap.fromTo(
          img,
          { scale: 1.2, y: 30 },
          {
            scale: 1,
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
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
    <section ref={ref} className="relative bg-luxe-black">
      {sections.map((section, idx) => (
        <SectionBlock key={idx} section={section} />
      ))}
    </section>
  );
}

function SectionBlock({
  section,
}: {
  section: (typeof sections)[0];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative ${section.reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="parallax-image-wrapper relative overflow-hidden rounded-sm aspect-[4/5]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxe-black/30 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full border border-luxe-gold/10 rounded-sm" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${section.reverse ? "lg:order-1" : "lg:order-2"}`}
          >
            <span className="text-luxe-gold text-sm font-display tracking-wider mb-4 block">
              {section.label}
            </span>

            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-luxe-white mb-6 leading-tight">
              {section.title}
            </h2>

            <p className="text-luxe-light text-lg leading-relaxed mb-10 font-body max-w-md">
              {section.description}
            </p>

            {/* Stats */}
            <div className="flex gap-10 mb-10">
              {section.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-display font-bold text-luxe-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-luxe-muted font-body">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="w-16 h-px bg-luxe-gold/20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
