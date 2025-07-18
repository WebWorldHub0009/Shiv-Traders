import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,     // Purity / Trust
  FaFlask,         // Lab Tested
  FaMortarPestle,  // Traditional / Handmade vibe
  FaTruckLoading,  // Bulk / Supply
} from "react-icons/fa";
import bgSection from "../assets/images/abbg.avif"; // farm / ghee bg
import { Link } from "react-router-dom";

/* ----------------------------------------------
   Content
---------------------------------------------- */
const reasons = [
  {
    Icon: FaShieldAlt,
    title: "Purity You Can Trust",
    desc: "No adulterants, no shortcuts—batch-wise checks help ensure authentic Desi Ghee every time.",
  },
  {
    Icon: FaFlask,
    title: "Lab Tested Quality",
    desc: "Moisture, FFA, and fat content monitored under hygienic conditions for consistent nutrition.",
  },
  {
    Icon: FaMortarPestle,
    title: "Traditional Preparation",
    desc: "Slow-cooked, aroma-rich Desi Ghee made to preserve flavor, grain, and natural goodness.",
  },
  {
    Icon: FaTruckLoading,
    title: "Retail & Bulk Supply",
    desc: "Serving homes, sweet shops, temples & food businesses—available in multiple pack sizes.",
  },
];

/* ----------------------------------------------
   Motion variants
---------------------------------------------- */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = ({ showCTA = true, onCTA }) => {
  return (
    <section
      className="relative w-full py-20 sm:py-24 md:py-28 px-6 md:px-16 bg-cover bg-center bg-no-repeat font-sans"
      style={{ backgroundImage: `url(${bgSection})` }}
    >
      {/* Brand overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7A1E09]/95 via-[#7A1E09]/80 to-[#7A1E09]/60" />

      <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
        {/* Section chip */}
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#F4B400]/30 text-white uppercase tracking-wide"
        >
          Why Choose Us
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-heading"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Why Shiv Traders Desi Ghee?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#FDF8F3]/90 max-w-xl mx-auto text-base md:text-lg mb-12 font-sans"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pure ingredients. Traditional taste. Trusted quality for families, shops, and bulk buyers.
        </motion.p>

        {/* Cards grid */}
        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map(({ Icon, title, desc }, index) => (
            <motion.div
              role="listitem"
              key={title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl
                         hover:shadow-2xl transition duration-500 hover:-translate-y-2
                         border-t-4 border-b-4 border-transparent hover:border-[#F4B400]
                         focus-within:border-[#F4B400] focus-within:shadow-2xl
                         min-h-[260px] flex flex-col justify-start"
              tabIndex={0}
            >
              {/* Glow Border */}
              <div className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-[#C47E00] group-focus-within:border-[#C47E00] rounded-xl transition-all duration-700" />

              {/* Icon */}
              <div className="mb-5 flex justify-center text-[#F4B400] text-4xl group-hover:rotate-3 transition-transform duration-500">
                <Icon aria-hidden="true" />
              </div>

              {/* Title */}
              <h4
                className="text-xl font-semibold mb-2 font-heading text-[#F4B400]"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {title}
              </h4>

              {/* Desc */}
              <p
                className="text-sm text-[#FDF8F3]/90 font-sans"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Link to='/about'>
            <button
              type="button"
              onClick={onCTA}
              aria-label="Contact Shiv Traders for bulk or distribution inquiries"
              className="cursor-pointer inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold
                         bg-gradient-to-r from-[#F4B400] to-[#C47E00]
                         hover:from-[#C47E00] hover:to-[#F4B400]
                         text-white shadow-md hover:shadow-xl
                         transition-transform hover:scale-105 text-sm sm:text-base"
            >
              Know More
            </button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
