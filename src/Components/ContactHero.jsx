import React from "react";
import { motion } from "framer-motion";
import contactBg from "../assets/images/contact-hero.avif"; // ✅ Update path if needed

const shimmerText = {
  background: "linear-gradient(90deg, #F4B400, #fff3d1, #F4B400)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s linear infinite",
};

const ContactHero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "919211841929"; // ✅ WhatsApp number without +
    const message = encodeURIComponent("Hello! I would like to know more about your products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
      aria-labelledby="contact-hero-title"
    >
      {/* ✅ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a1e097a] via-[#7a1e094d] to-black z-0"></div>

      {/* ✅ Decorative Floating Blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F4B400]/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F4B400]/20 rounded-full blur-[100px] animate-float"></div>

      {/* ✅ Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        {/* ✅ Heading with shimmer */}
        <h1
          id="contact-hero-title"
          className="text-4xl md:text-6xl font-bold mb-6 tracking-wide"
          style={shimmerText}
        >
          “Your Trust, Our Tradition”
        </h1>

        {/* ✅ Subheading */}
        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-lg md:text-xl text-[#f8f6f2] mb-8 leading-relaxed"
        >
          Have a query or planning a bulk order? Let’s connect and bring authentic taste to your home. Our team is just a message away!
        </motion.p>

        {/* ✅ WhatsApp Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <button
            onClick={openWhatsApp}
            className="inline-block px-10 py-4 font-semibold text-white text-lg rounded-full
                       bg-gradient-to-r from-[#F4B400] to-[#C47E00]
                       shadow-xl hover:from-[#C47E00] hover:to-[#F4B400]
                       transition-all duration-300"
            aria-label="Contact us on WhatsApp"
          >
            Contact Us on WhatsApp
          </button>
        </motion.div>
      </motion.div>

      {/* ✅ Custom Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactHero;
