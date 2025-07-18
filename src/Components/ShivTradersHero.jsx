import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/aboutbg.jpg";
import hero2 from "../assets/images/contact-hero.avif";
import hero3 from "../assets/images/product-hero.avif";

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

  // Auto-slide
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
    <section className="relative w-full h-screen sm:h-[70vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* ✅ Responsive Image Handling */}
          <img
            src={slides[current].image}
            alt="Ghee Slide"
            className="w-full h-full object-cover sm:object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#000000a6] via-[#7a1e0946] to-[#7a1e0998]" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 md:px-16">
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-[0_2px_6px_rgba(122,30,9,0.9)]"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white font-light leading-relaxed"
        >
          {slides[current].desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-4 justify-center"
        >
          <Link to="/products">
            <button
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#F4B400] to-[#C47E00] text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all"
            >
              Explore Our Ghee
            </button>
          </Link>
        </motion.div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === i
                  ? "bg-[#F4B400] scale-125 shadow"
                  : "bg-[#7A1E09]/40 hover:bg-[#F4B400]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
