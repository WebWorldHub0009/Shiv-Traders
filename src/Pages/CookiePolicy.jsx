// Pages/CookiePolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <section className="min-h-screen bg-[#FFFDF8] px-6 md:px-20 pt-32 pb-20 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]"
      >
        {/* ✅ Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
          style={{
            background: "linear-gradient(90deg,#F4B400,#C47E00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cookie Policy — Shiv Traders
        </motion.h1>

        {/* ✅ Intro */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At <strong>Shiv Traders</strong>, we use cookies and similar tracking
          technologies to enhance your browsing experience, improve site
          performance, and analyze usage. By using our website, you consent to
          the use of cookies as described in this policy.
        </p>

        {/* ✅ Essential Cookies Section */}
        <h2 className="text-2xl font-semibold text-[#7A1E09] mt-8 mb-3">
          Essential Cookies
        </h2>
        <p className="text-gray-700 mb-4">
          These cookies are crucial for the basic functionality of our website.
          Without them, some services and features may not work as intended.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            <span className="font-semibold text-[#F4B400]">Session Cookies:</span>{" "}
            Maintain your session as you navigate pages or log into your account.
          </li>
          <li>
            <span className="font-semibold text-[#F4B400]">Security Tokens:</span>{" "}
            Help protect against CSRF attacks and ensure secure user interaction.
          </li>
        </ul>

        {/* ✅ Managing Cookies */}
        <h2 className="text-2xl font-semibold text-[#7A1E09] mt-10 mb-3">
          Your Choices
        </h2>
        <p className="text-gray-700 mb-6">
          You can adjust your browser settings to block or delete cookies at any
          time. However, please note that doing so may impact website
          functionality and your overall experience.
        </p>

        {/* ✅ Closing Note */}
        <div className="mt-10 p-4 bg-[#FFF8E7] rounded-lg border-l-4 border-[#F4B400] text-gray-700">
          <p className="text-sm">
            By continuing to browse the <strong>Shiv Traders</strong> website,
            you acknowledge and accept our Cookie Policy. We remain committed to
            safeguarding your privacy and ensuring transparency.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CookiePolicy;
