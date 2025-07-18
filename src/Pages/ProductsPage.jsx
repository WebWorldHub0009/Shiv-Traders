import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWeightHanging,
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

import gheeImg from "../assets/images/box1p.png"; // TODO: swap per SKU when ready
import bgImage from "../assets/images/product-bg.avif"; // background texture
import ProductsHero from "../Components/ProductsHero";

/* -------------------------------------------------
   Product Data (editable)
-------------------------------------------------- */
const productsData = [
  {
    name: "Mini Delight – 200 gm",
    size: "200 gm",
    desc: "Perfect for travel, gifting, or festival prasad portions.",
    img: gheeImg,
    tier: "retail",
  },
  {
    name: "Smart Choice – 250 gm",
    size: "250 gm",
    desc: "Compact jar for small families and daily finishing drizzle.",
    img: gheeImg,
    tier: "retail",
  },
  {
    name: "Daily Essential – 500 gm",
    size: "500 gm",
    desc: "Ideal for regular cooking—roti smear, tadka, sweets.",
    img: gheeImg,
    tier: "retail",
  },
  {
    name: "Family Pack – 1 kg",
    size: "1 kg",
    desc: "Everyday kitchen hero—batch cooking & traditional recipes.",
    img: gheeImg,
    tier: "family",
  },
  {
    name: "Grand Family Pack – 2 kg",
    size: "2 kg",
    desc: "Great for joint families, community kitchens & pooja bhog.",
    img: gheeImg,
    tier: "family",
  },
  {
    name: "Event Special – 5 kg",
    size: "5 kg",
    desc: "House functions, bhandaara food, festive sweet making.",
    img: gheeImg,
    tier: "bulk",
  },
  {
    name: "Restaurant Pack – 10 kg",
    size: "10 kg",
    desc: "Restaurants, halwais & caterers—consistent bulk quality.",
    img: gheeImg,
    tier: "bulk",
  },
  {
    name: "Mega Saver – 15 kg",
    size: "15 kg",
    desc: "Wholesale kitchens, temple langars, bulk buyers—best value.",
    img: gheeImg,
    tier: "bulk",
  },
  {
    name: "Combo Delight Pack",
    size: "Combo",
    desc: "Mixed sizes—gift sets, sampling kits, multi‑use households.",
    img: gheeImg,
    tier: "combo",
  },
];

/* -------------------------------------------------
   Variant map for tier label colors (chip stripe)
-------------------------------------------------- */
const tierColors = {
  retail: "bg-[#F4B400]/20 text-[#7A1E09]",
  family: "bg-[#C47E00]/20 text-[#7A1E09]",
  bulk: "bg-[#7A1E09]/20 text-[#7A1E09]",
  combo: "bg-[#F4B400]/20 text-[#7A1E09]",
};

/* -------------------------------------------------
   Component
-------------------------------------------------- */
const ProductsPage = () => {
  const navigate = useNavigate();

  const products = useMemo(() => productsData, []);

  const goToContact = (size) => {
    navigate("/contact", { state: { size } });
  };

  return (
    <>
      {/* Hero (already brand-styled) */}
      <ProductsHero />

      <div className="relative bg-[#FDF8F3] min-h-screen py-16 px-4 sm:px-8 lg:px-16 overflow-hidden font-sans">
        {/* Background Image Texture */}
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDF8F3]/80 to-[#FDF8F3]" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span
              className="inline-block mb-3 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#F4B400]/30 text-[#7A1E09] uppercase tracking-wide"
            >
              Shiv Traders Desi Ghee
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A1E09] font-heading mb-4"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Our Premium Ghee Collection
            </h1>
            <p
              className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Pure, authentic Shuddh Desi Ghee—available from mini jars to bulk tins.
              Choose a pack and enquire. Distribution & trade welcome!
            </p>
          </div>

          

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => goToContact(product.size)}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Tier chip */}
                <span
                  className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${tierColors[product.tier] || "bg-white/20 text-[#7A1E09]"}`}
                >
                  {product.tier}
                </span>

                {/* Image block (fixed responsive height) */}
                <div className="w-full flex items-center justify-center bg-white p-6 sm:p-8 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="max-h-32 sm:max-h-36 md:max-h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow bg-[#FDF8F3]">
                  <h2
                    className="text-lg sm:text-xl font-bold text-[#7A1E09] mb-1.5 font-heading"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {product.name}
                  </h2>

                  <p
                    className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 flex-grow font-sans"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {product.desc}
                  </p>

                  <div className="mb-3 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#7A1E09]">
                    <FaWeightHanging className="text-[#F4B400] text-sm" />
                    <span>{product.size}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToContact(product.size);
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2
                               bg-gradient-to-r from-[#F4B400] to-[#C47E00] hover:from-[#C47E00] hover:to-[#F4B400]
                               text-white py-2 rounded-md sm:rounded-lg font-semibold shadow
                               text-xs sm:text-sm transition-transform hover:scale-105"
                  >
                    <FaEnvelopeOpenText className="text-sm" />
                    Get Enquiry
                    <FaChevronRight className="opacity-75 text-[10px]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bulk CTA Banner */}
          <div className="mt-20 max-w-5xl mx-auto text-center">
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#F4B400] to-[#C47E00] shadow-lg">
              <div className="rounded-2xl bg-white p-8 sm:p-10">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#7A1E09] mb-3 font-heading"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Need Bulk, Distributor, or Institutional Supply?
                </h3>
                <p
                  className="text-gray-700 max-w-xl mx-auto mb-6 font-sans"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We serve sweet shops, restaurants, caterers, temples, and trade buyers.
                  Ask about wholesale pricing & recurring supply.
                </p>
                <button
                  onClick={() => goToContact("bulk")}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                             bg-[#7A1E09] hover:bg-[#7A1E09]/90 text-white font-semibold shadow
                             text-sm sm:text-base transition-transform hover:scale-105"
                >
                  <FaInfoCircle />
                  Contact Shiv Traders
                </button>
              </div>
            </div>
          </div>
        </div> {/* /wrapper */}
      </div>
    </>
  );
};

export default ProductsPage;
