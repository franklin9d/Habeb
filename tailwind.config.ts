import type { Config } from "tailwindcss";

/*
 * DESIGN SYSTEM - Habib Al-Saedi Trading Company
 * ================================================
 * Professional measurement system for premium Arabic RTL website
 *
 * CONTAINERS:
 *   max-w-screen-2xl (1536px) - outer wrapper
 *   max-w-7xl (1280px) - content container
 *   max-w-4xl (896px) - narrow content (FAQ, testimonials)
 *   max-w-2xl (672px) - text blocks
 *
 * SECTION SPACING (mobile-first):
 *   Mobile:  py-16 (64px)
 *   Tablet:  py-20 (80px)
 *   Desktop: py-28 (112px)
 *
 * TYPOGRAPHY SCALE (mobile-first):
 *   Hero H1:     text-3xl -> sm:text-4xl -> lg:text-5xl -> xl:text-6xl
 *   Section H2:  text-2xl -> sm:text-3xl -> lg:text-4xl
 *   Card H3:     text-lg  -> sm:text-xl
 *   Body:        text-sm  -> sm:text-base
 *   Small:       text-xs  -> sm:text-sm
 *
 * CARD SYSTEM:
 *   Padding:    p-5 (mobile) -> p-6 (tablet) -> p-8 (desktop)
 *   Radius:     rounded-xl (12px) for cards, rounded-2xl (16px) for large cards
 *   Border:     border border-white/[0.06]
 *
 * BUTTON HEIGHTS:
 *   Primary:    h-12 (48px) mobile, h-14 (56px) desktop - thumb-friendly
 *   Secondary:  h-10 (40px) mobile, h-12 (48px) desktop
 *   Small:      h-9 (36px)
 *
 * ICON SIZING:
 *   Card icons:  w-10 h-10 (40px) or w-12 h-12 (48px)
 *   Inline:      w-5 h-5 (20px)
 *   Small:       w-4 h-4 (16px)
 *
 * IMAGE ASPECT RATIOS:
 *   Hero:        aspect-[3/4] mobile, aspect-[16/9] desktop
 *   Cards:       aspect-[4/3]
 *   Showcase:    aspect-[9/16] mobile (phone mockup)
 *
 * NAVBAR: h-16 (64px) mobile, h-20 (80px) desktop
 * MOBILE BOTTOM BAR: h-16 (64px) + safe-area-inset
 * TOP INFO BAR: h-10 (40px)
 *
 * BREAKPOINTS:
 *   xs:  475px  (large phones)
 *   sm:  640px  (small tablets)
 *   md:  768px  (tablets)
 *   lg:  1024px (small desktop/landscape tablets)
 *   xl:  1280px (desktop)
 *   2xl: 1536px (large desktop)
 *
 * GRID GAPS:
 *   Mobile:  gap-4 (16px)
 *   Tablet:  gap-5 (20px)
 *   Desktop: gap-6 (24px) or gap-8 (32px)
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brand: {
          50: "#f0fdf0",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          green: "#4ADE40",
          "green-light": "#6EF065",
          "green-dark": "#2DB825",
          "green-deep": "#1A8A15",
          dark: "#0A0A0B",
          "dark-2": "#111113",
          "dark-3": "#1A1A1D",
          "dark-4": "#252528",
          "dark-5": "#2E2E32",
          charcoal: "#404045",
          gray: "#6B6B75",
          "gray-light": "#9CA3AF",
          silver: "#D1D5DB",
          white: "#F9FAFB",
          cream: "#F3F4F6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-top": "env(safe-area-inset-top)",
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out",
        "gradient-x": "gradient-x 3s ease infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
