import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/aboutbg.jpg"; // Replace w/ brand hero background

/* -------------------------------------------------
   Inline shimmer style (gold animated text)
-------------------------------------------------- */
const shimmerText = {
  background: "linear-gradient(90deg, #F4B400, #FFEFA8, #C47E00, #F4B400)",
  backgroundSize: "250% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shiv-shimmer 4s linear infinite",
};

/* -------------------------------------------------
   Quick Stats (optional)
-------------------------------------------------- */
const defaultStats = [
  { label: "Years of Trust", value: "15+" },
  { label: "Pack Sizes", value: "9+" },
  { label: "Happy Buyers", value: "1000+" },
];

const AboutHero = ({ stats = defaultStats, showStats = true }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center px-6 font-sans"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="About Shiv Traders"
    >
      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000a6] via-[#7a1e0946] to-[#7a1e0998] z-0" />

      {/* Decorative Glows */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#F4B400]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#C47E00]/20 blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        {/* Brand Chip */}
        {/* <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#F4B400]/30 uppercase tracking-wide">
          About Shiv Traders
        </span> */}

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wide font-heading"
          style={shimmerText}
        >
          Tradition You Can Taste.
        </h1>

        {/* Subheading */}
        <motion.p
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: [0.85, 1, 0.85] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }
          className="text-lg md:text-xl tracking-wide text-[#FDF8F3]/90 mb-8 leading-relaxed font-sans max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          We craft Shuddh Desi Ghee the traditional way—slow cooked, purity checked,
          and packed fresh. Every jar nourishes like home‑made.
        </motion.p>

        {/* CTAs */}
        <motion.div
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          animate={
            prefersReducedMotion
              ? {}
              : { y: [0, -4, 0] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/products"
            className="inline-block px-8 py-3 rounded-full font-semibold text-sm sm:text-base
                       bg-gradient-to-r from-[#F4B400] to-[#C47E00]
                       hover:from-[#C47E00] hover:to-[#F4B400]
                       text-white shadow-lg transition-transform hover:scale-105"
          >
            Explore Our Products
          </Link>

          <Link
            to="/certificates"
            className="inline-block px-8 py-3 rounded-full font-semibold text-sm sm:text-base
                       bg-transparent border border-[#F4B400] text-[#F4B400]
                       hover:bg-[#F4B400]/20 hover:scale-105 transition-transform"
          >
            View Certificates
          </Link>
        </motion.div>

        {/* Stats */}
        {showStats && stats?.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-white/90">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-[#F4B400] font-heading"
                     style={{ fontFamily: "Merriweather, serif" }}>
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes shiv-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 250% center; }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
