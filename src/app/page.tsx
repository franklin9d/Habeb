"use client";

import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { Features } from "@/components/Features";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ImageTextSections } from "@/components/ImageTextSections";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useGSAP } from "@/hooks/useGSAP";

export default function Home() {
  useGSAP();

  return (
    <main className="relative">
      <AnnouncementBar />
      <Header />
      <Hero />
      <ScrollShowcase />
      <Features />
      <WhyChooseUs />
      <ImageTextSections />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
