"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const showcaseItems = [
  {
    image: "/images/split-ac.jpg",
    title: "سبلتات ومكيفات",
    subtitle: "أفضل الماركات العالمية",
    description: "وفّر الراحة لبيتك مع أحدث أنظمة التبريد والتدفئة بأقساط يومية تبدأ من 3,000 دينار",
    badge: "الأكثر طلباً",
  },
  {
    image: "/images/smartphones.jpg",
    title: "هواتف ذكية",
    subtitle: "أحدث الإصدارات",
    description: "احصل على هاتف أحلامك مع ضمان سنة ونصف وخدمة توصيل مجانية لباب بيتك",
    badge: "عروض مميزة",
  },
  {
    image: "/images/products.jpg",
    title: "أجهزة إلكترونية",
    subtitle: "تشكيلة متنوعة",
    description: "لابتوبات وشاشات وأجهزة منزلية بأعلى المواصفات والتقنيات الحديثة بالتقسيط",
    badge: "جديد",
  },
  {
    image: "/images/delivery.jpg",
    title: "توصيل مجاني",
    subtitle: "لجميع المحافظات",
    description: "نوصل مشترياتك لباب بيتك مجاناً مع خدمة تركيب وتشغيل الأجهزة",
    badge: "خدمة متميزة",
  },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initScrollShowcase = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current || !pinnedRef.current) return;

      const slides = containerRef.current.querySelectorAll(".showcase-slide");
      const images = containerRef.current.querySelectorAll(".showcase-image");
      const totalSlides = slides.length;

      // Pin the container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalSlides * 100}%`,
        pin: pinnedRef.current,
        pinSpacing: true,
      });

      // Animate each slide
      slides.forEach((slide, i) => {
        if (i === 0) return; // First slide is visible by default

        const textContent = slide.querySelector(".slide-text");
        const prevSlide = slides[i - 1];
        const prevText = prevSlide?.querySelector(".slide-text");

        // Create timeline for each transition
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${(i / totalSlides) * 100}% top`,
            end: `${((i + 0.5) / totalSlides) * 100}% top`,
            scrub: 1,
          },
        });

        // Fade out previous text
        if (prevText) {
          tl.to(prevText, { opacity: 0, y: -40, duration: 0.5 }, 0);
        }

        // Cross-fade images
        if (images[i - 1]) {
          tl.to(images[i - 1], { opacity: 0, scale: 1.1, duration: 0.5 }, 0);
        }
        tl.fromTo(
          images[i],
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5 },
          0.2
        );

        // Fade in new text
        if (textContent) {
          tl.fromTo(
            textContent,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5 },
            0.3
          );
        }
      });
    };

    initScrollShowcase();
  }, []);

  return (
    <section ref={containerRef} id="products" className="relative" style={{ height: `${showcaseItems.length * 100}vh` }}>
      {/* Section header above pinned area */}
      <div className="section-divider" />

      <div ref={pinnedRef} className="w-full h-screen relative overflow-hidden bg-brand-dark">
        {/* Background grid */}
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Section label */}
        <div className="absolute top-8 right-8 z-30 flex items-center gap-2 text-brand-green text-sm font-bold">
          <span className="w-8 h-px bg-brand-green" />
          منتجاتنا
        </div>

        {/* Images Stack */}
        <div className="absolute inset-0">
          {showcaseItems.map((item, i) => (
            <div
              key={i}
              className="showcase-image absolute inset-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/95 via-brand-dark/70 to-brand-dark/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/40" />
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
          {showcaseItems.map((_, i) => (
            <div key={i} className="w-1 h-8 rounded-full bg-brand-dark-4 overflow-hidden">
              <div className="w-full h-full bg-brand-green rounded-full origin-top" style={{ transform: `scaleY(${i === 0 ? 1 : 0})` }} />
            </div>
          ))}
        </div>

        {/* Text Content Slides */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-xl mr-auto lg:mr-0">
              {showcaseItems.map((item, i) => (
                <div
                  key={i}
                  className={`showcase-slide absolute ${i === 0 ? "" : ""}`}
                >
                  <div className="slide-text" style={{ opacity: i === 0 ? 1 : 0 }}>
                    <span className="inline-block bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xl text-brand-green font-bold mb-4">{item.subtitle}</p>
                    <p className="text-brand-gray-light text-lg leading-relaxed mb-8 max-w-md">
                      {item.description}
                    </p>
                    <a
                      href="tel:6505"
                      className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-dark font-bold px-6 py-3 rounded-xl transition-all duration-300"
                    >
                      اطلب الآن
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-brand-gray text-xs flex items-center gap-2">
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          استمر بالتمرير لاستكشاف المنتجات
        </div>
      </div>
    </section>
  );
}
