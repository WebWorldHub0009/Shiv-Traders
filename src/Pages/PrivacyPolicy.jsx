// Pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------
   Brand + Contact Constants
-------------------------------------------------- */
const BRAND_GOLD = "#F4B400";
const BRAND_MAROON = "#7A1E09";

const CONTACT_PHONE_DISPLAY = "+91 9211841929";
const CONTACT_PHONE_RAW = "919211841929";
const CONTACT_EMAIL_PRIMARY = "Shivtradersdelhi1@gmail.com";
const CONTACT_EMAIL_SECONDARY = "Info@shivtrader.co.in";

const CONTACT_ADDRESS_LINES = [
  "Flat No. 15, 3rd Floor",
  "Block A-4, Pocket 1",
  "Rohini Sector 34",
  "North West Delhi, 110042",
  "India",
];

// Optional: if you want to display UDYAM later, update here:
const GSTIN = "07MHBPK0355G1ZE";
const UDYAM = "##############"; // update once you have the number

/* -------------------------------------------------
   Reusable Section Heading
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
   Privacy Policy Component
-------------------------------------------------- */
const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-[#FDF8F3] text-gray-900 font-sans pt-32"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Page Wrapper Card */}
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 font-heading tracking-wide"
          style={{
            background: `linear-gradient(90deg,${BRAND_GOLD},#C47E00)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Merriweather, serif",
          }}
        >
          Privacy Policy — Shiv Traders
        </h1>

        {/* Disclaimer */}
        <p className="text-xs sm:text-sm text-gray-500 italic text-center max-w-2xl mx-auto mb-10">
          This Privacy Policy provides general information for Shiv Traders. It is not legal
          advice. Please review with qualified counsel to ensure compliance with applicable law.
        </p>

        {/* Intro */}
        <section className="space-y-6 leading-relaxed text-justify">
          <p>
            This Privacy Policy explains how <strong>Shiv Traders</strong> (“<strong>Shiv Traders</strong>,” “we,” “our,” “us”)
            collects, uses, shares, protects, and processes your personal information when you
            visit our website, enquire about products, place an order, communicate with us by
            phone / email / WhatsApp, or engage in wholesale &amp; distribution discussions.
            Unless otherwise stated, data is processed and stored in India.
          </p>

          <p>
            By using our website or providing information to us, you agree to the practices
            described in this Privacy Policy and our Terms &amp; Conditions. If you do not agree,
            please discontinue use and refrain from submitting personal data.
          </p>
        </section>

        {/* 1. Collection */}
        <SectionHeading>1. Information We Collect</SectionHeading>
        <p>
          The data we collect depends on how you interact with us. It may include:
        </p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Name, phone number, and email address.</li>
          <li>Billing &amp; shipping address, PIN/postal code.</li>
          <li>Business / GST details for trade &amp; wholesale enquiries.</li>
          <li>Order history, cart notes, enquiry submissions.</li>
          <li>
            Payment confirmation details (processed through payment gateways;
            we do <strong>not</strong> store full card data).
          </li>
          <li>
            Technical data: IP, browser type, device info, referral source, cookies,
            and usage analytics used to improve security &amp; performance.
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          Sensitive personal data (if ever required) will only be collected with explicit consent.
        </p>

        {/* 2. Usage */}
        <SectionHeading>2. How We Use Your Information</SectionHeading>
        <p>We process personal data to:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Process, pack, and deliver your orders.</li>
          <li>Respond to questions, complaints, and trade enquiries.</li>
          <li>Verify business identity for reseller / distributor onboarding.</li>
          <li>Send order updates, dispatch and tracking alerts.</li>
          <li>Improve our website, product quality, and user experience.</li>
          <li>Send limited marketing communications (opt‑out available).</li>
          <li>Prevent fraud, abuse, or unauthorized use.</li>
          <li>Comply with tax, legal, and regulatory requirements.</li>
        </ul>

        {/* 3. Sharing */}
        <SectionHeading>3. How &amp; When We Share Data</SectionHeading>
        <p>We do not sell personal data. We may share information only as needed:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Courier &amp; logistics providers (for delivery).</li>
          <li>Payment gateways and banks (transaction settlement).</li>
          <li>IT / hosting / email service providers.</li>
          <li>Professional advisors (legal, tax, compliance).</li>
          <li>Government or regulators when required under law.</li>
        </ul>
        <p className="text-sm text-gray-600">
          Promotional messaging is sent per consent or legitimate interest; unsubscribe anytime.
        </p>

        {/* 4. Security */}
        <SectionHeading>4. Data Security</SectionHeading>
        <p>
          We use reasonable technical and organizational safeguards (restricted access,
          password control, secure transmission, trusted providers) to help protect your
          information. No system is 100% secure. Please safeguard OTPs, emails, and device access.
          Report suspicious activity immediately.
        </p>

        {/* 5. Retention */}
        <SectionHeading>5. Data Retention &amp; Deletion</SectionHeading>
        <p>
          We retain data only as long as needed for orders, accounting, legal compliance,
          and business records. You may request deletion of certain data; some records
          (e.g., tax invoices) must be retained under Indian law. Data may be anonymized
          for analytics after deletion.
        </p>

        {/* 6. Your Rights */}
        <SectionHeading>6. Your Rights &amp; Choices</SectionHeading>
        <p>
          Subject to applicable law, you may request access, correction, update,
          or deletion of personal data. To exercise these rights, email us from
          your registered email ID with the subject: <em>“Privacy Request – Shiv Traders.”</em>
        </p>

        {/* 7. Consent */}
        <SectionHeading>7. Consent &amp; Withdrawal</SectionHeading>
        <p>
          By using our site or submitting data, you consent to our collection &amp; use of it.
          Where consent is required (e.g., marketing), you may withdraw at any time. Some
          services (order processing) may not be available without essential data.
        </p>

        {/* 8. Cookies */}
        <SectionHeading>8. Cookies &amp; Tracking Technologies</SectionHeading>
        <p>
          We use cookies to maintain sessions, remember preferences, and monitor site analytics.
          You can disable cookies in your browser; some website functions may not work correctly.
          See our <a href="/cookie-policy" className="underline" style={{ color: BRAND_GOLD }}>Cookie Policy</a>.
        </p>

        {/* 9. Policy Updates */}
        <SectionHeading>9. Policy Changes</SectionHeading>
        <p>
          We may update this Privacy Policy periodically. Changes will appear on this page
          with an updated “Last Updated” date. Continued use after changes indicates acceptance.
        </p>

        {/* 10. Contact / Grievance */}
        <SectionHeading>10. Contact &amp; Grievance Redressal</SectionHeading>
        <div
          className="p-6 rounded-md border mb-6"
          style={{ borderColor: BRAND_GOLD, backgroundColor: "#FFF8E7" }}
        >
          <p><strong>Name:</strong> Anil Kumar Harijan</p>
          <p><strong>Designation:</strong> Founder / Grievance Contact</p>
          <p><strong>Company:</strong> Shiv Traders</p>
          <p className="mt-2">
            <strong>Address:</strong><br />
            {CONTACT_ADDRESS_LINES.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </p>
          <p className="mt-3">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_PRIMARY}`}
              className="underline break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_PRIMARY}
            </a>
          </p>
          <p>
            <strong>Alt Email:</strong>{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
              className="underline break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_SECONDARY}
            </a>
          </p>
          <p className="mt-2">
            <strong>Contact:</strong>{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="underline"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2">
            <strong>Working Hours:</strong> Monday – Saturday (9:00 AM – 6:00 PM IST)
          </p>
        </div>

        {/* Regulatory IDs */}
        <div className="mt-8 text-sm text-gray-700">
          <p>
            <strong style={{ color: BRAND_GOLD }}>GSTIN:</strong> {GSTIN}
          </p>
          
        </div>

        {/* Last Updated */}
        <p className="mt-10 text-xs text-gray-500 text-center">
          Last Updated: {lastUpdated}
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
