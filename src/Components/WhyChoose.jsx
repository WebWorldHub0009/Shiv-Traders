import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,     // Purity / Trust
  FaFlask,         // Lab Tested
  FaMortarPestle,  // Traditional / Handmade vibe
  FaTruckLoading,  // Bulk / Supply
} from "react-icons/fa";
import bgSection from "../assets/images/abbg.avif"; // Use farm/ghee bg

// Shiv Traders Reasons
const reasons = [
  {
    icon: (
      <FaShieldAlt className="text-[#ffcf4c] text-4xl group-hover:rotate-12 transition-transform duration-500" />
    ),
    title: "Purity You Can Trust",
    desc: "No adulterants, no shortcuts—batch‑wise checks help ensure authentic Desi Ghee every time.",
  },
  {
    icon: (
      <FaFlask className="text-[#ffcf4c] text-4xl group-hover:scale-110 transition-transform duration-500" />
    ),
    title: "Lab Tested Quality",
    desc: "Moisture, FFA, and fat content monitored under hygienic conditions for consistent nutrition.",
  },
  {
    icon: (
      <FaMortarPestle className="text-[#ffcf4c] text-4xl group-hover:-rotate-12 transition-transform duration-500" />
    ),
    title: "Traditional Preparation",
    desc: "Slow‑cooked, aroma‑rich Desi Ghee made to preserve flavor, grain, and natural goodness.",
  },
  {
    icon: (
      <FaTruckLoading className="text-[#ffcf4c] text-4xl group-hover:scale-125 transition-transform duration-500" />
    ),
    title: "Retail & Bulk Supply",
    desc: "Serving homes, sweet shops, temples & food businesses—available in multiple pack sizes.",
  },
];

// Motion variants
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <section
      className="relative w-full py-24 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgSection})` }}
    >
      {/* Brand overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7A1E09]/90 via-[#7A1E09]/75 to-[#7A1E09]/60" />

      <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 font-heading"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Why Shiv Traders Desi Ghee?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#FDF8F3]/90 max-w-xl mx-auto text-base md:text-lg mb-12 font-sans"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pure ingredients. Traditional taste. Trusted quality for families, shops, and bulk buyers.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl
                         hover:shadow-2xl transition duration-500 hover:-translate-y-2
                         border-t-4 border-b-4 border-transparent hover:border-[#F4B400]
                         min-h-[260px] flex flex-col justify-start"
            >
              {/* Glow Border */}
              <div className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-[#C47E00] rounded-xl transition-all duration-700" />

              <div className="mb-5 flex justify-center">{item.icon}</div>
              <h4
                className="text-xl font-semibold mb-2 font-heading text-[#ffcf4c]"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm text-[#FDF8F3]/90 font-sans"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
