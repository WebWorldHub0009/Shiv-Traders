// Pages/RefundPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------
   Brand Colors & Contact Constants
-------------------------------------------------- */
const BRAND_GOLD = "#F4B400";
const BRAND_MAROON = "#7A1E09";

const CONTACT_PHONE_DISPLAY = "+91 9211841929";
const CONTACT_PHONE_RAW = "919211841929";
const CONTACT_EMAIL_PRIMARY = "Shivtradersdelhi1@gmail.com";
const CONTACT_EMAIL_SECONDARY = "Info@shivtrader.co.in";

const CONTACT_ADDRESS_LINES = [
  "Shiv Traders",
  "Flat No. 15, 3rd Floor",
  "Block A-4, Pocket 1",
  "Rohini Sector 34",
  "North West Delhi, 110042",
  "India",
];

/* -------------------------------------------------
   Section Heading Helper
-------------------------------------------------- */
const SectionHeading = ({ children }) => (
  <h2
    className="text-2xl font-semibold mt-10 mb-3 leading-snug font-heading"
    style={{ color: BRAND_MAROON, fontFamily: "Merriweather, serif" }}
  >
    {children}
  </h2>
);

/* -------------------------------------------------
   Refund Policy Component
-------------------------------------------------- */
const RefundPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF8ED] via-[#F9F2E7] to-[#EEDFC9] px-6 md:px-20 pt-32 pb-20 text-gray-900 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]"
      >
        {/* Title */}
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
          Return & Refund Policy — Shiv Traders
        </motion.h1>

        {/* Intro */}
        <p
          className="text-lg text-gray-700 mb-6 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          We value your trust and work hard to ensure every jar or pack of
          <strong> Shuddh Desi Ghee</strong> you receive from <strong>Shiv Traders</strong>
          meets high standards of purity, packing, and freshness. If something isn’t right,
          we’re here to help.
        </p>

        {/* Eligibility Window */}
        <SectionHeading>Return Eligibility Window</SectionHeading>
        <p className="text-gray-700 mb-4">
          Returns are accepted within <strong>7 days of delivery for damaged / incorrect items</strong> and within
          <strong> 30 days for unopened, unused products</strong> in original condition. Please retain outer packaging until your order is checked.
        </p>

        {/* Quick Eligibility List */}
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Damaged / leaked / broken container (report within 48 hours).</li>
          <li>Wrong product, size, or variant shipped.</li>
          <li>Seal intact but return requested (within 30 days; shipping charges may apply).</li>
        </ul>

        {/* How to Initiate */}
        <SectionHeading>How to Initiate a Return or Complaint</SectionHeading>
        <p className="text-gray-700 mb-4">
          Email us or WhatsApp with your <strong>Order ID</strong>, <strong>issue description</strong>, and
          <strong> clear photos / unboxing video</strong> (if damaged). This helps us resolve faster.
        </p>
        <ul className="list-decimal list-inside text-gray-800 space-y-2 mb-6">
          <li>Contact us (email / phone / WhatsApp) within the eligible window.</li>
          <li>Share photos of the product, outer carton, and batch label.</li>
          <li>Wait for return authorization before shipping anything back.</li>
        </ul>

        {/* Return Shipping */}
        <SectionHeading>Return Shipping Responsibility</SectionHeading>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>
            <strong>Our Cost:</strong> Damaged, leaked, expired, or wrong item shipped.
          </li>
          <li>
            <strong>Your Cost:</strong> Unopened item returns due to personal preference or over‑ordering.
          </li>
          <li>Bulk or institutional orders handled case‑by‑case; contact support.</li>
        </ul>

        {/* Inspection */}
        <SectionHeading>Inspection & Approval</SectionHeading>
        <p className="text-gray-700 mb-4">
          Once your return is received, our team inspects condition, seal status, and batch.
          We’ll notify you of approval or rejection by email (allow 3–5 business days after receipt).
        </p>

        {/* Refunds */}
        <SectionHeading>Refund Options</SectionHeading>
        <p className="text-gray-700 mb-4">
          Approved refunds are processed within <strong>7–10 business days</strong> to the original
          payment method. Bank or card provider processing times may vary.
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>Original payment refund (default).</li>
          <li>Store credit / replacement shipment (on request).</li>
          <li>Partial refunds for partial returnable value (case‑based).</li>
        </ul>

        {/* Replacements */}
        <SectionHeading>Replacement Instead of Refund</SectionHeading>
        <p className="text-gray-700 mb-4">
          If you prefer product replacement (same SKU or equivalent value), let us know when
          contacting support. Replacement ships after return approval or evidence review for damaged items.
        </p>

        {/* Non-Returnable Items */}
        <SectionHeading>Non‑Returnable Items</SectionHeading>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>Opened or partially consumed ghee (unless damaged on arrival with proof).</li>
          <li>Items returned without original jar/tin or batch label.</li>
          <li>Products beyond the 30‑day return window.</li>
          <li>Promotional free items, samples, or short‑dated clearance lots (non‑returnable unless damaged).</li>
        </ul>

        {/* Damaged or Wrong Orders */}
        <SectionHeading>Damaged, Leaked, or Wrong Item Received</SectionHeading>
        <p className="text-gray-700 mb-4">
          Report within <strong>48 hours of delivery</strong> with photos / video of the unopened package
          and shipping label. We’ll quickly arrange a replacement or refund.
        </p>

        {/* Contact Section */}
        <SectionHeading>Contact Shiv Traders Support</SectionHeading>
        <div className="bg-[#FFF8E7] border border-[#f3e8d2] p-6 rounded-xl text-gray-800">
          <p className="mb-3 font-semibold" style={{ color: BRAND_MAROON }}>
            Returns • Refunds • Damaged Shipments
          </p>
          <p className="mb-2">
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_PRIMARY}`}
              className="underline hover:text-[#C47E00] break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_PRIMARY}
            </a>
          </p>
          <p className="mb-4">
            Email (Alt):{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
              className="underline hover:text-[#C47E00] break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_SECONDARY}
            </a>
          </p>
          <p className="mb-4">
            Phone / WhatsApp:{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="underline hover:text-[#C47E00]"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          {/* <address className="not-italic text-gray-700 leading-relaxed text-sm">
            {CONTACT_ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address> */}
        </div>
      </motion.div>
    </section>
  );
};

export default RefundPolicy;
