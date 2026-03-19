"use client";

import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import AppShowcase from "@/components/AppShowcase";
import Services from "@/components/Services";
import InstallmentAdvantages from "@/components/InstallmentAdvantages";
import HowItWorks from "@/components/HowItWorks";
import Branches from "@/components/Branches";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  useEffect(() => {
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    };
    initGSAP();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {/* 1. Top Info Bar */}
      <TopBar />
      {/* 2. Sticky Navbar */}
      <Header />
      {/* 3. Premium Hero */}
      <Hero />
      {/* 4. Trust Stats Strip */}
      <TrustStats />
      {/* 5. App/Product Showcase (sticky pinned) */}
      <AppShowcase />
      {/* 6. Categories / Services */}
      <Services />
      {/* 7. Installment Advantages */}
      <InstallmentAdvantages />
      {/* 8. How It Works */}
      <HowItWorks />
      {/* 9. Branches / Coverage */}
      <Branches />
      {/* 10. Testimonials */}
      <Testimonials />
      {/* 11. FAQ */}
      <FAQ />
      {/* 12. App Download CTA */}
      <AppDownloadCTA />
      {/* 13. Contact Section */}
      <Contact />
      {/* 14. Premium Footer */}
      <Footer />
      {/* 15. Mobile Sticky Bottom CTA Bar */}
      <MobileBottomBar />
    </main>
  );
}
