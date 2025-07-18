import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

// Replace with your actual images
import img1 from "../assets/images/jar1.avif";
import img2 from "../assets/images/jar2.jpg";
import img3 from "../assets/images/jar3.jpg";
import img4 from "../assets/images/jar4.jpg";
import bgImage from "../assets/images/bgnew.avif"; // ✅ Your background image

const defaultFaqs = [
  {
    question: "What makes Shiv Traders Desi Ghee pure?",
    answer:
      "We use carefully sourced milk and follow traditional slow-cook methods. Each batch is checked for adulteration, moisture, and flavor integrity—no cheap blending oils, no artificial flavors.",
  },
  {
    question: "Do you make Cow Ghee, Buffalo Ghee, or A2 Bilona Ghee?",
    answer:
      "We offer multiple variants (availability may vary by region). Cow Ghee is lighter and aromatic; Buffalo Ghee is richer; select batches are made using the Bilona method. Labels clearly mention the type.",
  },
  {
    question: "Are preservatives or colors added?",
    answer:
      "No. Our ghee is 100% natural—no added colors, flavors, or preservatives. Proper storage keeps it stable at room temperature.",
  },
  {
    question: "How should I store Shiv Traders Ghee?",
    answer:
      "Keep it sealed in a cool, dry place away from direct sunlight. Always use a clean, dry spoon. Refrigeration isn’t required unless conditions are extremely hot and humid.",
  },
  {
    question: "What is the shelf life?",
    answer:
      "Unopened jars typically last 9–12 months (check your pack). After opening, use within 6 months for best taste and aroma. Reseal tightly each time.",
  },
];

const WhoWeAre = ({
  images = [img1, img2, img3, img4],
  faqs = defaultFaqs,
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      className="relative py-16 px-4 md:px-10 lg:px-20 font-sans bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-stretch text-black">
        {/* Left: Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 flex-1">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: idx % 2 === 0 ? -2 : 2,
                boxShadow: "0px 12px 24px rgba(0,0,0,0.3)",
              }}
              className="rounded-xl overflow-hidden shadow-md aspect-square bg-white cursor-pointer"
            >
              <img
                src={src}
                alt={`shiv-ghee-grid-${idx}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Right: Who We Are + FAQ */}
        <div className="w-full md:w-1/2 flex-1 space-y-6">
          <span className="bg-[#813b2a] text-white text-sm font-semibold px-3 py-1 rounded-full inline-block">
            Who We Are
          </span>

          <h2
            className="text-3xl sm:text-4xl font-bold leading-snug font-heading"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Pure Desi Ghee with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#703209] to-[#914d39]">
              Tradition &amp; Trust
            </span>
          </h2>

          <p
            className="max-w-lg font-sans text-[#663300]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Shiv Traders brings authentic Desi Ghee prepared with time-tested
            methods and modern hygiene standards. Slow-cooked, purity-checked,
            and delivered fresh to your home or business.
          </p>

          {/* FAQ */}
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-4 text-left text-gray-700 font-medium hover:bg-[#F4B400]/20 transition-colors"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={open}
                  >
                    {item.question}
                    {open ? (
                      <FaMinus className="text-[#5f2c18]" />
                    ) : (
                      <FaPlus className="text-[#5f2c18]" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="px-4 pb-4 text-gray-400 text-sm sm:text-base overflow-hidden leading-relaxed font-sans"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
