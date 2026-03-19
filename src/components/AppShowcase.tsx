"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * AppShowcase - Sticky pinned product/app showcase
 *
 * GSAP ScrollTrigger pinned section:
 *   - Phone mockup stays pinned on left (RTL: right)
 *   - Text content changes on scroll
 *   - Image cross-fades between products
 *
 * Mobile: Simplified vertical stack (no pin for performance)
 * Tablet/Desktop: Full pinned scroll experience
 */

const showcaseItems = [
  {
    image: "/images/split-ac.jpg",
    title: "سبلتات ومكيفات",
    subtitle: "أفضل الماركات العالمية",
    description: "وفّر الراحة لبيتك مع أحدث أنظمة التبريد والتدفئة بأقساط يومية تبدأ من 3,000 دينار",
    badge: "الأكثر طلبا",
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
    title: "توصيل وتركيب",
    subtitle: "لجميع المحافظات",
    description: "نوصل مشترياتك لباب بيتك مجانا مع خدمة تركيب وتشغيل الأجهزة الكبيرة",
    badge: "خدمة مجانية",
  },
];

export default function AppShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    // Only enable pinning on large screens
    if (!isDesktop) return;

    const initScroll = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current || !pinnedRef.current) return;

      const slides = containerRef.current.querySelectorAll(".showcase-slide");
      const images = containerRef.current.querySelectorAll(".showcase-image");
      const total = slides.length;

      // Pin container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${total * 100}%`,
        pin: pinnedRef.current,
        pinSpacing: true,
      });

      // Animate each transition
      slides.forEach((slide, i) => {
        if (i === 0) return;
        const textContent = slide.querySelector(".slide-text");
        const prevSlide = slides[i - 1];
        const prevText = prevSlide?.querySelector(".slide-text");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${(i / total) * 100}% top`,
            end: `${((i + 0.5) / total) * 100}% top`,
            scrub: 1,
          },
        });

        if (prevText) tl.to(prevText, { opacity: 0, y: -30, duration: 0.5 }, 0);
        if (images[i - 1]) tl.to(images[i - 1], { opacity: 0, scale: 1.08, duration: 0.5 }, 0);
        tl.fromTo(images[i], { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5 }, 0.15);
        if (textContent) tl.fromTo(textContent, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 0.25);
      });
    };
    initScroll();
  }, [isDesktop]);

  return (
    <section
      ref={containerRef}
      id="products"
      className="relative"
      style={isDesktop ? { height: `${showcaseItems.length * 100}vh` } : undefined}
    >
      <div className="section-divider" />

      {/* Desktop: Pinned view */}
      <div ref={pinnedRef} className="hidden lg:block w-full h-screen relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Section label */}
        <div className="absolute top-8 right-8 z-30 flex items-center gap-2 text-brand-green text-sm font-bold">
          <span className="w-8 h-px bg-brand-green" />
          منتجاتنا
        </div>

        {/* Images */}
        <div className="absolute inset-0">
          {showcaseItems.map((item, i) => (
            <div
              key={i}
              className="showcase-image absolute inset-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" quality={80} />
              <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/95 via-brand-dark/75 to-brand-dark/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-brand-dark/30" />
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5">
          {showcaseItems.map((_, i) => (
            <div key={i} className="w-1 h-8 rounded-full bg-white/10 overflow-hidden">
              <div className="w-full h-full bg-brand-green rounded-full origin-top" style={{ transform: `scaleY(${i === 0 ? 1 : 0})` }} />
            </div>
          ))}
        </div>

        {/* Text slides */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              {showcaseItems.map((item, i) => (
                <div key={i} className="showcase-slide absolute">
                  <div className="slide-text" style={{ opacity: i === 0 ? 1 : 0 }}>
                    <span className="inline-block bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-4xl xl:text-5xl font-black font-display mb-2">{item.title}</h3>
                    <p className="text-lg text-brand-green font-bold mb-3">{item.subtitle}</p>
                    <p className="text-brand-gray-light text-base leading-relaxed mb-6 max-w-md">{item.description}</p>
                    <a
                      href="tel:6505"
                      className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-dark font-bold px-6 h-12 rounded-xl transition-all duration-300 text-sm"
                    >
                      اطلب الآن
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-brand-gray text-xs flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          استمر بالتمرير
        </div>
      </div>

      {/* Mobile: Card-based layout (no pinning for performance) */}
      <div className="lg:hidden section-padding bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-brand-green text-xs font-bold mb-4">
            <span className="w-6 h-px bg-brand-green" />
            منتجاتنا
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display mb-6">
            أحدث <span className="text-gradient-green">المنتجات</span>
          </h3>

          <div className="space-y-4">
            {showcaseItems.map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-white/5 group"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 left-0 p-4 sm:p-5">
                  <span className="inline-block bg-brand-green/15 border border-brand-green/20 text-brand-green text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2">
                    {item.badge}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-display mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-gray-light leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
