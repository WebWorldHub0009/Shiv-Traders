import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaBoxes,
  FaCertificate,
  FaPhoneAlt,
  FaCookieBite,
  FaTruckMoving,
  FaUndoAlt,
  FaUserShield,
  FaFileContract,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Translator from "./Translator";
import VisitorCounter from "./VisitorCounter";
import footerBg from "../assets/images/bg-footer.jpg"; // ✔ background image

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  // Social buttons -> update when real handles ready
  const socials = [
    { Icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com" },
    { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com" },
    { Icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com" },
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/919211841929", // Shiv Traders number
    },
  ];

  // Pack sizes -> programmatic navigate to /products with state
  const packSizes = [
    { label: "200 gm Jar", size: "200gm" },
    { label: "250 gm Jar", size: "250gm" },
    { label: "500 gm Jar", size: "500gm" },
    { label: "1 kg Pack", size: "1kg" },
    { label: "2 kg Family Pack", size: "2kg" },
    { label: "5 kg Value Pack", size: "5kg" },
    { label: "15 kg Bulk Pack", size: "15kg" },
  ];

  const handleSizeClick = (size) => {
    navigate("/products", { state: { size } });
  };

  return (
    <footer
      className="relative text-gray-800 px-6 py-12 pt-24 sm:px-10 lg:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-[#ffffffc4] mix-blend-multiply backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
        {/* About Shiv Traders */}
        <div className="rounded-lg p-6 flex flex-col justify-between ">
          <h3
            className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow font-heading text-[#F4B400]"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            About Shiv Traders
          </h3>
          <p
            className="text-sm leading-relaxed mb-6 text-[#FDF8F3]/90 font-sans"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Shiv Traders (Grace of Cows) brings you **Shuddh Desi Ghee** prepared with
            care, traditional methods, and hygienic handling. We serve homes,
            sweet shops, temples, and bulk buyers who value purity, aroma, and
            trusted quality.
          </p>

          {/* Socials */}
          <div className="flex flex-wrap gap-4 mb-6">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-[#6e000094] p-3 rounded-full text-[#F4B400] hover:bg-[#F4B400] hover:text-[#7A1E09]
                           transition-transform duration-300 hover:scale-110 shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Translator (optional) */}
          <div className="mr-0 sm:mr-14">
            <Translator />
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-6">
          <h3
            className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow font-heading text-[#F4B400]"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Quick Links
          </h3>
          <ul
            className="space-y-3 text-sm font-sans"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaHome className="text-[#C47E00]" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaInfoCircle className="text-[#C47E00]" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaBoxes className="text-[#C47E00]" /> Products
              </Link>
            </li>
            <li>
              <Link
                to="/certificates"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaCertificate className="text-[#C47E00]" /> Certificates
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaPhoneAlt className="text-[#C47E00]" /> Contact
              </Link>
            </li>

            {/* Additional Links */}
            <li>
              <Link
                to="/cookie-policy"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaCookieBite className="text-[#C47E00]" /> Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-policy"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaTruckMoving className="text-[#C47E00]" /> Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                to="/refund-return"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaUndoAlt className="text-[#C47E00]" /> Refund & Return Policy
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaUserShield className="text-[#C47E00]" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="flex items-center gap-2 hover:underline hover:text-[#F4B400] transition"
              >
                <FaFileContract className="text-[#C47E00]" /> Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Available Pack Sizes */}
        <div className="p-6">
          <h3
            className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow font-heading text-[#F4B400]"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Available Pack Sizes
          </h3>
          <ul
            className="space-y-3 text-sm font-sans"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {packSizes.map(({ label, size }) => (
              <li key={size}>
                <button
                  type="button"
                  onClick={() => handleSizeClick(size)}
                  className="w-full text-left hover:underline hover:text-[#F4B400] transition"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="p-6 flex flex-col">
          <h3
            className="text-2xl font-extrabold mb-5 tracking-wide drop-shadow font-heading text-[#F4B400]"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Contact Us
          </h3>
          <ul
            className="space-y-3 text-sm font-sans mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li>
              <a
                href="mailto:Info@shivtrader.co.in"
                className="hover:underline hover:text-[#F4B400] transition"
              >
                Info@shivtrader.co.in
              </a>
            </li>
            <li>
              <a
                href="mailto:Shivtradersdelhi1@gmail.com"
                className="hover:underline hover:text-[#F4B400] transition"
              >
                Shivtradersdelhi1@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919211841929"
                className="hover:underline hover:text-[#F4B400] transition"
              >
                +91 9211841929
              </a>
            </li>
          </ul>

          <address
            className="text-sm leading-relaxed not-italic font-sans text-[#FDF8F3]/90 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <h4
              className="font-semibold text-base text-[#C47E00] mb-1 font-heading"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Address:
            </h4>
            Flat No. 15, 3rd Floor, Block A-4, Pocket 1,<br />
            Rohini Sector 34, North West Delhi,<br />
            110042, India
          </address>

          {/* GST & UDYAM */}
          <div
            className="text-xs font-sans text-[#FDF8F3]/80 space-y-1"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <p>
              <span className="font-semibold text-[#C47E00]">GSTIN:</span>{" "}
              07MHBPK0355G1ZE
            </p>
            <p>
              <span className="font-semibold text-[#C47E00]">UDYAM:</span>{" "}
              ##############
            </p>
          </div>
        </div>
      </div>

      {/* Visitor Counter */}
      <div className="relative z-10 mt-14 text-center text-white">
        <VisitorCounter />
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-10 border-t border-[#F4B400]/50" />

      {/* Footer Bottom */}
      <div className="relative z-10 mt-6 flex flex-col justify-center items-center text-sm font-light tracking-wide text-[#FDF8F3]/90 space-y-1 font-sans"
           style={{ fontFamily: "Inter, sans-serif" }}>
        <span>© {year} Shiv Traders. All rights reserved.</span>
        <a
          href="http://webworldhub.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-[#F4B400] transition cursor-pointer font-semibold"
        >
          Designed & Developed by Web World Hub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
