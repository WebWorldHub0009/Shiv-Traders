import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaUserCircle } from "react-icons/fa";

/**
 * OwnerSection – Shiv Traders (Grace of Cows)
 * Responsive founder message + contact CTA
 */
const OwnerSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FDF8F3] py-20 sm:py-24 px-4 sm:px-8 font-sans"
    >
      {/* Subtle Watermark Heading (hidden on very small screens) */}
      <h1
        className="hidden xs:block absolute top-5 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[15vw] md:text-[10vw]
                   text-[#7A1E09]/5 font-extrabold tracking-widest whitespace-nowrap pointer-events-none select-none
                   z-0 leading-none font-heading"
        style={{ fontFamily: "Merriweather, serif" }}
      >
        Shiv Traders
      </h1>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-60 h-60 rounded-full bg-[#F4B400]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#7A1E09]/10 blur-2xl" />

      {/* Pill Heading */}
      <div className="flex justify-center relative z-10 mb-6 sm:mb-8">
        <div
          className="flex items-center gap-2 bg-[#7A1E09] px-4 py-2 rounded-full shadow text-white font-semibold
                     text-xs sm:text-sm md:text-base uppercase tracking-wide"
        >
          Meet Our Founder
        </div>
      </div>

      {/* Wrapper: Founder + Contact CTA */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Founder Card */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-10 flex flex-col items-center text-center"
        >
          {/* Accent ring */}
          <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#F4B400]/20 blur-2xl" />

          {/* Founder avatar */}
          <FaUserCircle className="text-[#F4B400] text-8xl drop-shadow mb-5" />

          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#7A1E09] mb-4 font-heading"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            A Word from Our Founder
          </h2>

          <p
            className="text-gray-700 text-sm sm:text-base md:text-lg mb-5 leading-relaxed italic max-w-md"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            “We don’t rush ghee. We respect it. Made slow, checked for purity,
            and packed with honesty—if it isn’t good enough for my family, it
            will never reach yours.”
          </p>

          <p className="text-[#7A1E09] font-bold uppercase text-xs sm:text-sm tracking-wide font-heading"
             style={{ fontFamily: "Merriweather, serif" }}>
            — ANIL KUMAR HARIJAN (FOUNDER)
          </p>
        </motion.div>

        {/* Contact / Partner CTA */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#F4B400] to-[#C47E00] shadow-xl"
        >
          <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-sm p-8 sm:p-10 flex flex-col justify-center text-center md:text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7A1E09] mb-4 font-heading"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Let’s Connect
            </h2>
            <p
              className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 max-w-md md:max-w-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Want to stock our Shuddh Desi Ghee, become a distributor, or learn
              more about our traditional process? Reach out—we’re happy to help.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col xs:flex-row justify-center md:justify-start items-center gap-3 sm:gap-4 w-full">
              {/* Phone */}
              <a
                href="tel:+919211841929"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold
                           bg-gradient-to-r from-[#F4B400] to-[#C47E00] text-white hover:opacity-90 hover:scale-105
                           transition-transform text-sm md:text-base whitespace-nowrap shadow-md"
              >
                <FaPhoneAlt className="shrink-0" />
                <span className="whitespace-nowrap">+91 9211841929</span>
              </a>

              {/* Email */}
              <a
                href="mailto:Shivtradersdelhi1@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold
                           bg-[#7A1E09] text-white hover:bg-[#7A1E09]/90 hover:scale-105 transition-transform
                           text-sm md:text-base whitespace-nowrap shadow-md"
              >
                <FaEnvelope className="shrink-0" />
                <span className="whitespace-nowrap">Shivtradersdelhi1@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative blobs bottom */}
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#F4B400]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-0 -right-10 w-40 h-40 rounded-full bg-[#C47E00]/20 blur-2xl" />
    </section>
  );
};

export default OwnerSection;
