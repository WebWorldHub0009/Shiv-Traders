import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Icons chosen to match Desi Ghee trust points
import { GiCow } from "react-icons/gi";
import { FaFlask, FaHandshake } from "react-icons/fa";

// TEMP image imports – update paths to real ghee assets
import gheeMain from "../assets/images/jar1.avif";   // was bgMain
// import gheeProcess from "../assets/images/jar2.jpg"; // was bgSmall

/**
 * Why Shiv Traders – Trust Section
 * Scroll-reactive floating secondary image
 * Reuses layout from your original RideAssurance component.
 *
 * NOTE: Keeping the component name RideAssurance to avoid breaking imports.
 * You can rename to WhyShivTraders if you update the import everywhere.
 */
const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax lift for the floating image
  const yMove = useTransform(scrollYProgress, [0, 1], [100, -150]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-6 py-20 md:py-28 bg-[#FDF8F3] overflow-hidden"
    >
      {/* Decorative low-opacity brand circle */}
      <svg
        className="absolute -top-20 -left-20 w-[700px] opacity-5 z-0 hidden lg:block"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="400" fill="#7A1E09" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-24">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-[#7A1E09] font-heading"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Why Shiv Traders Desi Ghee?
          </h2>

          <div className="space-y-8">
            {/* Point 1 */}
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-lg bg-[#7A1E09] text-[#F4B400] text-2xl shadow-md">
                <GiCow />
              </div>
              <div className="text-left">
                <h4
                  className="font-semibold text-lg text-[#7A1E09] font-heading"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Pure Milk. Rich Aroma.
                </h4>
                <p
                  className="text-gray-700 text-sm sm:text-base font-sans"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Sourced from healthy, well‑cared cows; slow cooked for natural
                  color, grain, and flavor that true Desi Ghee lovers expect.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-lg bg-[#F4B400] text-white text-2xl shadow-md">
                <FaFlask />
              </div>
              <div className="text-left">
                <h4
                  className="font-semibold text-lg text-[#7A1E09] font-heading"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Lab Tested & Hygienic
                </h4>
                <p
                  className="text-gray-700 text-sm sm:text-base font-sans"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Batch checks for adulteration and moisture—crafted under clean,
                  monitored conditions so you get trusted quality every time.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-lg bg-[#C47E00] text-white text-2xl shadow-md">
                <FaHandshake />
              </div>
              <div className="text-left">
                <h4
                  className="font-semibold text-lg text-[#7A1E09] font-heading"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Retail & Bulk Supply
                </h4>
                <p
                  className="text-gray-700 text-sm sm:text-base font-sans"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Serving homes, sweet shops, temples, and food businesses. Ask
                  about bulk tins and distributor pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Floating Small Image
          <motion.div
            style={{ y: yMove }}
            className="absolute -left-8 sm:left-0 bottom-0 w-36 sm:w-48 md:w-60 z-10 rounded-xl shadow-xl overflow-hidden ring-4 ring-[#F4B400]/60"
          >
            <img
              src={gheeProcess}
              alt="Traditional Ghee Preparation"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div> */}

          {/* Main Image */}
          <div className="w-[90%] max-w-lg rounded-xl overflow-hidden shadow-2xl ring-8 ring-[#7A1E09]/10">
            <img
              src={gheeMain}
              alt="Pure Desi Ghee Jar"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
