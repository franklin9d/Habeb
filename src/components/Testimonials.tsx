"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "نورة السلمان",
    role: "مصممة أزياء",
    text: "عطر ذهب غيّر مفهومي عن العطور العربية. الثبات استثنائي والرائحة تتطور بشكل ساحر على مدار اليوم.",
    rating: 5,
  },
  {
    name: "فهد المطيري",
    role: "رجل أعمال",
    text: "أبحث دائمًا عن التميّز في كل شيء، وعطور ذهب تلبي هذا المعيار بامتياز. جودة لا تُضاهى.",
    rating: 5,
  },
  {
    name: "ريم الحربي",
    role: "مدوّنة جمال",
    text: "من أفضل العلامات التجارية العربية في عالم العطور. التغليف فاخر والعطر أفخم.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-luxe-dark overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-luxe-gold/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-luxe-gold/[0.02] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-luxe-gold text-sm font-display tracking-wider mb-4 block"
          >
            آراء عملائنا
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-luxe-white mb-6"
          >
            يقولون عن <span className="text-gold-gradient">ذهب</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-20 h-px bg-luxe-gold/40 mx-auto"
          />
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group relative p-8 lg:p-10 bg-luxe-charcoal/30 border border-white/[0.04] rounded-sm hover:border-luxe-gold/15 transition-all duration-700"
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif text-luxe-gold/10 leading-none mb-4 font-bold">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-luxe-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-luxe-light text-base leading-relaxed mb-8 font-body">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxe-gold/20 to-luxe-gold/5 flex items-center justify-center">
                  <span className="text-luxe-gold font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-luxe-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-luxe-muted font-body">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-l from-luxe-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 opacity-40"
        >
          {["Forbes Middle East", "Vogue Arabia", "GQ Middle East", "Harper's Bazaar"].map(
            (brand, i) => (
              <span
                key={i}
                className="text-sm font-display text-luxe-silver tracking-wider"
              >
                {brand}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
