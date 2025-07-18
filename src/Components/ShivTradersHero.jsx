import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/aboutbg.jpg";          // swap with real ghee hero when ready
import hero2 from "../assets/images/contact-hero.avif";    // bilona / churning
import hero3 from "../assets/images/product-hero.avif";    // packaging / cows

// Slides content for Shiv Traders – Desi Ghee
const slides = [
  {
    image: hero1,
    title: "Shuddh Desi Ghee Crafted With Care",
    desc: "From healthy indigenous cows to slow-cooked golden ghee—taste purity in every spoonful from Shiv Traders.",
  },
  {
    image: hero2,
    title: "Traditional Bilona Goodness, Modern Hygiene",
    desc: "We follow time‑honored methods and strict quality checks so your family gets authentic aroma, rich flavor, and trusted nutrition.",
  },
  {
    image: hero3,
    title: "Grace of Cows. Trusted by Homes & Businesses.",
    desc: "Supplying premium Desi Ghee to households, sweet shops, temples, and bulk buyers across regions—ask about wholesale packs.",
  },
];

export default function ShivTradersHero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(true);
      }, 200);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: animating ? 1.1 : 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Brand overlay tint (maroon wash fading to light cream) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#7A1E09]/80 via-[#7A1E09]/40 to-[#FDF8F3]/0" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 md:px-16">
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}x
          className="text-4xl md:text-6xl font-sans max-w-5xl leading-tight tracking-tight text-white drop-shadow-[0_2px_6px_rgba(122,30,9,0.9)]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-3xl text-lg md:text-xl font-light leading-relaxed text-white drop-shadow-[0_1px_4px_rgba(122,30,9,0.95)]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {slides[current].desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          {/* Primary CTA (matches navbar Order Now) */}
          <Link to="/products">
            <button
              className="px-8 py-3 text-md md:text-lg font-semibold rounded-full uppercase tracking-wide transition-all duration-300
              bg-gradient-to-r from-[#F4B400] to-[#C47E00] text-white shadow-[0_4px_18px_rgba(196,126,0,0.6)]
              hover:from-[#C47E00] hover:to-[#F4B400] hover:scale-105 hover:shadow-[0_8px_28px_rgba(244,180,0,0.75)]"
            >
              Explore Our Ghee
            </button>
          </Link>

          {/*
          // Optional secondary CTA for wholesale/bulk — uncomment when needed
          <Link to="/contact">
            <button
              className="px-8 py-3 text-md md:text-lg font-semibold rounded-full uppercase tracking-wide transition-all duration-300
              border border-[#F4B400] text-white hover:bg-[#F4B400]/20 hover:scale-105"
            >
              Bulk / Wholesale Enquiry
            </button>
          </Link>
          */}
        </motion.div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full ring-2 ring-transparent transition-all duration-300 ${
                current === i
                  ? "bg-[#F4B400] scale-125 shadow-[0_0_8px_rgba(244,180,0,0.9)] ring-[#C47E00]/60"
                  : "bg-[#7A1E09]/40 hover:bg-[#F4B400] hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
