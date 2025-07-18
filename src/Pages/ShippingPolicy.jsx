// Pages/ShippingPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const BRAND_GOLD = "#F4B400";
const BRAND_MAROON = "#7A1E09";

const CONTACT_PHONE_DISPLAY = "+91 9211841929";
const CONTACT_PHONE_RAW = "919211841929";
const CONTACT_EMAIL_1 = "Shivtradersdelhi1@gmail.com";
const CONTACT_EMAIL_2 = "Info@shivtrader.co.in";

const CONTACT_ADDRESS_LINES = [
  "Flat No. 15, 3rd Floor",
  "Block A-4, Pocket 1",
  "Rohini Sector 34",
  "North West Delhi, 110042",
  "India",
];

const ShippingPolicy = () => {
  return (
    <section className="min-h-screen bg-[#FDF8F3] px-6 md:px-20 pt-32 pb-20 text-gray-900 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide font-heading"
          style={{
            background: `linear-gradient(90deg,${BRAND_GOLD},#C47E00)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Merriweather, serif",
          }}
        >
          Shipping Policy — Shiv Traders
        </motion.h1>

        {/* Intro */}
        <p
          className="text-lg text-gray-700 mb-6 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Thank you for choosing <strong>Shiv Traders</strong> for your Shuddh Desi Ghee
          needs. We take great care to package and deliver your ghee so it reaches you
          in ideal condition. Please review our shipping policy before placing an order.
        </p>

        {/* Shipping Coverage */}
        <SectionHeading title="Shipping Coverage" />
        <p className="text-gray-700 mb-4">
          We currently ship across <strong>most pin codes in India</strong>. Delivery
          availability is shown at checkout. For bulk, institutional, or international
          supply enquiries, please contact us directly.
        </p>

        {/* Order Processing */}
        <SectionHeading title="Order Processing Time" />
        <p className="text-gray-700 mb-4">
          Orders are typically processed within <strong>1–2 business days</strong> after
          payment confirmation. Orders placed on Sundays or public holidays are processed
          on the next working day.
        </p>

        {/* Estimated Delivery */}
        <SectionHeading title="Estimated Delivery Timelines" />
        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
          <li>Metro Cities: <strong>3–5 business days</strong>.</li>
          <li>Tier‑2 / Tier‑3 Cities & Towns: <strong>5–7 business days</strong>.</li>
          <li>Remote / Interior Locations: <strong>7–10 business days</strong>.</li>
        </ul>
        <p className="text-gray-600 mb-6 text-sm">
          Transit estimates begin after dispatch. Festival seasons and courier disruptions
          may extend timelines.
        </p>

        {/* Packaging & Handling */}
        <SectionHeading title="Packaging & Handling Care" />
        <p className="text-gray-700 mb-4">
          Ghee jars and tins are sealed, cushioned, and packed in corrugated or foam‑lined
          cartons to reduce breakage and leakage risk during transit.
        </p>

        {/* Shipping Charges */}
        <SectionHeading title="Shipping Charges" />
        <p className="text-gray-700 mb-4">
          Shipping is calculated at checkout based on destination, weight, and order value.
          From time to time we offer <strong>free or discounted shipping promotions</strong>.
        </p>

        {/* Tracking */}
        <SectionHeading title="Order Tracking" />
        <p className="text-gray-700 mb-4">
          Once your order ships, you’ll receive a <strong>tracking ID via Email or SMS</strong>.
          Use the link provided to monitor real‑time delivery status.
        </p>

        {/* Failed Delivery */}
        <SectionHeading title="Missed or Failed Delivery" />
        <p className="text-gray-700 mb-4">
          Couriers usually attempt delivery up to 2–3 times. If undelivered due to an incorrect
          address, unreachable phone number, or repeated absence, the shipment may return to us.
          Re‑shipping charges may apply.
        </p>

        {/* Address Changes */}
        <SectionHeading title="Shipping Address Changes" />
        <p className="text-gray-700 mb-4">
          Need to update your address after ordering? Contact us <strong>within 12 hours</strong>
          of placing your order or before dispatch. Post‑dispatch changes depend on courier policy.
        </p>

        {/* Delays */}
        <SectionHeading title="Delays & External Factors" />
        <p className="text-gray-700 mb-4">
          Rare delays may occur due to weather disruptions, regional restrictions, logistics
          congestion, strikes, or holiday backlogs. We will assist in tracking & resolving such
          cases wherever possible.
        </p>

        {/* Bulk & Institutional Shipping */}
        <SectionHeading title="Bulk & Institutional Shipping" />
        <p className="text-gray-700 mb-4">
          We regularly supply to <strong>sweet shops, caterers, temples, restaurants, and
          distributors</strong>. Large orders often ship via freight partners or palletized loads.
          Reach out for location‑based freight quotes and lead times.
        </p>

        {/* Contact Info Card */}
        <div className="mt-12 bg-[#FFF8E7] border border-[#f3e8d2] p-6 rounded-xl">
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: BRAND_GOLD, fontFamily: "Merriweather, serif" }}
          >
            Shipping & Order Support
          </h3>
          <p className="text-gray-800 mb-1">
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_1}`}
              className="underline hover:text-[#C47E00] break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_1}
            </a>
          </p>
          <p className="text-gray-800 mb-4">
            Email (Alt):{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_2}`}
              className="underline hover:text-[#C47E00] break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_2}
            </a>
          </p>
          <p className="text-gray-800 mb-4">
            Phone:{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="underline hover:text-[#C47E00]"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          
        </div>
      </motion.div>
    </section>
  );
};

/* ----------------------------------------------
   Small internal heading component
---------------------------------------------- */
const SectionHeading = ({ title }) => (
  <h2
    className="text-2xl font-semibold mt-10 mb-3 leading-snug font-heading"
    style={{ color: BRAND_MAROON, fontFamily: "Merriweather, serif" }}
  >
    {title}
  </h2>
);

export default ShippingPolicy;
