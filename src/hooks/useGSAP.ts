"use client";

import { useEffect } from "react";

export function useGSAP() {
  useEffect(() => {
    let triggers: any[] = [];

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Reveal animations for elements with data-reveal
      const reveals = document.querySelectorAll("[data-reveal]");
      reveals.forEach((el) => {
        const st = gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
        if (st.scrollTrigger) triggers.push(st.scrollTrigger);
      });

      // Parallax elements
      const parallaxElements = document.querySelectorAll("[data-parallax]");
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax") || "0.3");
        const st = gsap.to(el, {
          y: () => -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        if (st.scrollTrigger) triggers.push(st.scrollTrigger);
      });

      // Image scale reveals
      const imageReveals = document.querySelectorAll("[data-image-reveal]");
      imageReveals.forEach((el) => {
        const st = gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)", scale: 1.2 },
          {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
        if (st.scrollTrigger) triggers.push(st.scrollTrigger);
      });

      // Text line reveals
      const textLines = document.querySelectorAll("[data-text-reveal]");
      textLines.forEach((el, i) => {
        const st = gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
        if (st.scrollTrigger) triggers.push(st.scrollTrigger);
      });

      // Horizontal line animations
      const lines = document.querySelectorAll("[data-line-reveal]");
      lines.forEach((el) => {
        const st = gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
        if (st.scrollTrigger) triggers.push(st.scrollTrigger);
      });
    }

    init();

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);
}
