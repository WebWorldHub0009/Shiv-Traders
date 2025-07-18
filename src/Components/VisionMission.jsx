import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { GiCow, GiButter } from "react-icons/gi"; // optional supporting icons

/**
 * Vision & Mission – Shiv Traders (Grace of Cows)
 * Responsive, animated, brand-color UI
 */
const VisionMission = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDF8F3] py-20 px-6 md:px-12 lg:px-20 font-sans">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#F4B400]/20 blur-2xl" />
      <div className="pointer-events-none absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#7A1E09]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-[#C47E00]/10 blur-2xl" />

      {/* Section Heading */}
      <div className="relative max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight text-[#7A1E09] font-heading"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] to-[#C47E00]">
            Vision &amp; Mission
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto font-sans"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Shiv Traders (Grace of Cows) is committed to bringing **Shuddh Desi Ghee**
          to every table—crafted with care, rooted in Indian tradition, and
          trusted for purity.
        </motion.p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Vision */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#F4B400] to-[#C47E00] shadow-xl"
        >
          <div className="h-full w-full rounded-3xl bg-white p-8 md:p-10 text-left flex flex-col">
            {/* Icon Badge */}
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F4B400]/20 text-[#F4B400] text-3xl shadow-inner">
              <FaLightbulb />
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4 text-[#7A1E09] font-heading"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Our Vision
            </h3>

            <p
              className="text-gray-700 leading-relaxed mb-6 font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To be India’s most trusted Desi Ghee brand—celebrated for purity,
              traditional taste, and ethical sourcing that honors the grace of
              our cows.
            </p>

            {/* Supporting Points */}
            <ul
              className="space-y-3 text-sm md:text-base text-gray-700 font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li className="flex items-start gap-2">
                <GiCow className="text-[#F4B400] text-xl mt-0.5" />
                Recognized for caring sourcing from healthy, well-managed dairy partners.
              </li>
              <li className="flex items-start gap-2">
                <GiButter className="text-[#C47E00] text-xl mt-0.5" />
                Known for authentic aroma & grain that define real Desi Ghee.
              </li>
              <li className="flex items-start gap-2">
                <FaBullseye className="text-[#7A1E09] text-lg mt-1" />
                Present in kitchens, sweet shops & temples across India.
              </li>
            </ul>
          </div>
        </motion.article>

        {/* Mission */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          whileHover={{ y: -4 }}
          className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#7A1E09] to-[#C47E00] shadow-xl"
        >
          <div className="h-full w-full rounded-3xl bg-white p-8 md:p-10 text-left flex flex-col">
            {/* Icon Badge */}
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#7A1E09]/15 text-[#7A1E09] text-3xl shadow-inner">
              <FaBullseye />
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4 text-[#7A1E09] font-heading"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Our Mission
            </h3>

            <p
              className="text-gray-700 leading-relaxed mb-6 font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              To deliver pure, nutritious, chemical‑free ghee through transparent
              sourcing, clean production, and pack sizes for every need—from
              homes to bulk buyers.
            </p>

            {/* Supporting Points */}
            <ul
              className="space-y-3 text-sm md:text-base text-gray-700 font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#F4B400]" />
                Traditional slow heating preserves flavor & nutrients.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#C47E00]" />
                Batch‑wise checks for adulteration & moisture levels.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#7A1E09]" />
                Available in jars, family packs & bulk tins for trade partners.
              </li>
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default VisionMission;
