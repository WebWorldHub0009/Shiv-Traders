import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/jar2.jpg";
import img2 from "../assets/images/jar3.jpg";
import img3 from "../assets/images/jar4.jpg";
import img4 from "../assets/images/jar5.jpg";
import img5 from "../assets/images/jar2.jpg";
import img6 from "../assets/images/jar1.avif";

const features = [
  {
    title: "Traditional Bilona Method",
    desc: "Slow-churned in small batches to preserve aroma and nutrients.",
    img: img1,
  },
  {
    title: "Lab-Tested Purity",
    desc: "Every batch undergoes strict quality checks for guaranteed purity.",
    img: img2,
  },
  {
    title: "Bulk & Retail Supply",
    desc: "From homes to businesses—available in multiple pack sizes.",
    img: img3,
  },
  {
    title: "Nutritional Assurance",
    desc: "Rich in essential fats and vitamins for your family’s health.",
    img: img4,
  },
  {
    title: "Premium Aroma",
    desc: "Distinctive flavor that elevates your traditional recipes.",
    img: img5,
  },
  {
    title: "Sealed Freshness",
    desc: "Hygienically packed to maintain quality until it reaches you.",
    img: img6,
  },
];

const ShivTradersFeatures = () => {
  // Split into two rows
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3).reverse();

  return (
    <section className="bg-[#FDF8F3] py-16 px-6 md:px-12 font-sans">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#7A1E09] mb-4"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Everything Your Kitchen Needs for Pure Ghee Goodness
        </h2>
        <p
          className="text-gray-700 text-base md:text-lg"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          From purity checks to traditional churning, our features ensure
          quality you can trust for your family and business.
        </p>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6">
        {firstRow.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7A1E09]/50 flex flex-col justify-end p-6 text-white">
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm md:text-base text-[#FDF8F3]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Row 2 (Reversed) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {secondRow.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7A1E09]/50 flex flex-col justify-end p-6 text-white">
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm md:text-base text-[#FDF8F3]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShivTradersFeatures;
