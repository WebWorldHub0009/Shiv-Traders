import React from "react";
import { FaEye, FaDownload, FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";

// ⬇️ Update these imports to your actual certificate PDF paths
import gst from "../assets/certificate/gst.pdf";
import udyam from "../assets/certificate/udyam.pdf";

import CertificateHero from "../Components/CertificateHero";

/* -------------------------------------------------
   Certificate Data
   Add more items here (FSSAI, Lab Test, Organic, etc.)
-------------------------------------------------- */
const certificates = [
  {
    title: "GST Registration Certificate",
    provider: "Government of India",
    file: gst,
    highlight: "GSTIN: 07MHBPK0355G1ZE",
  },
  {
    title: "Udyam MSME Certificate",
    provider: "Ministry of Micro, Small & Medium Enterprises",
    file: udyam,
    highlight: "UDYAM: ##############",
  },
  // Example placeholder; uncomment when available
  // {
  //   title: "FSSAI License",
  //   provider: "Food Safety & Standards Authority of India",
  //   file: fssaiPdf,
  //   highlight: "FSSAI Lic #: XXXXXXX",
  // },
];

/* -------------------------------------------------
   Component
-------------------------------------------------- */
const Certifications = () => {
  return (
    <>
      <CertificateHero />

      <section
        className="
          relative overflow-hidden
          py-20 px-6 lg:px-20
          bg-[#FDF8F3]
          text-gray-800 font-sans
        "
      >
        {/* Decorative Background Gradient + Shape */}
        <div className="absolute inset-0 pointer-events-none">
          {/* soft maroon wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A1E09]/10 via-transparent to-[#F4B400]/5" />
          {/* gold circle motif */}
          <svg
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] opacity-10"
          >
            <circle cx="400" cy="300" r="280" fill="#F4B400" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#F4B400]/30 text-[#7A1E09] uppercase tracking-wide">
              Official Documents
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#7A1E09] font-heading"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Our Certifications
            </h2>
            <p
              className="text-center max-w-2xl mx-auto text-lg text-gray-700 font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Proof of purity, compliance, and trust. Shiv Traders is registered
              under GST and MSME (Udyam) and provides documents for trade,
              wholesale, and institutional partnerships.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 gap-10">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="
                  group relative
                  bg-white/90 backdrop-blur-sm
                  rounded-xl shadow-md
                  p-6 flex flex-col justify-between
                  transition duration-300 hover:shadow-xl hover:-translate-y-1
                "
              >
                {/* Accent stripe */}
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#F4B400] to-[#C47E00] rounded-l-xl" />

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaCertificate className="text-[#F4B400] text-xl" />
                    <h3 className="text-xl font-bold text-[#7A1E09] font-heading"
                        style={{ fontFamily: 'Merriweather, serif' }}>
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 font-sans">
                    Issued by {cert.provider}
                  </p>
                  {cert.highlight && (
                    <p className="text-sm font-semibold text-[#C47E00] mb-4 font-sans">
                      {cert.highlight}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title}`}
                    className="
                      flex items-center gap-2 px-4 py-2
                      bg-gradient-to-r from-[#F4B400] to-[#C47E00]
                      hover:from-[#C47E00] hover:to-[#F4B400]
                      text-white rounded-md font-semibold
                      transition-transform hover:scale-105 text-sm
                    "
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={cert.file}
                    download
                    aria-label={`Download ${cert.title}`}
                    className="
                      flex items-center gap-2 px-4 py-2
                      border border-[#F4B400] text-[#7A1E09]
                      hover:bg-[#F4B400]/10
                      rounded-md font-semibold transition-transform hover:scale-105 text-sm
                    "
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trade / Verification Note */}
          <div className="mt-16 text-center max-w-3xl mx-auto text-md text-gray-700 leading-relaxed font-sans"
               style={{ fontFamily: "Inter, sans-serif" }}>
            <p>
              Need document copies for regulatory, distribution, or institutional purchase
              verification? We’re happy to help.{" "}
              <Link
                to="/contact"
                className="text-[#F4B400] font-semibold underline hover:text-[#C47E00] transition"
              >
                Contact Shiv Traders
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
