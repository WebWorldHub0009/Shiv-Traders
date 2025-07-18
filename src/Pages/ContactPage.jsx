import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import bgContact from "../assets/images/jar4.jpg"; // ✅ Replace with actual image
import ContactHero from "../Components/ContactHero";

/* -------------------------------------------------
   Contact Config (easy to edit)
-------------------------------------------------- */
const CONTACT_PHONE_DISPLAY = "+91 9211841929";
const CONTACT_PHONE_RAW = "919211841929"; // digits only for tel & WhatsApp
const CONTACT_EMAIL_PRIMARY = "Info@shivtrader.co.in";
const CONTACT_EMAIL_SECONDARY = "Shivtradersdelhi1@gmail.com";
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL_PRIMARY}`;

const CONTACT_ADDRESS_LINES = [
  "Flat No. 15, 3rd Floor",
  "Block A-4, Pocket 1",
  "Rohini Sector 34",
  "North West Delhi, 110042",
  "India",
];

/* -------------------------------------------------
   Social links (update when real profiles available)
-------------------------------------------------- */
const socials = [
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "https://www.facebook.com",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: `https://wa.me/${CONTACT_PHONE_RAW}`,
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: `mailto:${CONTACT_EMAIL_PRIMARY}`,
  },
];

/* -------------------------------------------------
   Component
-------------------------------------------------- */
const ContactPage = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      {/* ✅ Hero Section */}
      <ContactHero />

      {/* ✅ Contact Section */}
      <section
        className="w-full min-h-screen flex flex-col lg:flex-row font-sans mt-16"
        aria-labelledby="shiv-contact-heading"
      >
        {/* ✅ Left Side: Contact Details */}
        <motion.div
          initial={prefersReducedMotion ? {} : { x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 bg-[#FDF8F3] px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between shadow-md rounded-tr-[50px]"
        >
          <div className="flex flex-col justify-between h-full">
            {/* Heading */}
            <div>
              <h1
                id="shiv-contact-heading"
                className="text-4xl sm:text-5xl font-bold text-[#7A1E09] font-heading leading-tight mb-6 inline-block pb-2 border-b-4 border-[#F4B400]"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Get in Touch
              </h1>
              <p
                className="text-lg font-medium text-gray-700 mb-10 font-sans"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Bulk orders? Distribution? Product questions? We’re happy to help.
              </p>

              {/* Contact Details */}
              <div
                className="space-y-8 text-sm sm:text-base text-gray-800 font-sans"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {/* Phone */}
                <div>
                  <h4 className="font-bold text-[#7A1E09] mb-1 flex items-center gap-2">
                    <FaPhoneAlt className="text-[#F4B400]" /> Phone
                  </h4>
                  <a
                    href={`tel:+${CONTACT_PHONE_RAW}`}
                    className="hover:text-[#F4B400] transition"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h4 className="font-bold text-[#7A1E09] mb-1 flex items-center gap-2">
                    <FaEnvelope className="text-[#F4B400]" /> Email
                  </h4>
                  <p>
                    <a
                      href={`mailto:${CONTACT_EMAIL_PRIMARY}`}
                      className="hover:text-[#F4B400] transition break-all"
                    >
                      {CONTACT_EMAIL_PRIMARY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                      className="hover:text-[#F4B400] transition break-all"
                    >
                      {CONTACT_EMAIL_SECONDARY}
                    </a>
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h4 className="font-bold text-[#7A1E09] mb-1 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#F4B400]" /> Address
                  </h4>
                  <address className="not-italic leading-relaxed">
                    {CONTACT_ADDRESS_LINES.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </div>

                {/* Optional: Quick link to map (add your Google Maps link) */}
                {/* <a href="https://maps.google.com/?q=..." target="_blank" rel="noopener noreferrer" className="text-[#F4B400] underline text-sm">Open in Google Maps</a> */}
              </div>
            </div>

            {/* ✅ Social Icons */}
            <div className="mt-12 flex gap-4 text-lg text-gray-600">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-[#F4B400] transition text-2xl"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ✅ Right Side: Contact Form */}
        <motion.div
          initial={prefersReducedMotion ? {} : { y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-md"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
            aria-hidden="true"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#00000085]" />

          {/* Form */}
          <form
            action={CONTACT_FORM_ENDPOINT}
            method="POST"
            className="relative z-10 w-full max-w-lg mx-auto px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3
              className="text-xl font-semibold mb-6 inline-block pb-1 border-b-2 border-[#F4B400]"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Contact Form
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-white/40 p-2 focus:outline-none focus:border-[#F4B400] text-white placeholder-white/60"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-white/40 p-2 focus:outline-none focus:border-[#F4B400] text-white placeholder-white/60"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-white/40 p-2 focus:outline-none focus:border-[#F4B400] text-white placeholder-white/60"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-white/40 p-2 focus:outline-none focus:border-[#F4B400] text-white placeholder-white/60"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-white/40 p-2 focus:outline-none focus:border-[#F4B400] resize-none h-28 text-white placeholder-white/60"
              />
              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 mt-6 px-6 py-3 rounded-full font-semibold
                           bg-gradient-to-r from-[#F4B400] to-[#C47E00]
                           hover:from-[#C47E00] hover:to-[#F4B400]
                           text-white shadow-md transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </div>

            {/* Formsubmit hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Replace below with your production Thank You URL */}
            <input
              type="hidden"
              name="_next"
              value="https://shivtrader.co.in"
            />
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
