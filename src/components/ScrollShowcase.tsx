"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const showcaseSteps = [
  {
    image: "/images/hero-product.webp",
    title: "جوهر الأناقة",
    subtitle: "تركيبة فريدة",
    description: "صُنع من أندر مكونات العطور في العالم، كل قطرة تحكي قصة من التميّز والفخامة المطلقة.",
    detail: "مكونات نادرة من ٧ قارات",
  },
  {
    image: "/images/product-side.webp",
    title: "تصميم لا يُنسى",
    subtitle: "فن التفاصيل",
    description: "زجاجة مصمّمة يدويًا بأيدي أمهر الحرفيين، كل زاوية تعكس التراث والحداثة في آنٍ واحد.",
    detail: "تصميم يدوي حصري",
  },
  {
    image: "/images/product-detail.webp",
    title: "لمسة ذهبية",
    subtitle: "إتقان الصنعة",
    description: "تفاصيل مطلية بالذهب عيار ٢٤ قيراط، تنهي كل زجاجة بلمسة ملكية لا مثيل لها.",
    detail: "ذهب عيار ٢٤ قيراط",
  },
  {
    image: "/images/product-top.webp",
    title: "عبير الخلود",
    subtitle: "ثبات استثنائي",
    description: "تقنية حصرية تضمن ثبات العطر لأكثر من ٤٨ ساعة، ليرافقك في كل لحظة مميزة.",
    detail: "ثبات يتجاوز ٤٨ ساعة",
  },
];

export function ScrollShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const triggersRef = useRef<any[]>([]);

  // Setup scroll triggers
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const containerEl = containerRef.current;
    if (!sectionEl || !containerEl) return;

    let pinTrigger: any;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const steps = containerEl!.querySelectorAll(".showcase-step");

      // Pin the section
      pinTrigger = ScrollTrigger.create({
        trigger: sectionEl!,
        start: "top top",
        end: () => `+=${window.innerHeight * showcaseSteps.length}`,
        pin: true,
        pinSpacing: true,
      });

      // For each step, create scroll triggers
      const stepTriggers: any[] = [];
      steps.forEach((_, i) => {
        stepTriggers.push(
          ScrollTrigger.create({
            trigger: sectionEl!,
            start: () => `top+=${window.innerHeight * i} top`,
            end: () => `top+=${window.innerHeight * (i + 1)} top`,
            onEnter: () => setActiveStep(i),
            onEnterBack: () => setActiveStep(i),
          })
        );
      });

      triggersRef.current = [pinTrigger, ...stepTriggers];
    }

    init();

    return () => {
      triggersRef.current.forEach((t) => t?.kill());
      triggersRef.current = [];
    };
  }, []);

  // Animate image transitions
  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    if (!imageContainer) return;

    async function animate() {
      const { gsap } = await import("gsap");
      const images = imageContainer!.querySelectorAll(".showcase-image");

      images.forEach((img, i) => {
        if (i === activeStep) {
          gsap.to(img, {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        } else {
          gsap.to(img, {
            opacity: 0,
            scale: 0.9,
            rotateY: i < activeStep ? -10 : 10,
            duration: 0.6,
            ease: "power3.out",
          });
        }
      });
    }

    animate();
  }, [activeStep]);

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="relative h-screen bg-luxe-black overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-luxe-gold/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-8">
        {/* Image Side */}
        <div className="flex-1 flex items-center justify-center relative h-full w-full lg:w-1/2">
          <div ref={imageContainerRef} className="relative w-full max-w-md aspect-square">
            {showcaseSteps.map((step, i) => (
              <div
                key={i}
                className="showcase-image absolute inset-0"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  perspective: "1000px",
                }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}

            {/* Decorative ring */}
            <motion.div
              className="absolute inset-[-20px] rounded-full border border-luxe-gold/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[-40px] rounded-full border border-dashed border-luxe-gold/5"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Text Side */}
        <div ref={containerRef} className="flex-1 flex items-center h-full w-full lg:w-1/2">
          <div className="relative w-full">
            {showcaseSteps.map((step, i) => (
              <div
                key={i}
                className="showcase-step absolute inset-0 flex flex-col justify-center transition-all duration-700"
                style={{
                  opacity: activeStep === i ? 1 : 0,
                  transform: `translateY(${activeStep === i ? 0 : activeStep > i ? -30 : 30}px)`,
                  pointerEvents: activeStep === i ? "auto" : "none",
                }}
              >
                <div className="mb-4">
                  <span className="text-luxe-gold/60 text-sm font-display tracking-wider">
                    {String(i + 1).padStart(2, "0")} / {String(showcaseSteps.length).padStart(2, "0")}
                  </span>
                </div>

                <span className="text-luxe-gold text-sm font-display tracking-wider mb-3 block">
                  {step.subtitle}
                </span>

                <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-luxe-white mb-6 leading-tight">
                  {step.title}
                </h2>

                <p className="text-luxe-light text-lg leading-relaxed mb-8 max-w-md font-body">
                  {step.description}
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-px bg-luxe-gold/40" />
                  <span className="text-luxe-gold text-sm font-display">{step.detail}</span>
                </div>

                <a
                  href="#shop"
                  className="btn-premium inline-flex items-center gap-3 px-8 py-3 border border-luxe-gold/30 text-luxe-gold text-sm font-display hover:bg-luxe-gold/10 transition-all duration-500 rounded-sm w-fit"
                >
                  اكتشف التفاصيل
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {showcaseSteps.map((_, i) => (
            <button
              key={i}
              className="relative w-0.5 h-10 bg-luxe-gray/40 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setActiveStep(i)}
              aria-label={`الانتقال للخطوة ${i + 1}`}
            >
              <motion.div
                className="absolute inset-x-0 top-0 bg-luxe-gold rounded-full"
                animate={{ height: activeStep === i ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-luxe-black to-transparent" />
    </section>
  );
}
