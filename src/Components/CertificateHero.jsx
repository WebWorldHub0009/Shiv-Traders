import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import certificateBg from "../assets/images/certificate-hero.avif"; // Replace with actual image

// Gold shimmer effect
const shimmerText = {
  background: "linear-gradient(90deg, #F4B400, #FFEFA8, #C47E00, #F4B400)",
  backgroundSize: "250% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shiv-cert-shimmer 4s linear infinite",
};

const CertificateHero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center px-6 font-sans"
      style={{ backgroundImage: `url(${certificateBg})` }}
      aria-label="Shiv Traders Certifications"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000a6] via-[#00000075] to-[#38373698] z-0" />

      {/* Decorative elements */}
      <div className="absolute top-12 left-10 w-32 h-32 bg-[#F4B400]/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#C47E00]/30 rounded-full blur-[100px] animate-float" />

      {/* Main Content */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center text-white"
      >
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#F4B400]/30 uppercase tracking-wider">
          Certified & Verified
        </span>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug tracking-wide font-heading"
          style={shimmerText}
        >
          Certifications That Prove Our Trust
        </h1>

        {/* Subheading */}
        <motion.p
          animate={
            prefersReducedMotion ? {} : { opacity: [0.8, 1, 0.8] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }
          className="text-lg md:text-xl text-[#FDF8F3]/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Every document reflects our commitment to authenticity and quality.
          From GST to MSME compliance, Shiv Traders ensures legal credibility
          and customer trust in every product.
        </motion.p>

        {/* CTA Buttons */}
        
      </motion.div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes shiv-cert-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 250% center; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default CertificateHero;
